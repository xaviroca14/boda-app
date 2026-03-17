import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marina & Xavi",
  description: "3 · 4 · 5 abril 2026 — Viladrau",

  openGraph: {
    title: "Marina & Xavi",
    description: "3 · 4 · 5 abril 2026 — Viladrau",
    images: ["/preview.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marina & Xavi",
    description: "3 · 4 · 5 abril 2026 — Viladrau",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <body
        translate="no"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}