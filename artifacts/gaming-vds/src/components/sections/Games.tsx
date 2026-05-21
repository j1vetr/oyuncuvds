import { ArrowUpRight, Shield, Wifi, Clock } from "lucide-react";

const games = [
  {
    id: "knight-online",
    num: "01",
    name: "Knight Online",
    short: "KO",
    description:
      "Pazar, farm ve EXP party için 7/24 hesabını açık tut. Karakterin sen yokken de seviye atlasın.",
    image: "/game-knight.jpg",
    logo: "/logo-knight.png",
    tags: ["Pazar", "Farm", "EXP Party", "Macro"],
    accent: "#2563eb",
  },
  {
    id: "metin2",
    num: "02",
    name: "Metin2",
    short: "M2",
    description:
      "Pazar açma, farm ve metin taşı kırma için kesintisiz oyun deneyimi.",
    image: "/game-metin2.jpg",
    logo: "/logo-metin2.png",
    tags: ["Pazar", "Farm", "Metin Taşı"],
    accent: "#e0492f",
    logoClass: "h-10 md:h-12",
  },
  {
    id: "silkroad",
    num: "03",
    name: "Silkroad Online",
    short: "SRO",
    description:
      "Job sistemi, ticaret ve grup avı için stabil bağlantı ve düşük gecikme.",
    image: "/game-silkroad.jpg",
    logo: "/logo-silkroad.png",
    tags: ["Ticaret", "Job", "Farm"],
    accent: "#10b981",
  },
];

const MARQUEE_ITEMS = [
  "Pazar",
  "Farm",
  "EXP Party",
  "7/24 Açık",
  "Düşük Ping",
  "Macro",
  "Knight Online",
  "Metin2",
  "Silkroad",
  "RDP Erişim",
];

