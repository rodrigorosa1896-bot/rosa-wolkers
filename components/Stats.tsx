"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    title: "Obras Realizadas",
  },
  {
    number: "DESDE 2024",
    title: "COM PROFISSIONALISMO E CONFIANÇA",
  },
  {
    number: "100%",
    title: "Compromisso",
  },
  {
    number: "24h",
    title: "Resposta aos Pedidos",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-red-500">
                {item.number}
              </h2>

              <p className="mt-4 text-white text-lg">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}