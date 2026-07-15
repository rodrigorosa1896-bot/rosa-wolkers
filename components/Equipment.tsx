export default function Equipment() {
  return (
    <section id="equipamentos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Os Nossos Equipamentos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold">
              Mini Giratória
            </h3>

            <p className="mt-4 text-gray-600">
              Aluguer de mini giratória com operador para todo o tipo de escavações.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold">
              Plataforma Elevatória
            </h3>

            <p className="mt-4 text-gray-600">
              Trabalhos em altura com plataforma elevatória e manobrador.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}