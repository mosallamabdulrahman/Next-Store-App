"use client";

import React, { useState, useEffect } from "react";

interface HeroCountdownTimerProps {
  initialDays?: number;
  initialHours?: number;
  initialMins?: number;
  initialSecs?: number;
}

export const HeroCountdownTimer: React.FC<HeroCountdownTimerProps> = ({
  initialDays = 28,
  initialHours = 14,
  initialMins = 21,
  initialSecs = 45,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: initialHours,
    mins: initialMins,
    secs: initialSecs,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1, secs: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            mins: 59,
            secs: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-3 bg-[#09292A]/80 border border-[#FAF9F6]/10 rounded-2xl p-2.5 text-center">
      <span className="text-[10px] font-semibold text-[#FAF9F6]/70 uppercase tracking-[0.14em] block mb-1.5">
        Offer Ends In
      </span>
      <div className="grid grid-cols-4 gap-1.5 text-xs font-mono font-bold tabular-nums">
        <div className="bg-[#FAF9F6]/10 rounded-lg py-1.5 text-[#FAF9F6]">
          {timeLeft.days}d
        </div>
        <div className="bg-[#FAF9F6]/10 rounded-lg py-1.5 text-[#FAF9F6]">
          {timeLeft.hours}h
        </div>
        <div className="bg-[#FAF9F6]/10 rounded-lg py-1.5 text-[#FAF9F6]">
          {timeLeft.mins}m
        </div>
        <div className="bg-[#E85D3F] rounded-lg py-1.5 text-white">
          {timeLeft.secs}s
        </div>
      </div>
    </div>
  );
};
