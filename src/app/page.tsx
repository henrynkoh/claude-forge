import Link from "next/link";

import { GitHubFab } from "@/components/landing/GitHubFab";
import { LandingNavDesktop, LandingNavMobile } from "@/components/landing/LandingNav";
import { CURRICULUM_DAYS, POST_PROGRAM, PROGRAM_OVERVIEW } from "@/lib/curriculum-days";
import { SOURCE_VIDEO_URL, getGithubBlobUrl } from "@/lib/site";

const features = [
  {
    title: "Video-aligned execution",
    desc: "Each day maps the lifelogging + “feed the system” arc to startup data: interviews, metrics, roadmap, and ops — ending in agent-grounded answers and automations.",
    accent: "from-teal-500/40 to-cyan-600/25",
    border: "border-teal-500/30",
    icon: "▸",
  },
  {
    title: "DIKW you can run",
    desc: "Explicit progression from raw data to information, knowledge, and decision wisdom — with Obsidian structure and agent prompts that cite your notes.",
    accent: "from-emerald-500/40 to-teal-600/25",
    border: "border-emerald-500/30",
    icon: "◇",
  },
  {
    title: "Local-first, verify-first",
    desc: "Self-hosted agents, read-only integrations where possible, and facilitator-led security blocks — so speed does not replace judgment.",
    accent: "from-amber-500/40 to-orange-600/25",
    border: "border-amber-500/30",
    icon: "◎",
  },
  {
    title: "Facilitator-ready",
    desc: "Morning / afternoon / homework rhythm, Seattle logistics, Day 7 demo format, and a copy-paste prompt library for memory refresh, briefings, and risk scans.",
    accent: "from-violet-500/40 to-indigo-600/25",
    border: "border-violet-500/30",
    icon: "✦",
  },
] as const;

