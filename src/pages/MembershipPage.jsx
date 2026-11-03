import { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  User, 
  Mail, 
  Phone, 
  ArrowRight,
  CheckCircle2,
  Zap,
  CreditCard
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { membershipPlans, faqList, sportsList } from '../data/sportsData';

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  
  // Registration Form State
  const [regPlan, setRegPlan] = useState('athlete');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [preferredSport, setPreferredSport] = useState('Cricket');
  const [skillLevel, setSkillLevel] = useState('Intermediate');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [assignedId, setAssignedId] = useState('');

  const validateForm = () => {
    const errs = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (phone.length < 8) {
      errs.phone = 'Enter a valid phone number';
    }
    if (!age || Number(age) < 5 || Number(age) > 99) {
      errs.age = 'Enter a valid age (5 - 99)';
    }
    if (!agreeTerms) {
      errs.agreeTerms = 'Please accept the club safety and membership terms';
    }
    return errs;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const errs = validateForm();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setRegistrationSuccess(true);
      const generatedCode = `SC-MEM-${Math.floor(100000 + Math.random() * 900000)}`;
      setAssignedId(generatedCode);

      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4FF00', '#10B981', '#00F0FF', '#FFFFFF']
      });

      // Scroll to confirmation box
      const el = document.getElementById('registration-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  const handleResetRegistration = () => {
    setRegistrationSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setAge('');
    setAgreeTerms(false);
  };

  // Feature comparison list for table
  const comparisonFeatures = [
    { name: 'Access to Courts (Cricket, Football, Basketball, Badminton, Tennis)', starter: '2 Sports Only', athlete: 'All 5 Sports', pro: 'All 5 Sports (VIP 24/7)', family: 'All 5 Sports (Family 4x)' },
    { name: 'Weekly Free Booking Hours', starter: '3 hrs / week', athlete: '8 hrs / week', pro: 'Unlimited Priority', family: '12 hrs / week' },
    { name: 'High-Performance Gym Access', starter: false, athlete: true, pro: true, family: true },
    { name: 'Locker Rooms & Shower Suites', starter: true, athlete: true, pro: 'Private VIP Locker', family: 'Family Suite' },
    { name: 'Complimentary Coach 1-on-1 Sessions', starter: false, athlete: '2 sessions / mo', pro: 'Weekly (4 / mo)', family: '4 sessions / mo' },
    { name: 'Recovery Lounge, Ice Plunge & Sauna', starter: false, athlete: '2x / week', pro: 'Unlimited', family: 'Unlimited' },
    { name: 'Tournament & League Entry Discounts', starter: '5% off', athlete: '15% off', pro: '100% Free Entry', family: '25% off' },
    { name: 'Guest Passes per Month', starter: 'None', athlete: '1 Guest / mo', pro: '2 Guests / mo', family: 'Unlimited Family' },
  ];

  return (
    <div className="min-h-screen bg-[#06080C] text-slate-100">
      {/* 1. Header Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.25]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/80 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-volt/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-volt border border-white/15 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Flexible Athletic Plans
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-6">
            MEMBERSHIP & <span className="text-brand-volt">PRICING</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with no hidden registration fees. Enjoy access to our premier facilities, leagues, and master training sessions.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#0c1018] p-1.5 rounded-full border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-brand-volt text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-brand-volt text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-emerald-500 text-black px-1.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Membership Plans Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {membershipPlans.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className={`glass-card rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative ${
                  plan.popular
                    ? 'border-brand-volt shadow-[0_0_35px_rgba(212,255,0,0.18)] bg-[#101724]'
                    : 'border-white/10'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-volt text-black px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-volt">
                      {plan.name}
                    </span>
                    {!plan.popular && (
                      <span className="text-[10px] font-semibold text-slate-400 uppercase bg-white/5 px-2 py-0.5 rounded">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{plan.period}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <span className="text-[11px] text-emerald-400 font-semibold">
                        Billed annually (Save ${(plan.priceMonthly - plan.priceYearly) * 12}/yr)
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                      What's Included:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-brand-volt shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setRegPlan(plan.id);
                      const el = document.getElementById('registration-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      plan.popular
                        ? 'bg-brand-volt text-black hover:bg-[#bdec00] shadow-[0_0_20px_rgba(212,255,0,0.3)]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <span>Select {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Detailed Feature Comparison Table */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
              Deep Dive
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Compare Membership Features
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-4 font-bold text-white">Membership Benefits</th>
                  <th className="py-4 px-4 font-bold">Rookie Starter</th>
                  <th className="py-4 px-4 font-bold text-brand-volt">Club Athlete</th>
                  <th className="py-4 px-4 font-bold">Pro Champion</th>
                  <th className="py-4 px-4 font-bold">Family All-Star</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-200">{row.name}</td>
                    
                    {/* Starter */}
                    <td className="py-4 px-4 text-slate-400">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />
                      ) : row.starter}
                    </td>

                    {/* Athlete */}
                    <td className="py-4 px-4 font-medium text-slate-100 bg-brand-volt/[0.03]">
                      {typeof row.athlete === 'boolean' ? (
                        row.athlete ? <Check className="w-4 h-4 text-brand-volt" /> : <X className="w-4 h-4 text-slate-600" />
                      ) : row.athlete}
                    </td>

                    {/* Pro */}
                    <td className="py-4 px-4 text-slate-300">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />
                      ) : row.pro}
                    </td>

                    {/* Family */}
                    <td className="py-4 px-4 text-slate-300">
                      {typeof row.family === 'boolean' ? (
                        row.family ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />
                      ) : row.family}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Complete Registration Form Section */}
      <section id="registration-section" className="py-20 border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-volt via-emerald-400 to-brand-cyan absolute top-0 left-0" />

            {!registrationSuccess ? (
              <div>
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-1">
                    Instant Member Onboarding
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    Official Registration Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill out your athlete credentials below to secure your membership and generate your official digital pass.
                  </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-5">
                  {/* Tier Selector Radio Badges */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Selected Membership Tier
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {membershipPlans.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setRegPlan(p.id)}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            regPlan === p.id
                              ? 'border-brand-volt bg-brand-volt/10 text-white font-bold'
                              : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20'
                          }`}
                        >
                          <span className="block text-xs uppercase">{p.name}</span>
                          <span className="block text-sm font-extrabold text-brand-volt mt-0.5">
                            ${billingCycle === 'yearly' ? p.priceYearly : p.priceMonthly}/mo
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Alex Morgan"
                        className={`w-full bg-[#131a26] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none ${
                          errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className={`w-full bg-[#131a26] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none ${
                          errors.email ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 234-5678"
                        className={`w-full bg-[#131a26] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none ${
                          errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Athlete Age *
                      </label>
                      <input
                        type="number"
                        value={age}
                        min="5"
                        max="99"
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="25"
                        className={`w-full bg-[#131a26] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none ${
                          errors.age ? 'border-rose-500' : 'border-white/10 focus:border-brand-volt'
                        }`}
                      />
                      {errors.age && <p className="text-[11px] text-rose-400 mt-1">{errors.age}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Primary Sport
                      </label>
                      <select
                        value={preferredSport}
                        onChange={(e) => setPreferredSport(e.target.value)}
                        className="w-full bg-[#131a26] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:border-brand-volt outline-none"
                      >
                        {sportsList.map(s => (
                          <option key={s.id} value={s.name} className="bg-[#131a26]">{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Current Athletic Level
                      </label>
                      <select
                        value={skillLevel}
                        onChange={(e) => setSkillLevel(e.target.value)}
                        className="w-full bg-[#131a26] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:border-brand-volt outline-none"
                      >
                        <option value="Beginner" className="bg-[#131a26]">Beginner / Casual Recreation</option>
                        <option value="Intermediate" className="bg-[#131a26]">Intermediate / Club Player</option>
                        <option value="Advanced" className="bg-[#131a26]">Advanced / Tournament Level</option>
                      </select>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded text-brand-volt accent-[#D4FF00]"
                      />
                      <span className="text-xs text-slate-400 leading-snug">
                        I agree to Sports Club safety policies, fair court play guidelines, and consent to membership activation.
                      </span>
                    </label>
                    {errors.agreeTerms && <p className="text-[11px] text-rose-400 mt-1">{errors.agreeTerms}</p>}
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black bg-brand-volt hover:bg-[#bdec00] transition-colors shadow-lg shadow-brand-volt/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 fill-black" />
                          <span>Submit Registration & Get Digital Pass</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                  Congratulations, You’re In!
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
                  Your registration is verified. Welcome to the Sports Club athletic family.
                </p>

                {/* Digital Card */}
                <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-[#162030] to-[#0c111a] border border-brand-volt/40 text-left mb-6 relative">
                  <div className="flex justify-between items-start border-b border-white/10 pb-3 mb-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-volt block">Official Member Pass</span>
                      <h4 className="text-lg font-black uppercase text-white">Sports Club</h4>
                    </div>
                    <span className="font-mono text-xs font-bold text-brand-volt">{assignedId}</span>
                  </div>

                  <div className="space-y-1.5 text-xs mb-3">
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase block">Athlete:</span>
                      <span className="text-white font-bold text-sm">{fullName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase block">Tier:</span>
                      <span className="text-brand-volt font-bold uppercase">{regPlan}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase block">Primary Sport:</span>
                      <span className="text-slate-300 font-medium">{preferredSport}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] text-slate-400">
                    <span>Valid: 2026 Season</span>
                    <span>Status: Verified Active</span>
                  </div>
                </div>

                <button
                  onClick={handleResetRegistration}
                  className="px-6 py-2.5 rounded-xl font-bold uppercase text-xs text-black bg-brand-volt hover:bg-[#bdec00]"
                >
                  Register Another Member
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="py-20 bg-[#090D14] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-volt block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black uppercase text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-white/10">
                <h4 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-volt shrink-0" />
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
