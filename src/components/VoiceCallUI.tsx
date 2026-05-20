"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  Loader2,
  Check,
  MapPin,
  Calendar,
  Star,
  Award,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { stylists, salons, type Stylist } from "@/data/stylists";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";

type CallState = "idle" | "connecting" | "active" | "post-call";

interface TranscriptEntry {
  role: "user" | "assistant";
  text: string;
  timestamp: number;
}

const DEMO_STYLIST_ID = "mori-takeshi";

function getDemoStylist(): Stylist {
  return (
    stylists.find((s) => s.stylist_id === DEMO_STYLIST_ID) ?? stylists[0]
  );
}

function PulseRing({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative">
      {isActive && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full bg-sozo-blue/20"
            animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-sozo-blue/15"
            animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
          />
        </>
      )}
    </div>
  );
}

function VolumeIndicator({ level }: { level: number }) {
  const bars = 5;
  return (
    <div className="flex items-end gap-0.5 h-4">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-0.5 rounded-full bg-sozo-blue"
          animate={{
            height: level > i / bars ? `${40 + (i + 1) * 12}%` : "20%",
            opacity: level > i / bars ? 1 : 0.3,
          }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </div>
  );
}

function ElapsedTimer({ startTime }: { startTime: number }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  return (
    <span className="text-sm tabular-nums text-muted-foreground">
      {mins}:{secs.toString().padStart(2, "0")}
    </span>
  );
}

function TranscriptFeed({ entries }: { entries: TranscriptEntry[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries]);

  if (entries.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-xs text-muted-foreground">
          Listening... speak naturally about your ideal salon visit.
        </p>
      </div>
    );
  }

  return (
    <div ref={scrollRef} className="space-y-2 max-h-48 overflow-y-auto scrollbar-none">
      {entries.map((entry, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "text-sm px-3 py-1.5 rounded-lg max-w-[85%]",
            entry.role === "user"
              ? "ml-auto bg-primary text-primary-foreground"
              : "bg-muted text-foreground"
          )}
        >
          {entry.text}
        </motion.div>
      ))}
    </div>
  );
}

