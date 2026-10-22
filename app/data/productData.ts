export interface ProductImageItem {
  src: string;
  alt: string;
}

export interface ProductDeliveryOption {
  id: string;
  type: "pickup" | "courier" | "dhl";
  title: string;
  subtitle: string;
  eta?: string;
  cost: string;
  isFree?: boolean;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface SpecCategory {
  category: string;
  icon: "overview" | "processor" | "ram" | "storage" | "video-card" | "connectivity" | "general";
  items: SpecItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  reply?: {
    author: string;
    date: string;
    content: string;
  };
}

export interface RelatedProductItem {
  id: string;
  title: string;
  category: string;
  price: number;
  slug: string;
  image: string;
  hoverImage?: string;
}

export interface NavProductItem {
  name: string;
  slug: string;
  price: number;
  image: string;
}

export interface SingleProductDetails {
  id: string | number;
  name: string;
  slug: string;
  sku: string;
  price: number;
  regularPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  breadcrumbs: { label: string; href: string }[];
  navPrev?: NavProductItem;
  navNext?: NavProductItem;
  images: ProductImageItem[];
  deliveryOptions: ProductDeliveryOption[];
  description: string;
  specifications: SpecCategory[];
  reviews: ReviewItem[];
  relatedProducts: RelatedProductItem[];
}

export const acerConceptDData: SingleProductDetails = {
  id: "1153",
  name: "ACER ConceptD CT300",
  slug: "acer-conceptd-ct300",
  sku: "30944",
  price: 1199.00,
  rating: 5.0,
  reviewCount: 1,
  inStock: true,
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Laptops, Tablets & PCs", href: "/product-category/laptops-tablets-pcs" },
    { label: "PCs", href: "/product-category/pcs" },
    { label: "Office PCs", href: "/product-category/office-pcs" },
    { label: "ACER ConceptD CT300", href: "/product/acer-conceptd-ct300" },
  ],
  navPrev: {
    name: "DELL XPS DT",
    slug: "dell-xps-dt",
    price: 899.00,
    image: "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/dell-xps-dt-1-1-150x150.jpg",
  },
  navNext: {
    name: "Apple Mac mini М1",
    slug: "apple-mac-mini-m1",
    price: 700.00,
    image: "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/apple-mac-mini-m1-1-150x150.jpg.webp",
  },
  images: [
    {
      src: "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-conceptd-ct300-1.jpg",
      alt: "ACER ConceptD CT300 - Image 1",
    },
    {
      src: "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-conceptd-ct300-2.jpg",
      alt: "ACER ConceptD CT300 - Image 2",
    },
    {
      src: "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-conceptd-ct300-3.jpg",
      alt: "ACER ConceptD CT300 - Image 3",
    },
    {
      src: "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-conceptd-ct300-4.jpg",
      alt: "ACER ConceptD CT300 - Image 4",
    },
  ],
  deliveryOptions: [
    {
      id: "pickup",
      type: "pickup",
      title: "Pick up from the Woodmart Store",
      subtitle: "To pick up today",
      cost: "Free",
      isFree: true,
    },
    {
      id: "courier",
      type: "courier",
      title: "Courier delivery",
      subtitle: "Our courier will deliver to the specified address",
      eta: "2-3 Days",
      cost: "From $40",
    },
    {
      id: "dhl",
      type: "dhl",
      title: "DHL Courier delivery",
      subtitle: "DHL courier will deliver to the specified address",
      eta: "1-2 Days",
      cost: "From $40",
    },
  ],
  description:
    "In September 2023, Apple released the new iPhone 15 Pro Max. Strong and lightweight titanium body with new contoured edges, new Action button, powerful updated cameras and A17 Pro processor for a new level of productivity and mobile gaming. The device received a large bright display. iPhone 15 Pro has a durable and lightweight aerospace titanium body and textured frosted glass back. It is equipped with a Ceramic Shield front panel, which is stronger than the glass of any smartphone. In addition, iPhone 15 Pro is protected against splashes, water and dust.¹",
  specifications: [
    {
      category: "Overview",
      icon: "overview",
      items: [
        { label: "Model", value: "ConceptD CT300" },
        { label: "Operating system", value: "Windows 11" },
        { label: "Material", value: "Metal" },
      ],
    },
    {
      category: "Processor",
      icon: "processor",
      items: [
        { label: "Processor", value: "Intel Core i7" },
        { label: "Number of processor cores", value: "8-core" },
      ],
    },
    {
      category: "RAM",
      icon: "ram",
      items: [
        { label: "RAM", value: "16GB" },
        { label: "Type of RAM", value: "DDR4" },
      ],
    },
    {
      category: "Storage",
      icon: "storage",
      items: [{ label: "Storage", value: "512GB SSD" }],
    },
    {
      category: "Video Card",
      icon: "video-card",
      items: [
        { label: "Graphics", value: "Discreet" },
        { label: "Graphics series", value: "NVIDIA RTX 3070" },
      ],
    },
    {
      category: "Connectivity",
      icon: "connectivity",
      items: [
        { label: "Wi-Fi", value: "Wi-Fi 6" },
        { label: "Ethernet", value: "Gigabit Ethernet" },
        { label: "Bluetooth", value: "Bluetooth 5.0" },
        {
          label: "USB",
          value: "USB 2.0 x 4, USB 3.0 x 2, USB 3.1 x 2, USB Type-C x 1",
        },
        {
          label: "Video connections",
          value:
            "DisplayPort 1.4 x 1, DVI-D x 1, HDMI 2.0 x 1, HDMI x 1, Thunderbolt 4×3",
        },
        { label: "Audio connections", value: "3.5 мм mini-jack" },
      ],
    },
    {
      category: "General",
      icon: "general",
      items: [
        { label: "Color", value: "White" },
        { label: "Weight", value: "6.31 kg" },
        { label: "Demensions", value: "337 x 155 x 297.3 mm" },
        { label: "Material", value: "Metal" },
        { label: "Release years", value: "2021" },
      ],
    },
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Ema Norton",
      date: "October 31, 2025",
      rating: 5,
      content:
        "Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we’d like our layouts and designs to be filled with real words, with thoughts that count, information that has value.",
      reply: {
        author: "Mr. Mackay",
        date: "October 31, 2025",
        content:
          "Or else, an alternative route: set checkpoints, networks, processes, junctions between content and layout. Depending on the state of affairs it may be fine to concentrate either on design or content, reversing gears when needed.",
      },
    },
  ],
  relatedProducts: [
    {
      id: "1154",
      title: "Apple Mac mini М1",
      category: "Office PCs",
      price: 700.0,
      slug: "apple-mac-mini-m1",
      image:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/apple-mac-mini-m1-1-430x491.jpg.webp",
      hoverImage:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/apple-mac-mini-m1-2-430x491.jpg.webp",
    },
    {
      id: "1150",
      title: "Asus ExpertCenter D5",
      category: "Office PCs",
      price: 450.0,
      slug: "asus-expertcenter-d5",
      image:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/asus-expertcenter-d5-1-430x491.jpg.webp",
      hoverImage:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/asus-expertcenter-d5-2-430x491.jpg.webp",
    },
    {
      id: "1153-rel",
      title: "DELL XPS DT",
      category: "Office PCs",
      price: 899.0,
      slug: "dell-xps-dt",
      image:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/dell-xps-dt-1-1-430x491.jpg.webp",
      hoverImage:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/dell-xps-dt-2-430x491.jpg.webp",
    },
    {
      id: "1151",
      title: "HP ProDesk",
      category: "Office PCs",
      price: 679.0,
      slug: "hp-prodesk",
      image:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/hp-prodesk-1-430x491.jpg.webp",
      hoverImage:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/apple-mac-mini-m1-2-430x491.jpg.webp",
    },
    {
      id: "1156",
      title: "Huawei MateStation S",
      category: "Office PCs",
      price: 649.0,
      slug: "huawei-matestation-s",
      image:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/huawei-matestation-s-1-430x491.jpg.webp",
      hoverImage:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/asus-expertcenter-d5-2-430x491.jpg.webp",
    },
    {
      id: "1155",
      title: "INTEL NUC",
      category: "Office PCs",
      price: 550.0,
      slug: "intel-nuc",
      image:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/intel-nuc-1-430x491.jpg.webp",
      hoverImage:
        "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/dell-xps-dt-2-430x491.jpg.webp",
    },
  ],
};

