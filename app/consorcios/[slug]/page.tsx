import { notFound } from "next/navigation";
import { consorcios, buscarConsorcio } from "@/data/consorcios";
import { ProductDetail } from "@/components/ProductDetail";
import { criarMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

// Gera uma página estática para cada consórcio de /data/consorcios.ts
export function generateStaticParams() {
  return consorcios.map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const c = buscarConsorcio((await params).slug);
  if (!c) return {};
  return criarMetadata({ titulo: c.titulo, descricao: c.resumo, caminho: `/consorcios/${c.slug}` });
}

export default async function ConsorcioPage({ params }: Props) {
  const c = buscarConsorcio((await params).slug);
  if (!c) notFound();
  return (
    <ProductDetail
      categoria="Consórcios" categoriaHref="/consorcios" titulo={c.titulo} icone={c.icone} descricao={c.descricao}
      listaTitulo="Vantagens" lista={c.vantagens} indicadoPara={c.indicadoPara}
      parceirosTitulo="Administradoras" parceiros={c.administradoras}
    />
  );
}
