import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="section-container py-14">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <Link
              href="#"
              className="font-heading text-lg font-bold text-text-primary"
            >
              Ridwan<span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-sm text-text-secondary">
              Senior Software Engineer
            </p>
          </div>

          <p className="text-center text-sm text-text-secondary">
            Built with{" "}
            <span className="text-text-primary">Next.js</span>
            {" · "}
            <span className="text-text-primary">TailwindCSS</span>
            {" · "}
            <span className="text-text-primary">Framer Motion</span>
          </p>

          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-text-muted">
          Made with <span aria-hidden="true">❤️</span> by Ridwan
        </p>
      </div>
    </footer>
  );
}
