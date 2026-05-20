import type { Block } from "./blocks";

/** @deprecated Use BlockChatMessage from lib/blocks.ts for the new chat shell */
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  blocks?: Block[];
  recommendation?: StylistRecommendation;
  timestamp: number;
}

export interface StylistRecommendation {
  action: "recommend";
  stylist_id: string;
  confidence: "high" | "medium";
  reasoning_for_customer: string;
  key_factors: string[];
  alternative_id: string | null;
}

export interface ConversationState {
  messages: ChatMessage[];
  version: "B" | "C";
  quizMode: boolean;
  extractedConstraints: ExtractedConstraints;
}

export interface ExtractedConstraints {
  service?: string;
  dateRange?: { start: string; end: string };
  timePreference?: string;
  maxBudget?: number;
  neighborhood?: string;
  hairType?: string;
  specialtyKeywords?: string[];
  concerns?: string[];
}
