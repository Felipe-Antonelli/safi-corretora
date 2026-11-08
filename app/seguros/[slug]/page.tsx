import { notFound } from "next/navigation";
import { seguros, buscarSeguro } from "@/data/seguros";
import { ProductDetail } from "@/components/ProductDetail";
import { criarMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

// Gera uma página estática para cada seguro de /data/seguros.ts
export function generateStaticParams() {
  return seguros.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const seguro = buscarSeguro((await params).slug);
  if (!seguro) return {};
  return criarMetadata({ titulo: seguro.titulo, descricao: seguro.resumo, caminho: `/seguros/${seguro.slug}` });
}

export default async function SeguroPage({ params }: Props) {
  const seguro = buscarSeguro((await params).slug);
  if (!seguro) notFound();
  return (
    <ProductDetail
      categoria="Seguros" categoriaHref="/seguros" titulo={seguro.titulo} icone={seguro.icone} descricao={seguro.descricao}
      listaTitulo="Principais coberturas" lista={seguro.coberturas} indicadoPara={seguro.indicadoPara}
      parceirosTitulo="Seguradoras que oferecem" parceiros={seguro.seguradoras}
    />
  );
}
