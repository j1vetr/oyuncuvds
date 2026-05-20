import { ArrowRight, Shield, Wifi, Clock, Swords, Flame, Compass } from "lucide-react";

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
    Icon: Shield,
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
    Icon: Flame,
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
    Icon: Compass,
  },
];

export function Games() {
  return (
    <section
      id="desteklenen-oyunlar"
      className="relative w-full bg-white py-20 md:py-24 overflow-x-clip border-t border-[#dee1e6]"
    >
      {/* Soft dot pattern accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, #dee1e6 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 30%, black 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] bg-[#e6edff] rounded-full px-3 py-1 mb-5">
            Uyumlu Platformlar
          </span>
          <h2 className="display-headline text-[40px] md:text-[56px] text-[#0a0b0d] mb-4 tracking-[-0.02em]">
            Desteklenen oyunlar
          </h2>
          <p className="text-[#5b616e] text-[16px] leading-[1.65]">
            En popüler MMORPG oyunlarında kesintisiz 7/24 kullanım için optimize
            edilmiş VDS hizmeti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {games.map((game) => {
            const Icon = game.Icon;
            return (
              <div
                key={game.id}
                className="group relative flex flex-col bg-[#0a0b0d] rounded-3xl overflow-hidden border border-[#1a1c20] shadow-[0_8px_30px_rgba(15,23,42,0.10)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.18)] hover:-translate-y-1 transition-all duration-300"
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
                      className="h-8 w-auto object-contain"
                      style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.9))" }}
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
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: game.accent }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
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
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5"
                      style={{ backgroundColor: game.accent }}
                    >
                      <ArrowRight size={14} className="text-white" />
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
        <div className="mt-10 max-w-5xl mx-auto bg-white border border-[#dee1e6] rounded-2xl px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          {[
            {
              icon: <Shield size={18} className="text-[#0052ff]" />,
              title: "Tam Uyum",
              desc: "Oyunlarla %100 uyumlu altyapı.",
            },
            {
              icon: <Wifi size={18} className="text-[#0052ff]" />,
              title: "Stabil Bağlantı",
              desc: "Düşük ping ve yüksek performans.",
            },
            {
              icon: <Clock size={18} className="text-[#0052ff]" />,
              title: "7/24 Açık Hesap",
              desc: "Hesaplarınız günün her saati güvende.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#e6edff] flex items-center justify-center shrink-0">
                {item.icon}
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#0a0b0d] leading-tight">
                  {item.title}
                </p>
                <p className="text-[12.5px] text-[#5b616e] leading-snug">
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
