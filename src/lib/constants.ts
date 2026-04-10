export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Demos", href: "#demos" },
  { label: "How it Works", href: "#how-it-works" },
] as const;

export const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Landing pages, business sites, portfolios — fast, responsive, built to convert.",
    tags: ["Fast loading", "SEO optimized", "Mobile first"],
    color: {
      accent: "#06b6d4",
      border: "rgba(6,182,212,0.12)",
      glow: "rgba(6,182,212,0.1)",
      tagBg: "#ecfeff",
      tagText: "#0891b2",
    },
  },
  {
    number: "02",
    title: "Web Apps",
    description:
      "Dashboards, internal tools, MVPs — custom built, production-ready.",
    tags: ["Custom built", "Cloud hosted", "Scalable"],
    color: {
      accent: "#0ea5e9",
      border: "rgba(14,165,233,0.12)",
      glow: "rgba(14,165,233,0.1)",
      tagBg: "#f0f9ff",
      tagText: "#0284c7",
    },
  },
  {
    number: "03",
    title: "SaaS Products",
    description:
      "Idea to live product in weeks. Auth, tenancy, RBAC, billing, CI/CD — all pre-built.",
    tags: ["Auth0", "RBAC", "Multi-tenant", "CI/CD"],
    color: {
      accent: "#14b8a6",
      border: "rgba(20,184,166,0.12)",
      glow: "rgba(20,184,166,0.1)",
      tagBg: "#f0fdfa",
      tagText: "#0d9488",
    },
  },
  {
    number: "04",
    title: "AI Integration",
    description:
      "Chatbots, smart search, content generation — woven into your product.",
    tags: ["Chatbots", "AI search", "Content gen"],
    color: {
      accent: "#3b82f6",
      border: "rgba(59,130,246,0.12)",
      glow: "rgba(59,130,246,0.1)",
      tagBg: "#eff6ff",
      tagText: "#2563eb",
    },
  },
] as const;

export const afterLaunchServices = [
  {
    number: "05",
    title: "API & Integrations",
    description:
      "Connect payments, CRMs, or any third-party service your product needs.",
    tags: ["REST", "GraphQL", "Webhooks"],
    badge: null,
    color: {
      accent: "#06b6d4",
      border: "rgba(6,182,212,0.12)",
      glow: "rgba(6,182,212,0.1)",
      tagBg: "#ecfeff",
      tagText: "#0891b2",
    },
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description:
      "We don't disappear after launch. Bug fixes, updates, monitoring, new features.",
    tags: ["Basic", "Pro", "Priority"],
    badge: "RECURRING",
    color: {
      accent: "#14b8a6",
      border: "rgba(20,184,166,0.12)",
      glow: "rgba(20,184,166,0.1)",
      tagBg: "#f0fdfa",
      tagText: "#0d9488",
    },
  },
] as const;

export const demos = [
  {
    title: "Analytics Dashboard",
    description: "Charts, filters, exports",
    previewType: "dashboard" as const,
  },
  {
    title: "Multi-Tenant Admin",
    description: "Tenants, users, RBAC",
    previewType: "admin" as const,
  },
  {
    title: "AI Support Agent",
    description: "Context-aware chatbot",
    previewType: "chat" as const,
  },
  {
    title: "Onboarding Wizard",
    description: "Multi-step signup flow",
    previewType: "wizard" as const,
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We scope your idea, timeline, and budget",
    color: "#06b6d4",
    colorFaded: "rgba(6,182,212,0.15)",
  },
  {
    number: "02",
    title: "Proposal",
    description: "Fixed price, clear deliverables, no surprises",
    color: "#0ea5e9",
    colorFaded: "rgba(14,165,233,0.15)",
  },
  {
    number: "03",
    title: "Build",
    description: "Weekly updates, you see real progress",
    color: "#14b8a6",
    colorFaded: "rgba(20,184,166,0.15)",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deployed, monitored, supported",
    color: "#3b82f6",
    colorFaded: "rgba(59,130,246,0.15)",
  },
] as const;

export const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
] as const;
