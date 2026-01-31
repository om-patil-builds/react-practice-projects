// components/CategoryNav.jsx
import React from 'react';
import CATEGORIES from '../data/categories';

export default function CategoryNav({ activeCategory, setActiveCategory }) {
  return (
    <nav className="bg-white border-b border-stone-200 sticky top-16 md:top-20 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-2 px-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  relative px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 transform
                  ${activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:scale-103'}
                `}
              >
                {activeCategory === cat && (
                  <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></span>
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
    </nav>
  );
}
