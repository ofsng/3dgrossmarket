import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductVisual from "@/components/ProductVisual";
import { Container } from "@/components/Section";
import { getProduct, toyPages, toyProducts } from "@/lib/products";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return toyPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/oyuncaklar/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Ürün bulunamadı" };
  return {
    title: product.name,
    description: product.description ?? product.short,
  };
}

export default async function OyuncakDetayPage({
  params,
}: PageProps<"/oyuncaklar/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product || !product.hasPage) notFound();

  const others = toyProducts().filter((p) => p.slug !== product.slug);

  const specs = [
    { label: "Kategori", value: "Oyuncak & Fidget" },
    product.material && { label: "Malzeme", value: product.material },
    product.size && { label: "Boyut", value: product.size },
    { label: "Üretim", value: "3D baskı · tek parça" },
    { label: "Teslim", value: "1 – 3 iş günü içinde kargo" },
  ].filter(Boolean) as { label: string; value: string }[];

  const orderMessage = encodeURIComponent(
    `Merhaba, ${product.name} hakkında bilgi almak istiyorum.`,
  );

  return (
    <>
      {/* ── ÜRÜN ÜST BLOĞU ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div
          className="absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full opacity-[0.10] blur-3xl"
          style={{ background: `hsl(${product.hue} 80% 55%)` }}
        />

        <Container className="relative py-12 sm:py-16">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--accent-2)]">
              Ana Sayfa
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/oyuncaklar" className="hover:text-[var(--accent-2)]">
              Oyuncaklar
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--foreground)]">{product.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Görseller */}
            <div>
              <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
                <ProductVisual
                  shape={product.shape}
                  hue={product.hue}
                  image={product.image}
                  alt={product.name}
                  priority
                  className="aspect-square w-full"
                />
              </div>

              {/* Ek görsel alanları — foto geldiğinde doldurulacak */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-2xl border border-dashed border-[var(--border)] opacity-60"
                  >
                    <ProductVisual
                      shape={product.shape}
                      hue={(product.hue + (i + 1) * 40) % 360}
                      alt={`${product.name} görsel ${i + 2}`}
                      className="aspect-square w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bilgi + sipariş */}
            <div>
              {product.comingSoon ? (
                <span className="inline-flex rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Yakında
                </span>
              ) : (
                <span className="inline-flex rounded-full bg-[var(--accent)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a0d00]">
                  Satışta
                </span>
              )}

              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
                {product.description ?? product.short}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {product.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs text-[var(--muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ══════════════════════════════════════════════
                  SATIŞ / SİPARİŞ ALANI
                  Satış linki hazır olduğunda src/lib/products.ts
                  içindeki bu ürünün `buyUrl` alanını doldurman
                  yeterli — buton otomatik aktifleşir.
                 ══════════════════════════════════════════════ */}
              <div className="mt-9 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7">
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Sipariş
                </h2>

                {product.price ? (
                  <p className="mt-3 text-3xl font-bold text-[var(--accent-2)]">
                    {product.price}
                  </p>
                ) : (
                  <p className="mt-3 text-[15px] text-[var(--muted)]">
                    Fiyat, seçtiğiniz boyut ve adede göre belirleniyor.
                  </p>
                )}

                <div className="mt-6 flex flex-col gap-3">
                  {product.buyUrl ? (
                    <a
                      href={product.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-[var(--accent)] px-6 py-4 text-center text-sm font-semibold text-[#1a0d00] transition-transform hover:scale-[1.02]"
                    >
                      Hemen Satın Al
                    </a>
                  ) : (
                    <span className="rounded-xl border border-dashed border-[var(--border)] px-6 py-4 text-center text-sm text-[var(--muted)]">
                      {product.comingSoon
                        ? "Satış çok yakında başlıyor"
                        : "Online satış linki yakında eklenecek"}
                    </span>
                  )}

                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={`${site.contact.whatsappHref}?text=${orderMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3.5 text-center text-sm font-semibold transition-colors hover:border-[var(--accent)]/60"
                    >
                      WhatsApp ile sipariş
                    </a>
                    <a
                      href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
                        `${product.name} siparişi`,
                      )}`}
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3.5 text-center text-sm font-semibold transition-colors hover:border-[var(--accent)]/60"
                    >
                      E-posta ile sor
                    </a>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-[var(--muted)]">
                  Toplu ve bayi siparişlerinde özel fiyat uygulanır. 10 adet ve
                  üzeri için bize ulaşın.
                </p>
              </div>

              {/* Teknik özellikler */}
              <dl className="mt-8 divide-y divide-[var(--border)] overflow-hidden rounded-2xl border border-[var(--border)]">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm"
                  >
                    <dt className="text-[var(--muted)]">{s.label}</dt>
                    <dd className="text-right font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ── TOPTAN ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-2)] p-8 sm:p-12">
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Toptan & bayi siparişi
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
                  Oyuncakçı, hediyelik eşya mağazası veya kurumsal etkinlik için
                  adetli üretim yapıyoruz. Kendi logonuzla özelleştirilmiş
                  versiyonunu da basabiliriz.
                </p>
              </div>
              <Link
                href="/iletisim"
                className="w-fit rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[#1a0d00] transition-transform hover:scale-[1.03] lg:justify-self-end"
              >
                Toptan fiyat al
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── DİĞER OYUNCAKLAR ───────────────────────────────── */}
      <section className="border-t border-[var(--border)] py-16 sm:py-20">
        <Container>
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Diğer oyuncaklar
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.slice(0, 4).map((p) => {
              const inner = (
                <>
                  <ProductVisual
                    shape={p.shape}
                    hue={p.hue}
                    image={p.image}
                    alt={p.name}
                    className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="p-5">
                    <h3 className="text-[15px] font-semibold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {p.short}
                    </p>
                  </div>
                </>
              );
              const cls =
                "group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]/60";
              return p.hasPage ? (
                <Link key={p.slug} href={`/oyuncaklar/${p.slug}`} className={cls}>
                  {inner}
                </Link>
              ) : (
                <article key={p.slug} className={cls}>
                  {inner}
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
