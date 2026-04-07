# Manual — Seattle Startup OpenClaw Week (web app)

## 1. Purpose

This application is a **static curriculum viewer** for a **7-day, greater Seattle** cohort that teaches **early-stage startup teams** to:

- Build a **Markdown “startup second brain”** in **Obsidian** (folders, templates, Dataview, graph).
- Connect a **self-hosted agent** (e.g. **OpenClaw** or an equivalent tool that can read the vault and chat via messaging).
- Move up the **DIKW pyramid** — data → information → knowledge → wisdom — with explicit **security** and **human-in-the-loop** habits.

The app does **not** connect to Obsidian, OpenClaw, or cloud LLMs; it documents how cohorts should work.

**Source video (conceptual alignment):** `https://www.youtube.com/watch?v=F12WOZ9ICG4`

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
| `/` | Landing: DIKW, tools, pipeline, cohort snapshot, 7-day list |
| `/curriculum` | Program overview: goals, prerequisites, materials, cost band, venues |
| `/curriculum/day/[1–7]` | Single day: focus, **outcome**, objectives, video ideas, steps, morning/afternoon, optional group/security, homework, deliverables |
| `/prompts` | Project context template + copy-paste prompts (memory, briefings, risk scan) |
| `/facilitator` | Logistics, sample schedule blocks, promotion notes |
| `/post-week` | Metrics, ongoing rituals, common challenges |

---

## 4. Data modules (`src/lib/`)

| File | Role |
|------|------|
| `site.ts` | `SITE_NAME`, `SOURCE_VIDEO_URL`, `LANDING_NAV`, GitHub URL helpers |
| `disclaimer.ts` | Footer disclaimer text |
| `types.ts` | `CurriculumDay` (includes `outcome`, optional `afternoonWorkshop`, `groupActivity`, `securitySession`) |
| `curriculum-days.ts` | `PROGRAM_OVERVIEW`, `POST_PROGRAM`, `CURRICULUM_DAYS` |
| `curriculum.ts` | Re-exports + `getDay()` |
| `prompts.ts` | `CLAUDE_MD_TEMPLATE`, `PROMPTS` |

To **edit curriculum text**, change `curriculum-days.ts` / `prompts.ts` and redeploy. There is no CMS.

---

## 5. Components

- **`SiteHeader`**: Global navigation; title from `SITE_NAME`.
- **`LandingNav`** (client): Section scroll nav; IDs must match `LANDING_NAV` in `site.ts`.
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

- Footer: not affiliated with YouTube, Anthropic, Obsidian, or third-party agent projects.
- Marketing: avoid guaranteed **revenue**, **token savings**, or **AI accuracy**. See [marketing/ADS-DISCLAIMERS.md](./marketing/ADS-DISCLAIMERS.md).

---

## 9. Glossary

| Term | Meaning |
|------|---------|
| DIKW | Data → Information → Knowledge → Wisdom; framework used in Day 1 and Day 4–5. |
| Second brain | Company + founder knowledge in Markdown, linked and queryable. |
| OpenClaw | Example of a self-hosted agent stack (participants follow current upstream docs). |
| `Agent/Memory/` | Suggested folder for short context files the agent loads (see `/prompts`). |
