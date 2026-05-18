import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Packages } from "@/components/sections/Packages";
import { Games } from "@/components/sections/Games";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OrderFlow, type OrderFlowRef } from "@/components/sections/OrderFlow";
import { Support } from "@/components/sections/Support";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import type { BillingPeriod } from "@/config/packages";

export default function Home() {
  const orderFlowRef = useRef<OrderFlowRef>(null);

  const handleSelectPackage = (packageId: string, billing: BillingPeriod) => {
    orderFlowRef.current?.selectPackage(packageId, billing);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <ProblemSolution />
        <Packages onSelectPackage={handleSelectPackage} />
        <Games />
        <HowItWorks />
        <OrderFlow ref={orderFlowRef} />
        <Support />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
