/**
 * Seguradoras e administradoras de consórcio parceiras.
 *
 * Os logos ficam em /public/parceiros (PNG ou SVG). Para trocar um logo,
 * substitua o arquivo ou altere o campo `logo`. Quando `logo` for `null`,
 * o site mostra o nome da empresa no lugar do logo.
 */

export type Parceiro = {
  nome: string;
  logo: string | null;
};

export const seguradoras: Parceiro[] = [
  { nome: "Porto Seguro", logo: "/parceiros/porto-seguro.png" },
  { nome: "Allianz", logo: "/parceiros/allianz.png" },
  { nome: "Bradesco Seguros", logo: "/parceiros/bradesco-seguros.png" },
  { nome: "Itaú Seguros", logo: "/parceiros/itau-seguros.png" },
  { nome: "Tokio Marine Seguradora", logo: "/parceiros/tokio-marine.png" },
  { nome: "Mapfre Seguros", logo: "/parceiros/mapfre-seguros.png" },
  { nome: "HDI Seguros", logo: "/parceiros/hdi-seguros.png" },
  { nome: "Zurich Seguros", logo: "/parceiros/zurich-seguros.png" },
  { nome: "Yelum Seguros", logo: "/parceiros/yelum-seguros.svg" },
  { nome: "Azul Seguros", logo: "/parceiros/azul-seguros.png" },
  { nome: "Aliro Seguro", logo: "/parceiros/aliro-seguro.svg" },
  { nome: "Ituran", logo: "/parceiros/ituran.png" },
];

export const administradorasConsorcio: Parceiro[] = [
  { nome: "Porto Seguro Consórcio", logo: "/parceiros/porto-seguro.png" },
  // Logo oficial da Servopa ainda não incluído: coloque o arquivo em
  // /public/parceiros/servopa.png e troque `null` por "/parceiros/servopa.png".
  { nome: "Consórcio Servopa", logo: null },
];
