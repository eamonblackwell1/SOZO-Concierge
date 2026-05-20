"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { StylistCard } from "@/components/StylistCard";
import { StylistMiniCard } from "./StylistMini";
import type { Stylist } from "@/data/stylists";

export type ContextPaneState =
  | { mode: "empty" }
  | { mode: "shortlist"; stylists: Stylist[] }
  | {
      mode: "focused";
      stylist: Stylist;
      reasoning?: string;
      keyFactors?: string[];
    };

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <div className="w-16 h-16 rounded-2xl bg-sozo-blue/10 flex items-center justify-center mb-5">
        <Sparkles className="h-7 w-7 text-sozo-blue" />
      </div>
      <h3 className="font-serif text-lg mb-2">SOZO Concierge</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
        As we chat, your stylist shortlist and recommendations will appear here.
      </p>
    </div>
  );
}

function ShortlistPane({
  shortlist,
  onSelect,
}: {
  shortlist: Stylist[];
  onSelect: (stylist: Stylist) => void;
}) {
  return (
    <div className="p-4 space-y-3">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Considering
        </p>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          {shortlist.length} stylist{shortlist.length !== 1 ? "s" : ""} match
          your criteria
        </p>
      </div>
      <div className="space-y-2">
        {shortlist.map((stylist) => (
          <StylistMiniCard
            key={stylist.stylist_id}
            stylist={stylist}
            onClick={() => onSelect(stylist)}
          />
        ))}
      </div>
    </div>
  );
}

function FocusedPane({
  stylist,
  reasoning,
  keyFactors,
  onBook,
}: {
  stylist: Stylist;
  reasoning?: string;
  keyFactors?: string[];
  onBook: (stylist: Stylist) => void;
}) {
  return (
    <div className="p-4">
      <StylistCard
        stylist={stylist}
        reasoning={reasoning}
        keyFactors={keyFactors}
        onBook={() => onBook(stylist)}
      />
    </div>
  );
}

export function ContextPane({
  state,
  onStylistSelect,
  onBook,
}: {
  state: ContextPaneState;
  onStylistSelect: (stylist: Stylist) => void;
  onBook: (stylist: Stylist) => void;
}) {
  return (
    <div className="h-full overflow-y-auto border-l bg-background">
      <AnimatePresence mode="wait">
        {state.mode === "empty" && (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <EmptyState />
          </motion.div>
        )}

        {state.mode === "shortlist" && (
          <motion.div
            key="shortlist"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ShortlistPane
              shortlist={state.stylists}
              onSelect={onStylistSelect}
            />
          </motion.div>
        )}

        {state.mode === "focused" && (
          <motion.div
            key={`focused-${state.stylist.stylist_id}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
          >
            <FocusedPane
              stylist={state.stylist}
              reasoning={state.reasoning}
              keyFactors={state.keyFactors}
              onBook={onBook}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
