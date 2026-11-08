"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { cotacaoSchema, formatarTelefone, type CotacaoDados } from "@/lib/cotacao";
import type { GrupoOpcoes } from "@/lib/produtos";
import { linkWhatsApp } from "@/data/site";
import { WhatsAppIcon } from "./icons/Brand";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Formulário de cotação com React Hook Form + Zod.
 * Envia para /api/cotacao. Também oferece a alternativa de
 * abrir o WhatsApp com mensagem pronta (incluindo o produto escolhido).
 */
export function QuoteForm({ grupos, produtoInicial = "" }: { grupos: GrupoOpcoes[]; produtoInicial?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CotacaoDados>({
    resolver: zodResolver(cotacaoSchema),
    defaultValues: { nome: "", whatsapp: "", email: "", produto: produtoInicial, mensagem: "", site: "" },
  });

  const whatsappReg = register("whatsapp");
  const produto = watch("produto");
  const nome = watch("nome");

  const mensagemWhats = `Olá, SAFI! ${nome ? `Meu nome é ${nome}. ` : ""}Gostaria de uma cotação${
    produto ? ` de ${produto}` : ""
  }.`;

  const enviar = async (dados: CotacaoDados) => {
    setStatus("loading");
    try {
      const resp = await fetch("/api/cotacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!resp.ok) throw new Error("Falha no envio");
      setStatus("success");
      reset({ nome: "", whatsapp: "", email: "", produto: produtoInicial, mensagem: "", site: "" });
    } catch {
      setStatus("error");
    }
  };

  const erro = (campo: keyof CotacaoDados) =>
    errors[campo] ? (
      <p id={`erro-${campo}`} className="mt-1.5 text-sm font-medium text-red-700">
        {errors[campo]?.message}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit(enviar)} noValidate className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nome" className="text-sm font-semibold text-safi-navy">Nome completo *</label>
          <input id="nome" type="text" autoComplete="name" className="campo" aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? "erro-nome" : undefined} {...register("nome")} />
          {erro("nome")}
        </div>
        <div>
          <label htmlFor="whatsapp" className="text-sm font-semibold text-safi-navy">WhatsApp *</label>
          <input id="whatsapp" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="(41) 99999-9999"
            className="campo" aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? "erro-whatsapp" : undefined}
            {...whatsappReg}
            onChange={(e) => {
              e.target.value = formatarTelefone(e.target.value);
              whatsappReg.onChange(e);
            }} />
          {erro("whatsapp")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-safi-navy">E-mail *</label>
          <input id="email" type="email" autoComplete="email" className="campo" aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "erro-email" : undefined} {...register("email")} />
          {erro("email")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="produto" className="text-sm font-semibold text-safi-navy">Tipo de seguro ou consórcio *</label>
          <select id="produto" className="campo" aria-invalid={!!errors.produto}
            aria-describedby={errors.produto ? "erro-produto" : undefined} {...register("produto")}>
            <option value="">Selecione…</option>
            {grupos.map((g) => (
              <optgroup key={g.rotulo} label={g.rotulo}>
                {g.opcoes.map((o) => <option key={o} value={o}>{o}</option>)}
              </optgroup>
            ))}
          </select>
          {erro("produto")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className="text-sm font-semibold text-safi-navy">Mensagem (opcional)</label>
          <textarea id="mensagem" rows={4} className="campo resize-y" placeholder="Conte um pouco sobre o que você precisa"
            {...register("mensagem")} />
          {erro("mensagem")}
        </div>
        {/* Campo isca anti-spam: invisível para pessoas */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="site">Não preencha</label>
          <input id="site" type="text" tabIndex={-1} autoComplete="off" {...register("site")} />
        </div>
      </div>

      <div aria-live="polite" className="mt-5">
        {status === "success" ? (
          <p className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800">
            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            Recebemos sua solicitação! Em breve a SAFI entra em contato pelo WhatsApp ou e-mail.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-800">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "loading"} className="btn-primario w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
          {status === "loading" ? (
            <><LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> Enviando…</>
          ) : (
            <><Send className="h-5 w-5" aria-hidden="true" /> Solicitar cotação</>
          )}
        </button>
        <span className="text-center text-sm text-safi-muted sm:ml-2">Prefere pelo WhatsApp?</span>
        <a href={linkWhatsApp(mensagemWhats)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto">
          <WhatsAppIcon className="h-5 w-5" /> Chamar no WhatsApp
        </a>
      </div>
    </form>
  );
}
