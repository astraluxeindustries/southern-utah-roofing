import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar - Uses the New Beige (brand-900) with Dark Text */}
      <div className="bg-brand-900 text-slate-900 py-2 px-4 text-xs sm:text-sm hidden md:block border-b border-brand-800/20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2 font-medium"><MapPin size={14} className="text-slate-800" /> {COMPANY_INFO.address}</span>
            <span className="flex items-center gap-2 font-medium"><Phone size={14} className="text-slate-800" /> {COMPANY_INFO.phone}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium">{COMPANY_INFO.hours}</span>
            <div className="w-px h-3 bg-slate-900/20"></div>
            <div className="flex space-x-3">
              <Facebook size={14} className="hover:text-white cursor-pointer transition-colors" />
              <Instagram size={14} className="hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={14} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-500 text-slate-900 p-2.5 rounded-lg shadow-md group-hover:bg-brand-400 transition-colors">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V7l8-5 8 5v14" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight">Southern Utah</h1>
              <p className="text-xs text-brand-accent font-bold tracking-widest uppercase">Roof Repairs</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold tracking-wide transition-colors hover:text-brand-accent ${location.pathname === item.path ? 'text-brand-accent' : 'text-slate-600'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="bg-brand-500 hover:bg-brand-400 text-slate-900 px-6 py-3 rounded-md font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm uppercase tracking-wide">
                Get a Quote <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-800 hover:text-brand-600 transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl absolute w-full z-40"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-lg font-bold text-slate-800 py-3 border-b border-slate-50 flex justify-between items-center group"
                >
                  {item.label}
                  <span className="text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRight size={16} /></span>
                </Link>
              ))}
              <Link to="/contact" className="bg-brand-500 text-slate-900 py-4 rounded-lg text-center font-bold text-lg shadow-md mt-4">
                Get Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-brand-500">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="mb-6 flex items-center gap-2">
            <div className="bg-brand-500 p-2 rounded text-slate-900">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M5 21V7l8-5 8 5v14" />
                </svg>
            </div>
            <div>
                 <h3 className="text-xl font-serif font-bold text-white leading-none">Southern Utah</h3>
                 <p className="text-brand-500 font-bold tracking-widest uppercase text-[10px]">Roof Repairs</p>
            </div>
          </div>
          <p className="mb-8 text-slate-400 leading-relaxed text-sm">
            Providing premium roofing services to Southern Utah homeowners and businesses. Quality craftsmanship guaranteed. Licensed & Insured.
          </p>
          <div className="flex space-x-4">
            <div className="bg-slate-800 p-2.5 rounded-full hover:bg-brand-500 hover:text-slate-900 text-slate-400 transition-all cursor-pointer"><Facebook size={18} /></div>
            <div className="bg-slate-800 p-2.5 rounded-full hover:bg-brand-500 hover:text-slate-900 text-slate-400 transition-all cursor-pointer"><Instagram size={18} /></div>
            <div className="bg-slate-800 p-2.5 rounded-full hover:bg-brand-500 hover:text-slate-900 text-slate-400 transition-all cursor-pointer"><Linkedin size={18} /></div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-500 rounded-full"></span>
          </h4>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-brand-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-slate-600 group-hover:bg-brand-500 rounded-full transition-colors"></span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
            Our Services
             <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-500 rounded-full"></span>
          </h4>
          <ul className="space-y-3">
            <li><Link to="/services" className="hover:text-brand-500 transition-colors">Roof Repair</Link></li>
            <li><Link to="/services" className="hover:text-brand-500 transition-colors">Full Replacement</Link></li>
            <li><Link to="/services" className="hover:text-brand-500 transition-colors">Emergency Service</Link></li>
            <li><Link to="/services" className="hover:text-brand-500 transition-colors">Commercial Roofing</Link></li>
            <li><Link to="/services" className="hover:text-brand-500 transition-colors">Inspections</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
            Contact Us
             <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-500 rounded-full"></span>
          </h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-3 group">
              <MapPin className="text-brand-500 mt-1 flex-shrink-0 group-hover:text-white transition-colors" size={20} />
              <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{COMPANY_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone className="text-brand-500 flex-shrink-0 group-hover:text-white transition-colors" size={20} />
              <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{COMPANY_INFO.phone}</span>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="w-5 h-5 flex items-center justify-center text-brand-500 font-bold group-hover:text-white transition-colors">@</div>
              <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{COMPANY_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Southern Utah Roof Repairs. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};