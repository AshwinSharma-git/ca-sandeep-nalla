# CA Sandeep Nalla & Co. — Web

Production-grade marketing site for CA Sandeep Nalla & Co., a Chartered Accountancy and financial consulting firm.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4** (CSS-first `@theme`, design tokens preserved from the source design)
- **Framer Motion** (via the `motion` package) — isolated to small client wrappers
- **lucide-react** for icons
- **next/font** for Inter + Playfair Display
- **next/image** with Unsplash configured via `remotePatterns`

## Structure

```
src/
├── app/                  # routes (App Router)
│   ├── layout.tsx        # root layout: fonts, metadata, JSON-LD, shell
│   ├── page.tsx          # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── services/audit/page.tsx
│   ├── services/gst/page.tsx
│   ├── services/company-registration/page.tsx
│   ├── services/income-tax/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts        # dynamic sitemap.xml
│   ├── robots.ts         # dynamic robots.txt
│   ├── not-found.tsx     # 404
│   ├── loading.tsx       # default loading UI
│   ├── error.tsx         # error boundary
│   └── globals.css       # Tailwind + design tokens
├── components/
│   ├── layout/           # Navbar, Footer, Logo, WhatsAppFloat
│   ├── sections/         # Page composition blocks
│   └── ui/               # Reusable primitives (Button, Container, FadeIn, …)
└── lib/                  # site-config, nav-links, services data, cn() util
```

## Design system

All design tokens (navy, gold, ivory, off-white, fonts) live in `src/app/globals.css` under `@theme`. Components consume them via Tailwind utilities (e.g. `bg-navy`, `text-gold`).

## Server vs. client components

Pages are server components by default. Only three places opt into the client:

- `Navbar` — scroll listener and mobile menu state
- `ContactForm` — local form state
- Motion wrappers (`FadeIn`, `Stagger`, `HoverLift`) — Framer Motion hooks

This keeps the JS payload small and SEO-friendly while preserving the animation language of the original design.

## Scripts

```bash
npm install      # install
npm run dev      # local dev (http://localhost:3000)
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
npm run typecheck
```

## Deployment

Optimized for Vercel — zero configuration. Push to a Git repo and import on Vercel.

Set the `siteConfig.url` in `src/lib/site-config.ts` to your production URL before deploying so metadata, OG tags, sitemap, and robots use it correctly.
