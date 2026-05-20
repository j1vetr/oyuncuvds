import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import {
  Headphones,
  MonitorCheck,
  Clock,
  CreditCard,
  Activity,
  Gamepad2,
  ShieldCheck,
  Monitor,
} from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

interface HeroProps {
  onOpenOrder?: () => void;
}

const STATS = [
  {
    icon: Headphones,
    title: "7/24 Kesintisiz Hizmet",
    desc: "Oyun hesaplarınız günün her saati açık kalır.",
  },
  {
    icon: MonitorCheck,
    title: "Windows 10 Kurulu",
    desc: "Hazır sistem, sürücüler ve güncellemeler yüklü.",
  },
  {
    icon: Clock,
    title: "30–60 dk Teslimat",
    desc: "Siparişinizin ardından hızlıca teslim edilir.",
  },
  {
    icon: CreditCard,
    title: "PayTR Güvenli Ödeme",
    desc: "PayTR altyapısı ile güvenli ve hızlı ödeme.",
  },
  {
    icon: Activity,
    title: "%99.9 Uptime",
    desc: "Yüksek performanslı altyapı ile kesintisiz çalışma.",
  },
  {
    icon: Gamepad2,
    title: "Oyunlara Tam Uyum",
    desc: "Knight Online, Metin2 ve Silkroad ile tam uyum.",
  },
];

