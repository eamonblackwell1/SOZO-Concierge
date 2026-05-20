"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Cpu, MoveHorizontal } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { stylists } from "@/data/stylists";
import { DataTable } from "@/components/engine/DataTable";
import { StylistDetailModal } from "@/components/engine/StylistDetailModal";
import { DataFlowDiagram } from "@/components/engine/DataFlowDiagram";
import { EngineVizPanel } from "@/components/engine/EngineVizPanel";
import type { Stylist } from "@/data/stylists";

export default function EnginePage() {
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleRowClick(stylist: Stylist) {
    setSelectedStylist(stylist);
    setModalOpen(true);
  }

  const neighborhoodCount = new Set(stylists.map((s) => s.neighborhood)).size;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 space-y-6">
      {/* Header */}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-serif text-2xl sm:text-3xl tracking-tight">
          Under the Hood
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          See the raw data and live reasoning that powers SOZO Concierge —
          from {stylists.length} stylists across {neighborhoodCount} neighborhoods
          to real-time AI matching.
        </p>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="engine" className="space-y-6">
        <TabsList>
          <TabsTrigger value="data" className="gap-1.5">
            <Database className="size-3.5" />
            Data Layer
          </TabsTrigger>
          <TabsTrigger value="engine" className="gap-1.5">
            <Cpu className="size-3.5" />
            Live Engine
          </TabsTrigger>
        </TabsList>

        {/* Panel 4a: Data Table */}
        <TabsContent value="data">
          <div className="space-y-8">
            <DataFlowDiagram />

            <div className="flex sm:hidden items-center gap-1.5 text-xs text-muted-foreground">
              <MoveHorizontal className="size-3" />
              Scroll horizontally to see all columns
            </div>

            <DataTable data={stylists} onRowClick={handleRowClick} />
          </div>
        </TabsContent>

        {/* Panel 4b: Live Engine Reasoning */}
        <TabsContent value="engine">
          <EngineVizPanel />
        </TabsContent>
      </Tabs>

      {/* Detail modal */}
      <StylistDetailModal
        stylist={selectedStylist}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
