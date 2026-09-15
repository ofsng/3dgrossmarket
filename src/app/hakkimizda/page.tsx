import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/Section";
import { about } from "@/lib/about";
import { divisions, stats } from "@/lib/products";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "3D Gross Market'in çalışma biçimi, vizyonu ve misyonu. 3D baskı ile tasarım ve üretim atölyesi.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <Container className="relative py-16 sm:py-24">
          <SectionHeading
            kicker="Hakkımızda"
            title={
              <>
                Bir atölye,
                <br />
                <span className="text-gradient">sınırsız katman.</span>
              </>
            }
            description={about.intro}
          />

          <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <dt className="text-2xl font-bold text-[var(--accent-2)]">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {[about.vision, about.mission].map((block, i) => (
              <div
                key={block.title}
                className="layer-lines relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10"
              >
                <span className="font-mono text-4xl font-bold text-[var(--accent)]/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  {block.title}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Değerler */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/40 py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Çalışma Prensiplerimiz"
            title="Nasıl iş yapıyoruz"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* İş alanları */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading kicker="İş Alanlarımız" title="İki hat, tek atölye" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {divisions.map((d) => (
              <Link
                key={d.id}
                href={d.href}
                className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-colors hover:border-[var(--accent)]/60"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  {d.kicker}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  {d.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {d.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2)]">
                  {d.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
