const steps = [
  {
    number: "01",
    title: "PAKETİNİ SEÇ",
    description: "İhtiyacına uygun Oyun VDS paketini seç. Aylık veya yıllık fatura dönemini belirle.",
  },
  {
    number: "02",
    title: "SİPARİŞ BİLGİLERİNİ GİR",
    description: "Ad soyad, WhatsApp numarası, e-posta ve kullanım amacını doldur.",
  },
  {
    number: "03",
    title: "PAYTR İLE ÖDEMEYE GEÇ",
    description: "Sipariş özetini kontrol et ve güvenli PayTR ödeme ekranına yönlen.",
  },
  {
    number: "04",
    title: "BİLGİLERİN WHATSAPP İLE TESLİM EDİLSİN",
    description: "Ödeme sonrası VDS erişim bilgileriniz WhatsApp üzerinden paylaşılır.",
  },
];

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="w-full bg-[#0d0d0d] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-black uppercase text-white tracking-tight mb-4">
            NASIL ÇALIŞIR?
          </h2>
          <p className="text-[#bbbbbb] font-light text-lg max-w-2xl mx-auto">
            4 adımda Oyun VDS hizmetine kavuşun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative bg-[#1a1a1a] border-t border-b border-r ${
                idx === 0 ? "border-l" : ""
              } border-[#3c3c3c] p-8 flex flex-col`}
              data-testid={`card-step-${idx + 1}`}
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-[56px] font-black text-primary/20 leading-none mb-4 tracking-tight">
                {step.number}
              </span>
              <h3 className="text-sm font-black uppercase text-white tracking-[1.5px] mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="text-[#bbbbbb] font-light text-sm leading-relaxed flex-1">
                {step.description}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[1px] z-10 w-3 h-3 border-t border-r border-[#3c3c3c] rotate-45 bg-[#1a1a1a]" />
              )}
            </div>
          ))}
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
