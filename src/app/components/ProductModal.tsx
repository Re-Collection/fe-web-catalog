import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronDown, RotateCcw } from 'lucide-react';
import { useEffect, useState, MouseEvent, WheelEvent } from 'react';
import { Product } from './ProductCard';
import { formatCurrency } from '../utils/currency';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState('center');
  const [infoOpen, setInfoOpen] = useState(true);
  const zoomBounds = { min: 1, max: 2.5 };

  const clampZoom = (value: number) => Math.min(zoomBounds.max, Math.max(zoomBounds.min, value));

  const resetZoom = () => {
    setZoomLevel(1);
    setTransformOrigin('center');
  };

  const handleWheelZoom = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 0.12 : -0.12;
    setZoomLevel((prev) => clampZoom(Number((prev + delta).toFixed(2))));
  };

  const handleImageClick = () => {
    setZoomLevel((prev) => (prev > 1 ? 1 : 1.5));
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (zoomLevel === 1) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  if (!product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const isZoomed = zoomLevel > 1.01;

  useEffect(() => {
    setSelectedImage(0);
    setZoomLevel(1);
    setTransformOrigin('center');
  }, [product?.id, isOpen]);

  useEffect(() => {
    setZoomLevel(1);
    setTransformOrigin('center');
  }, [selectedImage]);

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
                  <div
                    className="relative aspect-square rounded-2xl overflow-hidden bg-black group"
                    onWheel={handleWheelZoom}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setTransformOrigin('center')}
                  >
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, scale: zoomLevel }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      src={images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      style={{ transformOrigin, cursor: isZoomed ? 'grab' : 'zoom-in' }}
                      onClick={handleImageClick}
                    />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Control de zoom</span>
                      <span>{zoomLevel.toFixed(1)}x</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ZoomIn className="w-4 h-4 text-gray-400" />
                      <input
                        type="range"
                        min={zoomBounds.min}
                        max={zoomBounds.max}
                        step={0.05}
                        value={zoomLevel}
                        onChange={(event) => setZoomLevel(clampZoom(parseFloat(event.target.value)))}
                        className="flex-1 accent-emerald-300"
                      />
                      <button
                        type="button"
                        onClick={resetZoom}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        aria-label="Restablecer zoom"
                      >
                        <RotateCcw className="w-4 h-4 text-white" />
                      </button>
                    </div>
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
                      <span className="text-4xl font-bold text-emerald-300">
                        {formatCurrency(product.price)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-2xl text-rose-400 line-through">
                          {formatCurrency(product.oldPrice)}
                        </span>
                      )}
                    </div>

                    {/* Collapsible Info */}
                    <div className="mb-8 rounded-2xl border border-white/5 bg-white/5">
                      <button
                        type="button"
                        onClick={() => setInfoOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left text-white/90"
                      >
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Información</p>
                          <p className="text-base font-semibold">Detalles del artículo</p>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${infoOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {infoOpen && (
                          <motion.div
                            key="modal-info"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden px-5 pb-5"
                          >
                            {product.detail && (
                              <p className="text-sm text-rose-400 font-semibold mb-3">
                                {product.detail}
                              </p>
                            )}
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                              {product.description ||
                                'Explora cada ángulo del producto usando la galería y revisa la información destacada para conocer sus principales características.'}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

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
