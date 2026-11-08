# "Beneath the surface" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the card-based look of the AI Platform site with the three-act scroll story (surface → descent → rise) and the ruled light sections, keeping palette, copy intent and Calendly conversion.

**Architecture:** New `story` constants feed three new section components (Hero, Descent with a stage-driven SVG `PlatformDiagram`, Rise) plus a `ClosingAsk`; the four light sections are restyled in place; old decoration components, sections and CSS are deleted last so every commit builds. Stage logic is a scroll listener that picks the chapter crossing the viewport's midline, so scrolling up reverses. Typeface swaps to Bricolage Grotesque via `next/font/google`.

**Tech Stack:** Next.js 16 (static export), React 19, TypeScript, Tailwind v4, framer-motion (already installed; only used if convenient), pnpm. No test runner: verification is `pnpm lint`, `pnpm build`, grep on `out/index.html`, and Playwright MCP checks in the browser.

**Spec:** `docs/superpowers/specs/2026-11-08-beneath-the-surface-design.md` (reference mockups in `docs/superpowers/specs/assets/`). Builds on `docs/superpowers/specs/2026-11-08-ai-platform-rework-design.md`.

## Global Constraints

- Branch: continue on `ai-platform-rework` (PR #2 stays open; the PR description is updated in Task 10). Never push to `main`.
- Palette tokens exactly: deep `#041c2c`, mid `#0a2a3c`, teal `#0d3448`, shelf `#164e63`, cyan `#06b6d4`, mint `#14b8a6`, surface `#e8f4f2`, ink `#0f172a`, muted `#4b5a6b`, light rule `rgba(8,145,178,.22)`.
- Typeface: Bricolage Grotesque for everything, `axes: ["opsz"]`; JetBrains Mono only for chapter tags, the "run by your team" tag, and the How-we-work counter.
- Banned: gradient orbs, grain, white card grids with shadows, `// LABEL` eyebrows, all-caps tracked labels, `whileInView` fades on sections, hover transforms on cards, `backdrop-filter`, large `filter: blur()`, `→` glued to button text.
- Section ids: `hero`, `platform`, `contact`, `how-it-works`, `fit`, `faq`, `demos`. Nav label for `#faq` is "Questions".
- All user-facing copy in `src/lib/constants.ts`; copy strings verbatim from the spec.
- `prefers-reduced-motion: reduce` disables bob/dash/hint animations and makes stage changes instant.
- Every task ends with `pnpm lint && pnpm build` green. Commit messages end with `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`.

## Review Focus

1. Scrolling back up through the descent must un-light layers (stages are set, not accumulated). Pinned in Task 5 by a Playwright check that scrolls to chapter 4 then back to chapter 1 and reads the lit count.
2. A 1280×700 laptop viewport must show the whole diagram (no clipped bottom layer). Pinned in Task 5 by a viewport check.
3. At 375×812 the sticky canvas must sit below the nav, the chapter heading must be visible under it, and there is no horizontal scroll. Pinned in Task 10.
4. Hash links from the fixed nav must not hide section headings under the nav bar (`scroll-mt`). Pinned in Task 7 by a grep for `scroll-mt-16` on every light section.
5. With reduced motion, the page must still reach the "owned" state (stage 5) without animation. Pinned in Task 5 by a Playwright `emulateMedia` check.

---

### Task 1: Typeface and story CSS

**Files:**
- Modify: `src/app/layout.tsx:1-14` (font imports)
- Modify: `src/app/globals.css:1-10, 77-110`

**Interfaces:**
- Produces: CSS variable `--font-bricolage` on `<html>`; Tailwind `--font-sans` resolves to it. Utility classes defined in `globals.css` under `@layer components`: `.story-bob` (4s translateY bob), `.story-dash` (stroke-dashoffset loop, 1.2s), `.story-hint` (scroll-hint scaleY loop), `.layer` / `.layer.on` / `.layer.owned` (SVG group styles: silhouette → cyan → mint, 0.9s transitions; `.owned` keeps text white), `.flow` / `.flow.on`, `.fade` / `.fade.on` (opacity 0→1, 0.9s). All loops and transitions are disabled under `@media (prefers-reduced-motion: reduce)`.

- [ ] **Step 1: RED** — Run: `grep -c "Bricolage\|story-bob\|\.layer\.owned" src/app/layout.tsx src/app/globals.css` → Expected: `0` for both files.

- [ ] **Step 2: Swap the font.** In `layout.tsx` replace the `Outfit` import/instance with `Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", axes: ["opsz"] })`; apply its `.variable` on `<html>` in place of `outfit.variable`; change the `<body>` font class to `font-[family-name:var(--font-bricolage)]`. In `globals.css` set `--font-sans: var(--font-bricolage)`. Leave the Outfit class names in section files alone for now (they are rewritten per task; the variable no longer exists, so they fall back to `--font-sans`).

- [ ] **Step 3: Add the story CSS** to `globals.css` as specified in Produces. Colour values for `.layer`: silhouette `fill rgba(255,255,255,.035) / stroke rgba(165,243,252,.14) / text rgba(255,255,255,.28)`, `.on` `fill rgba(6,182,212,.14) / stroke rgba(34,211,238,.75) / text #fff / sub rgba(165,243,252,.8)`, `.owned` `fill rgba(20,184,166,.18) / stroke rgba(94,234,212,.9) / text #fff`. Do not remove the old orb/grain/floating CSS yet (Task 8).

- [ ] **Step 4: GREEN** — Run: `pnpm lint && pnpm build && grep -c "Bricolage" src/app/layout.tsx && grep -c "\.layer\.owned" src/app/globals.css` → Expected: lint/build pass; `1`; `1`.

- [ ] **Step 5: Commit** — `git add src/app/layout.tsx src/app/globals.css && git commit -m "feat: Switch to Bricolage Grotesque and add story animation CSS"`

---

### Task 2: Story constants

**Files:**
- Modify: `src/lib/constants.ts`

**Interfaces:**
- Produces (exported, `as const`): `story` with
  - `hero: { headline; sub; hint }` — "The agent is the easy part." / spec sub / "Scroll down to see what's beneath"
  - `layers: { title; sub }[]` (5, spec order)
  - `chapters: { tag; heading; body }[]` (5, spec table)
  - `cloudCaption: "Your cloud · AWS, GCP or Azure · your Kubernetes, your Grafana"`, `ownedTag: "run by your team"`
  - `rise: { heading; body; cta: "Book a 30-minute call"; emailLabel: "Email us" }`
  - `closing: { line: "Ready to see what's beneath your agents?"; cta: "Book a 30-minute call" }`
  - `nav: { brand: "Droplet Labs" }`
- `navLinks[2].label` becomes `"Questions"`. `hero`, `problem`, `platform`, `ownership`, `contact` stay until Task 8.

- [ ] **Step 1: RED** — Run: `grep -c "export const story" src/lib/constants.ts` → Expected: `0`.
- [ ] **Step 2: Add `story` and edit the nav label**, copy verbatim from the spec (chapter table, layers list, Act 1, Act 3, closing ask).
- [ ] **Step 3: GREEN** — Run: `pnpm lint && pnpm build && grep -c "stage 4 · a platform\|Questions" src/lib/constants.ts` → Expected: pass; `2`.
- [ ] **Step 4: Commit** — `git add src/lib/constants.ts && git commit -m "feat: Add story copy for the three-act page"`

---

### Task 3: Fixed nav

**Files:**
- Modify: `src/components/sections/navbar.tsx`
- Modify: `src/components/mobile-menu.tsx`

**Interfaces:**
- Consumes: `story.nav.brand`, `navLinks`, `CALENDLY_URL`, `BOOK_CALL_LABEL`.

- [ ] **Step 1: RED** — Run: `grep -c "fixed" src/components/sections/navbar.tsx; grep -c "backdrop-blur" src/components/mobile-menu.tsx` → Expected: `0`; `1`.
- [ ] **Step 2: Restyle navbar**: `fixed top-0 inset-x-0 z-50 h-16`; before scroll `bg-transparent border-transparent`, after scroll (`isScrolled`, existing logic) `bg-[#041c2c] border-b border-white/10`; text always white (both acts under it are dark). Wordmark text from `story.nav.brand` (`font-bold tracking-tight`). Desktop links `text-white/65 hover:text-white text-[15px]`. CTA is a pill: `rounded-full border border-white/35 px-4 py-2 text-[15px] font-semibold text-white`. Remove the divider span.
- [ ] **Step 3: Mobile menu**: replace `backdrop-blur-xl` and `bg-ocean-dark/95` with solid `bg-[#041c2c]`; CTA becomes the same pill.
- [ ] **Step 4: GREEN** — Run: `pnpm lint && pnpm build && grep -c "backdrop-blur" src/components/mobile-menu.tsx; grep -o 'class="fixed top-0[^"]*' out/index.html | wc -l` → Expected: pass; `0`; `1`.
- [ ] **Step 5: Commit** — `git add src/components/sections/navbar.tsx src/components/mobile-menu.tsx && git commit -m "feat: Fixed transparent nav with pill CTA"`

---

### Task 4: Act 1 hero

**Files:**
- Rewrite: `src/components/sections/hero.tsx`

**Interfaces:**
- Consumes: `story.hero`, `.story-bob`, `.story-hint`.
- Produces: `Hero()` with `id="hero"`.

- [ ] **Step 1: RED** — Run: `grep -c "The agent is the easy part." out/index.html` → Expected: `0`.
- [ ] **Step 2: Rewrite `Hero`**: `section#hero` `relative min-h-screen grid place-items-center text-center overflow-hidden` with inline `background: linear-gradient(180deg,#0a3448 0%,#06283a 60%,#041c2c 100%)` and `pt-16`. Content: agent dot (`w-3.5 h-3.5 rounded-full bg-white story-bob` with `boxShadow: "0 0 0 6px rgba(255,255,255,.12), 0 0 40px 10px rgba(6,182,212,.6)"`), `h1` `text-[clamp(48px,8vw,120px)] font-semibold tracking-[-0.03em] leading-[0.95] text-white` with `fontVariationSettings: '"opsz" 96'`, then a `p` at `text-[clamp(20px,3.4vw,50px)] font-medium text-white/45 leading-snug mt-7 max-w-[26ch] mx-auto`. No buttons. Scroll hint at the bottom (`absolute bottom-9`, 13px `text-white/50`, a `w-px h-9 story-hint` line below). An inline wave `svg` (`absolute bottom-[-2px] inset-x-0 h-[120px]`, path from the mockup, fill `#041c2c`). No framer-motion, no orbs.
- [ ] **Step 3: GREEN** — Run: `pnpm lint && pnpm build && grep -c "The agent is the easy part." out/index.html && grep -c "story-hint" out/index.html` → Expected: pass; `1`; `1`.
- [ ] **Step 4: Commit** — `git add src/components/sections/hero.tsx && git commit -m "feat: Act 1 hero — the agent at the surface"`

---

### Task 5: Platform diagram and the descent

**Files:**
- Create: `src/components/platform-diagram.tsx`
- Create: `src/components/sections/descent.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `story.layers`, `story.chapters`, `story.cloudCaption`, `story.ownedTag`, CSS classes from Task 1.
- Produces:
  - `PlatformDiagram({ stage, compact }: { stage: 0|1|2|3|4|5; compact?: boolean })` — SVG `viewBox="0 0 520 620"`, `aria-label="The platform beneath an agent"`. Lit rule: layer *i* (0-based) has class `on` when `stage >= LIT_AT[i] && stage < 5`, where `LIT_AT = [1, 2, 3, 4, 4]`; class `owned` when `stage === 5`. `.flow` gets `on` when `stage >= 1`; cloud caption and owned tag (`.fade`) get `on` when `stage === 5`. `compact` hides the `sub` texts and sets title `fontSize` 24 (viewBox units) instead of 15.
  - `Descent()` with `id="platform"`, `scroll-mt-16`.
  - `useStage(refs: React.RefObject<HTMLElement>[]): number` (local to `descent.tsx`): on scroll/resize (rAF-throttled) returns the 1-based index of the last chapter whose top is above the viewport midline (`window.innerHeight / 2`), or 0 if none; `prefers-reduced-motion` does not change this hook.

- [ ] **Step 1: RED** — Run: `grep -c 'id="platform"' out/index.html; grep -c "run by your team" out/index.html` → Expected: `1` (old platform section); `0`.
- [ ] **Step 2: Create `PlatformDiagram`** as specified. Geometry from the mockup: surface path, agent `circle` r=7 at (260,40) with a small blurred `circle` behind it (`r=14 fill rgba(6,182,212,.5)`, no filter), flow path `M260 50 V 100` (`stroke-dasharray 4 10`), layer groups at `translate(60, 100 + 96*i)` each `rect 400×78 rx 14`, title at (20,34), sub at (20,56); cloud caption at (260,600) centred; owned tag group `rect 130×24 rx 12` at (330,8) with mono 12px text. Text uses `fontFamily: "inherit"` for titles and `var(--font-jetbrains)` for the tag.
- [ ] **Step 3: Create `Descent`**: `section#platform` `bg-[#041c2c] text-white` with `grid grid-cols-1 md:grid-cols-2`. Canvas `div`: `sticky top-16 md:top-0 h-[44vh] md:h-screen bg-[#041c2c] flex items-center justify-center px-5 md:px-10`; the SVG gets `w-full max-w-[520px] max-h-[calc(100vh-48px)] h-auto`; render `<PlatformDiagram stage={stage} compact={isCompact}>` where `isCompact` is `window.matchMedia("(max-width: 859px)")` (state, updated on resize; default `false`). Chapters column: `px-6 md:pl-8 md:pr-16`; each chapter `article` with `ref`, `min-h-[56vh] md:min-h-screen flex flex-col justify-start md:justify-center pt-8 md:pt-0 max-w-[30ch]`; tag `font-[family-name:var(--font-jetbrains)] text-[13px] text-[#06b6d4] mb-4`; `h2` `text-[28px] md:text-[clamp(34px,4vw,56px)] font-semibold tracking-[-0.03em] leading-none`; `p` `mt-5 text-base md:text-[19px] text-white/60 max-w-[38ch]`. Stage from `useStage`.
- [ ] **Step 4: Wire `page.tsx`**: replace `<Problem />`, `<Platform />`, `<Ownership />` with `<Descent />` directly after `<Hero />`; remove those imports. Keep the rest for now.
- [ ] **Step 5: GREEN** — Run: `pnpm lint && pnpm build && grep -c 'id="platform"' out/index.html && grep -c "run by your team" out/index.html && grep -c 'id="problem"' out/index.html` → Expected: pass; `1`; `1`; `0`.
- [ ] **Step 6: Browser check (Review Focus 1, 2, 5)** — `pnpm dev -p 3111`; Playwright MCP at 1280×700: navigate, `evaluate` → `document.querySelectorAll('.layer').length === 5` and the SVG's `getBoundingClientRect().bottom <= innerHeight`. Scroll so chapter 4 crosses the midline → `querySelectorAll('.layer.on').length === 5`; scroll back to chapter 1 → `=== 1`; scroll to chapter 5 → `querySelectorAll('.layer.owned').length === 5`. `emulateMedia({reducedMotion:'reduce'})`, reload, scroll to chapter 5 → `.layer.owned` count `5`. Expected: all true.
- [ ] **Step 7: Commit** — `git add src/components/platform-diagram.tsx src/components/sections/descent.tsx src/app/page.tsx && git commit -m "feat: Act 2 descent with stage-driven platform diagram"`

---

### Task 6: Act 3 rise and closing ask

**Files:**
- Create: `src/components/sections/rise.tsx`
- Create: `src/components/sections/closing-ask.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `story.rise`, `story.closing`, `CALENDLY_URL`, `CONTACT_EMAIL`, `.story-bob`.
- Produces: `Rise()` with `id="contact"`; `ClosingAsk()` (no id).

- [ ] **Step 1: RED** — Run: `grep -c "Your agents, in production." out/index.html; grep -c "Ready to see what" out/index.html` → Expected: `0`; `0`.
- [ ] **Step 2: Create `Rise`**: `section#contact` `min-h-screen grid place-items-center text-center scroll-mt-16` with inline `background: linear-gradient(180deg,#041c2c 0%,#164e63 55%,#e8f4f2 100%)`. Five dots (`w-3 h-3 rounded-full bg-white story-bob`, glow `0 0 24px 6px rgba(6,182,212,.55)`, `animationDelay` 0/.4/.8/1.2/1.6s) in a row `gap-[18px] mb-9`; `h2` `text-[clamp(40px,6vw,88px)] font-semibold tracking-[-0.03em] leading-none text-white`; `p` `mt-6 max-w-[44ch] mx-auto text-xl text-white/75`; pill button (`mt-10 rounded-full bg-white text-[#041c2c] font-semibold px-7 py-4`) → `CALENDLY_URL` new tab; below it `a` `mt-5 block text-white/70 underline underline-offset-4` → `mailto:${CONTACT_EMAIL}` with `story.rise.emailLabel`.
- [ ] **Step 3: Create `ClosingAsk`**: `section` `bg-[#041c2c] text-white py-20 text-center`; `p` `text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em]` with `story.closing.line`; same pill below → Calendly.
- [ ] **Step 4: Wire `page.tsx`**: order becomes `Navbar, Hero, Descent, Rise, main(HowItWorks, Fit, Faq, Demos), ClosingAsk, Footer`. Remove `WaveDivider`, `ContactCta`, `GrainOverlay` usages and imports. `main` keeps `bg-body-tint`.
- [ ] **Step 5: GREEN** — Run: `pnpm lint && pnpm build && grep -o 'id="[a-z-]*"' out/index.html | tr '\n' ' '` → Expected: pass; `id="hero" id="platform" id="contact" id="how-it-works" id="fit" id="faq" id="demos"` (in that order).
- [ ] **Step 6: Commit** — `git add src/components/sections/rise.tsx src/components/sections/closing-ask.tsx src/app/page.tsx && git commit -m "feat: Act 3 rise and closing ask"`

---

### Task 7: Light sections in the ruled style

**Files:**
- Rewrite: `src/components/sections/how-it-works.tsx`, `fit.tsx`, `faq.tsx`, `demos.tsx`

**Interfaces:**
- Consumes: `process`, `steps`, `fit`, `faq`, `demosSection` (unchanged constants). Shared classes: section `py-20 md:py-[104px] scroll-mt-16`, container `max-w-[1120px] mx-auto px-5 md:px-8`, heading `text-[clamp(34px,3.6vw,48px)] font-semibold tracking-[-0.03em] leading-none text-[#0f172a]`, muted `text-[#4b5a6b]`, rule `border-[rgba(8,145,178,.22)]`.

- [ ] **Step 1: RED** — Run: `grep -c "MotionWrapper\|StaggerGrid\|GradientOrb\|// " src/components/sections/how-it-works.tsx src/components/sections/fit.tsx src/components/sections/faq.tsx src/components/sections/demos.tsx | grep -v ":0" | wc -l` → Expected: `4`.
- [ ] **Step 2: How we work**: heading, then `grid grid-cols-2 md:grid-cols-4 gap-8 mt-14`; each step `pt-[18px] border-t-2 border-[#0f172a]`, mono counter (`font-[family-name:var(--font-jetbrains)] text-[13px] text-[#0891b2]`, render `index + 1`), `h3 text-[22px] font-semibold mt-2.5`, `p` muted `text-base mt-2`. No eyebrow, no cards, no motion.
- [ ] **Step 3: Who it's for**: `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16`; left the heading (`fit.heading`); right two blocks, each `h3 text-lg font-semibold` run-in title then `ul list-disc pl-5 mt-3 space-y-2` muted items. No icons.
- [ ] **Step 4: Questions**: heading `faq.heading`; `dl mt-14 border-t rule`; each item `py-6 border-b rule`: `dt text-xl font-semibold`, `dd mt-2 text-[17px] muted max-w-[60ch]`.
- [ ] **Step 5: Demos**: heading `demosSection.heading`, `p mt-3 muted` with `demosSection.note`. Nothing else.
- [ ] **Step 6: GREEN** — Run: `pnpm lint && pnpm build && grep -o 'scroll-mt-16' out/index.html | wc -l; grep -c "MotionWrapper\|StaggerGrid\|GradientOrb" src/components/sections/how-it-works.tsx src/components/sections/fit.tsx src/components/sections/faq.tsx src/components/sections/demos.tsx | grep -v ":0" | wc -l` → Expected: pass; `≥ 6` (platform, contact, four light sections); `0`.
- [ ] **Step 7: Commit** — `git add src/components/sections && git commit -m "feat: Light sections in the ruled style"`

---

### Task 8: Remove old decoration, sections, constants and CSS

**Files:**
- Delete: `src/components/gradient-orb.tsx`, `grain-overlay.tsx`, `motion-wrapper.tsx`, `stagger-grid.tsx`, `platform-stack.tsx`, `src/components/sections/problem.tsx`, `platform.tsx`, `ownership.tsx`, `contact-cta.tsx`, `wave-divider.tsx`
- Modify: `src/lib/constants.ts` (delete `hero`, `problem`, `platform`, `ownership`, `contact`), `src/app/globals.css` (delete `.orb-blur`, `.floating-card-blur`, `.grain-overlay` rules and their media overrides)

- [ ] **Step 1: RED** — Run: `grep -rln "GradientOrb\|MotionWrapper\|StaggerGrid\|GrainOverlay\|WaveDivider\|PlatformStack\|ContactCta" src | wc -l` → Expected: `≥ 1` (the files themselves).
- [ ] **Step 2: Delete** the files and constants; remove the CSS blocks. `grep -rn "eyebrow" src` must come back empty too; drop leftover `eyebrow` fields from `fit`, `faq`, `demosSection`, `process` if any component no longer reads them.
- [ ] **Step 3: GREEN** — Run: `pnpm lint && pnpm build && grep -rln "GradientOrb\|MotionWrapper\|StaggerGrid\|GrainOverlay\|WaveDivider\|PlatformStack\|ContactCta\|orb-blur\|grain-overlay" src | wc -l` → Expected: pass (TypeScript proves no dangling import); `0`.
- [ ] **Step 4: Commit** — `git add -A src && git commit -m "chore: Remove card-era decoration, sections and CSS"`

---

### Task 9: OG image

**Files:**
- Modify: `scripts/og-image.html`
- Replace: `public/og-image.png`
- Modify: `src/app/layout.tsx` (`openGraph.images[0].alt`)

- [ ] **Step 1: Edit `og-image.html`**: load `Bricolage+Grotesque:opsz,wght@12..96,600` from Google Fonts; headline **The agent is the easy part.** at 76px; sub-line *Your AI platform. On your cloud. In weeks.* at 28px `rgba(255,255,255,.6)`; drop the `// AI PLATFORM` eyebrow; keep wordmark (no period) and `dropletlabs.co`.
- [ ] **Step 2: Render** with the same headless-Chrome command as the previous plan (Task 10 there). Run `file public/og-image.png` → Expected: `1200 x 630`. Open and confirm no clipping.
- [ ] **Step 3: Alt text**: `"Droplet Labs — The agent is the easy part. Your AI platform, on your cloud, in weeks."`
- [ ] **Step 4: GREEN** — `pnpm lint && pnpm build && grep -c "The agent is the easy part" out/index.html` → Expected: pass; `≥ 2` (hero + OG alt).
- [ ] **Step 5: Commit** — `git add scripts/og-image.html public/og-image.png src/app/layout.tsx && git commit -m "feat: Regenerate OG image for the story hero"`

---

### Task 10: Visual check and PR update

- [ ] **Step 1: Phone check (Review Focus 3)** — Playwright at 375×812: `document.documentElement.scrollWidth === 375`; scroll to chapter 2 and check the sticky canvas `getBoundingClientRect().top === 64` and chapter 2's `h2` `top > canvas.bottom`; layer title text rendered ≥ 11px (`getComputedStyle` on a `.layer text` or compare `getBBox().height * scale`).
- [ ] **Step 2: Desktop check** — 1280×900 screenshots of each act and the light sections; confirm no eyebrows, no cards, nav transparent over Act 1 and solid after.
- [ ] **Step 3: Fix anything found**, commit with `fix:` messages.
- [ ] **Step 4: Push** `ai-platform-rework` and update PR #2's description (`gh pr edit 2 --body-file …`) to describe the story rework, the new sections, the removals, and the deferred items. Do not merge.
