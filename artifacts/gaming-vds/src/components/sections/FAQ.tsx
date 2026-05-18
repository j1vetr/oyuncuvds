import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Oyun VDS nedir?",
    a: "Oyun VDS, oyun hesaplarınızı 7/24 açık tutmak için kullanabileceğiniz bulut tabanlı sanal sunucu hizmetidir. Windows 10 kurulu gelir ve uzak masaüstü bağlantısıyla dilediğiniz yerden erişebilirsiniz.",
  },
  {
    q: "Bilgisayarım kapalıyken oyun hesabım açık kalır mı?",
    a: "Evet. VDS sunucusu sizin bilgisayarınızdan bağımsız çalışır. Bilgisayarınız tamamen kapalı olsa bile VDS üzerindeki oyun hesabınız 7/24 açık kalmaya devam eder.",
  },
  {
    q: "Teslimat nasıl yapılıyor?",
    a: "Ödeme tamamlandıktan sonra VDS erişim bilgileriniz (IP adresi, kullanıcı adı ve şifre) WhatsApp üzerinden tarafınıza iletilir.",
  },
  {
    q: "Hangi oyunlar için uygundur?",
    a: "Knight Online, Metin2 ve Silkroad Online başta olmak üzere Windows 10 üzerinde çalışan tüm MMORPG oyunları için uygundur. Pazar, farm ve EXP party kullanımlarına idealdir.",
  },
  {
    q: "Paket yükseltme yapılabilir mi?",
    a: "Evet. Mevcut paketinizi istediğiniz zaman daha üst bir pakete yükseltebilirsiniz. Yükseltme talepleriniz için WhatsApp destek hattımıza ulaşabilirsiniz.",
  },
  {
    q: "Ödeme sonrası teslimat ne kadar sürer?",
    a: "Ödemeniz onaylandıktan sonra erişim bilgileriniz genellikle en geç 24 saat içinde WhatsApp üzerinden iletilir. Yoğun dönemlerde bu süre kısalabilir.",
  },
  {
    q: "Destek nasıl sağlanıyor?",
    a: "Kurulum, bağlantı ve kullanım ile ilgili tüm destek WhatsApp ve e-posta kanalları üzerinden sağlanmaktadır. Destek ekibimiz sizinle iletişime geçecektir.",
  },
  {
    q: "Yıllık alımda avantaj nedir?",
    a: "Yıllık paket alımında 2 ay ücretsiz kullanım kazanırsınız. Örneğin Başlangıç paketi için aylık 1.200 TL öderken, yıllık alımda toplam 12.000 TL ödersiniz — 2 ay bedava!",
  },
  {
    q: "KDV dahil fiyatı nerede görebilirim?",
    a: "Sipariş akışının 3. adımında (Sipariş Özeti) seçtiğiniz paketin ara toplamı, KDV tutarı (%20) ve genel toplam ayrı ayrı gösterilmektedir.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="w-full bg-[#0d0d0d] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-black uppercase text-white tracking-tight mb-4">
            SIKÇA SORULAN SORULAR
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-0">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border-b border-[#3c3c3c] ${idx === 0 ? "border-t" : ""}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between py-5 text-left group"
                data-testid={`button-faq-${idx}`}
              >
                <span className="font-bold text-white text-sm uppercase tracking-[1px] pr-8 group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-primary shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="pb-5">
                  <p className="text-[#bbbbbb] font-light text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
