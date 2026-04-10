import type { Metadata } from "next";
import Link from "next/link";

import { PropertyDetailBlock } from "@/components/rental/PropertyDetailBlock";
import { rentalProperties } from "@/data/rentalProperties";

export const metadata: Metadata = {
  title: "Property registry",
  description:
    "AFH rental portfolio — addresses, licensed beds, tenant contacts, rent terms, and communication history.",
};

export default function RentalsRegistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <nav className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-white">
            ← Site home
          </Link>
          <span className="text-slate-600" aria-hidden>
            ·
          </span>
          <Link href="/dashboard" className="transition hover:text-white">
            Rental HQ
          </Link>
        </nav>
        <header className="mb-10">
          <h1 className="text-3xl font-black tracking-tight text-white">
            Property registry
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
            Complete demo records for each AFH unit: address, licensed bed
            count, operator contact, rent schedule, and communication log.
            Replace this dataset with your API in production.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 border-b border-white/10 pb-6">
            <p className="w-full text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Jump to property
            </p>
            {rentalProperties.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-white"
              >
                {p.propertyName}
              </a>
            ))}
          </div>
        </header>
        <div className="space-y-10">
          {rentalProperties.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="scroll-mt-28 rounded-2xl border border-white/10 bg-indigo-950/30 p-6 shadow-lg sm:p-8"
            >
              <PropertyDetailBlock property={p} embedInPanel={false} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
