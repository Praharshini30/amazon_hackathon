import { Hero } from '@/components/home/hero';
import { TrendingAspirations } from '@/components/home/trending-aspirations';
import { CategoryGrid } from '@/components/home/category-grid';
import { HowItWorks } from '@/components/home/how-it-works';
import { FeaturedBundles } from '@/components/home/featured-bundles';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrendingAspirations />
      <CategoryGrid />
      <HowItWorks />
      <FeaturedBundles />
    </>
  );
}
