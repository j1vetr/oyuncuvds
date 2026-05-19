import { XCircle, CheckCircle2 } from "lucide-react";

const PROBLEMS = [
  "Ev bilgisayarını 7/24 açık bırakmak zorunda kalırsın.",
  "Elektrik tüketimi, internet kopması ve donanım yıpranmasıyla uğraşırsın.",
  "Oyun açıkken bilgisayarını rahat kullanamazsın.",
  "Bağlantı koptuğunda pazar, farm veya EXP party yarıda kalabilir.",
];

const SOLUTIONS = [
  "Oyuncu VDS, senin yerine 7/24 açık kalır.",
  "Hesabını pazar, farm veya EXP party'de kesintisiz tutabilirsin.",
  "Uzak masaüstü ile istediğin yerden bağlanıp kontrol edebilirsin.",
  "Bilgisayarın kapalı olsa bile oyun oturumun çalışmaya devam eder.",
];

export function ProblemSolution() {
  return (
    <section id="ozellikler" className="w-full bg-black pt-16 pb-0">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-primary">Neden Farklı?</span>
            <span className="w-6 h-px bg-primary" />
          </div>
          <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-tight text-white mb-4">
            NEDEN OYUNCU VDS?
          </h2>
          <p className="text-[15px] font-light text-[#d1d1d1] max-w-xl mx-auto leading-[1.8]">
            Ev bilgisayarınızı yormadan, oyun hesaplarınızı pazar, farm ve EXP party için 7/24 kesintisiz çalıştırın.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {/* Problem Card */}
          <div className="relative bg-[#0f0f0f] border border-[#2e2e2e] overflow-hidden">
            {/* Red top accent */}
            <div className="h-[3px] w-full bg-gradient-to-r from-red-600/80 via-red-500/40 to-transparent" />

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-9 w-9 flex items-center justify-center bg-red-500/10 border border-red-500/20">
                  <XCircle className="text-red-500" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-red-500/70 mb-0.5">Mevcut Durum</p>
                  <h3 className="text-[18px] font-black uppercase tracking-tight text-white leading-none">SORUN</h3>
                </div>
              </div>

              <ul className="space-y-5">
                {PROBLEMS.map((text) => (
                  <li key={text} className="flex items-start gap-4">
                    <div className="mt-[7px] w-[6px] h-[6px] shrink-0 bg-red-500/70 rotate-45" />
                    <p className="text-[#c8c8c8] font-light text-[15px] leading-[1.75]">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Card */}
          <div className="relative bg-[#0a0f0f] border border-[#1e3535] overflow-hidden">
            {/* Cyan top accent */}
            <div className="h-[3px] w-full bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
            {/* Cyan left bar */}
            <div className="absolute left-0 top-[3px] bottom-0 w-[3px] bg-gradient-to-b from-primary/80 via-primary/30 to-transparent" />
            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 blur-[90px] pointer-events-none" />

            <div className="p-8 md:p-10 pl-10 md:pl-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-9 w-9 flex items-center justify-center bg-primary/10 border border-primary/20">
                  <CheckCircle2 className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-primary/70 mb-0.5">Oyuncu VDS ile</p>
                  <h3 className="text-[18px] font-black uppercase tracking-tight text-white leading-none">ÇÖZÜM</h3>
                </div>
              </div>

              <ul className="space-y-5">
                {SOLUTIONS.map((text) => (
                  <li key={text} className="flex items-start gap-4">
                    <div className="mt-[7px] w-[6px] h-[6px] shrink-0 bg-primary rotate-45" />
                    <p className="text-[#c8c8c8] font-light text-[15px] leading-[1.75]">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* BMW M style stripe divider */}
      <div className="w-full h-[3px] mt-16 flex">
        <div className="w-1/3 bg-primary h-full" />
        <div className="w-1/3 bg-[#1c69d4] h-full" />
        <div className="w-1/3 bg-[#0d3b85] h-full" />
      </div>
    </section>
  );
}
