import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinguaID — Tata bahasa Inggris untuk orang Indonesia",
  description:
    "Susun kalimat Inggris dari kata-kata, dipandu chip waktu dan tabel teori 9 bentuk. Aplikasi belajar tata bahasa untuk pemula Indonesia.",
  keywords: [
    "linguaid",
    "belajar bahasa inggris",
    "tata bahasa inggris",
    "simple tenses",
    "latihan bahasa inggris untuk indonesia",
    "kalimat bahasa inggris",
  ],
  openGraph: {
    title: "LinguaID",
    description:
      "Tata bahasa Inggris untuk orang Indonesia — disusun dari kata demi kata.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
