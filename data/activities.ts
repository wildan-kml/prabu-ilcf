export type ActivityDay = {
  dayLabel: string;
  title: string;
  date: string;
  location: string;
  focus: string;
  keyActivities: string[];
  description?: string;
};

export const activities: ActivityDay[] = [
  {
    dayLabel: "Hari 1",
    title: "The Journey of Resilience",
    date: "Minggu, 19 April 2026",
    location: "Bandung → Jakarta → Singapura → Tokyo",
    focus: "Adaptasi, kekompakan tim, dan studi banding singkat.",
    keyActivities: [
      "Eksplorasi singkat tata kota dan sistem transportasi publik Singapura (Changi Airport & Merlion Park).",
      "Briefing internal tim & penyesuaian ritme perjalanan sebelum menuju Jepang.",
    ],
  },
  {
    dayLabel: "Hari 2",
    title: "Diplomatic & Leadership Insight",
    date: "Senin, 20 April 2026",
    location: "Kedutaan Besar Republik Indonesia (KBRI) Tokyo, Jepang",
    focus: "Wawasan kebijakan luar negeri dan kepemimpinan.",
    keyActivities: [
      "Audiensi dengan Duta Besar RI atau Atase Pendidikan & Kebudayaan.",
      "Diskusi: “Tantangan Diplomasi Indonesia di Asia Timur”.",
      "Networking dan diskusi jalur karir global dengan staf diplomatik.",
    ],
  },
  {
    dayLabel: "Hari 3",
    title: "Art & Cultural Resonance",
    date: "Selasa, 21 April 2026",
    location: "Tokyo University of the Arts (Geidai) & Ueno Park",
    focus: "Diplomasi seni dan budaya.",
    keyActivities: [
      "Penampilan paduan suara lagu daerah oleh peserta RK di lingkungan kampus seni tertua di Jepang.",
      "Kunjungan museum di Ueno untuk belajar pelestarian sejarah.",
    ],
  },
  {
    dayLabel: "Hari 4",
    title: "Innovation & Culinary Diplomacy",
    date: "Rabu, 22 April 2026",
    location: "Tokyo Tech / University of Tokyo (Todai)",
    focus: "Sains, teknologi, pertukaran budaya kuliner, dan showcase proyek sosial.",
    keyActivities: [
      "Innovation Exhibition: pameran mini karya/proyek sosial di hadapan PPI (Tokyo Tech).",
      "Gastronomy Exchange: kelas memasak & jamuan makan bersama mahasiswa lokal/internasional; memperkenalkan cita rasa Nusantara.",
    ],
  },
];
