"use client";

import { buildCodeLines, getPortfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";

export function MobileCodeCard() {
  const { profile } = getPortfolio();
  const lines = buildCodeLines().slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-8 lg:hidden"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm shine-border">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          <span className="ml-1 font-mono text-[10px] text-text-muted">
            {profile.codeSnippet.fileName}
          </span>
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-3 text-text-muted/40">{i + 1}</span>
              <span style={{ paddingLeft: `${line.indent}rem` }}>
                <span className={line.color}>{line.content}</span>
              </span>
            </div>
          ))}
          <span className="text-text-muted">  </span>
          <span className="inline-block h-3 w-1.5 bg-primary cursor-blink" />
        </pre>
      </div>
    </motion.div>
  );
}
