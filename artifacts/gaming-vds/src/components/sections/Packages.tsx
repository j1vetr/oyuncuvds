import { useState } from "react";
import {
  Gamepad2,
  Rocket,
  Cpu,
  MemoryStick,
  HardDrive,
  MonitorPlay,
  Network,
  Infinity as InfinityIcon,
  Monitor,
  Star,
  ShieldCheck,
  Headphones,
  Activity,
} from "lucide-react";
import { packages, formatPrice, KDV_RATE, type BillingPeriod } from "@/config/packages";

interface PackagesProps {
  onSelectPackage?: (packageId: string, billing: BillingPeriod) => void;
}

// Windows logo (4 panes)
function WindowsLogo({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4.5L10.5 3.3V11.4H2V4.5Z" fill="#0078D4" />
      <path d="M11.5 3.15L22 1.7V11.4H11.5V3.15Z" fill="#0078D4" />
      <path d="M2 12.6H10.5V20.7L2 19.5V12.6Z" fill="#0078D4" />
      <path d="M11.5 12.6H22V22.3L11.5 20.85V12.6Z" fill="#0078D4" />
    </svg>
  );
}

const SPEC_ICONS: Record<string, { icon: React.ReactNode; color: string }> = {
  cpu: { icon: <Cpu size={14} className="text-[#0052ff]" />, color: "#0052ff" },
  ram: { icon: <MemoryStick size={14} className="text-[#0052ff]" />, color: "#0052ff" },
  disk: { icon: <HardDrive size={14} className="text-[#0052ff]" />, color: "#0052ff" },
  gpu: { icon: <MonitorPlay size={14} className="text-[#0052ff]" />, color: "#0052ff" },
  port: { icon: <Network size={14} className="text-[#0052ff]" />, color: "#0052ff" },
  trafik: { icon: <InfinityIcon size={14} className="text-[#0052ff]" />, color: "#0052ff" },
  windows: { icon: <WindowsLogo size={14} />, color: "#0078D4" },
  uzak: { icon: <Monitor size={14} className="text-[#0052ff]" />, color: "#0052ff" },
};

function specMeta(spec: string) {
  const s = spec.toLowerCase();
  if (s.includes("cpu")) return SPEC_ICONS.cpu;
  if (s.includes("ram")) return SPEC_ICONS.ram;
  if (s.includes("ssd") || s.includes("disk")) return SPEC_ICONS.disk;
  if (s.includes("gpu") || s.includes("grafik")) return SPEC_ICONS.gpu;
  if (s.includes("port")) return SPEC_ICONS.port;
  if (s.includes("trafik")) return SPEC_ICONS.trafik;
  if (s.includes("windows")) return SPEC_ICONS.windows;
  if (s.includes("masaüstü") || s.includes("uzak")) return SPEC_ICONS.uzak;
  return SPEC_ICONS.cpu;
}

