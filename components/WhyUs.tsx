export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-center
            text-slate-900
          "
        >
          Porque escolher a ROSA&WOLKERS?
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            md:gap-8
            mt-10
            md:mt-16
          "
        >

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-5">⚡</div>

            <h3 className="text-xl font-bold text-slate-900">
              Experiência
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              Profissionais qualificados para qualquer tipo de obra.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-5">🚜</div>

            <h3 className="text-xl font-bold text-slate-900">
              Equipamentos
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              Máquinas modernas e operadores especializados.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-5">🕒</div>

            <h3 className="text-xl font-bold text-slate-900">
              Rapidez
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              Cumprimos prazos e garantimos eficiência.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-5">✅</div>

            <h3 className="text-xl font-bold text-slate-900">
              Qualidade
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              Trabalhos executados com rigor e segurança.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}