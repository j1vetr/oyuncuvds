import { useEffect } from "react";

const COMPANY = "OyuncuVDS.com.tr (TOOV Internet Solutions)";
const ADDRESS = "Sarıyer Merkez Mah. Sarıyer Deresi Sk. No:2 D:2 Sarıyer / İstanbul";
const EMAIL = "destek@oyuncuvds.com.tr";
const PHONE = "0850 309 47 69";

export default function MesafeliSatisSozlesmesi() {
  useEffect(() => {
    document.title = "Mesafeli Satış Sözleşmesi | OyuncuVDS.com.tr";
  }, []);
  return (
    <div className="min-h-screen bg-white text-[#0a0b0d] font-sans">
      <div className="border-b border-[#eef0f3] px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Oyuncu VDS" className="h-10 w-auto" style={{ filter: "invert(1) hue-rotate(180deg)" }} />
        </a>
        <a href="/" className="text-[#5b616e] font-medium text-[13px] hover:text-[#0052ff] transition-colors">
          Ana Sayfa
        </a>
      </div>

      <main className="container mx-auto px-4 py-14 max-w-2xl">
        <h1 className="display-headline text-[28px] md:text-[40px] text-[#0a0b0d] mb-2">
          Mesafeli Satış Sözleşmesi
        </h1>
        <p className="text-[#7c828a] text-[12px] mb-10">Son güncelleme: Mayıs 2026</p>

        <div className="space-y-8 text-[#5b616e] text-[14px] leading-[1.85]">

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">1. Taraflar</h2>
            <p>
              <strong className="text-[#0a0b0d]">Satıcı:</strong><br />
              {COMPANY}<br />
              Adres: {ADDRESS}<br />
              E-posta: {EMAIL}<br />
              Telefon: {PHONE}
            </p>
            <p className="mt-3">
              <strong className="text-[#0a0b0d]">Alıcı:</strong> Sipariş formunda bilgileri girilen kişi.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">2. Sözleşmenin Konusu</h2>
            <p>
              Bu sözleşme; Alıcı'nın OyuncuVDS.com.tr üzerinden satın aldığı VDS (Sanal Sunucu) hizmetine ilişkin koşulları düzenlemektedir. Hizmet, uzak masaüstü erişimi ile sunulan Windows tabanlı sanal sunucu kiralama hizmetidir.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">3. Hizmet Bedeli ve Ödeme</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hizmet bedeli sipariş özetinde KDV dahil olarak gösterilir.</li>
              <li>Ödeme, PayTR güvenli ödeme altyapısı üzerinden gerçekleştirilir.</li>
              <li>Tüm satışlar fatura ile gerçekleştirilmektedir. Faturasız satış yapılmamaktadır.</li>
              <li>Yıllık paketlerde 12 ay yerine 10 ay tutarı tahsil edilmekte, 12 ay hizmet sunulmaktadır.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">4. Teslimat</h2>
            <p>
              Ödeme onayının ardından VDS erişim bilgileri (IP adresi, kullanıcı adı, şifre), sipariş formunda belirtilen WhatsApp numarasına kurulum sırasına göre en fazla 30–60 dakika içinde iletilir. Yoğunluk durumunda bu süre uzayabilir; bu durum önceden WhatsApp üzerinden bildirilir.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">5. Hizmetin Kapsamı ve Sınırları</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sunulan hizmet; Windows 10 kurulu, uzak masaüstü erişimli sanal sunucu kiralama hizmetidir.</li>
              <li>Oyun kurulumu standart teslimatta yer almaz; talep durumunda WhatsApp üzerinden görüşülür.</li>
              <li>Oyunların kendi bakım, güncelleme veya sunucu sorunları hizmetin kapsamı dışındadır.</li>
              <li>VDS kaynaklarının kullanımı seçilen pakete göre belirlenir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">6. Alıcı'nın Yükümlülükleri</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Alıcı, sipariş formunda doğru ve güncel bilgi girmekle yükümlüdür.</li>
              <li>VDS erişim bilgileri yalnızca Alıcı'ya özeldir; üçüncü taraflarla paylaşılmamalıdır.</li>
              <li>Hizmetin yasal olmayan amaçlarla kullanımı yasaktır.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">7. Mücbir Sebepler</h2>
            <p>
              Doğal afet, altyapı kesintileri, yasal düzenlemeler veya tarafların kontrolü dışındaki durumlarda hizmet yükümlülükleri geçici olarak askıya alınabilir.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">8. Uyuşmazlık Çözümü</h2>
            <p>
              Bu sözleşmeden doğacak uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkilidir. Tüketici şikayetleri için İl Tüketici Hakem Heyetleri'ne başvurulabilir.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">9. İletişim</h2>
            <p>
              Sözleşmeye ilişkin her türlü soru ve talebiniz için:<br />
              E-posta: <a href={`mailto:${EMAIL}`} className="text-[#0052ff] hover:underline">{EMAIL}</a><br />
              Telefon: {PHONE}
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