const flowSteps = [
  {
    step: "1",
    title: "Capture",
    desc: "Lifelog founder + company data into Markdown: calls, metrics, decisions, journal.",
    color: "from-teal-500/30 to-cyan-500/20",
  },
  {
    step: "2",
    title: "Structure",
    desc: "Obsidian vault: folders, templates, Dataview, and links that mirror how you think.",
    color: "from-cyan-500/30 to-emerald-500/20",
  },
  {
    step: "3",
    title: "Agent",
    desc: "OpenClaw or equivalent reads the vault and answers with paths — messaging for quick tests.",
    color: "from-emerald-500/30 to-lime-500/15",
  },
  {
    step: "4",
    title: "Synthesize",
    desc: "Themes, weekly briefings, risk scans — knowledge that compounds, not one-off chat.",
    color: "from-amber-500/30 to-orange-500/20",
  },
  {
    step: "5",
    title: "Automate",
    desc: "Guardrailed rituals: morning brief, experiment review, decision records with human gates.",
    color: "from-violet-500/30 to-fuchsia-500/20",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <LandingNavMobile />

      <div className="landing-mesh relative flex min-h-[calc(100vh-8rem)] min-w-0">
        <aside
          className="hidden lg:fixed lg:left-0 lg:top-14 lg:z-30 lg:flex lg:h-[calc(100vh-3.5rem)] lg:w-[19rem] lg:shrink-0 lg:p-2"
          aria-label="Section navigation"
        >
          <div className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/20 via-zinc-950/95 to-violet-500/15 p-px shadow-[0_20px_50px_-20px_rgba(0,0,0,0.65)]">
            <div className="flex h-full min-h-0 flex-1 flex-col rounded-[15px] bg-zinc-950/95 backdrop-blur-2xl">
              <LandingNavDesktop />
              <div className="border-t border-white/10 p-3 text-[10px] leading-relaxed text-zinc-500">
                Scroll inside this panel to reach every section.
              </div>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 lg:ml-[19.5rem]">
          {/* Hero */}
          <section
            id="hero"
            className="landing-section relative overflow-hidden border-b border-white/10 px-4 py-16 sm:px-6 sm:py-24"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-95"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(45, 212, 191, 0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 80% 30%, rgba(52, 211, 153, 0.2), transparent 50%), radial-gradient(ellipse 50% 40% at 50% 90%, rgba(251, 191, 36, 0.1), transparent 45%)",
              }}
            />
            <div className="landing-grid-bg pointer-events-none absolute inset-0 opacity-[0.4]" aria-hidden />
            <div className="landing-hero-glow pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-teal-500/20 blur-[100px]" aria-hidden />
            <div className="landing-hero-glow pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-violet-500/15 blur-[90px]" aria-hidden />
            <div className="relative mx-auto max-w-6xl">
              <div className="mb-8 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                  Greater Seattle startups
                </span>
                <span className="rounded-full border border-teal-500/35 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-200">
                  Obsidian + OpenClaw
                </span>
                <span className="rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  7 days · DIKW · hands-on
                </span>
              </div>
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                  <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Turn company + founder data into a{" "}
                    <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200 bg-clip-text text-transparent">
                      startup second brain
                    </span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-300">
                    A full-week, step-by-step curriculum inspired by{" "}
                    <a
                      href={SOURCE_VIDEO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-teal-300 underline-offset-4 hover:underline"
                    >
                      the source walkthrough
                    </a>{" "}
                    — lifelogging, feeding rich data to a local agent, and moving up the DIKW pyramid. Teams leave with
                    Obsidian structure, agent memory files, and automations they can run next Monday.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a
                      href="#program"
                      className="interactive-press inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:brightness-110"
                    >
                      Explore program
                    </a>
                    <Link
                      href="/curriculum/day/1"
                      className="interactive-press inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                    >
                      Open Day 1
                    </Link>
                    <Link
                      href="/prompts"
                      className="interactive-press inline-flex items-center justify-center rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-100 backdrop-blur-sm transition hover:bg-emerald-500/20"
                    >
                      Prompt library
                    </Link>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/20 to-zinc-900/60 p-5 shadow-lg shadow-teal-500/5 transition hover:border-teal-400/35">
                    <p className="text-4xl font-black tabular-nums text-white">7</p>
                    <p className="mt-1 text-sm font-semibold text-teal-200">Intensive days</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">Morning → afternoon labs → homework — full stack in one week.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-zinc-900/60 p-5 shadow-lg shadow-violet-500/5 transition hover:border-violet-400/35">
                    <p className="text-sm font-bold uppercase tracking-widest text-violet-300">DIKW</p>
                    <p className="mt-1 text-sm font-semibold text-white">Data → wisdom</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">Explicit layers for metrics, themes, and decisions.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/15 to-zinc-900/60 p-5 shadow-lg shadow-amber-500/5 transition hover:border-amber-400/35 sm:col-span-2 lg:col-span-1">
                    <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Live site</p>
                    <p className="mt-1 text-sm font-semibold text-white">14 modules</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                      Scroll the landing page or use the left nav to jump — program, days, prompts, docs, GitHub.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why */}
          <section id="why" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">Why this week</h2>
              <p className="mt-2 max-w-2xl text-3xl font-bold text-white">From scattered tools to compound intelligence</p>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Startups generate endless data; most of it stays trapped in inboxes and ad hoc docs. This cohort installs a
                local-first loop — capture → structure → agent-assisted synthesis → guarded automation — so customer
                truth, roadmap bets, and founder judgment stay connected.
              </p>
              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/15 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-300">Source</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Aligns with “feed the system” lifelogging and a personal AI that can act on your files and messages —
                    translated to company memory and startup decisions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/15 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Teams</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Built for 2–5 person teams: shared conventions, read-only sharing for advisors, and clear ownership of
                    memory files.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/15 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">Seattle</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Hybrid format with IRL blocks in the greater Seattle area — plus async cohort channels you can keep
                    after Day 7.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Program */}
          <section id="program" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400/90">Program</h2>
              <p className="mt-2 text-3xl font-bold text-white">Goals, prerequisites &amp; rhythm</p>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-fuchsia-500/20 bg-zinc-900/50 p-6">
                  <h3 className="font-semibold text-white">Goals</h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                    {PROGRAM_OVERVIEW.goals.map((g) => (
                      <li key={g} className="flex gap-2 border-l-2 border-fuchsia-500/50 pl-3">
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <h3 className="font-semibold text-white">Daily rhythm</h3>
                  <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                    <li>
                      <span className="text-teal-300">Morning:</span> concepts + connection to the source video.
                    </li>
                    <li>
                      <span className="text-emerald-300">Hands-on:</span> Obsidian, agent setup, Dataview, integrations.
                    </li>
                    <li>
                      <span className="text-amber-300">Afternoon (most days):</span> labs, peer review, security blocks.
                    </li>
                    <li>
                      <span className="text-violet-300">Homework:</span> real captures + reflections that feed the next day.
                    </li>
                    <li>
                      <span className="text-zinc-500">Evening (optional):</span> async wins and blockers.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <h3 className="font-semibold text-white">Prerequisites</h3>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-400">
                    {PROGRAM_OVERVIEW.prerequisites.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <h3 className="font-semibold text-white">Materials</h3>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-400">
                    {PROGRAM_OVERVIEW.materials.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-zinc-500">{PROGRAM_OVERVIEW.cost}</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/curriculum"
                  className="inline-flex rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                >
                  Full program page →
                </Link>
              </div>
            </div>
          </section>

          {/* Cohort */}
          <section id="cohort" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400/90">Cohort</h2>
              <p className="mt-2 text-3xl font-bold text-white">Who &amp; where</p>
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-500/10 to-transparent p-6">
                  <h3 className="font-semibold text-white">Audience &amp; size</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{PROGRAM_OVERVIEW.audience}</p>
                  <p className="mt-4 text-sm text-zinc-500">{PROGRAM_OVERVIEW.groupSize}</p>
                  <p className="mt-2 text-sm text-zinc-500">{PROGRAM_OVERVIEW.duration}</p>
                  <p className="mt-2 text-sm text-zinc-500">{PROGRAM_OVERVIEW.format}</p>
                  <p className="mt-4 text-sm text-zinc-500">{PROGRAM_OVERVIEW.assessment}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <h3 className="font-semibold text-white">Example partner channels</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {PROGRAM_OVERVIEW.cohortExamples.map((x) => (
                      <li
                        key={x}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {x}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-8 font-semibold text-white">Venue ideas</h3>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                    {PROGRAM_OVERVIEW.seattleVenues.map((v) => (
                      <li key={v.name}>
                        <strong className="text-zinc-300">{v.name}</strong> — {v.note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* DIKW */}
          <section id="dikw" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400/90">DIKW</h2>
              <p className="mt-2 text-3xl font-bold text-white">Pyramid for startups</p>
              <p className="mt-3 max-w-3xl text-zinc-400">
                The curriculum moves teams upward each day: raw startup artifacts become structured information, recurring
                patterns become knowledge, and prioritized bets with evidence become wisdom — with the agent helping at each
                layer, not replacing judgment.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {(
                  [
                    {
                      k: "Data",
                      ex: "Event logs, emails, call transcripts, tickets, spreadsheets.",
                    },
                    {
                      k: "Information",
                      ex: "Cut by time, cohort, funnel stage — dashboards and labeled notes.",
                    },
                    {
                      k: "Knowledge",
                      ex: "Themes, causal stories, linked experiments and decisions.",
                    },
                    {
                      k: "Wisdom",
                      ex: "What we do next — with tradeoffs, risks, and owners — grounded in notes.",
                    },
                  ] as const
                ).map((row) => (
                  <div key={row.k} className="rounded-2xl border border-cyan-500/25 bg-zinc-900/50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">{row.k}</p>
                    <p className="mt-2 text-sm text-zinc-400">{row.ex}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools */}
          <section id="tools" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-400/90">Stack</h2>
              <p className="mt-2 text-3xl font-bold text-white">Tools used all week</p>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-violet-500/10 p-6">
                  <h3 className="font-semibold text-white">Obsidian</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Markdown second brain: folders, graph, plugins (Dataview, Tasks, Calendar, Excalidraw, Advanced URI).
                    Templates for customer insights, experiments, and decision records.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-teal-500/10 p-6">
                  <h3 className="font-semibold text-white">OpenClaw (or equivalent)</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Self-hosted agent with vault access and messaging surfaces (Telegram, WhatsApp, Slack). Local models
                    optional; API keys only with team policy.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-amber-500/10 p-6">
                  <h3 className="font-semibold text-white">Data sources</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Founder journals, customer interviews, analytics, billing, email/calendar exports, GitHub, and
                    productivity logs — ingested with consent and least privilege.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pipeline */}
          <section id="flow" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400/90">Pipeline</h2>
              <p className="mt-2 text-3xl font-bold text-white">How the week moves</p>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Five beats you will repeat after the cohort: capture lifelog data, structure it in Obsidian, connect the
                agent, synthesize themes and briefings, then automate only with guardrails.
              </p>
              <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:flex-wrap">
                {flowSteps.map((s, i) => (
                  <div key={s.step} className="flex min-w-0 flex-1 items-stretch gap-3 lg:min-w-[11rem]">
                    <div
                      className={`flex flex-1 flex-col rounded-2xl border border-white/10 bg-gradient-to-br ${s.color} p-5`}
                    >
                      <span className="font-mono text-xs font-bold text-white/80">{s.step}</span>
                      <p className="mt-2 font-semibold text-white">{s.title}</p>
                      <p className="mt-2 text-sm text-zinc-300">{s.desc}</p>
                    </div>
                    {i < flowSteps.length - 1 ? (
                      <div className="hidden items-center text-zinc-600 lg:flex" aria-hidden>
                        →
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-400/90">Features</h2>
              <p className="mt-2 text-3xl font-bold text-white">What makes this curriculum usable</p>
              <ul className="mt-12 grid gap-4 sm:grid-cols-2">
                {features.map((f) => (
                  <li
                    key={f.title}
                    className={`group relative overflow-hidden rounded-2xl border ${f.border} bg-zinc-900/40 p-6 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-500/10`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br opacity-0 transition group-hover:opacity-100 ${f.accent}`}
                      aria-hidden
                    />
                    <div className="relative">
                      <span className="font-mono text-xl text-teal-300" aria-hidden>
                        {f.icon}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-white">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7 days */}
          <section id="days" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-400/90">Seven days</h2>
              <p className="mt-2 text-3xl font-bold text-white">Objectives, steps &amp; homework</p>
              <ol className="mt-10 space-y-4">
                {CURRICULUM_DAYS.map((d) => (
                  <li key={d.day}>
                    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 transition hover:border-teal-500/35">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/30 to-emerald-500/20 text-sm font-bold text-white">
                            {d.day}
                          </span>
                          <div>
                            <p className="font-semibold text-white">{d.title}</p>
                            <p className="mt-1 text-sm text-zinc-500">{d.focus}</p>
                            <p className="mt-2 text-xs text-teal-400/90">
                              <span className="text-zinc-500">Outcome: </span>
                              {d.outcome}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={`/curriculum/day/${d.day}`}
                          className="shrink-0 rounded-lg border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold text-teal-200 transition hover:bg-teal-500/20"
                        >
                          Full day →
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Prompts */}
          <section id="prompts" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400/90">Prompts</h2>
              <p className="mt-2 text-3xl font-bold text-white">Memory templates &amp; copy-paste library</p>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Project context for Claude or your agent, plus operational prompts for briefings, theme extraction, risk
                scans, and security reviews.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/prompts"
                  className="inline-flex rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:brightness-110"
                >
                  Open prompts page
                </Link>
              </div>
            </div>
          </section>

          {/* Facilitate */}
          <section id="facilitate" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-rose-400/90">Facilitate</h2>
              <p className="mt-2 text-3xl font-bold text-white">Run the week with confidence</p>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <Link
                  href="/facilitator"
                  className="group rounded-2xl border border-rose-500/25 bg-gradient-to-br from-rose-500/15 to-transparent p-8 transition hover:border-rose-400/50"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-300">Guide</p>
                  <p className="mt-2 text-xl font-bold text-white">Facilitator checklist</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Schedule blocks, AV, safety reminders, and promotion ideas for Seattle audiences.
                  </p>
                  <span className="mt-6 inline-block text-sm font-medium text-rose-300 group-hover:underline">Open →</span>
                </Link>
                <Link
                  href="/post-week"
                  className="group rounded-2xl border border-sky-500/25 bg-gradient-to-br from-sky-500/15 to-transparent p-8 transition hover:border-sky-400/50"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">After Day 7</p>
                  <p className="mt-2 text-xl font-bold text-white">Post-week support</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Metrics, ongoing rituals, and mitigations for common adoption failures.
                  </p>
                  <span className="mt-6 inline-block text-sm font-medium text-sky-300 group-hover:underline">Open →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Success */}
          <section id="success" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-400/90">Success</h2>
              <p className="mt-2 text-3xl font-bold text-white">Post-program metrics &amp; challenges</p>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-amber-500/20 bg-zinc-900/50 p-6">
                  <h3 className="font-semibold text-white">Metrics</h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                    {POST_PROGRAM.metrics.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="text-amber-400">✓</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <h3 className="font-semibold text-white">Challenges</h3>
                  <ul className="mt-4 space-y-4 text-sm">
                    {POST_PROGRAM.challenges.map((c) => (
                      <li key={c.issue}>
                        <p className="font-medium text-zinc-200">{c.issue}</p>
                        <p className="mt-1 text-zinc-500">{c.mitigation}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Ongoing</p>
                <ul className="mt-2 list-inside list-disc text-sm text-zinc-400">
                  {POST_PROGRAM.ongoing.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Docs */}
          <section id="docs" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400/90">Repository docs</h2>
              <p className="mt-2 text-3xl font-bold text-white">Quickstart, manual &amp; tutorial</p>
              <p className="mt-3 max-w-2xl text-zinc-400">
                If you add this app to GitHub, the <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-zinc-200">docs/</code>{" "}
                folder can hold install steps, facilitator notes, and marketing copy. Links below work when{" "}
                <code className="rounded bg-white/10 px-1 text-xs">NEXT_PUBLIC_GITHUB_REPO_URL</code> points at your repo.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {(
                  [
                    { path: "docs/QUICKSTART.md", label: "QUICKSTART.md", desc: "Install & first clicks" },
                    { path: "docs/MANUAL.md", label: "MANUAL.md", desc: "Routes, lib, troubleshooting" },
                    { path: "docs/TUTORIAL.md", label: "TUTORIAL.md", desc: "Cohort walkthrough" },
                    { path: "docs/marketing/README.md", label: "marketing/README.md", desc: "Social, email, blog copy" },
                  ] as const
                ).map((r) => {
                  const href = getGithubBlobUrl(r.path);
                  return (
                    <li key={r.path}>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/10 bg-zinc-900/30 p-5 transition hover:border-indigo-500/40 hover:bg-zinc-900/50"
                        >
                          <p className="font-semibold text-white">{r.label}</p>
                          <p className="mt-1 text-sm text-zinc-500">{r.desc}</p>
                          <span className="mt-3 inline-block text-xs font-medium text-indigo-400">Open on GitHub →</span>
                        </a>
                      ) : (
                        <div className="rounded-2xl border border-dashed border-white/15 bg-zinc-900/20 p-5">
                          <p className="font-semibold text-zinc-300">{r.label}</p>
                          <p className="mt-1 text-sm text-zinc-500">{r.desc}</p>
                          <p className="mt-3 text-xs text-zinc-600">
                            Set <code className="rounded bg-white/10 px-1">NEXT_PUBLIC_GITHUB_REPO_URL</code> to enable
                            links.
                          </p>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 text-sm text-zinc-500">
                Clone this project as <code className="rounded bg-white/10 px-1">seattle-startup-openclaw-week</code> and add
                your own <code className="rounded bg-white/10 px-1">docs/</code> folder if missing.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="landing-section px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-teal-500/15 via-zinc-900/80 to-emerald-500/15 p-8 text-center sm:p-12">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Start the week</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400">
                Jump into Day 1, copy prompts, or share this page with your cohort. Use the left nav (desktop) or chips
                (mobile) to move between sections anytime.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/curriculum/day/1"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
                >
                  Day 1 →
                </Link>
                <Link
                  href="/prompts"
                  className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Prompts
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>

      <GitHubFab />
    </>
  );
}
