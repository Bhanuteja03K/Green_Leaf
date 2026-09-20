import React, { useState, useEffect } from 'react';
import { Play, Utensils, Star, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { CHEFS_PICKS } from '../data/menu';
import LeafDecorations from './LeafDecorations';

// We'll add some dummy 3D/Chef data to the CHEFS_PICKS specifically for the Hero showcase
const showcaseItems = CHEFS_PICKS.map((pick, i) => ({
  ...pick,
  rating: [4.9, 4.8, 4.7, 4.9, 4.6, 4.8][i % 6],
  chef: ["Chef Feny", "Chef Semmy", "Chef Adin", "Chef Reza", "Chef Kamal", "Chef Priya"][i % 6],
  likes: [96, 84, 112, 145, 89, 210][i % 6],
  tag: ["#1 Most loved dish", "Signature Special", "Customer Favorite", "Authentic Recipe", "Spicy Delight", "Chef's Recommendation"][i % 6]
}));

export const Hero = ({ onExploreMenu, onOrderNow }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const activeItem = showcaseItems[activeIndex];

  const handleThumbnailClick = (index) => {
    if (index === activeIndex || animating) return;
    setAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setAnimating(false), 500);
  };

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
    setTimeout(() => setAnimating(false), 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-10 overflow-hidden bg-dark-950 flex flex-col justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft abstract color blocking inspired by the reference */}
        <div className="absolute top-0 right-0 w-[60%] h-[120%] bg-dark-900 -skew-x-12 translate-x-32" />
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-leaf-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <LeafDecorations />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center h-full">
        
        {/* LEFT COLUMN: 3D Plate Showcase */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start lg:-ml-12 relative h-[350px] sm:h-[450px] lg:h-[600px]">
          {/* Main 3D Plate Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {showcaseItems.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                    isActive 
                      ? 'opacity-100 scale-100 rotate-0 z-20' 
                      : 'opacity-0 scale-75 -rotate-90 z-10'
                  }`}
                  style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full object-cover shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-4 border-dark-850"
                  />
                  {/* Subtle 3D lighting overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/40 via-transparent to-white/10 mix-blend-overlay w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] m-auto pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CENTER COLUMN: Typography & Main Info */}
        <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left z-20">
          <div className="animate-fade-in transition-all duration-300" key={`text-${activeIndex}`}>
            <p className="text-gray-400 font-semibold tracking-widest text-xs uppercase mb-3">
              {activeItem.tag}
            </p>
            
            <h1 className="font-serif font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white mb-6 leading-[1.05] drop-shadow-xl uppercase">
              {activeItem.name.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {i === arr.length - 1 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf-400 to-leaf-600 block">{word}</span>
                  ) : (
                    <span>{word} </span>
                  )}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed mb-8">
              {activeItem.description}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
              <button 
                onClick={onOrderNow}
                className="bg-leaf-500 hover:bg-leaf-400 text-dark-950 font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_10px_25px_rgba(132,204,22,0.3)] transition-all transform hover:-translate-y-1"
              >
                <Utensils className="w-4 h-4" />
                Order Food
              </button>

              <button 
                onClick={onExploreMenu}
                className="glass-card hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-1 border border-white/20"
              >
                <Play className="w-4 h-4 fill-white" />
                Full Menu
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Info Card (Chef/Rating) */}
        <div className="lg:col-span-2 hidden lg:flex flex-col items-end justify-center z-20">
          <div className="glass-card bg-dark-900/80 p-6 rounded-3xl border border-white/10 shadow-2xl w-full max-w-[240px] animate-fade-in-delay">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Overview</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Ingredients</span>
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-leaf-500 text-dark-950 font-serif font-extrabold text-4xl mb-3 shadow-[0_10px_20px_rgba(132,204,22,0.3)]">
                {activeItem.rating}
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(activeItem.rating) ? 'fill-leaf-500 text-leaf-500' : 'fill-gray-600 text-gray-600'}`} />
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-serif font-bold text-white text-xl mb-1">{activeItem.chef}</h4>
              <p className="text-[10px] text-gray-400 mb-4 leading-relaxed line-clamp-3">
                Expertly crafted using the finest local ingredients and traditional spices for an unforgettable taste.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-300 bg-dark-950/50 py-2 rounded-full border border-white/5">
                <ThumbsUp className="w-3.5 h-3.5 text-leaf-400" />
                <span className="font-bold">{activeItem.likes} Likes</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM CAROUSEL NAVIGATOR */}
      <div className="absolute bottom-6 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center lg:justify-start gap-4">
          
          <button onClick={prevSlide} className="w-10 h-10 rounded-full glass-card hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/20">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2 px-2 mask-linear">
            {showcaseItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleThumbnailClick(idx)}
                className={`relative shrink-0 transition-all duration-300 rounded-2xl flex flex-col items-center gap-2 p-2 ${
                  activeIndex === idx ? 'bg-white/10 scale-105 border border-white/20 shadow-lg' : 'hover:bg-white/5 border border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-lg border-2 border-dark-800"
                />
                <span className="text-[10px] font-semibold text-white max-w-[80px] text-center truncate w-full">
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          <button onClick={nextSlide} className="w-10 h-10 rounded-full glass-card hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/20">
            <ChevronRight className="w-5 h-5" />
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
