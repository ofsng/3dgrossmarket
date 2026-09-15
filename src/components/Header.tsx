"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent-2)] to-[var(--accent)] font-bold text-[#151006]">
            3D
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">
              Gross Market
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
              3D Baskı Atölyesi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                isActive(item.href)
                  ? "bg-[var(--accent-soft)] text-[var(--accent-2)]"
                  : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/iletisim"
            className="hidden rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[#1a0d00] transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Teklif Al
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] md:hidden"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-3 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-sm ${
                isActive(item.href)
                  ? "bg-[var(--accent-soft)] text-[var(--accent-2)]"
                  : "text-[var(--muted)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.contact.email}`}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-[var(--accent)] px-3 py-2.5 text-center text-sm font-semibold text-[#1a0d00]"
          >
            Teklif Al
          </a>
        </nav>
      )}
    </header>
  );
}
