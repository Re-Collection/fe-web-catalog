import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingCart, Heart, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { Product } from './ProductCard';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) return null;

  // Simulating multiple product images (in real app, these would come from the product data)
  const images = [product.image, product.image, product.image];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-gray-900 border border-white/10 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 overflow-y-auto max-h-[90vh]">
                {/* Image Gallery */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-black group">
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      src={images[selectedImage]}
                      alt={product.name}
                      className={`w-full h-full object-cover transition-transform duration-300 ${
                        isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                      }`}
                      onClick={() => setIsZoomed(!isZoomed)}
                    />

                    {/* Zoom Indicator */}
                    {!isZoomed && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full"
                      >
                        <ZoomIn className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                  </div>

                  {/* Thumbnail Images */}
                  <div className="grid grid-cols-3 gap-3">
                    {images.map((image, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? 'border-white'
                            : 'border-white/20 opacity-60'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="self-end bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors mb-4"
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>

                  <div className="flex-1">
                    {/* Category */}
                    <span className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white mb-4">
                      {product.category}
                    </span>

                    {/* Product Name */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {product.name}
                    </h2>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">(128 reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">${product.price}</span>
                      <span className="text-gray-400 line-through ml-3">
                        ${(product.price * 1.3).toFixed(0)}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {product.description ||
                        'Experience premium quality and exceptional design with this carefully crafted product. Made with the finest materials and attention to detail.'}
                    </p>

                    {/* Quantity Selector */}
                    <div className="mb-8">
                      <label className="text-white font-medium mb-3 block">Quantity</label>
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                        >
                          <Minus className="w-5 h-5 text-white" />
                        </motion.button>
                        <span className="text-2xl font-bold text-white min-w-[3rem] text-center">
                          {quantity}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setQuantity(quantity + 1)}
                          className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                        >
                          <Plus className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white text-black py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
                      >
                        Buy Now
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full border border-white/20 text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                      >
                        <Heart className="w-5 h-5" />
                        Add to Wishlist
                      </motion.button>
                    </div>

                    {/* Product Features */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h3 className="text-white font-medium mb-4">Product Features</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          Premium quality materials
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          Free shipping & returns
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          1-year warranty included
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
