import { Menu, X } from "lucide-react";
import { useState } from "react";

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
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/logo.png" alt="Oyuncu VDS" className="h-14 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("ozellikler")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#d8d8d8] hover:text-primary transition-colors">Özellikler</button>
          <button onClick={() => scrollTo("paketler")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#d8d8d8] hover:text-primary transition-colors">Paketler</button>
          <button onClick={() => scrollTo("nasil-calisir")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#d8d8d8] hover:text-primary transition-colors">Nasıl Çalışır?</button>
          <button onClick={() => scrollTo("sss")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#d8d8d8] hover:text-primary transition-colors">SSS</button>
          <button onClick={() => scrollTo("iletisim")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#d8d8d8] hover:text-primary transition-colors">İletişim</button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="h-10 px-6 font-bold uppercase tracking-[1.5px] text-sm border border-white text-white hover:bg-white/10 transition-colors">Whatsapp Destek</button>
          <button onClick={() => onOpenOrder?.()} className="h-10 px-6 font-bold uppercase tracking-[1.5px] text-sm bg-primary text-black hover:bg-primary/90 transition-colors">Sipariş Ver</button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-[#3c3c3c] p-4 flex flex-col gap-4">
          <button onClick={() => scrollTo("ozellikler")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">Özellikler</button>
          <button onClick={() => scrollTo("paketler")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">Paketler</button>
          <button onClick={() => scrollTo("nasil-calisir")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">Nasıl Çalışır?</button>
          <button onClick={() => scrollTo("sss")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">SSS</button>
          <button onClick={() => scrollTo("iletisim")} className="text-sm font-bold uppercase tracking-[1.5px] text-[#bbbbbb] text-left py-2">İletişim</button>
          <hr className="border-[#3c3c3c]" />
          <button className="h-10 px-4 font-bold uppercase tracking-[1.5px] text-sm border border-white text-white w-full">Whatsapp Destek</button>
          <button onClick={() => { onOpenOrder?.(); setIsOpen(false); }} className="h-10 px-4 font-bold uppercase tracking-[1.5px] text-sm bg-primary text-black w-full">Sipariş Ver</button>
        </div>
      )}
    </nav>
  );
}
