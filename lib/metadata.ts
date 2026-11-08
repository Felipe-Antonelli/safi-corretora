import type { Metadata } from "next";
import { site } from "@/data/site";

/** Gera title, description e Open Graph padronizados para cada página. */
export function criarMetadata({ titulo, descricao, caminho }: { titulo: string; descricao: string; caminho: string }): Metadata {
  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: {
      title: `${titulo} | ${site.nome}`,
      description: descricao,
      url: caminho,
      siteName: site.nome,
      locale: "pt_BR",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.nome }],
    },
    twitter: { card: "summary_large_image", title: `${titulo} | ${site.nome}`, description: descricao, images: ["/opengraph-image"] },
  };
}
