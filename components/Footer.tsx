import Link from "next/link";
import { Mail, MapPin, FileText } from "lucide-react";
import { site, menu, linkWhatsApp, mensagemPadraoWhatsApp } from "@/data/site";
import { seguros } from "@/data/seguros";
import { consorcios } from "@/data/consorcios";
import { InstagramIcon, WhatsAppIcon } from "./icons/Brand";
import { Logo } from "./Logo";
import { Shield } from "./Shield";

/** Rodapé azul-marinho completo. */
export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="escuro relative overflow-hidden bg-safi-navy text-white/80">
      <Shield variant="watermark" className="pointer-events-none absolute -right-16 -top-10 h-[420px] w-auto text-white/[0.04]" />
      <div className="h-1 bg-gradient-to-r from-safi-orange via-safi-orangeHover to-safi-orange" aria-hidden="true" />

      <div className="container-safi relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Marca */}
        <div className="lg:col-span-4">
          <Logo id="footer-escudo" />
          <p className="mt-5 font-display text-lg font-bold text-white">{site.slogan}</p>
          <p className="mt-1 italic text-safi-orange">{site.sloganSecundario}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Corretora jovem, próxima e transparente. Comparamos as principais seguradoras do mercado para
            encontrar a proteção ideal para você.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram da SAFI ${site.instagram.usuario}`}
            className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/15 px-4 text-sm font-semibold text-white transition-colors hover:border-safi-orange hover:text-safi-orange"
          >
            <InstagramIcon className="h-5 w-5 text-safi-orange" />
            {site.instagram.usuario}
          </a>
        </div>

        {/* Links rápidos */}
        <nav aria-label="Links rápidos" className="lg:col-span-2">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Navegação</h2>
          <ul className="mt-4 space-y-1 text-sm">
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-[36px] items-center hover:text-safi-orange">
                  {item.rotulo}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/politica-de-privacidade" className="inline-flex min-h-[36px] items-center hover:text-safi-orange">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Produtos" className="lg:col-span-3">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Produtos</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {seguros.map((s) => (
              <li key={s.slug}>
                <Link href={`/seguros/${s.slug}`} className="inline-flex min-h-[36px] items-center hover:text-safi-orange">
                  {s.nome}
                </Link>
              </li>
            ))}
            {consorcios.map((c) => (
              <li key={c.slug}>
                <Link href={`/consorcios/${c.slug}`} className="inline-flex min-h-[36px] items-center hover:text-safi-orange">
                  Consórcio {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contatos */}
        <div className="lg:col-span-3">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.whatsapps.map((w, i) => (
              <li key={w.numero}>
                <a
                  href={linkWhatsApp(mensagemPadraoWhatsApp, i)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conversar no WhatsApp ${w.rotulo}`}
                  className="inline-flex min-h-[40px] items-center gap-2 hover:text-safi-orange"
                >
                  <WhatsAppIcon className="h-4 w-4 text-safi-orange" /> {w.rotulo}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-[40px] items-center gap-2 break-all hover:text-safi-orange">
                <Mail className="h-4 w-4 shrink-0 text-safi-orange" aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li className="flex gap-2 pt-1">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-safi-orange" aria-hidden="true" />
              <address className="not-italic">
                {site.endereco.logradouro}
                <br />
                {site.endereco.cidade} – {site.endereco.uf}
              </address>
            </li>
            <li className="flex gap-2 pt-1">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-safi-orange" aria-hidden="true" />
              <span>CNPJ: {site.cnpj}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-safi flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>
          <Link href="/politica-de-privacidade" className="inline-flex min-h-[36px] items-center hover:text-safi-orange">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
