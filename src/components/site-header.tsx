import Link from "next/link";

import { DashboardHeaderBox } from "@/components/dashboard/DashboardHeaderBox";
import { SITE_NAME } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Rental HQ" },
  { href: "/rentals", label: "Properties" },
  { href: "/curriculum", label: "Program" },
  { href: "/curriculum/day/1", label: "Day 1" },
  { href: "/prompts", label: "Prompts" },
  { href: "/facilitator", label: "Facilitator" },
  { href: "/post-week", label: "Post-week" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-white hover:text-teal-200"
          >
            {SITE_NAME}
          </Link>
          <DashboardHeaderBox />
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-400 sm:text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
