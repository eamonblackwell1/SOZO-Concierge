"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Globe,
  MessageSquare,
  Users,
  Building2,
  Hotel,
  Languages,
  Heart,
  MapPin,
  Laptop,
  Handshake,
  Check,
  Circle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Deliverable {
  label: string;
  icon: React.ElementType;
  done?: boolean;
}

interface Phase {
  id: string;
  title: string;
  subtitle: string;
  timeline: string;
  status: "active" | "upcoming" | "future";
  owner: string;
  deliverables: Deliverable[];
  metric?: string;
}

const phases: Phase[] = [
  {
    id: "pilot",
    title: "Pilot",
    subtitle: "Prove the model works",
    timeline: "Months 1–3",
    status: "active",
    owner: "SOZO Alliance Tech",
    metric: "Target: 200 bookings / month",
    deliverables: [
      { label: "SOZO Concierge MVP — text chat + voice agent", icon: MessageSquare, done: true },
      { label: "11 partner salons onboarded in central Tokyo", icon: Building2, done: true },
      { label: "Airbnb host distribution channel (QR + welcome guide)", icon: MapPin, done: false },
      { label: "Salon dashboard with real-time booking data", icon: Laptop, done: false },
      { label: "SOZO Master badge program launched", icon: Heart, done: false },
    ],
  },
  {
    id: "growth",
    title: "Growth",
    subtitle: "Scale across Tokyo",
    timeline: "Months 4–8",
    status: "upcoming",
    owner: "SOZO Alliance + BD Team",
    metric: "Target: 1,000 bookings / month",
    deliverables: [
      { label: "25+ salon partners across central Tokyo neighborhoods", icon: Building2 },
      { label: "Multi-language support — Korean, Mandarin, French", icon: Languages },
      { label: "Loyalty program + return-trip rebooking automation", icon: Heart },
      { label: "Hotel concierge desk integration (3 partners)", icon: Hotel },
      { label: "Stylist acquisition flywheel — referral incentives", icon: Users },
    ],
  },
  {
    id: "expansion",
    title: "Expansion",
    subtitle: "National + white-label",
    timeline: "Months 9–18",
    status: "future",
    owner: "Full Team + Strategic Partners",
    metric: "Target: ¥50M+ ARR",
    deliverables: [
      { label: "Osaka, Kyoto, Fukuoka city launch", icon: Globe },
      { label: "Full-production salon SaaS dashboard", icon: Laptop },
      { label: "White-label option for hotel chains & travel platforms", icon: Handshake },
      { label: "Enterprise API for OTA integration", icon: Rocket },
      { label: "Series A readiness — unit economics proven", icon: TrendingUp },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  const isActive = phase.status === "active";
  const isFuture = phase.status === "future";

  return (
    <motion.div
      className="relative pl-8 sm:pl-12 pb-12 last:pb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline connector line */}
      {index < phases.length - 1 && (
        <div
          className={`absolute left-[15px] sm:left-[23px] top-6 bottom-0 w-px ${
            isActive ? "bg-sozo-blue" : "bg-border"
          }`}
        />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-2 top-1">
        {isActive ? (
          <div className="relative">
            <div className="h-[14px] w-[14px] rounded-full bg-sozo-blue" />
            <div className="absolute inset-0 h-[14px] w-[14px] rounded-full bg-sozo-blue animate-ping opacity-30" />
          </div>
        ) : (
          <div
            className={`h-[14px] w-[14px] rounded-full border-2 ${
              isFuture
                ? "border-muted-foreground/30 bg-background"
                : "border-sozo-blue/50 bg-sozo-blue/10"
            }`}
          />
        )}
      </div>

      {/* Phase card */}
      <Card
        className={`overflow-visible ${
          isActive
            ? "ring-2 ring-sozo-blue/30 shadow-sm"
            : isFuture
            ? "opacity-75"
            : ""
        }`}
      >
        <CardContent className="px-5 py-5 sm:px-6 sm:py-6 space-y-4">
          {/* Phase header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl tracking-tight">
                  {phase.title}
                </h3>
                {isActive && (
                  <Badge className="bg-sozo-blue/10 text-sozo-blue border-sozo-blue/20 text-[10px]">
                    In Progress
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">
                {phase.timeline}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Users className="h-3 w-3" />
                {phase.owner}
              </Badge>
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-2">
            {phase.deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 bg-muted/40"
                >
                  <div className="h-7 w-7 rounded-md bg-background ring-1 ring-foreground/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-snug">{item.label}</p>
                  </div>
                  {item.done !== undefined && (
                    <div className="shrink-0 mt-0.5">
                      {item.done ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground/40" />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Metric */}
          {phase.metric && (
            <div className="pt-2 border-t">
              <p className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                <TrendingUp className="h-3 w-3" />
                {phase.metric}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function RoadmapPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12 space-y-10">
        {/* Header */}
        <motion.div
          className="space-y-3 text-center"
          {...fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-sozo-blue/10 text-sozo-blue rounded-full px-4 py-1.5 text-xs font-medium">
            <Rocket className="h-3.5 w-3.5" />
            Product Roadmap
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl tracking-tight">
            Three Phases to Scale
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From pilot with 5 salons to a national platform — each phase
            unlocks the next through proven unit economics and network effects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.id} phase={phase} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="text-center pt-4 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Timelines are indicative. Each phase gate requires hitting the prior
            phase&apos;s booking and revenue targets before scaling investment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
