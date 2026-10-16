import React from "react";
import { BRANDS } from "@app/data/mockData";

export const BrandLogos: React.FC = () => {
  return (
    <section className="py-4">
      <div className="bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 items-center">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-3 rounded-xl bg-gray-50/60 hover:bg-purple-50/60 hover:border-purple-200 border border-transparent transition-all duration-200 cursor-pointer group"
            >
              {brand.name === "Apple" ? (
                <div className="flex items-center justify-center gap-1 text-gray-700 group-hover:text-purple-700 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.77-8.08-12.24-15-6.99-10.79-12.44-23.01-16.34-36.67-3.9-13.67-5.85-26.65-5.85-38.94 0-14.77 3.73-27.18 11.19-37.24 7.46-10.05 17.07-15.17 28.84-15.35 4.88 0 10.37 1.25 16.48 3.76 6.1 2.5 10.04 3.76 11.81 3.76 1.76 0 5.86-1.31 12.3-3.94 6.44-2.62 12.18-3.79 17.2-3.51 13.06.66 23.47 5.17 31.24 13.54-11.4 6.89-17 16.4-16.79 28.53.22 9.68 3.99 17.72 11.32 24.12 7.33 6.4 16.03 10.05 26.11 10.95-2.22 6.64-4.79 13.07-7.7 19.31zM119.22 33.66c0-7.25 2.65-13.88 7.94-19.89 5.3-6.01 11.75-9.66 19.34-10.97.22 1.13.33 2.19.33 3.18 0 7.36-2.82 14.15-8.46 20.37-5.64 6.22-12.17 9.87-19.61 10.95-.12-1.22-.18-2.12-.18-2.71z" />
                  </svg>
                </div>
              ) : (
                <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-gray-500 group-hover:text-purple-700 transition-colors">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
