# 3D Gross Market — 3dgrossmarket.com

Next.js 16 (App Router) + Tailwind v4. Tüm sayfalar statik üretiliyor, Vercel'de barınıyor.

## Neyi nereden düzenlersin

| Ne | Dosya |
|---|---|
| **Vizyon & Misyon metni** | `src/lib/about.ts` — `vision.text` ve `mission.text` |
| **İletişim bilgileri** (telefon, e-posta, WhatsApp, adres) | `src/lib/site.ts` → `contact` |
| **Ürünler** (ekleme/çıkarma/düzenleme) | `src/lib/products.ts` |
| **Satış linkleri** | `src/lib/products.ts` → ilgili ürünün `buyUrl` alanı |
| Menü | `src/lib/site.ts` → `nav` |

## Ürün fotoğrafı ekleme

1. Fotoğrafı `public/urunler/` klasörüne at (örn. `pinch-ball.jpg`).
2. `src/lib/products.ts` içinde o ürüne `image: "/urunler/pinch-ball.jpg"` satırını ekle.

Fotoğraf yoksa otomatik olarak ürüne özel bir grafik gösteriliyor — site hiçbir yerde boş görünmüyor.

## Satışa açma

Shopier / Trendyol / Etsy linkin hazır olduğunda:

```ts
// src/lib/products.ts
{
  slug: "pinch-ball",
  ...
  buyUrl: "https://www.shopier.com/xxxxx",   // ← bu satırı ekle
  price: "₺249",                              // ← istersen fiyat da
}
```

"Hemen Satın Al" butonu otomatik aktifleşir. Link yokken ziyaretçi WhatsApp/e-posta ile sipariş verebiliyor.

## İkinci oyuncak

`src/lib/products.ts` içinde `slug: "ikinci-oyuncak"` kaydı hazır bekliyor.
İsmini, açıklamasını ve fotoğrafını değiştirip `comingSoon: true` satırını silmen yeterli — sayfası zaten `/oyuncaklar/<slug>` adresinde çalışıyor.

## Komutlar

```bash
npm run dev      # yerel geliştirme → http://localhost:3000
npm run build    # üretim derlemesi
vercel --prod    # canlıya al
```

## Sayfa haritası

- `/` — ana sayfa (iş alanı tanıtımı, maskeler, kutular, iki iş alanı, satıştaki oyuncaklar, süreç, iletişim)
- `/urunler` — tüm katalog
- `/urunler/maskeler` · `/kutular` · `/dekor` · `/endustriyel`
- `/oyuncaklar` — oyuncak iş alanı
- `/oyuncaklar/pinch-ball` · `/oyuncaklar/ikinci-oyuncak` — satış sayfaları
- `/hakkimizda` — vizyon & misyon
- `/iletisim` — form + SSS
