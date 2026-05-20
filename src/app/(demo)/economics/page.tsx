"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Calculator,
  Building2,
  Megaphone,
  Award,
  Users,
  GraduationCap,
  CheckCircle2,
  Search,
  Camera,
  Sparkles,
  Globe,
  ArrowDown,
} from "lucide-react";
import { ROASSliders } from "@/components/ROASSliders";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const sozoPoints = [
  { icon: Building2, text: "Recruit & onboard partner salons across Tokyo" },
  { icon: Award, text: "SOZO Master certification & quality standards" },
  { icon: GraduationCap, text: "English-readiness training programme" },
  { icon: Users, text: "Ongoing stylist relationship management" },
];

const aajpPoints = [
  { icon: Search, text: "Google Ads — high-intent search campaigns" },
  { icon: Camera, text: "Meta / Instagram — visual storytelling & retargeting" },
  { icon: Globe, text: "SEO strategy — organic ranking for tourist queries" },
  { icon: Sparkles, text: "AEO (AI Engine Optimization) — getting recommended by ChatGPT, Perplexity, Gemini" },
  { icon: Megaphone, text: "Top-of-funnel awareness across Western channels" },
];

export default function GTMStrategyPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12 space-y-10">
        {/* Header */}
        <motion.div
          className="space-y-3 text-center"
          {...fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-sozo-blue/10 text-sozo-blue rounded-full px-4 py-1.5 text-xs font-medium">
            <Rocket className="h-3.5 w-3.5" />
            Demand + Supply
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl tracking-tight">
            Go-To-Market Strategy
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Two organisations, one platform. SOZO builds the supply of
            world-class salons. AAJP drives the demand from Western travellers.
            The AI concierge connects them.
          </p>
        </motion.div>

        {/* Partnership split */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* SOZO — Supply */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl ring-1 ring-foreground/5 bg-card p-5 sm:p-6 space-y-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-sozo-cream flex items-center justify-center">
                  <span className="font-serif text-sm font-semibold text-sozo-charcoal">S</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg">SOZO Alliance</h3>
                  <p className="text-xs text-muted-foreground">Supply Side</p>
                </div>
              </div>
            </div>
            <div className="space-y-2.5">
              {sozoPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.text} className="flex items-start gap-2.5">
                    <Icon className="h-4 w-4 text-sozo-gold shrink-0 mt-0.5" />
                    <p className="text-sm leading-snug">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* AAJP — Demand */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl ring-1 ring-foreground/5 bg-card p-5 sm:p-6 space-y-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-sozo-blue/10 flex items-center justify-center">
                  <Megaphone className="h-4 w-4 text-sozo-blue" />
                </div>
                <div>
                  <h3 className="font-serif text-lg">AAJP</h3>
                  <p className="text-xs text-muted-foreground">Demand Side</p>
                </div>
              </div>
            </div>
            <div className="space-y-2.5">
              {aajpPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.text} className="flex items-start gap-2.5">
                    <Icon className="h-4 w-4 text-sozo-blue shrink-0 mt-0.5" />
                    <p className="text-sm leading-snug">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Connector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center space-y-2"
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground mx-auto" />
          <p className="text-sm text-muted-foreground font-medium max-w-md mx-auto">
            SOZO fills the supply. AAJP fills the demand.
            <br />
            The AI concierge connects them.
          </p>
        </motion.div>

        {/* ROAS Model */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="rounded-xl ring-1 ring-foreground/5 bg-card p-5 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="h-5 w-5 text-sozo-blue" />
              <h2 className="font-serif text-xl">ROAS Model</h2>
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              When we turn on the demand engine, here&apos;s what happens.
            </p>
            <ROASSliders />
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="text-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            This is a simplified acquisition-only model. Real-world performance
            includes organic traffic, repeat bookings, and seasonal peaks that
            compound returns beyond what&apos;s shown here.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
