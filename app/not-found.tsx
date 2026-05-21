import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="text-6xl font-bold text-brand-500">404</div>
        <h1 className="mt-4 text-2xl font-semibold text-slate-900">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-2 text-slate-600">
          Pelajaran ini tidak ada. Kembali ke daftar pelajaran.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700"
        >
          ← Beranda
        </Link>
      </main>
    </>
  );
}
