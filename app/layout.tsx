import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poliglot — Bahasa Inggris dalam 16 Pelajaran",
  description:
    "Belajar bahasa Inggris dari nol dalam 16 pelajaran. Metode cepat untuk orang Indonesia — tata bahasa, kosakata, latihan, dan frasa praktis.",
  keywords: [
    "belajar bahasa inggris",
    "kursus inggris",
    "16 pelajaran",
    "poliglot",
    "tata bahasa inggris",
    "bahasa inggris untuk pemula",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
