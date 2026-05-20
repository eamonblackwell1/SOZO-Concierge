import { NextRequest } from "next/server";
import { anthropic, MODEL_ID } from "@/lib/claude";
import { stylists } from "@/data/stylists";
import { buildSystemPrompt } from "@/lib/system-prompt";
import { preFilterStylists, type FilterConstraints } from "@/lib/pre-filter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, version = "C", constraints } = body as {
      messages: { role: "user" | "assistant"; content: string }[];
      version?: "B" | "C";
      constraints?: FilterConstraints;
    };

    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Messages are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const candidates = constraints
      ? preFilterStylists(stylists, constraints)
      : stylists;

    const systemPrompt = buildSystemPrompt(version, candidates);

    const stream = anthropic.messages.stream({
      model: MODEL_ID,
      max_tokens: 2048,
      system: systemPrompt,
      messages: messages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const data = JSON.stringify({ type: "delta", text: event.delta.text });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            }
          }

          const finalMessage = await stream.finalMessage();
          const fullText =
            finalMessage.content[0].type === "text"
              ? finalMessage.content[0].text
              : "";

          const done = JSON.stringify({ type: "done", content: fullText });
          controller.enqueue(encoder.encode(`data: ${done}\n\n`));
          controller.close();
        } catch (err) {
          const error = JSON.stringify({
            type: "error",
            message: err instanceof Error ? err.message : "Stream failed",
          });
          controller.enqueue(encoder.encode(`data: ${error}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
