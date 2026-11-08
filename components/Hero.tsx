import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site, linkWhatsApp, mensagemPadraoWhatsApp } from "@/data/site";
import { WhatsAppIcon } from "./icons/Brand";
import { Shield } from "./Shield";

/**
 * Hero escuro inspirado no cartão de visita:
 * escudo grande com brilho à esquerda e chamada à direita.
 * (No celular, o escudo fica acima do texto e menor.)
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="escuro fundo-escuro relative overflow-hidden">
      {/* Marca d'água do escudo */}
      <Shield
        variant="watermark"
        className="pointer-events-none absolute -right-24 top-1/2 h-[140%] w-auto -translate-y-1/2 text-white/[0.035]"
      />

      <div className="container-safi relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-28">
        {/* Escudo em destaque */}
        <div className="relative mx-auto flex w-40 justify-center sm:w-52 lg:w-full lg:max-w-sm">
          <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-safi-orange/30 blur-3xl" />
          <Shield
            id="hero-escudo"
            title="Escudo SAFI"
            className="relative w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)] motion-safe:animate-float"
          />
        </div>

        {/* Texto */}
        <div className="text-center lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-safi-orange sm:text-sm">
            Corretora de Seguros e Consórcios
          </p>
          <h1 id="hero-titulo" className="mt-4 font-display text-fluid-hero font-extrabold text-white">
            {site.slogan}
          </h1>
          <p className="mt-4 font-display text-xl font-semibold italic text-safi-orange sm:text-2xl">
            {site.sloganSecundario}
          </p>
          <span aria-hidden="true" className="mx-auto mt-6 block h-px w-24 bg-safi-orange lg:mx-0" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0">
            Comparamos as principais seguradoras do mercado para encontrar a melhor proteção para você, sua
            família e sua empresa — com atendimento humanizado do começo ao fim.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="#cotacao" className="btn-primario w-full sm:w-auto">
              Fazer cotação <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href={linkWhatsApp(mensagemPadraoWhatsApp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contorno-branco w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" /> Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
