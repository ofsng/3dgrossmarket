export type ShapeKey =
  | "mask"
  | "box"
  | "ball"
  | "figure"
  | "gear"
  | "vase"
  | "part"
  | "keychain";

export type CategoryId =
  | "maskeler"
  | "kutular"
  | "oyuncaklar"
  | "dekor"
  | "endustriyel";

/** Sitenin iki ana iş alanı */
export type DivisionId = "oyuncak" | "diger";

export type Category = {
  id: CategoryId;
  division: DivisionId;
  name: string;
  short: string;
  description: string;
  icon: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  short: string;
  description?: string;
  shape: ShapeKey;
  hue: number;
  tags: string[];
  material?: string;
  size?: string;
  price?: string;
  /** /public/urunler/... altına foto eklenince burayı doldurman yeterli */
  image?: string;
  featured?: boolean;
  /** Ürünün kendi satış sayfası var mı (oyuncaklar için) */
  hasPage?: boolean;
  /** Satış linki (Shopier / Trendyol / Etsy vb.) — boşsa "yakında" görünür */
  buyUrl?: string;
  comingSoon?: boolean;
};

export const divisions: {
  id: DivisionId;
  name: string;
  kicker: string;
  description: string;
  href: string;
  cta: string;
  icon: string;
}[] = [
  {
    id: "oyuncak",
    name: "Oyuncak & Hobi",
    kicker: "İş Alanı 01",
    description:
      "Fidget oyuncaklar, hareketli eklemli figürler ve koleksiyonluk baskılar. Kendi tasarımlarımızı üretip doğrudan satışa sunduğumuz alan — her ürünün kendi sayfası ve sipariş bağlantısı var.",
    href: "/oyuncaklar",
    cta: "Oyuncakları incele",
    icon: "◉",
  },
  {
    id: "diger",
    name: "Diğer Ürünler & Üretim",
    kicker: "İş Alanı 02",
    description:
      "Maskeler, kutular, dekorasyon ürünleri ve endüstriyel prototipler. Hazır kataloğumuzdan seçebilir ya da kendi tasarımınızı bize üretime gönderebilirsiniz.",
    href: "/urunler",
    cta: "Ürün kataloğu",
    icon: "◈",
  },
];

export const categories: Category[] = [
  {
    id: "maskeler",
    division: "diger",
    name: "Maskeler",
    short: "Cosplay, dekoratif ve koleksiyonluk maskeler",
    description:
      "Yüksek çözünürlüklü baskı, elde zımpara ve boyama ile bitirilen maskeler. Cosplay, tema partisi, vitrin ve koleksiyon için; istenen boyutta ve renkte üretilir.",
    icon: "◑",
  },
  {
    id: "kutular",
    division: "diger",
    name: "Kutular & Organizasyon",
    short: "Saklama, hediye ve düzenleyici kutular",
    description:
      "Menteşeli, sürgülü, gizli bölmeli ve istiflenebilir kutular. Ölçüsü sizin ihtiyacınıza göre değişebilen, tamamen 3D yazıcı ile üretilen düzen çözümleri.",
    icon: "▣",
  },
  {
    id: "oyuncaklar",
    division: "oyuncak",
    name: "Oyuncak & Fidget",
    short: "Fidget, flexi ve hareketli figürler",
    description:
      "Destek gerektirmeden tek parça basılan, elde toplanan hareketli oyuncaklar. Çocuklar ve yetişkinler için dayanıklı, güvenli malzemelerle üretilir.",
    icon: "◉",
  },
  {
    id: "dekor",
    division: "diger",
    name: "Dekorasyon & Hediyelik",
    short: "Vazo, tabela, lamba ve kişiye özel hediyeler",
    description:
      "Evin ve ofisin karakterini değiştiren dekoratif baskılar. İsme özel tabelalardan geometrik vazolara kadar kişiselleştirilebilir ürünler.",
    icon: "❖",
  },
  {
    id: "endustriyel",
    division: "diger",
    name: "Endüstriyel & Prototip",
    short: "Yedek parça, aparat ve fonksiyonel prototip",
    description:
      "Üretim hattı aparatları, bulunamayan yedek parçalar, mimari maketler ve fonksiyonel prototipler. Teknik çizim veya numune üzerinden üretim yapıyoruz.",
    icon: "⚙",
  },
];

