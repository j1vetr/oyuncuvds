import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Packages } from "@/components/sections/Packages";
import { Games } from "@/components/sections/Games";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OrderModal } from "@/components/sections/OrderModal";
import { Support } from "@/components/sections/Support";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import type { PackageId, BillingPeriod } from "@/config/packages";

export default function Home() {
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
        <ProblemSolution />
        <Packages onSelectPackage={(pkgId, billing) => openOrder(pkgId, billing)} />
        <Games />
        <HowItWorks />
        <Support />
        <FAQ />
      </main>

      <Footer />
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
