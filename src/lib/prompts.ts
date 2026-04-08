/** Copy-paste prompts for Claude Code + Claude Forge. Teams should adapt tone, repo layout, and safety rules. */

export const CLAUDE_MD_TEMPLATE = `## Claude Forge + startup context (project memory)

You work inside a Claude Code workspace with Claude Forge: multiple specialized agents, slash commands, skills, hooks, and MCP tools.

### Your job
- Respect the repo’s AGENTS.md / Forge conventions and which agents are allowed to write vs. review.
- Cite file paths and commands when suggesting changes; do not invent APIs or env vars not in the repo.
- For deploy, billing, or customer data: require explicit human confirmation and least-privilege MCP scopes.

### Company context (keep short; update weekly)
- Mission, stage, ICP, stack, and “out of scope” areas.
- Where secrets live (env only) — never echo tokens.

### Style
- Concise bullets; separate plan vs. implementation vs. test vs. review.
- Call out uncertainty and what to verify in staging.

### Safety
- Redact in demos. .gitignore for .env. Rotate keys if leaked.
`;

export type PromptItem = { id: string; title: string; body: string };

export const PROMPTS: PromptItem[] = [
  {
    id: "forge-project-bootstrap",
    title: "Forge project bootstrap (AGENTS.md)",
    body: `We are a Seattle-area startup using Claude Forge in this repo.

Summarize:
1) Recommended agent lineup for our stack: [LIST: e.g. Next.js, Postgres, Stripe].
2) Which slash commands to use first this week (/court or evaluate, /implement, /critique, /retro — use our Forge’s exact names).
3) Three MCP servers to add in phase 1 vs. phase 2 and why.

Output: bullet list + a one-paragraph “rules of engagement” for humans.`,
  },
  {
    id: "multi-agent-feature",
    title: "Multi-agent feature slice (research → plan → code → test)",
    body: `Goal: [FEATURE IN ONE SENTENCE].

Use agents in order: researcher → strategist → architect → coder → tester → code reviewer → security reviewer.

For each handoff, list: inputs, outputs, and what the human must approve before the next agent runs.

End with a PR title and test checklist.`,
  },
  {
    id: "slash-critique-pass",
    title: "Critique pass after /implement",
    body: `We just ran /implement on branch [BRANCH].

Ask the critic + code reviewer agents to:
1) List top 5 risks (correctness, security, UX).
2) Suggest minimal follow-up diffs — no big rewrite.
3) Flag anything that should not merge without human review.

Reference file paths only.`,
  },
  {
    id: "retro-session",
    title: "Retro after a pipeline run (/retro)",
    body: `Summarize the last full pipeline run:
- Task, time elapsed, agents invoked, MCPs used.
- What worked vs. what failed (tools, prompts, context).
- Three concrete changes for next run (prompt, skill, hook, or MCP).

Keep under 300 words; actionable bullets.`,
  },
  {
    id: "mcp-scope-review",
    title: "MCP scope & token review",
    body: `We plan to add MCP servers: [LIST].

For each: data touched, read vs. write, blast radius if wrong, and whether production is allowed.

Refuse any step that exposes customer PII to unnecessary third parties.`,
  },
  {
    id: "hook-daily-review",
    title: "Hook: daily PR / diff review",
    body: `Design a hook (schedule or event) that runs code reviewer + security reviewer on new PRs or nightly on main.

Include: trigger, agents, exit criteria, and what happens on failure (Slack message template, no auto-merge).`,
  },
  {
    id: "llm-judge-rubric",
    title: "LLM-as-judge rubric (quick)",
    body: `Given agent output below, score 1–5 on: correctness, relevance, safety, concision.

Output: scores, one paragraph rationale, and whether a human must intervene before ship.

--- OUTPUT ---
[PASTE HERE]`,
  },
  {
    id: "cost-usage-check",
    title: "API usage & cost sanity check",
    body: `From our Anthropic usage pattern (paste or describe): daily agent runs, approximate tokens.

Suggest: batching, smaller model for triage, caching retrieval, and when to stop autonomous loops.`,
  },
];
