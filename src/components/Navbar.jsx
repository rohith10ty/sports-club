import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Zap, 
  Trophy, 
  ChevronRight, 
  PhoneCall, 
  Calendar,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll detection for dynamic glass styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Sports & Activities', path: '/sports' },
    { name: 'Membership', path: '/membership' },
    { name: 'Coaches', path: '/coaches' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#06080C]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-3'
            : 'bg-[#06080C]/60 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-volt to-emerald-400 p-[2px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,255,0,0.4)]">
                <div className="w-full h-full bg-[#06080C] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-volt fill-brand-volt transition-transform group-hover:rotate-12" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-sans">
                    Sports <span className="text-brand-volt">Club</span>
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-volt animate-ping" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1 hidden sm:block">
                  Premier Athletic Campus
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-volt text-black shadow-[0_0_15px_rgba(212,255,0,0.3)] font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA actions */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/sports"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-brand-volt transition-colors py-2 px-3"
              >
                <Calendar className="w-3.5 h-3.5 text-brand-volt" />
                <span>Book Court</span>
              </Link>
              
              <Link
                to="/membership"
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-all duration-300 shadow-[0_0_20px_rgba(212,255,0,0.35)] hover:shadow-[0_0_28px_rgba(212,255,0,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 fill-black" />
                <span>Join Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                to="/membership"
                className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-black bg-brand-volt"
              >
                Join
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6 text-brand-volt" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#0B0F17]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300 px-6 py-6 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <div className="text-[11px] font-bold tracking-widest uppercase text-brand-volt mb-1 px-3">
                Navigation
              </div>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-brand-volt text-black font-bold shadow-lg shadow-brand-volt/20'
                        : 'text-slate-200 hover:bg-white/5 hover:text-brand-volt'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </NavLink>
              ))}

              <div className="pt-4 border-t border-white/10 mt-4 space-y-3">
                <Link
                  to="/membership"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-center text-sm font-bold uppercase tracking-wider text-black bg-brand-volt shadow-[0_0_20px_rgba(212,255,0,0.3)]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Join Sports Club Now</span>
                </Link>

                <div className="flex items-center justify-between px-2 pt-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today 05:00 - 23:00
                  </span>
                  <a href="tel:+18005558899" className="flex items-center gap-1 text-brand-volt">
                    <PhoneCall className="w-3.5 h-3.5" /> Call Club
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
