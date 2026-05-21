import {
  XCircle,
  CheckCircle2,
  Zap,
  Wifi,
  Monitor,
  Smartphone,
  Clock,
  Shield,
  Link as LinkIcon,
  Tablet,
  Laptop,
} from "lucide-react";

const PROBLEMS = [
  {
    icon: <Monitor size={14} className="text-[#cf202f]" />,
    text: "Ev bilgisayarını 7/24 açık bırakmak zorunda kalırsın.",
    sub: "Bilgisayarın sürekli çalışır ve kaynak tüketir.",
  },
  {
    icon: <Zap size={14} className="text-[#cf202f]" />,
    text: "Elektrik tüketimi artar, maliyetin yükselir.",
    sub: "Yüksek elektrik faturalarıyla karşılaşırsın.",
  },
  {
    icon: <Wifi size={14} className="text-[#cf202f]" />,
    text: "Ev internetin kesilirse oyun oturumun da yarıda kalır.",
    sub: "Bağlantı kopmaları tüm süreci riske atar.",
  },
  {
    icon: <Monitor size={14} className="text-[#cf202f]" />,
    text: "Oyun açıkken kendi bilgisayarını rahat kullanamazsın.",
    sub: "Sistem kaynaklarını oyun tarafından kullanılır.",
  },
  {
    icon: <Smartphone size={14} className="text-[#cf202f]" />,
    text: "Dışarıdayken pazarını, farmını veya EXP party durumunu kontrol etmek zordur.",
    sub: "Süreci uzaktan yönetemezsin.",
  },
  {
    icon: <Zap size={14} className="text-[#cf202f]" />,
    text: "Bilgisayar kapanır, güncelleme alır veya bağlantı koparsa hesabın oyundan düşebilir.",
    sub: "Emeklerin ve zamanın riske girer.",
  },
];

const SOLUTIONS = [
  {
    icon: <Clock size={14} className="text-[#0052ff]" />,
    text: "Oyuncu VDS senin yerine 7/24 açık kalır.",
    sub: "Süreklilik kesintisiz devam eder.",
  },
  {
    icon: <Zap size={14} className="text-[#0052ff]" />,
    text: "Düşük maliyet, yüksek verimlilik.",
    sub: "Elektrik derdi olmadan tasarruf edersin.",
  },
  {
    icon: <Shield size={14} className="text-[#0052ff]" />,
    text: "Sabit ve güçlü internet ile kesintisiz bağlantı.",
    sub: "Oturumların stabil ve güvenilir şekilde sürer.",
  },
  {
    icon: <Monitor size={14} className="text-[#0052ff]" />,
    text: "Hesabını pazar, farm veya EXP party'de kesintisiz tutabilirsin.",
    sub: "Oyun sürecin aralıksız devam eder.",
  },
  {
    icon: <Smartphone size={14} className="text-[#0052ff]" />,
    text: "Telefon, tablet veya bilgisayar üzerinden istediğin yerden bağlantı sağlayabilirsin.",
    sub: "Dilediğin zaman kontrol sende.",
  },
  {
    icon: <LinkIcon size={14} className="text-[#0052ff]" />,
    text: "RustDesk ile daha akıcı bağlantı deneyimi alabilir, oyun ekranını rahatça kontrol edebilirsin.",
    sub: "Düşük gecikme, yüksek performans.",
  },
  {
    icon: <CheckCircle2 size={14} className="text-[#0052ff]" />,
    text: "IP ve şifre bilgilerin teslim edildikten sonra kolayca giriş yapabilirsin.",
    sub: "Hızlı kurulum, zahmetsiz kullanım.",
  },
  {
    icon: <Wifi size={14} className="text-[#0052ff]" />,
    text: "Ev internetin veya bilgisayarın kapalı olsa bile VDS çalışmaya devam eder.",
    sub: "Oyun deneyimin kesintisiz sürer.",
  },
];

