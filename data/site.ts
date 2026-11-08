/**
 * ============================================================
 *  DADOS GERAIS DA SAFI — edite aqui contatos, textos e números.
 *  Tudo o que aparece no site (cabeçalho, rodapé, botões de
 *  WhatsApp, JSON-LD, etc.) é lido deste arquivo.
 * ============================================================
 */

export const site = {
  nome: "SAFI Corretora de Seguros",
  nomeCurto: "SAFI",
  slogan: "Proteção para o que mais importa.",
  sloganSecundario: "Tranquilidade para você e quem você ama.",
  descricao:
    "Corretora de seguros e consórcios em Curitiba – PR. Comparamos as principais seguradoras do mercado para encontrar a melhor proteção para você, sua família e sua empresa, com atendimento humanizado.",

  /**
   * URL pública do site (usada no sitemap, Open Graph e JSON-LD).
   * Na Vercel, defina a variável NEXT_PUBLIC_SITE_URL com o domínio final.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.safiseguros.com.br",

  // Os dois WhatsApp da SAFI. O primeiro é o principal (botão flutuante).
  whatsapps: [
    { rotulo: "(41) 99967-1180", numero: "5541999671180" },
    { rotulo: "(41) 99954-4671", numero: "5541999544671" },
  ],

  email: "saficorretoradeseguros@gmail.com",

  // Somente Instagram (não há outras redes sociais).
  instagram: {
    usuario: "@safi_seguros",
    url: "https://www.instagram.com/safi_seguros/",
  },

  endereco: {
    logradouro: "R. Cel. Pretextato Pena Forte Taborda Ribas, 1955 – Portão", // conforme o perfil no Google
    cidade: "Curitiba",
    uf: "PR",
    cep: "80330-080",
  },

  cnpj: "56.212.758/0001-48",

  // Perfil da SAFI no Google (avaliações)
  google: {
    url: "https://share.google/egQVYH7ygblMGOqyo",
    nota: "5,0",
    totalAvaliacoes: 18,
  },

  // Números exibidos na faixa de estatísticas e no "Quem Somos"
  numeros: {
    clientes: 110,
    anos: 2,
    administradoras: 2,
    // A quantidade de seguradoras é calculada a partir de /data/parceiros.ts
  },
} as const;

/** Monta um link wa.me com mensagem opcional já preenchida. */
export function linkWhatsApp(mensagem?: string, indice = 0): string {
  const numero = site.whatsapps[indice]?.numero ?? site.whatsapps[0].numero;
  const base = `https://wa.me/${numero}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

/** Mensagem padrão usada nos botões "Chamar no WhatsApp". */
export const mensagemPadraoWhatsApp =
  "Olá, SAFI! Vim pelo site e gostaria de fazer uma cotação.";

/** Links do menu principal (header, menu mobile e rodapé). */
export const menu = [
  { href: "/", rotulo: "Início" },
  { href: "/seguros", rotulo: "Seguros" },
  { href: "/consorcios", rotulo: "Consórcios" },
  { href: "/quem-somos", rotulo: "Quem Somos" },
  { href: "/contato", rotulo: "Contato" },
] as const;
