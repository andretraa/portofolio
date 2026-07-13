"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0.5 right-0 left-0 z-50 px-4 pt-3">
      <nav
        className={`section-container flex h-14 items-center justify-between rounded-2xl border px-5 transition-all duration-500 ${
          scrolled
            ? "border-border bg-background/70 shadow-lg shadow-black/20 backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="#"
          className="group flex items-center gap-2 font-heading text-lg font-bold"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-xs font-bold text-white">
            MR
          </span>
          <span className="hidden text-text-primary sm:inline">
            Ridwan<span className="text-primary">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-lg px-3 py-1.5 text-sm transition-all duration-300 ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-all hover:brightness-110 md:inline-flex"
          >
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface/50 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 bg-text-primary transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-text-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-text-primary transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="section-container mt-2 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-xl backdrop-blur-2xl md:hidden"
        >
          <ul className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm text-text-secondary transition-colors hover:bg-white/[0.04] hover:text-text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-border pt-2">
              <Link
                href="#contact"
                className="block rounded-xl bg-primary/10 px-4 py-3 text-center text-sm font-medium text-primary"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
