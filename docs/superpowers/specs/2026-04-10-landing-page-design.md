# Droplet Labs — Landing Page Design Spec

## Context

Droplet Labs is a software services company. The current landing page (`src/app/page.tsx`) is a minimal light-themed page with 4 basic sections. This spec defines a full rebuild into a visually rich, water-themed landing page with 6 sections, layered depth effects, and scroll-driven animations.

The original planning doc is at `landing-page-doc.md`. This spec supersedes it where decisions differ (color, theme, typography, creative direction).

---

## Design Decisions

| Area | Decision |
|---|---|
| Theme | Light mode only. No dark/light toggle. |
| Layout | Dark ocean hero → SVG wave → tinted light body → SVG wave → dark ocean CTA/footer |
| Color palette | Water: cyan `#06b6d4`, sky `#0ea5e9`, teal `#14b8a6`, blue `#3b82f6`, dark ocean `#041c2c` |
| Body background | Tinted `#e8f4f2` — never pure white |
| Hero background | Deep ocean gradient `#041c2c → #0a2a3c → #0d3448` |
| Typography | Sora (headings, Google Font) + DM Sans (body, Google Font) + JetBrains Mono (tags/labels, Google Font) |
| Card style | White (`#fff`) with per-card water color tints on border/glow/tags, numbered 01–06, rounded corners (`border-radius: 12px`), box shadows |
| Creative direction | Layered depth — floating glass cards in hero, gradient orbs per section, glassmorphism, parallax |
| Transitions | SVG wave dividers at hero→body and body→CTA boundaries |
| Animations | Framer Motion: scroll fade-up, stagger on grids, parallax on orbs/floating cards/waves |
| Grain texture | Subtle SVG noise overlay across entire page, `mix-blend-mode: overlay`, `pointer-events: none` |

---

## Color System

### Water Palette

| Name | Hex | Usage |
|---|---|---|
| Ocean Dark | `#041c2c` | Hero bg, CTA bg, footer bg |
| Ocean Mid | `#0a2a3c` | Hero gradient mid |
| Ocean Teal | `#0d3448` | Hero gradient end, wave start |
| Cyan | `#06b6d4` | Card 01 (Websites), card 05 (API), primary accent |
| Sky | `#0ea5e9` | Card 02 (Web Apps), orbs |
| Teal | `#14b8a6` | Card 03 (SaaS), card 06 (Maintenance) |
| Blue | `#3b82f6` | Card 04 (AI), orbs |
| Dark Cyan | `#0891b2` | Section eyebrow text, tag text, "Try demo" links |
| Body Tint | `#e8f4f2` | Page body background |
| Cyan Light | `#ecfeff` | Tag backgrounds (cyan cards) |
| Sky Light | `#f0f9ff` | Tag backgrounds (sky cards) |
| Teal Light | `#f0fdfa` | Tag backgrounds (teal cards) |
| Blue Light | `#eff6ff` | Tag backgrounds (blue cards) |

### Text Colors

| Usage | Color |
|---|---|
| Headings (light body) | `#0f172a` (slate-900) |
| Body text (light body) | `#64748b` (slate-500) |
| Muted text (light body) | `#94a3b8` (slate-400) |
| Headings (dark hero/CTA) | `#ffffff` |
| Body text (dark hero/CTA) | `rgba(255,255,255,0.5)` |
| Eyebrow (dark) | `rgba(34,211,238,0.7)` |
| Eyebrow (light) | `#0891b2` |

---

## Typography

| Role | Font | Weight | Tracking | Source |
|---|---|---|---|---|
| Headings (h1, h2) | Sora | 600–800 | -2px to -1.5px | Google Fonts via `next/font/google` |
| Body, nav links, descriptions | DM Sans | 400–500 | normal | Google Fonts via `next/font/google` |
| Tags, labels, eyebrows, numbers, code | JetBrains Mono | 400–500 | 2–3px (eyebrows), normal (tags) | Google Fonts via `next/font/google` |

### Sizing

- Hero h1: `text-5xl md:text-7xl` (48px / 72px)
- Section h2: `text-3xl md:text-4xl` (30px / 36px)
- Card h3: `text-base md:text-lg` (16px / 18px)
- Body: `text-sm md:text-base` (14px / 16px)
- Tags: `text-xs` (12px)
- Eyebrows: `text-xs` (12px), uppercase letter-spacing

---

## Page Structure

### 1. Navigation (Sticky)

