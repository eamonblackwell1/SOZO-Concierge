"use client";

import { motion } from "framer-motion";
import { getInspirationById } from "@/data/inspiration";
import type { InspirationImage } from "@/lib/blocks";
import { Camera } from "lucide-react";

function PlaceholderImage({ image }: { image: InspirationImage }) {
  const categoryColors: Record<string, string> = {
    hairstyle: "bg-sozo-cream text-sozo-charcoal",
    color: "bg-sozo-blue/5 text-sozo-blue",
    neighborhood: "bg-sozo-gold/10 text-sozo-gold",
  };

  const colorClass = categoryColors[image.category] ?? "bg-muted text-muted-foreground";

  return (
    <div
      className={`relative aspect-[3/4] w-36 md:w-44 rounded-lg overflow-hidden shrink-0 ${colorClass} flex flex-col items-center justify-center gap-2 p-3`}
    >
      <Camera className="h-6 w-6 opacity-40" />
      <p className="text-[10px] font-medium uppercase tracking-wider opacity-60">
        {image.category}
      </p>
      <p className="text-xs text-center leading-snug opacity-80 line-clamp-2">
        {image.alt}
      </p>
    </div>
  );
}

export function ImageRow({ imageIds }: { imageIds: string[] }) {
  const images = imageIds
    .map((id) => getInspirationById(id))
    .filter((img): img is InspirationImage => img !== undefined);

  if (images.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full overflow-hidden"
    >
      <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none -mx-1 px-1">
        {images.map((image, i) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
          >
            {image.url.startsWith("/inspiration/") ? (
              <PlaceholderImage image={image} />
            ) : (
              <div className="relative aspect-[3/4] w-36 md:w-44 rounded-lg overflow-hidden shrink-0 bg-muted">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2 pt-6">
                  <p className="text-[10px] text-white/90 line-clamp-2">
                    {image.alt}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
