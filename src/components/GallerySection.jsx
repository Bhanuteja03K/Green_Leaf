import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    title: "Authentic Chicken Dum Biryani",
    tag: "Biryani Special",
    span: "row"   // taller card
  },
  {
    url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    title: "Rich Paneer Butter Masala",
    tag: "Curry Delights"
  },
  {
    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    title: "Blue Curacao Mojito",
    tag: "Mocktails"
  },
  {
    url: "https://images.unsplash.com/photo-1610057099443-f63a1520e53a?auto=format&fit=crop&w=800&q=80",
    title: "Spicy Chicken 65",
    tag: "Starters",
    span: "col"   // wider card
  },
  {
    url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    title: "Creamy Oreo Milkshake",
    tag: "Shakes"
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    title: "Warm Dining Ambiance",
    tag: "Ambiance"
  }
];

function GalleryCard({ img, index, onClick }) {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <div
      ref={ref}
      className="reveal relative h-72 rounded-3xl overflow-hidden glass-card cursor-pointer group border border-white/10"
      style={{ transitionDelay: `${index * 60}ms` }}
      onClick={() => onClick(img)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(img)}
      aria-label={`View ${img.title}`}
    >
      <img
        src={img.url}
        alt={img.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

      {/* Tag & Zoom Icon */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <span className="bg-dark-950/80 backdrop-blur-md text-leaf-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
          {img.tag}
        </span>
        <span className="w-8 h-8 rounded-full bg-dark-950/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Maximize2 className="w-4 h-4" />
        </span>
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="font-serif font-bold text-lg text-white group-hover:text-leaf-400 transition-colors">
          {img.title}
        </h3>
      </div>
    </div>
  );
}

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const headerRef = useScrollReveal();

  return (
    <section id="gallery" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-leaf-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-500/10 border border-leaf-500/30 text-leaf-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-leaf-400" />
            <span>Visual Tour</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white mb-4">
            Cafe &amp; Food <span className="text-leaf-400 italic">Gallery</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Take a glance at our mouthwatering preparations and vibrant dining atmosphere.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <GalleryCard
              key={index}
              img={img}
              index={index}
              onClick={setSelectedImage}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-dark-850 text-gray-300 hover:text-white border border-white/10 transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain bg-dark-950"
            />
            <div className="p-6 bg-dark-900 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-leaf-400 font-bold uppercase tracking-wider block mb-1">
                  {selectedImage.tag}
                </span>
                <h3 className="font-serif font-bold text-xl text-white">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
