import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "awor-01",
    modelCode: "AWOR 01",
    name: "AWOR 01 - OMUZ ÇANTASI",
    category: "OMUZ ÇANTASI",
    price: 2450,
    formattedPrice: "2.450,00 TL",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1400&auto=format&fit=crop",
    ],
    colors: [
      { name: "Siyah", hex: "#0A0A0A" },
      { name: "Kemik", hex: "#E8E4DC" },
      { name: "Koyu Kahve", hex: "#3B2A1E" },
    ],
    description: "Sert formlu yapısal deri omuz çantası. Gizli mıknatıs kapama, ayarlanabilir askı.",
    dimensions: "28 x 16 x 8 cm",
    material: "%100 Dana Derisi",
  },
  {
    id: "okyo-01",
    modelCode: "OKYO 01",
    name: "OKYO 01 - TOTE ÇANTA",
    category: "TOTE ÇANTA",
    price: 3850,
    formattedPrice: "3.850,00 TL",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1400&auto=format&fit=crop",
    ],
    colors: [
      { name: "Siyah", hex: "#0A0A0A" },
      { name: "Taba", hex: "#7A4A33" },
    ],
    description: "Geometrik hatlara sahip hacimli deri tote. İç fermuarlı bölme ve metal koruma ayakları.",
    dimensions: "42 x 34 x 14 cm",
    material: "%100 Pürüzsüz Dana Derisi",
  },
  {
    id: "awor-02",
    modelCode: "AWOR 02",
    name: "AWOR 02 - MİNİ ÇANTA",
    category: "MİNİ ÇANTA",
    price: 1950,
    formattedPrice: "1.950,00 TL",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1400&auto=format&fit=crop",
    ],
    colors: [
      { name: "Siyah", hex: "#0A0A0A" },
      { name: "Krem", hex: "#DDD7CD" },
      { name: "Haki", hex: "#4B5143" },
    ],
    description: "Kompakt silüet, monokrom minimal kaplama. Çıkarılabilir omuz askısı.",
    dimensions: "19 x 13 x 6 cm",
    material: "%100 İnce Grenli Dana Derisi",
  },
  {
    id: "okyo-02",
    modelCode: "OKYO 02",
    name: "OKYO 02 - DERİ ÇANTA",
    category: "DERİ ÇANTA",
    price: 3200,
    formattedPrice: "3.200,00 TL",
    images: [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
    ],
    colors: [
      { name: "Siyah", hex: "#0A0A0A" },
      { name: "Füme", hex: "#5C5C5B" },
      { name: "Vizon", hex: "#8A7D71" },
    ],
    description: "Asimetrik kesim brutalist deri el ve omuz çantası. Mat gümüş kaplama metal aksam.",
    dimensions: "32 x 22 x 10 cm",
    material: "%100 Ham Kenar Dana Derisi",
  },
];
