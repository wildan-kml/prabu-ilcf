import Image from "next/image";
import { ActivityDay } from "@/data/activities";

export default function Timeline({ days }: { days: ActivityDay[] }) {
  return (
    <div className="mt-8 space-y-4">
      {days.map((d) => (
        <div key={d.dayLabel} className="card relative overflow-hidden p-5 md:p-6">
          {/* Badges: biar gak nempel ke tepi card */}
          <div className="pointer-events-none absolute left-5 top-4 z-10">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white/90">
              {d.dayLabel}
            </span>
          </div>

          <div className="pointer-events-none absolute right-5 top-4 z-10">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/85">
              {d.location}
            </span>
          </div>

          {/* Ruang napas untuk badge */}
          <div className="pt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              {/* Thumbnail kiri */}
              <div className="shrink-0">
                <div className="relative h-28 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-28 sm:w-32">
                  {d.image ? (
                    <Image
                      src={d.image}
                      alt={d.imageAlt ?? d.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 128px"
                    />
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
              </div>

              {/* Konten kanan */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="min-w-0 truncate text-xl font-semibold">{d.title}</h3>
                  <div className="text-sm opacity-70 md:text-right">
                    <div>{d.date}</div>
                  </div>
                </div>

                <div className="mt-1 text-sm opacity-80">{d.focus}</div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm opacity-90">
                  {d.keyActivities.map((x) => (
                    <li key={x} className="leading-relaxed">
                      {x}
                    </li>
                  ))}
                </ul>

                {d.description ? (
                  <p className="mt-3 text-sm opacity-80">{d.description}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
