import { Hero } from '../components/Hero';
import { FeaturedSection } from '../components/FeaturedSection';
import { CategorySection } from '../components/CategorySection';
import type { Product } from '../components/ProductCard';
import type { CatalogSection } from '../data/catalogView';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { motion } from 'motion/react';

interface HomePageProps {
  sections: CatalogSection[];
  allProducts: Product[];
  featuredProducts: Product[];
  onViewDetails: (product: Product) => void;
  onExploreCollection: () => void;
  onNewArrivals: () => void;
  expandedSections: string[];
  onSectionsChange: (values: string[]) => void;
}

export function HomePage({
  sections,
  allProducts,
  featuredProducts,
  onViewDetails,
  onExploreCollection,
  onNewArrivals,
  expandedSections,
  onSectionsChange,
}: HomePageProps) {
  return (
    <main>
      <Hero onExploreCollection={onExploreCollection} onNewArrivals={onNewArrivals} />

      {featuredProducts.length > 0 && (
        <FeaturedSection products={featuredProducts} onViewDetails={onViewDetails} />
      )}

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 mb-10"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Colecciones</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Explora por categoría</h2>
            <p className="text-white/60 max-w-2xl">
              Activa solo la categoría que necesitas y mantén el resto comprimido para un flujo de navegación
              más ágil.
            </p>
          </motion.div>

          <Accordion
            type="multiple"
            value={expandedSections}
            onValueChange={onSectionsChange}
            className="space-y-6"
          >
            {sections.map((section, index) => {
              const isOpen = expandedSections.includes(section.sectionId);

              return (
                <AccordionItem key={section.sectionId} value={section.sectionId} className="border-none">
                  <motion.div
                    layout
                    transition={{ type: 'spring', stiffness: 160, damping: 20 }}
                    className="relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
                    animate={{ borderColor: isOpen ? 'rgba(94,234,212,0.5)' : 'rgba(255,255,255,0.08)' }}
                  >
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0"
                      animate={{ opacity: isOpen ? 0.4 : 0.1 }}
                      transition={{ duration: 0.6, delay: isOpen ? 0 : 0.1 }}
                      style={{
                        background:
                          'radial-gradient(circle at top right, rgba(94,234,212,0.25), transparent 55%)',
                      }}
                    />

                    <AccordionTrigger className="relative z-10 px-6 py-5 md:px-10 md:py-7 [&>svg]:hidden">
                      <div className="flex flex-col md:flex-row md:items-center w-full gap-4">
                        <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight">
                          <span>{section.title}</span>
                          <motion.span
                            initial={false}
                            animate={{
                              x: isOpen ? 6 : 0,
                              opacity: isOpen ? 0.7 : 0.4,
                            }}
                            transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                            className="text-emerald-300 text-lg"
                          >
                            &gt;
                          </motion.span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                          <span className="px-3 py-1 rounded-full border border-white/10">
                            {section.products.length} productos seleccionados
                          </span>
                          <span className="text-white/40">
                            {section.sectionId ? `#${section.sectionId}` : `Bloque ${index + 1}`}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="relative z-10 px-2 sm:px-4 md:px-6 lg:px-10 pb-8 md:pb-10">
                      <CategorySection
                        title={section.title}
                        sectionId={section.sectionId}
                        products={section.products}
                        onViewDetails={onViewDetails}
                        showHeader={false}
                        compact
                        className="pt-6 md:pt-8"
                      />
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
