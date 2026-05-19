import { Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında bilgi almak istiyorum.");

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[#3c3c3c]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img src="/logo.png" alt="Oyuncu VDS" className="h-10 w-auto" />
            </a>
            <p className="text-[#7e7e7e] font-light text-sm leading-relaxed mb-3">
              Knight Online, Metin2 ve Silkroad için 7/24 kesintisiz oyun VDS hizmeti.
            </p>
            <div className="flex items-start gap-2 text-[#5e5e5e] text-xs font-light leading-[1.7]">
              <MapPin size={12} className="shrink-0 mt-0.5" />
              <span>Sarıyer Merkez Mah. Sarıyer Deresi Sk. No:2 D:2 Sarıyer / İstanbul</span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[1.5px] text-[#7e7e7e] mb-6">
              YASAL
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/gizlilik-politikasi" className="text-[#bbbbbb] font-light text-sm hover:text-white transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="/mesafeli-satis-sozlesmesi" className="text-[#bbbbbb] font-light text-sm hover:text-white transition-colors">
                  Mesafeli Satış Sözleşmesi
                </a>
              </li>
              <li>
                <a href="/iade-iptal" className="text-[#bbbbbb] font-light text-sm hover:text-white transition-colors">
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
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#bbbbbb] font-light text-sm hover:text-white transition-colors"
                >
                  <WhatsAppIcon size={16} className="text-[#25D366]" />
                  0850 309 47 69
                </a>
              </li>
              <li>
                <a
                  href="mailto:destek@oyuncuvds.com.tr"
                  className="flex items-center gap-2 text-[#bbbbbb] font-light text-sm hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-primary" />
                  destek@oyuncuvds.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright row */}
        <div className="border-t border-[#3c3c3c] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
          <span className="text-[#7e7e7e] text-xs font-light">
            © 2026 OyuncuVDS.com.tr | Tüm Hakları Saklıdır.
          </span>
          <span className="text-[#7e7e7e] text-xs font-light">
            Güvenli ödeme altyapısı PayTR ile sağlanmaktadır.
          </span>
        </div>

        {/* TOOV row */}
        <div className="text-center">
          <p className="text-[#4a4a4a] text-[11px] font-light leading-[1.7]">
            OyuncuVDS.com.tr bir{" "}
            <a
              href="https://toov.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#999] transition-colors underline underline-offset-2"
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
