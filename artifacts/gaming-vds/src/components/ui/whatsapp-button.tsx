import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/905000000000?text=${encodeURIComponent("Merhaba, Oyun VDS hizmeti hakkında bilgi almak istiyorum.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
      data-testid="button-whatsapp-floating"
    >
      <MessageCircle size={32} />
    </a>
  );
}
