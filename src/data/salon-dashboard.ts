export interface KPI {
  label: string;
  value: string;
  change: string;
  changePositive: boolean;
  sublabel?: string;
}

export interface Booking {
  id: string;
  guestName: string;
  guestCountry: string;
  flag: string;
  stylist: string;
  service: string;
  date: string;
  revenue: number;
}

export interface MasterRequirement {
  label: string;
  threshold: number;
  unit: string;
}

export const masterRequirements: MasterRequirement[] = [
  { label: "International guests served", threshold: 50, unit: "guests" },
  { label: "English-language review average", threshold: 4.8, unit: "★" },
  { label: "Months in network", threshold: 6, unit: "months" },
];

export const kpis: KPI[] = [
  {
    label: "International Bookings",
    value: "38",
    change: "+24%",
    changePositive: true,
    sublabel: "this month",
  },
  {
    label: "Foreign Guest Revenue",
    value: "¥1,420,000",
    change: "+31%",
    changePositive: true,
    sublabel: "this month",
  },
  {
    label: "Avg Booking Value",
    value: "¥37,400",
    change: "vs ¥18,200 domestic",
    changePositive: true,
    sublabel: "international guests",
  },
  {
    label: "Repeat Rate",
    value: "22%",
    change: "+4pp",
    changePositive: true,
    sublabel: "guests who rebook on return",
  },
];

export const recentBookings: Booking[] = [
  {
    id: "b-001",
    guestName: "Sarah Mitchell",
    guestCountry: "United States",
    flag: "🇺🇸",
    stylist: "Mori Takeshi",
    service: "Balayage + Cut",
    date: "2026-05-14",
    revenue: 42000,
  },
  {
    id: "b-002",
    guestName: "Emma Laurent",
    guestCountry: "France",
    flag: "🇫🇷",
    stylist: "Sato Yuki",
    service: "Color Correction",
    date: "2026-05-13",
    revenue: 38000,
  },
  {
    id: "b-003",
    guestName: "James Chen",
    guestCountry: "Australia",
    flag: "🇦🇺",
    stylist: "Mori Takeshi",
    service: "Creative Cut",
    date: "2026-05-12",
    revenue: 28000,
  },
  {
    id: "b-004",
    guestName: "Lina Bergström",
    guestCountry: "Sweden",
    flag: "🇸🇪",
    stylist: "Tanaka Hana",
    service: "Japanese Straightening",
    date: "2026-05-11",
    revenue: 55000,
  },
  {
    id: "b-005",
    guestName: "David Park",
    guestCountry: "South Korea",
    flag: "🇰🇷",
    stylist: "Sato Yuki",
    service: "Layered Cut + Style",
    date: "2026-05-10",
    revenue: 32000,
  },
  {
    id: "b-006",
    guestName: "Maria Santos",
    guestCountry: "Brazil",
    flag: "🇧🇷",
    stylist: "Mori Takeshi",
    service: "Highlights + Toner",
    date: "2026-05-09",
    revenue: 45000,
  },
  {
    id: "b-007",
    guestName: "Oliver Thompson",
    guestCountry: "United Kingdom",
    flag: "🇬🇧",
    stylist: "Tanaka Hana",
    service: "Cut + Head Spa",
    date: "2026-05-08",
    revenue: 35000,
  },
  {
    id: "b-008",
    guestName: "Sophie Müller",
    guestCountry: "Germany",
    flag: "🇩🇪",
    stylist: "Sato Yuki",
    service: "Balayage",
    date: "2026-05-07",
    revenue: 40000,
  },
  {
    id: "b-009",
    guestName: "Ryan O'Brien",
    guestCountry: "Ireland",
    flag: "🇮🇪",
    stylist: "Mori Takeshi",
    service: "Men's Cut + Color",
    date: "2026-05-06",
    revenue: 25000,
  },
  {
    id: "b-010",
    guestName: "Yuki Andersson",
    guestCountry: "Sweden",
    flag: "🇸🇪",
    stylist: "Tanaka Hana",
    service: "Perm + Cut",
    date: "2026-05-05",
    revenue: 48000,
  },
];

export const salonKPIOverrides: Record<string, KPI[]> = {
  "sozo-harajuku": kpis,
  "dal-shibuya": [
    { label: "International Bookings", value: "24", change: "+18%", changePositive: true, sublabel: "this month" },
    { label: "Foreign Guest Revenue", value: "¥890,000", change: "+22%", changePositive: true, sublabel: "this month" },
    { label: "Avg Booking Value", value: "¥34,200", change: "vs ¥17,800 domestic", changePositive: true, sublabel: "international guests" },
    { label: "Repeat Rate", value: "18%", change: "+2pp", changePositive: true, sublabel: "guests who rebook on return" },
  ],
  "bikka-aoyama": [
    { label: "International Bookings", value: "31", change: "+29%", changePositive: true, sublabel: "this month" },
    { label: "Foreign Guest Revenue", value: "¥1,180,000", change: "+35%", changePositive: true, sublabel: "this month" },
    { label: "Avg Booking Value", value: "¥41,600", change: "vs ¥19,500 domestic", changePositive: true, sublabel: "international guests" },
    { label: "Repeat Rate", value: "25%", change: "+5pp", changePositive: true, sublabel: "guests who rebook on return" },
  ],
};
