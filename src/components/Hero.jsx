import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle, 
  Calendar, 
  ArrowUpRight 
} from 'lucide-react';

export default function Hero({ onOpenRegister, onOpenBooking }) {
  return (
    <section className="relative min-h-[58vh] lg:min-h-[64vh] flex items-center justify-center overflow-hidden bg-[#06080C] py-8 sm:py-12 lg:py-14 border-b border-white/10">
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
        {/* Soft atmospheric gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080C] via-[#06080C]/75 to-transparent" />
      </div>

      {/* Decorative ambient brand volt glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-volt/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Content - Proportionate, Compact & Clean */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-volt" />
            <span className="text-brand-volt">Elite Athletic Campus</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">25-Acre Complex</span>
          </div>

          {/* Scaled-Down, Balanced Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              UNLEASH YOUR{' '}
            </span>
            <span className="text-brand-volt drop-shadow-[0_0_25px_rgba(212,255,0,0.35)]">
              INNER CHAMPION
            </span>
          </h1>

          {/* Justified, Proportionate Description */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-normal leading-relaxed mb-5 max-w-xl text-justify sm:text-left drop-shadow-sm">
            Premier athletic destination featuring ICC-standard cricket grounds, FIFA-certified football turf, FIBA hardwood basketball courts, and tournament racquet arenas.
          </p>

          {/* Action CTAs - Sized Appropriately */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <button
              onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
              className="px-6 py-3 rounded-full font-extrabold uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all duration-300 shadow-[0_0_20px_rgba(212,255,0,0.4)] hover:shadow-[0_0_30px_rgba(212,255,0,0.6)] hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Join Sports Club Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <Link
              to="/sports"
              className="px-5 py-3 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-black/40 hover:bg-black/60 border border-white/20 hover:border-brand-volt/50 transition-all backdrop-blur-md flex items-center gap-1.5"
            >
              <span>Explore 5 Arenas</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-volt" />
            </Link>

            <button
              onClick={() => onOpenBooking ? onOpenBooking('Cricket') : null}
              className="px-4 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer bg-black/20 hover:bg-black/40 border border-white/10"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-volt" />
              <span>Book Trial Slot</span>
            </button>
          </div>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-[11px] text-slate-300 font-semibold drop-shadow-sm">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-brand-volt shrink-0" />
              <span>No Registration Lock-in</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-brand-volt shrink-0" />
              <span>Olympic Spec Turf</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-brand-volt shrink-0" />
              <span>30-Day Money Back</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
