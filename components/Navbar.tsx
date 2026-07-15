"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
      >
       <div className="relative w-full h-24 pl-2 pr-6 flex items-center justify-end">

         <a
  href="#inicio"
  className="absolute -top-3 left-2 z-50 transition duration-300 hover:scale-105"
>
  <Image
    src="/logo.png"
    alt="ROSA&WOLKERS"
    width={520}
    height={170}
    priority
    className="h-36 xl:h-40 w-auto object-contain drop-shadow-2xl"
  />
</a>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium mr-6">

            <a href="#inicio" className="hover:text-red-500 transition">
              Início
            </a>

            <a href="#servicos" className="hover:text-red-500 transition">
              Serviços
            </a>

            <a href="#equipamentos" className="hover:text-red-500 transition">
              Equipamentos
            </a>

            <a href="#sobre" className="hover:text-red-500 transition">
              Sobre
            </a>

            <a href="#contactos" className="hover:text-red-500 transition">
              Contactos
            </a>

          </nav>

          <a
  href="#contactos"
  className="hidden lg:block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105 shadow-xl"
>
  Pedir Orçamento
</a>

          {/* Botão Mobile */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={34} />
          </button>

        </div>
      </header>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={closeMenu} />

        <div className="absolute right-0 top-0 h-full w-80 bg-slate-950 text-white p-8 shadow-2xl">

          <div className="flex justify-between items-center mb-10">

            <Image
              src="/logo.png"
              alt="ROSA&WOLKERS"
              width={170}
              height={60}
            />

            <button onClick={closeMenu}>
              <X size={34} />
            </button>

          </div>

          <nav className="flex flex-col gap-8 text-xl">

            <a href="#inicio" onClick={closeMenu}>Início</a>

            <a href="#servicos" onClick={closeMenu}>Serviços</a>

            <a href="#equipamentos" onClick={closeMenu}>Equipamentos</a>

            <a href="#galeria" onClick={closeMenu}>Galeria</a>

            <a href="#sobre" onClick={closeMenu}>Sobre</a>

            <a href="#contactos" onClick={closeMenu}>Contactos</a>

          </nav>

          <a
            href="tel:912828740"
            className="block mt-12 bg-red-600 text-center py-4 rounded-xl font-bold hover:bg-red-700 transition"
          >
            📞 912 828 740
          </a>

        </div>
      </div>
    </>
  );
}