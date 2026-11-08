import type { Config } from "tailwindcss";

/**
 * Tema da SAFI Corretora de Seguros.
 * Todas as cores da marca ficam em `colors.safi` e podem ser usadas
 * como: bg-safi-orange, text-safi-navy, border-safi-orangeLight etc.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        safi: {
          orange: "#F87012", // Primária: botões, destaques, ícones, divisores
          orangeHover: "#D95E0A", // Hover dos botões laranja
          orangeLight: "#FFF3EA", // Fundos suaves (ex.: formulário)
          orangeDark: "#B54A05", // Texto laranja sobre fundo claro (contraste AA)
          navy: "#131D31", // Secundária: header, hero, faixas, rodapé, textos
          navyDeep: "#0B1322", // Azul mais profundo para gradientes e top bar
          gray: "#F5F6F8", // Cinza de seção
          muted: "#5B6475", // Texto secundário
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Tipografia fluida para títulos (clamp)
        "fluid-hero": ["clamp(2rem, 1.35rem + 3.2vw, 3.75rem)", { lineHeight: "1.08" }],
        "fluid-h1": ["clamp(1.875rem, 1.4rem + 2.2vw, 3rem)", { lineHeight: "1.12" }],
        "fluid-h2": ["clamp(1.625rem, 1.25rem + 1.6vw, 2.5rem)", { lineHeight: "1.15" }],
        "fluid-h3": ["clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)", { lineHeight: "1.25" }],
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(19, 29, 49, 0.18)",
        card: "0 4px 18px -6px rgba(19, 29, 49, 0.12)",
        glow: "0 0 80px 10px rgba(248, 112, 18, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
