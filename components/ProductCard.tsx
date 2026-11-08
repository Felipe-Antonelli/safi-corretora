import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductIcon, type IconeProduto } from "./icons/ProductIcon";

/**
 * Card de produto: ícone laranja, título azul, descrição curta e
 * "Saiba mais →". No hover a borda superior fica laranja e o card sobe.
 */
export function ProductCard({
  href,
  icone,
  titulo,
  resumo,
  selos,
}: {
  href: string;
  icone: IconeProduto;
  titulo: string;
  resumo: string;
  selos?: string[];
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-slate-200 border-t-4 border-t-transparent bg-white p-6 shadow-card transition-all duration-300 hover:border-t-safi-orange hover:shadow-soft motion-safe:hover:-translate-y-1.5 sm:p-7">
      <span className="grid h-14 w-14 place-items-center rounded-xl bg-safi-orangeLight text-safi-orange">
        <ProductIcon nome={icone} className="h-7 w-7" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-safi-navy">
        {/* O link cobre o card todo (área de toque grande) */}
        <Link href={href} className="after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-safi-orange">
          {titulo}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-safi-muted">{resumo}</p>
      {selos?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Administradoras">
          {selos.map((selo) => (
            <li key={selo} className="rounded-full border border-safi-orange/40 bg-safi-orangeLight px-3 py-1 text-xs font-semibold text-safi-orangeDark">
              {selo}
            </li>
          ))}
        </ul>
      ) : null}
      <span aria-hidden="true" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-safi-orangeDark">
        Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}
