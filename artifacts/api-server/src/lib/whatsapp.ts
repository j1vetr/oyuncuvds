import { logger } from "./logger";

const WPILETI_ENDPOINT = "https://my.wpileti.com/api/send-message";

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0") && digits.length === 11) {
    return "90" + digits.slice(1);
  }
  if (!digits.startsWith("90") && digits.length === 10) {
    return "90" + digits;
  }
  return digits;
}

export async function sendWhatsApp(phone: string, message: string): Promise<void> {
  const apiKey = process.env.WPILETI_API_KEY;
  if (!apiKey) {
    logger.warn("WPILETI_API_KEY not set, skipping WhatsApp notification");
    return;
  }

  const receiver = normalizePhone(phone);

  try {
    const res = await fetch(WPILETI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "*/*" },
      body: JSON.stringify({ api_key: apiKey, receiver, data: { message } }),
    });

    const body = await res.json().catch(() => null);

    if (!res.ok) {
      logger.warn({ status: res.status, receiver, body }, "WhatsApp send failed");
      return;
    }

    logger.info({ receiver, body }, "WhatsApp notification sent");
  } catch (err) {
    logger.warn({ err, receiver }, "WhatsApp notification error");
  }
}

export function buildOrderConfirmation({
  customerName,
  packageName,
  billingPeriod,
  totalPrice,
}: {
  customerName: string;
  packageName: string;
  billingPeriod: string;
  totalPrice: number;
}): string {
  const period = billingPeriod === "aylik" ? "Aylık" : "Yıllık";
  const formattedTotal = totalPrice.toLocaleString("tr-TR");

  return `Merhaba ${customerName},

Oyuncu VDS siparişiniz başarıyla alındı.

Paket: ${packageName}
Dönem: ${period}
Toplam Tutar: ${formattedTotal} ₺ (KDV dahil)

VDS erişim bilgileriniz (IP adresi ve şifre) 30-60 dakika içinde bu WhatsApp numaranıza iletilecektir.

Bu süreçte aklınıza takılan herhangi bir soru olursa buradan yazabilirsiniz, yardımcı olmaktan memnuniyet duyarız.

Oyuncu VDS
oyuncuvds.com.tr`;
}
