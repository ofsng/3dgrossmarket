export const site = {
  name: "3D Gross Market",
  domain: "3dgrossmarket.com",
  url: "https://3dgrossmarket.com",
  tagline: "Fikirden ürüne, tek katmanda.",
  description:
    "3D Gross Market; endüstriyel 3D yazıcılarla maske, kutu, oyuncak ve özel üretim parçalar üreten bir tasarım ve üretim atölyesidir. Tek parçadan seri üretime kadar her ölçekte çalışıyoruz.",

  // TODO (Uğur): Gerçek iletişim bilgilerini buradan güncelle.
  contact: {
    email: "info@3dgrossmarket.com",
    phone: "+90 (000) 000 00 00",
    phoneHref: "tel:+900000000000",
    whatsapp: "+90 (000) 000 00 00",
    whatsappHref: "https://wa.me/900000000000",
    address: "Türkiye",
    workingHours: "Pazartesi – Cumartesi · 09:00 – 19:00",
  },

  social: {
    instagram: "https://instagram.com/",
    shopier: "", // Satış linki geldiğinde doldur
    trendyol: "",
    etsy: "",
  },
} as const;

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/oyuncaklar", label: "Oyuncaklar" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;
