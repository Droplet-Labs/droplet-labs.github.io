# AI Platform Site Rework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the one-page dropletlabs.co site from a six-service agency pitch into a single offer, "AI Platform", with the copy, sections, metadata and OG image defined in the spec.

**Architecture:** Copy is added to `src/lib/constants.ts` first (additively, so the build stays green), then each section component is created or rewritten to read from it and wired into `src/app/page.tsx`, then the old services/demos data and components are deleted, then metadata and the OG image are replaced. Visual style, motion helpers and layout primitives are reused unchanged.

**Tech Stack:** Next.js 16 app router (static export), React 19, TypeScript, Tailwind v4, framer-motion, pnpm. No test runner exists; verification is `pnpm lint`, `pnpm build`, and `grep` against the exported `out/index.html`.

**Spec:** `docs/superpowers/specs/2026-11-08-ai-platform-rework-design.md`

## Global Constraints

- Copy strings are exactly as the spec gives them. Where the spec uses `&`, `→`, `…` or curly apostrophes, keep them (use `&apos;` / `&amp;` only where JSX requires).
- All user-facing copy lives in `src/lib/constants.ts`; components contain no prose literals.
- Section ids are fixed: `hero`, `problem`, `platform`, `how-it-works`, `ownership`, `fit`, `faq`, `demos`, `contact`. `Navbar` depends on `#hero` existing.
- Calendly URL stays `https://calendly.com/madhanmohankishan/30min`. Contact email is `hello@dropletlabs.co`.
- No new dependencies. No new animations. Do not touch `floating-card-blur` or the iOS performance CSS in `globals.css`.
- Each section follows the existing pattern: `"use client"`, `max-w-5xl mx-auto px-6 md:px-12`, mono eyebrow `// LABEL`, `MotionWrapper` for the heading, `StaggerGrid` + `staggerItemVariants` for card grids.
- Every task ends with `pnpm lint` and `pnpm build` passing. The build writes a static export to `out/`.
- Work on branch `ai-platform-rework` (already exists). Never push to `main`.
- Commit messages end with `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`.

## Review Focus

1. Phone width (375px): the hero stack must not cause horizontal scroll; the problem/fit two-column blocks must collapse to one column. Pinned in Task 3 and Task 5 by a `grid-cols-1 md:grid-cols-2` check.
2. Every anchor the navbar, hero and CTA link to must exist in the export: pinned in Task 9 by a grep for each `id="…"`.
3. No agency-era copy survives anywhere in the export, including metadata and JSON-LD: pinned in Task 9 by a negative grep.
4. External links (Calendly, mailto is exempt) open in a new tab with `rel="noopener noreferrer"`: pinned in Task 2 and Task 7 by grep.
5. Removing `services`, `afterLaunchServices` and `demos` from constants must not leave a dangling import; TypeScript catches it, pinned by `pnpm build` in Task 8.

---

### Task 1: New copy in constants

**Files:**
- Modify: `src/lib/constants.ts`

**Interfaces:**
- Produces (all `as const`, exported):
  - `CONTACT_EMAIL = "hello@dropletlabs.co"`
  - `navLinks: { label; href }[]` → Platform `#platform`, How we work `#how-it-works`, FAQ `#faq`, Demos `#demos`
  - `hero: { eyebrow; headline; sub; primaryCta; secondaryCta; stack: [string, string, string]; stackCaption; stats: { value; label }[] }`
  - `problem: { eyebrow; heading; columns: { title; body }[] }`
  - `platform: { eyebrow; heading; capabilities: { title; detail: string | null }[]; boundary }`
  - `steps` (replace values, keep shape `number/title/description/color/colorFaded`): Assess / Build / Hand over & train / Support
  - `ownership: { heading; body }`
  - `fit: { eyebrow; heading; columns: { title; items: string[] }[] }`
  - `faq: { eyebrow; heading; items: { q; a }[] }`
  - `demosSection: { eyebrow; heading; note: "Coming soon." }`
  - `contact: { eyebrow; heading; sub; primaryCta; secondaryCta }`
- Leaves `services`, `afterLaunchServices`, `demos`, `CALENDLY_URL`, `socialLinks` untouched for now (Task 8 removes the first three).

