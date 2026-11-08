"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navLinks, CALENDLY_URL, BOOK_CALL_LABEL } from "@/lib/constants";

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
          className="overflow-hidden md:hidden absolute top-full left-0 right-0 bg-[#041c2c] border-b border-white/10"
        >
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-white/65 hover:text-white transition-colors py-3 text-[15px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
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
