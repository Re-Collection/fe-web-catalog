import { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Menu, X, ArrowUpRight, Tag, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { Product } from './ProductCard';

interface NavigationProps {
  categories: { id: string; label: string }[];
  onCategorySelect: (categoryId: string) => void;
  products: Product[];
  onProductSelect: (product: Product) => void;
}

export function Navigation({ categories, onCategorySelect, products, onProductSelect }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const desktopInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (normalized.length < 2) return [];

    return products
      .filter((product) => {
        const matchesName = product.name.toLowerCase().includes(normalized);
        const matchesCategory = product.category?.toLowerCase().includes(normalized);
        const matchesDetail = product.detail?.toLowerCase().includes(normalized);
        return matchesName || matchesCategory || matchesDetail;
      })
      .slice(0, 6);
  }, [products, query]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!desktopSearchRef.current) return;
      if (desktopSearchRef.current.contains(event.target as Node)) return;
      setIsSearchActive(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileSearchOpen) {
      requestAnimationFrame(() => mobileInputRef.current?.focus());
    }
  }, [isMobileSearchOpen]);

  const clearSearch = () => {
    setQuery('');
    setIsSearchActive(false);
  };

  const handleResultSelect = (product: Product) => {
    onProductSelect(product);
    clearSearch();
    setIsMobileSearchOpen(false);
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && filteredProducts[0]) {
      event.preventDefault();
      handleResultSelect(filteredProducts[0]);
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      clearSearch();
      setIsMobileSearchOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              LUXE
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ y: -2 }}
                onClick={() => onCategorySelect(category.id)}
                className="text-sm text-gray-300 hover:text-white transition-colors relative group"
              >
                {category.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Desktop */}
            <div
              ref={desktopSearchRef}
              className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-all relative"
            >
              <Search className="w-4 h-4 text-gray-400" />
              <input
                ref={desktopInputRef}
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setIsSearchActive(true)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Buscar productos..."
                className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 ml-2 w-48"
              />
              <AnimatePresence>
                {isSearchActive && query.trim().length > 0 && (
                  <motion.button
                    key="clear-search"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={clearSearch}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Esc
                  </motion.button>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isSearchActive && query.trim().length >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-80 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl p-3"
                  >
                    {filteredProducts.length === 0 && (
                      <p className="text-sm text-gray-400 px-3 py-4">Sin resultados. Intenta con otra búsqueda.</p>
                    )}
                    <ul className="space-y-2">
                      {filteredProducts.map((product) => (
                        <li key={product.id}>
                          <button
                            onClick={() => handleResultSelect(product)}
                            className="w-full flex items-start gap-3 rounded-2xl px-3 py-2 text-left hover:bg-white/5 transition-colors"
                          >
                            <div className="flex-1">
                              <p className="text-sm font-medium text-white flex items-center gap-2">
                                {product.name}
                                <ArrowUpRight className="w-3 h-3 text-emerald-300" />
                              </p>
                              <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                                <span className="inline-flex items-center gap-1"><Tag className="w-3 h-3" />{product.category}</span>
                                {product.subcategory && (
                                  <span className="inline-flex items-center gap-1"><Layers className="w-3 h-3" />{product.subcategory}</span>
                                )}
                              </div>
                            </div>
                            <span className="text-emerald-300 text-sm font-semibold">
                              S/
                              {product.price.toFixed(2)}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Icon - Mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsMobileSearchOpen(true);
                setIsSearchActive(true);
              }}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    onCategorySelect(category.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-300 hover:text-white py-2 transition-colors"
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Buscar productos</h3>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => {
                  setIsMobileSearchOpen(false);
                  clearSearch();
                }}
                className="p-2 text-gray-400"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 mb-6">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                ref={mobileInputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Busca por nombre, categoría o detalle"
                className="flex-1 bg-transparent border-none outline-none text-base"
              />
            </div>

            <div className="space-y-3">
              {query.trim().length < 2 && (
                <p className="text-sm text-gray-400">Empieza a escribir al menos 2 caracteres.</p>
              )}

              {query.trim().length >= 2 && filteredProducts.length === 0 && (
                <p className="text-sm text-gray-400">Nada coincide todavía. Ajusta tu búsqueda.</p>
              )}

              <ul className="space-y-2">
                {filteredProducts.map((product) => (
                  <li key={`mobile-${product.id}`}>
                    <button
                      onClick={() => handleResultSelect(product)}
                      className="w-full flex flex-col gap-1 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-left"
                    >
                      <span className="text-base font-semibold text-white flex items-center gap-2">
                        {product.name}
                        <ArrowUpRight className="w-4 h-4 text-emerald-300" />
                      </span>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                        <span className="inline-flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {product.category}
                        </span>
                        {product.subcategory && (
                          <span className="inline-flex items-center gap-1">
                            <Layers className="w-3 h-3" /> {product.subcategory}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-emerald-300">S/{product.price.toFixed(2)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
