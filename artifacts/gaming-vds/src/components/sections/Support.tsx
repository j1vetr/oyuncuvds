import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function Support() {
  const whatsappUrl = `https://wa.me/908503094769?text=${encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında destek almak istiyorum.")}`;

  return (
    <section className="w-full bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[40px] md:text-[48px] font-black uppercase text-white tracking-tight mb-6">
            TESLİMAT VE DESTEK
          </h2>
          <p className="text-[#bbbbbb] font-light text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Sipariş sonrası VDS erişim bilgileriniz WhatsApp üzerinden iletilir. Kurulum, bağlantı ve kullanım desteği WhatsApp ve e-posta üzerinden sağlanır.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-12 px-8 bg-[#25D366] text-white font-black uppercase tracking-[1.5px] text-sm flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-colors"
              data-testid="button-support-whatsapp"
            >
              <WhatsAppIcon size={18} />
              WHATSAPP DESTEK
            </a>
            <a
              href="mailto:destek@oyunvds.com"
              className="w-full sm:w-auto h-12 px-8 bg-transparent border border-[#3c3c3c] text-[#bbbbbb] font-black uppercase tracking-[1.5px] text-sm flex items-center justify-center gap-3 hover:border-white hover:text-white transition-colors"
              data-testid="button-support-email"
            >
              <Mail size={18} />
              E-POSTA DESTEK
            </a>
          </div>
        </div>
      </div>

      {/* Stripe divider */}
      <div className="w-full h-1 mt-24 flex">
        <div className="w-1/3 bg-primary h-full" />
        <div className="w-1/3 bg-[#1c69d4] h-full" />
        <div className="w-1/3 bg-[#0d3b85] h-full" />
      </div>
    </section>
  );
}
