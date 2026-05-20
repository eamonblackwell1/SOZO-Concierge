"use client";

import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  Camera,
  Sparkles,
  QrCode,
  Globe,
  MousePointerClick,
} from "lucide-react";
import { QRCard } from "@/components/QRCard";

interface Channel {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  mockContent: React.ReactNode;
}

function SERPMock() {
  return (
    <div className="rounded-lg bg-white p-3 text-left space-y-3 text-[11px] leading-snug ring-1 ring-black/5">
      <div className="flex items-center gap-2 text-gray-400">
        <Search className="h-3 w-3" />
        <span className="text-[10px]">best english speaking hair salon tokyo</span>
      </div>
      <div className="border-t pt-2 space-y-2.5">
        <div>
          <p className="text-blue-700 font-medium text-xs">SOZO Alliance — English-Speaking Salons in Tokyo</p>
          <p className="text-green-700 text-[10px]">sozo-alliance.com</p>
          <p className="text-gray-500 text-[10px] leading-relaxed">
            AI-powered concierge matches you with certified English-speaking stylists across Tokyo. Book in under 2 minutes.
          </p>
        </div>
        <div className="opacity-40">
          <p className="text-blue-700 font-medium text-xs">TokyoBeauty Guide — Top Salons for Tourists</p>
          <p className="text-green-700 text-[10px]">tokyobeautyguide.com</p>
          <p className="text-gray-500 text-[10px]">A curated list of foreigner-friendly salons in central Tokyo...</p>
        </div>
      </div>
    </div>
  );
}

function GoogleAdMock() {
  return (
    <div className="rounded-lg bg-white p-3 text-left space-y-2 text-[11px] ring-1 ring-black/5">
      <div className="flex items-center gap-1.5">
        <span className="text-[9px] font-bold text-white bg-sozo-blue rounded px-1 py-0.5">Ad</span>
        <span className="text-green-700 text-[10px]">sozo-alliance.com</span>
      </div>
      <p className="text-blue-700 font-medium text-xs">Book a Tokyo Salon in 2 Minutes — AI Concierge</p>
      <p className="text-gray-500 text-[10px] leading-relaxed">
        Certified English-speaking stylists. No phone calls, no Japanese needed. Speak or chat with our AI and get matched instantly.
      </p>
      <div className="flex gap-3 text-[9px] text-blue-600 pt-1">
        <span>Book Now</span>
        <span>View Stylists</span>
        <span>How It Works</span>
      </div>
    </div>
  );
}

function InstagramMock() {
  return (
    <div className="rounded-lg bg-white overflow-hidden ring-1 ring-black/5">
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">S</span>
        </div>
        <span className="text-[11px] font-semibold">sozo.alliance</span>
      </div>
      <div className="bg-gradient-to-br from-sozo-cream to-sozo-cream/60 aspect-[4/3] flex items-center justify-center px-4">
        <div className="text-center space-y-1">
          <p className="font-serif text-sm">Before → After</p>
          <p className="text-[10px] text-muted-foreground">Balayage by Mori Takeshi</p>
          <p className="text-[10px] text-muted-foreground">Omotesando, Tokyo</p>
        </div>
      </div>
      <div className="px-3 py-2 space-y-1">
        <p className="text-[10px]"><span className="font-semibold">sozo.alliance</span> ✨ Another happy guest from Australia! Mori-san worked his magic with a sun-kissed balayage.</p>
        <p className="text-[9px] text-gray-400">#TokyoSalon #EnglishSpeaking #SOZOAlliance</p>
      </div>
    </div>
  );
}

