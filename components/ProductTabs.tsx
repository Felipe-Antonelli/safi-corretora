"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

/**
 * Abas acessíveis "Seguros | Consórcios".
 * O conteúdo de cada aba é renderizado no servidor e passado como
 * `children` (painéis), então só a troca de aba roda no navegador.
 * Suporta setas ←/→, Home e End (padrão WAI-ARIA de tabs).
 */
export function ProductTabs({ abas }: { abas: { rotulo: string; conteudo: ReactNode }[] }) {
  const [ativa, setAtiva] = useState(0);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const mover = (indice: number) => {
    const total = abas.length;
    const novo = (indice + total) % total;
    setAtiva(novo);
    refs.current[novo]?.focus();
  };

  const aoTeclar = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") mover(ativa + 1);
    else if (e.key === "ArrowLeft") mover(ativa - 1);
    else if (e.key === "Home") mover(0);
    else if (e.key === "End") mover(abas.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Tipos de produto"
        onKeyDown={aoTeclar}
        className="mx-auto flex w-full max-w-md rounded-xl bg-white p-1.5 shadow-card ring-1 ring-slate-200"
      >
        {abas.map((aba, i) => (
          <button
            key={aba.rotulo}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-aba-${i}`}
            aria-selected={ativa === i}
            aria-controls={`${base}-painel-${i}`}
            tabIndex={ativa === i ? 0 : -1}
            onClick={() => setAtiva(i)}
            className={`min-h-[48px] flex-1 rounded-lg px-4 font-display text-base font-bold transition-colors ${
              ativa === i ? "bg-safi-navy text-white shadow" : "text-safi-muted hover:text-safi-navy"
            }`}
          >
            {aba.rotulo}
          </button>
        ))}
      </div>

      {abas.map((aba, i) => (
        <div
          key={aba.rotulo}
          role="tabpanel"
          id={`${base}-painel-${i}`}
          aria-labelledby={`${base}-aba-${i}`}
          hidden={ativa !== i}
          tabIndex={0}
          className="mt-10 rounded-xl focus-visible:ring-offset-safi-gray"
        >
          {aba.conteudo}
        </div>
      ))}
    </div>
  );
}
