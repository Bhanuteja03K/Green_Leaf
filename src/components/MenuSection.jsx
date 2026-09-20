import React, { useState, useMemo } from 'react';
import { Search, UtensilsCrossed, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu';
import MenuCard from './MenuCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const MenuSection = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all'); // 'all', 'veg', 'non-veg'
  const headerRef = useScrollReveal();

  // Map cart quantity per item ID for fast lookup
  const cartQuantityMap = useMemo(() => {
    const map = {};
    cartItems.forEach((cartItem) => {
      map[cartItem.id] = cartItem.quantity;
    });
    return map;
  }, [cartItems]);

  // Filtered Menu Items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category Filter
      const matchesCategory =
        activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();

      // Search Query
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Diet Filter
      const matchesDiet =
        dietFilter === 'all' ||
        (dietFilter === 'veg' && item.type === 'veg') ||
        (dietFilter === 'non-veg' && (item.type === 'non-veg' || item.type === 'egg'));

      return matchesCategory && matchesSearch && matchesDiet;
    });
  }, [activeCategory, searchQuery, dietFilter]);

  return (
    <section id="menu" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-leaf-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-500/10 border border-leaf-500/30 text-leaf-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5 text-leaf-400" />
            <span>Digital Menu</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white mb-4">
            Explore Our <span className="text-leaf-400 italic">Authentic Menu</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Carefully curated recipes made with fresh ingredients. Browse by category or search your craving.
          </p>
        </div>

        {/* Search & Diet Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 glass-card p-4 rounded-2xl border border-white/10">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Biryani, Paneer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-leaf-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Diet Filter Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setDietFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                dietFilter === 'all'
                  ? 'bg-leaf-500 text-dark-950 shadow-md'
                  : 'bg-dark-800 text-gray-300 hover:text-white border border-white/5'
              }`}
            >
              All Dishes
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                dietFilter === 'veg'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-dark-800 text-gray-300 hover:text-white border border-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Veg Only
            </button>
            <button
              onClick={() => setDietFilter('non-veg')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                dietFilter === 'non-veg'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-dark-800 text-gray-300 hover:text-white border border-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-400" />
              Non-Veg / Egg
            </button>
          </div>

        </div>

        {/* Categories Horizontal Tabs */}
        <div className="mb-12 relative">
          {/* Subtle bottom line for tabs area */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3 px-1 relative z-10">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shrink-0 border ${
                    isActive
                      ? 'bg-leaf-500 text-dark-950 border-leaf-500 shadow-[0_0_20px_rgba(132,204,22,0.3)]'
                      : 'bg-transparent hover:bg-white/5 text-gray-400 hover:text-white border-transparent hover:border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Showing <strong className="text-leaf-400">{filteredItems.length}</strong> items
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </span>

          {(activeCategory !== 'All' || searchQuery || dietFilter !== 'all') && (
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setDietFilter('all');
              }}
              className="text-xs text-leaf-400 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                cartQuantity={cartQuantityMap[item.id] || 0}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-card rounded-3xl border border-white/10 max-w-md mx-auto">
            <UtensilsCrossed className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl text-white mb-2">No Dishes Found</h3>
            <p className="text-gray-400 text-sm mb-6">
              We couldn't find any dish matching your search criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setDietFilter('all');
              }}
              className="bg-leaf-500 text-dark-950 font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider"
            >
              View Full Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default MenuSection;
