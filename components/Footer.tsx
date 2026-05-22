export function Footer() {
  return (
    <footer className="mt-20 border-t border-paper-line bg-paper-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-lg font-extrabold tracking-tight text-indigo">
            Lingua<span className="text-orange">ID</span>
          </span>
          <span
            className="mb-0.5 h-1.5 w-1.5 rounded-full bg-orange"
            aria-hidden
          />
        </div>
        <p className="text-sm text-ink-muted">
          Tata bahasa Inggris untuk orang Indonesia — disusun dari kata demi
          kata.
        </p>
      </div>
    </footer>
  );
}
