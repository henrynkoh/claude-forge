import type { CurriculumDay } from "./types";

export const PROGRAM_OVERVIEW = {
  audience:
    "A small, selected group of 8–12 early-stage startups from the greater Seattle area: pre-seed/seed SaaS, AI tools, biotech-adjacent tech, or developer-tools founders (2–3 people per startup max).",
  cohortExamples: [
    "Madrona / AI2 founder circles",
    "Techstars Seattle",
    "Pioneer Square Labs",
    "UW CoMotion",
    "Seattle Startup Week / founder Slack groups",
    "WeWork / South Lake Union & Fremont co-working",
  ],
  groupSize: "8–12 founders or teams (2–3 people per startup max) for hands-on mentoring.",
  duration: "7 consecutive days; ~4–6 hours/day structured time (mornings instruction + demos, afternoons labs + feedback) plus optional office hours and homework.",
  format:
    "In-person hybrid bootcamp in Seattle (e.g. WeWork, partner venue in South Lake Union or Fremont). Evenings: optional office hours and async homework.",
  goals: [
    "Each startup ships a working AI agent system (Claude Forge + MCP tools) that automates at least one core workflow: feature work, content/lead gen, internal ops, or MVP prototyping.",
    "Teams document agents, a custom Forge setup, slash-command and skill workflows, and measurable time savings vs. manual work.",
    "Founders practice orchestration: planning → development → testing → review → deployment — with humans on decisions and creative oversight.",
  ],
  prerequisites: [
    "Laptop with internet; GitHub account.",
    "Anthropic API key (Claude access) and billing awareness.",
    "Before Day 1: install Claude Code and Node.js/npm; basic terminal comfort.",
    "No advanced coding required — emphasis on accessible orchestration for non-developers as well as engineers.",
  ],
  materials: [
    "Shared Notion or Google Drive workspace; source video link; Claude Forge repository (open-source “milk kit” from cohort materials).",
    "Curated prompt/skill library (this site’s Prompts page); VS Code or compatible editor.",
    "Optional: Seattle-specific networking intros (investors, talent) provided by organizers.",
  ],
  cost: "Typical program fee $500–$1,500 per startup covering mentors, snacks, and materials; scholarships possible. Sponsorship (Anthropic partners, AWS, local incubators) can offset costs. API usage is variable — track in-session.",
  facilitation:
    "1–2 instructors fluent in Claude Code + Claude Forge; optional guest speakers (Seattle AI founders on scaling with agents).",
  assessment: "Pre/post surveys on time in coding/ops; daily reflections; Day 7 showcases with peer feedback; optional 30-day virtual check-in.",
  seattleVenues: [
    { name: "WeWork / The Riveter / Impact Hub Seattle", note: "Reliable Wi‑Fi and breakout rooms for hybrid cohorts." },
    { name: "Incubator or accelerator space (Pioneer Square, Bellevue partner)", note: "Screens for live Claude Code + Forge demos." },
    { name: "South Lake Union / Fremont event or co-working", note: "Optional evening mixer (Day 6) with local founders/investors." },
  ],
} as const;

export const POST_PROGRAM = {
  ongoing: [
    "30-day follow-up virtual check-in; weekly agent audits suggested for month 1.",
    "Community: local Seattle AI meetup, cohort channel, optional QJC-style peer group.",
  ],
  metrics: [
    "Pre/post survey: hours/week on coding, review, deployment, and ops.",
    "Concrete outputs: features shipped, tasks automated, LOC or artifacts generated, time saved vs. manual baseline.",
    "Documented Forge setup: agents, MCPs, slash commands, hooks — with owners.",
  ],
  challenges: [
    {
      issue: "Context window overload with large agent teams",
      mitigation: "Lazy-load MCPs; narrow agent scopes; summarize memory files; run shorter pipelines first.",
    },
    {
      issue: "API cost or rate limits",
      mitigation: "Track usage per team; cache retrieval; batch reviews; use smaller models where appropriate.",
    },
    {
      issue: "Tool failures or flaky MCPs",
      mitigation: "Fallback paths; logging; human checkpoint before deploy or customer-facing actions.",
    },
    {
      issue: "Adoption after the intensive week",
      mitigation: "Anchor 1–2 weekly rituals (e.g. code review agent, weekly retro); start with one high-ROI workflow.",
    },
  ],
} as const;

