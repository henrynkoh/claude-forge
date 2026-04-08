# Newsletter — issues and sequences

Use for **Mailchimp, ConvertKit, Beehiiv, Substack (professional list), etc.**  
Segment: **founders / startup operators** who opted in. Double opt-in recommended.

Disclaimer blocks: [ADS-DISCLAIMERS.md](./ADS-DISCLAIMERS.md)

---

## Welcome email (issue #0) — subject lines A/B

- **A:** `You’re in — Seattle Claude Forge Week (educational)`  
- **B:** `Claude Code + Forge: 7-day cohort syllabus`

**Preview text:** Educational only — not affiliated with Anthropic, YouTube, or third-party Forge/MCP projects.

**Body outline:**

1. Thanks for subscribing — **founders & team leads** list.  
2. What you’ll get: **curriculum updates**, **prompt patterns**, **API/MCP security reminders** when the repo changes.  
3. **Boundaries:** no guaranteed revenue or AI accuracy; you manage your own **Anthropic billing** and data policies.  
4. Link: **Quickstart** `{{app_url}}` (repo `docs/QUICKSTART.md` if self-hosted).  
5. Unsubscribe / preferences.

---

## Issue #1 — The problem in one minute

**Subject:** One chat window is not a build system

**Lead:**  
“If your ‘AI strategy’ is still a single thread that forgets your repo every session, you’re not shipping faster — you’re re-explaining faster. Here’s what we teach in one week…”

**Bullets:**

- **Claude Code** + **Claude Forge** — **eleven agent** roles, slash commands, skills  
- **MCP** — connect tools without stuffing context  
- **Full pipeline** on a **real** startup task — with critique and retro  
- **Security** — keys, scopes, human gates before production  

**CTA:** Open Day 1 at `{{app_url}}/curriculum/day/1`

---

## Issue #2 — Prompts that survive the week

**Subject:** Copy-paste prompts for multi-agent runs + MCP reviews

Tease the **`/prompts`** page: Forge bootstrap, feature slice across agents, critique pass, retro, cost check — **without** pasting secrets.

**CTA:** `{{app_url}}/prompts`

---

## Issue #3 — Post-cohort maintenance

**Subject:** Weekly agent audit — prompts, MCPs, API spend

Short checklist: review Forge config, MCP tokens and scopes, failing hooks, Anthropic usage dashboard. Link to **`/post-week`**.

---

## Launch sequence (3 days before cohort)

| Day | Subject | Body focus |
|-----|---------|------------|
| T-3 | `Seattle cohort opens Monday — what to install` | Claude Code, Node/npm, Anthropic API, Forge repo from facilitator |
| T-1 | `Tomorrow: bring a sandbox repo` | No production secrets in class |
| T+1 | `Day 1 recap + homework` | Link to day page + install friction log |

Replace `{{app_url}}` with your deployed base URL.
