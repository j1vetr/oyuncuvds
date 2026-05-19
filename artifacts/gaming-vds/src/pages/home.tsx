import { useState, useEffect, lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Packages } from "@/components/sections/Packages";
import { Games } from "@/components/sections/Games";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { OrderModal } from "@/components/sections/OrderModal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import type { PackageId, BillingPeriod } from "@/config/packages";

const Support = lazy(() => import("@/components/sections/Support").then((m) => ({ default: m.Support })));
const FAQ = lazy(() => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/sections/Footer").then((m) => ({ default: m.Footer })));

export default function Home() {
  useEffect(() => {
    document.title = "Oyuncu VDS | 7/24 Gaming VDS – Knight Online, Metin2, Silkroad";
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPackageId, setModalPackageId] = useState<PackageId>("baslangic");
  const [modalBilling, setModalBilling] = useState<BillingPeriod>("aylik");

  const openOrder = (packageId?: string, billing?: BillingPeriod) => {
    if (packageId) setModalPackageId(packageId as PackageId);
    if (billing) setModalBilling(billing);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      <Navbar onOpenOrder={() => openOrder()} />

      <main>
        <Hero onOpenOrder={() => openOrder()} />
        <About />
        <ProblemSolution />
        <Packages onSelectPackage={(pkgId, billing) => openOrder(pkgId, billing)} />
        <Games />
        <HowItWorks />
        <Suspense fallback={null}>
          <Support />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />

      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPackageId={modalPackageId}
        initialBilling={modalBilling}
      />
    </div>
  );
}
