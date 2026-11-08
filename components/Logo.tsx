import Link from "next/link";
import { Shield } from "./Shield";

/**
 * Logo da SAFI montado com o escudo + texto (fonte Montserrat).
 * Para usar o arquivo oficial, troque /public/logo.svg e
 * /public/logo-branca.svg e substitua este componente por <Image />.
 */
export function Logo({
  claro = true,
  id = "logo-escudo",
  className = "",
}: {
  claro?: boolean; // true = texto branco (fundo escuro)
  id?: string;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="SAFI Corretora de Seguros — página inicial"
      className={`group inline-flex items-center gap-2.5 rounded-lg ${className}`}
    >
      <Shield id={id} className="h-11 w-auto drop-shadow-[0_4px_10px_rgba(248,112,18,0.35)]" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-2xl font-extrabold tracking-wide ${claro ? "text-white" : "text-safi-navy"}`}
        >
          SAFI
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] ${claro ? "text-white/80" : "text-safi-muted"}`}
        >
          Corretora de Seguros
        </span>
      </span>
    </Link>
  );
}
