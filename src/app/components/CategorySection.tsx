import { motion } from 'motion/react';
import { ProductCard, Product } from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { cn } from './ui/utils';

interface CategorySectionProps {
  title: string;
  products: Product[];
  onViewDetails: (product: Product) => void;
  sectionId?: string;
  description?: string;
  showHeader?: boolean;
  compact?: boolean;
  className?: string;
}

export function CategorySection({
  title,
  products,
  onViewDetails,
  sectionId,
  description = 'Discover our curated selection',
  showHeader = true,
  compact = false,
  className,
}: CategorySectionProps) {
  const verticalPadding = compact ? 'py-10 md:py-12' : 'py-16 md:py-24';

  return (
    <section id={sectionId} className={cn(verticalPadding, className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            layout
            className="relative flex flex-wrap items-center justify-between gap-6 mb-12"
          >
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-300/70">
                <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
                <span>Curated Lineup</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-2">{title}</h2>
              <p className="text-gray-400">{description}</p>
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              className="hidden md:flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
            >
              View All
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.div
              aria-hidden
              className="absolute inset-0 -z-10 opacity-70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="absolute right-0 top-0 h-24 w-24 bg-emerald-400/20 blur-[80px]" />
              <div className="absolute left-10 bottom-0 h-20 w-32 bg-sky-500/10 blur-3xl" />
            </motion.div>
          </motion.div>
        )}

        {/* Product Grid */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {products.map((product, index) => {
            const animationDelay = Math.min(index * 0.1, 0.4);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: animationDelay }}
              >
                <ProductCard product={product} onViewDetails={onViewDetails} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button - Mobile */}
        {showHeader && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="md:hidden mt-8 w-full border border-white/20 text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            View All {title}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </section>
  );
}
