# SAFI Corretora de Seguros — Site institucional

Site em **Next.js 15 (App Router) + TypeScript + Tailwind CSS**, com páginas estáticas (SSG),
formulário de cotação (React Hook Form + Zod) e SEO (metadata, Open Graph, sitemap, robots e JSON-LD).

## Como rodar

Requisito: **Node.js 18.18 ou superior** (recomendado 20+).

```bash
cd safi-corretora
npm install
npm run dev
```

Abra http://localhost:3000.

Build de produção: `npm run build` e depois `npm start`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, slogans, os 2 WhatsApp, e-mail, Instagram, endereço, **CNPJ**, números (clientes/anos) | `data/site.ts` |
| Seguros (cards + páginas `/seguros/[slug]`) | `data/seguros.ts` |
| Consórcios (cards + páginas `/consorcios/[slug]`) | `data/consorcios.ts` |
| Seguradoras e administradoras parceiras | `data/parceiros.ts` |
| Cores e fontes do tema | `tailwind.config.ts` |
| Depoimentos (hoje são **placeholders**) | `components/Testimonials.tsx` |
| Política de privacidade (texto placeholder) | `app/politica-de-privacidade/page.tsx` |

### Adicionar um seguro
Em `data/seguros.ts`, copie um bloco `{ slug: ..., ... }` e altere. O `slug` vira a URL
(`/seguros/meu-slug`). O campo `icone` deve ser uma chave de `components/icons/ProductIcon.tsx`
(para um ícone novo, importe do [lucide](https://lucide.dev/icons) e adicione no mapa).
O card, a página, o sitemap e a opção no formulário são gerados automaticamente.

### Adicionar um consórcio
Mesmo processo em `data/consorcios.ts`.

### Logos oficiais
- Logos das seguradoras: substitua os arquivos em `public/parceiros/` (os atuais são
  placeholders com o nome). Pode trocar por `.png`/`.webp`; nesse caso ajuste o caminho em
  `data/parceiros.ts`.
- Logo da SAFI: `public/logo.svg` e `public/logo-branca.svg`. No site, o logo é montado em
  `components/Logo.tsx` (escudo `components/Shield.tsx` + texto).

## Formulário de cotação
Envia para `app/api/cotacao/route.ts`, que valida com Zod e hoje **apenas registra no log**.
Para receber por e-mail, integre um serviço (ex.: Resend) nesse arquivo.
Há também o botão "Prefere pelo WhatsApp?", que abre o wa.me com mensagem pronta.

## Deploy na Vercel
1. Importe o repositório na Vercel.
2. Em **Root Directory**, escolha `safi-corretora`.
3. Defina a variável `NEXT_PUBLIC_SITE_URL` com o domínio final (ex.: `https://www.safiseguros.com.br`).

## Notas de acessibilidade
Os botões laranja usam texto azul-marinho (contraste ~5,9:1); branco sobre `#F87012`
ficaria abaixo do mínimo da WCAG. Texto laranja sobre fundo claro usa o tom `safi.orangeDark`.
