import React from 'react';
import { Star, Flame, Plus, Minus, ArrowRight } from 'lucide-react';
import { CHEFS_PICKS } from '../data/menu';
import { useScrollReveal } from '../hooks/useScrollReveal';

function FeaturedCard({ dish, index, cartQuantity, onAddToCart, onRemoveFromCart }) {
  const ref = useScrollReveal({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className="reveal relative pt-20 pb-8 px-6 mt-12 rounded-[2rem] bg-gradient-to-b from-dark-900/80 to-dark-950 border border-white/5 group hover:border-leaf-500/20 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(132,204,22,0.15)] flex flex-col h-full"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Overlapping floating circular image */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-4 border-dark-950 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10 before:absolute before:inset-0 before:rounded-full before:border before:border-leaf-500/30">
        {dish.image ? (
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover group-hover:rotate-[5deg] transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-dark-800 flex items-center justify-center">
            <span className="font-serif text-3xl text-leaf-500 opacity-50">GL</span>
          </div>
        )}
      </div>

      <div className="text-center mt-6 flex-grow flex flex-col">
        {/* Rating/Stars */}
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-leaf-500 text-leaf-500" />
          ))}
        </div>

        <h3 className="font-serif font-bold text-2xl text-white mb-3 group-hover:text-leaf-400 transition-colors">
          {dish.name}
        </h3>
        
        <p className="text-sm text-gray-400 leading-relaxed font-light mb-6 flex-grow">
          {dish.description}
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Price</span>
            <span className="font-serif font-bold text-3xl text-white">
              <span className="text-leaf-400 text-xl mr-1">₹</span>{dish.price}
            </span>
          </div>

          {cartQuantity > 0 ? (
            <div className="flex items-center gap-4 bg-dark-900 border border-leaf-500/30 rounded-full p-1.5 shadow-inner">
              <button
                onClick={() => onRemoveFromCart(dish)}
                className="w-8 h-8 rounded-full bg-dark-950 hover:bg-red-500/20 text-gray-300 hover:text-red-400 flex items-center justify-center transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-white text-base min-w-[20px] text-center">
                {cartQuantity}
              </span>
              <button
                onClick={() => onAddToCart(dish)}
                className="w-8 h-8 rounded-full bg-leaf-500 hover:bg-leaf-400 text-dark-950 flex items-center justify-center font-bold transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart(dish)}
              className="group/btn relative overflow-hidden w-12 h-12 rounded-full bg-leaf-500 text-dark-950 flex items-center justify-center font-bold transition-all duration-300 hover:scale-110 shadow-lg shadow-leaf-500/20"
            >
              <Plus className="w-6 h-6 relative z-10 group-hover/btn:rotate-90 transition-transform duration-300" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export const FeaturedDishes = ({ onAddToCart, onRemoveFromCart, onOrderNow, cartItems = [] }) => {
  const headerRef = useScrollReveal();

  const getQuantity = (id) => {
    const item = cartItems.find((c) => c.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <section id="featured" className="py-32 bg-dark-950 relative overflow-hidden">
      {/* Abstract Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-leaf-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-leaf-400/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Flex layout for premium feel) */}
        <div ref={headerRef} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-500/10 border border-leaf-500/30 text-leaf-400 text-xs font-semibold tracking-widest uppercase mb-6">
              <Flame className="w-3.5 h-3.5 text-leaf-400" />
              <span>Signatures</span>
            </div>
            <h2 className="font-serif font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">
              Chef's <span className="text-leaf-400 italic">Masterpieces</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Experience the pinnacle of our culinary expertise with these highly recommended, authentic dishes.
            </p>
          </div>
          
          <button 
            onClick={onOrderNow}
            className="hidden md:flex items-center gap-2 text-leaf-400 hover:text-leaf-300 font-bold uppercase tracking-widest text-xs transition-colors group"
          >
            Order Full Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {CHEFS_PICKS.map((dish, index) => (
            <FeaturedCard
              key={dish.id}
              dish={dish}
              index={index}
              cartQuantity={getQuantity(dish.id)}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedDishes;
