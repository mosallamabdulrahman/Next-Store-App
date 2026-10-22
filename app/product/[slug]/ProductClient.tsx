"use client";

import React, { useState } from "react";
import { SingleProductDetails, RelatedProductItem } from "@app/data/productData";
import { ProductBreadcrumbNav } from "@app/components/product/ProductBreadcrumbNav";
import { ProductStickyTabs } from "@app/components/product/ProductStickyTabs";
import { ProductGallery } from "@app/components/product/ProductGallery";
import { ProductBuyBox } from "@app/components/product/ProductBuyBox";
import { ProductDescription } from "@app/components/product/ProductDescription";
import { ProductSpecifications } from "@app/components/product/ProductSpecifications";
import { ProductReviews } from "@app/components/product/ProductReviews";
import { ProductRelated } from "@app/components/product/ProductRelated";
import { ProductStickyBottomBar } from "@app/components/product/ProductStickyBottomBar";
import { CheckIcon } from "@app/components/product/ProductIcons";

interface ProductClientProps {
  product: SingleProductDetails;
}

export const ProductClient: React.FC<ProductClientProps> = ({ product }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (quantity: number = 1) => {
    setToastMessage(`“${product.name}” (×${quantity}) has been added to your cart.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleBuyNow = (quantity: number = 1) => {
    setToastMessage(`Proceeding to checkout with “${product.name}” (×${quantity})...`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleRelatedAddToCart = (item: RelatedProductItem) => {
    setToastMessage(`“${item.title}” has been added to your cart.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div className="w-full bg-[#fafafa] min-h-screen">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 max-w-md bg-white border border-gray-200/90 rounded-2xl p-4 shadow-xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckIcon className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-xs sm:text-sm text-gray-800 font-medium">
              {toastMessage}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-gray-700 text-sm font-semibold p-1 cursor-pointer"
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
      )}

      {/* Main Page Container (Woodmart 1540px container width) */}
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Top: Breadcrumb & Prev/Next Nav */}
        <ProductBreadcrumbNav
          breadcrumbs={product.breadcrumbs}
          navPrev={product.navPrev}
          navNext={product.navNext}
        />

        {/* Sticky Anchor Navigation Bar */}
        <ProductStickyTabs reviewCount={product.reviews.length} />

        {/* Hero Area: Gallery (Left) & Buy Box (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <ProductGallery images={product.images} title={product.name} />
          </div>

          <div className="lg:col-span-6">
            <ProductBuyBox
              id={product.id}
              name={product.name}
              sku={product.sku}
              price={product.price}
              regularPrice={product.regularPrice}
              rating={product.rating}
              reviewCount={product.reviews.length}
              deliveryOptions={product.deliveryOptions}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </div>
        </div>

        {/* Description Section */}
        <ProductDescription description={product.description} />

        {/* Specifications Section */}
        <ProductSpecifications specifications={product.specifications} />

        {/* Customer Reviews Section */}
        <ProductReviews
          productName={product.name}
          initialReviews={product.reviews}
        />

        {/* "You may also like" Related Section */}
        <ProductRelated
          products={product.relatedProducts}
          onAddToCart={handleRelatedAddToCart}
        />
      </div>

      {/* Sticky Bottom Add to Cart Bar */}
      <ProductStickyBottomBar
        name={product.name}
        price={product.price}
        image={product.images[0]?.src || ""}
        rating={product.rating}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
    </div>
  );
};
