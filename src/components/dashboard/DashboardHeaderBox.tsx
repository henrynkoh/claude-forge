"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { RentalHQDashboard } from "./RentalHQDashboard";

/**
 * Compact clickable “box” next to the site title — opens full-viewport calendar dashboard.
 */
export function DashboardHeaderBox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 rounded-xl border border-teal-400/35 bg-gradient-to-br from-teal-500/15 to-emerald-600/10 px-3 py-1.5 text-xs font-bold tracking-tight text-teal-100 shadow-[0_0_0_1px_rgba(45,212,191,0.12)] transition hover:border-teal-300/50 hover:from-teal-500/25 hover:to-emerald-600/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 sm:text-sm"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span
          className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500/20 text-sm"
          aria-hidden
        >
          📅
        </span>
        <span className="hidden sm:inline">Dashboard</span>
        <span className="sm:hidden">HQ</span>
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Operations calendar dashboard"
          >
            <button
              type="button"
              className="absolute inset-0 z-0 bg-zinc-950/80 backdrop-blur-md"
              aria-label="Close dashboard"
              onClick={() => setOpen(false)}
            />
            <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
              <RentalHQDashboard embedded onClose={() => setOpen(false)} />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
