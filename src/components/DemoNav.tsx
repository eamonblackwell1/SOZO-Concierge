"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  MessageSquare,
  Database,
  LayoutDashboard,
  Rocket,
  Map,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const panels = [
  {
    href: "/today",
    label: "Today's Reality",
    shortLabel: "Reality",
    icon: AlertTriangle,
    panel: 1,
  },
  {
    href: "/",
    label: "Customer Experience",
    shortLabel: "Experience",
    icon: MessageSquare,
    panel: 2,
  },
  {
    href: "/engine",
    label: "How It Works",
    shortLabel: "Engine",
    icon: Database,
    panel: 3,
  },
  {
    href: "/salon",
    label: "Salon Dashboard",
    shortLabel: "Salon",
    icon: LayoutDashboard,
    panel: 4,
  },
  {
    href: "/economics",
    label: "GTM Strategy",
    shortLabel: "GTM",
    icon: Rocket,
    panel: 5,
  },
  {
    href: "/roadmap",
    label: "Roadmap",
    shortLabel: "Roadmap",
    icon: Map,
    panel: 6,
  },
];

function NavLink({
  panel,
  isActive,
}: {
  panel: (typeof panels)[0];
  isActive: boolean;
}) {
  const Icon = panel.icon;
  return (
    <Link
      href={panel.href}
      className={cn(
        "relative flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      )}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 bg-primary/8 rounded-lg"
          transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
        />
      )}
      <Icon className="h-4 w-4 shrink-0 relative z-10" />
      <span className="hidden xl:inline relative z-10">{panel.label}</span>
      <span className="xl:hidden relative z-10">{panel.shortLabel}</span>
    </Link>
  );
}

export function DemoNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-serif text-xl font-normal tracking-tight">
              SOZO
            </span>
            <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
              Concierge
            </span>
          </Link>

          {/* Desktop nav — scrollable at medium widths */}
          <nav className="hidden md:flex items-center gap-0.5 overflow-x-auto scrollbar-none">
            {panels.map((panel) => (
              <NavLink
                key={panel.href}
                panel={panel}
                isActive={pathname === panel.href}
              />
            ))}
          </nav>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-1 mt-8">
                {panels.map((panel) => {
                  const Icon = panel.icon;
                  const isActive = pathname === panel.href;
                  return (
                    <Link
                      key={panel.href}
                      href={panel.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{panel.label}</span>
                      <span className="ml-auto text-xs opacity-50">
                        {panel.panel}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
