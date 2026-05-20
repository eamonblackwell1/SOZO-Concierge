"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  Camera,
  Sparkles,
  QrCode,
  Globe,
} from "lucide-react";
import { QRCard } from "@/components/QRCard";

interface Channel {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  image: string;
  imageAlt: string;
}

const channels: Channel[] = [
  {
    id: "google-search",
    name: "Google Search",
    description: "Ranking organically for key tourist queries",
    icon: Search,
    image: "/mockups/google-search.png",
    imageAlt: "Google search results showing SOZO Alliance as the top organic result for 'best english speaking hair salon tokyo'",
  },
  {
    id: "google-ads",
    name: "Google Ads",
    description: "Paid search capturing high-intent visitors",
    icon: Megaphone,
    image: "/mockups/google-ads.png",
    imageAlt: "Google Ads sponsored result for SOZO Alliance with sitelinks for Book Now, View Stylists, and How It Works",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Stylist portfolios and before/after content",
    icon: Camera,
    image: "/mockups/instagram.png",
    imageAlt: "Instagram post from sozo.alliance showing a before and after balayage hair transformation",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    description: "Targeted ads reaching travellers planning Tokyo trips",
    icon: Globe,
    image: "/mockups/meta-ads.png",
    imageAlt: "Facebook sponsored ad from SOZO Alliance showing a stylist working on a client's hair in a Tokyo salon",
  },
  {
    id: "ai-assistants",
    name: "AI Assistants",
    description: "AEO — getting recommended by ChatGPT, Perplexity, Gemini",
    icon: Sparkles,
    image: "/mockups/chatgpt-aeo.png",
    imageAlt: "ChatGPT conversation recommending SOZO Alliance as the best English-speaking hair salon in Tokyo",
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
            Tourists discover SOZO through multiple channels — from Google
            searches to AI recommendations. Every path leads to the same
            intelligent concierge.
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
                      <p className="text-xs text-muted-foreground">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden ring-1 ring-black/5">
                    <Image
                      src={channel.image}
                      alt={channel.imageAlt}
                      width={600}
                      height={800}
                      className="w-full h-auto"
                    />
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
              <p className="text-xs text-muted-foreground">
                Physical QR cards placed in guest welcome packs
              </p>
            </div>
          </div>
          <QRCard />
        </motion.div>
      </div>
    </div>
  );
}
