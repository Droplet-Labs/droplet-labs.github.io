"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, CALENDLY_URL, BOOK_CALL_LABEL, story } from "@/lib/constants";
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
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-16 transition-colors duration-300 border-b",
        isScrolled
          ? "bg-[#041c2c] border-white/10"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-[1120px] mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="font-bold text-lg tracking-tight text-white">
          {story.nav.brand}
        </a>

        <div className="flex items-center gap-7">
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-white/65 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/35 px-3 py-1.5 text-[13px] md:px-4 md:py-2 md:text-[15px] font-semibold text-white hover:border-white transition-colors"
          >
            {BOOK_CALL_LABEL}
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
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
