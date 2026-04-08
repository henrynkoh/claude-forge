import { getGithubRepoUrl } from "@/lib/site";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.492.5.092.682-.212.682-.412 0-.204-.008-.832-.012-1.504-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.094.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .201.18.436.688.36A10.015 10.015 0 0022 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  );
}

export function GitHubFab() {
  const href = getGithubRepoUrl();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={href}
      className="landing-github-fab group fixed bottom-5 right-5 z-[70] flex max-w-[calc(100vw-2.5rem)] items-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-teal-950/90 px-4 py-3.5 text-sm font-semibold text-white shadow-[0_16px_50px_-12px_rgba(45,212,191,0.55),0_8px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-teal-400/55 hover:shadow-[0_24px_70px_-12px_rgba(45,212,191,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      aria-label="Open repository on GitHub"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 transition group-hover:bg-teal-500/25 group-hover:ring-teal-400/40">
        <GitHubIcon className="h-5 w-5 text-teal-200" />
      </span>
      <span className="hidden min-w-0 flex-col items-start sm:flex">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300/90">Source</span>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
          View on GitHub
          <span
            className="text-base leading-none text-teal-300 transition group-hover:-translate-y-px group-hover:translate-x-px"
            aria-hidden
          >
            ↗
          </span>
        </span>
      </span>
      <span className="sm:hidden">GitHub</span>
    </a>
  );
}
