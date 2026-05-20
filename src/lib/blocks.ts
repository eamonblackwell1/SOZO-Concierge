export interface InspirationImage {
  id: string;
  url: string;
  alt: string;
  category: "hairstyle" | "color" | "neighborhood";
  tags: string[];
}

export type Block =
  | { type: "text"; content: string }
  | { type: "image-row"; image_ids: string[] }
  | { type: "stylist-mini"; stylist_ids: string[] }
  | {
      type: "stylist-card";
      stylist_id: string;
      reasoning: string;
      key_factors: string[];
    }
  | { type: "suggestions"; chips: string[] };

export interface AgentTurn {
  blocks: Block[];
}

export interface BlockChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  blocks?: Block[];
  timestamp: number;
}

export function parseBlocksFromResponse(raw: string): Block[] {
  const fenceMatch = raw.match(/```json\s*([\s\S]*?)```/);
  if (fenceMatch) {
    try {
      const parsed = JSON.parse(fenceMatch[1]);
      if (Array.isArray(parsed)) return parsed as Block[];
      if (parsed.blocks && Array.isArray(parsed.blocks))
        return parsed.blocks as Block[];
    } catch {
      // Fall through to plain text
    }
  }

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as Block[];
    if (parsed.blocks && Array.isArray(parsed.blocks))
      return parsed.blocks as Block[];
  } catch {
    // Fall through to plain text
  }

  return [{ type: "text", content: raw }];
}

export function extractTextFromBlocks(blocks: Block[]): string {
  return blocks
    .filter((b): b is Block & { type: "text" } => b.type === "text")
    .map((b) => b.content)
    .join("\n\n");
}
