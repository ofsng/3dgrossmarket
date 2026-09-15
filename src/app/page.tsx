import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductVisual from "@/components/ProductVisual";
import { Container, SectionHeading } from "@/components/Section";
import {
  divisions,
  otherCategories,
  productsByCategory,
  stats,
  toyPages,
} from "@/lib/products";
import { site } from "@/lib/site";

const capabilities = [
  {
    icon: "◑",
    title: "Maske Üretimi",
    text: "Cosplay ve dekoratif maskeler; yüksek çözünürlüklü baskı, zımpara ve el boyama ile bitirilir.",
  },
  {
    icon: "▣",
    title: "Kutu & Organizasyon",
    text: "Menteşeli, sürgülü, gizli bölmeli ve istiflenebilir kutular. Ölçü tamamen size özel.",
  },
  {
    icon: "◉",
    title: "Oyuncak & Fidget",
    text: "Tek parça basılan hareketli oyuncaklar. Kendi tasarımlarımızı üretip doğrudan satıyoruz.",
  },
  {
    icon: "⚙",
    title: "Özel Üretim",
    text: "Bulunamayan yedek parçadan fonksiyonel prototipe kadar teknik üretim işleri.",
  },
];

const process = [
  {
    step: "01",
    title: "Fikir & Ölçü",
    text: "Görsel, numune ya da teknik çizim — elinizde ne varsa onunla başlıyoruz.",
  },
  {
    step: "02",
    title: "3D Modelleme",
    text: "Tasarımı baskıya hazır hale getiriyor, gerekirse tarama ile dijitalleştiriyoruz.",
  },
  {
    step: "03",
    title: "Üretim",
    text: "Malzeme ve katman ayarı ürüne göre seçiliyor; numune onayı sonrası adetli baskı.",
  },
  {
    step: "04",
    title: "Bitiş & Teslim",
    text: "Zımpara, boya, montaj ve paketleme sonrası kargoya teslim.",
  },
];

