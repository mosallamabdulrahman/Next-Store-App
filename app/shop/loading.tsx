export default function ShopLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      {/* دائرة التحميل المتحركة */}
      <div className="w-10 h-10 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin mb-3"></div>

      {/* نص خفيف */}
      <p className="text-gray-400 text-xs font-medium tracking-wide">
        جاري التحميل...
      </p>
    </div>
  );
}
