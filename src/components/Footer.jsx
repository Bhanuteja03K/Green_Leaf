import React from 'react';
import { Instagram, Facebook, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { CAFE_CONFIG } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Footer = () => {
  const footerRef = useScrollReveal({ threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 text-gray-400 pt-16 pb-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Layout */}
        <div ref={footerRef} className="reveal grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Cols 5) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-700 p-0.5 shadow-lg shadow-leaf-500/20">
                <div className="w-full h-full bg-dark-950 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-leaf-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-serif tracking-wider font-bold text-xl text-white block">
                  {CAFE_CONFIG.name}
                </span>
                <span className="text-[9px] tracking-[0.25em] text-leaf-400 font-semibold uppercase -mt-1 block">
                  {CAFE_CONFIG.subName}
                </span>
              </div>
            </a>

            <p className="font-serif italic text-leaf-400 text-lg">
              "{CAFE_CONFIG.tagline}"
            </p>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Delicious vegetarian and non-vegetarian dishes, biryani, curries, noodles, continental snacks, mocktails and milkshakes.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-leaf-400 text-gray-300 hover:text-leaf-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CAFE_CONFIG.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-leaf-400 text-gray-300 hover:text-leaf-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CAFE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-leaf-400 text-gray-300 hover:text-leaf-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links (Cols 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-leaf-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-leaf-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-leaf-400 transition-colors">Digital Menu</a>
              </li>
              <li>
                <a href="#featured" className="hover:text-leaf-400 transition-colors">Chef's Picks</a>
              </li>
              <li>
                <a href="#drinks" className="hover:text-leaf-400 transition-colors">Beverage Bar</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-leaf-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-leaf-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Operating Info (Cols 4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-base tracking-wider uppercase">
              Opening Hours & Visit
            </h4>
            <div className="text-xs space-y-2 text-gray-400">
              <p className="flex justify-between border-b border-white/5 pb-1">
                <span>Monday - Sunday</span>
                <span className="text-leaf-400 font-semibold">10:00 AM - 10:00 PM</span>
              </p>
              <p className="pt-2 text-gray-400">
                {CAFE_CONFIG.address}
              </p>
              <p className="text-leaf-400 font-medium">
                {CAFE_CONFIG.phone}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500 text-center sm:text-left">
            © 2026 Green Leaf Cafe & Restaurant. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-leaf-400 text-leaf-400 flex items-center gap-2 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
