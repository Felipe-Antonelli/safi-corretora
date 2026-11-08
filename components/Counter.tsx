"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Contador animado: conta de 0 até `valor` quando aparece na tela.
 * Para quem prefere menos movimento, mostra o número final direto.
 */
export function Counter({ valor, prefixo = "", duracao = 1400 }: { valor: number; prefixo?: string; duracao?: number }) {
  const [atual, setAtual] = useState(valor); // SSR já renderiza o valor final (bom p/ SEO)
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setAtual(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observer.disconnect();
        const inicio = performance.now();
        const passo = (agora: number) => {
          const p = Math.min((agora - inicio) / duracao, 1);
          const suave = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setAtual(Math.round(valor * suave));
          if (p < 1) frame = requestAnimationFrame(passo);
        };
        frame = requestAnimationFrame(passo);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [valor, duracao]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefixo}
      {atual}
    </span>
  );
}
