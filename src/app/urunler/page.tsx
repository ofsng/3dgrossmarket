import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Container, SectionHeading } from "@/components/Section";
import { categories, products, productsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "3D yazıcı ile ürettiğimiz maskeler, kutular, dekorasyon ürünleri ve endüstriyel parçaların tam kataloğu.",
};

export default function UrunlerPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <Container className="relative py-16 sm:py-20">
          <SectionHeading
            kicker="Katalog"
            title="Tüm Ürünler"
            description={`3D yazıcılarımızdan çıkan ${products.length} ürün. Hepsi ölçü, renk ve malzeme olarak size göre uyarlanabilir — katalogda görmediğiniz bir şeyi de üretebiliriz.`}
          />

          <div className="mt-9 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.id}
                href={c.id === "oyuncaklar" ? "/oyuncaklar" : `/urunler/${c.id}`}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent-2)]"
              >
                <span aria-hidden="true" className="mr-2 text-[var(--accent)]">
                  {c.icon}
                </span>
                {c.name}
                <span className="ml-2 text-xs text-[var(--muted)]">
                  {productsByCategory(c.id).length}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {categories.map((c, i) => {
        const items = productsByCategory(c.id);
        return (
          <section
            key={c.id}
            id={c.id}
            className={`py-16 sm:py-20 ${
              i % 2 === 1 ? "border-y border-[var(--border)] bg-[var(--surface)]/40" : ""
            }`}
          >
            <Container>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <SectionHeading
                  kicker={`Kategori ${String(i + 1).padStart(2, "0")}`}
                  title={c.name}
                  description={c.description}
                />
                <Link
                  href={c.id === "oyuncaklar" ? "/oyuncaklar" : `/urunler/${c.id}`}
                  className="shrink-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent-2)]"
                >
                  Kategoriyi aç →
                </Link>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