- [ ] **Step 1: Add the new exports to `src/lib/constants.ts`** with the exact strings from spec sections "Navbar" through "9. Call to action". For `hero.stats` use `Weeks, not months` / `Your cloud, your code` / `Build → hand over → support` with labels `Delivery`, `Ownership`, `Engagement` (labels are the author's call; the spec gives only values). For `platform.capabilities`, `title` is the bold part and `detail` is the text after the em dash, or `null` for the observability line. Replace the four `steps` entries in place; keep the existing colors.

- [ ] **Step 2: Verify**

Run: `pnpm lint && pnpm build`
Expected: both exit 0 (old components still read the old exports).

- [ ] **Step 3: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: Add AI Platform copy to constants"
```

---

### Task 2: Navbar and mobile menu

**Files:**
- Modify: `src/components/sections/navbar.tsx:66-71`
- Modify: `src/components/mobile-menu.tsx:33-39`

**Interfaces:**
- Consumes: `navLinks`, `CALENDLY_URL` from Task 1.

- [ ] **Step 1: Replace both "Let's Talk" anchors** with `href={CALENDLY_URL}`, `target="_blank"`, `rel="noopener noreferrer"`, text `Book a call`. `navLinks` is already mapped; no other change.

- [ ] **Step 2: Verify**

Run: `pnpm lint && pnpm build && grep -o 'href="https://calendly[^"]*"[^>]*rel="noopener noreferrer"' out/index.html | wc -l`
Expected: lint/build pass; count ≥ 2 (navbar + mobile menu; the CTA section adds more later).

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/navbar.tsx src/components/mobile-menu.tsx
git commit -m "feat: Point navbar links and CTA at AI Platform sections and Calendly"
```

---

### Task 3: Hero

**Files:**
- Create: `src/components/platform-stack.tsx`
- Modify: `src/components/sections/hero.tsx`

**Interfaces:**
- Consumes: `hero`, `CALENDLY_URL` from Task 1.
- Produces: `PlatformStack({ layers, caption }: { layers: readonly [string, string, string]; caption: string })`, a static (no framer-motion loop) three-card column styled like `FloatingCard` (`bg-white/[0.06] border border-white/[0.08] rounded-xl`). Layer 1 brightest (`bg-water-cyan/25 border-water-cyan/50 text-white font-semibold`), layer 2 dashed border (`border-dashed border-water-cyan/40`) with `caption` beneath its label in `text-cyan-200/70 text-xs`, layer 3 faint (`text-cyan-100/60`).

- [ ] **Step 1: Create `PlatformStack`** as above. No `"use client"` needed (no hooks, no motion).

- [ ] **Step 2: Rewrite `hero.tsx`**: delete the two `FloatingCard` blocks and the `FloatingCard` import; keep the three `GradientOrb`s. Make the content wrapper `grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 items-center`. Left column: eyebrow `hero.eyebrow`, `h1` `hero.headline` (keep existing classes; render the headline on one line, no `<br />`), `p` `hero.sub`, buttons `hero.primaryCta` → `CALENDLY_URL` (new tab, noopener) and `hero.secondaryCta` → `#demos`, stat strip mapped from `hero.stats`. Right column: `<PlatformStack layers={hero.stack} caption={hero.stackCaption} />` inside `hidden md:block`. Keep the `fadeUp` delays.

- [ ] **Step 3: Verify**

Run: `pnpm lint && pnpm build && grep -c "Your AI platform. On your cloud. In weeks." out/index.html && grep -c "We build software" out/index.html`
Expected: lint/build pass; first count 1 (the OG title is not updated until Task 9, so exactly 1 here); second count 0 in the page body (layout metadata may still match; that is Task 9's job).

- [ ] **Step 4: Commit**

```bash
git add src/components/platform-stack.tsx src/components/sections/hero.tsx
git commit -m "feat: Rewrite hero for AI Platform with three-layer stack"
```

---

### Task 4: Problem and Platform sections

**Files:**
- Create: `src/components/sections/problem.tsx`
- Create: `src/components/sections/platform.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `problem`, `platform` from Task 1.
- Produces: `Problem()` with `id="problem"`, `Platform()` with `id="platform"`.

- [ ] **Step 1: Create `Problem`**: eyebrow/heading via `MotionWrapper`, then `StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10"` with one white card per `problem.columns` entry (`h3` title, `p` body). Card classes copied from `how-it-works.tsx`'s step card without the number.

- [ ] **Step 2: Create `Platform`** by copying `services-build.tsx` and changing: `id="platform"`, read `platform.eyebrow` / `platform.heading`, map `platform.capabilities` into the same card markup with the number (`01`…`06`, zero-padded from index), `title`, and `detail` rendered in the `p` only when non-null; drop the `tags` row. Use one color for all cards (the `#06b6d4` set from the old first service), inline as a local const. After the grid, render `platform.boundary` in a `MotionWrapper` as `p className="mt-10 text-center text-lg font-medium text-foreground border-t border-water-cyan/20 pt-8"`.

- [ ] **Step 3: Wire into `page.tsx`**: replace `<ServicesBuild />` and `<ServicesAfter />` with `<Problem />` and `<Platform />`; remove their imports.

- [ ] **Step 4: Verify**

Run: `pnpm lint && pnpm build && grep -c 'id="problem"' out/index.html && grep -c 'id="platform"' out/index.html && grep -c 'id="services"' out/index.html`
Expected: 1, 1, 0.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/problem.tsx src/components/sections/platform.tsx src/app/page.tsx
git commit -m "feat: Add problem and platform sections, drop services sections from page"
```

---

### Task 5: Ownership and Fit sections

**Files:**
- Create: `src/components/sections/ownership.tsx`
- Create: `src/components/sections/fit.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `ownership`, `fit` from Task 1.
- Produces: `Ownership()` with `id="ownership"`, `Fit()` with `id="fit"`.

- [ ] **Step 1: Create `Ownership`**: a band, `section id="ownership" className="scroll-mt-20 py-16 md:py-20"` with `style={{ background: "#0d3448" }}`, centered `h2` (white, same heading classes as other sections) and `p` (`text-white/60 text-lg max-w-2xl mx-auto mt-4`) inside one `MotionWrapper`. No cards.

- [ ] **Step 2: Create `Fit`**: eyebrow/heading, then `StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10"`, one white card per `fit.columns` entry with `h3` title and a `ul` of items (`li` with a `lucide-react` `Check` icon for the first column and `X` icon for the second; icons `size={16}` in `text-water-dark-cyan` / `text-muted-foreground`).

- [ ] **Step 3: Wire into `page.tsx`** after `<HowItWorks />`: `<Ownership />` then `<Fit />`.

- [ ] **Step 4: Verify**

Run: `pnpm lint && pnpm build && grep -c 'id="ownership"' out/index.html && grep -c 'id="fit"' out/index.html && grep -c 'grid-cols-1 md:grid-cols-2' out/index.html`
Expected: 1, 1, ≥ 3 (problem, platform, fit).

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/ownership.tsx src/components/sections/fit.tsx src/app/page.tsx
git commit -m "feat: Add ownership and fit sections"
```

---

### Task 6: FAQ section

**Files:**
- Create: `src/components/sections/faq.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `faq` from Task 1.
- Produces: `Faq()` with `id="faq"`.

- [ ] **Step 1: Create `Faq`**: eyebrow/heading, then a `StaggerGrid className="flex flex-col gap-3 mt-10"` (StaggerGrid accepts any className) with one white card per `faq.items` entry: `h3` question (`text-base font-semibold`), `p` answer (`text-base text-muted-foreground mt-2`). Plain stacked list, no accordion, no state.

- [ ] **Step 2: Wire into `page.tsx`** after `<Fit />`.

- [ ] **Step 3: Verify**

Run: `pnpm lint && pnpm build && grep -c 'id="faq"' out/index.html && grep -c "Why not just call a hosted API?" out/index.html`
Expected: 1, 1.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/faq.tsx src/app/page.tsx
git commit -m "feat: Add FAQ section"
```

---

### Task 7: Demos placeholder and contact CTA

**Files:**
- Modify: `src/components/sections/demos.tsx`
- Modify: `src/components/sections/contact-cta.tsx`

**Interfaces:**
- Consumes: `demosSection`, `contact`, `CONTACT_EMAIL`, `CALENDLY_URL` from Task 1.

- [ ] **Step 1: Rewrite `demos.tsx`**: delete `DemoPreview` and the `StaggerGrid` import/grid; keep `section id="demos"`, background, orb, eyebrow and heading from `demosSection`; render `demosSection.note` as the `p` under the heading. No cards.

- [ ] **Step 2: Update `contact-cta.tsx`**: eyebrow `contact.eyebrow`, heading `contact.heading`, sub `contact.sub`, primary button text `contact.primaryCta`, secondary button `href={\`mailto:${CONTACT_EMAIL}\`}` text `contact.secondaryCta`. Keep classes and motion.

- [ ] **Step 3: Verify**

Run: `pnpm lint && pnpm build && grep -c "mailto:hello@dropletlabs.co\"" out/index.html && grep -c "dropletlabs.com" out/index.html && grep -c "Analytics Dashboard" out/index.html`
Expected: 1, 0, 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/demos.tsx src/components/sections/contact-cta.tsx
git commit -m "feat: Reduce demos to placeholder, update CTA copy and contact email"
```

---

### Task 8: Remove old data and components

**Files:**
- Modify: `src/lib/constants.ts` (delete `services`, `afterLaunchServices`, `demos`)
- Delete: `src/components/sections/services-build.tsx`, `src/components/sections/services-after.tsx`

- [ ] **Step 1: Delete the three old exports and the two files.** If `FloatingCard` has no remaining importer (`grep -rn FloatingCard src`), delete `src/components/floating-card.tsx` too; leave the `floating-card-blur` CSS rule in place.

- [ ] **Step 2: Verify**

Run: `pnpm lint && pnpm build && grep -rn "services\b\|afterLaunchServices\|previewType" src | wc -l`
Expected: lint/build pass (TypeScript proves no dangling import); 0.

- [ ] **Step 3: Commit**

```bash
git add -A src
git commit -m "chore: Remove agency-era services and demo data"
```

---

### Task 9: Metadata, JSON-LD and copy audit

**Files:**
- Modify: `src/app/layout.tsx:15-70`

- [ ] **Step 1: Replace metadata** per spec "Metadata and SEO": `title`, `description`, `openGraph.title/description`, `openGraph.images[0].alt`, `twitter.title/description`. Set `jsonLd.description` to the meta description, `jsonLd.email = "hello@dropletlabs.co"`, `serviceType` and `knowsAbout` to the spec's arrays.

- [ ] **Step 2: Verify anchors and absence of old copy**

Run:
```bash
pnpm lint && pnpm build
for id in hero problem platform how-it-works ownership fit faq demos contact; do grep -c "id=\"$id\"" out/index.html; done
grep -ci "websites\|web apps\|SaaS\|Start a Project\|Let's Talk\|software that scales\|Discovery\|Proposal" out/index.html
```
Expected: nine lines of `1`; final count 0.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: Update metadata and structured data for AI Platform"
```

---

### Task 10: OG image

**Files:**
- Create: `scripts/og-image.html`
- Replace: `public/og-image.png` (1200×630)

- [ ] **Step 1: Write `scripts/og-image.html`**: a fixed 1200×630 page, background `linear-gradient(180deg, #041c2c 0%, #0d3448 60%, #164e63 100%)`, "DROPLET LABS." top-left in white bold, headline `Your AI platform. On your cloud. In weeks.` in white at ~72px with the Outfit font from Google Fonts, the `// AI PLATFORM` eyebrow in `#22d3ee` JetBrains Mono above it, and `dropletlabs.co` bottom-right in `rgba(255,255,255,0.5)`.

- [ ] **Step 2: Render it** with headless Chrome:
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1200,630 --screenshot="$PWD/public/og-image.png" "file://$PWD/scripts/og-image.html"
```
If Chrome is not installed, use the Playwright MCP tool's `browser_take_screenshot` at a 1200×630 viewport.

- [ ] **Step 3: Verify**

Run: `file public/og-image.png`
Expected: `PNG image data, 1200 x 630`. Open the image and confirm the headline is fully visible and not clipped.

- [ ] **Step 4: Commit**

```bash
git add scripts/og-image.html public/og-image.png
git commit -m "feat: Regenerate OG image with AI Platform headline"
```

---

### Task 11: Visual check and PR

- [ ] **Step 1: Run the dev server** (`pnpm dev`) and view at 1280px and 375px widths (Playwright MCP `browser_resize` + `browser_take_screenshot`, or a real browser). Confirm: no horizontal scroll at 375px; hero stack hidden on mobile; all nav links scroll to a section; sections appear in spec order.

- [ ] **Step 2: Fix anything found**, commit with a `fix:` message.

- [ ] **Step 3: Push the branch and open a PR** against `main` titled `Rework site around AI Platform`, body linking the spec and summarising removed/added sections. Do not merge; merging deploys to production.
