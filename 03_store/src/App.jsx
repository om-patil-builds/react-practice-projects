import React, { useState,useEffect } from "react";
import { PRODUCTS } from "./data/products";
import Header from "./components/Header";
import {
  ShoppingCart,
  Phone,
  Search,
  MessageCircle,
  Package,
  TrendingUp,
  Shield,
} from "lucide-react";
import Searchbar from "./components/Searchbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import OrderModal from "./components/OrderModal";
import SideCartModal from "./components/SideCartModal";

// --- Enhanced Mock Data with Better Images ---


const STORE_INFO = {
  name: "LAXMINARAYAN AGRO CENTRE",
  owner: "Pradip Patil",
  phone: "7666126076",
  whatsapp: "7666126076",
  address:
    "Sonavad Road, Chh. Shivaji Maharaj Complex, Tal-Dharangaon, District Jalgaon, Maharashtra",
  hours: "8:00 AM - 8:00 PM (Open 7 Days)",
};

const CATEGORIES = [
  "All",
  "Seeds",
  "Fertilizers",
  "Sprayer",
  "Pesticides",
  "Micronutrients",
];

export default function KrushiKendraApp() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const q = searchQuery.toLowerCase();

useEffect(() => {
  if (showOrderModal) {
    // Stop scroll
    document.body.style.overflow = "hidden";

    // Stop mobile zoom / bounce
    document.body.style.touchAction = "none";
  } else {
    document.body.style.overflow = "auto";
    document.body.style.touchAction = "auto";
  }

  // Cleanup (important)
  return () => {
    document.body.style.overflow = "auto";
    document.body.style.touchAction = "auto";
  };
}, [showOrderModal]);



const  pdfGenerator = async() => {


  const element = document.createElement("div");
  
  document.body.appendChild(element);
  const root = createRoot(element)



  html2pdf()
    .from(element)
    .set({
      margin: [10, 10, 10, 10],
      filename: `${customer.name}_Invoice.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" }
    })
    .save()
    .finally(() => {
      document.body.removeChild(element);
    });
};



  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;

    const matchesSearch =
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    if (product.stock === 0) return;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        if (existing.cartQty < product.stock) {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, cartQty: item.cartQty + 1 }
              : item,
          );
        }
        return prev;
      }
      return [...prev, { ...product, cartQty: 1 }];
    });
    // setIsCartOpen(true); //comment this out if you want to open cart modal on every order
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(
            1,
            Math.min(item.stock, item.cartQty + delta),
          );
          return { ...item, cartQty: newQty };
        }
        return item;
      }),
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.cartQty,
    0,
  );
  const totalItems = cart.reduce((sum, item) => sum + item.cartQty, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setShowOrderModal(true);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order Placed Successfully!\n\nWe will contact you shortly at ${STORE_INFO.phone} to confirm the delivery time.`,
    );
    setCart([]);
    setShowOrderModal(false);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pb-24 md:pb-0">
      {/* --- Stunning Header --- */}

      <Header
        searchQuery={searchQuery}
        STORE_INFO={STORE_INFO}
        totalItems={totalItems}
        setIsAddressOpen={setIsAddressOpen}
        setIsCartOpen={setIsCartOpen}
      />

      {/* --- Category Navigation - Pill Style --- */}
      <nav className="bg-white border-b border-stone-200 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex  items-center gap-2 py-4 ">
            <div
              className="flex gap-2 px-4 flex-nowrap overflow-x-auto 
           overflow-y-hidden 
           md:overflow-visible no-scrollbar scroll-smooth"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    relative px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 transform
                    ${
                      activeCategory === cat
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 scale-105"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:scale-103"
                    }
                  `}
                >
                  {activeCategory === cat && (
                    <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></span>
                  )}
                  {cat}
                </button>
              ))}
            </div>
            <div className="hidden md:block w-full">
              <Searchbar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </div>
        </div>

        {/* Fade indicators for scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
      </nav>
      {/* for mobile view searchbar  */}
      <div className="md:hidden mt-4">
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
                <p className="text-blue-100 text-sm font-medium mb-1">
                  Quality Assurance
                </p>
                <h3 className="text-2xl font-bold">Govt. Certified</h3>
                <p className="text-xs text-blue-100 mt-2 opacity-90">
                  100% Original Seeds & Pesticides
                </p>
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
                <p className="text-orange-100 text-sm font-medium mb-1">
                  Free Delivery
                </p>
                <h3 className="text-2xl font-bold">Same Day</h3>
                <p className="text-xs text-orange-100 mt-2 opacity-90">
                  Within village limits • Min. ₹500
                </p>
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
                <p className="text-emerald-100 text-sm font-medium mb-1">
                  Expert Support
                </p>
                <h3 className="text-2xl font-bold">Free Advice</h3>
                <p className="text-xs text-emerald-100 mt-2 opacity-90">
                  Consult {STORE_INFO.owner} directly
                </p>
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
            {activeCategory === "All" ? "All Products" : `${activeCategory}`}
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
          {filteredProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} addToCart={addToCart} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300 mt-8">
            <div className="bg-stone-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
              <Search size={32} className="text-stone-400" />
            </div>
            <h3 className="text-xl font-bold text-stone-700 mb-2">
              No products found
            </h3>
            <p className="text-stone-500 mb-6">
              Try adjusting your search or category filter
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
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
            <p className="text-xs text-stone-500 font-medium">
              Need help? Call now
            </p>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="font-bold text-emerald-800 text-sm"
            >
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
        <SideCartModal
          setIsCartOpen={setIsCartOpen}
          updateQty={updateQty}
          removeFromCart={removeFromCart}
          cart={cart}
          cartTotal={cartTotal}
          handleCheckout={handleCheckout}
          totalItems={totalItems}
        />
      )}

      {/* --- WhatsApp Floating Button --- */}
      <a
        href={`https://wa.me/91${STORE_INFO.whatsapp}?text=Hello%20${encodeURIComponent(STORE_INFO.name)},%20I%20want%20to%20inquire%20about%20your%20products.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 hover:rotate-3 transition-all duration-300 z-40 flex items-center gap-2 group"
      >
        <MessageCircle
          size={28}
          fill="currentColor"
          className="group-hover:animate-bounce"
        />
        <span className="font-bold hidden md:block pr-2">Chat on WhatsApp</span>
      </a>
      <Footer className="h-fit w-fit" />
      {showOrderModal && (
        <OrderModal
          setShowOrderModal={setShowOrderModal}
          showOrderModal={showOrderModal}
          cart={cart}
          cartTotal={cartTotal}
          totalItems={totalItems}
          handleOrderSubmit={handleOrderSubmit}

        />
      )}
    </div>
    
  );
}
