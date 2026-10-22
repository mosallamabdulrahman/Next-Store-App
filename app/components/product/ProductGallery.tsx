import React from "react";
import Image from "next/image";
import { ProductImageItem } from "@app/data/productData";
import { Icon360 } from "./ProductIcons";

interface ProductGalleryProps {
  images: ProductImageItem[];
  title: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, title }) => {
  const currentImage = images[0] || {
    src: "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-conceptd-ct300-1.jpg",
    alt: title,
  };

  return (
    <div className="w-full max-w-[560px] mx-auto lg:mx-0">
      {/* Main Image Display Box */}
      <div className="relative w-full aspect-[7/8] bg-white rounded-3xl p-6 md:p-8 flex items-center justify-center overflow-hidden border border-gray-100 group shadow-2xs">
        {/* Hot Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-[#242424] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
            Hot
          </span>
        </div>

        {/* 360 / Zoom trigger button */}
        <button
          type="button"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-[#4933d1] flex items-center justify-center shadow-xs transition-all border border-gray-100 cursor-pointer"
          aria-label="View full size image"
          title="Zoom image"
        >
          <Icon360 className="w-4 h-4" />
        </button>

        {/* Previous Arrow Button */}
        <button
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-[#4933d1] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer border border-gray-100"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next Arrow Button */}
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-[#4933d1] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer border border-gray-100"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Main Product Image */}
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt || title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-contain select-none"
          />
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={idx}
                className={`relative w-20 h-22 rounded-2xl overflow-hidden bg-white shrink-0 p-1.5 transition-all cursor-pointer ${
                  isFirst
                    ? "border-2 border-[#4933d1] shadow-xs ring-2 ring-purple-100"
                    : "border border-gray-200/80 hover:border-gray-400 opacity-80 hover:opacity-100"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.alt || `Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
