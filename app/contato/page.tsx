import { Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/QuoteSection";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/Brand";
import { criarMetadata } from "@/lib/metadata";
import { site, linkWhatsApp, mensagemPadraoWhatsApp } from "@/data/site";

export const metadata = criarMetadata({
  titulo: "Contato",
  descricao: "Fale com a SAFI pelo WhatsApp (41) 99967-1180 ou (41) 99954-4671, e-mail ou Instagram. Cotação gratuita.",
  caminho: "/contato",
});

export default function ContatoPage() {
  const canais = [
    ...site.whatsapps.map((w, i) => ({ icone: <WhatsAppIcon className="h-6 w-6" />, rotulo: "WhatsApp", valor: w.rotulo, href: linkWhatsApp(mensagemPadraoWhatsApp, i), externo: true })),
    { icone: <Mail className="h-6 w-6" aria-hidden="true" />, rotulo: "E-mail", valor: site.email, href: `mailto:${site.email}`, externo: false },
    { icone: <InstagramIcon className="h-6 w-6" />, rotulo: "Instagram", valor: site.instagram.usuario, href: site.instagram.url, externo: true },
  ];
  return (
    <>
      <PageHero eyebrow="Contato" titulo="Vamos conversar?" texto="Escolha o canal que preferir. Respondemos rapidinho, principalmente pelo WhatsApp." />
      <section className="secao bg-white" aria-label="Canais de atendimento">
        <div className="container-safi grid gap-8 lg:grid-cols-2">
          <ul className="grid gap-4 sm:grid-cols-2">
            {canais.map((c) => (
              <li key={c.valor}>
                <a href={c.href} {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={`${c.rotulo}: ${c.valor}`}
                  className="flex h-full items-center gap-4 rounded-xl border border-slate-200 p-5 shadow-card transition hover:border-safi-orange">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-safi-orangeLight text-safi-orange">{c.icone}</span>
                  <span className="min-w-0">
                    <span className="block text-sm text-safi-muted">{c.rotulo}</span>
                    <span className="block break-all font-semibold text-safi-navy">{c.valor}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 rounded-xl bg-safi-gray p-5 sm:col-span-2">
              <MapPin className="h-6 w-6 shrink-0 text-safi-orange" aria-hidden="true" />
              <address className="not-italic text-safi-navy">{site.endereco.logradouro} — {site.endereco.cidade} – {site.endereco.uf}</address>
            </li>
          </ul>
          {/* Mapa (placeholder de Curitiba – PR). Troque a query pelo endereço completo. */}
          <iframe
            title="Mapa de Curitiba – PR"
            src="https://www.google.com/maps?q=Curitiba+-+PR&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-xl border-0 shadow-card lg:h-full lg:min-h-[360px]"
          />
        </div>
      </section>
      <QuoteSection />
    </>
  );
}
