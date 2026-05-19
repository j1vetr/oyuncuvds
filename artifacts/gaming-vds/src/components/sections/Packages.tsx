import { useState } from "react";
import { Check } from "lucide-react";
import { packages, formatPrice, KDV_RATE, type BillingPeriod } from "@/config/packages";

interface PackagesProps {
  onSelectPackage?: (packageId: string, billing: BillingPeriod) => void;
}

export function Packages({ onSelectPackage }: PackagesProps) {
  const [billing, setBilling] = useState<BillingPeriod>("aylik");

  const scrollToOrder = (pkgId: string) => {
    if (onSelectPackage) onSelectPackage(pkgId, billing);
    document.getElementById("siparis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="paketler" className="w-full bg-[#080808] py-16">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-primary">Fiyatlandırma</span>
            <span className="w-5 h-px bg-primary" />
          </div>
          <h2 className="text-[28px] md:text-[38px] font-black uppercase text-white tracking-tight mb-3">
            PAKETLER
          </h2>
          <p className="text-[#c0c0c0] font-light text-[13px] max-w-lg mx-auto leading-[1.7] mb-8">
            İhtiyacına göre paket seç. Yıllık alımda 2 ay ücretsiz kazan.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex border border-[#2e2e2e] bg-black p-1 gap-1">
            <button
              onClick={() => setBilling("aylik")}
              className={`h-8 px-6 font-bold uppercase tracking-[1.5px] text-xs transition-colors ${
                billing === "aylik" ? "bg-primary text-black" : "text-[#aaaaaa] hover:text-white"
              }`}
              data-testid="toggle-billing-monthly"
            >
              Aylık
            </button>
            <button
              onClick={() => setBilling("yillik")}
              className={`h-8 px-6 font-bold uppercase tracking-[1.5px] text-xs transition-colors flex items-center gap-2 ${
                billing === "yillik" ? "bg-primary text-black" : "text-[#aaaaaa] hover:text-white"
              }`}
              data-testid="toggle-billing-yearly"
            >
              Yıllık
              {billing !== "yillik" && (
                <span className="text-[9px] font-black tracking-wider text-primary border border-primary/40 px-1 py-0.5 leading-none">
                  2 AY ÜCRETSİZ
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {packages.map((pkg) => {
            const basePrice = billing === "aylik" ? pkg.monthly : pkg.yearly;
            const kdvAmount = Math.round(basePrice * KDV_RATE);
            const totalPrice = basePrice + kdvAmount;
            const period = billing === "aylik" ? "Ay" : "Yıl";

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col bg-[#0f0f0f] border ${
                  pkg.isRecommended ? "border-primary/60" : "border-[#252525]"
                }`}
                data-testid={`card-package-${pkg.id}`}
              >
                <div className={`h-[2px] w-full ${pkg.isRecommended ? "bg-primary" : "bg-[#252525]"}`} />

                {pkg.isRecommended && (
                  <div className="absolute -top-[12px] right-5">
                    <span className="bg-primary text-black text-[10px] font-black uppercase tracking-[1.5px] px-3 py-1 block">
                      ÖNERİLEN PAKET
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Name + description */}
                  <div className="mb-5">
                    <h3 className="text-[15px] font-black uppercase text-white tracking-tight mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-[#a0a0a0] font-light text-[13px] leading-[1.65]">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price block */}
                  <div className="mb-5 pb-5 border-b border-[#1e1e1e]">
                    {billing === "yillik" && (
                      <div className="mb-3">
                        <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-[9px] font-black uppercase tracking-[1.5px] px-2.5 py-1">
                          10 AY ÖDE, 12 AY KULLAN
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-1.5 mb-0.5">
                      <span className="text-[38px] font-black text-white leading-none tracking-tight">
                        {formatPrice(basePrice)}
                      </span>
                      <span className="text-[15px] font-bold text-white">TL</span>
                    </div>
                    <p className="text-[11px] font-light text-[#555] tracking-wide mb-2.5">
                      + KDV / {period}
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="w-3 h-px bg-[#333]" />
                      <p className="text-[12px] font-medium text-[#b0b0b0]">
                        KDV Dahil{" "}
                        <span className="text-white font-black">
                          {formatPrice(totalPrice)} TL
                        </span>
                        {" "}/ {period}
                      </p>
                    </div>
                  </div>

                  {/* Specs */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2.5">
                        <Check
                          size={13}
                          strokeWidth={3}
                          className={pkg.isRecommended ? "text-primary shrink-0" : "text-[#444] shrink-0"}
                        />
                        <span className="text-[#c0c0c0] font-light text-[13px]">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => scrollToOrder(pkg.id)}
                    className={`w-full h-11 font-black uppercase tracking-[2px] text-xs transition-colors ${
                      pkg.isRecommended
                        ? "bg-primary text-black hover:bg-primary/90"
                        : "bg-transparent border border-[#3c3c3c] text-white hover:border-white hover:bg-white/5"
                    }`}
                    data-testid={`button-select-${pkg.id}`}
                  >
                    BU PAKETİ SEÇ
                  </button>
                </div>
              </div>
            );
          })}
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
