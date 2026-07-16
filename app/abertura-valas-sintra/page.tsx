import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abertura de Valas em Sintra | ROSA&WOLKERS",

  description:
    "Especialistas em abertura de valas em Sintra para infraestruturas elétricas, telecomunicações, saneamento e preparação de terrenos. Solicite o seu orçamento.",

  alternates: {
    canonical: "https://rosawolkers.com/abertura-valas-sintra",
  },

  keywords: [
    "abertura de valas Sintra",
    "escavações Sintra",
    "infraestruturas elétricas",
    "valas para eletricidade",
    "mini giratória",
    "movimentação de terras",
    "preparação de terrenos",
  ],
};

export default function AberturaValasSintra() {
  return (
    <main className="bg-white">

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold text-slate-900">
          Abertura de Valas em Sintra
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-700">
          A ROSA&WOLKERS executa trabalhos de abertura de valas para
          infraestruturas elétricas, telecomunicações, saneamento e
          preparação de terrenos em Sintra, Cascais, Oeiras, Mafra e Lisboa.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10">
          Os nossos serviços
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-lg text-slate-700">

          <div>✓ Abertura de valas para eletricidade</div>

          <div>✓ Infraestruturas elétricas</div>

          <div>✓ Telecomunicações</div>

          <div>✓ Saneamento</div>

          <div>✓ Preparação de terrenos</div>

          <div>✓ Escavações</div>

          <div>✓ Movimentação de terras</div>

          <div>✓ Limpeza de terrenos</div>

        </div>

      </section>

      <section className="bg-slate-100 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold">
            Porque escolher a ROSA&WOLKERS?
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">

            <p>
              Dispomos de equipamentos próprios e operadores experientes,
              permitindo executar trabalhos com rapidez, segurança e
              elevada qualidade.
            </p>

            <p>
              Trabalhamos para empresas, empreiteiros e particulares,
              garantindo sempre o cumprimento dos prazos definidos.
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
                Fazem abertura de valas para infraestruturas elétricas?
              </h3>

              <p className="mt-2 text-slate-700">
                Sim. Executamos abertura de valas para redes elétricas,
                telecomunicações e outras infraestruturas.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-xl">
                Trabalham apenas em Sintra?
              </h3>

              <p className="mt-2 text-slate-700">
                Não. Também prestamos serviços em Cascais, Oeiras,
                Lisboa, Mafra e zonas envolventes.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-xl">
                Fazem orçamentos gratuitos?
              </h3>

              <p className="mt-2 text-slate-700">
                Sim. Contacte-nos para receber um orçamento sem compromisso.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-red-600 py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white">
            Precisa de Abertura de Valas?
          </h2>

          <p className="mt-6 text-lg text-white">
            Contacte a ROSA&WOLKERS e solicite já o seu orçamento gratuito.
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