import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { CtaBanner } from "./CtaBanner";
import { PageHero } from "./PageHero";
import { QuoteSection } from "./QuoteSection";
import { ProductIcon, type IconeProduto } from "./icons/ProductIcon";

/** Modelo de página de produto (usado por seguros e consórcios). */
export function ProductDetail({
  categoria, categoriaHref, titulo, icone, descricao, listaTitulo, lista, indicadoPara, parceirosTitulo, parceiros,
}: {
  categoria: string; categoriaHref: string; titulo: string; icone: IconeProduto; descricao: string;
  listaTitulo: string; lista: string[]; indicadoPara: string[]; parceirosTitulo: string; parceiros: string[];
}) {
  return (
    <>
      <PageHero eyebrow={categoria} titulo={titulo} texto={descricao} icone={<ProductIcon nome={icone} className="h-8 w-8" />} />
      <nav aria-label="Você está em" className="border-b border-slate-200 bg-white">
        <ol className="container-safi flex flex-wrap items-center gap-1 py-3 text-sm text-safi-muted">
          <li><Link href="/" className="hover:text-safi-orangeDark">Início</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li><Link href={categoriaHref} className="hover:text-safi-orangeDark">{categoria}</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li aria-current="page" className="font-semibold text-safi-navy">{titulo}</li>
        </ol>
      </nav>
      <section className="secao bg-white">
        <div className="container-safi grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl bg-safi-gray p-6 sm:p-8 lg:col-span-2">
            <h2 className="font-display text-fluid-h3 font-bold text-safi-navy">{listaTitulo}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {lista.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-safi-orange text-safi-navy">
                    <Check className="h-4 w-4" aria-hidden="true" strokeWidth={3} />
                  </span>
                  <span className="text-safi-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 sm:p-8">
            <h2 className="font-display text-fluid-h3 font-bold text-safi-navy">Para quem é indicado</h2>
            <ul className="mt-6 space-y-3">
              {indicadoPara.map((item) => (
                <li key={item} className="flex gap-3 text-safi-muted">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-safi-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 sm:p-8 lg:col-span-3">
            <h2 className="font-display text-fluid-h3 font-bold text-safi-navy">{parceirosTitulo}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {parceiros.map((p) => (
                <li key={p} className="rounded-full border border-safi-orange/40 bg-safi-orangeLight px-4 py-1.5 text-sm font-semibold text-safi-orangeDark">{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBanner titulo={`Quer uma cotação de ${titulo}?`} hrefCotacao="#cotacao" mensagemWhatsApp={`Olá, SAFI! Gostaria de uma cotação de ${titulo}.`} />
      <QuoteSection produtoInicial={titulo} titulo={`Cotação de ${titulo}`} />
    </>
  );
}
