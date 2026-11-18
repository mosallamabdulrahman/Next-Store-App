"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@app/components/common/Icons";

export const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Meet the new Surface laptop",
      subtitle: "Sculpted anodized aluminum that adapts to every angle of your workflow.",
      tabLabel: "Surface Studio",
      imageUrl:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      badge: "New Release",
      metric: "14.4\" PixelSense",
    },
    {
      id: 1,
      title: "Ultra-thin Galaxy Book Flex2",
      subtitle: "Brilliant QLED touchscreen clarity paired with all-day battery endurance.",
      tabLabel: "Galaxy Flex 2",
      imageUrl:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      badge: "Best Seller",
      metric: "360° QLED Display",
    },
    {
      id: 2,
      title: "Next-Gen VR Immersion",
      subtitle: "Step into crisp spatial acoustics and untethered high-refresh realities.",
      tabLabel: "Meta Quest 2",
      imageUrl:
        "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80",
      badge: "Special Promo",
      metric: "120Hz Spatial",
    },
  ];

  const current = slides[activeSlide];

  return (
    <div className="relative flex-1 bg-[#F2EFE9] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden border border-[#E5E0D8] min-h-[400px] lg:min-h-[440px] group">
      {/* Architectural Geometric Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0F3D3E 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Asymmetric Split Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
        {/* Editorial Typography & CTA */}
        <div className="md:col-span-7 text-start space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-[#E5E0D8] px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#E85D3F]" />
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#0F3D3E] uppercase">
              {current.badge}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold text-[#18181B] tracking-tight leading-[1.08]">
            {current.title}
          </h1>

          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-md">
            {current.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 min-h-11 bg-[#E85D3F] hover:bg-[#D1492B] active:scale-[0.98] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-all duration-200"
            >
              <span>Shop Spotlight</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center min-h-11 bg-white/80 hover:bg-white border border-[#E5E0D8] hover:border-[#0F3D3E] text-[#18181B] text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200"
            >
              View Specs
            </Link>
          </div>
        </div>

        {/* Floating Product Spotlight Frame */}
        <div className="md:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[290px] rounded-3xl bg-white border border-[#E5E0D8] p-5 shadow-[0_20px_50px_-15px_rgba(15,61,62,0.14)] flex items-center justify-center overflow-hidden">
            <img
              src={current.imageUrl}
              alt={current.title}
              className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between bg-[#FAF9F6]/95 backdrop-blur-xs border border-[#E5E0D8] rounded-xl px-3 py-1.5 text-[11px] font-semibold text-[#0F3D3E]">
              <span>{current.metric}</span>
              <span className="text-[#E85D3F]">In Stock</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Interactive Editorial Switcher Pills */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-6 mt-4 border-t border-[#E5E0D8]">
        <div className="flex flex-wrap items-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(idx)}
              className={`min-h-10 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                activeSlide === idx
                  ? "bg-[#0F3D3E] text-[#FAF9F6] shadow-xs"
                  : "bg-white/75 text-[#57534E] hover:text-[#18181B] hover:bg-white border border-[#E5E0D8]"
              }`}
            >
              {slide.tabLabel}
            </button>
          ))}
        </div>

        <span className="text-xs font-mono font-medium text-[#57534E] tabular-nums">
          0{activeSlide + 1} / 0{slides.length}
        </span>
      </div>
    </div>
  );
};
