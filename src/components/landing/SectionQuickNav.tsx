"use client";

import { useCallback } from "react";

import { LANDING_NAV } from "@/lib/site";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SectionQuickNav() {
  const onPick = useCallback((id: string) => {
    scrollToId(id);
  }, []);

  return (
    <div className="border-b border-white/10 bg-gradient-to-r from-zinc-950/98 via-zinc-900/95 to-zinc-950/98 py-4 backdrop-blur-xl lg:sticky lg:top-14 lg:z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Jump to section
          </p>
          <span className="hidden text-[10px] text-zinc-600 sm:inline">Scroll horizontally · tap any chip</span>
        </div>
        <div className="landing-quick-nav-scroll flex max-w-full gap-2 overflow-x-auto pb-1 pt-0.5 [scrollbar-color:rgba(45,212,191,0.35)_transparent] [scrollbar-width:thin]">
          {LANDING_NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onPick(item.id)}
              className="group flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-left text-xs font-semibold text-zinc-200 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-400/40 hover:bg-teal-500/10 hover:text-white hover:shadow-md hover:shadow-teal-500/10 active:scale-[0.98]"
            >
              <span
                className={`h-2 w-2 shrink-0 rounded-full ring-2 ring-white/10 ${item.accent} group-hover:ring-teal-400/40`}
                aria-hidden
              />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
