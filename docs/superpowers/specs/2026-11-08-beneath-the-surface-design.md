# "Beneath the surface" — visual and narrative rework

Date: 2026-11-08
Status: approved in chat from the mockup (see Reference)
Builds on: `2026-11-08-ai-platform-rework-design.md` (positioning, audience,
copy). That spec's content principles still hold; this one replaces its
page structure and visual style.

## Intent

The AI Platform site (branch `ai-platform-rework`, PR #2) is correct in
content but looks like a SaaS template: white rounded cards, gradient
orbs, mono eyebrow labels, a fade-up on every section. The owner wants a
new look and feel that keeps the colour palette, tells a story, and uses
animation that means something.

The new site tells the pitch as a three-act scroll story using the one
visual idea the brand already owns: water and depth. The agent floats at
the surface; the infrastructure a CTO doesn't see sits beneath it; Droplet
Labs builds what's beneath and hands it over; the agents surface into
production.

## Reference

The approved mockup is
`.superpowers/brainstorm/12047-1794114293/content/look-story.html` (git-
ignored). The builder copies it into `docs/superpowers/specs/assets/2026-11-08-look-story.html`
in the first commit so the reference survives. Where this document and the
mockup differ, this document wins; where this document is silent, the
mockup is the answer.

## Goals / non-goals / anti-goals

**Goals**
- The scroll *is* the story. Every animation advances the narrative.
- One memorable element (the descent) and quiet, disciplined everything
  else.
- Same palette, same Calendly conversion, same copy intent as the
  previous spec.

**Non-goals**
- No new pages, no CMS, no forms, no new runtime dependencies. framer-
  motion is already installed and may be used, or plain
  IntersectionObserver + CSS transitions as in the mockup.
- No changes to the positioning or FAQ copy already approved.

**Anti-goals**
- Any of: gradient orbs, grain overlay, white card grid with soft shadows,
  mono `// LABEL` eyebrows, all-caps tracked labels, fade-and-slide on
  every section, hover lift on every card, `→` glued to button text.
- Looking like an ops dashboard.
- Animation that fires when nothing in the story changed.

## Design tokens (decided)

**Colour** (unchanged palette, used as depth)
- `#041c2c` deep, `#0a2a3c` mid, `#0d3448` teal, `#164e63` shelf
- `#06b6d4` cyan (live / lit), `#14b8a6` mint (owned / handed over)
- `#e8f4f2` surface (light body), `#0f172a` ink, `#4b5a6b` muted
- Rules on light: `rgba(8,145,178,.22)`

**Type**
- **Bricolage Grotesque** (Google Fonts via `next/font/google`, variable,
  with the `opsz` axis) for everything: display, headings, body, buttons.
  Replaces Outfit. Display headlines at `opsz 96`, weight 600,
  letter-spacing −0.03em, line-height ≈ 1.
- **JetBrains Mono** stays, used only for chapter tags ("month 1–2") and
  the "run by your team" tag in the diagram. Nowhere else.
- Body 18px / 1.5 on desktop; max measure ~40ch for story copy, ~56ch for
  explanatory paragraphs.

**Layout**
- Content width 1120px, 32px gutters desktop, 20px mobile (16px minimum).
- Left-aligned text in the descent and light sections; centred only in
  Act 1 and Act 3.
- Structure is drawn with space and single rules, never boxes. Numbering
  appears only in "How we work", because it is a sequence.

**Shape**
- Pill buttons (`border-radius: 999px`). Diagram layers `rx 14`. No other
  radii on page chrome.

## Page structure, top to bottom

Section ids are fixed so nav links keep working:
`hero`, `platform` (the descent), `how-it-works`, `fit`, `faq`, `demos`,
`contact`.

### Nav
Fixed, transparent over the dark acts, solid `deep` with a bottom rule
once scrolled past Act 1 (reuse the existing scroll logic). Left: "Droplet
Labs" wordmark (no trailing period). Right on desktop: Platform · How we
work · Questions · Demos, then a pill "Book a call" → Calendly (new tab).
Mobile: wordmark, pill, hamburger with the same links. The mockup's
`mix-blend-mode: difference` is not required.

### Act 1 — Hero (`#hero`), full viewport, centred, dark
- A single white agent dot with a cyan glow, bobbing slowly, above the
  headline.
- H1: **The agent is the easy part.**
- Sub, below in the same block at ~42% size, muted: *Everyone wants to
  ship AI agents. Beneath every one that runs in production sits six
  months of infrastructure.*
- No buttons in Act 1 (the story leads to the CTA). A scroll hint at the
  bottom: "Scroll down to see what's beneath" with a thin animated line.
- A wave edge (reuse `WaveDivider` or an inline SVG) at the bottom into
  the deep colour.

### Act 2 — The descent (`#platform`), split layout, dark
Desktop: two columns. Left is a sticky canvas (100vh) holding the SVG
diagram; right is a column of six chapters, each ~100vh tall, vertically
centred text, max 30ch. Mobile: canvas sticky at the top at 46vh, chapters
below at 60vh each.

**Diagram** (SVG, as in mockup): a surface line with the agent dot on it;
a dotted flow line from the agent into the first layer; five layers
stacked below, each a rounded rect with a title and a one-line sub; a
"Your cloud" caption under the stack; a "run by your team" mono tag that
appears at stage 6.

Layers, top to bottom (titles are final copy):
1. One interface for agents, tools and models — *hosted or self-hosted*
2. Model serving on your GPUs — *open models and your own*
3. Observability, usage and cost control — *per team, agent and model*
4. Quotas, limits and audit — *no runaway agent*
5. Runbooks, on-call, the way to scale it — *on your cloud, in your accounts*

**Stages.** The chapter nearest the viewport centre sets the stage
(IntersectionObserver threshold ~0.55 or framer-motion `useInView`).
- Stage 1: all layers silhouetted (faint fill, faint stroke, 28% text).
- Stages 2–5: layer *n−1* lights (cyan fill/stroke, white text); earlier
  layers stay lit. Flow line animates from stage 2.
- Stage 6: all layers switch to mint ("owned"); "Your cloud" caption and
  "run by your team" tag fade in.
- Scrolling back up reverses (stages are set, not accumulated).

**Chapters** (tag in mono, H2, paragraph). Copy is final:
1. tag *beneath the surface* — **Six months of plumbing.** — Compute,
   serving, a way for agents to reach tools and models, monitoring, cost
   control. A platform team you don't have, building things that aren't
   what your company is for.
2. *month 1–2* — **Agents need a way in.** — One interface between your
   agents and every model and tool they call, hosted or self-hosted, so
   nothing is wired twice.
3. *month 2–4* — **Models need somewhere to run.** — Serving on GPUs you
   control. Open models, fine-tuned ones, your own.
4. *month 4–5* — **Finance will ask what it costs.** — Every call seen,
   attributed and capped. Per team, per agent, per model, in the
   observability stack you already run.
5. *month 5–6* — **Then someone has to run it.** — Quotas, audit,
   runbooks, on-call. The part nobody budgets for.
6. *with Droplet Labs: weeks* — **We build what's beneath.** — The whole
   platform, on your cloud, in your accounts, in weeks. Fixed scope. Then
   we train your team and hand over the keys.

This act absorbs the previous spec's Problem, Platform, and Ownership
sections; they no longer exist as separate sections.

### Act 3 — The rise (`#contact`), full viewport, centred
Background gradient from deep through shelf to surface (dark → light).
Five bobbing agent dots, staggered. H2 **Your agents, in production.**
Paragraph: *You build the agents. We build the platform under them. Your
team owns all of it.* Pill button **Book a 30-minute call** → Calendly.
Below the button, a plain text link **Email us** → `mailto:hello@dropletlabs.co`.

### Light sections (on `surface`, ink text, ruled style)
In this order, each `py` ≈ 104px desktop, headings at clamp(34px, 3.6vw, 48px):

- **How we work** (`#how-it-works`): four columns on desktop (2×2 mobile),
  each with a 2px top rule in ink, a small mono counter (1–4), H3 and
  paragraph. Copy from `steps` in constants (unchanged).
- **Who it's for** (`#fit`): two-column brief. Left: heading. Right: two
  lists under bold run-in titles ("A good fit if you…", "Probably not a
  fit if you…"), plain bullets, no icons. Copy unchanged.
- **Questions** (`#faq`): heading "Questions a CTO asks", then a
  definition list: each question bold on its own line, answer below in
  muted, single rule between items. Copy unchanged.
- **Demos** (`#demos`): heading "Demos", one line "Coming soon." Nothing
  else.
- **Footer**: unchanged content (copyright, LinkedIn), on `deep`.

The old `WaveDivider` between body and CTA goes; Act 3 now precedes the
light sections.

## Motion rules
- Continuous motion only: agent bob (4s), flow dash (1.2s), scroll-hint
  line. Everything else is a stage transition (0.9s, ease-out) triggered
  by the reader's scroll.
- No `whileInView` fades on sections, no hover transforms on cards.
- `prefers-reduced-motion: reduce` disables the bob, dash and hint
  animations and makes stage changes instant.
- Keep iOS performance: no `backdrop-filter`, no large `filter: blur()`.
  The agent glow is a box-shadow (HTML) or a blurred `<circle>` behind the
  dot limited to a small radius (SVG), not a `drop-shadow` filter on
  scroll-updated elements.

## Metadata
- `<title>` and descriptions unchanged from the previous spec.
- OG image regenerated from `scripts/og-image.html` using Bricolage
  Grotesque and the new hero headline **The agent is the easy part.** with
  the sub-line *Your AI platform. On your cloud. In weeks.* beneath it.
  `openGraph.images[0].alt` updated to match.

## What is removed
- `GradientOrb`, `GrainOverlay`, `StaggerGrid`, `MotionWrapper` and their
  uses; `platform-stack.tsx`; `problem.tsx`, `platform.tsx`,
  `ownership.tsx` as separate sections; `wave-divider.tsx` unless reused
  in Act 1.
- `.floating-card-blur`, `.orb-blur` and related CSS in `globals.css`.
- `hero`, `problem`, `platform`, `ownership` constants are replaced by new
  `story` constants (see builder notes). `steps`, `fit`, `faq`,
  `demosSection`, `contact`, `navLinks`, `CONTACT_EMAIL`,
  `BOOK_CALL_LABEL` stay.

## Constraints
- Next.js 16 static export, Tailwind v4, TypeScript. Work on branch
  `ai-platform-rework` on top of PR #2's commits (or a branch off it;
  builder's call, say which in the PR).
- All user-facing copy in `src/lib/constants.ts`.
- `pnpm lint` and `pnpm build` green on every commit.
- No horizontal scroll at 375px; sticky canvas must not trap scroll on
  iOS Safari (use `position: sticky`, never scroll-jacking).

## Left to the builder
- Exact Tailwind classes; whether stage logic uses IntersectionObserver or
  framer-motion.
- SVG dimensions and the exact silhouette/lit/owned colour stops, within
  the token values above.
- Nav mobile menu styling to match the pill button.
- Whether Act 1 uses `WaveDivider` or an inline path.
