import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ProductIconStrip } from "@/components/ProductIconStrip";
import { ProductTabs } from "@/components/ProductTabs";
import { SegurosGrid, ConsorciosGrid } from "@/components/ProductsGrid";
import { HowConsortiumWorks } from "@/components/HowConsortiumWorks";
import { WhyUs } from "@/components/WhyUs";
import { CtaBanner } from "@/components/CtaBanner";
import { Partners } from "@/components/Partners";
import { Testimonials } from "@/components/Testimonials";
import { QuoteSection } from "@/components/QuoteSection";
import { SectionHeading } from "@/components/SectionHeading";
import { criarMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = criarMetadata({ titulo: site.slogan, descricao: site.descricao, caminho: "/" });

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductIconStrip />
      <section aria-labelledby="produtos-titulo" className="secao bg-safi-gray">
        <div className="container-safi">
          <SectionHeading
            id="produtos-titulo"
            eyebrow="Produtos"
            titulo="Seguros e consórcios para cada momento"
            subtitulo="Escolha o que você quer proteger ou conquistar. A SAFI cuida da comparação e de toda a burocracia."
          />
          <div className="mt-10">
            <ProductTabs abas={[{ rotulo: "Seguros", conteudo: <SegurosGrid /> }, { rotulo: "Consórcios", conteudo: <ConsorciosGrid /> }]} />
          </div>
        </div>
      </section>
      <HowConsortiumWorks />
      <WhyUs />
      <CtaBanner hrefCotacao="#cotacao" />
      <Partners />
      <Testimonials />
      <QuoteSection />
    </>
  );
}
