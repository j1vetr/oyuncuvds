import { Gamepad2 } from "lucide-react";

const games = [
  {
    id: "knight-online",
    name: "Knight Online",
    detail: "Pazar, karakter açık bırakma, farm ve EXP party kullanımları için uygundur.",
  },
  {
    id: "metin2",
    name: "Metin2",
    detail: "Pazar, karakter açık bırakma, farm ve EXP party kullanımları için uygundur.",
  },
  {
    id: "silkroad",
    name: "Silkroad Online",
    detail: "Pazar, karakter açık bırakma, farm ve EXP party kullanımları için uygundur.",
  },
  {
    id: "diger",
    name: "Diğer MMORPG Oyunları",
    detail: "Windows 10 kurulu VDS ile desteklenen tüm MMORPG oyunları için uygundur.",
  },
];

export function Games() {
  return (
    <section id="ozellikler" className="w-full bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-black uppercase text-white tracking-tight mb-4">
            DESTEKLENEN OYUNLAR
          </h2>
          <p className="text-[#bbbbbb] font-light text-lg max-w-2xl mx-auto">
            Bu MMORPG oyunlarında kesintisiz 7/24 kullanım için optimize edilmiş VDS hizmeti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-[#1a1a1a] border border-[#3c3c3c] p-8 flex flex-col items-start group hover:border-primary/50 transition-colors"
              data-testid={`card-game-${game.id}`}
            >
              <div className="w-12 h-12 bg-[#262626] border border-[#3c3c3c] flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                <Gamepad2 size={24} className="text-primary" />
              </div>
              <h3 className="text-base font-black uppercase text-white tracking-tight mb-3">
                {game.name}
              </h3>
              <p className="text-[#bbbbbb] font-light text-sm leading-relaxed">
                {game.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stripe divider */}
      <div className="w-full h-1 mt-24 flex">
        <div className="w-1/3 bg-primary h-full" />
        <div className="w-1/3 bg-[#1c69d4] h-full" />
        <div className="w-1/3 bg-[#0d3b85] h-full" />
      </div>
    </section>
  );
}
