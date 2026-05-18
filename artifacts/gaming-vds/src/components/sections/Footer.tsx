import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function Footer() {
  const whatsappUrl = `https://wa.me/905000000000?text=${encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında bilgi almak istiyorum.")}`;

  return (
    <footer className="w-full bg-black border-t border-[#3c3c3c]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="text-xl font-black uppercase tracking-tighter text-white block mb-4">
              OYUN VDS
            </span>
            <p className="text-[#7e7e7e] font-light text-sm leading-relaxed">
              Knight Online, Metin2 ve Silkroad için 7/24 kesintisiz oyun VDS hizmeti.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[1.5px] text-[#7e7e7e] mb-6">
              YASAL
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#bbbbbb] font-light text-sm hover:text-white transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-[#bbbbbb] font-light text-sm hover:text-white transition-colors">
                  Mesafeli Satış Sözleşmesi
                </a>
              </li>
              <li>
                <a href="#" className="text-[#bbbbbb] font-light text-sm hover:text-white transition-colors">
                  İade ve İptal Koşulları
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[1.5px] text-[#7e7e7e] mb-6">
              DESTEK
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#bbbbbb] font-light text-sm hover:text-white transition-colors"
                >
                  <WhatsAppIcon size={16} className="text-[#25D366]" />
                  WhatsApp Destek
                </a>
              </li>
              <li>
                <a
                  href="mailto:destek@oyunvds.com"
                  className="flex items-center gap-2 text-[#bbbbbb] font-light text-sm hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-primary" />
                  destek@oyunvds.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3c3c3c] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#7e7e7e] text-xs font-light">
            © 2025 Oyun VDS. Tüm hakları saklıdır.
          </span>
          <span className="text-[#7e7e7e] text-xs font-light">
            Güvenli ödeme altyapısı PayTR ile sağlanmaktadır.
          </span>
        </div>
      </div>
    </footer>
  );
}
