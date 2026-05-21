import { useState, useMemo } from "react";
import { ChevronDown, Search, HelpCircle, Wifi, Cpu, CreditCard, Headphones, Sparkles } from "lucide-react";

type Category = "genel" | "baglanti" | "sistem" | "odeme" | "destek";

const faqs: { q: string; a: string; cat: Category }[] = [
  { cat: "genel", q: "Oyun VDS nedir?", a: "Oyun VDS, oyun hesabınızı kendi bilgisayarınızı 7/24 açık bırakmadan çalıştırabileceğiniz uzaktaki Windows sistemidir. Pazar, farm ve EXP party gibi uzun süreli kullanımlar için tercih edilir." },
  { cat: "genel", q: "Hangi oyunlar için uygundur?", a: "Oyuncu VDS; Knight Online, Metin2, Silkroad Online ve benzeri MMORPG oyunlarında pazar kurma, karakter açık bırakma, farm ve EXP party kullanımları için tercih edilebilir." },
  { cat: "genel", q: "VDS hazır mı teslim edilir?", a: "Evet. VDS, Windows 10 kurulu şekilde teslim edilir. Bağlantı bilgileri ve gerekli erişim detayları WhatsApp üzerinden paylaşılır." },
  { cat: "genel", q: "VDS sürekli açık kalabilir mi?", a: "Evet. Hizmetin amacı 7/24 açık kullanım sağlamaktır. Ancak oyunların kendi bakım süreçleri, güncellemeleri veya oyun taraflı bağlantı sorunları VDS hizmetinden bağımsızdır." },

  { cat: "baglanti", q: "VDS'ye nasıl bağlanacağım?", a: "Sipariş sonrası size sunucu IP bilgisi, kullanıcı adı ve şifre iletilir. Genellikle sistem içerisine RustDesk kurulu şekilde teslim edilir. Böylece daha pratik ve akıcı şekilde bağlantı sağlayabilirsiniz." },
  { cat: "baglanti", q: "RDP ile mi bağlanacağım, RustDesk var mı?", a: "Sunucu bilgileri IP ve şifre ile teslim edilir. Standart bağlantı için gerekli bilgiler paylaşılır; kullanım kolaylığı için çoğu teslimatta RustDesk kurulu şekilde sunulur. Bu sayede oyun ekranını kontrol etmek daha rahat olur." },
  { cat: "baglanti", q: "Normal uzak masaüstü bağlantısı kasar mı?", a: "Bazı oyunlarda klasik uzak masaüstü bağlantısı ekran akıcılığı açısından yeterli gelmeyebilir. Bu yüzden kullanım deneyimini iyileştirmek için genellikle RustDesk ile bağlantı önerilir." },
  { cat: "baglanti", q: "Telefondan veya tabletten bağlanabilir miyim?", a: "Evet. RustDesk veya desteklenen uzak bağlantı uygulamaları ile telefon, tablet veya bilgisayar üzerinden VDS'ye bağlanabilirsiniz. Böylece dışarıdayken bile hesabınızı kontrol edebilirsiniz." },
  { cat: "baglanti", q: "Sipariş sonrası bilgilerim nereden gelecek?", a: "Siparişiniz tamamlandıktan sonra VDS erişim bilgileriniz WhatsApp üzerinden tarafınıza iletilir. Bu yüzden sipariş formunda aktif kullandığınız WhatsApp numarasını yazmanız önemlidir." },

  { cat: "sistem", q: "Bilgisayarım kapalıyken oyun hesabım açık kalır mı?", a: "Evet. VDS uzaktaki sunucu altyapısında çalıştığı için kendi bilgisayarınız kapalı olsa bile sistem açık kalmaya devam eder. Siz sadece ihtiyaç duyduğunuzda bağlanıp kontrol edersiniz." },
  { cat: "sistem", q: "İnternetim kesilirse VDS kapanır mı?", a: "Hayır. Sizin ev internetiniz kesilse bile VDS çalışmaya devam eder. Sadece siz tekrar bağlanana kadar kontrol edemezsiniz." },
  { cat: "sistem", q: "Elektrik kesilirse oyun kapanır mı?", a: "Kendi evinizde elektrik kesilmesi VDS'yi etkilemez. VDS uzaktaki sunucu altyapısında çalıştığı için kendi bilgisayarınızın açık olmasına gerek yoktur." },
  { cat: "sistem", q: "Aynı anda kaç oyun hesabı açabilirim?", a: "Bu durum seçilen pakete, oyunun sistem ihtiyacına ve kullanım şekline göre değişir. Daha stabil ve uzun süreli kullanım için Performans Oyun VDS paketi önerilir." },

  { cat: "odeme", q: "Paket yükseltme yapabilir miyim?", a: "Evet. İhtiyacınız artarsa uygunluk durumuna göre daha yüksek pakete geçiş yapabilirsiniz. Paket değişimi için WhatsApp destek üzerinden iletişime geçebilirsiniz." },
  { cat: "odeme", q: "Aylık ve yıllık ödeme arasındaki fark nedir?", a: "Aylık ödeme her ay yenilenir. Yıllık alımda daha avantajlı fiyat sunulur ve 10 ay ödeyip 12 ay kullanmış olursunuz." },
  { cat: "odeme", q: "Fiyatlara KDV dahil mi?", a: "Paket fiyatları + KDV olarak belirtilir. Sipariş özetinde KDV tutarı ve ödenecek toplam fiyat ayrıca gösterilir." },

  { cat: "destek", q: "Teslimat ne kadar sürer?", a: "Ödeme sonrası sipariş yoğunluğuna göre VDS bilgileriniz en kısa sürede hazırlanıp WhatsApp üzerinden iletilir. Teslimat süresi yoğunluğa göre değişebilir." },
  { cat: "destek", q: "Destek nasıl sağlanıyor?", a: "Destek WhatsApp ve e-posta üzerinden sağlanır. Bağlantı, teslimat ve temel kullanım konularında yardımcı olunur." },
  { cat: "destek", q: "Oyun kurulumu yapılıyor mu?", a: "Standart teslimatta VDS Windows 10 kurulu şekilde teslim edilir. Oyun kurulumu veya özel kurulum talepleri için sipariş sırasında not bırakabilir ya da WhatsApp destek ile görüşebilirsiniz." },
];

