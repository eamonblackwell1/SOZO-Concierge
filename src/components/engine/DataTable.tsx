"use client";

import { useState, useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  type SortingState,
  type ColumnFiltersState,
} from "@tanstack/react-table";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { columns } from "./columns";
import type { Stylist } from "@/data/stylists";

const HERO_COUNT = 15;

const NEIGHBORHOODS = [
  "Harajuku",
  "Shibuya",
  "Aoyama",
  "Omotesando",
  "Ebisu",
  "Ginza",
  "Roppongi",
  "Nakameguro",
  "Daikanyama",
  "Shinjuku",
  "Shimokitazawa",
] as const;

interface DataTableProps {
  data: Stylist[];
  onRowClick: (stylist: Stylist) => void;
}

export function DataTable({ data, onRowClick }: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [showAll, setShowAll] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>(
    []
  );

  const visibleData = useMemo(
    () => (showAll ? data : data.slice(0, HERO_COUNT)),
    [data, showAll]
  );

  const table = useReactTable({
    data: visibleData,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  function toggleNeighborhood(n: string) {
    setSelectedNeighborhoods((prev) => {
      const next = prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n];
      table.getColumn("neighborhood")?.setFilterValue(next.length ? next : undefined);
      return next;
    });
  }

  function clearFilters() {
    setSelectedNeighborhoods([]);
    setColumnFilters([]);
  }

  const filteredCount = table.getFilteredRowModel().rows.length;
  const hasFilters = selectedNeighborhoods.length > 0;

  return (
    <div className="space-y-3">
      {/* Filter bar */}
      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant={filtersOpen ? "secondary" : "outline"}
          size="sm"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <Filter className="size-3.5" data-icon="inline-start" />
          Filter
          {hasFilters && (
            <Badge variant="default" className="ml-1 h-4 px-1.5 text-[10px]">
              {selectedNeighborhoods.length}
            </Badge>
          )}
        </Button>

        {hasFilters && (
          <Button variant="ghost" size="xs" onClick={clearFilters}>
            <X className="size-3" data-icon="inline-start" />
            Clear
          </Button>
        )}

        <span className="text-xs text-muted-foreground ml-auto tabular-nums">
          {filteredCount} of {visibleData.length} stylists
          {!showAll && ` (showing top ${HERO_COUNT})`}
        </span>
      </div>

      {/* Neighborhood filter chips */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-1.5 pb-2">
              <span className="text-xs text-muted-foreground self-center mr-1">
                Neighborhood:
              </span>
              {NEIGHBORHOODS.map((n) => (
                <button
                  key={n}
                  onClick={() => toggleNeighborhood(n)}
                  className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium transition-colors border ${
                    selectedNeighborhoods.includes(n)
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table */}
      <div className="rounded-lg border bg-card overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-xs">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="cursor-pointer"
                  onClick={() => onRowClick(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No stylists match current filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Expand / collapse */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAll(!showAll)}
          className="gap-1.5"
        >
          {showAll ? (
            <>
              Show top {HERO_COUNT} only
              <ChevronUp className="size-3.5" />
            </>
          ) : (
            <>
              Show all {data.length} stylists
              <ChevronDown className="size-3.5" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
