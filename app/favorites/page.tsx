import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CartIcon,
  ChevronRightIcon,
  CompareIcon,
  EyeIcon,
  HeartIcon,
  StarRating,
  XIcon,
} from "@app/components/common/Icons";

export const metadata: Metadata = {
  title: "Favorites | Mosalam Store",
  description:
    "Your saved smartphones, computing hardware, and modern home essentials at Mosalam Store.",
};

interface FavoriteItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  stockLabel: string;
  addedDate: string;
  image: string;
}

const STATIC_FAVORITES: FavoriteItem[] = [
  {
    id: "fav-1",
    name: "ACER ConceptD CT300 Workstation",
    slug: "acer-conceptd-ct300",
    category: "PC & Components",
    price: 1199.0,
    oldPrice: 1349.0,
    rating: 5.0,
    stockLabel: "In Stock",
    addedDate: "Saved Nov 18",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-conceptd-ct300-1-430x491.jpg.webp",
  },
  {
    id: "fav-2",
    name: "Thrustmaster TS-XW Racer Wheel",
    slug: "thrustmaster-ts-xw-racer",
    category: "Gaming Gear",
    price: 899.0,
    oldPrice: 999.0,
    rating: 4.9,
    stockLabel: "Low Stock",
    addedDate: "Saved Nov 15",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/thrustmaster-ts-xw-racer-1-430x491.jpg.webp",
  },
  {
    id: "fav-3",
    name: "Acer Predator Helios 300",
    slug: "acer-predator-helios-300",
    category: "Laptops",
    price: 1600.0,
    rating: 5.0,
    stockLabel: "In Stock",
    addedDate: "Saved Nov 12",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-predator-helios-300-1-430x491.jpg.webp",
  },
  {
    id: "fav-4",
    name: "Apacer NVMe M.2 Pro SSD",
    slug: "apacer-nvme-m-2",
    category: "Storage",
    price: 130.0,
    rating: 4.8,
    stockLabel: "In Stock",
    addedDate: "Saved Nov 09",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/apacer-nvme-m-2-1-430x491.jpg.webp",
  },
  {
    id: "fav-5",
    name: "ACER Veriton Z2740G All-in-One",
    slug: "acer-veriton-z2740g",
    category: "Desktops",
    price: 1150.0,
    oldPrice: 1290.0,
    rating: 4.9,
    stockLabel: "In Stock",
    addedDate: "Saved Nov 06",
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-veriton-z2740g-1-430x491.jpg.webp",
  },
];

