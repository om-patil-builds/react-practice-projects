import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  ArrowUp,
  Send,
  Store
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactDetails = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '7666126076',
      href: 'tel:+15551234567',
      subtext: 'Mon-Sun 7am-8pm'
    },
    
    {
      icon: MapPin,
      label: 'Visit Store',
      subtext: 'Dharangaon , Chhatrapti Shivaji Maharaj Complex',
      href: 'https://maps.google.com'
    }
  ];

  const quickLinks = [
    'About Us', 'Our Products', 
    'Best Sellers',
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-800 to-indigo-950 text-white overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

          {/* Brand */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              LAXMINARAYAN AGRO CENTRE
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Your destination for quality products and exceptional service. 
              Visit our store or shop online for the latest collections.
            </p>
            <div className="flex gap-2 md:gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold text-white relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
              Get In Touch
            </h3>
            <div className="space-y-2">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-indigo-400 font-semibold uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white truncate">
                      {item.value}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                      {item.subtext}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold text-white relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <a className="text-gray-400 hover:text-indigo-400 text-sm md:text-base font-medium transition-all duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Hours */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold text-white relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
              Store Hours
            </h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4 text-sm md:text-base space-y-2 md:space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Mon - Sat</span>
                <span className="font-semibold text-white">7:00am - 8:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="font-semibold text-white">8:00am - 6:00pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 md:my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-center md:text-left space-y-1 md:space-y-2">
            <p className="text-gray-500 text-sm md:text-base">
              © {new Date().getFullYear()} LAXMINARAYAN AGRO CENTRE
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-xs md:text-sm text-gray-500">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-indigo-400 transition-colors">Shipping Info</a>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;