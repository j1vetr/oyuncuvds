import { ArrowRight, Shield, Wifi, Clock } from "lucide-react";

const games = [
  {
    id: "knight-online",
    name: "Knight Online",
    description: "Pazar, farm ve EXP party için kesintisiz 7/24 hesap açık kalır.",
    image: "/game-knight.jpg",
    logo: "/logo-knight.png",
    tags: ["Pazar", "Farm", "EXP Party"],
    accent: "#2563eb",
    accentSoft: "rgba(37, 99, 235, 0.18)",
  },
  {
    id: "metin2",
    name: "Metin2",
    description: "Pazar, farm ve EXP party için kesintisiz 7/24 hesap açık kalır.",
    image: "/game-metin2.jpg",
    logo: "/logo-metin2.png",
    tags: ["Pazar", "Farm", "EXP Party"],
    accent: "#e0492f",
    accentSoft: "rgba(224, 73, 47, 0.20)",
    logoClass: "h-10 md:h-11",
  },
  {
    id: "silkroad",
    name: "Silkroad Online",
    description: "Pazar, farm ve EXP party için kesintisiz 7/24 hesap açık kalır.",
    image: "/game-silkroad.jpg",
    logo: "/logo-silkroad.png",
    tags: ["Pazar", "Farm", "EXP Party"],
    accent: "#10b981",
    accentSoft: "rgba(16, 185, 129, 0.18)",
  },
];

export function Games() {
  return (
    <section
      id="desteklenen-oyunlar"
      className="relative w-full bg-[#0a0b0d] py-16 md:py-20 overflow-x-clip border-t border-b border-[#1a1c20]"
    >
      {/* Soft dot pattern accents on dark */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 30%, black 80%)",
        }}
      />
      {/* Subtle blue glow accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 20%, rgba(0,82,255,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 80%, rgba(0,82,255,0.12), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#4d8bff] bg-[#0052ff]/15 border border-[#0052ff]/30 rounded-full px-3 py-1 mb-5">
            Uyumlu Platformlar
          </span>
          <h2 className="display-headline text-[40px] md:text-[56px] text-white mb-4 tracking-[-0.02em]">
            Desteklenen oyunlar
          </h2>
          <p className="text-white/65 text-[16px] leading-[1.65]">
            En popüler MMORPG oyunlarında kesintisiz 7/24 kullanım için optimize
            edilmiş VDS hizmeti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {games.map((game) => {
            return (
              <div
                key={game.id}
                className="group relative flex flex-col bg-[#141618] rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_50px_rgba(0,82,255,0.25)] hover:border-white/[0.18] hover:-translate-y-1 transition-all duration-300"
                data-testid={`card-game-${game.id}`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0b0d]" />

                  {/* Logo */}
                  <div className="absolute top-4 left-4">
                    <img
                      src={game.logo}
                      alt={`${game.name} logo`}
                      loading="lazy"
                      decoding="async"
                      className={`${(game as { logoClass?: string }).logoClass ?? "h-14 md:h-16"} w-auto object-contain`}
                      style={{ filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.95))" }}
                    />
                  </div>

                  {/* Tam Uyum badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#05b169] text-white text-[10px] font-bold tracking-tight rounded-full pl-2 pr-2.5 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      Tam Uyum
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="relative flex flex-col flex-1 p-5 pt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[17px] font-bold tracking-tight text-white mb-1">
                        {game.name}
                      </h3>
                      <p className="text-[#9aa0a8] text-[12.5px] leading-[1.55]">
                        {game.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`${game.name} detay`}
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 mt-1"
                      style={{ backgroundColor: game.accent }}
                    >
                      <ArrowRight size={15} className="text-white" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold tracking-tight rounded-full px-2.5 py-1"
                        style={{
                          backgroundColor: game.accentSoft,
                          color: "#fff",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mt-10 max-w-5xl mx-auto bg-white/[0.04] border border-white/[0.10] rounded-2xl px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 backdrop-blur-sm">
          {[
            {
              icon: <Shield size={18} className="text-[#4d8bff]" />,
              title: "Tam Uyum",
              desc: "Oyunlarla %100 uyumlu altyapı.",
            },
            {
              icon: <Wifi size={18} className="text-[#4d8bff]" />,
              title: "Stabil Bağlantı",
              desc: "Düşük ping ve yüksek performans.",
            },
            {
              icon: <Clock size={18} className="text-[#4d8bff]" />,
              title: "7/24 Açık Hesap",
              desc: "Hesaplarınız günün her saati güvende.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#0052ff]/15 border border-[#0052ff]/25 flex items-center justify-center shrink-0">
                {item.icon}
              </span>
              <div>
                <p className="text-[14px] font-bold text-white leading-tight">
                  {item.title}
                </p>
                <p className="text-[12.5px] text-white/60 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
