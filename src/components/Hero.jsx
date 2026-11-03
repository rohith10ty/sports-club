import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

const heroSlides = [
  {
    sport: 'Multi-Sport Arena',
    headline: 'UNLEASH YOUR INNER CHAMPION',
    tagline: 'Premier athletic destination featuring ICC-standard cricket grounds, FIFA-certified football turf, FIBA hardwood basketball courts, and tournament racquet arenas.',
    bg: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80',
    accentText: 'Cricket • Football • Basketball • Tennis • Badminton',
    badge: 'Elite Athletic Campus',
    highlightStat: '25-Acre Complex'
  },
  {
    sport: 'Cricket Academy',
    headline: 'PRECISION, PACE & POWER PLAY',
    tagline: 'Master your batting & bowling under ICC certified coaches with high-speed automated bowling machines, floodlit turfs, and video biomechanics.',
    bg: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=1920&q=80',
    accentText: '6 Practice Nets • High-Speed Merion Turf • T20 Leagues',
    badge: 'ICC Standard Ground',
    highlightStat: '155 km/h Machines'
  },
  {
    sport: 'Football Arena',
    headline: 'DOMINATE THE PITCH UNDER THE LIGHTS',
    tagline: 'FIFA Quality Pro turf with 1200-lux broadcast floodlights, tactical player tracking, weekend tournaments, and pro European youth clinics.',
    bg: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=1920&q=80',
    accentText: '11v11 Championship Turf • 5v5 Fast Cages • UEFA Staff',
    badge: 'FIFA Pro Certified',
    highlightStat: '1,200 Lux Stadium'
  },
  {
    sport: 'Basketball Arena',
    headline: 'ELEVATE ABOVE THE RIM',
    tagline: 'Climate-controlled air-cushioned Robbins maple wood courts, Spalding NBA breakaway rims, Dr. Dish automated shooting machines, and 3x3 showdowns.',
    bg: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1920&q=80',
    accentText: 'FIBA Standard Maple Court • Automated Shooting Drills',
    badge: 'FIBA Hardwood Floor',
    highlightStat: 'Air Conditioned'
  },
  {
    sport: 'Racquet Sports',
    headline: 'SPEED, SPIN & UNRIVALED AGILITY',
    tagline: '8 BWF-approved badminton courts with anti-glare downward lighting and 6 Grand Slam ITF plexicushion & red clay tennis courts.',
    bg: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1920&q=80',
    accentText: 'BWF Grade-1 Mats • 4 Plexicushion Courts • Smart Replay',
    badge: 'BWF & ITF Sanctioned',
    highlightStat: '14 Racquet Courts'
  }
];

export default function Hero({ onOpenRegister, onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotate slides every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = heroSlides[currentSlide];

  return (
    <section 
      className="relative min-h-[68vh] lg:min-h-[74vh] flex items-center justify-center overflow-hidden bg-[#06080C]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Smooth Fade Transitions */}
      {heroSlides.map((item, index) => (
        <div
          key={item.sport}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transition: 'opacity 0.8s ease-in-out, transform 8s ease' }}
        >
          <img
            src={item.bg}
            alt={item.sport}
            onError={(e) => {
              if (item.fallbackBg && e.target.src !== item.fallbackBg) {
                e.target.src = item.fallbackBg;
              }
            }}
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15]"
          />
        </div>
      ))}

      {/* Advanced Dark Gradient Overlays for High Readability & Sports Mood */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06080C] via-[#06080C]/70 to-transparent" />

      {/* Decorative Brand Volt Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-volt/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Content - Compact & Balanced */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full">
        <div className="max-w-3xl">
          
          {/* Top Pill Badge - Clean without star */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold uppercase tracking-wider mb-4 animate-fade-in shadow-md">
            <span className="w-2 h-2 rounded-full bg-brand-volt" />
            <span className="text-brand-volt">{slide.badge}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">{slide.highlightStat}</span>
          </div>

          {/* Dynamic Headline - Proportionate and Tight */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              {slide.headline.split(' ').slice(0, -1).join(' ')}{' '}
            </span>
            <span className="text-brand-volt block drop-shadow-[0_0_30px_rgba(212,255,0,0.35)]">
              {slide.headline.split(' ').slice(-1).join(' ')}
            </span>
          </h1>

          {/* Dynamic Subheadline - Justified and balanced */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl text-justify sm:text-left">
            {slide.tagline}
          </p>

          {/* Action CTAs - Clean without star icon */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={() => onOpenRegister ? onOpenRegister('athlete') : null}
              className="px-7 py-3.5 rounded-full font-extrabold uppercase tracking-wider text-xs sm:text-sm text-black bg-brand-volt hover:bg-[#bdec00] transition-all duration-300 shadow-[0_0_25px_rgba(212,255,0,0.4)] hover:shadow-[0_0_35px_rgba(212,255,0,0.6)] hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
            >
              <span>Join Sports Club Now</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              to="/sports"
              className="px-6 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-brand-volt/50 transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            >
              <span>Explore 5 Arenas</span>
              <ArrowUpRight className="w-4 h-4 text-brand-volt" />
            </Link>

            <button
              onClick={() => onOpenBooking ? onOpenBooking(slide.sport) : null}
              className="px-4 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-brand-volt" />
              <span>Book Trial Slot</span>
            </button>
          </div>

          {/* Quick Features List */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-volt shrink-0" />
              <span>No Registration Lock-in</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-volt shrink-0" />
              <span>Olympic Spec Turf & Courts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-volt shrink-0" />
              <span>30-Day Money Back</span>
            </div>
          </div>
        </div>

        {/* Slide Selector Badges (Click to switch sport view) */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mr-1">
              Select Sport Arena:
            </span>
            {heroSlides.map((item, index) => (
              <button
                key={item.sport}
                onClick={() => setCurrentSlide(index)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  currentSlide === index
                    ? 'bg-brand-volt text-black shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {item.sport.replace(' Arena', '').replace(' Academy', '')}
              </button>
            ))}
          </div>

          {/* Quick Slide Indicators */}
          <div className="flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? 'w-8 bg-brand-volt' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
