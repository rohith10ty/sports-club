import { useState } from 'react';
import { 
  Trophy, 
  Search, 
  Star, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Filter,
  Users
} from 'lucide-react';
import CoachCard from '../components/CoachCard';
import { coachesList } from '../data/sportsData';

export default function CoachesPage({ onOpenBooking }) {
  const [selectedSport, setSelectedSport] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const sportsFilterOptions = ['All', 'Cricket', 'Football', 'Tennis', 'Basketball', 'Badminton', 'Strength & Conditioning'];

  const filteredCoaches = coachesList.filter((coach) => {
    const matchesSport = selectedSport === 'All' || coach.sport.toLowerCase() === selectedSport.toLowerCase();
    const matchesSearch = coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          coach.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          coach.certification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSport && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#06080C] text-slate-100">
      {/* 1. Header Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.25]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/80 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-volt/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-volt border border-white/15 mb-4">
            Elite Mentorship Roster
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-6">
            COACHES & <span className="text-brand-volt">TRAINERS</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Train alongside former Olympians, ICC Level-3 master tacticians, UEFA A-Licensed directors, and certified sports biomechanists.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coach by name, specialty, or license..."
              className="w-full bg-[#101622] border border-white/10 rounded-full pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-volt transition-colors"
            />
          </div>

          {/* Sport Filters */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {sportsFilterOptions.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedSport === sport
                    ? 'bg-brand-volt text-black shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Coaches Roster */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCoaches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCoaches.map((coach) => (
              <CoachCard
                key={coach.id}
                coach={coach}
                onBookCoach={(coachName) => onOpenBooking ? onOpenBooking(coach.sport, coachName) : null}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-3xl p-8 max-w-md mx-auto">
            <Users className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No coaches found</h4>
            <p className="text-xs text-slate-400 mb-4">
              Try adjusting your search criteria or selecting a different sport filter.
            </p>
            <button
              onClick={() => { setSelectedSport('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-brand-volt"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 3. Training Methodology & Certification Banner */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-brand-volt/10 text-brand-volt flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold uppercase text-white mb-2">100% Certified Pedigree</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                All coaching staff undergo rigorous continuous education, background screening, and hold recognized international federation certifications.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold uppercase text-white mb-2">Biomechanical Video Lab</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We combine hands-on tactical drills with high-speed video capture to assess bowling actions, racquet swing paths, and shooting mechanics.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold uppercase text-white mb-2">Flexible 1-on-1 Slots</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Book private 45-minute or 90-minute intensive clinics around your work or school schedule with our easy real-time reservation tool.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
