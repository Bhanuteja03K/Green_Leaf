import React from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';

export const MenuCard = ({ item, cartQuantity, onAddToCart, onRemoveFromCart }) => {
  const isVeg = item.type === 'veg';
  const isEgg = item.type === 'egg';

  return (
    <div className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between h-full group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-[0_10px_40px_-15px_rgba(132,204,22,0.15)] bg-gradient-to-b from-dark-900/80 to-dark-950/90">
      
      {/* Decorative top gradient line on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-leaf-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Meta info */}
      <div className="flex items-start justify-between gap-3 mb-4">
        {/* Veg/Non-Veg Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`w-4 h-4 rounded-sm flex items-center justify-center border ${
              isVeg
                ? 'border-green-500/50 bg-green-950/40'
                : isEgg
                ? 'border-amber-500/50 bg-amber-950/40'
                : 'border-red-500/50 bg-red-950/40'
            }`}
            title={item.type.toUpperCase()}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isVeg ? 'bg-green-500' : isEgg ? 'bg-amber-500' : 'bg-red-500'
              }`}
            />
          </span>

          <span className="text-[10px] uppercase font-bold tracking-wider text-leaf-400/80 bg-leaf-500/10 px-2 py-0.5 rounded border border-leaf-500/10">
            {item.category}
          </span>
        </div>

        {/* Popular Tag */}
        {item.isPopular && (
          <span className="inline-flex items-center gap-1 text-yellow-400 text-[10px] font-bold px-2 py-0.5 bg-yellow-400/10 rounded-full border border-yellow-400/20">
            <Sparkles className="w-3 h-3" /> Popular
          </span>
        )}
      </div>

      {/* Dish Title & Description */}
      <div className="mb-6 flex-grow">
        <h3 className="font-serif font-bold text-xl text-white group-hover:text-leaf-400 transition-colors leading-tight mb-2">
          {item.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed font-light">
          {item.description}
        </p>
      </div>

      {/* Price & Add to Order Controls */}
      <div className="flex items-end justify-between pt-4 border-t border-white/5 mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider mb-0.5">Price</span>
          <span className="font-serif font-bold text-2xl text-white">
            <span className="text-leaf-400 text-lg mr-0.5">₹</span>{item.price}
          </span>
        </div>

        {/* Quantity Controls */}
        {cartQuantity > 0 ? (
          <div className="flex items-center gap-3 bg-dark-800 border border-leaf-500/30 rounded-full p-1 shadow-inner">
            <button
              onClick={() => onRemoveFromCart(item)}
              className="w-8 h-8 rounded-full bg-dark-950 hover:bg-red-500/20 text-gray-300 hover:text-red-400 flex items-center justify-center transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-white text-sm min-w-[20px] text-center">
              {cartQuantity}
            </span>
            <button
              onClick={() => onAddToCart(item)}
              className="w-8 h-8 rounded-full bg-leaf-500 hover:bg-leaf-400 text-dark-950 flex items-center justify-center font-bold transition-colors shadow-sm"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddToCart(item)}
            className="group/btn relative overflow-hidden px-5 py-2.5 rounded-full bg-dark-800 hover:bg-leaf-500 text-gray-200 hover:text-dark-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-leaf-500 flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Plus className="w-4 h-4 text-leaf-400 group-hover/btn:text-dark-950 transition-colors" />
              <span>Add</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
