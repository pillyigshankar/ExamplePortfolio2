"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { X, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tech: string[];
  emoji: string;
  featured?: boolean;
  gradient: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EarnSafe",
    subtitle: "AI-Powered Parametric Insurance",
    description:
      "AI-powered insurance platform automating income-loss protection for gig workers during severe weather disruptions with fraud detection and AI premium prediction.",
    longDesc:
      "EarnSafe is a next-generation parametric insurance platform designed for gig economy workers. It uses machine learning to automatically trigger insurance payouts when severe weather events occur, without requiring manual claims. The platform features real-time weather data integration, AI-powered fraud detection, intelligent premium prediction, and a fully responsive booking and claims UI.",
    tech: ["Java", "Spring Boot", "React", "FastAPI", "MySQL", "AI/ML"],
    emoji: "🛡️",
    featured: true,
    gradient: "linear-gradient(135deg, #B08968 0%, #8B6A4E 100%)",
    color: "var(--accent)",
  },
  {
    id: 2,
    title: "GlobalGo",
    subtitle: "Full-Stack Travel Booking Platform",
    description:
      "Travel booking platform for flights, hotels, cabs, and restaurants with authentication, payment workflows, and responsive booking UI.",
    longDesc:
      "GlobalGo is a comprehensive travel booking platform that enables users to search, compare, and book flights, hotels, cab services, and restaurant reservations in one place. Features include JWT-based authentication, secure payment workflows, real-time availability checks, booking history, and a fully responsive UI built with React.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    emoji: "✈️",
    gradient: "linear-gradient(135deg, #C9A882 0%, #B08968 100%)",
    color: "var(--accent-light)",
  },
  {
    id: 3,
    title: "ETOS",
    subtitle: "Employee Training & Onboarding System",
    description:
      "Role-based onboarding and training system with dashboards, AI chatbot support, employee tracking, and modular backend architecture.",
    longDesc:
      "ETOS (Employee Training & Onboarding System) is a comprehensive HR platform that streamlines the employee onboarding process. Features include role-based access control for admins, managers, and employees, personalized training modules, progress tracking dashboards, an integrated AI chatbot for support, and a clean modular Django backend with SQLite.",
    tech: ["Python", "Django", "SQLite", "Bootstrap", "AI Chatbot"],
    emoji: "🎓",
    gradient: "linear-gradient(135deg, #DDD0BC 0%, #C9A882 100%)",
    color: "var(--accent-light)",
  },
];

interface TechBadgeProps {
  label: string;
}

function TechBadge({ label }: TechBadgeProps) {
  return (
    <span
      className="px-2.5 py-1 rounded-lg text-xs font-medium"
      style={{
        background: "rgba(245, 239, 230, 0.6)",
        color: "var(--text)",
        border: "1px solid rgba(245, 239, 230, 0.4)",
      }}
    >
      {label}
    </span>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} project details`}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0"
          style={{ background: "rgba(43, 43, 43, 0.6)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl rounded-3xl overflow-hidden z-10"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
          }}
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 40 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          {/* Header */}
          <div
            className="relative p-8 pb-6"
            style={{ background: project.gradient }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center focus-ring"
              style={{
                background: "rgba(245, 239, 230, 0.2)",
                color: "var(--bg)",
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            <div className="text-5xl mb-3">{project.emoji}</div>
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: "var(--bg)", fontFamily: "var(--font-serif)" }}
            >
              {project.title}
            </h3>
            <p className="text-sm" style={{ color: "rgba(245, 239, 230, 0.8)" }}>
              {project.subtitle}
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              {project.longDesc}
            </p>
            <div className="mb-6">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--accent)" }}
              >
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium"
                    style={{
                      background: "var(--bg-secondary)",
                      color: "var(--text)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <motion.a
                href="https://github.com/pillyi-gshankar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                  color: "var(--bg)",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiGithub size={16} />
                View on GitHub
              </motion.a>
              <motion.button
                onClick={onClose}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="section-padding section-shell"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="content-container">
        <ScrollReveal direction="up">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Things I've Built"
            subtitle="A selection of projects that showcase my full-stack development capabilities."
          />
        </ScrollReveal>

        {/* Bento Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Featured large card */}
          <ScrollReveal delay={0.1} direction="up" className="lg:col-span-2">
            <motion.div
               className="relative rounded-3xl overflow-hidden cursor-pointer h-full min-h-[360px] sm:min-h-[420px] group"
              style={{
                background: projects[0].gradient,
                boxShadow: "var(--shadow-lg)",
              }}
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setSelectedProject(projects[0])}
            >
              {/* Decorative blob */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 translate-x-16 -translate-y-16"
                style={{ background: "rgba(245, 239, 230, 0.6)" }}
              />

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="text-6xl"
                      style={{
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                      }}
                    >
                      {projects[0].emoji}
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{
                        background: "rgba(245, 239, 230, 0.25)",
                        color: "var(--bg)",
                      }}
                    >
                      Featured
                    </span>
                  </div>
                  <h3
                     className="text-2xl sm:text-3xl font-bold mb-2"
                     style={{
                       color: "var(--bg)",
                       fontFamily: "var(--font-serif)",
                     }}
                  >
                    {projects[0].title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(245, 239, 230, 0.8)" }}>
                    {projects[0].subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "rgba(245, 239, 230, 0.75)" }}
                  >
                    {projects[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].tech.map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                </div>

                <motion.div
                  className="flex items-center gap-2 mt-6 text-sm font-semibold"
                  style={{ color: "rgba(245, 239, 230, 0.9)" }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Two stacked smaller cards */}
           <div className="flex flex-col gap-5 md:gap-6">
            {projects.slice(1).map((project, i) => (
              <ScrollReveal key={project.id} delay={0.2 + i * 0.1} direction="right">
                <motion.div
                   className="relative rounded-3xl overflow-hidden cursor-pointer flex-1 min-h-[220px] sm:min-h-[190px] group"
                  style={{
                    background: project.gradient,
                    boxShadow: "var(--shadow-md)",
                  }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 translate-x-10 -translate-y-10"
                    style={{ background: "rgba(245, 239, 230, 0.6)" }}
                  />
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl">{project.emoji}</span>
                        <ExternalLink
                          size={14}
                          style={{ color: "rgba(245, 239, 230, 0.7)" }}
                        />
                      </div>
                      <h3
                         className="text-lg font-bold mb-1"
                         style={{
                           color: "var(--bg)",
                           fontFamily: "var(--font-serif)",
                         }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs mb-3" style={{ color: "rgba(245, 239, 230, 0.75)" }}>
                        {project.description.slice(0, 80)}...
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <TechBadge key={t} label={t} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <ScrollReveal delay={0.5} direction="up" className="mt-10 text-center">
          <motion.a
            href="https://github.com/pillyi-gshankar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-7 py-3.5 focus-ring"
            style={{
              color: "var(--text)",
              background: "var(--bg-tertiary)",
            }}
            whileHover={{
              scale: 1.04,
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
            whileTap={{ scale: 0.97 }}
            id="github-all-projects-btn"
          >
            <FiGithub size={18} />
            View All on GitHub
          </motion.a>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
