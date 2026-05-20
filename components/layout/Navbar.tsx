"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500",
            scrolled
              ? "glass-card shadow-md py-3 px-6 mx-4"
              : "py-0"
          )}
          style={
            scrolled
              ? { background: "rgba(245, 239, 230, 0.85)", backdropFilter: "blur(24px)" }
              : {}
          }
        >
          {/* Logo */}
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                color: "var(--bg)",
                boxShadow: "var(--shadow-accent)",
              }}
            >
              PG
            </div>
            <span
              className="font-semibold text-base hidden sm:block"
              style={{ color: "var(--text)" }}
            >
              Pillyi G Shankar
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    isActive
                      ? "text-accent"
                      : "hover:text-accent"
                  )}
                  style={{
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                  }}
                  aria-label={`Navigate to ${label}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(176, 137, 104, 0.12)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="mailto:pillyi.shankar@email.com"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                color: "var(--bg)",
                boxShadow: "var(--shadow-accent)",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(176, 137, 104, 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "var(--text)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(43, 43, 43, 0.4)", backdropFilter: "blur(4px)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 flex flex-col p-8"
              style={{
                background: "var(--bg)",
                borderLeft: "1px solid var(--border)",
                boxShadow: "-20px 0 60px rgba(43, 43, 43, 0.15)",
              }}
            >
              <div className="flex justify-between items-center mb-10">
                <span
                  className="font-semibold text-base"
                  style={{ color: "var(--text)" }}
                >
                  Navigation
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="Close mobile menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map(({ label, href }, i) => (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(href)}
                    className="text-left px-4 py-3 rounded-xl text-base font-medium transition-all"
                    style={{
                      color:
                        activeSection === href.slice(1)
                          ? "var(--accent)"
                          : "var(--text)",
                      background:
                        activeSection === href.slice(1)
                          ? "rgba(176, 137, 104, 0.1)"
                          : "transparent",
                    }}
                  >
                    {label}
                  </motion.button>
                ))}
              </nav>
              <div className="mt-auto">
                <a
                  href="mailto:pillyi.shankar@email.com"
                  className="block text-center px-5 py-3 rounded-xl font-semibold text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                    color: "var(--bg)",
                  }}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
