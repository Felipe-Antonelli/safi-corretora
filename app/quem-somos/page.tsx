import { HeartHandshake, Eye, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { StatsBar } from "@/components/StatsBar";
import { WhyUs } from "@/components/WhyUs";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { criarMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = criarMetadata({
  titulo: "Quem Somos",
  descricao: "Conheça a SAFI: corretora de seguros e consórcios jovem, próxima e transparente, em Curitiba – PR.",
  caminho: "/quem-somos",
});

const pilares = [
  { icone: Target, titulo: "Missão", texto: "Proteger o que mais importa para cada cliente, com a solução certa e um atendimento próximo e honesto." },
  { icone: Eye, titulo: "Visão", texto: "Ser a corretora de confiança das famílias e empresas de Curitiba, reconhecida pelo cuidado em cada atendimento." },
  { icone: HeartHandshake, titulo: "Valores", texto: "Transparência, empatia, agilidade e compromisso com o cliente antes, durante e depois da contratação." },
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero eyebrow="Quem somos" titulo={site.slogan} texto={site.sloganSecundario} />
      <section className="secao bg-white" aria-labelledby="historia-titulo">
        <div className="container-safi grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading id="historia-titulo" alinhamento="left" eyebrow="Nossa história" titulo="Uma corretora jovem, feita de gente que se importa" />
          <div className="space-y-4 text-lg leading-relaxed text-safi-muted">
            <p>
              A SAFI nasceu em Curitiba com um propósito simples: tornar o seguro algo fácil de entender e acessível. Em{" "}
              {site.numeros.anos} anos de mercado, já atendemos mais de {site.numeros.clientes} clientes.
            </p>
            <p>
              Trabalhamos com as principais seguradoras do mercado e comparamos as opções para encontrar a melhor para cada
              pessoa. Também oferecemos consórcios em parceria com a Porto Seguro Consórcio e o Consórcio Servopa.
            </p>
            <p>Aqui o atendimento é humanizado e personalizado: você fala com quem conhece seu caso e acompanha você de verdade.</p>
          </div>
        </div>
      </section>
      <StatsBar />
      <section className="secao bg-safi-gray" aria-label="Missão, visão e valores">
        <ul className="container-safi grid gap-6 md:grid-cols-3">
          {pilares.map((p) => (
            <li key={p.titulo} className="rounded-xl bg-white p-7 shadow-card">
              <p.icone className="h-9 w-9 text-safi-orange" aria-hidden="true" strokeWidth={1.75} />
              <h2 className="mt-4 font-display text-xl font-bold text-safi-navy">{p.titulo}</h2>
              <p className="mt-2 leading-relaxed text-safi-muted">{p.texto}</p>
            </li>
          ))}
        </ul>
      </section>
      <WhyUs />
      <CtaBanner />
    </>
  );
}
