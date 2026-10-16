import React from "react";
import { SidebarMenu } from "@app/components/sections/hero/SidebarMenu";
import { HeroSlider } from "@app/components/sections/hero/HeroSlider";
import { HeroFlashDeals } from "@app/components/sections/hero/HeroFlashDeals";

export const HeroSection: React.FC = () => {
  return (
    <section className="py-4 lg:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left: Categories Sidebar */}
        <div className="hidden lg:block lg:col-span-3 xl:col-span-3">
          <SidebarMenu />
        </div>

        {/* Center: Main Interactive Hero Banner Slider */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col">
          <HeroSlider />
        </div>

        {/* Right: Flash Deals Featured Box */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
          <HeroFlashDeals />
        </div>
      </div>
    </section>
  );
};
