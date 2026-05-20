"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Code2, Server, Database, Cpu } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <div
        className="text-center p-5 rounded-2xl"
        style={{
          background: "var(--bg-tertiary)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          className="text-3xl font-bold mb-1"
          style={{ color: "var(--accent)", fontFamily: "var(--font-serif)" }}
        >
          {value}
        </div>
        <div className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
          {label}
        </div>
      </div>
    </ScrollReveal>
  );
}

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, HTML, CSS, JavaScript" },
  { icon: Server, label: "Backend", desc: "Spring Boot, Django, FastAPI" },
  { icon: Database, label: "Databases", desc: "MySQL, SQLite, SQL" },
  { icon: Cpu, label: "CS Core", desc: "DSA, OOP, OS, DBMS" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding section-shell"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="content-container">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left */}
          <div>
            <ScrollReveal direction="left">
              <SectionHeader
                eyebrow="About Me"
                title="Crafting Digital Experiences"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="left">
              <p
                 className="text-base md:text-[1.03rem] leading-relaxed mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                Computer Science Engineering student experienced in frontend and
                full-stack web development with expertise in{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  React, Spring Boot, Django, FastAPI
                </span>
                , and database-driven applications.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25} direction="left">
              <p
                 className="text-base md:text-[1.03rem] leading-relaxed mb-8"
                style={{ color: "var(--text-muted)" }}
              >
                Passionate about building modern responsive applications with clean
                UI/UX and scalable backend systems. I bridge the gap between beautiful
                design and robust engineering.
              </p>
            </ScrollReveal>

            {/* Highlight pills */}
            <ScrollReveal delay={0.35} direction="left">
               <div className="flex flex-wrap gap-3 mb-10">
                {highlights.map(({ icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    className="pill-chip"
                    style={{
                      background: "var(--bg-tertiary)",
                      color: "var(--text)",
                      border: "1px solid var(--border)",
                    }}
                    whileHover={{
                      scale: 1.04,
                      background: "rgba(176, 137, 104, 0.1)",
                      color: "var(--accent)",
                      borderColor: "rgba(176, 137, 104, 0.4)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={15} style={{ color: "var(--accent)" }} />
                    {label}
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Location + status */}
            <ScrollReveal delay={0.45} direction="left">
              <div className="flex flex-wrap gap-4">
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span style={{ color: "var(--accent)" }}>📍</span>
                  Andhra Pradesh, India
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#22c55e" }}
                  />
                  <span style={{ color: "var(--text-muted)" }}>
                    Open to opportunities
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Stats grid */}
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard value="3+" label="Projects" delay={0.1} />
              <StatCard value="15+" label="Technologies" delay={0.2} />
              <StatCard value="2" label="Certifications" delay={0.3} />
            </div>

            {/* Expertise cards */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <ScrollReveal key={label} delay={0.2 + i * 0.1} direction="right">
                  <motion.div
                     className="premium-card p-5"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(176, 137, 104, 0.12)" }}
                    >
                      <Icon size={20} style={{ color: "var(--accent)" }} />
                    </div>
                    <div
                      className="font-semibold text-sm mb-1"
                      style={{ color: "var(--text)" }}
                    >
                      {label}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                      {desc}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Quote */}
            <ScrollReveal delay={0.5} direction="right">
              <div
                 className="p-6 rounded-2xl italic text-base leading-relaxed text-balance"
                style={{
                  background: "rgba(176, 137, 104, 0.06)",
                  border: "1px solid rgba(176, 137, 104, 0.2)",
                  color: "var(--text-muted)",
                   fontFamily: "var(--font-serif)",
                }}
              >
                &ldquo;I believe great software is born at the intersection of clean code, elegant design, and user empathy.&rdquo;
                <div
                  className="mt-3 text-sm not-italic font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  — Pillyi G Shankar
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
