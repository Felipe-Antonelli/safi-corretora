import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";

// Fontes auto-hospedadas pelo next/font (nenhuma requisição externa no navegador)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["600", "700", "800"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.nome} | ${site.slogan}`, template: `%s | ${site.nome}` },
  description: site.descricao,
  openGraph: {
    title: `${site.nome} | ${site.slogan}`,
    description: site.descricao,
    url: "/",
    siteName: site.nome,
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#131D31" };

// Dados estruturados (JSON-LD) do tipo InsuranceAgency
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: site.nome,
  slogan: site.slogan,
  description: site.descricao,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/opengraph-image`,
  email: site.email,
  telephone: site.whatsapps.map((w) => `+${w.numero}`),
  sameAs: [site.instagram.url],
  address: { "@type": "PostalAddress", streetAddress: site.endereco.logradouro, postalCode: site.endereco.cep, addressLocality: site.endereco.cidade, addressRegion: site.endereco.uf, addressCountry: "BR" },
  areaServed: { "@type": "City", name: "Curitiba – PR" },
  contactPoint: site.whatsapps.map((w) => ({
    "@type": "ContactPoint", telephone: `+${w.numero}`, contactType: "customer service", availableLanguage: "Portuguese",
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <a href="#conteudo" className="sr-only z-[60] rounded-xl bg-safi-orange px-4 py-3 font-bold text-safi-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1} className="outline-none">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