export interface WooAttribute {
  name: string;
  options: string[] | string;
}

export interface WooProductInput {
  id?: string | number;
  name?: string;
  slug?: string;
  sku?: string;
  price?: number | string;
  regular_price?: number | string;
  average_rating?: number | string;
  rating_count?: number | string;
  stock_status?: string;
  description?: string;
  categories?: { id?: number; name?: string; slug?: string }[];
  images?: { src: string; alt?: string }[];
  attributes?: WooAttribute[];
}

/**
 * Resolves full product details:
 * Uses wooProduct data when available, merging with rich specs and Woodmart layout,
 * or returns acerConceptDData for 'acer-conceptd-ct300' and other slugs.
 */
export function getProductDetails(slug: string, wooProduct?: WooProductInput | null): SingleProductDetails {
  if (!wooProduct || slug === "acer-conceptd-ct300") {
    return acerConceptDData;
  }

  const rawImages = Array.isArray(wooProduct.images) ? wooProduct.images : [];
  const images: ProductImageItem[] = rawImages.length > 0
    ? rawImages.map((img) => ({
        src: img.src,
        alt: img.alt || wooProduct.name || "",
      }))
    : acerConceptDData.images;

  const categoryName = wooProduct.categories?.[0]?.name || "Electronics";
  const categorySlug = wooProduct.categories?.[0]?.slug || "electronics";

  // Parse attributes if present
  let specifications = acerConceptDData.specifications;
  if (Array.isArray(wooProduct.attributes) && wooProduct.attributes.length > 0) {
    const customItems: SpecItem[] = wooProduct.attributes.map((attr) => ({
      label: attr.name,
      value: Array.isArray(attr.options) ? attr.options.join(", ") : String(attr.options || ""),
    }));
    specifications = [
      {
        category: "Overview",
        icon: "overview",
        items: customItems.slice(0, 3),
      },
      ...acerConceptDData.specifications.slice(1),
    ];
  }

  // Parse HTML description
  let cleanDesc = acerConceptDData.description;
  if (wooProduct.description) {
    cleanDesc = wooProduct.description.replace(/<[^>]*>?/gm, "").trim() || acerConceptDData.description;
  }

  return {
    id: wooProduct.id || acerConceptDData.id,
    name: wooProduct.name || acerConceptDData.name,
    slug: wooProduct.slug || slug,
    sku: wooProduct.sku || (wooProduct.id ? `SKU-${wooProduct.id}` : acerConceptDData.sku),
    price: Number(wooProduct.price) || acerConceptDData.price,
    regularPrice: wooProduct.regular_price ? Number(wooProduct.regular_price) : undefined,
    rating: Number(wooProduct.average_rating) || 5.0,
    reviewCount: Number(wooProduct.rating_count) || 1,
    inStock: wooProduct.stock_status !== "outofstock",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: categoryName, href: `/product-category/${categorySlug}` },
      { label: wooProduct.name || acerConceptDData.name, href: `/product/${slug}` },
    ],
    navPrev: acerConceptDData.navPrev,
    navNext: acerConceptDData.navNext,
    images,
    deliveryOptions: acerConceptDData.deliveryOptions,
    description: cleanDesc,
    specifications,
    reviews: acerConceptDData.reviews,
    relatedProducts: acerConceptDData.relatedProducts,
  };
}