export default function HomePage() {
  const masks = productsByCategory("maskeler");
  const boxes = productsByCategory("kutular");
  const toys = toyPages();

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-[#4f7cff] opacity-[0.06] blur-3xl" />

        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                3D Yazıcı Üretim Atölyesi
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
                Fikirden ürüne,
                <br />
                <span className="text-gradient">tek katmanda.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                3D Gross Market; endüstriyel 3D yazıcılarla{" "}
                <strong className="font-medium text-[var(--foreground)]">
                  maske, kutu, oyuncak ve özel parça
                </strong>{" "}
                üreten bir tasarım ve üretim atölyesidir. Tek parçalık özel
                siparişten binlerce adetlik seri üretime kadar, tasarımı biz
                yapıyoruz ya da sizin dosyanızı basıyoruz.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/urunler"
                  className="rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[#1a0d00] transition-transform hover:scale-[1.03]"
                >
                  Ürünleri Keşfet
                </Link>
                <Link
                  href="/oyuncaklar"
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[var(--accent)]/60"
                >
                  Oyuncaklar
                </Link>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xl font-bold text-[var(--accent-2)] sm:text-2xl">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Görsel kolaj */}
            <div className="animate-float grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
                  <ProductVisual
                    shape="mask"
                    hue={4}
                    alt="3D baskı maske"
                    priority
                    className="aspect-square"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
                  <ProductVisual
                    shape="ball"
                    hue={28}
                    alt="Pinch ball fidget oyuncak"
                    className="aspect-[4/5]"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
                  <ProductVisual
                    shape="box"
                    hue={200}
                    alt="3D baskı kutu"
                    className="aspect-[4/5]"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
                  <ProductVisual
                    shape="gear"
                    hue={180}
                    alt="Fonksiyonel prototip parça"
                    className="aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── NE YAPIYORUZ ───────────────────────────────────── */}
      <section className="border-b border-[var(--border)] py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Ne Yapıyoruz"
            title="Her şey bir 3D yazıcıdan çıkıyor"
            description="Ürettiğimiz her ürün baştan sona kendi atölyemizde, 3D yazıcılarla üretiliyor. Hazır kalıp kullanmıyoruz; bu yüzden ölçü, renk ve detay tamamen değiştirilebilir. Aşağıdaki dört alan, işimizin ana gövdesini oluşturuyor."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="layer-lines rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/50"
              >
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent-soft)] text-xl text-[var(--accent-2)]"
                >
                  {c.icon}
                </span>
                <h3 className="mt-5 font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MASKELER ───────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              kicker="Kategori 01"
              title="Maskeler"
              description="Cosplay, koleksiyon ve dekorasyon için ürettiğimiz maskeler. Her biri baskı sonrası elde zımparalanıp boyanıyor; istediğiniz renk ve ölçüde üretilebiliyor."
            />
            <Link
              href="/urunler/maskeler"
              className="shrink-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent-2)]"
            >
              Tüm maskeler ({masks.length}) →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {masks.slice(0, 8).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── KUTULAR ────────────────────────────────────────── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/40 py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              kicker="Kategori 02"
              title="3D Yazıcıdan Kutular"
              description="Menteşesi baskıdan çıkan, gizli bölmeli, istiflenebilir kutular. Hediyelik kullanımdan atölye düzenine kadar her ihtiyaç için ölçüye göre üretiyoruz."
            />
            <Link
              href="/urunler/kutular"
              className="shrink-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent-2)]"
            >
              Tüm kutular ({boxes.length}) →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {boxes.slice(0, 8).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── İKİ İŞ ALANI ───────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            kicker="İş Alanlarımız"
            title="İki ana hatta çalışıyoruz"
            description="Bir tarafta kendi tasarladığımız ve doğrudan sattığımız oyuncaklar, diğer tarafta maske, kutu, dekorasyon ve endüstriyel üretim işleri."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {divisions.map((d) => (
              <Link
                key={d.id}
                href={d.href}
                className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all duration-300 hover:border-[var(--accent)]/60 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] sm:p-10"
              >
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--accent)] opacity-[0.06] blur-2xl transition-opacity group-hover:opacity-[0.12]" />

                <div className="relative">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {d.kicker}
                  </span>
                  <div className="mt-5 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent-soft)] text-2xl text-[var(--accent-2)]"
                    >
                      {d.icon}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {d.name}
                    </h3>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
                    {d.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {d.id === "oyuncak"
                      ? ["Pinch Ball", "Flexi Figürler", "Fidget", "Bulmaca"].map(
                          (t) => (
                            <span
                              key={t}
                              className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1.5 text-xs text-[var(--muted)]"
                            >
                              {t}
                            </span>
                          ),
                        )
                      : otherCategories().map((c) => (
                          <span
                            key={c.id}
                            className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1.5 text-xs text-[var(--muted)]"
                          >
                            {c.name}
                          </span>
                        ))}
                  </div>

                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--accent-2)]">
                    {d.cta}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1.5"
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

      {/* ── SATIŞTAKİ OYUNCAKLAR ───────────────────────────── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/40 py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Satıştaki Ürünler"
            title="Kendi oyuncaklarımız"
            description="Tasarımını kendimiz yaptığımız, üretip doğrudan sattığımız oyuncaklar. Her ürünün kendi sayfası ve sipariş alanı var."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {toys.map((p) => (
              <Link
                key={p.slug}
                href={`/oyuncaklar/${p.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:border-[var(--accent)]/60 sm:grid-cols-2"
              >
                <ProductVisual
                  shape={p.shape}
                  hue={p.hue}
                  image={p.image}
                  alt={p.name}
                  className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.05] sm:aspect-auto sm:h-full"
                />
                <div className="flex flex-col justify-center p-7">
                  {p.comingSoon ? (
                    <span className="w-fit rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Yakında
                    </span>
                  ) : (
                    <span className="w-fit rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a0d00]">
                      Satışta
                    </span>
                  )}
                  <h3 className="mt-4 text-xl font-bold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {p.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2)]">
                    Ürün sayfasına git
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1.5"
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

      {/* ── SÜREÇ ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Nasıl Çalışıyoruz"
            title="Siparişten teslimata dört adım"
            description="Aklınızdaki ürünün fotoğrafı bile yeterli. Gerisini biz hallediyoruz."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <span className="font-mono text-3xl font-bold text-[var(--accent)]/25">
                  {p.step}
                </span>
                <h3 className="mt-3 font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA / İLETİŞİM ─────────────────────────────────── */}
      <section className="pb-4">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-2)] p-10 text-center sm:p-16">
            <div className="grid-bg absolute inset-0 opacity-50" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                Aklınızdaki ürünü <span className="text-gradient">basalım</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
                Katalogdan bir ürün, kendi tasarımınız ya da sadece bir fikir —
                ne olursa olsun yazın. Ölçü ve adedi konuşup fiyat çıkaralım.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href="/iletisim"
                  className="rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[#1a0d00] transition-transform hover:scale-[1.03]"
                >
                  Teklif Al
                </Link>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[var(--accent)]/60"
                >
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
