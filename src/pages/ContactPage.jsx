import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  PhoneCall,
  Navigation
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Membership',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4FF00', '#10B981', '#FFFFFF']
      });
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'General Membership',
      subject: '',
      message: ''
    });
  };

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
            24/7 Member Desk & Location
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-6">
            CONTACT & <span className="text-brand-volt">VISIT US</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding court rentals, youth academies, or corporate facility bookings? Reach our athletic concierge anytime.
          </p>
        </div>
      </section>

      {/* 2. Contact Cards & Form Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Direct Info column */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-1">
                Direct Channels
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                Get In Touch
              </h3>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-volt/10 text-brand-volt flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Club Phone Line</span>
                  <a href="tel:+18005552582" className="text-sm font-bold text-white hover:text-brand-volt transition-colors">
                    +1 (800) 555-CLUB (2582)
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Toll free • Concierge desk</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Email Inquiries</span>
                  <a href="mailto:membership@sportsclub.org" className="text-sm font-bold text-white hover:text-brand-volt transition-colors">
                    concierge@sportsclub.org
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Responses within 2 business hours</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Operating Hours</span>
                  <p className="text-sm font-bold text-white">Monday – Sunday</p>
                  <p className="text-xs text-brand-volt font-semibold">05:00 AM – 11:00 PM</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">24/7 keycard access for Pro Tier</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Campus Address</span>
                  <p className="text-sm font-bold text-white">777 Champions Way, Sports City</p>
                  <p className="text-xs text-slate-400">Sector 14, Metro Sports District</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">350+ free parking bays & EV docks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form column */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-brand-volt to-emerald-400 absolute top-0 left-0" />

              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-1">
                      Direct Message
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                      Send a Message to Front Desk
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Michael Jordan"
                          className={`w-full bg-[#131a26] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none ${
                            errors.name ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                          }`}
                        />
                        {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="michael@email.com"
                          className={`w-full bg-[#131a26] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none ${
                            errors.email ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                          }`}
                        />
                        {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full bg-[#131a26] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none ${
                            errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Inquiry Department
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full bg-[#131a26] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:border-brand-volt outline-none"
                        >
                          <option value="General Membership" className="bg-[#131a26]">General Membership & Pricing</option>
                          <option value="Court Booking" className="bg-[#131a26]">Court & Arena Slot Booking</option>
                          <option value="Youth Academy" className="bg-[#131a26]">Junior Youth Academy Enrollment</option>
                          <option value="Coach 1-on-1" className="bg-[#131a26]">Personal Trainer / 1-on-1 Session</option>
                          <option value="Tournament Entry" className="bg-[#131a26]">Tournament & League Registration</option>
                          <option value="Corporate Event" className="bg-[#131a26]">Corporate Sports Day / Ground Rental</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Subject Line *
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Inquiring about weekend football turf league"
                        className={`w-full bg-[#131a26] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none ${
                          errors.subject ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                        }`}
                      />
                      {errors.subject && <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Message Details *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you're looking for, team size, preferred sport, or any questions..."
                        className={`w-full bg-[#131a26] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none resize-none ${
                          errors.message ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                        }`}
                      />
                      {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-lg shadow-brand-volt/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Transmit Inquiry to Sports Club</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our member desk has logged your request regarding <strong className="text-brand-volt">{formData.inquiryType}</strong> and will get in touch with you shortly at <span className="text-white">{formData.email}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl font-bold uppercase text-xs text-black bg-brand-volt hover:bg-[#bdec00]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Map & Campus Location Guide */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
              Directions & Access
            </span>
            <h2 className="text-3xl font-black uppercase text-white tracking-tight">
              Finding Sports Club Campus
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Visual Campus Map Mockup */}
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[380px] bg-[#0f1522] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80"
                alt="Sports Club Campus Map Aerial"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-full object-cover filter brightness-[0.45]"
              />
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#090D14]" />

              {/* Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="relative inline-flex items-center justify-center">
                  <span className="absolute w-12 h-12 rounded-full bg-brand-volt/30 animate-ping" />
                  <div className="w-12 h-12 rounded-2xl bg-brand-volt text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,255,0,0.8)] relative z-10">
                    <MapPin className="w-7 h-7 fill-black" />
                  </div>
                </div>
                <div className="mt-3 bg-[#0c1018]/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white font-extrabold text-xs uppercase shadow-2xl">
                  Sports Club Main Arena & Welcome Pavilion
                </div>
              </div>
            </div>

            {/* Directions & Transit Tips */}
            <div className="space-y-4">
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-volt mb-1 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4" /> By Public Transit
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Metro Sports Line Station 4 is directly connected via a pedestrian skywalk straight into our main entrance.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Dedicated Member Parking
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  350 covered parking bays with 24/7 security surveillance and fast Level-3 electric vehicle chargers.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Campus Security & Gate Entry
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Please show your digital member QR pass at the security barrier, or sign in as a guest at Reception Bay A.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
