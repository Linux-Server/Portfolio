@README

# CLAUDE.md

This file provide guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- **Build:** `npm run build`
- **Lint:** `npm run lint` (runs `eslint` via eslint-config-next with core-web-vitals and typescript rules)
- **Start production:** `npm run start`

No test framework is configured.

## Architecture

Single-page Next.js 16 portfolio site (App Router). All content lives on one route (`app/page.tsx`) which composes section components in order:

`Nav → Hero → Experience → Projects → Skills → Awards → Contact → Footer`

### Key directories
- `app/` — Root layout, page, and global CSS (Tailwind v4 via PostCSS)
- `components/` — One component per section, all client-side rendered
- `NeuralNetwork3D.tsx` — Three.js scene using React Three Fiber + Drei

### Tech stack
- **Next.js 16** with App Router, TypeScript, strict mode
- **Tailwind CSS v4** (configured via `@tailwindcss/postcss`)
- **Framer Motion** for animations
- **Three.js** via `@react-three/fiber` and `@react-three/drei` for 3D graphics
- **lucide-react** for icons

### Path aliases
`@/*` maps to the project root (configured in `tsconfig.json`).

### Fonts
Google Fonts loaded in `app/layout.tsx`: Bebas Neue, Syne, DM Mono, Outfit.



