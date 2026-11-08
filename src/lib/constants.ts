export const CALENDLY_URL = "https://calendly.com/madhanmohankishan/30min";

export const CONTACT_EMAIL = "hello@dropletlabs.co";

export const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "How we work", href: "#how-it-works" },
  { label: "Questions", href: "#faq" },
  { label: "Demos", href: "#demos" },
] as const;

export const BOOK_CALL_LABEL = "Book a call";

export const story = {
  nav: { brand: "Droplet Labs" },
  hero: {
    headline: "The agent is the easy part.",
    sub: "Everyone wants to ship AI agents. Beneath every one that runs in production sits six months of infrastructure.",
    hint: "Scroll down to see what's beneath",
  },
  layers: [
    {
      title: "One interface for agents, tools and models",
      sub: "every route, chosen per task",
    },
    {
      title: "Open models served on your GPUs",
      sub: "next to the hosted ones, not instead",
    },
    {
      title: "Fine-tuning and serving your own models",
      sub: "versioned, rolled out, rolled back",
    },
    {
      title: "Observability, usage and cost control",
      sub: "per team, agent and model",
    },
    {
      title: "Quotas, audit, runbooks, on-call",
      sub: "the part nobody budgets for",
    },
  ],
  chapters: [
    {
      tag: "stage 1 · an API key",
      heading: "It starts with an API key.",
      body: "One agent, one hosted model, a weekend. This is where everyone starts, and for plenty of tasks it stays the right answer.",
    },
    {
      tag: "stage 2 · your own GPUs",
      heading: "Then the bill arrives.",
      body: "For some workloads, public models stop adding up: cost at volume, latency, data you'd rather keep. So you bring open-source models onto your own GPUs for those tasks. The hosted models don't go away. Now there are two routes, and someone has to run a serving stack.",
    },
    {
      tag: "stage 3 · your own models",
      heading: "Then you want models that know your business.",
      body: "You fine-tune on your data and serve those models next to the hosted and open ones. Three routes now, and every agent should be free to pick the right one for the task in front of it.",
    },
    {
      tag: "stage 4 · a platform",
      heading: "Now it's a platform, whether you planned one or not.",
      body: "Three routes, several agents, several teams. One interface so each task reaches the right model. Someone to see every call, attribute what it costs, cap what runs away, and carry the pager. Six months of work, a team you don't have, none of it your core business.",
    },
    {
      tag: "with Droplet Labs · weeks",
      heading: "We build what's beneath.",
      body: "The whole platform, on your cloud, in your accounts, in weeks. Hosted, open and your own models, all available, chosen per task. Fixed scope. Then we train your team and hand over the keys.",
    },
  ],
  cloudCaption: "Your cloud · AWS, GCP or Azure · your Kubernetes, your Grafana",
  ownedTag: "run by your team",
  rise: {
    heading: "Your agents, in production.",
    body: "Hosted, open or your own: your agents pick the model for the task. We build the platform under them. Your team owns all of it.",
    cta: "Book a 30-minute call",
    emailLabel: "Email us",
  },
  closing: {
    line: "Ready to see what's beneath your agents?",
    cta: "Book a 30-minute call",
  },
} as const;

export const hero = {
  eyebrow: "// AI PLATFORM",
  headlineLines: ["Your AI platform.", "On your cloud. In weeks."],
  sub: "Running AI agents in production takes most teams six months of infrastructure work before the first agent ships. We build the platform, hand it over, and train your team to run it. You build the agents.",
  primaryCta: BOOK_CALL_LABEL,
  secondaryCta: "See demos",
  stack: ["Your AI agents", "AI Platform", "Your cloud · your existing stack"],
  stackCaption: "built by Droplet Labs",
  stats: [
    { value: "Weeks, not months", label: "Delivery" },
    { value: "Your cloud, your code", label: "Ownership" },
    { value: "Build → hand over → support", label: "Engagement" },
  ],
} as const;

export const problem = {
  eyebrow: "// THE PROBLEM",
  heading: "Six months before the first agent ships.",
  columns: [
    {
      title: "Do it yourself.",
      body: "Compute, model serving, a way for agents to reach tools and models, monitoring, cost control. Six months or more, a platform team you don't have, and none of it is what your company is for.",
    },
    {
      title: "With Droplet Labs.",
      body: "One production-ready platform on your cloud, in weeks. Your engineers spend their time on the AI that sets your product apart, not on the plumbing underneath it.",
    },
  ],
} as const;

