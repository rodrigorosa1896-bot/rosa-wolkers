import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eletricista em Sintra",
  description:
    "Especialistas em instalações elétricas, manutenção elétrica, infraestruturas elétricas e iluminação em Sintra. Orçamentos gratuitos.",

  alternates: {
    canonical: "https://rosawolkers.com/eletricista-sintra",
  },
};

export default function EletricistaSintra() {
  return (
    <main className="bg-white">

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold text-slate-900">
          Eletricista em Sintra
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-700">
          A ROSA&WOLKERS presta serviços de instalações elétricas,
          remodelações, manutenção elétrica e infraestruturas para empresas
          e particulares em Sintra.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          Os nossos serviços
        </h2>

        <ul className="space-y-4 text-lg text-slate-700">

          <li>✓ Instalações elétricas</li>

          <li>✓ Remodelações elétricas</li>

          <li>✓ Quadros elétricos</li>

          <li>✓ Iluminação interior e exterior</li>

          <li>✓ Infraestruturas elétricas</li>

          <li>✓ Abertura de valas</li>

          <li>✓ Mini giratória com manobrador</li>

          <li>✓ Plataforma elevatória</li>

        </ul>

      </section>

      <section className="bg-slate-100 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold">
            Porque escolher a ROSA&WOLKERS?
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-700">

            Trabalhamos diariamente com elevados padrões de qualidade,
            segurança e cumprimento de prazos, prestando apoio a
            empreiteiros, empresas e particulares.

          </p>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">

            Precisa de um eletricista em Sintra?

          </h2>

          <p className="mt-6 text-lg text-slate-700">

            Contacte-nos para solicitar um orçamento gratuito.

          </p>

          <Link
            href="/#contactos"
            className="inline-block mt-10 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold transition"
          >
            Pedir Orçamento
          </Link>

        </div>

      </section>

    </main>
  );
}