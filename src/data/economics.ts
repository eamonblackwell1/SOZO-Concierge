export interface SliderConfig {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  format: (v: number) => string;
}

export interface Scenario {
  id: string;
  label: string;
  description: string;
  values: Record<string, number>;
}

export interface DerivedMetric {
  label: string;
  key: string;
  format: (v: number) => string;
  highlight?: boolean;
}

const formatYen = (v: number) => {
  if (v >= 1_000_000) return `¥${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `¥${(v / 1_000).toFixed(0)}k`;
  return `¥${v.toLocaleString()}`;
};

const formatYenFull = (v: number) => `¥${Math.round(v).toLocaleString()}`;

const formatPercent = (v: number) => `${v}%`;

const formatCount = (v: number) => Math.round(v).toLocaleString();

const formatMultiplier = (v: number) => `${v.toFixed(1)}x`;

export const sliders: SliderConfig[] = [
  {
    id: "adSpend",
    label: "Monthly Ad Spend",
    min: 100_000,
    max: 5_000_000,
    step: 50_000,
    defaultValue: 500_000,
    format: formatYen,
  },
  {
    id: "cpa",
    label: "Cost per Acquisition",
    min: 1_000,
    max: 10_000,
    step: 250,
    defaultValue: 3_500,
    format: formatYen,
  },
  {
    id: "avgBookingValue",
    label: "Avg Booking Value",
    min: 15_000,
    max: 60_000,
    step: 1_000,
    defaultValue: 37_400,
    format: formatYenFull,
  },
  {
    id: "takeRate",
    label: "SOZO Take Rate",
    min: 10,
    max: 30,
    step: 1,
    defaultValue: 15,
    format: formatPercent,
  },
  {
    id: "salonCount",
    label: "Alliance Salon Count",
    min: 5,
    max: 100,
    step: 1,
    defaultValue: 5,
    format: (v) => `${v} salons`,
  },
];

export const scenarios: Scenario[] = [
  {
    id: "pilot",
    label: "Pilot",
    description: "5 salons, conservative spend, proving the model",
    values: {
      adSpend: 300_000,
      cpa: 4_500,
      avgBookingValue: 35_000,
      takeRate: 12,
      salonCount: 5,
    },
  },
  {
    id: "growth",
    label: "Growth",
    description: "25 salons, optimized CPA, expanding across Tokyo",
    values: {
      adSpend: 1_500_000,
      cpa: 2_800,
      avgBookingValue: 38_000,
      takeRate: 15,
      salonCount: 25,
    },
  },
  {
    id: "scale",
    label: "Scale",
    description: "60+ salons, network effects reducing CPA",
    values: {
      adSpend: 4_000_000,
      cpa: 1_800,
      avgBookingValue: 40_000,
      takeRate: 18,
      salonCount: 65,
    },
  },
];

export const derivedMetrics: DerivedMetric[] = [
  {
    label: "Monthly Bookings",
    key: "monthlyBookings",
    format: formatCount,
  },
  {
    label: "Monthly GMV",
    key: "monthlyGMV",
    format: formatYenFull,
  },
  {
    label: "SOZO Monthly Revenue",
    key: "sozoRevenue",
    format: formatYenFull,
    highlight: true,
  },
  {
    label: "ROAS",
    key: "roas",
    format: formatMultiplier,
    highlight: true,
  },
  {
    label: "Per-Salon Monthly Uplift",
    key: "perSalonUplift",
    format: formatYenFull,
  },
  {
    label: "Annual Run Rate",
    key: "annualRunRate",
    format: formatYenFull,
  },
];

export function calculateMetrics(values: Record<string, number>) {
  const { adSpend, cpa, avgBookingValue, takeRate, salonCount } = values;

  const monthlyBookings = adSpend / cpa;
  const monthlyGMV = monthlyBookings * avgBookingValue;
  const sozoRevenue = monthlyGMV * (takeRate / 100);
  const roas = sozoRevenue / adSpend;
  const perSalonUplift = monthlyGMV / salonCount;
  const annualRunRate = sozoRevenue * 12;

  return {
    monthlyBookings,
    monthlyGMV,
    sozoRevenue,
    roas,
    perSalonUplift,
    annualRunRate,
  };
}

export const assumptions = [
  "Bookings are paid-acquisition only — organic/referral traffic excluded (real-world upside).",
  "No repeat-visit revenue modeled. Pilot data shows ~22% rebook on return trips.",
  "Seasonality excluded — Tokyo tourism peaks in spring and autumn add 20–40% volume.",
  "CPA assumes Google/Meta ads targeting inbound tourists with English-language creative.",
  "Take rate is on gross booking value (salon receives remainder). Industry range: 10–25%.",
  "Average booking value based on pilot data for international guests (¥37,400 vs ¥18,200 domestic).",
  "Per-salon uplift assumes even distribution. In practice, Harajuku/Aoyama salons index higher.",
];
