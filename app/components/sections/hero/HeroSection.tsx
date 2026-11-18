import React from "react";
import { SidebarMenu } from "@app/components/sections/hero/SidebarMenu";
import { HeroSlider } from "@app/components/sections/hero/HeroSlider";
import { HeroFlashDeals } from "@app/components/sections/hero/HeroFlashDeals";

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-4 pb-8 lg:pt-6 lg:pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Asymmetric Editorial Bento Stage */}
        <div className="lg:col-span-8 flex flex-col">
          <HeroSlider />
        </div>

        {/* Curated Flash Spotlight Card */}
        <div className="lg:col-span-4 flex flex-col">
          <HeroFlashDeals />
        </div>

        {/* Full-width Architectural Department Bento Strip */}
        <div className="lg:col-span-12">
          <SidebarMenu />
        </div>
      </div>
    </section>
  );
};
