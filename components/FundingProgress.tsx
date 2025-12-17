import { FUNDING_TARGET, FUNDING_RAISED } from "@/data/funding";

const idr = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export default function FundingProgress() {
  const raised = FUNDING_RAISED;
  const target = FUNDING_TARGET;
  const pct = Math.min(100, Math.round((raised / target) * 100));
  const remaining = Math.max(0, target - raised);
  const segments = [
    { label: "Terkumpul", value: raised, tone: "from-sky-400 to-blue-500" },
    { label: "Sisa", value: remaining, tone: "from-pink-400 to-purple-500" },
  ];

  return (
    <section className="card p-6 md:p-8 border border-white/10 space-y-5">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div className="glow-pill">Fundraising Progress</div>
          <h2
            className="mt-3 text-3xl md:text-4xl font-extrabold text-white"
            style={{ fontFamily: "'Bebas Neue', 'Manrope', sans-serif", letterSpacing: "0.04em" }}
          >
            Progress Dana Terkumpul
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-100/75 leading-relaxed">
            Target <b className="text-white">{idr(target)}</b> • Terkumpul <b className="text-white">{idr(raised)}</b>{" "}
            • Sisa <b className="text-white">{idr(remaining)}</b>
          </p>
        </div>

        <div className="md:text-right">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-100/70">Tercapai</div>
          <div className="text-4xl md:text-5xl font-black text-sky-300 drop-shadow-lg">{pct}%</div>
          <div className="text-sm text-slate-100/70">Menuju target {idr(target)}</div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 items-center">
        <div className="space-y-2">
          <div className="progress-shell h-4">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="text-xs text-slate-100/70">
            {idr(raised)} dari {idr(target)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {segments.map((seg) => {
            const w = Math.max(8, Math.min(100, Math.round((seg.value / target) * 100)));
            return (
              <div key={seg.label} className="stat-card">
                <div className="flex items-center justify-between text-xs text-slate-100/70">
                  <span>{seg.label}</span>
                  <span className="text-white font-semibold">{w}%</span>
                </div>
                <div className="mt-2 h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full w-[${w}%] rounded-full bg-gradient-to-r ${seg.tone}`}
                    style={{ width: `${w}%` }}
                  />
                </div>
                <div className="mt-1 text-sm text-white font-semibold">{idr(seg.value)}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3 text-sm text-slate-100/85">
        <div className="stat-card">
          <div className="eyebrow text-[0.72rem]">Terkumpul</div>
          <div className="mt-1 text-lg font-semibold text-white">{idr(raised)}</div>
        </div>
        <div className="stat-card">
          <div className="eyebrow text-[0.72rem]">Target</div>
          <div className="mt-1 text-lg font-semibold text-white">{idr(target)}</div>
        </div>
        <div className="stat-card">
          <div className="eyebrow text-[0.72rem]">Sisa</div>
          <div className="mt-1 text-lg font-semibold text-white">{idr(remaining)}</div>
        </div>
      </div>
    </section>
  );
}

