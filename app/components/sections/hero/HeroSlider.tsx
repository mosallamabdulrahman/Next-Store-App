"use client";

import React, { useState } from "react";
import Link from "next/link";

export const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Slides data for hero banner
  const slides = [
    {
      id: 0,
      title: "Meet the new Surface laptop",
      subtitle: "Change poses at every angle",
      tabLabel: "Surface Laptop Studio",
      imageUrl:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      badge: "New Release",
    },
    {
      id: 1,
      title: "Ultra-thin Galaxy Book Flex2",
      subtitle: "Brilliant QLED touchscreen power",
      tabLabel: 'Galaxy Flex 2 (13.3")',
      imageUrl:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      badge: "Best Seller",
    },
    {
      id: 2,
      title: "Next-Gen VR Immersion",
      subtitle: "Step into all-new virtual realms",
      tabLabel: "Meta Quest 2",
      imageUrl:
        "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80",
      badge: "Special Promo",
    },
  ];

  return (
    <div className="relative flex-1 bg-gradient-to-b from-gray-100/90 to-gray-50/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden border border-gray-100/80 min-h-[380px] group shadow-xs">
      {/* Background decorative glow */}
      <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -top-16 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top Text Content */}
      <div className="relative z-10 text-center max-w-md mx-auto space-y-2">
        <span className="inline-block text-[11px] font-bold tracking-widest text-purple-700 uppercase bg-purple-100/80 px-2.5 py-0.5 rounded-full">
          {slides[activeSlide].badge}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
          {slides[activeSlide].title}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 font-normal">
          {slides[activeSlide].subtitle}
        </p>
        <div className="pt-1">
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-purple-700/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Buy Now
          </Link>
        </div>
      </div>

      {/* Product Center Image */}
      <div className="relative z-10 my-4 flex items-center justify-center h-44 sm:h-52">
        <img
          src={slides[activeSlide].imageUrl}
          alt={slides[activeSlide].title}
          className="max-h-full max-w-[85%] object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Bottom Slider Navigation Tabs */}
      <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-4 pt-2 border-t border-gray-200/50">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(idx)}
            className={`text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeSlide === idx
                ? "bg-white text-purple-700 shadow-xs border border-purple-200"
                : "text-gray-500 hover:text-gray-900 bg-transparent"
            }`}
          >
            {slide.tabLabel}
          </button>
        ))}
      </div>
    </div>
  );
};
