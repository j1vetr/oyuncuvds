const games = [
  {
    id: "knight-online",
    name: "Knight Online",
    description: "Pazar, farm ve EXP party için kesintisiz 7/24 hesap açık kalır.",
    image: "/game-knight.jpg",
    logo: "/logo-knight.png",
    tags: ["Pazar", "Farm", "EXP Party"],
  },
  {
    id: "metin2",
    name: "Metin2",
    description: "Pazar, farm ve EXP party için kesintisiz 7/24 hesap açık kalır.",
    image: "/game-metin2.jpg",
    logo: "/logo-metin2.png",
    tags: ["Pazar", "Farm", "EXP Party"],
  },
  {
    id: "silkroad",
    name: "Silkroad Online",
    description: "Pazar, farm ve EXP party için kesintisiz 7/24 hesap açık kalır.",
    image: "/game-silkroad.jpg",
    logo: "/logo-silkroad.png",
    tags: ["Pazar", "Farm", "EXP Party"],
  },
];

export function Games() {
  return (
    <section id="desteklenen-oyunlar" className="w-full bg-[#f7f7f7] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-4">
            Uyumlu Platformlar
          </span>
          <h2 className="display-headline text-[36px] md:text-[52px] text-[#0a0b0d] mb-4">
            Desteklenen oyunlar
          </h2>
          <p className="text-[#5b616e] text-[16px] leading-[1.65]">
            Bu MMORPG oyunlarında kesintisiz 7/24 kullanım için optimize edilmiş VDS hizmeti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="group flex flex-col bg-white rounded-3xl border border-[#dee1e6] overflow-hidden hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
              data-testid={`card-game-${game.id}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <img
                    src={game.logo}
                    alt={`${game.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="h-7 w-auto object-contain"
                    style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.9))" }}
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-[18px] font-semibold tracking-tight text-[#0a0b0d] mb-2">
                  {game.name}
                </h3>
                <p className="text-[#5b616e] text-[13px] leading-[1.65] mb-5 flex-1">
                  {game.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold tracking-tight text-[#5b616e] bg-[#eef0f3] rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
