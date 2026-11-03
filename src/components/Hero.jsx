import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowUpRight,
  Users,
  MapPin,
  Award,
  Trophy
} from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  const stats = [
    { value: '12,500+', label: 'Active Club Members', icon: Users },
    { value: '25+', label: 'Acres Sports Campus', icon: MapPin },
    { value: '45+', label: 'Elite Certified Coaches', icon: Award },
    { value: '98.6%', label: 'Member Satisfaction', icon: Trophy }
  ];

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-between overflow-hidden bg-[#06080C] border-b border-white/10">
      {/* High-Resolution Panoramic Stadium Background - Clear, Sharp & Vivid */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=2070&q=90"
          alt="Sports Stadium Arena"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2070&q=90';
          }}
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12] opacity-85"
        />
        {/* Subtle, soft directional gradient so image remains clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080C]/90 via-[#06080C]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C]/80 via-transparent to-[#06080C]/40" />
      </div>

      {/* Decorative ambient brand volt glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-volt/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Hero Upper Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16 lg:pt-20 pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-4 shadow-md">
            <span className="w-2 h-2 rounded-full bg-brand-volt" />
            <span className="text-brand-volt">Elite Athletic Campus</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">25-Acre Complex</span>
          </div>

          {/* Bold Athletic Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              UNLEASH YOUR{' '}
            </span>
            <span className="text-brand-volt block drop-shadow-[0_0_30px_rgba(212,255,0,0.4)]">
              INNER CHAMPION
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-normal leading-relaxed mb-6 max-w-xl text-justify sm:text-left drop-shadow-sm">
            Premier athletic destination featuring ICC-standard cricket grounds, FIFA-certified football turf, FIBA hardwood basketball courts, and tournament racquet arenas.
          </p>

          {/* Clean Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
              className="px-7 py-3.5 rounded-full font-extrabold uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all duration-300 shadow-[0_0_25px_rgba(212,255,0,0.45)] hover:shadow-[0_0_35px_rgba(212,255,0,0.7)] hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>Join Sports Club Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <Link
              to="/sports"
              className="px-6 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-black/60 hover:bg-black/80 border border-white/25 hover:border-brand-volt/60 transition-all backdrop-blur-md flex items-center gap-1.5"
            >
              <span>Explore 5 Arenas</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-volt" />
            </Link>
          </div>

        </div>
      </div>

      {/* Docked Bottom Stats Bar - Perfectly touches the bottom of the viewport */}
      <div className="relative z-10 w-full border-t border-white/15 bg-[#06080C]/85 backdrop-blur-xl py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-volt/30 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-volt/10 text-brand-volt flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight block leading-none mb-1">
                      {item.value}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 block truncate">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
