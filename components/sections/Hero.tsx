"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/pillyi-gshankar" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/pillyi-gshankar" },
  { icon: FiMail, label: "Email", href: "mailto:pillyi.shankar@email.com" },
];

const titleWords = ["Frontend", "&", "Full-Stack", "Developer"];

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-shell"
      style={{ background: "var(--bg)" }}
    >
      {/* Background blobs */}
      <motion.div
        className="absolute top-20 right-10 w-72 md:w-96 h-72 md:h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(176, 137, 104, 0.12)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-56 md:w-72 h-56 md:h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(176, 137, 104, 0.08)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] md:w-[600px] h-[420px] md:h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(232, 223, 209, 0.5)" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="hidden md:block absolute top-32 left-20 w-4 h-4 rounded-sm opacity-30 pointer-events-none"
        style={{ background: "var(--accent)", rotate: 45 }}
        animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute top-48 right-32 w-3 h-3 rounded-full opacity-40 pointer-events-none"
        style={{ background: "var(--accent)" }}
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="hidden md:block absolute bottom-48 right-20 w-5 h-5 rounded-sm opacity-20 pointer-events-none"
        style={{ background: "var(--accent-dark)", rotate: 15 }}
        animate={{ y: [0, -25, 0], rotate: [15, 60, 15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="hidden md:block absolute bottom-64 left-32 w-2 h-2 rounded-full opacity-50 pointer-events-none"
        style={{ background: "var(--accent)" }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 content-container w-full pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-14 xl:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <motion.span
                className="inline-block w-8 h-[2px] rounded-full"
                style={{ background: "var(--accent)" }}
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Available for Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
               className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 text-balance"
               style={{
                 color: "var(--text)",
                 fontFamily: "var(--font-serif)",
               }}
            >
              Pillyi{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                G Shankar
              </span>
            </motion.h1>

            {/* Role title with staggered words */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                 className="text-xl sm:text-3xl font-medium"
                  style={{
                    color: word === "&" ? "var(--accent)" : "var(--text-muted)",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-8"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              Andhra Pradesh, India · CS Engineering Student
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
               className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
              style={{ color: "var(--text-muted)" }}
            >
              Building modern, scalable web applications with clean UI/UX and robust backend systems. Passionate about crafting elegant digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
               className="btn-primary px-7 py-3.5 focus-ring"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                  color: "var(--bg)",
                  boxShadow: "var(--shadow-accent)",
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 12px 40px rgba(176, 137, 104, 0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                id="hero-view-work-btn"
              >
                View My Work
                <ExternalLink size={16} />
              </motion.button>

              <motion.a
                href="mailto:pillyi.shankar@email.com"
                 className="btn-secondary px-7 py-3.5 focus-ring"
                style={{
                  background: "transparent",
                  color: "var(--text)",
                   border: "1.5px solid var(--border)",
                }}
                whileHover={{
                  scale: 1.04,
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  background: "rgba(176, 137, 104, 0.06)",
                }}
                whileTap={{ scale: 0.97 }}
                id="hero-contact-btn"
              >
                Get In Touch
                <Mail size={16} />
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {socials.map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                   className="w-11 h-11 rounded-xl flex items-center justify-center transition-all focus-ring"
                  style={{
                    background: "var(--bg-secondary)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    background: "rgba(176, 137, 104, 0.12)",
                    color: "var(--accent)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar card */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
             className="flex-shrink-0 relative w-full max-w-[20rem] sm:max-w-[22rem]"
          >
            {/* Main card */}
            <div
               className="relative w-full rounded-3xl overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              {/* Profile area */}
              <div
                className="h-56 flex items-center justify-center relative"
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)",
                }}
              >
                {/* Avatar initials */}
                <motion.div
                  className="w-28 h-28 rounded-2xl flex items-center justify-center text-3xl font-bold relative z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                    color: "var(--bg)",
                    boxShadow: "0 20px 60px rgba(176, 137, 104, 0.4)",
                     fontFamily: "var(--font-serif)",
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  PG
                </motion.div>
                {/* Decorative rings */}
                <div
                  className="absolute w-44 h-44 rounded-2xl opacity-20"
                  style={{ border: "1px solid var(--accent)" }}
                />
                <div
                  className="absolute w-56 h-56 rounded-2xl opacity-10"
                  style={{ border: "1px solid var(--accent)" }}
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <div
                  className="font-bold text-xl mb-1"
                  style={{
                    color: "var(--text)",
                     fontFamily: "var(--font-serif)",
                  }}
                >
                  Pillyi G Shankar
                </div>
                <div className="text-sm mb-4" style={{ color: "var(--accent)" }}>
                  Full-Stack Developer
                </div>
                <div className="flex gap-3">
                  {[
                    { label: "Projects", value: "3+" },
                    { label: "Tech", value: "15+" },
                    { label: "Certs", value: "2" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex-1 text-center p-2.5 rounded-xl"
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <div
                        className="text-lg font-bold"
                        style={{ color: "var(--accent)" }}
                      >
                        {value}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
             className="absolute -top-4 -right-2 sm:-right-6 px-3 py-2 rounded-xl text-xs font-semibold"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
                color: "var(--text)",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              ⚡ React.js Expert
            </motion.div>
            <motion.div
             className="absolute -bottom-4 -left-2 sm:-left-6 px-3 py-2 rounded-xl text-xs font-semibold"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
                color: "var(--text)",
              }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              🔥 Spring Boot Dev
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--text-subtle)" }}
          >
            Scroll
          </span>
          <ArrowDown size={16} style={{ color: "var(--accent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
