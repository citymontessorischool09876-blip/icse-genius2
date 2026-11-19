import React from 'react';
import { DiagramItem } from '../../../types/index.ts';

interface Props {
  figureType: NonNullable<DiagramItem['svgFigure']>;
  className?: string;
}

export const ChemistrySvg: React.FC<Props> = ({
  figureType,
  className = 'w-full h-auto max-h-[340px]',
}) => {
  if (figureType === 'chem_conservation_mass') {
    return (
      <svg viewBox="0 0 720 270" className={className} role="img" aria-label="Verification of Law of Conservation of Mass using Sealed Conical Flask">
        <rect width="720" height="270" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Experimental Verification of Law of Conservation of Mass
        </text>
        {/* Left Flask: Before Mixing */}
        <text x="175" y="48" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="700">
          Before Mixing (Sealed Flask)
        </text>
        <path d="M155,70 L195,70 L195,105 L245,195 L105,195 L155,105 Z" fill="#FFFFFF" stroke="#334155" strokeWidth="2.5" />
        {/* Cork */}
        <rect x="155" y="58" width="40" height="14" fill="#92400E" rx="2" />
        {/* Bottom solution NaCl */}
        <polygon points="118,170 232,170 243,193 107,193" fill="#BAE6FD" />
        <text x="175" y="186" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="700">NaCl (aq)</text>
        {/* Ignition tube suspended */}
        <line x1="175" y1="72" x2="175" y2="112" stroke="#475569" strokeWidth="1.2" />
        <rect x="166" y="112" width="18" height="45" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" transform="rotate(-12 175 135)" />
        <text x="235" y="132" textAnchor="start" fill="#B45309" fontSize="10" fontWeight="700">AgNO₃ (aq)</text>
        <text x="175" y="220" textAnchor="middle" fill="#0F172A" fontSize="11.5" fontWeight="700">Digital Balance = 150.00 g</text>
        <text x="175" y="238" textAnchor="middle" fill="#475569" fontSize="10">Separate reactants sealed inside</text>

        {/* Arrow */}
        <line x1="315" y1="138" x2="400" y2="138" stroke="#059669" strokeWidth="3" />
        <polygon points="406,138 394,132 394,144" fill="#059669" />
        <text x="360" y="128" textAnchor="middle" fill="#059669" fontSize="10.5" fontWeight="700">Tilt &amp; Mix</text>

        {/* Right Flask: After Reaction */}
        <text x="545" y="48" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="700">
          After Chemical Reaction
        </text>
        <path d="M525,70 L565,70 L565,105 L615,195 L475,195 L525,105 Z" fill="#FFFFFF" stroke="#334155" strokeWidth="2.5" />
        <rect x="525" y="58" width="40" height="14" fill="#92400E" rx="2" />
        <polygon points="488,170 602,170 613,193 477,193" fill="#E2E8F0" />
        {/* White precipitate */}
        <ellipse cx="545" cy="189" rx="48" ry="4" fill="#94A3B8" />
        <text x="545" y="182" textAnchor="middle" fill="#1E293B" fontSize="10" fontWeight="700">AgCl↓ (White ppt) + NaNO₃</text>
        <text x="545" y="220" textAnchor="middle" fill="#059669" fontSize="11.5" fontWeight="700">Digital Balance = 150.00 g</text>
        <text x="545" y="238" textAnchor="middle" fill="#475569" fontSize="10">Total Mass Before = Total Mass After</text>
      </svg>
    );
  }

  if (figureType === 'chem_changes_cycle') {
    return (
      <svg viewBox="0 0 720 270" className={className} role="img" aria-label="Exothermic vs Endothermic Reaction Energy Diagrams">
        <rect width="720" height="270" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Energy Profiles of Chemical Reactions: Exothermic vs Endothermic
        </text>
        {/* Left: Exothermic */}
        <text x="180" y="48" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="700">1. Exothermic (Heat Released)</text>
        <line x1="65" y1="220" x2="310" y2="220" stroke="#334155" strokeWidth="2" />
        <line x1="65" y1="220" x2="65" y2="62" stroke="#334155" strokeWidth="2" />
        <text x="48" y="140" textAnchor="middle" fill="#475569" fontSize="10.5" transform="rotate(-90 48 140)">Potential Energy</text>
        <path d="M 75,112 L 130,112 Q 175,60 220,182 L 295,182" fill="none" stroke="#DC2626" strokeWidth="3.5" />
        <text x="102" y="103" textAnchor="middle" fill="#1E293B" fontSize="10.5" fontWeight="700">Reactants</text>
        <text x="260" y="173" textAnchor="middle" fill="#1E293B" fontSize="10.5" fontWeight="700">Products</text>
        <line x1="150" y1="112" x2="245" y2="112" stroke="#94A3B8" strokeDasharray="3 3" />
        <line x1="238" y1="114" x2="238" y2="178" stroke="#DC2626" strokeWidth="2" />
        <polygon points="238,182 234,174 242,174" fill="#DC2626" />
        <text x="250" y="146" textAnchor="start" fill="#B91C1C" fontSize="10" fontWeight="700">Heat Given Out</text>
        <text x="180" y="248" textAnchor="middle" fill="#334155" fontSize="10">e.g. C + O₂ → CO₂ + Heat (Respiration, Combustion)</text>

        <line x1="355" y1="45" x2="355" y2="250" stroke="#CBD5E1" strokeDasharray="5 4" />

        {/* Right: Endothermic */}
        <text x="540" y="48" textAnchor="middle" fill="#0284C7" fontSize="12" fontWeight="700">2. Endothermic (Heat Absorbed)</text>
        <line x1="415" y1="220" x2="665" y2="220" stroke="#334155" strokeWidth="2" />
        <line x1="415" y1="220" x2="415" y2="62" stroke="#334155" strokeWidth="2" />
        <path d="M 425,182 L 485,182 Q 535,62 585,108 L 650,108" fill="none" stroke="#0284C7" strokeWidth="3.5" />
        <text x="455" y="172" textAnchor="middle" fill="#1E293B" fontSize="10.5" fontWeight="700">Reactants</text>
        <text x="620" y="99" textAnchor="middle" fill="#1E293B" fontSize="10.5" fontWeight="700">Products</text>
        <line x1="485" y1="182" x2="610" y2="182" stroke="#94A3B8" strokeDasharray="3 3" />
        <line x1="600" y1="180" x2="600" y2="112" stroke="#0284C7" strokeWidth="2" />
        <polygon points="600,108 596,116 604,116" fill="#0284C7" />
        <text x="530" y="152" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="700">Heat Absorbed</text>
        <text x="540" y="248" textAnchor="middle" fill="#334155" fontSize="10">e.g. CaCO₃ + Heat → CaO + CO₂ (Photosynthesis)</text>
      </svg>
    );
  }

  if (figureType === 'chem_separation_methods') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Separating Funnel and Simple Distillation Apparatus">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Separation of Mixtures: Separating Funnel &amp; Distillation
        </text>
        {/* Left: Separating Funnel */}
        <text x="155" y="48" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="700">1. Immiscible Liquids (Oil + Water)</text>
        <polygon points="105,72 205,72 162,155 148,155" fill="#FFFFFF" stroke="#334155" strokeWidth="2" />
        {/* Oil Top */}
        <polygon points="113,86 197,86 184,112 126,112" fill="#FCD34D" />
        {/* Water Bottom */}
        <polygon points="126,112 184,112 162,155 148,155" fill="#7DD3FC" />
        <rect x="151" y="155" width="8" height="36" fill="#FFFFFF" stroke="#334155" strokeWidth="1.8" />
        {/* Stopcock */}
        <rect x="144" y="166" width="22" height="6" rx="2" fill="#DC2626" />
        <text x="215" y="102" textAnchor="start" fill="#B45309" fontSize="10" fontWeight="700">Oil (Lower ρ)</text>
        <text x="215" y="135" textAnchor="start" fill="#0369A1" fontSize="10" fontWeight="700">Water (Higher ρ)</text>
        <text x="215" y="172" textAnchor="start" fill="#DC2626" fontSize="10" fontWeight="600">Stopcock</text>
        <rect x="128" y="202" width="54" height="34" fill="#E0F2FE" stroke="#334155" strokeWidth="1.8" />
        <text x="155" y="254" textAnchor="middle" fill="#334155" fontSize="10">Heavier liquid drains out first</text>

        <line x1="310" y1="45" x2="310" y2="255" stroke="#CBD5E1" strokeDasharray="5 4" />

        {/* Right: Simple Distillation */}
        <text x="515" y="48" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="700">2. Simple Distillation (Salt + Water)</text>
        {/* Flask */}
        <circle cx="385" cy="175" r="32" fill="#BAE6FD" stroke="#334155" strokeWidth="2" />
        <rect x="377" y="96" width="16" height="50" fill="#FFFFFF" stroke="#334155" strokeWidth="2" />
        <rect x="383" y="86" width="4" height="60" fill="#DC2626" />
        <text x="385" y="79" textAnchor="middle" fill="#DC2626" fontSize="9.5" fontWeight="700">Thermometer</text>
        {/* Burner flame */}
        <path d="M375,228 Q385,208 395,228 Z" fill="#F97316" />
        <text x="385" y="244" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Heating</text>
        {/* Liebig Condenser */}
        <line x1="393" y1="112" x2="575" y2="162" stroke="#334155" strokeWidth="3" />
        <rect x="435" y="114" width="108" height="28" rx="4" fill="#E0F2FE" fillOpacity="0.8" stroke="#0284C7" strokeWidth="1.8" transform="rotate(15 489 128)" />
        <text x="498" y="102" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="700">Liebig Water Condenser</text>
        <text x="480" y="164" textAnchor="middle" fill="#0284C7" fontSize="9.5">Cold Water In → Out</text>
        {/* Receiving Flask */}
        <path d="M590,158 L610,158 L632,216 L568,216 Z" fill="#E0F2FE" stroke="#334155" strokeWidth="2" />
        <text x="600" y="232" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="700">Pure Distillate</text>
        <text x="520" y="255" textAnchor="middle" fill="#334155" fontSize="10">Vaporises liquid at b.p., then condenses pure vapour</text>
      </svg>
    );
  }

  if (figureType === 'chem_atomic_bohr') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Bohr Atomic Structure Diagram of Magnesium Atom (2, 8, 2)">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Bohr Atomic Model: Magnesium Atom (Z = 12, A = 24 → Config: 2, 8, 2)
        </text>
        {/* Left: Concentric Shells around (185, 148) */}
        <circle cx="185" cy="148" r="95" fill="none" stroke="#6366F1" strokeWidth="1.8" strokeDasharray="4 2" />
        <circle cx="185" cy="148" r="65" fill="none" stroke="#10B981" strokeWidth="1.8" />
        <circle cx="185" cy="148" r="36" fill="none" stroke="#0284C7" strokeWidth="1.8" />
        {/* Nucleus */}
        <circle cx="185" cy="148" r="19" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
        <text x="185" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="700">12 p⁺</text>
        <text x="185" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="700">12 n⁰</text>

        {/* K Shell (2e) */}
        <circle cx="185" cy="112" r="5" fill="#0284C7" />
        <circle cx="185" cy="184" r="5" fill="#0284C7" />
        {/* L Shell (8e) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return <circle key={deg} cx={185 + 65 * Math.cos(rad)} cy={148 + 65 * Math.sin(rad)} r="5" fill="#10B981" />;
        })}
        {/* M Shell (2 valence e) */}
        <circle cx="90" cy="148" r="5.5" fill="#4F46E5" />
        <circle cx="280" cy="148" r="5.5" fill="#4F46E5" />

        <text x="185" y="262" textAnchor="middle" fill="#312E81" fontSize="11" fontWeight="700">
          K = 2, L = 8, M = 2 (Valence Electrons = 2 → Valency = +2)
        </text>

        {/* Right: Subatomic Particle Table */}
        <rect x="335" y="55" width="355" height="190" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.8" />
        <rect x="335" y="55" width="355" height="32" rx="10" fill="#065F46" />
        <text x="512" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Subatomic Particles &amp; Bohr-Bury Rule (Max = 2n²)</text>
        {[
          ['Particle', 'Symbol & Charge', 'Mass & Location'],
          ['Proton', 'p⁺  (+1 unit)', '1 a.m.u. · Inside Nucleus'],
          ['Neutron', 'n⁰  (0 neutral)', '1 a.m.u. · Inside Nucleus'],
          ['Electron', 'e⁻  (−1 unit)', '1/1840 a.m.u. · Energy Shells'],
          ['Atom Note', 'Z = Protons = e⁻', 'Mass Number A = p⁺ + n⁰'],
        ].map((row, rIdx) => {
          const y = 110 + rIdx * 28;
          return (
            <g key={row[0]}>
              <text x="350" y={y} fill={rIdx === 0 ? '#065F46' : '#0F172A'} fontSize="11" fontWeight={rIdx === 0 ? '700' : '600'}>{row[0]}</text>
              <text x="435" y={y} fill={rIdx === 0 ? '#065F46' : '#334155'} fontSize="11" fontWeight={rIdx === 0 ? '700' : '500'}>{row[1]}</text>
              <text x="545" y={y} fill={rIdx === 0 ? '#065F46' : '#475569'} fontSize="10.5" fontWeight={rIdx === 0 ? '700' : '500'}>{row[2]}</text>
              <line x1="345" y1={y + 8} x2="680" y2={y + 8} stroke="#E2E8F0" />
            </g>
          );
        })}
      </svg>
    );
  }

  if (figureType === 'chem_crisscross_valency') {
    return (
      <svg viewBox="0 0 720 265" className={className} role="img" aria-label="Criss-Cross Valency Method for Writing Chemical Formulae">
        <rect width="720" height="265" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Criss-Cross Valency Method for Writing Chemical Formulae
        </text>
        {/* Example 1: Aluminium Oxide */}
        <rect x="35" y="48" width="310" height="190" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.8" />
        <text x="190" y="72" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="700">Example 1: Aluminium Oxide</text>
        <text x="125" y="110" textAnchor="middle" fill="#1E3A8A" fontSize="22" fontWeight="800">Al</text>
        <text x="255" y="110" textAnchor="middle" fill="#DC2626" fontSize="22" fontWeight="800">O</text>
        <text x="125" y="172" textAnchor="middle" fill="#1E3A8A" fontSize="18" fontWeight="700">3+</text>
        <text x="255" y="172" textAnchor="middle" fill="#DC2626" fontSize="18" fontWeight="700">2−</text>
        {/* Crossing arrows */}
        <line x1="142" y1="158" x2="238" y2="114" stroke="#64748B" strokeWidth="2" />
        <line x1="238" y1="158" x2="142" y2="114" stroke="#64748B" strokeWidth="2" />
        <text x="190" y="212" textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="800">Formula: Al₂O₃</text>
        <text x="190" y="229" textAnchor="middle" fill="#475569" fontSize="10">Check net charge: 2(+3) + 3(−2) = 0</text>

        {/* Example 2: Calcium Hydroxide */}
        <rect x="375" y="48" width="310" height="190" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.8" />
        <text x="530" y="72" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="700">Example 2: Calcium Hydroxide (Polyatomic)</text>
        <text x="465" y="110" textAnchor="middle" fill="#1E3A8A" fontSize="22" fontWeight="800">Ca</text>
        <text x="595" y="110" textAnchor="middle" fill="#7C3AED" fontSize="20" fontWeight="800">(OH)</text>
        <text x="465" y="172" textAnchor="middle" fill="#1E3A8A" fontSize="18" fontWeight="700">2+</text>
        <text x="595" y="172" textAnchor="middle" fill="#7C3AED" fontSize="18" fontWeight="700">1−</text>
        <line x1="482" y1="158" x2="578" y2="114" stroke="#64748B" strokeWidth="2" />
        <line x1="578" y1="158" x2="482" y2="114" stroke="#64748B" strokeWidth="2" />
        <text x="530" y="212" textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="800">Formula: Ca(OH)₂</text>
        <text x="530" y="229" textAnchor="middle" fill="#475569" fontSize="10">Use brackets around compound radical when subscript &gt; 1</text>
      </svg>
    );
  }

  if (figureType === 'chem_reaction_types') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Four Core Types of Chemical Reactions and Reactivity Series">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Four Fundamental Types of Chemical Reactions
        </text>
        {[
          { y: 45, title: '1. Combination (Synthesis)', eq: 'A + B → AB', ex: '2Mg + O₂ → 2MgO', bg: '#ECFDF5', stroke: '#10B981', col: '#065F46' },
          { y: 100, title: '2. Decomposition', eq: 'AB → A + B', ex: 'CaCO₃ → CaO + CO₂↑ (Δ)', bg: '#EFF6FF', stroke: '#3B82F6', col: '#1E3A8A' },
          { y: 155, title: '3. Single Displacement', eq: 'A + BC → AC + B', ex: 'Fe + CuSO₄ → FeSO₄ + Cu↓', bg: '#FEF3C7', stroke: '#F59E0B', col: '#92400E' },
          { y: 210, title: '4. Double Displacement', eq: 'AB + CD → AD + CB', ex: 'NaOH + HCl → NaCl + H₂O', bg: '#F5F3FF', stroke: '#8B5CF6', col: '#5B21B6' },
        ].map((item) => (
          <g key={item.title}>
            <rect x="35" y={item.y} width="450" height="44" rx="8" fill={item.bg} stroke={item.stroke} strokeWidth="1.8" />
            <text x="50" y={item.y + 19} fill={item.col} fontSize="12" fontWeight="700">{item.title}</text>
            <text x="50" y={item.y + 35} fill="#334155" fontSize="10.5">{item.ex}</text>
            <text x="470" y={item.y + 27} textAnchor="end" fill={item.col} fontSize="13" fontWeight="800" fontFamily="monospace">{item.eq}</text>
          </g>
        ))}

        {/* Right: Metal Reactivity Ladder */}
        <rect x="505" y="45" width="185" height="209" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.8" />
        <rect x="505" y="45" width="185" height="28" rx="10" fill="#1E293B" />
        <text x="597" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700">Metal Reactivity Series</text>
        <text x="597" y="92" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="700">K &gt; Na &gt; Ca &gt; Mg</text>
        <text x="597" y="114" textAnchor="middle" fill="#D97706" fontSize="11" fontWeight="700">&gt; Al &gt; Zn &gt; Fe &gt; Pb</text>
        <line x1="525" y1="126" x2="670" y2="126" stroke="#94A3B8" strokeDasharray="3 2" />
        <text x="597" y="143" textAnchor="middle" fill="#4F46E5" fontSize="11" fontWeight="800">[ Hydrogen (H) ]</text>
        <line x1="525" y1="154" x2="670" y2="154" stroke="#94A3B8" strokeDasharray="3 2" />
        <text x="597" y="174" textAnchor="middle" fill="#0369A1" fontSize="11" fontWeight="700">&gt; Cu &gt; Hg &gt; Ag &gt; Au</text>
        <text x="597" y="206" textAnchor="middle" fill="#334155" fontSize="10">Higher metal displaces</text>
        <text x="597" y="220" textAnchor="middle" fill="#334155" fontSize="10">lower metal from salt</text>
        <text x="597" y="236" textAnchor="middle" fill="#059669" fontSize="9.5" fontWeight="700">(Metals above H displace H₂ from acids)</text>
      </svg>
    );
  }

  if (figureType === 'chem_hydrogen_prep') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Laboratory Preparation of Hydrogen Gas">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Laboratory Preparation of Hydrogen: Zn + dil. H₂SO₄ → ZnSO₄ + H₂↑
        </text>
        {/* Flat bottom flask */}
        <circle cx="155" cy="185" r="42" fill="#E0F2FE" stroke="#334155" strokeWidth="2.5" />
        <rect x="140" y="112" width="30" height="38" fill="#FFFFFF" stroke="#334155" strokeWidth="2.5" />
        {/* Zinc granules */}
        <circle cx="140" cy="212" r="5" fill="#64748B" />
        <circle cx="154" cy="215" r="5" fill="#64748B" />
        <circle cx="168" cy="211" r="5" fill="#64748B" />
        {/* Thistle Funnel */}
        <line x1="149" y1="68" x2="149" y2="205" stroke="#475569" strokeWidth="3" />
        <polygon points="135,52 163,52 153,68 145,68" fill="#FEF3C7" stroke="#475569" strokeWidth="2" />
        <text x="115" y="54" textAnchor="end" fill="#B45309" fontSize="10" fontWeight="700">Thistle Funnel</text>
        <text x="115" y="67" textAnchor="end" fill="#475569" fontSize="9.5">(dil. H₂SO₄)</text>
        <text x="105" y="205" textAnchor="end" fill="#334155" fontSize="10" fontWeight="700">Granulated Zn</text>

        {/* Delivery tube */}
        <polyline points="161,112 161,85 450,85 450,200 495,200" fill="none" stroke="#334155" strokeWidth="3" />
        <text x="305" y="76" textAnchor="middle" fill="#047857" fontSize="10.5" fontWeight="700">H₂ Gas Delivery Tube</text>

        {/* Water trough */}
        <rect x="420" y="165" width="210" height="70" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2" />
        {/* Beehive shelf */}
        <rect x="475" y="210" width="60" height="24" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
        {/* Inverted Gas Jar */}
        <rect x="480" y="96" width="50" height="114" rx="6" fill="#FFFFFF" fillOpacity="0.85" stroke="#334155" strokeWidth="2" />
        <rect x="482" y="160" width="46" height="48" fill="#7DD3FC" fillOpacity="0.6" />
        <circle cx="505" cy="186" r="3" fill="#FFFFFF" />
        <circle cx="500" cy="168" r="3" fill="#FFFFFF" />
        <text x="505" y="128" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="800">H₂ Gas</text>
        <text x="525" y="254" textAnchor="middle" fill="#0369A1" fontSize="10.5" fontWeight="700">Collected by Downward Displacement of Water (H₂ is nearly insoluble)</text>
      </svg>
    );
  }

  if (figureType === 'chem_water_crystal') {
    return (
      <svg viewBox="0 0 720 265" className={className} role="img" aria-label="True Solution vs Colloid vs Suspension and Water of Crystallization">
        <rect width="720" height="265" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Solution vs Colloid vs Suspension &amp; Reversible Hydration
        </text>
        {[
          { x: 30, title: 'True Solution', sub: '< 1 nm · Clear · No Tyndall', col: '#0284C7', bg: '#E0F2FE', dots: [] as number[][] },
          { x: 185, title: 'Colloid (Milk)', sub: '1–1000 nm · Tyndall Effect', col: '#7C3AED', bg: '#EDE9FE', dots: [[215, 115], [250, 145], [225, 175], [275, 125], [265, 165]] },
          { x: 340, title: 'Suspension (Mud)', sub: '> 1000 nm · Settles on rest', col: '#B45309', bg: '#FEF3C7', dots: [[375, 182], [395, 185], [415, 180], [435, 186], [405, 165]] },
        ].map((b) => (
          <g key={b.title}>
            <rect x={b.x} y="70" width="135" height="125" rx="6" fill={b.bg} stroke={b.col} strokeWidth="2" />
            <text x={b.x + 67} y="58" textAnchor="middle" fill={b.col} fontSize="11.5" fontWeight="700">{b.title}</text>
            {b.dots.map(([dx, dy], i) => (
              <circle key={i} cx={dx} cy={dy} r="4.5" fill={b.col} />
            ))}
            <text x={b.x + 67} y="212" textAnchor="middle" fill="#334155" fontSize="9.5" fontWeight="600">{b.sub}</text>
          </g>
        ))}

        <line x1="495" y1="45" x2="495" y2="245" stroke="#CBD5E1" strokeDasharray="5 4" />

        {/* Right: Hydrated vs Anhydrous Copper Sulphate */}
        <text x="605" y="58" textAnchor="middle" fill="#0F172A" fontSize="11.5" fontWeight="700">Water of Crystallization</text>
        <rect x="520" y="75" width="170" height="52" rx="8" fill="#2563EB" />
        <text x="605" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">CuSO₄·5H₂O (Blue)</text>
        <text x="605" y="116" textAnchor="middle" fill="#DBEAFE" fontSize="10">Hydrated Blue Vitriol</text>

        <text x="556" y="152" textAnchor="middle" fill="#DC2626" fontSize="10.5" fontWeight="700">↓ Heat (-5H₂O)</text>
        <text x="654" y="152" textAnchor="middle" fill="#0284C7" fontSize="10.5" fontWeight="700">↑ + H₂O</text>

        <rect x="520" y="168" width="170" height="52" rx="8" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
        <text x="605" y="191" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">CuSO₄ (White Powder)</text>
        <text x="605" y="209" textAnchor="middle" fill="#475569" fontSize="10">Anhydrous Salt</text>
      </svg>
    );
  }

  // chem_carbon_allotropes
  return (
    <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Crystalline Allotropes of Carbon: Diamond vs Graphite Structure">
      <rect width="720" height="275" rx="14" fill="#F8FAFC" />
      <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
        Crystalline Allotropes of Carbon: Tetrahedral Diamond vs Layered Graphite
      </text>
      {/* Left: Diamond Tetrahedral */}
      <text x="175" y="48" textAnchor="middle" fill="#0284C7" fontSize="12" fontWeight="700">1. Diamond (3D Rigid Tetrahedron)</text>
      {/* Central C bonded to 4 */}
      <line x1="175" y1="125" x2="175" y2="75" stroke="#0F172A" strokeWidth="3" />
      <line x1="175" y1="125" x2="115" y2="165" stroke="#0F172A" strokeWidth="3" />
      <line x1="175" y1="125" x2="235" y2="165" stroke="#0F172A" strokeWidth="3" />
      <line x1="175" y1="125" x2="175" y2="185" stroke="#64748B" strokeWidth="2.5" />
      <line x1="115" y1="165" x2="80" y2="200" stroke="#94A3B8" strokeWidth="2" />
      <line x1="235" y1="165" x2="270" y2="200" stroke="#94A3B8" strokeWidth="2" />
      {[
        [175, 125],
        [175, 75],
        [115, 165],
        [235, 165],
        [175, 185],
        [80, 200],
        [270, 200],
      ].map(([cx, cy], idx) => (
        <circle key={idx} cx={cx} cy={cy} r="8" fill={idx === 0 ? '#0284C7' : '#38BDF8'} stroke="#0F172A" strokeWidth="1.8" />
      ))}
      <text x="175" y="226" textAnchor="middle" fill="#0F172A" fontSize="10.5" fontWeight="700">Each C bonded to 4 C atoms (No free e⁻)</text>
      <text x="175" y="244" textAnchor="middle" fill="#0369A1" fontSize="10">Hardest natural substance · Electrical Insulator</text>

      <line x1="360" y1="45" x2="360" y2="255" stroke="#CBD5E1" strokeDasharray="5 4" />

      {/* Right: Graphite Hexagonal Layers */}
      <text x="540" y="48" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="700">2. Graphite (Hexagonal Planar Sheets)</text>
      {/* Top hexagon sheet */}
      <polygon points="455,95 495,75 535,95 535,125 495,142 455,125" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      <polygon points="535,95 575,75 615,95 615,125 575,142 535,125" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      {/* Weak interlayer bonds */}
      <line x1="495" y1="142" x2="495" y2="174" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="575" y1="142" x2="575" y2="174" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
      {/* Bottom hexagon sheet */}
      <polygon points="455,174 495,158 535,174 535,198 495,212 455,198" fill="none" stroke="#475569" strokeWidth="2.5" />
      <polygon points="535,174 575,158 615,174 615,198 575,212 535,198" fill="none" stroke="#475569" strokeWidth="2.5" />
      <text x="625" y="160" textAnchor="start" fill="#DC2626" fontSize="9.5" fontWeight="700">Weak Forces</text>
      <text x="540" y="232" textAnchor="middle" fill="#0F172A" fontSize="10.5" fontWeight="700">Each C bonded to 3 C atoms (1 free e⁻ per C)</text>
      <text x="540" y="248" textAnchor="middle" fill="#059669" fontSize="10">Soft &amp; Slippery Lubricant · Conducts Electricity</text>
    </svg>
  );
};
