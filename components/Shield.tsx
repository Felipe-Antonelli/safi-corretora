/**
 * Escudo da SAFI em SVG.
 *
 * Variantes:
 * - "solid":     escudo laranja com volume (efeito 3D leve) — hero, logo, OG.
 * - "watermark": apenas o contorno, usado como marca d'água em fundos escuros.
 *
 * `id` deve ser único na página quando houver mais de um escudo "solid"
 * (é usado nos gradientes do SVG).
 */
type ShieldProps = {
  variant?: "solid" | "watermark";
  className?: string;
  id?: string;
  title?: string;
};

// Contorno externo e interno do escudo (viewBox 0 0 100 120)
const EXTERNO = "M50 3 93 17.5V55c0 29-18.5 49.5-43 62C25.5 104.5 7 84 7 55V17.5Z";
const INTERNO = "M50 13 83 24.3V55c0 22.6-13.8 39.4-33 50.3C30.8 94.4 17 77.6 17 55V24.3Z";

export function Shield({ variant = "solid", className, id = "escudo", title }: ShieldProps) {
  const rotulo = title ? { role: "img", "aria-label": title } : { "aria-hidden": true };

  if (variant === "watermark") {
    return (
      <svg viewBox="0 0 100 120" className={className} fill="none" {...rotulo}>
        <path d={EXTERNO} stroke="currentColor" strokeWidth="1.2" />
        <path d={INTERNO} stroke="currentColor" strokeWidth="0.8" />
        <path d="M33 60.5 45 72l23-25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 120" className={className} {...rotulo}>
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={`${id}-base`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF9A4D" />
          <stop offset="0.45" stopColor="#F87012" />
          <stop offset="1" stopColor="#B84F06" />
        </linearGradient>
        <linearGradient id={`${id}-miolo`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1C2A45" />
          <stop offset="1" stopColor="#0B1322" />
        </linearGradient>
        <linearGradient id={`${id}-brilho`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Borda laranja com volume */}
      <path d={EXTERNO} fill={`url(#${id}-base)`} />
      {/* Miolo azul-marinho */}
      <path d={INTERNO} fill={`url(#${id}-miolo)`} />
      {/* Metade esquerda iluminada (efeito 3D) */}
      <path d="M50 13 17 24.3V55c0 22.6 13.8 39.4 33 50.3Z" fill="#fff" opacity="0.06" />
      <path d="M50 3 7 17.5V55c0 12 3.2 22.5 9 31.5L50 13Z" fill={`url(#${id}-brilho)`} opacity="0.5" />
      {/* Marca de "check" — proteção */}
      <path
        d="M32 60.5 45 73l24-27"
        fill="none"
        stroke="#F87012"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
