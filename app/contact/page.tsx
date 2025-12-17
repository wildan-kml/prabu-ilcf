import { contact } from "@/data/contact";

const waLink = (wa: string) => {
  // ubah 08xxxx jadi 628xxxx untuk wa.me
  const cleaned = wa.replace(/\D/g, "");
  const intl = cleaned.startsWith("0") ? "62" + cleaned.slice(1) : cleaned;
  return `https://wa.me/${intl}`;
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mt-6 text-3xl font-semibold">Kontak</h1>
      <p className="mt-3 max-w-3xl opacity-80">
        Untuk koordinasi, kolaborasi, atau informasi lebih lanjut terkait PRABU WORLD’S X-PEDITION (ILCF Batch 2),
        silakan hubungi kontak berikut.
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <div className="text-sm opacity-70">PIC</div>
          <div className="mt-1 text-xl font-semibold">{contact.name}</div>

          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="opacity-70">WhatsApp:</span>{" "}
              <a className="underline" href={waLink(contact.wa)} target="_blank" rel="noreferrer">
                {contact.wa}
              </a>
            </div>
            <div>
              <span className="opacity-70">Email:</span>{" "}
              <a className="underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
            <div>
              <span className="opacity-70">Instagram:</span>{" "}
              <a className="underline" href={contact.instagramUrl} target="_blank" rel="noreferrer">
                {contact.instagram}
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(contact.wa)}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-black px-5 py-3 text-sm text-white text-center"
            >
              Chat WhatsApp
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-xl border px-5 py-3 text-sm text-center"
            >
              Kirim Email
            </a>
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <div className="text-sm opacity-70">Catatan</div>
          <div className="mt-2 text-sm opacity-80 leading-relaxed">
            Mohon cantumkan subjek pesan yang jelas (misalnya: <b>Sponsorship ILCF Batch 2</b>) dan tuliskan
            nama perusahaan/instansi (jika ada), kontak PIC, serta kebutuhan informasi yang ingin dibahas.
          </div>
        </div>
      </section>
    </main>
  );
}
