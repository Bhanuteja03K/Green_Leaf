import React from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';

export const MenuCard = ({ item, cartQuantity, onAddToCart, onRemoveFromCart }) => {
  const isVeg = item.type === 'veg';
  const isEgg = item.type === 'egg';

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 flex flex-col justify-between h-full group relative">
      {/* Top Meta info */}
      <div className="flex items-start justify-between gap-3 mb-3">
        {/* Veg/Non-Veg Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`w-4 h-4 rounded-sm flex items-center justify-center border ${
              isVeg
                ? 'border-green-500 bg-green-950/40'
                : isEgg
                ? 'border-amber-500 bg-amber-950/40'
                : 'border-red-500 bg-red-950/40'
            }`}
            title={item.type.toUpperCase()}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isVeg ? 'bg-green-500' : isEgg ? 'bg-amber-500' : 'bg-red-500'
              }`}
            />
          </span>

          <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 bg-dark-800 px-2 py-0.5 rounded border border-white/5">
            {item.category}
          </span>
        </div>

        {/* Popular Tag */}
        {item.isPopular && (
          <span className="inline-flex items-center gap-1 bg-leaf-500/10 border border-leaf-500/30 text-leaf-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
            <Sparkles className="w-2.5 h-2.5" /> Popular
          </span>
        )}
      </div>

      {/* Dish Title & Description */}
      <div className="mb-4">
        <h3 className="font-bold text-lg text-white group-hover:text-leaf-400 transition-colors leading-snug mb-1.5">
          {item.name}
        </h3>
        <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Price & Add to Order Controls */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase font-semibold">Price</span>
          <span className="font-serif font-bold text-xl text-leaf-400">
            ₹{item.price}
          </span>
        </div>

        {/* Quantity Controls */}
        {cartQuantity > 0 ? (
          <div className="flex items-center gap-2 bg-leaf-500/20 border border-leaf-500/40 rounded-xl p-1">
            <button
              onClick={() => onRemoveFromCart(item)}
              className="w-7 h-7 rounded-lg bg-dark-900 hover:bg-dark-800 text-leaf-400 flex items-center justify-center transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-bold text-white text-xs px-1 min-w-[18px] text-center">
              {cartQuantity}
            </span>
            <button
              onClick={() => onAddToCart(item)}
              className="w-7 h-7 rounded-lg bg-leaf-500 hover:bg-leaf-400 text-dark-950 flex items-center justify-center font-bold transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddToCart(item)}
            className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-leaf-500 text-gray-200 hover:text-dark-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-leaf-500 flex items-center gap-1.5 group/btn"
          >
            <Plus className="w-3.5 h-3.5 text-leaf-400 group-hover/btn:text-dark-950" />
            <span>Add</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
