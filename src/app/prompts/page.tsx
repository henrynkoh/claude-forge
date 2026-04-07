import Link from "next/link";

import { CopyButton } from "@/components/copy-button";
import { CLAUDE_MD_TEMPLATE, PROMPTS } from "@/lib/prompts";

export const metadata = {
  title: "Prompts & memory templates",
};

export default function PromptsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
        <Link href="/" className="transition hover:text-white">
          Home
        </Link>
        <span>·</span>
        <span className="text-zinc-600">Prompts</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">Vault + agent prompt library</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
        Use these with Claude, your local LLM, or agent “skills” — aligned to the{" "}
        <strong className="text-zinc-200">Obsidian + OpenClaw-style</strong> stack in this curriculum. Edit paths, tone,
        and permissions for your team.
      </p>

      <section className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-white">CLAUDE.md / project context template</h2>
          <CopyButton text={CLAUDE_MD_TEMPLATE} label="Copy template" />
        </div>
        <pre className="mt-4 max-h-[28rem] overflow-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-relaxed text-zinc-300">
          {CLAUDE_MD_TEMPLATE}
        </pre>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-white">Operational prompts</h2>
        <ul className="mt-6 space-y-8">
          {PROMPTS.map((p) => (
            <li key={p.id} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{p.id}</p>
                  <h3 className="mt-1 text-base font-semibold text-white">{p.title}</h3>
                </div>
                <CopyButton text={p.body} label="Copy prompt" />
              </div>
              <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-xl border border-white/10 bg-black/30 p-4 text-xs leading-relaxed text-zinc-300">
                {p.body}
              </pre>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
