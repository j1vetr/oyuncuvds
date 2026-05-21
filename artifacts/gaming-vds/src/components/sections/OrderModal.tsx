import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Loader2,
  X,
  Lock,
  ShieldCheck,
  FileText,
  Clock,
  Rocket,
  Gauge,
  User,
  Mail,
  Gamepad2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import {
  packages,
  formatPrice,
  KDV_RATE,
  type PackageId,
  type BillingPeriod,
} from "@/config/packages";
import { useCreatePayment } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

const step2Schema = z.object({
  customerName: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  whatsapp: z.string().min(10, "Geçerli bir WhatsApp numarası girin"),
  email: z.string().email("Geçerli bir e-posta adresi girin"),
  usagePurpose: z.enum(
    ["Knight Online", "Metin2", "Silkroad", "Diğer MMORPG"],
    {
      errorMap: () => ({ message: "Kullanım amacı seçiniz" }),
    },
  ),
  note: z.string().optional(),
});

type Step2Values = z.infer<typeof step2Schema>;

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: PackageId;
  initialBilling?: BillingPeriod;
}

function StepIndicator({ current }: { current: number }) {
  const steps = ["Paket", "Bilgiler", "Özet"];
  return (
    <div className="flex items-center justify-center gap-0 mb-8 max-w-md mx-auto">
      {steps.map((label, idx) => {
        const completed = idx < current;
        const active = idx === current;
        return (
          <div
            key={idx}
            className="flex items-center flex-1 last:flex-none"
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold text-[12px] transition-colors shrink-0 ${
                  completed
                    ? "bg-[#0052ff] text-white"
                    : active
                      ? "bg-[#0052ff] text-white"
                      : "bg-[#eef0f3] text-[#7c828a]"
                }`}
              >
                {completed ? (
                  <Check size={13} strokeWidth={3} />
                ) : (
                  idx + 1
                )}
              </div>
              <span
                className={`text-[13px] font-semibold whitespace-nowrap ${
                  active
                    ? "text-[#0052ff]"
                    : completed
                      ? "text-[#0a0b0d]"
                      : "text-[#7c828a]"
                }`}
              >
                {label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={`flex-1 h-px mx-3 ${
                  completed ? "bg-[#0052ff]/40" : "bg-[#dee1e6]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

const inputCls =
  "w-full h-12 bg-white border border-[#dee1e6] rounded-xl px-4 text-[#0a0b0d] text-[14px] placeholder:text-[#a8acb3] focus:outline-none focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/15 transition-all";

const pkgIcons: Record<PackageId, React.ComponentType<{ size?: number; className?: string }>> = {
  baslangic: Rocket,
  performans: Gauge,
};

function MiniBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-[10.5px] font-medium text-[#5b616e]">
      <span className="w-4 h-4 rounded-full bg-[#e7f7ee] flex items-center justify-center text-[#05b169] shrink-0">
        {icon}
      </span>
      <span className="leading-tight">{label}</span>
    </div>
  );
}

export function OrderModal({
  isOpen,
  onClose,
  initialPackageId = "baslangic",
  initialBilling = "aylik",
}: OrderModalProps) {
  const [step, setStep] = useState(0);
  const [selectedPkgId, setSelectedPkgId] =
    useState<PackageId>(initialPackageId);
  const [billing, setBilling] = useState<BillingPeriod>(initialBilling);
  const [paymentState, setPaymentState] = useState<
    "idle" | "success" | "failure"
  >("idle");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { toast } = useToast();
  const createPayment = useCreatePayment();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
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

  useEffect(() => {
    if (isOpen) {
      setSelectedPkgId(initialPackageId);
      setBilling(initialBilling);
      setStep(0);
      setPaymentState("idle");
      setShowPaymentModal(false);
      reset();
    }
  }, [isOpen, initialPackageId, initialBilling, reset]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const selectedPackage = packages.find((p) => p.id === selectedPkgId)!;
  const basePrice =
    billing === "aylik" ? selectedPackage.monthly : selectedPackage.yearly;
  const kdvAmount = Math.round(basePrice * KDV_RATE);
  const totalPrice = basePrice + kdvAmount;
  const formValues = getValues();

  const whatsappOrderUrl = () => {
    const vals = getValues();
    const msg = `Merhaba, Oyun VDS siparişi oluşturmak istiyorum. Paket: ${selectedPackage.name}, Dönem: ${billing === "aylik" ? "Aylık" : "Yıllık"}, Ad Soyad: ${vals.customerName || "—"}, Telefon: ${vals.whatsapp || "—"}`;
    return `https://wa.me/908503094769?text=${encodeURIComponent(msg)}`;
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
            setModalMessage(
              result.message ??
                "PayTR ödeme bağlantısı burada oluşturulacaktır.",
            );
            setShowPaymentModal(true);
          } else {
            window.location.href = result.paymentUrl;
          }
        },
        onError: () => {
          toast({
            title: "Hata",
            description:
              "Ödeme işlemi başlatılırken bir hata oluştu. Lütfen tekrar deneyin.",
            variant: "destructive",
          });
        },
      },
    );
  };

  const handleReset = () => {
    setStep(0);
    setPaymentState("idle");
    setSelectedPkgId("baslangic");
    setBilling("aylik");
    reset();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-[#f4f5f7]"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative z-10 flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-20 w-full bg-white/95 backdrop-blur-md border-b border-[#eef0f3] flex items-center justify-between px-4 md:px-8 h-14 shrink-0">
          <span className="text-[13px] font-semibold text-[#0a0b0d]">
            Sipariş Oluştur
          </span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#5b616e] hover:bg-[#f7f7f7] transition-colors"
            aria-label="Kapat"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 flex items-start justify-center py-8 md:py-10 px-4">
          <div className="w-full max-w-2xl">
            {/* PayTR placeholder modal */}
            {showPaymentModal && (
              <div className="fixed inset-0 z-30 flex items-center justify-center bg-[#0a0b0d]/40 backdrop-blur-sm px-4">
                <div className="bg-white rounded-3xl border border-[#dee1e6] p-10 w-full max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#e6edff] flex items-center justify-center mx-auto mb-5">
                      <Check size={28} className="text-[#0052ff]" />
                    </div>
                    <h3 className="text-[20px] font-semibold tracking-tight text-[#0a0b0d] mb-3">
                      Ödeme Sistemi
                    </h3>
                    <p className="text-[#5b616e] text-[14px] leading-relaxed mb-7">
                      {modalMessage}
                    </p>
                    <button
                      onClick={() => {
                        setShowPaymentModal(false);
                        setPaymentState("success");
                      }}
                      className="w-full h-11 rounded-full bg-[#0052ff] text-white font-semibold text-[14px] hover:bg-[#003ecc] transition-colors"
                    >
                      Tamam
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Success */}
            {paymentState === "success" && (
              <div
                className="text-center py-16 px-6 bg-white rounded-3xl border border-[#dee1e6] shadow-[0_4px_24px_rgba(15,23,42,0.04)]"
                data-testid="section-payment-success"
              >
                <div className="w-16 h-16 rounded-full bg-[#e7f7ee] flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-[#05b169]" />
                </div>
                <h2 className="text-[28px] font-semibold tracking-tight text-[#0a0b0d] mb-3">
                  Ödemeniz Alındı
                </h2>
                <p className="text-[#5b616e] text-[15px] leading-relaxed mb-8 max-w-sm mx-auto">
                  Siparişiniz başarıyla oluşturuldu. VDS erişim bilgileriniz
                  WhatsApp üzerinden iletilecektir.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/908503094769?text=${encodeURIComponent("Merhaba, ödeme yaptım. VDS erişim bilgilerimi bekliyorum.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-7 rounded-full bg-[#25D366] text-white font-semibold text-[13px] flex items-center justify-center gap-2 hover:bg-[#1faf57] transition-colors"
                    data-testid="button-success-whatsapp"
                  >
                    <WhatsAppIcon size={16} />
                    WhatsApp Destek ile Görüş
                  </a>
                  <button
                    onClick={handleReset}
                    className="h-11 px-7 rounded-full bg-[#eef0f3] text-[#0a0b0d] font-semibold text-[13px] hover:bg-[#dee1e6] transition-colors"
                  >
                    Yeni Sipariş
                  </button>
                </div>
              </div>
            )}

            {/* Failure */}
            {paymentState === "failure" && (
              <div
                className="text-center py-16 px-6 bg-white rounded-3xl border border-[#dee1e6] shadow-[0_4px_24px_rgba(15,23,42,0.04)]"
                data-testid="section-payment-failure"
              >
                <div className="w-16 h-16 rounded-full bg-[#fbe7e9] flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#cf202f] text-3xl font-medium">!</span>
                </div>
                <h2 className="text-[28px] font-semibold tracking-tight text-[#0a0b0d] mb-3">
                  Ödeme Tamamlanamadı
                </h2>
                <p className="text-[#5b616e] text-[15px] leading-relaxed mb-8 max-w-sm mx-auto">
                  Ödemeniz tamamlanamadı. Tekrar deneyebilir veya destek
                  hattımıza ulaşabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleReset}
                    className="h-11 px-7 rounded-full bg-[#0052ff] text-white font-semibold text-[13px] hover:bg-[#003ecc] transition-colors"
                  >
                    Tekrar Dene
                  </button>
                  <a
                    href={`https://wa.me/908503094769?text=${encodeURIComponent("Merhaba, ödeme yapamadım. Yardım almak istiyorum.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-7 rounded-full bg-[#25D366] text-white font-semibold text-[13px] flex items-center justify-center gap-2 hover:bg-[#1faf57] transition-colors"
                  >
                    <WhatsAppIcon size={16} />
                    WhatsApp Destek
                  </a>
                </div>
              </div>
            )}

            {/* Wizard */}
            {paymentState === "idle" && (
              <div className="bg-white rounded-3xl border border-[#e8eaee] p-6 md:p-9 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
                {/* Brand logo */}
                <div className="flex justify-center mb-6">
                  <img
                    src="/logo-v2.png"
                    alt="Oyuncu VDS"
                    className="h-9 md:h-10 w-auto"
                  />
                </div>

                <StepIndicator current={step} />

                {/* STEP 1 — Package */}
                {step === 0 && (
                  <div data-testid="section-step-1">
                    <h3 className="text-[22px] font-bold tracking-tight text-[#0a0b0d] mb-6">
                      Paket Seçimi
                    </h3>

                    <div className="mb-6">
                      <label className="text-[12.5px] font-semibold text-[#5b616e] block mb-2.5">
                        Faturalandırma Dönemi
                      </label>
                      <div className="inline-flex items-center gap-1 rounded-full bg-[#eef0f3] p-1">
                        <button
                          onClick={() => setBilling("aylik")}
                          className={`h-9 px-5 rounded-full text-[13px] font-semibold transition-colors ${
                            billing === "aylik"
                              ? "bg-white text-[#0052ff] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                              : "text-[#5b616e] hover:text-[#0a0b0d]"
                          }`}
                          data-testid="toggle-order-billing-monthly"
                        >
                          Aylık
                        </button>
                        <button
                          onClick={() => setBilling("yillik")}
                          className={`h-9 px-5 rounded-full text-[13px] font-semibold transition-colors ${
                            billing === "yillik"
                              ? "bg-white text-[#0052ff] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                              : "text-[#5b616e] hover:text-[#0a0b0d]"
                          }`}
                          data-testid="toggle-order-billing-yearly"
                        >
                          Yıllık
                        </button>
                        <span className="h-9 px-3 rounded-full flex items-center gap-1.5 text-[11.5px] font-bold text-[#05b169] bg-[#e7f7ee]">
                          <Check size={12} strokeWidth={3} />
                          2 Ay Ücretsiz
                        </span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {packages.map((pkg) => {
                        const price =
                          billing === "aylik" ? pkg.monthly : pkg.yearly;
                        const total = price + Math.round(price * KDV_RATE);
                        const isSelected = selectedPkgId === pkg.id;
                        const Icon = pkgIcons[pkg.id as PackageId];
                        return (
                          <button
                            key={pkg.id}
                            onClick={() =>
                              setSelectedPkgId(pkg.id as PackageId)
                            }
                            className={`text-left p-5 rounded-2xl border-2 transition-all ${
                              isSelected
                                ? "border-[#0052ff] bg-[#f5f8ff] shadow-[0_4px_16px_rgba(0,82,255,0.10)]"
                                : "border-[#e8eaee] bg-white hover:border-[#c5c8cf]"
                            }`}
                            data-testid={`radio-package-${pkg.id}`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                                    isSelected
                                      ? "bg-[#0052ff]/10 text-[#0052ff]"
                                      : "bg-[#f0f2f5] text-[#5b616e]"
                                  }`}
                                >
                                  <Icon size={18} />
                                </span>
                                <span className="text-[14px] font-semibold tracking-tight text-[#0a0b0d] leading-snug">
                                  {pkg.name}
                                </span>
                              </div>
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                  isSelected
                                    ? "border-[#0052ff] bg-[#0052ff]"
                                    : "border-[#dee1e6]"
                                }`}
                              >
                                {isSelected && (
                                  <Check
                                    size={11}
                                    strokeWidth={3}
                                    className="text-white"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="text-[26px] font-medium text-[#0a0b0d] leading-none mb-1 tracking-tight">
                              {formatPrice(price)}
                              <span className="text-[14px] ml-1 text-[#5b616e]">
                                TL
                              </span>
                            </div>
                            <div className="text-[11px] text-[#7c828a] mb-1.5">
                              + KDV /{" "}
                              {billing === "aylik" ? "Ay" : "Yıl"}
                            </div>
                            <div className="text-[12px] text-[#5b616e] mb-4">
                              KDV Dahil{" "}
                              <span className="text-[#0052ff] font-bold">
                                {formatPrice(total)} TL
                              </span>
                            </div>

                            <div className="pt-3 border-t border-[#eef0f3] flex flex-wrap gap-x-3 gap-y-1.5">
                              <MiniBadge
                                icon={<FileText size={9} strokeWidth={2.5} />}
                                label="Resmi Fatura"
                              />
                              <MiniBadge
                                icon={
                                  <ShieldCheck size={9} strokeWidth={2.5} />
                                }
                                label="PayTR ile Güvenli Ödeme"
                              />
                              <MiniBadge
                                icon={<Clock size={9} strokeWidth={2.5} />}
                                label="30-60 dk Teslimat"
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setStep(1)}
                      className="w-full h-12 rounded-full bg-[#0052ff] text-white font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-[#003ecc] transition-colors"
                      data-testid="button-step1-next"
                    >
                      İleri
                      <ChevronRight size={18} />
                    </button>

                    <div className="mt-5 flex items-center justify-center flex-wrap gap-x-4 gap-y-1 text-[11.5px] text-[#7c828a]">
                      <span className="inline-flex items-center gap-1.5">
                        <Lock size={12} className="text-[#5b616e]" />
                        Tüm ödemeler 256-bit SSL ile korunur.
                      </span>
                      <span className="text-[#dee1e6]">|</span>
                      <span className="font-semibold text-[#5b616e]">
                        %100 Güvenli Alışveriş
                      </span>
                    </div>
                  </div>
                )}

                {/* STEP 2 — Details */}
                {step === 1 && (
                  <form
                    onSubmit={handleSubmit(() => setStep(2))}
                    data-testid="section-step-2"
                  >
                    <h3 className="text-[22px] font-bold tracking-tight text-[#0a0b0d] mb-6">
                      Sipariş Bilgileri
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label className="text-[12px] font-semibold text-[#5b616e] block mb-2">
                          Ad Soyad <span className="text-[#cf202f]">*</span>
                        </label>
                        <input
                          {...register("customerName")}
                          type="text"
                          placeholder="Adınız Soyadınız"
                          className={inputCls}
                          data-testid="input-customer-name"
                        />
                        {errors.customerName && (
                          <p className="text-[#cf202f] text-xs mt-1.5">
                            {errors.customerName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-[12px] font-semibold text-[#5b616e] block mb-2">
                          WhatsApp Numarası{" "}
                          <span className="text-[#cf202f]">*</span>
                        </label>
                        <input
                          {...register("whatsapp")}
                          type="tel"
                          placeholder="+90 5XX XXX XX XX"
                          className={inputCls}
                          data-testid="input-whatsapp"
                        />
                        {errors.whatsapp && (
                          <p className="text-[#cf202f] text-xs mt-1.5">
                            {errors.whatsapp.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-[12px] font-semibold text-[#5b616e] block mb-2">
                          E-Posta Adresi{" "}
                          <span className="text-[#cf202f]">*</span>
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="ornek@email.com"
                          className={inputCls}
                          data-testid="input-email"
                        />
                        {errors.email && (
                          <p className="text-[#cf202f] text-xs mt-1.5">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-[12px] font-semibold text-[#5b616e] block mb-2">
                          Kullanım Amacı{" "}
                          <span className="text-[#cf202f]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            {...register("usagePurpose")}
                            className={inputCls + " appearance-none pr-10"}
                            data-testid="select-usage-purpose"
                          >
                            <option value="Knight Online">Knight Online</option>
                            <option value="Metin2">Metin2</option>
                            <option value="Silkroad">Silkroad</option>
                            <option value="Diğer MMORPG">Diğer MMORPG</option>
                          </select>
                          <ChevronRight
                            size={16}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#5b616e] pointer-events-none"
                          />
                        </div>
                        {errors.usagePurpose && (
                          <p className="text-[#cf202f] text-xs mt-1.5">
                            {errors.usagePurpose.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-[12px] font-semibold text-[#5b616e] block mb-2">
                          Not / Ek Talep
                        </label>
                        <textarea
                          {...register("note")}
                          rows={3}
                          placeholder="Ek talebiniz varsa buraya yazabilirsiniz..."
                          className="w-full bg-white border border-[#dee1e6] rounded-xl px-4 py-3 text-[#0a0b0d] text-[14px] placeholder:text-[#a8acb3] focus:outline-none focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/15 transition-all resize-none"
                          data-testid="textarea-note"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center flex-wrap gap-x-5 gap-y-1.5 text-[11.5px] text-[#5b616e]">
                      <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck
                          size={13}
                          className="text-[#05b169]"
                        />
                        Bilgileriniz güvenli şekilde işlenir.
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Lock size={12} className="text-[#05b169]" />
                        256-bit SSL ile korunur.
                      </span>
                    </div>

                    <div className="flex gap-3 mt-5">
                      <button
                        type="button"
                        onClick={() => setStep(0)}
                        className="h-12 px-6 rounded-full bg-[#eef0f3] text-[#0a0b0d] font-semibold text-[13px] flex items-center gap-1.5 hover:bg-[#dee1e6] transition-colors"
                        data-testid="button-step2-back"
                      >
                        <ChevronLeft size={16} />
                        Geri
                      </button>
                      <button
                        type="submit"
                        className="flex-1 h-12 rounded-full bg-[#0052ff] text-white font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-[#003ecc] transition-colors"
                        data-testid="button-step2-next"
                      >
                        İleri
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 3 — Summary */}
                {step === 2 && (
                  <div data-testid="section-step-3">
                    <h3 className="text-[22px] font-bold tracking-tight text-[#0a0b0d] mb-6">
                      Sipariş Özeti
                    </h3>

                    <div className="border border-[#e8eaee] rounded-2xl mb-4 overflow-hidden">
                      {[
                        {
                          label: "Seçilen Paket",
                          value: selectedPackage.name,
                        },
                        {
                          label: "Faturalandırma",
                          value: billing === "aylik" ? "Aylık" : "Yıllık",
                        },
                        {
                          label: "Ara Toplam",
                          value: `${formatPrice(basePrice)} TL`,
                        },
                        {
                          label: "KDV (%20)",
                          value: `${formatPrice(kdvAmount)} TL`,
                        },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className={`px-5 py-4 flex justify-between items-center bg-white ${
                            i > 0 ? "border-t border-[#eef0f3]" : ""
                          }`}
                        >
                          <span className="text-[13px] font-medium text-[#5b616e]">
                            {row.label}
                          </span>
                          <span className="text-[14px] font-semibold text-[#0a0b0d]">
                            {row.value}
                          </span>
                        </div>
                      ))}
                      <div className="px-5 py-4 bg-[#eef3ff] flex justify-between items-center border-t border-[#0052ff]/15">
                        <span className="text-[14px] font-bold text-[#0052ff]">
                          Genel Toplam
                        </span>
                        <span className="text-[22px] font-bold text-[#0052ff] tracking-tight">
                          {formatPrice(totalPrice)} TL
                        </span>
                      </div>
                    </div>

                    <div className="border border-[#e8eaee] rounded-2xl p-5 mb-5">
                      <p className="text-[14px] font-bold text-[#0a0b0d] mb-4">
                        Müşteri Bilgileri
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {[
                          {
                            label: "Ad Soyad",
                            value: formValues.customerName,
                            testid: "text-summary-name",
                            icon: <User size={14} />,
                          },
                          {
                            label: "WhatsApp",
                            value: formValues.whatsapp,
                            testid: "text-summary-whatsapp",
                            icon: <WhatsAppIcon size={14} />,
                          },
                          {
                            label: "E-Posta",
                            value: formValues.email,
                            testid: "text-summary-email",
                            icon: <Mail size={14} />,
                          },
                          {
                            label: "Kullanım",
                            value: formValues.usagePurpose,
                            testid: "text-summary-purpose",
                            icon: <Gamepad2 size={14} />,
                          },
                        ].map((row) => (
                          <div key={row.label} className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-[#f0f2f5] text-[#5b616e] flex items-center justify-center shrink-0">
                              {row.icon}
                            </span>
                            <div className="min-w-0">
                              <p className="text-[11px] text-[#7c828a] leading-tight">
                                {row.label}
                              </p>
                              <p
                                className="text-[13px] text-[#0a0b0d] font-semibold truncate"
                                data-testid={row.testid}
                              >
                                {row.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-1.5 mb-5 text-[11.5px] text-[#5b616e]">
                      <span className="inline-flex items-center gap-1.5">
                        <FileText size={12} className="text-[#0052ff]" />
                        Resmi Fatura
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-[#05b169]" />
                        PayTR ile Güvenli Ödeme
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={12} className="text-[#5b616e]" />
                        30-60 dk İçinde Teslim
                      </span>
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={handlePayment}
                        disabled={createPayment.isPending}
                        className="w-full h-12 rounded-full bg-[#0052ff] text-white font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-[#003ecc] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        data-testid="button-payment-submit"
                      >
                        {createPayment.isPending ? (
                          <>
                            <Loader2 size={17} className="animate-spin" />
                            İşleniyor...
                          </>
                        ) : (
                          <>
                            PayTR ile Ödemeye Geç
                            <ChevronRight size={17} />
                          </>
                        )}
                      </button>

                      <a
                        href={whatsappOrderUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-12 rounded-full bg-white border-2 border-[#25D366] text-[#25D366] font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-[#f5fbf7] transition-colors"
                        data-testid="button-whatsapp-order-support"
                      >
                        <WhatsAppIcon size={16} />
                        WhatsApp ile Sipariş Ver
                      </a>

                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="h-10 px-4 rounded-full text-[#5b616e] font-semibold text-[13px] flex items-center gap-1.5 hover:bg-[#f7f7f7] transition-colors mx-auto"
                        data-testid="button-step3-back"
                      >
                        <ChevronLeft size={14} />
                        Geri
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
