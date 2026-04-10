import Link from "next/link";

import { GitHubFab } from "@/components/landing/GitHubFab";
import { LandingNavDesktop, LandingNavMobile } from "@/components/landing/LandingNav";
import { SectionQuickNav } from "@/components/landing/SectionQuickNav";
import { CURRICULUM_DAYS, ELEVEN_AGENTS, POST_PROGRAM, PROGRAM_OVERVIEW } from "@/lib/curriculum-days";
import { LANDING_NAV, SOURCE_VIDEO_URL, getGithubBlobUrl } from "@/lib/site";

const features = [
  {
    title: "Video-aligned execution",
    desc: "Each day mirrors the source lecture: Claude Code plus Claude Forge orchestrating specialized agents, slash commands, skills, and hooks — mapped to shipping real startup work.",
    accent: "from-teal-500/40 to-cyan-600/25",
    border: "border-teal-500/30",
    icon: "▸",
  },
  {
    title: "Eleven-agent orchestra",
    desc: "Planner through deployer and retro — explicit handoffs so planning, build, test, review, and deploy are delegated while founders stay on decisions and taste.",
    accent: "from-emerald-500/40 to-teal-600/25",
    border: "border-emerald-500/30",
    icon: "◇",
  },
  {
    title: "MCP-connected, verify-first",
    desc: "Model Context Protocol for tools without bloating context; lazy-load heavy servers, read-only defaults, and facilitator-led security blocks.",
    accent: "from-amber-500/40 to-orange-600/25",
    border: "border-amber-500/30",
    icon: "◎",
  },
  {
    title: "Facilitator-ready",
    desc: "Morning / afternoon / homework rhythm, Seattle logistics, Day 7 showcase format, and a copy-paste prompt library for pipelines, MCP reviews, and retros.",
    accent: "from-violet-500/40 to-indigo-600/25",
    border: "border-violet-500/30",
    icon: "✦",
  },
] as const;

