import { seguros } from "@/data/seguros";
import { consorcios } from "@/data/consorcios";

/** Grupos de opções para o select "Tipo" do formulário de cotação. */
export type GrupoOpcoes = { rotulo: string; opcoes: string[] };

export const gruposDeProdutos: GrupoOpcoes[] = [
  { rotulo: "Seguros", opcoes: seguros.map((s) => s.titulo) },
  { rotulo: "Consórcios", opcoes: consorcios.map((c) => c.titulo) },
];

/** Lista "achatada" usada para validar o produto no servidor. */
export const todosOsProdutos = gruposDeProdutos.flatMap((g) => g.opcoes);
