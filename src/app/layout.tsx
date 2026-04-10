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
  title: "Droplet Labs — We Build Software That Scales",
  description:
    "Custom websites, web apps, SaaS products, and AI integration — built fast, built right. Droplet Labs is your end-to-end software development partner.",
  openGraph: {
    title: "Droplet Labs — We Build Software That Scales",
    description:
      "Custom websites, web apps, SaaS products, and AI integration — built fast, built right.",
    url: "https://dropletlabs.co",
    siteName: "Droplet Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Droplet Labs — We Build Software That Scales",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Droplet Labs — We Build Software That Scales",
    description:
      "Custom websites, web apps, SaaS products, and AI integration — built fast, built right.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://dropletlabs.co" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Droplet Labs",
  url: "https://dropletlabs.co",
  description:
    "Custom software development — websites, web apps, SaaS products, AI integration, API development, and ongoing maintenance & support.",
  serviceType: [
    "Web Development",
    "SaaS Development",
    "AI Integration",
    "API Development",
    "Software Maintenance",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "AI",
    "SaaS",
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
