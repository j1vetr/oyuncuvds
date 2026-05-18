import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="w-full bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problem Card */}
          <div className="bg-[#1a1a1a] border border-[#3c3c3c] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 border-b border-[#3c3c3c] pb-6">
              <AlertTriangle className="text-destructive" size={32} />
              <h2 className="text-2xl font-black uppercase tracking-tight">SORUN</h2>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <p className="text-[#bbbbbb] font-light text-lg">Ev bilgisayarını 7/24 açık bırakmak zorunda kalırsın.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <p className="text-[#bbbbbb] font-light text-lg">Elektrik tüketimi, internet kopması ve bilgisayar yıpranmasıyla uğraşırsın.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                <p className="text-[#bbbbbb] font-light text-lg">Oyun açıkken kendi bilgisayarında başka iş yapamazsın.</p>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-[#1a1a1a] border border-[#3c3c3c] border-l-4 border-l-primary p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
            <div className="flex items-center gap-3 mb-8 border-b border-[#3c3c3c] pb-6">
              <CheckCircle2 className="text-primary" size={32} />
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">ÇÖZÜM</h2>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-[#bbbbbb] font-light text-lg">Bilgisayarını kapat. VDS senin yerine 7/24 açık kalır.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-[#bbbbbb] font-light text-lg">Hesabını pazarda, farmda veya EXP party'de kesintisiz tutabilirsin.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-[#bbbbbb] font-light text-lg">Uzak masaüstü ile istediğin yerden telefondan bile bağlanıp kontrol edebilirsin.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* BMW M style stripe divider */}
      <div className="w-full h-1 mt-24 flex">
        <div className="w-1/3 bg-primary h-full"></div>
        <div className="w-1/3 bg-[#1c69d4] h-full"></div>
        <div className="w-1/3 bg-[#0d3b85] h-full"></div>
      </div>
    </section>
  );
}