export function Games() {
  return (
    <section
      id="desteklenen-oyunlar"
      className="relative w-full bg-[#0a0b0d] py-20 md:py-28 overflow-hidden border-t border-b border-[#1a1c20]"
    >
      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, transparent 25%, black 80%)",
        }}
      />
      {/* Glow accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 20%, rgba(0,82,255,0.22), transparent 60%), radial-gradient(ellipse 45% 40% at 95% 75%, rgba(16,185,129,0.10), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header — editorial */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] text-white/50 uppercase mb-6">
            <span className="text-[#4d8bff]">[</span>
            <span>01 — Uyumlu Platformlar</span>
            <span className="text-[#4d8bff]">]</span>
          </div>
          <h2 className="display-headline text-[44px] sm:text-[64px] lg:text-[80px] text-white tracking-[-0.03em] leading-[0.98]">
            Üç efsane.{" "}
            <span className="italic font-light text-white/70">tek</span>{" "}
            <span className="text-[#4d8bff]">altyapı.</span>
          </h2>
          <p className="text-white/55 text-[15px] md:text-[16.5px] leading-[1.7] mt-6 max-w-xl mx-auto">
            En sevilen MMORPG'ler için optimize edilmiş, kesintisiz 7/24
            çalışan Windows VDS altyapısı.
          </p>
        </div>

        {/* Marquee strip */}
        <div className="relative -mx-4 mb-12 md:mb-16 py-4 border-y border-white/[0.08] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to right, #0a0b0d 0%, transparent 8%, transparent 92%, #0a0b0d 100%)",
            }}
          />
          <div className="flex gap-10 animate-[marquee_38s_linear_infinite] whitespace-nowrap">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
              (t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="text-[13px] font-semibold tracking-[0.18em] uppercase text-white/35 flex items-center gap-10"
                >
                  {t}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4d8bff]/60" />
                </span>
              ),
            )}
          </div>
        </div>

        {/* BENTO grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-7xl mx-auto">
          {/* HERO card — Knight Online */}
          <GameCard
            game={games[0]}
            className="lg:col-span-7 lg:row-span-2 lg:min-h-[640px]"
            featured
          />

          {/* Metin2 */}
          <GameCard
            game={games[1]}
            className="lg:col-span-5 lg:min-h-[310px]"
          />

          {/* Silkroad */}
          <GameCard
            game={games[2]}
            className="lg:col-span-5 lg:min-h-[310px]"
          />
        </div>

        {/* Bottom stat / trust row */}
        <div className="mt-14 md:mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-3xl overflow-hidden">
          {[
            {
              k: "03",
              v: "Desteklenen Oyun",
              sub: "KO · M2 · SRO",
            },
            {
              icon: <Shield size={18} className="text-[#4d8bff]" />,
              k: "Tam Uyum",
              v: "Sistemlerle %100",
              sub: "Stabil bağlantı",
            },
            {
              icon: <Wifi size={18} className="text-[#4d8bff]" />,
              k: "Düşük Ping",
              v: "Yüksek FPS",
              sub: "Kesintisiz oyun",
            },
            {
              icon: <Clock size={18} className="text-[#4d8bff]" />,
              k: "7/24",
              v: "Açık Hesap",
              sub: "Gece-gündüz",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0d0e10] p-6 md:p-7 flex flex-col gap-2"
            >
              {item.icon ? (
                <span className="w-10 h-10 rounded-full bg-[#0052ff]/15 border border-[#0052ff]/25 flex items-center justify-center mb-1">
                  {item.icon}
                </span>
              ) : (
                <span className="display-headline text-[44px] md:text-[52px] text-white leading-none tracking-[-0.03em]">
                  {item.k}
                </span>
              )}
              <p
                className={`font-bold text-white leading-tight ${
                  item.icon ? "text-[16px]" : "text-[13px] uppercase tracking-wider text-white/70"
                }`}
              >
                {item.icon ? item.k : item.v}
              </p>
              <p className="text-[12.5px] text-white/55 leading-snug">
                {item.icon ? item.v : item.sub}
              </p>
              {item.icon && (
                <p className="text-[11px] text-white/40 mt-auto pt-1">
                  {item.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}

type Game = (typeof games)[number] & { logoClass?: string };

function GameCard({
  game,
  className = "",
  featured = false,
}: {
  game: Game;
  className?: string;
  featured?: boolean;
}) {
  return (
    <article
      data-testid={`card-game-${game.id}`}
      className={`group relative overflow-hidden rounded-3xl bg-[#101113] border border-white/[0.08] hover:border-white/[0.20] transition-all duration-500 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(0,82,255,0.35)] ${className}`}
    >
      {/* Background image */}
      <img
        src={game.image}
        alt={game.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
      />

      {/* Multi-layer gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: featured
            ? "linear-gradient(to top, rgba(10,11,13,0.95) 0%, rgba(10,11,13,0.55) 45%, rgba(10,11,13,0.30) 70%, rgba(10,11,13,0.15) 100%)"
            : "linear-gradient(to top, rgba(10,11,13,0.95) 0%, rgba(10,11,13,0.65) 50%, rgba(10,11,13,0.20) 100%)",
        }}
      />
      {/* Accent color wash on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${game.accent}55, transparent 70%)`,
        }}
      />

      {/* Top corner: big number */}
      <div className="absolute top-5 right-5 z-10 text-right">
        <span
          className="display-headline block text-white/95 leading-none tracking-[-0.04em]"
          style={{
            fontSize: featured ? "clamp(80px, 12vw, 140px)" : "60px",
            textShadow: "0 4px 24px rgba(0,0,0,0.6)",
          }}
        >
          {game.num}
        </span>
        <span className="inline-block mt-2 text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase">
          {game.short}
        </span>
      </div>

      {/* Top-left: live status pill */}
      <div className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-full pl-2 pr-3 py-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-70 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16a34a]" />
        </span>
        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/90">
          Tam Uyum
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 inset-x-0 z-10 p-6 md:p-7">
        <img
          src={game.logo}
          alt={`${game.name} logo`}
          loading="lazy"
          decoding="async"
          className={`${game.logoClass ?? "h-12 md:h-14"} w-auto object-contain mb-4`}
          style={{ filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.85))" }}
        />
        <h3
          className={`display-headline text-white tracking-[-0.02em] leading-[1.02] mb-3 ${
            featured ? "text-[34px] md:text-[44px]" : "text-[26px] md:text-[30px]"
          }`}
        >
          {game.name}
        </h3>
        <p
          className={`text-white/70 leading-[1.55] mb-5 ${
            featured ? "text-[15px] max-w-md" : "text-[13.5px] max-w-sm"
          }`}
        >
          {game.description}
        </p>

        <div className="flex items-end justify-between gap-3 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10.5px] font-semibold tracking-wider uppercase rounded-full px-2.5 py-1 bg-white/10 border border-white/15 text-white/90 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA arrow */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: game.accent,
              boxShadow: `0 8px 24px -6px ${game.accent}88`,
            }}
          >
            <ArrowUpRight
              size={18}
              className="text-white transition-transform duration-300 group-hover:rotate-45"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>

      {/* Featured-only accent corner ribbon */}
      {featured && (
        <div className="absolute top-0 left-0 z-0 w-40 h-40 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 0% 0%, ${game.accent}40, transparent 60%)`,
            }}
          />
        </div>
      )}
    </article>
  );
}
