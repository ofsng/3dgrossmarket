import Link from "next/link";
import { categories, divisions } from "@/lib/products";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent-2)] to-[var(--accent)] font-bold text-[#151006]">
              3D
            </span>
            <span className="font-semibold">Gross Market</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            {site.tagline} Endüstriyel 3D yazıcılarla tasarım, üretim ve seri
            baskı.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            İş Alanları
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {divisions.map((d) => (
              <li key={d.id}>
                <Link
                  href={d.href}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]"
                >
                  {d.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/hakkimizda"
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]"
              >
                Hakkımızda
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            Kategoriler
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={
                    c.id === "oyuncaklar" ? "/oyuncaklar" : `/urunler/${c.id}`
                  }
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            İletişim
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--muted)]">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-[var(--accent-2)]"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={site.contact.phoneHref}
                className="transition-colors hover:text-[var(--accent-2)]"
              >
                {site.contact.phone}
              </a>
            </li>
            <li>{site.contact.workingHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
