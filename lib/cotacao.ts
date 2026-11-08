import { z } from "zod";

/**
 * Esquema de validação do formulário de cotação.
 * É usado no navegador (React Hook Form) e na API (/api/cotacao).
 */
export const cotacaoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, "Informe seu nome completo.")
    .max(100, "Nome muito longo."),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Informe um WhatsApp válido, ex.: (41) 99999-9999."),
  email: z.string().trim().email("Informe um e-mail válido."),
  produto: z.string().min(1, "Escolha o tipo de seguro ou consórcio."),
  mensagem: z.string().trim().max(1000, "Máximo de 1000 caracteres.").optional().or(z.literal("")),
  // Campo "isca" invisível para bloquear robôs (deve ficar vazio)
  site: z.string().max(0).optional().or(z.literal("")),
});

export type CotacaoDados = z.infer<typeof cotacaoSchema>;

/** Aplica a máscara (00) 00000-0000 enquanto a pessoa digita. */
export function formatarTelefone(valor: string): string {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
