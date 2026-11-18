export default function Loading() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="h-5 w-64 rounded-full skeleton-shimmer" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 aspect-[7/8] max-h-[560px] rounded-3xl skeleton-shimmer border border-[#E5E0D8]" />
        <div className="lg:col-span-6 space-y-5 pt-4">
          <div className="h-10 w-3/4 rounded-xl skeleton-shimmer" />
          <div className="h-4 w-32 rounded-full skeleton-shimmer" />
          <div className="h-44 w-full rounded-2xl skeleton-shimmer border border-[#E5E0D8]" />
          <div className="h-10 w-40 rounded-xl skeleton-shimmer" />
          <div className="flex gap-3">
            <div className="h-12 w-32 rounded-xl skeleton-shimmer" />
            <div className="h-12 flex-1 rounded-xl skeleton-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
