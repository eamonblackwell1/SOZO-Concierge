"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Printer, Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QRCard({ baseUrl }: { baseUrl?: string }) {
  const printRef = useRef<HTMLDivElement>(null);
  const callUrl = baseUrl
    ? `${baseUrl}/call`
    : typeof window !== "undefined"
      ? `${window.location.origin}/call`
      : "/call";

  const handlePrint = () => {
    const content = printRef.current;
    if (!content) return;

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SOZO Concierge - QR Card</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@300;400;500&display=swap');
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              display: flex; align-items: center; justify-content: center;
              min-height: 100vh; background: #fff;
              font-family: 'Inter', sans-serif;
            }
            @media print {
              body { margin: 0; }
              .card { box-shadow: none !important; border: 1px solid #e5e5e5; }
            }
          </style>
        </head>
        <body>${content.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-md mx-auto"
    >
      <p className="text-xs text-muted-foreground text-center mb-3">
        Printable card for Airbnb hosts to display for their guests
      </p>

      {/* Print button */}
      <div className="flex justify-center mb-4">
        <Button
          variant="outline"
          onClick={handlePrint}
          className="gap-2"
        >
          <Printer className="h-4 w-4" />
          Print Card
        </Button>
      </div>

      {/* The card itself */}
      <div ref={printRef}>
        <div
          className="card rounded-2xl overflow-hidden shadow-xl ring-1 ring-foreground/5"
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#2c2c2c",
              padding: "32px 24px 28px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "28px",
                color: "#fff",
                letterSpacing: "0.08em",
              }}
            >
              SOZO
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: "4px",
              }}
            >
              Alliance Concierge
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "28px 24px", textAlign: "center", background: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "6px", alignItems: "center", marginBottom: "16px" }}>
              <Scissors style={{ width: "16px", height: "16px", color: "#3b82f6" }} />
              <Sparkles style={{ width: "16px", height: "16px", color: "#3b82f6" }} />
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "20px",
                color: "#2c2c2c",
                marginBottom: "8px",
              }}
            >
              Book Your Tokyo
              <br />
              Salon Experience
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#888",
                lineHeight: "1.5",
                maxWidth: "280px",
                margin: "0 auto 24px",
              }}
            >
              Scan to speak with our AI concierge.
              We&apos;ll find the perfect English-speaking
              stylist for you.
            </p>

            {/* QR Code */}
            <div
              style={{
                display: "inline-block",
                padding: "16px",
                background: "#fafaf8",
                borderRadius: "16px",
                border: "1px solid #f0f0ee",
              }}
            >
              <QRCodeSVG
                value={callUrl}
                size={160}
                level="M"
                fgColor="#2c2c2c"
                bgColor="#fafaf8"
              />
            </div>

            <p
              style={{
                fontSize: "11px",
                color: "#aaa",
                marginTop: "16px",
                letterSpacing: "0.02em",
              }}
            >
              sozo-concierge.vercel.app/call
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              borderTop: "1px solid #f0f0ee",
              padding: "16px 24px",
              textAlign: "center",
              background: "#fafaf8",
            }}
          >
            <p
              style={{
                fontSize: "10px",
                color: "#999",
                lineHeight: "1.5",
              }}
            >
              All recommended salons are SOZO Alliance certified
              <br />
              for international guest hospitality.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
