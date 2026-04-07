import type { CurriculumDay } from "./types";

export const PROGRAM_OVERVIEW = {
  audience:
    "Early-stage startups in the greater Seattle area: founders, co-founders, or small teams of 2–5 people.",
  cohortExamples: [
    "Techstars Seattle",
    "Pioneer Square Labs",
    "Impact Hub Seattle",
    "UW CoMotion / startup labs",
    "Seattle Startup Week / founder Slack groups",
    "WeWork / Capitol Hill & South Lake Union co-working circles",
  ],
  groupSize: "8–12 participants (small cohort for hands-on support and peer accountability).",
  duration: "7 consecutive days; ~4–6 hours/day structured time plus homework.",
  format:
    "Hybrid — in-person meetups in Seattle (co-working, accelerator, or rented event space) plus async tools (shared Obsidian vault or Notion, Slack/Discord, messaging apps for agent testing).",
  goals: [
    "Build a secure, local-first “Startup Second Brain” with Obsidian and a self-hosted agent (e.g. OpenClaw) connected to company + founder data.",
    "Apply lifelogging and the DIKW pyramid so raw startup data becomes information, knowledge, and decision-ready wisdom.",
    "Ship practical automations (briefings, prioritization, risk spotting) with explicit privacy and ops-security habits.",
  ],
  prerequisites: [
    "Basic computer skills; laptop; willingness to install software.",
    "No prior AI or agent experience required.",
    "Optional: API keys for Claude or OpenAI if not using local models; optional spare machine or Raspberry Pi for hosting.",
  ],
  materials: [
    "Obsidian (free), OpenClaw or equivalent local agent from GitHub, terminal access.",
    "Local LLMs (optional) or cloud APIs; Telegram/WhatsApp/Slack for messaging interfaces.",
    "Templates for Customer Insights, Experiment Logs, Decision Records, and agent memory files (see Prompts page).",
  ],
  cost: "Typical program fee $500–$1,500 per startup/team (venue, snacks, materials); offer scholarships for underrepresented founders. Cloud API usage is variable.",
  facilitation:
    "Led by a facilitator comfortable with Obsidian, Markdown, and local agents; optional guest spots from the Seattle AI community (Meetup, UW).",
  assessment: "Daily reflections; end-of-week demo of each startup’s vault + agent; peer feedback; optional pre/post surveys.",
  seattleVenues: [
    { name: "WeWork / The Riveter / Impact Hub Seattle", note: "Good Wi‑Fi and breakout areas for hybrid cohorts." },
    { name: "Peerspace or accelerator venues (e.g. Pioneer Square Labs)", note: "Book screens for vault + agent demos." },
    { name: "Capitol Hill / SLU maker or event spaces", note: "Evening demos or guest sessions." },
  ],
} as const;

export const POST_PROGRAM = {
  ongoing: [
    "Month 1: weekly async check-ins; shared resource list (Seattle AI events, OpenClaw docs, community Discords).",
    "Expand data sources gradually; schedule monthly “lint” and security review of vaults and agent permissions.",
  ],
  metrics: [
    "Pre/post survey on confidence managing company knowledge and data.",
    "Each team documents insights generated that were not obvious before the week.",
    "30-day follow-up on continued use of vault + agent (time saved, decisions improved).",
  ],
  challenges: [
    {
      issue: "Sensitive data in one vault",
      mitigation: "Separate vaults; read-only integrations; minimize cloud upload; redact in cohort demos.",
    },
    {
      issue: "Agent over-permissioned",
      mitigation: "Sandbox accounts; confirm before send/post actions; backups before bulk file ops.",
    },
    {
      issue: "Adoption after the intensive week",
      mitigation: "Anchor daily/weekly rituals (morning briefing, Friday review); start with one automation.",
    },
  ],
} as const;

