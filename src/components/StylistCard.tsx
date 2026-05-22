"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  Award,
  Globe,
  MapPin,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Stylist } from "@/data/stylists";
import { salons } from "@/data/stylists";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";

function getSalonAddress(salonId: string): string | undefined {
  return salons.find((s) => s.id === salonId)?.address;
}

function getEnglishLevel(score: number): { label: string; color: string } {
  if (score >= 9) return { label: "Native-level", color: "bg-green-100 text-green-800 border-green-200" };
  if (score >= 7) return { label: "Fluent", color: "bg-emerald-100 text-emerald-800 border-emerald-200" };
  if (score >= 5) return { label: "Conversational", color: "bg-amber-100 text-amber-800 border-amber-200" };
  return { label: "Basic", color: "bg-orange-100 text-orange-800 border-orange-200" };
}

const FLAG_MAP: Record<string, string> = {
  US: "🇺🇸",
  USA: "🇺🇸",
  UK: "🇬🇧",
  Australia: "🇦🇺",
  Canada: "🇨🇦",
  France: "🇫🇷",
  Germany: "🇩🇪",
  Singapore: "🇸🇬",
  Korea: "🇰🇷",
  "Hong Kong": "🇭🇰",
  Taiwan: "🇹🇼",
  Thailand: "🇹🇭",
  Brazil: "🇧🇷",
  Netherlands: "🇳🇱",
  Sweden: "🇸🇪",
  Italy: "🇮🇹",
  Spain: "🇪🇸",
  Mexico: "🇲🇽",
  India: "🇮🇳",
  Philippines: "🇵🇭",
  Indonesia: "🇮🇩",
  China: "🇨🇳",
  "New Zealand": "🇳🇿",
};

function getRandomFlag(index: number): string {
  const keys = Object.keys(FLAG_MAP);
  return FLAG_MAP[keys[index % keys.length]];
}