- **Position**: `sticky top-0 z-50`
- **Background**: Over dark hero: `rgba(8,28,40,0.7)` with `backdrop-filter: blur(16px)`. Transitions to `rgba(232,244,242,0.8)` with blur when scrolled past hero into light body.
- **Left**: Logo text "DROPLET LABS." — white on dark, `#0f172a` on light
- **Center links** (hidden on mobile): Services · Demos · How it Works — anchor links
- **Right**: "Let's Talk" CTA button with `background: linear-gradient(135deg, #06b6d4, #0ea5e9)`, white text, rounded (`border-radius: 8px`)
- **Mobile**: Hamburger menu icon, slide-down menu with Framer Motion AnimatePresence
- **Scroll behavior**: Detect when user scrolls past hero section. Nav colors invert (dark text, light bg). Transition with CSS `transition: all 0.3s`.
- **Separator**: `1px` divider between nav links and CTA

### 2. Hero (Dark Ocean)

- **Background**: `linear-gradient(180deg, #041c2c 0%, #0a2a3c 30%, #0d3448 60%, #164e63 85%)`
- **Layout**: Left-aligned content, floating glass cards on the right
- **Padding**: `pt-24 md:pt-32 pb-32 md:pb-40` (large vertical padding)
- **Content** (left side, `max-w-xl`, `z-10`):
  - Eyebrow: `// WEB · SAAS · AI` in JetBrains Mono, `rgba(34,211,238,0.7)`
  - Headline: "We build software that scales" in Sora, white, `text-5xl md:text-7xl font-bold tracking-tighter`
  - Subtext: "From pixel-perfect websites to full-stack SaaS platforms — supercharged with AI. We ship fast, build smart, and don't do mediocre." in DM Sans, `rgba(255,255,255,0.5)`
  - CTAs:
    - "Start a Project" — white bg, `#0d3448` text, `rounded-xl px-7 py-3`, bold
    - "See Live Demos" — glass ghost: `border: 1px solid rgba(255,255,255,0.15)`, `bg: rgba(255,255,255,0.05)`, `backdrop-filter: blur(4px)`, white text, `rounded-xl`
  - Trust bar: 3 stats below a `border-top: 1px solid rgba(255,255,255,0.08)`, horizontal flex
    - "4–6 wk / Avg time to launch" | "Pre-built / SaaS modules" | "End-to-end / Build to support"
    - Stat value: white, `font-bold`, Sora. Label: `rgba(255,255,255,0.35)`, DM Sans, `text-xs`
- **Floating glass cards** (right side, decorative, `absolute` positioned):
  - 2 cards at different rotations (`rotate(2deg)`, `rotate(-1.5deg)`)
  - `background: rgba(255,255,255,0.06)`, `border: 1px solid rgba(255,255,255,0.08)`, `backdrop-filter: blur(12px)`, `rounded-xl`
  - Internal mockup shapes: bars, dots, buttons in `rgba(6,182,212, 0.1–0.2)`
  - Hidden on mobile (`hidden md:block`)
- **Gradient orbs** (absolute, parallax):
  - Primary: `right: -5%, top: 10%`, 400px, cyan/sky gradient, `blur(60px)` — parallax speed: 0.3
  - Secondary: `right: 20%, bottom: 15%`, 200px, lighter cyan, `blur(40px)` — parallax speed: 0.5
  - Tertiary: `left: 5%, bottom: 30%`, 150px, dark cyan, `blur(30px)` — parallax speed: 0.2
- **Animation**: Hero content fades up on load (not scroll-triggered). Stagger: eyebrow (0s), headline (0.1s), subtext (0.2s), CTAs (0.3s), trust bar (0.4s). Orbs animate with continuous slow float.

### Wave Divider (Hero → Body)

- SVG wave with organic curved path
- Fill color: `#e8f4f2` (body tint) on ocean dark background
- Can have 2 layered wave paths at different opacities for depth
- Slight parallax shift on scroll
- CSS: `margin-top: -1px` to prevent subpixel gaps

### 3a. Services: What We Build (4 cards, 2x2 grid)

- **Section eyebrow**: `// SERVICES` in JetBrains Mono, `#0891b2`
- **Section heading**: "What we build" in Sora, `#0f172a`
- **Grid**: `grid-cols-1 md:grid-cols-2 gap-4`
- **Background**: `#e8f4f2` with soft orb (`left: -5%, top: 20%`, cyan, blurred)

