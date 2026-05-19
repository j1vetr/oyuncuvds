import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

interface HeroProps {
  onOpenOrder?: () => void;
}

const GAMES = [
  {
    name: "Knight Online",
    image: "/game-knight.jpg",
    logo: "/logo-knight.png",
    tags: ["Pazar", "Farm", "EXP Party"],
  },
  {
    name: "Metin2",
    image: "/game-metin2.jpg",
    logo: "/logo-metin2.png",
    tags: ["Pazar", "Farm", "EXP Party"],
  },
  {
    name: "Silkroad Online",
    image: "/game-silkroad.jpg",
    logo: "/logo-silkroad.png",
    tags: ["Pazar", "Farm", "EXP Party"],
  },
];

export function Hero({ onOpenOrder }: HeroProps) {
  return (
    <section className="relative w-full pt-28 pb-0 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative pb-16" style={{ zIndex: 2 }}>
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-px bg-primary" />
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-primary">
            7/24 Oyun VDS Hizmeti
          </span>
          <span className="w-6 h-px bg-primary" />
        </div>

        <h1 className="text-[38px] md:text-[68px] font-black uppercase text-white leading-[1.05] tracking-tight max-w-5xl mb-6">
          Bilgisayarın Kapalıyken
          <br />
          <span className="text-primary">Oyun Hesabın</span> Açık Kalsın
        </h1>

        <p className="text-[15px] md:text-[17px] font-light text-[#d1d1d1] max-w-2xl mb-12 leading-[1.85]">
          Knight Online, Metin2 ve Silkroad hesaplarınızı pazar, farm ve EXP party için kesintisiz çalıştırın. Windows 10 kurulu, uzak masaüstü erişimli Oyuncu VDS paketleriyle hemen başlayın.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <button
            onClick={() => scrollTo("paketler")}
            className="w-full md:w-auto h-14 px-10 bg-primary text-black font-black uppercase tracking-[2px] text-sm hover:bg-primary/90 transition-colors"
            data-testid="button-hero-packages"
          >
            Paketleri İncele
          </button>
          <button
            onClick={() => onOpenOrder?.()}
            className="w-full md:w-auto h-14 px-10 bg-transparent border border-white text-white font-bold uppercase tracking-[2px] text-sm hover:bg-white/10 transition-colors"
            data-testid="button-hero-order"
          >
            Sipariş Ver
          </button>
          <a
            href="https://wa.me/905000000000" target="_blank" rel="noreferrer"
            className="w-full md:w-auto h-14 px-8 bg-[#111] border border-[#3c3c3c] text-white font-bold uppercase tracking-[2px] text-sm flex items-center justify-center gap-3 hover:bg-[#1e1e1e] transition-colors"
            data-testid="button-hero-whatsapp"
          >
            <WhatsAppIcon size={19} className="text-[#25D366]" />
            Whatsapp Destek
          </a>
        </div>
      </div>

      {/* Game cards bar — bottom of hero */}
      <div className="relative w-full mt-auto" style={{ zIndex: 2 }}>
        {/* Subtle top separator */}
        <div className="w-full h-px bg-white/10" />
        <div className="grid grid-cols-3">
          {GAMES.map((game, idx) => (
            <div
              key={game.name}
              className={`group relative h-36 overflow-hidden cursor-pointer ${
                idx < GAMES.length - 1 ? "border-r border-white/10" : ""
              }`}
              onClick={() => scrollTo("desteklenen-oyunlar")}
            >
              {/* Background image */}
              <img
                src={game.image}
                alt={game.name}
                className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              {/* Hover tint */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                {/* Logo */}
                <img
                  src={game.logo}
                  alt={`${game.name} logo`}
                  className="h-10 w-auto object-contain object-left mb-3 opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,1))" }}
                />
                {/* Tags */}
                <div className="flex gap-1.5 flex-wrap">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-[1px] px-1.5 py-0.5 border border-white/20 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top hover glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
