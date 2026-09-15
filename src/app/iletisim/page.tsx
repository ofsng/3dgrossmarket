import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Container, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "3D Gross Market ile iletişime geçin. Ürün siparişi, özel üretim ve toptan talepleriniz için bize ulaşın.",
};

const faqs = [
  {
    q: "Elimde 3D dosya yok, yine de üretebilir misiniz?",
    a: "Evet. Fotoğraf, ölçülü kroki ya da elinizdeki fiziksel numune ile başlayabiliriz. Modellemeyi biz yapıyoruz.",
  },
  {
    q: "Tek adet sipariş veriyor musunuz?",
    a: "Veriyoruz. Tek parçalık özel üretimden binlerce adetlik seri baskıya kadar her ölçekte çalışıyoruz.",
  },
  {
    q: "Üretim ne kadar sürüyor?",
    a: "Katalog ürünlerinde 1–3 iş günü. Özel üretimde model onayından sonra ürünün boyutuna göre süre veriyoruz; numune genelde 48 saat içinde hazır.",
  },
  {
    q: "Hangi malzemeleri kullanıyorsunuz?",
    a: "PLA+, PETG, ABS, TPU, karbon katkılı naylon ve reçine. Ürünün kullanım yerine göre en uygun olanını öneriyoruz.",
  },
  {
    q: "Kargo yapıyor musunuz?",
    a: "Türkiye'nin her yerine anlaşmalı kargo ile gönderim yapıyoruz. Kırılabilir ürünler koruyucu paketle gönderilir.",
  },
];

export default function IletisimPage() {
  const channels = [
    {
      label: "E-posta",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
      icon: "✉",
    },
    {
      label: "Telefon",
      value: site.contact.phone,
      href: site.contact.phoneHref,
      icon: "☎",
    },
    {
      label: "WhatsApp",
      value: site.contact.whatsapp,
      href: site.contact.whatsappHref,
      icon: "◇",
    },
    {
      label: "Çalışma Saatleri",
      value: site.contact.workingHours,
      icon: "◷",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <Container className="relative py-16 sm:py-20">
          <SectionHeading
            kicker="İletişim"
            title="Konuşalım"
            description="Ürün siparişi, özel üretim ya da toptan talep — hangisi olursa olsun yazın. Ölçü ve adedi netleştirip fiyat çıkaralım."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            {/* Kanallar */}
            <div className="space-y-4">
              {channels.map((c) => {
                const inner = (
                  <>
                    <span
                      aria-hidden="true"
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--accent-soft)] text-lg text-[var(--accent-2)]"
                    >
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-[var(--muted)]">
                        {c.label}
                      </span>
                      <span className="mt-1 block truncate font-medium">
                        {c.value}
                      </span>
                    </span>
                  </>
                );
                const cls =
                  "flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors";
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className={`${cls} hover:border-[var(--accent)]/60`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className={cls}>
                    {inner}
                  </div>
                );
              })}

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Atölye
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {site.contact.address}
                  <br />
                  Ziyaret öncesi randevu almanızı rica ederiz.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      {/* SSS */}
      <section className="border-t border-[var(--border)] py-16 sm:py-20">
        <Container>
          <SectionHeading kicker="SSS" title="Sık sorulan sorular" />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[var(--accent)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
