"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Star, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Stylist } from "@/data/stylists";

function SortButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="flex items-center gap-1 hover:text-foreground transition-colors"
      onClick={onClick}
    >
      {label}
      <ArrowUpDown className="size-3" />
    </button>
  );
}

export const columns: ColumnDef<Stylist>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortButton
        label="Stylist"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2.5 min-w-[140px]">
        <div className="size-8 rounded-full bg-muted overflow-hidden shrink-0">
          <img
            src={row.original.photo_url}
            alt={row.original.name}
            className="size-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-foreground leading-tight">
            {row.original.name}
          </span>
          <span className="text-xs text-muted-foreground leading-tight">
            {row.original.name_ja}
          </span>
        </div>
        {row.original.is_sozo_master && (
          <Crown className="size-3.5 text-sozo-gold shrink-0" />
        )}
      </div>
    ),
  },
  {
    accessorKey: "salon",
    header: ({ column }) => (
      <SortButton
        label="Salon"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.salon}</span>
    ),
  },
  {
    accessorKey: "neighborhood",
    header: ({ column }) => (
      <SortButton
        label="Area"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <Badge variant="secondary">{row.original.neighborhood}</Badge>
    ),
    filterFn: (row, _columnId, filterValue: string[]) => {
      if (!filterValue?.length) return true;
      return filterValue.includes(row.original.neighborhood);
    },
  },
  {
    accessorKey: "specialties",
    header: "Specialties",
    cell: ({ row }) => (
      <span className="text-muted-foreground max-w-[200px] truncate block">
        {row.original.specialties}
      </span>
    ),
  },
  {
    accessorKey: "price_range_yen",
    header: ({ column }) => (
      <SortButton
        label="Price (¥)"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    sortingFn: (rowA, rowB) => {
      const a = rowA.original.price_range_yen[0];
      const b = rowB.original.price_range_yen[0];
      return a - b;
    },
    cell: ({ row }) => {
      const [low, high] = row.original.price_range_yen;
      return (
        <span className="text-muted-foreground tabular-nums">
          ¥{low.toLocaleString()}–{high.toLocaleString()}
        </span>
      );
    },
  },
  {
    accessorKey: "salon_english_score",
    header: ({ column }) => (
      <SortButton
        label="English"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => {
      const score = row.original.salon_english_score;
      return (
        <div className="flex items-center gap-1 tabular-nums">
          <div
            className="h-1.5 rounded-full bg-sozo-blue/80"
            style={{ width: `${score * 10}px` }}
          />
          <span className="text-muted-foreground text-xs">{score}/10</span>
        </div>
      );
    },
  },
  {
    accessorKey: "international_guest_count_6mo",
    header: ({ column }) => (
      <SortButton
        label="Intl Guests"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <span className="text-muted-foreground tabular-nums">
        {row.original.international_guest_count_6mo}
      </span>
    ),
  },
  {
    accessorKey: "google_review_avg_english_only",
    header: ({ column }) => (
      <SortButton
        label="Rating"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => {
      const rating = row.original.google_review_avg_english_only;
      return (
        <div className="flex items-center gap-1">
          <Star className="size-3 fill-sozo-gold text-sozo-gold" />
          <span className="text-muted-foreground tabular-nums">
            {rating.toFixed(1)}
          </span>
        </div>
      );
    },
  },
];
