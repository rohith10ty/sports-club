import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

export default function Hero({ onOpenRegister, onOpenBooking }) {
  return (
    <section className="relative min-h-[78vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-[#06080C] py-16 sm:py-20 lg:py-24 border-b border-white/10">
      {/* High-Resolution Stadium Background with High Opacity & Vivid Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=85"
          alt="Sports Stadium Arena"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1920&q=85';
          }}
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.12] opacity-65"
        />
        {/* Soft atmospheric gradient overlays for text readability without washing out the stadium */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080C] via-[#06080C]/75 to-transparent" />
      </div>

      {/* Decorative ambient brand volt glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-volt/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Content - Grand, Clean, Justified & Without Bottom Clutter */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Top Pill Badge - Clean without star */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-bold uppercase tracking-wider mb-5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-volt" />
            <span className="text-brand-volt">Elite Athletic Campus</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">25-Acre Complex</span>
          </div>

          {/* Grand Cinematic Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              UNLEASH YOUR <br className="hidden sm:block" />
              INNER{' '}
            </span>
            <span className="text-brand-volt block drop-shadow-[0_0_35px_rgba(212,255,0,0.4)]">
              CHAMPION
            </span>
          </h1>

          {/* Justified Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl text-justify sm:text-left drop-shadow-md">
            Premier athletic destination featuring ICC-standard cricket grounds, FIFA-certified football turf, FIBA hardwood basketball courts, and tournament racquet arenas.
          </p>

          {/* Clean Action CTAs - No stars */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <button
              onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
              className="px-8 py-4 rounded-full font-extrabold uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all duration-300 shadow-[0_0_25px_rgba(212,255,0,0.45)] hover:shadow-[0_0_40px_rgba(212,255,0,0.7)] hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>Join Sports Club Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <Link
              to="/sports"
              className="px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-black/40 hover:bg-black/60 border border-white/25 hover:border-brand-volt/60 transition-all backdrop-blur-md flex items-center gap-2"
            >
              <span>Explore 5 Arenas</span>
              <ArrowUpRight className="w-4 h-4 text-brand-volt" />
            </Link>

            <button
              onClick={() => onOpenBooking ? onOpenBooking('Cricket') : null}
              className="px-5 py-4 rounded-full font-semibold text-xs sm:text-sm text-slate-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer bg-black/20 hover:bg-black/40 border border-white/10"
            >
              <Calendar className="w-4 h-4 text-brand-volt" />
              <span>Book Trial Slot</span>
            </button>
          </div>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-semibold drop-shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-volt shrink-0" />
              <span>No Registration Lock-in</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-volt shrink-0" />
              <span>Olympic Spec Turf & Courts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-volt shrink-0" />
              <span>30-Day Money Back Guarantee</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