**Cards** (each white with unique water color):

| # | Title | Color | Border | Glow | Tag bg |
|---|---|---|---|---|---|
| 01 | Websites | Cyan `#06b6d4` | `rgba(6,182,212,0.12)` | `rgba(6,182,212,0.1)` | `#ecfeff` |
| 02 | Web Apps | Sky `#0ea5e9` | `rgba(14,165,233,0.12)` | `rgba(14,165,233,0.1)` | `#f0f9ff` |
| 03 | SaaS Products | Teal `#14b8a6` | `rgba(20,184,166,0.12)` | `rgba(20,184,166,0.1)` | `#f0fdfa` |
| 04 | AI Integration | Blue `#3b82f6` | `rgba(59,130,246,0.12)` | `rgba(59,130,246,0.1)` | `#eff6ff` |

**Card structure**:
- `bg-white rounded-xl p-6 relative overflow-hidden`
- `border: 1px solid [card border color]`
- `box-shadow: 0 2px 16px [card color at 0.06 opacity]`
- Inner glow orb: `absolute top-[-15px] right-[-15px]`, 70px circle, radial gradient, `blur(15px)`
- Number: JetBrains Mono, `text-xs`, card accent color, `letter-spacing: 2px`
- Title: Sora, `text-base font-semibold`, `#0f172a`
- Description: DM Sans, `text-sm`, `#64748b`
- Tags: JetBrains Mono, `text-xs`, card accent color text, card light bg, `rounded px-2.5 py-1`

**Card content** (from landing-page-doc.md):
- 01 Websites: "Landing pages, business sites, portfolios — fast, responsive, built to convert." Tags: Fast loading · SEO optimized · Mobile first
- 02 Web Apps: "Dashboards, internal tools, MVPs — custom built, production-ready." Tags: Custom built · Cloud hosted · Scalable
- 03 SaaS Products: "Idea to live product in weeks. Auth, tenancy, RBAC, billing, CI/CD — all pre-built." Tags: Auth0 · RBAC · Multi-tenant · CI/CD
- 04 AI Integration: "Chatbots, smart search, content generation — woven into your product." Tags: Chatbots · AI search · Content gen

**Animation**: Stagger children on scroll into view, 0.1s delay between cards.

### 3b. Services: After Launch (2 cards, 1x2 grid)

- **Heading**: "After launch, we stay" in Sora, `#0f172a`
- **Grid**: `grid-cols-1 md:grid-cols-2 gap-4`
- Same card style as 3a, continuing numbering:

| # | Title | Color |
|---|---|---|
| 05 | API & Integrations | Cyan `#06b6d4` |
| 06 | Maintenance & Support | Teal `#14b8a6` |

- Card 06 has a "RECURRING" badge: `absolute top-3.5 right-3.5`, JetBrains Mono, `text-[10px]`, teal accent color, teal light bg, `rounded px-2.5 py-1`

**Card content**:
- 05 API & Integrations: "Connect payments, CRMs, or any third-party service your product needs." Tags: REST · GraphQL · Webhooks
- 06 Maintenance & Support: "We don't disappear after launch. Bug fixes, updates, monitoring, new features." Tags: Basic · Pro · Priority

### 4. Live Demos (4 cards, 2x2 grid)

- **Background**: Subtle gradient `linear-gradient(180deg, #e8f4f2 0%, #e0f4f0 100%)` with soft orb
- **Section eyebrow**: `// DEMOS`
- **Heading**: "See it in action"
- **Subtext**: "Click through, break things — it's all real code"
- **Grid**: `grid-cols-1 md:grid-cols-2 gap-4`

**Demo cards**:
- `bg-white rounded-xl overflow-hidden border border-slate-200 box-shadow`
- Preview area: `h-32 md:h-40`, `background: linear-gradient(135deg, [water tint 1], [water tint 2])`, contains abstract UI wireframe shapes (bars, circles, chat bubbles) in low-opacity water colors
- Below preview: title (Sora, `font-semibold`), description (`text-sm`, slate-400), "Try demo →" link in JetBrains Mono, `#0891b2`
- Links are placeholder (empty href) for now

**Cards**:
1. Analytics Dashboard — "Charts, filters, exports" — preview: grid of rectangles (dashboard layout)
2. Multi-Tenant Admin — "Tenants, users, RBAC" — preview: sidebar + table rows
3. AI Support Agent — "Context-aware chatbot" — preview: chat bubbles
4. Onboarding Wizard — "Multi-step signup flow" — preview: step circles + progress bar

