import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import { formatCurrency } from '../utils/currency';

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  category: string;
  subcategory?: string;
  imageFolder?: string;
  detail?: string;
  description?: string;
  slug: string;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onViewDetails(product)}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-900">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(event) => {
              event.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Eye className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-white">{product.category}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            {product.subcategory || product.category}
          </p>
          <h3 className="text-white font-medium line-clamp-1">{product.name}</h3>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-white">
            {formatCurrency(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatCurrency(product.oldPrice)}
            </span>
          )}
        </div>
        {product.detail && (
          <p className="text-xs text-pink-200/80 line-clamp-2">{product.detail}</p>
        )}
      </div>

      {/* Hover Border Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none"
      />
    </motion.div>
  );
}
