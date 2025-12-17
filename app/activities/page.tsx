import Timeline from "@/components/Timeline";
import { activities } from "@/data/activities";

export default function ActivitiesPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mt-6 text-3xl font-semibold">Rangkaian Kegiatan</h1>
      <p className="mt-3 max-w-3xl opacity-80">
        Berikut rangkaian kegiatan utama PRABU WORLD’S X-PEDITION (ILCF Batch 2), disusun per hari untuk memudahkan pemetaan agenda.
      </p>

      <Timeline days={activities} />
    </main>
  );
}
