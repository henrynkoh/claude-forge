/** Copy-paste prompts for Obsidian vault + local agent workflows. Teams should adapt tone, paths, and safety rules. */

export const CLAUDE_MD_TEMPLATE = `## Startup second brain + local agent (project context)

You assist an early-stage startup using an Obsidian/Markdown vault and a self-hosted agent (e.g. OpenClaw) with read access to agreed paths.

### Your job
- Respect folder boundaries: \`Company/\`, \`Team/\`, \`Agent/Memory/\`, \`Inbox/Imports/\`. Do not invent facts not supported by notes.
- When asked to summarize themes, cite note titles or paths so humans can verify.
- Prefer local-first operations; flag any step that would send data externally.
- For actions that change the world (email, payments, posts), require explicit human confirmation in the runbook.

### Memory files (keep short; update weekly)
- \`Agent/Memory/company-context.md\` — mission, stage, constraints.
- \`Agent/Memory/icp.md\` — ideal customer, pain, buying motion.
- \`Agent/Memory/roadmap.md\` — now / next / later with owners.

### Style
- Concise bullets; link to \`Company/\` notes with \`[[wikilinks]]\` or paths.
- Call out gaps: “We do not have evidence for X in the vault.”

### Safety
- Never exfiltrate secrets. Redact in demos. Use .gitignore for tokens and env files.
`;

export type PromptItem = { id: string; title: string; body: string };

export const PROMPTS: PromptItem[] = [
  {
    id: "agent-memory-refresh",
    title: "Weekly memory refresh (Agent/Memory)",
    body: `Scan Company/Strategy, Company/Product, and Company/Customers for changes in the last 7 days.

Update Agent/Memory/company-context.md, icp.md, and roadmap.md to stay under ~400 words each.

Output: a bullet list of what you changed and what remains uncertain.`,
  },
  {
    id: "customer-themes",
    title: "Extract themes from interview notes",
    body: `You have read-only access to Markdown notes under Company/Customers/Interviews/.

Task:
1) List the top 5 recurring themes with short evidence quotes (note title + line).
2) Flag contradictions between interviews.
3) Suggest 3 experiments to validate the strongest theme.

If the vault lacks interviews, say so and propose a minimum capture template.`,
  },
  {
    id: "weekly-briefing",
    title: "Morning briefing from vault + calendar summary (paste)",
    body: `Paste: (1) today’s calendar text, (2) open GitHub issues titles, (3) last 5 lines from Team/Journal.

Produce a 200-word briefing: priorities, risks, one customer insight from notes, one ask for a teammate.`,
  },
  {
    id: "risk-scan",
    title: "Roadmap risk scan",
    body: `Using Company/Product/roadmap notes and Agent/Memory/roadmap.md, list:
- Top 3 delivery risks
- Top 3 market risks
- One mitigation each that references an existing vault note

If evidence is missing, mark the risk as "unverified" and name the note to create.`,
  },
  {
    id: "decision-record",
    title: "Decision record stub",
    body: `Create a Decision Record for: [DECISION].

Include: context, options considered, decision, consequences, review date, owner.

Link to related Customer insights, Experiments, and Metrics notes with [[wikilinks]].`,
  },
  {
    id: "dataview-helper",
    title: "Dataview query starter (experiments)",
    body: `Obsidian Dataview: list all notes under "Company/Product/Experiments" with fields status, owner, and end date.

Adapt table columns to our frontmatter keys. If frontmatter is missing, suggest a minimal schema.`,
  },
  {
    id: "subagent-product-analyst",
    title: "Sub-agent prompt: Product Analyst",
    body: `Role: Product Analyst for this vault only.

Rules:
- Cite paths for every claim.
- Separate facts from hypotheses.
- End with three open questions for the founder.

Question: [YOUR QUESTION]`,
  },
  {
    id: "security-review",
    title: "Automation security review",
    body: `We plan to automate: [DESCRIBE].

List: data touched, blast radius if wrong, confirmation gates, rollback, and what we log.

Refuse steps that send external comms without human approval.`,
  },
];
