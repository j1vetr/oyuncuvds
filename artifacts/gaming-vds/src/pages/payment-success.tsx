import { CheckCircle, Monitor, Smartphone, Apple, ChevronRight, AlertTriangle } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "905000000000";
const WA_MSG = encodeURIComponent(
  "Merhaba, Oyuncu VDS siparişim sonrası kurulum ve RustDesk bağlantısı için destek almak istiyorum."
);

const STEPS = [
  "Siparişiniz kontrol edilir.",
  "VDS kurulumunuz hazırlanır.",
  "IP adresi ve giriş şifreniz WhatsApp üzerinden iletilir.",
  "RustDesk ile kasmadan, daha akıcı şekilde bağlantı sağlayabilirsiniz.",
];

const RUSTDESK_STEPS = [
  {
    n: "1",
    text: "RustDesk uygulamasını cihazınıza indirin ve kurun.",
  },
  {
    n: "2",
    text: "WhatsApp üzerinden size iletilen IP adresini veya bağlantı ID bilgisini RustDesk üzerinde ilgili alana girin.",
  },
  {
    n: "3",
    text: "Şifre alanına tarafınıza iletilen şifreyi yazın.",
  },
  {
    n: "4",
    text: 'Tekrar tekrar şifre girmemek için güvenli ve size ait cihazlarda "Parolayı Hatırla" seçeneğini işaretleyebilirsiniz.',
  },
  {
    n: "5",
    text: "Bağlantı sağlandıktan sonra Display / Ekran ayarları bölümünden ekran çözünürlüğünü cihazınıza uygun şekilde ayarlayabilirsiniz.",
  },
  {
    n: "6",
    text: "Bağlantı sonrası oyun hesabınızı kontrol edebilir, pazar, farm veya EXP party kullanımınızı takip edebilirsiniz.",
  },
];

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

      {/* Top bar */}
      <div className="border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Oyuncu VDS" className="h-8 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          <span className="font-black text-white uppercase tracking-[2px] text-sm">Oyuncu VDS</span>
        </a>
      </div>

      <main className="container mx-auto px-4 py-12 max-w-2xl">

        {/* Success header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Oyuncu VDS" className="h-20 w-auto" />
          </div>
          <h1 className="text-[26px] md:text-[36px] font-black uppercase tracking-tight text-white mb-4">
            Ödemeniz Başarıyla Alındı
          </h1>
          <p className="text-[#a8a8a8] font-light text-[14px] leading-[1.75] max-w-lg mx-auto">
            Siparişiniz bize ulaştı. Kurulum sırasına göre VDS erişim bilgileriniz
            maksimum <span className="text-white font-bold">30–60 dakika</span> içerisinde{" "}
            <span className="text-white font-bold">WhatsApp</span> üzerinden tarafınıza iletilecektir.
          </p>
        </div>

        {/* Sırada Ne Var */}
        <div className="border border-[#1e1e1e] bg-[#0a0a0a] p-6 mb-5">
          <h2 className="font-black uppercase tracking-[1px] text-[13px] text-primary mb-5">
            Sırada Ne Var?
          </h2>
          <ol className="space-y-3">
            {STEPS.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 border border-primary/40 flex items-center justify-center text-[11px] font-black text-primary mt-0.5">
                  {i + 1}
                </span>
                <span className="text-[#cccccc] font-light text-[13px] leading-[1.7]">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Önemli not */}
        <div className="border border-[#2a2000] bg-[#120e00] p-4 mb-8 flex gap-3 items-start">
          <AlertTriangle size={16} className="text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-[#ccbb80] font-light text-[12px] leading-[1.75]">
            Lütfen sipariş formunda yazdığınız WhatsApp numarasını kontrol edin. Teslimat ve destek süreci WhatsApp üzerinden ilerler.
          </p>
        </div>

        {/* RustDesk indirme */}
        <div className="border border-[#1e1e1e] bg-[#0a0a0a] p-6 mb-5">
          <h2 className="font-black uppercase tracking-[1px] text-[13px] text-white mb-1">
            RustDesk ile Daha Akıcı Bağlantı
          </h2>
          <p className="text-[#888] font-light text-[12px] leading-[1.75] mb-5">
            VDS bağlantısında daha iyi ekran akıcılığı ve kullanım deneyimi için genellikle RustDesk öneriyoruz.
            Windows, Android ve iPhone cihazlarınızdan RustDesk ile kolayca bağlantı sağlayabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-x86_64.exe"
              target="_blank"
              rel="noreferrer"
              className="flex-1 h-11 flex items-center justify-center gap-2 border border-primary bg-primary/10 text-primary font-bold uppercase tracking-[1.5px] text-[11px] hover:bg-primary/20 transition-colors"
              data-testid="button-rustdesk-windows"
            >
              <Monitor size={15} />
              Windows İndir
            </a>
            <a
              href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-aarch64-signed.apk"
              target="_blank"
              rel="noreferrer"
              className="flex-1 h-11 flex items-center justify-center gap-2 border border-[#2a2a2a] text-[#aaa] font-bold uppercase tracking-[1.5px] text-[11px] hover:border-[#444] hover:text-white transition-colors"
              data-testid="button-rustdesk-android"
            >
              <Smartphone size={15} />
              Android APK İndir
            </a>
            <a
              href="https://apps.apple.com/us/app/rustdesk-remote-desktop/id1581225015"
              target="_blank"
              rel="noreferrer"
              className="flex-1 h-11 flex items-center justify-center gap-2 border border-[#2a2a2a] text-[#aaa] font-bold uppercase tracking-[1.5px] text-[11px] hover:border-[#444] hover:text-white transition-colors"
              data-testid="button-rustdesk-ios"
            >
              <Apple size={15} />
              iPhone / App Store
            </a>
          </div>
          <p className="text-[#555] font-light text-[11px] mt-3">
            App Store'da "RustDesk" yazarak da uygulamayı bulabilirsiniz.
          </p>
        </div>

        {/* RustDesk adımları */}
        <div className="border border-[#1e1e1e] bg-[#0a0a0a] p-6 mb-5">
          <h2 className="font-black uppercase tracking-[1px] text-[13px] text-white mb-5">
            RustDesk ile Nasıl Bağlanılır?
          </h2>
          <ol className="space-y-4">
            {RUSTDESK_STEPS.map((step) => (
              <li key={step.n} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 bg-[#111] border border-[#2a2a2a] flex items-center justify-center text-[11px] font-black text-[#aaa] mt-0.5">
                  {step.n}
                </span>
                <span className="text-[#c0c0c0] font-light text-[13px] leading-[1.7]">{step.text}</span>
              </li>
            ))}
          </ol>

          {/* Güvenlik notu */}
          <div className="mt-6 pt-5 border-t border-[#1a1a1a] flex gap-3 items-start">
            <AlertTriangle size={14} className="text-[#666] shrink-0 mt-0.5" />
            <p className="text-[#666] font-light text-[12px] leading-[1.75]">
              "Parolayı Hatırla" seçeneğini yalnızca kendi bilgisayarınızda veya güvenilir cihazlarınızda kullanın.
              Ortak kullanılan cihazlarda bu seçeneği işaretlemeyin.
            </p>
          </div>
        </div>

        {/* Destek CTA */}
        <div className="border border-[#1e1e1e] bg-[#0a0a0a] p-6 mb-10">
          <h2 className="font-black uppercase tracking-[1px] text-[13px] text-white mb-1">
            Yardıma mı ihtiyacınız var?
          </h2>
          <p className="text-[#888] font-light text-[12px] leading-[1.75] mb-5">
            Kurulum, bağlantı veya RustDesk kullanımıyla ilgili destek almak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 h-11 flex items-center justify-center gap-2 bg-[#00E5FF] text-black font-black uppercase tracking-[1.5px] text-[11px] hover:brightness-90 transition-all"
              data-testid="button-success-whatsapp"
            >
              <WhatsAppIcon size={15} />
              WhatsApp Destek ile Görüş
            </a>
            <a
              href="/"
              className="flex-1 h-11 flex items-center justify-center border border-[#2a2a2a] text-[#aaa] font-bold uppercase tracking-[1.5px] text-[11px] hover:border-[#444] hover:text-white transition-colors"
              data-testid="button-success-home"
            >
              Ana Sayfaya Dön
            </a>
            <a
              href="/#paketler"
              className="flex-1 h-11 flex items-center justify-center gap-1 border border-[#2a2a2a] text-[#aaa] font-bold uppercase tracking-[1.5px] text-[11px] hover:border-[#444] hover:text-white transition-colors"
              data-testid="button-success-packages"
            >
              Paketleri İncele
              <ChevronRight size={13} />
            </a>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg hover:brightness-90 transition-all z-50"
        aria-label="WhatsApp Destek"
      >
        <WhatsAppIcon size={26} className="text-white" />
      </a>
    </div>
  );
}