export const products: Product[] = [
  // ───────────────────────── MASKELER ─────────────────────────
  {
    slug: "oni-maskesi",
    name: "Oni İblis Maskesi",
    category: "maskeler",
    short: "Japon folklorundan boynuzlu iblis maskesi, el boyamalı bitiş.",
    shape: "mask",
    hue: 4,
    tags: ["Cosplay", "El boyama", "Tam yüz"],
    material: "PLA+ / Reçine",
    size: "Yetişkin standart",
    featured: true,
  },
  {
    slug: "kitsune-tilki-maskesi",
    name: "Kitsune Tilki Maskesi",
    category: "maskeler",
    short: "Klasik Japon tilki maskesi; mat beyaz gövde, kırmızı motifler.",
    shape: "mask",
    hue: 12,
    tags: ["Cosplay", "Yarım yüz"],
    material: "PLA+",
    size: "Yetişkin standart",
    featured: true,
  },
  {
    slug: "cyberpunk-led-maske",
    name: "Cyberpunk LED Maske",
    category: "maskeler",
    short: "İç aydınlatmalı, pil ile çalışan mekanik görünümlü yüz maskesi.",
    shape: "mask",
    hue: 190,
    tags: ["LED", "Pilli", "Parti"],
    material: "PLA + şeffaf PETG",
    size: "Ayarlanabilir bant",
    featured: true,
  },
  {
    slug: "veba-doktoru-maskesi",
    name: "Veba Doktoru Maskesi",
    category: "maskeler",
    short: "Uzun gagalı klasik plague doctor maskesi, deri görünümlü boya.",
    shape: "mask",
    hue: 30,
    tags: ["Cosplay", "Halloween"],
    material: "PLA+",
    size: "Yetişkin standart",
  },
  {
    slug: "kurukafa-maskesi",
    name: "Kurukafa Maskesi",
    category: "maskeler",
    short: "Anatomik detaylı kafatası maskesi; mat siyah veya kemik beyazı.",
    shape: "mask",
    hue: 45,
    tags: ["Halloween", "Tam yüz"],
    material: "PLA+",
  },
  {
    slug: "samuray-menpo",
    name: "Samuray Menpo Maskesi",
    category: "maskeler",
    short: "Metal dokulu boya ile bitirilen geleneksel samuray yüzlüğü.",
    shape: "mask",
    hue: 20,
    tags: ["Cosplay", "Metal efekt"],
    material: "PLA+",
  },
  {
    slug: "venedik-balo-maskesi",
    name: "Venedik Balo Maskesi",
    category: "maskeler",
    short: "Filigran desenli, altın ve gümüş varak seçenekli balo maskesi.",
    shape: "mask",
    hue: 48,
    tags: ["Davet", "Yarım yüz"],
    material: "Reçine",
  },
  {
    slug: "robot-kask-maskesi",
    name: "Robot Kask Maskesi",
    category: "maskeler",
    short: "Panelli sci-fi kask; vizör camı ve iç süngerle birlikte gelir.",
    shape: "mask",
    hue: 210,
    tags: ["Sci-fi", "Kask"],
    material: "PLA+ / ABS",
  },
  {
    slug: "kabuki-maskesi",
    name: "Kabuki Tiyatro Maskesi",
    category: "maskeler",
    short: "Sahne ve duvar dekoru için abartılı hatlı kabuki yüzü.",
    shape: "mask",
    hue: 350,
    tags: ["Dekor", "Sahne"],
    material: "PLA+",
  },
  {
    slug: "avcı-maskesi",
    name: "Avcı Maskesi",
    category: "maskeler",
    short: "Film esinli, dokulu yüzey ve metalik bitişe sahip avcı maskesi.",
    shape: "mask",
    hue: 100,
    tags: ["Cosplay", "Koleksiyon"],
    material: "Reçine",
  },
  {
    slug: "anonim-maske",
    name: "Anonim Maske",
    category: "maskeler",
    short: "Klasik gülümseyen maske; protesto, parti ve fotoğraf çekimleri için.",
    shape: "mask",
    hue: 35,
    tags: ["Parti", "Tam yüz"],
    material: "PLA",
  },
  {
    slug: "cocuk-hayvan-maskeleri",
    name: "Çocuk Hayvan Maskeleri",
    category: "maskeler",
    short: "Aslan, tilki, kedi ve ayı; yumuşak kenarlı çocuk ölçüsü set.",
    shape: "mask",
    hue: 25,
    tags: ["Çocuk", "Set"],
    material: "PLA (gıdaya uygun renk)",
    size: "Çocuk",
  },

  // ───────────────────────── KUTULAR ─────────────────────────
  {
    slug: "gizli-bolmeli-kutu",
    name: "Gizli Bölmeli Puzzle Kutu",
    category: "kutular",
    short: "Doğru sırayla açılan mekanizmalı, sürprizli hediye kutusu.",
    shape: "box",
    hue: 275,
    tags: ["Mekanizma", "Hediye"],
    material: "PLA+",
    featured: true,
  },
  {
    slug: "mentese-taki-kutusu",
    name: "Menteşeli Takı Kutusu",
    category: "kutular",
    short: "Tek parça basılan, baskı sonrası montaj istemeyen menteşeli kutu.",
    shape: "box",
    hue: 320,
    tags: ["Tek parça", "Takı"],
    material: "PLA+",
    featured: true,
  },
  {
    slug: "voronoi-saklama-kutusu",
    name: "Voronoi Desenli Saklama Kutusu",
    category: "kutular",
    short: "Organik delikli desen; hem dekoratif hem fonksiyonel saklama.",
    shape: "box",
    hue: 165,
    tags: ["Dekoratif", "Desen"],
    material: "PLA+",
  },
  {
    slug: "modulr-istiflenebilir-kutu",
    name: "İstiflenebilir Modüler Kutu",
    category: "kutular",
    short: "Yan yana ve üst üste kilitlenen, büyüyebilen depolama sistemi.",
    shape: "box",
    hue: 200,
    tags: ["Modüler", "Atölye"],
    material: "PETG",
    featured: true,
  },
  {
    slug: "masaustu-cekmeceli-set",
    name: "Çekmeceli Masaüstü Organizer",
    category: "kutular",
    short: "Kalem, kart ve kablo için ayrı gözlü, çekmeceli masa düzenleyici.",
    shape: "box",
    hue: 220,
    tags: ["Ofis", "Çekmece"],
    material: "PLA+",
  },
  {
    slug: "kablo-duzenleyici-kutu",
    name: "Kablo Düzenleyici Kutu",
    category: "kutular",
    short: "Priz ve adaptörleri gizleyen havalandırmalı kablo kutusu.",
    shape: "box",
    hue: 195,
    tags: ["Ev", "Kablo"],
    material: "PETG (ısıya dayanıklı)",
  },
  {
    slug: "zar-kutusu",
    name: "Zar Kutusu (Dice Box)",
    category: "kutular",
    short: "Masa üstü oyuncular için keçe astarlı, mıknatıslı kapaklı kutu.",
    shape: "box",
    hue: 260,
    tags: ["Oyun", "Mıknatıslı"],
    material: "PLA+",
  },
  {
    slug: "teklif-yuzuk-kutusu",
    name: "Teklif & Yüzük Kutusu",
    category: "kutular",
    short: "İsme özel yazı işlenebilen, kadife iç dolgulu özel gün kutusu.",
    shape: "box",
    hue: 345,
    tags: ["Kişiye özel", "Özel gün"],
    material: "Reçine",
  },
  {
    slug: "elektronik-parca-kutusu",
    name: "Elektronik Parça Kutusu",
    category: "kutular",
    short: "Direnç, vida ve küçük parçalar için bölmeli, etiketli organizer.",
    shape: "box",
    hue: 150,
    tags: ["Atölye", "Bölmeli"],
    material: "PLA+",
  },
  {
    slug: "geometrik-hediye-kutusu",
    name: "Geometrik Hediye Kutusu",
    category: "kutular",
    short: "Düşük poligonlu yüzeyler, kurdele geçişi için hazır kanallar.",
    shape: "box",
    hue: 15,
    tags: ["Hediye", "Dekoratif"],
    material: "PLA",
  },
  {
    slug: "vidali-kapakli-kavanoz",
    name: "Vidalı Kapaklı Kavanoz",
    category: "kutular",
    short: "Sızdırmaz dişli kapak; baharat, vida veya hobi malzemesi için.",
    shape: "box",
    hue: 40,
    tags: ["Vidalı", "Mutfak/Atölye"],
    material: "PETG",
  },
  {
    slug: "kartvizit-kutusu",
    name: "Kartvizit & Kart Kutusu",
    category: "kutular",
    short: "Logo kabartmalı, masaüstü kartvizitlik ve kart saklama kutusu.",
    shape: "box",
    hue: 210,
    tags: ["Kurumsal", "Logolu"],
    material: "PLA+",
  },

  // ───────────────────────── OYUNCAKLAR ─────────────────────────
  {
    slug: "pinch-ball",
    name: "Pinch Ball",
    category: "oyuncaklar",
    short:
      "Avuç içinde sıkıldıkça açılıp kapanan, stres atmaya birebir fidget küre.",
    description:
      "Pinch Ball, tek parça olarak basılan ve montaj gerektirmeyen bir fidget oyuncağıdır. Sıktığınızda petal yapısı içeri kapanır, bıraktığınızda geri açılır; bu tekrarlayan hareket dikkat toplama ve stres atma için kullanılır. Kenarları yumuşatılmıştır, keskin köşe bırakmaz. Farklı boyut ve renk seçenekleriyle üretilir.",
    shape: "ball",
    hue: 28,
    tags: ["Fidget", "Stres atma", "Tek parça"],
    material: "PLA+ / TPU seçenekli",
    size: "S · M · L",
    featured: true,
    hasPage: true,
  },
  {
    slug: "ikinci-oyuncak",
    name: "Yeni Oyuncak",
    category: "oyuncaklar",
    short: "Yeni tasarımımız üretim hattında — görseller ve detaylar çok yakında.",
    description:
      "Bu ürünün tasarımı tamamlandı, üretim ve fotoğraf çekimi aşamasında. Detaylar hazır olduğunda bu sayfa güncellenecek.",
    shape: "figure",
    hue: 280,
    tags: ["Yakında"],
    featured: true,
    hasPage: true,
    comingSoon: true,
  },
  {
    slug: "artikulasyonlu-ejderha",
    name: "Artikülasyonlu Ejderha",
    category: "oyuncaklar",
    short: "Onlarca oynar eklemli, tek seferde basılan esnek ejderha figürü.",
    shape: "figure",
    hue: 140,
    tags: ["Flexi", "Koleksiyon"],
    material: "PLA+",
  },
  {
    slug: "flexi-kedi",
    name: "Flexi Kedi",
    category: "oyuncaklar",
    short: "Kıvrılıp bükülen sevimli kedi; masa üstü ve çanta arkadaşı.",
    shape: "figure",
    hue: 300,
    tags: ["Flexi", "Hediyelik"],
    material: "PLA+",
  },
  {
    slug: "sonsuz-kup",
    name: "Sonsuz Küp",
    category: "oyuncaklar",
    short: "Katlandıkça yeni yüz gösteren, elde durmayan infinity cube.",
    shape: "gear",
    hue: 250,
    tags: ["Fidget", "Mekanizma"],
    material: "PLA+",
  },
  {
    slug: "disli-fidget",
    name: "Dişli Fidget Küp",
    category: "oyuncaklar",
    short: "Birbirine geçen dişlilerle dönen, sessiz çalışan masa oyuncağı.",
    shape: "gear",
    hue: 180,
    tags: ["Fidget", "Dişli"],
    material: "PLA+",
  },
  {
    slug: "flexi-yilan",
    name: "Flexi Yılan",
    category: "oyuncaklar",
    short: "Uzayıp kıvrılan segmentli yılan; çocuklar için en sevilen baskı.",
    shape: "figure",
    hue: 90,
    tags: ["Flexi", "Çocuk"],
    material: "PLA+",
  },
  {
    slug: "bulmaca-kupu",
    name: "3D Bulmaca Küpü",
    category: "oyuncaklar",
    short: "Parçaları birbirine kilitlenen ahşap benzeri bulmaca seti.",
    shape: "gear",
    hue: 35,
    tags: ["Bulmaca", "Zeka"],
    material: "Ahşap dolgulu PLA",
  },

  // ───────────────────────── DEKOR ─────────────────────────
  {
    slug: "spiral-vazo",
    name: "Spiral Vazo",
    category: "dekor",
    short: "Tek duvar tekniğiyle basılan, ışığı kıran burgu desenli vazo.",
    shape: "vase",
    hue: 170,
    tags: ["Vazo", "Spiral"],
    material: "PLA (ipeksi)",
    featured: true,
  },
  {
    slug: "isme-ozel-tabela",
    name: "İsme Özel Tabela",
    category: "dekor",
    short: "Kapı, ofis ve etkinlik için kabartma yazılı kişiye özel tabela.",
    shape: "part",
    hue: 210,
    tags: ["Kişiye özel", "Kabartma"],
    material: "PLA+",
  },
  {
    slug: "ay-lambasi",
    name: "Ay Lambası",
    category: "dekor",
    short: "Gerçek yüzey haritasından üretilen, içten aydınlatmalı ay küresi.",
    shape: "ball",
    hue: 45,
    tags: ["Aydınlatma", "Gece lambası"],
    material: "Beyaz PLA",
    featured: true,
  },
  {
    slug: "litofani-fotograf",
    name: "Litofani Fotoğraf Çerçevesi",
    category: "dekor",
    short: "Işık vurunca fotoğrafınızın çıktığı kalınlık haritalı baskı.",
    shape: "part",
    hue: 30,
    tags: ["Kişiye özel", "Hediye"],
    material: "Beyaz PLA",
  },
  {
    slug: "geometrik-duvar-paneli",
    name: "Geometrik Duvar Paneli",
    category: "dekor",
    short: "Tekrarlayan modüllerle istediğiniz genişlikte büyüyen duvar kaplaması.",
    shape: "part",
    hue: 195,
    tags: ["Modüler", "Duvar"],
    material: "PLA+",
  },
  {
    slug: "saksi-seti",
    name: "Geometrik Saksı Seti",
    category: "dekor",
    short: "Alt tablalı, sızdırmaz üç parçalı sukulent saksı seti.",
    shape: "vase",
    hue: 120,
    tags: ["Bitki", "Set"],
    material: "PETG",
  },
  {
    slug: "anahtarlik-koleksiyonu",
    name: "Kişiye Özel Anahtarlık",
    category: "dekor",
    short: "İsim, logo veya plaka yazılı, çift renkli baskı anahtarlıklar.",
    shape: "keychain",
    hue: 15,
    tags: ["Promosyon", "Çift renk"],
    material: "PLA+",
  },
  {
    slug: "masaustu-figur-standi",
    name: "Masaüstü Figür Standı",
    category: "dekor",
    short: "Koleksiyon figürleri ve telefon için kademeli sergileme standı.",
    shape: "part",
    hue: 260,
    tags: ["Stand", "Koleksiyon"],
    material: "PLA+",
  },

  // ───────────────────────── ENDÜSTRİYEL ─────────────────────────
  {
    slug: "yedek-parca-uretimi",
    name: "Bulunamayan Yedek Parça",
    category: "endustriyel",
    short: "Kırılan parçanın ölçüsünü alıp aynısını üretiyoruz; numune yeterli.",
    shape: "part",
    hue: 200,
    tags: ["Tersine mühendislik", "Tek parça"],
    material: "PETG / ABS / Naylon",
    featured: true,
  },
  {
    slug: "fonksiyonel-prototip",
    name: "Fonksiyonel Prototip",
    category: "endustriyel",
    short: "Seri üretime geçmeden önce çalışır durumda test parçası üretimi.",
    shape: "gear",
    hue: 220,
    tags: ["Ar-Ge", "Hızlı üretim"],
    material: "PETG / Naylon",
    featured: true,
  },
  {
    slug: "montaj-aparati",
    name: "Montaj Aparatı & Jig",
    category: "endustriyel",
    short: "Üretim hattında işi hızlandıran özel ölçü şablonları ve tutucular.",
    shape: "part",
    hue: 35,
    tags: ["Üretim hattı", "Özel ölçü"],
    material: "Karbon katkılı naylon",
  },
  {
    slug: "mimari-maket",
    name: "Mimari Maket",
    category: "endustriyel",
    short: "Proje sunumları için ölçekli bina, arazi ve kat planı maketleri.",
    shape: "box",
    hue: 190,
    tags: ["Mimari", "Ölçekli"],
    material: "PLA / Reçine",
  },
  {
    slug: "kalip-ve-form",
    name: "Kalıp & Form",
    category: "endustriyel",
    short: "Silikon, beton ve reçine döküm için negatif kalıp üretimi.",
    shape: "box",
    hue: 280,
    tags: ["Döküm", "Kalıp"],
    material: "PETG / Reçine",
  },
  {
    slug: "makine-muhafazasi",
    name: "Makine Muhafazası",
    category: "endustriyel",
    short: "Elektronik kart, sensör ve kontrol ünitesi için özel kutu üretimi.",
    shape: "box",
    hue: 160,
    tags: ["Elektronik", "Muhafaza"],
    material: "ABS / PETG",
  },
  {
    slug: "promosyon-urunleri",
    name: "Kurumsal Promosyon Ürünleri",
    category: "endustriyel",
    short: "Logolu stand, masa seti ve hediyelik; adetli üretime uygun.",
    shape: "keychain",
    hue: 25,
    tags: ["Kurumsal", "Adetli"],
    material: "PLA+",
  },
  {
    slug: "3d-tarama",
    name: "3D Tarama & Modelleme",
    category: "endustriyel",
    short: "Elinizdeki parçayı tarayıp dijital modele çeviriyor, sonra basıyoruz.",
    shape: "gear",
    hue: 300,
    tags: ["Tarama", "CAD"],
  },
];

// ───────────────────────── Yardımcılar ─────────────────────────

export const getCategory = (id: CategoryId) =>
  categories.find((c) => c.id === id);

export const productsByCategory = (id: CategoryId) =>
  products.filter((p) => p.category === id);

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const toyProducts = () => productsByCategory("oyuncaklar");

export const toyPages = () => toyProducts().filter((p) => p.hasPage);

export const featuredProducts = () => products.filter((p) => p.featured);

export const otherCategories = () =>
  categories.filter((c) => c.division === "diger");

export const stats = [
  { value: "40+", label: "Katalog ürünü" },
  { value: "0.1 mm", label: "Katman hassasiyeti" },
  { value: "48 saat", label: "Numune süresi" },
  { value: "1 – 5.000", label: "Adet aralığı" },
];
