import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; title?: string }[];
  currentIndex: number;
  onIndexChange?: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images.length > 1) handlePrev();
      if (e.key === 'ArrowRight' && images.length > 1) handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = () => {
    setZoomLevel(1);
    const newIdx = (currentIndex - 1 + images.length) % images.length;
    onIndexChange?.(newIdx);
  };

  const handleNext = () => {
    setZoomLevel(1);
    const newIdx = (currentIndex + 1) % images.length;
    onIndexChange?.(newIdx);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.7));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-6"
    >
      {/* Top Controls Bar */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between text-white z-50">
        <div className="text-sm font-medium tracking-wide">
          {currentImage.title && <span className="font-serif mr-3">{currentImage.title}</span>}
          <span className="text-white/60">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomIn}
            aria-label="Zoom In"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            aria-label="Zoom Out"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={handleResetZoom}
            aria-label="Reset Zoom"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2 bg-white/20 hover:bg-red-500/80 rounded-full transition-colors ml-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div 
        className="w-full h-full max-h-[85vh] flex items-center justify-center overflow-auto cursor-grab active:cursor-grabbing"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          src={currentImage.url}
          alt={currentImage.title || 'Fullscreen Preview'}
          style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
          className="max-h-full max-w-full object-contain select-none shadow-2xl rounded-sm"
        />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-gold text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-gold text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};

