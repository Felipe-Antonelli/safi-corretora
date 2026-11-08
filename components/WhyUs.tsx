import { HeartHandshake, Scale, Zap, LifeBuoy } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const diferenciais = [
  {
    icone: HeartHandshake,
    titulo: "Atendimento humanizado",
    texto: "Você fala com gente de verdade, que escuta, explica cada detalhe e acompanha você de perto.",
  },
  {
    icone: Scale,
    titulo: "Comparação entre seguradoras",
    texto: "Cotamos com as principais seguradoras do mercado para encontrar a melhor relação entre preço e cobertura.",
  },
  {
    icone: Zap,
    titulo: "Cotação rápida pelo WhatsApp",
    texto: "Mande uma mensagem e receba sua cotação sem burocracia, no canal que você já usa.",
  },
  {
    icone: LifeBuoy,
    titulo: "Suporte no sinistro",
    texto: "Na hora que você mais precisa, a SAFI está ao seu lado para orientar e agilizar o atendimento.",
  },
];

/** "Por que a SAFI?" — diferenciais. */
export function WhyUs() {
  return (
    <section aria-labelledby="por-que-titulo" className="secao bg-white">
      <div className="container-safi">
        <SectionHeading
            id="por-que-titulo"
            eyebrow="Diferenciais"
            titulo="Por que a SAFI?"
            subtitulo="Somos uma corretora jovem, próxima e transparente. Nosso trabalho é proteger o que é importante para você."
          />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d, i) => (
            <li key={d.titulo}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="h-full rounded-xl bg-safi-gray p-6 text-center sm:text-left">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-safi-navy text-safi-orange sm:mx-0">
                    <d.icone className="h-7 w-7" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-safi-navy">{d.titulo}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-safi-muted">{d.texto}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
