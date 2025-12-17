import AwardeeCard from "@/components/AwardeeCard";
import { awardees } from "@/data/awardees";

export default function AwardeesPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mt-6 text-3xl font-semibold">Profile Awardee</h1>
      <p className="mt-3 max-w-3xl opacity-80">
        Awardee adalah mahasiswa terpilih (top talent) yang akan membawa misi belajar, diplomasi budaya, dan pertukaran gagasan selama program.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {awardees.map((a) => (
          <AwardeeCard key={a.name} a={a} />
        ))}
      </div>
    </main>
  );
}
