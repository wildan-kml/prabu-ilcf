import BudgetTable from "@/components/BudgetTable";
import { budgetCategories } from "@/data/budget";

export default function BudgetPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mt-6 text-3xl font-semibold">Rancangan Anggaran Biaya</h1>
      <p className="mt-3 max-w-3xl opacity-80">
        Ringkasan anggaran disajikan per kategori untuk transparansi kebutuhan utama program. (Detail penawaran sponsorship tidak ditampilkan di website.)
      </p>

      <BudgetTable categories={budgetCategories} />
    </main>
  );
}
