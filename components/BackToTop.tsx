"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

/** Botão "voltar ao topo" — aparece depois de rolar a página. */
export function BackToTop() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 700);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const subir = () => {
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduzir ? "auto" : "smooth" });
    document.getElementById("conteudo")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={subir}
      aria-label="Voltar ao topo"
      tabIndex={visivel ? 0 : -1}
      aria-hidden={!visivel}
      className={`fixed bottom-[5.5rem] right-6 z-30 grid h-11 w-11 place-items-center rounded-full bg-safi-navy text-white shadow-soft ring-1 ring-white/20 transition-all duration-300 hover:bg-safi-orange hover:text-safi-navy sm:bottom-[6.5rem] sm:right-[1.75rem] ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ChevronUp className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
