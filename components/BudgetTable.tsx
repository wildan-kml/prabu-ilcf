import { BudgetCategory, BUDGET_TOTAL } from "@/data/budget";

const idr = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export default function BudgetTable({ categories }: { categories: BudgetCategory[] }) {
  return (
    <div className="mt-8 space-y-6">
      {categories.map((c) => (
        <div key={c.title} className="card p-6 md:p-8">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <div className="text-sm opacity-70">Subtotal: <b>{idr(c.subtotal)}</b></div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b text-left opacity-70">
                <tr>
                  <th className="py-2 pr-3">Item</th>
                  <th className="py-2 pr-3">Qty</th>
                  <th className="py-2 pr-3">Harga</th>
                  <th className="py-2 pr-0 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {c.items.map((it) => (
                  <tr key={it.name} className="border-b last:border-b-0">
                    <td className="py-2 pr-3">{it.name}</td>
                    <td className="py-2 pr-3">{it.qty}</td>
                    <td className="py-2 pr-3">{idr(it.unitPrice)}</td>
                    <td className="py-2 pr-0 text-right">{idr(it.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="card p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Total Keseluruhan</div>
          <div className="text-lg font-semibold">{idr(BUDGET_TOTAL)}</div>
        </div>
      </div>
    </div>
  );
}