export const ELEVEN_AGENTS = [
  "Planner",
  "Architect",
  "Researcher",
  "Strategist",
  "Coder",
  "Tester",
  "Code reviewer",
  "Security reviewer",
  "Critic / devil’s advocate",
  "Deployer",
  "Retro / reflector",
] as const;

export const CURRICULUM_DAYS: CurriculumDay[] = [
  {
    day: 1,
    title: "Foundations — understand the system & setup",
    focus:
      "Break down the source video together, then install Claude Code + Claude Forge and run a minimal agent workflow with basic MCP servers.",
    outcome:
      "Every participant has a running Forge environment, API keys configured safely, and a successful “hello world” multi-step agent run.",
    objectives: [
      "Explain how one Claude Code workspace plus Claude Forge orchestrates specialized agents, slash commands, skills, and hooks.",
      "Describe the “milk kit” idea: pre-packaged agents, 40+ slash commands (e.g. evaluation, implementation, critique, retro), and automation loops.",
      "Install Claude Code, clone/set up Claude Forge from the cohort GitHub link, and connect simple MCP servers (filesystem, web fetch).",
    ],
    videoIdeas: [
      "Eleven agents collaborating: planning → build → test → review → deploy with minimal manual glue.",
      "Slash-command and skill workflows as the productized interface to the stack.",
      "MCP as the standard way agents reach tools without stuffing everything into context.",
    ],
    practicalSteps: [
      "Screen the source video as a cohort (pause for Q&A): orchestration, Forge layout, demo beats.",
      "Create or verify Anthropic account; generate API key; store in env (never commit secrets).",
      "Install Claude Code per current docs; verify `node` / `npm` versions.",
      "Install Claude Forge from the official repository provided in the cohort workspace (one-command or documented steps).",
      "Configure 1–2 starter MCP servers (e.g. filesystem, fetch) from Forge or MCP catalog.",
      "Run a simple scripted workflow: e.g. plan stub → implement tiny change in a dummy repo → run tests if present.",
    ],
    morningWorkshop: {
      morning: [
        "Welcome, cohort agreements (API spend, no sharing keys, respect for other teams’ repos).",
        "Facilitator maps video chapters to learning goals: 11 agents, Forge, MCP, full loop.",
      ],
      workshop: [
        "Watch key segments; debrief: what would “full automation” mean for your startup this week?",
      ],
    },
    afternoonWorkshop: [
      "Guided install: Claude Code + Forge + MCP on each laptop; facilitator + TA rotate for unblock.",
      "Pair check: each machine runs one end-to-end “hello” task and logs output.",
    ],
    groupActivity: [
      "Optional: each startup states one workflow they want automated by Day 7 (one sentence).",
    ],
    securitySession: [
      "API keys in `.env` / OS keychain; never commit secrets; use `.gitignore`; rotate if exposed.",
    ],
    homework: [
      "Re-run the video’s example automation on a dummy project; note friction and questions.",
    ],
    eveningOptional: "Office hours: stuck installs, API billing questions.",
    facilitatorNotes: [
      "Pin exact Forge commit and Claude Code versions in cohort doc to avoid drift.",
      "If Forge repo URL changes, update cohort materials once — avoid live URL hunting in class.",
    ],
    deliverables: [
      "Working Claude Code + Forge + baseline MCP; screenshot or log of successful hello workflow.",
    ],
  },
  {
    day: 2,
    title: "Core agents & prompting mastery (building the team)",
    focus:
      "Map the eleven agent roles to real startup tasks; craft domain prompts; activate a small multi-agent team on one end-to-end task.",
    outcome:
      "Each startup runs 3–5 agents together on a realistic task (e.g. landing section + review) and drafts custom slash/skills ideas.",
    objectives: [
      "Know the eleven roles: planner, architect, researcher, strategist, coder, tester, code reviewer, security reviewer, critic, deployer, retro/reflector.",
      "Write high-quality system prompts for the startup’s domain (e.g. SaaS analytics feature, API integration).",
      "Run a collaborative task: e.g. researcher + strategist + coder producing and reviewing a small artifact.",
    ],
    videoIdeas: [
      "Agent “roles” as stable personas vs. one-off chat — consistency beats clever one-shots.",
      "Devil’s advocate and security as mandatory gates before merge or deploy.",
    ],
    practicalSteps: [
      "Facilitator presents each agent with 1 startup example and 1 anti-pattern.",
      "Teams write a short “company context” block (mission, stack, constraints) for prompts.",
      "Exercise: activate 3–5 agents on one task (e.g. generate + review a React component or Markdown landing section).",
      "Group brainstorm: map each startup’s bottleneck to an agent sequence.",
    ],
    morningWorkshop: {
      morning: [
        "Deep dive: 11 agents with Forge defaults; how to invoke and chain.",
        "Live demo: video-style build step on a sample repo.",
      ],
      workshop: [
        "Teams draft system prompts; facilitator reviews 2–3 live.",
      ],
    },
    afternoonWorkshop: [
      "Hands-on: first multi-agent end-to-end task per startup on their own repo or sandbox.",
      "Peer feedback: 10 min per team — clarity of prompts and agent handoffs.",
    ],
    groupActivity: [
      "Pitch current bottleneck; group suggests agent lineup and order (whiteboard or shared doc).",
    ],
    homework: [
      "Document 3 custom slash commands or skills tailored to your product (stub text is fine).",
    ],
    eveningOptional: "Async: post one prompt snippet that worked and one that failed.",
    facilitatorNotes: [
      "Keep tasks small enough to finish in session — scope is the main failure mode.",
    ],
    deliverables: [
      "Completed small E2E task with agent trace or log; `SKILLS_OR_SLASH.md` stub with 3 ideas.",
    ],
  },
  {
    day: 3,
    title: "MCP tools & integration (connecting agents to the real world)",
    focus:
      "Install and configure MCP servers; practice lazy-loading; optionally sketch a custom MCP for the startup’s stack.",
    outcome:
      "At least two MCPs configured per team (e.g. Git, DB, API, Notion, Stripe) and one research→plan→code→test run using tools.",
    objectives: [
      "Explain MCP: standard tool interface, multiple servers, least privilege.",
      "Install examples: Git integration, read-only DB or API, web fetch, transcript or doc tools as needed.",
      "Understand lazy-loading and context discipline for multi-agent runs.",
    ],
    videoIdeas: [
      "Recommended MCP categories from ecosystem: memory, fetch, repos, calendars — pick what matches revenue work.",
      "Avoid “everything connected at once” — staged rollout.",
    ],
    practicalSteps: [
      "Morning: MCP architecture whiteboard; 7+ recommended types (facilitator list from current catalog).",
      "Install 2 MCPs per team from a curated list; verify with a smoke prompt.",
      "Exercise: lazy-load pattern — only attach heavy tools when a sub-task needs them.",
      "Optional build track: stub a custom MCP (e.g. internal JSON endpoint, Stripe read-only, Notion page fetch) using cohort template.",
    ],
    morningWorkshop: {
      morning: [
        "MCP deep dive with Forge examples; security: tokens, scopes, read-only defaults.",
      ],
      workshop: [
        "Teams install first MCP; facilitator troubleshoots common errors (path, auth, version).",
      ],
    },
    afternoonWorkshop: [
      "Group challenge: “Research competitor → plan feature → generate code → run tests” using connected tools.",
      "Document failure modes in team runbook.",
    ],
    groupActivity: [
      "Teams share which MCPs they chose and one surprise limitation.",
    ],
    homework: [
      "Set up at least 2 MCPs tailored to your stack; note credentials handling.",
    ],
    eveningOptional: "Security office hour: token storage, CI secrets.",
    facilitatorNotes: [
      "No live customer PII in shared demos — use synthetic data.",
    ],
    deliverables: [
      "`MCP.md` listing servers, purpose, and env vars (redacted).",
    ],
  },
  {
    day: 4,
    title: "Full pipeline execution (decision-to-delivery loop)",
    focus:
      "Run Forge’s memory-backed pipeline end-to-end (e.g. evaluate → implement → critique → retro) on a real startup task.",
    outcome:
      "Each team completes one meaningful pipeline on a live task with human decisions at the right gates; baseline time estimate vs. manual.",
    objectives: [
      "Navigate slash-command flow aligned to the video (court/evaluate, implement, critique, retro as your Forge labels them).",
      "Apply to real work: feature, bug, internal tool, or MVP module — not toy-only.",
      "Practice live debugging and peer review when agents disagree or fail.",
    ],
    videoIdeas: [
      "Human role = decisions + taste; agents = throughput and consistency.",
      "Iteration beats one-shot perfection — retro captures learning for the next run.",
    ],
    practicalSteps: [
      "Morning: facilitator demos full pipeline on sample repo with timers.",
      "Each team selects a live task; run the full orchestra with documented human checkpoints.",
      "Measure: start/end time; number of agent round-trips; what you would have done manually.",
      "Afternoon: peer debugging + short retro per team.",
    ],
    morningWorkshop: {
      morning: [
        "Pipeline mechanics: memory files, where state lives, how to reset a bad run.",
      ],
      workshop: [
        "Teams kick off live tasks; facilitators circulate.",
      ],
    },
    afternoonWorkshop: [
      "Continue pipeline; integrate feedback; prep short learnings for group share.",
    ],
    groupActivity: [
      "2-minute share: one win, one failure, one change for tomorrow.",
    ],
    homework: [
      "Complete one full pipeline on a meaningful project piece; record hours saved vs. manual estimate.",
    ],
    eveningOptional: "Optional: facilitator async review of stuck repos.",
    facilitatorNotes: [
      "If a team has no suitable repo, provide a standard open-source fork for the exercise.",
    ],
    deliverables: [
      "Merged or PR-ready artifact where applicable; written retro notes; rough time-saved estimate.",
    ],
  },
  {
    day: 5,
    title: "Advanced automation & scaling (multi-agent teams + hooks)",
    focus:
      "Parallelism, feedback loops between agents, automation hooks (daily review, content, leads), and CI/CD touchpoints.",
    outcome:
      "2–3 documented automated workflows (triggers, owners, rollback) including at least one recurring or hook-based ritual.",
    objectives: [
      "Patterns: parallel agents, critic loops, merge when tests + security pass.",
      "Hooks: scheduled or event-driven agent tasks (e.g. on PR open, nightly lint summary).",
      "Map to Seattle realities: AWS-heavy stacks, hiring pipelines, basic compliance awareness — without legal advice.",
    ],
    videoIdeas: [
      "Scaling agent throughput without losing accountability — logs and owners.",
      "CI/CD as the deployer’s dance partner, not a black box.",
    ],
    practicalSteps: [
      "Morning: collaboration patterns from Forge docs and video.",
      "Build: hook or scheduled workflow (e.g. daily code review summary, weekly competitor scan).",
      "Optional: wire a deploy or CI step with explicit human approval for production.",
      "Group workshop: stress-test another team’s system with adversarial inputs (safe scope).",
    ],
    morningWorkshop: {
      morning: [
        "Lecture + demos: hooks, parallelism, when not to automate.",
      ],
      workshop: [
        "Teams implement second and third workflows.",
      ],
    },
    afternoonWorkshop: [
      "Cross-team stress tests; fix brittle prompts or MCP calls.",
    ],
    groupActivity: [
      "Share builds; document operational risks.",
    ],
    homework: [
      "Expand to 2–3 automated workflows with owners and triggers.",
    ],
    eveningOptional: "Optional social — no homework required.",
    facilitatorNotes: [
      "Discourage unattended production deploys without approval gates.",
    ],
    deliverables: [
      "`AUTOMATIONS.md` with triggers, frequency, owner, rollback.",
    ],
  },
  {
    day: 6,
    title: "Optimization, evaluation & iteration (making agents reliable)",
    focus:
      "LLM-as-judge and human rubrics; fix context and hallucinations; memory/persistence; cost and security tuning; Day 7 demo prep.",
    outcome:
      "Teams improve reliability of earlier builds, add persistence where needed, and rehearse a 5-minute showcase.",
    objectives: [
      "Evaluate agent outputs with simple rubrics and spot checks.",
      "Tighten memory so agents “remember” across sessions within policy.",
      "Optimize: batch calls, model choice, caching; review API dashboards.",
    ],
    videoIdeas: [
      "Reliability as product — especially for customer-facing or revenue workflows.",
      "Retro agent closes the loop: what to change in prompts and tools next week.",
    ],
    practicalSteps: [
      "Morning: evaluation methods; facilitator demo of judge prompt on a sample output.",
      "Afternoon: fix issues from Days 2–5; add/adjust memory files; run security pass.",
      "Demo prep: 5-minute storyboard per team — problem, setup, demo, metrics.",
      "Evening optional: informal mixer with local founders/investors (organizer-hosted).",
    ],
    morningWorkshop: {
      morning: [
        "Metrics that matter: accuracy, latency, cost, human edit distance.",
      ],
      workshop: [
        "Teams iterate on weakest workflow; facilitator office hours.",
      ],
    },
    afternoonWorkshop: [
      "Dry-run demos; timing feedback.",
    ],
    groupActivity: [
      "Peer rubric: rate another team’s demo clarity (not product quality).",
    ],
    homework: [
      "Polish demo; ensure repo/docs are presentable; redact secrets.",
    ],
    eveningOptional: "Seattle networking mixer (optional).",
    facilitatorNotes: [
      "Confirm consent before photos or quotes for marketing.",
    ],
    deliverables: [
      "Updated runbook; demo script; checklist for Day 7 AV.",
    ],
  },
  {
    day: 7,
    title: "Deployment, showcase & next steps (sustain the leverage)",
    focus:
      "Final polish, autonomous operation on repo or ops where appropriate, showcases, measurement, and alumni plan.",
    outcome:
      "Each startup presents 10–15 minutes with metrics; leaves with action plan, resources, and optional certificate; 30-day follow-up scheduled.",
    objectives: [
      "Deploy or operationalize agent system with clear ownership.",
      "Report: LOC or artifacts, tasks automated, time saved, lessons vs. video expectations.",
      "Close with Seattle resources (e.g. Madrona, AI2, accelerators) and community continuity.",
    ],
    videoIdeas: [
      "Sustaining leverage: weekly audits, not one-week novelty.",
      "How your stack differed from the video — that’s expected.",
    ],
    practicalSteps: [
      "Morning: final fixes; ensure README and Forge config are reproducible.",
      "Afternoon: showcases (10–15 min each) + structured feedback.",
      "Measure: agree on 1–2 KPIs for the next 30 days per team.",
      "Closing: certificates, prompt/Forge resource pack, photo/release forms, 30-day check-in on calendar.",
      "Post-program: facilitator sends summary and optional guest intros.",
    ],
    morningWorkshop: {
      morning: [
        "Buffer for demos; AV checks; backup video if live demo fails.",
      ],
      workshop: [
        "Short facilitator synthesis: cohort themes and FAQ.",
      ],
    },
    afternoonWorkshop: [
      "Showcases; feedback rounds; action plans.",
    ],
    homework: [
      "Optional: one metric + one testimonial line for organizers (with approval).",
    ],
    eveningOptional: "Celebrate — no required homework.",
    facilitatorNotes: [
      "Keep strict time boxes; one person watches clock.",
      "Export shared prompt library and Forge customizations to alumni drive.",
    ],
    deliverables: [
      "Showcase completed; written next-step plan; optional certificate.",
    ],
  },
];
