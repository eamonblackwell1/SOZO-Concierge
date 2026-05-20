"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Loader2,
  Clock,
  Sparkles,
  Cpu,
} from "lucide-react";
import type { EngineResponse } from "@/app/api/engine/route";
import { EngineStepCard } from "./EngineStepCard";
import { SystemPromptViewer } from "./SystemPromptViewer";

const EXAMPLE_QUERIES = [
  "I need a haircut this Saturday in Harajuku, something edgy but professional",
  "Looking for a colorist who does great balayage, budget around ¥15,000",
  "First time in Tokyo, anxious about language barrier, just want a simple trim near Shibuya",
  "I want a Korean-style layered cut, preferably someone who specializes in Asian hair textures",
];

export function EngineVizPanel() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<EngineResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [animatingStep, setAnimatingStep] = useState<number>(-1);

  const runEngine = useCallback(
    async (inputQuery?: string) => {
      const q = inputQuery || query;
      if (!q.trim()) return;

      setLoading(true);
      setResult(null);
      setError(null);
      setAnimatingStep(0);

      const stepTimers = [400, 900, 1400, 1900, 2400];
      const timeouts: NodeJS.Timeout[] = [];
      stepTimers.forEach((delay, i) => {
        timeouts.push(setTimeout(() => setAnimatingStep(i), delay));
      });

      try {
        const res = await fetch("/api/engine", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: q }),
        });

        if (!res.ok) {
          throw new Error(`API returned ${res.status}`);
        }

        const data: EngineResponse = await res.json();
        timeouts.forEach(clearTimeout);
        setResult(data);
        setAnimatingStep(data.steps.length - 1);
      } catch (err) {
        timeouts.forEach(clearTimeout);
        setError(err instanceof Error ? err.message : "Failed to run engine");
      } finally {
        setLoading(false);
      }
    },
    [query]
  );

  return (
    <div className="space-y-6">
      {/* Intro */}
      <motion.div
        className="flex items-start gap-3 rounded-lg border border-sozo-blue/20 bg-sozo-blue/5 p-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Cpu className="size-5 text-sozo-blue shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm font-medium">Live Engine Reasoning</p>
          <p className="text-xs text-muted-foreground">
            Type a customer query and watch the engine decompose it into
            structured parameters, filter candidates, reason through the
            best match, and produce a structured recommendation — all in
            real time.
          </p>
        </div>
      </motion.div>

      {/* Query input */}
      <div className="rounded-lg border bg-card p-4 sm:p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-sozo-blue" />
          <h3 className="text-sm font-medium">Customer Query</h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runEngine()}
            placeholder="Type a customer query to see the engine at work..."
            className="flex-1 rounded-md border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sozo-blue/30 focus:border-sozo-blue transition-shadow"
          />
          <button
            onClick={() => runEngine()}
            disabled={loading || !query.trim()}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-sozo-blue px-5 py-2.5 text-sm font-medium text-white hover:bg-sozo-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            {loading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Play className="size-4" />
            )}
            Run
          </button>
        </div>

        {/* Example queries */}
        <div className="space-y-2">
          <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
            Try an example
          </p>
          <div className="flex flex-wrap gap-1.5">
            {EXAMPLE_QUERIES.map((eq) => (
              <button
                key={eq}
                onClick={() => {
                  setQuery(eq);
                  runEngine(eq);
                }}
                disabled={loading}
                className="rounded-full border px-3 py-1.5 text-[11px] text-muted-foreground hover:text-foreground hover:border-sozo-blue/40 hover:bg-sozo-blue/5 transition-all disabled:opacity-50"
              >
                &ldquo;{eq.length > 55 ? eq.slice(0, 55) + "…" : eq}&rdquo;
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900/30 p-4"
        >
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          <p className="text-xs text-red-500/70 dark:text-red-500/50 mt-1">
            Make sure ANTHROPIC_API_KEY is set in your environment.
          </p>
        </motion.div>
      )}

      {/* Pipeline visualization */}
      {(result || loading) && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Pipeline header */}
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Pipeline Trace
            </h3>
            {result && (
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
                <Clock className="size-3" />
                {result.total_duration_ms}ms total
                <span className="mx-1 text-border">|</span>
                {result.model_id}
              </div>
            )}
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {result ? (
              result.steps.map((step, i) => (
                <EngineStepCard
                  key={step.id}
                  step={step}
                  index={i}
                  isActive={i === animatingStep}
                />
              ))
            ) : (
              <LoadingSkeleton activeStep={animatingStep} />
            )}
          </div>

          {/* System prompt viewer */}
          {result?.system_prompt_used && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <SystemPromptViewer
                prompt={result.system_prompt_used}
                modelId={result.model_id}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}

function LoadingSkeleton({ activeStep }: { activeStep: number }) {
  const STEP_LABELS = [
    "Input Received",
    "Parameter Extraction",
    "Pre-filter (Hard Constraints)",
    "AI Reasoning (Claude)",
    "Structured JSON Output",
  ];

  return (
    <>
      {STEP_LABELS.map((label, i) => (
        <motion.div
          key={label}
          className="relative"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: i <= activeStep ? 1 : 0.35, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
        >
          {i > 0 && (
            <div className="absolute -top-3 left-[19px] h-3 border-l-2 border-dashed border-border" />
          )}
          <div
            className={`rounded-lg border p-3 flex items-center gap-3 transition-all duration-300 ${
              i === activeStep
                ? "border-sozo-blue/40 shadow-sm shadow-sozo-blue/10"
                : "border-border"
            }`}
          >
            <div
              className={`size-9 rounded-lg transition-colors duration-300 ${
                i <= activeStep ? "bg-sozo-blue/10" : "bg-muted"
              } ${i <= activeStep && i !== activeStep ? "" : "animate-pulse"}`}
            />
            <div className="flex-1">
              <p className="text-xs font-medium text-muted-foreground">
                {label}
              </p>
            </div>
            {i === activeStep && (
              <Loader2 className="size-4 text-sozo-blue animate-spin" />
            )}
          </div>
        </motion.div>
      ))}
    </>
  );
}
