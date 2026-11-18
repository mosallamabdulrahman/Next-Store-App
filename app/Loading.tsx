export default function Loading() {
  return (
    <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Bento Hero Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 h-[400px] rounded-3xl skeleton-shimmer border border-[#E5E0D8]" />
        <div className="lg:col-span-4 h-[400px] rounded-3xl skeleton-shimmer border border-[#E5E0D8]" />
      </div>

      {/* Product Grid Skeletons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-[#E5E0D8] p-3 space-y-3"
          >
            <div className="aspect-[4/5] rounded-xl skeleton-shimmer" />
            <div className="h-3 w-2/3 rounded-full skeleton-shimmer" />
            <div className="h-4 w-full rounded-full skeleton-shimmer" />
            <div className="h-4 w-1/2 rounded-full skeleton-shimmer" />
          </div>
        ))}
      </div>
    </div>
  );
}
