import { XCircle, CheckCircle2, Zap, Wifi, Monitor, Smartphone, Clock, Shield, Link } from "lucide-react";

const PROBLEMS = [
  { icon: <Monitor size={15} className="text-red-500/70 shrink-0 mt-0.5" />, text: "Ev bilgisayarını 7/24 açık bırakmak zorunda kalırsın." },
  { icon: <Zap size={15} className="text-red-500/70 shrink-0 mt-0.5" />, text: "Elektrik tüketimi artar, bilgisayarın gereksiz yere yorulur." },
  { icon: <Wifi size={15} className="text-red-500/70 shrink-0 mt-0.5" />, text: "Ev internetin kesilirse oyun oturumun da yarıda kalabilir." },
  { icon: <Monitor size={15} className="text-red-500/70 shrink-0 mt-0.5" />, text: "Oyun açıkken kendi bilgisayarını rahat kullanamazsın." },
  { icon: <Smartphone size={15} className="text-red-500/70 shrink-0 mt-0.5" />, text: "Dışarıdayken pazarını, farmını veya EXP party durumunu kontrol etmek zorlaşır." },
  { icon: <Zap size={15} className="text-red-500/70 shrink-0 mt-0.5" />, text: "Bilgisayar kapanır, güncelleme alır veya bağlantı koparsa hesabın oyundan düşebilir." },
];

const SOLUTIONS = [
  { icon: <Clock size={15} className="text-primary shrink-0 mt-0.5" />, text: "Oyuncu VDS senin yerine 7/24 açık kalır." },
  { icon: <Monitor size={15} className="text-primary shrink-0 mt-0.5" />, text: "Bilgisayarın kapalı olsa bile oyun oturumun çalışmaya devam eder." },
  { icon: <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />, text: "Hesabını pazar, farm veya EXP party'de kesintisiz tutabilirsin." },
  { icon: <Smartphone size={15} className="text-primary shrink-0 mt-0.5" />, text: "Telefon, tablet veya bilgisayar üzerinden istediğin yerden bağlantı sağlayabilirsin." },
  { icon: <Link size={15} className="text-primary shrink-0 mt-0.5" />, text: "RustDesk ile daha akıcı bağlantı deneyimi alabilir, oyun ekranını rahatça kontrol edebilirsin." },
  { icon: <Shield size={15} className="text-primary shrink-0 mt-0.5" />, text: "IP ve şifre bilgilerin teslim edildikten sonra kolayca giriş yapabilirsin." },
  { icon: <Wifi size={15} className="text-primary shrink-0 mt-0.5" />, text: "Ev internetin veya bilgisayarın kapalı olsa bile VDS çalışmaya devam eder." },
];

export function ProblemSolution() {
  return (
    <section id="ozellikler" className="w-full bg-black pt-16 pb-0">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-primary">Neden Farklı?</span>
            <span className="w-6 h-px bg-primary" />
          </div>
          <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-tight text-white mb-4">
            NEDEN OYUNCU VDS?
          </h2>
          <p className="text-[14px] font-light text-[#c0c0c0] max-w-xl mx-auto leading-[1.85]">
            Ev bilgisayarınızı yormadan, oyun hesabınızı 7/24 açık tutun. Pazar, farm ve EXP party sürecinizi telefon, tablet veya bilgisayar üzerinden kolayca kontrol edin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">

          {/* Problem Card */}
          <div className="relative bg-[#0f0f0f] border border-[#2e2e2e] overflow-hidden">
            <div className="h-[3px] w-full bg-gradient-to-r from-red-600/80 via-red-500/40 to-transparent" />
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-9 w-9 flex items-center justify-center bg-red-500/10 border border-red-500/20">
                  <XCircle className="text-red-500" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-red-500/70 mb-0.5">Mevcut Durum</p>
                  <h3 className="text-[18px] font-black uppercase tracking-tight text-white leading-none">SORUN</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {PROBLEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {item.icon}
                    <p className="text-[#b8b8b8] font-light text-[13px] leading-[1.8]">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Card */}
          <div className="relative bg-[#040d0d] border border-[#1a3535] overflow-hidden">
            <div className="h-[3px] w-full bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute left-0 top-[3px] bottom-0 w-[3px] bg-gradient-to-b from-primary/80 via-primary/30 to-transparent" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="p-8 md:p-10 pl-10 md:pl-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-9 w-9 flex items-center justify-center bg-primary/10 border border-primary/20">
                  <CheckCircle2 className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-primary/70 mb-0.5">Oyuncu VDS ile</p>
                  <h3 className="text-[18px] font-black uppercase tracking-tight text-white leading-none">ÇÖZÜM</h3>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {SOLUTIONS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {item.icon}
                    <p className="text-[#c8c8c8] font-light text-[13px] leading-[1.8]">{item.text}</p>
                  </li>
                ))}
              </ul>

              <a
                href="#paketler"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("paketler")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 h-10 px-6 border border-primary text-primary font-bold uppercase tracking-[1.5px] text-[11px] hover:bg-primary hover:text-black transition-colors"
                data-testid="button-problem-packages"
              >
                Paketleri İncele
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Stripe divider */}
      <div className="w-full h-[3px] mt-16 flex">
        <div className="w-1/3 bg-primary h-full" />
        <div className="w-1/3 bg-[#1c69d4] h-full" />
        <div className="w-1/3 bg-[#0d3b85] h-full" />
      </div>
    </section>
  );
}
