import { HeroSection } from "@app/components/sections/hero/HeroSection";
import { BrandLogos } from "@/app/components/sections/brands/BrandLogos";
import { BestsellersSection } from "@app/components/sections/best-sellers/BestsellersSection";
import { AppliancesSection } from "@app/components/sections/AppliancesSection";
import { LimitedOffersSection } from "@app/components/sections/LimitedOffersSection";
import { ArticlesSection } from "@app/components/sections/articles/ArticlesSection";
import { SeoTextSection } from "@app/components/sections/SeoTextSection";

interface HomePageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams?.category || "smartphones";

  return (
    <div className="min-h-dvh flex flex-col bg-[#FAF9F6] text-[#18181B] selection:bg-[#0F3D3E] selection:text-[#FAF9F6] font-sans antialiased">
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-2">
        <HeroSection />
        <BrandLogos />
        <BestsellersSection category={activeCategory} />
        <AppliancesSection />
        <LimitedOffersSection />
        <ArticlesSection />
        <SeoTextSection />
      </div>
    </div>
  );
}
