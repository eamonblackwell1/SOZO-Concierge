import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const MODEL_ID =
  process.env.CLAUDE_MODEL_ID || "claude-sonnet-4-20250514";

export { anthropic };
