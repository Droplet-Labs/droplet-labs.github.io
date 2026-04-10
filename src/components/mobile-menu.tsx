"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden md:hidden absolute top-full left-0 right-0 bg-ocean-dark/95 backdrop-blur-xl border-b border-white/[0.06]"
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors py-3 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={onClose}
              className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-water-cyan to-water-sky text-white font-semibold text-sm py-2.5 px-5 rounded-lg"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
