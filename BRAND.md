# SOZO Concierge — Brand Tokens

Derived from [sozo-education.com](https://www.sozo-education.com/).

## Brand Position

Premium Tokyo-international. SOZO Education positions itself as Tokyo's top international salon — English-ready, training-led, high-craft. The concierge prototype extends this into an AI-powered booking experience for foreign visitors.

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings / editorial | Playfair Display | 400, 700 (regular + italic) | Panel titles, agent greetings, stylist names, large quotes |
| UI / body | Inter | 400, 500, 600 | Navigation, buttons, body copy, form labels, metadata |
| Code / data | Geist Mono | 400 | JSON views, engine trace, data table IDs |

CSS custom properties:
- `--font-sans` → Inter
- `--font-serif` / `--font-heading` → Playfair Display
- `--font-mono` → Geist Mono

Usage via Tailwind: `font-sans`, `font-serif`, `font-heading`, `font-mono`.

## Color Palette

### Core (light theme)

| Token | Value | Hex approx | Usage |
|-------|-------|-----------|-------|
| `--background` | oklch(0.985 0.002 80) | #faf9f7 | Page background — warm off-white |
| `--foreground` | oklch(0.13 0 0) | #1a1a1a | Primary text — true black |
| `--card` | oklch(1 0 0) | #ffffff | Card surfaces |
| `--primary` | oklch(0.13 0 0) | #1a1a1a | Primary actions — black (matches SOZO's CTA buttons) |
| `--muted` | oklch(0.965 0.002 80) | #f5f5f3 | Subtle backgrounds (SOZO's alternating sections) |
| `--muted-foreground` | oklch(0.48 0 0) | #6b6b6b | Secondary text |
| `--border` | oklch(0.90 0.002 80) | #e3e1de | Borders |

### SOZO Brand Accent Colors

| Token | Value | Hex approx | Usage |
|-------|-------|-----------|-------|
| `--sozo-blue` | oklch(0.45 0.22 265) | #4353FF | Primary accent — royal blue. Section dividers, active states, links |
| `--sozo-blue-hover` | oklch(0.40 0.22 265) | #3242EE | Hover state for blue accent |
| `--sozo-gold` | oklch(0.72 0.11 75) | #c09a50 | Secondary accent — SOZO Master badge |
| `--sozo-cream` | oklch(0.97 0.005 80) | #f5f2ed | Subtle warm background |
| `--sozo-charcoal` | oklch(0.15 0 0) | #222222 | Deep text, logo |
| `--sozo-warm-gray` | oklch(0.75 0.005 70) | #b3b0ab | Placeholder text, dividers |

Usage: `text-sozo-blue`, `bg-sozo-cream`, `text-sozo-gold`, etc.

## Design Language

- **Editorial minimal.** Clean, spacious, uncluttered. Generous white space.
- **Black & white dominant.** Color used sparingly — royal blue as punctuation, not wallpaper.
- **Sharp edges.** Buttons and cards use small radius (`--radius: 0.25rem`), not rounded. Matches SOZO's sharp rectangular CTAs.
- **Typographic hierarchy.** Strong contrast between serif headings (Playfair Display) and sans-serif body (Inter).
- **Alternating sections.** White and light gray (`--muted`) backgrounds create visual rhythm.
- **Blue bar dividers.** Small horizontal `sozo-blue` bar before section headings — SOZO's signature element.
- **Imagery leads.** In beauty/salon contexts, photos come before text. Cards are photo-led.
- **Restrained motion.** Framer Motion for purposeful transitions only. No bounce or spring.
- **Premium density.** Comfortable spacing (gap-6, p-6) on desktop. Not cramped, not airy.

## Photography Direction

- Stylist portraits: warm-toned, softly lit, professional but approachable
- Portfolio shots: salon work, natural lighting, editorial crop
- Neighborhood shots: street-level Tokyo, cinematic grade (matches SOZO's Tokyo Tower/skyline imagery)
- All AI-generated images share a single generation prompt-template for consistency

## Badges

- **SOZO Master** — Gold accent (`--sozo-gold`), ~15-20% of stylists. Earned, not bought.
- **SOZO Inside** — Brand promise badge. Blue accent (`--sozo-blue`). Appears on homepage, agent intro.

## Reference Points

- **Airbnb** — host card pattern for stylist profiles
- **Mindtrip / Layla.ai** — multimedia chat (images inline in conversation)
- **Resy** — time-slot booking grid
- **Perplexity** — reasoning visibility (show why, not just what)
