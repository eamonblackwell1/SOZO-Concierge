import { DemoNav } from "@/components/DemoNav";
import { PageTransition } from "@/components/PageTransition";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <DemoNav />
      <main className="flex-1 flex flex-col">
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  );
}
