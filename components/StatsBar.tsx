import { site } from "@/data/site";
import { seguradoras } from "@/data/parceiros";
import { Counter } from "./Counter";

/** Faixa de números com contadores animados. */
export function StatsBar() {
  const numeros = [
    { valor: site.numeros.clientes, prefixo: "+", rotulo: "clientes atendidos" },
    { valor: site.numeros.anos, prefixo: "", rotulo: Number(site.numeros.anos) === 1 ? "ano de mercado" : "anos de mercado" },
    { valor: seguradoras.length, prefixo: "", rotulo: "seguradoras parceiras" },
    { valor: site.numeros.administradoras, prefixo: "", rotulo: "administradoras de consórcio" },
  ];

  return (
    <section aria-label="A SAFI em números" className="escuro border-t border-safi-orange/40 bg-safi-navyDeep">
      <ul className="container-safi grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
        {numeros.map((n, i) => (
          <li
            key={n.rotulo}
            className={`flex flex-col items-center px-3 text-center ${
              i % 2 === 1 ? "border-l border-safi-orange/50" : ""
            } ${i > 0 ? "lg:border-l lg:border-safi-orange/50" : ""}`}
          >
            <span className="font-display text-4xl font-extrabold text-safi-orange sm:text-5xl">
              <Counter valor={n.valor} prefixo={n.prefixo} />
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-sm">
              {n.rotulo}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
