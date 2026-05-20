import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

interface HeroProps {
  onOpenOrder?: () => void;
}

const GAMES = [
  { name: "Knight Online", image: "/game-knight.jpg", logo: "/logo-knight.png" },
  { name: "Metin2", image: "/game-metin2.jpg", logo: "/logo-metin2.png" },
  { name: "Silkroad Online", image: "/game-silkroad.jpg", logo: "/logo-silkroad.png" },
];

export function Hero({ onOpenOrder }: HeroProps) {
  return (
    <section className="relative w-full bg-white pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      {/* Soft background accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] -z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,82,255,0.07), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef0f3] text-[#0052ff] text-[12px] font-semibold tracking-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff]" />
            7/24 Oyun VDS Hizmeti
          </span>
        </div>

        {/* Headline */}
        <h1 className="display-headline text-center text-[42px] sm:text-[56px] md:text-[72px] lg:text-[80px] text-[#0a0b0d] max-w-5xl mx-auto mb-6">
          Bilgisayarın kapalıyken
          <br />
          <span className="text-[#0052ff]">oyun hesabın</span> açık kalsın.
        </h1>

        {/* Subhead */}
        <p className="text-center text-[#5b616e] text-[16px] md:text-[18px] leading-[1.65] max-w-2xl mx-auto mb-10">
          Knight Online, Metin2 ve Silkroad hesaplarını pazar, farm ve EXP party için
          kesintisiz çalıştır. Windows 10 kurulu, uzak masaüstü erişimli Oyuncu VDS
          paketleriyle hemen başla.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <button
            onClick={() => scrollTo("paketler")}
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#0052ff] text-white text-[15px] font-semibold hover:bg-[#003ecc] transition-colors"
            data-testid="button-hero-packages"
          >
            Paketleri İncele
          </button>
          <button
            onClick={() => onOpenOrder?.()}
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#eef0f3] text-[#0a0b0d] text-[15px] font-semibold hover:bg-[#dee1e6] transition-colors"
            data-testid="button-hero-order"
          >
            Sipariş Ver
          </button>
          <a
            href="https://wa.me/908503094769"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-white border border-[#dee1e6] text-[#0a0b0d] text-[15px] font-semibold flex items-center justify-center gap-2.5 hover:border-[#0a0b0d] transition-colors"
            data-testid="button-hero-whatsapp"
          >
            <WhatsAppIcon size={18} className="text-[#25D366]" />
            WhatsApp Destek
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[#7c828a] text-[13px] font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#05b169]" />
            7/24 Aktif
          </span>
          <span className="hidden sm:block text-[#dee1e6]">•</span>
          <span>Windows 10 Kurulu</span>
          <span className="hidden sm:block text-[#dee1e6]">•</span>
          <span>30–60 dk Teslimat</span>
          <span className="hidden sm:block text-[#dee1e6]">•</span>
          <span>PayTR Güvenceli Ödeme</span>
        </div>

        {/* Game showcase cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {GAMES.map((game) => (
            <div
              key={game.name}
              onClick={() => scrollTo("desteklenen-oyunlar")}
              className="group relative h-48 rounded-3xl overflow-hidden cursor-pointer ring-1 ring-[#dee1e6] hover:ring-[#0052ff]/30 transition-all"
            >
              <img
                src={game.image}
                alt={game.name}
                className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/95 via-[#0a0b0d]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <img
                  src={game.logo}
                  alt={`${game.name} logo`}
                  className="h-9 w-auto object-contain object-left mb-2"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))" }}
                />
                <p className="text-white/85 text-[12px] font-medium">
                  Pazar · Farm · EXP Party
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
