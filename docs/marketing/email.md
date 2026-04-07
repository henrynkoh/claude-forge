# Email — templates (1:1 and broadcast)

Use **merge tags** (`{{first_name}}`, `{{company}}`) per your ESP. Keep **CAN-SPAM** compliant: physical address, unsubscribe.

Disclaimers: [ADS-DISCLAIMERS.md](./ADS-DISCLAIMERS.md)

---

## 1. Cold outreach (accelerator / community partner)

**Subject:** 7-day “Startup Second Brain” cohort for Seattle teams — syllabus?

**Body:**

Hi {{first_name}},

We run a **professional education** week for **early-stage greater Seattle teams**: an **Obsidian** Markdown vault plus a **self-hosted AI agent** (e.g. **OpenClaw**-style) so customer and product context **compounds**—with **DIKW** and **security** practices built in. Concepts align with `{{video_url}}`.

If {{org_name}} serves founders drowning in **scattered tools and chat threads**, happy to share a **one-page outline**. Educational only—not a consulting engagement.

Worth 15 minutes?

{{facilitator_name}}  
{{signup_url}}

---

## 2. Lead magnet delivery (“prompt pack”)

**Subject:** Your vault + agent prompt starters (educational)

Hi {{first_name}},

Here’s the link: `{{app_url}}/prompts`

**Please read:** Use **redacted** sample notes only. Verify terms for **Obsidian**, **LLM/API providers**, and **any agent software** you use. This is **training material**, not a security review.

Reply **COHORT** if you want the full **7-day** schedule.

{{facilitator_name}}

---

## 3. Registration / receipt

**Subject:** Confirmed — Seattle Startup OpenClaw Week

Hi {{first_name}},

You’re registered for **Seattle Startup OpenClaw Week** (educational cohort).

**Before Day 1:**  
- Install **Obsidian** and create a vault folder.  
- Skim **Day 1–3** on the site (vault + agent setup).  
- Bring **redacted** sample notes or public articles for ingestion practice.  
- Optional: create a **test** messaging account if you will connect the agent to chat.

**Site:** `{{app_url}}`  
**Docs:** Quickstart, Manual, Tutorial in the repository `docs/` folder.

This program is **not** affiliated with Anthropic, Obsidian, YouTube, or third-party agent projects. **Outcomes vary.**

— {{facilitator_name}}

---

## 4. Waitlist / interest

**Subject:** You’re on the list — Seattle Startup OpenClaw Week

Thanks, {{first_name}}. We’ll email when the next **greater Seattle** cohort opens.  
Curriculum preview: `{{app_url}}`  
Reference: `{{video_url}}`

Unsubscribe: {{unsubscribe_url}}

---

## 5. Post–Day 7 alumni nudge

**Subject:** Memory refresh — 15 minutes

Hi {{first_name}},

Quick win: open **`/prompts`** → run the **weekly memory refresh** prompt; update `Agent/Memory/` and fix **three** stale links in `Company/`.

Educational reminder: verify sensitive data stays out of shared chats and untrusted agents.

`{{app_url}}/prompts`

---

## 6. Internal team forward (for participants to CC legal)

**Subject:** FYI — external cohort uses Obsidian + local agent (non-prod samples only)

Team — I’m joining a **Startup Second Brain** cohort. I will **not** paste **customer PII**, **unpublished financials**, or **credentials** into shared prompts. I’ll use **redacted** or **public** sources for exercises. Agent actions that **send** or **delete** data require **explicit** approval per runbook.
