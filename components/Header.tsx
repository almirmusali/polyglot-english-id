import Link from "next/link";

/**
 * Header LinguaID — logo serif dengan titik aksen oranye sebagai
 * tanda merek. Nav minimal, ditulis dengan Inter untuk kontras
 * terhadap judul yang serif.
 */
export function Header() {
  return (
    <header className="border-b border-paper-line bg-paper-surface/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:py-5">
        <Link href="/" className="group flex items-baseline gap-1">
          <span className="font-display text-2xl font-extrabold tracking-tight text-indigo">
            Lingua
            <span className="text-orange">ID</span>
          </span>
          <span
            className="mb-0.5 h-2 w-2 rounded-full bg-orange transition group-hover:scale-125"
            aria-hidden
          />
        </Link>

        <nav className="flex items-center gap-1 text-sm sm:gap-2">
          <Link
            href="/"
            className="rounded-md px-3 py-1.5 font-medium text-ink-soft transition hover:bg-paper-soft hover:text-ink"
          >
            Beranda
          </Link>
          <Link
            href="/#daftar"
            className="rounded-md px-3 py-1.5 font-medium text-ink-soft transition hover:bg-paper-soft hover:text-ink"
          >
            Pelajaran
          </Link>
          <Link
            href="/#metode"
            className="rounded-md px-3 py-1.5 font-medium text-ink-soft transition hover:bg-paper-soft hover:text-ink"
          >
            Metode
          </Link>
        </nav>
      </div>
    </header>
  );
}
