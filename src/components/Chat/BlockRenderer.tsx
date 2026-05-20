"use client";

import { motion } from "framer-motion";
import type { Block } from "@/lib/blocks";
import type { Stylist } from "@/data/stylists";
import { stylists } from "@/data/stylists";
import { ImageRow } from "./ImageRow";
import { StylistMiniRow } from "./StylistMini";
import { SuggestionChips } from "./SuggestionChips";
import { StylistCard } from "@/components/StylistCard";

interface BlockRendererProps {
  blocks: Block[];
  isStreaming?: boolean;
  streamingText?: string;
  onSuggestionClick: (chip: string) => void;
  onStylistSelect?: (stylist: Stylist) => void;
  onStylistBook?: (stylist: Stylist) => void;
}

function TextBlock({
  content,
  isStreaming,
}: {
  content: string;
  isStreaming?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="text-sm leading-relaxed"
    >
      <p className="whitespace-pre-wrap">
        {content}
        {isStreaming && (
          <span className="inline-block w-1.5 h-4 bg-sozo-blue/60 animate-pulse ml-0.5 -mb-0.5 rounded-sm" />
        )}
      </p>
    </motion.div>
  );
}

function StylistCardBlock({
  stylistId,
  reasoning,
  keyFactors,
  onBook,
}: {
  stylistId: string;
  reasoning: string;
  keyFactors: string[];
  onBook?: (stylist: Stylist) => void;
}) {
  const stylist = stylists.find((s) => s.stylist_id === stylistId);
  if (!stylist) return null;

  return (
    <div className="max-w-sm">
      <StylistCard
        stylist={stylist}
        reasoning={reasoning}
        keyFactors={keyFactors}
        onBook={() => onBook?.(stylist)}
      />
    </div>
  );
}

export function BlockRenderer({
  blocks,
  isStreaming,
  streamingText,
  onSuggestionClick,
  onStylistSelect,
  onStylistBook,
}: BlockRendererProps) {
  if (isStreaming && blocks.length === 0 && streamingText) {
    return (
      <div className="space-y-3">
        <TextBlock content={streamingText} isStreaming />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {blocks.map((block, i) => {
        const isLast = i === blocks.length - 1;

        switch (block.type) {
          case "text":
            return (
              <TextBlock
                key={`text-${i}`}
                content={block.content}
                isStreaming={isStreaming && isLast}
              />
            );

          case "image-row":
            return <ImageRow key={`img-${i}`} imageIds={block.image_ids} />;

          case "stylist-mini":
            return (
              <StylistMiniRow
                key={`mini-${i}`}
                stylistIds={block.stylist_ids}
                onSelect={onStylistSelect}
              />
            );

          case "stylist-card":
            return (
              <StylistCardBlock
                key={`card-${i}`}
                stylistId={block.stylist_id}
                reasoning={block.reasoning}
                keyFactors={block.key_factors}
                onBook={onStylistBook}
              />
            );

          case "suggestions":
            return (
              <SuggestionChips
                key={`suggest-${i}`}
                chips={block.chips}
                onSelect={onSuggestionClick}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
