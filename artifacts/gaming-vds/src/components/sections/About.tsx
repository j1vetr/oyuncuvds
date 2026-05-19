import { Server, Monitor, Wifi, Shield, Clock, Headphones } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Server,
    title: "Sanal Sunucu",
    body: "Veri merkezindeki yüksek performanslı CPU ve vGPU destekli grafik altyapısı üzerinde çalışır. Knight Online, Metin2 ve Silkroad sorunsuz çalışır.",
  },
  {
    icon: Monitor,
    title: "Hazır Windows 10",
    body: "Her VDS, Windows 10 kurulu şekilde teslim edilir. Kurulum gerektirmez. IP ve şifrenizle RustDesk veya Uzak Masaüstü ile saniyeler içinde bağlanırsınız.",
  },
  {
    icon: Wifi,
    title: "Ev İnternetinden Bağımsız",
    body: "İnternetiniz kesilse, bilgisayarınız kapansa ya da elektrik gitse bile VDS üzerindeki oyun oturumunuz kesintisiz devam eder.",
  },
  {
    icon: Clock,
    title: "7/24 Çalışır",
    body: "Pazar kurmak, farm yapmak veya EXP party'de hesap açık tutmak için bilgisayarınızı günlerce açık bırakmanıza gerek yoktur.",
  },
  {
    icon: Shield,
    title: "Güvenli Ödeme",
    body: "Tüm ödemeler PayTR güvenceli altyapısıyla işlenir. Her satış için fatura düzenlenir. Kişisel bilgileriniz üçüncü taraflarla paylaşılmaz.",
  },
  {
    icon: Headphones,
    title: "Hızlı Teslimat",
    body: "Ödeme onayından sonra VDS erişim bilgileri 30-60 dakika içinde WhatsApp ile iletilir. Kurulum ve kullanım desteği WhatsApp üzerinden sağlanır.",
  },
];

export function About() {
  return (
    <section id="hakkimizda" className="w-full py-24 border-t border-[#0a1520]" style={{ background: "linear-gradient(160deg, #020d18 0%, #030303 60%)" }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-primary/50 text-[10px] font-bold select-none">|</span>
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-primary">Hizmetimiz</span>
            <span className="text-primary/50 text-[10px] font-bold select-none">|</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-[32px] md:text-[46px] font-black uppercase tracking-tight text-white leading-[1.05]">
              OYUNCU VDS<br />
              <span className="text-primary">NE YAPAR?</span>
            </h2>
            <p className="text-[#888] font-light text-[15px] leading-[1.85] md:pb-1">
              Kendi bilgisayarınızı açık bırakmadan, oyun hesabınızı uzaktaki güçlü bir Windows sistemi üzerinden kesintisiz çalıştırmanızı sağlarız.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            const borderClasses = [
              "border border-[#0d1e2e]",
              "border border-[#0d1e2e] md:border-l-0",
              "border border-[#0d1e2e] lg:border-l-0 md:border-t-0 lg:border-t",
              "border border-[#0d1e2e] md:border-t-0",
              "border border-[#0d1e2e] md:border-l-0 md:border-t-0",
              "border border-[#0d1e2e] lg:border-l-0 md:border-t-0",
            ];
            return (
              <div
                key={idx}
                className={`group p-8 hover:bg-white/[0.02] transition-colors ${borderClasses[idx]}`}
                style={{ background: "rgba(2, 15, 30, 0.5)" }}
              >
                <div className="w-10 h-10 border border-[#0d1e2e] group-hover:border-primary/30 flex items-center justify-center mb-5 transition-colors">
                  <Icon size={18} className="text-primary/60 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-[13px] font-black uppercase tracking-[0.5px] text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#666] font-light text-[12px] leading-[1.85]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <div className="max-w-5xl mx-auto grid grid-cols-3 border border-[#0d1e2e] border-t-0 mt-0">
          {[
            { value: "7/24", label: "Kesintisiz Hizmet" },
            { value: "30-60 dk", label: "Ortalama Teslimat" },
            { value: "PayTR", label: "Güvenli Ödeme" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-5 px-6 text-center ${i > 0 ? "border-l border-[#0d1e2e]" : ""}`}
              style={{ background: "rgba(2, 15, 30, 0.6)" }}
            >
              <p className="text-primary font-black text-[20px] tracking-tight mb-0.5">{stat.value}</p>
              <p className="text-[#555] font-light text-[11px] uppercase tracking-[1px]">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
