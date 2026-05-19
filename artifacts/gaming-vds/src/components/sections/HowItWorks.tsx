import { Package, ClipboardList, CreditCard, MessageSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Paketini Seç",
    description: "İhtiyacına uygun Oyun VDS paketini seç. Aylık veya yıllık dönem seçeneğiyle fiyat avantajını belirle.",
    detail: "Başlangıç veya Performans",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Bilgilerini Gir",
    description: "Ad soyad, WhatsApp numarası ve e-posta adresini doldur. Teslimat bu bilgiler üzerinden yapılır.",
    detail: "1 dakikadan az sürer",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Güvenli Ödeme Yap",
    description: "Sipariş özetini incele. PayTR altyapısıyla güvenli ve hızlı şekilde ödemeyi tamamla.",
    detail: "PayTR güvencesiyle",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "VDS'ini Teslim Al",
    description: "Ödeme sonrası VDS erişim bilgilerin (IP, şifre) WhatsApp üzerinden 30–60 dakika içinde iletilir.",
    detail: "30–60 dk içinde teslim",
  },
];

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="w-full bg-[#050505] py-24 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-primary/50 text-[10px] font-bold select-none">|</span>
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-primary">Süreç</span>
            <span className="text-primary/50 text-[10px] font-bold select-none">|</span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-tight text-white mb-4">
            NASIL ÇALIŞIR?
          </h2>
          <p className="text-[#888] font-light text-[14px] max-w-md mx-auto leading-[1.75]">
            Sipariş ver, ödemeyi tamamla — 30–60 dakikada VDS erişim bilgilerin WhatsApp'ta.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Connector line */}
          <div className="relative flex items-start gap-0">
            {/* Background line */}
            <div className="absolute top-[52px] left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-[#1e1e1e] z-0" />
            {/* Cyan progress line (first half) */}
            <div className="absolute top-[52px] left-[calc(12.5%)] w-[25%] h-px bg-gradient-to-r from-primary to-primary/40 z-0" />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <div key={step.number} className="flex-1 flex flex-col items-center text-center px-4 relative z-10">
                  {/* Icon circle */}
                  <div className={`w-[52px] h-[52px] flex items-center justify-center border mb-6 relative ${
                    idx === 0
                      ? "bg-primary border-primary text-black"
                      : "bg-[#0d0d0d] border-[#2a2a2a] text-[#555]"
                  }`}>
                    <Icon size={20} strokeWidth={1.5} />
                    {/* Connector dot */}
                    {!isLast && (
                      <div className="absolute -right-[calc(50%+26px+1px)] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#2a2a2a] rotate-45" />
                    )}
                  </div>

                  {/* Step number */}
                  <span className="text-[10px] font-black tracking-[2px] text-primary mb-2 block">
                    ADIM {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-[14px] font-black uppercase tracking-[0.5px] text-white mb-3 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#777] font-light text-[12px] leading-[1.8] mb-3">
                    {step.description}
                  </p>

                  {/* Detail badge */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[1px] px-2 py-0.5 border border-[#1e1e1e] text-[#555]">
                    {step.detail}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden max-w-lg mx-auto space-y-0">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div key={step.number} className="flex gap-5 relative">
                {/* Left column: icon + line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-11 h-11 flex items-center justify-center border shrink-0 ${
                    idx === 0
                      ? "bg-primary border-primary text-black"
                      : "bg-[#0d0d0d] border-[#2a2a2a] text-[#555]"
                  }`}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-[#1a1a1a] my-2" style={{ minHeight: "40px" }} />
                  )}
                </div>

                {/* Right column: content */}
                <div className={`pb-8 flex-1 ${isLast ? "" : ""}`}>
                  <span className="text-[10px] font-black tracking-[2px] text-primary block mb-1">
                    ADIM {step.number}
                  </span>
                  <h3 className="text-[14px] font-black uppercase tracking-[0.5px] text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#777] font-light text-[12px] leading-[1.8] mb-2">
                    {step.description}
                  </p>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[1px] px-2 py-0.5 border border-[#1e1e1e] text-[#555]">
                    {step.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <div className="inline-block border border-[#1e1e1e] bg-[#0a0a0a] px-8 py-5">
            <p className="text-[#666] font-light text-[12px] uppercase tracking-[1.5px] mb-3">
              Başlamak için tek yapman gereken
            </p>
            <a
              href="#paketler"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("paketler")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 h-11 px-8 bg-primary text-black font-black uppercase tracking-[2px] text-[11px] hover:brightness-90 transition-all"
              data-testid="button-howitworks-cta"
            >
              Paketi Seç, Sipariş Ver
            </a>
          </div>
        </div>

      </div>

      {/* Stripe divider */}
      <div className="w-full h-[3px] mt-16 flex">
        <div className="w-1/3 bg-primary h-full" />
        <div className="w-1/3 bg-[#1c69d4] h-full" />
        <div className="w-1/3 bg-[#0d3b85] h-full" />
      </div>
    </section>
  );
}
