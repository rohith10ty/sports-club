import { useState } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotificationBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-brand-volt/90 via-emerald-400/90 to-brand-volt/90 text-black px-4 py-2 text-xs md:text-sm font-semibold tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
          <span className="inline-flex items-center gap-1 bg-black text-brand-volt px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Season 2026
          </span>
          <span className="truncate">
            Summer League Registrations & Academy Trials are now open!
          </span>
          <Link
            to="/membership"
            className="hidden sm:inline-flex items-center gap-1 underline underline-offset-4 hover:opacity-80 transition-opacity font-bold ml-1"
          >
            Claim 20% Early Bird Pass <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="p-1 hover:bg-black/10 rounded-full transition-colors ml-2"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
}