### 5. How It Works (4 cards, horizontal row)

- **Section eyebrow**: `// PROCESS`
- **Heading**: "How it works"
- **Grid**: `grid-cols-2 md:grid-cols-4 gap-4`
- **Cards**: White, `rounded-xl`, with colored gradient top-border (`3px`, each step a different water color: cyan → sky → teal → blue)
- Large faded number: JetBrains Mono, `text-3xl font-bold`, water color at 15% opacity
- Title: Sora, `font-semibold`, `#0f172a`
- Description: DM Sans, `text-sm`, `#94a3b8`
- `box-shadow: 0 2px 16px rgba(0,0,0,0.04)`

**Steps**:
1. **Discovery** — "We scope your idea, timeline, and budget" (cyan top-border)
2. **Proposal** — "Fixed price, clear deliverables, no surprises" (sky top-border)
3. **Build** — "Weekly updates, you see real progress" (teal top-border)
4. **Launch** — "Deployed, monitored, supported" (blue top-border)

### Wave Divider (Body → CTA)

- Inverse of the hero wave: body tint curves into dark ocean
- SVG wave with `fill: #041c2c` on `#e8f4f2` background
- Same parallax treatment as hero wave

### 6. Contact / CTA (Dark Ocean)

- **Background**: `linear-gradient(180deg, #041c2c, #041c2c)` (solid dark ocean, entered via wave)
- **Layout**: Centered text
- **Orbs**: Two gradient orbs (cyan, sky) at different positions, parallax
- **Eyebrow**: `// LET'S GO` in JetBrains Mono, `#0891b2`
- **Headline**: "Got an idea? Let's build it." in Sora, white, `text-3xl md:text-5xl font-bold`
- **Subtext**: "Tell us what you need — we'll tell you how fast we can ship it." in DM Sans, `rgba(255,255,255,0.5)`
- **CTAs**:
  - "Book a Call" — white bg, `#0d3448` text, `rounded-xl`, bold (links to Calendly placeholder)
  - "Email Us" — glass ghost style (same as hero ghost), links to `mailto:hello@dropletlabs.com`

### 7. Footer (Dark Ocean)

- **Background**: `#041c2c` (continues from CTA)
- **Border top**: `1px solid rgba(6,182,212,0.1)`
- **Layout**: Flex, space-between
- **Left**: "© 2026 Droplet Labs. All rights reserved." — `rgba(255,255,255,0.3)`
- **Right**: Twitter, LinkedIn, GitHub links — `rgba(255,255,255,0.4)`, hover to `#06b6d4`

---

## Animation & Parallax

### Framer Motion

| Element | Animation | Trigger |
|---|---|---|
| Hero content | Fade up (y: 40→0, opacity: 0→1), staggered 0.1s per child | Page load |
| Hero orbs | Continuous float: y oscillates ±20px over 8s, ease-in-out, infinite | Always |
| Hero floating cards | Continuous float: y oscillates ±10px over 6s, offset timing | Always |
| Each section | Fade up wrapper (y: 60→0, opacity: 0→1, duration: 0.8s) | Scroll into viewport (`once: true`, `margin: "-100px"`) |
| Grid cards | Stagger children: parent uses `staggerChildren: 0.1` | Parent in viewport |
| Nav | Background color transition | Scroll position (past hero) |
| Mobile menu | Slide down/up with AnimatePresence | Toggle state |

### Parallax (Framer Motion `useScroll` + `useTransform`)

| Element | Parallax speed | Direction |
|---|---|---|
| Hero orbs (primary) | 0.3x | Vertical, moves slower than scroll |
| Hero orbs (secondary) | 0.5x | Vertical |
| Hero floating cards | 0.2x | Vertical |
| Wave dividers | 0.1x | Vertical (subtle shift) |
| Section background orbs | 0.15x | Vertical |

### Reusable Components

- `MotionWrapper`: Client component wrapping children in `motion.div` with `whileInView` fade-up. Props: `className?`, `delay?: number`, `y?: number` (default 60).
- `ParallaxLayer`: Client component using `useScroll` + `useTransform` to apply parallax. Props: `speed: number`, `className?`, `children`.
- `StaggerGrid`: Client component with `staggerChildren` variant for card grids.

---

## Grain Overlay

