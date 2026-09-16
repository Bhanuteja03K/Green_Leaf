import React, { useState } from 'react';
import { X, Send, Utensils, CheckCircle2, Phone, User, MessageSquare, Plus, Minus, Trash2 } from 'lucide-react';
import { CAFE_CONFIG } from '../data/config';
import { MENU_ITEMS } from '../data/menu';

export const OrderModal = ({ isOpen, onClose, cartItems, onAddToCart, onRemoveFromCart, onClearCart }) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderType, setOrderType] = useState('Takeaway');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quickAddDishId, setQuickAddDishId] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuickAdd = (e) => {
    const dishId = e.target.value;
    setQuickAddDishId(dishId);
    if (dishId) {
      const selectedDish = MENU_ITEMS.find((d) => d.id === dishId);
      if (selectedDish) {
        onAddToCart(selectedDish);
      }
      setQuickAddDishId('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    // Build formatted WhatsApp message
    let message = `*NEW ORDER - GREEN LEAF CAFE & RESTAURANT*\n`;
    message += `------------------------------------\n`;
    message += `👤 *Customer Name:* ${customerName || 'Guest'}\n`;
    message += `📞 *Phone Number:* ${phoneNumber || 'Not provided'}\n`;
    message += `🍽️ *Order Type:* ${orderType}\n`;
    message += `------------------------------------\n`;
    message += `*ORDER ITEMS:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.quantity} - ₹${item.price * item.quantity}\n`;
    });

    message += `------------------------------------\n`;
    message += `💰 *TOTAL AMOUNT:* ₹${totalAmount}\n`;
    if (specialInstructions.trim()) {
      message += `📝 *Notes:* ${specialInstructions}\n`;
    }
    message += `------------------------------------\n`;
    message += `Thank you! "Good Food... Good Mood..." 🌱`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setOrderSubmitted(true);
  };

  const handleReset = () => {
    setOrderSubmitted(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-dark-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-leaf-500/10 border border-leaf-500/30 text-leaf-400">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
                Hungry Yet?
              </h2>
              <p className="text-xs text-leaf-400 font-medium italic">
                “Your favourite food is waiting.”
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-dark-850 hover:bg-dark-800 text-gray-400 hover:text-white border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderSubmitted ? (
          /* Confirmation Screen */
          <div className="p-10 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-leaf-500/20 border-2 border-leaf-500 flex items-center justify-center text-leaf-400 mb-6 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2">
              Order Sent Successfully!
            </h3>
            <p className="text-gray-300 text-sm max-w-md mb-8 leading-relaxed">
              Your order details have been formatted and directed to our WhatsApp kitchen queue. Our staff will confirm your order shortly.
            </p>

            <button
              onClick={handleReset}
              className="bg-gradient-to-r from-leaf-500 to-leaf-600 text-dark-950 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-leaf-500/25"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Order Form */
          <form onSubmit={handleFormSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Customer Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Customer Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-leaf-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-leaf-500"
                  />
                </div>
              </div>
            </div>

            {/* Order Type Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                Order Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Dine-in', 'Takeaway', 'Delivery'].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      orderType === type
                        ? 'bg-leaf-500 text-dark-950 border-leaf-400 shadow-md font-bold'
                        : 'bg-dark-950 text-gray-400 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Dishes & Quick Add Dropdown */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Select Dishes & Quantities ({cartItems.length})
                </label>
                {cartItems.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="text-[11px] text-red-400 hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Quick Add Dropdown */}
              <div className="mb-4">
                <select
                  value={quickAddDishId}
                  onChange={handleQuickAdd}
                  className="w-full bg-dark-950 border border-leaf-500/30 rounded-xl px-4 py-2.5 text-xs text-leaf-400 font-semibold focus:outline-none focus:border-leaf-500"
                >
                  <option value="">+ Select additional dish to add to order...</option>
                  {MENU_ITEMS.map((dish) => (
                    <option key={dish.id} value={dish.id}>
                      {dish.name} - ₹{dish.price} ({dish.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Item List */}
              {cartItems.length === 0 ? (
                <div className="p-6 rounded-2xl bg-dark-950 border border-white/10 text-center">
                  <p className="text-xs text-gray-400 mb-2">No items selected yet.</p>
                  <p className="text-[11px] text-leaf-400">Choose a dish from the dropdown above to add to your order.</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-dark-950 border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-white block">{item.name}</span>
                        <span className="text-leaf-400 font-semibold">₹{item.price} each</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onRemoveFromCart(item)}
                          className="w-6 h-6 rounded bg-dark-800 text-gray-300 flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-white px-1">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onAddToCart(item)}
                          className="w-6 h-6 rounded bg-leaf-500 text-dark-950 font-bold flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <span className="font-serif font-bold text-white min-w-[50px] text-right">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                Special Instructions / Spice Preference
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
                <textarea
                  rows="2"
                  placeholder="E.g., Make it extra spicy, less oil, no onion/garlic..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full bg-dark-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-leaf-500"
                />
              </div>
            </div>

            {/* Total Display & WhatsApp Submit */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-gray-400 uppercase font-semibold block">Total Payable</span>
                <span className="font-serif font-extrabold text-2xl text-leaf-400">
                  ₹{totalAmount}
                </span>
              </div>

              <button
                type="submit"
                disabled={cartItems.length === 0}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl transition-all ${
                  cartItems.length === 0
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-leaf-500 to-leaf-600 hover:from-leaf-400 hover:to-leaf-500 text-dark-950 shadow-leaf-500/25 hover:shadow-leaf-500/40 transform hover:-translate-y-0.5'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Submit Order via WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default OrderModal;
