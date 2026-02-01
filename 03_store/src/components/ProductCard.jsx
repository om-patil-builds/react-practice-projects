import React from 'react'
import { CheckCircle , Plus , XCircle , } from 'lucide-react';

export default function ProductCard({product , addToCart}) {
  return (
    <div 
              key={product.id} 
              className="group bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-56 bg-stone-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${product.stock === 0 ? 'opacity-40 grayscale' : ''}`}
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/400x400/emerald/white?text=Agro+Product';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {product.stock === 0 ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      Out of Stock
                    </span>
                  </div>
                ) : product.stock < 10 ? (
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                      Only {product.stock} left
                    </span>
                  </div>
                ) : null}

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-stone-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-stone-900 leading-tight group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-sm text-stone-500 mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-emerald-700">₹{product.price}</p>
                      <p className="text-xs text-stone-400 font-medium">per {product.unit}</p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-1">
                      {product.stock > 0 ? (
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full">
                          <CheckCircle size={12} /> In Stock
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-red-500 flex items-center gap-1 bg-red-50 px-2 py-1 rounded-full">
                          <XCircle size={12} /> Unavailable
                        </span>
                      )}
                    </div>
                  </div>

                  <button 
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className={`
                      w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2
                      ${product.stock > 0 
                        ? 'bg-stone-900 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/25 active:scale-95' 
                        : 'bg-stone-200 text-stone-400 cursor-not-allowed'}
                    `}
                  >
                    {product.stock > 0 ? (
                      <>
                        <Plus size={18} strokeWidth={3} />
                        Add to Cart
                      </>
                    ) : (
                      'Notify When Available'
                    )}
                  </button>
                </div>
              </div>
            </div>
  )
}
