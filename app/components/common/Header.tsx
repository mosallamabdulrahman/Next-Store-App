"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SearchIcon,
  UserIcon,
  HeartIcon,
  CompareIcon,
  CartIcon,
  ChevronDownIcon,
  MenuIcon,
  PhoneIcon,
} from "@app/components/common/Icons";
import { ShopCategoryItem } from "@app/types";
import { useRouter } from "next/navigation";

interface headerProps {
  categories?: ShopCategoryItem[];
}

export const Header: React.FC<headerProps> = ({ categories = [] }) => {
  const roter = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    setSelectedCategory(slug);

    if (!slug) {
      roter.push("/shop");
    } else {
      roter.push(`/product-category/${slug}`);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      {/* Top utility bar */}
      <div className="border-b border-gray-100 bg-gray-50/70 text-xs text-gray-500 py-1.5 px-4 hidden md:block">
        <div className="w-full mx-auto px-2 md:px-4 py-2 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="hidden lg:inline text-gray-600">
              ⚡ Free express shipping on orders over{" "}
              <strong className="text-gray-800">$100</strong>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/shop"
              className="hover:text-purple-700 transition-colors"
            >
              Shop
            </Link>
            <Link href="#" className="hover:text-purple-700 transition-colors">
              Order Tracking
            </Link>
            <Link href="#" className="hover:text-purple-700 transition-colors">
              FAQs
            </Link>
            <div className="flex items-center gap-1 cursor-pointer hover:text-purple-700">
              <span>English</span>
              <ChevronDownIcon className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-purple-700">
              <span>USD</span>
              <ChevronDownIcon className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="flex-1 w-full mx-auto px-2 md:px-4 py-2">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo & Category Button */}
          <div className="flex items-center gap-5 shrink-0">
            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-purple-700 rounded-lg hover:bg-gray-100"
              aria-label="Open menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            {/* Brand Logo */}
            <Link href="/" className="flex items-center group">
              <span className="text-2xl lg:text-3xl font-black tracking-tight text-gray-900 font-sans flex items-center">
                woodmart
                <span className="w-2 h-2 rounded-full bg-purple-700 inline-block ml-0.5 animate-pulse"></span>
              </span>
            </Link>

            {/* Categories dropdown button */}
            <button className="hidden xl:flex items-center gap-2 bg-gray-900 hover:bg-purple-700 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full transition-all duration-200 shadow-xs">
              <MenuIcon className="w-4 h-4" />
              <span>Categories</span>
              <ChevronDownIcon className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Central Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center"
            >
              <div className="relative w-full flex items-center rounded-full border-2 border-gray-200 focus-within:border-purple-700 transition-colors bg-white overflow-hidden shadow-xs">
                {/* Category select inside search bar */}
                <div className="relative shrink-0 border-r border-gray-200 hidden sm:block">
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="appearance-none bg-transparent text-xs font-medium text-gray-700 pl-4 pr-7 py-2.5 outline-none cursor-pointer hover:text-purple-700"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option value={cat.name} key={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="w-3 h-3 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Search Text Input */}
                <input
                  type="text"
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm text-gray-800 placeholder-gray-400 px-4 py-2.5 outline-none bg-transparent"
                />

                {/* Search Button with vibrant purple */}
                <button
                  type="submit"
                  className="shrink-0 mr-1.5 p-2 bg-purple-700 hover:bg-purple-800 text-white rounded-full transition-colors flex items-center justify-center shadow-xs"
                  aria-label="Search"
                >
                  <SearchIcon className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Header Right Actions */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            {/* User Account */}
            <Link
              href="#"
              className="flex items-center gap-2 text-gray-700 hover:text-purple-700 transition-colors group"
            >
              <div className="p-2 rounded-full group-hover:bg-purple-50 transition-colors">
                <UserIcon className="w-5 h-5 text-gray-700 group-hover:text-purple-700" />
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-[11px] text-gray-400 font-normal leading-tight">
                  Welcome
                </span>
                <span className="text-xs font-semibold text-gray-800 group-hover:text-purple-700 leading-tight">
                  Sign In / Register
                </span>
              </div>
            </Link>

            {/* Compare */}
            <Link
              href="#"
              className="relative p-2 text-gray-700 hover:text-purple-700 group transition-colors"
              aria-label="Compare products"
            >
              <CompareIcon className="w-5 h-5 group-hover:text-purple-700" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-gray-200 text-[10px] font-bold text-gray-700 rounded-full flex items-center justify-center group-hover:bg-purple-700 group-hover:text-white transition-colors">
                0
              </span>
            </Link>

            {/* Wishlist */}
            <Link
              href="#"
              className="relative p-2 text-gray-700 hover:text-purple-700 group transition-colors"
              aria-label="Wishlist"
            >
              <HeartIcon className="w-5 h-5 group-hover:text-purple-700" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-purple-100 text-[10px] font-bold text-purple-700 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Shopping Cart */}
            <Link
              href="#"
              className="flex items-center gap-2 bg-gray-100 hover:bg-purple-50 text-gray-800 hover:text-purple-700 px-3.5 py-2 rounded-full transition-all group"
            >
              <div className="relative">
                <CartIcon className="w-5 h-5 text-gray-800 group-hover:text-purple-700" />
                <span className="absolute -top-1.5 -right-2 bg-purple-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="hidden sm:flex flex-col text-left pl-1">
                <span className="text-[10px] text-gray-400 font-medium leading-none">
                  Cart
                </span>
                <span className="text-xs font-bold text-gray-900 group-hover:text-purple-700 leading-tight">
                  $0.00
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="mt-3 md:hidden">
          <div className="relative flex items-center rounded-full border border-gray-200 bg-white overflow-hidden shadow-xs">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs text-gray-800 placeholder-gray-400 px-4 py-2 outline-none"
            />
            <button className="p-2 bg-purple-700 text-white mr-1 rounded-full">
              <SearchIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 animate-fadeIn">
          <div className="font-semibold text-xs text-gray-400 uppercase tracking-wider">
            Browse Categories
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-gray-700">
            <Link
              href="#"
              className="p-2 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-700"
            >
              📱 Smartphones
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-700"
            >
              💻 Laptops & PCs
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-700"
            >
              🎮 Gaming
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-700"
            >
              🔌 Appliances
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-700"
            >
              📺 TV & Audio
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-700"
            >
              📷 Cameras
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
