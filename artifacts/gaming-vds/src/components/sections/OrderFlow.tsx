import { useState, useImperativeHandle, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { packages, formatPrice, KDV_RATE, type PackageId, type BillingPeriod } from "@/config/packages";
import { useCreatePayment } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

export interface OrderFlowRef {
  selectPackage: (packageId: string, billing: BillingPeriod) => void;
}

const step2Schema = z.object({
  customerName: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  whatsapp: z.string().min(10, "Geçerli bir WhatsApp numarası girin"),
  email: z.string().email("Geçerli bir e-posta adresi girin"),
  usagePurpose: z.enum(["Knight Online", "Metin2", "Silkroad", "Diğer MMORPG"], {
    errorMap: () => ({ message: "Kullanım amacı seçiniz" }),
  }),
  note: z.string().optional(),
});

type Step2Values = z.infer<typeof step2Schema>;

interface PaymentModalProps {
  message: string;
  onClose: () => void;
}

function PaymentModal({ message, onClose }: PaymentModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] border border-[#3c3c3c] p-10 max-w-lg w-full mx-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-primary" />
          </div>
          <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-4">
            ÖDEME SİSTEMİ
          </h3>
          <p className="text-[#bbbbbb] font-light leading-relaxed mb-8">{message}</p>
          <button
            onClick={onClose}
            className="w-full h-12 bg-primary text-black font-black uppercase tracking-[1.5px] text-sm hover:bg-primary/90 transition-colors"
            data-testid="button-payment-modal-close"
          >
            TAMAM
          </button>
        </div>
      </div>
    </div>
  );
}

interface SuccessProps {
  onReset: () => void;
}

