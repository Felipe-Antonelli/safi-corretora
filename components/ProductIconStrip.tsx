import Link from "next/link";
import { seguros } from "@/data/seguros";
import { ProductIcon } from "./icons/ProductIcon";

/**
 * Linha de ícones de produtos (igual ao cartão de visita),
 * separados por traços laranja verticais. No celular vira um
 * carrossel horizontal com scroll-snap.
 */
export function ProductIconStrip() {
  return (
    <section aria-labelledby="linha-produtos-titulo" className="bg-white py-10 sm:py-12">
      <div className="container-safi">
        <h2 id="linha-produtos-titulo" className="sr-only">
          Nossos seguros
        </h2>
        <ul className="sem-scrollbar -mx-4 flex snap-x snap-mandatory items-stretch overflow-x-auto px-4 sm:mx-0 sm:px-0 xl:justify-between">
          {seguros.map((s, i) => (
            <li key={s.slug} className="flex shrink-0 snap-start items-center">
              {i > 0 ? <span aria-hidden="true" className="h-12 w-px bg-safi-orange/70" /> : null}
              <Link
                href={`/seguros/${s.slug}`}
                className="group flex min-h-[44px] w-24 flex-col items-center gap-2 rounded-xl px-2 py-2 text-center sm:w-28"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-safi-orangeLight text-safi-orange transition-colors group-hover:bg-safi-orange group-hover:text-safi-navy">
                  <ProductIcon nome={s.icone} className="h-7 w-7" />
                </span>
                <span className="text-sm font-semibold text-safi-navy group-hover:text-safi-orangeDark">{s.nome}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
