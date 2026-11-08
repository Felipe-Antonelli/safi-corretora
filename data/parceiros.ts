/**
 * Seguradoras e administradoras de consórcio parceiras.
 *
 * Os logos em /public/parceiros são PLACEHOLDERS. Para usar os logos
 * oficiais, basta substituir os arquivos mantendo o mesmo nome
 * (ou alterar o campo `logo` abaixo). Aceita .svg, .png ou .webp.
 */

export type Parceiro = {
  nome: string;
  logo: string;
};

export const seguradoras: Parceiro[] = [
  { nome: "Allianz", logo: "/parceiros/allianz.svg" },
  { nome: "Azul Seguros", logo: "/parceiros/azul-seguros.svg" },
  { nome: "Bradesco Seguros", logo: "/parceiros/bradesco-seguros.svg" },
  { nome: "HDI Seguros", logo: "/parceiros/hdi-seguros.svg" },
  { nome: "Itaú Seguros", logo: "/parceiros/itau-seguros.svg" },
  { nome: "Yelum Seguros", logo: "/parceiros/yelum-seguros.svg" },
  { nome: "Mapfre Seguros", logo: "/parceiros/mapfre-seguros.svg" },
  { nome: "Aliro Seguro", logo: "/parceiros/aliro-seguro.svg" },
  { nome: "Ituran", logo: "/parceiros/ituran.svg" },
  { nome: "Porto Seguro", logo: "/parceiros/porto-seguro.svg" },
  { nome: "Tokio Marine Seguradora", logo: "/parceiros/tokio-marine.svg" },
  { nome: "Zurich Seguros", logo: "/parceiros/zurich-seguros.svg" },
];

export const administradorasConsorcio: Parceiro[] = [
  { nome: "Porto Seguro Consórcio", logo: "/parceiros/porto-seguro-consorcio.svg" },
  { nome: "Consórcio Servopa", logo: "/parceiros/servopa.svg" },
];
