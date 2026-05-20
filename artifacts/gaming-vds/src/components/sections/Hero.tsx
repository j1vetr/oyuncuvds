import type * as React from "react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Headphones, Clock, Activity, Gamepad2, ArrowRight } from "lucide-react";

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

// Brand: PayTR wordmark badge
function PayTRBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-[#0052ff] text-white font-bold rounded-lg ${className}`}
    >
      <span className="leading-none">
        <span className="text-[10px]">Pay</span>
        <span className="text-[11px]">TR</span>
      </span>
    </div>
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
    <section className="relative w-full bg-white pt-12 md:pt-16 pb-10 md:pb-14 overflow-x-clip">
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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-10 items-center">
          {/* LEFT: Copy + CTAs + quick benefits */}
          <div className="relative">
            <h1 className="display-headline text-[42px] sm:text-[54px] lg:text-[58px] xl:text-[68px] text-[#0a0b0d] leading-[1.04] tracking-[-0.02em] mb-7">
              Bilgisayarın
              <br />
              kapalıyken
              <br />
              <span className="text-[#0052ff] uppercase">OYUN HESABIN</span>
              <br />
              açık kalsın.
            </h1>

            <p className="text-[#5b616e] text-[16px] md:text-[17px] leading-[1.7] max-w-xl mb-8">
              Knight Online, Metin2 ve Silkroad hesaplarını pazar, farm ve EXP party
              için kesintisiz çalıştır. Windows 10 kurulu, uzak masaüstü erişimli
              Oyuncu VDS paketleriyle hemen başla.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => scrollTo("paketler")}
                className="group h-14 px-7 rounded-full bg-[#0052ff] text-white text-[15px] font-semibold hover:bg-[#003ecc] active:bg-[#003396] transition-all shadow-[0_8px_24px_-6px_rgba(0,82,255,0.45)] hover:shadow-[0_12px_28px_-6px_rgba(0,82,255,0.55)] flex items-center justify-center gap-2"
                data-testid="button-hero-packages"
              >
                Paketleri İncele
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <button
                onClick={() => onOpenOrder?.()}
                className="h-14 px-7 rounded-full bg-[#eef0f3] text-[#0a0b0d] text-[15px] font-semibold hover:bg-[#dee1e6] transition-colors"
                data-testid="button-hero-order"
              >
                Sipariş Ver
              </button>
              <a
                href="https://wa.me/908503094769"
                target="_blank"
                rel="noreferrer"
                className="h-14 px-6 rounded-full bg-white border border-[#dee1e6] text-[#0a0b0d] text-[15px] font-semibold flex items-center justify-center gap-2.5 hover:border-[#25D366]/50 hover:bg-[#25D366]/[0.04] transition-colors"
                data-testid="button-hero-whatsapp"
              >
                <WhatsAppIcon size={20} className="text-[#25D366]" />
                WhatsApp Destek
              </a>
            </div>

          </div>

          {/* RIGHT: Device mockup with floating cards */}
          <div className="relative w-full">
            {/* Soft blue glow behind devices */}
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,82,255,0.18), transparent 65%)",
                filter: "blur(8px)",
              }}
            />
            {/* Decorative blue circle backdrop */}
            <div
              className="hidden lg:block pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[78%] aspect-square rounded-full -z-10"
              style={{
                background:
                  "conic-gradient(from 200deg, rgba(0,82,255,0.10), rgba(0,82,255,0.02) 40%, rgba(0,82,255,0.12) 70%, rgba(0,82,255,0.04))",
                filter: "blur(2px)",
              }}
            />

            {/* Device mockup image with subtle drop-shadow */}
            <img
              src="/hero-devices.png"
              alt="Oyuncu VDS — bilgisayar ve telefon görünümü"
              className="relative z-10 w-full h-auto object-contain mx-auto max-w-[720px] lg:max-w-none lg:scale-110 xl:scale-115 origin-center"
              style={{ filter: "drop-shadow(0 24px 48px rgba(15,23,42,0.18))" }}
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

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
