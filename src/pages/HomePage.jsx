import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Flame, 
  Zap, 
  Target, 
  Activity, 
  Star, 
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
  Layers,
  HeartPulse
} from 'lucide-react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import SportCard from '../components/SportCard';
import CoachCard from '../components/CoachCard';
import EventCard from '../components/EventCard';
import { sportsList, membershipPlans, coachesList, upcomingEvents, memberTestimonials } from '../data/sportsData';

export default function HomePage({ onOpenRegister, onOpenBooking }) {
  const [activeSportFilter, setActiveSportFilter] = useState('All');

  const filteredSports = activeSportFilter === 'All' 
    ? sportsList.filter(s => s.featured) 
    : sportsList.filter(s => s.category.toLowerCase().includes(activeSportFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#06080C] text-slate-100">
      {/* 1. HERO SECTION */}
      <Hero onOpenRegister={onOpenRegister} onOpenBooking={onOpenBooking} />

      {/* 2. STATS & ACCREDITATIONS BAR */}
      <StatsSection />

      {/* 3. CLUB INTRODUCTION */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-volt/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Mosaic */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80"
                  alt="Sports Club Campus"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0e131d]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-volt">
                      State-of-the-Art Complex
                    </span>
                    <h4 className="text-white font-extrabold text-sm sm:text-base">
                      25-Acre Olympic Grade Arenas
                    </h4>
                  </div>
                  <Link
                    to="/about"
                    className="p-2.5 rounded-xl bg-brand-volt text-black hover:bg-[#bdec00] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Decorative side accent card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 z-20 p-5 rounded-2xl bg-gradient-to-br from-[#161d2b] to-[#0c1018] border border-brand-volt/30 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-volt/20 text-brand-volt flex items-center justify-center font-bold">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase text-white">Championship Heritage</span>
                </div>
                <p className="text-xs text-slate-400">
                  Home ground for over 18 state championships and collegiate athletic leagues.
                </p>
              </div>
            </div>

            {/* Content Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-brand-volt">
                <Sparkles className="w-3.5 h-3.5" /> Welcome to Sports Club
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                BUILT FOR ATHLETES. <br />
                <span className="text-gradient-volt">ENGINEERED FOR EXCELLENCE.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Founded with a bold vision to elevate community and competitive athletics, <strong>Sports Club</strong> stands as the region’s premier multi-sport hub. Whether you are stepping onto the pitch for your first recreational match, perfecting your cover drive under the floodlit nets, or preparing for international competition, our facility offers unmatched infrastructure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-brand-volt" />
                    <h5 className="text-xs font-bold uppercase text-white">Pro Surfaces Only</h5>
                  </div>
                  <p className="text-xs text-slate-400">
                    FIFA Pro turf, Robbins FIBA maple floors, and BWF synthetic mats that protect your knees.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <HeartPulse className="w-4 h-4 text-brand-emerald" />
                    <h5 className="text-xs font-bold uppercase text-white">Sports Science & Recovery</h5>
                  </div>
                  <p className="text-xs text-slate-400">
                    Cold water plunges, infrared saunas, and certified physiotherapists on-site daily.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-lg shadow-brand-volt/20 flex items-center gap-2"
                >
                  <span>Our Story & Mission</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/membership"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:text-brand-volt border border-white/20 hover:border-brand-volt/40 transition-colors"
                >
                  Explore Membership Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SPORTS ACTIVITIES */}
      <section className="py-20 bg-[#090D14] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
                World-Class Arenas
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
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

          <div className="mt-12 text-center">
            <Link
              to="/sports"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-brand-volt transition-colors"
            >
              <span>View All 5 Sports, Court Specs & Timings</span>
              <ArrowRight className="w-4 h-4 text-brand-volt" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. MEMBERSHIP PREVIEW BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#121824] via-[#0d121c] to-[#080b11] border border-white/10 overflow-hidden shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-volt/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-volt/10 text-brand-volt border border-brand-volt/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> All-Access Pass
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight mb-4">
                UNLOCK UNLIMITED ACCESS TO ALL ARENAS
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
                Choose the plan tailored for your schedule. From casual evening play to pro tournament training with dedicated coach mentorship and cryogenic ice recovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-volt/20 text-brand-volt flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">No Signup Fees & Easy Cancel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-volt/20 text-brand-volt flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">Free Guest Passes Every Month</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-volt/20 text-brand-volt flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">Mobile Court Reservation App</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-volt/20 text-brand-volt flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">Complimentary Coach Consult</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
                  className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all shadow-[0_0_25px_rgba(212,255,0,0.35)] cursor-pointer"
                >
                  Join Today — From $49/mo
                </button>
                <Link
                  to="/membership"
                  className="px-6 py-4 rounded-full font-semibold uppercase tracking-wider text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Compare All 4 Plans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COACHES & TRAINERS SPOTLIGHT */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
                Certified Master Mentors
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
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

      {/* 7. UPCOMING EVENTS & TOURNAMENTS */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
                Championship Calendar
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
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

      {/* 8. MEMBER TESTIMONIALS */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
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

      {/* 9. HIGH VOLTAGE BOTTOM CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#090D14] to-[#040609] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-volt/10 text-brand-volt border border-brand-volt/30 text-xs font-bold uppercase tracking-wider mb-6">
            <Flame className="w-3.5 h-3.5 fill-brand-volt" /> Ready to Elevate Your Game?
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
            JOIN <span className="text-brand-volt">SPORTS CLUB</span> TODAY
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Start training on tournament-grade courts, book dedicated slots, and join our vibrant community of passionate athletes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
              className="px-9 py-4 rounded-full font-black uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all shadow-[0_0_35px_rgba(212,255,0,0.5)] cursor-pointer"
            >
              Get Started — Join Now
            </button>
            <Link
              to="/contact"
              className="px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white hover:text-brand-volt border border-white/20 hover:border-brand-volt/50 transition-colors"
            >
              Visit Campus & Take Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
