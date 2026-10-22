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
      <h2 className="text-2xl sm:text-3xl font-bold text-[#242424] mb-2 tracking-tight">
        Customer Reviews
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-8">
        {initialReviews.length} {initialReviews.length === 1 ? "review" : "reviews"} for{" "}
        <span className="font-semibold text-gray-800">{productName}</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Reviews List */}
        <div className="lg:col-span-7 space-y-6">
          {initialReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-[#4933d1] font-bold text-xs flex items-center justify-center">
                    {rev.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-[#242424]">
                      {rev.author}
                    </strong>
                    <span className="text-gray-400 text-xs ml-2">
                      – {rev.date}
                    </span>
                  </div>
                </div>

                <StarRating rating={rev.rating} />
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-10">
                {rev.content}
              </p>

              {/* Nested reply if available */}
              {rev.reply && (
                <div className="ml-6 sm:ml-10 mt-4 pl-4 border-l-2 border-purple-200 bg-gray-50/70 p-3 sm:p-4 rounded-r-xl space-y-1.5">
                  <div className="flex items-center gap-2">
                    <strong className="text-xs font-bold text-[#242424]">
                      {rev.reply.author}
                    </strong>
                    <span className="text-gray-400 text-[11px]">
                      – {rev.reply.date}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {rev.reply.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Add a Review Static Form */}
        <div className="lg:col-span-5 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
          <h3 className="text-lg font-bold text-[#242424] mb-1">Add a review</h3>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            Your email address will not be published. Required fields are marked{" "}
            <span className="text-red-500">*</span>
          </p>

          <form className="space-y-4">
            {/* Rating Stars Selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Your rating <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="p-1 text-yellow-400 hover:scale-115 transition-transform cursor-pointer"
                    aria-label={`Rate ${star} stars`}
                  >
                    <StarIcon
                      filled={true}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review Comment Textarea */}
            <div>
              <label htmlFor="review-text" className="block text-xs font-semibold text-gray-700 mb-1">
                Your review <span className="text-red-500">*</span>
              </label>
              <textarea
                id="review-text"
                rows={4}
                placeholder="Write your experience with this product..."
                className="w-full px-3.5 py-2.5 text-xs text-gray-800 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-[#4933d1] focus:bg-white outline-none transition-colors"
              />
            </div>

            {/* Author Name */}
            <div>
              <label htmlFor="review-name" className="block text-xs font-semibold text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="review-name"
                type="text"
                placeholder="Your name"
                className="w-full px-3.5 py-2.5 text-xs text-gray-800 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-[#4933d1] focus:bg-white outline-none transition-colors"
              />
            </div>

            {/* Author Email */}
            <div>
              <label htmlFor="review-email" className="block text-xs font-semibold text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="review-email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-3.5 py-2.5 text-xs text-gray-800 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-[#4933d1] focus:bg-white outline-none transition-colors"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-start gap-2 pt-1">
              <input
                id="review-remember"
                type="checkbox"
                defaultChecked={false}
                className="mt-0.5 rounded border-gray-300 text-[#4933d1] focus:ring-[#4933d1]"
              />
              <label htmlFor="review-remember" className="text-[11px] text-gray-500 leading-tight">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="button"
                className="px-8 py-2.5 bg-[#4933d1] hover:bg-[#3d29b3] text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
