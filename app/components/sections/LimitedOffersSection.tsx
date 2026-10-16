"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { StarRating } from "@app/components/common/Icons";
import { LIMITED_OFFERS_ITEMS } from "@app/data/mockData";

export const LimitedOffersSection: React.FC = () => {
  const [timer, setTimer] = useState({
    days: 155,
    hours: 18,
    mins: 46,
    secs: 29,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1, secs: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        } else {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            mins: 59,
            secs: 59,
          };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8">
      {/* Section Header with Countdown Timer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
            Limited Offers!
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Hurry up to buy these products before time runs out!
          </p>
        </div>

        {/* Big Countdown Timer Boxes */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex flex-col items-center bg-gray-100 rounded-xl px-2.5 py-1.5 min-w-[52px]">
            <span className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
              {timer.days}
            </span>
            <span className="text-[9px] font-semibold text-gray-400 uppercase">
              Days
            </span>
          </div>
          <span className="font-bold text-gray-400">:</span>

          <div className="flex flex-col items-center bg-gray-100 rounded-xl px-2.5 py-1.5 min-w-[52px]">
            <span className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
              {timer.hours}
            </span>
            <span className="text-[9px] font-semibold text-gray-400 uppercase">
              Hours
            </span>
          </div>
          <span className="font-bold text-gray-400">:</span>

          <div className="flex flex-col items-center bg-gray-100 rounded-xl px-2.5 py-1.5 min-w-[52px]">
            <span className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
              {timer.mins}
            </span>
            <span className="text-[9px] font-semibold text-gray-400 uppercase">
              Mins
            </span>
          </div>
          <span className="font-bold text-gray-400">:</span>

          <div className="flex flex-col items-center bg-purple-700 text-white rounded-xl px-2.5 py-1.5 min-w-[52px]">
            <span className="text-sm sm:text-base font-extrabold leading-tight">
              {timer.secs}
            </span>
            <span className="text-[9px] font-semibold opacity-80 uppercase">
              Secs
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Promo Banner + Compact Deals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left: AirPods Pro 3 Showcase (Dark Card) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative flex-1 bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between overflow-hidden shadow-lg group">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Top Text */}
            <div className="relative z-10 text-center space-y-2">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">
                Best Features for Music Lovers
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                AirPods Pro 3
              </h3>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-purple-700/30 transition-all duration-200"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* AirPods Center Image */}
            <div className="relative z-10 my-4 flex items-center justify-center h-48 sm:h-56">
              <img
                src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=700&q=80"
                alt="AirPods Pro 3"
                className="max-h-full max-w-[90%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10 text-center">
              <span className="text-[11px] text-gray-400">
                Active Noise Cancellation & Spatial Audio
              </span>
            </div>
          </div>
        </div>

        {/* Right: 6 Compact Deal Items */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl border border-gray-100 p-4 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LIMITED_OFFERS_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-gray-50/90 border border-transparent hover:border-purple-100 transition-all duration-200 group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <StarRating rating={item.rating} />
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs sm:text-sm font-extrabold text-purple-700">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.oldPrice && (
                      <span className="text-[10px] text-gray-400 line-through">
                        ${item.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Micro Disclaimer Notes */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-gray-400 gap-1">
            <span>* Limited time discount offers</span>
            <span>* Free shipping on orders over $100</span>
          </div>
        </div>
      </div>
    </section>
  );
};
