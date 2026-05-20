import { Server, Wifi, Shield, Clock, Zap, Headphones } from "lucide-react";
import heroImage from "@assets/9e6a6532-7b5e-42f5-b60d-a1cda41e9985_1779239866848.png";
import paytrLogo from "@assets/PayTR-Logo_1779239906252.png";

function WindowsLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4.5L10.5 3.3V11.4H2V4.5Z" fill="#0078D4" />
      <path d="M11.5 3.15L22 1.7V11.4H11.5V3.15Z" fill="#0078D4" />
      <path d="M2 12.6H10.5V20.7L2 19.5V12.6Z" fill="#0078D4" />
      <path d="M11.5 12.6H22V22.3L11.5 20.85V12.6Z" fill="#0078D4" />
    </svg>
  );
}

const HIGHLIGHTS = [
  {
    Icon: Server,
    title: "Sanal Sunucu",
    body: "Yüksek performanslı CPU ve vGPU destekli altyapımız ile oyunlarınızı ve botlarınızı kesintisiz çalıştırın.",
  },
  {
    icon: <WindowsLogo size={18} />,
    title: "Hazır Windows 10",
    body: "Her VDS, Windows 10 kurulu şekilde teslim edilir. Kurulum gerektirmez, anında bağlanabilirsiniz.",
  },
  {
    Icon: Wifi,
    title: "Ev İnternetinden Bağımsız",
    body: "İnternetiniz kesilse, bilgisayarınız kapansa ya da elektrik gitse bile VDS üzerindeki oyun oturumunuz kesintisiz devam eder.",
  },
  {
    Icon: Clock,
    title: "7/24 Çalışır",
    body: "Pazar kurmak, farm yapmak veya EXP party'de hesap açık tutmak için bilgisayarınızı günlerce açık bırakmanıza gerek yoktur.",
  },
  {
    Icon: Shield,
    title: "Güvenli Ödeme",
    body: "Tüm ödemeler PayTR güvence altyapısıyla işlenir. Kişisel bilgileriniz üçüncü taraflarla paylaşılmaz.",
  },
  {
    Icon: Zap,
    title: "Hızlı Teslimat",
    body: "Ödeme onayınızdan sonra VDS erişim bilgilerin 30-60 dakika içinde WhatsApp ile tarafınıza iletilir.",
  },
];

export function About() {
  return (
    <section
      id="hakkimizda"
      className="relative w-full bg-white py-14 md:py-16 overflow-x-clip border-t border-[#dee1e6]"
    >
      {/* Soft dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #dee1e6 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 35%, black 85%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 35% 40% at 90% 25%, rgba(0,82,255,0.06), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4">
        {/* Top: split header + image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] bg-[#e6edff] rounded-full px-3 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff]" />
              Hizmetimiz
            </span>
            <h2 className="display-headline text-[40px] md:text-[56px] text-[#0a0b0d] mb-5 tracking-[-0.02em] leading-[1.05]">
              Oyuncu VDS
              <br />
              <span className="text-[#0052ff]">ne yapar?</span>
            </h2>
            <p className="text-[#5b616e] text-[16px] leading-[1.7] max-w-md">
              Kendi bilgisayarınızı açık bırakmadan, oyun hesabınızı uzaktaki
              güçlü bir Windows sistemi üzerinden kesintisiz çalıştırmanızı
              sağlar. Oyunlarınızı, botlarınızı ve görevlerinizi her zaman
              çevrimiçi tutun.
            </p>
          </div>
          <div className="lg:-mr-8 xl:-mr-16">
            <img
              src={heroImage}
              alt="Oyuncu VDS uzak masaüstü ile bağlanın"
              loading="lazy"
              decoding="async"
              className="w-full h-auto drop-shadow-[0_30px_50px_rgba(15,23,42,0.18)]"
            />
          </div>
        </div>

        {/* Feature cards grid - 6 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
          {HIGHLIGHTS.map((item, idx) => {
            const IconC = (item as { Icon?: typeof Server }).Icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-[#dee1e6] p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#e6edff] flex items-center justify-center mb-4">
                  {IconC ? (
                    <IconC size={20} className="text-[#0052ff]" strokeWidth={2} />
                  ) : (
                    item.icon
                  )}
                </div>
                <h3 className="text-[15px] font-bold tracking-tight text-[#0a0b0d] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#5b616e] text-[12.5px] leading-[1.6]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <div className="bg-white rounded-2xl border border-[#dee1e6] shadow-[0_4px_20px_rgba(15,23,42,0.04)] px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: <Headphones size={20} className="text-[#0052ff]" />,
              value: "7/24",
              label: "Kesintisiz Hizmet",
              sub: "Her saat, her gün yanınızdayız.",
            },
            {
              icon: <Clock size={20} className="text-[#0052ff]" />,
              value: "30-60 dk",
              label: "Ortalama Teslimat",
              sub: "Hızlı kurulum, hızlı teslimat.",
            },
            {
              icon: (
                <img
                  src={paytrLogo}
                  alt="PayTR"
                  className="h-4 w-auto object-contain"
                />
              ),
              value: "PayTR",
              label: "Güvenli Ödeme",
              sub: "PayTR ile %100 güvenli ödeme.",
            },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-14 h-14 rounded-full bg-[#e6edff] flex items-center justify-center shrink-0">
                {stat.icon}
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-[18px] font-bold text-[#0a0b0d] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[13px] font-semibold text-[#5b616e]">
                    {stat.label}
                  </span>
                </div>
                <p className="text-[12px] text-[#7c828a] leading-snug">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
