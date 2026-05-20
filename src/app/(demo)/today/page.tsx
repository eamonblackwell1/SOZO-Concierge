"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote, AlertTriangle, X, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  heroQuote,
  categories,
} from "@/data/frustration";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

interface VisualJourneyStep {
  label: string;
  description: string;
  outcome?: "negative" | "neutral";
  screenContent: React.ReactNode;
}

function GoogleSearchScreen() {
  return (
    <div className="space-y-2 text-[11px]">
      <div className="flex items-center gap-1.5 text-gray-400 bg-gray-50 rounded-full px-2.5 py-1">
        <Search className="h-2.5 w-2.5" />
        <span className="text-[10px]">english speaking hair salon tokyo</span>
      </div>
      <div className="space-y-2.5 pt-1">
        <div>
          <p className="text-blue-700 font-medium text-[11px]">10 Best English-Friendly Salons in Tokyo (2021)</p>
          <p className="text-green-700 text-[9px]">tokyocheapo.com › beauty</p>
          <p className="text-gray-500 text-[9px]">Last updated 4 years ago...</p>
        </div>
        <div className="opacity-50">
          <p className="text-blue-700 font-medium text-[11px]">Hair Salons for Foreigners - Tokyo Forum</p>
          <p className="text-green-700 text-[9px]">tripadvisor.com › topic</p>
          <p className="text-gray-500 text-[9px]">Thread from 2019 · 12 replies</p>
        </div>
      </div>
    </div>
  );
}

function BlogListScreen() {
  return (
    <div className="space-y-2 text-[11px]">
      <div className="bg-gray-50 rounded-md p-2">
        <p className="font-medium text-[11px] text-gray-800">Top 10 English Salons ✨</p>
        <p className="text-[9px] text-gray-400 mt-0.5">Published: March 2021</p>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-gray-400">1.</span>
          <span className="text-[10px] text-blue-600 line-through">Salon de Lien — Omotesando</span>
        </div>
        <p className="text-[9px] text-destructive ml-4">⚠ Link broken — salon closed 2023</p>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-gray-400">2.</span>
          <span className="text-[10px] text-blue-600">HAIR HAPPY — Shibuya</span>
        </div>
        <p className="text-[9px] text-gray-400 ml-4">No English booking page found</p>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-gray-400">3.</span>
          <span className="text-[10px] text-blue-600 line-through">Assort Tokyo — Harajuku</span>
        </div>
        <p className="text-[9px] text-destructive ml-4">⚠ 404 Not Found</p>
      </div>
    </div>
  );
}

function HotPepperScreen() {
  return (
    <div className="space-y-2">
      <div className="bg-[#e4007f] rounded-md px-2.5 py-1.5 flex items-center gap-1.5">
        <span className="text-white font-bold text-[11px]">Hot Pepper Beauty</span>
      </div>
      <div className="space-y-1.5 text-[10px]">
        <div className="bg-gray-50 rounded p-2 space-y-1">
          <p className="font-medium text-gray-800">ヘアカタログ</p>
          <p className="text-gray-400 text-[9px]">カット / カラー / パーマ / 縮毛矯正</p>
        </div>
        <div className="bg-gray-50 rounded p-2 space-y-1">
          <p className="font-medium text-gray-800">クーポン・メニュー</p>
          <p className="text-gray-400 text-[9px]">【新規限定】カット+カラー ¥5,500</p>
          <p className="text-gray-400 text-[9px]">【リピーター】似合わせカット ¥8,800</p>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <p className="font-medium text-gray-800">予約・空席確認</p>
          <p className="text-gray-400 text-[9px]">ログインして予約 →</p>
        </div>
      </div>
    </div>
  );
}

function InstagramDMScreen() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 pb-1.5 border-b">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <span className="text-white text-[7px] font-bold">H</span>
        </div>
        <span className="text-[11px] font-medium text-gray-800">hair_studio_tokyo</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-2.5 py-1.5 max-w-[80%]">
            <p className="text-[10px]">Hi! Do you take English-speaking clients? I&apos;d love to book a balayage 🙏</p>
          </div>
        </div>
        <p className="text-[8px] text-gray-400 text-right">Seen 2d ago</p>
        <div className="flex justify-end mt-3">
          <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-2.5 py-1.5 max-w-[80%]">
            <p className="text-[10px]">Hello? Just following up 😊</p>
          </div>
        </div>
        <p className="text-[8px] text-gray-400 text-right">Sent 1d ago · No reply</p>
      </div>
    </div>
  );
}

function WalkInScreen() {
  return (
    <div className="space-y-2 text-[10px]">
      <div className="bg-gray-100 rounded-lg p-2.5 text-center">
        <p className="text-[20px] mb-1">🚶</p>
        <p className="font-medium text-gray-800 text-[11px]">Random salon near hotel</p>
        <p className="text-[9px] text-gray-400 mt-0.5">Shibuya · No reviews checked</p>
      </div>
      <div className="space-y-1 text-[9px] text-gray-500">
        <p>• Points at photo on phone</p>
        <p>• Stylist nods uncertainly</p>
        <p>• No consultation possible</p>
        <p>• Quoted ¥22,000 at the chair</p>
      </div>
    </div>
  );
}

