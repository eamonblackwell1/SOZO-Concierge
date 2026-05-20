"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Star,
  Crown,
  Globe,
  MapPin,
  Users,
  Calendar,
  Palette,
} from "lucide-react";
import type { Stylist } from "@/data/stylists";

interface StylistDetailModalProps {
  stylist: Stylist | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </dt>
      <dd className="text-sm">{children}</dd>
    </div>
  );
}

function FormattedView({ stylist }: { stylist: Stylist }) {
  const nextAvailable = stylist.schedule_next_14_days.find(
    (d) => d.slots.length > 0
  );

  return (
    <ScrollArea className="h-[60vh]">
      <div className="space-y-6 pr-4">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="size-16 rounded-lg bg-muted overflow-hidden shrink-0">
            <img
              src={stylist.photo_url}
              alt={stylist.name}
              className="size-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg font-medium">{stylist.name}</h3>
              {stylist.is_sozo_master && (
                <Crown className="size-4 text-sozo-gold" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">{stylist.name_ja}</p>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="size-3" />
                {stylist.salon}, {stylist.neighborhood}
              </span>
              <span className="flex items-center gap-1">
                <Star className="size-3 fill-sozo-gold text-sozo-gold" />
                {stylist.google_review_avg_english_only.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Core fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="English Summary">
            {stylist.english_summary}
          </Field>

          <Field label="Specialties">
            <div className="flex flex-wrap gap-1">
              {stylist.specialties.split(", ").map((s) => (
                <Badge key={s} variant="secondary" className="text-xs">
                  {s}
                </Badge>
              ))}
            </div>
          </Field>

          <Field label="Languages">
            <div className="flex items-center gap-1.5">
              <Globe className="size-3 text-muted-foreground" />
              {stylist.languages.join(", ")}
            </div>
          </Field>

          <Field label="Personality">
            {stylist.personality_signal}
          </Field>

          <Field label="Typical Guest">
            <div className="flex items-start gap-1.5">
              <Users className="size-3 text-muted-foreground mt-0.5 shrink-0" />
              <span>{stylist.typical_guest}</span>
            </div>
          </Field>

          <Field label="Price Range">
            ¥{stylist.price_range_yen[0].toLocaleString()} – ¥
            {stylist.price_range_yen[1].toLocaleString()}
          </Field>

          <Field label="English Score">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 rounded-full bg-muted max-w-[100px]">
                <div
                  className="h-full rounded-full bg-sozo-blue"
                  style={{
                    width: `${stylist.salon_english_score * 10}%`,
                  }}
                />
              </div>
              <span className="text-xs tabular-nums">
                {stylist.salon_english_score}/10
              </span>
            </div>
          </Field>

          <Field label="Intl Guests (6mo)">
            <div className="flex items-center gap-1.5">
              <Users className="size-3 text-muted-foreground" />
              {stylist.international_guest_count_6mo} guests
            </div>
          </Field>
        </div>

        {/* Portfolio themes */}
        <Field label="Portfolio Themes">
          <div className="flex items-start gap-1.5">
            <Palette className="size-3 text-muted-foreground mt-0.5 shrink-0" />
            <span>{stylist.portfolio_themes}</span>
          </div>
        </Field>

        {/* Reviews */}
        {stylist.review_highlights_english.length > 0 && (
          <Field label="Review Highlights">
            <ul className="space-y-1.5">
              {stylist.review_highlights_english.map((review, i) => (
                <li key={i} className="text-sm text-muted-foreground italic">
                  &ldquo;{review}&rdquo;
                </li>
              ))}
            </ul>
          </Field>
        )}

        {/* Next availability */}
        {nextAvailable && (
          <Field label="Next Available">
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3 text-muted-foreground" />
              <span>
                {nextAvailable.date} &mdash;{" "}
                {nextAvailable.slots.slice(0, 3).join(", ")}
                {nextAvailable.slots.length > 3 &&
                  ` +${nextAvailable.slots.length - 3} more`}
              </span>
            </div>
          </Field>
        )}

        {/* Record metadata */}
        <div className="border-t pt-3 text-xs text-muted-foreground space-y-1">
          <p>
            <span className="font-medium">stylist_id:</span>{" "}
            <code className="font-mono">{stylist.stylist_id}</code>
          </p>
          <p>
            <span className="font-medium">salon_id:</span>{" "}
            <code className="font-mono">{stylist.salon_id}</code>
          </p>
          <p>
            <span className="font-medium">portfolio_urls:</span>{" "}
            {stylist.portfolio_urls.length} images
          </p>
          <p>
            <span className="font-medium">schedule_next_14_days:</span>{" "}
            {stylist.schedule_next_14_days.length} days tracked
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}

function JsonView({ stylist }: { stylist: Stylist }) {
  return (
    <ScrollArea className="h-[60vh]">
      <pre className="text-xs font-mono leading-relaxed text-muted-foreground whitespace-pre-wrap break-all p-3 rounded-lg bg-muted/50">
        {JSON.stringify(stylist, null, 2)}
      </pre>
    </ScrollArea>
  );
}

export function StylistDetailModal({
  stylist,
  open,
  onOpenChange,
}: StylistDetailModalProps) {
  if (!stylist) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="font-serif">Stylist Record</DialogTitle>
          <DialogDescription>
            Full data record for {stylist.name} as stored in{" "}
            <code className="font-mono text-xs">stylists.ts</code>
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="formatted" className="mt-1">
          <TabsList>
            <TabsTrigger value="formatted">Formatted</TabsTrigger>
            <TabsTrigger value="json">View as JSON</TabsTrigger>
          </TabsList>
          <TabsContent value="formatted" className="mt-3">
            <FormattedView stylist={stylist} />
          </TabsContent>
          <TabsContent value="json" className="mt-3">
            <JsonView stylist={stylist} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
