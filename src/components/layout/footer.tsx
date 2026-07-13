import Link from "next/link";
import { getPortfolio } from "@/lib/portfolio";

const socialLabels: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  instagram: "Instagram",
};

export function Footer() {
  const { site, profile, footer, social } = getPortfolio();
  const socialEntries = Object.entries(social);

  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="section-container py-14">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <Link
              href="#"
              className="font-heading text-lg font-bold text-text-primary"
            >
              {profile.displayName}
              <span className="text-primary">{footer.brandSuffix}</span>
            </Link>
            <p className="mt-2 text-sm text-text-secondary">{footer.tagline}</p>
            <div className="mt-4 flex justify-center gap-3 md:justify-start">
              {socialEntries.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border px-3 py-1.5 font-mono text-xs text-text-secondary transition-all hover:border-primary/30 hover:text-primary"
                >
                  {socialLabels[key] ?? key}
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-text-secondary">
            Built with{" "}
            {footer.builtWith.map((tech, i) => (
              <span key={tech}>
                {i > 0 && " · "}
                <span className="text-text-primary">{tech}</span>
              </span>
            ))}
          </p>

          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-text-muted">
          Made with <span aria-hidden="true">❤️</span> by {footer.madeBy}
        </p>
      </div>
    </footer>
  );
}
