import { XCircle, CheckCircle2, Zap, Wifi, Monitor, Smartphone, Clock, Shield, Link } from "lucide-react";

const PROBLEMS = [
  { icon: <Monitor size={16} className="text-[#cf202f] shrink-0 mt-0.5" />, text: "Ev bilgisayarını 7/24 açık bırakmak zorunda kalırsın." },
  { icon: <Zap size={16} className="text-[#cf202f] shrink-0 mt-0.5" />, text: "Elektrik tüketimi artar, bilgisayarın gereksiz yere yorulur." },
  { icon: <Wifi size={16} className="text-[#cf202f] shrink-0 mt-0.5" />, text: "Ev internetin kesilirse oyun oturumun da yarıda kalabilir." },
  { icon: <Monitor size={16} className="text-[#cf202f] shrink-0 mt-0.5" />, text: "Oyun açıkken kendi bilgisayarını rahat kullanamazsın." },
  { icon: <Smartphone size={16} className="text-[#cf202f] shrink-0 mt-0.5" />, text: "Dışarıdayken pazarını, farmını veya EXP party durumunu kontrol etmek zorlaşır." },
  { icon: <Zap size={16} className="text-[#cf202f] shrink-0 mt-0.5" />, text: "Bilgisayar kapanır, güncelleme alır veya bağlantı koparsa hesabın oyundan düşebilir." },
];

const SOLUTIONS = [
  { icon: <Clock size={16} className="text-[#0052ff] shrink-0 mt-0.5" />, text: "Oyuncu VDS senin yerine 7/24 açık kalır." },
  { icon: <Monitor size={16} className="text-[#0052ff] shrink-0 mt-0.5" />, text: "Bilgisayarın kapalı olsa bile oyun oturumun çalışmaya devam eder." },
  { icon: <CheckCircle2 size={16} className="text-[#0052ff] shrink-0 mt-0.5" />, text: "Hesabını pazar, farm veya EXP party'de kesintisiz tutabilirsin." },
  { icon: <Smartphone size={16} className="text-[#0052ff] shrink-0 mt-0.5" />, text: "Telefon, tablet veya bilgisayar üzerinden istediğin yerden bağlantı sağlayabilirsin." },
  { icon: <Link size={16} className="text-[#0052ff] shrink-0 mt-0.5" />, text: "RustDesk ile daha akıcı bağlantı deneyimi alabilir, oyun ekranını rahatça kontrol edebilirsin." },
  { icon: <Shield size={16} className="text-[#0052ff] shrink-0 mt-0.5" />, text: "IP ve şifre bilgilerin teslim edildikten sonra kolayca giriş yapabilirsin." },
  { icon: <Wifi size={16} className="text-[#0052ff] shrink-0 mt-0.5" />, text: "Ev internetin veya bilgisayarın kapalı olsa bile VDS çalışmaya devam eder." },
];

export function ProblemSolution() {
  return (
    <section id="ozellikler" className="w-full bg-[#f7f7f7] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-4">
            Neden Farklı?
          </span>
          <h2 className="display-headline text-[36px] md:text-[52px] text-[#0a0b0d] mb-5">
            Neden Oyuncu VDS?
          </h2>
          <p className="text-[16px] text-[#5b616e] leading-[1.65]">
            Ev bilgisayarınızı yormadan oyun hesabınızı 7/24 açık tutun. Pazar, farm
            ve EXP party sürecinizi telefon, tablet veya bilgisayar üzerinden
            kolayca kontrol edin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto items-start">
          {/* Problem Card */}
          <div className="bg-white rounded-3xl border border-[#dee1e6] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-11 w-11 rounded-full bg-[#fbe7e9] flex items-center justify-center">
                <XCircle className="text-[#cf202f]" size={20} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#cf202f] mb-0.5">
                  Mevcut Durum
                </p>
                <h3 className="text-[20px] font-semibold tracking-tight text-[#0a0b0d] leading-none">
                  Sorun
                </h3>
              </div>
            </div>
            <ul className="space-y-3.5">
              {PROBLEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  <p className="text-[#5b616e] text-[14px] leading-[1.7]">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-white rounded-3xl border border-[#0052ff]/15 p-8 md:p-10 shadow-[0_4px_24px_rgba(0,82,255,0.06)]">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-11 w-11 rounded-full bg-[#e6edff] flex items-center justify-center">
                <CheckCircle2 className="text-[#0052ff]" size={20} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-0.5">
                  Oyuncu VDS ile
                </p>
                <h3 className="text-[20px] font-semibold tracking-tight text-[#0a0b0d] leading-none">
                  Çözüm
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5 mb-8">
              {SOLUTIONS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  <p className="text-[#5b616e] text-[14px] leading-[1.7]">{item.text}</p>
                </li>
              ))}
            </ul>

            <a
              href="#paketler"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("paketler")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#0052ff] text-white text-[13px] font-semibold hover:bg-[#003ecc] transition-colors"
              data-testid="button-problem-packages"
            >
              Paketleri İncele
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
