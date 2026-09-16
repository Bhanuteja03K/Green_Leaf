import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CAFE_CONFIG } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const headerRef = useScrollReveal();
  const leftContentRef = useScrollReveal({ threshold: 0.1 });
  const rightContentRef = useScrollReveal({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-leaf-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-500/10 border border-leaf-500/30 text-leaf-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-leaf-400" />
            <span>Visit or Connect</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white mb-4">
            Contact <span className="text-leaf-400 italic">Us</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We are always delighted to welcome you. Get in touch for reservations, inquiries, or feedback.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Cards Left */}
          <div ref={leftContentRef} className="reveal lg:col-span-5 space-y-6">
            
            {/* Main Info Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-serif font-bold text-2xl text-white pb-3 border-b border-white/10">
                {CAFE_CONFIG.fullName}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-leaf-500/10 border border-leaf-500/20 text-leaf-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Address</h4>
                  <p className="text-xs text-gray-300">{CAFE_CONFIG.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-leaf-500/10 border border-leaf-500/20 text-leaf-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Phone</h4>
                  <p className="text-xs text-gray-300">{CAFE_CONFIG.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-leaf-500/10 border border-leaf-500/20 text-leaf-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Email</h4>
                  <p className="text-xs text-gray-300">{CAFE_CONFIG.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-leaf-500/10 border border-leaf-500/20 text-leaf-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Opening Hours</h4>
                  <p className="text-xs text-gray-300">{CAFE_CONFIG.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${CAFE_CONFIG.phone}`}
                className="glass-card hover:bg-leaf-500 hover:text-dark-950 p-4 rounded-2xl border border-white/10 hover:border-leaf-500 text-white flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>

              <a
                href={CAFE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="glass-card hover:bg-emerald-600 p-4 rounded-2xl border border-white/10 hover:border-emerald-500 text-white flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Google Maps Placeholder Frame */}
            <div className="glass-card rounded-3xl overflow-hidden border border-white/10 relative h-48 flex items-center justify-center bg-dark-900 group">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#84CC16_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative text-center p-6 z-10">
                <MapPin className="w-8 h-8 text-leaf-400 mx-auto mb-2 animate-bounce" />
                <h4 className="font-serif font-bold text-white text-base">Google Maps Location</h4>
                <p className="text-xs text-gray-400 mt-1">Interactive map integration ready for actual cafe address.</p>
              </div>
            </div>

          </div>

          {/* Contact Form Right */}
          <div ref={rightContentRef} className="reveal lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 relative">
            <h3 className="font-serif font-bold text-2xl text-white mb-2">Send Us a Message</h3>
            <p className="text-xs text-gray-400 mb-8">
              Have a suggestion or special reservation request? Fill out the form below.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-leaf-400 mb-3" />
                <h4 className="font-serif font-bold text-xl text-white mb-1">Message Sent!</h4>
                <p className="text-xs text-gray-300">Thank you for reaching out to Green Leaf Cafe & Restaurant.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-leaf-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-leaf-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-leaf-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-leaf-500 to-leaf-600 hover:from-leaf-400 hover:to-leaf-500 text-dark-950 font-bold py-4 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-leaf-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
