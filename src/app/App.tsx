import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Product } from './components/ProductCard';
import { catalogSections, allProducts } from './data/catalogView';
import featuredProductKeys from './data/featuredProductsConfig';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { ConstellationBackground } from './components/ConstellationBackground';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const navCategories = catalogSections.map((section) => ({
    id: section.sectionId,
    label: section.title,
  }));

  const [expandedSections, setExpandedSections] = useState<string[]>(() =>
    navCategories.slice(0, 2).map((section) => section.id)
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const params = new URLSearchParams(location.search);
    const sectionId = params.get('section');
    if (sectionId) {
      requestAnimationFrame(() => scrollToSection(sectionId));
      setSearchParams({}, { replace: true });
    }
  }, [location.pathname, location.search, setSearchParams]);

  const ensureSectionExpanded = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev : [...prev, sectionId]
    );
  };

  const handleCategorySelect = (sectionId: string) => {
    if (!sectionId) return;

    ensureSectionExpanded(sectionId);

    if (location.pathname !== '/') {
      navigate(`/?section=${sectionId}`);
      return;
    }

    requestAnimationFrame(() => scrollToSection(sectionId));
  };

  const handleViewDetails = (product: Product) => {
    navigate(`/producto/${product.slug}`);
  };

  const firstSectionId = navCategories[0]?.id;

  const featuredProducts = (() => {
    const byFolderKey = new Map(allProducts.map((product) => [product.imageFolder, product]));
    const curated = featuredProductKeys
      .map((folderKey) => (folderKey ? byFolderKey.get(folderKey) : undefined))
      .filter((product): product is Product => Boolean(product));
    return curated.length > 0 ? curated : allProducts.slice(0, 6);
  })();

  const handleExploreCollection = () => {
    if (firstSectionId) {
      handleCategorySelect(firstSectionId);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ConstellationBackground />
      <Navigation
        categories={navCategories}
        onCategorySelect={handleCategorySelect}
        products={allProducts}
        onProductSelect={handleViewDetails}
      />
      <div className="pt-24 relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                sections={catalogSections}
                allProducts={allProducts}
                featuredProducts={featuredProducts}
                onViewDetails={handleViewDetails}
                onExploreCollection={handleExploreCollection}
                onNewArrivals={() => handleCategorySelect(firstSectionId ?? '')}
                expandedSections={expandedSections}
                onSectionsChange={setExpandedSections}
              />
            }
          />
          <Route path="/producto/:slug" element={<ProductPage />} />
        </Routes>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
