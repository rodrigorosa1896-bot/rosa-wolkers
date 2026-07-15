"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/gallery/obra1.jpg",
  "/images/gallery/obra2.jpg",
  "/images/gallery/obra3.jpg",
  "/images/gallery/obra4.jpg",
  "/images/gallery/obra5.jpg",
  "/images/gallery/obra6.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="galeria" className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center">
          Trabalhos Realizados
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-16">
          Alguns dos nossos projetos.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, i) => (

            <div
              key={i}
              onClick={() => setIndex(i)}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-xl"
            >

              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

            </div>

          ))}

        </div>

      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />

    </section>
  );
}