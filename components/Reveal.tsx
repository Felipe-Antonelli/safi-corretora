"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Animação sutil de entrada (fade + leve subida) quando o bloco aparece na tela.
 *
 * O conteúdo NUNCA fica invisível por padrão:
 * - No HTML do servidor (e sem JavaScript) o bloco já vem visível.
 * - Só depois que o JS carrega, e apenas para blocos que estão ABAIXO da área
 *   visível, ele é escondido para animar quando o usuário rolar até ele.
 * - Blocos já visíveis no carregamento não piscam nem animam.
 * - Com prefers-reduced-motion, não há animação.
 * - Se o IntersectionObserver não existir ou algo falhar, um timeout de
 *   segurança mostra o conteúdo.
 * Servidor e cliente renderizam a mesma marcação inicial (sem divergência de hidratação).
 */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const belowFold = el.getBoundingClientRect().top > window.innerHeight * 0.9;
    if (reduceMotion || !belowFold || typeof IntersectionObserver === "undefined") return;

    setState("hidden");

    const show = () => setState("shown");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(el);

    // Rede de segurança: se por algum motivo o observer não disparar
    // (ex.: navegação direta para âncora, impressão), mostra mesmo assim.
    const safety = window.setTimeout(show, 4000);
    window.addEventListener("beforeprint", show);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
      window.removeEventListener("beforeprint", show);
    };
  }, []);

  const style =
    state === "static"
      ? undefined
      : {
          opacity: state === "hidden" ? 0 : 1,
          transform: state === "hidden" ? "translateY(18px)" : "none",
          transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
