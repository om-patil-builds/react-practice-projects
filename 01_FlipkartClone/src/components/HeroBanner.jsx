import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import  image  from '../assets/image.png';

const banners = [
  {
    id: 1,
    brand: "POCO",
    badge: "Flipkart Unique",
    title: "POCO X3 Pro",
    subtitle: "48MP Quad Cam | SD 860",
    price: "₹18,999",
    originalPrice: "₹23,999",
    tagline: "Most Powerful Phone Under 20K",
    image:image,
    bgColor: "bg-blue-600",
    textColor: "text-white"
  },
  {
    id: 2,
    brand: "Samsung",
    badge: "New Launch",
    title: "Galaxy S21 FE",
    subtitle: "120Hz Display | Snapdragon 888",
    price: "₹39,999",
    originalPrice: "₹74,999",
    tagline: "Flagship Killer Deal",
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-purple-600",
    textColor: "text-white"
  }
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-4">
      <div className={`relative overflow-hidden rounded-lg ${banner.bgColor} h-70 md:h-90`}>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Container */}
        <div className="flex items-center justify-between h-full px-8 md:px-16">
          
          {/* Left Side - Product Image */}
          <div className="flex-1 flex items-center justify-center">
            <img 
              src={banner.image} 
              alt={banner.title}
              className="h-50 md:h-75 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className={`flex-1 flex flex-col items-start justify-center ${banner.textColor} space-y-3`}>
            
            {/* Brand Badges */}
            <div className="flex items-center gap-3">
              <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">
                {banner.brand}
              </span>
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded backdrop-blur-sm">
                {banner.badge}
              </span>
            </div>

            {/* Title & Specs */}
            <h2 className="text-3xl md:text-5xl font-bold">{banner.title}</h2>
            <p className="text-lg md:text-2xl opacity-90">{banner.subtitle}</p>

            {/* Pricing */}
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-bold">{banner.price}</span>
              <span className="text-lg line-through opacity-60">{banner.originalPrice}</span>
            </div>

            {/* Tagline */}
            <p className="text-sm md:text-base opacity-90 font-medium">
              {banner.tagline}
            </p>

            {/* CTA Button */}
            <button className="mt-4 bg-white text-blue-600 font-semibold px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors shadow-lg">
              Buy Now
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === index ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;