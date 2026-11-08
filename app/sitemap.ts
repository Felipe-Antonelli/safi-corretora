import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { seguros } from "@/data/seguros";
import { consorcios } from "@/data/consorcios";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas = ["", "/seguros", "/consorcios", "/quem-somos", "/contato", "/politica-de-privacidade"];
  return [
    ...paginas.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...seguros.map((s) => ({ url: `${site.url}/seguros/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...consorcios.map((c) => ({ url: `${site.url}/consorcios/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
