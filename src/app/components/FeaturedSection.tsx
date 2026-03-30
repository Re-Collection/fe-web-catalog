import { motion } from 'motion/react';
import { ProductCard, Product } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface FeaturedSectionProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export function FeaturedSection({ products, onViewDetails }: FeaturedSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Featured Collection</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Handpicked for You
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our most popular products, carefully selected to match your style and needs
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} onViewDetails={onViewDetails} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
