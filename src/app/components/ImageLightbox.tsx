import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('lightbox-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lightbox-open');
    };
  }, [images.length, isOpen, onClose]);

  if (!isOpen || images.length === 0) {
    return null;
  }

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/95"
            onClick={onClose}
          />

          <motion.div
            key="lightbox-content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center px-4 py-6"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-[95] rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-white/20 transition-colors"
              aria-label="Cerrar vista completa"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-5xl flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>

              <div className="relative flex-1 flex items-center justify-center">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  className="hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Vista ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="max-h-[70vh] w-full object-contain rounded-3xl"
                />

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  className="hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-2xl border-2 overflow-hidden transition-all ${
                      index === currentIndex ? 'border-white' : 'border-white/20 opacity-70'
                    }`}
                  >
                    <img src={image} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="mt-4 flex w-full gap-3 md:hidden">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex-1 rounded-full border border-white/20 py-3 text-sm font-medium"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex-1 rounded-full border border-white/20 py-3 text-sm font-medium"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
