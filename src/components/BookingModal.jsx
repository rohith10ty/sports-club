import { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sportsList, coachesList } from '../data/sportsData';

export default function BookingModal({ isOpen, onClose, initialSport, initialCoach }) {
  const [sport, setSport] = useState(initialSport || 'Cricket');
  const [coach, setCoach] = useState(initialCoach || 'Court Rental Only');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('07:00 AM - 08:30 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '06:00 AM - 07:30 AM (Dawn Run)',
    '07:30 AM - 09:00 AM (Early Prime)',
    '09:00 AM - 10:30 AM (Morning)',
    '04:30 PM - 06:00 PM (Afternoon)',
    '06:00 PM - 07:30 PM (Evening Prime)',
    '07:30 PM - 09:00 PM (Floodlit Night)',
    '09:00 PM - 10:30 PM (Late Match)'
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    const errs = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Valid email is required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    const refCode = `BK-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(refCode);
    setIsBooked(true);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4FF00', '#10B981', '#00F0FF']
    });
  };

  const handleClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#0c1018] border border-white/10 rounded-2xl shadow-2xl my-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-volt via-emerald-400 to-brand-cyan" />
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div className="p-6 sm:p-7">
            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-volt">
                Real-Time Slot Reservation
              </span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Book Court or Session
              </h3>
            </div>

            <form onSubmit={handleBooking} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Sport & Facility
                </label>
                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="w-full bg-[#131a26] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:border-brand-volt outline-none"
                >
                  {sportsList.map(s => (
                    <option key={s.id} value={s.name}>{s.name} - {s.stats.courts}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Trainer / Session Preference
                </label>
                <select
                  value={coach}
                  onChange={(e) => setCoach(e.target.value)}
                  className="w-full bg-[#131a26] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:border-brand-volt outline-none"
                >
                  <option value="Court Rental Only">Court Rental Only (No Coach)</option>
                  {coachesList.map(c => (
                    <option key={c.id} value={c.name}>{c.name} ({c.sport})</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Booking Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#131a26] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:border-brand-volt outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#131a26] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:border-brand-volt outline-none"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Athlete name"
                  className={`w-full bg-[#131a26] border rounded-xl px-3 py-2 text-sm text-white outline-none ${
                    errors.name ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full bg-[#131a26] border rounded-xl px-3 py-2 text-sm text-white outline-none ${
                      errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className={`w-full bg-[#131a26] border rounded-xl px-3 py-2 text-sm text-white outline-none ${
                      errors.email ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-lg shadow-brand-volt/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Confirm Slot Reservation</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-6 sm:p-8 text-center animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">
              Booking Confirmed!
            </h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              Your court and slot reservation has been registered at Sports Club.
            </p>

            <div className="bg-[#121824] border border-white/10 rounded-xl p-4 text-left text-xs space-y-2 mb-5">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Booking Reference</span>
                <span className="font-mono font-bold text-brand-volt">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Sport:</span>
                <span className="text-white font-semibold">{sport}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Option:</span>
                <span className="text-white font-semibold">{coach}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Date:</span>
                <span className="text-white font-semibold">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Time:</span>
                <span className="text-white font-semibold">{timeSlot}</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
