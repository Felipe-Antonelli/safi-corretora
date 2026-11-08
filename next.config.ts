import type { NextConfig } from "next";

/**
 * Configuração do Next.js
 * - Imagens servidas em AVIF/WebP automaticamente pelo next/image.
 * - SVGs dos logos (placeholders) são exibidos com `unoptimized`
 *   diretamente no componente, então não precisam passar pelo otimizador.
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
