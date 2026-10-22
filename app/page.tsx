import { HeroSection } from "@app/components/sections/hero/HeroSection";
import { BrandLogos } from "@app/components/sections/BrandLogos";
import { BestsellersSection } from "@app/components/sections/best-sellers/BestsellersSection";
import { AppliancesSection } from "@app/components/sections/AppliancesSection";
import { LimitedOffersSection } from "@app/components/sections/LimitedOffersSection";
import { GamingSection } from "@app/components/sections/GamingSection";
import { ArticlesSection } from "@app/components/sections/articles/ArticlesSection";
import { SeoTextSection } from "@app/components/sections/SeoTextSection";

interface HomePageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams?.category || "smartphones";

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-gray-900 selection:bg-purple-100 selection:text-purple-700 font-sans antialiased">
      {/* Main Page Body Container */}
      <main className="flex-1 w-full mx-auto px-2 md:px-4 py-2">
        {/* 2. Hero Area: Categories Sidebar + Surface Laptop Slider + Flash Deals */}
        <HeroSection />

        {/* 3. Brand Partner Logos */}
        <BrandLogos />

        {/* 4. Bestsellers In Category (12-product grid with category tabs) */}
        <BestsellersSection category={activeCategory} />

        {/* 5. Popular in Appliances (6-product grid) */}
        <AppliancesSection />

        {/* 6. Limited Offers! (Countdown + AirPods Pro 3 showcase + 6 compact deals) */}
        <LimitedOffersSection />

        {/* 7. Popular in Gaming (6-product grid) */}
        <GamingSection />

        {/* 8. Useful Articles (4-card blog news grid with date badges) */}
        <ArticlesSection />

        {/* 9. SEO Rich Informational Text */}
        <SeoTextSection />
      </main>
    </div>
  );
}
