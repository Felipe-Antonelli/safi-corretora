import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ConsorciosGrid } from "@/components/ProductsGrid";
import { HowConsortiumWorks } from "@/components/HowConsortiumWorks";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { administradorasConsorcio } from "@/data/parceiros";
import { criarMetadata } from "@/lib/metadata";

export const metadata = criarMetadata({
  titulo: "Consórcios",
  descricao: "Consórcio de imóvel, veículo e serviços sem juros, com Porto Seguro Consórcio e Consórcio Servopa. Atendimento SAFI em Curitiba.",
  caminho: "/consorcios",
});

export default function ConsorciosPage() {
  return (
    <>
      <PageHero eyebrow="Consórcios" titulo="Conquiste seus planos sem pagar juros" texto="Em parceria com a Porto Seguro Consórcio e o Consórcio Servopa, ajudamos você a escolher o crédito ideal para imóvel, veículo ou serviços." />
      <section className="secao bg-safi-gray" aria-labelledby="consorcios-titulo">
        <div className="container-safi">
          <SectionHeading id="consorcios-titulo" eyebrow="Produtos" titulo="Escolha seu consórcio" />
          <div className="mt-10"><ConsorciosGrid /></div>
        </div>
      </section>
      <HowConsortiumWorks />
      <section className="secao bg-white" aria-labelledby="adm-titulo">
        <div className="container-safi">
          <SectionHeading id="adm-titulo" eyebrow="Parceiras" titulo="Administradoras de confiança" />
          <ul className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-6">
            {administradorasConsorcio.map((a) => (
              <li key={a.nome} className="flex h-28 items-center justify-center rounded-xl border border-slate-200 p-4">
                {a.logo ? (
                  <Image src={a.logo} alt={a.nome} width={180} height={64} unoptimized={a.logo.endsWith(".svg")} className="h-auto max-h-16 w-auto max-w-full object-contain" />
                ) : (
                  <span className="text-center font-display text-lg font-extrabold text-safi-navy">{a.nome.replace(/^Consórcio\s+/, "")}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner titulo="Vamos planejar sua próxima conquista?" />
    </>
  );
}
