export type BudgetItem = {
  name: string;
  qty: number;
  unitPrice: number;
  total: number;
};

export type BudgetCategory = {
  title: string;
  items: BudgetItem[];
  subtotal: number;
};

export const budgetCategories: BudgetCategory[] = [
  {
    title: "Transportasi",
    items: [
      { name: "Tiket Pesawat Pulang Pergi", qty: 20, unitPrice: 7_000_000, total: 140_000_000 },
      { name: "Tiket Travel Bandung - Jakarta", qty: 20, unitPrice: 195_000, total: 7_800_000 },
      { name: "Transportasi Lokal Singapura", qty: 20, unitPrice: 150_000, total: 3_000_000 },
      { name: "Transportasi Harian Tokyo", qty: 20, unitPrice: 1_500_000, total: 30_000_000 },
      { name: "Bagasi Tambahan (Alat Musik/Logistik)", qty: 1, unitPrice: 1_000_000, total: 1_000_000 },
    ],
    subtotal: 181_800_000,
  },
  {
    title: "Akomodasi",
    items: [
      { name: "AirBnB", qty: 2, unitPrice: 20_000_000, total: 40_000_000 },
      { name: "Biaya Objek Wisata", qty: 1, unitPrice: 500_000, total: 500_000 },
    ],
    subtotal: 40_500_000,
  },
  {
    title: "Konsumsi",
    items: [
      { name: "Konsumsi Pra-Agenda (Bandung)", qty: 20, unitPrice: 35_000, total: 700_000 },
      { name: "Konsumsi Transit Singapura", qty: 20, unitPrice: 150_000, total: 6_000_000 },
      { name: "Konsumsi Harian Tokyo", qty: 240, unitPrice: 150_000, total: 36_000_000 },
      { name: "Logistik Gastrodiplomacy", qty: 4, unitPrice: 500_000, total: 2_000_000 },
      { name: "Air Mineral dan Snack", qty: 100, unitPrice: 50_000, total: 5_000_000 },
    ],
    subtotal: 49_700_000,
  },
  {
    title: "Visa & Asuransi",
    items: [{ name: "Visa Jepang dan Asuransi Perjalanan", qty: 20, unitPrice: 950_000, total: 19_000_000 }],
    subtotal: 19_000_000,
  },
  {
    title: "Pengeluaran Acara",
    items: [
      { name: "Seragam/Atribut Pawai Batik", qty: 20, unitPrice: 150_000, total: 3_000_000 },
      { name: "Cinderamata KBRI dan Tokyo University", qty: 2, unitPrice: 300_000, total: 600_000 },
      { name: "Donasi dan Kenangan Masjid Tokyo", qty: 1, unitPrice: 500_000, total: 500_000 },
      { name: "Sewa Alat Cultural (Angklung)", qty: 4, unitPrice: 2_000_000, total: 8_000_000 },
      { name: "Dana Amal (Charity Kit)", qty: 1, unitPrice: 500_000, total: 500_000 },
      { name: "Logistik Kegiatan", qty: 1, unitPrice: 1_000_000, total: 1_000_000 },
    ],
    subtotal: 12_600_000,
  },
];

export const BUDGET_TOTAL = 303_600_000;