export function Packages({ onSelectPackage }: PackagesProps) {
  const [billing, setBilling] = useState<BillingPeriod>("aylik");

  const scrollToOrder = (pkgId: string) => {
    if (onSelectPackage) onSelectPackage(pkgId, billing);
  };

  return (
    <section
      id="paketler"
      className="relative w-full bg-[#f7f7f7] pt-16 md:pt-20 pb-20 md:pb-24 overflow-x-clip border-t border-[#dee1e6]"
    >
      {/* Soft background accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 5% 30%, rgba(0,82,255,0.05), transparent 60%), radial-gradient(ellipse 40% 50% at 95% 70%, rgba(0,82,255,0.05), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-4">
            Fiyatlandırma
          </span>
          <h2 className="display-headline text-[40px] md:text-[56px] text-[#0a0b0d] mb-4 tracking-[-0.02em]">
            Paketler
          </h2>
          <p className="text-[#5b616e] text-[16px] leading-[1.65] mb-8">
            İhtiyacına göre paket seç. Yıllık alımda 2 ay ücretsiz kazan.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex rounded-full bg-[#eef0f3] p-1">
            <button
              onClick={() => setBilling("aylik")}
              className={`h-10 px-6 rounded-full text-[13px] font-semibold transition-colors ${
                billing === "aylik"
                  ? "bg-white text-[#0a0b0d] shadow-sm"
                  : "text-[#5b616e] hover:text-[#0a0b0d]"
              }`}
              data-testid="toggle-billing-monthly"
            >
              Aylık
            </button>
            <button
              onClick={() => setBilling("yillik")}
              className={`h-10 px-6 rounded-full text-[13px] font-semibold transition-colors flex items-center gap-2 ${
                billing === "yillik"
                  ? "bg-white text-[#0a0b0d] shadow-sm"
                  : "text-[#5b616e] hover:text-[#0a0b0d]"
              }`}
              data-testid="toggle-billing-yearly"
            >
              Yıllık
              <span className="text-[10px] font-bold text-[#05b169] bg-[#e7f7ee] rounded-full px-2 py-0.5">
                2 AY ÜCRETSİZ
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-4">
          {packages.map((pkg) => {
            const basePrice = billing === "aylik" ? pkg.monthly : pkg.yearly;
            const kdvAmount = Math.round(basePrice * KDV_RATE);
            const totalPrice = basePrice + kdvAmount;
            const period = billing === "aylik" ? "Ay" : "Yıl";
            const isRec = pkg.isRecommended;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col bg-white rounded-3xl p-8 ${
                  isRec
                    ? "border-2 border-[#0052ff] shadow-[0_12px_40px_-12px_rgba(0,82,255,0.25)]"
                    : "border border-[#dee1e6] shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
                }`}
                data-testid={`card-package-${pkg.id}`}
              >
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-white border-2 border-[#0052ff] text-[#0052ff] text-[11px] font-bold tracking-tight rounded-full px-3 py-1 shadow-[0_2px_8px_rgba(0,82,255,0.15)]">
                      <Star size={11} className="fill-[#0052ff] text-[#0052ff]" />
                      EN ÇOK TERCİH EDİLEN
                    </span>
                  </div>
                )}

                {/* Header with icon */}
                <div className="flex items-start gap-3.5 mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isRec ? "bg-[#0052ff]" : "bg-[#eef0f3]"
                    }`}
                  >
                    {isRec ? (
                      <Rocket size={20} className="text-white" />
                    ) : (
                      <Gamepad2 size={20} className="text-[#0052ff]" />
                    )}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-[18px] font-bold tracking-tight text-[#0a0b0d] mb-1.5">
                      {pkg.name}
                    </h3>
                    <p className="text-[#5b616e] text-[13px] leading-[1.55]">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-[#eef0f3]">
                  {billing === "yillik" && (
                    <div className="mb-3">
                      <span className="inline-block bg-[#e6edff] text-[#0052ff] text-[10px] font-bold uppercase tracking-[0.1em] rounded-full px-2.5 py-1">
                        10 Ay Öde, 12 Ay Kullan
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-[44px] font-bold text-[#0a0b0d] leading-none tracking-tight">
                      {formatPrice(basePrice)}
                    </span>
                    <span className="text-[16px] font-semibold text-[#5b616e]">
                      TL
                    </span>
                    <span className="text-[14px] text-[#7c828a]">/{period}</span>
                  </div>
                  <p className="text-[12px] text-[#7c828a] mb-2">+ KDV</p>
                  <p className="text-[13px] text-[#5b616e]">
                    KDV Dahil{" "}
                    <span className="text-[#0a0b0d] font-semibold">
                      {formatPrice(totalPrice)} TL
                    </span>{" "}
                    / {period}
                  </p>
                </div>

                <ul className="space-y-3 mb-7 flex-1">
                  {pkg.specs.map((spec) => {
                    const meta = specMeta(spec);
                    return (
                      <li key={spec} className="flex items-center gap-3">
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${meta.color}15` }}
                        >
                          {meta.icon}
                        </span>
                        <span className="text-[#0a0b0d] text-[14px] font-medium leading-snug">
                          {spec}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={() => scrollToOrder(pkg.id)}
                  className={`w-full h-12 rounded-full text-[14px] font-semibold transition-all ${
                    isRec
                      ? "bg-[#0052ff] text-white hover:bg-[#003ecc] shadow-[0_8px_24px_-6px_rgba(0,82,255,0.45)] hover:shadow-[0_12px_28px_-6px_rgba(0,82,255,0.55)]"
                      : "bg-white border border-[#dee1e6] text-[#0a0b0d] hover:border-[#0052ff] hover:text-[#0052ff]"
                  }`}
                  data-testid={`button-select-${pkg.id}`}
                >
                  Bu Paketi Seç
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust strip below cards */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[13px] text-[#5b616e]">
          <span className="flex items-center gap-2">
            <Activity size={15} className="text-[#0052ff]" />
            <span className="font-medium text-[#0a0b0d]">%99.9 Uptime</span>{" "}
            Garantisi
          </span>
          <span className="hidden md:inline text-[#dee1e6]">·</span>
          <span className="flex items-center gap-2">
            <Headphones size={15} className="text-[#0052ff]" />
            <span className="font-medium text-[#0a0b0d]">7/24</span> Teknik Destek
          </span>
          <span className="hidden md:inline text-[#dee1e6]">·</span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#0052ff]" />
            <span className="font-medium text-[#0a0b0d]">Güvenli</span> Altyapı
          </span>
        </div>
      </div>
    </section>
  );
}
