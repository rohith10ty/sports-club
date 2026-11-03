import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  Share2,
  Globe
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-[#040609] border-t border-white/10 text-slate-300 relative overflow-hidden">
      {/* Decorative gradient glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-volt/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-volt to-emerald-400 p-[2px]">
                <div className="w-full h-full bg-[#06080C] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-volt fill-brand-volt" />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase">
                Sports <span className="text-brand-volt">Club</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier athletic destination for champions, weekend warriors, and aspiring youth. World-class courts, ICC & FIFA certified turfs, and master coaching under one iconic roof.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-volt hover:border-brand-volt/40 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#x"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-volt hover:border-brand-volt/40 transition-all hover:scale-110"
                aria-label="X Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-volt hover:border-brand-volt/40 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="#youtube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-volt hover:border-brand-volt/40 transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Award className="w-4 h-4 text-brand-volt" />
              <span>Certified National Training Partner & Olympic Facility</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-brand-volt transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-brand-volt transition-colors">
                  About Sports Club
                </Link>
              </li>
              <li>
                <Link to="/sports" className="text-slate-400 hover:text-brand-volt transition-colors">
                  Sports & Arenas
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-slate-400 hover:text-brand-volt transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="text-slate-400 hover:text-brand-volt transition-colors">
                  Coaches & Trainers
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-400 hover:text-brand-volt transition-colors">
                  Tournaments & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-brand-volt transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Sports */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Featured Sports
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/sports#cricket" className="text-slate-400 hover:text-brand-volt transition-colors">
                  Cricket Academy & Nets
                </Link>
              </li>
              <li>
                <Link to="/sports#football" className="text-slate-400 hover:text-brand-volt transition-colors">
                  FIFA Football Arenas
                </Link>
              </li>
              <li>
                <Link to="/sports#basketball" className="text-slate-400 hover:text-brand-volt transition-colors">
                  FIBA Maple Basketball
                </Link>
              </li>
              <li>
                <Link to="/sports#badminton" className="text-slate-400 hover:text-brand-volt transition-colors">
                  BWF Badminton Courts
                </Link>
              </li>
              <li>
                <Link to="/sports#tennis" className="text-slate-400 hover:text-brand-volt transition-colors">
                  Plexicushion Tennis Courts
                </Link>
              </li>
              <li>
                <Link to="/sports" className="text-brand-volt text-xs font-bold uppercase tracking-wider hover:underline">
                  View All Facilities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Club Info */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Club Bulletin
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe for tournament fixtures, weekend open runs, and pro guest clinics.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter athlete email..."
                  className="w-full bg-[#101520] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-volt transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-volt hover:bg-[#bdec00] text-black font-bold text-xs rounded-lg transition-transform active:scale-95 flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {error && <p className="text-[11px] text-rose-400">{error}</p>}
              {subscribed && (
                <p className="text-[11px] text-brand-volt flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Welcome to the squad!
                </p>
              )}
            </form>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-volt shrink-0" />
                <span>Mon - Sun: 05:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-volt shrink-0" />
                <a href="tel:+18005558899" className="hover:text-white">+1 (800) 555-CLUB</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-volt shrink-0" />
                <span>777 Champions Way, Sports City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sports Club Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Play</a>
            <a href="#safety" className="hover:text-slate-400 transition-colors">Club Safety Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
