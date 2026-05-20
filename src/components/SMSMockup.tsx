"use client";

import { motion } from "framer-motion";

export function SMSMockup({ callUrl }: { callUrl?: string }) {
  const url = callUrl ?? "sozo-concierge.vercel.app/call";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="max-w-xs mx-auto"
    >
      {/* Phone frame */}
      <div className="rounded-2xl bg-[#f2f2f7] p-4 shadow-md ring-1 ring-black/5">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="w-10 h-10 rounded-full bg-sozo-blue mx-auto flex items-center justify-center mb-1">
            <span className="text-white text-sm font-serif font-bold">S</span>
          </div>
          <p className="text-xs font-medium text-gray-900">SOZO Concierge</p>
          <p className="text-[10px] text-gray-500">iMessage</p>
        </div>

        {/* Message bubbles */}
        <div className="space-y-1.5">
          <div className="flex justify-start">
            <div className="bg-[#e5e5ea] text-gray-900 rounded-2xl rounded-bl-md px-3.5 py-2 max-w-[85%]">
              <p className="text-[13px] leading-snug">
                Hi! 👋 Your Airbnb host recommended SOZO for your Tokyo salon
                experience.
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#e5e5ea] text-gray-900 rounded-2xl rounded-bl-md px-3.5 py-2 max-w-[85%]">
              <p className="text-[13px] leading-snug">
                Tap to speak with our AI concierge — we&apos;ll find the perfect
                English-speaking stylist for you:
              </p>
              <p className="text-[13px] leading-snug mt-1.5 text-blue-600 underline">
                {url}
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#e5e5ea] text-gray-900 rounded-2xl rounded-bl-md px-3.5 py-2 max-w-[85%]">
              <p className="text-[13px] leading-snug">
                No app needed — works on any phone with data 📱
              </p>
            </div>
          </div>

          {/* Timestamp */}
          <p className="text-[10px] text-gray-400 text-center pt-1">
            Today 3:42 PM
          </p>
        </div>
      </div>
    </motion.div>
  );
}