- Fixed-position `div` covering viewport with `pointer-events: none`, `z-50`
- CSS `::before` pseudo-element with SVG `feTurbulence` noise as data URI background
- `background-size: 256px`, `opacity: 0.02`, `mix-blend-mode: overlay`
- Renders in `layout.tsx` or `page.tsx` as a top-level element

---

## Mobile Responsive

| Component | Mobile (<768px) | Desktop (≥768px) |
|---|---|---|
| Nav | Hamburger menu, hide text links. CTA stays visible. | Full horizontal nav |
| Hero | Full width content, hide floating glass cards, orbs scale down | Left text, floating cards right |
| Service grids | 1 column | 2 columns |
| Demo grid | 1 column | 2 columns |
| How it Works | 2x2 grid | 4-column row |
| Trust bar | 3-column tight or wrap | Horizontal row with gap-12 |
| Contact CTAs | Stack vertically | Side by side |
| Wave dividers | Reduce wave height | Full height |

Container: `max-w-5xl mx-auto px-6 md:px-12`
Minimum touch targets: 44px

---

## File Structure

### New files to create

```
src/
  components/
    sections/
      navbar.tsx          — sticky nav with scroll-aware colors, mobile hamburger
      hero.tsx            — dark ocean hero with orbs, floating cards, trust bar
      wave-divider.tsx    — reusable SVG wave (props: direction, dark/light)
      services-build.tsx  — "What we build" 4-card grid
      services-after.tsx  — "After launch" 2-card grid
      demos.tsx           — 4 demo placeholder cards
      how-it-works.tsx    — 4-step horizontal timeline
      contact-cta.tsx     — dark CTA section
      footer.tsx          — dark footer
    grain-overlay.tsx     — fixed grain texture overlay
    gradient-orb.tsx      — animated/parallax gradient orb (reusable)
    motion-wrapper.tsx    — reusable fade-up scroll animation
    parallax-layer.tsx    — reusable parallax wrapper
    stagger-grid.tsx      — grid with staggered children animation
    mobile-menu.tsx       — slide-down mobile nav menu
    floating-card.tsx     — decorative glass card for hero
  lib/
    constants.ts          — all section data (services, demos, steps, social links)
    utils.ts              — KEEP existing (cn function)
```

### Files to modify

```
src/app/layout.tsx      — swap fonts (Sora + DM Sans + JetBrains Mono), remove ThemeProvider (no dark mode)
src/app/globals.css     — new color system, grain overlay CSS, remove dark mode vars
src/app/page.tsx        — rewrite: compose all section components
```

### Files to delete

```
src/components/ui/typewriter.tsx  — no longer used
```

### Files to keep (unchanged)

```
src/components/ui/button.tsx
src/components/ui/badge.tsx
src/components/ui/card.tsx
src/components/ui/separator.tsx
```

---

## Dependencies

### Add

```
framer-motion    — scroll animations, parallax, AnimatePresence
```

### Remove (no longer needed)

```
(none — keep all existing deps, they may be useful for shadcn components)
```

### Fonts (via next/font/google, no packages needed)

```
Sora            — headings
DM Sans         — body
JetBrains Mono  — tags, labels, eyebrows
```

---

## Nav Color Transition Logic

The nav must change appearance when scrolling from dark hero into light body:

1. Use `useScroll` to track scroll position
2. Determine hero section height (ref on hero element)
3. When `scrollY > heroHeight - navHeight`:
   - Background: `rgba(232,244,242,0.8)` (tinted body with blur)
   - Text/logo: `#0f172a`
   - CTA: keeps gradient (same in both states)
   - Border-bottom: `rgba(0,0,0,0.06)`
4. When `scrollY <= heroHeight - navHeight`:
   - Background: `rgba(8,28,40,0.7)` with blur
   - Text/logo: white
   - Border-bottom: `rgba(255,255,255,0.06)`

Transition all properties with `transition: all 0.3s ease`.

---

## Verification

1. `pnpm install` — ensure framer-motion installs
2. `pnpm dev` — check all sections render
3. Scroll through entire page — verify:
   - Hero loads with staggered animation
   - Nav transitions from dark to light as you scroll past hero
   - Wave dividers render without gaps
   - Parallax effects on orbs and floating cards
   - Cards stagger on scroll into view
   - Grain overlay visible but not obtrusive
   - Mobile hamburger works, menu slides down
4. Resize to mobile — verify responsive breakpoints
5. `pnpm build` — ensure static export succeeds
6. Check `out/` directory for valid HTML output
