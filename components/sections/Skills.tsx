"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    color: "rgba(176, 137, 104, 0.15)",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React.js", icon: "⚛️" },
    ],
  },
  {
    title: "Backend",
    color: "rgba(176, 137, 104, 0.10)",
    skills: [
      { name: "Spring Boot", icon: "🍃" },
      { name: "Django", icon: "🐍" },
      { name: "FastAPI", icon: "🚀" },
      { name: "REST APIs", icon: "🔌" },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "rgba(176, 137, 104, 0.08)",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "Jenkins", icon: "⚙️" },
      { name: "Postman", icon: "📬" },
    ],
  },
  {
    title: "CS Fundamentals",
    color: "rgba(176, 137, 104, 0.12)",
    skills: [
      { name: "DBMS", icon: "🗄️" },
      { name: "OOP", icon: "🧩" },
      { name: "DSA", icon: "📊" },
      { name: "Operating Systems", icon: "💻" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <SectionHeader
            eyebrow="Technical Skills"
            title="My Tech Toolkit"
            subtitle="A curated set of technologies I use to build modern, scalable applications."
            centered
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => (
            <ScrollReveal
              key={cat.title}
              delay={catIdx * 0.1}
              direction={catIdx % 2 === 0 ? "left" : "right"}
            >
              <div
                className="rounded-2xl p-6 h-full"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="px-3 py-1 rounded-lg text-xs font-bold tracking-wider uppercase"
                    style={{
                      background: cat.color,
                      color: "var(--accent)",
                    }}
                  >
                    {cat.title}
                  </div>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "var(--border)" }}
                  />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIdx * 0.1 + skillIdx * 0.07,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      whileHover={{
                        scale: 1.06,
                        y: -2,
                        background: "rgba(176, 137, 104, 0.15)",
                        borderColor: "rgba(176, 137, 104, 0.5)",
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium cursor-default"
                      style={{
                        background: "var(--bg-tertiary)",
                        color: "var(--text)",
                        border: "1px solid var(--border)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom languages bar */}
        <ScrollReveal delay={0.5} direction="up" className="mt-10">
          <div
            className="flex flex-wrap items-center justify-center gap-6 py-6 px-8 rounded-2xl"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-subtle)" }}>
              Core Languages
            </span>
            {[
              { name: "Java", icon: "☕" },
              { name: "Python", icon: "🐍" },
              { name: "JavaScript", icon: "⚡" },
              { name: "TypeScript", icon: "🔷" },
              { name: "SQL", icon: "🗃️" },
            ].map((lang, i) => (
              <motion.div
                key={lang.name}
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "var(--text-muted)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.08 }}
                whileHover={{ color: "var(--accent)", scale: 1.05 }}
              >
                <span>{lang.icon}</span>
                {lang.name}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
