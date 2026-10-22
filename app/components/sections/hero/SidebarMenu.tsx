import Link from "next/link";
import Image from "next/image";
import { FetchWooCategories } from "@/lib/woocommerce";
import { ShopCategoryItem } from "@/app/types";

export const SidebarMenu = async () => {
  const categories: ShopCategoryItem[] = (await FetchWooCategories()) || [];
  return (
    <aside className="w-full bg-primary-gray rounded-4xl shadow-xs p-4 overflow-hidden flex flex-col justify-between h-full">
      <ul className="flex flex-col gap-1">
        {categories.map((item) => (
          <li key={item.id}>
            <Link
              href={`/product-category/${item.slug}`}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#EAEAEA] text-gray-700 transition-all duration-150 group"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 relative">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </span>
                <span className="text-base font-medium tracking-tight group-hover:translate-x-0.5 transition-transform">
                  {item.name.replace(/&amp;/g, "&")}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
