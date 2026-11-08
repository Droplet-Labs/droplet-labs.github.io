import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import {
  AREA_SERVED,
  CONTACT_EMAIL,
  FOUNDER_PROFILES,
  SITE_URL,
  faq,
  socialLinks,
} from "@/lib/constants";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dropletlabs.co"),
  title: "Droplet Labs — Self-hosted AI & LLM platform on your cloud",
  description:
    "We build the AI platform your agents run on: model serving, agent tooling, observability and usage tracking, on your cloud, in weeks. Your team owns it.",
  openGraph: {
    title: "Droplet Labs — AI Platform, built on your cloud",
    description:
      "We build the AI platform your agents run on: model serving, agent tooling, observability and usage tracking, on your cloud, in weeks. Your team owns it.",
    url: "https://dropletlabs.co",
    siteName: "Droplet Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Droplet Labs — The agent is the easy part. Your AI platform, on your cloud, in weeks.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Droplet Labs — AI Platform, built on your cloud",
    description:
      "We build the AI platform your agents run on: model serving, agent tooling, observability and usage tracking, on your cloud, in weeks. Your team owns it.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://dropletlabs.co" },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Droplet Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  email: CONTACT_EMAIL,
  description:
    "We build the AI platform your agents run on: model serving, agent tooling, observability and usage tracking, on your cloud, in weeks. Your team owns it.",
  serviceType: ["AI Platform Engineering", "AI Infrastructure", "MLOps"],
  knowsAbout: [
    "AI platform engineering",
    "LLM serving",
    "Model fine-tuning",
    "Kubernetes",
    "AI observability",
    "AI cost management",
  ],
  sameAs: [...socialLinks.map((link) => link.href), ...FOUNDER_PROFILES],
  ...(AREA_SERVED && { areaServed: AREA_SERVED }),
};

// Built from the same items as the visible FAQ so the two can't drift.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} motion-safe:scroll-smooth`}
    >
      <head>
        {[organizationJsonLd, faqJsonLd].map((data) => (
          <script
            key={data["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="font-[family-name:var(--font-outfit)] antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