function PostCallConfirmation({ stylist }: { stylist: Stylist }) {
  const salonAddress = salons.find((s) => s.id === stylist.salon_id)?.address;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-5"
    >
      <div className="text-center space-y-2">
        <div className="mx-auto w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <Check className="h-7 w-7 text-green-600" />
        </div>
        <h2 className="font-serif text-2xl">Your Match is Ready</h2>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          Based on our conversation, here&apos;s the perfect stylist for you.
        </p>
      </div>

      <div className="rounded-xl ring-1 ring-foreground/10 bg-card overflow-hidden">
        <div className="p-5 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-sozo-cream flex items-center justify-center text-xl font-serif shrink-0">
              {stylist.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg">{stylist.name}</h3>
                {stylist.is_sozo_master && (
                  <Badge className="bg-sozo-gold/10 text-sozo-gold border-sozo-gold/20 h-5 text-[10px]">
                    <Award className="h-3 w-3" /> Master
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {stylist.name_ja} · {stylist.salon}
              </p>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="flex items-center gap-0.5">
                  <Star className="h-3 w-3 fill-sozo-gold text-sozo-gold" />
                  <span className="text-xs font-medium">
                    {stylist.google_review_avg_english_only}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {stylist.neighborhood}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {stylist.english_summary.slice(0, 200)}...
          </p>

          <div className="flex flex-wrap gap-1.5">
            {stylist.specialties.split(", ").slice(0, 3).map((s) => (
              <Badge key={s} variant="outline" className="text-xs">
                {s}
              </Badge>
            ))}
          </div>

          {salonAddress && (
            <div>
              <GoogleMapEmbed address={salonAddress} height={140} />
              <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {salonAddress}
              </p>
            </div>
          )}

          {stylist.schedule_next_14_days.some((d) => d.slots.length > 0) && (
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-3.5 w-3.5 text-sozo-blue" />
                <span className="text-muted-foreground">
                  Next available:{" "}
                  <span className="text-foreground font-medium">
                    {(() => {
                      const next = stylist.schedule_next_14_days.find(
                        (d) => d.slots.length > 0
                      );
                      if (!next) return "Check availability";
                      const d = new Date(next.date + "T00:00:00");
                      return `${d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} at ${next.slots[0]}`;
                    })()}
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button
          asChild
          className="w-full h-10 bg-sozo-blue hover:bg-sozo-blue-hover text-white gap-2"
        >
          <a href="/">
            <ExternalLink className="h-4 w-4" />
            View Full Profile & Book
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

export function VoiceCallUI() {
  const [callState, setCallState] = useState<CallState>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [callStartTime, setCallStartTime] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vapiRef = useRef<any>(null);

  const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
  const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;
  const isConfigured = Boolean(publicKey && assistantId);

  const cleanup = useCallback(() => {
    if (vapiRef.current) {
      vapiRef.current.removeAllListeners?.();
      vapiRef.current = null;
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const startCall = async () => {
    if (!isConfigured) return;

    setCallState("connecting");
    setTranscript([]);

    try {
      const VapiSDK = (await import("@vapi-ai/web")).default;
      const vapi = new VapiSDK(publicKey!);
      vapiRef.current = vapi;

      vapi.on("call-start", () => {
        setCallState("active");
        setCallStartTime(Date.now());
      });

      vapi.on("call-end", () => {
        setCallState("post-call");
        cleanup();
      });

      vapi.on("volume-level", (level: number) => {
        setVolumeLevel(level);
      });

      vapi.on("message", (message: { type: string; role?: string; transcript?: string }) => {
        if (message.type === "transcript" && message.transcript) {
          setTranscript((prev) => [
            ...prev,
            {
              role: message.role === "user" ? "user" : "assistant",
              text: message.transcript!,
              timestamp: Date.now(),
            },
          ]);
        }
      });

      vapi.on("error", (err: Error) => {
        console.error("Vapi error:", err);
        setCallState("idle");
        cleanup();
      });

      await vapi.start(assistantId!);
    } catch (err) {
      console.error("Failed to start Vapi call:", err);
      setCallState("idle");
      cleanup();
    }
  };

  const endCall = () => {
    vapiRef.current?.stop?.();
    setCallState("post-call");
    cleanup();
  };

  const toggleMute = () => {
    if (vapiRef.current) {
      setIsMuted((prev) => {
        const next = !prev;
        vapiRef.current?.setMuted?.(next);
        return next;
      });
    }
  };

  const resetCall = () => {
    setCallState("idle");
    setTranscript([]);
    setVolumeLevel(0);
    setIsMuted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-background">
      <div className="max-w-md w-full">
        <AnimatePresence mode="wait">
          {/* ── Idle ── */}
          {callState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-8"
            >
              <div className="space-y-2">
                <h1 className="font-serif text-3xl tracking-tight">
                  SOZO Concierge
                </h1>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  Speak naturally — tell us about your hair, your schedule, and
                  your style. We&apos;ll recommend the right stylist.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <PulseRing isActive={false} />
                  <button
                    onClick={isConfigured ? startCall : undefined}
                    disabled={!isConfigured}
                    className={cn(
                      "relative z-10 h-24 w-24 rounded-full flex items-center justify-center transition-all",
                      isConfigured
                        ? "bg-sozo-blue hover:bg-sozo-blue-hover text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    )}
                  >
                    <Mic className="h-10 w-10" />
                  </button>
                </div>
              </div>

              {isConfigured ? (
                <p className="text-xs text-muted-foreground">
                  Tap the microphone to start · No phone number needed
                </p>
              ) : (
                <div className="bg-muted rounded-xl p-4 text-left">
                  <p className="text-sm font-medium">Voice not configured yet</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Set <code className="bg-background px-1 py-0.5 rounded text-[11px]">NEXT_PUBLIC_VAPI_PUBLIC_KEY</code> and{" "}
                    <code className="bg-background px-1 py-0.5 rounded text-[11px]">NEXT_PUBLIC_VAPI_ASSISTANT_ID</code> in
                    your environment to enable voice calls.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* ── Connecting ── */}
          {callState === "connecting" && (
            <motion.div
              key="connecting"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-6"
            >
              <div className="space-y-2">
                <h2 className="font-serif text-2xl">Connecting...</h2>
                <p className="text-sm text-muted-foreground">
                  Setting up your voice session
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-sozo-blue/10 flex items-center justify-center">
                  <Loader2 className="h-10 w-10 text-sozo-blue animate-spin" />
                </div>
              </div>

              <Button
                variant="ghost"
                onClick={() => {
                  cleanup();
                  setCallState("idle");
                }}
                className="text-muted-foreground"
              >
                Cancel
              </Button>
            </motion.div>
          )}

          {/* ── Active Call ── */}
          {callState === "active" && (
            <motion.div
              key="active"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center space-y-1">
                <h2 className="font-serif text-xl">SOZO Concierge</h2>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <ElapsedTimer startTime={callStartTime} />
                  <VolumeIndicator level={volumeLevel} />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <PulseRing isActive={true} />
                  <div className="relative z-10 h-28 w-28 rounded-full bg-sozo-blue flex items-center justify-center">
                    <Mic className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-card p-4">
                <TranscriptFeed entries={transcript} />
              </div>

              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleMute}
                  className={cn(
                    "h-12 w-12 rounded-full",
                    isMuted && "bg-destructive/10 text-destructive border-destructive/20"
                  )}
                >
                  {isMuted ? (
                    <MicOff className="h-5 w-5" />
                  ) : (
                    <Mic className="h-5 w-5" />
                  )}
                </Button>

                <Button
                  onClick={endCall}
                  className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white"
                >
                  <PhoneOff className="h-6 w-6" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ── Post-Call ── */}
          {callState === "post-call" && (
            <motion.div
              key="post-call"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <PostCallConfirmation stylist={getDemoStylist()} />
              <div className="text-center">
                <Button
                  variant="ghost"
                  onClick={resetCall}
                  className="gap-2 text-muted-foreground"
                >
                  <Phone className="h-4 w-4" />
                  Start a new conversation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-muted-foreground">
            SOZO Concierge · All recommended salons are SOZO Alliance certified
          </p>
        </div>
      </div>
    </div>
  );
}
