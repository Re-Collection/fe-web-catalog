import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import { findProductBySlug } from '../data/catalogView';
import { formatCurrency } from '../utils/currency';

export function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = slug ? findProductBySlug(slug) : undefined;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = useMemo(() => {
    if (!product) return [];
    if (product.images && product.images.length > 0) return product.images;
    return product.image ? [product.image] : [];
  }, [product]);
  const activeImage = images[selectedImage] ?? '';

  useEffect(() => {
    setSelectedImage(0);
    setIsZoomed(false);
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
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-black">
            <motion.img
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={activeImage || ''}
              alt={`${product.name} vista ${selectedImage + 1}`}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed((prev) => !prev)}
            />

            {!isZoomed && (
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm p-3 rounded-full">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => {
                    setSelectedImage(index);
                    setIsZoomed(false);
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
            <span className="text-4xl font-bold">{formatCurrency(product.price)}</span>
            {product.oldPrice && (
              <span className="text-2xl text-gray-500 line-through">{formatCurrency(product.oldPrice)}</span>
            )}
          </div>

          {product.detail && (
            <p className="text-sm text-rose-300 mb-4">{product.detail}</p>
          )}

          <p className="text-gray-300 leading-relaxed mb-8">
            {product.description ||
              'Explora cada detalle del producto, revisa la galería fotográfica y encuentra la información clave para tomar la mejor decisión.'}
          </p>

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
