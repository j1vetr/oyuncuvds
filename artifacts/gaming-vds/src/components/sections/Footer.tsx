import { Mail, MapPin, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında bilgi almak istiyorum.");

const LEGAL_LINKS = [
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { label: "Mesafeli Satış Sözleşmesi", href: "/mesafeli-satis-sozlesmesi" },
  { label: "Ön Bilgilendirme Formu", href: "/on-bilgilendirme" },
  { label: "İade ve İptal Koşulları", href: "/iade-iptal" },
  { label: "Hizmet ve Teslimat Süreci", href: "/hizmet-teslimat" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0b0d] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img src="/logo.png" alt="Oyuncu VDS" className="h-10 w-auto" style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.2)" }} />
            </a>
            <p className="text-[#a8acb3] text-[14px] leading-relaxed mb-4">
              Knight Online, Metin2 ve Silkroad için 7/24 kesintisiz oyun VDS hizmeti.
            </p>
            <div className="flex items-start gap-2 text-[#7c828a] text-[12px] leading-[1.7]">
              <MapPin size={13} className="shrink-0 mt-0.5" />
              <span>Sarıyer Merkez Mah. Sarıyer Deresi Sk. No:2 D:2 Sarıyer / İstanbul</span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7c828a] mb-5">
              Yasal
            </h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#a8acb3] text-[14px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7c828a] mb-5">
              İletişim
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#a8acb3] text-[14px] hover:text-white transition-colors"
                >
                  <WhatsAppIcon size={15} className="text-[#25D366]" />
                  0850 309 47 69
                </a>
              </li>
              <li>
                <a
                  href="mailto:destek@oyuncuvds.com.tr"
                  className="flex items-center gap-2 text-[#a8acb3] text-[14px] hover:text-white transition-colors"
                >
                  <Mail size={15} />
                  destek@oyuncuvds.com.tr
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/oyuncuvds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#a8acb3] text-[14px] hover:text-white transition-colors"
                >
                  <Instagram size={15} className="text-[#E1306C]" />
                  @oyuncuvds
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7c828a] mb-5">
              Hızlı Erişim
            </h4>
            <ul className="space-y-3">
              <li><a href="/#paketler" className="text-[#a8acb3] text-[14px] hover:text-white transition-colors">Paketler</a></li>
              <li><a href="/#nasil-calisir" className="text-[#a8acb3] text-[14px] hover:text-white transition-colors">Nasıl Çalışır?</a></li>
              <li><a href="/#sss" className="text-[#a8acb3] text-[14px] hover:text-white transition-colors">Sık Sorulan Sorular</a></li>
              <li><a href="/#iletisim" className="text-[#a8acb3] text-[14px] hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
          <span className="text-[#7c828a] text-[12px]">
            © 2026 OyuncuVDS.com.tr | Tüm Hakları Saklıdır.
          </span>
          <span className="text-[#7c828a] text-[12px]">
            Güvenli ödeme altyapısı PayTR ile sağlanmaktadır.
          </span>
        </div>

        <div className="text-center">
          <p className="text-[#5b616e] text-[11px] leading-[1.7]">
            OyuncuVDS.com.tr bir{" "}
            <a
              href="https://toov.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8acb3] hover:text-white transition-colors underline underline-offset-2"
            >
              TOOV Internet Solutions
            </a>{" "}
            iştirakidir. Faturasız satışımız yoktur. Tüm satışlarımız fatura ile gerçekleştirilmektedir.
          </p>
        </div>
      </div>
    </footer>
  );
}
