import { Hero } from '../components/Hero';
import { FeaturedSection } from '../components/FeaturedSection';
import { CategorySection } from '../components/CategorySection';
import type { Product } from '../components/ProductCard';
import type { CatalogSection } from '../data/catalogView';

interface HomePageProps {
  sections: CatalogSection[];
  allProducts: Product[];
  featuredProducts: Product[];
  onViewDetails: (product: Product) => void;
  onExploreCollection: () => void;
  onNewArrivals: () => void;
}

export function HomePage({
  sections,
  allProducts,
  featuredProducts,
  onViewDetails,
  onExploreCollection,
  onNewArrivals,
}: HomePageProps) {
  return (
    <main>
      <Hero onExploreCollection={onExploreCollection} onNewArrivals={onNewArrivals} />

      {featuredProducts.length > 0 && (
        <FeaturedSection products={featuredProducts} onViewDetails={onViewDetails} />
      )}

      {sections.map((section) => (
        <CategorySection
          key={section.sectionId}
          title={section.title}
          sectionId={section.sectionId}
          products={section.products}
          onViewDetails={onViewDetails}
        />
      ))}
    </main>
  );
}
