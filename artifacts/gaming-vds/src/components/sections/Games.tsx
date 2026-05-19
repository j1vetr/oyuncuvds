const games = [
  {
    id: "knight-online",
    name: "Knight Online",
    description: "Pazar, farm ve EXP party için kesintisiz 7/24 hesap açık kalır.",
    image: "/game-knight.jpg",
    logo: "/logo-knight.png",
    tags: ["Pazar", "Farm", "EXP Party"],
    accentColor: "from-slate-900/80 via-slate-800/40 to-transparent",
    tagColor: "border-slate-400/30 text-slate-300",
  },
  {
    id: "metin2",
    name: "Metin2",
    description: "Pazar, farm ve EXP party için kesintisiz 7/24 hesap açık kalır.",
    image: "/game-metin2.jpg",
    logo: "/logo-metin2.png",
    tags: ["Pazar", "Farm", "EXP Party"],
    accentColor: "from-orange-950/80 via-orange-900/30 to-transparent",
    tagColor: "border-orange-400/30 text-orange-300",
  },
  {
    id: "silkroad",
    name: "Silkroad Online",
    description: "Pazar, farm ve EXP party için kesintisiz 7/24 hesap açık kalır.",
    image: "/game-silkroad.jpg",
    logo: "/logo-silkroad.png",
    tags: ["Pazar", "Farm", "EXP Party"],
    accentColor: "from-yellow-950/80 via-yellow-900/30 to-transparent",
    tagColor: "border-yellow-400/30 text-yellow-300",
  },
  {
    id: "diger",
    name: "Diğer MMORPG Oyunları",
    description: "Windows 10 kurulu VDS ile desteklenen tüm MMORPG oyunları için uygundur.",
    image: null,
    logo: null,
    tags: ["Pazar", "Farm", "EXP Party"],
    accentColor: "from-cyan-950/80 via-cyan-900/20 to-transparent",
    tagColor: "border-cyan-400/30 text-cyan-300",
  },
];

export function Games() {
  return (
    <section id="desteklenen-oyunlar" className="w-full bg-black py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-primary">Uyumlu Platformlar</span>
            <span className="w-5 h-px bg-primary" />
          </div>
          <h2 className="text-[28px] md:text-[40px] font-black uppercase text-white tracking-tight mb-3">
            DESTEKLENEN OYUNLAR
          </h2>
          <p className="text-[#c0c0c0] font-light text-[13px] max-w-xl mx-auto leading-[1.7]">
            Bu MMORPG oyunlarında kesintisiz 7/24 kullanım için optimize edilmiş VDS hizmeti.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative flex flex-col bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-game-${game.id}`}
            >
              {/* Image area */}
              <div className="relative h-44 overflow-hidden">
                {game.image ? (
                  <>
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/20" />
                    {/* Bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
                  </>
                ) : (
                  /* Fallback: no image — premium dark gradient with grid pattern */
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a1a] via-[#071010] to-black" />
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-14 h-14 border border-primary/20 flex items-center justify-center mx-auto mb-2">
                          <svg className="w-7 h-7 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
                          </svg>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-[2px] text-primary/40">+ Diğerleri</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
                  </div>
                )}

                {/* Logo overlay — bottom-left of image */}
                {game.logo && (
                  <div className="absolute bottom-2 left-3 z-10">
                    <img
                      src={game.logo}
                      alt={`${game.name} logo`}
                      className="h-6 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.9))" }}
                    />
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 pt-4">
                <h3 className="text-[13px] font-black uppercase text-white tracking-tight mb-2 leading-tight">
                  {game.name}
                </h3>
                <p className="text-[#909090] font-light text-[12px] leading-[1.65] mb-4 flex-1">
                  {game.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-bold uppercase tracking-[1px] px-2 py-0.5 border ${game.tagColor} border-opacity-40`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Stripe divider */}
      <div className="w-full h-[3px] mt-20 flex">
        <div className="w-1/3 bg-primary h-full" />
        <div className="w-1/3 bg-[#1c69d4] h-full" />
        <div className="w-1/3 bg-[#0d3b85] h-full" />
      </div>
    </section>
  );
}
