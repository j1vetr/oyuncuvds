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
  };

  return (
    <section id="paketler" className="w-full bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-4">
            Fiyatlandırma
          </span>
          <h2 className="display-headline text-[36px] md:text-[52px] text-[#0a0b0d] mb-4">
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

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {packages.map((pkg) => {
            const basePrice = billing === "aylik" ? pkg.monthly : pkg.yearly;
            const kdvAmount = Math.round(basePrice * KDV_RATE);
            const totalPrice = basePrice + kdvAmount;
            const period = billing === "aylik" ? "Ay" : "Yıl";

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col bg-white rounded-3xl border p-8 ${
                  pkg.isRecommended
                    ? "border-[#0052ff] shadow-[0_8px_32px_rgba(0,82,255,0.08)]"
                    : "border-[#dee1e6]"
                }`}
                data-testid={`card-package-${pkg.id}`}
              >
                {pkg.isRecommended && (
                  <div className="absolute -top-3 left-8">
                    <span className="inline-block bg-[#0052ff] text-white text-[11px] font-semibold tracking-tight rounded-full px-3 py-1">
                      Önerilen Paket
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-[20px] font-semibold tracking-tight text-[#0a0b0d] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-[#5b616e] text-[14px] leading-[1.65]">
                    {pkg.description}
                  </p>
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
                    <span className="text-[44px] font-medium text-[#0a0b0d] leading-none tracking-tight">
                      {formatPrice(basePrice)}
                    </span>
                    <span className="text-[18px] font-medium text-[#0a0b0d]">TL</span>
                  </div>
                  <p className="text-[12px] text-[#7c828a] mb-3">
                    + KDV / {period}
                  </p>
                  <p className="text-[13px] text-[#5b616e]">
                    KDV Dahil{" "}
                    <span className="text-[#0a0b0d] font-semibold">
                      {formatPrice(totalPrice)} TL
                    </span>{" "}
                    / {period}
                  </p>
                </div>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {pkg.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        className={`shrink-0 mt-0.5 ${
                          pkg.isRecommended ? "text-[#0052ff]" : "text-[#5b616e]"
                        }`}
                      />
                      <span className="text-[#5b616e] text-[14px] leading-[1.55]">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToOrder(pkg.id)}
                  className={`w-full h-12 rounded-full text-[14px] font-semibold transition-colors ${
                    pkg.isRecommended
                      ? "bg-[#0052ff] text-white hover:bg-[#003ecc]"
                      : "bg-[#eef0f3] text-[#0a0b0d] hover:bg-[#dee1e6]"
                  }`}
                  data-testid={`button-select-${pkg.id}`}
                >
                  Bu Paketi Seç
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
