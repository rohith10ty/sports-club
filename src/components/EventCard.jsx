import { Calendar, MapPin, Trophy, Users, Clock, ArrowRight } from 'lucide-react';

export default function EventCard({ event, onRegisterEvent }) {
  return (
    <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-brand-volt/40">
      {/* Event Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80';
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-black/40 to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-brand-volt border border-brand-volt/30">
            {event.sport}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/90 text-black">
            {event.status}
          </span>
        </div>

        {/* Floating Prize Pool Pill */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-brand-volt text-xs font-bold">
          <Trophy className="w-3.5 h-3.5" />
          <span>{event.prizePool}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Date & Location header */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <Calendar className="w-3.5 h-3.5 text-brand-volt" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {event.time}
            </span>
          </div>

          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-brand-volt transition-colors">
            {event.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
            {event.description}
          </p>

          <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Venue:</span>
              <span className="font-medium text-slate-200">{event.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Format & Capacity:</span>
              <span className="font-medium text-slate-200">{event.teamsLimit}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Entry Fee:</span>
              <span className="font-bold text-brand-volt">{event.registrationFee}</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="pt-3 border-t border-white/10">
          <button
            onClick={() => onRegisterEvent && onRegisterEvent(event)}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-md shadow-brand-volt/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Register Team / Player</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
