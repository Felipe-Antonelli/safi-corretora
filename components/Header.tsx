"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menu } from "@/data/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

/**
 * Header fixo (sticky). Ao rolar a página, o fundo azul-marinho
 * fica translúcido com blur e ganha sombra.
 */
export function Header() {
  const pathname = usePathname();
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const ativo = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        rolou
          ? "border-white/10 bg-safi-navy/85 shadow-soft backdrop-blur-md supports-[backdrop-filter]:bg-safi-navy/75"
          : "border-transparent bg-safi-navy"
      }`}
    >
      <div className="container-safi flex h-[4.5rem] items-center justify-between gap-6">
        <Logo priority />

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className={`relative rounded-lg px-4 py-3 text-[0.95rem] font-semibold transition-colors hover:text-safi-orange ${
                    ativo(item.href) ? "text-safi-orange" : "text-white/90"
                  }`}
                >
                  {item.rotulo}
                  {ativo(item.href) ? (
                    <span aria-hidden="true" className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded bg-safi-orange" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contato#cotacao" className="btn-primario hidden !px-5 sm:inline-flex">
            Solicite uma Cotação
          </Link>
          <MobileMenu itens={menu} ativo={ativo} />
        </div>
      </div>
    </header>
  );
}
