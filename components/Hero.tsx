"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const videos = [
  "/videos/hero.mp4",
  "/videos/eletricidade.mp4",
  "/videos/escavacao.mp4",
  "/videos/plataforma.mp4",
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen lg:h-screen overflow-hidden"
    >
      {/* Vídeo de Fundo */}

      <AnimatePresence mode="sync">
        <motion.video
          key={currentVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: 1.06,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: {
              duration: 1.2,
            },
            scale: {
              duration: 8,
              ease: "linear",
            },
          }}
        >
          <source
            src={videos[currentVideo]}
            type="video/mp4"
          />
        </motion.video>
      </AnimatePresence>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/75" />

      {/* Conteúdo */}

      <div className="relative z-20 flex items-center min-h-screen pt-28 lg:pt-0">

        <div className="max-w-7xl mx-auto w-full px-6">

          <div className="max-w-4xl">

            <span
              className="
                inline-block
                bg-red-600
                text-white
                px-4 md:px-6
                py-2
                rounded-full
                uppercase
                tracking-[2px]
                md:tracking-[4px]
                text-xs
                md:text-sm
                font-bold
                mb-6
                md:mb-8
              "
            >
              ROSA&WOLKERS
            </span>

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                xl:text-8xl
                font-black
                text-white
                leading-tight
              "
            >
              Construímos soluções.

              <br />

              <span className="text-red-500">
                Ligamos o futuro.
              </span>             </h1>

            <p
              className="
                mt-6
                md:mt-8
                text-base
                sm:text-lg
                md:text-xl
                text-gray-200
                leading-7
                md:leading-9
                max-w-3xl
              "
            >
              Prestação de serviços em obras públicas e particulares,
              instalações elétricas, infraestruturas elétricas,
              abertura de valas, reposição de pavimentos,
              cedência de mini giratória e plataforma elevatória.
            </p>

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                md:gap-5
                mt-10
                md:mt-12
              "
            >
              <a
                href="#contactos"
                className="
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  px-8
                  md:px-10
                  py-4
                  md:py-5
                  rounded-xl
                  font-bold
                  text-base
                  md:text-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-2xl
                  text-center
                "
              >
                Pedir Orçamento
              </a>

              <a
                href="tel:963880517"
                className="
                  border-2
                  border-white
                  hover:bg-white
                  hover:text-slate-900
                  text-white
                  px-8
                  md:px-10
                  py-4
                  md:py-5
                  rounded-xl
                  font-bold
                  text-base
                  md:text-lg
                  transition-all
                  duration-300
                  text-center
                "
              >
                Ligar Agora
              </a>

            </div>

          </div>

        </div>

      </div>      {/* Indicador de Scroll */}

      <motion.div
        className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <a
          href="#servicos"
          className="flex flex-col items-center text-white"
        >
          <span className="text-xs uppercase tracking-[4px] text-gray-300 mb-3">
            Scroll
          </span>

          <div className="w-8 h-14 rounded-full border-2 border-white flex justify-center">

            <motion.div
              className="w-2 h-2 bg-red-500 rounded-full mt-2"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </div>

        </a>

      </motion.div>

    </section>
  );
}