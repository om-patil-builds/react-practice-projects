// App.jsx
import React, { useState } from 'react';
import PRODUCTS from './data/products';
import STORE_INFO from './data/storeInfo';
import CATEGORIES from './data/categories';

import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import ProductGrid from './components/ProductGrid';
import CartSidebar from './components/CartSidebar';
import OrderModal from './components/OrderModal';
import MobileBottomBar from './components/MobileBottomBar';

// Heroicons imports
import { ShieldCheckIcon as Shield, TruckIcon as Package, PhoneIcon as Phone } from '@heroicons/react/24/outline';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOrderModal, setShowOrderModal] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    if (product.stock === 0) return;
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        if (existing.cartQty < product.stock) {
          return prev.map(item =>
            item.id === product.id ? { ...item, cartQty: item.cartQty + 1 } : item
          );
        }
        return prev;
      }
      return [...prev, { ...product, cartQty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, Math.min(item.stock, item.cartQty + delta));
        return { ...item, cartQty: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.cartQty), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.cartQty, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setShowOrderModal(true);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert(`Order Placed Successfully!\n\nWe will contact you shortly at ${STORE_INFO.phone} to confirm the delivery time.`);
    setCart([]);
    setShowOrderModal(false);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pb-24 md:pb-0">
      <Header
        storeInfo={STORE_INFO}
        onCartClick={() => setIsCartOpen(true)}
        totalItems={totalItems}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <CategoryNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-3xl text-white shadow-lg shadow-blue-500/25 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1">Quality Assurance</p>
                <h3 className="text-2xl font-bold">Govt. Certified</h3>
                <p className="text-xs text-blue-100 mt-2 opacity-90">100% Original Seeds & Pesticides</p>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-6 rounded-3xl text-white shadow-lg shadow-orange-500/25 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium mb-1">Free Delivery</p>
                <h3 className="text-2xl font-bold">Same Day</h3>
                <p className="text-xs text-orange-100 mt-2 opacity-90">Within village limits • Min. ₹500</p>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Package className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-3xl text-white shadow-lg shadow-emerald-500/25 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-emerald-100 text-sm font-medium mb-1">Expert Support</p>
                <h3 className="text-2xl font-bold">Free Advice</h3>
                <p className="text-xs text-emerald-100 mt-2 opacity-90">Consult {STORE_INFO.owner} directly</p>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
            {activeCategory === 'All' ? 'All Products' : activeCategory}
            <span className="text-sm font-normal text-stone-500 bg-stone-200 px-3 py-1 rounded-full">
              {filteredProducts.length} items
            </span>
          </h2>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} addToCart={addToCart} />
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300 mt-8">
            <p className="text-stone-400">No products found.</p>
          </div>
        )}
      </main>

      <MobileBottomBar
        storeInfo={STORE_INFO}
        totalItems={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      <CartSidebar
        cart={cart}
        totalItems={totalItems}
        cartTotal={cartTotal}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        updateQty={updateQty}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />

      <OrderModal
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        totalItems={totalItems}
        cartTotal={cartTotal}
        handleOrderSubmit={handleOrderSubmit}
      />
    </div>
  );
}

