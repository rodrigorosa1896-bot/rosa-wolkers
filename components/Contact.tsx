"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    mensagem: "",
  });

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error();
      }

      setSuccess(true);

      setForm({
        nome: "",
        telefone: "",
        email: "",
        servico: "",
        mensagem: "",
      });
    } catch {
      alert("Ocorreu um erro ao enviar o pedido.");
    }

    setLoading(false);
  }

  return (
    <section
      id="contactos"
      className="py-20 md:py-28 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12 md:mb-16">

          <span
            className="
              inline-block
              bg-red-600
              text-white
              px-5
              md:px-6
              py-2
              rounded-full
              uppercase
              tracking-[2px]
              md:tracking-[4px]
              text-xs
              md:text-sm
              font-bold
            "
          >
            CONTACTE-NOS
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-black
              text-slate-900
              mt-6
            "
          >
            Vamos falar sobre o seu projeto
          </h2>

          <p
            className="
              mt-6
              text-base
              md:text-lg
              text-slate-600
              max-w-3xl
              mx-auto
              leading-8
            "
          >
            Peça já o seu orçamento gratuito.
            Respondemos rapidamente.
          </p>

        </div>

        <div
          className="
            grid
            lg:grid-cols-2
            overflow-hidden
            rounded-3xl
            shadow-2xl
            bg-white
          "
        >

          {/* Painel Esquerdo */}

          <div className="relative min-h-[500px] lg:min-h-[750px]">

            <Image
              src="/images/contacto.jpg"
              alt="ROSA&WOLKERS"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">

              <div>

                <h3 className="text-3xl md:text-4xl font-black text-white">
                  ROSA&WOLKERS
                </h3>

                <p className="text-gray-200 mt-6 leading-8 text-base md:text-lg">
                  Preencha o formulário para receber o seu orçamento.
                </p>

              </div>

              <div className="space-y-8">

                <div className="flex items-center gap-5">

                  <div className="bg-red-600 p-4 rounded-2xl">
                    <Phone className="text-white" size={24} />
                  </div>

                  <div>

                    <p className="text-gray-300">
                      Telefone
                    </p>

                    <p className="text-white text-xl md:text-2xl font-bold">
                      963 880 517 / 912828740
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="bg-red-600 p-4 rounded-2xl">
                    <Mail className="text-white" size={24} />
                  </div>

                  <div>

                    <p className="text-gray-300">
                      Email
                    </p>

                    <p className="text-white break-all">
                      geral@rosawolkers.com
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="bg-red-600 p-4 rounded-2xl">
                    <MapPin className="text-white" size={24} />
                  </div>

                  <div>

                    <p className="text-gray-300">
                      Localização
                    </p>

                    <p className="text-white">
                      Terrugem • Sintra
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Formulário */}

          <div className="p-6 md:p-12"><form
  onSubmit={handleSubmit}
  className="space-y-6"
>

  <div className="grid md:grid-cols-2 gap-6">

    <input
      type="text"
      placeholder="Nome *"
      required
      value={form.nome}
      onChange={(e) =>
        setForm({
          ...form,
          nome: e.target.value,
        })
      }
      className="w-full rounded-xl border border-gray-300 bg-white text-slate-900 placeholder:text-slate-500 px-5 py-4 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition"
    />

    <input
      type="tel"
      placeholder="Telefone *"
      required
      value={form.telefone}
      onChange={(e) =>
        setForm({
          ...form,
          telefone: e.target.value,
        })
      }
      className="w-full rounded-xl border border-gray-300 bg-white text-slate-900 placeholder:text-slate-500 px-5 py-4 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition"
    />

  </div>

  <input
    type="email"
    placeholder="Email *"
    required
    value={form.email}
    onChange={(e) =>
      setForm({
        ...form,
        email: e.target.value,
      })
    }
    className="w-full rounded-xl border border-gray-300 bg-white text-slate-900 placeholder:text-slate-500 px-5 py-4 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition"
  />

  <select
    required
    value={form.servico}
    onChange={(e) =>
      setForm({
        ...form,
        servico: e.target.value,
      })
    }
    className="w-full rounded-xl border border-gray-300 bg-white text-slate-900 px-5 py-4 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition"
  >
    <option value="">
      Selecione o serviço pretendido
    </option>

    <option>Instalações Elétricas</option>

    <option>Infraestruturas Elétricas</option>

    <option>Remodelações Elétricas</option>

    <option>Abertura de Valas</option>

    <option>Reposição de Pavimentos</option>

    <option>Mini Giratória com Manobrador</option>

    <option>Plataforma Elevatória com Manobrador</option>

    <option>Manutenção</option>

    <option>Outro</option>

  </select>

  <textarea
    rows={7}
    placeholder="Descreva o trabalho que pretende realizar..."
    required
    value={form.mensagem}
    onChange={(e) =>
      setForm({
        ...form,
        mensagem: e.target.value,
      })
    }
    className="w-full rounded-xl border border-gray-300 bg-white text-slate-900 placeholder:text-slate-500 px-5 py-4 resize-none outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition"
  />

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]"
  >
    {loading ? (
      "A enviar..."
    ) : (
      <>
        <Send size={22} />
        Pedir Orçamento
      </>
    )}
  </button>

  {success && (
    <div className="flex items-center gap-3 rounded-xl border border-green-300 bg-green-100 p-5 text-green-700">
      <CheckCircle2 size={24} />

      <span className="font-semibold">
        Pedido enviado com sucesso!
        Entraremos em contacto consigo brevemente.
      </span>

    </div>
  )}

</form>

          </div>

        </div>

      </div>

    </section>
  );
}