/**
 * ============================================================
 *  CONSÓRCIOS — cada item gera um card e uma página em
 *  /consorcios/[slug]. Para adicionar um novo, copie um bloco.
 * ============================================================
 */
import type { IconeProduto } from "@/components/icons/ProductIcon";

export type Consorcio = {
  slug: string;
  nome: string;
  titulo: string;
  icone: IconeProduto;
  administradoras: string[]; // Nomes conforme /data/parceiros.ts
  resumo: string;
  descricao: string;
  vantagens: string[];
  indicadoPara: string[];
};

const administradoras = ["Porto Seguro Consórcio", "Consórcio Servopa"];

export const consorcios: Consorcio[] = [
  {
    slug: "imovel",
    nome: "Imóvel",
    titulo: "Consórcio de Imóvel",
    icone: "imovel",
    administradoras,
    resumo: "Conquiste a casa própria, um terreno ou um imóvel comercial sem pagar juros.",
    descricao:
      "O consórcio de imóvel é uma forma planejada de comprar sua casa, apartamento, terreno ou sala comercial. Sem juros, com parcelas que cabem no orçamento e a possibilidade de usar o FGTS.",
    vantagens: [
      "Sem juros — apenas taxa de administração",
      "Uso do FGTS para lance ou amortização (conforme regras)",
      "Compra de imóvel novo, usado, terreno ou construção",
      "Poder de compra à vista ao ser contemplado",
      "Parcelas flexíveis e planejamento de longo prazo",
    ],
    indicadoPara: [
      "Quem quer sair do aluguel com planejamento",
      "Investidores em imóveis",
      "Quem deseja construir ou reformar",
    ],
  },
  {
    slug: "veiculo",
    nome: "Veículo",
    titulo: "Consórcio de Veículo",
    icone: "veiculo",
    administradoras,
    resumo: "Carro, moto ou caminhão novo ou seminovo com parcelas sem juros.",
    descricao:
      "Planeje a troca do carro, a compra da moto ou a renovação da frota. Com o consórcio de veículo você paga parcelas sem juros e compra à vista quando for contemplado.",
    vantagens: [
      "Sem juros e sem entrada obrigatória",
      "Carros, motos, caminhões e utilitários",
      "Novos ou seminovos",
      "Possibilidade de lance para antecipar a contemplação",
      "Negociação à vista na hora da compra",
    ],
    indicadoPara: [
      "Quem planeja trocar de carro",
      "Empresas que querem renovar a frota",
      "Motoristas profissionais",
    ],
  },
  {
    slug: "servicos",
    nome: "Serviços",
    titulo: "Consórcio de Serviços",
    icone: "servicos",
    administradoras,
    resumo: "Reforma, viagem, festa, cursos e outros serviços planejados sem juros.",
    descricao:
      "Realize projetos como reformas, viagens, cursos, festas de casamento ou procedimentos estéticos de forma planejada, com crédito para contratar o serviço que você escolher.",
    vantagens: [
      "Sem juros",
      "Crédito para diversos tipos de serviço",
      "Prazos menores que os de imóvel",
      "Planejamento para grandes projetos pessoais",
    ],
    indicadoPara: [
      "Reformas e projetos residenciais",
      "Viagens, festas e cursos",
      "Serviços de saúde e estética",
    ],
  },
];

export function buscarConsorcio(slug: string) {
  return consorcios.find((c) => c.slug === slug);
}
