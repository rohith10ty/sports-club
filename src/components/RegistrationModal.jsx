import { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  User, 
  Mail, 
  Phone, 
  Trophy, 
  Download,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { membershipPlans, sportsList } from '../data/sportsData';

export default function RegistrationModal({ isOpen, onClose, preselectedPlanId }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    selectedPlan: preselectedPlanId || 'athlete',
    preferredSport: 'Cricket',
    skillLevel: 'Intermediate',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [membershipId, setMembershipId] = useState('');

  useEffect(() => {
    if (preselectedPlanId) {
      setFormData((prev) => ({ ...prev, selectedPlan: preselectedPlanId }));
    }
  }, [preselectedPlanId]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.age || Number(formData.age) < 5 || Number(formData.age) > 99) {
      errs.age = 'Enter a valid age (5-99)';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'You must agree to the club safety and membership terms';
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
      setIsSuccess(true);
      const generatedId = `SC-${Math.floor(100000 + Math.random() * 900000)}`;
      setMembershipId(generatedId);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4FF00', '#10B981', '#00F0FF', '#FFFFFF']
      });
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      selectedPlan: 'athlete',
      preferredSport: 'Cricket',
      skillLevel: 'Intermediate',
      agreeTerms: false
    });
    onClose();
  };

  const selectedPlanDetails = membershipPlans.find(p => p.id === formData.selectedPlan) || membershipPlans[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-[#0c1018] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header bar */}
        <div className="h-2 w-full bg-gradient-to-r from-brand-volt via-emerald-400 to-brand-cyan" />

        {/* Modal Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-volt/10 text-brand-volt border border-brand-volt/20 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Official Member Registration
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Join <span className="text-brand-volt">Sports Club</span>
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Elevate your game with access to Olympic-grade facilities and certified coaching.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Plan Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Select Membership Tier
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {membershipPlans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedPlan: plan.id })}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.selectedPlan === plan.id
                          ? 'border-brand-volt bg-brand-volt/10 text-white shadow-[0_0_15px_rgba(212,255,0,0.15)]'
                          : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold uppercase text-white truncate">{plan.name}</span>
                        {formData.selectedPlan === plan.id && (
                          <span className="w-2 h-2 rounded-full bg-brand-volt" />
                        )}
                      </div>
                      <span className="text-base font-extrabold text-brand-volt">
                        ${plan.priceMonthly}
                        <span className="text-[10px] text-slate-400 font-normal">/mo</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full bg-[#131a26] border rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className={`w-full bg-[#131a26] border rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full bg-[#131a26] border rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 24"
                    min="5"
                    max="99"
                    className={`w-full bg-[#131a26] border rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.age ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                    }`}
                  />
                  {errors.age && <p className="text-[11px] text-rose-400 mt-1">{errors.age}</p>}
                </div>
              </div>

              {/* Sport & Skill Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Sport
                  </label>
                  <select
                    value={formData.preferredSport}
                    onChange={(e) => setFormData({ ...formData, preferredSport: e.target.value })}
                    className="w-full bg-[#131a26] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-volt"
                  >
                    {sportsList.map((sport) => (
                      <option key={sport.id} value={sport.name} className="bg-[#131a26] text-white">
                        {sport.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Skill Level
                  </label>
                  <select
                    value={formData.skillLevel}
                    onChange={(e) => setFormData({ ...formData, skillLevel: e.target.value })}
                    className="w-full bg-[#131a26] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-volt"
                  >
                    <option value="Beginner" className="bg-[#131a26]">Beginner (Starting Out)</option>
                    <option value="Intermediate" className="bg-[#131a26]">Intermediate (Regular Player)</option>
                    <option value="Advanced" className="bg-[#131a26]">Advanced (Competitive League)</option>
                    <option value="Semi-Pro" className="bg-[#131a26]">Semi-Pro / Tournament Level</option>
                  </select>
                </div>
              </div>

              {/* Terms checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-white/20 text-brand-volt focus:ring-0 accent-[#D4FF00]"
                  />
                  <span className="text-xs text-slate-400 leading-snug">
                    I agree to the <span className="text-white underline">Sports Club Rules</span>, safety waivers, and acknowledge the 30-day money back guarantee.
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.agreeTerms}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-all duration-300 shadow-[0_0_25px_rgba(212,255,0,0.3)] hover:shadow-[0_0_35px_rgba(212,255,0,0.5)] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Complete Registration & Activate Pass</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation & Digital Membership Pass Card */
          <div className="p-6 sm:p-8 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-brand-volt/20 text-brand-volt border border-brand-volt/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white tracking-tight uppercase">
              Welcome to <span className="text-brand-volt">Sports Club!</span>
            </h3>
            <p className="text-sm text-slate-400 mt-1 mb-6">
              Your registration is confirmed. We have sent the confirmation packet and booking credentials to <strong className="text-white">{formData.email}</strong>.
            </p>

            {/* Digital Member Card */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-gradient-to-br from-[#182133] to-[#0d121c] border border-brand-volt/40 text-left relative overflow-hidden shadow-2xl mb-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-volt/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-volt">Official Athlete Pass</span>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">Sports Club</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-brand-volt">{membershipId}</span>
                  <span className="block text-[9px] text-slate-400">ACTIVE STATUS</span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Member Name</span>
                  <p className="text-base font-bold text-white">{formData.fullName}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block">Tier</span>
                    <span className="text-brand-volt font-bold">{selectedPlanDetails.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block">Primary Sport</span>
                    <span className="text-slate-200 font-medium">{formData.preferredSport}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-volt" /> Valid for Season 2026
                </span>
                <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded">QR-READY</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors"
              >
                Done & Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
