# Tutorial — Running the cohort with this app

This walkthrough is for **facilitators** and **participants** in the **7-day greater Seattle** **Claude Forge Startup Week**: **Claude Code** + **Claude Forge** + **MCP**, with hybrid IRL/async delivery.

---

## Part 1 — Environment (30 minutes)

### 1.1 Run the curriculum site locally

Follow [QUICKSTART.md](./QUICKSTART.md). Confirm the homepage loads and sections **Forge loop**, **Tools**, and **Pipeline** render.

### 1.2 Install participant tools (before Day 1)

Each team should have:

- **Claude Code** installed per current Anthropic documentation.
- **Node.js / npm** for Forge and MCP tooling as required by the pinned Forge version.
- **Anthropic API key** (Claude access) and clarity on **billing** / spend limits.
- **GitHub** account and access to the team repo used for exercises.
- **Claude Forge** installed from the **cohort-pinned** repository (exact URL in your facilitator pack — do not rely on stale search results).
- **Non-sensitive** sample repo or branch for exercises (public fork or internal sandbox).

**Do not** require proprietary customer secrets in shared demos; use synthetic or redacted data.

### 1.3 Open the reference lecture (optional pre-read)

From the app home or `src/lib/site.ts`, open **`SOURCE_VIDEO_URL`** (`https://www.youtube.com/watch?v=rSvpKOyaefU`). Skim **eleven agents**, **Forge**, **slash commands**, and **MCP** so the cohort shares vocabulary before **Day 1** screening.

---

## Part 2 — Week navigation (20 minutes)

### 2.1 Program overview

Open `/curriculum` and confirm:

- **Audience** (8–12 startups, 2–3 people max per team), **format** (hybrid Seattle), and **assessment** match your run.
- **Prerequisites** (API key, GitHub, Node, Claude Code before Day 1) are emailed ahead.
- Sponsors understand **Day 7** showcases and optional **30-day** check-in.

### 2.2 Work day by day

For each day `1`–`7`:

1. Open `/curriculum/day/{n}`.
2. Read the **Outcome** line — this is the bar for “done.”
3. Run **morning** + **hands-on workshop**; add **afternoon** blocks when listed.
4. Run **security session** or **group activity** when present (notably **Day 1**, **Day 3**, **Day 6**).
5. Assign **homework**; optional **evening** async check-in.
6. Verify **deliverables** before dismissing.

### 2.3 Prompts and project context

- Open `/prompts`.
- Teams adapt **`CLAUDE_MD_TEMPLATE`** for **Claude Code / Forge** project memory and repo conventions.
- Use prompts for **multi-agent feature slices**, **MCP scope review**, **critique**, **retro**, and **cost checks** — never paste API keys or customer PII into shared channels.

### 2.4 Facilitator-only

- Open `/facilitator` for **sample schedule** (4–6 hour structured days) and partner promotion ideas.
- Pin **Forge + Claude Code versions** in cohort docs; book optional **guest** (e.g. **Day 2** or **Day 6**); confirm **Day 7** demo timer and feedback format.

### 2.5 Post-week

- Open `/post-week` for **metrics** and **challenge mitigations**.
- Schedule **30-day** follow-up per `POST_PROGRAM` in `curriculum-days.ts`.

---

## Part 3 — Daily execution tips

| Day | Facilitator focus |
|-----|-------------------|
| 1 | **Install completion** over perfection; API key hygiene; hello workflow must succeed for every laptop. |
| 2 | **Prompt quality** and **agent handoffs**; keep E2E tasks small enough to finish. |
| 3 | **MCP auth** and **scopes**; read-only defaults; no live customer PII in demos. |
| 4 | **Full pipeline** on a real task; humans at merge/deploy gates. |
| 5 | **Hooks / automation** — no unattended production deploys without approval. |
| 6 | **Reliability** and **demo dry-run**; redact secrets in showcases. |
| 7 | **Timed demos**; metrics and alumni plan; certificates / photo release if used. |

---

## Part 4 — Compliance and data hygiene

- **Tools**: not affiliated with this curriculum; see site footer and [marketing/ADS-DISCLAIMERS.md](./marketing/ADS-DISCLAIMERS.md).
- **Secrets**: never paste API keys, customer PII, or credentials into shared prompts or public repos.
- **Marketing**: educational positioning only; no guaranteed business or AI outcomes.

---

## Related docs

- [QUICKSTART.md](./QUICKSTART.md) — install and first routes  
- [MANUAL.md](./MANUAL.md) — routes, files, troubleshooting  
- [marketing/README.md](./marketing/README.md) — social, blog, email copy  
