import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Flame, 
  ArrowRight,
  CheckCircle2,
  Star
} from 'lucide-react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import SportCard from '../components/SportCard';
import CoachCard from '../components/CoachCard';
import EventCard from '../components/EventCard';
import { sportsList, coachesList, upcomingEvents, memberTestimonials } from '../data/sportsData';

export default function HomePage({ onOpenRegister, onOpenBooking }) {
  const [activeSportFilter, setActiveSportFilter] = useState('All');

  const filteredSports = activeSportFilter === 'All' 
    ? sportsList.filter(s => s.featured) 
    : sportsList.filter(s => s.category.toLowerCase().includes(activeSportFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#06080C] text-slate-100">
      {/* 1. HERO SECTION - 2-Column Athletic Campus Showcase with Higher Opacity Background */}
      <Hero onOpenRegister={onOpenRegister} onOpenBooking={onOpenBooking} />

      {/* 2. STATS & ACCREDITATIONS BAR */}
      <StatsSection />

      {/* 3. FEATURED SPORTS ACTIVITIES (Moved directly here as requested) */}
      <section className="py-16 lg:py-20 bg-[#090D14] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-1">
                World-Class Arenas
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Featured Sports & Activities
              </h2>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 bg-[#06080C] p-1.5 rounded-full border border-white/10">
              {['All', 'Team Sports', 'Racquet Sports'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSportFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeSportFilter === cat
                      ? 'bg-brand-volt text-black shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSports.map((sport) => (
              <SportCard
                key={sport.id}
                sport={sport}
                onBook={(sportName) => onOpenBooking ? onOpenBooking(sportName) : null}
                onSelect={() => window.location.href = `/sports#${sport.id}`}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/sports"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-brand-volt transition-colors"
            >
              <span>View All 5 Sports, Court Specs & Timings</span>
              <ArrowRight className="w-4 h-4 text-brand-volt" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MEMBERSHIP PREVIEW BANNER */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#121824] via-[#0d121c] to-[#080b11] border border-white/10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-volt/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-volt/10 text-brand-volt border border-brand-volt/20 mb-3">
                All-Access Pass
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-3">
                UNLOCK UNLIMITED ACCESS TO ALL ARENAS
              </h2>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Choose the plan tailored for your schedule. From casual evening play to pro tournament training with dedicated coach mentorship and cryogenic ice recovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-volt/20 text-brand-volt flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">No Signup Fees & Easy Cancel</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-volt/20 text-brand-volt flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">Free Guest Passes Every Month</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-volt/20 text-brand-volt flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">Mobile Court Reservation App</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-volt/20 text-brand-volt flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">Complimentary Coach Consult</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
                  className="px-7 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all shadow-[0_0_20px_rgba(212,255,0,0.35)] cursor-pointer"
                >
                  Join Today — From $49/mo
                </button>
                <Link
                  to="/membership"
                  className="px-5 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Compare All 4 Plans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COACHES & TRAINERS SPOTLIGHT - Wireframe Schematics */}
      <section className="py-16 lg:py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-1">
                Certified Master Mentors
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Meet Our Head Coaches
              </h2>
            </div>
            <Link
              to="/coaches"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-volt hover:underline"
            >
              <span>View All 45+ Certified Trainers</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coachesList.slice(0, 3).map((coach) => (
              <CoachCard
                key={coach.id}
                coach={coach}
                onBookCoach={(coachName) => onOpenBooking ? onOpenBooking(coach.sport, coachName) : null}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. UPCOMING EVENTS & TOURNAMENTS */}
      <section className="py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-1">
                Championship Calendar
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Upcoming Tournaments & Events
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-volt hover:underline"
            >
              <span>Full 2026 Tournament Schedule</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRegisterEvent={() => onOpenBooking ? onOpenBooking(event.sport) : null}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. MEMBER TESTIMONIALS */}
      <section className="py-16 lg:py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-1">
              Athlete Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Trusted by Over 12,000 Athletes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {memberTestimonials.map((t) => (
              <div
                key={t.id}
                className="glass-card p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between space-y-4 border border-white/10 hover:border-brand-volt/40 transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80';
                    }}
                    className="w-10 h-10 rounded-full object-cover border border-brand-volt/40"
                  />
                  <div>
                    <h5 className="text-xs font-bold uppercase text-white">{t.name}</h5>
                    <span className="text-[11px] text-brand-volt">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-[#090D14] to-[#040609] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-volt/10 text-brand-volt border border-brand-volt/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 fill-brand-volt" /> Ready to Elevate Your Game?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            JOIN <span className="text-brand-volt">SPORTS CLUB</span> TODAY
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Start training on tournament-grade courts, book dedicated slots, and join our vibrant community of passionate athletes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
              className="px-8 py-3.5 rounded-full font-black uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all shadow-[0_0_30px_rgba(212,255,0,0.45)] cursor-pointer"
            >
              Get Started — Join Now
            </button>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white hover:text-brand-volt border border-white/20 hover:border-brand-volt/50 transition-colors"
            >
              Visit Campus & Take Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
