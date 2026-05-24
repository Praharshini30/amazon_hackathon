import { HeroBanner } from '@/components/home/hero-banner';
import { CategoryCards } from '@/components/home/category-cards';
import { DealOfDay } from '@/components/home/deal-of-day';
import { ProductRow } from '@/components/home/product-row';
import { DreamAIBanner } from '@/components/home/dream-ai-banner';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <div className="max-w-[1500px] mx-auto px-4 -mt-40 relative z-10 space-y-5 pb-8">
        <CategoryCards />
        <DreamAIBanner />
        <DealOfDay />
        <ProductRow title="Trending in Electronics" />
        <ProductRow title="Best Sellers in Fitness" />
      </div>
      <Footer />
    </>
  );
}
