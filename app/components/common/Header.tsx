"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  SearchIcon,
  XIcon,
  UserIcon,
  HeartIcon,
  CompareIcon,
  CartIcon,
  ChevronDownIcon,
  MenuIcon,
  ChevronRightIcon,
} from "@app/components/common/Icons";
import { SearchResultsDropdown } from "@app/components/common/SearchResultsDropdown";
import { Category } from "@app/types/category";
import { usePathname, useRouter } from "next/navigation";

interface headerProps {
  categories?: Category[];
}

export const Header: React.FC<headerProps> = ({ categories = [] }) => {
  const roter = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const isShopPage = pathname === "/shop";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "") return;
    roter.push(`/product-category/${value.trim()}`);
  };

  const quickCategories = categories.slice(0, 7);
  const selectedCategory = pathname.startsWith("/product-category/")
    ? (pathname.split("/")[2] ?? "")
    : "";

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-[#FAF9F6]/92 backdrop-blur-md border-b border-[#E5E0D8]">
        {/* Editorial Top Utility Ribbon */}
        <div className="bg-[#0F3D3E] text-[#FAF9F6] text-[11px] sm:text-xs">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-6 py-1.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 truncate">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F4A261] shrink-0" />
              <span className="truncate font-medium tracking-wide">
                Complimentary express shipping on curated orders over{" "}
                <strong className="text-[#F4A261] font-semibold tabular-nums">
                  $100
                </strong>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-5 text-[#FAF9F6]/80 shrink-0">
              <Link
                href="/favorites"
                className="hover:text-white transition-colors duration-200 text-white"
              >
                Favorites
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Track Order
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Support
              </Link>
              <span className="h-3 w-px bg-[#FAF9F6]/20" aria-hidden="true" />
              <span className="text-[#FAF9F6] font-medium">EN / USD</span>
            </div>
          </div>
        </div>

        {/* Main Architectural Bar */}
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-3 lg:gap-6">
            {/* Brand Identity & Mobile Menu Trigger */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center min-w-11 min-h-11 rounded-xl border border-[#E5E0D8] bg-[#F2EFE9]/70 text-[#18181B] hover:border-[#0F3D3E] hover:text-[#0F3D3E] transition-all active:scale-[0.98] cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <XIcon className="w-5 h-5" />
                ) : (
                  <MenuIcon className="w-5 h-5" />
                )}
              </button>

              <Link
                href="/"
                className="flex items-center gap-2.5 group focus:outline-none"
              >
                <span className="w-9 h-9 rounded-xl bg-[#0F3D3E] text-[#FAF9F6] flex items-center justify-center font-display font-bold text-lg tracking-tighter shadow-xs group-hover:bg-[#E85D3F] transition-colors duration-300">
                  M
                </span>
                <div className="flex flex-col">
                  <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#18181B] leading-none flex items-center gap-1">
                    Mosalam
                    <span className="text-[#0F3D3E] font-medium">Store</span>
                  </span>
                  <span className="text-[10px] tracking-[0.14em] uppercase text-[#57534E] font-medium mt-0.5 hidden sm:block">
                    Modern Living &amp; Tech
                  </span>
                </div>
              </Link>
            </div>

            {/* Command-Style Integrated Search Bar */}
            <div
              className="relative flex-1 max-w-2xl hidden md:block"
              ref={searchRef}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="relative flex items-center"
              >
                <div className="relative w-full flex items-center rounded-2xl border border-[#E5E0D8] bg-[#F2EFE9]/65 focus-within:bg-white focus-within:border-[#0F3D3E] focus-within:ring-2 focus-within:ring-[#0F3D3E]/10 transition-all duration-200 overflow-hidden">
                  {/* Category Scope Selector */}
                  <div className="relative shrink-0 border-e border-[#E5E0D8] hidden sm:block">
                    <select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      aria-label="Filter search by category"
                      className="appearance-none bg-transparent text-xs font-semibold text-[#18181B] ps-4 pe-8 py-3 outline-none cursor-pointer hover:text-[#0F3D3E] transition-colors"
                    >
                      <option value="">All Departments</option>
                      {categories.map((cat) => (
                        <option value={cat.slug || cat.name} key={cat.id}>
                          {cat.name.replace(/&amp;/g, "&")}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="w-3.5 h-3.5 text-[#57534E] absolute end-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Search Input */}
                  <input
                    type="text"
                    placeholder="Search smartphones, audio, appliances..."
                    value={searchQuery}
                    onFocus={() => setIsSearchOpen(true)}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSearchOpen(true);
                    }}
                    className="w-full text-sm text-[#18181B] placeholder-[#57534E]/70 px-4 py-2.5 outline-none bg-transparent"
                  />

                  {/* Command Hint or Clear Button */}
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setIsSearchOpen(true);
                      }}
                      className="shrink-0 p-1.5 me-1 text-[#57534E] hover:text-[#18181B] rounded-lg transition-colors cursor-pointer"
                      aria-label="Clear search"
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  ) : (
                    <kbd className="hidden lg:inline-flex items-center gap-0.5 me-2 px-2 py-0.5 text-[10px] font-mono font-medium text-[#57534E] bg-white/80 border border-[#E5E0D8] rounded-md">
                      ⌘K
                    </kbd>
                  )}

                  {/* Search Submit CTA */}
                  <button
                    type="submit"
                    className="shrink-0 me-1.5 my-1 px-3.5 py-2 bg-[#0F3D3E] hover:bg-[#E85D3F] text-[#FAF9F6] rounded-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center cursor-pointer"
                    aria-label="Search"
                  >
                    <SearchIcon className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {isSearchOpen && (
                <SearchResultsDropdown
                  query={searchQuery}
                  onItemClick={() => setIsSearchOpen(false)}
                />
              )}
            </div>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <Link
                href="#"
                className="hidden sm:inline-flex items-center gap-2 min-h-11 px-2.5 py-1.5 rounded-xl text-[#18181B] hover:bg-[#F2EFE9] transition-colors group"
              >
                <UserIcon className="w-5 h-5 text-[#57534E] group-hover:text-[#0F3D3E] transition-colors" />
                <div className="hidden xl:flex flex-col text-start">
                  <span className="text-[10px] text-[#57534E] leading-none">
                    Account
                  </span>
                  <span className="text-xs font-semibold text-[#18181B] group-hover:text-[#0F3D3E] mt-0.5">
                    Sign In
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="relative inline-flex items-center justify-center min-w-11 min-h-11 rounded-xl text-[#57534E] hover:text-[#0F3D3E] hover:bg-[#F2EFE9] transition-colors"
                aria-label="Compare products"
              >
                <CompareIcon className="w-5 h-5" />
                <span className="absolute top-1.5 end-1.5 w-4 h-4 bg-[#E5E0D8] text-[10px] font-bold text-[#18181B] rounded-full flex items-center justify-center tabular-nums">
                  0
                </span>
              </Link>

              <Link
                href="#"
                className="relative inline-flex items-center justify-center min-w-11 min-h-11 rounded-xl text-[#57534E] hover:text-[#E85D3F] hover:bg-[#F2EFE9] transition-colors"
                aria-label="Wishlist"
              >
                <HeartIcon className="w-5 h-5" />
                <span className="absolute top-1.5 end-1.5 w-4 h-4 bg-[#F4A261]/25 text-[10px] font-bold text-[#18181B] rounded-full flex items-center justify-center tabular-nums">
                  0
                </span>
              </Link>

              {/* Tactile Slide-Over Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="inline-flex items-center gap-2.5 min-h-11 bg-[#0F3D3E] hover:bg-[#09292A] active:scale-[0.98] text-[#FAF9F6] ps-3.5 pe-4 py-2 rounded-xl transition-all duration-200 shadow-xs cursor-pointer"
                aria-label="Open shopping cart drawer"
              >
                <div className="relative">
                  <CartIcon className="w-4 h-4" />
                  <span className="absolute -top-2 -end-2 bg-[#E85D3F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                    0
                  </span>
                </div>
                <div className="hidden sm:flex flex-col text-start">
                  <span className="text-[10px] text-[#FAF9F6]/70 leading-none">
                    Bag
                  </span>
                  <span className="text-xs font-bold leading-tight tabular-nums">
                    $0.00
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Integrated Category Pill Strip (Desktop) */}
          {quickCategories.length > 0 && (
            <nav
              aria-label="Primary categories"
              className="hidden lg:flex items-center justify-between gap-4 mt-3 pt-2.5 border-t border-[#E5E0D8]/70"
            >
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                <Link
                  href="/shop"
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs transition-colors duration-200 ${
                    isShopPage
                      ? "font-semibold bg-[#0F3D3E] text-white"
                      : "font-medium text-[#57534E] hover:bg-[#F2EFE9]"
                  }`}
                >
                  <span>All Shop</span>
                </Link>
                {quickCategories.map((cat) => {
                  const href = `/product-category/${cat.slug}`;
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={cat.id}
                      href={`/product-category/${cat.slug}`}
                      className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs transition-colors duration-200 ${
                        isActive
                          ? "font-semibold bg-[#0F3D3E] text-white"
                          : "font-medium text-[#57534E] hover:text-[#0F3D3E] hover:bg-[#F2EFE9]"
                      }`}
                    >
                      {cat.name.replace(/&amp;/g, "&")}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/shop"
                className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#0F3D3E] hover:text-[#E85D3F] transition-colors"
              >
                <span>Explore Full Catalog</span>
                <ChevronRightIcon className="w-3.5 h-3.5" />
              </Link>
            </nav>
          )}

          {/* Mobile Search Bar */}
          <div className="mt-3 md:hidden relative">
            <div className="relative flex items-center rounded-xl border border-[#E5E0D8] bg-[#F2EFE9]/70 focus-within:bg-white focus-within:border-[#0F3D3E] transition-colors overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                className="w-full text-base sm:text-sm text-[#18181B] placeholder-[#57534E]/70 px-3.5 py-2.5 outline-none bg-transparent"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="shrink-0 p-2 text-[#57534E] hover:text-[#18181B]"
                  aria-label="Clear search"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                aria-label="Submit search"
                className="p-2.5 m-1 bg-[#0F3D3E] text-[#FAF9F6] rounded-lg"
              >
                <SearchIcon className="w-4 h-4" />
              </button>
            </div>
            {isSearchOpen && (
              <SearchResultsDropdown
                query={searchQuery}
                onItemClick={() => setIsSearchOpen(false)}
              />
            )}
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E0D8] bg-[#FAF9F6] px-4 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[11px] text-[#57534E] uppercase tracking-[0.14em]">
                Browse Departments
              </span>
              <Link
                href="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-[#0F3D3E] hover:text-[#E85D3F]"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[#18181B]">
              {(categories.length > 0
                ? categories
                : [
                    { id: 1, name: "Smartphones", slug: "smartphones" },
                    { id: 2, name: "Laptops & PCs", slug: "pc-components" },
                    { id: 3, name: "Appliances", slug: "appliances" },
                    { id: 4, name: "Shop All", slug: "" },
                  ]
              ).map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.slug ? `/product-category/${cat.slug}` : "/shop"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-11 px-3 py-2.5 rounded-xl bg-[#F2EFE9]/80 border border-[#E5E0D8] hover:border-[#0F3D3E] hover:text-[#0F3D3E] flex items-center justify-between transition-colors"
                >
                  <span className="truncate">
                    {cat.name.replace(/&amp;/g, "&")}
                  </span>
                  <ChevronRightIcon className="w-3.5 h-3.5 shrink-0 opacity-60" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Tactile Slide-Over Cart Drawer */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 z-50 bg-[#18181B]/45 backdrop-blur-xs transition-opacity duration-300 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Bag"
        className={`fixed inset-y-0 end-0 z-50 w-full max-w-md bg-[#FAF9F6] border-s border-[#E5E0D8] shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between ${
          isCartOpen
            ? "translate-x-0"
            : "translate-x-full rtl:-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]">
          <div>
            <h2 className="font-display text-lg font-bold text-[#18181B]">
              Your Shopping Bag
            </h2>
            <p className="text-xs text-[#57534E]">
              Free express shipping over $100
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="min-w-11 min-h-11 inline-flex items-center justify-center rounded-xl border border-[#E5E0D8] bg-white text-[#18181B] hover:border-[#0F3D3E] transition-colors cursor-pointer"
            aria-label="Close bag"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#F2EFE9] border border-[#E5E0D8] flex items-center justify-center text-[#0F3D3E] mb-4">
            <CartIcon className="w-7 h-7" />
          </div>
          <h3 className="font-display text-base font-bold text-[#18181B]">
            Your bag is empty
          </h3>
          <p className="text-xs text-[#57534E] mt-1.5 max-w-xs leading-relaxed">
            Explore our curated electronics, audio systems, and modern home
            essentials.
          </p>
          <Link
            href="/shop"
            onClick={() => setIsCartOpen(false)}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E85D3F] hover:bg-[#D1492B] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Browse Collection</span>
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 border-t border-[#E5E0D8] bg-[#F2EFE9]/60 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#57534E]">Subtotal</span>
            <span className="font-bold text-[#18181B] tabular-nums">$0.00</span>
          </div>
          <Link
            href="/shop"
            onClick={() => setIsCartOpen(false)}
            className="w-full inline-flex items-center justify-center min-h-11 rounded-xl bg-[#0F3D3E] hover:bg-[#09292A] text-[#FAF9F6] text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </aside>
    </>
  );
};
