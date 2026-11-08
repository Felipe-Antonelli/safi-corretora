/**
 * Título padrão das seções: "eyebrow" em caixa alta com espaçamento,
 * título em Montserrat e linha fina laranja como divisor.
 */
export function SectionHeading({
  eyebrow,
  titulo,
  subtitulo,
  escuro = false,
  alinhamento = "center",
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  titulo: string;
  subtitulo?: string;
  escuro?: boolean;
  alinhamento?: "center" | "left";
  as?: "h1" | "h2";
  id?: string; // use em aria-labelledby da seção
}) {
  const centro = alinhamento === "center";
  return (
    <div className={`${centro ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p
          className={`text-xs font-bold uppercase tracking-[0.25em] sm:text-sm ${escuro ? "text-safi-orange" : "text-safi-orangeDark"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={`mt-3 font-display font-extrabold ${Tag === "h1" ? "text-fluid-h1" : "text-fluid-h2"} ${escuro ? "text-white" : "text-safi-navy"}`}
      >
        {titulo}
      </Tag>
      <span
        aria-hidden="true"
        className={`mt-4 block h-0.5 w-16 rounded-full bg-safi-orange ${centro ? "mx-auto" : ""}`}
      />
      {subtitulo ? (
        <p className={`mt-4 text-base sm:text-lg ${escuro ? "text-white/75" : "text-safi-muted"}`}>{subtitulo}</p>
      ) : null}
    </div>
  );
}
