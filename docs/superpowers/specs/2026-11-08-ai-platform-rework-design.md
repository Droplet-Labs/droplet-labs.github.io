# AI Platform site rework — design

Date: 2026-11-08
Status: approved 2026-11-08

## Intent

Droplet Labs is changing from a general software agency (websites, web apps,
SaaS, AI integration, APIs, maintenance) to a single offer: **building an AI
platform for companies that want to run AI agents in production.**

The site at dropletlabs.co must be reworked around that one offer. This is a
content and positioning change first, a layout change second. The visual
style (ocean gradient hero, light body, Outfit + JetBrains Mono, framer-motion
reveals) stays as it is.

### Why

A company or startup that wants AI agents in its product has to stand up a lot
of infrastructure before it can ship a single agent: GPU compute, model serving
for open and custom models, access to hosted LLMs, a common interface between
agents, tools and models, observability, and usage/cost tracking. Done
in-house this takes 6+ months and a team they don't have, and it is far from
their core business. Droplet Labs builds that platform on the client's cloud
in weeks, hands it over, trains the team, and supports it.

## Audience

Primary reader: **CTO or Engineering Manager** at a startup or mid-size
company. They are technical, time-poor, allergic to consultancy language, and
evaluating "hire a platform team vs. bring in Droplet Labs". Their real
questions are:

- How long until my team ships its first agent to production?
- What do I own at the end, and can my people run it without you?
- Does it fit what we already run (cloud, observability, auth), or is it a
  parallel universe?
- Can I see and control what AI costs us, per team and per agent?

The right buyer needs self-hosted or custom models (cost, data, latency or
compliance), or runs several models and agents and is drowning in the ops.
A team happy calling a hosted API is **not** the buyer and the page should
say so.

## Content principles (decided)

1. **Sell the operating model, name capabilities, use tools only as proof.**
   No section leads with product names. Capabilities are stated in one line
   each, in CTO vocabulary, and are *not explained*.
2. **Minimal and abstract first.** The hero picture is three layers: the
   client's agents, the platform, the client's cloud. No component diagram.
3. **No people section.** No founder names, bios or photos for now.
4. **No price numbers.** Engagement shape only.
5. **Demos stay as a destination but are "coming soon".** The owner will
   supply demos later; the section and the "See demos" link remain so that
   nothing has to be re-plumbed.
6. **Proof is specificity.** With no clients, logos or people on the page,
   credibility comes from the page showing a precise understanding of the
   problem, a clear ownership guarantee, and an FAQ that answers real
   objections.

## Goals / non-goals / anti-goals

**Goals**

- A qualified CTO understands the offer in five seconds and books a call
  already half-convinced.
- Every old service and all agency-era copy is gone; nothing on the page
  contradicts the single offer.
- SEO metadata, structured data, OG image text and sitemap reflect the new
  positioning.

**Non-goals**

- No new visual design system, no new animations, no new pages. One page,
  as today.
- No pricing calculator, no forms, no CMS. Calendly stays the only
  conversion.
- No demos content. Placeholder only.

**Anti-goals (would make this a failure even if it "works")**

- Reading like a generic consultancy ("enablement", "transformation",
  "unlock").
- Reading like a tool integrator's job posting (a wall of product logos).
- Any leftover "websites / SaaS / web apps" language, including in metadata,
  JSON-LD or the OG image.

## Page structure and draft copy

Order, top to bottom. Draft copy is the starting point; the owner edits
wording, not structure. Section ids are given because the navbar and CTAs
link to them.

### Navbar

Links: **Platform** (`#platform`) · **How we work** (`#how-it-works`) ·
**FAQ** (`#faq`) · **Demos** (`#demos`). CTA button: **Book a call**
(Calendly URL, unchanged).

### 1. Hero (`#hero`)

Layout: two columns on desktop. Left: eyebrow, headline, sub, two buttons.
Right: a three-layer stack replacing today's floating glass cards. Mobile:
stack collapses below the copy or is hidden (builder's call, the floating
cards are hidden on mobile today).

