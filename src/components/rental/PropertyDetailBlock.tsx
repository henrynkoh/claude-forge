import type { RentalProperty } from "@/data/rentalProperties";

type Props = {
  property: RentalProperty;
  /** When true, used inside the dashboard day panel (top border + scroll cap on comms). */
  embedInPanel?: boolean;
};

export function PropertyDetailBlock({
  property,
  embedInPanel = true,
}: Props) {
  const fmt = (d: string) =>
    new Date(d + "T12:00:00").toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  const fmtComm = (at: string) =>
    new Date(at).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

  const sortedComm = [...property.communications].sort(
    (a, b) => new Date(b.at).getTime() - new Date(a.at).getTime(),
  );

  const telHref = `tel:${property.phone.replace(/[^\d+]/g, "")}`;

  return (
    <div
      className={
        embedInPanel
          ? "mt-4 space-y-4 border-t border-white/10 pt-4"
          : "space-y-4"
      }
    >
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Property
        </p>
        <p className="mt-1 font-bold text-white">{property.propertyName}</p>
        <p className="mt-1 text-sm text-slate-300">{property.propertyAddress}</p>
        <p className="mt-2 text-xs text-slate-400">
          AFH licensed beds:{" "}
          <span className="font-semibold text-sky-200">
            {property.afhLicensedBeds}
          </span>
        </p>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Tenant / operator
        </p>
        <p className="mt-1 text-sm text-white">{property.tenantName}</p>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
          <li>
            <span className="text-slate-500">Email:</span>{" "}
            <a
              href={`mailto:${property.email}`}
              className="text-sky-300 underline decoration-sky-500/40 hover:text-sky-200"
            >
              {property.email}
            </a>
          </li>
          <li>
            <span className="text-slate-500">Phone:</span>{" "}
            <a
              href={telHref}
              className="text-sky-300 underline decoration-sky-500/40 hover:text-sky-200"
            >
              {property.phone}
            </a>
          </li>
          <li>
            <span className="text-slate-500">Website:</span>{" "}
            <a
              href={property.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 underline decoration-indigo-500/40 hover:text-indigo-200"
            >
              {property.website.replace(/^https?:\/\//, "")}
            </a>
          </li>
        </ul>
      </div>
      <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Rent
        </p>
        <dl className="mt-2 grid gap-2 text-sm">
          <div className="flex justify-between gap-2">
            <dt className="text-slate-500">Start</dt>
            <dd className="text-right text-slate-200">
              {fmt(property.rentStart)}
            </dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="text-slate-500">Expiration</dt>
            <dd className="text-right text-slate-200">
              {fmt(property.rentExpiration)}
            </dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="text-slate-500">Amount</dt>
            <dd className="text-right font-semibold text-amber-200">
              {property.rentCurrency}{" "}
              {property.rentAmount.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
              / period
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Schedule</dt>
            <dd className="mt-1 text-slate-200">{property.rentSchedule}</dd>
          </div>
        </dl>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Communication history
        </p>
        <ul
          className={`mt-2 space-y-2 pr-1 text-xs ${
            embedInPanel ? "max-h-56 overflow-y-auto" : ""
          }`}
        >
          {sortedComm.map((c) => (
            <li
              key={c.id}
              className="rounded-lg border border-white/5 bg-slate-900/40 p-2"
            >
              <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-bold uppercase text-slate-300">
                  {c.channel}
                </span>
                <span>{fmtComm(c.at)}</span>
              </div>
              {c.subject && (
                <p className="mt-1 font-semibold text-slate-200">{c.subject}</p>
              )}
              <p className="mt-0.5 text-slate-400">{c.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
