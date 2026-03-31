import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Product } from './components/ProductCard';
import { catalogSections, allProducts } from './data/catalogView';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const navCategories = catalogSections.map((section) => ({
    id: section.sectionId,
    label: section.title,
  }));

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

  const handleCategorySelect = (sectionId: string) => {
    if (!sectionId) return;

    if (location.pathname !== '/') {
      navigate(`/?section=${sectionId}`);
      return;
    }

    scrollToSection(sectionId);
  };

  const handleViewDetails = (product: Product) => {
    navigate(`/producto/${product.slug}`);
  };

  const firstSectionId = navCategories[0]?.id;

  const handleExploreCollection = () => {
    if (firstSectionId) {
      handleCategorySelect(firstSectionId);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation categories={navCategories} onCategorySelect={handleCategorySelect} />
      <div className="pt-24">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                sections={catalogSections}
                allProducts={allProducts}
                onViewDetails={handleViewDetails}
                onExploreCollection={handleExploreCollection}
                onNewArrivals={() => handleCategorySelect(firstSectionId ?? '')}
              />
            }
          />
          <Route path="/producto/:slug" element={<ProductPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
