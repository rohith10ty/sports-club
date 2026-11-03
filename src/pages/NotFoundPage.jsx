import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Trophy } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#06080C] text-slate-100 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-volt/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto p-8 glass-card rounded-3xl border border-white/10 shadow-2xl">
        <span className="font-mono text-7xl font-black text-brand-volt block mb-2">404</span>
        <h2 className="text-2xl font-black uppercase text-white tracking-tight mb-2">
          Out of Bounds!
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
          The court or playbook you're looking for does not exist or has been relocated to another championship arena.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Arena</span>
          </Link>
          <Link
            to="/sports"
            className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white hover:text-brand-volt border border-white/20 transition-colors"
          >
            Explore Sports
          </Link>
        </div>
      </div>
    </div>
  );
}
