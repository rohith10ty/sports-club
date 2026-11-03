import { useState } from 'react';
import { 
  Calendar, 
  Trophy, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Flame,
  Award
} from 'lucide-react';
import EventCard from '../components/EventCard';
import { upcomingEvents } from '../data/sportsData';

export default function EventsPage({ onOpenBooking }) {
  const [activeSportFilter, setActiveSportFilter] = useState('All');

  const sportsOptions = ['All', 'Cricket', 'Football', 'Tennis', 'Badminton', 'Basketball'];

  const filteredEvents = activeSportFilter === 'All'
    ? upcomingEvents
    : upcomingEvents.filter(e => e.sport.toLowerCase() === activeSportFilter.toLowerCase());

  const pastTournaments = [
    {
      title: 'Winter Cricket Premier League 2025',
      winner: 'Sports Club Thunderbolts',
      runnerUp: 'Metro Strikers CC',
      mvp: 'Rohan Deshmukh (342 Runs, 14 Wkts)',
      date: 'December 2025'
    },
    {
      title: 'Autumn 5v5 Futsal Champions Cup',
      winner: 'Apex United FC',
      runnerUp: 'Red Star Academy',
      mvp: 'Lucas Gomez (18 Goals)',
      date: 'November 2025'
    },
    {
      title: 'Regional Badminton Masters Trophy',
      winner: 'Priya Nair (Singles)',
      runnerUp: 'Zheng Wei',
      mvp: 'Priya Nair (Undefeated Set Score)',
      date: 'October 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-[#06080C] text-slate-100">
      {/* 1. Header Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.25]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/80 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-volt/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-volt border border-white/15 mb-4">
            Competitive Championship Calendar
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-6">
            EVENTS & <span className="text-brand-volt">TOURNAMENTS</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Test your competitive spirit in high-stakes regional leagues, cash prize tourneys, weekend shootouts, and community athletic festivals.
          </p>

          {/* Sport filter tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {sportsOptions.map((sport) => (
              <button
                key={sport}
                onClick={() => setActiveSportFilter(sport)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSportFilter === sport
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

      {/* 2. Upcoming Tournaments Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-1">
              Active Registration Window
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Upcoming Competitions ({filteredEvents.length})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRegisterEvent={() => onOpenBooking ? onOpenBooking(event.sport) : null}
            />
          ))}
        </div>
      </section>

      {/* 3. Tournament Hall of Fame & Past Champions */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
              Heritage of Glory
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Hall of Fame — Past Champions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pastTournaments.map((past, i) => (
              <div key={i} className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {past.date}
                </span>
                <h4 className="text-lg font-black uppercase text-white tracking-tight mb-3">
                  {past.title}
                </h4>

                <div className="space-y-2 text-xs border-t border-white/10 pt-3 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Champion:</span>
                    <span className="font-bold text-brand-volt">{past.winner}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Runner-Up:</span>
                    <span className="font-medium text-slate-300">{past.runnerUp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tournament MVP:</span>
                    <span className="font-medium text-amber-300 truncate max-w-[160px]">{past.mvp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Host Your Corporate or Club Event CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
              Bespoke Event Hosting
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight mb-4">
              Host Your Corporate Sports Day or Invitational
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Rent our entire stadium oval, multi-sport hall, catering lounges, and audio-visual setups for private tournaments, school sports meets, and corporate fitness days.
            </p>
            <button
              onClick={() => onOpenBooking ? onOpenBooking('Multi-Sport') : null}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-lg shadow-brand-volt/20"
            >
              Inquire About Arena Rental
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
