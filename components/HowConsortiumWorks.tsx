import { BadgeDollarSign, CalendarCheck, Trophy, KeyRound } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Shield } from "./Shield";

const passos = [
  {
    icone: BadgeDollarSign,
    titulo: "Escolha o crédito",
    texto: "Defina o valor da carta de crédito e o prazo que cabem no seu planejamento.",
  },
  {
    icone: CalendarCheck,
    titulo: "Pague parcelas sem juros",
    texto: "Você paga apenas a taxa de administração, sem juros como em um financiamento.",
  },
  {
    icone: Trophy,
    titulo: "Seja contemplado",
    texto: "A contemplação acontece por sorteio mensal ou por lance, para antecipar a conquista.",
  },
  {
    icone: KeyRound,
    titulo: "Use o crédito",
    texto: "Com a carta em mãos, você compra à vista e com poder de negociação.",
  },
];

/** "Como funciona o consórcio" — 4 passos em fundo escuro. */
export function HowConsortiumWorks() {
  return (
    <section aria-labelledby="como-funciona-titulo" className="escuro fundo-escuro secao relative overflow-hidden">
      <Shield variant="watermark" className="pointer-events-none absolute -left-20 bottom-0 h-[110%] w-auto text-white/[0.03]" />
      <div className="container-safi relative">
        <SectionHeading
            id="como-funciona-titulo"
            escuro
            eyebrow="Consórcio Porto Seguro e Servopa"
            titulo="Como funciona o consórcio"
            subtitulo="Uma forma planejada e sem juros de conquistar seu imóvel, veículo ou serviço."
          />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((p, i) => (
            <li key={p.titulo}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-white/10" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-safi-orange text-safi-navy">
                    <p.icone className="h-6 w-6" aria-hidden="true" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    <span className="sr-only">Passo {i + 1}: </span>
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{p.texto}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
