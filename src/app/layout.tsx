import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SITE_DISCLAIMER } from "@/lib/disclaimer";
import { SITE_NAME } from "@/lib/site";

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
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Seven-day Seattle-area cohort: Claude Code + Claude Forge — eleven specialized agents, MCP tools, slash commands, and full plan→ship pipelines for early-stage startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 font-sans text-zinc-100">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-white/10 bg-zinc-950 py-8">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <nav className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-400">
              <Link className="transition hover:text-teal-300" href="/dashboard">
                Rental HQ
              </Link>
              <Link className="transition hover:text-teal-300" href="/rentals">
                Property registry
              </Link>
            </nav>
            <p className="text-xs leading-relaxed text-zinc-500">{SITE_DISCLAIMER}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
