import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Product } from './ProductCard';
import { formatCurrency } from '../utils/currency';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  useEffect(() => {
    setSelectedImage(0);
    setIsZoomed(false);
  }, [product?.id, isOpen]);

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
                    <div className="mb-6 flex items-baseline gap-4">
                      <span className="text-4xl font-bold text-white">
                        {formatCurrency(product.price)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-2xl text-gray-500 line-through">
                          {formatCurrency(product.oldPrice)}
                        </span>
                      )}
                    </div>

                    {/* Detail */}
                    {product.detail && (
                      <p className="text-sm text-rose-400 font-semibold mb-4">
                        {product.detail}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
                      {product.description ||
                        'Explora cada ángulo del producto usando la galería y revisa la información destacada para conocer sus principales características.'}
                    </p>

                    {/* Product Snapshot */}
                    <div className="grid gap-4 text-sm text-gray-300">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Subcategoría</span>
                        <span className="text-white">{product.subcategory || 'Sin especificar'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Colección</span>
                        <span className="text-white">{product.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Imágenes</span>
                        <span className="text-white">{images.length}</span>
                      </div>
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
