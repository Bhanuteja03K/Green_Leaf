import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone, Utensils } from 'lucide-react';
import { CAFE_CONFIG } from '../data/config';

export const Navbar = ({ cartCount, onOpenCart, onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'menu', 'featured', 'drinks', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Custom Leaf Logo Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-700 p-0.5 shadow-lg shadow-leaf-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-dark-950 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-leaf-500/10 group-hover:bg-leaf-500/20 transition-colors" />
                <svg
                  className="w-6 h-6 text-leaf-400 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z" />
                </svg>
              </div>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="font-serif tracking-wider font-bold text-lg sm:text-xl text-white group-hover:text-leaf-400 transition-colors">
                {CAFE_CONFIG.name}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-leaf-400 font-semibold uppercase -mt-1">
                {CAFE_CONFIG.subName}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-leaf-500 text-dark-950 shadow-lg shadow-leaf-500/30 font-bold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="View Shopping Cart"
              className="relative p-2.5 rounded-full bg-dark-850 hover:bg-dark-800 text-gray-200 hover:text-leaf-400 border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-leaf-500 text-dark-950 font-bold text-xs w-5.5 h-5.5 rounded-full flex items-center justify-center border-2 border-dark-950 animate-pulse-subtle shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Now Button */}
            <button
              onClick={onOpenOrderModal}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-leaf-500 to-leaf-600 hover:from-leaf-400 hover:to-leaf-500 text-dark-950 font-bold px-5 py-2.5 rounded-full text-xs tracking-wider uppercase shadow-lg shadow-leaf-500/25 hover:shadow-leaf-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Utensils className="w-4 h-4" />
              <span>Order Now</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-dark-850 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[70px] bg-dark-900/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100 py-6 px-6 shadow-2xl' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`py-3 px-4 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-between transition-colors ${
                activeSection === link.id
                  ? 'bg-leaf-500/10 text-leaf-400 border border-leaf-500/20'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>{link.name}</span>
              <span className="text-leaf-400/40">→</span>
            </a>
          ))}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full bg-gradient-to-r from-leaf-500 to-leaf-600 text-dark-950 font-bold py-3 rounded-xl text-center text-sm uppercase tracking-wider shadow-lg shadow-leaf-500/20 flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
