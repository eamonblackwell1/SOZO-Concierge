"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getInspirationById } from "@/data/inspiration";
import type { InspirationImage } from "@/lib/blocks";
import { Camera, MapPin, Palette, Scissors } from "lucide-react";

const categoryConfig: Record<
  string,
  { gradient: string; icon: typeof Camera; accent: string }
> = {
  hairstyle: {
    gradient: "from-rose-50 to-amber-50",
    icon: Scissors,
    accent: "text-rose-400",
  },
  color: {
    gradient: "from-violet-50 to-blue-50",
    icon: Palette,
    accent: "text-violet-400",
  },
  neighborhood: {
    gradient: "from-emerald-50 to-cyan-50",
    icon: MapPin,
    accent: "text-emerald-500",
  },
};

function PlaceholderImage({ image }: { image: InspirationImage }) {
  const config = categoryConfig[image.category] ?? {
    gradient: "from-gray-50 to-gray-100",
    icon: Camera,
    accent: "text-gray-400",
  };
  const Icon = config.icon;

  return (
    <div
      className={`relative aspect-[3/4] w-36 md:w-44 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br ${config.gradient} flex flex-col items-center justify-center gap-2.5 p-4 border border-black/[0.04]`}
    >
      <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center">
        <Icon className={`h-5 w-5 ${config.accent}`} />
      </div>
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1">
          {image.category}
        </p>
        <p className="text-xs text-muted-foreground/80 leading-snug line-clamp-2">
          {image.alt}
        </p>
      </div>
    </div>
  );
}

function RealImage({ image }: { image: InspirationImage }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <PlaceholderImage image={image} />;

  return (
    <div className="relative aspect-[3/4] w-36 md:w-44 rounded-xl overflow-hidden shrink-0 bg-muted shadow-sm">
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover"
        onError={() => setFailed(true)}
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-2.5 pt-8">
        <p className="text-[10px] text-white/90 font-medium line-clamp-2 leading-snug">
          {image.alt}
        </p>
      </div>
    </div>
  );
}

function isPlaceholder(url: string): boolean {
  return url.startsWith("/inspiration/");
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
            {isPlaceholder(image.url) ? (
              <PlaceholderImage image={image} />
            ) : (
              <RealImage image={image} />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