function PortfolioCarousel({ urls, name, photoUrl }: { urls: string[]; name: string; photoUrl?: string }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative aspect-[4/5] bg-muted overflow-hidden group">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10 pointer-events-none"
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-sozo-cream flex items-center justify-center"
        >
          {photoUrl ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
              <img
                src={photoUrl}
                alt={name}
                className="w-28 h-28 rounded-full object-cover ring-4 ring-white/80 shadow-lg"
              />
              <p className="text-sm font-medium text-muted-foreground">{name}</p>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center text-2xl font-serif">
                {name.charAt(0)}
              </div>
              <p className="text-xs">{name}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {urls.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((p) => (p === 0 ? urls.length - 1 : p - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setCurrent((p) => (p === urls.length - 1 ? 0 : p + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1">
            {urls.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all",
                  i === current ? "bg-white w-3" : "bg-white/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: string;
  index: number;
}) {
  return (
    <div className="flex gap-3 py-3 first:pt-0 last:pb-0">
      <div className="shrink-0 mt-0.5">
        <span className="text-lg" role="img" aria-label="flag">
          {getRandomFlag(index)}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed italic">
        &ldquo;{review}&rdquo;
      </p>
    </div>
  );
}

export function StylistCard({
  stylist,
  reasoning,
  keyFactors,
  onBook,
  compact = false,
}: {
  stylist: Stylist;
  reasoning?: string;
  keyFactors?: string[];
  onBook?: () => void;
  compact?: boolean;
}) {
  const priceFormatted = `¥${stylist.price_range_yen[0].toLocaleString()}–¥${stylist.price_range_yen[1].toLocaleString()}`;
  const salonAddress = getSalonAddress(stylist.salon_id);
  const englishLevel = getEnglishLevel(stylist.salon_english_score);

  if (compact) {
    return (
      <div className="flex gap-4 p-4 rounded-xl bg-card ring-1 ring-foreground/10">
        <div className="w-16 h-16 rounded-lg bg-sozo-cream shrink-0 flex items-center justify-center text-xl font-serif text-muted-foreground overflow-hidden">
          {stylist.photo_url ? (
            <img src={stylist.photo_url} alt={stylist.name} className="w-full h-full object-cover" />
          ) : (
            stylist.name.charAt(0)
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-sm truncate">{stylist.name}</h3>
            {stylist.is_sozo_master && (
              <Badge className="bg-sozo-gold/10 text-sozo-gold border-sozo-gold/20 h-4 text-[10px]">
                <Award className="h-2.5 w-2.5" /> Master
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground truncate">
            {stylist.salon} · {stylist.neighborhood}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-0.5">
              <Star className="h-3 w-3 fill-sozo-gold text-sozo-gold" />
              <span className="text-xs font-medium">{stylist.google_review_avg_english_only}</span>
            </div>
            <span className="text-xs text-muted-foreground">{priceFormatted}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl bg-card ring-1 ring-foreground/10 overflow-hidden"
    >
      <PortfolioCarousel
        urls={stylist.portfolio_urls}
        name={stylist.name}
        photoUrl={stylist.photo_url}
      />

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-xl">{stylist.name}</h2>
              {stylist.is_sozo_master && (
                <Badge className="bg-sozo-gold/10 text-sozo-gold border-sozo-gold/20">
                  <Award className="h-3 w-3" /> Master
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {stylist.name_ja} · {stylist.salon}
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0 bg-muted rounded-lg px-2 py-1">
            <Star className="h-3.5 w-3.5 fill-sozo-gold text-sozo-gold" />
            <span className="text-sm font-semibold">{stylist.google_review_avg_english_only}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <Badge className={cn("gap-1 border", englishLevel.color)}>
            <MessageSquare className="h-3 w-3" />
            {englishLevel.label} English
          </Badge>
          <Badge variant="outline" className="gap-1">
            <Globe className="h-3 w-3" />
            {stylist.languages.join(", ")}
          </Badge>
          <Badge variant="outline" className="gap-1">
            <MapPin className="h-3 w-3" />
            {stylist.neighborhood}
          </Badge>
          <Badge variant="outline">{priceFormatted}</Badge>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
          <span className="flex items-center gap-1">
            <Globe className="h-3 w-3 text-sozo-blue" />
            <strong className="text-foreground">{stylist.international_guest_count_6mo}</strong> foreign guests in last 6 mo
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {stylist.english_summary}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5">
            Specialties
          </p>
          <p className="text-sm">{stylist.specialties}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5">
            Portfolio
          </p>
          <p className="text-sm text-muted-foreground">{stylist.portfolio_themes}</p>
        </div>

        {reasoning && (
          <div className="border-l-2 border-sozo-blue pl-3 py-1">
            <p className="text-xs font-medium uppercase tracking-wide text-sozo-blue mb-1">
              Why this stylist
            </p>
            <p className="text-sm leading-relaxed">{reasoning}</p>
          </div>
        )}

        {keyFactors && keyFactors.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {keyFactors.map((factor) => (
              <Badge key={factor} variant="secondary" className="text-xs">
                {factor}
              </Badge>
            ))}
          </div>
        )}

        {stylist.review_highlights_english.length > 0 && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
              Guest Reviews
            </p>
            <div className="divide-y">
              {stylist.review_highlights_english.slice(0, 3).map((review, i) => (
                <ReviewCard key={i} review={review} index={i} />
              ))}
            </div>
          </div>
        )}

        {salonAddress && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
              Salon Location
            </p>
            <GoogleMapEmbed address={salonAddress} height={160} />
            <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {salonAddress}
            </p>
          </div>
        )}

        {onBook && (
          <Button
            onClick={onBook}
            className="w-full h-10 bg-sozo-blue hover:bg-sozo-blue-hover text-white gap-2"
          >
            <Calendar className="h-4 w-4" />
            Book {stylist.name.split(" ")[0]}
          </Button>
        )}
      </div>
    </motion.div>
  );
}
