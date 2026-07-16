import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mini Giratória em Sintra | ROSA&WOLKERS",

  description:
    "Serviço de mini giratória com manobrador em Sintra. Escavações, abertura de valas, preparação de terrenos e infraestruturas. Solicite o seu orçamento.",

  alternates: {
    canonical: "https://rosawolkers.com/mini-giratoria-sintra",
  },

  keywords: [
    "mini giratória Sintra",
    "mini escavadora Sintra",
    "aluguer mini giratória",
    "escavações Sintra",
    "abertura de valas",
    "infraestruturas",
  ],
};

export default function MiniGiratoriaSintra() {
  return (
    <main className="bg-white">

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold text-slate-900">
          Mini Giratória em Sintra
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-700">

          A ROSA&WOLKERS disponibiliza serviços de mini giratória com
          manobrador para empresas, empreiteiros e particulares em Sintra,
          Cascais, Oeiras, Mafra e Lisboa.

        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10">

          Serviços com Mini Giratória

        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-lg text-slate-700">

          <div>✓ Abertura de valas</div>

          <div>✓ Escavações</div>

          <div>✓ Infraestruturas elétricas</div>

          <div>✓ Preparação de terrenos</div>

          <div>✓ Limpeza de terrenos</div>

          <div>✓ Remoção de terras</div>

          <div>✓ Trabalhos para particulares</div>

          <div>✓ Trabalhos para empresas</div>

        </div>

      </section>

      <section className="bg-slate-100 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold">

            Porque escolher a ROSA&WOLKERS?

          </h2>

          <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">

            <p>
              Trabalhamos com equipamentos próprios e operadores
              experientes, garantindo rapidez, segurança e qualidade em
              todos os trabalhos.
            </p>

            <p>
              Executamos serviços para obras particulares, empresas,
              empreiteiros e infraestruturas, sempre com foco no
              cumprimento dos prazos.
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

                Trabalham apenas em Sintra?

              </h3>

              <p className="mt-2 text-slate-700">

                Não. Prestamos serviços também em Cascais, Oeiras,
                Lisboa, Mafra e restantes zonas próximas.

              </p>

            </div>

            <div>

              <h3 className="font-semibold text-xl">

                A mini giratória inclui manobrador?

              </h3>

              <p className="mt-2 text-slate-700">

                Sim. Todos os serviços são realizados por operadores
                experientes.

              </p>

            </div>

            <div>

              <h3 className="font-semibold text-xl">

                Fazem orçamentos gratuitos?

              </h3>

              <p className="mt-2 text-slate-700">

                Sim. Entre em contacto connosco e analisaremos o seu
                projeto sem compromisso.

              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-red-600 py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white">

            Precisa de uma Mini Giratória em Sintra?

          </h2>

          <p className="mt-6 text-lg text-white">

            Contacte-nos hoje mesmo e solicite o seu orçamento gratuito.

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