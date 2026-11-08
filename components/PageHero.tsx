import type { ReactNode } from "react";
import { Shield } from "./Shield";

/** Hero escuro das páginas internas. */
export function PageHero({ eyebrow, titulo, texto, icone }: { eyebrow?: string; titulo: string; texto?: string; icone?: ReactNode }) {
  return (
    <section className="escuro fundo-escuro relative overflow-hidden">
      <Shield variant="watermark" className="pointer-events-none absolute -right-16 top-1/2 h-[160%] w-auto -translate-y-1/2 text-white/[0.04]" />
      <div className="container-safi relative py-14 sm:py-20">
        {icone ? (
          <span className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-safi-orange text-safi-navy shadow-glow">{icone}</span>
        ) : null}
        {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.3em] text-safi-orange sm:text-sm">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl font-display text-fluid-h1 font-extrabold text-white">{titulo}</h1>
        <span aria-hidden="true" className="mt-5 block h-px w-24 bg-safi-orange" />
        {texto ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{texto}</p> : null}
      </div>
    </section>
  );
}
