import { Router, type IRouter } from "express";
import { CreatePaymentBody } from "@workspace/api-zod";
import { logger } from "../lib/logger";
import { sendWhatsApp, buildOrderConfirmation } from "../lib/whatsapp";
import crypto from "crypto";

const router: IRouter = Router();

router.post("/create-payment", async (req, res): Promise<void> => {
  const parsed = CreatePaymentBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid payment request body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const {
    packageName,
    billingPeriod,
    basePrice,
    kdv,
    totalPrice,
    customerName,
    whatsapp,
    email,
    usagePurpose,
    note,
  } = parsed.data;

  const merchantId = process.env.PAYTR_MERCHANT_ID;
  const merchantKey = process.env.PAYTR_MERCHANT_KEY;
  const merchantSalt = process.env.PAYTR_MERCHANT_SALT;
  const callbackUrl = process.env.PAYTR_CALLBACK_URL;
  const successUrl = process.env.PAYTR_SUCCESS_URL;
  const failUrl = process.env.PAYTR_FAIL_URL;

  const hasPayTRCredentials =
    merchantId && merchantKey && merchantSalt && callbackUrl && successUrl && failUrl;

  if (!hasPayTRCredentials) {
    req.log.info(
      { packageName, billingPeriod, totalPrice, customerName, email },
      "PayTR credentials not configured — returning placeholder payment response"
    );

    // Send WhatsApp confirmation in placeholder mode (fire-and-forget)
    void sendWhatsApp(
      whatsapp,
      buildOrderConfirmation({ customerName, packageName, billingPeriod, totalPrice })
    );

    res.json({
      success: true,
      paymentUrl: "/payment-placeholder",
      mode: "placeholder",
      message: "PayTR ödeme bağlantısı burada oluşturulacaktır.",
    });
    return;
  }

  try {
    const orderId = `VDS-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const amountInKurus = Math.round(totalPrice * 100);
    const userIp = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ?? req.socket.remoteAddress ?? "0.0.0.0";
    const currency = "TL";
    const noInstallment = "0";
    const maxInstallment = "0";
    const testMode = "1";

    const basketItems = [
      [packageName, amountInKurus.toString(), "1"],
    ];
    const userBasket = Buffer.from(JSON.stringify(basketItems)).toString("base64");

    const hashStr = `${merchantId}${userIp}${orderId}${email}${amountInKurus}${userBasket}${noInstallment}${maxInstallment}${currency}${testMode}${merchantSalt}`;
    const paytrToken = crypto
      .createHmac("sha256", merchantKey)
      .update(hashStr)
      .digest("base64");

    const paytrParams = new URLSearchParams({
      merchant_id: merchantId,
      user_ip: userIp,
      merchant_oid: orderId,
      email,
      payment_amount: amountInKurus.toString(),
      paytr_token: paytrToken,
      user_basket: userBasket,
      debug_on: "1",
      no_installment: noInstallment,
      max_installment: maxInstallment,
      user_name: customerName,
      user_phone: whatsapp,
      merchant_ok_url: successUrl,
      merchant_fail_url: failUrl,
      timeout_limit: "30",
      currency,
      test_mode: testMode,
    });

    const paytrResponse = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: paytrParams.toString(),
    });

    const paytrData = await paytrResponse.json() as { status: string; token?: string; reason?: string };

    if (paytrData.status !== "success" || !paytrData.token) {
      req.log.error({ paytrData }, "PayTR token request failed");
      res.status(500).json({ error: `PayTR hatası: ${paytrData.reason ?? "Bilinmeyen hata"}` });
      return;
    }

    req.log.info({ orderId, packageName, totalPrice }, "PayTR payment session created");

    // Send WhatsApp confirmation in live mode (fire-and-forget)
    void sendWhatsApp(
      whatsapp,
      buildOrderConfirmation({ customerName, packageName, billingPeriod, totalPrice })
    );

    res.json({
      success: true,
      paymentUrl: `https://www.paytr.com/odeme/guvenli/${paytrData.token}`,
      mode: "live",
      message: null,
    });
  } catch (err) {
    logger.error({ err }, "PayTR payment creation error");
    res.status(500).json({ error: "Ödeme işlemi başlatılırken bir hata oluştu. Lütfen tekrar deneyin." });
  }
});

export default router;
