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
    <div className="my-2 bg-gray-50/80 rounded-xl p-2 text-center">
      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider block mb-1">
        ENDS IN
      </span>
      <div className="flex items-center justify-center gap-1 text-xs font-mono font-bold text-gray-800">
        <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-xs">
          {timeLeft.days}d
        </span>
        <span>:</span>
        <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-xs">
          {timeLeft.hours}h
        </span>
        <span>:</span>
        <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-xs">
          {timeLeft.mins}m
        </span>
        <span>:</span>
        <span className="bg-purple-700 text-white px-1.5 py-0.5 rounded shadow-xs">
          {timeLeft.secs}s
        </span>
      </div>
    </div>
  );
};