const flowSteps = [
  {
    step: "1",
    title: "Plan",
    desc: "Researcher + strategist + planner scope the problem; human picks constraints and success criteria.",
    color: "from-teal-500/30 to-cyan-500/20",
  },
  {
    step: "2",
    title: "Design",
    desc: "Architect breaks work into shippable slices; critic challenges assumptions before code.",
    color: "from-cyan-500/30 to-emerald-500/20",
  },
  {
    step: "3",
    title: "Build",
    desc: "Coder implements with MCP tools (repo, APIs, data) — least privilege, logged commands.",
    color: "from-emerald-500/30 to-lime-500/15",
  },
  {
    step: "4",
    title: "Verify",
    desc: "Tester + code reviewer + security reviewer; failures loop back with tight diffs.",
    color: "from-amber-500/30 to-orange-500/20",
  },
  {
    step: "5",
    title: "Ship & learn",
    desc: "Deployer integrates CI/CD where appropriate; retro captures lessons for the next run.",
    color: "from-violet-500/30 to-fuchsia-500/20",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <LandingNavMobile />

      <div className="landing-mesh relative flex min-h-[calc(100vh-8rem)] min-w-0">
        <aside
          className="hidden lg:fixed lg:left-0 lg:top-14 lg:z-30 lg:flex lg:h-[calc(100vh-3.5rem)] lg:w-[20.5rem] lg:shrink-0 lg:p-2"
          aria-label="Section navigation"
        >
          <div className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-teal-500/25 via-zinc-950/98 to-violet-500/20 p-px shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-white/5">
            <div className="flex h-full min-h-0 flex-1 flex-col rounded-[15px] bg-zinc-950/95 backdrop-blur-2xl">
              <LandingNavDesktop />
              <div className="border-t border-white/10 p-3 text-[10px] leading-relaxed text-zinc-500">
                Scroll inside this panel — {LANDING_NAV.length} sections. Or use the quick-jump strip below the hero.
              </div>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 pb-28 lg:ml-[21rem]">
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
                  Claude Code + Forge
                </span>
                <span className="rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  7 days · 11 agents · MCP
                </span>
              </div>
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                  <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Delegate the build loop to a{" "}
                    <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200 bg-clip-text text-transparent">
                      Forge-powered agent team
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
                      the source lecture
                    </a>{" "}
                    (Claude Code 실전 — eleven agents working on their own): Claude Forge’s “milk kit,” slash commands,
                    MCP tools, and hooks. Teams leave with a working automation on their own product, documented agents, and
                    measured time savings.
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
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <Link
                      href="/dashboard"
                      className="font-medium text-teal-300 underline-offset-4 transition hover:text-teal-200 hover:underline"
                    >
                      Rental HQ dashboard
                    </Link>
                    <span className="text-zinc-600" aria-hidden>
                      ·
                    </span>
                    <Link
                      href="/rentals"
                      className="font-medium text-teal-300 underline-offset-4 transition hover:text-teal-200 hover:underline"
                    >
                      Full property registry
                    </Link>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/20 to-zinc-900/60 p-5 shadow-lg shadow-teal-500/5 transition hover:-translate-y-0.5 hover:border-teal-400/40 hover:shadow-teal-500/15">
                    <p className="text-4xl font-black tabular-nums text-white">7</p>
                    <p className="mt-1 text-sm font-semibold text-teal-200">Intensive days</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">Morning → afternoon labs → homework — full stack in one week.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-zinc-900/60 p-5 shadow-lg shadow-violet-500/5 transition hover:border-violet-400/35">
                    <p className="text-sm font-bold uppercase tracking-widest text-violet-300">Agents</p>
                    <p className="mt-1 text-sm font-semibold text-white">11 roles</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">Planner → deployer + retro, as in the video.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/15 to-zinc-900/60 p-5 shadow-lg shadow-amber-500/5 transition hover:-translate-y-0.5 hover:border-amber-400/40 hover:shadow-amber-500/15 sm:col-span-2 lg:col-span-1">
                    <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Live site</p>
                    <p className="mt-1 text-sm font-semibold text-white">14 sections</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                      Scroll the landing page or use the left nav to jump — program, days, prompts, docs, GitHub.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="hidden lg:block">
            <SectionQuickNav />
          </div>

          {/* Why */}
          <section id="why" className="landing-section landing-section-alt border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">Why this week</h2>
              <p className="mt-2 max-w-2xl text-3xl font-bold text-white">From scattered tools to compound intelligence</p>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Early teams ship under pressure; routine engineering work still consumes founders. This cohort installs a
                repeatable loop — plan → build → verify → ship → retro — with Claude Forge and MCP so agents handle
                throughput while humans own strategy, risk, and customer truth.
              </p>
              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/15 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-300">Source</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Aligns with the source lecture: many coordinated agents, slash commands, and MCP — translated to your
                    repo, shipping cadence, and founder decisions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/15 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Teams</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Built for 2–3 people per startup: shared Forge conventions, clear repo ownership, and advisor-safe
                    read-only demos when needed.
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
                      <span className="text-emerald-300">Hands-on:</span> Claude Code, Forge install, agents, MCP servers, hooks.
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

          {/* Forge loop + eleven agents */}
          <section id="forge-loop" className="landing-section border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400/90">Forge loop</h2>
              <p className="mt-2 text-3xl font-bold text-white">Eleven roles, one pipeline</p>
              <p className="mt-3 max-w-3xl text-zinc-400">
                The week follows the video’s pattern: specialized agents collaborate through slash commands and skills — from
                evaluation and implementation to critique and retro — with MCP supplying tools without overfilling context.
                Humans stay on decisions; agents multiply execution.
              </p>
              <div className="mt-10 flex flex-wrap gap-2">
                {ELEVEN_AGENTS.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-100"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {(
                  [
                    {
                      k: "Evaluate",
                      ex: "Court / scoring passes — what to build and what to skip (startup-specific rubrics).",
                    },
                    {
                      k: "Implement",
                      ex: "Coder + tools execute; architect keeps slices small; critic challenges scope creep.",
                    },
                    {
                      k: "Critique",
                      ex: "Reviewers and security catch issues before merge; tests prove behavior.",
                    },
                    {
                      k: "Retro",
                      ex: "Reflect agent captures lessons; update prompts, skills, and hooks for the next cycle.",
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
          <section id="tools" className="landing-section landing-section-alt border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-400/90">Stack</h2>
              <p className="mt-2 text-3xl font-bold text-white">Tools used all week</p>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-violet-500/10 p-6">
                  <h3 className="font-semibold text-white">Claude Code</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Anthropic’s AI coding environment: workspace-aware assistance, terminal and repo context, and the base
                    runtime for Forge agents and slash commands.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-teal-500/10 p-6">
                  <h3 className="font-semibold text-white">Claude Forge</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Open-source “milk kit” layering eleven agents, 40+ slash commands, skills, and hooks on top of Claude
                    Code — install from the cohort’s pinned repository and docs.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-amber-500/10 p-6">
                  <h3 className="font-semibold text-white">MCP + GitHub</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Model Context Protocol servers for files, fetch, Git, databases, and APIs; GitHub for repos and CI hooks.
                    Connect only what you need; lazy-load heavy tools.
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
                Five beats you will repeat after the cohort: plan and scope, design with pushback, build with tools, verify
                with tests and review, then ship and retro — with hooks automating what is safe.
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
          <section id="features" className="landing-section landing-section-alt border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
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
                Project context for Claude Code / Forge, plus operational prompts for multi-agent feature slices, MCP scope
                reviews, critiques, retros, and cost checks.
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
                    Schedule blocks, AV, API-key hygiene, Forge version pins, and promotion ideas for Seattle audiences.
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
          <section id="cta" className="landing-section landing-section-alt px-4 py-16 sm:px-6 sm:py-24">
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
