export default function Equipment() {
  return (
    <section
      id="equipamentos"
      className="py-16 md:py-20 bg-gray-100"
    >
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
          Os Nossos Equipamentos
        </h2>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            md:gap-8
            mt-10
            md:mt-16
          "
        >

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">

            <h3 className="text-2xl font-bold text-slate-900">
              Mini Giratória
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Cedência de mini giratória com operador para todo o tipo
              de escavações, abertura de valas e movimentação de terras.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">

            <h3 className="text-2xl font-bold text-slate-900">
              Plataforma Elevatória
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Trabalhos em altura com plataforma elevatória e
              manobrador para instalações, manutenção e reparações.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}