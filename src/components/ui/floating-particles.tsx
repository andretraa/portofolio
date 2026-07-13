"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 0, x: 12, y: 18, size: 2, duration: 18, delay: 0 },
  { id: 1, x: 28, y: 72, size: 1.5, duration: 22, delay: 1 },
  { id: 2, x: 45, y: 35, size: 2.5, duration: 20, delay: 0.5 },
  { id: 3, x: 67, y: 82, size: 1, duration: 25, delay: 2 },
  { id: 4, x: 82, y: 15, size: 2, duration: 19, delay: 1.5 },
  { id: 5, x: 91, y: 55, size: 1.5, duration: 21, delay: 0.8 },
  { id: 6, x: 5, y: 48, size: 2, duration: 23, delay: 2.5 },
  { id: 7, x: 55, y: 8, size: 1, duration: 17, delay: 0.3 },
  { id: 8, x: 38, y: 91, size: 2.5, duration: 24, delay: 1.2 },
  { id: 9, x: 74, y: 42, size: 1.5, duration: 20, delay: 3 },
  { id: 10, x: 22, y: 62, size: 2, duration: 18, delay: 0.6 },
  { id: 11, x: 88, y: 78, size: 1, duration: 26, delay: 1.8 },
  { id: 12, x: 15, y: 28, size: 1.5, duration: 21, delay: 2.2 },
  { id: 13, x: 62, y: 68, size: 2, duration: 19, delay: 0.4 },
  { id: 14, x: 48, y: 52, size: 1, duration: 22, delay: 1.6 },
];

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
