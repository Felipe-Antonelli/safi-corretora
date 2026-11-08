import { site, linkWhatsApp, mensagemPadraoWhatsApp } from "@/data/site";
import { WhatsAppIcon } from "./icons/Brand";

/** Botão flutuante de WhatsApp (verde com borda laranja). */
export function WhatsAppButton() {
  return (
    <a
      href={linkWhatsApp(mensagemPadraoWhatsApp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar com a SAFI no WhatsApp ${site.whatsapps[0].rotulo}`}
      className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full border-[3px] border-safi-orange bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
