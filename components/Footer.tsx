import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-slate-950 text-white border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}
          <div>

            <Image
              src="/logo.png"
              alt="ROSA&WOLKERS"
              width={220}
              height={80}
              className="w-52 h-auto"
            />

            <p className="text-gray-400 mt-6 leading-7">
              Profissionalismo, Confiança e Eficiência
            </p>

          </div>

          {/* Contactos */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contactos
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Phone className="text-red-500" size={20} />
                <a
                  href="tel:912828740"
                  className="hover:text-red-500 transition"
                >
                  912 828 740
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-red-500" size={20} />
                <a
                  href="tel:963880517"
                  className="hover:text-red-500 transition"
                >
                  963 880 517
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-red-500" size={20} />
                <a
                  href="mailto:geral@rosawolkers.pt"
                  className="hover:text-red-500 transition"
                >
                  geral@rosawolkers.pt
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" size={20} />
                <span>Terrugem • Sintra</span>
              </div>

            </div>

          </div>

          {/* Horário */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Horário
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <Clock className="text-red-500" size={20} />
                <span>Segunda a Sexta</span>
              </div>

              <p>08:00 - 18:00</p>

             

            </div>

          </div>

          {/* Ação */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Precisa de ajuda?
            </h3>

            <p className="text-gray-400 mb-8 leading-7">
              Solicite um orçamento gratuito.
              Respondemos com rapidez e profissionalismo.
            </p>

            <a
              href="tel:912828740"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
            >
              Pedir Orçamento
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

        {/* Rodapé inferior */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-white-500 text-sm text-center lg:text-left">
            © 2026 ROSA&WOLKERS. Todos os direitos reservados.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">

            <a
              href="tel:912828740"
              className="text-gray-400 hover:text-red-500 transition"
            >
              📞 912 828 740
            </a>

            <a
              href="tel:963880517"
              className="text-gray-400 hover:text-red-500 transition"
            >
              📞 963 880 517
            </a>

            <a
              href="mailto:geral@rosawolkers.pt"
              className="text-gray-400 hover:text-red-500 transition"
            >
              ✉️ geral@rosawolkers.pt
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}