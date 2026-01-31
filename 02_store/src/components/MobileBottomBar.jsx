// components/MobileBottomBar.jsx
import React from 'react';
import { Phone, ShoppingCart } from 'lucide-react';

export default function MobileBottomBar({ storeInfo, totalItems, onCartClick, isVisible = true }) {
  if (!isVisible) return null;
  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl shadow-stone-900/20 z-30 px-4 py-3 flex justify-between items-center border border-stone-200/50">
      <div className="flex items-center gap-3">
        <div className="bg-emerald-100 p-2 rounded-full">
          <Phone size={20} className="text-emerald-700" />
        </div>
        <div>
          <p className="text-xs text-stone-500 font-medium">Need help? Call now</p>
          <a href={`tel:${storeInfo.phone}`} className="font-bold text-emerald-800 text-sm">
            {storeInfo.phone}
          </a>
        </div>
      </div>
      <button
        onClick={onCartClick}
        className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition-transform"
      >
        <ShoppingCart size={18} />
        <span>Cart ({totalItems})</span>
      </button>
    </div>
  );
}
