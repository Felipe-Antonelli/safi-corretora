import { PageHero } from "@/components/PageHero";
import { criarMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = criarMetadata({ titulo: "Política de Privacidade", descricao: "Como a SAFI trata seus dados pessoais (LGPD).", caminho: "/politica-de-privacidade" });

/* PLACEHOLDER: revise este texto com um profissional antes de publicar. */
export default function PrivacidadePage() {
  return (
    <>
      <PageHero eyebrow="LGPD" titulo="Política de Privacidade" />
      <section className="secao bg-white">
        <div className="container-safi max-w-3xl space-y-5 leading-relaxed text-safi-muted">
          <p>A {site.nome} respeita a sua privacidade e trata os dados pessoais conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>
          <h2 className="font-display text-xl font-bold text-safi-navy">Quais dados coletamos</h2>
          <p>Nome, WhatsApp, e-mail e informações que você envia no formulário de cotação ou em nossos canais de atendimento.</p>
          <h2 className="font-display text-xl font-bold text-safi-navy">Para que usamos</h2>
          <p>Exclusivamente para elaborar cotações, entrar em contato com você e prestar o atendimento solicitado. Os dados podem ser compartilhados com seguradoras e administradoras apenas para a cotação.</p>
          <h2 className="font-display text-xl font-bold text-safi-navy">Seus direitos</h2>
          <p>Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail {site.email}.</p>
        </div>
      </section>
    </>
  );
}
