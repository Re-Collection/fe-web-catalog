import { useEffect, useMemo, useState, MouseEvent, WheelEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ZoomIn, ChevronDown, RotateCcw } from 'lucide-react';
import { findProductBySlug } from '../data/catalogView';
import { formatCurrency } from '../utils/currency';

export function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = slug ? findProductBySlug(slug) : undefined;
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

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (zoomLevel === 1) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  const handleImageClick = () => {
    setZoomLevel((prev) => (prev > 1 ? 1 : 1.5));
  };

  const images = useMemo(() => {
    if (!product) return [];
    if (product.images && product.images.length > 0) return product.images;
    return product.image ? [product.image] : [];
  }, [product]);
  const activeImage = images[selectedImage] ?? '';
  const isZoomed = zoomLevel > 1.01;

  useEffect(() => {
    setSelectedImage(0);
    setZoomLevel(1);
    setTransformOrigin('center');
  }, [product?.slug]);

  if (!product) {
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
        <p className="text-gray-400 mb-8">
          No pudimos encontrar el producto que estás buscando. Revisa el enlace o vuelve al catálogo.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          Volver al catálogo
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div
            className="relative aspect-square rounded-3xl overflow-hidden bg-black"
            onWheel={handleWheelZoom}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTransformOrigin('center')}
          >
            <motion.img
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: zoomLevel }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              src={activeImage || ''}
              alt={`${product.name} vista ${selectedImage + 1}`}
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

          {images.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => {
                    setSelectedImage(index);
                    resetZoom();
                  }}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-white' : 'border-white/20 opacity-70'
                  }`}
                >
                  <img src={image} alt={`${product.name} miniatura ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <span className="inline-block self-start bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white mb-4">
            {product.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-4xl font-bold text-emerald-300">{formatCurrency(product.price)}</span>
            {product.oldPrice && (
              <span className="text-2xl text-rose-400 line-through">{formatCurrency(product.oldPrice)}</span>
            )}
          </div>

          {product.detail && (
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-rose-200/70 mb-2">Detalle</p>
              <p className="text-sm text-rose-200 font-semibold">{product.detail}</p>
            </div>
          )}

          <div className="mb-8 rounded-2xl border border-white/5 bg-white/5">
            <button
              type="button"
              onClick={() => setInfoOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-white"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Información</p>
                <p className="text-base font-semibold">Detalles del artículo</p>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform ${infoOpen ? 'rotate-180' : ''}`} />
            </button>
            <motion.div
              initial={false}
              animate={{ height: infoOpen ? 'auto' : 0, opacity: infoOpen ? 1 : 0 }}
              className="overflow-hidden px-5 pb-5"
            >
              {infoOpen && (
                <div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {product.description ||
                      'Explora cada detalle del producto, revisa la galería fotográfica y encuentra la información clave para tomar la mejor decisión.'}
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          <div className="grid gap-4 text-sm text-gray-300">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-gray-400">Subcategoría</span>
              <span className="text-white">{product.subcategory || 'Sin especificar'}</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-gray-400">Colección</span>
              <span className="text-white">{product.category}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Cantidad de fotos</span>
              <span className="text-white">{images.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
