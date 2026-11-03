import { Users, Award, MapPin, Trophy, ShieldCheck, Zap } from 'lucide-react';
import { clubStats } from '../data/sportsData';

export default function StatsSection() {
  const iconMap = {
    Users: Users,
    MapPin: MapPin,
    Award: Award,
    Star: Trophy
  };

  return (
    <section className="relative z-20 py-12 bg-[#090D14] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {clubStats.map((stat, i) => {
            const IconComponent = iconMap[stat.icon] || Trophy;
            return (
              <div 
                key={i} 
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-volt/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-volt/10 text-brand-volt flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Accreditations Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <span className="font-bold uppercase tracking-widest text-slate-500">
            Official Accreditations & Standards:
          </span>
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-brand-volt" /> FIFA Quality Pro Standard
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-brand-volt" /> ICC Standard Turf Dimensions
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-brand-volt" /> FIBA Approved Robbins Flooring
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-brand-volt" /> BWF Grade-1 Badminton Arenas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