export default function FavoritesPage() {
  return (
    <div className="min-h-dvh bg-[#FAF9F6] text-[#18181B]">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[#57534E] mb-6"
        >
          <Link href="/" className="hover:text-[#0F3D3E] transition-colors">
            Home
          </Link>
          <span className="text-[#E5E0D8]">/</span>
          <span className="text-[#18181B] font-semibold">Favorites</span>
        </nav>

        {/* Main 2-Column Layout: Left Sidebar + Right Products Area */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Left Sidebar: Your Favorites */}
          <aside className="w-full lg:w-[270px] xl:w-[285px] shrink-0 lg:sticky lg:top-28">
            <div className="bg-[#F2EFE9]/85 border border-[#E5E0D8] rounded-3xl p-5 sm:p-6 space-y-5">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-[#E85D3F] rounded-full" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F3D3E]">
                    Saved Collection
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                    Your Favorites
                  </h1>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#E5E0D8] text-[11px] font-bold text-[#0F3D3E] tabular-nums shrink-0">
                    <HeartIcon className="w-3 h-3 text-[#E85D3F] fill-[#E85D3F]" />
                    <span>{STATIC_FAVORITES.length}</span>
                  </span>
                </div>

                <p className="text-xs text-[#57534E] leading-relaxed">
                  Keep your favorite hardware and home essentials organized in
                  one place.
                </p>
              </div>

              {/* Static Action Buttons */}
              <div className="space-y-2.5 pt-3 border-t border-[#E5E0D8]">
                <button
                  type="button"
                  className="w-full min-h-11 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#E85D3F] hover:bg-[#D1492B] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <CartIcon className="w-4 h-4" />
                  <span>Move All to Bag</span>
                </button>
                <button
                  type="button"
                  className="w-full min-h-10 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF9F6] border border-[#E5E0D8] hover:border-[#0F3D3E] text-xs font-semibold text-[#18181B] transition-all active:scale-[0.98] cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            </div>
          </aside>

          {/* Right Area: Filter Bar + 5-Column Grid or Empty State */}
          <div className="flex-1 w-full min-w-0">
            {/* Top Right Filter & Price Sort Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#E5E0D8]">
              <span className="text-xs font-medium text-[#57534E] tabular-nums">
                Showing{" "}
                <strong className="text-[#18181B]">
                  {STATIC_FAVORITES.length}
                </strong>{" "}
                saved items
              </span>

              {/* Right-Aligned Price & Sort Controls */}
              <div className="flex flex-wrap items-center justify-end gap-2.5 sm:ms-auto">
                {/* Price Range Filter Dropdown */}
                <div className="relative">
                  <select
                    aria-label="Filter by price"
                    defaultValue="all"
                    className="appearance-none min-h-10 bg-white border border-[#E5E0D8] rounded-xl ps-3.5 pe-8 py-2 text-xs text-[#18181B] font-semibold cursor-pointer outline-none hover:border-[#0F3D3E] focus:border-[#0F3D3E] transition-colors"
                  >
                    <option value="all">Price: All</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1200">$500 – $1,200</option>
                    <option value="over-1200">Over $1,200</option>
                  </select>
                  <div className="pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 text-[#57534E]">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    aria-label="Sort favorites"
                    defaultValue="latest"
                    className="appearance-none min-h-10 bg-white border border-[#E5E0D8] rounded-xl ps-3.5 pe-8 py-2 text-xs text-[#18181B] font-semibold cursor-pointer outline-none hover:border-[#0F3D3E] focus:border-[#0F3D3E] transition-colors"
                  >
                    <option value="latest">Sort by: Recently Saved</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <div className="pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 text-[#57534E]">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid OR Empty Favorites State */}
            {STATIC_FAVORITES.length === 0 ? (
              <section
                aria-label="Empty favorites state"
                className="bg-white border border-[#E5E0D8] rounded-3xl px-6 py-16 sm:py-24 flex flex-col items-center justify-center text-center"
              >
                {/* Centered Illustration Emblem */}
                <div className="relative mb-6 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-[#F2EFE9] border border-[#E5E0D8] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-[#E5E0D8] shadow-xs flex items-center justify-center">
                      <HeartIcon className="w-8 h-8 text-[#E85D3F]" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -end-1 w-7 h-7 rounded-full bg-[#0F3D3E] text-[#F4A261] text-xs font-bold flex items-center justify-center shadow-xs tabular-nums">
                    0
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F3D3E] mb-2">
                  Wishlist Empty
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight mb-2">
                  You haven&apos;t saved any favorites yet
                </h2>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed mb-7">
                  Tap the heart icon on any smartphone, workstation, or home
                  appliance to save it here for later.
                </p>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 min-h-11 px-7 py-3 rounded-xl bg-[#E85D3F] hover:bg-[#D1492B] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all"
                >
                  <span>Explore Catalog</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </section>
            ) : (
              <section aria-label="Saved products grid">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {STATIC_FAVORITES.map((item) => {
                    const discountPercent =
                      item.oldPrice && item.oldPrice > item.price
                        ? Math.round(
                            ((item.oldPrice - item.price) / item.oldPrice) *
                              100,
                          )
                        : 0;

                    return (
                      <article
                        key={item.id}
                        className="group relative bg-white rounded-2xl border border-[#E5E0D8] p-3 flex flex-col justify-between hover:border-[#0F3D3E]/45 hover:shadow-[0_14px_32px_-12px_rgba(15,61,62,0.12)] transition-all duration-300 ease-out"
                      >
                        {/* Media Frame */}
                        <div className="relative w-full aspect-[4/5] bg-[#F2EFE9]/65 rounded-xl overflow-hidden mb-3">
                          <div className="absolute top-2 start-2 z-10 flex flex-col items-start gap-1 pointer-events-none">
                            {discountPercent > 0 && (
                              <span className="bg-[#E85D3F] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full tabular-nums">
                                -{discountPercent}%
                              </span>
                            )}
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                                item.stockLabel === "Low Stock"
                                  ? "bg-[#F4A261]/25 text-[#18181B] border-[#F4A261]/50"
                                  : "bg-[#FAF9F6]/95 text-[#0F3D3E] border-[#E5E0D8]"
                              }`}
                            >
                              {item.stockLabel}
                            </span>
                          </div>

                          <div className="absolute top-2 end-2 z-10 flex flex-col gap-1">
                            <button
                              type="button"
                              aria-label={`Remove ${item.name} from favorites`}
                              title="Remove from favorites"
                              className="w-8 h-8 rounded-full bg-white/95 border border-[#E5E0D8] text-[#E85D3F] hover:bg-[#E85D3F] hover:text-white hover:border-[#E85D3F] flex items-center justify-center shadow-xs transition-all active:scale-[0.95] cursor-pointer"
                            >
                              <XIcon className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              aria-label="Compare product"
                              title="Compare"
                              className="hidden sm:flex w-8 h-8 rounded-full bg-white/95 border border-[#E5E0D8] text-[#57534E] hover:text-[#0F3D3E] items-center justify-center shadow-xs sm:opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
                            >
                              <CompareIcon className="w-3.5 h-3.5" />
                            </button>
                            <Link
                              href={`/product/${item.slug}`}
                              aria-label="View product"
                              title="View product"
                              className="hidden sm:flex w-8 h-8 rounded-full bg-white/95 border border-[#E5E0D8] text-[#57534E] hover:text-[#0F3D3E] items-center justify-center shadow-xs sm:opacity-0 group-hover:opacity-100 transition-all duration-200"
                            >
                              <EyeIcon className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                          <Link
                            href={`/product/${item.slug}`}
                            className="relative w-full h-full flex items-center justify-center p-3"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={360}
                              height={400}
                              className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                          </Link>
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col flex-1 justify-between px-0.5">
                          <div>
                            <div className="flex items-center justify-between gap-1.5 text-[10px] text-[#57534E] mb-1">
                              <span className="font-medium truncate">
                                {item.category}
                              </span>
                              <span className="shrink-0">{item.addedDate}</span>
                            </div>

                            <Link
                              href={`/product/${item.slug}`}
                              className="block mb-2"
                            >
                              <h2 className="font-display text-xs sm:text-[13px] font-bold text-[#18181B] group-hover:text-[#0F3D3E] transition-colors line-clamp-2 leading-snug">
                                {item.name}
                              </h2>
                            </Link>
                          </div>

                          <div className="space-y-2.5 pt-2 border-t border-[#E5E0D8]/80">
                            <div className="flex items-center justify-between gap-1.5">
                              <div className="flex items-baseline gap-1.5 tabular-nums">
                                <span className="text-sm font-extrabold text-[#0F3D3E]">
                                  ${item.price.toFixed(0)}
                                </span>
                                {item.oldPrice && (
                                  <span className="text-[11px] text-[#57534E]/70 line-through">
                                    ${item.oldPrice.toFixed(0)}
                                  </span>
                                )}
                              </div>
                              <StarRating rating={item.rating} showNumber />
                            </div>

                            <button
                              type="button"
                              className="w-full min-h-10 px-3 py-2 rounded-xl bg-[#0F3D3E] hover:bg-[#E85D3F] active:scale-[0.98] text-[#FAF9F6] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                            >
                              <CartIcon className="w-3.5 h-3.5" />
                              <span>Move to Bag</span>
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Bottom Editorial Continue Shopping Banner */}
            <section className="mt-8 bg-[#0F3D3E] text-[#FAF9F6] rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#09292A]">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#F4A261]">
                  Mosalam Perks
                </span>
                <h2 className="font-display text-base sm:text-lg font-bold tracking-tight">
                  Complimentary express shipping unlocked on orders over $100
                </h2>
                <p className="text-xs text-[#FAF9F6]/75">
                  Every item includes official manufacturer warranty and 30-day
                  returns.
                </p>
              </div>

              <Link
                href="/shop"
                className="shrink-0 inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-xl bg-[#FAF9F6] hover:bg-[#E85D3F] text-[#18181B] hover:text-white text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.98]"
              >
                <span>Explore Catalog</span>
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