export function Hero({ onOpenOrder }: HeroProps) {
  return (
    <section className="relative w-full bg-white pt-16 md:pt-20 pb-16 md:pb-24 overflow-x-clip">
      {/* Soft background accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] -z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 80% 10%, rgba(0,82,255,0.08), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] gap-10 lg:gap-10 items-center">
          {/* LEFT: Copy + CTAs */}
          <div className="relative">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef0f3] text-[#0052ff] text-[12px] font-semibold tracking-tight mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff]" />
              7/24 Oyun VDS Hizmeti
            </span>

            <h1 className="display-headline text-[40px] sm:text-[52px] lg:text-[56px] xl:text-[64px] text-[#0a0b0d] leading-[1.05] mb-6">
              Bilgisayarın
              <br />
              kapalıyken
              <br />
              <span className="text-[#0052ff]">oyun hesabın</span>
              <br />
              açık kalsın.
            </h1>

            <p className="text-[#5b616e] text-[16px] md:text-[17px] leading-[1.65] max-w-xl mb-8">
              Knight Online, Metin2 ve Silkroad hesaplarını pazar, farm ve EXP party
              için kesintisiz çalıştır. Windows 10 kurulu, uzak masaüstü erişimli
              Oyuncu VDS paketleriyle hemen başla.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => scrollTo("paketler")}
                className="h-14 px-7 rounded-full bg-[#0052ff] text-white text-[15px] font-semibold hover:bg-[#003ecc] transition-colors flex flex-col items-center justify-center leading-tight"
                data-testid="button-hero-packages"
              >
                <span>Paketleri İncele</span>
                <span className="text-[11px] font-normal opacity-80">
                  Size en uygun paketi seçin
                </span>
              </button>
              <button
                onClick={() => onOpenOrder?.()}
                className="h-14 px-7 rounded-full bg-[#eef0f3] text-[#0a0b0d] text-[15px] font-semibold hover:bg-[#dee1e6] transition-colors flex flex-col items-center justify-center leading-tight"
                data-testid="button-hero-order"
              >
                <span>Sipariş Ver</span>
                <span className="text-[11px] font-normal text-[#5b616e]">
                  Hemen sipariş oluşturun
                </span>
              </button>
              <a
                href="https://wa.me/908503094769"
                target="_blank"
                rel="noreferrer"
                className="h-14 px-7 rounded-full bg-white border border-[#dee1e6] text-[#0a0b0d] text-[15px] font-semibold flex items-center justify-center gap-2.5 hover:border-[#0a0b0d] transition-colors"
                data-testid="button-hero-whatsapp"
              >
                <WhatsAppIcon size={20} className="text-[#25D366]" />
                <span className="flex flex-col items-start leading-tight">
                  <span>WhatsApp Destek</span>
                  <span className="text-[11px] font-normal text-[#5b616e]">
                    7/24 bizimle iletişime geçin
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: Device mockup with floating cards */}
          <div className="relative w-full">
            {/* Float card: Windows 10 (top-right) */}
            <div
              className="hidden lg:flex absolute top-2 right-0 z-20 items-center gap-3 bg-white rounded-2xl border border-[#dee1e6] shadow-[0_8px_24px_rgba(15,23,42,0.06)] px-4 py-3 w-[190px]"
              style={{ animation: "heroFloat 6s ease-in-out infinite" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0052ff]/10 flex items-center justify-center shrink-0">
                <Monitor size={18} className="text-[#0052ff]" />
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-[#0a0b0d]">Windows 10</p>
                <p className="text-[11px] text-[#5b616e]">Kurulu ve hazır sistem</p>
              </div>
            </div>

            {/* Float card: 30-60 dk (middle-right) */}
            <div
              className="hidden lg:flex absolute top-[40%] right-0 z-20 items-center gap-3 bg-white rounded-2xl border border-[#dee1e6] shadow-[0_8px_24px_rgba(15,23,42,0.06)] px-4 py-3 w-[190px]"
              style={{ animation: "heroFloat 7s ease-in-out infinite 0.5s" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0052ff]/10 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-[#0052ff]" />
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-[#0a0b0d]">30–60 dk</p>
                <p className="text-[11px] text-[#5b616e]">Hızlı teslimat</p>
              </div>
            </div>

            {/* Float card: PayTR (bottom-right) */}
            <div
              className="hidden lg:flex absolute bottom-6 right-0 z-20 items-center gap-3 bg-white rounded-2xl border border-[#dee1e6] shadow-[0_8px_24px_rgba(15,23,42,0.06)] px-4 py-3 w-[210px]"
              style={{ animation: "heroFloat 8s ease-in-out infinite 1s" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0052ff]/10 flex items-center justify-center shrink-0">
                <CreditCard size={18} className="text-[#0052ff]" />
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-[#0a0b0d]">
                  Güvenli Ödeme
                </p>
                <p className="text-[11px] text-[#5b616e]">
                  PayTR altyapısı ile güvenli ödeme
                </p>
              </div>
            </div>

            {/* Float card: 7/24 Aktif (top-left, overlapping monitor) */}
            <div
              className="hidden lg:flex absolute top-10 left-0 z-20 items-center gap-3 bg-white rounded-2xl border border-[#dee1e6] shadow-[0_8px_24px_rgba(15,23,42,0.06)] px-4 py-3 w-[190px]"
              style={{ animation: "heroFloat 7s ease-in-out infinite 0.3s" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#05b169]/10 flex items-center justify-center shrink-0">
                <Activity size={18} className="text-[#05b169]" />
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-[#0a0b0d]">7/24 Aktif</p>
                <p className="text-[11px] text-[#5b616e]">Kesintisiz hizmet</p>
              </div>
            </div>

            {/* Float card: Güvenli Erişim (middle-left) */}
            <div
              className="hidden lg:flex absolute bottom-24 left-0 z-20 items-center gap-3 bg-white rounded-2xl border border-[#dee1e6] shadow-[0_8px_24px_rgba(15,23,42,0.06)] px-4 py-3 w-[210px]"
              style={{ animation: "heroFloat 8s ease-in-out infinite 0.8s" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0052ff]/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-[#0052ff]" />
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-[#0a0b0d]">
                  Güvenli Erişim
                </p>
                <p className="text-[11px] text-[#5b616e]">
                  Uzak masaüstü ile güvenli bağlantı
                </p>
              </div>
            </div>

            {/* Device mockup image — fills column on lg, centered on mobile */}
            <img
              src="/hero-devices.png"
              alt="Oyuncu VDS — bilgisayar ve telefon görünümü"
              className="relative z-10 w-full h-auto object-contain mx-auto max-w-[720px] lg:max-w-none lg:scale-110 xl:scale-115 origin-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-16 md:mt-20 rounded-3xl border border-[#dee1e6] bg-white px-6 py-8 md:px-10 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
            {STATS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="w-11 h-11 rounded-full bg-[#0052ff]/10 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-[#0052ff]" />
                </div>
                <p className="text-[13px] font-semibold text-[#0a0b0d] leading-tight mb-1">
                  {title}
                </p>
                <p className="text-[11.5px] text-[#5b616e] leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @media (min-width: 768px) {
          .hero-float-mid { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
}
