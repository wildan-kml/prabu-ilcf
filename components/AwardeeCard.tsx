import { Awardee } from "@/data/awardees";

export default function AwardeeCard({ a }: { a: Awardee }) {
  return (
    <div className="card p-6 md:p-8">
      <div className="text-lg font-semibold">{a.name}</div>
      {a.highlights.length > 0 ? (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm opacity-85">
          {a.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-3 text-sm opacity-60">Highlight menyusul (akan dilengkapi dari data resmi).</div>
      )}
    </div>
  );
}
