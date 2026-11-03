import { Star, Award, Calendar, CheckCircle2 } from 'lucide-react';
import WireframeCoachArt from './WireframeCoachArt';

export default function CoachCard({ coach, onBookCoach }) {
  return (
    <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-brand-volt/40">
      {/* High-Tech Wireframe Schematic Graphic */}
      <div className="relative h-64 overflow-hidden bg-[#070A10]">
        <WireframeCoachArt
          sport={coach.sport}
          name={coach.name}
          id={coach.id}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-brand-volt border border-brand-volt/40 shadow-lg">
            {coach.sport}
          </span>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-amber-400 border border-white/10 shadow-lg">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{coach.rating}</span>
          </div>
        </div>

        {/* Floating Coach Title Bar */}
        <div className="absolute bottom-2 left-3 right-3 z-20 pointer-events-none">
          <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-volt block">
            {coach.experience}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight drop-shadow-md">
            {coach.name}
          </h3>
        </div>
      </div>

      {/* Details & Bio */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-xs text-brand-volt font-bold block mb-3">
            {coach.role}
          </span>

          {/* Certification Badge */}
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 mb-3 flex items-start gap-2">
            <Award className="w-4 h-4 text-brand-volt shrink-0 mt-0.5" />
            <span className="font-medium">{coach.certification}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
            {coach.bio}
          </p>

          {/* Key Achievements */}
          <div className="space-y-1.5 pt-2 border-t border-white/10">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
              Career Highlights
            </span>
            {coach.achievements.map((ach, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-volt shrink-0 mt-0.5" />
                <span className="line-clamp-1">{ach}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400">
            {coach.studentsTrained}
          </span>
          <button
            onClick={() => onBookCoach && onBookCoach(coach.name)}
            className="py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-md shadow-brand-volt/20 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book 1-on-1</span>
          </button>
        </div>
      </div>
    </div>
  );
}
