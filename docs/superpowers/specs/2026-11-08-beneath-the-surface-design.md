# "Beneath the surface" — visual and narrative rework

Date: 2026-11-08
Status: approved 2026-11-08 (mockup approved in chat; journey chapters and
builder-check answers folded in, see Decisions log)
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

Two mockups, both committed under `docs/superpowers/specs/assets/`:

- `2026-11-08-look-story.html` — the three-act story (hero, descent, rise).
  Its chapter copy is superseded by the journey chapters below; its
  mechanics, diagram and styling stand.
- `2026-11-08-look-brief.html` — the "ruled" style for the light sections
  (section padding, `.lead` two-column grid, `.item` rules, `.steps` with
  the 2px ink top rule and mono counter).

Where this document and a mockup differ, this document wins; where this
document is silent, the mockups are the answer.

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
- **JetBrains Mono** stays, used only for: chapter tags (`stage 1 · an
  API key`), the "run by your team" tag in the diagram, and the 1–4
  counter in "How we work" (render the index; leave `steps[].number`
  alone). Nowhere else.
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
`hero`, `platform` (the descent), `contact` (the rise), `how-it-works`,
`fit`, `faq`, `demos`. The `navLinks` label for `#faq` changes from "FAQ"
to "Questions".

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
Desktop: two columns. Left is a sticky canvas (100vh, with a `max-height`
on the SVG so short laptop viewports don't clip it) holding the SVG
diagram; right is a column of five chapters, each ~100vh tall, vertically
centred text, max 30ch.

Mobile (< 860px): the canvas is sticky **below the fixed nav**
(`top: 64px`) at ~50vh; chapters follow at ~60vh each. On phones the
diagram keeps the five layer titles and drops the sub-lines, with the
title size scaled so it stays legible (≥ 11px rendered); the chapter copy
carries the detail. The agent dot and "run by your team" tag must stay
visible below the nav.

**Diagram** (SVG, as in mockup): a surface line with the agent dot on it;
a dotted flow line from the agent into the first layer; five layers
stacked below, each a rounded rect with a title and a one-line sub; a
"Your cloud" caption under the stack; a "run by your team" mono tag that
appears at the final stage.

Layers, top to bottom (titles and subs are final copy):
1. One interface for agents, tools and models — *every route, chosen per task*
2. Open models served on your GPUs — *next to the hosted ones, not instead*
3. Fine-tuning and serving your own models — *versioned, rolled out, rolled back*
4. Observability, usage and cost control — *per team, agent and model*
5. Quotas, audit, runbooks, on-call — *the part nobody budgets for*

**The story is how the routes accumulate.** Each chapter adds a way of
reaching AI; none replaces the one before. The end state is all of them
available on one platform, with agents and developers picking the right
route per task. Each chapter lights the layer it brings into existence.
Five chapters:

| # | mono tag | H2 | paragraph | diagram |
|---|---|---|---|---|
| 1 | `stage 1 · an API key` | **It starts with an API key.** | One agent, one hosted model, a weekend. This is where everyone starts, and for plenty of tasks it stays the right answer. | flow line on; layer 1 lit |
| 2 | `stage 2 · your own GPUs` | **Then the bill arrives.** | For some workloads, public models stop adding up: cost at volume, latency, data you'd rather keep. So you bring open-source models onto your own GPUs for those tasks. The hosted models don't go away. Now there are two routes, and someone has to run a serving stack. | layer 2 lit |
| 3 | `stage 3 · your own models` | **Then you want models that know your business.** | You fine-tune on your data and serve those models next to the hosted and open ones. Three routes now, and every agent should be free to pick the right one for the task in front of it. | layer 3 lit |
| 4 | `stage 4 · a platform` | **Now it's a platform, whether you planned one or not.** | Three routes, several agents, several teams. One interface so each task reaches the right model. Someone to see every call, attribute what it costs, cap what runs away, and carry the pager. Six months of work, a team you don't have, none of it your core business. | layers 4 and 5 lit together |
| 5 | `with Droplet Labs · weeks` | **We build what's beneath.** | The whole platform, on your cloud, in your accounts, in weeks. Hosted, open and your own models, all available, chosen per task. Fixed scope. Then we train your team and hand over the keys. | all layers "owned" |

**Stages.** The chapter nearest the viewport centre sets the stage
(IntersectionObserver threshold ~0.55 or framer-motion `useInView`).
Stages are set, not accumulated, so scrolling up reverses.
- Before chapter 1 is reached: all layers silhouetted (faint fill, faint
  stroke, text at 28% white).
- Stage *n* (1–4): the layers listed above are lit (cyan fill/stroke,
  white text); layers from earlier stages stay lit. By the end of stage 4
  all five layers are lit.
- Stage 5: all layers switch to mint fill/stroke and **keep white text**
  (the mockup dimmed text here; that was a bug). "Your cloud" caption and
  the "run by your team" tag fade in.

This act absorbs the previous spec's Problem, Platform, and Ownership
sections; they no longer exist as separate sections.

### Act 3 — The rise (`#contact`), full viewport, centred
Background gradient from deep through shelf to surface (dark → light).
Five bobbing agent dots, staggered. H2 **Your agents, in production.**
Paragraph: *Hosted, open or your own: your agents pick the model for the
task. We build the platform under them. Your team owns all of it.* Pill button **Book a 30-minute call** → Calendly.
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
- **Closing ask** (no id): a short dark band on `deep` before the footer.
  One line, **Ready to see what's beneath your agents?**, and the pill
  **Book a 30-minute call** → Calendly. This exists because the rise sits
  mid-page and the FAQ (the objections section) would otherwise end on
  "Coming soon." (Author's call after builder review; the owner may drop
  it.)
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
- `hero`, `problem`, `platform`, `ownership`, `contact` constants are
  replaced by a new `story` constant holding Act 1, the five layers, the
  five chapters, Act 3 and the closing ask. `steps`, `fit`, `faq`,
  `demosSection`, `navLinks` (label edit only), `CONTACT_EMAIL`,
  `BOOK_CALL_LABEL` stay.

## Constraints
- Next.js 16 static export, Tailwind v4, TypeScript. Work on branch
  `ai-platform-rework` on top of PR #2's commits (or a branch off it;
  builder's call, say which in the PR).
- All user-facing copy in `src/lib/constants.ts`.
- `pnpm lint` and `pnpm build` green on every commit.
- No horizontal scroll at 375px; sticky canvas must not trap scroll on
  iOS Safari (use `position: sticky`, never scroll-jacking).

## Decisions log

- 2026-11-08, owner: the descent tells how the routes accumulate (API key
  → open models on own GPUs → own fine-tuned models → a platform → we
  build it). "The bill arrives" is confirmed as one trigger for stage 2,
  alongside latency and data.
- 2026-11-08, owner: it is not a one-way journey. Every route stays
  available on the platform; agents and developers pick per task. Copy
  must never read as "move from hosted to self-hosted to fine-tuned".
- 2026-11-08, author after builder check: stage→layer mapping fixed so all
  five layers are lit before turning mint; white text at the final stage;
  phone diagram keeps titles, drops subs, sits below the nav; closing ask
  added before the footer; `look-brief.html` committed as the reference
  for the light sections; the How-we-work counter stays mono.

## Left to the builder
- Exact Tailwind classes; whether stage logic uses IntersectionObserver or
  framer-motion.
- SVG dimensions and the exact silhouette/lit/owned colour stops, within
  the token values above.
- Nav mobile menu styling to match the pill button.
- Whether Act 1 uses `WaveDivider` or an inline path.
