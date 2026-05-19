import { Server, Monitor, Wifi, Shield, Clock, Headphones } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Server,
    title: "Yüksek Performanslı Sanal Sunucu",
    body: "Oyuncu VDS, veri merkezindeki fiziksel sunucu altyapısı üzerinde çalışan tam donanımlı bir Windows sistemidir. Yüksek performanslı CPU ve vGPU destekli grafik altyapısı sayesinde Knight Online, Metin2 ve Silkroad gibi MMORPG oyunları sorunsuz şekilde çalışır.",
  },
  {
    icon: Monitor,
    title: "Windows 10 Kurulu, Hazır Sistem",
    body: "Teslim ettiğimiz her VDS, Windows 10 işletim sistemiyle önceden yapılandırılmış olarak gelir. Ekstra kurulum ya da teknik bilgi gerektirmez. IP adresinizi ve şifrenizi aldıktan sonra RustDesk veya Uzak Masaüstü ile saniyeler içinde sisteme bağlanabilirsiniz.",
  },
  {
    icon: Wifi,
    title: "Ev İnternetinizden Bağımsız",
    body: "VDS, kendi bilgisayarınızdan veya ev internetinizden tamamen bağımsız çalışır. İnternetiniz kesilse, bilgisayarınız kapansa ya da elektrik gitse bile VDS üzerindeki oyun oturumunuz kesintisiz devam eder.",
  },
  {
    icon: Clock,
    title: "7/24 Kesintisiz Çalışma",
    body: "Oyun hesabınızı pazar kurmak, uzun süreli farm yapmak veya EXP party'de açık tutmak için artık bilgisayarınızı günlerce açık bırakmanıza gerek yok. VDS, hafta sonu dahil 7/24 çalışır — siz uyurken bile.",
  },
  {
    icon: Shield,
    title: "Güvenli Ödeme ve Faturalı Hizmet",
    body: "Tüm ödemeler PayTR güvenceli altyapısıyla işlenir. Her satış için fatura düzenlenir; faturasız işlem yapılmaz. Kişisel ve ödeme bilgileriniz hiçbir şekilde üçüncü taraflarla paylaşılmaz.",
  },
  {
    icon: Headphones,
    title: "WhatsApp ile Hızlı Teslimat ve Destek",
    body: "Ödeme onaylandıktan sonra VDS erişim bilgileriniz (IP adresi ve şifre) 30-60 dakika içinde WhatsApp üzerinden iletilir. Kurulum, bağlantı veya kullanım konularında yaşadığınız her sorunda destek ekibimize WhatsApp'tan ulaşabilirsiniz.",
  },
];

export function About() {
  return (
    <section id="hakkimizda" className="w-full bg-[#030303] py-24 border-t border-[#111]">
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
              Kendi bilgisayarınızı 7/24 açık bırakmadan, oyun hesabınızı uzaktaki güçlü bir Windows sistemi üzerinden kesintisiz çalıştırmanızı sağlarız. Pazar, farm ve EXP party için tercih edilen bu hizmet; teslimatı, desteği ve ödeme güvenliğiyle eksiksiz bir paket sunar.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            const borderClasses = [
              "border border-[#141414]",
              "border border-[#141414] md:border-l-0",
              "border border-[#141414] lg:border-l-0 md:border-t-0 lg:border-t",
              "border border-[#141414] md:border-t-0",
              "border border-[#141414] md:border-l-0 md:border-t-0",
              "border border-[#141414] lg:border-l-0 md:border-t-0",
            ];
            return (
              <div
                key={idx}
                className={`group p-8 bg-[#050505] hover:bg-[#080808] transition-colors ${borderClasses[idx]}`}
              >
                <div className="w-10 h-10 border border-[#1e1e1e] group-hover:border-primary/30 flex items-center justify-center mb-5 transition-colors">
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
        <div className="max-w-5xl mx-auto grid grid-cols-3 border border-[#141414] border-t-0 mt-0">
          {[
            { value: "7/24", label: "Kesintisiz Hizmet" },
            { value: "30-60 dk", label: "Ortalama Teslimat" },
            { value: "PayTR", label: "Güvenli Ödeme" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-5 px-6 text-center bg-[#050505] ${i > 0 ? "border-l border-[#141414]" : ""}`}
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
