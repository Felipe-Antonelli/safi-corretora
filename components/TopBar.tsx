import { Mail } from "lucide-react";
import { site, linkWhatsApp, mensagemPadraoWhatsApp } from "@/data/site";
import { InstagramIcon, WhatsAppIcon } from "./icons/Brand";

/**
 * Barra superior azul-marinho profundo com contatos.
 * No celular mostra só os ícones de WhatsApp e Instagram.
 */
export function TopBar() {
  return (
    <div className="bg-safi-navyDeep text-sm text-white/85">
      <div className="container-safi flex h-11 items-center justify-between gap-4">
        {/* Celular: apenas ícones */}
        <p className="text-xs font-medium tracking-wide text-white/70 sm:hidden">Curitiba – PR</p>
        <div className="flex items-center gap-1 sm:hidden">
          <a
            href={linkWhatsApp(mensagemPadraoWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conversar no WhatsApp ${site.whatsapps[0].rotulo}`}
            className="grid h-11 w-11 place-items-center text-safi-orange"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram da SAFI ${site.instagram.usuario}`}
            className="grid h-11 w-11 place-items-center text-safi-orange"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Tablet e desktop: contatos completos */}
        <ul className="hidden items-center gap-5 sm:flex">
          {site.whatsapps.map((w, i) => (
            <li key={w.numero}>
              <a
                href={linkWhatsApp(mensagemPadraoWhatsApp, i)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Conversar no WhatsApp ${w.rotulo}`}
                className="inline-flex items-center gap-2 py-2 transition-colors hover:text-safi-orange"
              >
                <WhatsAppIcon className="h-4 w-4 text-safi-orange" />
                {w.rotulo}
              </a>
            </li>
          ))}
          <li className="hidden lg:block">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 py-2 transition-colors hover:text-safi-orange"
            >
              <Mail aria-hidden="true" className="h-4 w-4 text-safi-orange" />
              {site.email}
            </a>
          </li>
        </ul>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram da SAFI ${site.instagram.usuario}`}
          className="hidden items-center gap-2 py-2 transition-colors hover:text-safi-orange sm:inline-flex"
        >
          <InstagramIcon className="h-4 w-4 text-safi-orange" />
          {site.instagram.usuario}
        </a>
      </div>
    </div>
  );
}
