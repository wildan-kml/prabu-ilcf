import Link from "next/link";
import { navItems, sponsorPdfHref } from "@/data/nav";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b153d]/95 backdrop-blur-xl shadow-lg shadow-blue-900/30">
      <div className="w-full px-4 md:px-6 py-4 flex items-center gap-6 overflow-x-auto no-scrollbar">
        <Link
          href="/"
          className="tracking-[0.05em] text-lg font-extrabold text-white whitespace-nowrap"
          style={{ fontFamily: "'Bebas Neue', 'Manrope', sans-serif" }}
        >
          PRABU WORLD&apos;S <span className="text-sky-300">X-PEDITION</span>
        </Link>

        <nav className="flex items-center gap-3 md:gap-4 text-sm text-slate-200">
          {navItems.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
