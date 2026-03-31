import { motion } from 'motion/react';
import { ProductCard, Product } from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  products: Product[];
  onViewDetails: (product: Product) => void;
  sectionId?: string;
}

export function CategorySection({ title, products, onViewDetails, sectionId }: CategorySectionProps) {
  return (
    <section id={sectionId} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-400">Discover our curated selection</p>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
        </div>

        {/* View All Button - Mobile */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="md:hidden mt-8 w-full border border-white/20 text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
        >
          View All {title}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
