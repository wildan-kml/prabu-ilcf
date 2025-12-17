import { background } from "@/data/background";

export default function BackgroundPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mt-6 text-3xl font-semibold">{background.title}</h1>

      <div className="mt-5 space-y-4 max-w-3xl opacity-85">
        {background.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-semibold">{background.strategicTitle}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {background.strategicPoints.map((x) => (
          <div key={x.title} className="rounded-2xl border p-6">
            <div className="font-semibold">{x.title}</div>
            <div className="mt-2 text-sm opacity-80">{x.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
