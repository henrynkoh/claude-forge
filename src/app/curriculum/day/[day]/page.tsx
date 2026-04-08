import Link from "next/link";
import { notFound } from "next/navigation";

import { getDay } from "@/lib/curriculum";

type Props = { params: Promise<{ day: string }> };

export function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6, 7].map((day) => ({ day: String(day) }));
}

export async function generateMetadata({ params }: Props) {
  const { day: raw } = await params;
  const day = Number(raw);
  const d = getDay(day);
  if (!d) return { title: "Not found" };
  return { title: `Day ${d.day}: ${d.title}` };
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{title}</h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-300">
        {items.map((x, i) => (
          <li key={`${title}-${i}`}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function DayPage({ params }: Props) {
  const { day: raw } = await params;
  const dayNum = Number(raw);
  if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > 7) notFound();
  const day = getDay(dayNum);
  if (!day) notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
        <Link href="/" className="transition hover:text-white">
          Home
        </Link>
        <span>·</span>
        <Link href="/curriculum" className="transition hover:text-white">
          Program
        </Link>
      </div>

      <p className="mt-4 text-sm font-medium text-teal-400">Day {day.day} of 7</p>
      <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{day.title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        <strong className="text-zinc-200">Focus:</strong> {day.focus}
      </p>
      <p className="mt-3 rounded-xl border border-teal-500/25 bg-teal-500/5 p-4 text-sm leading-relaxed text-zinc-300">
        <strong className="text-teal-200">Outcome:</strong> {day.outcome}
      </p>

      <div className="mt-10 space-y-10 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
        <List title="Objectives" items={day.objectives} />
        <List title="Tie-ins to the source video" items={day.videoIdeas} />
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Practical steps (execute in order)</h2>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-zinc-300">
            {day.practicalSteps.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Morning session</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-300">
            {day.morningWorkshop.morning.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
          <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-emerald-500/90">Hands-on workshop</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-300">
            {day.morningWorkshop.workshop.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </section>
        {day.afternoonWorkshop && day.afternoonWorkshop.length > 0 ? (
          <List title="Afternoon session" items={day.afternoonWorkshop} />
        ) : null}
        {day.groupActivity && day.groupActivity.length > 0 ? (
          <List title="Group activity" items={day.groupActivity} />
        ) : null}
        {day.securitySession && day.securitySession.length > 0 ? (
          <List title="Security session" items={day.securitySession} />
        ) : null}
        <List title="Homework" items={day.homework} />
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Evening (optional)</h2>
          <p className="mt-3 text-sm text-zinc-300">{day.eveningOptional}</p>
        </section>
        <List title="Facilitator notes" items={day.facilitatorNotes} />
        <List title="Deliverables" items={day.deliverables} />
      </div>

      <nav className="mt-10 flex flex-wrap justify-between gap-4 text-sm">
        {day.day > 1 ? (
          <Link
            className="text-emerald-400 underline-offset-4 hover:underline"
            href={`/curriculum/day/${day.day - 1}`}
          >
            ← Day {day.day - 1}
          </Link>
        ) : (
          <span />
        )}
        {day.day < 7 ? (
          <Link
            className="text-emerald-400 underline-offset-4 hover:underline"
            href={`/curriculum/day/${day.day + 1}`}
          >
            Day {day.day + 1} →
          </Link>
        ) : (
          <Link className="text-emerald-400 underline-offset-4 hover:underline" href="/post-week">
            Post-week →
          </Link>
        )}
      </nav>
    </main>
  );
}
