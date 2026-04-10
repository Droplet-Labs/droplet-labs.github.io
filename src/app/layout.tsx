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
  title: "Droplet Labs | We Build Software That Scales",
  description:
    "From pixel-perfect websites to full-stack SaaS platforms — supercharged with AI. We ship fast, build smart, and don't do mediocre.",
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
      <body className="font-[family-name:var(--font-outfit)] antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
