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
      {/* Product Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#242424] tracking-tight leading-tight mb-2">
        {name}
      </h1>

      {/* SKU & Meta */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2.5">
        <span className="font-semibold text-gray-800">SKU:</span>
        <span>{sku}</span>
      </div>

      {/* Star Rating & Review Link */}
      <div className="flex items-center gap-2 mb-5">
        <StarRating rating={rating} />
        <a
          href="#Reviews"
          className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
        >
          ({reviewCount} customer review)
        </a>
      </div>

      {/* Delivery & Pickup Feature Box */}
      <div className="border border-gray-200/85 rounded-2xl p-4 md:p-5 bg-white/60 space-y-3.5 mb-6 shadow-2xs">
        {deliveryOptions.map((opt, idx) => {
          return (
            <React.Fragment key={opt.id}>
              {idx > 0 && <div className="border-t border-gray-100" />}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-purple-50 text-[#4933d1] flex items-center justify-center shrink-0 mt-0.5">
                    {opt.type === "pickup" && <ShopDeliveryIcon className="w-4 h-4" />}
                    {opt.type === "courier" && <TruckDeliveryIcon className="w-4 h-4" />}
                    {opt.type === "dhl" && <DhlDeliveryIcon className="w-5 h-3.5" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-[#242424]">
                      {opt.title}
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                      {opt.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 text-right">
                  {opt.eta && (
                    <span className="text-xs text-gray-500 hidden sm:inline">
                      {opt.eta}
                    </span>
                  )}
                  <span
                    className={`text-xs sm:text-sm font-bold ${
                      opt.isFree ? "text-[#4933d1]" : "text-[#242424]"
                    }`}
                  >
                    {opt.cost}
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Price Display */}
      <div className="mb-6">
        <p className="text-3xl sm:text-4xl font-bold text-[#4933d1] tracking-tight">
          ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>

      {/* Quantity & Buy Buttons (Static UI for developer to add logic) */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Quantity Stepper */}
        <div className="inline-flex items-center border border-gray-300 rounded-full bg-white overflow-hidden h-12 shadow-2xs">
          <button
            type="button"
            className="w-10 h-full flex items-center justify-center text-gray-600 hover:text-purple-700 hover:bg-gray-50 transition-colors text-base font-semibold cursor-pointer"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="text"
            readOnly
            defaultValue="1"
            className="w-12 text-center text-sm font-semibold text-gray-800 outline-none bg-transparent select-none"
            aria-label="Quantity"
          />
          <button
            type="button"
            className="w-10 h-full flex items-center justify-center text-gray-600 hover:text-purple-700 hover:bg-gray-50 transition-colors text-base font-semibold cursor-pointer"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          className="px-8 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs md:text-sm text-white bg-[#4933d1] hover:bg-[#3d29b3] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Add to cart</span>
        </button>

        {/* Buy Now Button */}
        <button
          type="button"
          className="px-8 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs md:text-sm text-white bg-[#242424] hover:bg-black active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
        >
          Buy now
        </button>
      </div>

      {/* Secondary Actions: Compare & Wishlist */}
      <div className="flex items-center gap-6 pt-2 border-t border-gray-100/80 text-xs text-gray-600">
        <button
          type="button"
          className="flex items-center gap-1.5 hover:text-[#4933d1] transition-colors cursor-pointer"
        >
          <CompareIcon className="w-4 h-4" />
          <span>Compare</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 hover:text-rose-600 transition-colors cursor-pointer"
        >
          <HeartIcon className="w-4 h-4" />
          <span>Add to wishlist</span>
        </button>
      </div>
    </div>
  );
};
