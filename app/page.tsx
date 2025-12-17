 "use client";

import { useEffect } from "react";
import FundingProgress from "@/components/FundingProgress";
import { sponsorPdfHref, navItems } from "@/data/nav";
import { activities } from "@/data/activities";
import { background } from "@/data/background";
import { awardees } from "@/data/awardees";
import { budgetCategories, BUDGET_TOTAL } from "@/data/budget";
import { contact } from "@/data/contact";

const idr = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const Icon = ({ path }: { path: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={path} />
  </svg>
);

const icons = {
  info: "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-.25 5.5a1.25 1.25 0 1 1 1.25 1.25A1.25 1.25 0 0 1 11.75 7.5Zm2 9h-3a1 1 0 0 1 0-2h.75v-3H12a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1v4H14a1 1 0 0 1 0 2Z",
  target: "M12 4a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0-2a10 10 0 1 1-10 10A10 10 0 0 1 12 2Zm0 5a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0-2a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z",
  calendar: "M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a1 1 0 0 0-2 0v1H9V3A1 1 0 0 0 8 2Zm12 8H5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1Zm0-5a1 1 0 0 1 1 1v2H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h6v1a1 1 0 0 0 2 0V5Z",
  star: "M12 2.5 14.8 9l6.2.45-4.8 4.12 1.44 6-5.64-3.36L6.36 19.6 7.8 13.57 3 9.45 9.2 9Z",
  money: "M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v8h16V8Zm4 1a3 3 0 0 1 3.87-2.86 1 1 0 1 1-.53 1.93A1 1 0 0 0 10 10a1 1 0 0 0 1 1h1a3 3 0 0 1 0 6 3.09 3.09 0 0 1-.57-.05 1 1 0 1 1 .34-2A1 1 0 0 0 13 14h-1a3 3 0 0 1-3-3Zm-3 1h2v2H5Zm12 0h2v2h-2Z",
  phone: "M3 5.5A2.5 2.5 0 0 1 5.5 3h1A1.5 1.5 0 0 1 8 4.5v3a1.5 1.5 0 0 1-.5 1.12l-1 1a11 11 0 0 0 8.88 8.88l1-1A1.5 1.5 0 0 1 17.5 17h3A1.5 1.5 0 0 1 22 18.5v1A2.5 2.5 0 0 1 19.5 22 17.5 17.5 0 0 1 2 4.5Z",
};

export default function HomePage() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".fade-up"));
    const onScroll = () => {
      const trigger = window.innerHeight * 0.85;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < trigger) {
          el.style.animationDelay = `${Math.min(0.25, rect.top / 1200)}s`;
          el.classList.add("animated");
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="section-stack pt-28 md:pt-32">
      <section
        id="top"
        className="hero-shell mt-4 md:mt-6 fade-up"
        style={{
          backgroundImage:
            "linear-gradient(140deg, rgba(5,16,52,0.78), rgba(5,16,52,0.55)), url('/images/cover3-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content px-6 py-14 md:py-18 md:px-12 space-y-6">
          <div className="glow-pill text-sm">International Leadership and Cultural Festival — Batch 2</div>

          <div className="space-y-2">
            <h1
              className="text-[40px] md:text-6xl leading-tight font-extrabold text-white drop-shadow-lg"
              style={{ fontFamily: "'Bebas Neue', 'Plus Jakarta Sans', sans-serif", letterSpacing: "0.06em" }}
            >
              Proposal Kegiatan
              <br />
              PRABU WORLD&apos;S <span className="text-sky-300">X-PEDITION</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-slate-100/85 leading-relaxed">
              Synergizing Youth Leadership and Cultural Heritage for Global Diplomacy
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#activities" className="btn btn-primary text-sm sm:text-base min-w-[220px] text-center">
              Lihat Rangkaian Kegiatan
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="icon-chip text-xs md:text-sm">
                <Icon path={icons.info} />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-card fade-up">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <div>
                <div className="icon-chip">
                  <Icon path={icons.info} /> Tentang Program
                </div>
                <h2 className="title-slab text-3xl md:text-[42px] font-extrabold text-white mt-2">Latar Belakang</h2>
              </div>
            </div>
            <div className="space-y-3 text-slate-100/90 leading-relaxed">
              {background.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
          <div className="stat-card min-w-[260px] max-w-sm space-y-2">
            <div className="eyebrow">Tema</div>
            <div className="text-xl font-semibold text-white">PRABU WORLD&apos;S X-PEDITION</div>
            <div className="text-sm text-slate-100/80">International Leadership and Cultural Festival Batch 2</div>
            <div className="subtle-divider" />
            <div className="text-sm text-slate-100/75">
              Fokus pada diplomasi budaya, jejaring akademik, dan penguatan kepemimpinan muda Indonesia.
            </div>
          </div>
        </div>
      </section>

      <section id="goals" className="section-card fade-up space-y-5">
        <div className="flex items-center gap-3">
          <div>
            <div className="icon-chip">
              <Icon path={icons.target} /> Tujuan
            </div>
            <h2 className="title-slab text-3xl md:text-[42px] font-extrabold text-white mt-2">Apa yang ingin dicapai?</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {background.strategicPoints.map((point, idx) => (
            <div key={point.title} className="stat-card h-full space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0b153d] font-bold">
                  {idx + 1}
                </span>
                <div className="text-lg font-semibold text-white leading-snug">{point.title}</div>
              </div>
              <p className="text-sm text-slate-100/85 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="activities" className="section-card fade-up space-y-5">
        <div className="flex items-center gap-3">
          <div>
            <div className="icon-chip">
              <Icon path={icons.calendar} /> Rangkaian Kegiatan
            </div>
            <h2 className="title-slab text-3xl md:text-[42px] font-extrabold text-white mt-2">Agenda Harian</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {activities.map((day) => (
            <div key={day.dayLabel} className="stat-card h-full space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="eyebrow">{day.dayLabel}</div>
                  <div className="text-xl font-bold text-white">{day.title}</div>
                  <div className="text-sm text-slate-100/70">{day.date}</div>
                </div>
                <div className="rounded-full px-3 py-1 text-xs bg-white/15 border border-white/20 text-white text-right">
                  {day.location}
                </div>
              </div>
              <div className="text-sm text-slate-100/80 leading-relaxed">
                <span className="font-semibold text-white">Fokus: </span>
                {day.focus}
              </div>
              <div className="space-y-1">
                {day.keyActivities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-100/85">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="awardees" className="section-card fade-up space-y-5">
        <div className="flex items-center gap-3">
          <div>
            <div className="icon-chip">
              <Icon path={icons.star} /> Profile Awardee
            </div>
            <h2 className="title-slab text-3xl md:text-[42px] font-extrabold text-white mt-2">Para Delegasi</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {awardees.map((person) => (
            <div key={person.name} className="stat-card h-full flex flex-col gap-2">
              <div className="text-lg font-bold text-white">{person.name}</div>
              {person.highlights.length ? (
                <ul className="space-y-1 text-sm text-slate-100/85 leading-relaxed">
                  {person.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-slate-100/65">Profil detail menyusul.</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="budget" className="section-card fade-up space-y-5">
        <div className="flex items-center gap-3">
          <div>
            <div className="icon-chip">
              <Icon path={icons.money} /> Rancangan Anggaran
            </div>
            <h2 className="title-slab text-3xl md:text-[42px] font-extrabold text-white mt-2">Ringkasan Anggaran Biaya</h2>
          </div>
        </div>
        <div className="space-y-4">
          {budgetCategories.map((cat) => (
            <div key={cat.title} className="rounded-2xl border border-white/15 bg-white/6 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-white/10 text-white font-semibold">
                <span>{cat.title}</span>
                <span className="text-sky-100">{idr(cat.subtotal)}</span>
              </div>
              <div className="divide-y divide-white/10">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-3 px-4 py-3 text-sm text-slate-100/85">
                    <div className="col-span-6 md:col-span-6 font-medium text-white">{item.name}</div>
                    <div className="col-span-2 text-slate-100/70">x{item.qty}</div>
                    <div className="col-span-2 text-right text-slate-100/80">{idr(item.unitPrice)}</div>
                    <div className="col-span-2 text-right font-semibold text-white">{idr(item.total)}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-gradient-to-r from-sky-500/25 to-pink-400/20 px-4 py-3">
          <div className="text-sm uppercase tracking-[0.18em] text-white/80">Total Anggaran</div>
          <div className="text-2xl font-black text-white">{idr(BUDGET_TOTAL)}</div>
        </div>
      </section>

      <section id="funding" className="fade-up">
        <FundingProgress />
      </section>

      <section id="contact" className="section-card fade-up space-y-4">
        <div className="flex items-center gap-3">
          <div>
            <div className="icon-chip">
              <Icon path={icons.phone} /> Kontak & Alamat
            </div>
            <h2 className="title-slab text-3xl md:text-[42px] font-extrabold text-white mt-2">Hubungi Kami</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="stat-card space-y-2">
            <div className="text-sm text-slate-100/70 uppercase tracking-[0.12em]">PIC</div>
            <div className="text-xl font-semibold text-white">{contact.name}</div>
            <div className="space-y-1 text-sm text-slate-100/85">
              <div>📧 {contact.email}</div>
              <div>📱 {contact.wa}</div>
              <div>📸 {contact.instagram}</div>
            </div>
          </div>
          <div className="stat-card space-y-2">
            <div className="text-sm text-slate-100/70 uppercase tracking-[0.12em]">Alamat Asrama</div>
            <div className="text-sm text-slate-100/85 leading-relaxed">{contact.address}</div>
          </div>
        </div>
        <div className="text-xs text-slate-200/80">
          Sponsorship detail tetap tersedia di proposal PDF; klik tombol unduh di bawah untuk melihat paket lengkap.
        </div>
      </section>

      <section className="section-card fade-up space-y-4 text-center">
        <h2 className="title-slab text-3xl md:text-[42px] font-extrabold text-white">Unduh Proposal Lengkap</h2>
        <p className="text-slate-100/85 max-w-2xl mx-auto leading-relaxed">
          Detail penawaran sponsorship, jadwal lengkap, dan rincian lainnya tersedia di proposal PDF. Silakan unduh dan
          hubungi kami untuk kolaborasi.
        </p>
        <div className="flex justify-center">
          <a href={sponsorPdfHref} target="_blank" rel="noreferrer" className="btn btn-primary text-base min-w-[240px]">
            Unduh Proposal (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
