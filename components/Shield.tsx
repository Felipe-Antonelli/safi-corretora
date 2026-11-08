import { DIREITA, LARANJA, VIEWBOX } from "./EscudoSafi";

/**
 * Escudo da SAFI usado como elemento gráfico.
 *
 * Variantes:
 * - "solid":     escudo oficial colorido (laranja + branco).
 * - "watermark": silhueta do escudo na cor do texto (use text-white/[0.04] etc.)
 *                como marca d'água em fundos escuros.
 */
type ShieldProps = {
  variant?: "solid" | "watermark";
  className?: string;
  /** Mantido por compatibilidade; não é mais necessário. */
  id?: string;
  title?: string;
};

export function Shield({ variant = "solid", className, title }: ShieldProps) {
  const rotulo = title ? { role: "img", "aria-label": title } : { "aria-hidden": true as const };
  const marcaDagua = variant === "watermark";
  return (
    <svg viewBox={VIEWBOX} xmlns="http://www.w3.org/2000/svg" className={className} {...rotulo}>
      <path fill={marcaDagua ? "currentColor" : "#F87012"} fillRule="evenodd" d={LARANJA} />
      <path fill={marcaDagua ? "currentColor" : "#FFFFFF"} fillRule="evenodd" d={DIREITA} />
    </svg>
  );
}
