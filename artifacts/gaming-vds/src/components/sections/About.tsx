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
    <section id="hakkimizda" className="w-full bg-[#f7f7f7] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-14">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-4">
            Hizmetimiz
          </span>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="display-headline text-[36px] md:text-[56px] text-[#0a0b0d]">
              Oyuncu VDS
              <br />
              <span className="text-[#0052ff]">ne yapar?</span>
            </h2>
            <p className="text-[#5b616e] text-[16px] leading-[1.7] md:pb-2">
              Kendi bilgisayarınızı açık bırakmadan, oyun hesabınızı uzaktaki güçlü
              bir Windows sistemi üzerinden kesintisiz çalıştırmanızı sağlarız.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-[#dee1e6] p-7 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow"
              >
                <div className="w-11 h-11 rounded-full bg-[#e6edff] group-hover:bg-[#0052ff]/15 flex items-center justify-center mb-5 transition-colors">
                  <Icon size={18} className="text-[#0052ff]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[17px] font-semibold tracking-tight text-[#0a0b0d] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[#5b616e] text-[13px] leading-[1.7]">{item.body}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-3 bg-white rounded-3xl border border-[#dee1e6] overflow-hidden">
          {[
            { value: "7/24", label: "Kesintisiz Hizmet" },
            { value: "30-60 dk", label: "Ortalama Teslimat" },
            { value: "PayTR", label: "Güvenli Ödeme" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-7 px-6 text-center ${i > 0 ? "border-l border-[#eef0f3]" : ""}`}
            >
              <p className="text-[#0052ff] font-medium text-[24px] tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-[#7c828a] text-[12px] uppercase tracking-[0.1em] font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
