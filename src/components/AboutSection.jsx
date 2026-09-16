import React from 'react';
import { Leaf, Utensils, Heart, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const AboutSection = () => {
  const headingRef = useScrollReveal();
  const imageRef = useScrollReveal({ threshold: 0.1 });
  const contentRef = useScrollReveal({ threshold: 0.1 });

  const highlights = [
    {
      icon: <Leaf className="w-5 h-5 text-leaf-400" />,
      title: "Fresh Ingredients",
      desc: "Handpicked fresh vegetables, premium cuts, and unadulterated spices."
    },
    {
      icon: <Utensils className="w-5 h-5 text-leaf-400" />,
      title: "Delicious Flavours",
      desc: "Authentic recipes crafted to perfection across veg and non-veg delicacies."
    },
    {
      icon: <Heart className="w-5 h-5 text-leaf-400" />,
      title: "Great Atmosphere",
      desc: "A warm, welcoming dining ambiance designed for family and friends."
    },
    {
      icon: <Award className="w-5 h-5 text-leaf-400" />,
      title: "Made With Care",
      desc: "Every dish is cooked fresh to order with extreme hygiene and love."
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-leaf-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-leaf-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div ref={headingRef} className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-500/10 border border-leaf-500/20 text-leaf-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span>Our Story</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images & Visual Badge */}
          <div ref={imageRef} className="reveal relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Green Leaf Cafe Atmosphere & Dining"
                  className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 h-44 sm:h-56 rounded-2xl overflow-hidden border-4 border-dark-950 shadow-2xl hidden sm:block group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"
                  alt="Delicious Biryani & Dishes at Green Leaf"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Badge */}
              <div className="absolute top-6 left-6 glass-card p-4 rounded-2xl border border-leaf-400/30 flex items-center gap-3 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-leaf-500/20 flex items-center justify-center text-leaf-400 font-bold">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-serif font-bold text-white text-lg">100% Authentic</p>
                  <p className="text-xs text-leaf-400 font-medium">Taste & Hygiene Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div ref={contentRef} className="reveal flex flex-col">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              Good Food. <span className="text-leaf-400 italic">Good Mood.</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              At <strong className="text-white">Green Leaf Cafe & Restaurant</strong>, we believe that great food is the secret to a great mood. Whether you are craving aromatic Biryanis, rich vegetarian and non-vegetarian Curries, crisp Indo-Chinese Starters, comforting Noodles, or refreshing Mocktails and Milkshakes, we serve it all with pride and perfection.
            </p>

            <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
              From our signature <span className="text-leaf-400 font-medium">Paneer Butter Masala</span> and <span className="text-leaf-400 font-medium">Chicken Dum Biryani</span> to our thick gourmet shakes, every single order is prepared fresh using rich ingredients and traditional culinary finesse.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl border border-white/5 hover:border-leaf-500/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-dark-800 border border-white/10 group-hover:border-leaf-500/30 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm sm:text-base">{item.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
