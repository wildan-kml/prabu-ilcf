"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems, sponsorPdfHref } from "@/data/nav";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  const headerStyle = scrolled
    ? "bg-[#0a1438]/95 shadow-xl shadow-blue-900/35 border-white/15"
    : "bg-[#0a1438]/80 shadow-lg shadow-blue-900/25 border-white/10";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl transition-all duration-200 border-b ${headerStyle}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/20 bg-white/5">
            <Image
              src="/images/logo-rk-2-prabu.png"
              alt="PRABU RK Logo"
              fill
              priority
              sizes="48px"
              className="object-contain"
            />
          </div>
          <Link
            href="/"
            onClick={closeMenu}
            className="tracking-[0.08em] text-xl md:text-2xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Bebas Neue', 'Manrope', sans-serif" }}
          >
            PRABU WORLD&apos;S <span className="text-sky-300">X-PEDITION</span>
          </Link>
        </div>

        <nav className="flex flex-1 items-center justify-end gap-4 md:gap-5 px-2 text-sm md:text-base text-slate-100 overflow-x-auto">
          {navItems.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-full px-4 py-2.5 font-semibold text-slate-100/90 transition-all hover:bg-white/15 hover:text-white hover:-translate-y-[1px]"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={sponsorPdfHref}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex rounded-full border border-sky-200/60 bg-gradient-to-r from-sky-400/85 to-pink-400/80 px-4 py-2 text-sm font-semibold text-[#041133] shadow-lg shadow-blue-900/25 transition hover:-translate-y-[2px] hover:shadow-xl hover:shadow-blue-900/30"
          >
            Unduh Proposal
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Buka navigasi"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition hover:border-white/35 hover:bg-white/15"
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-[2px] rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-opacity duration-150 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="absolute inset-x-3 top-[calc(100%+10px)] z-40 overflow-hidden rounded-2xl border border-white/15 bg-[#0b1640]/95 shadow-2xl shadow-blue-900/40 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col divide-y divide-white/10">
              {navItems.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={closeMenu}
                  className="px-5 py-3 text-base font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  {i.label}
                </Link>
              ))}
              <a
                href={sponsorPdfHref}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 text-base font-semibold text-sky-100 transition-colors hover:bg-white/10"
                onClick={closeMenu}
              >
                Unduh Proposal (PDF)
              </a>
            </nav>
          </div>
          <button
            aria-label="Tutup menu"
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[1px] lg:hidden"
            onClick={closeMenu}
          />
        </>
      )}
    </header>
  );
}
