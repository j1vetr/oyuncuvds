import { MessageCircle, Server, ShieldCheck, Zap, Globe, HardDrive } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HERO_VIDEOS = [
  "/hero-knight.mp4",
  "/hero-silkroad.mp4",
  "/hero-metin2.mp4",
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  const tryPlay = (video: HTMLVideoElement) => {
    video.play().then(() => {
      setNeedsInteraction(false);
    }).catch(() => {
      setNeedsInteraction(true);
    });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    tryPlay(video);
  }, [currentIndex]);

  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const handleClick = () => {
    const video = videoRef.current;
    if (video && needsInteraction) {
      tryPlay(video);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden cursor-default"
      onClick={handleClick}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        src={HERO_VIDEOS[currentIndex]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative" style={{ zIndex: 2 }}>
        {needsInteraction && (
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-primary/70">
            — videoyu başlatmak için tıklayın —
          </div>
        )}

        <h1 className="text-[40px] md:text-[72px] font-black uppercase text-white leading-[1.1] tracking-tight max-w-5xl mb-6">
          KNIGHT ONLINE, METIN2 VE SILKROAD İÇİN 7/24 OYUN VDS
        </h1>
        <p className="text-[16px] md:text-[18px] font-light text-[#bbbbbb] max-w-3xl mb-12 leading-relaxed">
          Bilgisayarınızı açık bırakmadan pazar, farm ve EXP party hesaplarınızı kesintisiz çalıştırın. Windows 10 kurulu, uzak masaüstü erişimli oyun VDS paketleriyle hemen başlayın.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mb-16 w-full md:w-auto">
          <button
            onClick={(e) => { e.stopPropagation(); scrollTo("paketler"); }}
            className="w-full md:w-auto h-14 px-8 bg-primary text-black font-bold uppercase tracking-[1.5px] hover:bg-primary/90 transition-colors"
            data-testid="button-hero-packages"
          >
            PAKETLERİ İNCELE
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); scrollTo("siparis"); }}
            className="w-full md:w-auto h-14 px-8 bg-transparent border border-white text-white font-bold uppercase tracking-[1.5px] hover:bg-white/10 transition-colors"
            data-testid="button-hero-order"
          >
            SİPARİŞ VER
          </button>
          <a
            href="https://wa.me/905000000000" target="_blank" rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full md:w-auto h-14 px-8 bg-[#1a1a1a] border border-[#3c3c3c] text-white font-bold uppercase tracking-[1.5px] flex items-center justify-center gap-3 hover:bg-[#262626] transition-colors"
            data-testid="button-hero-whatsapp"
          >
            <MessageCircle size={20} className="text-[#25D366]" />
            WHATSAPP DESTEK
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 border-y border-[#3c3c3c] py-6 px-8 max-w-5xl bg-black/60 backdrop-blur-sm">
          <div className="flex items-center gap-2"><Server size={18} className="text-primary"/><span className="text-xs font-bold uppercase tracking-wider text-[#bbbbbb]">7/24 Açık Kullanım</span></div>
          <div className="hidden md:block w-px h-6 bg-[#3c3c3c]"></div>
          <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary"/><span className="text-xs font-bold uppercase tracking-wider text-[#bbbbbb]">Windows 10 Kurulu</span></div>
          <div className="hidden md:block w-px h-6 bg-[#3c3c3c]"></div>
          <div className="flex items-center gap-2"><Zap size={18} className="text-primary"/><span className="text-xs font-bold uppercase tracking-wider text-[#bbbbbb]">vGPU Destekli</span></div>
          <div className="hidden md:block w-px h-6 bg-[#3c3c3c]"></div>
          <div className="flex items-center gap-2"><Globe size={18} className="text-primary"/><span className="text-xs font-bold uppercase tracking-wider text-[#bbbbbb]">Limitsiz Trafik</span></div>
          <div className="hidden md:block w-px h-6 bg-[#3c3c3c]"></div>
          <div className="flex items-center gap-2"><HardDrive size={18} className="text-primary"/><span className="text-xs font-bold uppercase tracking-wider text-[#bbbbbb]">NVMe SSD Disk</span></div>
        </div>
      </div>
    </section>
  );
}
