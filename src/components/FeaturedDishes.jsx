import React from 'react';
import { Sparkles, Plus, ShoppingBag, Flame } from 'lucide-react';
import { CHEFS_PICKS } from '../data/menu';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FeaturedDishes = ({ onAddToCart, onOrderNow }) => {
  const headerRef = useScrollReveal();

  return (
    <section id="featured" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-leaf-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-leaf-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-500/10 border border-leaf-500/30 text-leaf-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-leaf-400" />
            <span>Handcrafted Specials</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white mb-4">
            Chef's <span className="text-leaf-400 italic">Picks</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Signature favourites lovingly cooked with our special blend of authentic spices.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHEFS_PICKS.map((dish, index) => {
            const isVeg = dish.type === 'veg';
            return (
              <FeaturedCard
                key={dish.id}
                dish={dish}
                isVeg={isVeg}
                index={index}
                onAddToCart={onAddToCart}
                onOrderNow={onOrderNow}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

function FeaturedCard({ dish, isVeg, index, onAddToCart, onOrderNow }) {
  const ref = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="reveal glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col group border border-white/10"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Dish Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-dark-800">
        <img
          src={dish.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />

        {/* Veg / Non-Veg Indicator */}
        <div className="absolute top-4 left-4 bg-dark-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full flex items-center justify-center border ${
              isVeg ? 'border-green-500' : 'border-red-500'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
          </span>
          <span className="text-[11px] font-semibold tracking-wide uppercase text-gray-200">
            {dish.type}
          </span>
        </div>

        {/* Popular Badge */}
        <div className="absolute top-4 right-4 bg-leaf-500 text-dark-950 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Sparkles className="w-3 h-3" />
          <span>Popular</span>
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 right-4 bg-dark-950/90 border border-leaf-400/40 text-leaf-400 font-bold font-serif text-xl px-4 py-1.5 rounded-xl backdrop-blur-md">
          ₹{dish.price}
        </div>
      </div>

      {/* Dish Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif font-bold text-xl text-white mb-2 group-hover:text-leaf-400 transition-colors">
            {dish.name}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6">
            {dish.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <button
            onClick={() => onAddToCart(dish)}
            className="flex-1 bg-dark-800 hover:bg-leaf-500 text-gray-200 hover:text-dark-950 font-semibold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-leaf-500 flex items-center justify-center gap-2 group/btn"
          >
            <Plus className="w-4 h-4 text-leaf-400 group-hover/btn:text-dark-950" />
            <span>Add to Order</span>
          </button>

          <button
            onClick={() => {
              onAddToCart(dish);
              onOrderNow();
            }}
            className="p-2.5 bg-leaf-500/10 hover:bg-leaf-500 text-leaf-400 hover:text-dark-950 rounded-xl border border-leaf-500/30 transition-all duration-300"
            title="Quick Order"
            aria-label={`Quick order ${dish.name}`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedDishes;
