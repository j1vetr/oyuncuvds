import type * as React from "react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import {
  Headphones,
  Clock,
  Activity,
  Gamepad2,
  ArrowRight,
  ShieldCheck,
  FileText,
  Rocket,
  ShoppingCart,
  Check,
  BadgeCheck,
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

// Small floating info card used around the device image
function FloatCard({
  icon,
  title,
  desc,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-20 bg-white rounded-2xl border border-[#dee1e6] shadow-[0_10px_24px_-8px_rgba(15,23,42,0.18)] px-3.5 py-3 flex items-center gap-3 w-[200px] ${className}`}
    >
      <div className="shrink-0 w-9 h-9 rounded-xl bg-[#f4f7ff] flex items-center justify-center">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[12.5px] font-semibold text-[#0a0b0d] leading-tight">{title}</p>
        <p className="text-[11px] text-[#5b616e] leading-snug mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

export function Hero({ onOpenOrder }: HeroProps) {
  return (
    <section className="relative w-full bg-white pt-10 md:pt-12 pb-10 md:pb-14 overflow-x-clip">
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
          {/* LEFT: Badge + Copy + CTAs + trust strip */}
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 h-9 pl-3 pr-4 rounded-full bg-[#eaf1ff] border border-[#cfdcff] text-[#0052ff] text-[13px] font-semibold mb-6">
              <ShieldCheck size={15} strokeWidth={2.4} />
              Faturalı ve Güvenli Oyuncu VDS Hizmeti
            </div>

            <h1 className="display-headline text-[42px] sm:text-[54px] lg:text-[58px] xl:text-[64px] text-[#0a0b0d] leading-[1.05] tracking-[-0.02em] mb-7">
              Bilgisayarın
              <br />
              kapalıyken
              <br />
              <span className="text-[#0052ff]">oyun hesabın</span>
              <br />
              açık kalsın.
            </h1>

            <p className="text-[#5b616e] text-[16px] md:text-[17px] leading-[1.7] max-w-xl mb-8">
              Knight Online, Metin2 ve Silkroad hesaplarını pazar, farm ve EXP party
              için uzaktan Windows VDS üzerinde kesintisiz çalıştır.{" "}
              <span className="text-[#0a0b0d] font-semibold">
                Tüm satışlar faturalı yapılır
              </span>
              , ödemeler{" "}
              <span className="text-[#0a0b0d] font-semibold">PayTR</span> altyapısıyla
              güvenli şekilde alınır ve erişim bilgileriniz{" "}
              <span className="text-[#0a0b0d] font-semibold">30-60 dakika</span>{" "}
              içinde teslim edilir.
            </p>

            {/* CTAs with subtitle */}
            <div className="flex flex-wrap items-stretch gap-3">
              <button
                onClick={() => scrollTo("paketler")}
                className="group h-[58px] px-4 rounded-2xl bg-[#0052ff] text-white text-left hover:bg-[#003ecc] active:bg-[#003396] transition-all shadow-[0_8px_24px_-6px_rgba(0,82,255,0.45)] hover:shadow-[0_12px_28px_-6px_rgba(0,82,255,0.55)] flex items-center gap-2.5"
                data-testid="button-hero-packages"
              >
                <Rocket size={18} className="shrink-0" />
                <span className="flex flex-col leading-tight whitespace-nowrap">
                  <span className="text-[14px] font-semibold">Paketleri İncele</span>
                  <span className="text-[11px] font-medium text-white/75">
                    Faturalı VDS paketleri
                  </span>
                </span>
              </button>
              <button
                onClick={() => onOpenOrder?.()}
                className="h-[58px] px-4 rounded-2xl bg-[#eef0f3] text-[#0a0b0d] text-left hover:bg-[#dee1e6] transition-colors flex items-center gap-2.5"
                data-testid="button-hero-order"
              >
                <ShoppingCart size={18} className="shrink-0 text-[#0a0b0d]/80" />
                <span className="flex flex-col leading-tight whitespace-nowrap">
                  <span className="text-[14px] font-semibold">Sipariş Ver</span>
                  <span className="text-[11px] font-medium text-[#5b616e]">
                    PayTR güvenli ödeme
                  </span>
                </span>
              </button>
              <a
                href="https://wa.me/908503094769"
                target="_blank"
                rel="noreferrer"
                className="h-[58px] px-4 rounded-2xl bg-white border border-[#dee1e6] text-[#0a0b0d] hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.04] transition-colors flex items-center gap-2.5"
                data-testid="button-hero-whatsapp"
              >
                <WhatsAppIcon size={18} className="text-[#25D366] shrink-0" />
                <span className="flex flex-col leading-tight whitespace-nowrap">
                  <span className="text-[14px] font-semibold">WhatsApp Destek</span>
                  <span className="text-[11px] font-medium text-[#5b616e]">
                    Kurulum ve teslimat desteği
                  </span>
                </span>
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-[#5b616e]">
              {[
                "Resmi faturalı satış",
                "PayTR güvenli ödeme",
                "30-60 dk hızlı teslimat",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#0052ff]/10 flex items-center justify-center">
                    <Check size={11} strokeWidth={3} className="text-[#0052ff]" />
                  </span>
                  {t}
                </span>
              ))}
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
              className="relative z-10 w-full h-auto object-contain mx-auto max-w-[720px] lg:max-w-none lg:scale-105 xl:scale-110 origin-center"
              style={{ filter: "drop-shadow(0 24px 48px rgba(15,23,42,0.18))" }}
              loading="eager"
              fetchPriority="high"
            />

            {/* Floating cards - LEFT side */}
            <FloatCard
              className="hidden md:flex left-0 lg:-left-2 top-[8%]"
              icon={<FileText size={18} className="text-[#0052ff]" />}
              title="Faturalı Satış"
              desc="Her sipariş için resmi fatura"
            />
            <FloatCard
              className="hidden md:flex left-2 lg:left-0 top-[42%] -translate-y-1/2"
              icon={<PayTRBadge className="w-7 h-7 text-[10px]" />}
              title="PayTR Güvenli Ödeme"
              desc="Kart bilgileriniz korunur"
            />
            <FloatCard
              className="hidden md:flex left-0 lg:-left-2 bottom-[10%]"
              icon={<Clock size={18} className="text-[#0052ff]" />}
              title="30-60 dk Teslimat"
              desc="Erişim bilgileriniz hızlıca iletilir"
            />

            {/* Floating cards - RIGHT side */}
            {/* Order Guarantee — taller card */}
            <div className="hidden md:block absolute right-0 lg:-right-2 top-[6%] z-20 w-[225px] bg-white rounded-2xl border border-[#dee1e6] shadow-[0_10px_28px_-8px_rgba(15,23,42,0.20)] p-4">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck size={16} className="text-[#0052ff]" />
                <p className="text-[13px] font-semibold text-[#0a0b0d]">
                  Sipariş Güvencesi
                </p>
              </div>
              <ul className="space-y-1.5">
                {[
                  "Resmi fatura",
                  "PayTR güvenli ödeme",
                  "30-60 dk teslimat",
                  "WhatsApp destek",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 text-[12px] text-[#0a0b0d]"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#16a34a]/10 flex items-center justify-center">
                      <Check size={10} strokeWidth={3} className="text-[#16a34a]" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-[#eef0f3] flex items-center gap-2">
                <BadgeCheck size={14} className="text-[#0052ff]" />
                <p className="text-[11.5px] text-[#5b616e] leading-tight">
                  Güvenli, hızlı ve kesintisiz hizmet
                </p>
              </div>
            </div>

            <FloatCard
              className="hidden md:flex right-0 lg:-right-2 top-[62%]"
              icon={<WindowsLogo size={18} />}
              title="Windows 10 Kurulu"
              desc="Hazır sistem teslimi"
            />
            <FloatCard
              className="hidden md:flex right-2 lg:right-0 bottom-[6%]"
              icon={
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
                </span>
              }
              title="7/24 Aktif"
              desc="Ev internetinden bağımsız çalışma"
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
