/**
 * ============================================================
 *  SEGUROS — cada item gera um card e uma página em /seguros/[slug].
 *
 *  Para adicionar um seguro novo, copie um bloco abaixo, troque o
 *  `slug` (vira a URL) e os textos. O `icone` deve ser uma das
 *  chaves de /components/icons/ProductIcon.tsx.
 * ============================================================
 */
import type { IconeProduto } from "@/components/icons/ProductIcon";

export type Seguro = {
  slug: string;
  nome: string; // Nome curto (ex.: "Auto") — usado na linha de ícones
  titulo: string; // Nome completo (ex.: "Seguro Auto")
  icone: IconeProduto;
  resumo: string; // Texto curto do card
  descricao: string; // Texto da página do seguro
  coberturas: string[];
  indicadoPara: string[];
  seguradoras: string[]; // Nomes conforme /data/parceiros.ts
};

export const seguros: Seguro[] = [
  {
    slug: "auto",
    nome: "Auto",
    titulo: "Seguro Auto",
    icone: "auto",
    resumo: "Proteção completa para o seu carro contra roubo, colisão e imprevistos, com assistência 24h.",
    descricao:
      "Comparamos as principais seguradoras para montar um seguro auto do seu jeito: cobertura certa, franquia que cabe no bolso e assistência 24 horas para você nunca ficar na mão.",
    coberturas: [
      "Colisão, incêndio e roubo ou furto",
      "Danos materiais e corporais a terceiros",
      "Assistência 24h com guincho e chaveiro",
      "Carro reserva",
      "Vidros, faróis e retrovisores",
      "Fenômenos da natureza (alagamento, granizo)",
    ],
    indicadoPara: [
      "Quem usa o carro no dia a dia ou para trabalhar",
      "Quem acabou de comprar um veículo novo ou seminovo",
      "Motoristas de aplicativo (consulte condições)",
    ],
    seguradoras: [
      "Porto Seguro", "Azul Seguros", "Allianz", "Bradesco Seguros", "HDI Seguros",
      "Itaú Seguros", "Yelum Seguros", "Mapfre Seguros", "Tokio Marine Seguradora",
      "Zurich Seguros", "Aliro Seguro", "Ituran",
    ],
  },
  {
    slug: "moto",
    nome: "Moto",
    titulo: "Seguro Moto",
    icone: "moto",
    resumo: "Rode tranquilo com cobertura para roubo, acidentes e danos a terceiros, além de assistência.",
    descricao:
      "Seguro pensado para quem vive sobre duas rodas: proteção contra roubo e furto, acidentes e danos a terceiros, com assistência para pane e guincho.",
    coberturas: [
      "Roubo e furto",
      "Colisão e incêndio",
      "Danos a terceiros",
      "Assistência 24h e guincho",
      "Acidentes pessoais do condutor (opcional)",
    ],
    indicadoPara: [
      "Quem usa a moto para trabalhar ou se deslocar",
      "Motociclistas que querem proteção contra roubo",
      "Entregadores (consulte condições)",
    ],
    seguradoras: ["Porto Seguro", "Azul Seguros", "HDI Seguros", "Bradesco Seguros", "Mapfre Seguros", "Ituran", "Aliro Seguro"],
  },
  {
    slug: "caminhao",
    nome: "Caminhão",
    titulo: "Seguro Caminhão",
    icone: "caminhao",
    resumo: "Seu caminhão protegido na estrada, com coberturas para o veículo, terceiros e assistência.",
    descricao:
      "Para quem trabalha na estrada, cada dia parado é prejuízo. Buscamos o seguro de caminhão com a cobertura e a assistência ideais para o seu tipo de operação.",
    coberturas: [
      "Colisão, incêndio, roubo e furto",
      "Responsabilidade civil (danos a terceiros)",
      "Assistência 24h com guincho pesado",
      "Equipamentos e implementos (opcional)",
      "Acidentes pessoais de passageiros",
    ],
    indicadoPara: [
      "Caminhoneiros autônomos",
      "Transportadoras e frotas",
      "Empresas com veículos de carga",
    ],
    seguradoras: ["Porto Seguro", "HDI Seguros", "Tokio Marine Seguradora", "Allianz", "Mapfre Seguros", "Yelum Seguros"],
  },
  {
    slug: "residencial",
    nome: "Residencial",
    titulo: "Seguro Residencial",
    icone: "residencial",
    resumo: "Sua casa ou apartamento protegido contra incêndio, roubo e danos, com serviços de assistência.",
    descricao:
      "Proteção para o seu lar com um custo que costuma surpreender. Além das coberturas, o seguro residencial oferece serviços como encanador, eletricista e chaveiro.",
    coberturas: [
      "Incêndio, raio e explosão",
      "Roubo e furto qualificado",
      "Danos elétricos",
      "Vendaval e granizo",
      "Responsabilidade civil familiar",
      "Assistência: chaveiro, encanador, eletricista",
    ],
    indicadoPara: [
      "Proprietários de casas e apartamentos",
      "Quem mora de aluguel",
      "Casas de veraneio",
    ],
    seguradoras: ["Porto Seguro", "Allianz", "Bradesco Seguros", "Itaú Seguros", "Mapfre Seguros", "Tokio Marine Seguradora", "Zurich Seguros", "HDI Seguros", "Yelum Seguros"],
  },
  {
    slug: "empresarial",
    nome: "Empresarial",
    titulo: "Seguro Empresarial",
    icone: "empresarial",
    resumo: "Proteja o patrimônio da sua empresa e mantenha o negócio funcionando diante de imprevistos.",
    descricao:
      "Do pequeno comércio à indústria, analisamos os riscos do seu negócio e indicamos as coberturas certas para proteger o patrimônio e a continuidade da operação.",
    coberturas: [
      "Incêndio, raio e explosão",
      "Roubo de bens e mercadorias",
      "Danos elétricos e equipamentos",
      "Lucros cessantes",
      "Responsabilidade civil",
      "Assistência 24h para o estabelecimento",
    ],
    indicadoPara: [
      "Lojas, escritórios e consultórios",
      "Indústrias e depósitos",
      "Restaurantes e prestadores de serviço",
    ],
    seguradoras: ["Porto Seguro", "Allianz", "HDI Seguros", "Tokio Marine Seguradora", "Mapfre Seguros", "Zurich Seguros", "Bradesco Seguros", "Yelum Seguros"],
  },
  {
    slug: "vida",
    nome: "Vida",
    titulo: "Seguro de Vida",
    icone: "vida",
    resumo: "Segurança financeira para quem você ama, com coberturas que também protegem você em vida.",
    descricao:
      "O seguro de vida é um gesto de cuidado. Além de amparar a família, pode incluir coberturas para doenças graves, invalidez e diárias por incapacidade.",
    coberturas: [
      "Morte natural ou acidental",
      "Invalidez por acidente ou doença",
      "Doenças graves",
      "Diárias por incapacidade temporária",
      "Assistência funeral",
    ],
    indicadoPara: [
      "Quem tem filhos ou dependentes",
      "Profissionais autônomos e liberais",
      "Empresas que querem proteger colaboradores",
    ],
    seguradoras: ["Porto Seguro", "Allianz", "Bradesco Seguros", "Itaú Seguros", "Mapfre Seguros", "Tokio Marine Seguradora", "Zurich Seguros", "HDI Seguros"],
  },
  {
    slug: "saude",
    nome: "Saúde",
    titulo: "Seguro Saúde",
    icone: "saude",
    resumo: "Planos de saúde individuais, familiares e empresariais com a rede de atendimento ideal.",
    descricao:
      "Ajudamos você a escolher o plano de saúde com a rede de hospitais e laboratórios certa, carências claras e o melhor custo-benefício para a sua família ou empresa.",
    coberturas: [
      "Consultas e exames",
      "Internações e cirurgias",
      "Pronto-socorro 24h",
      "Opções com ou sem coparticipação",
      "Planos individuais, familiares e PME",
    ],
    indicadoPara: [
      "Famílias que buscam atendimento de qualidade",
      "Pequenas e médias empresas",
      "Profissionais autônomos (MEI)",
    ],
    seguradoras: ["Porto Seguro", "Bradesco Seguros", "Allianz"],
  },
  {
    slug: "viagem",
    nome: "Viagem",
    titulo: "Seguro Viagem",
    icone: "viagem",
    resumo: "Viaje tranquilo com assistência médica, bagagem e imprevistos cobertos no Brasil e no exterior.",
    descricao:
      "Seja a lazer ou a trabalho, o seguro viagem garante assistência médica, cobertura de bagagem e apoio em imprevistos — e é obrigatório para vários destinos.",
    coberturas: [
      "Despesas médicas e hospitalares",
      "Extravio de bagagem",
      "Cancelamento ou interrupção de viagem",
      "Atraso de voo",
      "Repatriação",
    ],
    indicadoPara: [
      "Viagens internacionais (inclusive Europa – Tratado de Schengen)",
      "Viagens nacionais",
      "Intercâmbios e viagens a trabalho",
    ],
    seguradoras: ["Porto Seguro", "Allianz", "Tokio Marine Seguradora", "Mapfre Seguros"],
  },
  {
    slug: "pet",
    nome: "Pet",
    titulo: "Seguro Pet",
    icone: "pet",
    resumo: "Cuidado para o seu melhor amigo: consultas, vacinas, emergências e assistência veterinária.",
    descricao:
      "Seu pet também é família. Planos e seguros pet ajudam com consultas, vacinas, exames e emergências veterinárias, sem pesar no orçamento.",
    coberturas: [
      "Consultas veterinárias",
      "Vacinas e exames",
      "Atendimento de emergência",
      "Cirurgias e internações (conforme plano)",
      "Assistência e orientação veterinária",
    ],
    indicadoPara: [
      "Tutores de cães e gatos",
      "Pets filhotes ou idosos",
      "Quem quer previsibilidade nos gastos",
    ],
    seguradoras: ["Porto Seguro", "Azul Seguros", "Allianz"],
  },
];

export function buscarSeguro(slug: string) {
  return seguros.find((s) => s.slug === slug);
}
