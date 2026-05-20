import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-14",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
        style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl"
          style={{
            color: "var(--text-muted)",
            marginLeft: centered ? "auto" : undefined,
            marginRight: centered ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
