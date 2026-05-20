import { ArrowRight, Package2, Clock, ShieldCheck, Send, ShieldCheck as ShieldIcon } from "lucide-react";
import iconStep1 from "@assets/5a408312-b76b-45e1-be7e-2aec89fcd923_1779239395636.png";
import iconStep2 from "@assets/7b8469b6-df83-4f1c-b810-dc83ddc454d8_1779239395635.png";
import iconStep3 from "@assets/e6cd9de8-e895-4a90-91ad-75abe5dd304a_1779239395636.png";
import iconStep4 from "@assets/69abcf92-8d75-4491-9e36-b69bf296a21b_1779239395636.png";
import phoneMockup from "@assets/a434422c-7c23-417c-9865-f99a488b9897_1779239395636.png";

const steps = [
  {
    number: "01",
    image: iconStep1,
    title: "Paketini Seç",
    description:
      "İhtiyacına uygun Oyun VDS paketini seç. Aylık veya yıllık dönem seçeneğiyle fiyat avantajını belirle.",
    detail: "Başlangıç veya Performans",
    DetailIcon: Package2,
  },
  {
    number: "02",
    image: iconStep2,
    title: "Bilgilerini Gir",
    description:
      "Ad soyad, WhatsApp numarası ve e-posta adresini doldur. Teslimat bu bilgiler üzerinden yapılır.",
    detail: "1 dakikadan az sürer",
    DetailIcon: Clock,
  },
  {
    number: "03",
    image: iconStep3,
    title: "Güvenli Ödeme Yap",
    description:
      "Sipariş özetini incele. PayTR altyapısıyla güvenli ve hızlı şekilde ödemeyi tamamla.",
    detail: "PayTR güvencesiyle",
    DetailIcon: ShieldCheck,
  },
  {
    number: "04",
    image: iconStep4,
    title: "VDS'ini Teslim Al",
    description:
      "Ödeme sonrası VDS erişim bilgilerin (IP, şifre) WhatsApp üzerinden 30-60 dakika içinde iletilir.",
    detail: "30-60 dk içinde teslim",
    DetailIcon: Send,
  },
];

export function HowItWorks() {
  return (
    <section
      id="nasil-calisir"
      className="relative w-full bg-white py-20 md:py-24 overflow-x-clip border-t border-[#dee1e6]"
    >
      {/* Soft dot pattern accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #dee1e6 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 35%, black 85%)",
        }}
      />
      {/* Soft blue radial accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 35% 40% at 10% 25%, rgba(0,82,255,0.05), transparent 60%), radial-gradient(ellipse 35% 40% at 90% 75%, rgba(0,82,255,0.05), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] bg-[#e6edff] rounded-full px-3 py-1 mb-5">
            Süreç
          </span>
          <h2 className="display-headline text-[40px] md:text-[56px] text-[#0a0b0d] mb-4 tracking-[-0.02em]">
            Nasıl çalışır?
          </h2>
          <p className="text-[#5b616e] text-[16px] leading-[1.65]">
            Sipariş ver, ödemeyi tamamla, 30-60 dakikada
            <br className="hidden md:block" />
            VDS erişim bilgilerin WhatsApp'ta.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Phone mockup floating right */}
          <img
            src={phoneMockup}
            alt="Sipariş durumu"
            loading="lazy"
            decoding="async"
            className="hidden xl:block absolute -right-4 top-1/2 -translate-y-1/2 w-[260px] pointer-events-none select-none drop-shadow-[0_20px_40px_rgba(15,23,42,0.18)]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:pr-[230px]">
            {steps.map((step, idx) => {
              const DetailIcon = step.DetailIcon;
              return (
                <div key={step.number} className="relative">
                  {/* Arrow between cards (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[120px] -right-5 z-10 w-10 h-10 items-center justify-center">
                      <div className="flex items-center text-[#0052ff]">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#0052ff]" />
                        <ArrowRight size={16} strokeWidth={2.5} className="-ml-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="relative h-full bg-white rounded-3xl border border-[#dee1e6] pt-10 pb-7 px-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300">
                    {/* Number badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white border-2 border-[#0052ff] text-[#0052ff] text-[14px] font-bold shadow-[0_2px_8px_rgba(0,82,255,0.15)]">
                        {step.number}
                      </span>
                    </div>

                    {/* 3D icon */}
                    <div className="flex justify-center mb-5">
                      <img
                        src={step.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="w-20 h-20 object-contain"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-center text-[17px] font-bold tracking-tight text-[#0a0b0d] mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-center text-[#5b616e] text-[13px] leading-[1.65] mb-5">
                      {step.description}
                    </p>

                    <div className="flex justify-center">
                      <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#0052ff] bg-[#e6edff] rounded-full pl-2 pr-3 py-1.5">
                        <DetailIcon size={12} strokeWidth={2.5} />
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="#paketler"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("paketler")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#0052ff] text-white text-[14px] font-semibold hover:bg-[#003ecc] transition-all shadow-[0_8px_24px_-6px_rgba(0,82,255,0.45)] hover:shadow-[0_12px_28px_-6px_rgba(0,82,255,0.55)]"
            data-testid="button-howitworks-cta"
          >
            Paketi Seç, Sipariş Ver
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <p className="mt-5 flex items-center justify-center gap-2 text-[13px] text-[#5b616e]">
            <ShieldIcon size={14} className="text-[#0052ff]" />
            7/24 aktif destek ile her zaman yanınızdayız.
          </p>
        </div>
      </div>
    </section>
  );
}