- Eyebrow (mono, like today's `// WEB · SAAS · AI`): `// AI PLATFORM`
- Headline: **Your AI platform. On your cloud. In weeks.**
- Sub: *Running AI agents in production takes most teams six months of
  infrastructure work before the first agent ships. We build the platform,
  hand it over, and train your team to run it. You build the agents.*
- Primary button: **Book a call** → Calendly. Secondary: **See demos** →
  `#demos`.
- Three-layer stack, top to bottom:
  1. `Your AI agents` (brightest)
  2. `AI Platform` with a small line `built by Droplet Labs` (dashed border,
     the thing being sold)
  3. `Your cloud · your existing stack` (faint)
- The stat strip under the hero (`4–6 wk · Pre-built · End-to-end`) is
  replaced with: **Weeks, not months** / **Your cloud, your code** /
  **Build → hand over → support**.

### 2. The problem (`#problem`)

Eyebrow: `// THE PROBLEM`. Heading: **Six months before the first agent
ships.**

Body, two short columns:

- *Do it yourself.* Compute, model serving, a way for agents to reach tools
  and models, monitoring, cost control. Six months or more, a platform team
  you don't have, and none of it is what your company is for.
- *With Droplet Labs.* One production-ready platform on your cloud, in
  weeks. Your engineers spend their time on the AI that sets your product
  apart, not on the plumbing underneath it.

### 3. What you get (`#platform`)

Eyebrow: `// THE PLATFORM`. Heading: **One platform. Everything agents need
to run in production.**

Capabilities, one line each, as a simple list or 2×3 grid of cards with a
title and no description (the old service-card component can be reused with
the description removed):

- **Model serving on your GPUs** — open models and your own
- **One interface for agents, tools and models** — hosted or self-hosted
- **Observability in the stack you already run**
- **Usage tracking and cost control** — per team, agent and model
- **Quotas, limits and audit** — no runaway agent, no unanswered "who called
  what"
- **The process to operate and scale it** — runbooks, on-call, adding models
  and agents without calling us

Boundary line under the grid, set apart visually:
*We build the platform and the way to run it. You build the agents on top.*

### 4. How we work (`#how-it-works`)

Eyebrow: `// PROCESS`. Heading stays **How we work**. Four steps, reusing the
existing step cards:

1. **Assess** — Your cloud, your stack, your models, your constraints. One
   week.
2. **Build** — Fixed scope, clear deliverables. Weekly demos, you see it
   running on your accounts.
3. **Hand over & train** — Your team runs it before we step back.
   Documentation, runbooks, hands-on sessions.
4. **Support** — Maintenance and upgrades as you scale. Optional, ongoing.

(Fixed-scope pricing confirmed by the owner.)

### 5. You own it (`#ownership`)

Short dark or tinted band, no cards. Heading: **You own it. All of it.**

*Built on your cloud, in your accounts. Your code, your repos, your
configuration. Wired into the observability, identity and tooling you
already use rather than replacing them. When we step back, your team runs
it, and nothing routes through us.*

### 6. Who it's for (`#fit`)

Two columns.

- **A good fit if you…** need self-hosted or custom models for cost, data,
  latency or compliance; run (or will run) several models and agents; need to
  see and control what AI costs per team and product; have engineers but no
  platform team.
- **Probably not a fit if you…** are happy calling a single hosted API and
  have no plans to self-host; need someone to build the agents themselves
  rather than the platform under them.

### 7. FAQ (`#faq`)

Six questions, two lines each. Plain accordion or stacked list.

1. **Why not just call a hosted API?** Many teams start there. The platform
   is for when you need your own models, several providers, or visibility
   into what each team and agent is spending.
2. **Can my team maintain it after you leave?** That is the point of the
   handover. Documentation, runbooks and training are part of the build, not
   an add-on.
3. **Which clouds?** AWS, GCP and Azure. On-prem and hybrid Kubernetes by
   discussion.
4. **We already run Kubernetes, Grafana and friends. Do we keep them?** Yes.
   We build into your stack, not beside it.
5. **Do you build the agents too?** No. We build the platform and the
   process to run it. Your team builds the agents on top.
6. **How long, really?** Assessment in a week, build in weeks, not months.
   Exact scope and timeline come out of the assessment.

### 8. Demos (`#demos`)

Eyebrow `// DEMOS`, heading **Demos**, one line: *Coming soon.* No cards.
The section exists so `#demos` links resolve; the owner adds content later.

### 9. Call to action (`#contact`)

Heading: **Ready to run AI in production?** Sub: *Thirty minutes. Tell us
what you're building and what you run today; we'll tell you what the
platform looks like and how long it takes.* Button: **Book a call** →
Calendly. Secondary button: **Email us** → `mailto:hello@dropletlabs.co`
(the current site links `hello@dropletlabs.com`, a wrong domain; fix it).

### 10. Footer

Unchanged: copyright, LinkedIn.

## What is removed

- `services` and `afterLaunchServices` constants and both services sections
  (`services-build.tsx`, `services-after.tsx`) as service listings. The card
  component may be reused for capabilities.
- The four demo cards and their preview mockups (`demos` constant,
  `DemoPreview`).
- Hero floating glass cards, hero stat strip values, hero eyebrow and copy.
- Old `steps` copy (Discovery / Proposal / Build / Launch).
- All agency-era copy in `layout.tsx` metadata, OpenGraph, Twitter card and
  JSON-LD (`serviceType`, `knowsAbout`, `description`).

## Metadata and SEO

- `<title>`: **Droplet Labs — AI Platform, built on your cloud**
- Meta description: *We build the AI platform your agents run on: model
  serving, agent tooling, observability and usage tracking, on your cloud,
  in weeks. Your team owns it.*
- OG/Twitter titles and descriptions match. The OG image
  (`public/og-image.png`) carries the old tagline and must be regenerated
  with the new headline (builder's call on tooling; keep 1200×630).
- JSON-LD `ProfessionalService`: add `email: "hello@dropletlabs.co"`;
  `serviceType: ["AI Platform Engineering",
  "AI Infrastructure", "MLOps"]`, `knowsAbout: ["AI Agents", "LLM Serving",
  "Kubernetes", "GPU Infrastructure", "Observability", "Cloud
  Infrastructure"]`. Tool names are acceptable here; it is not user-facing.
- `sitemap.xml` / `robots.txt`: unchanged unless section anchors are listed.

## Constraints

- Next.js app router, TypeScript, Tailwind v4, framer-motion, shadcn
  components, static export to GitHub Pages. Keep all of it.
- All user-facing copy (hero, headings, FAQ, CTA, capabilities, steps)
  moves into `src/lib/constants.ts`, so wording edits stay one-file
  changes. Today only list data lives there.
- iOS performance fixes from recent commits (no parallax, reduced blur)
  must not be reverted.
- Mobile layout at 16px gutter, no horizontal scroll, as today.

## Decisions confirmed by the owner (2026-11-08)

1. Fixed-scope pricing stays; step 2 wording stands.
2. Contact email is `hello@dropletlabs.co`, published as the secondary CTA.
3. Cloud list in FAQ 3 (AWS / GCP / Azure, on-prem and hybrid Kubernetes by
   discussion) is correct.

## Author's calls after builder review

- Navbar **Book a call** links directly to the Calendly URL (today it goes
  to `#contact`), matching the hero primary button.
- FAQ is a plain stacked list; the repo has no accordion component.
- OG image is regenerated in the site's ocean palette with the new
  headline; the current image is off-brand.
- Work happens on a branch and lands via PR; pushes to `main` deploy live.

## Left to the builder

- Exact Tailwind classes, spacing and animation timing, following existing
  sections.
- Whether capabilities are a list or a card grid (either fits; prefer
  whichever reads cleaner at phone width).
- The hero stack: a simple static component with the existing
  `FloatingCard` glass style is fine. No new animation.
- FAQ: plain stacked list is acceptable; an accordion only if shadcn already
  provides one in the repo.
- OG image regeneration method.
