import { useEffect } from "react";

const COMPANY = "OyuncuVDS.com.tr (TOOV Internet Solutions)";
const ADDRESS = "Sarıyer Merkez Mah. Sarıyer Deresi Sk. No:2 D:2 Sarıyer / İstanbul";
const EMAIL = "destek@oyuncuvds.com.tr";
const PHONE = "0850 309 47 69";

export default function OnBilgilendirme() {
  useEffect(() => {
    document.title = "Ön Bilgilendirme Formu | OyuncuVDS.com.tr";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      <div className="border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Oyuncu VDS" className="h-8 w-auto" />
        </a>
        <a href="/" className="text-[#888] font-light text-xs uppercase tracking-[1.5px] hover:text-white transition-colors">
          Ana Sayfa
        </a>
      </div>

      <main className="container mx-auto px-4 py-14 max-w-2xl">
        <h1 className="text-[22px] md:text-[30px] font-black uppercase tracking-tight text-white mb-2">
          Ön Bilgilendirme Formu
        </h1>
        <p className="text-[#555] text-xs mb-10">Son güncelleme: Mayıs 2026</p>

        <div className="space-y-8 text-[#c0c0c0] font-light text-[13px] leading-[1.85]">

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">1. Satıcı Bilgileri</h2>
            <p>
              <strong className="text-white">Ünvan:</strong> {COMPANY}<br />
              <strong className="text-white">Adres:</strong> {ADDRESS}<br />
              <strong className="text-white">E-posta:</strong> {EMAIL}<br />
              <strong className="text-white">Telefon:</strong> {PHONE}
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">2. Hizmetin Temel Nitelikleri</h2>
            <p>
              Satışa konu hizmet; uzak masaüstü erişimi ile kullanılan, Windows 10 işletim sistemi kurulu, yüksek performanslı CPU ve vGPU destekli grafik altyapısına sahip sanal sunucu (VDS) kiralama hizmetidir. Hizmet Knight Online, Metin2, Silkroad ve benzeri MMORPG oyunlarının kesintisiz çalıştırılması amacıyla sunulmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">3. Hizmet Paketleri ve Fiyatlar</h2>
            <div className="space-y-3">
              <div className="border border-[#1e1e1e] p-4">
                <p className="text-white font-bold mb-1">Baslangic Paketi</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Aylik: 1.200 TL + KDV (%20) = 1.440 TL</li>
                  <li>Yillik: 12.000 TL + KDV (%20) = 14.400 TL (2 ay bedava)</li>
                </ul>
              </div>
              <div className="border border-[#1e1e1e] p-4">
                <p className="text-white font-bold mb-1">Performans Paketi</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Aylik: 1.600 TL + KDV (%20) = 1.920 TL</li>
                  <li>Yillik: 16.000 TL + KDV (%20) = 19.200 TL (2 ay bedava)</li>
                </ul>
              </div>
            </div>
            <p className="mt-3">Tüm fiyatlara KDV dahil toplam tutar sipariş özetinde gösterilmektedir.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">4. Ödeme Koşulları</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ödeme, PayTR güvenli ödeme altyapısı üzerinden kredi/banka kartıyla gerçekleştirilir.</li>
              <li>Tek çekim uygulanmakta olup taksit seçeneği sunulmamaktadır.</li>
              <li>Her satış için e-fatura veya e-arşiv fatura düzenlenmektedir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">5. Teslimat</h2>
            <p>
              Ödemenin onaylanmasının ardından VDS erişim bilgileri (IP adresi, kullanıcı adı ve şifre) sipariş formunda belirtilen WhatsApp numarasına en geç 30-60 dakika içinde iletilir. Yoğunluk halinde bu süre uzayabilir; bu durum WhatsApp üzerinden bildirilir.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">6. Cayma Hakkı</h2>
            <p>
              6502 sayılı Tüketicinin Korunması Hakkında Kanun'un 49. maddesi ve Mesafeli Sözleşmeler Yönetmeliği uyarınca; dijital hizmetlerin ifasına rıza göstererek ve hizmetin ifasına başlanmasına onay vererek sipariş veren tüketici, hizmet ifa edildikten sonra cayma hakkını kullanamaz. VDS erişim bilgilerinin iletilmesiyle birlikte hizmet ifa edilmiş sayılır ve cayma hakkı sona erer.
            </p>
            <p className="mt-2">
              Hizmet ifa edilmeden önce cayma hakkı kullanılabilir. Cayma bildiriminin <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a> adresine iletilmesi gerekmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">7. Şikayet ve Uyuşmazlık</h2>
            <p>
              Şikayetleriniz için <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a> adresine yazabilir veya {PHONE} numaralı hattı arayabilirsiniz. Uyuşmazlıklar için İstanbul Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">8. Onay</h2>
            <p>
              Sipariş formunu doldurup ödemeyi tamamlayan kullanıcı, bu Ön Bilgilendirme Formu'nu okuduğunu, anladığını ve içeriğini kabul ettiğini beyan etmektedir.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
