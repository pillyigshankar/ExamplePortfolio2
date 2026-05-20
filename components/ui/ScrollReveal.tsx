"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const initialMap = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: 60 },
    right: { opacity: 0, x: -60 },
    none: { opacity: 0 },
  };

  const animateMap = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    none: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initialMap[direction]}
      animate={isInView ? animateMap[direction] : initialMap[direction]}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
