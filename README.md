# Seattle Startup OpenClaw Week

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-Private-lightgrey)](#)

**Interactive curriculum site** for a **7-day, greater Seattle** cohort: **Obsidian** (startup second brain) + **OpenClaw** or an equivalent **self-hosted agent**, aligned to [**this source video**](https://www.youtube.com/watch?v=F12WOZ9ICG4) — lifelogging, **DIKW**, and local-first security habits.

---

## Table of contents

- [Interactive landing (this repo’s web app)](#interactive-landing-this-repos-web-app)
- [Documentation](#documentation)
- [Marketing & ad copy](#marketing--ad-copy)
- [Run locally](#run-locally)
- [GitHub button & env](#github-button--env)
- [Content map](#content-map)
- [Scripts](#scripts)
- [Stack](#stack)
- [Legal / educational posture](#legal--educational-posture)

---

## Interactive landing (this repo’s web app)

When you run the app ([locally](#run-locally) or on **Vercel** / **GitHub Pages** via your own deployment), the **home page** (`/`) is a full **single-page landing experience**:

| Feature | What you get |
|--------|----------------|
| **Left sidebar (desktop)** | Scrollable **On this page** navigation grouped into **Overview**, **Curriculum**, and **Resources** — jump to Intro, Program, DIKW, 7 days, Prompts, Docs, etc. Active section highlights as you scroll. |
| **Top chips (mobile)** | Horizontal scroll of the same sections for small screens. |
| **Hero** | Gradient mesh, grid background, **bento-style** stat cards (7 days, DIKW, live modules). |
| **GitHub (bottom-right)** | Fixed **“View on GitHub ↗”** button — set `NEXT_PUBLIC_GITHUB_REPO_URL` so it points at *this* repository. |

GitHub’s **README** (this file) is the text-first overview; the **Next.js app** is the rich, visual experience.

---

## Documentation

| Doc | File | Purpose |
|-----|------|---------|
| **Quickstart** | [docs/QUICKSTART.md](./docs/QUICKSTART.md) | Install, run, first clicks (~5 min) |
| **Manual** | [docs/MANUAL.md](./docs/MANUAL.md) | Routes, repo layout, `src/lib` data, troubleshooting |
| **Tutorial** | [docs/TUTORIAL.md](./docs/TUTORIAL.md) | Facilitator & participant walkthrough for the week |
| **Marketing index** | [docs/marketing/README.md](./docs/marketing/README.md) | Ads & copy for social, blogs, email, newsletter |
| **Disclaimers** | [docs/marketing/ADS-DISCLAIMERS.md](./docs/marketing/ADS-DISCLAIMERS.md) | Required legal/education language for ads and posts |

## Marketing & ad copy

| Channel | File |
|---------|------|
| Facebook | [docs/marketing/facebook-ads.md](./docs/marketing/facebook-ads.md) |
| Instagram | [docs/marketing/instagram-ads.md](./docs/marketing/instagram-ads.md) |
| Threads | [docs/marketing/threads-ads.md](./docs/marketing/threads-ads.md) |
| Blogger (Blogspot) | [docs/marketing/blogger.md](./docs/marketing/blogger.md) |
| WordPress | [docs/marketing/wordpress.md](./docs/marketing/wordpress.md) |
| 네이버 블로그 | [docs/marketing/naver-blog.md](./docs/marketing/naver-blog.md) |
| Tistory | [docs/marketing/tistory.md](./docs/marketing/tistory.md) |
| Newsletter | [docs/marketing/newsletter.md](./docs/marketing/newsletter.md) |
| Email | [docs/marketing/email.md](./docs/marketing/email.md) |

Replace placeholders in marketing files: `{{app_url}}`, `{{signup_url}}`, `{{video_url}}`, `{{facilitator_name}}`, `{{org_name}}`.

---

## Run locally

```bash
cd seattle-startup-openclaw-week
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub button & env

Create `.env.local`:

```bash
NEXT_PUBLIC_GITHUB_REPO_URL=https://github.com/your-org/seattle-startup-openclaw-week
```

This powers the **bottom-right GitHub** link and the **Repository docs** deep links on the home page.

---

## Content map

- `src/lib/site.ts` — `SITE_NAME`, `SOURCE_VIDEO_URL`, `LANDING_NAV` (grouped sidebar)
- `src/lib/curriculum-days.ts` — `PROGRAM_OVERVIEW`, `POST_PROGRAM`, `CURRICULUM_DAYS`
- `src/lib/prompts.ts` — project context template + operational prompts
- `src/app/page.tsx` — interactive landing
- `src/components/landing/` — sidebar nav, GitHub FAB

---

## Scripts

- `npm run dev` — development server  
- `npm run build` — production build  
- `npm run start` — serve production build  
- `npm run lint` — ESLint  

---

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript.

---

## Legal / educational posture

Educational use for founders and teams. Not affiliated with YouTube, Anthropic, Obsidian, or any OpenClaw or third-party agent project. Verify tool licenses, API terms, and data handling before ingesting sensitive company material.
