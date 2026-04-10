import { socialLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="border-t border-water-cyan/10 py-8 px-6 md:px-12"
      style={{ background: "#041c2c" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Droplet Labs. All rights reserved.
        </span>
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Droplet Labs on ${link.label}`}
              className="text-white/40 text-xs hover:text-water-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
