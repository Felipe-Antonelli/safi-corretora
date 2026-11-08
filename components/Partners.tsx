import Image from "next/image";
import { seguradoras, administradorasConsorcio, type Parceiro } from "@/data/parceiros";

/** Logo de parceiro: cinza por padrão e colorido no hover/foco. */
function LogoParceiro({ parceiro }: { parceiro: Parceiro }) {
  return (
    <li className="flex h-20 items-center justify-center rounded-xl px-3 transition-colors hover:bg-safi-gray sm:h-24">
      <Image
        src={parceiro.logo}
        alt={parceiro.nome}
        title={parceiro.nome}
        width={160}
        height={64}
        sizes="(min-width: 1024px) 160px, (min-width: 640px) 25vw, 33vw"
        // SVGs não precisam do otimizador; PNG/JPG são convertidos para AVIF/WebP
        unoptimized={parceiro.logo.endsWith(".svg")}
        className="h-auto max-h-14 w-full max-w-[150px] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
      />
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
          <ul className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
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
                <LogoParceiro key={p.nome} parceiro={p} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
