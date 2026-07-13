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
  number?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  number,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <div
        className={`mb-6 flex items-end gap-4 ${centered ? "justify-center" : ""}`}
      >
        {number && (
          <span className="font-heading text-5xl font-bold leading-none text-surface-elevated md:text-6xl">
            {number}
          </span>
        )}
        <div className={centered ? "text-center" : ""}>
          {label && (
            <div className={centered ? "flex justify-center" : ""}>
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text-subtle">{title}</span>
          </h2>
        </div>
      </div>
      {subtitle && (
        <p
          className={`text-base leading-relaxed text-text-secondary md:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"} ${number && !centered ? "pl-[4.5rem] md:pl-[5.5rem]" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
