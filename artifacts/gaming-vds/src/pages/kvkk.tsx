import { useEffect } from "react";

const COMPANY = "OyuncuVDS.com.tr (TOOV Internet Solutions)";
const ADDRESS = "Sarıyer Merkez Mah. Sarıyer Deresi Sk. No:2 D:2 Sarıyer / İstanbul";
const EMAIL = "destek@oyuncuvds.com.tr";
const PHONE = "0850 309 47 69";

export default function Kvkk() {
  useEffect(() => {
    document.title = "KVKK Aydınlatma Metni | OyuncuVDS.com.tr";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white text-[#0a0b0d] font-sans">
      <div className="border-b border-[#eef0f3] px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo-v2.png" alt="Oyuncu VDS" className="h-14 md:h-16 w-auto" />
        </a>
        <a href="/" className="text-[#5b616e] font-medium text-[13px] hover:text-[#0052ff] transition-colors">
          Ana Sayfa
        </a>
      </div>

      <main className="container mx-auto px-4 py-14 max-w-2xl">
        <h1 className="display-headline text-[28px] md:text-[40px] text-[#0a0b0d] mb-2">
          KVKK Aydınlatma Metni
        </h1>
        <p className="text-[#7c828a] text-[12px] mb-10">Son güncelleme: Mayıs 2026</p>

        <div className="space-y-8 text-[#5b616e] text-[14px] leading-[1.85]">

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">1. Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla <strong className="text-[#0a0b0d]">{COMPANY}</strong> aşağıdaki bilgileri kamuoyuyla paylaşmaktadır.
            </p>
            <p className="mt-2">
              Adres: {ADDRESS}<br />
              E-posta: {EMAIL}<br />
              Telefon: {PHONE}
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">2. İşlenen Kişisel Veriler</h2>
            <p>OyuncuVDS.com.tr üzerinden hizmet alan kullanıcılara ait aşağıdaki kişisel veriler işlenmektedir:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Ad ve soyad</li>
              <li>E-posta adresi</li>
              <li>WhatsApp / telefon numarası</li>
              <li>IP adresi (ödeme güvenliği amacıyla)</li>
              <li>Sipariş ve ödeme bilgileri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>VDS hizmetinin sunulması ve teslimatın gerçekleştirilmesi</li>
              <li>Ödeme işlemlerinin yürütülmesi (PayTR altyapısı)</li>
              <li>Fatura ve muhasebe kayıtlarının tutulması</li>
              <li>Müşteri destek hizmetlerinin sağlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">4. Kişisel Verilerin İşlenme Hukuki Sebebi</h2>
            <p>Kişisel verileriniz; KVKK'nın 5. maddesi kapsamında;</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Sözleşmenin kurulması ve ifası (KVKK m. 5/2-c)</li>
              <li>Hukuki yükümlülüğün yerine getirilmesi (KVKK m. 5/2-ç)</li>
              <li>Meşru menfaat (KVKK m. 5/2-f)</li>
            </ul>
            <p className="mt-2">hukuki sebeplerine dayanılarak işlenmektedir.</p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">5. Verilerin Aktarıldığı Taraflar</h2>
            <p>
              Kişisel verileriniz; ödeme güvenliğinin sağlanması amacıyla PayTR Bilişim Hizmetleri A.Ş.'ye, yasal zorunluluk kapsamında ilgili kamu kurumlarına ve hizmetin ifasında görev alan teknik altyapı sağlayıcılarına aktarılabilir. Pazarlama veya reklam amaçlı üçüncü taraf paylaşımı yapılmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">6. Kişisel Verilerin Saklanma Süresi</h2>
            <p>
              Vergi mevzuatı gereği ödeme ve fatura kayıtları en az 5 yıl saklanmaktadır. Aktif hizmet süresince destek amaçlı iletişim kayıtları tutulmaktadır. Hizmet sona erdiğinde gereksiz veriler silinmekte veya anonimleştirilmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-3">7. KVKK Kapsamındaki Haklarınız</h2>
            <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmiş ise buna ilişkin bilgi talep etme</li>
              <li>Verilerin işlenme amacını öğrenme</li>
              <li>Yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri öğrenme</li>
              <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
              <li>KVKK m. 7 çerçevesinde silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme, silme ve yok etme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
            </ul>
            <p className="mt-3">
              Bu haklarınızı kullanmak için <a href={`mailto:${EMAIL}`} className="text-[#0052ff] hover:underline">{EMAIL}</a> adresine yazılı olarak başvurabilirsiniz.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
