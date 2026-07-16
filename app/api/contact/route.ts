import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      nome,
      telefone,
      email,
      servico,
      mensagem,
    } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "ROSA&WOLKERS <noreply@rosawolkers.com>",
      to: ["geral@rosawolkers.com"],
      subject: `Novo pedido de orçamento - ${nome}`,
      html: `
        <h2>Novo pedido de orçamento</h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      return NextResponse.json(
        { error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}