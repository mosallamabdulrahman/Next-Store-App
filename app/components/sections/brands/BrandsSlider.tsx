"use client";
import Image from "next/image";
import { Brand } from "@/app/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

interface BrandsSliderProps {
  brands: Brand[];
}

function BrandsSlider({ brands }: BrandsSliderProps) {
  if (!brands || brands.length === 0) return null;
  return (
    <div className="relative group/slider px-2">
      <Swiper
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          640: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 7, // عرض 7 براندات على الشاشات الكبيرة
            slidesPerGroup: 7, // تقليب مجموعة من 7 سلايدات دفعة واحدة
            spaceBetween: 20,
          },
        }}
        loop={true}
        className="brands-swiper py-2"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="flex items-center justify-center h-20 sm:h-24 px-4 rounded-2xl bg-gray-100 hover:bg-gray-200/70 transition-all duration-300 cursor-pointer">
              <Image
                src={brand.image.src}
                alt={brand.image.alt || brand.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BrandsSlider;