const categories: { id: "all" | Category; label: string; Icon: typeof HelpCircle }[] = [
  { id: "all", label: "Tümü", Icon: Sparkles },
  { id: "genel", label: "Genel", Icon: HelpCircle },
  { id: "baglanti", label: "Bağlantı", Icon: Wifi },
  { id: "sistem", label: "Sistem", Icon: Cpu },
  { id: "odeme", label: "Ödeme", Icon: CreditCard },
  { id: "destek", label: "Destek", Icon: Headphones },
];

export function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeCat, setActiveCat] = useState<"all" | Category>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    return faqs.filter((f) => {
      if (activeCat !== "all" && f.cat !== activeCat) return false;
      if (!q) return true;
      return (
        f.q.toLocaleLowerCase("tr").includes(q) ||
        f.a.toLocaleLowerCase("tr").includes(q)
      );
    });
  }, [activeCat, query]);

  return (
    <section id="sss" className="w-full bg-[#f7f7f7] py-14 md:py-16 border-t border-[#dee1e6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] bg-[#e6edff] rounded-full px-3 py-1 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff]" />
            SSS
          </span>
          <h2 className="display-headline text-[36px] md:text-[52px] text-[#0a0b0d] mb-4 tracking-[-0.02em]">
            Sık Sorulan Sorular
          </h2>
          <p className="text-[#5b616e] text-[15px] leading-[1.65]">
            Aradığınız cevap burada. Konuya göre filtreleyin veya arama yapın.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-5">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7c828a]"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Soru ara..."
              className="w-full h-12 bg-white border border-[#dee1e6] rounded-full pl-11 pr-4 text-[14px] text-[#0a0b0d] placeholder:text-[#9aa0a8] focus:outline-none focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/15 transition"
              data-testid="input-faq-search"
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((c) => {
            const Icon = c.Icon;
            const active = activeCat === c.id;
            const count =
              c.id === "all"
                ? faqs.length
                : faqs.filter((f) => f.cat === c.id).length;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCat(c.id);
                  setOpenKey(null);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-4 h-9 text-[13px] font-semibold transition-all border ${
                  active
                    ? "bg-[#0052ff] text-white border-[#0052ff] shadow-[0_4px_14px_rgba(0,82,255,0.25)]"
                    : "bg-white text-[#5b616e] border-[#dee1e6] hover:border-[#0052ff]/40 hover:text-[#0a0b0d]"
                }`}
                data-testid={`button-faq-cat-${c.id}`}
              >
                <Icon size={14} />
                {c.label}
                <span
                  className={`text-[11px] rounded-full px-1.5 py-0.5 ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-[#eef0f3] text-[#7c828a]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* FAQ grid - 2 columns */}
        {filtered.length === 0 ? (
          <div className="max-w-xl mx-auto bg-white rounded-2xl border border-[#dee1e6] p-10 text-center">
            <p className="text-[#5b616e] text-[14px]">
              Aramanızla eşleşen bir soru bulunamadı.
            </p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
            {filtered.map((faq) => {
              const key = `${faq.cat}-${faq.q}`;
              const isOpen = openKey === key;
              return (
                <div
                  key={key}
                  className={`bg-white rounded-xl border overflow-hidden transition-all ${
                    isOpen
                      ? "border-[#0052ff]/40 shadow-[0_8px_24px_rgba(0,82,255,0.08)]"
                      : "border-[#dee1e6] hover:border-[#bfc6d0]"
                  }`}
                >
                  <button
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    data-testid={`button-faq-${key}`}
                  >
                    <span className="text-[14px] font-semibold text-[#0a0b0d] pr-4 leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isOpen
                          ? "bg-[#0052ff] text-white rotate-180"
                          : "bg-[#eef0f3] text-[#5b616e]"
                      }`}
                    >
                      <ChevronDown size={15} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0 border-t border-[#eef0f3]">
                        <p className="text-[#5b616e] text-[13.5px] leading-[1.7] pt-3">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Help footer */}
        <div className="max-w-3xl mx-auto mt-8 bg-white rounded-2xl border border-[#dee1e6] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="w-10 h-10 rounded-full bg-[#e6edff] flex items-center justify-center shrink-0">
              <Headphones size={18} className="text-[#0052ff]" />
            </span>
            <div>
              <p className="text-[14px] font-bold text-[#0a0b0d] leading-tight">
                Cevabınızı bulamadınız mı?
              </p>
              <p className="text-[12.5px] text-[#7c828a]">
                WhatsApp üzerinden 7/24 destek ekibimize ulaşın.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/908503094769?text=${encodeURIComponent(
              "Merhaba, Oyun VDS hakkında bir sorum var.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0052ff] hover:bg-[#0042cc] text-white text-[13px] font-semibold rounded-full px-5 h-10 transition-colors whitespace-nowrap"
            data-testid="button-faq-contact"
          >
            WhatsApp ile Sor
          </a>
        </div>
      </div>
    </section>
  );
}
