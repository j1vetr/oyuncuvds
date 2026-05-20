import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Oyun VDS nedir?", a: "Oyun VDS, oyun hesabınızı kendi bilgisayarınızı 7/24 açık bırakmadan çalıştırabileceğiniz uzaktaki Windows sistemidir. Pazar, farm ve EXP party gibi uzun süreli kullanımlar için tercih edilir." },
  { q: "Bilgisayarım kapalıyken oyun hesabım açık kalır mı?", a: "Evet. VDS uzaktaki sunucu altyapısında çalıştığı için kendi bilgisayarınız kapalı olsa bile sistem açık kalmaya devam eder. Siz sadece ihtiyaç duyduğunuzda bağlanıp kontrol edersiniz." },
  { q: "VDS'ye nasıl bağlanacağım?", a: "Sipariş sonrası size sunucu IP bilgisi, kullanıcı adı ve şifre iletilir. Genellikle sistem içerisine RustDesk kurulu şekilde teslim edilir. Böylece daha pratik ve akıcı şekilde bağlantı sağlayabilirsiniz." },
  { q: "RDP ile mi bağlanacağım, RustDesk var mı?", a: "Sunucu bilgileri IP ve şifre ile teslim edilir. Standart bağlantı için gerekli bilgiler paylaşılır; kullanım kolaylığı için çoğu teslimatta RustDesk kurulu şekilde sunulur. Bu sayede oyun ekranını kontrol etmek daha rahat olur." },
  { q: "Normal uzak masaüstü bağlantısı kasar mı?", a: "Bazı oyunlarda klasik uzak masaüstü bağlantısı ekran akıcılığı açısından yeterli gelmeyebilir. Bu yüzden kullanım deneyimini iyileştirmek için genellikle RustDesk ile bağlantı önerilir." },
  { q: "Telefondan veya tabletten bağlanabilir miyim?", a: "Evet. RustDesk veya desteklenen uzak bağlantı uygulamaları ile telefon, tablet veya bilgisayar üzerinden VDS'ye bağlanabilirsiniz. Böylece dışarıdayken bile hesabınızı kontrol edebilirsiniz." },
  { q: "Hangi oyunlar için uygundur?", a: "Oyuncu VDS; Knight Online, Metin2, Silkroad Online ve benzeri MMORPG oyunlarında pazar kurma, karakter açık bırakma, farm ve EXP party kullanımları için tercih edilebilir." },
  { q: "VDS hazır mı teslim edilir?", a: "Evet. VDS, Windows 10 kurulu şekilde teslim edilir. Bağlantı bilgileri ve gerekli erişim detayları WhatsApp üzerinden paylaşılır." },
  { q: "Teslimat ne kadar sürer?", a: "Ödeme sonrası sipariş yoğunluğuna göre VDS bilgileriniz en kısa sürede hazırlanıp WhatsApp üzerinden iletilir. Teslimat süresi yoğunluğa göre değişebilir." },
  { q: "İnternetim kesilirse VDS kapanır mı?", a: "Hayır. Sizin ev internetiniz kesilse bile VDS çalışmaya devam eder. Sadece siz tekrar bağlanana kadar kontrol edemezsiniz." },
  { q: "Elektrik kesilirse oyun kapanır mı?", a: "Kendi evinizde elektrik kesilmesi VDS'yi etkilemez. VDS uzaktaki sunucu altyapısında çalıştığı için kendi bilgisayarınızın açık olmasına gerek yoktur." },
  { q: "Aynı anda kaç oyun hesabı açabilirim?", a: "Bu durum seçilen pakete, oyunun sistem ihtiyacına ve kullanım şekline göre değişir. Daha stabil ve uzun süreli kullanım için Performans Oyun VDS paketi önerilir." },
  { q: "Paket yükseltme yapabilir miyim?", a: "Evet. İhtiyacınız artarsa uygunluk durumuna göre daha yüksek pakete geçiş yapabilirsiniz. Paket değişimi için WhatsApp destek üzerinden iletişime geçebilirsiniz." },
  { q: "Aylık ve yıllık ödeme arasındaki fark nedir?", a: "Aylık ödeme her ay yenilenir. Yıllık alımda daha avantajlı fiyat sunulur ve 10 ay ödeyip 12 ay kullanmış olursunuz." },
  { q: "Fiyatlara KDV dahil mi?", a: "Paket fiyatları + KDV olarak belirtilir. Sipariş özetinde KDV tutarı ve ödenecek toplam fiyat ayrıca gösterilir." },
  { q: "Destek nasıl sağlanıyor?", a: "Destek WhatsApp ve e-posta üzerinden sağlanır. Bağlantı, teslimat ve temel kullanım konularında yardımcı olunur." },
  { q: "Oyun kurulumu yapılıyor mu?", a: "Standart teslimatta VDS Windows 10 kurulu şekilde teslim edilir. Oyun kurulumu veya özel kurulum talepleri için sipariş sırasında not bırakabilir ya da WhatsApp destek ile görüşebilirsiniz." },
  { q: "VDS sürekli açık kalabilir mi?", a: "Evet. Hizmetin amacı 7/24 açık kullanım sağlamaktır. Ancak oyunların kendi bakım süreçleri, güncellemeleri veya oyun taraflı bağlantı sorunları VDS hizmetinden bağımsızdır." },
  { q: "Sipariş sonrası bilgilerim nereden gelecek?", a: "Siparişiniz tamamlandıktan sonra VDS erişim bilgileriniz WhatsApp üzerinden tarafınıza iletilir. Bu yüzden sipariş formunda aktif kullandığınız WhatsApp numarasını yazmanız önemlidir." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="w-full bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-4">
            SSS
          </span>
          <h2 className="display-headline text-[36px] md:text-[52px] text-[#0a0b0d]">
            Sık sorulan sorular
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#dee1e6] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left group hover:bg-[#fafafa] transition-colors"
                data-testid={`button-faq-${idx}`}
              >
                <span className="text-[15px] font-semibold text-[#0a0b0d] pr-6 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#0052ff] shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6">
                  <p className="text-[#5b616e] text-[14px] leading-[1.75]">
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
