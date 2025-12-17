import { ActivityDay } from "@/data/activities";

export default function Timeline({ days }: { days: ActivityDay[] }) {
  return (
    <div className="mt-8 space-y-4">
      {days.map((d) => (
        <div key={d.dayLabel} className="card p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
              <div className="text-xs font-semibold opacity-70">{d.dayLabel}</div>
              <h3 className="text-xl font-semibold">{d.title}</h3>
              <div className="mt-1 text-sm opacity-80">{d.focus}</div>
            </div>
            <div className="text-sm opacity-70 md:text-right">
              <div>{d.date}</div>
              <div>{d.location}</div>
            </div>
          </div>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm opacity-90">
            {d.keyActivities.map((x, idx) => (
              <li key={idx}>{x}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
