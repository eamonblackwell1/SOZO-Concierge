"use client";

import { motion } from "framer-motion";
import {
  Database,
  Filter,
  Brain,
  LayoutList,
  Monitor,
} from "lucide-react";

const STEPS = [
  {
    icon: Database,
    label: "stylists.ts",
    sublabel: "64 records",
    color: "text-sozo-blue",
  },
  {
    icon: Filter,
    label: "pre-filter",
    sublabel: "hard constraints",
    color: "text-emerald-500",
  },
  {
    icon: Brain,
    label: "Claude",
    sublabel: "model-swappable",
    color: "text-violet-500",
  },
  {
    icon: LayoutList,
    label: "blocks",
    sublabel: "structured JSON",
    color: "text-amber-500",
  },
  {
    icon: Monitor,
    label: "UI",
    sublabel: "rendered chat",
    color: "text-rose-500",
  },
] as const;

function Connector({ index }: { index: number }) {
  return (
    <div className="flex items-center flex-1 min-w-[20px] max-w-[60px]">
      <svg
        className="w-full h-6"
        viewBox="0 0 60 24"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0"
          y1="12"
          x2="48"
          y2="12"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-border"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
        />
        <motion.polygon
          points="48,6 60,12 48,18"
          fill="currentColor"
          className="text-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 + index * 0.15 }}
        />
      </svg>
    </div>
  );
}

export function DataFlowDiagram() {
  return (
    <div className="rounded-lg border bg-card p-4 sm:p-6">
      <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
        Data Flow
      </h3>

      {/* Desktop: horizontal */}
      <div className="hidden sm:flex items-center justify-between gap-0">
        {STEPS.map((step, i) => (
          <div key={step.label} className="contents">
            <motion.div
              className="flex flex-col items-center gap-2 min-w-[80px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="size-10 rounded-lg bg-muted flex items-center justify-center">
                <step.icon className={`size-5 ${step.color}`} />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium font-mono leading-tight">
                  {step.label}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                  {step.sublabel}
                </p>
              </div>
            </motion.div>
            {i < STEPS.length - 1 && <Connector index={i} />}
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex sm:hidden flex-col gap-0">
        {STEPS.map((step, i) => (
          <div key={step.label}>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <step.icon className={`size-4 ${step.color}`} />
              </div>
              <div>
                <p className="text-xs font-medium font-mono">{step.label}</p>
                <p className="text-[10px] text-muted-foreground">
                  {step.sublabel}
                </p>
              </div>
            </motion.div>
            {i < STEPS.length - 1 && (
              <div className="ml-[18px] h-4 border-l border-dashed border-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
