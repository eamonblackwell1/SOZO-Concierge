"use client";

import { motion } from "framer-motion";

export function SuggestionChips({
  chips,
  onSelect,
}: {
  chips: string[];
  onSelect: (chip: string) => void;
}) {
  if (chips.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex gap-2 flex-wrap"
    >
      {chips.map((chip, i) => (
        <motion.button
          key={chip}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15, delay: 0.15 + i * 0.05 }}
          onClick={() => onSelect(chip)}
          className="px-3 py-1.5 rounded-full border border-sozo-blue/20 bg-sozo-blue/5 text-sozo-blue text-xs font-medium hover:bg-sozo-blue/10 hover:border-sozo-blue/30 transition-colors whitespace-nowrap"
        >
          {chip}
        </motion.button>
      ))}
    </motion.div>
  );
}
