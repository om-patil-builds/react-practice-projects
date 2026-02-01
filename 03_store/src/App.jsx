import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import Header from './components/Header'
import { 
  ShoppingCart, 
  Phone, 
  MapPin, 
  Search, 
  X, 
  CheckCircle, 
  XCircle, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle,
  Sprout,
  Package,
  ArrowRight,
  Star,
  TrendingUp,
  Shield
} from 'lucide-react';
import Searchbar from './components/Searchbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import generateOrderPDF from './data/generateOrderPDF'



// --- Enhanced Mock Data with Better Images ---


const STORE_INFO = {
  name: "LAXMINARAYAN AGRO CENTRE",
  owner: "Pradip Patil",
  phone: "7666126076",
  whatsapp: "7666126076",
  address: "Sonavad Road, Chh. Shivaji Maharaj Complex, Tal-Dharangaon, District Jalgaon, Maharashtra",
  hours: "8:00 AM - 8:00 PM (Open 7 Days)"
};

const CATEGORIES = ['All', 'Seeds', 'Fertilizers', 'Sprayer', 'Pesticides', 'Micronutrients'];

export default function KrushiKendraApp() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false)


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
          return prev.map(item => item.id === product.id ? { ...item, cartQty: item.cartQty + 1 } : item);
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
      {/* --- Stunning Header --- */}
      
      <Header searchQuery={searchQuery}  STORE_INFO={STORE_INFO} totalItems={totalItems} setIsAddressOpen={setIsAddressOpen} setIsCartOpen={setIsCartOpen} />

      {/* --- Category Navigation - Pill Style --- */}
      <nav className="bg-white border-b border-stone-200 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex  flex-col md:flex-row items-center gap-2 py-4 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex gap-2 px-1">
              {CATEGORIES.map((cat) => (
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
            <div className='hidden md:block w-full'>
              <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
          </div>
        </div>
        
        {/* Fade indicators for scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
        
      </nav>
        {/* for mobile view searchbar  */}
        <div className='md:hidden mt-4'>
          <Searchbar searchQuery={searchQuery} />
        </div>
      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Stats - Attractive Cards */}
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

        {/* Section Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
            {activeCategory === 'All' ? 'All Products' : `${activeCategory}`}
            <span className="text-sm font-normal text-stone-500 bg-stone-200 px-3 py-1 rounded-full">
              {filteredProducts.length} items
            </span>
          </h2>
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <TrendingUp size={16} />
            <span>Popular now</span>
          </div>
        </div>

        {/* Product Grid - Enhanced Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product , idx) => (
            
            <ProductCard key={idx} product={product} addToCart={addToCart} /> 
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300 mt-8">
            <div className="bg-stone-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
              <Search size={32} className="text-stone-400" />
            </div>
            <h3 className="text-xl font-bold text-stone-700 mb-2">No products found</h3>
            <p className="text-stone-500 mb-6">Try adjusting your search or category filter</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="px-6 py-2 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* --- Mobile Bottom Bar - Floating Style --- */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl shadow-stone-900/20 z-30 px-4 py-3 flex justify-between items-center border border-stone-200/50">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-100 p-2 rounded-full">
            <Phone size={20} className="text-emerald-700" />
          </div>
          <div>
            <p className="text-xs text-stone-500 font-medium">Need help? Call now</p>
            <a href={`tel:${STORE_INFO.phone}`} className="font-bold text-emerald-800 text-sm">
              {STORE_INFO.phone}
            </a>
          </div>
        </div>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition-transform"
        >
          <ShoppingCart size={18} />
          <span>Cart ({totalItems})</span>
        </button>
      </div>

      {/* --- Cart Sidebar - Glass Effect --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsCartOpen(false)} 
          />
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[480px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Cart Header */}
            <div className="bg-emerald-900 text-white p-6 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <ShoppingCart className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Your Cart</h2>
                  <p className="text-emerald-200 text-sm">{totalItems} items selected</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="p-2 hover:bg-white/20 rounded-full transition-colors relative"
              >
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
                    onClick={() => setIsCartOpen(false)} 
                    className="px-6 py-2 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div 
                    key={item.id} 
                    // Fix: Changed from bg-stone-50 to bg-white for better contrast
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
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-stone-400">
                  Cash on Delivery available • Free returns
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- Order Modal --- */}
      {showOrderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-emerald-600 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-2xl">Confirm Order</h3>
                  <p className="text-emerald-100 text-sm mt-1">Complete your booking details</p>
                </div>
                <button 
                  onClick={() => setShowOrderModal(false)} 
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {/* Order Summary */}
              <div className="bg-emerald-50 p-4 rounded-2xl mb-6 border border-emerald-100">
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-emerald-200">
                  <span className="text-emerald-800 font-bold">Order Summary</span>
                  <span className="bg-emerald-200 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">{totalItems} items</span>
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
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full border border-stone-300 rounded-xl p-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-stone-50 focus:bg-white" 
                    placeholder="Enter your full name" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Mobile Number</label>
                  <input 
                    required 
                    type="tel" 
                    pattern="[0-9]{10}" 
                    className="w-full border border-stone-300 rounded-xl p-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-stone-50 focus:bg-white" 
                    placeholder="10 digit mobile number" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Delivery Address</label>
                  <textarea 
                    required 
                    rows={3} 
                    className="w-full border border-stone-300 rounded-xl p-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-stone-50 focus:bg-white resize-none" 
                    placeholder="Village name, nearby landmark, taluka..." 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-3">Payment Method</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="border-2 border-emerald-600 bg-emerald-50 p-4 rounded-xl flex items-center gap-3 cursor-pointer relative overflow-hidden">
                      <input type="radio" name="payment" defaultChecked className="text-emerald-600 w-4 h-4 accent-emerald-600" />
                      <div>
                        <span className="font-bold text-emerald-900 block">Cash on Delivery</span>
                        <span className="text-xs text-emerald-700">Pay when you receive</span>
                      </div>
                      <div className="absolute top-2 right-2">
                        <CheckCircle size={16} className="text-emerald-600" />
                      </div>
                    </label>
                    
                    <label className="border-2 border-stone-200 bg-stone-50 p-4 rounded-xl flex items-center gap-3 cursor-not-allowed opacity-60">
                      <input type="radio" name="payment" disabled className="w-4 h-4" />
                      <div>
                        <span className="font-bold text-stone-700 block">UPI / Online</span>
                        <span className="text-xs text-stone-500">Coming soon</span>
                      </div>
                    </label>
                  </div>
                </div>

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
      )}

      {/* --- WhatsApp Floating Button --- */}
      <a 
        href={`https://wa.me/91${STORE_INFO.whatsapp}?text=Hello%20${encodeURIComponent(STORE_INFO.name)},%20I%20want%20to%20inquire%20about%20your%20products.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 hover:rotate-3 transition-all duration-300 z-40 flex items-center gap-2 group"
      >
        <MessageCircle size={28} fill="currentColor" className="group-hover:animate-bounce" />
        <span className="font-bold hidden md:block pr-2">Chat on WhatsApp</span>
      </a>
      <Footer/>
    </div>
  );
}