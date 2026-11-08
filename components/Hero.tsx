import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { site, linkWhatsApp, mensagemPadraoWhatsApp } from "@/data/site";
import { WhatsAppIcon } from "./icons/Brand";
import { Shield } from "./Shield";
import { EscudoSafi } from "./EscudoSafi";

/**
 * Hero escuro inspirado no cartão de visita:
 * escudo grande com brilho à esquerda e chamada à direita.
 * (No celular, o escudo fica acima do texto e menor.)
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="escuro fundo-escuro relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden"
    >
      {/* Marca d'água: silhueta do escudo SAFI */}
      <Shield
        variant="watermark"
        className="pointer-events-none absolute -right-32 top-1/2 h-[125%] w-auto -translate-y-1/2 text-white/[0.025]"
      />
      {/* Brilho laranja suave atrás do escudo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full bg-safi-orange/10 blur-[120px]"
      />

      <div className="container-safi relative grid flex-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:py-20">
        {/* Escudo em destaque */}
        <div className="relative mx-auto flex w-36 justify-center sm:w-48 lg:w-full lg:max-w-[22rem]">
          <div aria-hidden="true" className="absolute inset-[18%] rounded-full bg-safi-orange/25 blur-3xl" />
          <EscudoSafi
            tom="claro"
            title="Escudo da SAFI Corretora de Seguros"
            className="relative h-auto w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)] motion-safe:animate-float"
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

      {/* Convite para rolar */}
      <a
        href="#numeros"
        aria-label="Rolar para ver mais"
        className="relative mx-auto mb-6 hidden flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-safi-orange sm:flex"
      >
        Conheça a SAFI
        <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
