import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ChevronRight, ChevronLeft, Loader2, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { packages, formatPrice, KDV_RATE, type PackageId, type BillingPeriod } from "@/config/packages";
import { useCreatePayment } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

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

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: PackageId;
  initialBilling?: BillingPeriod;
}

function StepIndicator({ current }: { current: number }) {
  const steps = ["Paket", "Bilgiler", "Özet"];
  return (
    <div className="flex items-center gap-0 mb-8">
      {steps.map((label, idx) => (
        <div key={idx} className="flex items-center flex-1 last:flex-none">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 flex items-center justify-center font-black text-xs transition-colors shrink-0 ${
                idx < current
                  ? "bg-primary/20 border border-primary text-primary"
                  : idx === current
                  ? "bg-primary text-black"
                  : "bg-[#1e1e1e] border border-[#333] text-[#555]"
              }`}
            >
              {idx < current ? <Check size={12} strokeWidth={3} /> : idx + 1}
            </div>
            <span
              className={`text-[11px] font-bold uppercase tracking-[1px] whitespace-nowrap ${
                idx === current ? "text-white" : idx < current ? "text-primary/70" : "text-[#444]"
              }`}
            >
              {label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div className={`flex-1 h-px mx-3 ${idx < current ? "bg-primary/30" : "bg-[#222]"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

export function OrderModal({ isOpen, onClose, initialPackageId = "baslangic", initialBilling = "aylik" }: OrderModalProps) {
  const [step, setStep] = useState(0);
  const [selectedPkgId, setSelectedPkgId] = useState<PackageId>(initialPackageId);
  const [billing, setBilling] = useState<BillingPeriod>(initialBilling);
  const [paymentState, setPaymentState] = useState<"idle" | "success" | "failure">("idle");
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
    defaultValues: { customerName: "", whatsapp: "", email: "", usagePurpose: "Knight Online", note: "" },
  });

  // Sync initial props when modal opens
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

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const selectedPackage = packages.find((p) => p.id === selectedPkgId)!;
  const basePrice = billing === "aylik" ? selectedPackage.monthly : selectedPackage.yearly;
  const kdvAmount = Math.round(basePrice * KDV_RATE);
  const totalPrice = basePrice + kdvAmount;
  const formValues = getValues();

  const whatsappOrderUrl = () => {
    const vals = getValues();
    const msg = `Merhaba, Oyun VDS siparişi oluşturmak istiyorum. Paket: ${selectedPackage.name}, Dönem: ${billing === "aylik" ? "Aylık" : "Yıllık"}, Ad Soyad: ${vals.customerName || "—"}, Telefon: ${vals.whatsapp || "—"}`;
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
            setShowPaymentModal(true);
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
    reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 flex flex-col h-full overflow-y-auto">
        {/* Header bar */}
        <div className="sticky top-0 z-20 w-full bg-[#070707]/95 backdrop-blur-md border-b border-[#1a1a1a] flex items-center justify-between px-4 md:px-8 h-14 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-[3px] h-5 bg-primary" />
            <span className="text-[11px] font-black uppercase tracking-[2.5px] text-white">
              Sipariş Oluştur
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-[#2a2a2a] text-[#888] hover:text-white hover:border-[#444] transition-colors"
            aria-label="Kapat"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content area */}
        <div className="flex-1 flex items-start justify-center py-8 px-4">
          <div className="w-full max-w-2xl">

            {/* PayTR placeholder modal */}
            {showPaymentModal && (
              <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
                <div className="bg-[#0f0f0f] border border-[#2a2a2a] p-10 w-full max-w-md">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5">
                      <Check size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight mb-3">Ödeme Sistemi</h3>
                    <p className="text-[#aaa] font-light text-sm leading-relaxed mb-7">{modalMessage}</p>
                    <button
                      onClick={() => { setShowPaymentModal(false); setPaymentState("success"); }}
                      className="w-full h-11 bg-primary text-black font-black uppercase tracking-[1.5px] text-sm hover:bg-primary/90 transition-colors"
                    >
                      Tamam
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Success */}
            {paymentState === "success" && (
              <div className="text-center py-16 px-6" data-testid="section-payment-success">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-primary" />
                </div>
                <h2 className="text-[28px] font-black uppercase text-white tracking-tight mb-3">Ödemeniz Alındı</h2>
                <p className="text-[#aaa] font-light text-[15px] leading-relaxed mb-8 max-w-sm mx-auto">
                  Siparişiniz başarıyla oluşturuldu. VDS erişim bilgileriniz WhatsApp üzerinden iletilecektir.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/905000000000?text=${encodeURIComponent("Merhaba, ödeme yaptım. VDS erişim bilgilerimi bekliyorum.")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="h-11 px-7 bg-[#25D366] text-white font-black uppercase tracking-[1.5px] text-xs flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
                    data-testid="button-success-whatsapp"
                  >
                    <WhatsAppIcon size={16} />
                    Whatsapp Destek ile Görüş
                  </a>
                  <button
                    onClick={handleReset}
                    className="h-11 px-7 border border-[#333] text-[#aaa] font-bold uppercase tracking-[1.5px] text-xs hover:border-white hover:text-white transition-colors"
                  >
                    Yeni Sipariş
                  </button>
                </div>
              </div>
            )}

            {/* Failure */}
            {paymentState === "failure" && (
              <div className="text-center py-16 px-6" data-testid="section-payment-failure">
                <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-400 text-3xl font-black">!</span>
                </div>
                <h2 className="text-[28px] font-black uppercase text-white tracking-tight mb-3">Ödeme Tamamlanamadı</h2>
                <p className="text-[#aaa] font-light text-[15px] leading-relaxed mb-8 max-w-sm mx-auto">
                  Ödemeniz tamamlanamadı. Tekrar deneyebilir veya destek hattımıza ulaşabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleReset}
                    className="h-11 px-7 bg-primary text-black font-black uppercase tracking-[1.5px] text-xs hover:bg-primary/90 transition-colors"
                    data-testid="button-failure-retry"
                  >
                    Tekrar Dene
                  </button>
                  <a
                    href={`https://wa.me/905000000000?text=${encodeURIComponent("Merhaba, ödeme yapamadım. Yardım almak istiyorum.")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="h-11 px-7 bg-[#25D366] text-white font-black uppercase tracking-[1.5px] text-xs flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
                    data-testid="button-failure-whatsapp"
                  >
                    <WhatsAppIcon size={16} />
                    Whatsapp Destek
                  </a>
                </div>
              </div>
            )}

            {/* Wizard */}
            {paymentState === "idle" && (
              <div className="bg-[#0a0a0a] border border-[#1a1a1a]">
                {/* Top accent */}
                <div className="h-[2px] w-full bg-primary" />

                <div className="p-6 md:p-10">
                  <StepIndicator current={step} />

                  {/* STEP 1 — Package */}
                  {step === 0 && (
                    <div data-testid="section-step-1">
                      <h3 className="text-[13px] font-black uppercase tracking-[2px] text-[#888] mb-6">
                        Paket Seçimi
                      </h3>

                      {/* Billing toggle */}
                      <div className="mb-6">
                        <label className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555] block mb-3">
                          Faturalandırma Dönemi
                        </label>
                        <div className="inline-flex border border-[#252525] bg-black p-1 gap-1">
                          <button
                            onClick={() => setBilling("aylik")}
                            className={`h-8 px-5 font-bold uppercase tracking-[1.5px] text-xs transition-colors ${billing === "aylik" ? "bg-primary text-black" : "text-[#888] hover:text-white"}`}
                            data-testid="toggle-order-billing-monthly"
                          >
                            Aylık
                          </button>
                          <button
                            onClick={() => setBilling("yillik")}
                            className={`h-8 px-5 font-bold uppercase tracking-[1.5px] text-xs transition-colors flex items-center gap-2 ${billing === "yillik" ? "bg-primary text-black" : "text-[#888] hover:text-white"}`}
                            data-testid="toggle-order-billing-yearly"
                          >
                            Yıllık
                            {billing !== "yillik" && (
                              <span className="text-[9px] font-black text-primary border border-primary/40 px-1 py-0.5 leading-none">
                                2 AY ÜCRETSİZ
                              </span>
                            )}
                          </button>
                        </div>
                        {billing === "yillik" && (
                          <p className="mt-3 text-[10px] font-bold uppercase tracking-[1.5px] text-primary/70">
                            10 ay öde, 12 ay kullan
                          </p>
                        )}
                      </div>

                      {/* Package cards */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-7">
                        {packages.map((pkg) => {
                          const price = billing === "aylik" ? pkg.monthly : pkg.yearly;
                          const total = price + Math.round(price * KDV_RATE);
                          const isSelected = selectedPkgId === pkg.id;
                          return (
                            <button
                              key={pkg.id}
                              onClick={() => setSelectedPkgId(pkg.id as PackageId)}
                              className={`text-left p-5 border transition-all ${
                                isSelected
                                  ? "border-primary bg-primary/5"
                                  : "border-[#222] bg-[#0f0f0f] hover:border-[#333]"
                              }`}
                              data-testid={`radio-package-${pkg.id}`}
                            >
                              <div className="flex items-start justify-between mb-4">
                                <span className="text-[12px] font-black uppercase tracking-tight text-white leading-snug pr-2">{pkg.name}</span>
                                <div className={`w-4 h-4 border flex items-center justify-center shrink-0 mt-0.5 ${isSelected ? "border-primary bg-primary" : "border-[#333]"}`}>
                                  {isSelected && <Check size={10} strokeWidth={3} className="text-black" />}
                                </div>
                              </div>
                              <div className="text-[26px] font-black text-white leading-none mb-1">
                                {formatPrice(price)}<span className="text-base ml-1">TL</span>
                              </div>
                              <div className="text-[10px] text-[#555] font-light mb-2">
                                + KDV / {billing === "aylik" ? "Ay" : "Yıl"}
                              </div>
                              <div className="text-[11px] text-[#888] font-medium">
                                KDV Dahil <span className="text-white font-black">{formatPrice(total)} TL</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => setStep(1)}
                        className="w-full h-12 bg-primary text-black font-black uppercase tracking-[2px] text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                        data-testid="button-step1-next"
                      >
                        İleri
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}

                  {/* STEP 2 — Details */}
                  {step === 1 && (
                    <form onSubmit={handleSubmit(() => setStep(2))} data-testid="section-step-2">
                      <h3 className="text-[13px] font-black uppercase tracking-[2px] text-[#888] mb-6">
                        Sipariş Bilgileri
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555] block mb-2">Ad Soyad *</label>
                          <input
                            {...register("customerName")}
                            type="text"
                            placeholder="Adınız Soyadınız"
                            className="w-full h-11 bg-[#0f0f0f] border border-[#222] px-4 text-white font-light text-sm placeholder:text-[#444] focus:outline-none focus:border-primary transition-colors"
                            data-testid="input-customer-name"
                          />
                          {errors.customerName && <p className="text-red-400 text-xs mt-1">{errors.customerName.message}</p>}
                        </div>

                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555] block mb-2">WhatsApp Numarası *</label>
                          <input
                            {...register("whatsapp")}
                            type="tel"
                            placeholder="+90 5XX XXX XX XX"
                            className="w-full h-11 bg-[#0f0f0f] border border-[#222] px-4 text-white font-light text-sm placeholder:text-[#444] focus:outline-none focus:border-primary transition-colors"
                            data-testid="input-whatsapp"
                          />
                          {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp.message}</p>}
                        </div>

                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555] block mb-2">E-Posta Adresi *</label>
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="ornek@email.com"
                            className="w-full h-11 bg-[#0f0f0f] border border-[#222] px-4 text-white font-light text-sm placeholder:text-[#444] focus:outline-none focus:border-primary transition-colors"
                            data-testid="input-email"
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555] block mb-2">Kullanım Amacı *</label>
                          <select
                            {...register("usagePurpose")}
                            className="w-full h-11 bg-[#0f0f0f] border border-[#222] px-4 text-white font-light text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                            data-testid="select-usage-purpose"
                          >
                            <option value="Knight Online">Knight Online</option>
                            <option value="Metin2">Metin2</option>
                            <option value="Silkroad">Silkroad</option>
                            <option value="Diğer MMORPG">Diğer MMORPG</option>
                          </select>
                          {errors.usagePurpose && <p className="text-red-400 text-xs mt-1">{errors.usagePurpose.message}</p>}
                        </div>

                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555] block mb-2">Not / Ek Talep</label>
                          <textarea
                            {...register("note")}
                            rows={3}
                            placeholder="Ek talebiniz varsa buraya yazabilirsiniz..."
                            className="w-full bg-[#0f0f0f] border border-[#222] px-4 py-3 text-white font-light text-sm placeholder:text-[#444] focus:outline-none focus:border-primary transition-colors resize-none"
                            data-testid="textarea-note"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 mt-7">
                        <button
                          type="button"
                          onClick={() => setStep(0)}
                          className="h-12 px-5 border border-[#252525] text-[#888] font-bold uppercase tracking-[1.5px] text-xs flex items-center gap-2 hover:border-[#444] hover:text-white transition-colors"
                          data-testid="button-step2-back"
                        >
                          <ChevronLeft size={16} />
                          Geri
                        </button>
                        <button
                          type="submit"
                          className="flex-1 h-12 bg-primary text-black font-black uppercase tracking-[2px] text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
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
                      <h3 className="text-[13px] font-black uppercase tracking-[2px] text-[#888] mb-6">
                        Sipariş Özeti
                      </h3>

                      {/* Order summary */}
                      <div className="border border-[#1e1e1e] mb-4">
                        <div className="px-5 py-3 border-b border-[#1e1e1e] flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555]">Seçilen Paket</span>
                          <span className="text-sm font-black text-white">{selectedPackage.name}</span>
                        </div>
                        <div className="px-5 py-3 border-b border-[#1e1e1e] flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555]">Faturalandırma</span>
                          <span className="text-sm font-black text-white">{billing === "aylik" ? "Aylık" : "Yıllık"}</span>
                        </div>
                        <div className="px-5 py-3 border-b border-[#1e1e1e] flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555]">Ara Toplam</span>
                          <span className="text-sm font-black text-white">{formatPrice(basePrice)} TL</span>
                        </div>
                        <div className="px-5 py-3 border-b border-[#1e1e1e] flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555]">KDV (%20)</span>
                          <span className="text-sm font-black text-white">{formatPrice(kdvAmount)} TL</span>
                        </div>
                        <div className="px-5 py-4 bg-primary/5 flex justify-between items-center">
                          <span className="text-[11px] font-black uppercase tracking-[1.5px] text-primary">Genel Toplam</span>
                          <span className="text-2xl font-black text-primary">{formatPrice(totalPrice)} TL</span>
                        </div>
                      </div>

                      {/* Customer summary */}
                      <div className="border border-[#1e1e1e] p-5 mb-7">
                        <p className="text-[10px] font-black uppercase tracking-[1.5px] text-[#555] mb-4">Müşteri Bilgileri</p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                          {[
                            { label: "Ad Soyad", value: formValues.customerName, testid: "text-summary-name" },
                            { label: "WhatsApp", value: formValues.whatsapp, testid: "text-summary-whatsapp" },
                            { label: "E-posta", value: formValues.email, testid: "text-summary-email" },
                            { label: "Kullanım", value: formValues.usagePurpose, testid: "text-summary-purpose" },
                          ].map((row) => (
                            <div key={row.label}>
                              <p className="text-[10px] text-[#444] font-light mb-0.5">{row.label}</p>
                              <p className="text-[13px] text-white font-bold truncate" data-testid={row.testid}>{row.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button
                          onClick={handlePayment}
                          disabled={createPayment.isPending}
                          className="w-full h-13 py-3.5 bg-primary text-black font-black uppercase tracking-[2px] text-sm flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                          data-testid="button-payment-submit"
                        >
                          {createPayment.isPending ? (
                            <><Loader2 size={17} className="animate-spin" />İşleniyor...</>
                          ) : (
                            <>PayTR ile Ödemeye Geç<ChevronRight size={17} /></>
                          )}
                        </button>

                        <a
                          href={whatsappOrderUrl()}
                          target="_blank" rel="noopener noreferrer"
                          className="w-full h-11 border border-[#25D366]/40 text-[#25D366] font-bold uppercase tracking-[1.5px] text-xs flex items-center justify-center gap-2 hover:bg-[#25D366]/10 transition-colors"
                          data-testid="button-whatsapp-order-support"
                        >
                          <WhatsAppIcon size={16} />
                          WhatsApp ile Sipariş Ver
                        </a>

                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-full h-10 border border-[#1e1e1e] text-[#666] font-bold uppercase tracking-[1.5px] text-xs flex items-center justify-center gap-2 hover:border-[#333] hover:text-[#999] transition-colors"
                          data-testid="button-step3-back"
                        >
                          <ChevronLeft size={14} />
                          Geri
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
