"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const subjects = [
  "Ürün siparişi",
  "Özel üretim / tasarım",
  "Toptan & bayilik",
  "Diğer",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");

  const body = [
    `Ad Soyad: ${name || "-"}`,
    `Telefon: ${phone || "-"}`,
    `Konu: ${subject}`,
    "",
    message || "-",
  ].join("\n");

  const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    `${subject} — ${name || "Web sitesi"}`,
  )}&body=${encodeURIComponent(body)}`;

  const waHref = `${site.contact.whatsappHref}?text=${encodeURIComponent(body)}`;

  const field =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]";

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9"
    >
      <h2 className="text-xl font-bold tracking-tight">Bize yazın</h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
        Formu doldurun, size en uygun kanaldan gönderin. Genelde aynı gün içinde
        dönüş yapıyoruz.
      </p>

      <div className="mt-7 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Ad Soyad
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınız"
              className={field}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Telefon
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05.. ... .. .."
              className={field}
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
            Konu
          </span>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={field}
          >
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-[var(--surface-2)]">
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
            Mesajınız
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Üretmek istediğiniz ürünü, ölçüyü ve adedi kısaca yazın."
            className={`${field} resize-y`}
          />
        </label>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[var(--accent)] px-5 py-3.5 text-center text-sm font-semibold text-[#1a0d00] transition-transform hover:scale-[1.02]"
        >
          WhatsApp ile gönder
        </a>
        <a
          href={mailHref}
          className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3.5 text-center text-sm font-semibold transition-colors hover:border-[var(--accent)]/60"
        >
          E-posta ile gönder
        </a>
      </div>
    </form>
  );
}
