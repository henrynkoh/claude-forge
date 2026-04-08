# Email — templates (1:1 and broadcast)

Use **merge tags** (`{{first_name}}`, `{{company}}`) per your ESP. Keep **CAN-SPAM** compliant: physical address, unsubscribe.

Disclaimers: [ADS-DISCLAIMERS.md](./ADS-DISCLAIMERS.md)

---

## 1. Cold outreach (accelerator / community partner)

**Subject:** 7-day Claude Forge cohort for Seattle teams — syllabus?

**Body:**

Hi {{first_name}},

We run a **professional education** week for **early-stage greater Seattle teams**: **Claude Code** plus **Claude Forge** (multi-agent orchestration: slash commands, skills, hooks) and **MCP** tool integration — so planning, build, test, and review can be **delegated** with clear human gates. Concepts align with `{{video_url}}`.

If {{org_name}} serves founders who want **real shipping leverage** (not another generic chat), happy to share a **one-page outline**. Educational only—not a consulting engagement.

Worth 15 minutes?

{{facilitator_name}}  
{{signup_url}}

---

## 2. Lead magnet delivery (“prompt pack”)

**Subject:** Your Claude Forge prompt starters (educational)

Hi {{first_name}},

Here’s the link: `{{app_url}}/prompts`

**Please read:** Use **sandbox repos** and **redacted** data only. Verify **Anthropic** API terms and any **MCP server** policies. This is **training material**, not a security review.

Reply **COHORT** if you want the full **7-day** schedule.

{{facilitator_name}}

---

## 3. Registration / receipt

**Subject:** Confirmed — Seattle Claude Forge Startup Week

Hi {{first_name}},

You’re registered for **Seattle Claude Forge Startup Week** (educational cohort).

**Before Day 1:**  
- Install **Claude Code** and **Node.js/npm** per facilitator checklist.  
- Obtain **Anthropic API** access and understand **billing**.  
- Skim **Day 1–3** on the site (setup, agents, MCP).  
- Prepare a **sandbox** GitHub repo or branch for exercises — **no** production secrets in class.  

**Site:** `{{app_url}}`  
**Docs:** Quickstart, Manual, Tutorial in the repository `docs/` folder.

This program is **not** affiliated with Anthropic, YouTube, or third-party Forge/MCP projects. **Outcomes vary.**

— {{facilitator_name}}

---

## 4. Waitlist / interest

**Subject:** You’re on the list — Seattle Claude Forge Startup Week

Thanks, {{first_name}}. We’ll email when the next **greater Seattle** cohort opens.  
Curriculum preview: `{{app_url}}`  
Reference lecture: `{{video_url}}`

Unsubscribe: {{unsubscribe_url}}

---

## 5. Post–Day 7 alumni nudge

**Subject:** Retro your agents — 15 minutes

Hi {{first_name}},

Quick win: open **`/prompts`** → run the **retro** prompt after your last pipeline; update Forge **skills/slash** stubs and check **Anthropic** usage for the week.

Educational reminder: keep **customer PII** and **tokens** out of shared chats and untrusted tools.

`{{app_url}}/prompts`

---

## 6. Internal team forward (for participants to CC legal)

**Subject:** FYI — external cohort uses Claude Code + Forge + MCP (sandbox only)

Team — I’m joining a **Claude Forge** cohort. I will **not** paste **customer PII**, **credentials**, or **production secrets** into shared prompts. I’ll use **sandbox** repos for class. **Merge/deploy** to production requires **explicit** approval per our runbook.
