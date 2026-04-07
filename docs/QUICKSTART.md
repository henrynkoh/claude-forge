# Quickstart

Get the **Seattle Startup OpenClaw Week** curriculum site running in under five minutes.

## Prerequisites

- **Node.js** 20 LTS (or 22) and **npm**
- A terminal and a web browser

This repository is the **documentation website** for the cohort. It does not install Obsidian or OpenClaw for you; participants do that on their own machines per **Day 1–3** of [TUTORIAL.md](./TUTORIAL.md).

## Install and run

```bash
cd seattle-startup-openclaw-week
npm install
npm run dev
```

Open **http://localhost:3000**.

## First clicks (~3 minutes)

1. **Home** (`/`) — Skim **DIKW**, **stack** (Obsidian + agent), and the **source video** link.
2. **Program** (`/curriculum`) — Audience, prerequisites, Seattle logistics, assessment.
3. **Day 1** (`/curriculum/day/1`) — Foundations: data audit, Obsidian vault folders, reflection homework.
4. **Day 3** (`/curriculum/day/3`) — OpenClaw (or equivalent) install overview; security session checklist.
5. **Prompts** (`/prompts`) — Copy **project context** and **operational prompts** into your vault or agent config.

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

Curriculum content is **educational**. Participants must verify terms for **Obsidian**, **LLM/API providers**, and **any agent software**; handle sensitive startup data per company policy; and avoid treating model output as legal, financial, or medical advice.
