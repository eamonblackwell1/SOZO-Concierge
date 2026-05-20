"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, ListChecks, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type Block, type BlockChatMessage, parseBlocksFromResponse } from "@/lib/blocks";
import { getGreeting } from "@/lib/system-prompt";
import { stylists, type Stylist } from "@/data/stylists";
import { BlockRenderer } from "./BlockRenderer";
import { ContextPane, type ContextPaneState } from "./ContextPane";
import { BookingFlow } from "@/components/BookingFlow";

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex gap-3"
    >
      <div className="w-7 h-7 rounded-full bg-sozo-blue flex items-center justify-center shrink-0">
        <Sparkles className="h-3.5 w-3.5 text-white" />
      </div>
      <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function UserBubble({ content }: { content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex justify-end"
    >
      <div className="max-w-[85%] md:max-w-[75%] rounded-2xl rounded-br-md px-4 py-2.5 text-sm leading-relaxed bg-primary text-primary-foreground">
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </motion.div>
  );
}

function AssistantMessage({
  message,
  isStreaming,
  streamingText,
  onSuggestionClick,
  onStylistSelect,
  onStylistBook,
}: {
  message: BlockChatMessage;
  isStreaming?: boolean;
  streamingText?: string;
  onSuggestionClick: (chip: string) => void;
  onStylistSelect?: (stylist: Stylist) => void;
  onStylistBook?: (stylist: Stylist) => void;
}) {
  const blocks = message.blocks ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex gap-3"
    >
      <div className="w-7 h-7 rounded-full bg-sozo-blue flex items-center justify-center shrink-0 mt-1">
        <Sparkles className="h-3.5 w-3.5 text-white" />
      </div>
      <div className="max-w-[85%] md:max-w-[85%] min-w-0 flex-1">
        <BlockRenderer
          blocks={blocks}
          isStreaming={isStreaming}
          streamingText={streamingText}
          onSuggestionClick={onSuggestionClick}
          onStylistSelect={onStylistSelect}
          onStylistBook={onStylistBook}
        />
      </div>
    </motion.div>
  );
}

