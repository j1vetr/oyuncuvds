import { useEffect } from "react";
import { XCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent(
  "Merhaba, ödeme işlemim tamamlanamadı. Destek almak istiyorum."
);

export default function PaymentFail() {
  useEffect(() => {
    document.title = "Ödeme Başarısız | OyuncuVDS.com.tr";
  }, []);
  return (
    <div className="min-h-screen bg-white text-[#0a0b0d] font-sans flex flex-col">
      <div className="border-b border-[#eef0f3] px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Oyuncu VDS" className="h-14 md:h-16 w-auto" />
        </a>
        <a href="/" className="text-[#5b616e] font-medium text-[13px] hover:text-[#0052ff] transition-colors">
          Ana Sayfa
        </a>
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#fbe7e9] flex items-center justify-center">
              <XCircle size={34} className="text-[#cf202f]" strokeWidth={1.75} />
            </div>
          </div>

          <h1 className="display-headline text-[32px] md:text-[40px] text-[#0a0b0d] text-center mb-4">
            Ödeme tamamlanamadı
          </h1>
          <p className="text-[#5b616e] text-[14px] leading-[1.7] text-center mb-8">
            Ödemeniz tamamlanamadı. Lütfen tekrar deneyin veya WhatsApp destek
            üzerinden bizimle iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="flex-1 h-12 flex items-center justify-center rounded-full bg-[#0052ff] text-white font-semibold text-[14px] hover:bg-[#003ecc] transition-colors"
              data-testid="button-fail-retry"
            >
              Tekrar Dene
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank" rel="noreferrer"
              className="flex-1 h-12 flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold text-[13px] hover:bg-[#1faf57] transition-colors"
              data-testid="button-fail-whatsapp"
            >
              <WhatsAppIcon size={16} className="text-white" />
              WhatsApp Destek
            </a>
          </div>
        </div>
      </main>

      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#1faf57] transition-colors z-50"
        aria-label="WhatsApp Destek"
      >
        <WhatsAppIcon size={26} className="text-white" />
      </a>
    </div>
  );
}
