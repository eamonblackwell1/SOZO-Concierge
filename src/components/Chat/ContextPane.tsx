"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Scissors, MapPin, Search } from "lucide-react";
import { StylistCard } from "@/components/StylistCard";
import { StylistMiniCard } from "./StylistMini";
import type { Stylist } from "@/data/stylists";

export type ContextPaneState =
  | { mode: "intro" }
  | { mode: "exploring" }
  | { mode: "shortlist"; stylists: Stylist[] }
  | {
      mode: "focused";
      stylist: Stylist;
      reasoning?: string;
      keyFactors?: string[];
    };

function IntroState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-sozo-blue/20 via-sozo-cream to-sozo-gold/20 flex items-center justify-center">
          <Scissors className="h-10 w-10 text-sozo-charcoal/60" />
        </div>
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-sozo-blue flex items-center justify-center"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-3 w-3 text-white" />
        </motion.div>
      </div>

      <h3 className="font-serif text-xl mb-2">SOZO Concierge</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px] mb-6">
        Tell me about your ideal salon visit and I&apos;ll find the perfect
        English-speaking stylist in Tokyo.
      </p>

      <div className="space-y-2 w-full max-w-[240px]">
        {[
          { icon: Scissors, text: "Certified SOZO Alliance salons" },
          { icon: MapPin, text: "10 neighborhoods across Tokyo" },
          { icon: Sparkles, text: "AI-powered matching" },
        ].map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-2.5 text-xs text-muted-foreground"
          >
            <item.icon className="h-3.5 w-3.5 text-sozo-blue shrink-0" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExploringState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <div className="relative mb-6">
        <motion.div
          className="w-20 h-20 rounded-2xl bg-sozo-blue/10 flex items-center justify-center"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Search className="h-8 w-8 text-sozo-blue" />
        </motion.div>
      </div>

      <h3 className="font-serif text-lg mb-2">Finding your match...</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px] mb-6">
        Searching across certified salons to find stylists that match
        your needs.
      </p>

      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-sozo-blue/40"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
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
          Your Shortlist
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
    <div className="h-full overflow-y-auto border-l bg-gradient-to-b from-sozo-cream/30 via-background to-background">
      <AnimatePresence mode="wait">
        {state.mode === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <IntroState />
          </motion.div>
        )}

        {state.mode === "exploring" && (
          <motion.div
            key="exploring"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <ExploringState />
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
