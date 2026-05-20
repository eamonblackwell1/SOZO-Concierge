import { NextRequest } from "next/server";
import { anthropic, MODEL_ID } from "@/lib/claude";
import { stylists } from "@/data/stylists";
import { buildMatchingPrompt } from "@/lib/system-prompt";
import { preFilterStylists, type FilterConstraints } from "@/lib/pre-filter";

const EXTRACTION_SYSTEM_PROMPT = `You are a constraint extraction engine. Given a customer's natural-language request about finding a hair salon/stylist in Tokyo, extract structured parameters.

Return ONLY a JSON object:
{
  "service_type": "haircut" | "color" | "treatment" | "styling" | "consultation" | null,
  "date_preference": "string description or null",
  "time_preference": "morning" | "afternoon" | "evening" | "specific time" | null,
  "budget_signal": "budget-conscious" | "mid-range" | "premium" | "no-signal",
  "max_budget_yen": number | null,
  "neighborhood_preference": "string or null",
  "style_keywords": ["keyword1", "keyword2"],
  "concerns": ["concern1"],
  "personality_preference": "string or null",
  "hard_constraints": {
    "dateRange": { "start": "YYYY-MM-DD", "end": "YYYY-MM-DD" } | null,
    "timePreference": "morning" | "afternoon" | "evening" | null,
    "maxBudget": number | null,
    "neighborhood": "string" | null,
    "specialtyKeywords": ["..."] | null
  }
}

Be generous in extraction — pull out every signal, even weak ones. If something is uncertain, include it with a note. The hard_constraints object maps to our pre-filter system.`;

const REASONING_SYSTEM_PROMPT = `You are the SOZO Concierge matching engine. Given a customer request and candidate stylists, select the best match WITH detailed reasoning.

Return ONLY a JSON object:
{
  "thinking": "Your internal step-by-step reasoning about which stylist fits best and why. Be specific about factors you weighed.",
  "recommended_stylist_id": "...",
  "confidence": "high" | "medium" | "low",
  "reasoning_for_customer": "A warm explanation of why this stylist is perfect",
  "key_factors": ["factor1", "factor2", "factor3"],
  "runner_up_id": "stylist_id" | null,
  "runner_up_reason": "Why they were close but not the top pick" | null,
  "eliminated_candidates": [
    { "stylist_id": "...", "reason": "Why they didn't make the cut" }
  ]
}

Reason over: personality fit, specialties, reviews, English level, availability, location, price, portfolio themes, guest demographics. Show your full reasoning chain.`;

export interface EngineStep {
  id: string;
  label: string;
  status: "pending" | "running" | "complete" | "error";
  data?: unknown;
  duration_ms?: number;
}

export interface EngineResponse {
  steps: EngineStep[];
  system_prompt_used: string;
  model_id: string;
  total_duration_ms: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query } = body as { query: string };

    if (!query) {
      return new Response(JSON.stringify({ error: "Query is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const totalStart = Date.now();
    const steps: EngineStep[] = [];

    // Step 1: Input received
    steps.push({
      id: "input",
      label: "Input Received",
      status: "complete",
      data: { raw_query: query, character_count: query.length },
      duration_ms: 0,
    });

    // Step 2: Extract parameters
    const extractStart = Date.now();
    let extractedParams: Record<string, unknown> = {};
    let filterConstraints: FilterConstraints = {};

    try {
      const extractionResponse = await anthropic.messages.create({
        model: MODEL_ID,
        max_tokens: 512,
        system: EXTRACTION_SYSTEM_PROMPT,
        messages: [{ role: "user", content: query }],
      });

      const extractionText =
        extractionResponse.content[0].type === "text"
          ? extractionResponse.content[0].text
          : "{}";

      extractedParams = JSON.parse(extractionText);
      const hardConstraints = (extractedParams.hard_constraints || {}) as FilterConstraints;
      filterConstraints = hardConstraints;

      steps.push({
        id: "extraction",
        label: "Parameter Extraction",
        status: "complete",
        data: extractedParams,
        duration_ms: Date.now() - extractStart,
      });
    } catch (err) {
      steps.push({
        id: "extraction",
        label: "Parameter Extraction",
        status: "error",
        data: { error: err instanceof Error ? err.message : "Extraction failed" },
        duration_ms: Date.now() - extractStart,
      });
    }

    // Step 3: Pre-filter candidates
    const filterStart = Date.now();
    const allCandidates = stylists.filter((s) => s.portfolio_urls.length > 0);
    const filteredCandidates = preFilterStylists(allCandidates, filterConstraints);

    steps.push({
      id: "prefilter",
      label: "Pre-filter (Hard Constraints)",
      status: "complete",
      data: {
        total_in_database: stylists.length,
        hero_stylists: allCandidates.length,
        after_filter: filteredCandidates.length,
        constraints_applied: filterConstraints,
        removed: allCandidates.length - filteredCandidates.length,
        candidates: filteredCandidates.map((s) => ({
          id: s.stylist_id,
          name: s.name,
          salon: s.salon,
          neighborhood: s.neighborhood,
          specialties: s.specialties,
        })),
      },
      duration_ms: Date.now() - filterStart,
    });

    // Step 4: Claude reasoning
    const reasonStart = Date.now();
    const stylistContext = buildMatchingPrompt(filteredCandidates);
    const fullSystemPrompt = REASONING_SYSTEM_PROMPT + stylistContext;

    let reasoningResult: Record<string, unknown> = {};
    try {
      const reasoningResponse = await anthropic.messages.create({
        model: MODEL_ID,
        max_tokens: 1024,
        system: fullSystemPrompt,
        messages: [{ role: "user", content: query }],
      });

      const reasoningText =
        reasoningResponse.content[0].type === "text"
          ? reasoningResponse.content[0].text
          : "{}";

      reasoningResult = JSON.parse(reasoningText);

      steps.push({
        id: "reasoning",
        label: "AI Reasoning (Claude)",
        status: "complete",
        data: reasoningResult,
        duration_ms: Date.now() - reasonStart,
      });
    } catch (err) {
      steps.push({
        id: "reasoning",
        label: "AI Reasoning (Claude)",
        status: "error",
        data: { error: err instanceof Error ? err.message : "Reasoning failed" },
        duration_ms: Date.now() - reasonStart,
      });
    }

    // Step 5: Structured output
    const outputStart = Date.now();
    const structuredOutput = {
      recommended_stylist_id: reasoningResult.recommended_stylist_id || null,
      confidence: reasoningResult.confidence || "unknown",
      reasoning_for_customer: reasoningResult.reasoning_for_customer || "",
      key_factors: reasoningResult.key_factors || [],
      runner_up_id: reasoningResult.runner_up_id || null,
    };

    steps.push({
      id: "output",
      label: "Structured JSON Output",
      status: "complete",
      data: structuredOutput,
      duration_ms: Date.now() - outputStart,
    });

    const response: EngineResponse = {
      steps,
      system_prompt_used: fullSystemPrompt,
      model_id: MODEL_ID,
      total_duration_ms: Date.now() - totalStart,
    };

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Engine API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process engine request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
