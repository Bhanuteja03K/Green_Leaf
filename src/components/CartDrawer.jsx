import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, Utensils } from 'lucide-react';

export const CartDrawer = ({ isOpen, onClose, cartItems, onAddToCart, onRemoveFromCart, onClearCart, onOpenOrderModal }) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-dark-900 border-l border-white/10 text-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-leaf-500/10 border border-leaf-500/30 text-leaf-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-lg text-white">Your Food Order</h2>
                <p className="text-xs text-gray-400">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-dark-800 text-gray-400 hover:text-white border border-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <Utensils className="w-16 h-16 text-gray-600 mb-4 stroke-1" />
                <h3 className="font-serif font-bold text-xl text-white mb-2">Your Cart is Empty</h3>
                <p className="text-gray-400 text-xs max-w-xs mb-6">
                  Looks like you haven't added any delicious dishes from the Green Leaf menu yet.
                </p>
                <button
                  onClick={onClose}
                  className="bg-leaf-500 text-dark-950 font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-leaf-500/20"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-xs font-semibold text-gray-400 uppercase">Selected Items</span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="glass-card p-3.5 rounded-2xl border border-white/5 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            item.type === 'veg' ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        />
                        <h4 className="font-bold text-sm text-white line-clamp-1">{item.name}</h4>
                      </div>
                      <p className="text-xs text-leaf-400 font-bold">
                        ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2 bg-dark-950 rounded-xl p-1 border border-white/10">
                      <button
                        onClick={() => onRemoveFromCart(item)}
                        className="w-6 h-6 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-xs text-white px-1">{item.quantity}</span>
                      <button
                        onClick={() => onAddToCart(item)}
                        className="w-6 h-6 rounded-lg bg-leaf-500 text-dark-950 flex items-center justify-center font-bold text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer Total & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-dark-950">
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Taxes & Service</span>
                  <span className="text-leaf-400">Included</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>Grand Total</span>
                  <span className="font-serif text-xl text-leaf-400">₹{totalAmount}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenOrderModal();
                }}
                className="w-full bg-gradient-to-r from-leaf-500 to-leaf-600 hover:from-leaf-400 hover:to-leaf-500 text-dark-950 font-bold py-3.5 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-leaf-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Proceed to Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
