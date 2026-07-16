import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plataforma Elevatória em Sintra | ROSA&WOLKERS",

  description:
    "Serviço de plataforma elevatória com operador em Sintra. Trabalhos em altura, instalações elétricas, iluminação, manutenção e reparações. Solicite o seu orçamento.",

  alternates: {
    canonical: "https://rosawolkers.com/plataforma-elevatoria-sintra",
  },

  keywords: [
    "plataforma elevatória Sintra",
    "aluguer plataforma elevatória",
    "plataforma articulada",
    "plataforma tesoura",
    "trabalhos em altura",
    "plataforma elevatória com operador",
  ],
};

export default function PlataformaElevatoriaSintra() {
  return (
    <main className="bg-white">

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold text-slate-900">
          Plataforma Elevatória em Sintra
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-700">
          A ROSA&WOLKERS disponibiliza serviços com plataforma elevatória e
          operador para empresas, empreiteiros e particulares em Sintra,
          Cascais, Oeiras, Mafra e Lisboa.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10">
          Trabalhos realizados
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-lg text-slate-700">

          <div>✓ Instalações elétricas em altura</div>

          <div>✓ Iluminação pública</div>

          <div>✓ Montagem de iluminação exterior</div>

          <div>✓ Reparações em fachadas</div>

          <div>✓ Trabalhos industriais</div>

          <div>✓ Manutenção de edifícios</div>

          <div>✓ Intervenções técnicas</div>

          <div>✓ Trabalhos para empresas e particulares</div>

        </div>

      </section>

      <section className="bg-slate-100 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold">
            Porque escolher a ROSA&WOLKERS?
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">

            <p>
              Dispomos de plataforma elevatória e operador qualificado,
              garantindo segurança, rapidez e eficiência em todos os
              trabalhos em altura.
            </p>

            <p>
              Prestamos apoio a empresas, empreiteiros e particulares,
              assegurando um serviço profissional e o cumprimento rigoroso
              dos prazos.
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10">
          Áreas de atuação
        </h2>

        <div className="grid md:grid-cols-3 gap-5 text-lg text-slate-700">

          <div>✓ Sintra</div>

          <div>✓ Cascais</div>

          <div>✓ Oeiras</div>

          <div>✓ Lisboa</div>

          <div>✓ Mafra</div>

          <div>✓ Zona Oeste</div>

        </div>

      </section>

      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Perguntas Frequentes
          </h2>

          <div className="space-y-8">

            <div>

              <h3 className="font-semibold text-xl">
                A plataforma inclui operador?
              </h3>

              <p className="mt-2 text-slate-700">
                Sim. Todos os serviços são realizados por operadores
                experientes e qualificados.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-xl">
                Trabalham apenas em Sintra?
              </h3>

              <p className="mt-2 text-slate-700">
                Não. Prestamos serviços também em Cascais, Oeiras,
                Lisboa, Mafra e zonas envolventes.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-xl">
                Fazem orçamentos gratuitos?
              </h3>

              <p className="mt-2 text-slate-700">
                Sim. Solicite o seu orçamento sem qualquer compromisso.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-red-600 py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white">
            Precisa de uma Plataforma Elevatória?
          </h2>

          <p className="mt-6 text-lg text-white">
            Contacte a ROSA&WOLKERS e peça já o seu orçamento gratuito.
          </p>

          <Link
            href="/#contactos"
            className="inline-block mt-10 bg-white text-red-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition"
          >
            Pedir Orçamento
          </Link>

        </div>

      </section>

    </main>
  );
}