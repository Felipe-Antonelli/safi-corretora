import Link from "next/link";
import { EscudoSafi } from "./EscudoSafi";

/**
 * Logo oficial da SAFI: escudo em "S" (vetor) + "SAFI / Corretora de Seguros".
 * - claro = true  → para fundo escuro (texto e metade do escudo em branco)
 * - claro = false → para fundo claro (azul-marinho)
 */
export function Logo({
  claro = true,
  className = "",
}: {
  claro?: boolean;
  /** Mantidos por compatibilidade com o uso antigo. */
  id?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="SAFI Corretora de Seguros — página inicial"
      className={`group inline-flex items-center gap-2.5 rounded-lg ${className}`}
    >
      <EscudoSafi tom={claro ? "claro" : "escuro"} className="h-11 w-auto sm:h-12" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.7rem] font-extrabold tracking-wide ${claro ? "text-white" : "text-safi-navy"}`}>
          SAFI
        </span>
        <span className={`mt-1 text-[0.66rem] font-medium tracking-[0.04em] ${claro ? "text-white/85" : "text-safi-navy/80"}`}>
          Corretora de Seguros
        </span>
      </span>
    </Link>
  );
}
