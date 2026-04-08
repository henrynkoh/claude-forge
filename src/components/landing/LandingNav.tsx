"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { LANDING_NAV, type LandingNavItem } from "@/lib/site";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NavButtons({
  onPick,
  active,
}: {
  onPick: (id: string) => void;
  active: string;
}) {
  const grouped = useMemo(() => {
    const order = ["Overview", "Curriculum", "Resources"];
    const map = new Map<string, LandingNavItem[]>();
    for (const item of LANDING_NAV) {
      const g = item.group ?? "Sections";
      const list = map.get(g) ?? [];
      list.push(item);
      map.set(g, list);
    }
    return order.filter((name) => map.has(name)).map((name) => [name, map.get(name)!] as const);
  }, []);

  return (
    <div className="flex flex-col gap-5 px-2 pb-4 pt-1">
      {grouped.map(([groupName, items]) => (
        <div key={groupName}>
          <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">{groupName}</p>
          <div className="flex flex-col gap-1">
            {items.map((item) => {
              const on = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onPick(item.id)}
                  className={`group relative flex w-full items-center gap-2.5 overflow-hidden rounded-xl px-2.5 py-2.5 text-left text-sm transition-all duration-200 ${
                    on
                      ? "bg-gradient-to-r from-teal-500/25 via-emerald-500/15 to-violet-500/20 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
                      : "text-zinc-400 hover:bg-white/[0.07] hover:text-zinc-100"
                  }`}
                >
                  {on ? (
                    <span
                      className="absolute inset-y-1 left-0 w-1 rounded-full bg-gradient-to-b from-teal-400 to-emerald-400 shadow-[0_0_12px_rgba(45,212,191,0.6)]"
                      aria-hidden
                    />
                  ) : null}
                  <span
                    className={`relative ml-0.5 h-2 w-2 shrink-0 rounded-full shadow-sm transition ${
                      on ? `${item.accent} scale-110 ring-2 ring-white/25` : `${item.accent} opacity-50 group-hover:opacity-100`
                    }`}
                    aria-hidden
                  />
                  <span className="relative min-w-0 flex-1 leading-snug">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return p;
}

export function LandingNavDesktop() {
  const [active, setActive] = useState<string>(LANDING_NAV[0]?.id ?? "hero");
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const nodes = LANDING_NAV.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target?.id) setActive(top.target.id);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.08, 0.2, 0.35, 0.5] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const onPick = useCallback((id: string) => {
    setActive(id);
    scrollToId(id);
  }, []);

  return (
    <nav className="flex min-h-0 flex-1 flex-col" aria-label="Page sections">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-violet-400 transition-[width] duration-150 ease-out"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            aria-hidden
          />
        </div>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-300/90">On this page</p>
        <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">
          Scroll this list to reach all {LANDING_NAV.length} sections — active item tracks your reading.
        </p>
      </div>
      <div className="landing-nav-scroll min-h-0 flex-1 overflow-y-auto overscroll-y-contain pr-1">
        <NavButtons onPick={onPick} active={active} />
      </div>
    </nav>
  );
}

export function LandingNavMobile() {
  const scroll = useCallback((id: string) => scrollToId(id), []);

  return (
    <div className="border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl lg:hidden">
      <div className="flex max-w-full gap-1.5 overflow-x-auto px-3 py-2.5 [scrollbar-color:rgba(45,212,191,0.4)_transparent] [scrollbar-width:thin]">
        {LANDING_NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scroll(item.id)}
            className="shrink-0 rounded-full border border-white/10 bg-gradient-to-r from-teal-500/15 via-zinc-900/80 to-violet-500/15 px-3.5 py-2 text-xs font-semibold text-zinc-200 shadow-sm transition hover:border-teal-400/40 hover:text-white active:scale-[0.98]"
          >
            <span className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${item.accent}`} aria-hidden />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
