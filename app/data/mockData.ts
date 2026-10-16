import { Product, Article, CategoryItem, Brand, DealItem } from "@app/types";

export const CATEGORIES_MENU: CategoryItem[] = [
  {
    id: "1",
    name: "Smartphones",
    slug: "smartphones",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-header-category-smartphones-accessories.png.webp",
  },
  {
    id: "2",
    name: "Laptops, Tablets & PCs",
    slug: "laptops-tablets-pcs",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-header-category-laptops-tablets.png.webp",
  },
  {
    id: "3",
    name: "PC Components",
    slug: "pc-components",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-header-category-pc-components.png.webp",
  },
  {
    id: "4",
    name: "Gaming",
    slug: "gaming",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-header-category-gaming.png.webp",
  },
  {
    id: "5",
    name: "Appliances",
    slug: "appliances",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-header-category-appliances.png.webp",
  },
  {
    id: "6",
    name: "TV & Audio",
    slug: "tv-audio",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-header-category-tv-audio.png.webp",
  },
  {
    id: "7",
    name: "Home & Outdoor",
    slug: "home-outdoor",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-header-category-home-outdoor.png.webp",
  },
  {
    id: "8",
    name: "Cameras",
    slug: "cameras",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-header-category-cameras.png.webp",
  },
];
export const BRANDS: Brand[] = [
  { id: "1", name: "acer" },
  { id: "2", name: "ALIENWARE" },
  { id: "3", name: "ЛОС" },
  { id: "4", name: "Apple" },
  { id: "5", name: "ASUS" },
  { id: "6", name: "BenQ" },
  { id: "7", name: "CORSAIR" },
];

export const BESTSELLER_PRODUCTS: Product[] = [
  {
    id: "bs-1",
    name: "Apple iPhone 15",
    category: "Smartphones",
    rating: 5.0,
    reviewsCount: 18,
    price: 799.0,
    imageUrl:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    tag: "New",
  },
  {
    id: "bs-2",
    name: "Apple iPhone 15 Plus",
    category: "Smartphones",
    rating: 5.0,
    reviewsCount: 24,
    price: 899.0,
    imageUrl:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bs-3",
    name: "Apple iPhone 15 Pro",
    category: "Smartphones",
    rating: 5.0,
    reviewsCount: 42,
    price: 999.0,
    imageUrl:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    tag: "Hot",
  },
  {
    id: "bs-4",
    name: "Apple iPhone 15 Pro Max",
    category: "Smartphones",
    rating: 5.0,
    reviewsCount: 56,
    price: 1199.0,
    imageUrl:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bs-5",
    name: "Apple iPhone 14",
    category: "Smartphones",
    rating: 5.0,
    reviewsCount: 89,
    price: 699.0,
    oldPrice: 799.0,
    imageUrl:
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=600&q=80",
    tag: "Sale",
  },
  {
    id: "bs-6",
    name: "Apple iPhone 14 Pro",
    category: "Smartphones",
    rating: 5.0,
    reviewsCount: 67,
    price: 899.0,
    imageUrl:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bs-7",
    name: "Nothing Phone (2)",
    category: "Smartphones",
    rating: 4.9,
    reviewsCount: 31,
    price: 599.0,
    imageUrl:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bs-8",
    name: "Samsung Galaxy S23",
    category: "Smartphones",
    rating: 4.8,
    reviewsCount: 45,
    price: 699.0,
    imageUrl:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bs-9",
    name: "Google Pixel 8 Pro",
    category: "Smartphones",
    rating: 4.9,
    reviewsCount: 39,
    price: 799.0,
    imageUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bs-10",
    name: "Xiaomi Redmi Note 13 Pro",
    category: "Smartphones",
    rating: 4.7,
    reviewsCount: 28,
    price: 369.0,
    oldPrice: 399.0,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    tag: "Sale",
  },
  {
    id: "bs-11",
    name: "Motorola Edge 40 Pro",
    category: "Smartphones",
    rating: 4.6,
    reviewsCount: 19,
    price: 599.0,
    imageUrl:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bs-12",
    name: "Nokia G42 5G",
    category: "Smartphones",
    rating: 4.5,
    reviewsCount: 14,
    price: 199.0,
    imageUrl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
  },
];

