"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, CALENDLY_URL, BOOK_CALL_LABEL } from "@/lib/constants";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // A smooth scroll started while the menu is collapsing gets cancelled, so
  // a tapped section link waits here until the exit animation finishes.
  const pendingTarget = useRef<string | null>(null);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (!pendingTarget.current) return;
        document.querySelector(pendingTarget.current)?.scrollIntoView();
        pendingTarget.current = null;
      }}
    >
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          id="mobile-menu"
          className="overflow-hidden md:hidden absolute top-full left-0 right-0 bg-[#041c2c] border-b border-white/10"
        >
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  pendingTarget.current = link.href;
                  history.pushState(null, "", link.href);
                  onClose();
                }}
                className="text-white/65 hover:text-white transition-colors py-3 text-[15px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              data-analytics-event="book_call_click"
              data-analytics-position="nav"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-white/35 px-4 py-2.5 text-[15px] font-semibold text-white"
            >
              {BOOK_CALL_LABEL}
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
