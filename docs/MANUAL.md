# Manual — Seattle Claude Forge Startup Week (web app)

## 1. Purpose

This application is a **static curriculum viewer** for a **7-day, greater Seattle** cohort that teaches **early-stage startup teams** to:

- Use **Claude Code** (Anthropic’s AI coding environment) as the primary workspace.
- Layer **Claude Forge** — an open-source “milk kit” — providing **eleven specialized agents**, slash commands, skills, hooks, and automation patterns.
- Connect **MCP (Model Context Protocol)** servers so agents use repos, APIs, and tools without overfilling context, with explicit **security**, **cost awareness**, and **human-in-the-loop** gates.

The app does **not** connect to Anthropic, Claude Code, Forge, or any MCP server; it documents how cohorts should work.

**Source lecture (conceptual alignment):** `https://www.youtube.com/watch?v=rSvpKOyaefU`

---

## 2. Technical stack

| Item | Version / note |
|------|----------------|
| Framework | Next.js 16 (App Router) |
| React | 19 |
| Styling | Tailwind CSS 4 |
| Rendering | Static generation for day routes (`generateStaticParams`) |

**Repository layout (source, not `node_modules` / `.next`):**

```
seattle-startup-openclaw-week/
├── README.md
├── docs/
│   ├── QUICKSTART.md
│   ├── TUTORIAL.md
│   ├── MANUAL.md          ← this file
│   └── marketing/         ← ad & post templates
├── src/
│   ├── app/               ← routes (pages)
│   ├── components/        ← CopyButton, SiteHeader, landing nav
│   └── lib/               ← curriculum data, prompts, disclaimers, site config
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 3. Routes reference

| URL path | Description |
|----------|-------------|
| `/` | Landing: Forge loop, eleven agents, tools, pipeline, cohort snapshot, 7-day list |
| `/curriculum` | Program overview: goals, prerequisites, materials, cost band, venues |
| `/curriculum/day/[1–7]` | Single day: focus, **outcome**, objectives, video tie-ins, practical steps, morning/afternoon, optional group/security, homework, deliverables |
| `/prompts` | Claude Code / Forge project template + copy-paste prompts (multi-agent, MCP, critique, retro) |
| `/facilitator` | Logistics, sample schedule blocks, promotion notes |
| `/post-week` | Metrics, ongoing rituals, common challenges |

---

## 4. Data modules (`src/lib/`)

| File | Role |
|------|------|
| `site.ts` | `SITE_NAME`, `SOURCE_VIDEO_URL`, `LANDING_NAV`, GitHub URL helpers |
| `disclaimer.ts` | Footer disclaimer text |
| `types.ts` | `CurriculumDay` (includes `outcome`, optional `afternoonWorkshop`, `groupActivity`, `securitySession`) |
| `curriculum-days.ts` | `PROGRAM_OVERVIEW`, `POST_PROGRAM`, `ELEVEN_AGENTS`, `CURRICULUM_DAYS` |
| `curriculum.ts` | Re-exports + `getDay()` |
| `prompts.ts` | `CLAUDE_MD_TEMPLATE`, `PROMPTS` |

To **edit curriculum text**, change `curriculum-days.ts` / `prompts.ts` and redeploy. There is no CMS.

---

## 5. Components

- **`SiteHeader`**: Global navigation; title from `SITE_NAME`.
- **`LandingNav`** (client): Section scroll nav; IDs must match `LANDING_NAV` in `site.ts` (e.g. `forge-loop`, not `dikw`).
- **`CopyButton`** (client): Copies text via `navigator.clipboard`. Requires **HTTPS** or `localhost`.

---

## 6. Scripts

| Command | Effect |
|---------|--------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

---

## 7. Troubleshooting

| Issue | What to try |
|--------|-------------|
| **Copy** does nothing | Use `localhost` or HTTPS; check clipboard permissions. |
| **Workspace root warning** during build | Multiple `package-lock.json` files in parent paths; run commands from `seattle-startup-openclaw-week`; often benign. Set `turbopack.root` in `next.config.ts` if needed. |
| **404 on day route** | Only days `1`–`7` are valid. |
| **Stale content after edit** | Hard refresh; restart `next dev`; rebuild for production. |

---

## 8. Legal and educational posture

- Footer: not affiliated with YouTube, Anthropic, or third-party Forge/MCP projects.
- Marketing: avoid guaranteed **revenue**, **token savings**, or **AI accuracy**. See [marketing/ADS-DISCLAIMERS.md](./marketing/ADS-DISCLAIMERS.md).

---

## 9. Glossary

| Term | Meaning |
|------|---------|
| Claude Code | Anthropic’s AI coding environment used as the base for the cohort stack. |
| Claude Forge | Open-source framework (“milk kit”) layering multiple agents, slash commands, skills, and hooks on Claude Code — follow cohort-pinned repo and docs. |
| MCP | Model Context Protocol: standard way to attach tool servers (filesystem, Git, APIs, etc.) to agent workflows. |
| Eleven agents | Planner, architect, researcher, strategist, coder, tester, code reviewer, security reviewer, critic, deployer, retro/reflector — see landing page and `ELEVEN_AGENTS` in `curriculum-days.ts`. |
| Slash commands | Forge-provided commands (names may vary by version) for evaluation, implementation, critique, retro, etc. |
