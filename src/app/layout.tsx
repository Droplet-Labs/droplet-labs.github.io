import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Droplet Labs — AI Platform, built on your cloud",
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
        alt: "Droplet Labs — Your AI platform. On your cloud. In weeks.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Droplet Labs",
  url: "https://dropletlabs.co",
  email: "hello@dropletlabs.co",
  description:
    "We build the AI platform your agents run on: model serving, agent tooling, observability and usage tracking, on your cloud, in weeks. Your team owns it.",
  serviceType: ["AI Platform Engineering", "AI Infrastructure", "MLOps"],
  knowsAbout: [
    "AI Agents",
    "LLM Serving",
    "Kubernetes",
    "GPU Infrastructure",
    "Observability",
    "Cloud Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[family-name:var(--font-outfit)] antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
