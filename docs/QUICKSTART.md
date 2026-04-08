# Quickstart

Get the **Seattle Claude Forge Startup Week** curriculum site running in under five minutes.

## Prerequisites

- **Node.js** 20 LTS (or 22) and **npm**
- A terminal and a web browser

This repository is the **documentation website** for the cohort. It does **not** install **Claude Code**, **Claude Forge**, or **MCP servers** for you; participants set those up on their own machines per **Day 1–3** of [TUTORIAL.md](./TUTORIAL.md).

## Install and run

```bash
cd seattle-startup-openclaw-week
npm install
npm run dev
```

Open **http://localhost:3000**.

## First clicks (~3 minutes)

1. **Home** (`/`) — Skim **Forge loop** (eleven agents), **stack** (Claude Code + Forge + MCP), and the [**source lecture**](https://www.youtube.com/watch?v=rSvpKOyaefU) link.
2. **Program** (`/curriculum`) — Audience, prerequisites (API key, GitHub, Node), Seattle logistics, assessment.
3. **Day 1** (`/curriculum/day/1`) — Foundations: video breakdown, Claude Code + Forge install, baseline MCP, hello workflow.
4. **Day 3** (`/curriculum/day/3`) — MCP integration, lazy-loading, optional custom MCP; security for tokens and scopes.
5. **Prompts** (`/prompts`) — Copy **project context** and **operational prompts** into your repo or facilitator pack.

## Production build (optional)

```bash
npm run build
npm start
```

## Where to go next

| Goal | Doc |
|------|-----|
| Full cohort walkthrough | [TUTORIAL.md](./TUTORIAL.md) |
| Routes, files, troubleshooting | [MANUAL.md](./MANUAL.md) |
| Social / email / blog copy | [marketing/README.md](./marketing/README.md) |

## Reminder

Curriculum content is **educational**. Participants must verify **Anthropic** API terms, **Claude Code** / **Forge** licenses and docs, **MCP server** policies, and **GitHub** access rules; handle sensitive startup data per company policy; and avoid treating model output as legal, financial, or medical advice.
