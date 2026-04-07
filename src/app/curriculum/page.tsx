import Link from "next/link";

import { CURRICULUM_DAYS, PROGRAM_OVERVIEW } from "@/lib/curriculum-days";
import { SOURCE_VIDEO_URL } from "@/lib/site";

export const metadata = {
  title: "Program overview",
};

export default function CurriculumOverviewPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
        <Link href="/" className="transition hover:text-white">
          Home
        </Link>
        <span>·</span>
        <span className="text-zinc-600">Program</span>
      </div>

      <p className="mt-4 text-sm font-medium text-teal-400">Source inspiration</p>
      <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Seattle startup second brain · program overview</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
        This one-week intensive translates the ideas in{" "}
        <a
          href={SOURCE_VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 underline-offset-4 hover:underline"
        >
          the source video
        </a>{" "}
        — lifelogging, feeding comprehensive data to a local agent, and building durable memory — into a practical
        bootcamp for startups. Stack emphasis: <strong className="text-zinc-200">Obsidian</strong> for the knowledge layer,{" "}
        <strong className="text-zinc-200">OpenClaw</strong> (or an equivalent self-hosted agent) for action over your vault,
        with explicit DIKW and security habits throughout.
      </p>

      <div className="prose-sb mt-12 max-w-3xl">
        <h2>Goals</h2>
        <ul>
          {PROGRAM_OVERVIEW.goals.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>

        <h2>Prerequisites</h2>
        <ul>
          {PROGRAM_OVERVIEW.prerequisites.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <h2>Materials</h2>
        <ul>
          {PROGRAM_OVERVIEW.materials.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2>Facilitation &amp; assessment</h2>
        <p>{PROGRAM_OVERVIEW.facilitation}</p>
        <p className="mt-2">{PROGRAM_OVERVIEW.assessment}</p>

        <h2>Cost structure (typical)</h2>
        <p>{PROGRAM_OVERVIEW.cost}</p>

        <h2>Seattle venue ideas</h2>
        <ul>
          {PROGRAM_OVERVIEW.seattleVenues.map((v) => (
            <li key={v.name}>
              <strong className="text-zinc-300">{v.name}</strong> — {v.note}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
        <h2 className="text-lg font-semibold text-white">Daily structure (each day)</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-400">
          <li>
            <strong className="text-zinc-200">Morning:</strong> concepts, tie-in to the video, facilitated discussion.
          </li>
          <li>
            <strong className="text-zinc-200">Hands-on:</strong> Obsidian, agent setup, or integrations — facilitator support.
          </li>
          <li>
            <strong className="text-zinc-200">Afternoon (most days):</strong> deeper workshops, group activities, or security
            blocks as listed on each day page.
          </li>
          <li>
            <strong className="text-zinc-200">Homework:</strong> real data, reflections, and logs that feed the next day.
          </li>
          <li>
            <strong className="text-zinc-200">Evening (optional):</strong> async check-in — progress, blockers, wins.
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white">Days</h2>
        <ol className="mt-4 space-y-2">
          {CURRICULUM_DAYS.map((d) => (
            <li key={d.day}>
              <Link href={`/curriculum/day/${d.day}`} className="text-sm text-emerald-400 underline-offset-4 hover:underline">
                Day {d.day}: {d.title}
              </Link>
              <span className="ml-2 text-xs text-zinc-500">— {d.outcome}</span>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
