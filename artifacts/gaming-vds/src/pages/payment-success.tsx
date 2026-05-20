import { useEffect } from "react";
import { CheckCircle, Monitor, Smartphone, Apple, ChevronRight, AlertTriangle } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
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
  { n: "1", text: "RustDesk uygulamasını cihazınıza indirin ve kurun." },
  { n: "2", text: "WhatsApp üzerinden size iletilen IP adresini veya bağlantı ID bilgisini RustDesk üzerinde ilgili alana girin." },
  { n: "3", text: "Şifre alanına tarafınıza iletilen şifreyi yazın." },
  { n: "4", text: 'Tekrar tekrar şifre girmemek için güvenli ve size ait cihazlarda "Parolayı Hatırla" seçeneğini işaretleyebilirsiniz.' },
  { n: "5", text: "Bağlantı sağlandıktan sonra Display / Ekran ayarları bölümünden ekran çözünürlüğünü cihazınıza uygun şekilde ayarlayabilirsiniz." },
  { n: "6", text: "Bağlantı sonrası oyun hesabınızı kontrol edebilir, pazar, farm veya EXP party kullanımınızı takip edebilirsiniz." },
];

export default function PaymentSuccess() {
  useEffect(() => {
    document.title = "Ödemeniz Alındı | OyuncuVDS.com.tr";
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
        {/* Success header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-[#e7f7ee] flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={34} className="text-[#05b169]" strokeWidth={1.75} />
          </div>
          <h1 className="display-headline text-[32px] md:text-[44px] text-[#0a0b0d] mb-4">
            Ödemeniz başarıyla alındı
          </h1>
          <p className="text-[#5b616e] text-[15px] leading-[1.7] max-w-lg mx-auto">
            Siparişiniz bize ulaştı. Kurulum sırasına göre VDS erişim bilgileriniz
            maksimum <span className="text-[#0a0b0d] font-semibold">30–60 dakika</span> içerisinde{" "}
            <span className="text-[#0a0b0d] font-semibold">WhatsApp</span> üzerinden tarafınıza iletilecektir.
          </p>
        </div>

        {/* Sırada Ne Var */}
        <div className="bg-white rounded-3xl border border-[#dee1e6] p-7 mb-5">
          <h2 className="font-semibold text-[15px] text-[#0052ff] mb-5 uppercase tracking-[0.1em]">
            Sırada Ne Var?
          </h2>
          <ol className="space-y-4">
            {STEPS.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#e6edff] flex items-center justify-center text-[12px] font-semibold text-[#0052ff] mt-0.5">
                  {i + 1}
                </span>
                <span className="text-[#5b616e] text-[14px] leading-[1.7]">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Önemli not */}
        <div className="rounded-2xl bg-[#fff8e6] border border-[#f4b000]/25 p-5 mb-8 flex gap-3 items-start">
          <AlertTriangle size={18} className="text-[#b07f00] shrink-0 mt-0.5" />
          <p className="text-[#7a5b00] text-[13px] leading-[1.7]">
            Lütfen sipariş formunda yazdığınız WhatsApp numarasını kontrol edin.
            Teslimat ve destek süreci WhatsApp üzerinden ilerler.
          </p>
        </div>

        {/* RustDesk indirme */}
        <div className="bg-white rounded-3xl border border-[#dee1e6] p-7 mb-5">
          <h2 className="font-semibold text-[18px] tracking-tight text-[#0a0b0d] mb-2">
            RustDesk ile Daha Akıcı Bağlantı
          </h2>
          <p className="text-[#5b616e] text-[13px] leading-[1.7] mb-6">
            VDS bağlantısında daha iyi ekran akıcılığı ve kullanım deneyimi için genellikle
            RustDesk öneriyoruz. Windows, Android ve iPhone cihazlarınızdan kolayca bağlanabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-x86_64.exe"
              target="_blank" rel="noreferrer"
              className="flex-1 h-11 flex items-center justify-center gap-2 rounded-full bg-[#0052ff] text-white font-semibold text-[13px] hover:bg-[#003ecc] transition-colors"
              data-testid="button-rustdesk-windows"
            >
              <Monitor size={16} />
              Windows İndir
            </a>
            <a
              href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-aarch64-signed.apk"
              target="_blank" rel="noreferrer"
              className="flex-1 h-11 flex items-center justify-center gap-2 rounded-full bg-[#eef0f3] text-[#0a0b0d] font-semibold text-[13px] hover:bg-[#dee1e6] transition-colors"
              data-testid="button-rustdesk-android"
            >
              <Smartphone size={16} />
              Android APK
            </a>
            <a
              href="https://apps.apple.com/us/app/rustdesk-remote-desktop/id1581225015"
              target="_blank" rel="noreferrer"
              className="flex-1 h-11 flex items-center justify-center gap-2 rounded-full bg-[#eef0f3] text-[#0a0b0d] font-semibold text-[13px] hover:bg-[#dee1e6] transition-colors"
              data-testid="button-rustdesk-ios"
            >
              <Apple size={16} />
              App Store
            </a>
          </div>
          <p className="text-[#7c828a] text-[12px] mt-3">
            App Store'da "RustDesk" yazarak da uygulamayı bulabilirsiniz.
          </p>
        </div>

        {/* RustDesk adımları */}
        <div className="bg-white rounded-3xl border border-[#dee1e6] p-7 mb-5">
          <h2 className="font-semibold text-[18px] tracking-tight text-[#0a0b0d] mb-5">
            RustDesk ile Nasıl Bağlanılır?
          </h2>
          <ol className="space-y-4">
            {RUSTDESK_STEPS.map((step) => (
              <li key={step.n} className="flex items-start gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#eef0f3] flex items-center justify-center text-[12px] font-semibold text-[#5b616e] mt-0.5">
                  {step.n}
                </span>
                <span className="text-[#5b616e] text-[14px] leading-[1.7]">{step.text}</span>
              </li>
            ))}
          </ol>

          <div className="mt-6 pt-5 border-t border-[#eef0f3] flex gap-3 items-start">
            <AlertTriangle size={15} className="text-[#7c828a] shrink-0 mt-0.5" />
            <p className="text-[#7c828a] text-[12px] leading-[1.7]">
              "Parolayı Hatırla" seçeneğini yalnızca kendi bilgisayarınızda veya güvenilir
              cihazlarınızda kullanın. Ortak kullanılan cihazlarda bu seçeneği işaretlemeyin.
            </p>
          </div>
        </div>

        {/* Destek CTA */}
        <div className="bg-white rounded-3xl border border-[#dee1e6] p-7 mb-10">
          <h2 className="font-semibold text-[18px] tracking-tight text-[#0a0b0d] mb-2">
            Yardıma mı ihtiyacınız var?
          </h2>
          <p className="text-[#5b616e] text-[13px] leading-[1.7] mb-5">
            Kurulum, bağlantı veya RustDesk kullanımıyla ilgili destek almak için WhatsApp
            üzerinden bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank" rel="noreferrer"
              className="flex-1 h-11 flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold text-[13px] hover:bg-[#1faf57] transition-colors"
              data-testid="button-success-whatsapp"
            >
              <WhatsAppIcon size={16} />
              WhatsApp Destek
            </a>
            <a
              href="/"
              className="flex-1 h-11 flex items-center justify-center rounded-full bg-[#eef0f3] text-[#0a0b0d] font-semibold text-[13px] hover:bg-[#dee1e6] transition-colors"
              data-testid="button-success-home"
            >
              Ana Sayfaya Dön
            </a>
            <a
              href="/#paketler"
              className="flex-1 h-11 flex items-center justify-center gap-1 rounded-full bg-[#eef0f3] text-[#0a0b0d] font-semibold text-[13px] hover:bg-[#dee1e6] transition-colors"
              data-testid="button-success-packages"
            >
              Paketleri İncele
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </main>

      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#1faf57] transition-colors z-50"
        aria-label="WhatsApp Destek"
      >
        <WhatsAppIcon size={26} className="text-white" />
      </a>
    </div>
  );
}
