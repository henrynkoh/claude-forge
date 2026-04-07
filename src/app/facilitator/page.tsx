import Link from "next/link";

import { PROGRAM_OVERVIEW } from "@/lib/curriculum-days";
import { SOURCE_VIDEO_URL } from "@/lib/site";

export const metadata = {
  title: "Facilitator guide",
};

const sampleSchedule = [
  {
    block: "Week before",
    items: [
      "Confirm venue, Wi‑Fi, power strips, and screen",
      "Share prerequisites + install links (Obsidian, terminal, agent repo)",
      "Seed shared templates: Decision Record, Customer Insight, Capture playbook",
      "Optional: peer Telegram/Slack for agent testing",
    ],
  },
  {
    block: "Typical day (4–6 hours structured)",
    items: [
      "00:00–00:15 — Check-in, parking lot, safety reminder",
      "00:15–01:15 — Morning: concepts + tie to source video",
      "01:15–01:30 — Break",
      "01:30–03:00 — Hands-on workshop block 1",
      "03:00–03:15 — Break",
      "03:15–04:30 — Afternoon: deeper lab or group activity",
      "04:30–04:45 — Deliverables + homework",
      "04:45–05:00 — Optional async instructions for evening check-in",
    ],
  },
  { block: "Day 3", items: ["Extra TA coverage for installs; security session is mandatory."] },
  { block: "Day 5–6", items: ["Optional guest founder (15–20 min); confirm AV and bio."] },
  { block: "Day 7", items: ["Timed demos; feedback slips; certificates; photo release if marketing."] },
] as const;

export default function FacilitatorPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
        <Link href="/" className="transition hover:text-white">
          Home
        </Link>
        <span>·</span>
        <span className="text-zinc-600">Facilitator</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">Facilitator checklist</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
        Run alongside each day page. This cohort expects comfort with Obsidian, Markdown, local agents, and frank security
        conversations — plus patience for mixed technical levels in founder teams.
      </p>

      <div className="mt-10 space-y-6 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6">
        <h2 className="text-lg font-semibold text-white">Source video</h2>
        <p className="text-sm text-zinc-400">
          Keep{" "}
          <a href={SOURCE_VIDEO_URL} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">
            the reference video
          </a>{" "}
          bookmarked for Day 1–2. Preview chapters on lifelogging, agent interaction, and privacy themes so discussions stay
          grounded.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white">Logistics snapshot</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-400">
          <li>
            <strong className="text-zinc-200">Audience:</strong> {PROGRAM_OVERVIEW.audience}
          </li>
          <li>
            <strong className="text-zinc-200">Size:</strong> {PROGRAM_OVERVIEW.groupSize}
          </li>
          <li>
            <strong className="text-zinc-200">Cadence:</strong> {PROGRAM_OVERVIEW.duration}
          </li>
          <li>
            <strong className="text-zinc-200">Format:</strong> {PROGRAM_OVERVIEW.format}
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white">Sample schedule blocks</h2>
        <ul className="mt-6 space-y-6">
          {sampleSchedule.map((s) => (
            <li key={s.block} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
              <p className="text-sm font-semibold text-emerald-400">{s.block}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-400">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/30 p-6">
        <h2 className="text-lg font-semibold text-white">Promotion &amp; partners (Seattle)</h2>
        <p className="mt-2 text-sm text-zinc-400">
          LinkedIn, Seattle Startup Week communities, UW networks, and local Meetups — emphasize{" "}
          <strong className="text-zinc-300">practical, local-first AI</strong> with clear privacy framing. Scholarships:
          allocate seats before public launch when possible.
        </p>
      </div>
    </main>
  );
}
