import React from 'react';
import { Utensils, Sparkles, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * "Hungry Yet?" — full-width CTA section between drinks and gallery.
 */
export const CTASection = ({ onOrderNow, onExploreMenu }) => {
  const ref = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-20 relative overflow-hidden bg-dark-900">
      {/* Vivid leaf-green gradient band behind content */}
      <div className="absolute inset-0 bg-gradient-to-br from-leaf-700/20 via-dark-900 to-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-leaf-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating leaf decorations */}
      <div className="absolute top-6 left-8 text-leaf-500/10 animate-leaf-1 pointer-events-none">
        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-12 text-leaf-400/10 animate-leaf-2 pointer-events-none">
        <svg className="w-28 h-28 rotate-45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="reveal text-center flex flex-col items-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf-500/15 border border-leaf-500/40 text-leaf-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Order?</span>
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-6xl text-white mb-4 leading-tight">
            Hungry <span className="text-leaf-400 italic">Yet?</span>
          </h2>

          <p className="text-gray-300 text-lg sm:text-xl mb-4 font-light">
            Your favourite food is waiting.
          </p>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mb-10 leading-relaxed">
            Place your order via WhatsApp in seconds — no app download needed. Just pick your dishes, tap Order Now, and we'll handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOrderNow}
              className="w-full sm:w-auto bg-gradient-to-r from-leaf-500 to-leaf-600 hover:from-leaf-400 hover:to-leaf-500 text-dark-950 font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-leaf-500/30 hover:shadow-leaf-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Utensils className="w-5 h-5" />
              <span>Order Now</span>
            </button>

            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto glass-card hover:bg-white/10 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider border border-white/20 hover:border-leaf-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5 text-leaf-400" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