export function ProblemSolution() {
  return (
    <section
      id="ozellikler"
      className="relative w-full bg-white py-14 md:py-16 overflow-x-clip border-t border-[#dee1e6]"
    >
      {/* Soft background accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 10% 30%, rgba(207,32,47,0.06), transparent 60%), radial-gradient(ellipse 45% 40% at 90% 70%, rgba(0,82,255,0.07), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-4">
            Neden Farklı?
          </span>
          <h2 className="display-headline font-bold text-[40px] md:text-[56px] text-[#0a0b0d] mb-5 tracking-[-0.02em]">
            Neden <span className="text-[#0052ff]">Oyuncu VDS?</span>
          </h2>
          <p className="text-[16px] text-[#5b616e] leading-[1.65]">
            Ev bilgisayarınızı yormadan oyun hesabınızı 7/24 açık tutun. Pazar, farm
            ve EXP party sürecinizi telefon, tablet veya bilgisayar üzerinden
            kolayca kontrol edin.
          </p>
        </div>

        {/* 3-column composition: Problem / Server / Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,360px)_1fr] gap-6 lg:gap-4 xl:gap-6 items-center max-w-7xl mx-auto">
          {/* Problem Card */}
          <div className="bg-white rounded-3xl border border-[#dee1e6] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-6 md:p-7 order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-full bg-[#fbe7e9] flex items-center justify-center">
                <XCircle className="text-[#cf202f]" size={20} />
              </div>
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-[#cf202f] mb-0.5">
                  Mevcut Durum
                </p>
                <h3 className="text-[20px] font-semibold tracking-tight text-[#0a0b0d] leading-none">
                  Sorun
                </h3>
              </div>
            </div>
            <ul className="space-y-4">
              {PROBLEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#fbe7e9] flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div className="leading-tight">
                    <p className="text-[#0a0b0d] text-[13.5px] font-semibold leading-snug mb-1">
                      {item.text}
                    </p>
                    <p className="text-[#8b919c] text-[12px] leading-snug">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Server tower with badge + device icons */}
          <div className="relative flex flex-col items-center order-3 lg:order-2 py-2">
            {/* decorative arrows on lg */}
            <svg
              className="hidden lg:block absolute -left-10 top-1/4 w-16 h-8 text-[#0052ff]/40"
              viewBox="0 0 64 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 16 Q 30 4, 60 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <path d="M54 11 L60 16 L54 21" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <svg
              className="hidden lg:block absolute -right-10 bottom-1/4 w-16 h-8 text-[#0052ff]/40"
              viewBox="0 0 64 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 16 Q 30 28, 60 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <path d="M54 11 L60 16 L54 21" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>

            <img
              src="/server-tower.png"
              alt="Oyuncu VDS sunucu kasası — 7/24 aktif"
              className="w-full max-w-[320px] lg:max-w-[360px] h-auto object-contain"
              style={{ filter: "drop-shadow(0 24px 36px rgba(0,82,255,0.18))" }}
              loading="lazy"
            />

            <div className="mt-6 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0a0b0d] mb-3">
                Her Yerden Erişim
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#eef0f3] flex items-center justify-center">
                  <Smartphone size={18} className="text-[#0a0b0d]" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#eef0f3] flex items-center justify-center">
                  <Tablet size={18} className="text-[#0a0b0d]" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#eef0f3] flex items-center justify-center">
                  <Laptop size={18} className="text-[#0a0b0d]" />
                </div>
              </div>
              <p className="text-[12px] text-[#5b616e] mt-2">
                Telefon, Tablet, Bilgisayar
              </p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-white rounded-3xl border border-[#0052ff]/20 shadow-[0_8px_32px_rgba(0,82,255,0.08)] p-6 md:p-7 order-2 lg:order-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-full bg-[#e6edff] flex items-center justify-center">
                <CheckCircle2 className="text-[#0052ff]" size={20} />
              </div>
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-0.5">
                  Oyuncu VDS ile
                </p>
                <h3 className="text-[20px] font-semibold tracking-tight text-[#0a0b0d] leading-none">
                  Çözüm
                </h3>
              </div>
            </div>
            <ul className="space-y-4">
              {SOLUTIONS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#e6edff] flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div className="leading-tight">
                    <p className="text-[#0a0b0d] text-[13.5px] font-semibold leading-snug mb-1">
                      {item.text}
                    </p>
                    <p className="text-[#8b919c] text-[12px] leading-snug">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-[14px] text-[#5b616e] flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#0052ff]/10 flex items-center justify-center">
              <CheckCircle2 size={12} className="text-[#0052ff]" />
            </span>
            Oyuncu VDS ile oyununa hiç durmasın, kazancın kesintisiz artsın!
          </p>
        </div>
      </div>
    </section>
  );
}
