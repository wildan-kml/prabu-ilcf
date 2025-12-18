import { FUNDING_TARGET, FUNDING_RAISED } from "@/data/funding";

const idr = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export default function FundingProgress() {
  const raised = FUNDING_RAISED;
  const target = FUNDING_TARGET;
  const pct = Math.min(100, Math.round((raised / target) * 100));
  const remaining = Math.max(0, target - raised);
  const denom = Math.max(target, raised, 1);
  const segments = [
    { label: "Terkumpul", value: raised, tone: "from-sky-400 to-blue-500" },
    { label: "Sisa", value: remaining, tone: "from-pink-400 to-purple-500" },
  ];

  return (
    <section className="card border border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2">
            <div className="glow-pill">Fundraising Progress</div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white"
              style={{ fontFamily: "'Bebas Neue', 'Manrope', sans-serif", letterSpacing: "0.04em" }}
            >
              Progress Dana Terkumpul
            </h2>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-100/75 uppercase tracking-[0.14em]">
            <span>Progress Fundraising</span>
            <span className="text-white font-semibold">{pct}%</span>
          </div>
          <div className="relative h-5 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-inner shadow-blue-900/30">
            <div className="flex h-full w-full">
              {segments.map((seg) => {
                const w = Math.max(6, Math.round((seg.value / denom) * 100));
                return (
                  <div
                    key={seg.label}
                    className={`relative h-full bg-gradient-to-r ${seg.tone}`}
                    style={{ width: `${w}%` }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center px-2 text-[11px] font-semibold text-slate-900/85 drop-shadow-sm">
                      {seg.label} {w}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-xs text-slate-100/70">
            {idr(raised)} dari {idr(target)}
          </div>
        </div>
      </div>
    </section>
  );
}

