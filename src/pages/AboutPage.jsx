import { 
  Trophy, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { clubMilestones, clubStats } from '../data/sportsData';

export default function AboutPage({ onOpenRegister }) {
  const coreValues = [
    {
      title: 'Uncompromising Excellence',
      desc: 'From our Merion cricket pitch and FIFA turf to our locker rooms, we settle for nothing less than world-class championship standards.',
      icon: Trophy,
      color: 'text-brand-volt'
    },
    {
      title: 'Inclusivity & Growth',
      desc: 'Sports are for everyone. We support grassroots junior development (ages 5+) alongside collegiate and Olympic-bound veterans.',
      icon: Users,
      color: 'text-emerald-400'
    },
    {
      title: 'Discipline & Sportsmanship',
      desc: 'Victory is forged through integrity, respectful competition, team camaraderie, and the daily grind of athletic commitment.',
      icon: Target,
      color: 'text-brand-cyan'
    },
    {
      title: 'Health & Long-Term Longevity',
      desc: 'We pair rigorous training with restorative sports science: cryotherapy, physical therapy, and biomechanical injury prevention.',
      icon: ShieldCheck,
      color: 'text-amber-400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#06080C] text-slate-100">
      {/* 1. Header Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.25]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/80 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-volt/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-volt border border-white/15 mb-4">
            Our Heritage & Purpose
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-6">
            ABOUT <span className="text-brand-volt">SPORTS CLUB</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded with a passion to nurture champions and champion healthy communities. Welcome to our 25-acre sporting sanctuary.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-brand-volt/10 text-brand-volt flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
              Our Core Purpose
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight mb-4">
              Our Mission
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To provide an inspiring, state-of-the-art environment where athletes of every generation can unlock their highest potential. We empower players through elite certified coaching, Olympic-specification playing surfaces, and a supportive, sports-first culture.
            </p>
          </div>

          {/* Vision Card */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              The Path Forward
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight mb-4">
              Our Vision
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To be the internationally recognized benchmark for multi-sport athletic clubs — cultivating national champions, promoting lifelong physical wellness, and serving as the beating heart of local and regional sporting camaraderie.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Club History & Journey */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
              Evolution & Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              Our Championship Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-brand-volt/40 ml-4 md:ml-32 space-y-12">
            {clubMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Timeline Node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#06080C] border-2 border-brand-volt flex items-center justify-center text-brand-volt group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(212,255,0,0.4)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-volt" />
                </div>

                <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-brand-volt/30 transition-all max-w-2xl">
                  <span className="text-xs font-black tracking-widest uppercase text-brand-volt block mb-1">
                    {milestone.year}
                  </span>
                  <h4 className="text-xl font-bold uppercase text-white tracking-tight mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Our Core Athletic Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${val.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold uppercase text-white mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Campus Infrastructure & Specs */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
                Facility Specifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-6">
                BUILT TO GLOBAL TOURNAMENT STANDARDS
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Every sports surface at Sports Club is calibrated to avoid repetitive strain injuries and provide optimum ball bounce, friction, and traction.
                </p>
                
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-volt shrink-0" />
                    <span><strong>Cricket:</strong> 6 Floodlit Bermuda Turf Nets + Merion Clay Center Pitch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-volt shrink-0" />
                    <span><strong>Football:</strong> FIFA Quality Pro 50mm rubber infill shockpad turf</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-volt shrink-0" />
                    <span><strong>Basketball:</strong> FIBA Robbins Bio-Channel Maple Wood shock absorptive court</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-volt shrink-0" />
                    <span><strong>Badminton:</strong> 8 BWF Approved Gerflor Taraflex Mats with indirect LED illumination</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-volt shrink-0" />
                    <span><strong>Tennis:</strong> 4 ITF Plexicushion Grand Slam & 2 European Red Clay courts</span>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
                    className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-lg shadow-brand-volt/20"
                  >
                    Become a Member Today
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80"
                alt="Cricket Grounds"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80'; }}
                className="rounded-2xl object-cover h-52 w-full border border-white/10"
              />
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80"
                alt="Basketball Court"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80'; }}
                className="rounded-2xl object-cover h-52 w-full border border-white/10 mt-6"
              />
              <img
                src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=600&q=80"
                alt="Tennis Match"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=600&q=80'; }}
                className="rounded-2xl object-cover h-52 w-full border border-white/10 -mt-6"
              />
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
                alt="Gym & Recovery"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80'; }}
                className="rounded-2xl object-cover h-52 w-full border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
