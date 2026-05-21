import type * as React from "react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import {
  Headphones,
  Clock,
  Activity,
  Gamepad2,
  Rocket,
  ShoppingCart,
} from "lucide-react";

// Brand: Windows logo (4 panes)
function WindowsLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4.5L10.5 3.3V11.4H2V4.5Z" fill="#0078D4" />
      <path d="M11.5 3.15L22 1.7V11.4H11.5V3.15Z" fill="#0078D4" />
      <path d="M2 12.6H10.5V20.7L2 19.5V12.6Z" fill="#0078D4" />
      <path d="M11.5 12.6H22V22.3L11.5 20.85V12.6Z" fill="#0078D4" />
    </svg>
  );
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

interface HeroProps {
  onOpenOrder?: () => void;
}

type StatItem = {
  title: string;
  desc: string;
  render: () => React.ReactNode;
};

const iconWrap = (color: string, child: React.ReactNode) => (
  <div
    className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
    style={{ backgroundColor: `${color}1a` }}
  >
    {child}
  </div>
);

const STATS: StatItem[] = [
  {
    title: "7/24 Kesintisiz Hizmet",
    desc: "Oyun hesaplarınız günün her saati açık kalır.",
    render: () => iconWrap("#5b616e", <Headphones size={20} className="text-[#5b616e]" />),
  },
  {
    title: "Windows 10 Kurulu",
    desc: "Hazır sistem, sürücüler ve güncellemeler yüklü.",
    render: () => iconWrap("#0078D4", <WindowsLogo size={20} />),
  },
  {
    title: "30-60 dk Teslimat",
    desc: "Siparişinizin ardından hızlıca teslim edilir.",
    render: () => iconWrap("#0052ff", <Clock size={20} className="text-[#0052ff]" />),
  },
  {
    title: "%99.9 Uptime",
    desc: "Yüksek performanslı altyapı ile kesintisiz çalışma.",
    render: () => iconWrap("#0052ff", <Activity size={20} className="text-[#0052ff]" />),
  },
  {
    title: "Oyunlara Tam Uyum",
    desc: "Knight Online, Metin2 ve Silkroad ile tam uyum.",
    render: () => iconWrap("#0052ff", <Gamepad2 size={20} className="text-[#0052ff]" />),
  },
];

export function Hero({ onOpenOrder }: HeroProps) {
  return (
    <section className="relative w-full bg-white pt-10 md:pt-14 pb-10 md:pb-14 overflow-x-clip">
      {/* Background decoration: layered radial glows + dot grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 5%, rgba(0,82,255,0.10), transparent 60%), radial-gradient(ellipse 50% 45% at 15% 80%, rgba(0,82,255,0.06), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-8 items-center">
          {/* LEFT: Copy + CTAs + trust strip */}
          <div className="relative">
            <h1 className="display-headline text-[42px] sm:text-[54px] lg:text-[60px] xl:text-[66px] text-[#0a0b0d] leading-[1.05] tracking-[-0.02em] mb-7">
              Bilgisayarın
              <br />
              kapalıyken
              <br />
              <span className="text-[#0052ff]">oyun hesabın</span>
              <br />
              açık kalsın.
            </h1>

            <p className="text-[#5b616e] text-[16px] md:text-[17px] leading-[1.7] max-w-xl mb-8">
              Knight Online, Metin2 ve Silkroad hesaplarını uzaktan, kesintisiz
              çalıştır. Windows kurulu, hazır sistemlerimizle güvenli bağlantı
              sayesinde oyun deneyimin yarım kalmaz. Satın al, bağlantını al,
              hemen kullanmaya başla.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("paketler")}
                className="h-12 px-6 rounded-full bg-[#0052ff] text-white text-[14.5px] font-semibold hover:bg-[#003ecc] active:bg-[#003396] transition-all shadow-[0_8px_24px_-6px_rgba(0,82,255,0.45)] hover:shadow-[0_12px_28px_-6px_rgba(0,82,255,0.55)] flex items-center gap-2"
                data-testid="button-hero-packages"
              >
                <Rocket size={17} />
                Paketleri İncele
              </button>
              <button
                onClick={() => onOpenOrder?.()}
                className="h-12 px-6 rounded-full bg-white border border-[#dee1e6] text-[#0a0b0d] text-[14.5px] font-semibold hover:bg-[#f7f7f7] transition-colors flex items-center gap-2"
                data-testid="button-hero-order"
              >
                <ShoppingCart size={17} className="text-[#0a0b0d]/80" />
                Sipariş Ver
              </button>
              <a
                href="https://wa.me/908503094769"
                target="_blank"
                rel="noreferrer"
                className="h-12 px-6 rounded-full bg-white border border-[#25D366]/40 text-[#0a0b0d] text-[14.5px] font-semibold hover:bg-[#25D366]/[0.06] transition-colors flex items-center gap-2"
                data-testid="button-hero-whatsapp"
              >
                <WhatsAppIcon size={18} className="text-[#25D366]" />
                WhatsApp Destek
              </a>
            </div>

          </div>

          {/* RIGHT: Pre-composed hero image (devices + info cards) */}
          <div className="relative w-full">
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,82,255,0.16), transparent 65%)",
                filter: "blur(8px)",
              }}
            />
            <img
              src="/hero-composition.png"
              alt="Oyuncu VDS — bilgisayar, telefon ve hizmet özellikleri"
              className="relative z-10 w-full h-auto object-contain mx-auto max-w-[820px] lg:max-w-none lg:scale-110 xl:scale-115 origin-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Premium bottom stat strip with vertical dividers */}
        <div className="mt-14 md:mt-20 rounded-3xl border border-[#dee1e6] bg-white shadow-[0_8px_28px_rgba(15,23,42,0.04)] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {STATS.map(({ render, title, desc }, idx) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center px-5 py-7 ${
                  idx > 0 ? "lg:border-l border-[#eef0f3]" : ""
                } ${idx % 2 === 1 ? "border-l md:border-l-0 lg:border-l" : ""} ${
                  idx >= 2 ? "border-t md:border-t" : ""
                } md:[&:nth-child(n+4)]:border-t lg:[&:nth-child(n+4)]:border-t-0 md:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:border-l`}
              >
                {render()}
                <p className="text-[13px] font-semibold text-[#0a0b0d] leading-tight mb-1">
                  {title}
                </p>
                <p className="text-[11.5px] text-[#5b616e] leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
