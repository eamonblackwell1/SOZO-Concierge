import { NextRequest, NextResponse } from "next/server";
import { anthropic, MODEL_ID } from "@/lib/claude";
import { stylists } from "@/data/stylists";
import { buildMatchingPrompt } from "@/lib/system-prompt";
import { preFilterStylists, type FilterConstraints } from "@/lib/pre-filter";

const MATCH_SYSTEM_PROMPT = `You are the SOZO Concierge matching engine. Given a customer request and a set of candidate stylists, select the best match.

Return ONLY a JSON object with this structure:
{
  "recommended_stylist_id": "...",
  "confidence": "high" | "medium",
  "reasoning_for_customer": "A warm, conversational explanation of why this stylist is perfect",
  "key_factors": ["factor1", "factor2", "factor3"],
  "alternative_if_unavailable": "stylist_id" | null,
  "what_i_need_to_know_more": null | "question to ask"
}

Reason over the full stylist profiles — personality, specialties, reviews, English level, availability, location, price. Match on vibes and fit, not just hard criteria.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query, constraints } = body as {
      query: string;
      constraints?: FilterConstraints;
    };

    if (!query) {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    const candidates = constraints
      ? preFilterStylists(stylists, constraints)
      : stylists;

    const stylistContext = buildMatchingPrompt(candidates);

    const response = await anthropic.messages.create({
      model: MODEL_ID,
      max_tokens: 512,
      system: MATCH_SYSTEM_PROMPT + stylistContext,
      messages: [{ role: "user", content: query }],
    });

    const content =
      response.content[0].type === "text" ? response.content[0].text : "";

    try {
      const parsed = JSON.parse(content);
      return NextResponse.json(parsed);
    } catch {
      return NextResponse.json({ raw: content });
    }
  } catch (error) {
    console.error("Match API error:", error);
    return NextResponse.json(
      { error: "Failed to process match request" },
      { status: 500 }
    );
  }
}
