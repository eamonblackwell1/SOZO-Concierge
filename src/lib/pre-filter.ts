import { type Stylist } from "@/data/stylists";

export interface FilterConstraints {
  dateRange?: { start: string; end: string };
  timePreference?: string;
  maxBudget?: number;
  neighborhood?: string;
  specialtyKeywords?: string[];
}

function slotMatchesTimePreference(slot: string, pref: string): boolean {
  const hour = parseInt(slot.split(":")[0], 10);
  if (pref === "morning") return hour < 12;
  if (pref === "afternoon") return hour >= 12 && hour < 17;
  if (pref === "evening") return hour >= 17;
  const prefHour = parseInt(pref.split(":")[0], 10);
  if (!isNaN(prefHour)) return Math.abs(hour - prefHour) <= 1;
  return true;
}

export function preFilterStylists(
  stylists: Stylist[],
  constraints: FilterConstraints
): Stylist[] {
  if (!constraints || Object.keys(constraints).length === 0) return stylists;

  return stylists.filter((s) => {
    if (constraints.maxBudget && s.price_range_yen[0] > constraints.maxBudget)
      return false;

    if (
      constraints.neighborhood &&
      s.neighborhood.toLowerCase() !== constraints.neighborhood.toLowerCase()
    )
      return false;

    if (constraints.dateRange) {
      const { start, end } = constraints.dateRange;
      const hasSlotInRange = s.schedule_next_14_days.some(
        (day) => day.date >= start && day.date <= end && day.slots.length > 0
      );
      if (!hasSlotInRange) return false;
    }

    if (constraints.timePreference) {
      const hasMatchingTime = s.schedule_next_14_days.some((day) =>
        day.slots.some((slot) =>
          slotMatchesTimePreference(slot, constraints.timePreference!)
        )
      );
      if (!hasMatchingTime) return false;
    }

    if (constraints.specialtyKeywords?.length) {
      const haystack = `${s.specialties} ${s.portfolio_themes}`.toLowerCase();
      const match = constraints.specialtyKeywords.some((kw) =>
        haystack.includes(kw.toLowerCase())
      );
      if (!match) return false;
    }

    return true;
  });
}
