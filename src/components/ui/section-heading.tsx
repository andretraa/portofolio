interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-gradient-to-r from-primary to-secondary" />
      <span className="font-mono text-xs tracking-widest text-primary uppercase">
        {children}
      </span>
    </div>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <div className={centered ? "flex justify-center" : ""}>
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        <span className="gradient-text-subtle">{title}</span>
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed text-text-secondary md:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