export function ChatPanel() {
  const [messages, setMessages] = useState<BlockChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [version, setVersion] = useState<"B" | "C">("C");
  const [quizMode, setQuizMode] = useState(false);
  const [contextPane, setContextPane] = useState<ContextPaneState>({
    mode: "empty",
  });
  const [bookingStylist, setBookingStylist] = useState<Stylist | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isStreaming, streamingText, scrollToBottom]);

  const initGreeting = useCallback(
    (v: "B" | "C") => {
      const greetingJson = getGreeting(v);
      const blocks = parseBlocksFromResponse(greetingJson);
      setMessages([
        {
          id: `greeting-${Date.now()}`,
          role: "assistant",
          content: greetingJson,
          blocks,
          timestamp: Date.now(),
        },
      ]);
      setHasStarted(true);
    },
    []
  );

  useEffect(() => {
    if (!hasStarted) {
      initGreeting(version);
    }
  }, [hasStarted, version, initGreeting]);

  const handleVersionToggle = (newVersion: "B" | "C") => {
    setVersion(newVersion);
    setMessages([]);
    setHasStarted(false);
    setBookingStylist(null);
    setContextPane({ mode: "empty" });
    setTimeout(() => initGreeting(newVersion), 50);
  };

  const updateContextFromBlocks = (blocks: Block[]) => {
    for (const block of blocks) {
      if (block.type === "stylist-card") {
        const stylist = stylists.find(
          (s) => s.stylist_id === block.stylist_id
        );
        if (stylist) {
          setContextPane({
            mode: "focused",
            stylist,
            reasoning: block.reasoning,
            keyFactors: block.key_factors,
          });
          return;
        }
      }
      if (block.type === "stylist-mini") {
        const matched = block.stylist_ids
          .map((id) => stylists.find((s) => s.stylist_id === id))
          .filter((s): s is Stylist => s !== undefined);
        if (matched.length > 0) {
          setContextPane({ mode: "shortlist", stylists: matched });
          return;
        }
      }
    }
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMsg: BlockChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: content.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setIsStreaming(true);
    setStreamingText("");

    const allMessages = [...messages, userMsg];
    const apiMessages = allMessages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages, version }),
      });

      if (!response.ok) throw new Error("Chat request failed");

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let accumulated = "";
      let fullContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        accumulated += decoder.decode(value, { stream: true });
        const lines = accumulated.split("\n\n");
        accumulated = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const event = JSON.parse(line.slice(6));
            if (event.type === "delta") {
              fullContent += event.text;
              setStreamingText(fullContent);
            } else if (event.type === "done") {
              fullContent = event.content;
            }
          } catch {
            // skip malformed events
          }
        }
      }

      const blocks = parseBlocksFromResponse(fullContent);
      const assistantMsg: BlockChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: fullContent,
        blocks,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      updateContextFromBlocks(blocks);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: "Something went wrong",
          blocks: [
            {
              type: "text",
              content:
                "I'm sorry, something went wrong. Could you try again?",
            },
          ],
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      setStreamingText("");
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleSuggestionClick = (chip: string) => {
    sendMessage(chip);
  };

  const handleStylistSelect = (stylist: Stylist) => {
    setContextPane({
      mode: "focused",
      stylist,
    });
  };

  const handleBook = (stylist: Stylist) => {
    setBookingStylist(stylist);
  };

  if (bookingStylist) {
    return (
      <div className="flex flex-col h-full">
        <div className="border-b bg-background px-4 py-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setBookingStylist(null)}
            className="gap-1.5 -ml-2"
          >
            Back to chat
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-md mx-auto">
            <BookingFlow
              stylist={bookingStylist}
              onClose={() => setBookingStylist(null)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Top bar */}
      <div className="border-b bg-background/95 backdrop-blur px-4 py-2 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1 h-5 text-[10px]">
            <Shield className="h-2.5 w-2.5 text-sozo-blue" />
            SOZO Inside
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-muted p-0.5">
            <button
              onClick={() => handleVersionToggle("B")}
              className={cn(
                "px-2 py-0.5 rounded-md text-[11px] font-medium transition-all",
                version === "B"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              v.B
            </button>
            <button
              onClick={() => handleVersionToggle("C")}
              className={cn(
                "px-2 py-0.5 rounded-md text-[11px] font-medium transition-all",
                version === "C"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              v.C
            </button>
          </div>
          <button
            onClick={() => setQuizMode(!quizMode)}
            className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium transition-all",
              quizMode
                ? "bg-sozo-blue/10 text-sozo-blue"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <ListChecks className="h-3 w-3" />
            Quiz
          </button>
        </div>
      </div>

      {/* Main content area -- split on desktop */}
      <div className="flex-1 flex min-h-0">
        {/* Chat column */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto" ref={scrollRef}>
            <div className="max-w-2xl mx-auto p-4 space-y-5 pb-4">
              <AnimatePresence>
                {messages.map((msg) =>
                  msg.role === "user" ? (
                    <UserBubble key={msg.id} content={msg.content} />
                  ) : (
                    <AssistantMessage
                      key={msg.id}
                      message={msg}
                      onSuggestionClick={handleSuggestionClick}
                      onStylistSelect={handleStylistSelect}
                      onStylistBook={handleBook}
                    />
                  )
                )}
              </AnimatePresence>

              {isStreaming && streamingText && messages[messages.length - 1]?.role === "user" && (
                <AssistantMessage
                  message={{
                    id: "streaming",
                    role: "assistant",
                    content: streamingText,
                    blocks: [],
                    timestamp: Date.now(),
                  }}
                  isStreaming
                  streamingText={streamingText}
                  onSuggestionClick={handleSuggestionClick}
                />
              )}

              {isLoading && !streamingText && <TypingIndicator />}
            </div>
          </div>

          {/* Input */}
          <div className="border-t bg-background p-3 shrink-0">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-end gap-2">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tell me about your ideal salon visit..."
                    rows={1}
                    className="w-full resize-none rounded-xl border bg-muted/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sozo-blue/20 focus:border-sozo-blue/40 min-h-[42px] max-h-[120px]"
                    style={
                      { fieldSizing: "content" } as React.CSSProperties
                    }
                  />
                </div>
                <Button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="h-[42px] w-[42px] rounded-xl bg-sozo-blue hover:bg-sozo-blue-hover text-white shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-2">
                SOZO Concierge · All recommended salons are SOZO Alliance
                certified
              </p>
            </div>
          </div>
        </div>

        {/* Context pane -- desktop only */}
        <div className="hidden md:block w-[380px] shrink-0">
          <ContextPane
            state={contextPane}
            onStylistSelect={handleStylistSelect}
            onBook={handleBook}
          />
        </div>
      </div>
    </div>
  );
}
