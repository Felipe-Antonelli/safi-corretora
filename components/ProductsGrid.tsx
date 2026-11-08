import { seguros } from "@/data/seguros";
import { consorcios } from "@/data/consorcios";
import { ProductCard } from "./ProductCard";

/** Grade de cards: 1 coluna (celular), 2 (tablet) e 3 (desktop). */
export function SegurosGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {seguros.map((s) => (
        <li key={s.slug}>
          <ProductCard href={`/seguros/${s.slug}`} icone={s.icone} titulo={s.titulo} resumo={s.resumo} />
        </li>
      ))}
    </ul>
  );
}

export function ConsorciosGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {consorcios.map((c) => (
        <li key={c.slug}>
          <ProductCard
            href={`/consorcios/${c.slug}`}
            icone={c.icone}
            titulo={c.titulo}
            resumo={c.resumo}
            selos={c.administradoras}
          />
        </li>
      ))}
    </ul>
  );
}
