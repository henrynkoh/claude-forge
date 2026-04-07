import Link from "next/link";

import { POST_PROGRAM } from "@/lib/curriculum-days";

export const metadata = {
  title: "Post-week",
};

export default function PostWeekPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
        <Link href="/" className="transition hover:text-white">
          Home
        </Link>
        <span>·</span>
        <span className="text-zinc-600">Post-week</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">Post-program support &amp; metrics</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
        Use this page to align sponsors and alumni on what “good” looks like after the intensive week.
      </p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Ongoing</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-400">
          {POST_PROGRAM.ongoing.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Success metrics</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-400">
          {POST_PROGRAM.metrics.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Common challenges</h2>
        <ul className="mt-8 space-y-6">
          {POST_PROGRAM.challenges.map((c) => (
            <li key={c.issue} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
              <p className="text-sm font-semibold text-amber-200">{c.issue}</p>
              <p className="mt-2 text-sm text-zinc-400">{c.mitigation}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6">
        <p className="text-sm text-zinc-300">
          Return to the{" "}
          <Link href="/curriculum/day/7" className="text-emerald-400 underline-offset-4 hover:underline">
            Day 7
          </Link>{" "}
          page for the scorecard and maintenance calendar prompts.
        </p>
      </div>
    </main>
  );
}
