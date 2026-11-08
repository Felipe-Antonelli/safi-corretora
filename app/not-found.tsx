import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Erro 404" titulo="Página não encontrada" texto="O endereço pode ter mudado. Que tal voltar ao início?" />
      <div className="container-safi py-12"><Link href="/" className="btn-primario">Voltar ao início</Link></div>
    </>
  );
}
