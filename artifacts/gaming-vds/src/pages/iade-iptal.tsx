import { useEffect } from "react";

const EMAIL = "destek@oyuncuvds.com.tr";
const PHONE = "0850 309 47 69";

export default function IadeIptal() {
  useEffect(() => {
    document.title = "İade ve İptal Koşulları | OyuncuVDS.com.tr";
  }, []);
  return (
    <div className="min-h-screen bg-white text-[#0a0b0d] font-sans">
      <div className="border-b border-[#eef0f3] px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Oyuncu VDS" className="h-10 w-auto" />
        </a>
        <a href="/" className="text-[#5b616e] font-medium text-[13px] hover:text-[#0052ff] transition-colors">
          Ana Sayfa
        </a>
      </div>

      <main className="container mx-auto px-4 py-14 max-w-2xl">
        <h1 className="display-headline text-[28px] md:text-[40px] text-[#0a0b0d] mb-2">
          İade ve İptal Koşulları
        </h1>
        <p className="text-[#7c828a] text-[12px] mb-10">Son güncelleme: Mayıs 2026</p>

        <div className="space-y-8 text-[#5b616e] text-[14px] leading-[1.85]">

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">1. Genel Bilgi</h2>
            <p>
              OyuncuVDS.com.tr tarafından sunulan VDS hizmetleri, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği çerçevesinde değerlendirilmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">2. Cayma Hakkı</h2>
            <p>
              6502 sayılı Kanun'un 16. maddesi uyarınca; elektronik ortamda anında ifa edilen hizmetlerde ve içerik teslimatlarında, hizmetin ifasına başlanmasıyla birlikte tüketicinin cayma hakkı düşmektedir.
            </p>
            <p className="mt-2">
              VDS erişim bilgilerinin (IP, kullanıcı adı, şifre) tarafınıza iletilmesiyle hizmet ifa edilmiş sayılır. Bu noktadan itibaren cayma hakkı kullanılamaz.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">3. İade Koşulları</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#0a0b0d]">Hizmet ifa edilmemişse:</strong> VDS erişim bilgileri henüz iletilmemişse, sipariş iptali talep edilebilir. Ödeme iade edilir.
              </li>
              <li>
                <strong className="text-[#0a0b0d]">Hizmet ifa edildikten sonra:</strong> Teknik bir sorundan kaynaklanmayan taleplerde iade yapılmamaktadır.
              </li>
              <li>
                <strong className="text-[#0a0b0d]">Hizmet sunulamadıysa:</strong> Tarafımızdan kaynaklanan bir nedenle hizmet hiç sunulamadıysa tam iade gerçekleştirilir.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">4. Hizmet İptali</h2>
            <p>
              Aktif bir paket dönem sonunda otomatik yenilenmez; hizmetin devamı için yeni sipariş oluşturulması gerekmektedir. Dönem içi iptal taleplerinde kalan süreye orantılı iade değerlendirmesi, WhatsApp destek hattı üzerinden iletişime geçilerek yapılır.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">5. İade Süreci</h2>
            <p>
              İade onaylanan durumlarda tutar, ödemenin yapıldığı karta 5–10 iş günü içinde iade edilir. İade süreci bankanıza göre değişiklik gösterebilir.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">6. İletişim</h2>
            <p>
              İade ve iptal talepleriniz için:<br />
              E-posta: <a href={`mailto:${EMAIL}`} className="text-[#0052ff] hover:underline">{EMAIL}</a><br />
              WhatsApp / Telefon: {PHONE}
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
