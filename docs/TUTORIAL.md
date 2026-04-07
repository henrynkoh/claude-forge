# Tutorial — Running the cohort with this app

This walkthrough is for **facilitators** and **participants** in the **7-day greater Seattle** “Startup Second Brain” intensive: **Obsidian** + **self-hosted agent** (e.g. OpenClaw) + **DIKW**, with hybrid IRL/async delivery.

---

## Part 1 — Environment (30 minutes)

### 1.1 Run the curriculum site locally

Follow [QUICKSTART.md](./QUICKSTART.md). Confirm the homepage loads and sections **DIKW**, **Tools**, and **Pipeline** render.

### 1.2 Install participant tools (before Day 1)

Each team should have:

- **Obsidian** with a **local folder** vault (or agreed Markdown workflow).
- Terminal comfort for **Day 3** agent setup.
- Optional: **API keys** for cloud LLMs, or **local models**, per team policy.
- Optional: **Telegram / WhatsApp / Slack** test account for messaging the agent.
- **Non-sensitive** sample material for exercises (public articles, redacted interview snippets).

**Do not** require proprietary customer data in shared demos; use redacted samples.

### 1.3 Open the reference video (optional pre-read)

From the app home or `src/lib/site.ts`, open **`SOURCE_VIDEO_URL`** (`https://www.youtube.com/watch?v=F12WOZ9ICG4`). Skim lifelogging and “feed the system” themes so the cohort shares vocabulary before **Day 1** screening.

---

## Part 2 — Week navigation (20 minutes)

### 2.1 Program overview

Open `/curriculum` and confirm:

- **Audience**, **group size**, and **format** (hybrid Seattle) match your run.
- **Prerequisites** and **materials** are emailed ahead.
- **Assessment** (reflections, Day 7 demos) is understood by sponsors.

### 2.2 Work day by day

For each day `1`–`7`:

1. Open `/curriculum/day/{n}`.
2. Read the **Outcome** line — this is the bar for “done.”
3. Run **morning** + **hands-on workshop**; add **afternoon** blocks when listed.
4. Run **security session** or **group activity** when present (notably **Day 3–4** and **Day 6**).
5. Assign **homework**; optional **evening** async check-in.
6. Verify **deliverables** before dismissing.

### 2.3 Prompts and project context

- Open `/prompts`.
- Teams adapt **`CLAUDE_MD_TEMPLATE`** (or equivalent) for **Claude Projects**, **Claude Code**, or **agent memory** files under `Agent/Memory/`.
- Use **weekly memory refresh**, **customer themes**, **briefing**, and **risk scan** prompts; keep paths and secrets out of shared chats.

### 2.4 Facilitator-only

- Open `/facilitator` for **sample schedule** (4–6 hour structured days) and partner promotion ideas.
- Book optional **guest** for **Day 5**; confirm **Day 7** demo timer and feedback format.

### 2.5 Post-week

- Open `/post-week` for **metrics** and **challenge mitigations**.
- Schedule **30-day** follow-up per `POST_PROGRAM` in `curriculum-days.ts`.

---

## Part 3 — Daily execution tips

| Day | Facilitator focus |
|-----|-------------------|
| 1 | **DIKW** on the board; vault skeleton > perfect taxonomy. Data audit must be real but can be short. |
| 2 | Watch **plugin overload**; standardize on a small plugin set for the cohort. |
| 3 | **Security session** is mandatory: tokens, sandbox accounts, backups before agent experiments. |
| 4 | **Dataview** optional fallback: agent-only theme extraction if someone struggles with queries. |
| 5 | **No** unsupervised email-send automation; human confirmation for external actions. |
| 6 | **Mock council**: consent before any cross-team note sharing; redact secrets. |
| 7 | **Timed demos**; capture FAQ; **roadmap** note per team. |

---

## Part 4 — Compliance and data hygiene

- **Tools**: not affiliated with this curriculum; see site footer and [marketing/ADS-DISCLAIMERS.md](./marketing/ADS-DISCLAIMERS.md).
- **Secrets**: never paste API keys, customer PII, or unreleased financials into shared prompts or public repos.
- **Marketing**: educational positioning only; no guaranteed business or AI outcomes.

---

## Related docs

- [QUICKSTART.md](./QUICKSTART.md) — install and first routes  
- [MANUAL.md](./MANUAL.md) — routes, files, troubleshooting  
- [marketing/README.md](./marketing/README.md) — social, blog, email copy  
