import Image from "next/image";
import { seguradoras, administradorasConsorcio, type Parceiro } from "@/data/parceiros";

/** Logo de parceiro em cartão branco, sempre colorido. */
function LogoParceiro({ parceiro, legenda }: { parceiro: Parceiro; legenda?: string }) {
  return (
    <li className="flex flex-col items-center gap-2">
      <div className="flex h-20 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-safi-orange/40 hover:shadow-soft sm:h-24 sm:px-5">
        {parceiro.logo ? (
          <Image
            src={parceiro.logo}
            alt={parceiro.nome}
            title={parceiro.nome}
            width={180}
            height={72}
            sizes="(min-width: 1024px) 160px, (min-width: 640px) 25vw, 33vw"
            unoptimized={parceiro.logo.endsWith(".svg")}
            className="h-auto max-h-12 w-auto max-w-full object-contain sm:max-h-14"
          />
        ) : (
          <span className="text-center font-display text-base font-extrabold text-safi-navy sm:text-lg">
            {parceiro.nome.replace(/^Consórcio\s+/, "")}
          </span>
        )}
      </div>
      {legenda ? <span className="text-xs font-semibold text-safi-muted">{legenda}</span> : null}
    </li>
  );
}

/**
 * Faixa branca com cantos arredondados (como no cartão) com as
 * seguradoras parceiras e as administradoras de consórcio.
 */
export function Partners() {
  return (
    <section aria-labelledby="parceiros-titulo" className="secao bg-safi-gray">
      <div className="container-safi">
        <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-10 lg:p-12">
          <h2
            id="parceiros-titulo"
            className="text-center font-display text-sm font-extrabold uppercase tracking-[0.22em] text-safi-orangeDark sm:text-base"
          >
            Trabalhamos com as principais seguradoras
          </h2>
          <span aria-hidden="true" className="mx-auto mt-4 block h-0.5 w-16 rounded-full bg-safi-orange" />
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {seguradoras.map((p) => (
              <LogoParceiro key={p.nome} parceiro={p} />
            ))}
          </ul>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="text-center font-display text-sm font-extrabold uppercase tracking-[0.22em] text-safi-navy">
              Consórcios
            </h3>
            <ul className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-4">
              {administradorasConsorcio.map((p) => (
                <LogoParceiro key={p.nome} parceiro={p} legenda={p.nome} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
