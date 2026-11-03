import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Trophy, 
  Shield, 
  Flame, 
  Zap, 
  Target, 
  Activity, 
  Check, 
  Calendar, 
  Clock, 
  Sparkles, 
  X,
  ArrowRight,
  Info
} from 'lucide-react';
import SportCard from '../components/SportCard';
import { sportsList } from '../data/sportsData';

export default function SportsPage({ onOpenBooking, onOpenRegister }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalSport, setActiveModalSport] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Check if URL has hash (e.g. #cricket)
    if (location.hash) {
      const sportId = location.hash.replace('#', '');
      const matched = sportsList.find(s => s.id === sportId);
      if (matched) {
        setActiveModalSport(matched);
      }
    }
  }, [location.hash]);

  const categories = ['All', 'Team Sports', 'Racquet Sports', 'Fitness & Recovery'];

  const filteredSports = selectedCategory === 'All'
    ? sportsList
    : sportsList.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#06080C] text-slate-100">
      {/* 1. Header Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.25]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/80 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-volt/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-volt border border-white/15 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> 5 Dedicated Championship Arenas
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-6">
            SPORTS & <span className="text-brand-volt">ACTIVITIES</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From cricket practice turfs and FIFA soccer pitches to hardwood basketball and Olympic racquet courts. Explore each discipline in detail.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-volt text-black shadow-[0_0_20px_rgba(212,255,0,0.3)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Grid of All Sports */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSports.map((sport) => (
            <SportCard
              key={sport.id}
              sport={sport}
              onBook={(sportName) => onOpenBooking ? onOpenBooking(sportName) : null}
              onSelect={(item) => setActiveModalSport(item)}
            />
          ))}
        </div>
      </section>

      {/* 3. Detailed Court Specs & Booking CTA Banner */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
                Drop-in Play & Seasonal Bookings
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-4">
                Need a Court for your Team or Weekend Match?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Reserve floodlit cricket nets, rent a 5v5 soccer cage, or book a pristine badminton or tennis court by the hour. Equipment rental available on site.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking ? onOpenBooking('Cricket') : null}
                className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-lg shadow-brand-volt/20 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve A Court Now</span>
              </button>
              <button
                onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:text-brand-volt border border-white/20 transition-colors"
              >
                Join for Unlimited Bookings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Sport Detail Modal */}
      {activeModalSport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div 
            className="relative w-full max-w-2xl bg-[#0d121c] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setActiveModalSport(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/90"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-72">
              <img
                src={activeModalSport.coverImage || activeModalSport.image}
                alt={activeModalSport.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121c] via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-volt text-black inline-block mb-2">
                  {activeModalSport.category}
                </span>
                <h3 className="text-3xl font-black uppercase text-white tracking-tight">
                  {activeModalSport.name} Facility
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-volt mb-2">
                  {activeModalSport.tagline}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalSport.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs">
                <div>
                  <span className="text-slate-500 block uppercase font-bold text-[10px]">Arena Capacity:</span>
                  <span className="text-white font-semibold">{activeModalSport.stats.courts}</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-bold text-[10px]">Surface Material:</span>
                  <span className="text-white font-semibold">{activeModalSport.stats.surface}</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-bold text-[10px]">Operating Hours:</span>
                  <span className="text-white font-semibold">{activeModalSport.stats.timings}</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-bold text-[10px]">Staff & Coaches:</span>
                  <span className="text-white font-semibold">{activeModalSport.stats.coaches}</span>
                </div>
              </div>

              {/* Features List */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                  Included Amenities & Technology:
                </h5>
                <div className="space-y-2">
                  {activeModalSport.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-volt shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <button
                  onClick={() => {
                    const sName = activeModalSport.name;
                    setActiveModalSport(null);
                    if (onOpenBooking) onOpenBooking(sName);
                  }}
                  className="flex-1 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-black bg-brand-volt hover:bg-[#bdec00] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-volt/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {activeModalSport.name} Slot</span>
                </button>
                <button
                  onClick={() => setActiveModalSport(null)}
                  className="px-5 py-3 rounded-xl font-semibold uppercase tracking-wider text-xs text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
