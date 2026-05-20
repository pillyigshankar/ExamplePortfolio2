"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Send, CheckCircle } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contactLinks = [
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/pillyi-gshankar",
    href: "https://github.com/pillyi-gshankar",
    color: "#2B2B2B",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pillyi-gshankar",
    href: "https://linkedin.com/in/pillyi-gshankar",
    color: "#0077B5",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "pillyi.shankar@email.com",
    href: "mailto:pillyi.shankar@email.com",
    color: "var(--accent)",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: `1.5px solid ${focused === field ? "var(--accent)" : "var(--border)"}`,
    background: focused === field ? "rgba(176, 137, 104, 0.04)" : "var(--bg)",
    color: "var(--text)",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.25s ease",
    fontFamily: "'Inter', sans-serif",
  });

  return (
    <section
      id="contact"
      className="section-padding px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Let's Work Together"
            subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <div>
            <ScrollReveal delay={0.1} direction="left">
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--text-muted)" }}
              >
                I&apos;m currently open to internship and full-time opportunities in
                frontend or full-stack web development. Whether it&apos;s a quick
                question or a potential collaboration, my inbox is always open.
              </p>
            </ScrollReveal>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactLinks.map(({ icon: Icon, label, value, href, color }, i) => (
                <ScrollReveal key={label} delay={0.15 + i * 0.1} direction="left">
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all group"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                    }}
                    whileHover={{
                      scale: 1.02,
                      x: 4,
                      borderColor: "rgba(176, 137, 104, 0.4)",
                      background: "rgba(176, 137, 104, 0.05)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}25`,
                      }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                        style={{ color: "var(--text-subtle)" }}
                      >
                        {label}
                      </div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "var(--text)" }}
                      >
                        {value}
                      </div>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
                        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>

            {/* Status badge */}
            <ScrollReveal delay={0.5} direction="left">
              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
                style={{
                  background: "rgba(34, 197, 94, 0.08)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                }}
              >
                <motion.div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#22c55e" }}
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                  Available for new opportunities
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={0.2} direction="right">
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Subtle background blob */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: "rgba(176, 137, 104, 0.15)" }}
              />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    >
                      <CheckCircle size={56} style={{ color: "var(--accent)" }} />
                    </motion.div>
                    <h3
                      className="text-xl font-bold mt-4 mb-2"
                      style={{
                        color: "var(--text)",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "var(--text-muted)" }}
                          htmlFor="contact-name"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          required
                          style={inputStyle("name")}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "var(--text-muted)" }}
                          htmlFor="contact-email"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          required
                          style={inputStyle("email")}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: "var(--text-muted)" }}
                        htmlFor="contact-subject"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        required
                        style={inputStyle("subject")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: "var(--text-muted)" }}
                        htmlFor="contact-message"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        required
                        style={{
                          ...inputStyle("message"),
                          resize: "none",
                        }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                        color: "var(--bg)",
                        boxShadow: "var(--shadow-accent)",
                      }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 12px 40px rgba(176, 137, 104, 0.45)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      id="contact-submit-btn"
                    >
                      Send Message
                      <Send size={16} />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
