"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  SlidersHorizontal,
  Filter,
  Brain,
  FileJson,
  ChevronDown,
  ChevronRight,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";
import type { EngineStep } from "@/app/api/engine/route";

const STEP_META: Record<
  string,
  { icon: typeof MessageSquare; color: string; bg: string }
> = {
  input: {
    icon: MessageSquare,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  extraction: {
    icon: SlidersHorizontal,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  prefilter: {
    icon: Filter,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  reasoning: {
    icon: Brain,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  output: {
    icon: FileJson,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
};

function StepStatusBadge({ status }: { status: EngineStep["status"] }) {
  switch (status) {
    case "complete":
      return <CheckCircle2 className="size-3.5 text-emerald-500" />;
    case "running":
      return <Loader2 className="size-3.5 text-sozo-blue animate-spin" />;
    case "error":
      return <XCircle className="size-3.5 text-red-500" />;
    default:
      return (
        <div className="size-3.5 rounded-full border-2 border-muted-foreground/30" />
      );
  }
}

interface EngineStepCardProps {
  step: EngineStep;
  index: number;
  isActive: boolean;
}

export function EngineStepCard({ step, index, isActive }: EngineStepCardProps) {
  const [expanded, setExpanded] = useState(false);
  const meta = STEP_META[step.id] || STEP_META.input;
  const Icon = meta.icon;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {/* Connector */}
      {index > 0 && (
        <div className="absolute -top-3 left-[19px] h-3 border-l-2 border-dashed border-border" />
      )}

      <div
        className={`rounded-lg border transition-all duration-300 ${
          isActive
            ? "border-sozo-blue/40 shadow-sm shadow-sozo-blue/10"
            : "border-border"
        } ${step.status === "error" ? "border-red-300 dark:border-red-900/50" : ""}`}
      >
        {/* Header */}
        <button
          onClick={() => step.data && setExpanded(!expanded)}
          className="w-full flex items-center gap-3 p-3 text-left hover:bg-muted/30 transition-colors rounded-lg"
          disabled={!step.data}
        >
          <div
            className={`size-9 rounded-lg ${meta.bg} flex items-center justify-center shrink-0`}
          >
            <Icon className={`size-4.5 ${meta.color}`} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium truncate">
                {step.label}
              </span>
              <StepStatusBadge status={step.status} />
            </div>
            {step.duration_ms !== undefined && step.duration_ms > 0 && (
              <div className="flex items-center gap-1 mt-0.5">
                <Clock className="size-2.5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground font-mono">
                  {step.duration_ms}ms
                </span>
              </div>
            )}
          </div>

          {/* Summary badge for some steps */}
          {step.id === "prefilter" && !!step.data && (
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:text-amber-400">
              {(step.data as { after_filter?: number }).after_filter} candidates
            </span>
          )}
          {step.id === "reasoning" && !!step.data && (
            <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-medium text-violet-600 dark:text-violet-400">
              {(step.data as { confidence?: string }).confidence} confidence
            </span>
          )}

          {!!step.data && (
            <div className="text-muted-foreground ml-1">
              {expanded ? (
                <ChevronDown className="size-4" />
              ) : (
                <ChevronRight className="size-4" />
              )}
            </div>
          )}
        </button>

        {/* Expanded JSON */}
        <AnimatePresence>
          {expanded && !!step.data && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-3 pb-3 pt-0">
                <pre className="rounded-md bg-muted/50 border p-3 text-[11px] leading-relaxed font-mono text-foreground/80 overflow-x-auto max-h-[320px] overflow-y-auto whitespace-pre-wrap break-words">
                  {JSON.stringify(step.data, null, 2)}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
