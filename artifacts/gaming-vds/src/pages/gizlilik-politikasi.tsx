import { useEffect } from "react";

const COMPANY = "OyuncuVDS.com.tr (TOOV Internet Solutions)";
const ADDRESS = "Sarıyer Merkez Mah. Sarıyer Deresi Sk. No:2 D:2 Sarıyer / İstanbul";
const EMAIL = "destek@oyuncuvds.com.tr";
const PHONE = "0850 309 47 69";

export default function GizlilikPolitikasi() {
  useEffect(() => {
    document.title = "Gizlilik Politikası | OyuncuVDS.com.tr";
  }, []);
  return (
    <div className="min-h-screen bg-white text-[#0a0b0d] font-sans">
      <div className="border-b border-[#eef0f3] px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Oyuncu VDS" className="h-14 md:h-16 w-auto" />
        </a>
        <a href="/" className="text-[#5b616e] font-medium text-[13px] hover:text-[#0052ff] transition-colors">
          Ana Sayfa
        </a>
      </div>

      <main className="container mx-auto px-4 py-14 max-w-2xl">
        <h1 className="display-headline text-[28px] md:text-[40px] text-[#0a0b0d] mb-2">
          Gizlilik Politikası
        </h1>
        <p className="text-[#7c828a] text-[12px] mb-10">Son güncelleme: Mayıs 2026</p>

        <div className="space-y-8 text-[#5b616e] text-[14px] leading-[1.85]">

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">1. Veri Sorumlusu</h2>
            <p>
              Bu Gizlilik Politikası; <strong className="text-[#0a0b0d]">{COMPANY}</strong> tarafından işletilen OyuncuVDS.com.tr web sitesine ilişkin kişisel veri işleme faaliyetlerini düzenlemektedir.
            </p>
            <p className="mt-2">
              Adres: {ADDRESS}<br />
              E-posta: {EMAIL}<br />
              Telefon: {PHONE}
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">2. Toplanan Kişisel Veriler</h2>
            <p>Sipariş ve ödeme sürecinde aşağıdaki veriler toplanmaktadır:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Ad ve soyad</li>
              <li>E-posta adresi</li>
              <li>WhatsApp / telefon numarası</li>
              <li>IP adresi (ödeme güvenliği amacıyla)</li>
              <li>Sipariş detayları (paket, fiyat, dönem)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">3. Verilerin Kullanım Amacı</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sipariş işleminin tamamlanması ve VDS hizmetinin sunulması</li>
              <li>Ödeme işleminin gerçekleştirilmesi (PayTR altyapısı üzerinden)</li>
              <li>Teslimat ve destek süreçlerinin yürütülmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi ve fatura düzenlenmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">4. Verilerin Paylaşımı</h2>
            <p>
              Kişisel verileriniz; ödeme altyapısı sağlayıcısı PayTR, yasal yükümlülükler kapsamında kamu kurumları ve hizmet sunumu için zorunlu teknik altyapı sağlayıcıları dışında üçüncü taraflarla paylaşılmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">5. Çerezler (Cookies)</h2>
            <p>
              Sitemiz, oturum yönetimi ve güvenlik amacıyla zorunlu çerezler kullanabilir. Reklam veya izleme amaçlı çerez kullanılmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">6. Veri Saklama Süresi</h2>
            <p>
              Kişisel verileriniz, hizmet ilişkisi süresince ve yasal saklama yükümlülükleri kapsamında (vergi mevzuatı gereği en az 5 yıl) saklanmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">7. Haklarınız (KVKK Md. 11)</h2>
            <p>6698 sayılı KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmiş ise bilgi talep etme</li>
              <li>Düzeltilmesini veya silinmesini talep etme</li>
              <li>İşlemenin kısıtlanmasını isteme</li>
              <li>Veri taşınabilirliği hakkı</li>
            </ul>
            <p className="mt-2">
              Bu haklarınızı kullanmak için <a href={`mailto:${EMAIL}`} className="text-[#0052ff] hover:underline">{EMAIL}</a> adresine yazabilirsiniz.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
