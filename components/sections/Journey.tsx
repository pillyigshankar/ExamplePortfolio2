"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  type: "education" | "project" | "certification" | "skill";
}

const timelineItems: TimelineItem[] = [
  {
    year: "2021",
    title: "Started CS Engineering",
    description:
      "Enrolled in Computer Science Engineering program. Began foundations in programming, data structures, and algorithms using Java.",
    icon: "🎓",
    type: "education",
  },
  {
    year: "2022",
    title: "Mastered Core CS Concepts",
    description:
      "Deep-dived into OOP, DBMS, Operating Systems, and Computer Networks. Built strong foundations in software engineering principles.",
    icon: "💡",
    type: "skill",
  },
  {
    year: "2022",
    title: "Frontend Development Journey",
    description:
      "Learned HTML, CSS, JavaScript from scratch. Built first responsive websites and discovered passion for frontend development.",
    icon: "🌐",
    type: "skill",
  },
  {
    year: "2023",
    title: "React.js & Modern Frontend",
    description:
      "Adopted React.js as primary frontend framework. Built dynamic SPAs, learned state management, and component-driven architecture.",
    icon: "⚛️",
    type: "skill",
  },
  {
    year: "2023",
    title: "Backend with Spring Boot & Django",
    description:
      "Expanded into backend development with Spring Boot (Java) and Django (Python). Learned REST API design, database integration, and authentication.",
    icon: "🍃",
    type: "skill",
  },
  {
    year: "2024",
    title: "Built ETOS – First Major Project",
    description:
      "Developed the Employee Training & Onboarding System using Python, Django, SQLite. Implemented role-based access control and AI chatbot support.",
    icon: "🎯",
    type: "project",
  },
  {
    year: "2024",
    title: "GlobalGo Travel Platform",
    description:
      "Built a full-stack travel booking platform with Spring Boot backend and React frontend. Features authentication, payment flows, and responsive UI.",
    icon: "✈️",
    type: "project",
  },
  {
    year: "2024",
    title: "Salesforce AI Associate Certification",
    description:
      "Earned Salesforce Certified AI Associate credential, validating knowledge of AI fundamentals and Salesforce Einstein AI capabilities.",
    icon: "🏆",
    type: "certification",
  },
  {
    year: "2025",
    title: "EarnSafe – AI Insurance Platform",
    description:
      "Led development of AI-powered parametric insurance platform using Spring Boot, React, and FastAPI with fraud detection and ML-based premium prediction.",
    icon: "🛡️",
    type: "project",
  },
  {
    year: "2026",
    title: "Guidewire DEVTrails Hackathon",
    description:
      "Participated in the prestigious Guidewire DEVTrails 2026 Hackathon, building innovative insurance technology solutions under competitive conditions.",
    icon: "⚡",
    type: "certification",
  },
];

const typeColors: Record<TimelineItem["type"], string> = {
  education: "var(--accent)",
  project: "var(--accent-dark)",
  certification: "#C9A882",
  skill: "var(--text-muted)",
};

export default function Journey() {
  return (
    <section
      id="journey"
      className="section-padding px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <SectionHeader
            eyebrow="My Journey"
            title="Learning & Growth"
            subtitle="A chronological story of how I grew from a curious student to a full-stack developer."
            centered
          />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--accent) 10%, var(--accent) 90%, transparent)",
              opacity: 0.3,
            }}
          />

          <div className="space-y-8">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.06}
                  direction={isLeft ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content card */}
                    <div
                      className={`flex-1 pl-12 md:pl-0 ${
                        isLeft ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <motion.div
                        className="premium-card p-5"
                        whileHover={{ scale: 1.02, x: isLeft ? -4 : 4 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span
                              className="text-xs font-bold tracking-wider uppercase"
                              style={{ color: typeColors[item.type] }}
                            >
                              {item.year}
                            </span>
                            <h3
                              className="font-bold text-base mt-1"
                              style={{ color: "var(--text)" }}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <span
                            className="text-2xl ml-4 flex-shrink-0"
                            style={{ filter: "grayscale(0.2)" }}
                          >
                            {item.icon}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-5 flex-shrink-0">
                      <motion.div
                        className="w-4 h-4 rounded-full border-2"
                        style={{
                          background: "var(--bg)",
                          borderColor: typeColors[item.type],
                          boxShadow: `0 0 12px ${typeColors[item.type]}40`,
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, type: "spring", stiffness: 300 }}
                      />
                    </div>

                    {/* Empty space for alternating layout on desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
