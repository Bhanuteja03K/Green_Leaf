import React from 'react';
import { ArrowDown, Utensils, Sparkles, Clock, MapPin } from 'lucide-react';
import { CAFE_CONFIG } from '../data/config';
import LeafDecorations from './LeafDecorations';

export const Hero = ({ onExploreMenu, onOrderNow }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-950"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80"
          alt="Green Leaf Cafe Restaurant Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.35] contrast-125"
        />
        {/* Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-950/50 to-dark-950" />
      </div>

      {/* Floating Leaf Particles & Ambient Glow */}
      <LeafDecorations />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf-500/10 border border-leaf-500/30 text-leaf-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg shadow-leaf-500/10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-leaf-400" />
          <span>Welcome to Green Leaf</span>
        </div>

        {/* Cafe Title */}
        <h1 className="font-serif font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4 leading-tight">
          <span className="block text-white drop-shadow-md">{CAFE_CONFIG.name}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-leaf-400 via-emerald-300 to-leaf-500 font-serif font-normal text-3xl sm:text-5xl md:text-6xl mt-1 tracking-widest uppercase">
            {CAFE_CONFIG.subName}
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-leaf-400 mb-6 drop-shadow-md font-medium tracking-wide">
          "{CAFE_CONFIG.tagline}"
        </p>

        {/* Supporting text */}
        <p className="max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl font-light mb-10 leading-relaxed">
          {CAFE_CONFIG.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Explore Menu Button */}
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto bg-gradient-to-r from-leaf-500 to-leaf-600 hover:from-leaf-400 hover:to-leaf-500 text-dark-950 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-leaf-500/25 hover:shadow-leaf-500/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3"
          >
            <span>Explore Menu</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          {/* Order Now Button */}
          <button
            onClick={onOrderNow}
            className="w-full sm:w-auto glass-card hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider border border-white/20 hover:border-leaf-400 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3"
          >
            <Utensils className="w-4 h-4 text-leaf-400" />
            <span>Order Now</span>
          </button>
        </div>

        {/* Highlights Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-3xl pt-8 border-t border-white/10 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center justify-center gap-2 glass-card py-3 px-4 rounded-xl">
            <Clock className="w-4 h-4 text-leaf-400 shrink-0" />
            <span>10:00 AM - 10:00 PM</span>
          </div>
          <div className="flex items-center justify-center gap-2 glass-card py-3 px-4 rounded-xl">
            <Sparkles className="w-4 h-4 text-leaf-400 shrink-0" />
            <span>100% Fresh & Authentic</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 glass-card py-3 px-4 rounded-xl">
            <MapPin className="w-4 h-4 text-leaf-400 shrink-0" />
            <span>Dine-in & Takeaway</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
