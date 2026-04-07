import { lazy, Suspense, useEffect, useState } from 'react';
import { Link, Routes, Route, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Product } from './components/ProductCard';
import { catalogSections, allProducts } from './data/catalogView';
import featuredProductKeys from './data/featuredProductsConfig';
import { ConstellationBackground } from './components/ConstellationBackground';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const ProductPage = lazy(() => import('./pages/ProductPage').then((module) => ({ default: module.ProductPage })));

function RouteFallback() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="h-[40vh] rounded-3xl border border-white/10 bg-white/5 animate-pulse" />
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">No encontramos esta página</h1>
      <p className="text-gray-300 mb-8">La URL no existe o fue movida. Puedes volver al catálogo principal.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
      >
        Ir al inicio
      </Link>
    </section>
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const navCategories = catalogSections.map((section) => ({
    id: section.sectionId,
    label: section.title,
  }));

  const [expandedSections, setExpandedSections] = useState<string[]>([]);

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
        <Suspense fallback={<RouteFallback />}>
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
                  expandedSections={expandedSections}
                  onSectionsChange={setExpandedSections}
                />
              }
            />
            <Route path="/producto/:slug" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
