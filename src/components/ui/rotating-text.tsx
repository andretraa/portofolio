"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RotatingTextProps {
  phrases: string[];
  className?: string;
}

export function RotatingText({ phrases, className = "" }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (phrases.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <span
      className={`relative inline-flex h-[1.4em] min-w-[12ch] overflow-hidden align-bottom ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 24, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -24, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%_auto] bg-clip-text font-heading font-semibold text-transparent animate-shimmer"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