export const platform = {
  eyebrow: "// THE PLATFORM",
  heading: "One platform. Everything agents need to run in production.",
  capabilities: [
    { title: "Model serving on your GPUs", detail: "open models and your own" },
    {
      title: "One interface for agents, tools and models",
      detail: "hosted or self-hosted",
    },
    { title: "Observability in the stack you already run", detail: null },
    {
      title: "Usage tracking and cost control",
      detail: "per team, agent and model",
    },
    {
      title: "Quotas, limits and audit",
      detail: "no runaway agent, no unanswered \"who called what\"",
    },
    {
      title: "The process to operate and scale it",
      detail: "runbooks, on-call, adding models and agents without calling us",
    },
  ],
  boundary:
    "We build the platform and the way to run it. You build the agents on top.",
} as const;

export const ownership = {
  heading: "You own it. All of it.",
  body: "Built on your cloud, in your accounts. Your code, your repos, your configuration. Wired into the observability, identity and tooling you already use rather than replacing them. When we step back, your team runs it, and nothing routes through us.",
} as const;

export const fit = {
  eyebrow: "// FIT",
  heading: "Who it's for",
  columns: [
    {
      title: "A good fit if you…",
      items: [
        "need self-hosted or custom models for cost, data, latency or compliance",
        "run (or will run) several models and agents",
        "need to see and control what AI costs per team and product",
        "have engineers but no platform team",
      ],
    },
    {
      title: "Probably not a fit if you…",
      items: [
        "are happy calling a single hosted API and have no plans to self-host",
        "need someone to build the agents themselves rather than the platform under them",
      ],
    },
  ],
} as const;

export const faq = {
  eyebrow: "// FAQ",
  heading: "Questions a CTO asks",
  items: [
    {
      q: "Why not just call a hosted API?",
      a: "Many teams start there. The platform is for when you need your own models, several providers, or visibility into what each team and agent is spending.",
    },
    {
      q: "Can my team maintain it after you leave?",
      a: "That is the point of the handover. Documentation, runbooks and training are part of the build, not an add-on.",
    },
    {
      q: "Which clouds?",
      a: "AWS, GCP and Azure. On-prem and hybrid Kubernetes by discussion.",
    },
    {
      q: "We already run Kubernetes, Grafana and friends. Do we keep them?",
      a: "Yes. We build into your stack, not beside it.",
    },
    {
      q: "Do you build the agents too?",
      a: "No. We build the platform and the process to run it. Your team builds the agents on top.",
    },
    {
      q: "How long, really?",
      a: "Assessment in a week, build in weeks, not months. Exact scope and timeline come out of the assessment.",
    },
  ],
} as const;

export const demosSection = {
  eyebrow: "// DEMOS",
  heading: "Demos",
  note: "Coming soon.",
} as const;

export const contact = {
  eyebrow: "// LET'S TALK",
  heading: "Ready to run AI in production?",
  sub: "Thirty minutes. Tell us what you're building and what you run today; we'll tell you what the platform looks like and how long it takes.",
  primaryCta: BOOK_CALL_LABEL,
  secondaryCta: "Email us",
} as const;

export const process = {
  eyebrow: "// PROCESS",
  heading: "How we work",
} as const;

export const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Your cloud, your stack, your models, your constraints. One week.",
    color: "#06b6d4",
    colorFaded: "rgba(6,182,212,0.15)",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Fixed scope, clear deliverables. Weekly demos, you see it running on your accounts.",
    color: "#0ea5e9",
    colorFaded: "rgba(14,165,233,0.15)",
  },
  {
    number: "03",
    title: "Hand over & train",
    description:
      "Your team runs it before we step back. Documentation, runbooks, hands-on sessions.",
    color: "#14b8a6",
    colorFaded: "rgba(20,184,166,0.15)",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Maintenance and upgrades as you scale. Optional, ongoing.",
    color: "#3b82f6",
    colorFaded: "rgba(59,130,246,0.15)",
  },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/droplet-labs/",
  },
] as const;
