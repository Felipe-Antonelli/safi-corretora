"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

/**
 * Depoimentos em carrossel (scroll-snap + botões).
 * ATENÇÃO: os textos abaixo são EXEMPLOS (placeholder).
 * Substitua por depoimentos reais de clientes, com autorização.
 */
const depoimentos = [
  {
    nome: "Cliente exemplo 1",
    produto: "Seguro Auto",
    texto: "Atendimento rápido pelo WhatsApp e explicaram cada cobertura com paciência. Consegui um seguro melhor pagando menos.",
  },
  {
    nome: "Cliente exemplo 2",
    produto: "Seguro Residencial",
    texto: "Nunca tinha feito seguro da casa e me surpreendi com o valor. A equipe da SAFI comparou várias opções pra mim.",
  },
  {
    nome: "Cliente exemplo 3",
    produto: "Consórcio de Imóvel",
    texto: "Me ajudaram a entender como funciona o consórcio e a escolher o crédito ideal. Atendimento muito próximo.",
  },
  {
    nome: "Cliente exemplo 4",
    produto: "Seguro de Vida",
    texto: "Transparência do começo ao fim. Hoje tenho a tranquilidade de saber que minha família está protegida.",
  },
  {
    nome: "Cliente exemplo 5",
    produto: "Seguro Empresarial",
    texto: "Analisaram os riscos da minha loja e indicaram só o que fazia sentido. Recomendo de olhos fechados.",
  },
];

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
                  <span className="text-sm text-safi-muted">{d.produto}</span>
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
        <p className="mt-6 text-center text-xs text-safi-muted">
          * Depoimentos ilustrativos (placeholder) — serão substituídos por avaliações reais de clientes.
        </p>
      </div>
    </section>
  );
}
