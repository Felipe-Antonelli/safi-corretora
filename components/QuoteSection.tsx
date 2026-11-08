import { gruposDeProdutos } from "@/lib/produtos";
import { QuoteForm } from "./QuoteForm";
import { SectionHeading } from "./SectionHeading";

/** Seção do formulário de cotação (fundo laranja claro). */
export function QuoteSection({
  produtoInicial,
  titulo = "Solicite uma Cotação",
}: {
  produtoInicial?: string;
  titulo?: string;
}) {
  return (
    <section id="cotacao" aria-labelledby="cotacao-titulo" className="secao bg-safi-orangeLight">
      <div className="container-safi grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-start">
        <SectionHeading
          id="cotacao-titulo"
          alinhamento="left"
          eyebrow="Cotação gratuita"
          titulo={titulo}
          subtitulo="Preencha seus dados e receba as melhores opções das principais seguradoras. Sem compromisso e sem burocracia."
        />
        <QuoteForm grupos={gruposDeProdutos} produtoInicial={produtoInicial} />
      </div>
    </section>
  );
}