export const APPLIANCE_PRODUCTS: Product[] = [
  {
    id: "app-1",
    name: "Smeg Retro 2-Slice Toaster",
    category: "Ovens",
    rating: 4.9,
    reviewsCount: 12,
    price: 89.0,
    imageUrl:
      "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "app-2",
    name: "Panasonic Compact Microwave Oven",
    category: "Ovens",
    rating: 4.8,
    reviewsCount: 22,
    price: 149.0,
    imageUrl:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "app-3",
    name: "Braun MultiQuick Hand Blender White",
    category: "Blenders",
    rating: 4.9,
    reviewsCount: 18,
    price: 45.0,
    imageUrl:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "app-4",
    name: "Braun Immersion Blender Copper Edition",
    category: "Blenders",
    rating: 4.7,
    reviewsCount: 9,
    price: 59.0,
    imageUrl:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "app-5",
    name: "Haier Beverage Center & Wine Cooler",
    category: "Fridges",
    rating: 4.9,
    reviewsCount: 15,
    price: 320.0,
    imageUrl:
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "app-6",
    name: "NutriBullet Pro High-Speed Blender",
    category: "Blenders",
    rating: 4.8,
    reviewsCount: 34,
    price: 69.0,
    imageUrl:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80",
  },
];

export const LIMITED_OFFERS_ITEMS: DealItem[] = [
  {
    id: "deal-1",
    name: "Wireless Over-Ear Studio Headphones",
    category: "Audio",
    rating: 5.0,
    price: 75.0,
    oldPrice: 120.0,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "deal-2",
    name: "Compact RGB Mechanical Gaming Keyboard",
    category: "Gaming",
    rating: 5.0,
    price: 120.0,
    oldPrice: 160.0,
    imageUrl:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "deal-3",
    name: "Apple Watch Series 9 GPS 45mm",
    category: "Smartwatches",
    rating: 5.0,
    price: 399.0,
    oldPrice: 449.0,
    imageUrl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "deal-4",
    name: "Ergonomic Vertical Wireless Mouse",
    category: "Accessories",
    rating: 5.0,
    price: 49.0,
    oldPrice: 79.0,
    imageUrl:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "deal-5",
    name: "Anker 24,000mAh Ultra Fast Power Bank",
    category: "Accessories",
    rating: 5.0,
    price: 35.0,
    oldPrice: 55.0,
    imageUrl:
      "https://images.unsplash.com/photo-1609592807664-84642bf15024?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "deal-6",
    name: "EarFun Air Pro 3 ANC True Wireless Earbuds",
    category: "Audio",
    rating: 5.0,
    price: 59.0,
    oldPrice: 89.0,
    imageUrl:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80",
  },
];

export const GAMING_PRODUCTS: Product[] = [
  {
    id: "game-1",
    name: "Logitech G29 Driving Force Racing Wheel",
    category: "Wheels",
    rating: 4.9,
    reviewsCount: 47,
    price: 299.0,
    imageUrl:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "game-2",
    name: "Cyberpunk 2077: Phantom Liberty Edition",
    category: "Games",
    rating: 4.9,
    reviewsCount: 88,
    price: 49.0,
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "game-3",
    name: "Sony DualSense Wireless Controller PS5",
    category: "Controllers",
    rating: 5.0,
    reviewsCount: 112,
    price: 69.0,
    imageUrl:
      "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "game-4",
    name: "EA SPORTS FC 24 PlayStation 5 Standard",
    category: "Games",
    rating: 4.7,
    reviewsCount: 53,
    price: 39.0,
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "game-5",
    name: "FIFA 23 Ultimate Edition PlayStation 5",
    category: "Games",
    rating: 4.6,
    reviewsCount: 65,
    price: 29.0,
    imageUrl:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "game-6",
    name: "NBA 2K24 Kobe Bryant Edition PS5",
    category: "Games",
    rating: 4.7,
    reviewsCount: 39,
    price: 39.0,
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
  },
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Review of the new MacBook Pro on the powerful M3 chip series",
    date: { day: "14", month: "OCT" },
    category: "TECH NEWS",
    author: "Mr. Mackay",
    commentsCount: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "art-2",
    title: "What's New in PlayStation 5 Slim and Release Date",
    date: { day: "12", month: "OCT" },
    category: "GAMING",
    author: "Mr. Mackay",
    commentsCount: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "art-3",
    title: "Top 5 Most Powerful Vertical Vacuum Cleaners",
    date: { day: "08", month: "OCT" },
    category: "HOME",
    author: "Mr. Mackay",
    commentsCount: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "art-4",
    title: "How Do I Share Apple AirTag With Other Users?",
    date: { day: "02", month: "OCT" },
    category: "GADGETS",
    author: "Mr. Mackay",
    commentsCount: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
  },
];
