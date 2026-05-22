"use client";

import { motion } from "framer-motion";
import { Star, Award, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { stylists, type Stylist } from "@/data/stylists";
import { cn } from "@/lib/utils";

export function StylistMiniCard({
  stylist,
  onClick,
  isSelected,
}: {
  stylist: Stylist;
  onClick?: () => void;
  isSelected?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex gap-3 p-3 rounded-xl bg-card ring-1 text-left transition-all w-full",
        isSelected
          ? "ring-sozo-blue/40 bg-sozo-blue/5"
          : "ring-foreground/10 hover:ring-foreground/20"
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-sozo-cream shrink-0 flex items-center justify-center text-lg font-serif text-muted-foreground overflow-hidden">
        {stylist.photo_url ? (
          <img src={stylist.photo_url} alt={stylist.name} className="w-full h-full object-cover" />
        ) : (
          stylist.name.charAt(0)
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h4 className="font-medium text-sm truncate">{stylist.name}</h4>
          {stylist.is_sozo_master && (
            <Award className="h-3 w-3 text-sozo-gold shrink-0" />
          )}
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <MapPin className="h-3 w-3 text-muted-foreground shrink-0" />
          <p className="text-xs text-muted-foreground truncate">
            {stylist.salon} · {stylist.neighborhood}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-0.5">
            <Star className="h-3 w-3 fill-sozo-gold text-sozo-gold" />
            <span className="text-xs font-medium">
              {stylist.google_review_avg_english_only}
            </span>
          </div>
          <span className="text-[10px] text-muted-foreground">
            {stylist.international_guest_count_6mo} intl guests
          </span>
        </div>
      </div>
    </button>
  );
}

export function StylistMiniRow({
  stylistIds,
  onSelect,
}: {
  stylistIds: string[];
  onSelect?: (stylist: Stylist) => void;
}) {
  const matched = stylistIds
    .map((id) => stylists.find((s) => s.stylist_id === id))
    .filter((s): s is Stylist => s !== undefined);

  if (matched.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="grid gap-2"
      style={{
        gridTemplateColumns:
          matched.length === 1 ? "1fr" : "repeat(auto-fill, minmax(220px, 1fr))",
      }}
    >
      {matched.map((stylist, i) => (
        <motion.div
          key={stylist.stylist_id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: i * 0.08 }}
        >
          <StylistMiniCard
            stylist={stylist}
            onClick={() => onSelect?.(stylist)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
