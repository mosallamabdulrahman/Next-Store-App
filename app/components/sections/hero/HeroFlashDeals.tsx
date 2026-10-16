import React from "react";
import { FlashIcon, StarRating } from "@app/components/common/Icons";
import { HeroCountdownTimer } from "@app/components/sections/hero/HeroCountdownTimer";

export const HeroFlashDeals: React.FC = () => {
  return (
    <div className="relative flex-1 bg-white rounded-2xl border border-gray-100 shadow-xs p-4 sm:p-5 flex flex-col justify-between overflow-hidden group">
      {/* Top flash deals header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-1.5 text-purple-700 font-bold text-sm">
          <FlashIcon className="w-4 h-4 text-purple-700 fill-purple-700" />
          <span>Flash Deals</span>
        </div>
        <span className="bg-purple-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
          UP TO 70% OFF
        </span>
      </div>

      {/* Deal Countdown timer */}
      <HeroCountdownTimer />

      {/* Offer Callout */}
      <div className="text-center my-1">
        <p className="text-xs text-gray-500 font-medium">
          Only today, 25% discount
        </p>
        <span className="inline-block bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mt-1">
          For $180
        </span>
      </div>

      {/* Product Image */}
      <div className="relative my-2 h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50/50">
        <img
          src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80"
          alt="Studio Speakers C2-X1"
          className="max-h-full max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="pt-2 text-center space-y-1">
        <h3 className="text-xs font-bold text-gray-800 hover:text-purple-700 transition-colors line-clamp-1">
          Edifier Studio Speakers C2-X1
        </h3>
        <div className="flex justify-center">
          <StarRating rating={5.0} />
        </div>
        <div className="text-sm font-extrabold text-purple-700">$180.00</div>
      </div>
    </div>
  );
};
