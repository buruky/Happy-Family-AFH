# Stack: Happy Family AFH

## Changes from default
- None for the framework: **Next.js (App Router) + React + TypeScript**, `output: "export"` (static HTML in `out/`)
- Styling: plain global CSS with design tokens (`app/globals.css`), no Tailwind
- Fonts: `next/font/google` (Atkinson Hyperlegible, Young Serif), self-hosted at build
- Content: `content/site.ts` is the single source of truth for business facts
- Hosting: not set yet. Cloudflare (default) works: build command `npm run build`, output directory `out`
- Photos: `public/photos/`, using the file names in README.md
