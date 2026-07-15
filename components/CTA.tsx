export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-700">

      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block border border-white/40 px-5 py-2 rounded-full text-sm uppercase tracking-[5px] text-white font-semibold">
            ROSA&WOLKERS
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-8 leading-tight">
            Vamos construir o seu próximo projeto?
          </h2>

          <p className="mt-8 text-xl text-red-100 leading-8">
            Manutenção/Remodelação elétrica,
            aberturas de valas, iluminação pública particular... 
            
        
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

            <a
              href="tel:912828740"
              className="bg-white text-red-600 font-bold px-10 py-5 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              📞 912 828 740
            </a>

            <a
              href="tel:963880517"
              className="border-2 border-white text-white font-bold px-10 py-5 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              📞 963 880 517
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}