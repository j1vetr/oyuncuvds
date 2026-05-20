import { Mail, MapPin, Clock, Phone, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında bilgi almak istiyorum.");

export function Contact() {
  return (
    <section id="iletisim" className="w-full bg-[#f7f7f7] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-xl mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-4">
            İletişim
          </span>
          <h2 className="display-headline text-[36px] md:text-[52px] text-[#0a0b0d] mb-4">
            Bize ulaşın
          </h2>
          <p className="text-[#5b616e] text-[16px] leading-[1.65]">
            Sipariş öncesi veya sonrası her türlü sorunuz için 7/24 ulaşabilirsiniz.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* WhatsApp — featured */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-5 bg-white rounded-3xl border border-[#dee1e6] hover:border-[#25D366]/40 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-7 transition-all"
            data-testid="contact-whatsapp"
          >
            <div className="w-12 h-12 rounded-full bg-[#e7f7ee] flex items-center justify-center shrink-0">
              <WhatsAppIcon size={22} className="text-[#25D366]" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#25D366] mb-1">
                WhatsApp
              </p>
              <p className="text-[#0a0b0d] font-semibold text-[18px] tracking-tight mb-1.5">
                0850 309 47 69
              </p>
              <p className="text-[#5b616e] text-[13px] leading-[1.65]">
                Sipariş, kurulum ve teknik destek için mesaj atın. Ortalama yanıt süresi birkaç dakikadır.
              </p>
              <span className="inline-block mt-3 text-[12px] font-semibold text-[#25D366]">
                Mesaj Gönder →
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:destek@oyuncuvds.com.tr"
            className="group flex items-start gap-5 bg-white rounded-3xl border border-[#dee1e6] hover:border-[#0052ff]/30 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-7 transition-all"
            data-testid="contact-email"
          >
            <div className="w-12 h-12 rounded-full bg-[#e6edff] flex items-center justify-center shrink-0">
              <Mail size={20} className="text-[#0052ff]" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] mb-1">
                E-Posta
              </p>
              <p className="text-[#0a0b0d] font-semibold text-[16px] tracking-tight mb-1.5">
                destek@oyuncuvds.com.tr
              </p>
              <p className="text-[#5b616e] text-[13px] leading-[1.65]">
                Detaylı sorularınız, fatura ve teknik konular için e-posta ile ulaşabilirsiniz.
              </p>
              <span className="inline-block mt-3 text-[12px] font-semibold text-[#0052ff]">
                E-Posta Gönder →
              </span>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-5 bg-white rounded-3xl border border-[#dee1e6] p-7">
            <div className="w-12 h-12 rounded-full bg-[#eef0f3] flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#5b616e]" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7c828a] mb-1">
                Adres
              </p>
              <p className="text-[#0a0b0d] font-semibold text-[14px] leading-[1.6] mb-1.5">
                Sarıyer Merkez Mah. Sarıyer Deresi Sk.
                <br />
                No:2 D:2 Sarıyer / İstanbul
              </p>
              <p className="text-[#7c828a] text-[12px] leading-[1.7] mt-2">
                OyuncuVDS.com.tr bir TOOV Internet Solutions iştirakidir.
              </p>
            </div>
          </div>

          {/* Working hours */}
          <div className="flex items-start gap-5 bg-white rounded-3xl border border-[#dee1e6] p-7">
            <div className="w-12 h-12 rounded-full bg-[#eef0f3] flex items-center justify-center shrink-0">
              <Clock size={20} className="text-[#5b616e]" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7c828a] mb-1">
                Çalışma Saatleri
              </p>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#05b169]" />
                <span className="text-[#0a0b0d] font-semibold text-[18px] tracking-tight">
                  7/24 Aktif
                </span>
              </div>
              <p className="text-[#5b616e] text-[13px] leading-[1.65]">
                Pazartesi - Pazar, 00:00 - 23:59 arasında WhatsApp ve e-posta
                üzerinden destek sağlanmaktadır.
              </p>
            </div>
          </div>

          {/* Phone */}
          <a
            href={`tel:+908503094769`}
            className="group flex items-center justify-between bg-white rounded-3xl border border-[#dee1e6] hover:border-[#0052ff]/30 transition-all p-6"
            data-testid="contact-phone"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#eef0f3] flex items-center justify-center">
                <Phone size={16} className="text-[#5b616e] group-hover:text-[#0052ff] transition-colors" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7c828a] mb-0.5">
                  Telefon
                </p>
                <p className="text-[#0a0b0d] font-semibold text-[15px] tracking-tight">
                  0850 309 47 69
                </p>
              </div>
            </div>
            <span className="text-[12px] font-semibold text-[#0052ff]">Ara →</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/oyuncuvds"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-white rounded-3xl border border-[#dee1e6] hover:border-[#E1306C]/30 transition-all p-6"
            data-testid="contact-instagram"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#fdeaf2] flex items-center justify-center">
                <Instagram size={16} className="text-[#E1306C]" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E1306C] mb-0.5">
                  Instagram
                </p>
                <p className="text-[#0a0b0d] font-semibold text-[15px] tracking-tight">
                  @oyuncuvds
                </p>
              </div>
            </div>
            <span className="text-[12px] font-semibold text-[#E1306C]">Takip Et →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
