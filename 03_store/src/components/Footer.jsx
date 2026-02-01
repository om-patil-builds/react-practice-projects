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
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-800 to-indigo-950 text-white overflow-hidden md:h-fit">
      {/* Decorative Background Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none " />
      <div className="absolute -bottom-24 -left-24 w-70 h-70 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Store className="w-6 h-6 text-white" />
              </div> */}
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  LAXMINARAYAN AGRO CENTRE
                </h2>
                <p className="text-xs text-indigo-400 font-semibold tracking-wider uppercase">
                  Premium Experience
                </p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Your destination for quality products and exceptional service. 
              Visit our store or shop online for the latest collections.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-lg font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
              Get In Touch
            </h3>
            
            <div className="space-y-3">
              {contactDetails.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-white truncate">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {item.subtext}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
              Quick Links
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-indigo-400 hover:pl-2 transition-all duration-300 text-sm font-medium inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
              Store Hours
            </h3>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 mb-3">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-semibold">Opening Hours</span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Mon - Sat</span>
                  <span className="font-semibold text-white">7:00am - 8:00pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Sunday</span>
                  <span className="font-semibold text-white">8:00am - 6:00pm</span>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 md:mb-block" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-1">
          <div className="text-center md:text-left space-y-2">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} 
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-indigo-400 transition-colors">Shipping Info</a>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="group w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:border-transparent hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;