export const CURRICULUM_DAYS: CurriculumDay[] = [
  {
    day: 1,
    title: "Foundations — DIKW & lifelogging for startups",
    focus:
      "Map the DIKW pyramid to startup reality and stand up a minimal Obsidian vault that will hold company + founder lifelog data.",
    outcome:
      "Participants connect the source video’s “feed everything” experiment to business context and leave with a vault skeleton plus a short audit of their data chaos.",
    objectives: [
      "Explain Data → Information → Knowledge → Wisdom using startup examples (metrics, interviews, roadmap).",
      "Audit where data lives today (tools, notes, meetings, feedback) and name lifelogging opportunities.",
      "Install Obsidian and create a folder structure for Company, Personal/Team, and ingestion.",
    ],
    videoIdeas: [
      "Comprehensive personal/life data fed into a system → for startups: company + founder data as one augmented memory.",
      "Compound intelligence: scattered tools vs. one queryable layer an agent can read.",
      "Privacy: local-first and intentional boundaries mirror OpenClaw-style self-hosting values.",
    ],
    practicalSteps: [
      "Screen the source video (or assigned chapters); debrief: what would “full data” mean for your startup?",
      "Draw one DIKW chain for your product (e.g. raw events → dashboard → insight → decision).",
      "Install Obsidian; create vault root and folders: Company/Strategy, Company/Product, Company/Customers, Company/Ops, Company/Finance, Team/Journal, Team/Tasks, Inbox/Imports.",
      "Add a single note `Team/Journal/YYYY-MM-DD.md` and link it to `Company/Strategy/North-Star.md` (create stub).",
    ],
    morningWorkshop: {
      morning: [
        "Welcome, cohort agreements (privacy, respect, no pitching other teams’ data).",
        "Facilitator presents DIKW with startup examples: raw metrics → reports → patterns → strategic bets.",
      ],
      workshop: [
        "Small groups: map “data chaos” — list tools and where customer truth actually lives.",
        "Plenary: 2–3 teams share one lifelogging win they could start this week (e.g. call transcripts, daily founder log).",
      ],
    },
    afternoonWorkshop: [
      "Guided Obsidian install and vault creation on each laptop (Windows/Mac/Linux).",
      "Pair exercise: exchange folder trees and give one clarity suggestion each.",
    ],
    groupActivity: [
      "Optional: build a shared glossary note `Company/Product/Glossary.md` for terms everyone will reuse in prompts.",
    ],
    homework: [
      "Export or copy 1–2 weeks of existing material (notes, email summaries, metrics screenshots) into Inbox/Imports as Markdown or PDF.",
      "Write a 1-page reflection: “What if my AI knew everything material about my startup?” — include worries and wins.",
    ],
    eveningOptional: "Slack/Discord: post one screenshot of your vault outline (blur secrets).",
    facilitatorNotes: [
      "If Obsidian is blocked on a machine, use plain Markdown folders in Git and sync later.",
      "Keep Day 1 completion bias high: perfect taxonomy is not the goal.",
    ],
    deliverables: [
      "Working vault with agreed top-level folders and at least three interlinked notes.",
      "Completed data-audit list (bullet list is fine) stored in `Company/Ops/Data-Audit.md`.",
    ],
  },
  {
    day: 2,
    title: "Building the second brain — capture & organize",
    focus:
      "Use Obsidian plugins and structure (PARA/MAPS-style) so capture is easy and notes stay findable before the agent plugs in.",
    outcome:
      "A living knowledge base with templates and a few automated captures; customer interview material begins to live as atomic notes.",
    objectives: [
      "Enable core plugins: Dataview, Tasks, Calendar, Excalidraw, Advanced URI (as appropriate).",
      "Set up daily notes template and tagging or folder conventions the whole team can follow.",
      "Create three startup templates: Customer Insights, Experiment Log, Decision Record.",
    ],
    videoIdeas: [
      "Feeding data continuously → browser clipper, transcripts, exports mirror “all my life data” but for product and customers.",
      "Atomic notes as the unit the agent will reason over later.",
    ],
    practicalSteps: [
      "Turn on community plugins safely; document which plugins the cohort standardizes on in `Team/Tasks/Obsidian-Plugins.md`.",
      "Configure daily note template with sections: Priorities, Log, Customer signals, Links.",
      "Add Obsidian Web Clipper or equivalent; demo saving one competitor page to Inbox.",
      "Set up email forwarding or a “log” mailbox rule that ends in Markdown or a paste bucket note.",
      "Import at least one real customer interview as atomic notes under `Company/Customers/Interviews/`.",
    ],
    morningWorkshop: {
      morning: [
        "Deep dive: linking, backlinks, and why graph view matters for spotting gaps.",
        "Demo: PARA or MAPS adapted — Projects, Areas, Resources, Archive mapped to startup folders.",
      ],
      workshop: [
        "Build the three templates together; save under `Templates/` and assign hotkeys if desired.",
      ],
    },
    afternoonWorkshop: [
      "Lifelogging practicals: calendar export, Otter.ai or similar → export to Markdown into `Company/Customers/Calls/`.",
      "Voice memo → text workflow documented in `Team/Tasks/Capture-Playbook.md`.",
    ],
    groupActivity: [
      "Peer vault reviews (15 min each in trios): navigation, naming, one improvement suggestion per vault.",
    ],
    homework: [
      "Capture today’s activities in daily note plus three concrete startup data points (metrics, quotes, decisions).",
      "Add two new atomic notes from real company data and link them to Strategy or Product.",
    ],
    eveningOptional: "Share one capture automation you will keep vs. one you will drop (scope discipline).",
    facilitatorNotes: [
      "Have a canned public interview transcript if a team lacks one.",
      "Watch plugin overload — fewer plugins, clearer rules.",
    ],
    deliverables: [
      "Templates live and used at least once each.",
      "`Team/Tasks/Capture-Playbook.md` with steps your team will actually follow.",
    ],
  },
  {
    day: 3,
    title: "Installing & configuring OpenClaw (or equivalent local agent)",
    focus:
      "Run a self-hosted agent that can read the vault and accept messages — the core replication of the video’s experiment for the company.",
    outcome:
      "Agent runs locally (or on a team server), reads Markdown context, and answers basic startup questions with stated limitations.",
    objectives: [
      "Install OpenClaw per current docs; connect filesystem access to the Obsidian vault path.",
      "Configure at least one messaging surface (Telegram or WhatsApp or Slack) for quick tests.",
      "Author startup context files the agent loads as memory (mission, ICP, roadmap, risks).",
    ],
    videoIdeas: [
      "Personal assistant over your own data → agent over vault + calendars + repos.",
      "Local/self-hosted emphasis aligns with privacy-aware lifelogging.",
    ],
    practicalSteps: [
      "Follow official install path for the cohort’s OS; verify version and health check commands.",
      "Point agent at vault root; test read of `Company/Strategy/North-Star.md`.",
      "Create `Agent/Memory/` with `company-context.md`, `icp.md`, `roadmap.md` — short, updated weekly.",
      "Connect messaging; send test prompts: “Summarize last week’s customer feedback” (from notes you seeded).",
      "Optional: read-only calendar and GitHub issues integration; document tokens in a secrets process, not in the vault.",
    ],
    morningWorkshop: {
      morning: [
        "Live install walkthrough with troubleshooting table (facilitator + TA).",
        "Show successful end state: message in → grounded reply citing note titles.",
      ],
      workshop: [
        "Teams install; facilitator rotates for unblock. Each team posts “agent up” in cohort chat when basic Q&A works.",
      ],
    },
    afternoonWorkshop: [
      "Prompting basics: system vs. user, keeping memory files concise, when to paste vs. when to rely on paths.",
      "Exercise: each team runs 5 prompts against their own vault data (no cross-team data).",
    ],
    securitySession: [
      "Threat model: leaked tokens, accidental public repos, agent sending email without confirmation.",
      "Mitigations: separate test accounts, read-only scopes, backup vaults before experiments, explicit human approval for destructive actions.",
    ],
    homework: [
      "Run the agent for 1–2 hours total; keep `Team/Journal/agent-session-log.md` with prompts, failures, and one “aha.”",
    ],
    eveningOptional: "Post one surprise limitation (e.g. context length, file not found) and how you worked around it.",
    facilitatorNotes: [
      "If OpenClaw is unstable for someone, allow an alternate local agent that can read folders + chat — same learning goals.",
      "Never share API keys on screen; use env files and .gitignore.",
    ],
    deliverables: [
      "Agent reachable from at least one interface; evidence in log file.",
      "`Agent/Memory/` populated with minimum company context pack.",
    ],
  },
  {
    day: 4,
    title: "Turning data into information & knowledge",
    focus:
      "Use Dataview queries and the agent together so raw notes become recurring reports and identifiable themes.",
    outcome:
      "Teams move from ad hoc chat to repeatable extractions: weekly summaries, theme lists, and a simple knowledge graph of problems ↔ solutions ↔ metrics.",
    objectives: [
      "Write at least one Dataview query that lists experiments, customers, or decisions.",
      "Batch-process transcripts/notes with the agent to tag themes and risks.",
      "Define sub-agent or prompt “hats” (e.g. Product Analyst, Customer Wisdom).",
    ],
    videoIdeas: [
      "Pattern recognition across time — the payoff of having fed the system enough structured text.",
      "Graph view + LLM: complementary ways to see structure.",
    ],
    practicalSteps: [
      "Create `Company/Product/Experiments.md` with Dataview pulling from experiment notes.",
      "Run a structured prompt: “From these interview notes, list top 5 themes and evidence quotes.”",
      "Build a small mermaid or linked map: Problem → Current approach → Metric → Owner.",
      "Add two custom prompt files under `Agent/Prompts/`: `product-analyst.md` and `customer-wisdom.md`.",
    ],
    morningWorkshop: {
      morning: [
        "DIKW in action: differentiate a dashboard (information) from a decision memo (knowledge).",
        "Facilitator demos Dataview on sample data.",
      ],
      workshop: [
        "Teams write one Dataview and one agent-assisted theme extraction on their own notes.",
      ],
    },
    afternoonWorkshop: [
      "Knowledge graph exercise: link problems, solutions, and metrics across three real notes.",
      "Optional: Excalidraw canvas for roadmap storyboard stored in vault.",
    ],
    groupActivity: [
      "Each startup shares one non-obvious insight the system surfaced (2 min each).",
    ],
    homework: [
      "Ingest older artifacts (pitch deck outline, failed experiment); query for lessons and gaps.",
    ],
    eveningOptional: "Share one query or prompt snippet that will become a weekly ritual.",
    facilitatorNotes: [
      "If Dataview is too heavy for a team, fall back to agent-only summarization with strict filenames.",
    ],
    deliverables: [
      "One working Dataview (or documented alternative).",
      "`Agent/Prompts/` contains two role-specific prompt files in use.",
    ],
  },
  {
    day: 5,
    title: "Generating wisdom & automations",
    focus:
      "Chain steps: multi-step reasoning, briefings, backlog prioritization, and risk scans — always with human checkpoints.",
    outcome:
      "Two or three automations or playbooks (e.g. morning briefing, weekly customer themes) that teams will run next week.",
    objectives: [
      "Design multi-step workflows the agent can run with tools/skills available in your stack.",
      "Apply to strategic planning, meeting prep, and opportunity/risk detection.",
      "Document failure modes and when to escalate to humans.",
    ],
    videoIdeas: [
      "From reactive Q&A to proactive briefings — “wisdom” as timely synthesis, not one-off clever chat.",
    ],
    practicalSteps: [
      "Draft a morning briefing template: metrics snippet + calendar + open GitHub issues + top risks from notes.",
      "Run a prioritization exercise: backlog items in Markdown → agent suggests top 3 with rationale tied to notes.",
      "Simulate a decision: “If we delay feature X, what does our own data say?” — cite note paths.",
      "Optional guest (15–20 min): local founder on Obsidian/agents — Q&A.",
    ],
    morningWorkshop: {
      morning: [
        "Advanced patterns: tool use boundaries, idempotent scripts, logging every automation run.",
      ],
      workshop: [
        "Teams build 2–3 automations or checklists (manual + agent-assisted counts).",
      ],
    },
    afternoonWorkshop: [
      "Startup applications: strategy memo from vault, risk register refresh, investor update draft outline.",
      "Red-team: what could go wrong if the agent is wrong? Add verification steps.",
    ],
    homework: [
      "Run at least one automation in a real workflow tomorrow morning; log results in `Team/Journal/`.",
    ],
    eveningOptional: "Optional social: cohort dinner — no work talk required.",
    facilitatorNotes: [
      "Discourage email-send automation without explicit confirmation UI.",
    ],
    deliverables: [
      "`Team/Tasks/Automations.md` listing each automation, trigger, owner, and rollback.",
      "One strategic paragraph written by the system + human edit tracked in git or note history.",
    ],
  },
  {
    day: 6,
    title: "Integration, iteration & team scaling",
    focus:
      "Make the system durable: daily/weekly rituals, troubleshooting, and how co-founders share read-only or branched vaults.",
    outcome:
      "A realistic operating model: who updates what, how sync works, and how multiple prompts/agents coexist without chaos.",
    objectives: [
      "Combine Obsidian + agent into a daily standup and weekly review checklist stored in the vault.",
      "Plan read-only sharing, Git sync, or export for advisors without leaking secrets.",
      "Run a mock “startup council” using agents to argue positions on a real challenge.",
    ],
    videoIdeas: [
      "Scaling from solo lifelog to team memory — permissions and narrative consistency.",
    ],
    practicalSteps: [
      "Troubleshoot: large files, sync conflicts, slow local models — capture fixes in `Team/Tasks/Runbook.md`.",
      "Define multi-agent split if useful: Ops agent vs. Product agent — separate memory files and scopes.",
      "Mock council: one company presents a challenge; others use agents with only public notes + that company’s shared excerpt.",
      "Refine dangerous integrations (browser, send) only with guardrails documented.",
    ],
    morningWorkshop: {
      morning: [
        "Full stack review: vault hygiene, agent logs, backup strategy.",
      ],
      workshop: [
        "Teams update runbooks and assign owners for memory files.",
      ],
    },
    afternoonWorkshop: [
      "Mock startup council (facilitator timeboxed).",
      "Optional: pair on Git remote for vault with `.gitignore` for secrets.",
    ],
    groupActivity: [
      "Structured debate: agents + humans — decision summary note archived in `Company/Strategy/Decisions/`.",
    ],
    homework: [
      "Run the full stack for a full working day; fix one pain point; prep 5–10 min demo for Day 7.",
    ],
    eveningOptional: "Dry-run demo with a teammate; time the flow.",
    facilitatorNotes: [
      "Reiterate consent and data boundaries before any cross-team use of notes.",
    ],
    deliverables: [
      "`Team/Tasks/Runbook.md` with rituals and escalation.",
      "Demo script outline: `Team/Tasks/Demo-Outline.md`.",
    ],
  },
  {
    day: 7,
    title: "Demo, reflection & next steps",
    focus:
      "Show working systems, capture lessons, and lock a 30-day roadmap for vault + agent use.",
    outcome:
      "Each team leaves with peer feedback, a clear next month plan, and shared resources for the Seattle ecosystem.",
    objectives: [
      "Present vault + agent in action with a before/after story.",
      "Reflect on privacy, surprise, and business impact.",
      "Agree on cohort alumni touchpoints and optional next intake.",
    ],
    videoIdeas: [
      "Closing the loop on the opening experiment: what did “the AI knowing everything” actually change?",
    ],
    practicalSteps: [
      "Demos (5–10 min each): structure — problem → data fed → agent output → decision or automation.",
      "Peer feedback rounds: one strength, one risk, one suggestion.",
      "Group reflection: surprises, privacy lessons, ROI hypotheses.",
      "Workshop: 30-day roadmap — weekly reviews, expanding data sources, measuring time saved and insights.",
      "Share resources: local meetups, advanced OpenClaw docs, responsible AI norms.",
      "Closing: certificates, photo, optional next cohort teaser.",
    ],
    morningWorkshop: {
      morning: [
        "Demo block with strict timer; facilitator keeps energy and notes common themes for a shared FAQ note.",
      ],
      workshop: [
        "Short synthesis: facilitator captures cohort FAQ into `Wiki/FAQ-from-cohort.md` (or shared vault).",
      ],
    },
    afternoonWorkshop: [
      "Reflection and roadmap session; optional sponsor remarks.",
    ],
    homework: [
      "Optional: send facilitator one metric and one testimonial line for future marketing (with approval).",
    ],
    eveningOptional: "Celebrate offline — no homework.",
    facilitatorNotes: [
      "Record consent before capturing testimonials or photos.",
      "Export template pack and prompt list for alumni.",
    ],
    deliverables: [
      "Demo completed; roadmap note `Company/Strategy/30-Day-Roadmap.md` per team.",
      "Optional: signed certificate or cohort photo release.",
    ],
  },
];
