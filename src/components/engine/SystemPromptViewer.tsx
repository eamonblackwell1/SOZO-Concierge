"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown, ChevronRight, Copy, Check } from "lucide-react";

interface SystemPromptViewerProps {
  prompt: string;
  modelId: string;
}

export function SystemPromptViewer({ prompt, modelId }: SystemPromptViewerProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const lineCount = prompt.split("\n").length;
  const charCount = prompt.length;
  const tokenEstimate = Math.round(charCount / 4);

  async function handleCopy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="size-9 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
          <FileText className="size-4 text-violet-500" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">System Prompt</span>
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
              {modelId}
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            {lineCount} lines · ~{tokenEstimate.toLocaleString()} tokens · {(charCount / 1000).toFixed(1)}k chars
          </p>
        </div>

        <div className="text-muted-foreground">
          {expanded ? (
            <ChevronDown className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t px-4 pb-4">
              {/* Action bar */}
              <div className="flex items-center justify-end py-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="size-3 text-emerald-500" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Prompt content */}
              <pre className="rounded-md bg-muted/50 border p-4 text-[11px] leading-relaxed font-mono text-foreground/80 overflow-x-auto max-h-[500px] overflow-y-auto whitespace-pre-wrap break-words">
                {prompt}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
