"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    image: "/images/services/hero.jpg",
    title: "Reposição de Pavimentos",
    text: "Reposição de pavê, calçada e pavimentos após execução de infraestruturas.",
  },
  {
    image: "/images/services/valas.jpg",
    title: "Abertura de Valas",
    text: "Escavações para instalação de infraestruturas elétricas e preparação de redes.",
  },
  {
    image: "/images/services/tubagem.jpg",
    title: "Infraestruturas Elétricas",
    text: "Execução de infraestruturas elétricas exteriores, incluindo assentamento de tubagem e preparação para passagem de cabos.",
  },
  {
    image: "/images/services/minigiratoria.jpg",
    title: "Mini Giratória",
    text: "Aluguer de mini giratória com manobrador para todo o tipo de trabalhos.",
  },
  {
    image: "/images/services/plataforma.jpg",
    title: "Plataforma Elevatória",
    text: "Cedência de plataforma elevatória com manobrador para trabalhos em altura.",
  },
  {
    image: "/images/services/infraestruturas.jpg",
    title: "Manutenção",
    text: "Manutenção de infraestruturas elétricas exteriores e iluminação pública.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full uppercase tracking-[5px] text-sm font-bold">
            O QUE FAZEMOS
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mt-6">
            Áreas de Especialização
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Executamos infraestruturas elétricas exteriores para redes de
            distribuição, iluminação pública e obras de urbanização,
            garantindo qualidade, segurança e profissionalismo.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative h-[430px] rounded-3xl overflow-hidden shadow-xl"
            >

              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition duration-500"></div>

              <div className="absolute bottom-0 left-0 w-full p-8">

                <h3 className="text-3xl font-black text-white">
                  {service.title}
                </h3>

                <p className="text-gray-200 mt-4 leading-7">
                  {service.text}
                </p>

                <div className="mt-6 h-1 w-16 rounded-full bg-red-600 transition-all duration-500 group-hover:w-32"></div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}