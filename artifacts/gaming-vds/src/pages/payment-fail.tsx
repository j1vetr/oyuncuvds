import { XCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent(
  "Merhaba, ödeme işlemim tamamlanamadı. Destek almak istiyorum."
);

export default function PaymentFail() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col selection:bg-primary selection:text-black">

      {/* Top bar */}
      <div className="border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Oyuncu VDS" className="h-8 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          <span className="font-black text-white uppercase tracking-[2px] text-sm">Oyuncu VDS</span>
        </a>
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 border border-red-500/30 bg-red-500/5 flex items-center justify-center">
              <XCircle size={34} className="text-red-500" strokeWidth={1.5} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-[24px] md:text-[32px] font-black uppercase tracking-tight text-white text-center mb-4">
            Ödeme Tamamlanamadı
          </h1>
          <p className="text-[#a8a8a8] font-light text-[13px] leading-[1.8] text-center mb-8">
            Ödemeniz tamamlanamadı. Lütfen tekrar deneyin veya WhatsApp destek üzerinden bizimle iletişime geçin.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/"
              className="flex-1 h-12 flex items-center justify-center bg-[#00E5FF] text-black font-black uppercase tracking-[1.5px] text-[11px] hover:brightness-90 transition-all"
              data-testid="button-fail-retry"
            >
              Tekrar Dene
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 h-12 flex items-center justify-center gap-2 border border-[#2a2a2a] text-[#ccc] font-bold uppercase tracking-[1.5px] text-[11px] hover:border-[#444] hover:text-white transition-colors"
              data-testid="button-fail-whatsapp"
            >
              <WhatsAppIcon size={15} className="text-[#25D366]" />
              WhatsApp Destek
            </a>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg hover:brightness-90 transition-all z-50"
        aria-label="WhatsApp Destek"
      >
        <WhatsAppIcon size={26} className="text-white" />
      </a>
    </div>
  );
}
