import { NextResponse } from "next/server";
import { cotacaoSchema } from "@/lib/cotacao";
import { todosOsProdutos } from "@/lib/produtos";

/**
 * Recebe o formulário de cotação (POST) e valida com Zod.
 *
 * PRÓXIMO PASSO: integrar o envio (ex.: e-mail com Resend/Nodemailer,
 * planilha, CRM). Por enquanto os dados são apenas registrados no log
 * do servidor (visível em "Logs" na Vercel).
 */
export async function POST(req: Request) {
  let corpo: unknown;
  try {
    corpo = await req.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "JSON inválido" }, { status: 400 });
  }

  const resultado = cotacaoSchema.safeParse(corpo);
  if (!resultado.success) {
    return NextResponse.json({ ok: false, erros: resultado.error.flatten().fieldErrors }, { status: 400 });
  }
  const dados = resultado.data;

  // Robô preencheu o campo isca: finge sucesso e descarta
  if (dados.site) return NextResponse.json({ ok: true });

  if (!todosOsProdutos.includes(dados.produto)) {
    return NextResponse.json({ ok: false, erros: { produto: ["Produto inválido."] } }, { status: 400 });
  }

  console.log("[cotacao] Nova solicitação:", { ...dados, site: undefined, recebidoEm: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}
