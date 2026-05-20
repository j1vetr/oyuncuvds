import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında destek almak istiyorum.");

interface NavbarProps {
  onOpenOrder?: () => void;
}

const NAV_LINKS = [
  { id: "hakkimizda", label: "Hakkımızda" },
  { id: "ozellikler", label: "Özellikler" },
  { id: "paketler", label: "Paketler" },
  { id: "nasil-calisir", label: "Nasıl Çalışır?" },
  { id: "sss", label: "SSS" },
  { id: "iletisim", label: "İletişim" },
];

export function Navbar({ onOpenOrder }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#eef0f3]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div
          className="flex items-center shrink-0 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/logo.png" alt="Oyuncu VDS" className="h-16 md:h-20 w-auto" />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-[14px] font-medium text-[#0a0b0d]/80 hover:text-[#0052ff] transition-colors whitespace-nowrap"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-5 font-semibold text-[13px] rounded-full bg-[#25D366] text-white hover:bg-[#1faf57] transition-colors flex items-center gap-2"
          >
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>
          <button
            onClick={() => onOpenOrder?.()}
            className="h-10 px-6 font-semibold text-[13px] rounded-full bg-[#0052ff] text-white hover:bg-[#003ecc] transition-colors"
          >
            Sipariş Ver
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#0a0b0d] p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-[#eef0f3] p-5 flex flex-col gap-1 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-[15px] font-medium text-[#0a0b0d] text-left py-3 px-2 hover:bg-[#f7f7f7] rounded-lg transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="h-px bg-[#eef0f3] my-3" />
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-4 font-semibold text-[14px] rounded-full bg-[#25D366] text-white w-full flex items-center justify-center gap-2"
          >
            <WhatsAppIcon size={16} />
            WhatsApp Destek
          </a>
          <button
            onClick={() => {
              onOpenOrder?.();
              setIsOpen(false);
            }}
            className="h-11 px-4 mt-2 font-semibold text-[14px] rounded-full bg-[#0052ff] text-white w-full"
          >
            Sipariş Ver
          </button>
        </div>
      )}
    </nav>
  );
}
