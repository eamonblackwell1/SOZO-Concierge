import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const MODEL_ID =
  process.env.CLAUDE_MODEL_ID || "claude-opus-4-6-20260220";

export { anthropic };
