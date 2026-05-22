"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Check,
  Clock,
  MapPin,
  Mail,
  ArrowLeft,
  Star,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Stylist } from "@/data/stylists";
import { salons } from "@/data/stylists";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";

type Step = "slots" | "confirm" | "done";

function SlotPicker({
  stylist,
  onSelect,
}: {
  stylist: Stylist;
  onSelect: (date: string, time: string) => void;
}) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const availableDays = stylist.schedule_next_14_days.filter(
    (d) => d.slots.length > 0
  );

  const selectedDay = availableDays.find((d) => d.date === selectedDate);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + "T00:00:00");
    const day = d.toLocaleDateString("en-US", { weekday: "short" });
    const month = d.toLocaleDateString("en-US", { month: "short" });
    const num = d.getDate();
    return { day, month, num };
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
          Available Dates
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {availableDays.slice(0, 7).map((d) => {
            const { day, month, num } = formatDate(d.date);
            const isSelected = selectedDate === d.date;
            return (
              <button
                key={d.date}
                onClick={() => setSelectedDate(d.date)}
                className={cn(
                  "flex flex-col items-center px-3 py-2 rounded-lg border transition-all shrink-0 min-w-[60px]",
                  isSelected
                    ? "border-sozo-blue bg-sozo-blue/5 text-sozo-blue"
                    : "border-border hover:border-foreground/20"
                )}
              >
                <span className="text-[10px] uppercase tracking-wide opacity-60">
                  {day}
                </span>
                <span className="text-lg font-semibold leading-tight">{num}</span>
                <span className="text-[10px] opacity-60">{month}</span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedDay && (
          <motion.div
            key={selectedDate}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
              Available Times
            </p>
            <div className="grid grid-cols-3 gap-2">
              {selectedDay.slots.map((slot) => (
                <Button
                  key={slot}
                  variant="outline"
                  className="gap-1.5"
                  onClick={() => onSelect(selectedDate!, slot)}
                >
                  <Clock className="h-3 w-3" />
                  {slot}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ConfirmationScreen({
  stylist,
  date,
  time,
}: {
  stylist: Stylist;
  date: string;
  time: string;
}) {
  const formatted = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const salonAddress = salons.find((s) => s.id === stylist.salon_id)?.address;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="text-center space-y-5"
    >
      <div className="mx-auto w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
        <Check className="h-7 w-7 text-green-600" />
      </div>

      <div>
        <h3 className="font-serif text-xl">You&apos;re booked!</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Your appointment with {stylist.name.split(" ")[0]} is confirmed.
        </p>
      </div>

      <div className="bg-muted rounded-xl p-4 text-left space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sozo-cream flex items-center justify-center text-sm font-serif overflow-hidden">
            {stylist.photo_url ? (
              <img src={stylist.photo_url} alt={stylist.name} className="w-full h-full object-cover" />
            ) : (
              stylist.name.charAt(0)
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-medium text-sm">{stylist.name}</p>
              {stylist.is_sozo_master && (
                <Award className="h-3.5 w-3.5 text-sozo-gold" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">{stylist.salon}</p>
          </div>
          <div className="ml-auto flex items-center gap-0.5">
            <Star className="h-3 w-3 fill-sozo-gold text-sozo-gold" />
            <span className="text-xs font-medium">
              {stylist.google_review_avg_english_only}
            </span>
          </div>
        </div>

        <div className="h-px bg-border" />

        <div className="grid gap-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>
              {formatted} at {time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{salonAddress ?? `${stylist.salon}, ${stylist.neighborhood}`}</span>
          </div>
        </div>
      </div>

      {salonAddress && (
        <GoogleMapEmbed address={salonAddress} height={140} className="rounded-xl" />
      )}

      <div className="bg-sozo-blue/5 border border-sozo-blue/10 rounded-xl p-4 text-left">
        <div className="flex items-start gap-2">
          <Mail className="h-4 w-4 text-sozo-blue mt-0.5 shrink-0" />
          <div className="text-sm">
            <p className="font-medium">Confirmation sent!</p>
            <p className="text-muted-foreground mt-0.5">
              We&apos;ve sent the details to your email. The day before your appointment,
              we&apos;ll text you the salon address with directions and useful Japanese
              phrases.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function BookingFlow({
  stylist,
  onClose,
}: {
  stylist: Stylist;
  onClose?: () => void;
}) {
  const [step, setStep] = useState<Step>("slots");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="space-y-4">
      {step !== "done" && (
        <div className="flex items-center gap-3">
          {step === "confirm" && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setStep("slots")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <div>
            <h3 className="font-serif text-lg">
              {step === "slots"
                ? `Book ${stylist.name.split(" ")[0]}`
                : "Confirm Booking"}
            </h3>
            <p className="text-xs text-muted-foreground">
              {step === "slots"
                ? `${stylist.salon} · ${stylist.neighborhood}`
                : `${new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} at ${selectedTime}`}
            </p>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === "slots" && (
          <motion.div
            key="slots"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
          >
            <SlotPicker
              stylist={stylist}
              onSelect={(date, time) => {
                setSelectedDate(date);
                setSelectedTime(time);
                setStep("confirm");
              }}
            />
          </motion.div>
        )}

        {step === "confirm" && (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            className="space-y-3"
          >
            <div className="bg-muted rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sozo-cream flex items-center justify-center text-xs font-serif overflow-hidden">
                  {stylist.photo_url ? (
                    <img src={stylist.photo_url} alt={stylist.name} className="w-full h-full object-cover" />
                  ) : (
                    stylist.name.charAt(0)
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">{stylist.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {stylist.salon} · {stylist.neighborhood}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {selectedTime}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="text-xs">
                  {`¥${stylist.price_range_yen[0].toLocaleString()}–¥${stylist.price_range_yen[1].toLocaleString()}`}
                </Badge>
              </div>
            </div>

            <Button
              onClick={() => setStep("done")}
              className="w-full h-10 bg-sozo-blue hover:bg-sozo-blue-hover text-white"
            >
              Confirm Booking
            </Button>
          </motion.div>
        )}

        {step === "done" && (
          <ConfirmationScreen
            stylist={stylist}
            date={selectedDate}
            time={selectedTime}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
