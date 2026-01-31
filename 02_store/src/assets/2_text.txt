import React, { useState } from 'react';
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

// --- Enhanced Mock Data with Better Images ---
const PRODUCTS = [
  // Seeds
  { id: 1, name: 'BT Cotton Seeds (BG-II)', category: 'Seeds', price: 740, unit: 'Packet', stock: 50, image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=400&q=80', description: 'High yield cotton variety, pest resistant.' },
  { id: 2, name: 'Hybrid Tomato Seeds', category: 'Seeds', price: 450, unit: '10g', stock: 0, image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80', description: 'Disease tolerant, suitable for kharif season.' },
  { id: 3, name: 'Maize Seeds (Monsanto)', category: 'Seeds', price: 1200, unit: 'kg', stock: 25, image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80', description: 'Single cross hybrid, high grain quality.' },
  { id: 4, name: 'Black Gram (Urad)', category: 'Seeds', price: 85, unit: 'kg', stock: 100, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80', description: 'Certified organic seeds for better yield.' },
  
  // Fertilizers
  { id: 5, name: 'Urea (Neem Coated)', category: 'Fertilizers', price: 266, unit: 'Bag', stock: 200, image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400&q=80', description: 'Essential nitrogen source for leafy growth.' },
  { id: 6, name: 'DAP (Di-Ammonium Phosphate)', category: 'Fertilizers', price: 1350, unit: 'Bag', stock: 150, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80', description: 'High in phosphorus for root development.' },
  { id: 7, name: 'Potash (MOP)', category: 'Fertilizers', price: 1400, unit: '50kg', stock: 80, image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80', description: 'Improves fruit quality and disease resistance.' },
  { id: 8, name: 'NPK 19:19:19', category: 'Fertilizers', price: 350, unit: 'kg', stock: 0, image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80', description: 'Balanced nutrition for all crops.' },

  // Sprayers
  { id: 9, name: 'Battery Sprayer 16L', category: 'Sprayers', price: 2400, unit: 'Piece', stock: 15, image: 'https://images.unsplash.com/photo-1591101950260-3f992a57d2e9?auto=format&fit=crop&w=400&q=80', description: '12V battery operated, high pressure.' },
  { id: 10, name: 'Manual Knapsack 20L', category: 'Sprayers', price: 850, unit: 'Piece', stock: 30, image: 'https://images.unsplash.com/photo-1622383563227-044011358d3a?auto=format&fit=crop&w=400&q=80', description: 'Brass nozzle, durable tank.' },
  { id: 11, name: 'Foot Sprayer', category: 'Sprayers', price: 1200, unit: 'Piece', stock: 10, image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80', description: 'Double action cylinder, easy to operate.' },

  // Pesticides
  { id: 12, name: 'Imidacloprid 17.8% SL', category: 'Pesticides', price: 450, unit: '250ml', stock: 50, image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=400&q=80', description: 'Systemic insecticide for sucking pests, whitefly & aphids control.' },
  { id: 13, name: 'Glyphosate 41% SL', category: 'Pesticides', price: 380, unit: '1L', stock: 35, image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80', description: 'Broad-spectrum systemic herbicide for weed control in non-crop areas.' },
  { id: 14, name: 'Mancozeb 75% WP', category: 'Pesticides', price: 520, unit: '500g', stock: 42, image: 'https://images.unsplash.com/photo-1615486365822-a18a82c95f1a?auto=format&fit=crop&w=400&q=80', description: 'Contact fungicide effective against blight, rust and leaf spot diseases.' },
  { id: 15, name: 'Lambda Cyhalothrin 5% EC', category: 'Pesticides', price: 295, unit: '500ml', stock: 28, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80', description: 'Synthetic pyrethroid for bollworm, stem borer and Diamondback moth.' },
  { id: 16, name: 'Chlorpyrifos 20% EC', category: 'Pesticides', price: 650, unit: '1L', stock: 22, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=400&q=80', description: 'Broad-spectrum insecticide for soil and foliar application.' },
  
  // Micronutrients
  { id: 17, name: 'Chelated Zinc EDTA 12%', category: 'Micronutrients', price: 180, unit: '250g', stock: 75, image: 'https://images.unsplash.com/photo-1622383563227-044011358d3a?auto=format&fit=crop&w=400&q=80', description: 'Zinc deficiency corrector for higher yield and enzyme activation.' },
  { id: 18, name: 'Chelated Iron EDTA 12%', category: 'Micronutrients', price: 165, unit: '250g', stock: 60, image: 'https://images.unsplash.com/photo-1591101950260-3f992a57d2e9?auto=format&fit=crop&w=400&q=80', description: 'Prevents iron chlorosis, promotes chlorophyll formation in plants.' },
  { id: 19, name: 'Boron 20% Soluble Powder', category: 'Micronutrients', price: 240, unit: '500g', stock: 45, image: 'https://images.unsplash.com/photo-1615486365822-a18a82c95f1a?auto=format&fit=crop&w=400&q=80', description: 'Essential for flowering, fruit setting and pollen tube growth.' },
  { id: 20, name: 'Calcium Nitrate Granular', category: 'Micronutrients', price: 320, unit: '1kg', stock: 38, image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=400&q=80', description: 'Water soluble calcium source for cell wall development and quality produce.' },
  { id: 21, name: 'Multi-Micronutrient Mixture', category: 'Micronutrients', price: 480, unit: '5kg', stock: 30, image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80', description: 'Complete blend of Zn, Fe, Cu, Mn, B for balanced plant nutrition.' }
];

const STORE_INFO = {
  name: "LAXMINARAYAN AGRO CENTRE",
  owner: "Pradip Patil",
  phone: "7666126076",
  whatsapp: "7666126076",
  address: "Sonavad Road, Chh. Shivaji Maharaj Complex, Tal-Dharangaon, District Jalgaon, Maharashtra",
  hours: "8:00 AM - 8:00 PM (Open 7 Days)"
};

const CATEGORIES = ['All', 'Seeds', 'Fertilizers', 'Sprayers', 'Pesticides', 'Micronutrients'];

export default function KrushiKendraApp() {
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
      <header className="sticky top-0 z-50 bg-linear-to-r from-emerald-900 via-emerald-800 to-teal-800 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Logo Section */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-amber-100 to-white p-2.5 rounded-2xl shadow-lg border-2 border-amber-300/50 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                  <Sprout className="w-8 h-8 text-emerald-700" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight leading-none drop-shadow-sm">
                  <span className="bg-linear-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
                    LAXMINARAYAN
                  </span>
                </h1>
                <p className="text-xs md:text-sm text-emerald-200 font-medium mt-0.5 tracking-wide uppercase">Agro Centre • Est. 1995</p>
              </div>
            </div>

            {/* Search Bar - Enhanced */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-emerald-600 group-focus-within:text-emerald-800 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search seeds, fertilizers, pesticides..."
                  className="block w-full pl-11 pr-4 py-3 border-0 rounded-2xl text-stone-900 placeholder-stone-400 bg-white/95 backdrop-blur-sm shadow-lg ring-1 ring-white/20 focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-stone-400 bg-stone-100 rounded-lg border border-stone-200">Ctrl K</kbd>
                </div>
              </div>
            </div>

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
                className="relative bg-gradient-to-br from-amber-400 to-amber-500 text-emerald-900 p-3 rounded-2xl shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <ShoppingCart size={24} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-lg animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Location Bar - Visible on mobile */}
          <div className="md:hidden mt-3 flex items-center gap-2 text-emerald-100 text-xs bg-black/20 p-2 rounded-lg backdrop-blur-sm">
            <MapPin size={14} className="text-amber-400 shrink-0" />
            <span className="truncate">{STORE_INFO.address}</span>
          </div>
        </div>
      </header>

      {/* --- Category Navigation - Pill Style --- */}
      <nav className="bg-white border-b border-stone-200 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar scroll-smooth">
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
          </div>
        </div>
        {/* Fade indicators for scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
      </nav>

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
          {filteredProducts.map(product => (
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
    </div>
  );
}