function DisappointedScreen() {
  return (
    <div className="space-y-2.5">
      <div className="bg-red-50 rounded-lg p-2.5 text-center space-y-1">
        <p className="text-[20px]">😔</p>
        <p className="font-medium text-gray-800 text-[11px]">Not what I asked for</p>
      </div>
      <div className="space-y-1.5 text-[9px] text-gray-500">
        <div className="flex items-start gap-1.5">
          <X className="h-2.5 w-2.5 text-destructive shrink-0 mt-0.5" />
          <span>Wrong color — &quot;blonde&quot; interpreted differently</span>
        </div>
        <div className="flex items-start gap-1.5">
          <X className="h-2.5 w-2.5 text-destructive shrink-0 mt-0.5" />
          <span>Surprise ¥28,000 bill</span>
        </div>
        <div className="flex items-start gap-1.5">
          <X className="h-2.5 w-2.5 text-destructive shrink-0 mt-0.5" />
          <span>No way to explain or fix it</span>
        </div>
        <div className="flex items-start gap-1.5">
          <X className="h-2.5 w-2.5 text-destructive shrink-0 mt-0.5" />
          <span>Leaves a bad review, tells friends</span>
        </div>
      </div>
    </div>
  );
}

const visualJourneySteps: VisualJourneyStep[] = [
  {
    label: "Google Search",
    description: "Outdated blog posts from 2019–2021",
    screenContent: <GoogleSearchScreen />,
  },
  {
    label: "Outdated Lists",
    description: "Broken links, closed salons",
    outcome: "neutral",
    screenContent: <BlogListScreen />,
  },
  {
    label: "Hot Pepper Beauty",
    description: "Entirely in Japanese — gives up",
    outcome: "negative",
    screenContent: <HotPepperScreen />,
  },
  {
    label: "Instagram DM",
    description: "No reply or 'Japanese only'",
    outcome: "negative",
    screenContent: <InstagramDMScreen />,
  },
  {
    label: "Walk-in",
    description: "Random salon, no research",
    outcome: "neutral",
    screenContent: <WalkInScreen />,
  },
  {
    label: "Disappointed",
    description: "Wrong style, surprise bill, no recourse",
    outcome: "negative",
    screenContent: <DisappointedScreen />,
  },
];

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

                    {/* Hot Pepper visual for booking category */}
                    {category.id === "booking" && (
                      <div className="rounded-lg bg-white ring-1 ring-foreground/5 overflow-hidden">
                        <div className="bg-[#e4007f] px-3 py-1.5 flex items-center justify-between">
                          <span className="text-white font-bold text-[11px]">Hot Pepper Beauty</span>
                          <span className="text-white/60 text-[9px]">ホットペッパービューティー</span>
                        </div>
                        <div className="p-2.5 space-y-1.5 text-[10px]">
                          <div className="flex gap-2">
                            <div className="flex-1 bg-gray-50 rounded p-1.5">
                              <p className="font-medium text-gray-700">エリア</p>
                              <p className="text-[9px] text-gray-400">渋谷・恵比寿・代官山</p>
                            </div>
                            <div className="flex-1 bg-gray-50 rounded p-1.5">
                              <p className="font-medium text-gray-700">メニュー</p>
                              <p className="text-[9px] text-gray-400">カット / カラー / パーマ</p>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded p-1.5">
                            <p className="font-medium text-gray-700">こだわり条件</p>
                            <p className="text-[9px] text-gray-400">駐車場あり / カード可 / 朝10時前 / 21時以降...</p>
                          </div>
                          <p className="text-[9px] text-destructive font-medium text-center pt-1">
                            No English option anywhere on the page
                          </p>
                        </div>
                      </div>
                    )}

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
        <div className="max-w-5xl mx-auto space-y-8">
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {visualJourneySteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="space-y-2"
              >
                {/* Step label */}
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shrink-0 ${
                    step.outcome === "negative"
                      ? "bg-destructive/10 text-destructive"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {i + 1}
                  </span>
                  <span className="text-xs font-medium">{step.label}</span>
                </div>

                {/* Phone frame mock */}
                <div className={`rounded-2xl ring-1 overflow-hidden ${
                  step.outcome === "negative"
                    ? "ring-destructive/20"
                    : "ring-foreground/5"
                }`}>
                  {/* Phone status bar */}
                  <div className="bg-gray-900 px-3 py-1.5 flex items-center justify-between">
                    <span className="text-[9px] text-white/60">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3.5 h-1.5 rounded-sm bg-white/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                  </div>
                  {/* Screen content */}
                  <div className="bg-white p-3 min-h-[120px]">
                    {step.screenContent}
                  </div>
                  {/* Outcome bar */}
                  {step.outcome === "negative" && (
                    <div className="bg-destructive/5 border-t border-destructive/10 px-3 py-1.5 flex items-center gap-1.5">
                      <X className="h-3 w-3 text-destructive" />
                      <span className="text-[10px] text-destructive font-medium">{step.description}</span>
                    </div>
                  )}
                  {step.outcome !== "negative" && (
                    <div className="bg-muted/50 border-t px-3 py-1.5">
                      <span className="text-[10px] text-muted-foreground">{step.description}</span>
                    </div>
                  )}
                </div>
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
