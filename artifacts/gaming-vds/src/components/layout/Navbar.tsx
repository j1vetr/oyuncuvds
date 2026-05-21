import { Menu, X, ShoppingCart, Mail, MapPin, FileCheck, Instagram } from "lucide-react";
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
    <div className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden md:block w-full bg-[#0a0b0d] text-white/85 text-[12px]">
        <div className="container mx-auto px-4 h-9 flex items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <FileCheck size={13} className="text-[#4d8bff]" />
              <span className="text-white/90 tracking-wide font-semibold">TÜM SATIŞLAR RESMİ FATURALIDIR</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-white/70">
              <MapPin size={13} />
              Sarıyer Merkez Mah. Sarıyer / İstanbul
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="mailto:info@oyuncuvds.com.tr"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Mail size={13} />
              info@oyuncuvds.com.tr
            </a>
            <a
              href="https://instagram.com/oyuncuvds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Instagram size={13} />
              @oyuncuvds
            </a>
          </div>
        </div>
      </div>

      <nav className="w-full bg-white/90 backdrop-blur-md border-b border-[#eef0f3]">
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between gap-4">
        <div
          className="flex items-center shrink-0 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/logo-v2.png" alt="Oyuncu VDS" className="h-20 md:h-28 w-auto" />
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
            className="h-10 pl-2 pr-5 font-semibold text-[13px] rounded-full bg-white border border-[#dee1e6] text-[#0a0b0d] hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.04] transition-colors flex items-center gap-2"
          >
            <span className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center">
              <WhatsAppIcon size={14} className="text-white" />
            </span>
            WhatsApp
          </a>
          <button
            onClick={() => onOpenOrder?.()}
            className="h-10 pl-2 pr-5 font-semibold text-[13px] rounded-full bg-[#0052ff] text-white hover:bg-[#003ecc] transition-colors flex items-center gap-2"
          >
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <ShoppingCart size={14} className="text-white" />
            </span>
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
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-[#eef0f3] p-5 flex flex-col gap-1 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
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
    </div>
  );
}
