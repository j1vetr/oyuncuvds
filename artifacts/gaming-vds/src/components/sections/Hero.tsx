import { MessageCircle, Server, ShieldCheck, Zap, Globe, HardDrive } from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const FEATURES = [
  {
    icon: Server,
    title: "7/24 Açık Kullanım",
    desc: "Bilgisayarınızı açık bırakmanıza gerek kalmaz.",
  },
  {
    icon: ShieldCheck,
    title: "Windows 10 Kurulu",
    desc: "Teslim alır almaz uzak masaüstü ile bağlanabilirsiniz.",
  },
  {
    icon: Zap,
    title: "vGPU Destekli",
    desc: "Oyun istemcileri için daha uyumlu grafik altyapısı.",
  },
  {
    icon: Globe,
    title: "Limitsiz Trafik",
    desc: "Uzun süreli kullanımda kota derdi yaşamazsınız.",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Disk",
    desc: "Daha hızlı açılış ve daha akıcı kullanım deneyimi.",
  },
];

export function Hero() {
  return (
    <section className="relative w-full pt-28 pb-0 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative pb-16" style={{ zIndex: 2 }}>
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-px bg-primary" />
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-primary">
            7/24 OYUN VDS HİZMETİ
          </span>
          <span className="w-6 h-px bg-primary" />
        </div>

        <h1 className="text-[38px] md:text-[68px] font-black uppercase text-white leading-[1.05] tracking-tight max-w-5xl mb-6">
          BİLGİSAYARIN KAPALIYKEN
          <br />
          <span className="text-primary">OYUN HESABIN</span> AÇIK KALSIN
        </h1>

        <p className="text-[15px] md:text-[17px] font-light text-[#bbbbbb] max-w-2xl mb-12 leading-relaxed">
          Knight Online, Metin2 ve Silkroad hesaplarınızı pazar, farm ve EXP party için kesintisiz çalıştırın. Windows 10 kurulu, uzak masaüstü erişimli Oyuncu VDS paketleriyle hemen başlayın.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <button
            onClick={() => scrollTo("paketler")}
            className="w-full md:w-auto h-14 px-10 bg-primary text-black font-black uppercase tracking-[2px] text-sm hover:bg-primary/90 transition-colors"
            data-testid="button-hero-packages"
          >
            PAKETLERİ İNCELE
          </button>
          <button
            onClick={() => scrollTo("siparis")}
            className="w-full md:w-auto h-14 px-10 bg-transparent border border-white text-white font-bold uppercase tracking-[2px] text-sm hover:bg-white/10 transition-colors"
            data-testid="button-hero-order"
          >
            SİPARİŞ VER
          </button>
          <a
            href="https://wa.me/905000000000" target="_blank" rel="noreferrer"
            className="w-full md:w-auto h-14 px-8 bg-[#111] border border-[#3c3c3c] text-white font-bold uppercase tracking-[2px] text-sm flex items-center justify-center gap-3 hover:bg-[#1e1e1e] transition-colors"
            data-testid="button-hero-whatsapp"
          >
            <MessageCircle size={19} className="text-[#25D366]" />
            WHATSAPP DESTEK
          </a>
        </div>
      </div>

      {/* Feature bar — sits at the bottom of the hero, on top of the image */}
      <div className="relative w-full mt-auto" style={{ zIndex: 2 }}>
        <div className="w-full bg-black/80 backdrop-blur-sm border-t border-[#2a2a2a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[#2a2a2a]">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 px-6 py-6">
                  <Icon size={22} className="text-primary mt-0.5 shrink-0" />
                  <div className="text-left">
                    <p className="text-[12px] font-black uppercase tracking-[1.5px] text-white mb-1">{title}</p>
                    <p className="text-[12px] font-light text-[#888] leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
