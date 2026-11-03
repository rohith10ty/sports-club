export default function WireframeCoachArt({ sport, name, id }) {
  // Return tailored high-tech wireframe schematic art based on sport
  const renderGraphic = () => {
    switch (sport?.toLowerCase()) {
      case 'cricket':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cricketVolt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4FF00" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            {/* Coordinate Grid */}
            <path d="M40 40 H360 M40 80 H360 M40 120 H360 M40 160 H360 M40 200 H360 M40 240 H360 M40 260 H360" stroke="#1f2a3c" strokeWidth="0.8" strokeDasharray="3 3" />
            <path d="M60 30 V270 M120 30 V270 M180 30 V270 M240 30 V270 M300 30 V270 M340 30 V270" stroke="#1f2a3c" strokeWidth="0.8" strokeDasharray="3 3" />
            
            {/* 3D Wireframe Cricket Pitch Perspective */}
            <polygon points="140,240 260,240 290,110 110,110" stroke="url(#cricketVolt)" strokeWidth="1.5" fill="none" opacity="0.4" />
            <line x1="200" y1="110" x2="200" y2="240" stroke="#D4FF00" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            
            {/* Crease markings */}
            <line x1="125" y1="210" x2="275" y2="210" stroke="#D4FF00" strokeWidth="1.5" />
            <line x1="135" y1="130" x2="265" y2="130" stroke="#D4FF00" strokeWidth="1.5" opacity="0.7" />

            {/* Wireframe Stumps & Bails */}
            <g stroke="#D4FF00" strokeWidth="2" opacity="0.9">
              <line x1="190" y1="180" x2="190" y2="210" />
              <line x1="200" y1="178" x2="200" y2="210" />
              <line x1="210" y1="180" x2="210" y2="210" />
              <line x1="187" y1="178" x2="213" y2="178" strokeWidth="2.5" />
            </g>

            {/* Wireframe Bat Arc & Trajectory vectors */}
            <path d="M80 220 Q 170 80 320 70" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="6 4" />
            <circle cx="320" cy="70" r="8" stroke="#D4FF00" strokeWidth="1.5" fill="#06080C" />
            <circle cx="320" cy="70" r="3" fill="#D4FF00" />

            {/* Technical HUD telemetry */}
            <text x="50" y="55" fill="#64748B" fontSize="9" fontFamily="monospace" letterSpacing="2">TACTICAL SCHEMATIC // CRICKET LAB</text>
            <text x="50" y="275" fill="#D4FF00" fontSize="10" fontFamily="monospace" fontWeight="bold">TRAJECTORY: 148 KM/H [TURF OVAL]</text>
            <text x="290" y="275" fill="#64748B" fontSize="9" fontFamily="monospace">ELEVATION: 28°</text>
          </svg>
        );

      case 'football':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="footVolt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#D4FF00" />
              </linearGradient>
            </defs>
            {/* Background grid */}
            <path d="M30 40 H370 M30 90 H370 M30 140 H370 M30 190 H370 M30 240 H370" stroke="#182335" strokeWidth="0.8" />
            <path d="M50 30 V270 M110 30 V270 M170 30 V270 M230 30 V270 M290 30 V270 M350 30 V270" stroke="#182335" strokeWidth="0.8" />

            {/* Perspective Pitch Wireframe */}
            <polygon points="60,250 340,250 380,80 20,80" stroke="url(#footVolt)" strokeWidth="1.5" fill="none" opacity="0.6" />
            {/* Center Circle & Halfway line */}
            <line x1="200" y1="80" x2="200" y2="250" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
            <ellipse cx="200" cy="165" rx="55" ry="30" stroke="#D4FF00" strokeWidth="1.2" fill="none" opacity="0.7" />

            {/* Tactical Passing Nodes & Movement Vectors */}
            <g stroke="#00F0FF" strokeWidth="1.5">
              <line x1="120" y1="210" x2="190" y2="150" strokeDasharray="4 3" />
              <line x1="190" y1="150" x2="280" y2="180" strokeDasharray="4 3" />
              <line x1="280" y1="180" x2="310" y2="105" strokeDasharray="4 3" />
            </g>

            {/* Tactical Player Nodes */}
            <circle cx="120" cy="210" r="5" stroke="#D4FF00" strokeWidth="1.5" fill="#090D14" />
            <circle cx="190" cy="150" r="5" stroke="#10B981" strokeWidth="1.5" fill="#090D14" />
            <circle cx="280" cy="180" r="5" stroke="#00F0FF" strokeWidth="1.5" fill="#090D14" />
            
            {/* Geodesic Wireframe Football */}
            <circle cx="310" cy="105" r="14" stroke="#D4FF00" strokeWidth="1.5" fill="#06080C" />
            <polygon points="310,95 318,101 315,110 305,110 302,101" stroke="#D4FF00" strokeWidth="1" fill="none" />

            {/* Technical HUD */}
            <text x="40" y="55" fill="#64748B" fontSize="9" fontFamily="monospace" letterSpacing="2">TACTICAL FORMATION // 4-3-3 HIGH PRESS</text>
            <text x="40" y="275" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold">POSSESSION DRILL // UEFA A SPEC</text>
            <text x="280" y="275" fill="#D4FF00" fontSize="9" fontFamily="monospace">SYNC: 100%</text>
          </svg>
        );

      case 'tennis':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tenVolt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4FF00" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
            <path d="M30 40 H370 M30 90 H370 M30 140 H370 M30 190 H370 M30 240 H370" stroke="#162030" strokeWidth="0.8" />
            <path d="M60 30 V270 M130 30 V270 M200 30 V270 M270 30 V270 M340 30 V270" stroke="#162030" strokeWidth="0.8" />

            {/* Wireframe Court Lines */}
            <polygon points="80,240 320,240 360,90 40,90" stroke="url(#tenVolt)" strokeWidth="1.5" fill="none" opacity="0.6" />
            <line x1="50" y1="160" x2="350" y2="160" stroke="#D4FF00" strokeWidth="2" />
            <line x1="200" y1="160" x2="200" y2="240" stroke="#38BDF8" strokeWidth="1.2" />

            {/* Wireframe Racquet Head with String Matrix */}
            <g transform="translate(190, 75) rotate(-25)">
              <ellipse cx="0" cy="0" rx="35" ry="46" stroke="#D4FF00" strokeWidth="1.8" fill="#070A0F" opacity="0.9" />
              {/* Vertical strings */}
              <line x1="-20" y1="-35" x2="-20" y2="35" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              <line x1="-10" y1="-42" x2="-10" y2="42" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              <line x1="0" y1="-45" x2="0" y2="45" stroke="#D4FF00" strokeWidth="1" />
              <line x1="10" y1="-42" x2="10" y2="42" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              <line x1="20" y1="-35" x2="20" y2="35" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              {/* Horizontal strings */}
              <line x1="-30" y1="-25" x2="30" y2="-25" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              <line x1="-34" y1="-12" x2="34" y2="-12" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              <line x1="-35" y1="0" x2="35" y2="0" stroke="#D4FF00" strokeWidth="1" />
              <line x1="-34" y1="12" x2="34" y2="12" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              <line x1="-30" y1="25" x2="30" y2="25" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              {/* Throat */}
              <line x1="-10" y1="46" x2="-6" y2="75" stroke="#D4FF00" strokeWidth="2" />
              <line x1="10" y1="46" x2="6" y2="75" stroke="#D4FF00" strokeWidth="2" />
            </g>

            {/* Smart Court Arc */}
            <path d="M100 230 C 180 180, 240 100, 310 130" stroke="#D4FF00" strokeWidth="1.5" strokeDasharray="5 3" />
            <circle cx="310" cy="130" r="7" stroke="#D4FF00" strokeWidth="1.5" fill="#06080C" />

            <text x="45" y="55" fill="#64748B" fontSize="9" fontFamily="monospace" letterSpacing="2">RADAR TELEMETRY // ITF SERVE ANALYSIS</text>
            <text x="45" y="275" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="bold">BALL VELOCITY: 205 KM/H [FLAT SERVE]</text>
            <text x="290" y="275" fill="#D4FF00" fontSize="9" fontFamily="monospace">SPIN: 3200 RPM</text>
          </svg>
        );

      case 'basketball':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bballVolt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#D4FF00" />
              </linearGradient>
            </defs>
            <path d="M30 40 H370 M30 90 H370 M30 140 H370 M30 190 H370 M30 240 H370" stroke="#1c2434" strokeWidth="0.8" />
            <path d="M50 30 V270 M110 30 V270 M170 30 V270 M230 30 V270 M290 30 V270 M350 30 V270" stroke="#1c2434" strokeWidth="0.8" />

            {/* Hardwood Perspective Key & Arc */}
            <polygon points="120,250 280,250 240,110 160,110" stroke="url(#bballVolt)" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M90 250 A 130 90 0 0 1 310 250" stroke="#D4FF00" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />

            {/* Wireframe Backboard & Rim */}
            <g transform="translate(200, 85)">
              {/* Backboard rectangle */}
              <rect x="-42" y="-30" width="84" height="50" rx="3" stroke="#38BDF8" strokeWidth="1.8" fill="#070A10" />
              <rect x="-18" y="-12" width="36" height="24" stroke="#D4FF00" strokeWidth="1.2" fill="none" />
              {/* Rim & Net */}
              <ellipse cx="0" cy="18" rx="16" ry="6" stroke="#F97316" strokeWidth="2" fill="none" />
              <line x1="-16" y1="18" x2="-8" y2="38" stroke="#D4FF00" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="-8" y1="18" x2="0" y2="40" stroke="#D4FF00" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="0" y1="18" x2="0" y2="40" stroke="#D4FF00" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="8" y1="18" x2="0" y2="40" stroke="#D4FF00" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="16" y1="18" x2="8" y2="38" stroke="#D4FF00" strokeWidth="1" strokeDasharray="2 2" />
            </g>

            {/* 3D Wireframe Basketball */}
            <g transform="translate(100, 160)">
              <circle cx="0" cy="0" r="16" stroke="#D4FF00" strokeWidth="1.8" fill="#070A0F" />
              <line x1="-16" y1="0" x2="16" y2="0" stroke="#F97316" strokeWidth="1.2" />
              <line x1="0" y1="-16" x2="0" y2="16" stroke="#F97316" strokeWidth="1.2" />
              <path d="M-12 -10 Q 0 0 -12 10" stroke="#D4FF00" strokeWidth="1" fill="none" />
              <path d="M12 -10 Q 0 0 12 10" stroke="#D4FF00" strokeWidth="1" fill="none" />
            </g>

            {/* Shot Parabola Arc */}
            <path d="M100 160 Q 150 40 195 95" stroke="#F97316" strokeWidth="1.8" strokeDasharray="6 4" fill="none" />

            <text x="45" y="55" fill="#64748B" fontSize="9" fontFamily="monospace" letterSpacing="2">FIBA BIOMETRICS // ARC TRAJECTORY</text>
            <text x="45" y="275" fill="#F97316" fontSize="10" fontFamily="monospace" fontWeight="bold">RELEASE ANGLE: 48.5° [OPTIMAL SWISH]</text>
            <text x="290" y="275" fill="#D4FF00" fontSize="9" fontFamily="monospace">SHOT: 3-PT</text>
          </svg>
        );

      case 'badminton':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="badmVolt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4FF00" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            <path d="M30 40 H370 M30 90 H370 M30 140 H370 M30 190 H370 M30 240 H370" stroke="#162232" strokeWidth="0.8" />
            <path d="M50 30 V270 M110 30 V270 M170 30 V270 M230 30 V270 M290 30 V270 M350 30 V270" stroke="#162232" strokeWidth="0.8" />

            {/* Court Wireframe */}
            <polygon points="70,240 330,240 370,100 30,100" stroke="url(#badmVolt)" strokeWidth="1.5" fill="none" opacity="0.5" />
            <line x1="45" y1="160" x2="355" y2="160" stroke="#10B981" strokeWidth="2" />
            
            {/* Wireframe Badminton Net Mesh */}
            <g stroke="#10B981" strokeWidth="0.7" opacity="0.6">
              <line x1="50" y1="150" x2="350" y2="150" />
              <line x1="50" y1="155" x2="350" y2="155" />
              <line x1="100" y1="145" x2="100" y2="160" />
              <line x1="160" y1="145" x2="160" y2="160" />
              <line x1="220" y1="145" x2="220" y2="160" />
              <line x1="280" y1="145" x2="280" y2="160" />
            </g>

            {/* 3D Wireframe Shuttlecock */}
            <g transform="translate(200, 100) rotate(135)">
              {/* Cork base */}
              <circle cx="0" cy="18" r="8" stroke="#D4FF00" strokeWidth="1.8" fill="#06080C" />
              {/* Feathers wireframe lattice cone */}
              <polygon points="-16,-20 16,-20 8,15 -8,15" stroke="#00F0FF" strokeWidth="1.4" fill="none" opacity="0.8" />
              <line x1="-16" y1="-20" x2="0" y2="18" stroke="#D4FF00" strokeWidth="0.8" />
              <line x1="-8" y1="-20" x2="0" y2="18" stroke="#D4FF00" strokeWidth="0.8" />
              <line x1="8" y1="-20" x2="0" y2="18" stroke="#D4FF00" strokeWidth="0.8" />
              <line x1="16" y1="-20" x2="0" y2="18" stroke="#D4FF00" strokeWidth="0.8" />
              <ellipse cx="0" cy="-6" rx="12" ry="3" stroke="#D4FF00" strokeWidth="1" fill="none" />
              <ellipse cx="0" cy="-18" rx="16" ry="4" stroke="#00F0FF" strokeWidth="1.2" fill="none" />
            </g>

            {/* High-speed smash vector */}
            <path d="M120 70 L 260 210" stroke="#D4FF00" strokeWidth="2" strokeDasharray="6 3" />
            <circle cx="260" cy="210" r="5" stroke="#10B981" strokeWidth="1.5" fill="#D4FF00" />

            <text x="45" y="55" fill="#64748B" fontSize="9" fontFamily="monospace" letterSpacing="2">BWF TELEMETRY // STROKE ANALYSIS</text>
            <text x="45" y="275" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold">SMASH TERMINAL VELOCITY: 395 KM/H</text>
            <text x="290" y="275" fill="#D4FF00" fontSize="9" fontFamily="monospace">GRADE 1</text>
          </svg>
        );

      default:
        // Strength & Conditioning / Athletic Science
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="scVolt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4FF00" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
            <path d="M30 40 H370 M30 90 H370 M30 140 H370 M30 190 H370 M30 240 H370" stroke="#141E2E" strokeWidth="0.8" />
            <path d="M50 30 V270 M110 30 V270 M170 30 V270 M230 30 V270 M290 30 V270 M350 30 V270" stroke="#141E2E" strokeWidth="0.8" />

            {/* Wireframe Barbell & Isometric Plates */}
            <g transform="translate(200, 130)">
              {/* Center shaft */}
              <line x1="-120" y1="0" x2="120" y2="0" stroke="#D4FF00" strokeWidth="3" />
              {/* Left Plates */}
              <ellipse cx="-85" cy="0" rx="8" ry="34" stroke="#38BDF8" strokeWidth="1.8" fill="#070A0F" />
              <ellipse cx="-95" cy="0" rx="8" ry="34" stroke="#D4FF00" strokeWidth="1.8" fill="#070A0F" />
              {/* Right Plates */}
              <ellipse cx="85" cy="0" rx="8" ry="34" stroke="#38BDF8" strokeWidth="1.8" fill="#070A0F" />
              <ellipse cx="95" cy="0" rx="8" ry="34" stroke="#D4FF00" strokeWidth="1.8" fill="#070A0F" />
            </g>

            {/* Kinetic Biomechanical Force Wave */}
            <path d="M40 220 Q 100 180 140 220 T 220 220 T 300 180 T 360 220" stroke="#D4FF00" strokeWidth="1.8" fill="none" opacity="0.8" />
            <path d="M40 220 Q 100 190 140 220 T 220 220 T 300 190 T 360 220" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />

            {/* Telemetry nodes */}
            <circle cx="200" cy="130" r="4" fill="#D4FF00" />
            <line x1="200" y1="80" x2="200" y2="180" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 2" />

            <text x="45" y="55" fill="#64748B" fontSize="9" fontFamily="monospace" letterSpacing="2">ATHLETIC LAB // CSCS BIOMECHANICS</text>
            <text x="45" y="275" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="bold">FORCE VELOCITY PROFILE: 2.85 M/S</text>
            <text x="290" y="275" fill="#D4FF00" fontSize="9" fontFamily="monospace">POWER: 1200W</text>
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full h-full bg-[#080C14] flex flex-col justify-between overflow-hidden border-b border-white/10 group">
      {/* Subtle background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#142033] via-[#080C14] to-[#04060A] opacity-70 pointer-events-none" />
      
      {/* Top Header HUD bar */}
      <div className="relative z-10 px-4 pt-3 flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400">
        <span className="flex items-center gap-1.5 text-brand-volt">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-volt animate-ping" />
          ATHLETE SCHEMATIC
        </span>
        <span className="bg-white/5 px-2 py-0.5 rounded text-[9px] text-slate-400 border border-white/5">
          WIRE-V2.6
        </span>
      </div>

      {/* Main Wireframe Canvas Graphic */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-2">
        {renderGraphic()}
      </div>

      {/* Bottom Technical HUD readout */}
      <div className="relative z-10 px-4 pb-2.5 flex items-center justify-between text-[9px] font-mono text-slate-500 border-t border-white/5 bg-black/40 backdrop-blur-sm">
        <span className="uppercase text-slate-400 font-semibold">{sport} SPECIALIZATION</span>
        <span className="text-brand-volt">STATUS: CERTIFIED PRO</span>
      </div>
    </div>
  );
}
