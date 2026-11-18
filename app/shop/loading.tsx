export default function ShopLoading() {
  return (
    <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-6">
      <div className="h-4 w-32 rounded-full skeleton-shimmer mb-6" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Sidebar Skeleton */}
        <div className="hidden lg:block w-[275px] shrink-0 space-y-5">
          <div className="h-80 rounded-3xl skeleton-shimmer border border-[#E5E0D8]" />
          <div className="h-36 rounded-3xl skeleton-shimmer border border-[#E5E0D8]" />
        </div>

        {/* Grid Skeletons */}
        <div className="flex-1 space-y-6">
          <div className="h-14 rounded-2xl skeleton-shimmer border border-[#E5E0D8]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5E0D8] p-3.5 space-y-3"
              >
                <div className="aspect-[4/5] rounded-xl skeleton-shimmer" />
                <div className="h-3 w-1/2 rounded-full skeleton-shimmer" />
                <div className="h-4 w-5/6 rounded-full skeleton-shimmer" />
                <div className="h-5 w-1/3 rounded-full skeleton-shimmer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
