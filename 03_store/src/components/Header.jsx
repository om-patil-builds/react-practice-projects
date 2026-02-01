import React, { useState } from 'react'
import { 
  ShoppingCart, 
  Phone, 
  MapPin, 
  Sprout,
X, Menu,
} from 'lucide-react';


export default function Header({searchQuery , STORE_INFO , totalItems, setIsCartOpen, setIsAddressOpen, isCartOpen, isAddressOpen}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-emerald-900 via-emerald-800 to-teal-800 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 relative">
          <div className="flex md:items-center justify-between gap-4">
            
            {/* Logo Section */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-amber-100 to-white p-2.5 rounded-2xl shadow-lg border-2 border-amber-300/50 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                  <Sprout className=" md:w-8 md:h-8 text-emerald-700" strokeWidth={2} />
                </div>
              </div>
              <div>
                <h1 className="text-md md:text-3xl font-black tracking-tight leading-none drop-shadow-sm">
                  <span className="bg-linear-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
                    LAXMINARAYAN
                  </span>
                </h1>
                <p className="text-xs md:text-sm text-emerald-200 font-medium mt-0.5 tracking-wide uppercase">Agro Centre • Est. 1995</p>
              </div>
            </div>

            {/* Search Bar - Enhanced */}
           

            {/* Contact & Cart */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block text-right">
                <p className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Helpline</p>
                <a href={`tel:${STORE_INFO.phone}`} className="font-bold text-xl flex items-center justify-end gap-2 hover:text-amber-300 transition-colors drop-shadow-md">
                  <Phone size={18} className="text-amber-400" />
                  {STORE_INFO.phone}
                </a>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-gradient-to-br from-amber-400 to-amber-500 text-emerald-900 p-3 rounded-2xl shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group md:block cursor-pointer"
              >
                <ShoppingCart size={20} strokeWidth={2} className="group-hover:rotate-12 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-lg animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>
              <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
            </div>
          </div>

          {/* Location Bar - Visible on mobile */}
          <div className="md:hidden mt-3 flex items-center gap-2 text-emerald-100 text-xs bg-black/20 p-2 rounded-lg backdrop-blur-sm">
            <MapPin size={14} className="text-amber-400 shrink-0" />
            <span className="truncate">{STORE_INFO.address}</span>
          </div>
        </div>
        {isMenuOpen && (
        <div className="md:hidden bg-white/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-amber-600 dark:text-amber-500 block px-3 py-2 rounded-md text-base font-medium"
            >Contact us</a>
            <a href="#collection" className="text-black dark:hover:text-white dark:hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >Your Cart</a>
            <a href="#" onClick={() => setIsAddressOpen(true)} className="text-slate-700 hover:text-amber-600 hover:bg-orange-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium transition-colors">Our Address</a>
            
          </div>
        </div>
      )}
      </header>
  )
}
