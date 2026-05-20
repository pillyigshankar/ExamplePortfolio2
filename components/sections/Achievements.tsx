"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

interface Achievement {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
  badge: string;
  gradient: string;
}

const achievements: Achievement[] = [
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    year: "2024",
    description:
      "Earned the Salesforce Certified AI Associate credential, validating expertise in artificial intelligence fundamentals, Einstein AI capabilities, and responsible AI practices on the Salesforce platform.",
    icon: "⭐",
    badge: "Certified",
    gradient: "linear-gradient(135deg, #B08968 0%, #8B6A4E 100%)",
  },
  {
    title: "Guidewire DEVTrails 2026",
    issuer: "Guidewire Software",
    year: "2026",
    description:
      "Participated in the prestigious Guidewire DEVTrails 2026 Hackathon, building innovative insurance technology solutions. Demonstrated ability to rapidly prototype and deliver production-quality software under competitive conditions.",
    icon: "⚡",
    badge: "Participant",
    gradient: "linear-gradient(135deg, #C9A882 0%, #B08968 100%)",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <SectionHeader
            eyebrow="Achievements"
            title="Certifications & Recognition"
            subtitle="Milestones that mark my professional growth and commitment to continuous learning."
            centered
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, i) => (
            <ScrollReveal key={achievement.title} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-md)",
                }}
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Gradient top bar */}
                <div
                  className="h-2 w-full"
                  style={{ background: achievement.gradient }}
                />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                      style={{
                        background: achievement.gradient,
                        boxShadow: "var(--shadow-accent)",
                      }}
                    >
                      {achievement.icon}
                    </div>
                    <div className="text-right">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: "rgba(176, 137, 104, 0.12)",
                          color: "var(--accent)",
                          border: "1px solid rgba(176, 137, 104, 0.25)",
                        }}
                      >
                        {achievement.badge}
                      </span>
                      <div
                        className="text-xs mt-1"
                        style={{ color: "var(--text-subtle)" }}
                      >
                        {achievement.year}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{
                      color: "var(--text)",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {achievement.title}
                  </h3>
                  <div
                    className="text-sm font-semibold mb-4"
                    style={{ color: "var(--accent)" }}
                  >
                    {achievement.issuer}
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {achievement.description}
                  </p>

                  {/* Decorative dots */}
                  <div className="flex gap-1.5 mt-5">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: j < 4 ? "var(--accent)" : "var(--border)",
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.06 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom metric strip */}
        <ScrollReveal delay={0.4} direction="up" className="mt-12">
          <div
            className="grid grid-cols-3 gap-6 p-8 rounded-2xl max-w-2xl mx-auto"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            {[
              { value: "2", label: "Certifications" },
              { value: "1", label: "Hackathon" },
              { value: "∞", label: "Learning" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {value}
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
