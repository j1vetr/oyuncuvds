# Oyun VDS

A premium Turkish 24/7 Gaming VDS landing page with internal order flow and PayTR payment integration. Targets MMORPG players (Knight Online, Metin2, Silkroad) who want to keep accounts online without leaving their home computer running.

## Run & Operate

- `pnpm --filter @workspace/gaming-vds run dev` — frontend (Vite, port from $PORT)
- `pnpm --filter @workspace/api-server run dev` — API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Inter font (700/300 weight contrast)
- API: Express 5
- Payment: PayTR (placeholder mode when credentials not set)
- Validation: Zod (`zod/v4`), React Hook Form + zodResolver
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle for API server)

## Where things live

- `artifacts/gaming-vds/src/config/packages.ts` — single source of truth for package names, prices, KDV rate. Edit here to update all pricing.
- `artifacts/gaming-vds/src/components/sections/` — all page sections (Hero, Packages, Games, HowItWorks, OrderFlow, Support, FAQ, Footer)
- `artifacts/gaming-vds/src/components/layout/Navbar.tsx` — sticky nav
- `artifacts/api-server/src/routes/payment.ts` — POST /api/create-payment endpoint
- `lib/api-spec/openapi.yaml` — API contract source of truth

## Architecture decisions

- PayTR integration runs in "placeholder" mode when PAYTR_* env vars are not set — returns a modal instead of redirecting. Drop in real credentials to go live.
- KDV is always 20% and computed on the server summary (frontend also shows it for UX). Source of truth is `packages.ts`.
- Single-page design: all sections are scroll-based with anchor IDs. No client-side routing beyond the `/` home route.
- Package selection from pricing cards pre-fills the order wizard via a `ref` forwarded to `OrderFlow`.
- All prices shown as `+ KDV` externally; full breakdown (base + KDV + total) in the order summary step.

## Product

Landing page sections: Hero, Problem/Solution, Packages (2 tiers), Supported Games, How It Works (4-step), Order Flow (3-step wizard), Support, FAQ (9 questions), Footer.

Order flow: Step 1 (package + billing toggle) → Step 2 (customer details form) → Step 3 (order summary + PayTR redirect). WhatsApp floating button throughout.

## User preferences

- Turkish only UI
- Do not mention: exact CPU model, GPU model, Nvidia GRID, provider/datacenter name
- Use customer-friendly terms: Yüksek Performanslı CPU, vGPU Destekli Grafik Altyapısı, etc.
- No fake testimonials
- No emojis in UI

## Gotchas

- PayTR credentials must be set via env vars (PAYTR_MERCHANT_ID, PAYTR_MERCHANT_KEY, PAYTR_MERCHANT_SALT, PAYTR_CALLBACK_URL, PAYTR_SUCCESS_URL, PAYTR_FAIL_URL) — without them the endpoint returns placeholder mode
- After any OpenAPI spec change: `pnpm --filter @workspace/api-spec run codegen` then restart both workflows

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Pricing config: `artifacts/gaming-vds/src/config/packages.ts`
