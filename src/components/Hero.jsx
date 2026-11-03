import { Link } from 'react-router-dom';
import { 
  Trophy, 
  ChevronRight, 
  ShieldCheck, 
  HeartPulse, 
  ArrowRight, 
  Calendar,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';

export default function Hero({ onOpenRegister, onOpenBooking }) {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#06080C] py-12 sm:py-16 lg:py-20 border-b border-white/10">
      {/* Background Stadium Image with Increased Opacity as requested */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80"
          alt="Stadium Arena Lights"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1920&q=80';
          }}
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.10] opacity-45"
        />
        {/* Soft atmospheric gradient overlays for perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/75 to-[#06080C]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080C] via-[#06080C]/85 to-transparent" />
      </div>

      {/* Decorative ambient volt glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-volt/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Main 2-Column Hero Layout (Matching 2nd Attachment) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase Frame with Campus Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-[#0e1420]">
              <img
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80"
                alt="Sports Club Campus"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-transparent to-transparent" />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#0e131d]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-volt">
                    State-of-the-Art Complex
                  </span>
                  <h4 className="text-white font-extrabold text-sm sm:text-base">
                    25-Acre Olympic Grade Arenas
                  </h4>
                </div>
                <Link
                  to="/sports"
                  className="p-2.5 rounded-xl bg-brand-volt text-black hover:bg-[#bdec00] transition-colors cursor-pointer"
                  title="Explore Arenas"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Decorative Side Floating Card */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 z-20 p-5 rounded-2xl bg-gradient-to-br from-[#161d2b] to-[#0c1018] border border-brand-volt/30 shadow-2xl max-w-xs">
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

          {/* Right Column: Hero Headline, Description, Features & CTAs */}
          <div className="space-y-5 order-1 lg:order-2">
            
            {/* Top Pill - Clean without star */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/15 text-brand-volt">
              <span className="w-2 h-2 rounded-full bg-brand-volt" />
              <span>Welcome to Sports Club</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              BUILT FOR ATHLETES. <br />
              <span className="text-gradient-volt">ENGINEERED FOR EXCELLENCE.</span>
            </h1>

            {/* Justified Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
              Founded with a bold vision to elevate community and competitive athletics, <strong>Sports Club</strong> stands as the region’s premier multi-sport hub. Whether you are stepping onto the pitch for your first recreational match, perfecting your cover drive under the floodlit nets, or preparing for international competition, our facility offers unmatched infrastructure.
            </p>

            {/* 2 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-volt/30 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-brand-volt" />
                  <h5 className="text-xs font-bold uppercase text-white">Pro Surfaces Only</h5>
                </div>
                <p className="text-xs text-slate-400">
                  FIFA Pro turf, Robbins FIBA maple floors, and BWF synthetic mats that protect your knees.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-emerald/30 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <HeartPulse className="w-4 h-4 text-brand-emerald" />
                  <h5 className="text-xs font-bold uppercase text-white">Sports Science & Recovery</h5>
                </div>
                <p className="text-xs text-slate-400">
                  Cold water plunges, infrared saunas, and certified physiotherapists on-site daily.
                </p>
              </div>
            </div>

            {/* Action Buttons - Clean without star */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
                className="px-7 py-3.5 rounded-full font-extrabold uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all duration-300 shadow-[0_0_25px_rgba(212,255,0,0.4)] hover:shadow-[0_0_35px_rgba(212,255,0,0.6)] hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Join Sports Club Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <Link
                to="/sports"
                className="px-6 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-brand-volt/50 transition-all flex items-center gap-2"
              >
                <span>Explore 5 Arenas</span>
                <ArrowUpRight className="w-4 h-4 text-brand-volt" />
              </Link>

              <button
                onClick={() => onOpenBooking ? onOpenBooking('Cricket') : null}
                className="px-4 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-brand-volt" />
                <span>Book Slot</span>
              </button>
            </div>

            {/* Quick Checklist */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-volt shrink-0" />
                <span>No Registration Lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-volt shrink-0" />
                <span>Olympic Spec Turf</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-volt shrink-0" />
                <span>30-Day Money Back</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
