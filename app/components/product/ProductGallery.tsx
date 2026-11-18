import React from "react";
import Image from "next/image";
import { ProductImageItem } from "@app/data/productData";
import { Icon360 } from "./ProductIcons";

interface ProductGalleryProps {
  images: ProductImageItem[];
  title: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  title,
}) => {
  const currentImage = images[0] || {
    src: "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-conceptd-ct300-1.jpg",
    alt: title,
  };

  return (
    <div className="w-full max-w-[560px] mx-auto lg:mx-0">
      <div className="relative w-full aspect-[7/8] bg-white rounded-3xl p-6 md:p-8 flex items-center justify-center overflow-hidden border border-[#E5E0D8] group shadow-xs">
        <div className="absolute top-4 start-4 z-10">
          <span className="inline-block bg-[#F4A261] text-[#18181B] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Featured
          </span>
        </div>

        <button
          type="button"
          className="absolute top-4 end-4 z-10 w-10 h-10 rounded-xl bg-[#FAF9F6] hover:bg-[#0F3D3E] text-[#18181B] hover:text-[#FAF9F6] flex items-center justify-center transition-all border border-[#E5E0D8] cursor-pointer"
          aria-label="View full size image"
          title="Zoom image"
        >
          <Icon360 className="w-4 h-4" />
        </button>

        <button
          type="button"
          className="absolute start-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-[#0F3D3E] text-[#18181B] hover:text-[#FAF9F6] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer border border-[#E5E0D8]"
          aria-label="Previous image"
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          className="absolute end-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-[#0F3D3E] text-[#18181B] hover:text-[#FAF9F6] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer border border-[#E5E0D8]"
          aria-label="Next image"
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

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

      {images.length > 1 && (
        <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 no-scrollbar">
          {images.map((img, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={idx}
                className={`relative w-20 h-22 rounded-2xl overflow-hidden bg-white shrink-0 p-1.5 transition-all cursor-pointer ${
                  isFirst
                    ? "border-2 border-[#0F3D3E] shadow-xs"
                    : "border border-[#E5E0D8] hover:border-[#0F3D3E]/50 opacity-80 hover:opacity-100"
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
