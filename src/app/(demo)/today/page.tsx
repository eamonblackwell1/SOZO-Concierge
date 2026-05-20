"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  heroQuote,
  categories,
  journeySteps,
  stats,
} from "@/data/frustration";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function TodaysRealityPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-background">
      {/* ── Hero Quote ── */}
      <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-6"
          {...fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-1.5 text-xs font-medium">
            <AlertTriangle className="h-3.5 w-3.5" />
            The Problem
          </div>

          <div className="relative">
            <Quote className="h-8 w-8 text-muted-foreground/20 mx-auto mb-4" />
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-tight text-foreground">
              &ldquo;{heroQuote.text}&rdquo;
            </blockquote>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline" className="text-xs">
              {heroQuote.source}
            </Badge>
            <span>—</span>
            <span className="text-xs">{heroQuote.attribution}</span>
          </div>
        </motion.div>
      </section>

      {/* ── Frustration Categories ── */}
      <section className="px-4 py-12 md:py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
              Four Walls of Frustration
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Every foreign visitor who wants a salon experience in Tokyo hits
              the same barriers — in the same order.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="px-5 py-5 sm:px-6 sm:py-6 space-y-4">
                    {/* Category header */}
                    <div className="flex items-start gap-3">
                      <span className="text-2xl" role="img" aria-label={category.title}>
                        {category.icon}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Quotes */}
                    <div className="space-y-3 pt-2 border-t">
                      {category.quotes.map((quote, i) => (
                        <div
                          key={i}
                          className="rounded-lg bg-muted/60 px-4 py-3 space-y-1.5"
                        >
                          <p className="text-sm leading-relaxed italic text-foreground/90">
                            &ldquo;{quote.text}&rdquo;
                          </p>
                          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                            <Badge
                              variant="outline"
                              className="h-4 text-[9px] px-1.5"
                            >
                              {quote.source}
                            </Badge>
                            <span>{quote.attribution}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Visualization ── */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
              The Typical Journey
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              What a foreign visitor actually goes through trying to get a
              haircut in Tokyo.
            </p>
          </motion.div>

          {/* Horizontal flow — scrollable on mobile */}
          <div className="overflow-x-auto scrollbar-none -mx-4 px-4">
            <div className="flex items-start gap-2 min-w-max py-2">
              {journeySteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <div
                    className={`flex flex-col items-center text-center w-28 sm:w-32 ${
                      step.outcome === "negative"
                        ? "text-destructive/80"
                        : "text-foreground"
                    }`}
                  >
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center text-xl mb-2 ${
                        step.outcome === "negative"
                          ? "bg-destructive/10"
                          : "bg-muted"
                      }`}
                    >
                      {step.emoji}
                    </div>
                    <p className="text-xs font-medium">{step.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                      {step.description}
                    </p>
                  </div>
                  {i < journeySteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 mt-4 shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-4 py-12 md:py-16 bg-sozo-charcoal text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl">
              The Opportunity in the Gap
            </h2>
            <p className="text-sm text-white/60 max-w-lg mx-auto">
              These numbers frame the scale of unmet demand.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center space-y-1"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-white/80 font-medium">
                  {stat.label}
                </p>
                {stat.sublabel && (
                  <p className="text-[10px] text-white/50">{stat.sublabel}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="px-4 py-12 md:py-16">
        <motion.div
          className="max-w-lg mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
            There Has to Be a Better Way
          </h2>
          <p className="text-sm text-muted-foreground">
            That&apos;s why we built SOZO Concierge. See it in action →
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-sozo-blue hover:text-sozo-blue-hover transition-colors"
          >
            Try the Customer Experience
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
