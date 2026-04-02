import { Hero } from '../components/Hero';
import { FeaturedSection } from '../components/FeaturedSection';
import { CategorySection } from '../components/CategorySection';
import type { CSSProperties } from 'react';
import type { Product } from '../components/ProductCard';
import type { CatalogSection } from '../data/catalogView';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { motion } from 'motion/react';

const accordionPalette = [
  {
    idleBorder: 'rgba(167,139,250,0.24)',
    openBorder: 'rgba(196,181,253,0.62)',
    overlayOpen: 0.34,
    overlayClosed: 0.12,
    overlayBackground:
      'radial-gradient(circle at 85% 10%, rgba(196,181,253,0.32), transparent 56%)',
    hoverBg: 'rgba(139,92,246,0.16)',
    activeBg: 'rgba(139,92,246,0.24)',
    titleColor: 'rgb(233 213 255)',
  },
  {
    idleBorder: 'rgba(192,132,252,0.24)',
    openBorder: 'rgba(216,180,254,0.58)',
    overlayOpen: 0.32,
    overlayClosed: 0.12,
    overlayBackground:
      'radial-gradient(circle at 88% 6%, rgba(216,180,254,0.28), transparent 58%)',
    hoverBg: 'rgba(168,85,247,0.16)',
    activeBg: 'rgba(168,85,247,0.24)',
    titleColor: 'rgb(245 208 254)',
  },
  {
    idleBorder: 'rgba(129,140,248,0.24)',
    openBorder: 'rgba(165,180,252,0.58)',
    overlayOpen: 0.33,
    overlayClosed: 0.11,
    overlayBackground:
      'radial-gradient(circle at 86% 8%, rgba(165,180,252,0.3), transparent 58%)',
    hoverBg: 'rgba(99,102,241,0.15)',
    activeBg: 'rgba(99,102,241,0.22)',
    titleColor: 'rgb(224 231 255)',
  },
  {
    idleBorder: 'rgba(244,114,182,0.2)',
    openBorder: 'rgba(251,182,206,0.48)',
    overlayOpen: 0.3,
    overlayClosed: 0.1,
    overlayBackground:
      'radial-gradient(circle at 86% 12%, rgba(244,114,182,0.22), transparent 58%)',
    hoverBg: 'rgba(236,72,153,0.12)',
    activeBg: 'rgba(236,72,153,0.18)',
    titleColor: 'rgb(251 207 232)',
  },
] as const;

interface HomePageProps {
  sections: CatalogSection[];
  allProducts: Product[];
  featuredProducts: Product[];
  onViewDetails: (product: Product) => void;
  onExploreCollection: () => void;
  expandedSections: string[];
  onSectionsChange: (values: string[]) => void;
}

export function HomePage({
  sections,
  allProducts,
  featuredProducts,
  onViewDetails,
  onExploreCollection,
  expandedSections,
  onSectionsChange,
}: HomePageProps) {
  return (
    <main>
      <Hero onExploreCollection={onExploreCollection} />

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
              const tone = accordionPalette[index % accordionPalette.length];

              return (
                <AccordionItem
                  key={section.sectionId}
                  value={section.sectionId}
                  className="group/section border-none"
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
                    className="relative overflow-hidden rounded-[32px] border bg-white/[0.03] backdrop-blur-sm transition-shadow duration-300 ease-out group-hover/section:shadow-[0_16px_42px_-24px_rgba(168,85,247,0.6)]"
                    animate={{ borderColor: isOpen ? tone.openBorder : tone.idleBorder }}
                  >
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0"
                      animate={{ opacity: isOpen ? tone.overlayOpen : tone.overlayClosed }}
                      transition={{ duration: 0.6, delay: isOpen ? 0 : 0.1 }}
                      style={{
                        background: tone.overlayBackground,
                      }}
                    />

                    <AccordionTrigger
                      className="relative z-10 px-6 py-5 md:px-10 md:py-7 group-data-[state=closed]/section:hover:bg-[var(--accordion-hover-bg)] group-data-[state=closed]/section:hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] group-data-[state=closed]/section:focus-within:bg-[var(--accordion-hover-bg)] group-data-[state=closed]/section:active:bg-[var(--accordion-active-bg)] group-data-[state=closed]/section:[&>div>div>span[data-accordion-title]]:transition-all group-data-[state=closed]/section:[&>div>div>span[data-accordion-title]]:duration-300 group-data-[state=closed]/section:[&>div>div>span[data-accordion-title]]:ease-out group-data-[state=closed]/section:hover:[&>div>div>span[data-accordion-title]]:translate-x-1 group-data-[state=closed]/section:hover:[&>div>div>span[data-accordion-title]]:text-[var(--accordion-title)]"
                      style={{
                        '--accordion-hover-bg': tone.hoverBg,
                        '--accordion-active-bg': tone.activeBg,
                        '--accordion-title': tone.titleColor,
                      } as CSSProperties}
                    >
                      <div className="flex flex-col md:flex-row md:items-center w-full gap-4">
                        <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight">
                          <span data-accordion-title>{section.title}</span>
                          <motion.span
                            initial={false}
                            animate={{
                              x: isOpen ? 6 : 0,
                              opacity: isOpen ? 0.76 : 0.5,
                            }}
                            transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                            className="text-violet-300 text-lg"
                          >
                            &gt;
                          </motion.span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-white/65">
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
                      {isOpen && (
                        <CategorySection
                          title={section.title}
                          sectionId={section.sectionId}
                          products={section.products}
                          onViewDetails={onViewDetails}
                          showHeader={false}
                          compact
                          className="pt-6 md:pt-8"
                        />
                      )}
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
