import { motion } from 'motion/react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
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
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onViewDetails(product)}
            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Eye className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full z-10"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-white'
            }`}
          />
        </motion.button>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-white">{product.category}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-white font-medium mb-1 line-clamp-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">${product.price}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            Add to Cart
          </motion.button>
        </div>
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
