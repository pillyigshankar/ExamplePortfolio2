"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/pillyi-gshankar" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/pillyi-gshankar" },
  { icon: FiMail, label: "Email", href: "mailto:pillyi.shankar@email.com" },
];

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div
            className="font-bold text-lg mb-1"
            style={{ color: "var(--text)", fontFamily: "'Playfair Display', serif" }}
          >
            Pillyi G Shankar
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Full-Stack Developer · Andhra Pradesh, India
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
              style={{
                background: "var(--bg-tertiary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
              whileHover={{
                scale: 1.1,
                color: "var(--accent)",
                background: "rgba(176, 137, 104, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-center" style={{ color: "var(--text-subtle)" }}>
          © {new Date().getFullYear()} Pillyi G Shankar. Crafted with ❤️
        </p>
      </div>
    </footer>
  );
}
