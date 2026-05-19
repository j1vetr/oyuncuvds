import { Mail, MapPin, Clock, Phone, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında bilgi almak istiyorum.");

export function Contact() {
  return (
    <section id="iletisim" className="w-full bg-black py-24">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-primary/50 text-[10px] font-bold select-none">|</span>
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-primary">İletişim</span>
            <span className="text-primary/50 text-[10px] font-bold select-none">|</span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-tight text-white mb-4">
            BİZE ULAŞIN
          </h2>
          <p className="text-[#888] font-light text-[14px] max-w-md mx-auto leading-[1.75]">
            Sipariş öncesi veya sonrası her türlü sorunuz için 7/24 ulaşabilirsiniz.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* WhatsApp — featured card */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-5 border border-primary/30 bg-primary/5 hover:bg-primary/10 p-8 transition-all"
            data-testid="contact-whatsapp"
          >
            <div className="w-12 h-12 bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0 group-hover:border-[#25D366]/60 transition-colors">
              <WhatsAppIcon size={22} className="text-[#25D366]" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[2px] text-[#25D366] mb-1">WhatsApp</p>
              <p className="text-white font-black text-[18px] tracking-tight mb-1">0850 309 47 69</p>
              <p className="text-[#666] font-light text-[12px] leading-[1.7]">
                Sipariş, kurulum ve teknik destek için mesaj atın. Ortalama yanıt süresi birkaç dakikadır.
              </p>
              <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#25D366]/70">
                Mesaj Gönder
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:destek@oyuncuvds.com.tr"
            className="group flex items-start gap-5 border border-[#1e1e1e] hover:border-primary/30 bg-[#070707] hover:bg-[#0a0a0a] p-8 transition-all border-l-0"
            data-testid="contact-email"
          >
            <div className="w-12 h-12 bg-[#0d0d0d] border border-[#2a2a2a] flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[2px] text-primary mb-1">E-Posta</p>
              <p className="text-white font-black text-[16px] tracking-tight mb-1">destek@oyuncuvds.com.tr</p>
              <p className="text-[#666] font-light text-[12px] leading-[1.7]">
                Detaylı sorularınız, fatura ve teknik konular için e-posta ile ulaşabilirsiniz.
              </p>
              <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-[1.5px] text-primary/60">
                E-Posta Gönder
              </span>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-5 border border-[#1e1e1e] bg-[#070707] p-8 border-t-0">
            <div className="w-12 h-12 bg-[#0d0d0d] border border-[#2a2a2a] flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#888]" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[2px] text-[#666] mb-1">Adres</p>
              <p className="text-white font-bold text-[14px] leading-[1.6] mb-1">
                Sarıyer Merkez Mah. Sarıyer Deresi Sk.<br />No:2 D:2 Sarıyer / İstanbul
              </p>
              <p className="text-[#555] font-light text-[11px] leading-[1.7] mt-2">
                OyuncuVDS.com.tr bir TOOV Internet Solutions iştirakidir.
              </p>
            </div>
          </div>

          {/* Working hours */}
          <div className="flex items-start gap-5 border border-[#1e1e1e] bg-[#070707] p-8 border-t-0 border-l-0">
            <div className="w-12 h-12 bg-[#0d0d0d] border border-[#2a2a2a] flex items-center justify-center shrink-0">
              <Clock size={20} className="text-[#888]" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[2px] text-[#666] mb-1">Çalışma Saatleri</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full" />
                <span className="text-white font-black text-[18px] tracking-tight">7/24 Aktif</span>
              </div>
              <p className="text-[#555] font-light text-[12px] leading-[1.7]">
                Pazartesi - Pazar, 00:00 - 23:59 arasında WhatsApp ve e-posta üzerinden destek sağlanmaktadır.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom strip — phone + instagram */}
        <div className="max-w-5xl mx-auto mt-0 grid grid-cols-1 md:grid-cols-2">
          <a
            href={`tel:+908503094769`}
            className="group flex items-center justify-between border border-[#1e1e1e] border-t-0 bg-[#050505] hover:border-primary/30 transition-all px-8 py-5"
            data-testid="contact-phone"
          >
            <div className="flex items-center gap-4">
              <Phone size={16} className="text-[#555] group-hover:text-primary transition-colors" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[2px] text-[#555] mb-0.5">Telefon</p>
                <p className="text-white font-black text-[15px] tracking-tight">0850 309 47 69</p>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555] group-hover:text-primary transition-colors">
              Ara
            </span>
          </a>
          <a
            href="https://instagram.com/oyuncuvds"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border border-[#1e1e1e] border-t-0 md:border-l-0 bg-[#050505] hover:border-[#E1306C]/40 transition-all px-8 py-5"
            data-testid="contact-instagram"
          >
            <div className="flex items-center gap-4">
              <Instagram size={16} className="text-[#555] group-hover:text-[#E1306C] transition-colors" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[2px] text-[#555] mb-0.5">Instagram</p>
                <p className="text-white font-black text-[15px] tracking-tight">@oyuncuvds</p>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555] group-hover:text-[#E1306C] transition-colors">
              Takip Et
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
