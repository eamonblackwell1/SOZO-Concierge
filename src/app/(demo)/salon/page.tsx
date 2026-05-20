"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
  Award,
  Star,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { stylists, salons } from "@/data/stylists";
import {
  kpis,
  recentBookings,
  salonKPIOverrides,
  masterRequirements,
} from "@/data/salon-dashboard";
import type { KPI } from "@/data/salon-dashboard";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

function KPICard({ kpi, index }: { kpi: KPI; index: number }) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Card>
        <CardContent className="px-5 py-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground">
                {kpi.label}
              </p>
              <p className="text-2xl font-semibold tracking-tight">
                {kpi.value}
              </p>
              {kpi.sublabel && (
                <p className="text-[11px] text-muted-foreground">
                  {kpi.sublabel}
                </p>
              )}
            </div>
            <div
              className={`flex items-center gap-0.5 text-xs font-medium ${
                kpi.changePositive ? "text-green-600" : "text-red-500"
              }`}
            >
              {kpi.changePositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {kpi.change}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProgressBar({
  value,
  max,
  label,
  current,
  unit,
}: {
  value: number;
  max: number;
  label: string;
  current: string;
  unit: string;
}) {
  const pct = Math.min((value / max) * 100, 100);
  const complete = value >= max;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className={complete ? "text-sozo-gold font-medium" : "text-foreground"}>
          {current} / {max}{unit}
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${complete ? "bg-sozo-gold" : "bg-sozo-blue"}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SalonDashboardPage() {
  const [selectedSalonId, setSelectedSalonId] = useState("sozo-harajuku");

  const selectedSalon = salons.find((s) => s.id === selectedSalonId) ?? salons[0];
  const salonStylists = useMemo(
    () => stylists.filter((s) => s.salon_id === selectedSalonId),
    [selectedSalonId]
  );

  const currentKPIs = salonKPIOverrides[selectedSalonId] ?? kpis;

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          {...fadeUp}
          transition={{ duration: 0.4 }}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-sozo-blue" />
              <h1 className="font-serif text-2xl sm:text-3xl tracking-tight">
                Salon Dashboard
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">
              What the salon owner sees — real-time performance from the SOZO
              Alliance network.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={selectedSalonId}
                onChange={(e) => setSelectedSalonId(e.target.value)}
                className="appearance-none bg-card ring-1 ring-foreground/10 rounded-lg px-4 py-2 pr-8 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-sozo-blue"
              >
                {salons.map((salon) => (
                  <option key={salon.id} value={salon.id}>
                    {salon.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            </div>
            <Badge variant="secondary" className="text-xs whitespace-nowrap">
              <Calendar className="h-3 w-3" />
              Last 30 days
            </Badge>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentKPIs.map((kpi, i) => (
            <KPICard key={kpi.label} kpi={kpi} index={i} />
          ))}
        </div>

        {/* Tabbed content */}
        <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.3 }}>
          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList>
              <TabsTrigger value="bookings" className="gap-1.5">
                <Calendar className="size-3.5" />
                Bookings
              </TabsTrigger>
              <TabsTrigger value="stylists" className="gap-1.5">
                <Users className="size-3.5" />
                Stylists
              </TabsTrigger>
              <TabsTrigger value="master" className="gap-1.5">
                <Award className="size-3.5" />
                Path to Master
              </TabsTrigger>
            </TabsList>

            {/* Bookings Tab */}
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-medium">
                    Recent International Bookings
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Guest</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Stylist
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Service
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Date
                        </TableHead>
                        <TableHead className="text-right">Revenue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span className="text-base">{booking.flag}</span>
                              <span className="font-medium text-sm">
                                {booking.guestName}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell text-muted-foreground">
                            {booking.stylist}
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-muted-foreground">
                            {booking.service}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell text-muted-foreground">
                            {booking.date}
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            ¥{booking.revenue.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Stylists Tab */}
            <TabsContent value="stylists">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {salonStylists.length > 0 ? (
                  salonStylists.map((stylist, i) => (
                    <motion.div
                      key={stylist.stylist_id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Card>
                        <CardContent className="px-5 py-4 space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-sozo-cream flex items-center justify-center text-sm font-serif shrink-0">
                              {stylist.name.charAt(0)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <h4 className="font-medium text-sm truncate">
                                  {stylist.name}
                                </h4>
                                {stylist.is_sozo_master && (
                                  <Badge className="bg-sozo-gold/10 text-sozo-gold border-sozo-gold/20 h-4 text-[9px]">
                                    <Award className="h-2.5 w-2.5" /> Master
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground truncate">
                                {stylist.specialties}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 pt-1 border-t">
                            <div className="text-center">
                              <p className="text-lg font-semibold">
                                {stylist.international_guest_count_6mo}
                              </p>
                              <p className="text-[10px] text-muted-foreground">
                                intl guests
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-semibold flex items-center justify-center gap-0.5">
                                <Star className="h-3 w-3 fill-sozo-gold text-sozo-gold" />
                                {stylist.google_review_avg_english_only}
                              </p>
                              <p className="text-[10px] text-muted-foreground">
                                rating
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-semibold">
                                ¥{Math.round(stylist.price_range_yen[1] / 1000)}k
                              </p>
                              <p className="text-[10px] text-muted-foreground">
                                avg rev
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 text-muted-foreground">
                    <Users className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No stylists found for this salon.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Path to Master Tab */}
            <TabsContent value="master">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-sozo-gold" />
                      <CardTitle className="text-base font-medium">
                        SOZO Master Requirements
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground mb-4">
                      The SOZO Master badge is earned, not bought. Stylists who
                      meet all three thresholds receive premium placement,
                      priority bookings, and the gold badge visible to guests.
                    </p>
                    {masterRequirements.map((req) => (
                      <div
                        key={req.label}
                        className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3"
                      >
                        <div className="h-8 w-8 rounded-full bg-sozo-gold/10 flex items-center justify-center shrink-0">
                          <Award className="h-4 w-4 text-sozo-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{req.label}</p>
                          <p className="text-xs text-muted-foreground">
                            Threshold: {req.threshold}{req.unit}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">
                      Stylist Progress — {selectedSalon.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {salonStylists.length > 0 ? (
                      salonStylists.slice(0, 5).map((stylist) => (
                        <div key={stylist.stylist_id} className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              {stylist.name}
                            </span>
                            {stylist.is_sozo_master && (
                              <Badge className="bg-sozo-gold/10 text-sozo-gold border-sozo-gold/20 h-4 text-[9px]">
                                Master
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-2 pl-1">
                            <ProgressBar
                              value={stylist.international_guest_count_6mo}
                              max={50}
                              label="International guests"
                              current={String(stylist.international_guest_count_6mo)}
                              unit=""
                            />
                            <ProgressBar
                              value={stylist.google_review_avg_english_only}
                              max={4.8}
                              label="English review avg"
                              current={String(stylist.google_review_avg_english_only)}
                              unit="★"
                            />
                            <ProgressBar
                              value={stylist.is_sozo_master ? 6 : (stylist.international_guest_count_6mo % 5) + 1}
                              max={6}
                              label="Months in network"
                              current={stylist.is_sozo_master ? "6+" : String((stylist.international_guest_count_6mo % 5) + 1)}
                              unit=" mo"
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-8">
                        Select a salon to see stylist progress.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
