import { useEffect } from "react";

const EMAIL = "destek@oyuncuvds.com.tr";
const PHONE = "0850 309 47 69";
const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında destek almak istiyorum.");

export default function HizmetTeslimat() {
  useEffect(() => {
    document.title = "Hizmet ve Teslimat Süreci | OyuncuVDS.com.tr";
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
          Hizmet ve Teslimat Süreci
        </h1>
        <p className="text-[#555] text-xs mb-10">Son güncelleme: Mayıs 2026</p>

        <div className="space-y-8 text-[#c0c0c0] font-light text-[13px] leading-[1.85]">

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">1. Hizmet Nedir?</h2>
            <p>
              OyuncuVDS, veri merkezinde barındırılan fiziksel sunucular üzerinde çalışan Windows 10 kurulu sanal sunucu (VDS) kiralama hizmetidir. Uzak masaüstü protokolü (RDP) veya RustDesk aracılığıyla bağlanılabilen bu sistem, kendi bilgisayarınızdan bağımsız olarak 7/24 kesintisiz çalışır.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">2. Sipariş Süreci</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Web sitesindeki sipariş formundan paket seçimi yapılır (Başlangıç veya Performans).</li>
              <li>Ad, soyad, e-posta ve WhatsApp numarası girilir.</li>
              <li>PayTR güvenli ödeme sayfasına yönlendirilerek kredi/banka kartıyla ödeme yapılır.</li>
              <li>Ödeme onaylandıktan sonra sistem WhatsApp üzerinden bilgilendirir.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">3. Teslimat</h2>
            <p>
              Ödeme onayının ardından VDS kurulum işlemi başlar. Kurulum tamamlandığında aşağıdaki bilgiler sipariş formundaki WhatsApp numarasına iletilir:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>IP adresi</li>
              <li>Kullanıcı adı</li>
              <li>Şifre</li>
              <li>Bağlantı talimatları (RDP veya RustDesk)</li>
            </ul>
            <p className="mt-2">
              Ortalama teslimat süresi <strong className="text-white">30-60 dakikadır.</strong> Yoğunluk durumunda bu süre uzayabilir; önceden WhatsApp üzerinden bildirim yapılır.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">4. Hizmet Kapsamı</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Windows 10 kurulu ve yapılandırılmış sanal sunucu</li>
              <li>Uzak masaüstü erişimi (RDP / RustDesk)</li>
              <li>Yüksek performanslı CPU kaynakları</li>
              <li>vGPU destekli grafik altyapısı (MMORPG uyumlu)</li>
              <li>7/24 kesintisiz çalışma garantisi</li>
              <li>Kurulum ve bağlantı konularında WhatsApp desteği</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">5. Hizmet Dışı Konular</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Oyun kurulumu (talep halinde ayrıca görüşülür)</li>
              <li>Oyun içi bakım, güncelleme veya sunucu sorunları</li>
              <li>Kullanıcının neden olduğu sistem hasarları</li>
              <li>İnternet servis sağlayıcısından kaynaklı bağlantı sorunları</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">6. Yenileme ve Süre</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Aylık paketler: satın alım tarihinden itibaren 30 gün geçerlidir.</li>
              <li>Yıllık paketler: satın alım tarihinden itibaren 12 ay geçerlidir (10 ay bedeli alınır).</li>
              <li>Hizmet süresi dolmadan önce WhatsApp veya e-posta üzerinden yenileme hatırlatması yapılır.</li>
              <li>Süre dolumunda VDS erişimi askıya alınır; yenileme yapılmaması halinde veriler silinir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">7. Teknik Destek</h2>
            <p>
              Hizmet süresince bağlantı, kurulum ve kullanım konularında destek sağlanmaktadır. Destek kanallarımız:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  WhatsApp: 0850 309 47 69
                </a> (öncelikli kanal, 7/24)
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a> (e-posta, aynı gün yanıt)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-[13px] uppercase tracking-[1px] mb-3">8. Fatura</h2>
            <p>
              Tüm satışlar için e-fatura veya e-arşiv fatura düzenlenmektedir. Faturasız satış yapılmamaktadır. Fatura, ödeme onayından sonra e-posta adresinize iletilir. Kurumsal fatura talebi için sipariş öncesinde WhatsApp veya e-posta ile iletişime geçilmesi gerekmektedir.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
