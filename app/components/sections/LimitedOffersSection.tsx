"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { StarRating, ChevronRightIcon } from "@app/components/common/Icons";
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
    <section className="py-10">
      {/* Header + Countdown */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-7 pb-4 border-b border-[#E5E0D8]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-5 h-0.5 bg-[#E85D3F] rounded-full" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E85D3F]">
              Timed Editions
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
            Limited Offers
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E]">
            Exclusive drops before inventory closes.
          </p>
        </div>

        <div className="flex items-center gap-2 tabular-nums">
          <div className="flex flex-col items-center bg-[#F2EFE9] border border-[#E5E0D8] rounded-xl px-3 py-2 min-w-[54px]">
            <span className="text-sm sm:text-base font-extrabold text-[#18181B] leading-tight">
              {timer.days}
            </span>
            <span className="text-[9px] font-semibold text-[#57534E] uppercase tracking-wider">
              Days
            </span>
          </div>
          <span className="font-bold text-[#57534E]">:</span>

          <div className="flex flex-col items-center bg-[#F2EFE9] border border-[#E5E0D8] rounded-xl px-3 py-2 min-w-[54px]">
            <span className="text-sm sm:text-base font-extrabold text-[#18181B] leading-tight">
              {timer.hours}
            </span>
            <span className="text-[9px] font-semibold text-[#57534E] uppercase tracking-wider">
              Hours
            </span>
          </div>
          <span className="font-bold text-[#57534E]">:</span>

          <div className="flex flex-col items-center bg-[#F2EFE9] border border-[#E5E0D8] rounded-xl px-3 py-2 min-w-[54px]">
            <span className="text-sm sm:text-base font-extrabold text-[#18181B] leading-tight">
              {timer.mins}
            </span>
            <span className="text-[9px] font-semibold text-[#57534E] uppercase tracking-wider">
              Mins
            </span>
          </div>
          <span className="font-bold text-[#57534E]">:</span>

          <div className="flex flex-col items-center bg-[#E85D3F] text-white rounded-xl px-3 py-2 min-w-[54px] shadow-xs">
            <span className="text-sm sm:text-base font-extrabold leading-tight">
              {timer.secs}
            </span>
            <span className="text-[9px] font-semibold text-white/85 uppercase tracking-wider">
              Secs
            </span>
          </div>
        </div>
      </div>

      {/* Main Bento Offer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Emerald Audio Feature Card */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative flex-1 bg-[#0F3D3E] rounded-3xl p-6 sm:p-8 text-[#FAF9F6] flex flex-col justify-between overflow-hidden border border-[#09292A] group">
            <div className="relative z-10 text-start space-y-2.5">
              <span className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase bg-[#F4A261] text-[#18181B] px-3 py-1 rounded-full">
                Signature Audio
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF9F6]">
                AirPods Pro 3
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF9F6]/75 max-w-xs">
                Adaptive Noise Cancellation &amp; lossless spatial clarity.
              </p>
              <div className="pt-1">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 min-h-11 bg-[#E85D3F] hover:bg-[#D1492B] active:scale-[0.98] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all duration-200"
                >
                  <span>Shop Audio Drop</span>
                  <ChevronRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="relative z-10 my-5 rounded-2xl bg-[#FAF9F6] p-5 flex items-center justify-center h-52 sm:h-60 border border-[#E5E0D8]">
              <img
                src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=700&q=80"
                alt="AirPods Pro 3"
                className="max-h-full max-w-[85%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] text-[#FAF9F6]/75 pt-2 border-t border-[#FAF9F6]/15">
              <span>Official 2-Year Warranty</span>
              <span className="text-[#F4A261] font-semibold">Express Ready</span>
            </div>
          </div>
        </div>

        {/* Right: 6 Tactile Compact Deal Rows */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl border border-[#E5E0D8] p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {LIMITED_OFFERS_ITEMS.map((item) => (
              <Link
                key={item.id}
                href="/shop"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FAF9F6] hover:bg-[#F2EFE9] border border-[#E5E0D8] hover:border-[#0F3D3E]/50 transition-all duration-200 group"
              >
                <div className="relative w-18 h-18 rounded-xl bg-white border border-[#E5E0D8] flex items-center justify-center shrink-0 overflow-hidden p-2">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-108"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F3D3E]">
                    {item.category}
                  </span>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#0F3D3E] transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <StarRating rating={item.rating} />
                  <div className="flex items-baseline gap-2 tabular-nums">
                    <span className="text-sm font-extrabold text-[#E85D3F]">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.oldPrice && (
                      <span className="text-[11px] text-[#57534E]/70 line-through">
                        ${item.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 pt-3.5 border-t border-[#E5E0D8] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#57534E] gap-1">
            <span>* Limited-run promotional pricing</span>
            <span>* Complimentary express delivery above $100</span>
          </div>
        </div>
      </div>
    </section>
  );
};
