import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { linkWhatsApp } from "@/data/site";
import { WhatsAppIcon } from "./icons/Brand";
import { Shield } from "./Shield";

/**
 * Faixa CTA azul-marinho com o escudo em marca d'água.
 * Reaproveitada em várias páginas (o CTA "Solicite uma Cotação"
 * aparece repetido ao longo do site, como nas referências).
 */
export function CtaBanner({
  titulo = "Fale com a SAFI e receba sua cotação gratuita",
  texto = "Sem compromisso: comparamos as opções e explicamos tudo de forma simples.",
  hrefCotacao = "/contato#cotacao",
  mensagemWhatsApp = "Olá, SAFI! Quero receber uma cotação gratuita.",
}: {
  titulo?: string;
  texto?: string;
  hrefCotacao?: string;
  mensagemWhatsApp?: string;
}) {
  return (
    <section aria-label="Solicite sua cotação" className="escuro relative overflow-hidden bg-safi-navy">
      <Shield
        variant="watermark"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[180%] w-auto -translate-x-1/2 -translate-y-1/2 text-white/[0.05]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-safi-orange to-transparent" />
      <div className="container-safi relative flex flex-col items-center gap-6 py-14 text-center sm:py-16 lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <h2 className="font-display text-fluid-h2 font-extrabold text-white">{titulo}</h2>
          <p className="mt-3 text-white/75 sm:text-lg">{texto}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link href={hrefCotacao} className="btn-primario w-full sm:w-auto">
            Solicite sua cotação <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <a
            href={linkWhatsApp(mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
