import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında destek almak istiyorum.");

interface NavbarProps {
  onOpenOrder?: () => void;
}

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
    <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-[#3c3c3c]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/logo.png" alt="Oyuncu VDS" className="h-14 w-auto" />
        </div>

        {/* Desktop Nav links */}
        <div className="hidden lg:flex items-center gap-6">
          <button onClick={() => scrollTo("hakkimizda")} className="text-[11px] font-bold uppercase tracking-[1px] text-[#d8d8d8] hover:text-primary transition-colors whitespace-nowrap">Hakkımızda</button>
          <button onClick={() => scrollTo("ozellikler")} className="text-[11px] font-bold uppercase tracking-[1px] text-[#d8d8d8] hover:text-primary transition-colors whitespace-nowrap">Özellikler</button>
          <button onClick={() => scrollTo("paketler")} className="text-[11px] font-bold uppercase tracking-[1px] text-[#d8d8d8] hover:text-primary transition-colors whitespace-nowrap">Paketler</button>
          <button onClick={() => scrollTo("nasil-calisir")} className="text-[11px] font-bold uppercase tracking-[1px] text-[#d8d8d8] hover:text-primary transition-colors whitespace-nowrap">Nasıl Çalışır?</button>
          <button onClick={() => scrollTo("sss")} className="text-[11px] font-bold uppercase tracking-[1px] text-[#d8d8d8] hover:text-primary transition-colors whitespace-nowrap">SSS</button>
          <button onClick={() => scrollTo("iletisim")} className="text-[11px] font-bold uppercase tracking-[1px] text-[#d8d8d8] hover:text-primary transition-colors whitespace-nowrap">İletişim</button>
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-5 font-bold uppercase tracking-[1px] text-[11px] bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors flex items-center gap-2"
          >
            <WhatsAppIcon size={15} />
            Whatsapp Destek
          </a>
          <button
            onClick={() => onOpenOrder?.()}
            className="h-10 px-5 font-bold uppercase tracking-[1px] text-[11px] bg-primary text-black hover:bg-primary/90 transition-colors"
          >
            Sipariş Ver
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black border-b border-[#3c3c3c] p-4 flex flex-col gap-4">
          <button onClick={() => scrollTo("hakkimizda")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">Hakkımızda</button>
          <button onClick={() => scrollTo("ozellikler")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">Özellikler</button>
          <button onClick={() => scrollTo("paketler")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">Paketler</button>
          <button onClick={() => scrollTo("nasil-calisir")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">Nasıl Çalışır?</button>
          <button onClick={() => scrollTo("sss")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">SSS</button>
          <button onClick={() => scrollTo("iletisim")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">İletişim</button>
          <hr className="border-[#3c3c3c]" />
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-4 font-bold uppercase tracking-[1.5px] text-sm bg-[#25D366] text-white w-full flex items-center justify-center gap-2"
          >
            <WhatsAppIcon size={16} />
            Whatsapp Destek
          </a>
          <button onClick={() => { onOpenOrder?.(); setIsOpen(false); }} className="h-10 px-4 font-bold uppercase tracking-[1.5px] text-sm bg-primary text-black w-full">Sipariş Ver</button>
        </div>
      )}
    </nav>
  );
}
