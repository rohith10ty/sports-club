import { Trophy, Shield, Flame, Zap, Target, Activity, Check, ArrowRight, Calendar } from 'lucide-react';

const iconMap = {
  Trophy: Trophy,
  Shield: Shield,
  Flame: Flame,
  Zap: Zap,
  Target: Target,
  Activity: Activity
};

export default function SportCard({ sport, onBook, onSelect }) {
  const IconComponent = iconMap[sport.icon] || Trophy;

  return (
    <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-brand-volt/40">
      {/* Image Header with Badge and Gradient */}
      <div className="relative h-60 sm:h-64 overflow-hidden">
        <img
          src={sport.image}
          alt={sport.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-black/30" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-brand-volt border border-brand-volt/30">
            {sport.category}
          </span>
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-black/70 backdrop-blur-md text-white border border-white/10">
            {sport.pricing}
          </span>
        </div>

        {/* Floating Sport Name on Image */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-brand-volt text-black flex items-center justify-center font-bold shadow-lg">
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-black uppercase text-white tracking-tight drop-shadow-md">
            {sport.name}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-volt mb-2">
            {sport.tagline}
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
            {sport.description}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Courts / Pitch</span>
            <span className="text-slate-200 font-semibold truncate block">{sport.stats.courts}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Surface</span>
            <span className="text-slate-200 font-semibold truncate block">{sport.stats.surface}</span>
          </div>
        </div>

        {/* Key Features Bullet points */}
        <div className="space-y-1.5 pt-1">
          {sport.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <Check className="w-3.5 h-3.5 text-brand-volt shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-white/10 flex items-center gap-2">
          <button
            onClick={() => onBook && onBook(sport.name)}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-md shadow-brand-volt/20 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Slot</span>
          </button>
          
          <button
            onClick={() => onSelect && onSelect(sport)}
            className="py-2.5 px-3.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors flex items-center justify-center cursor-pointer"
            title="View Details"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
