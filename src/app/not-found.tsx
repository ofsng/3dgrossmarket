import Link from "next/link";
import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-mono text-6xl font-bold text-[var(--accent)]/30">
        404
      </span>
      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
        Bu katman basılmamış
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
        Aradığınız sayfa bulunamadı. Ürün kataloğuna dönüp devam edebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[#1a0d00]"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/urunler"
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold"
        >
          Ürünler
        </Link>
      </div>
    </Container>
  );
}
