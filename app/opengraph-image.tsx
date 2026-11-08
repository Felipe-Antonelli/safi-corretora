import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Imagem Open Graph (1200x630) gerada no build com o escudo + logo
export const alt = site.nome;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 60, padding: 80,
        background: "linear-gradient(160deg, #131D31 0%, #0B1322 100%)", color: "white" }}>
        <svg width="260" height="312" viewBox="0 0 100 120">
          <path d="M50 3 93 17.5V55c0 29-18.5 49.5-43 62C25.5 104.5 7 84 7 55V17.5Z" fill="#F87012" />
          <path d="M50 13 83 24.3V55c0 22.6-13.8 39.4-33 50.3C30.8 94.4 17 77.6 17 55V24.3Z" fill="#131D31" />
          <path d="M32 60.5 45 73l24-27" fill="none" stroke="#F87012" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 800, letterSpacing: 4 }}>SAFI</div>
          <div style={{ fontSize: 30, letterSpacing: 10, color: "#ffffffcc" }}>CORRETORA DE SEGUROS</div>
          <div style={{ width: 120, height: 4, background: "#F87012", margin: "30px 0" }} />
          <div style={{ fontSize: 40, fontWeight: 700 }}>{site.slogan}</div>
          <div style={{ fontSize: 30, color: "#F87012", fontStyle: "italic", marginTop: 8 }}>{site.sloganSecundario}</div>
        </div>
      </div>
    ),
    size,
  );
}
