import React from "react";
import Link from "next/link";
import { FlashIcon, StarRating } from "@app/components/common/Icons";
import { HeroCountdownTimer } from "@app/components/sections/hero/HeroCountdownTimer";

export const HeroFlashDeals: React.FC = () => {
  return (
    <div className="relative flex-1 bg-[#0F3D3E] text-[#FAF9F6] rounded-3xl border border-[#09292A] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#FAF9F6]/15">
        <div className="flex items-center gap-2 text-[#FAF9F6] font-display font-bold text-sm tracking-tight">
          <span className="w-7 h-7 rounded-lg bg-[#E85D3F] flex items-center justify-center">
            <FlashIcon className="w-4 h-4 text-white" />
          </span>
          <span>Daily Drop</span>
        </div>
        <span className="bg-[#F4A261] text-[#18181B] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
          Save 25%
        </span>
      </div>

      {/* Countdown */}
      <HeroCountdownTimer />

      {/* Product Spotlight */}
      <Link
        href="/shop"
        className="relative my-3 h-40 rounded-2xl bg-[#FAF9F6] p-4 flex items-center justify-center overflow-hidden border border-[#E5E0D8]"
      >
        <img
          src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80"
          alt="Edifier Studio Speakers C2-X1"
          className="max-h-full max-w-[85%] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Details & CTA */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between gap-2">
          <StarRating rating={5.0} />
          <span className="text-[11px] text-[#FAF9F6]/70">Limited Stock</span>
        </div>

        <h3 className="font-display text-base font-bold text-[#FAF9F6] leading-snug line-clamp-1">
          Edifier Studio Speakers C2-X1
        </h3>

        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex items-baseline gap-2 tabular-nums">
            <span className="text-xl font-extrabold text-[#F4A261]">
              $180.00
            </span>
            <span className="text-xs text-[#FAF9F6]/55 line-through">
              $240.00
            </span>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center min-h-10 px-4 py-2 rounded-xl bg-[#E85D3F] hover:bg-[#D1492B] active:scale-[0.98] text-white text-xs font-bold transition-all"
          >
            Claim Deal
          </Link>
        </div>
      </div>
    </div>
  );
};
