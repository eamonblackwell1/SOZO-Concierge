"use client";

import { useState } from "react";
import { Globe, MessageSquare, Mic, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatPanel } from "@/components/Chat";
import { AirbnbEmailMockup } from "@/components/AirbnbEmailMockup";
import { DiscoveryChannels } from "@/components/DiscoveryChannels";
import { VoiceTab } from "@/components/VoiceTab";

type SubTab = "discovery" | "chat" | "voice" | "email";

const tabs: { id: SubTab; label: string; icon: typeof MessageSquare }[] = [
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "voice", label: "Voice", icon: Mic },
  { id: "email", label: "Email Preview", icon: Mail },
  { id: "discovery", label: "Discovery", icon: Globe },
];

export default function CustomerExperiencePage() {
  const [activeTab, setActiveTab] = useState<SubTab>("chat");

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Sub-tab bar */}
      <div className="border-b bg-background/95 backdrop-blur px-4 shrink-0">
        <div className="max-w-7xl mx-auto flex gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium border-b-2 transition-colors -mb-px",
                  isActive
                    ? "border-sozo-blue text-sozo-blue"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground/20"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="flex-1 min-h-0">
        {activeTab === "discovery" && <DiscoveryChannels />}

        {activeTab === "chat" && <ChatPanel />}

        {activeTab === "voice" && <VoiceTab />}

        {activeTab === "email" && (
          <div className="h-full overflow-y-auto p-6">
            <AirbnbEmailMockup />
          </div>
        )}
      </div>
    </div>
  );
}
