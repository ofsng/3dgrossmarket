import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductVisual from "@/components/ProductVisual";
import { Container, SectionHeading } from "@/components/Section";
import { toyPages, toyProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Oyuncaklar",
  description:
    "Pinch Ball ve diğer 3D baskı fidget oyuncaklarımız. Tek parça basılan, montaj gerektirmeyen hareketli oyuncaklar.",
};

const features = [
  {
    title: "Tek parça baskı",
    text: "Montaj yok, yapıştırıcı yok. Oyuncak yazıcıdan hareketli çıkıyor.",
  },
  {
    title: "Güvenli malzeme",
    text: "Kokusuz, mısır nişastası bazlı PLA+ ve yumuşak TPU kullanıyoruz.",
  },
  {
    title: "Keskin köşe yok",
    text: "Tüm kenarlar tasarımda yuvarlatılıyor, baskı sonrası kontrol ediliyor.",
  },
  {
    title: "Renk seçenekli",
    text: "Stoktaki filament renklerinden seçebilir, özel renk talep edebilirsiniz.",
  },
];

export default function OyuncaklarPage() {
  const pages = toyPages();
  const all = toyProducts();
  const rest = all.filter((p) => !p.hasPage);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.07] blur-3xl" />
        <Container className="relative py-16 sm:py-20">
          <nav className="mb-7 flex items-center gap-2 text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--accent-2)]">
              Ana Sayfa
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--foreground)]">Oyuncaklar</span>
          </nav>

          <SectionHeading
            kicker="İş Alanı 01"
            title="Oyuncak & Hobi"
            description="Tasarımını kendimiz yapıp ürettiğimiz oyuncaklar. Fidget kürelerden hareketli eklemli figürlere kadar, hepsi tek parça olarak 3D yazıcıdan çıkıyor. Satıştaki ürünlerin kendi sayfası ve sipariş alanı var."
          />
        </Container>
      </section>

      {/* Satıştaki ürünler — kendi sayfası olanlar */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading kicker="Satıştaki Ürünler" title="Öne çıkanlar" />

          <div className="mt-10 space-y-6">
            {pages.map((p, i) => (
              <Link
                key={p.slug}
                href={`/oyuncaklar/${p.slug}`}
                className={`group grid overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:border-[var(--accent)]/60 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ProductVisual
                  shape={p.shape}
                  hue={p.hue}
                  image={p.image}
                  alt={p.name}
                  priority={i === 0}
                  className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.04] lg:aspect-auto lg:h-full lg:min-h-[340px]"
                />

                <div className="flex flex-col justify-center p-8 sm:p-10">
                  {p.comingSoon ? (
                    <span className="w-fit rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Yakında
                    </span>
                  ) : (
                    <span className="w-fit rounded-full bg-[var(--accent)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a0d00]">
                      Satışta
                    </span>
                  )}

                  <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
                    {p.short}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-[11px] text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#1a0d00]">
                    Ürün sayfasına git
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Neden bizim oyuncaklarımız */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/40 py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="Üretim Notu"
            title="Nasıl üretiliyor?"
            description="Oyuncaklarımızın hepsi aynı standartla basılıyor."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="layer-lines rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Katalogdaki diğer oyuncaklar */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="Katalog"
            title="Diğer oyuncaklar"
            description="Sipariş üzerine ürettiğimiz oyuncak ve fidget modelleri. Renk ve boyut seçimi için bize yazmanız yeterli."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
