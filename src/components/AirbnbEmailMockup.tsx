"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Star,
  Award,
  Globe,
  MessageSquare,
  Smartphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { stylists, salons, type Stylist } from "@/data/stylists";

function getSalonAddress(salonId: string): string | undefined {
  return salons.find((s) => s.id === salonId)?.address;
}

const SAMPLE_STYLIST_ID = "mori-takeshi";

const JAPANESE_PHRASES = [
  { ja: "こんにちは", en: "Hello", romaji: "Konnichiwa" },
  { ja: "予約があります", en: "I have a reservation", romaji: "Yoyaku ga arimasu" },
  { ja: "カットをお願いします", en: "A haircut, please", romaji: "Katto o onegai shimasu" },
  { ja: "ありがとうございます", en: "Thank you very much", romaji: "Arigatou gozaimasu" },
  { ja: "お会計お願いします", en: "Check, please", romaji: "Okaikei onegai shimasu" },
];

export function AirbnbEmailMockup({ stylist: propStylist }: { stylist?: Stylist }) {
  const stylist = propStylist ?? stylists.find((s) => s.stylist_id === SAMPLE_STYLIST_ID) ?? stylists[0];
  const salonAddress = getSalonAddress(stylist.salon_id);

  const sampleDate = new Date();
  sampleDate.setDate(sampleDate.getDate() + 3);
  const formattedDate = sampleDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-lg mx-auto"
    >
      <p className="text-xs text-muted-foreground text-center mb-3">
        Preview of the confirmation email guests receive after booking
      </p>

      <div className="rounded-xl ring-1 ring-foreground/10 overflow-hidden bg-white shadow-lg">
        {/* Email header */}
        <div className="bg-sozo-charcoal px-6 py-5 text-center">
          <h1 className="font-serif text-xl text-white tracking-wide">SOZO</h1>
          <p className="text-sozo-cream/70 text-xs tracking-widest uppercase mt-0.5">
            Alliance Concierge
          </p>
        </div>

        {/* Success banner */}
        <div className="bg-sozo-blue px-6 py-4 text-center">
          <p className="text-white font-serif text-lg">Your appointment is confirmed</p>
          <p className="text-white/80 text-sm mt-1">
            We can&apos;t wait for your salon experience in Tokyo
          </p>
        </div>

        {/* Stylist card */}
        <div className="px-6 py-5">
          <div className="flex items-center gap-4 pb-4 border-b">
            <div className="w-14 h-14 rounded-full bg-sozo-cream flex items-center justify-center text-lg font-serif text-sozo-charcoal shrink-0">
              {stylist.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h3 className="font-medium text-sozo-charcoal">{stylist.name}</h3>
                {stylist.is_sozo_master && (
                  <Award className="h-3.5 w-3.5 text-sozo-gold" />
                )}
              </div>
              <p className="text-sm text-gray-500">{stylist.name_ja}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-0.5">
                  <Star className="h-3 w-3 fill-sozo-gold text-sozo-gold" />
                  <span className="text-xs font-medium text-sozo-charcoal">
                    {stylist.google_review_avg_english_only}
                  </span>
                </div>
                <Badge variant="outline" className="h-4 text-[10px] gap-0.5">
                  <Globe className="h-2.5 w-2.5" />
                  {stylist.languages.join(", ")}
                </Badge>
              </div>
            </div>
          </div>

          {/* Appointment details */}
          <div className="py-4 space-y-3 border-b">
            <h4 className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Appointment Details
            </h4>
            <div className="grid gap-2.5">
              <div className="flex items-center gap-3 text-sm text-sozo-charcoal">
                <Calendar className="h-4 w-4 text-sozo-blue shrink-0" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-sozo-charcoal">
                <Clock className="h-4 w-4 text-sozo-blue shrink-0" />
                <span>2:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-sozo-charcoal">
                <MapPin className="h-4 w-4 text-sozo-blue shrink-0" />
                <div>
                  <p>{stylist.salon}</p>
                  {salonAddress && (
                    <p className="text-xs text-gray-500 mt-0.5">{salonAddress}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Map link */}
          {salonAddress && (
            <div className="py-4 border-b">
              <div className="rounded-lg bg-gray-100 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sozo-blue/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-sozo-blue" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-sozo-charcoal">Get Directions</p>
                  <p className="text-xs text-gray-500 truncate">{salonAddress}</p>
                </div>
              </div>
            </div>
          )}

          {/* Japanese phrases */}
          <div className="py-4 border-b">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="h-4 w-4 text-sozo-blue" />
              <h4 className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Useful Japanese Phrases
              </h4>
            </div>
            <div className="space-y-2">
              {JAPANESE_PHRASES.map((phrase) => (
                <div key={phrase.romaji} className="flex items-baseline gap-3 text-sm">
                  <span className="font-medium text-sozo-charcoal shrink-0 w-[140px]">
                    {phrase.ja}
                  </span>
                  <span className="text-gray-500 text-xs flex-1">
                    {phrase.en}
                    <span className="text-gray-400 ml-1">({phrase.romaji})</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-before reminder */}
          <div className="py-4">
            <div className="rounded-lg bg-sozo-blue/5 border border-sozo-blue/10 p-4">
              <div className="flex items-start gap-3">
                <Smartphone className="h-4 w-4 text-sozo-blue mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-sozo-charcoal">Day-before reminder</p>
                  <p className="text-gray-500 mt-1 leading-relaxed">
                    Tomorrow at 6 PM, we&apos;ll text you a reminder with the salon address,
                    walking directions from the nearest station, and a few helpful phrases
                    for your visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t px-6 py-4 text-center">
          <p className="font-serif text-sm text-sozo-charcoal tracking-wide">
            SOZO Alliance
          </p>
          <p className="text-[10px] text-gray-400 mt-1">
            All recommended salons are SOZO Alliance certified for international guest hospitality.
          </p>
          <p className="text-[10px] text-gray-400 mt-2">
            Questions? Reply to this email or contact concierge@sozo-alliance.com
          </p>
        </div>
      </div>
    </motion.div>
  );
}
