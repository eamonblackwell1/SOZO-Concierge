"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition, pageTransitionConfig } from "@/lib/animations";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      transition={pageTransitionConfig}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
