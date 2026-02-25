import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Droplet Labs | SaaS Development & Consulting",
  description:
    "We build scalable SaaS architectures, MVP development, AI integrations, and cloud architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-background text-foreground selection:bg-black selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