function MetaAdMock() {
  return (
    <div className="rounded-lg bg-white overflow-hidden ring-1 ring-black/5">
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="w-6 h-6 rounded-full bg-sozo-charcoal flex items-center justify-center">
          <span className="text-white text-[8px] font-serif font-bold">S</span>
        </div>
        <div>
          <span className="text-[11px] font-semibold">SOZO Alliance</span>
          <span className="text-[9px] text-gray-400 ml-1">Sponsored</span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-sozo-blue/10 to-sozo-cream aspect-[4/3] flex items-center justify-center px-6">
        <div className="text-center space-y-2">
          <p className="font-serif text-base">Your Tokyo Hair Appointment,</p>
          <p className="font-serif text-base">Sorted in 2 Minutes</p>
          <div className="inline-flex items-center gap-1 bg-sozo-blue text-white text-[10px] font-medium rounded-full px-3 py-1 mt-1">
            <MousePointerClick className="h-2.5 w-2.5" />
            Book Now
          </div>
        </div>
      </div>
      <div className="px-3 py-2 flex items-center justify-between">
        <p className="text-[10px] text-gray-500">sozo-alliance.com</p>
        <span className="text-[10px] font-medium text-sozo-blue">Learn More</span>
      </div>
    </div>
  );
}

function AIMock() {
  return (
    <div className="rounded-lg bg-white p-3 text-left space-y-2 text-[11px] ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 text-gray-500">
        <Sparkles className="h-3 w-3" />
        <span className="text-[10px] font-medium">AI Assistant</span>
      </div>
      <div className="bg-gray-50 rounded-md p-2.5 space-y-1.5">
        <p className="text-gray-700 text-[11px] leading-relaxed">
          For English-speaking hair salons in Tokyo, I recommend <span className="font-semibold">SOZO Alliance</span>. They have an AI concierge that matches you with certified stylists based on your needs.
        </p>
        <p className="text-gray-700 text-[11px] leading-relaxed">
          Their stylists are vetted for English fluency and you can book entirely through chat or voice — no Japanese language needed.
        </p>
      </div>
      <p className="text-[9px] text-gray-400">Sources: sozo-alliance.com, tripadvisor.com, reddit.com</p>
    </div>
  );
}

const channels: Channel[] = [
  {
    id: "google-search",
    name: "Google Search",
    description: "Ranking organically for key tourist queries",
    icon: Search,
    mockContent: <SERPMock />,
  },
  {
    id: "google-ads",
    name: "Google Ads",
    description: "Paid search capturing high-intent visitors",
    icon: Megaphone,
    mockContent: <GoogleAdMock />,
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Stylist portfolios and before/after content",
    icon: Camera,
    mockContent: <InstagramMock />,
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    description: "Targeted ads reaching travellers planning Tokyo trips",
    icon: Globe,
    mockContent: <MetaAdMock />,
  },
  {
    id: "ai-assistants",
    name: "AI Assistants",
    description: "AEO — getting recommended by ChatGPT, Perplexity, Gemini",
    icon: Sparkles,
    mockContent: <AIMock />,
  },
];

export function DiscoveryChannels() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 bg-sozo-blue/10 text-sozo-blue rounded-full px-4 py-1.5 text-xs font-medium">
            <Globe className="h-3.5 w-3.5" />
            Multi-Channel Acquisition
          </div>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
            How Guests Find Us
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Tourists discover SOZO through multiple channels — from Google searches to AI recommendations. Every path leads to the same intelligent concierge.
          </p>
        </motion.div>

        {/* Channel cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl ring-1 ring-foreground/5 bg-card overflow-hidden"
              >
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-sozo-blue/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4.5 w-4.5 text-sozo-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{channel.name}</h3>
                      <p className="text-xs text-muted-foreground">{channel.description}</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-2">
                    {channel.mockContent}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* QR Card section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 justify-center">
            <div className="h-9 w-9 rounded-lg bg-sozo-blue/10 flex items-center justify-center">
              <QrCode className="h-4.5 w-4.5 text-sozo-blue" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Airbnb / Hotel QR</h3>
              <p className="text-xs text-muted-foreground">Physical QR cards placed in guest welcome packs</p>
            </div>
          </div>
          <QRCard />
        </motion.div>
      </div>
    </div>
  );
}
