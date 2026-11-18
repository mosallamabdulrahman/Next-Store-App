import React from "react";
import { StarRating, HeartIcon, CompareIcon } from "@app/components/common/Icons";
import { ShopDeliveryIcon, TruckDeliveryIcon, DhlDeliveryIcon } from "./ProductIcons";
import { ProductDeliveryOption } from "@app/data/productData";

interface ProductBuyBoxProps {
  id: string | number;
  name: string;
  sku: string;
  price: number;
  regularPrice?: number;
  rating: number;
  reviewCount: number;
  deliveryOptions: ProductDeliveryOption[];
}

export const ProductBuyBox: React.FC<ProductBuyBoxProps> = ({
  name,
  sku,
  price,
  rating,
  reviewCount,
  deliveryOptions,
}) => {
  return (
    <div className="flex-1 w-full flex flex-col justify-center">
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#0F3D3E]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F3D3E]">
          Verified Hardware
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#18181B] tracking-tight leading-tight mb-2">
        {name}
      </h1>

      <div className="flex items-center gap-2 text-xs text-[#57534E] mb-3 tabular-nums">
        <span className="font-semibold text-[#18181B]">SKU:</span>
        <span>{sku}</span>
      </div>

      <div className="flex items-center gap-2.5 mb-6">
        <StarRating rating={rating} />
        <a
          href="#Reviews"
          className="text-xs text-[#57534E] hover:text-[#0F3D3E] transition-colors underline underline-offset-2"
        >
          ({reviewCount} customer review{reviewCount === 1 ? "" : "s"})
        </a>
      </div>

      <div className="border border-[#E5E0D8] rounded-2xl p-4 md:p-5 bg-white space-y-3.5 mb-6 shadow-2xs">
        {deliveryOptions.map((opt, idx) => (
          <React.Fragment key={opt.id}>
            {idx > 0 && <div className="border-t border-[#E5E0D8]" />}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-[#F2EFE9] text-[#0F3D3E] flex items-center justify-center shrink-0 mt-0.5">
                  {opt.type === "pickup" && <ShopDeliveryIcon className="w-4 h-4" />}
                  {opt.type === "courier" && <TruckDeliveryIcon className="w-4 h-4" />}
                  {opt.type === "dhl" && <DhlDeliveryIcon className="w-5 h-3.5" />}
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-[#18181B]">
                    {opt.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#57534E] mt-0.5">
                    {opt.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 text-end">
                {opt.eta && (
                  <span className="text-xs text-[#57534E] hidden sm:inline">
                    {opt.eta}
                  </span>
                )}
                <span
                  className={`text-xs sm:text-sm font-bold tabular-nums ${
                    opt.isFree ? "text-[#0F3D3E]" : "text-[#18181B]"
                  }`}
                >
                  {opt.cost}
                </span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="mb-6">
        <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F3D3E] tracking-tight tabular-nums">
          ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="inline-flex items-center border border-[#E5E0D8] rounded-xl bg-white overflow-hidden h-12 shadow-2xs">
          <button
            type="button"
            className="w-11 h-full flex items-center justify-center text-[#57534E] hover:text-[#0F3D3E] hover:bg-[#F2EFE9] transition-colors text-base font-semibold cursor-pointer"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="text"
            readOnly
            defaultValue="1"
            className="w-12 text-center text-sm font-semibold text-[#18181B] outline-none bg-transparent select-none tabular-nums"
            aria-label="Quantity"
          />
          <button
            type="button"
            className="w-11 h-full flex items-center justify-center text-[#57534E] hover:text-[#0F3D3E] hover:bg-[#F2EFE9] transition-colors text-base font-semibold cursor-pointer"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="min-h-12 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm text-white bg-[#E85D3F] hover:bg-[#D1492B] active:scale-[0.98] transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Add to cart</span>
        </button>

        <button
          type="button"
          className="min-h-12 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm text-[#FAF9F6] bg-[#0F3D3E] hover:bg-[#09292A] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer"
        >
          Buy now
        </button>
      </div>

      <div className="flex items-center gap-6 pt-3 border-t border-[#E5E0D8] text-xs text-[#57534E]">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 min-h-10 hover:text-[#0F3D3E] transition-colors cursor-pointer"
        >
          <CompareIcon className="w-4 h-4" />
          <span>Compare</span>
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 min-h-10 hover:text-[#E85D3F] transition-colors cursor-pointer"
        >
          <HeartIcon className="w-4 h-4" />
          <span>Add to wishlist</span>
        </button>
      </div>
    </div>
  );
};