function PaymentSuccess({ onReset }: SuccessProps) {
  const whatsappUrl = `https://wa.me/905000000000?text=${encodeURIComponent("Merhaba, ödeme yaptım. VDS erişim bilgilerimi bekliyorum.")}`;
  return (
    <div className="text-center py-16 px-8" data-testid="section-payment-success">
      <div className="w-20 h-20 bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8">
        <Check size={40} className="text-primary" />
      </div>
      <h2 className="text-[36px] font-black uppercase text-white tracking-tight mb-4">
        ÖDEMENİZ ALINDI
      </h2>
      <p className="text-[#bbbbbb] font-light text-lg leading-relaxed mb-10 max-w-md mx-auto">
        Siparişiniz başarıyla oluşturuldu. VDS erişim bilgileriniz WhatsApp üzerinden tarafınıza iletilecektir.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 px-8 bg-[#25D366] text-white font-black uppercase tracking-[1.5px] text-sm flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
          data-testid="button-success-whatsapp"
        >
          <WhatsAppIcon size={18} />
          WHATSAPP DESTEK İLE GÖRÜŞ
        </a>
        <button
          onClick={onReset}
          className="h-12 px-8 border border-[#3c3c3c] text-[#bbbbbb] font-bold uppercase tracking-[1.5px] text-sm hover:border-white hover:text-white transition-colors"
        >
          YENİ SİPARİŞ
        </button>
      </div>
    </div>
  );
}

interface FailureProps {
  onReset: () => void;
}

function PaymentFailure({ onReset }: FailureProps) {
  const whatsappUrl = `https://wa.me/905000000000?text=${encodeURIComponent("Merhaba, ödeme yapamadım. Yardım almak istiyorum.")}`;
  return (
    <div className="text-center py-16 px-8" data-testid="section-payment-failure">
      <div className="w-20 h-20 bg-destructive/10 border border-destructive/30 flex items-center justify-center mx-auto mb-8">
        <span className="text-destructive text-4xl font-black">!</span>
      </div>
      <h2 className="text-[36px] font-black uppercase text-white tracking-tight mb-4">
        ÖDEME TAMAMLANAMADI
      </h2>
      <p className="text-[#bbbbbb] font-light text-lg leading-relaxed mb-10 max-w-md mx-auto">
        Ödemeniz tamamlanamadı. Tekrar deneyebilir veya WhatsApp destek ekibimizle iletişime geçebilirsiniz.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onReset}
          className="h-12 px-8 bg-primary text-black font-black uppercase tracking-[1.5px] text-sm hover:bg-primary/90 transition-colors"
          data-testid="button-failure-retry"
        >
          TEKRAR DENE
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 px-8 bg-[#25D366] text-white font-black uppercase tracking-[1.5px] text-sm flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
          data-testid="button-failure-whatsapp"
        >
          <WhatsAppIcon size={18} />
          WHATSAPP DESTEK
        </a>
      </div>
    </div>
  );
}

function StepIndicator({ current }: { current: number }) {
  const steps = ["Paket Seçimi", "Sipariş Bilgileri", "Sipariş Özeti"];
  return (
    <div className="flex items-center mb-10">
      {steps.map((label, idx) => (
        <div key={idx} className="flex items-center flex-1">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 flex items-center justify-center font-black text-sm transition-colors ${
                idx < current
                  ? "bg-primary/20 border border-primary text-primary"
                  : idx === current
                  ? "bg-primary text-black"
                  : "bg-[#262626] border border-[#3c3c3c] text-[#7e7e7e]"
              }`}
            >
              {idx < current ? <Check size={14} /> : idx + 1}
            </div>
            <span
              className={`hidden sm:block text-xs font-bold uppercase tracking-[1px] ${
                idx === current ? "text-white" : "text-[#7e7e7e]"
              }`}
            >
              {label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div className={`flex-1 h-px mx-4 ${idx < current ? "bg-primary/40" : "bg-[#3c3c3c]"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

export const OrderFlow = forwardRef<OrderFlowRef>((_, ref) => {
  const [step, setStep] = useState(0);
  const [selectedPkgId, setSelectedPkgId] = useState<PackageId>("baslangic");
  const [billing, setBilling] = useState<BillingPeriod>("aylik");
  const [paymentState, setPaymentState] = useState<"idle" | "success" | "failure">("idle");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { toast } = useToast();
  const createPayment = useCreatePayment();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Step2Values>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      customerName: "",
      whatsapp: "",
      email: "",
      usagePurpose: "Knight Online",
      note: "",
    },
  });

  useImperativeHandle(ref, () => ({
    selectPackage: (packageId: string, b: BillingPeriod) => {
      setSelectedPkgId(packageId as PackageId);
      setBilling(b);
      setStep(0);
      setPaymentState("idle");
    },
  }));

  const selectedPackage = packages.find((p) => p.id === selectedPkgId)!;
  const basePrice = billing === "aylik" ? selectedPackage.monthly : selectedPackage.yearly;
  const kdvAmount = Math.round(basePrice * KDV_RATE);
  const totalPrice = basePrice + kdvAmount;

  const formValues = getValues();

  const whatsappOrderUrl = () => {
    const msg = `Merhaba, Oyun VDS siparişi oluşturmak istiyorum. Paket: ${selectedPackage.name}, Dönem: ${billing === "aylik" ? "Aylık" : "Yıllık"}, Ad Soyad: ${formValues.customerName || "—"}, Telefon: ${formValues.whatsapp || "—"}`;
    return `https://wa.me/905000000000?text=${encodeURIComponent(msg)}`;
  };

  const handlePayment = async () => {
    const vals = getValues();
    createPayment.mutate(
      {
        data: {
          packageName: selectedPackage.name,
          billingPeriod: billing,
          basePrice,
          kdv: kdvAmount,
          totalPrice,
          customerName: vals.customerName,
          whatsapp: vals.whatsapp,
          email: vals.email,
          usagePurpose: vals.usagePurpose,
          note: vals.note ?? null,
        },
      },
      {
        onSuccess: (result) => {
          if (result.mode === "placeholder") {
            setModalMessage(result.message ?? "PayTR ödeme bağlantısı burada oluşturulacaktır.");
            setShowModal(true);
          } else {
            window.location.href = result.paymentUrl;
          }
        },
        onError: () => {
          toast({
            title: "Hata",
            description: "Ödeme işlemi başlatılırken bir hata oluştu. Lütfen tekrar deneyin.",
            variant: "destructive",
          });
        },
      }
    );
  };

  const handleReset = () => {
    setStep(0);
    setPaymentState("idle");
    setSelectedPkgId("baslangic");
    setBilling("aylik");
  };

  if (paymentState === "success") return (
    <section id="siparis" className="w-full bg-black py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-[#1a1a1a] border border-[#3c3c3c]">
          <PaymentSuccess onReset={handleReset} />
        </div>
      </div>
    </section>
  );

  if (paymentState === "failure") return (
    <section id="siparis" className="w-full bg-black py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-[#1a1a1a] border border-[#3c3c3c]">
          <PaymentFailure onReset={handleReset} />
        </div>
      </div>
    </section>
  );

  return (
    <>
      {showModal && (
        <PaymentModal
          message={modalMessage}
          onClose={() => {
            setShowModal(false);
            setPaymentState("success");
          }}
        />
      )}

      <section id="siparis" className="w-full bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[56px] font-black uppercase text-white tracking-tight mb-4">
              SİPARİŞ VER
            </h2>
            <p className="text-[#bbbbbb] font-light text-lg max-w-2xl mx-auto">
              3 adımda sipariş oluştur, VDS erişimini WhatsApp üzerinden al.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#1a1a1a] border border-primary/30 p-8 md:p-12">
            <StepIndicator current={step} />

            {/* STEP 1 — Package Selection */}
            {step === 0 && (
              <div data-testid="section-step-1">
                <h3 className="text-lg font-black uppercase text-white tracking-[1px] mb-6">
                  PAKET SEÇİMİ
                </h3>

                {/* Billing toggle */}
                <div className="mb-8">
                  <label className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e] block mb-3">
                    FATURALANDIRMA DÖNEMİ
                  </label>
                  <div className="inline-flex border border-[#3c3c3c]">
                    <button
                      onClick={() => setBilling("aylik")}
                      className={`h-10 px-6 font-bold uppercase tracking-[1.5px] text-sm transition-colors ${billing === "aylik" ? "bg-primary text-black" : "text-[#bbbbbb] hover:text-white"}`}
                      data-testid="toggle-order-billing-monthly"
                    >
                      Aylık
                    </button>
                    <button
                      onClick={() => setBilling("yillik")}
                      className={`h-10 px-6 font-bold uppercase tracking-[1.5px] text-sm transition-colors ${billing === "yillik" ? "bg-primary text-black" : "text-[#bbbbbb] hover:text-white"}`}
                      data-testid="toggle-order-billing-yearly"
                    >
                      Yıllık
                    </button>
                  </div>
                  {billing === "yillik" && (
                    <div className="mt-3">
                      <span className="bg-[#0d3b85] text-primary text-xs font-bold uppercase tracking-[1.5px] px-3 py-1">
                        YILLIK ALIMDA 2 AY BİZDEN
                      </span>
                    </div>
                  )}
                </div>

                {/* Package cards */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {packages.map((pkg) => {
                    const price = billing === "aylik" ? pkg.monthly : pkg.yearly;
                    const isSelected = selectedPkgId === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        onClick={() => setSelectedPkgId(pkg.id as PackageId)}
                        className={`text-left p-6 border transition-colors ${
                          isSelected
                            ? "border-primary bg-primary/5"
                            : "border-[#3c3c3c] bg-[#262626] hover:border-[#7e7e7e]"
                        }`}
                        data-testid={`radio-package-${pkg.id}`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-sm font-black uppercase text-white tracking-tight">{pkg.name}</span>
                          <div
                            className={`w-4 h-4 border flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected ? "border-primary bg-primary" : "border-[#3c3c3c]"
                            }`}
                          >
                            {isSelected && <Check size={10} className="text-black" />}
                          </div>
                        </div>
                        <div className="text-2xl font-black text-white mb-1">
                          {formatPrice(price)} TL
                        </div>
                        <div className="text-xs text-[#7e7e7e] font-light">
                          + KDV / {billing === "aylik" ? "Aylık" : "Yıllık"}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="w-full h-12 bg-primary text-black font-black uppercase tracking-[1.5px] text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  data-testid="button-step1-next"
                >
                  İLERİ
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* STEP 2 — Order Details */}
            {step === 1 && (
              <form
                onSubmit={handleSubmit(() => setStep(2))}
                data-testid="section-step-2"
              >
                <h3 className="text-lg font-black uppercase text-white tracking-[1px] mb-6">
                  SİPARİŞ BİLGİLERİ
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e] block mb-2">
                      AD SOYAD *
                    </label>
                    <input
                      {...register("customerName")}
                      type="text"
                      placeholder="Adınız Soyadınız"
                      className="w-full h-12 bg-[#262626] border border-[#3c3c3c] px-4 text-white font-light text-sm placeholder:text-[#7e7e7e] focus:outline-none focus:border-primary transition-colors"
                      data-testid="input-customer-name"
                    />
                    {errors.customerName && (
                      <p className="text-destructive text-xs mt-1">{errors.customerName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e] block mb-2">
                      WHATSAPP NUMARASI *
                    </label>
                    <input
                      {...register("whatsapp")}
                      type="tel"
                      placeholder="+90 5XX XXX XX XX"
                      className="w-full h-12 bg-[#262626] border border-[#3c3c3c] px-4 text-white font-light text-sm placeholder:text-[#7e7e7e] focus:outline-none focus:border-primary transition-colors"
                      data-testid="input-whatsapp"
                    />
                    {errors.whatsapp && (
                      <p className="text-destructive text-xs mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e] block mb-2">
                      E-POSTA ADRESİ *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="ornek@email.com"
                      className="w-full h-12 bg-[#262626] border border-[#3c3c3c] px-4 text-white font-light text-sm placeholder:text-[#7e7e7e] focus:outline-none focus:border-primary transition-colors"
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e] block mb-2">
                      KULLANIM AMACI *
                    </label>
                    <select
                      {...register("usagePurpose")}
                      className="w-full h-12 bg-[#262626] border border-[#3c3c3c] px-4 text-white font-light text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                      data-testid="select-usage-purpose"
                    >
                      <option value="Knight Online">Knight Online</option>
                      <option value="Metin2">Metin2</option>
                      <option value="Silkroad">Silkroad</option>
                      <option value="Diğer MMORPG">Diğer MMORPG</option>
                    </select>
                    {errors.usagePurpose && (
                      <p className="text-destructive text-xs mt-1">{errors.usagePurpose.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e] block mb-2">
                      NOT / EK TALEP
                    </label>
                    <textarea
                      {...register("note")}
                      rows={3}
                      placeholder="Ek talebiniz varsa buraya yazabilirsiniz..."
                      className="w-full bg-[#262626] border border-[#3c3c3c] px-4 py-3 text-white font-light text-sm placeholder:text-[#7e7e7e] focus:outline-none focus:border-primary transition-colors resize-none"
                      data-testid="textarea-note"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="h-12 px-6 border border-[#3c3c3c] text-[#bbbbbb] font-bold uppercase tracking-[1.5px] text-sm flex items-center gap-2 hover:border-white hover:text-white transition-colors"
                    data-testid="button-step2-back"
                  >
                    <ChevronLeft size={18} />
                    GERİ
                  </button>
                  <button
                    type="submit"
                    className="flex-1 h-12 bg-primary text-black font-black uppercase tracking-[1.5px] text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                    data-testid="button-step2-next"
                  >
                    İLERİ
                    <ChevronRight size={18} />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3 — Order Summary */}
            {step === 2 && (
              <div data-testid="section-step-3">
                <h3 className="text-lg font-black uppercase text-white tracking-[1px] mb-6">
                  SİPARİŞ ÖZETİ
                </h3>

                <div className="bg-[#262626] border border-[#3c3c3c] p-6 mb-6 space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-[#3c3c3c]">
                    <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">SEÇİLEN PAKET</span>
                    <span className="text-sm font-black text-white">{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-[#3c3c3c]">
                    <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">FATURALANDIRMA</span>
                    <span className="text-sm font-black text-white">{billing === "aylik" ? "Aylık" : "Yıllık"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">ARA TOPLAM</span>
                    <span className="text-sm font-black text-white">{formatPrice(basePrice)} TL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">KDV (%20)</span>
                    <span className="text-sm font-black text-white">{formatPrice(kdvAmount)} TL</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-primary/30">
                    <span className="text-xs font-black uppercase tracking-[1.5px] text-primary">GENEL TOPLAM</span>
                    <span className="text-xl font-black text-primary">{formatPrice(totalPrice)} TL</span>
                  </div>
                </div>

                <div className="bg-[#262626] border border-[#3c3c3c] p-6 mb-8 space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[1.5px] text-[#7e7e7e] mb-4">MÜŞTERİ BİLGİLERİ</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-[#7e7e7e] font-light block mb-1">Ad Soyad</span>
                      <span className="text-sm text-white font-bold" data-testid="text-summary-name">{formValues.customerName}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#7e7e7e] font-light block mb-1">WhatsApp</span>
                      <span className="text-sm text-white font-bold" data-testid="text-summary-whatsapp">{formValues.whatsapp}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#7e7e7e] font-light block mb-1">E-posta</span>
                      <span className="text-sm text-white font-bold" data-testid="text-summary-email">{formValues.email}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#7e7e7e] font-light block mb-1">Kullanım Amacı</span>
                      <span className="text-sm text-white font-bold" data-testid="text-summary-purpose">{formValues.usagePurpose}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handlePayment}
                    disabled={createPayment.isPending}
                    className="w-full h-14 bg-primary text-black font-black uppercase tracking-[1.5px] text-sm flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    data-testid="button-payment-submit"
                  >
                    {createPayment.isPending ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        İŞLENİYOR...
                      </>
                    ) : (
                      <>
                        PAYTR İLE ÖDEMEYE GEÇ
                        <ChevronRight size={18} />
                      </>
                    )}
                  </button>

                  <a
                    href={whatsappOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 border border-[#25D366]/50 text-[#25D366] font-bold uppercase tracking-[1.5px] text-sm flex items-center justify-center gap-2 hover:bg-[#25D366]/10 transition-colors"
                    data-testid="button-whatsapp-order-support"
                  >
                    <WhatsAppIcon size={18} />
                    WHATSAPP İLE SİPARİŞ DESTEK
                  </a>

                  <button
                    onClick={() => setStep(1)}
                    className="w-full h-10 border border-[#3c3c3c] text-[#bbbbbb] font-bold uppercase tracking-[1.5px] text-sm flex items-center justify-center gap-2 hover:border-white hover:text-white transition-colors"
                    data-testid="button-step3-back"
                  >
                    <ChevronLeft size={16} />
                    GERİ DÖN
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
});

OrderFlow.displayName = "OrderFlow";
