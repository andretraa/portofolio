"use client";

import Link from "next/link";
import { getNavLinks, getPortfolio } from "@/lib/portfolio";

export function Footer() {
  const { profile, footer } = getPortfolio();
  const navLinks = getNavLinks();

  return (
    <footer className="relative border-t border-border/20 bg-surface/20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container py-10">
        <div className="grid gap-8 md:grid-cols-3 items-center text-center md:text-left">

          {/* Left Column: Brand & Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="#" className="font-heading text-base font-bold text-text-primary">
              {profile.displayName}
              <span className="text-primary">{footer.brandSuffix}</span>
            </Link>
            <p className="mt-1.5 text-xs text-text-muted">
              {footer.tagline}
            </p>
          </div>

          {/* Center Column: Copyright */}
          <div className="text-center font-heading text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Create By Andre Tri Rizky Ariyanto.
          </div>

          {/* Right Column: Nav Links */}
          <div className="flex justify-center md:justify-end">
            <ul className="flex flex-wrap gap-4 justify-center md:justify-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-heading text-xs text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
