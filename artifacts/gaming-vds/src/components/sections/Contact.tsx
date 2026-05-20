import {
  Mail,
  MapPin,
  Clock,
  Phone,
  Instagram,
  ShieldCheck,
  Zap,
  Lock,
  Users,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const WA_NUMBER = "908503094769";
const WA_MSG = encodeURIComponent(
  "Merhaba, Oyun VDS hizmeti hakkında bilgi almak istiyorum.",
);

export function Contact() {
  return (
    <section
      id="iletisim"
      className="relative w-full bg-white py-24 md:py-28 overflow-x-clip border-t border-[#dee1e6]"
    >
      {/* Soft dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #dee1e6 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, transparent 30%, black 80%)",
        }}
      />

      {/* Decorative world-map dotted route (right) */}
      <svg
        className="pointer-events-none absolute top-24 right-0 hidden lg:block -z-10 opacity-70"
        width="420"
        height="260"
        viewBox="0 0 420 260"
        fill="none"
      >
        <path
          d="M40 180 Q 140 60, 240 110 T 400 70"
          stroke="#0052ff"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          fill="none"
          opacity="0.4"
        />
        <circle cx="40" cy="180" r="6" fill="#0052ff" opacity="0.15" />
        <circle cx="40" cy="180" r="3" fill="#0052ff" />
        <circle cx="240" cy="110" r="6" fill="#0052ff" opacity="0.15" />
        <circle cx="240" cy="110" r="3" fill="#0052ff" />
        <circle cx="400" cy="70" r="6" fill="#0052ff" opacity="0.15" />
        <circle cx="400" cy="70" r="3" fill="#0052ff" />
      </svg>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0052ff] bg-[#e6edff] rounded-full px-3 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff]" />
            İletişim
          </span>
          <h2 className="display-headline text-[44px] md:text-[60px] text-[#0a0b0d] mb-5 tracking-[-0.02em] leading-[1.05]">
            Bize ulaşın
          </h2>
          <p className="text-[#5b616e] text-[15px] md:text-[16px] leading-[1.7]">
            Sipariş öncesi veya sonrası her türlü sorunuz için 7/24
            ulaşabilirsiniz.
            <br className="hidden md:block" /> Destek ekibimiz size en hızlı
            şekilde yardımcı olmaktan mutluluk duyar.
          </p>
        </div>

        {/* 3 x 2 grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl border border-[#dee1e6] hover:border-[#25D366]/40 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:-translate-y-1 p-6 pl-7 transition-all duration-300 overflow-hidden"
            data-testid="contact-whatsapp"
          >
            <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-[#25D366]" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e7f7ee] flex items-center justify-center shrink-0">
                <WhatsAppIcon size={22} className="text-[#25D366]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#25D366] mb-1.5">
                  WhatsApp
                </p>
                <p className="text-[#0a0b0d] font-bold text-[18px] tracking-tight mb-2">
                  0850 309 47 69
                </p>
                <p className="text-[#5b616e] text-[12.5px] leading-[1.65]">
                  Sipariş, kurulum ve teknik destek için mesaj atın. Ortalama
                  yanıt süresi birkaç dakikadır.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[12.5px] font-bold text-[#25D366]">
                  WhatsApp ile Mesaj Gönder
                  <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:destek@oyuncuvds.com.tr"
            className="group relative bg-white rounded-2xl border border-[#dee1e6] hover:border-[#0052ff]/40 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:-translate-y-1 p-6 pl-7 transition-all duration-300 overflow-hidden"
            data-testid="contact-email"
          >
            <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-[#0052ff]" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e6edff] flex items-center justify-center shrink-0">
                <Mail size={20} className="text-[#0052ff]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0052ff] mb-1.5">
                  E-Posta
                </p>
                <p className="text-[#0a0b0d] font-bold text-[16px] tracking-tight mb-2 break-all">
                  destek@oyuncuvds.com.tr
                </p>
                <p className="text-[#5b616e] text-[12.5px] leading-[1.65]">
                  Detaylı sorularınız, fatura ve teknik konular için e-posta ile
                  ulaşabilirsiniz.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[12.5px] font-bold text-[#0052ff]">
                  E-Posta Gönder
                  <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </a>

          {/* Address */}
          <a
            href="https://maps.google.com/?q=Sarıyer+Merkez+Mah.+Sarıyer+Deresi+Sk.+No:2+D:2+Sarıyer+İstanbul"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl border border-[#dee1e6] hover:border-[#8b5cf6]/40 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:-translate-y-1 p-6 pl-7 transition-all duration-300 overflow-hidden"
            data-testid="contact-address"
          >
            <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-[#8b5cf6]" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f1ecfe] flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#8b5cf6]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8b5cf6] mb-1.5">
                  Adres
                </p>
                <p className="text-[#0a0b0d] font-bold text-[14.5px] leading-[1.5] mb-2">
                  Sarıyer Merkez Mah.
                  <br />
                  Sarıyer Deresi Sk.
                  <br />
                  No:2 D:2 Sarıyer / İstanbul
                </p>
                <p className="text-[#7c828a] text-[12px] leading-[1.65]">
                  OyuncuVDS.com.tr bir TOOV Internet Solutions iştirakidir.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[12.5px] font-bold text-[#8b5cf6]">
                  Yol Tarifi Al
                  <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </a>

          {/* Working hours */}
          <div className="relative bg-white rounded-2xl border border-[#dee1e6] p-6 pl-7 overflow-hidden">
            <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-[#0052ff]" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e6edff] flex items-center justify-center shrink-0">
                <Clock size={20} className="text-[#0052ff]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0052ff] mb-1.5">
                  Çalışma Saatleri
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#05b169]" />
                  <span className="text-[#0a0b0d] font-bold text-[18px] tracking-tight">
                    7/24 Aktif
                  </span>
                </div>
                <p className="text-[#5b616e] text-[12.5px] leading-[1.65]">
                  Pazartesi - Pazar, 00:00 - 23:59 arasında WhatsApp ve e-posta
                  üzerinden destek sağlanmaktadır.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[11.5px] font-bold text-[#0052ff] bg-[#e6edff] rounded-full px-3 py-1.5">
                  <ShieldCheck size={12} />
                  7/24 Kesintisiz Destek
                </span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:+908503094769"
            className="group relative bg-white rounded-2xl border border-[#dee1e6] hover:border-[#0052ff]/40 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:-translate-y-1 p-6 pl-7 transition-all duration-300 overflow-hidden"
            data-testid="contact-phone"
          >
            <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-[#0052ff]" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e6edff] flex items-center justify-center shrink-0">
                <Phone size={20} className="text-[#0052ff]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0052ff] mb-1.5">
                  Telefon
                </p>
                <p className="text-[#0a0b0d] font-bold text-[18px] tracking-tight mb-2">
                  0850 309 47 69
                </p>
                <p className="text-[#5b616e] text-[12.5px] leading-[1.65]">
                  Hafta içi 09:00 - 18:00 arasında telefonla destek
                  alabilirsiniz.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[12.5px] font-bold text-[#0052ff]">
                  Hemen Ara
                  <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/oyuncuvds"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl border border-[#dee1e6] hover:border-[#E1306C]/40 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:-translate-y-1 p-6 pl-7 transition-all duration-300 overflow-hidden"
            data-testid="contact-instagram"
          >
            <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-[#E1306C]" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#fdeaf2] flex items-center justify-center shrink-0">
                <Instagram size={20} className="text-[#E1306C]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#E1306C] mb-1.5">
                  Instagram
                </p>
                <p className="text-[#0a0b0d] font-bold text-[18px] tracking-tight mb-2">
                  @oyuncuvds
                </p>
                <p className="text-[#5b616e] text-[12.5px] leading-[1.65]">
                  Duyurular, kampanyalar ve güncellemeler için bizi Instagram'da
                  takip edin.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[12.5px] font-bold text-[#E1306C]">
                  Instagram'da Takip Et
                  <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Bottom trust strip */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-[#dee1e6] shadow-[0_4px_20px_rgba(15,23,42,0.04)] px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              Icon: ShieldCheck,
              title: "Güvenilir Destek",
              sub: "Uzman ekibimiz 7/24 yanınızda.",
            },
            {
              Icon: Zap,
              title: "Hızlı Yanıt",
              sub: "Ortalama yanıt süresi birkaç dakika.",
            },
            {
              Icon: Lock,
              title: "Güvenli İletişim",
              sub: "Tüm kanallarımız güvenli ve gizlidir.",
            },
            {
              Icon: Users,
              title: "Müşteri Memnuniyeti",
              sub: "Binlerce memnun müşterimiz var.",
            },
          ].map((item, i) => {
            const Icon = item.Icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#e6edff] flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#0052ff]" />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-[#0a0b0d] leading-tight mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-[11.5px] text-[#7c828a] leading-snug">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
