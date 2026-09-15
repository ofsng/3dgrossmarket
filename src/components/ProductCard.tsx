import Link from "next/link";
import type { Product } from "@/lib/products";
import ProductVisual from "./ProductVisual";

export default function ProductCard({
  product,
  priority,
}: {
  product: Product;
  priority?: boolean;
}) {
  const href = product.hasPage ? `/oyuncaklar/${product.slug}` : undefined;

  const body = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <ProductVisual
          shape={product.shape}
          hue={product.hue}
          image={product.image}
          alt={product.name}
          priority={priority}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.06]"
        />
        {product.comingSoon && (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--background)]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-2)] backdrop-blur">
            Yakında
          </span>
        )}
        {href && !product.comingSoon && (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a0d00]">
            Satışta
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[15px] font-semibold tracking-tight">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
          {product.short}
        </p>

        {product.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2 py-1 text-[11px] text-[var(--muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {href && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-2)]">
            Ürünü incele
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:border-[var(--accent)]/60 hover:shadow-[0_0_0_1px_rgba(255,122,24,0.15),0_18px_40px_-20px_rgba(0,0,0,0.9)]";

  if (href) {
    return (
      <Link href={href} className={className}>
        {body}
      </Link>
    );
  }

  return <article className={className}>{body}</article>;
}
