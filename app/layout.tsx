import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PRABU WORLD’S X-PEDITION (ILCF Batch 2)",
  description: "Synergizing Youth Leadership and Cultural Heritage for Global Diplomacy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="text-slate-100 antialiased">
        <div className="min-h-screen">
          <Navbar />
          <main className="page-shell">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
