"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { MobileMenu } from "@/components/mobile-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 600;
      setIsScrolled(window.scrollY > heroHeight - 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-body-tint/80 backdrop-blur-xl border-black/[0.06]"
          : "bg-[#041c2c] border-[#041c2c]"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href="#"
          className={cn(
            "font-[family-name:var(--font-outfit)] font-bold text-lg tracking-tight transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-white"
          )}
        >
          DROPLET LABS.
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-300",
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/50 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className={cn(
              "hidden md:block w-px h-4 transition-colors duration-300",
              isScrolled ? "bg-black/10" : "bg-white/10"
            )}
          />

          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-gradient-to-r from-water-cyan to-water-sky text-white font-semibold text-sm py-2 px-5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}
