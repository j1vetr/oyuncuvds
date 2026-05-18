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
    <section id="paketler" className="w-full bg-[#0d0d0d] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-black uppercase text-white tracking-tight mb-4">
            PAKETLER
          </h2>
          <p className="text-[#bbbbbb] font-light text-lg max-w-2xl mx-auto mb-10">
            İhtiyacına göre paket seç. Yıllık alımda 2 ay ücretsiz kazan.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex border border-[#3c3c3c] bg-black">
            <button
              onClick={() => setBilling("aylik")}
              className={`h-10 px-8 font-bold uppercase tracking-[1.5px] text-sm transition-colors ${
                billing === "aylik"
                  ? "bg-primary text-black"
                  : "text-[#bbbbbb] hover:text-white"
              }`}
              data-testid="toggle-billing-monthly"
            >
              Aylık
            </button>
            <button
              onClick={() => setBilling("yillik")}
              className={`h-10 px-8 font-bold uppercase tracking-[1.5px] text-sm transition-colors ${
                billing === "yillik"
                  ? "bg-primary text-black"
                  : "text-[#bbbbbb] hover:text-white"
              }`}
              data-testid="toggle-billing-yearly"
            >
              Yıllık
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => {
            const basePrice = billing === "aylik" ? pkg.monthly : pkg.yearly;
            const kdvAmount = Math.round(basePrice * KDV_RATE);
            const totalPrice = basePrice + kdvAmount;

            return (
              <div
                key={pkg.id}
                className={`relative bg-[#1a1a1a] border ${
                  pkg.isRecommended
                    ? "border-primary shadow-[0_0_30px_rgba(0,229,255,0.08)]"
                    : "border-[#3c3c3c]"
                } p-8 flex flex-col`}
                data-testid={`card-package-${pkg.id}`}
              >
                {pkg.isRecommended && (
                  <div className="absolute -top-px left-0 right-0 h-[3px] bg-primary" />
                )}

                {pkg.isRecommended && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-primary text-black text-xs font-black uppercase tracking-[1.5px] px-3 py-1">
                      ÖNERİLEN PAKET
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-black uppercase text-white tracking-tight mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-[#bbbbbb] font-light text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-[#3c3c3c]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[40px] font-black text-white">
                      {formatPrice(basePrice)} TL
                    </span>
                  </div>
                  <span className="text-xs text-[#bbbbbb] font-light tracking-wide">
                    + KDV / {billing === "aylik" ? "Aylık" : "Yıllık"}
                  </span>
                  {billing === "yillik" && (
                    <div className="mt-3">
                      <span className="bg-[#0d3b85] text-primary text-xs font-bold uppercase tracking-[1.5px] px-3 py-1">
                        YILLIK ALIMDA 2 AY BİZDEN
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3">
                      <Check size={16} className="text-primary shrink-0" />
                      <span className="text-[#bbbbbb] font-light text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToOrder(pkg.id)}
                  className={`w-full h-12 font-black uppercase tracking-[1.5px] text-sm transition-colors ${
                    pkg.isRecommended
                      ? "bg-primary text-black hover:bg-primary/90"
                      : "bg-transparent border border-white text-white hover:bg-white/10"
                  }`}
                  data-testid={`button-select-${pkg.id}`}
                >
                  BU PAKETİ SEÇ
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stripe divider */}
      <div className="w-full h-1 mt-24 flex">
        <div className="w-1/3 bg-primary h-full" />
        <div className="w-1/3 bg-[#1c69d4] h-full" />
        <div className="w-1/3 bg-[#0d3b85] h-full" />
      </div>
    </section>
  );
}
