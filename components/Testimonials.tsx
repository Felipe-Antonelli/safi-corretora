"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { site } from "@/data/site";

/**
 * Depoimentos em carrossel (scroll-snap + botões).
 * Textos copiados das avaliações públicas da SAFI no Google
 * (perfil "Safi Corretora de Seguro"). Para atualizar, edite a lista abaixo.
 */
const depoimentos = [
  {
    nome: "Vânia S.",
    texto:
      "Excelente corretora! O atendimento é extremamente profissional e transparente. Eles analisam nosso perfil com cuidado e apresentam as melhores propostas do mercado, sempre explicando cada detalhe. Passam muita segurança. Recomendo!",
  },
  { nome: "Diego M.", texto: "Excelente atendimento, com muita transparência, atenção e profissionalismo." },
  { nome: "Laura F.", texto: "Obrigada pela dedicação em ajudar a conseguir a melhor seguradora, atendimento perfeito 🙏🏻" },
  { nome: "Dayeni B.", texto: "Ótima corretora, assistência 24h. Sem dor de cabeça quando precisa." },
  { nome: "Leticia M.", texto: "Comprometimento e agilidade no atendimento!" },
  { nome: "Lucas C.", texto: "Excelente serviço e muito atenciosos." },
  { nome: "Edinei D.", texto: "Ótima corretora, bem prestativa, atenciosa." },
  { nome: "Guilherme D.", texto: "Ótimo atendimento." },
];

/** "G" colorido do Google (ícone simples, só para indicar a origem das avaliações). */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export function Testimonials() {
  const trilhoRef = useRef<HTMLUListElement>(null);
  const [indice, setIndice] = useState(0);

  // Atualiza o indicador conforme a rolagem
  useEffect(() => {
    const trilho = trilhoRef.current;
    if (!trilho) return;
    const aoRolar = () => {
      const largura = trilho.firstElementChild?.getBoundingClientRect().width ?? 1;
      setIndice(Math.round(trilho.scrollLeft / (largura + 24)));
    };
    trilho.addEventListener("scroll", aoRolar, { passive: true });
    return () => trilho.removeEventListener("scroll", aoRolar);
  }, []);

  const irPara = (i: number) => {
    const trilho = trilhoRef.current;
    if (!trilho) return;
    const total = depoimentos.length;
    const alvo = trilho.children[(i + total) % total] as HTMLElement | undefined;
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    trilho.scrollTo({ left: alvo ? alvo.offsetLeft - trilho.offsetLeft : 0, behavior: reduzir ? "auto" : "smooth" });
  };

  return (
    <section aria-labelledby="depoimentos-titulo" className="secao bg-white">
      <div className="container-safi">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-safi-orangeDark sm:text-sm">Depoimentos</p>
            <h2 id="depoimentos-titulo" className="mt-3 font-display text-fluid-h2 font-extrabold text-safi-navy">
              Quem confia na SAFI
            </h2>
            <span aria-hidden="true" className="mx-auto mt-4 block h-0.5 w-16 rounded-full bg-safi-orange sm:mx-0" />
            <a
              href={site.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-shadow hover:shadow-soft"
            >
              <GoogleG className="h-6 w-6" />
              <span className="font-display text-xl font-extrabold text-safi-navy">{site.google.nota}</span>
              <span className="flex gap-0.5 text-[#FBBC04]" role="img" aria-label={`Nota ${site.google.nota} de 5`}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </span>
              <span className="text-sm text-safi-muted">{site.google.totalAvaliacoes} avaliações no Google</span>
            </a>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => irPara(indice - 1)}
              aria-label="Depoimento anterior"
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-safi-navy text-safi-navy transition-colors hover:bg-safi-navy hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => irPara(indice + 1)}
              aria-label="Próximo depoimento"
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-safi-navy text-safi-navy transition-colors hover:bg-safi-navy hover:text-white"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={trilhoRef}
          aria-label="Depoimentos de clientes"
          className="sem-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {depoimentos.map((d, i) => (
            <li
              key={d.nome}
              aria-label={`${i + 1} de ${depoimentos.length}`}
              className="w-full shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-safi-gray p-6 sm:p-7">
                <Quote className="h-8 w-8 text-safi-orange" aria-hidden="true" />
                <div className="mt-3 flex gap-0.5 text-safi-orange" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-safi-navy">“{d.texto}”</blockquote>
                <figcaption className="mt-6 border-t border-slate-200 pt-4">
                  <span className="block font-display font-bold text-safi-navy">{d.nome}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-safi-muted">
                    <GoogleG className="h-3.5 w-3.5" /> Avaliação no Google
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
          {depoimentos.map((d, i) => (
            <span
              key={d.nome}
              className={`h-2 rounded-full transition-all ${i === indice ? "w-8 bg-safi-orange" : "w-2 bg-slate-300"}`}
            />
          ))}
        </div>
        <p className="mt-6 text-center text-sm">
          <a href={site.google.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-safi-orangeDark underline-offset-4 hover:underline">
            Ver todas as avaliações no Google
          </a>
        </p>
      </div>
    </section>
  );
}
