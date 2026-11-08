"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { site, linkWhatsApp, mensagemPadraoWhatsApp } from "@/data/site";
import { InstagramIcon, WhatsAppIcon } from "./icons/Brand";

type Item = { readonly href: string; readonly rotulo: string };

/**
 * Menu hambúrguer (até 1024px) em painel lateral (drawer) com overlay.
 * - Fecha com ESC, clique no overlay ou ao trocar de página.
 * - Trava a rolagem do body enquanto aberto.
 * - Mantém o foco dentro do painel (navegação por teclado).
 */
export function MobileMenu({ itens, ativo }: { itens: readonly Item[]; ativo: (href: string) => boolean }) {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();
  const botaoRef = useRef<HTMLButtonElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);

  // Fecha ao navegar
  useEffect(() => setAberto(false), [pathname]);

  useEffect(() => {
    if (!aberto) return;
    const painel = painelRef.current;
    document.body.style.overflow = "hidden";
    painel?.querySelector<HTMLElement>("a, button")?.focus();

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botaoRef.current?.focus();
      }
      // Prende o Tab dentro do drawer
      if (e.key === "Tab" && painel) {
        const focaveis = painel.querySelectorAll<HTMLElement>("a, button");
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primeiro.focus();
        }
      }
    };
    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  const fechar = () => {
    setAberto(false);
    botaoRef.current?.focus();
  };

  return (
    <div className="lg:hidden">
      <button
        ref={botaoRef}
        type="button"
        onClick={() => setAberto(true)}
        aria-expanded={aberto}
        aria-controls="menu-mobile"
        aria-label="Abrir menu"
        className="grid h-12 w-12 place-items-center rounded-xl text-white transition-colors hover:bg-white/10"
      >
        <Menu className="h-7 w-7" aria-hidden="true" />
      </button>

      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={fechar}
        className={`fixed inset-0 z-50 bg-safi-navyDeep/70 backdrop-blur-sm transition-opacity duration-300 ${
          aberto ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        id="menu-mobile"
        ref={painelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        inert={!aberto}
        className={`escuro fundo-escuro fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col overflow-y-auto shadow-2xl transition-transform duration-300 ${
          aberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="font-display text-lg font-extrabold tracking-wide text-white">Menu</span>
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar menu"
            className="grid h-12 w-12 place-items-center rounded-xl text-white hover:bg-white/10"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Menu principal (celular)" className="px-3 py-4">
          <ul className="space-y-1">
            {itens.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setAberto(false)}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className={`flex min-h-[52px] items-center rounded-xl px-4 text-lg font-semibold transition-colors ${
                    ativo(item.href)
                      ? "bg-white/10 text-safi-orange"
                      : "text-white hover:bg-white/5 hover:text-safi-orange"
                  }`}
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto space-y-3 border-t border-white/10 px-5 py-6">
          <Link href="/contato#cotacao" onClick={() => setAberto(false)} className="btn-primario w-full">
            Solicite uma Cotação
          </Link>
          {site.whatsapps.map((w, i) => (
            <a
              key={w.numero}
              href={linkWhatsApp(mensagemPadraoWhatsApp, i)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Conversar no WhatsApp ${w.rotulo}`}
              className="flex min-h-[44px] items-center gap-3 text-white/85 hover:text-safi-orange"
            >
              <WhatsAppIcon className="h-5 w-5 text-safi-orange" /> {w.rotulo}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="flex min-h-[44px] items-center gap-3 break-all text-white/85 hover:text-safi-orange">
            <Mail className="h-5 w-5 shrink-0 text-safi-orange" aria-hidden="true" /> {site.email}
          </a>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram da SAFI ${site.instagram.usuario}`}
            className="flex min-h-[44px] items-center gap-3 text-white/85 hover:text-safi-orange"
          >
            <InstagramIcon className="h-5 w-5 text-safi-orange" /> {site.instagram.usuario}
          </a>
        </div>
      </div>
    </div>
  );
}
