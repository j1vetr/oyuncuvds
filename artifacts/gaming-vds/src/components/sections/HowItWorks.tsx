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
    <section id="nasil-calisir" className="w-full bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-4">
            Süreç
          </span>
          <h2 className="display-headline text-[36px] md:text-[52px] text-[#0a0b0d] mb-4">
            Nasıl çalışır?
          </h2>
          <p className="text-[#5b616e] text-[16px] leading-[1.65]">
            Sipariş ver, ödemeyi tamamla — 30–60 dakikada VDS erişim bilgilerin WhatsApp'ta.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-3xl border border-[#dee1e6] p-7 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      idx === 0
                        ? "bg-[#0052ff] text-white"
                        : "bg-[#eef0f3] text-[#0a0b0d]"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-[12px] font-semibold text-[#7c828a] tracking-tight">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[17px] font-semibold tracking-tight text-[#0a0b0d] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[#5b616e] text-[13px] leading-[1.7] mb-4">
                  {step.description}
                </p>
                <span className="inline-block text-[11px] font-semibold text-[#0052ff] bg-[#e6edff] rounded-full px-2.5 py-1">
                  {step.detail}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <a
            href="#paketler"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("paketler")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#0052ff] text-white text-[14px] font-semibold hover:bg-[#003ecc] transition-colors"
            data-testid="button-howitworks-cta"
          >
            Paketi Seç, Sipariş Ver
          </a>
        </div>
      </div>
    </section>
  );
}
