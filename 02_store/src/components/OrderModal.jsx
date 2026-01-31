// components/OrderModal.jsx
import React from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function OrderModal({
  isOpen,
  showOrderModal,
  onClose,
  totalItems,
  cartTotal,
  handleOrderSubmit
}) {
  if (!showOrderModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="bg-emerald-600 p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative flex justify-between items-center">
            <div>
              <h3 className="font-bold text-2xl">Confirm Order</h3>
              <p className="text-emerald-100 text-sm mt-1">Complete your booking details</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Order Summary */}
          <div className="bg-emerald-50 p-4 rounded-2xl mb-6 border border-emerald-100">
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-emerald-200">
              <span className="text-emerald-800 font-bold">Order Summary</span>
              <span className="bg-emerald-200 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">
                {totalItems} items
              </span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-emerald-700">Total Amount</p>
                <p className="text-xs text-emerald-600">Cash on Delivery</p>
              </div>
              <p className="text-3xl font-black text-emerald-700">₹{cartTotal}</p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleOrderSubmit}>
            {/* Fields: Full Name, Mobile Number, Address, Payment Method */}
            {/* Copy the JSX from big file and adjust */}
            {/* Example for one field: */}
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
              <input
                required
                type="text"
                className="w-full border border-stone-300 rounded-xl p-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-stone-50 focus:bg-white"
                placeholder="Enter your full name"
              />
            </div>
            {/* ... rest fields ... */}
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 active:scale-95 transition-all shadow-lg shadow-emerald-600/25 mt-2 text-lg"
            >
              Place Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
