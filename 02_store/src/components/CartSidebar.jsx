// components/CartSidebar.jsx
import React from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';

export default function CartSidebar({
  cart,
  totalItems,
  cartTotal,
  isOpen,
  onClose,
  updateQty,
  removeFromCart,
  handleCheckout
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[480px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Cart Header */}
        <div className="bg-emerald-900 text-white p-6 flex items-center justify-between relative overflow-hidden">
          {/* ... header JSX, using totalItems */}
          <div className="relative flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <ShoppingCart className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Your Cart</h2>
              <p className="text-emerald-200 text-sm">{totalItems} items selected</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors relative">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-stone-200 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                <ShoppingCart size={40} className="text-stone-400" />
              </div>
              <p className="text-stone-500 font-medium text-lg mb-2">Your cart is empty</p>
              <p className="text-stone-400 text-sm mb-6">Add products to get started</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
              >
                Browse Products
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="flex gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 bg-stone-100 rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-stone-900 truncate">{item.name}</h4>
                  <p className="text-sm text-stone-500 mb-3">{item.unit}</p>
                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 bg-stone-100 rounded-lg p-1">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        disabled={item.cartQty <= 1}
                        className="p-1.5 hover:bg-white rounded-md disabled:opacity-40 disabled:hover:bg-transparent transition-colors shadow-sm"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-bold w-8 text-center text-sm">{item.cartQty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        disabled={item.cartQty >= item.stock}
                        className="p-1.5 hover:bg-white rounded-md disabled:opacity-40 disabled:hover:bg-transparent transition-colors shadow-sm"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Price & Remove */}
                    <div className="text-right">
                      <p className="font-black text-emerald-700 text-lg">₹{item.price * item.cartQty}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center justify-end gap-1 mt-1 font-medium hover:underline"
                      >
                        <Trash2 size={12} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-stone-200 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span className="font-medium">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Delivery</span>
                <span className="text-emerald-600 font-medium">Free</span>
              </div>
              <div className="h-px bg-stone-200"></div>
              <div className="flex justify-between text-xl font-black text-stone-900">
                <span>Total</span>
                <span className="text-emerald-700">₹{cartTotal}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-600 active:scale-95 transition-all shadow-xl shadow-emerald-900/10 flex items-center justify-center gap-2 group"
            >
              Proceed to Checkout
              {/* ArrowRight icon? add import if used */}
            </button>
            <p className="text-center text-xs text-stone-400">
              Cash on Delivery available • Free returns
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
