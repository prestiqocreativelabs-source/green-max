import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImagePlus, X, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-generate 57 images: gallery-1.jpg → gallery-57.jpg
  const galleryImages = Array.from({ length: 57 }, (_, i) => ({
    src: `/images/gallery/gallery-${i + 1}.jpg`,
    alt: `project photos ${i + 1}`,
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.gallery-item');

      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <ImagePlus className="w-4 h-4 text-green-brand" />
            <span className="text-sm font-medium text-green-brand">Visual Journey</span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-brand">Gallery</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click any image to view full size.
          </p>
        </div>

        <div
          ref={gridRef}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ImagePlus className="w-6 h-6 text-green-brand" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div
            className="max-w-5xl max-h-[80vh] px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[currentImageIndex].alt}
            </p>

            <p className="text-white/60 text-center text-sm mt-2">
              {currentImageIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;