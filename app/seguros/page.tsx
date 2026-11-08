import { PageHero } from "@/components/PageHero";
import { SegurosGrid } from "@/components/ProductsGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { Partners } from "@/components/Partners";
import { criarMetadata } from "@/lib/metadata";

export const metadata = criarMetadata({
  titulo: "Seguros",
  descricao: "Seguro auto, moto, caminhão, residencial, empresarial, vida, saúde, viagem e pet em Curitiba. Comparamos as principais seguradoras para você.",
  caminho: "/seguros",
});

export default function SegurosPage() {
  return (
    <>
      <PageHero eyebrow="Seguros" titulo="Proteção sob medida para cada momento" texto="Comparamos as principais seguradoras do mercado para encontrar a cobertura certa pelo melhor preço." />
      <section className="secao bg-safi-gray" aria-label="Lista de seguros">
        <div className="container-safi"><SegurosGrid /></div>
      </section>
      <CtaBanner />
      <Partners />
    </>
  );
}
