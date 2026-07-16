import Link from "next/link";

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

        <p className="text-center text-slate-600 mt-5 max-w-3xl mx-auto">
          Dispomos de equipamentos próprios e operadores experientes para
          executar trabalhos de escavação, abertura de valas e trabalhos em
          altura com total segurança e profissionalismo.
        </p>

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

          <Link
            href="/mini-giratoria-sintra"
            className="
              bg-white
              rounded-2xl
              shadow-lg
              p-8
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              block
            "
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Mini Giratória
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Cedência de mini giratória com operador para escavações,
              abertura de valas, preparação de terrenos, infraestruturas
              elétricas e movimentação de terras.
            </p>

            <span className="inline-block mt-8 text-red-600 font-semibold">
              Saber mais →
            </span>
          </Link>

          <Link
            href="/plataforma-elevatoria-sintra"
            className="
              bg-white
              rounded-2xl
              shadow-lg
              p-8
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              block
            "
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Plataforma Elevatória
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Trabalhos em altura com plataforma elevatória e operador para
              instalações elétricas, manutenção, reparações, iluminação,
              fachadas e intervenções técnicas.
            </p>

            <span className="inline-block mt-8 text-red-600 font-semibold">
              Saber mais →
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}