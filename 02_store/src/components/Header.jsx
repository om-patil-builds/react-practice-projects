import React from "react";
import {
  ShoppingCart,
  Phone,
  MapPin,
  Search,
  Sprout
} from "lucide-react";

const Header = ({
  storeInfo,
  searchQuery,
  setSearchQuery,
  totalItems,
  setIsCartOpen
}) => {
  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-emerald-900 via-emerald-800 to-teal-800 text-white shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-amber-100 to-white p-2.5 rounded-2xl shadow-lg border-2 border-amber-300/50">
                <Sprout className="w-8 h-8 text-emerald-700" strokeWidth={2.5} />
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight leading-none">
                <span className="bg-linear-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
                  {storeInfo.name}
                </span>
              </h1>
              <p className="text-xs md:text-sm text-emerald-200 font-medium mt-0.5 uppercase">
                Agro Centre
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-emerald-600" />
              </div>

              <input
                type="text"
                placeholder="Search seeds, fertilizers, pesticides..."
                className="block w-full pl-11 pr-4 py-3 rounded-2xl text-stone-900 bg-white/95 shadow-lg focus:ring-2 focus:ring-amber-400 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Contact + Cart */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block text-right">
              <p className="text-xs text-emerald-300 uppercase">Helpline</p>
              <a
                href={`tel:${storeInfo.phone}`}
                className="font-bold text-xl flex items-center justify-end gap-2 hover:text-amber-300"
              >
                <Phone size={18} className="text-amber-400" />
                {storeInfo.phone}
              </a>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-gradient-to-br from-amber-400 to-amber-500 text-emerald-900 p-3 rounded-2xl shadow-lg hover:scale-105 transition-all"
            >
              <ShoppingCart size={24} strokeWidth={2.5} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Address */}
        <div className="md:hidden mt-3 flex items-center gap-2 text-emerald-100 text-xs bg-black/20 p-2 rounded-lg">
          <MapPin size={14} className="text-amber-400" />
          <span className="truncate">{storeInfo.address}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
