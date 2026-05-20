"use client";

import { cn } from "@/lib/utils";

export function GoogleMapEmbed({
  address,
  className,
  height = 180,
}: {
  address: string;
  className?: string;
  height?: number;
}) {
  const encoded = encodeURIComponent(address);

  return (
    <div
      className={cn("rounded-lg overflow-hidden bg-muted", className)}
      style={{ height }}
    >
      <iframe
        src={`https://maps.google.com/maps?q=${encoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        className="w-full h-full border-0"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${address}`}
      />
    </div>
  );
}
