import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 font-bold text-white">
            P
          </span>
          <span className="text-lg font-semibold">
            Poliglot <span className="text-brand-600">English</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-slate-600 hover:text-slate-900">
            Beranda
          </Link>
          <Link href="/#pelajaran" className="text-slate-600 hover:text-slate-900">
            Pelajaran
          </Link>
          <Link
            href="/#tentang"
            className="text-slate-600 hover:text-slate-900"
          >
            Tentang
          </Link>
        </nav>
      </div>
    </header>
  );
}
