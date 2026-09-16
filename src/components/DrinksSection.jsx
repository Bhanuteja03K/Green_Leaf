import React, { useState } from 'react';
import { GlassWater, Plus, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const DrinksSection = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('Mocktails');
  const headerRef = useScrollReveal();

  const mocktails    = MENU_ITEMS.filter((item) => item.category === 'Mocktails');
  const milkshakes   = MENU_ITEMS.filter((item) => item.category === 'Milkshakes');
  const hotBeverages = MENU_ITEMS.filter((item) => item.category === 'Hot Beverages');

  const getActiveList = () => {
    switch (activeTab) {
      case 'Mocktails':     return mocktails;
      case 'Milkshakes':    return milkshakes;
      case 'Hot Beverages': return hotBeverages;
      default:              return mocktails;
    }
  };

  const drinkImages = {
    Mocktails:       "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    Milkshakes:      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    "Hot Beverages": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <section id="drinks" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-leaf-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-500/10 border border-leaf-500/30 text-leaf-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <GlassWater className="w-3.5 h-3.5 text-leaf-400" />
            <span>Refreshing Drinks &amp; Shakes</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white mb-4">
            Beverage <span className="text-leaf-400 italic">Bar</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Quench your thirst with handcrafted coolers, rich cream shakes, and soothing hot brews.
          </p>
        </div>

        {/* Drink Category Selector */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {['Mocktails', 'Milkshakes', 'Hot Beverages'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-leaf-500 text-dark-950 shadow-lg shadow-leaf-500/30 scale-105'
                  : 'bg-dark-850 text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Featured Visual Image Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group h-[400px]">
              <img
                src={drinkImages[activeTab]}
                alt={`${activeTab} at Green Leaf Cafe`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-leaf-400 font-bold block mb-1">
                  Crafted Fresh Daily
                </span>
                <h3 className="font-serif font-bold text-2xl text-white">
                  {activeTab} Collection
                </h3>
              </div>
            </div>
          </div>

          {/* Drink Items Grid Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {getActiveList().map((drink) => (
              <div
                key={drink.id}
                className="glass-card p-4 rounded-2xl border border-white/5 hover:border-leaf-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex-1 min-w-0 mr-3">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-white text-sm group-hover:text-leaf-400 transition-colors truncate">
                      {drink.name}
                    </h4>
                    {drink.isPopular && (
                      <span className="shrink-0 inline-flex items-center gap-1 bg-leaf-500/10 border border-leaf-500/20 text-leaf-400 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        <Sparkles className="w-2 h-2" />
                        <span>Popular</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-1">{drink.description}</p>
                  <span className="font-serif font-bold text-leaf-400 text-lg block mt-1">
                    ₹{drink.price}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(drink)}
                  className="p-2.5 rounded-xl bg-dark-800 hover:bg-leaf-500 text-leaf-400 hover:text-dark-950 border border-white/10 hover:border-leaf-500 transition-all duration-200 shrink-0"
                  title={`Add ${drink.name} to order`}
                  aria-label={`Add ${drink.name}`}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default DrinksSection;
