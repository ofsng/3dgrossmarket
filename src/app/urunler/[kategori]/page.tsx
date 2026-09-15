import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { Container, SectionHeading } from "@/components/Section";
import {
  categories,
  getCategory,
  productsByCategory,
  type CategoryId,
} from "@/lib/products";

export function generateStaticParams() {
  // Oyuncaklar kendi bölümünde (/oyuncaklar) yaşıyor
  return categories
    .filter((c) => c.division === "diger")
    .map((c) => ({ kategori: c.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/urunler/[kategori]">): Promise<Metadata> {
  const { kategori } = await params;
  const category = getCategory(kategori as CategoryId);
  if (!category) return { title: "Kategori bulunamadı" };
  return { title: category.name, description: category.description };
}

export default async function KategoriPage({
  params,
}: PageProps<"/urunler/[kategori]">) {
  const { kategori } = await params;
  const category = getCategory(kategori as CategoryId);
  if (!category) notFound();
  if (category.division === "oyuncak") redirect("/oyuncaklar");

  const items = productsByCategory(category.id);
  const others = categories.filter((c) => c.id !== category.id);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <Container className="relative py-16 sm:py-20">
          <nav className="mb-7 flex items-center gap-2 text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--accent-2)]">
              Ana Sayfa
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/urunler" className="hover:text-[var(--accent-2)]">
              Ürünler
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--foreground)]">{category.name}</span>
          </nav>

          <SectionHeading
            kicker={`${items.length} ürün`}
            title={category.name}
            description={category.description}
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 4} />
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Aradığınızı bulamadınız mı?
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
              Katalog sadece örnek. {category.name.toLowerCase()} kategorisinde
              aklınızdaki farklı bir tasarım varsa ölçüsünü ve görselini
              gönderin, üretilebilirliğini birlikte değerlendirelim.
            </p>
            <Link
              href="/iletisim"
              className="mt-6 inline-flex rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[#1a0d00] transition-transform hover:scale-[1.03]"
            >
              Özel üretim için yazın
            </Link>
          </div>

          <div className="mt-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Diğer Kategoriler
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {others.map((c) => (
                <Link
                  key={c.id}
                  href={c.id === "oyuncaklar" ? "/oyuncaklar" : `/urunler/${c.id}`}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent-2)]"
                >
                  <span aria-hidden="true" className="mr-2 text-[var(--accent)]">
                    {c.icon}
                  </span>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
