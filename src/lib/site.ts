/** Source: “Claude Code 실전 강의 — AI 에이전트 11개가 알아서 일한다” (11-agent practical lecture). */
export const SOURCE_VIDEO_URL = "https://www.youtube.com/watch?v=rSvpKOyaefU" as const;

export const SITE_NAME = "Seattle Claude Forge Startup Week" as const;

/** Set `NEXT_PUBLIC_GITHUB_REPO_URL` in `.env.local` (e.g. `https://github.com/you/seattle-startup-openclaw-week`). */
export function getGithubRepoUrl(): string {
  const u = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;
  if (typeof u === "string" && u.length > 0) return u;
  return "https://github.com";
}

/** Link to a file on the default branch (`main`) in the configured repo; `null` if env not set. */
export function getGithubBlobUrl(repoRelativePath: string): string | null {
  const base = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;
  if (typeof base !== "string" || base.length === 0) return null;
  const clean = base.replace(/\/$/, "");
  const path = repoRelativePath.replace(/^\/+/, "");
  return `${clean}/blob/main/${path}`;
}

export type LandingNavItem = {
  id: string;
  label: string;
  /** Tailwind bg-* class for the nav dot */
  accent: string;
  /** Group label for sidebar sections (optional) */
  group?: string;
};

export const LANDING_NAV: readonly LandingNavItem[] = [
  { id: "hero", label: "Intro", accent: "bg-teal-400", group: "Overview" },
  { id: "why", label: "Why", accent: "bg-cyan-400", group: "Overview" },
  { id: "program", label: "Program", accent: "bg-fuchsia-400", group: "Overview" },
  { id: "cohort", label: "Cohort", accent: "bg-emerald-400", group: "Overview" },
  { id: "forge-loop", label: "Forge loop", accent: "bg-sky-400", group: "Curriculum" },
  { id: "tools", label: "Tools", accent: "bg-violet-400", group: "Curriculum" },
  { id: "flow", label: "Pipeline", accent: "bg-amber-400", group: "Curriculum" },
  { id: "features", label: "Features", accent: "bg-rose-400", group: "Curriculum" },
  { id: "days", label: "7 days", accent: "bg-orange-400", group: "Curriculum" },
  { id: "prompts", label: "Prompts", accent: "bg-lime-400", group: "Resources" },
  { id: "facilitate", label: "Facilitate", accent: "bg-pink-400", group: "Resources" },
  { id: "success", label: "Success", accent: "bg-yellow-400", group: "Resources" },
  { id: "docs", label: "Docs", accent: "bg-indigo-400", group: "Resources" },
  { id: "cta", label: "Start", accent: "bg-white", group: "Resources" },
] as const;
