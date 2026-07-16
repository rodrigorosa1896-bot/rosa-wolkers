export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
            text-center
          "
        >
          Sobre Nós
        </h2>

        <p
          className="
            mt-6
            md:mt-8
            max-w-3xl
            mx-auto
            text-center
            text-base
            md:text-lg
            leading-8
            text-slate-600
          "
        >
          Prestamos serviços especializados para empreiteiros do setor
          energético, executando escavações, abertura de valas,
          assentamento de tubagem, iluminação pública, reposição de
          pavimentos e cedência de equipamentos com manobrador.
        </p>

      </div>
    </section>
  );
}