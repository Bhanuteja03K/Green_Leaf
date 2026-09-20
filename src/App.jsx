import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturedDishes from './components/FeaturedDishes';
import MenuSection from './components/MenuSection';
import DrinksSection from './components/DrinksSection';
import CTASection from './components/CTASection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import OrderModal from './components/OrderModal';
import { Utensils } from 'lucide-react';

export function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // ── Cart Handlers ──────────────────────────────────────────────────────────
  const handleAddToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing && existing.quantity > 1) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prev.filter((item) => item.id !== dish.id);
    });
  };

  const handleClearCart = () => setCartItems([]);

  const totalCartCount  = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ── Scroll helpers ─────────────────────────────────────────────────────────
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-gray-100 flex flex-col font-sans relative selection:bg-leaf-500 selection:text-dark-950">

      {/* ── Sticky Navigation ─────────────────────────────────────────────── */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <Hero
        onExploreMenu={() => scrollToSection('menu')}
        onOrderNow={() => setIsOrderModalOpen(true)}
      />

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <AboutSection />

      {/* ── Chef's Picks ──────────────────────────────────────────────────── */}
      <FeaturedDishes
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onOrderNow={() => setIsOrderModalOpen(true)}
      />

      {/* ── Interactive Digital Menu ───────────────────────────────────────── */}
      <MenuSection
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />

      {/* ── Beverage Bar ──────────────────────────────────────────────────── */}
      <DrinksSection onAddToCart={handleAddToCart} />

      {/* ── Hungry Yet? CTA ───────────────────────────────────────────────── */}
      <CTASection
        onOrderNow={() => setIsOrderModalOpen(true)}
        onExploreMenu={() => scrollToSection('menu')}
      />

      {/* ── Gallery ───────────────────────────────────────────────────────── */}
      <GallerySection />

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <ContactSection />

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <Footer />

      {/* ── Cart Drawer ───────────────────────────────────────────────────── */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onOpenOrderModal={() => {
          setIsCartOpen(false);
          setIsOrderModalOpen(true);
        }}
      />

      {/* ── Order Modal ───────────────────────────────────────────────────── */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* ── Floating Cart Bar (when items in cart) ────────────────────────── */}
      {totalCartCount > 0 && !isCartOpen && !isOrderModalOpen && (
        <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-40 sm:w-auto">
          <div className="glass-card p-3 rounded-2xl border border-leaf-500/40 shadow-2xl bg-dark-900/95 backdrop-blur-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-leaf-500 text-dark-950 font-extrabold flex items-center justify-center text-sm shadow-md">
                {totalCartCount}
              </div>
              <div>
                <span className="text-[11px] text-gray-400 uppercase font-semibold block">Order Total</span>
                <span className="font-serif font-bold text-lg text-leaf-400">
                  ₹{totalCartAmount}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-white font-semibold text-xs border border-white/10 transition-colors"
              >
                View Order
              </button>
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-leaf-500 to-leaf-600 text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-leaf-500/20 hover:shadow-leaf-500/30 transition-all"
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Checkout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
