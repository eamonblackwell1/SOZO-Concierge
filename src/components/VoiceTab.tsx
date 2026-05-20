"use client";

import { motion } from "framer-motion";
import {
  Mic,
  QrCode,
  MessageSquare,
  UserCheck,
  ArrowRight,
  Check,
  MapPin,
  Star,
  Award,
  Calendar,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SMSMockup } from "@/components/SMSMockup";
import { stylists, salons } from "@/data/stylists";

const steps = [
  {
    icon: QrCode,
    title: "Scan or Tap",
    description:
      "Guest scans a QR code at their Airbnb or taps a link from their host's welcome message.",
  },
  {
    icon: MessageSquare,
    title: "Speak Naturally",
    description:
      '"I need a balayage specialist who speaks English, available Saturday in Shibuya."',
  },
  {
    icon: UserCheck,
    title: "Get Matched",
    description:
      "Personalized stylist recommendation with reviews, portfolio, and one-tap booking.",
  },
];

function DemoStylistPreview() {
  const stylist =
    stylists.find((s) => s.stylist_id === "mori-takeshi") ?? stylists[0];
  const salonAddress = salons.find((s) => s.id === stylist.salon_id)?.address;

  return (
    <div className="rounded-xl ring-1 ring-foreground/10 bg-card overflow-hidden max-w-sm mx-auto">
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Check className="h-3.5 w-3.5 text-green-600" />
          <span>Post-call match result</span>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-full bg-sozo-cream flex items-center justify-center text-base font-serif shrink-0">
            {stylist.name.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h4 className="font-medium text-sm">{stylist.name}</h4>
              {stylist.is_sozo_master && (
                <Badge className="bg-sozo-gold/10 text-sozo-gold border-sozo-gold/20 h-4 text-[9px]">
                  <Award className="h-2.5 w-2.5" /> Master
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {stylist.salon} · {stylist.neighborhood}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-0.5">
                <Star className="h-3 w-3 fill-sozo-gold text-sozo-gold" />
                <span className="text-xs font-medium">
                  {stylist.google_review_avg_english_only}
                </span>
              </div>
              {salonAddress && (
                <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                  <MapPin className="h-2.5 w-2.5" />
                  {stylist.neighborhood}
                </span>
              )}
              {stylist.schedule_next_14_days.some(
                (d) => d.slots.length > 0
              ) && (
                <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                  <Calendar className="h-2.5 w-2.5" />
                  Available
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VoiceTab() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-sozo-blue/10 text-sozo-blue rounded-full px-4 py-1.5 text-xs font-medium">
            <Mic className="h-3.5 w-3.5" />
            Voice-First Experience
          </div>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
            And It Works by Voice, Too
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Same AI brain, spoken naturally. No typing, no app download — just
            tap and talk on any data connection.
          </p>
          <Button
            asChild
            className="bg-sozo-blue hover:bg-sozo-blue-hover text-white gap-2 rounded-xl mt-2"
          >
            <a href="/call">
              <Mic className="h-4 w-4" />
              Try It Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Steps */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-center">
            Three Steps to Your Stylist
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                  className="bg-card rounded-xl p-5 ring-1 ring-foreground/5"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-sozo-blue/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-sozo-blue" />
                    </div>
                    <span className="text-xs font-semibold text-sozo-blue bg-sozo-blue/10 rounded-full h-5 w-5 flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h4 className="font-medium text-sm">{step.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SMS + Post-call side by side */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-sozo-blue" />
              <h3 className="font-serif text-lg">SMS Handoff</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Airbnb hosts add a link or QR code to their welcome guide. Guests
              tap — no app, no login, no friction.
            </p>
            <SMSMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-sozo-blue" />
              <h3 className="font-serif text-lg">After the Call</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              When the conversation ends, the guest sees their matched stylist
              — complete with reviews, portfolio, and available slots.
            </p>
            <DemoStylistPreview />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
