import React from "react";
import { ReviewItem } from "@app/data/productData";
import { StarRating, StarIcon } from "@app/components/common/Icons";

interface ProductReviewsProps {
  productName: string;
  initialReviews: ReviewItem[];
}

export const ProductReviews: React.FC<ProductReviewsProps> = ({
  productName,
  initialReviews,
}) => {
  return (
    <section id="Reviews" className="mb-14 scroll-mt-28">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] mb-2 tracking-tight">
        Customer Reviews
      </h2>
      <p className="text-xs sm:text-sm text-[#57534E] mb-8 tabular-nums">
        {initialReviews.length}{" "}
        {initialReviews.length === 1 ? "review" : "reviews"} for{" "}
        <span className="font-semibold text-[#18181B]">{productName}</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7 space-y-5">
          {initialReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#E5E0D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#0F3D3E] text-[#FAF9F6] font-bold text-xs flex items-center justify-center">
                    {rev.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-[#18181B]">
                      {rev.author}
                    </strong>
                    <span className="text-[#57534E] text-xs ms-2">
                      – {rev.date}
                    </span>
                  </div>
                </div>

                <StarRating rating={rev.rating} />
              </div>

              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed ps-11">
                {rev.content}
              </p>

              {rev.reply && (
                <div className="ms-6 sm:ms-11 mt-4 ps-4 border-s-2 border-[#0F3D3E] bg-[#F2EFE9]/75 p-3.5 sm:p-4 rounded-e-xl space-y-1.5">
                  <div className="flex items-center gap-2">
                    <strong className="text-xs font-bold text-[#18181B]">
                      {rev.reply.author}
                    </strong>
                    <span className="text-[#57534E] text-[11px]">
                      – {rev.reply.date}
                    </span>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {rev.reply.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 bg-white border border-[#E5E0D8] rounded-3xl p-6 sm:p-7 shadow-xs">
          <h3 className="font-display text-lg font-bold text-[#18181B] mb-1">
            Add a review
          </h3>
          <p className="text-xs text-[#57534E] mb-4 leading-relaxed">
            Your email address will not be published. Required fields are marked{" "}
            <span className="text-[#E85D3F]">*</span>
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                Your rating <span className="text-[#E85D3F]">*</span>
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="p-1 text-[#F4A261] hover:scale-115 transition-transform cursor-pointer"
                    aria-label={`Rate ${star} stars`}
                  >
                    <StarIcon
                      filled={true}
                      className="w-5 h-5 fill-[#F4A261] text-[#F4A261]"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="review-text"
                className="block text-xs font-semibold text-[#18181B] mb-1"
              >
                Your review <span className="text-[#E85D3F]">*</span>
              </label>
              <textarea
                id="review-text"
                rows={4}
                placeholder="Write your experience with this product..."
                className="w-full px-3.5 py-2.5 text-sm text-[#18181B] bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl focus:border-[#0F3D3E] focus:bg-white outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="review-name"
                className="block text-xs font-semibold text-[#18181B] mb-1"
              >
                Name <span className="text-[#E85D3F]">*</span>
              </label>
              <input
                id="review-name"
                type="text"
                placeholder="Your name"
                className="w-full px-3.5 py-2.5 text-sm text-[#18181B] bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl focus:border-[#0F3D3E] focus:bg-white outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="review-email"
                className="block text-xs font-semibold text-[#18181B] mb-1"
              >
                Email <span className="text-[#E85D3F]">*</span>
              </label>
              <input
                id="review-email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-3.5 py-2.5 text-sm text-[#18181B] bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl focus:border-[#0F3D3E] focus:bg-white outline-none transition-colors"
              />
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                id="review-remember"
                type="checkbox"
                defaultChecked={false}
                className="mt-0.5 rounded border-[#E5E0D8] accent-[#0F3D3E]"
              />
              <label
                htmlFor="review-remember"
                className="text-[11px] text-[#57534E] leading-tight"
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="min-h-11 px-8 py-2.5 bg-[#E85D3F] hover:bg-[#D1492B] active:scale-[0.98] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
