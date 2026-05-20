import { NextRequest, NextResponse } from "next/server";

interface VapiEndOfCallReport {
  type: "end-of-call-report";
  call: {
    id: string;
    status: string;
    startedAt?: string;
    endedAt?: string;
  };
  summary?: string;
  transcript?: string;
  recordingUrl?: string;
  messages?: Array<{
    role: "assistant" | "user" | "system";
    content: string;
    timestamp?: string;
  }>;
}

interface VapiWebhookPayload {
  message: VapiEndOfCallReport | { type: string; [key: string]: unknown };
}

export async function POST(request: NextRequest) {
  const secret = process.env.VAPI_WEBHOOK_SECRET;
  if (secret) {
    const headerSecret = request.headers.get("x-vapi-secret");
    if (headerSecret !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } else {
    console.warn(
      "[vapi-webhook] VAPI_WEBHOOK_SECRET not set — skipping auth check"
    );
  }

  let payload: VapiWebhookPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { message } = payload;

  if (message.type === "end-of-call-report") {
    const report = message as VapiEndOfCallReport;
    console.log("[vapi-webhook] End of call report received:", {
      callId: report.call?.id,
      status: report.call?.status,
      summary: report.summary?.slice(0, 200),
      transcriptLength: report.transcript?.length,
    });

    // TODO: Run the match pipeline on report.transcript to get a real recommendation.
    // For now, return a mock stylist match that the /call page can consume.
    return NextResponse.json({
      status: "ok",
      recommendation: {
        stylist_id: "mori-takeshi",
        confidence: 0.92,
        match_reasons: [
          "Native-level English",
          "Creative cuts specialist",
          "Available this week",
        ],
      },
    });
  }

  // Acknowledge other event types
  return NextResponse.json({ status: "ok" });
}
