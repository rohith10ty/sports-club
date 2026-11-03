import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowUpRight 
} from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#06080C] pt-10 pb-10 sm:pt-14 sm:pb-12 border-b border-white/10">
      {/* High-Resolution Athletic Background - Fully visible across full height */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=85"
          alt="Sports Arena Action"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1920&q=85';
          }}
          className="w-full h-full object-cover object-right sm:object-center filter brightness-[0.75] contrast-[1.10] opacity-70"
        />
        {/* Soft directional gradient: dark on left for text contrast, vibrant on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080C]/95 via-[#06080C]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-transparent to-[#06080C]/40" />
      </div>

      {/* Decorative ambient brand volt glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-volt/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Main Hero Content - Clean, Tight & Elegant */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-volt" />
            <span className="text-brand-volt">Elite Athletic Campus</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">25-Acre Complex</span>
          </div>

          {/* Bold Athletic Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              UNLEASH YOUR{' '}
            </span>
            <span className="text-brand-volt block drop-shadow-[0_0_25px_rgba(212,255,0,0.35)]">
              INNER CHAMPION
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-normal leading-relaxed mb-6 max-w-xl drop-shadow-sm">
            Premier athletic destination featuring ICC-standard cricket grounds, FIFA-certified football turf, FIBA hardwood basketball courts, and tournament racquet arenas.
          </p>

          {/* Clean, Premium Action CTAs - Uncluttered, no awkward checkmarks */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
              className="px-6 py-3 rounded-full font-extrabold uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all duration-300 shadow-[0_0_20px_rgba(212,255,0,0.4)] hover:shadow-[0_0_30px_rgba(212,255,0,0.6)] hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>Join Sports Club Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <Link
              to="/sports"
              className="px-5 py-3 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-black/50 hover:bg-black/70 border border-white/20 hover:border-brand-volt/60 transition-all backdrop-blur-md flex items-center gap-1.5"
            >
              <span>Explore 5 Arenas</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-volt" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
