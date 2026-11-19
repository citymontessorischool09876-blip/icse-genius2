import React from 'react';
import { DiagramItem } from '../../../types/index.ts';

interface Props {
  figureType: NonNullable<DiagramItem['svgFigure']>;
  className?: string;
}

export const PhysicsSvg: React.FC<Props> = ({
  figureType,
  className = 'w-full h-auto max-h-[340px]',
}) => {
  if (figureType === 'phy_phase_curve') {
    return (
      <svg viewBox="0 0 720 280" className={className} role="img" aria-label="Heating Curve of Water showing Melting and Boiling Plateaus">
        <rect width="720" height="280" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Heating Curve of Water: Phase Changes &amp; Latent Heat Plateaus
        </text>
        {/* Axes */}
        <line x1="75" y1="235" x2="670" y2="235" stroke="#334155" strokeWidth="2" />
        <line x1="75" y1="235" x2="75" y2="45" stroke="#334155" strokeWidth="2" />
        <text x="372" y="264" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="600">
          Time / Heat Energy Supplied →
        </text>
        <text x="26" y="140" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="600" transform="rotate(-90 26 140)">
          Temperature (°C)
        </text>
        {/* Temp ticks */}
        <line x1="70" y1="215" x2="660" y2="215" stroke="#E2E8F0" strokeDasharray="4 4" />
        <text x="64" y="219" textAnchor="end" fill="#475569" fontSize="11">-20°</text>
        <line x1="70" y1="175" x2="660" y2="175" stroke="#CBD5E1" strokeDasharray="4 4" />
        <text x="64" y="179" textAnchor="end" fill="#0284C7" fontSize="11" fontWeight="700">0°C</text>
        <line x1="70" y1="90" x2="660" y2="90" stroke="#CBD5E1" strokeDasharray="4 4" />
        <text x="64" y="94" textAnchor="end" fill="#DC2626" fontSize="11" fontWeight="700">100°C</text>

        {/* Curve segments: A(-20,215)->B(160,175)->C(280,175)->D(430,90)->E(570,90)->F(650,52) */}
        <polyline
          points="85,215 155,175 280,175 430,90 570,90 650,55"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Highlight plateaus */}
        <line x1="155" y1="175" x2="280" y2="175" stroke="#0EA5E9" strokeWidth="5" />
        <line x1="430" y1="90" x2="570" y2="90" stroke="#EF4444" strokeWidth="5" />

        {/* Points */}
        {[
          [85, 215, 'A'],
          [155, 175, 'B'],
          [280, 175, 'C'],
          [430, 90, 'D'],
          [570, 90, 'E'],
          [650, 55, 'F'],
        ].map(([cx, cy, lbl]) => (
          <g key={String(lbl)}>
            <circle cx={Number(cx)} cy={Number(cy)} r="4.5" fill="#1E1B4B" />
            <text x={Number(cx)} y={Number(cy) - 9} textAnchor="middle" fill="#1E1B4B" fontSize="11" fontWeight="700">
              {lbl}
            </text>
          </g>
        ))}

        {/* Labels */}
        <text x="120" y="206" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Ice warms</text>
        <text x="218" y="160" textAnchor="middle" fill="#0369A1" fontSize="10.5" fontWeight="700">Melting (Ice + Water)</text>
        <text x="218" y="191" textAnchor="middle" fill="#0369A1" fontSize="10">Latent Heat of Fusion</text>
        <text x="355" y="146" textAnchor="middle" fill="#4338CA" fontSize="10.5" fontWeight="600" transform="rotate(-29 355 146)">Liquid Water warms</text>
        <text x="500" y="75" textAnchor="middle" fill="#B91C1C" fontSize="10.5" fontWeight="700">Boiling (Water + Steam)</text>
        <text x="500" y="106" textAnchor="middle" fill="#B91C1C" fontSize="10">Latent Heat of Vaporisation</text>
        <text x="615" y="83" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Steam</text>
      </svg>
    );
  }

  if (figureType === 'phy_density_eureka') {
    return (
      <svg viewBox="0 0 720 270" className={className} role="img" aria-label="Eureka Can Displacement Method and Principle of Floatation">
        <rect width="720" height="270" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Density Measurement (Eureka Can) &amp; Law of Floatation
        </text>
        {/* Left: Eureka Can */}
        <text x="180" y="48" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="700">
          1. Volume of Irregular Solid via Eureka Can
        </text>
        {/* Can body */}
        <rect x="65" y="75" width="110" height="145" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" />
        {/* Water fill */}
        <rect x="67" y="115" width="106" height="103" fill="#7DD3FC" fillOpacity="0.65" />
        {/* Spout */}
        <path d="M175,112 L225,134 L220,143 L175,122 Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
        {/* Irregular Stone suspended by thread */}
        <line x1="120" y1="60" x2="120" y2="155" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 2" />
        <polygon points="103,165 114,150 132,155 139,174 126,188 106,182" fill="#64748B" stroke="#334155" strokeWidth="2" />
        <text x="120" y="174" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">Solid</text>
        {/* Droplets into Measuring Cylinder */}
        <circle cx="235" cy="147" r="3" fill="#0284C7" />
        <circle cx="242" cy="161" r="3" fill="#0284C7" />
        <rect x="225" y="140" width="52" height="80" fill="#FFFFFF" stroke="#334155" strokeWidth="2" rx="3" />
        <rect x="227" y="176" width="48" height="42" fill="#38BDF8" fillOpacity="0.7" />
        {[155, 165, 175, 185, 195, 205].map((y) => (
          <line key={y} x1="225" y1={y} x2="236" y2={y} stroke="#475569" strokeWidth="1" />
        ))}
        <text x="251" y="236" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="600">Displaced</text>
        <text x="251" y="248" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="600">Water = V</text>
        <text x="120" y="242" textAnchor="middle" fill="#1E3A8A" fontSize="10.5" fontWeight="700">ρ = Mass / V</text>

        <line x1="340" y1="42" x2="340" y2="250" stroke="#CBD5E1" strokeDasharray="5 4" />

        {/* Right: Floating vs Sinking */}
        <text x="530" y="48" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="700">
          2. Floating vs Sinking Conditions
        </text>
        {/* Beaker 1: Floating */}
        <rect x="375" y="85" width="130" height="125" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
        <rect x="377" y="120" width="126" height="88" fill="#7DD3FC" fillOpacity="0.6" />
        <rect x="415" y="102" width="50" height="32" rx="4" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
        <text x="440" y="122" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">Cork</text>
        <line x1="440" y1="102" x2="440" y2="75" stroke="#16A34A" strokeWidth="2" />
        <polygon points="440,70 436,78 444,78" fill="#16A34A" />
        <text x="440" y="66" textAnchor="middle" fill="#15803D" fontSize="9.5" fontWeight="700">Upthrust ≥ W</text>
        <text x="440" y="226" textAnchor="middle" fill="#0369A1" fontSize="10.5" fontWeight="700">ρ_body &lt; ρ_liquid</text>
        <text x="440" y="241" textAnchor="middle" fill="#475569" fontSize="10">(Floats partially)</text>

        {/* Beaker 2: Sinking */}
        <rect x="545" y="85" width="130" height="125" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
        <rect x="547" y="120" width="126" height="88" fill="#7DD3FC" fillOpacity="0.6" />
        <rect x="585" y="174" width="50" height="32" rx="4" fill="#475569" stroke="#1E293B" strokeWidth="2" />
        <text x="610" y="194" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">Iron</text>
        <line x1="610" y1="174" x2="610" y2="148" stroke="#DC2626" strokeWidth="2" />
        <polygon points="610,174 606,166 614,166" fill="#DC2626" />
        <text x="610" y="142" textAnchor="middle" fill="#DC2626" fontSize="9.5" fontWeight="700">Weight &gt; Upthrust</text>
        <text x="610" y="226" textAnchor="middle" fill="#B91C1C" fontSize="10.5" fontWeight="700">ρ_body &gt; ρ_liquid</text>
        <text x="610" y="241" textAnchor="middle" fill="#475569" fontSize="10">(Sinks to bottom)</text>
      </svg>
    );
  }

  if (figureType === 'phy_pascal_barometer') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Pascal Hydraulic Lift and Torricelli Mercury Barometer">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Pascal&apos;s Hydraulic Press (F₁/A₁ = F₂/A₂) &amp; Torricelli Mercury Barometer
        </text>
        {/* Left: Hydraulic Press */}
        <text x="190" y="48" textAnchor="middle" fill="#312E81" fontSize="12" fontWeight="700">
          1. Hydraulic Machine (Pascal&apos;s Law)
        </text>
        {/* U-tube */}
        <path d="M70,105 L70,215 L310,215 L310,105 L220,105 L220,180 L110,180 L110,105 Z" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2.5" />
        {/* Pistons */}
        <rect x="70" y="96" width="40" height="14" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
        <rect x="220" y="96" width="90" height="16" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
        {/* Arrows */}
        <line x1="90" y1="62" x2="90" y2="93" stroke="#DC2626" strokeWidth="3" />
        <polygon points="90,96 85,86 95,86" fill="#DC2626" />
        <text x="90" y="58" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="700">Effort F₁</text>
        <text x="90" y="130" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="600">Area A₁</text>

        <line x1="265" y1="92" x2="265" y2="62" stroke="#16A34A" strokeWidth="3" />
        <polygon points="265,58 260,68 270,68" fill="#16A34A" />
        <rect x="237" y="70" width="56" height="24" rx="4" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
        <text x="265" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">Load F₂</text>
        <text x="265" y="130" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="600">Area A₂ &gt; A₁</text>
        <text x="190" y="203" textAnchor="middle" fill="#0369A1" fontSize="10.5" fontWeight="700">Equal Pressure Transmitted: P = F₁/A₁ = F₂/A₂</text>
        <text x="190" y="242" textAnchor="middle" fill="#334155" fontSize="10.5">F₂ = F₁ × (A₂ / A₁)</text>

        <line x1="360" y1="42" x2="360" y2="255" stroke="#CBD5E1" strokeDasharray="5 4" />

        {/* Right: Mercury Barometer */}
        <text x="545" y="48" textAnchor="middle" fill="#312E81" fontSize="12" fontWeight="700">
          2. Simple Mercury Barometer
        </text>
        {/* Trough */}
        <rect x="445" y="190" width="160" height="45" fill="#E2E8F0" stroke="#334155" strokeWidth="2" />
        <rect x="447" y="205" width="156" height="28" fill="#94A3B8" />
        {/* Glass Tube */}
        <rect x="513" y="62" width="24" height="158" fill="#FFFFFF" stroke="#334155" strokeWidth="2" rx="10" />
        {/* Mercury column */}
        <rect x="515" y="96" width="20" height="124" fill="#64748B" />
        {/* Vacuum */}
        <text x="598" y="80" textAnchor="start" fill="#4338CA" fontSize="10" fontWeight="700">Torricellian Vacuum</text>
        <line x1="538" y1="78" x2="594" y2="78" stroke="#4338CA" strokeWidth="1.2" />
        {/* Height 76 cm */}
        <line x1="490" y1="96" x2="490" y2="205" stroke="#DC2626" strokeWidth="2" />
        <line x1="484" y1="96" x2="514" y2="96" stroke="#DC2626" strokeWidth="1.5" />
        <line x1="484" y1="205" x2="514" y2="205" stroke="#DC2626" strokeWidth="1.5" />
        <text x="478" y="150" textAnchor="end" fill="#DC2626" fontSize="11" fontWeight="700">h = 76 cm</text>
        <text x="478" y="164" textAnchor="end" fill="#DC2626" fontSize="10">of Hg</text>
        {/* Atm Pressure arrows */}
        <line x1="468" y1="176" x2="468" y2="202" stroke="#0284C7" strokeWidth="2" />
        <polygon points="468,205 464,197 472,197" fill="#0284C7" />
        <text x="435" y="182" textAnchor="end" fill="#0284C7" fontSize="10" fontWeight="700">P_atm</text>
        <text x="545" y="256" textAnchor="middle" fill="#334155" fontSize="10.5" fontWeight="600">1 atm = 76 cm Hg ≈ 1.013 × 10⁵ Pa</text>
      </svg>
    );
  }

  if (figureType === 'phy_energy_pendulum') {
    return (
      <svg viewBox="0 0 720 270" className={className} role="img" aria-label="Conservation of Mechanical Energy in a Simple Pendulum">
        <rect width="720" height="270" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Law of Conservation of Energy: Oscillating Simple Pendulum
        </text>
        {/* Rigid support */}
        <rect x="260" y="42" width="200" height="10" fill="#334155" rx="3" />
        {/* Dashed arc */}
        <path d="M 190,150 Q 360,242 530,150" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5 4" />
        {/* Mean line */}
        <line x1="360" y1="52" x2="360" y2="202" stroke="#4F46E5" strokeWidth="2" />
        {/* Left & Right Strings */}
        <line x1="360" y1="52" x2="195" y2="152" stroke="#64748B" strokeWidth="2" strokeDasharray="4 3" />
        <line x1="360" y1="52" x2="525" y2="152" stroke="#64748B" strokeWidth="2" strokeDasharray="4 3" />

        {/* Horizontal reference lines for height h */}
        <line x1="150" y1="152" x2="570" y2="152" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="150" y1="202" x2="570" y2="202" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="162" y1="152" x2="162" y2="202" stroke="#D97706" strokeWidth="2" />
        <text x="154" y="180" textAnchor="end" fill="#B45309" fontSize="11" fontWeight="700">h</text>

        {/* Bobs */}
        <circle cx="195" cy="152" r="15" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
        <text x="195" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">A</text>
        <text x="135" y="102" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="700">Extreme Left (A)</text>
        <text x="135" y="117" textAnchor="middle" fill="#334155" fontSize="10.5">PE = Max (mgh)</text>
        <text x="135" y="131" textAnchor="middle" fill="#334155" fontSize="10.5">KE = 0 (v = 0)</text>

        <circle cx="360" cy="202" r="15" fill="#4F46E5" stroke="#312E81" strokeWidth="2" />
        <text x="360" y="206" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">B</text>
        <text x="360" y="236" textAnchor="middle" fill="#312E81" fontSize="11" fontWeight="700">Mean Position (B): PE = 0, KE = Max (½mv²)</text>

        <circle cx="525" cy="152" r="15" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
        <text x="525" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">C</text>
        <text x="585" y="102" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="700">Extreme Right (C)</text>
        <text x="585" y="117" textAnchor="middle" fill="#334155" fontSize="10.5">PE = Max (mgh)</text>
        <text x="585" y="131" textAnchor="middle" fill="#334155" fontSize="10.5">KE = 0 (v = 0)</text>

        <text x="360" y="258" textAnchor="middle" fill="#0F172A" fontSize="11.5" fontWeight="700">
          Total Mechanical Energy E = PE + KE = Constant at A, B, C &amp; every intermediate point
        </text>
      </svg>
    );
  }

  if (figureType === 'phy_refraction_mirrors') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Refraction through Glass Slab and Concave Mirror Ray Diagram">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Refraction (Rarer → Denser) &amp; Concave Mirror Principal Focus
        </text>
        {/* Left: Glass slab refraction */}
        <text x="175" y="48" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="700">
          1. Refraction Across Air–Glass Interface
        </text>
        <rect x="65" y="118" width="220" height="72" fill="#BAE6FD" fillOpacity="0.6" stroke="#0284C7" strokeWidth="2" />
        <text x="275" y="110" textAnchor="end" fill="#475569" fontSize="10" fontWeight="600">Air (Rarer, n ≈ 1.0)</text>
        <text x="275" y="136" textAnchor="end" fill="#0369A1" fontSize="10" fontWeight="700">Glass (Denser, n ≈ 1.5)</text>
        {/* Normal */}
        <line x1="155" y1="62" x2="155" y2="215" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="155" y="58" textAnchor="middle" fill="#475569" fontSize="10">Normal (N)</text>
        {/* Incident ray */}
        <line x1="88" y1="66" x2="155" y2="118" stroke="#DC2626" strokeWidth="2.5" />
        {/* Refracted ray bends towards normal */}
        <line x1="155" y1="118" x2="188" y2="190" stroke="#7C3AED" strokeWidth="2.5" />
        {/* Emergent ray parallel */}
        <line x1="188" y1="190" x2="250" y2="238" stroke="#DC2626" strokeWidth="2.5" />
        <text x="136" y="102" fill="#DC2626" fontSize="10.5" fontWeight="700">i</text>
        <text x="160" y="148" fill="#7C3AED" fontSize="10.5" fontWeight="700">r (&lt; i)</text>
        <text x="175" y="258" textAnchor="middle" fill="#334155" fontSize="10.5">Bends TOWARDS Normal (Rarer → Denser)</text>

        <line x1="350" y1="42" x2="350" y2="255" stroke="#CBD5E1" strokeDasharray="5 4" />

        {/* Right: Concave Mirror */}
        <text x="535" y="48" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="700">
          2. Concave Mirror (Converging Focus F)
        </text>
        {/* Principal Axis */}
        <line x1="375" y1="145" x2="675" y2="145" stroke="#475569" strokeWidth="1.5" />
        {/* Mirror Arc */}
        <path d="M 615,75 Q 645,145 615,215" fill="none" stroke="#1E3A8A" strokeWidth="4" />
        {/* Polished hatching */}
        <path d="M 622,80 L 630,74 M 628,110 L 636,104 M 632,145 L 640,139 M 628,180 L 636,174 M 622,210 L 630,204" stroke="#64748B" strokeWidth="1.5" />
        {/* Points C, F, P */}
        <circle cx="445" cy="145" r="3.5" fill="#0F172A" />
        <text x="445" y="162" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="700">C</text>
        <circle cx="538" cy="145" r="4" fill="#DC2626" />
        <text x="538" y="164" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="700">F (Focus)</text>
        <circle cx="630" cy="145" r="3.5" fill="#0F172A" />
        <text x="642" y="162" textAnchor="start" fill="#0F172A" fontSize="11" fontWeight="700">P</text>
        {/* Parallel Rays */}
        <line x1="395" y1="100" x2="623" y2="100" stroke="#F59E0B" strokeWidth="2.2" />
        <line x1="623" y1="100" x2="480" y2="195" stroke="#EF4444" strokeWidth="2" />
        <line x1="395" y1="190" x2="623" y2="190" stroke="#F59E0B" strokeWidth="2.2" />
        <line x1="623" y1="190" x2="480" y2="95" stroke="#EF4444" strokeWidth="2" />
        <text x="535" y="242" textAnchor="middle" fill="#334155" fontSize="10.5">Parallel rays converge at Focus F (f = R / 2)</text>
      </svg>
    );
  }

  if (figureType === 'phy_heat_modes') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Three Modes of Heat Transfer and Thermos Flask Insulation">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Modes of Heat Transfer: Conduction, Convection &amp; Radiation
        </text>
        {/* Box 1: Conduction */}
        <rect x="25" y="45" width="210" height="205" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        <text x="130" y="68" textAnchor="middle" fill="#B91C1C" fontSize="12" fontWeight="700">1. Conduction (Solids)</text>
        <rect x="55" y="122" width="150" height="22" rx="4" fill="#CBD5E1" stroke="#475569" strokeWidth="1.5" />
        {[70, 95, 120, 145, 170, 190].map((cx, i) => (
          <circle key={cx} cx={cx} cy="133" r="6" fill={i < 2 ? '#EF4444' : i < 4 ? '#F59E0B' : '#3B82F6'} />
        ))}
        <path d="M48,162 Q58,142 68,162 Z" fill="#F97316" />
        <text x="130" y="185" textAnchor="middle" fill="#334155" fontSize="10.5">Heat passes atom-to-atom</text>
        <text x="130" y="200" textAnchor="middle" fill="#334155" fontSize="10.5">via lattice vibration</text>
        <text x="130" y="228" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="700">(NO particle migration)</text>

        {/* Box 2: Convection */}
        <rect x="255" y="45" width="210" height="205" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        <text x="360" y="68" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="700">2. Convection (Fluids)</text>
        <rect x="295" y="90" width="130" height="90" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
        {/* Convection arrows */}
        <path d="M360,168 L360,104" stroke="#EF4444" strokeWidth="2.5" />
        <polygon points="360,98 355,108 365,108" fill="#EF4444" />
        <path d="M312,106 L312,165" stroke="#2563EB" strokeWidth="2.5" />
        <polygon points="312,170 307,160 317,160" fill="#2563EB" />
        <path d="M408,106 L408,165" stroke="#2563EB" strokeWidth="2.5" />
        <polygon points="408,170 403,160 413,160" fill="#2563EB" />
        <text x="360" y="202" textAnchor="middle" fill="#334155" fontSize="10.5">Warm fluid rises; cool sinks</text>
        <text x="360" y="228" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="700">(Drives Land &amp; Sea Breeze)</text>

        {/* Box 3: Radiation */}
        <rect x="485" y="45" width="210" height="205" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        <text x="590" y="68" textAnchor="middle" fill="#7C3AED" fontSize="12" fontWeight="700">3. Radiation (Vacuum OK)</text>
        <circle cx="535" cy="115" r="20" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
        <text x="535" y="119" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">Sun</text>
        <path d="M562,115 Q574,105 586,115 T610,115 T634,115" fill="none" stroke="#EF4444" strokeWidth="2" />
        <path d="M562,132 Q574,122 586,132 T610,132 T634,132" fill="none" stroke="#EF4444" strokeWidth="2" />
        <rect x="640" y="96" width="24" height="58" fill="#1E293B" rx="3" />
        <text x="590" y="185" textAnchor="middle" fill="#334155" fontSize="10.5">Electromagnetic IR waves</text>
        <text x="590" y="200" textAnchor="middle" fill="#334155" fontSize="10.5">travel at speed of light</text>
        <text x="590" y="228" textAnchor="middle" fill="#7C3AED" fontSize="10" fontWeight="700">(No material medium needed)</text>
      </svg>
    );
  }

  if (figureType === 'phy_sound_wave') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Sound Wave Anatomy showing Amplitude, Wavelength, Loudness and Pitch">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Characteristics of Sound Waves: Wavelength (λ), Amplitude (A) &amp; Frequency (f)
        </text>
        {/* Main Axis */}
        <line x1="60" y1="125" x2="660" y2="125" stroke="#475569" strokeWidth="1.5" />
        <line x1="60" y1="50" x2="60" y2="205" stroke="#475569" strokeWidth="2" />
        <text x="54" y="128" textAnchor="end" fill="#475569" fontSize="10.5">0</text>
        {/* Sine Wave (2.5 cycles, period = 200px) */}
        <path
          d="M 60,125 C 95,55 125,55 160,125 C 195,195 225,195 260,125 C 295,55 325,55 360,125 C 395,195 425,195 460,125 C 495,55 525,55 560,125"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="3.5"
        />
        {/* Crest & Trough markers */}
        <circle cx="110" cy="72" r="4" fill="#DC2626" />
        <text x="110" y="58" textAnchor="middle" fill="#DC2626" fontSize="10.5" fontWeight="700">Crest</text>
        <circle cx="210" cy="178" r="4" fill="#0284C7" />
        <text x="210" y="196" textAnchor="middle" fill="#0284C7" fontSize="10.5" fontWeight="700">Trough</text>
        {/* Amplitude */}
        <line x1="310" y1="125" x2="310" y2="72" stroke="#16A34A" strokeWidth="2.5" />
        <text x="318" y="102" textAnchor="start" fill="#15803D" fontSize="11" fontWeight="700">Amplitude (A)</text>
        <text x="318" y="115" textAnchor="start" fill="#15803D" fontSize="9.5">Determines Loudness (∝ A²)</text>
        {/* Wavelength */}
        <line x1="110" y1="68" x2="110" y2="45" stroke="#7C3AED" strokeWidth="1.2" strokeDasharray="3 2" />
        <line x1="310" y1="68" x2="310" y2="45" stroke="#7C3AED" strokeWidth="1.2" strokeDasharray="3 2" />
        <line x1="110" y1="48" x2="310" y2="48" stroke="#7C3AED" strokeWidth="2" />
        <text x="210" y="42" textAnchor="middle" fill="#7C3AED" fontSize="11" fontWeight="700">Wavelength (λ)</text>

        {/* Bottom Summary */}
        <rect x="65" y="212" width="590" height="48" rx="8" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
        <text x="360" y="232" textAnchor="middle" fill="#1E1B4B" fontSize="11.5" fontWeight="700">
          Wave Velocity Formula: v = f × λ  (and Frequency f = 1 / T in Hertz)
        </text>
        <text x="360" y="250" textAnchor="middle" fill="#4338CA" fontSize="10.5">
          Higher Amplitude ⇒ Louder Sound  |  Higher Frequency ⇒ Higher Pitch (Shriller)  |  Audible Range: 20 Hz – 20,000 Hz
        </text>
      </svg>
    );
  }

  // phy_circuit_electroscope
  return (
    <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Gold-Leaf Electroscope and Domestic Circuit Wiring">
      <rect width="720" height="275" rx="14" fill="#F8FAFC" />
      <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
        Gold-Leaf Electroscope &amp; Domestic 3-Pin Circuit Safety
      </text>
      {/* Left: Gold-leaf electroscope */}
      <text x="175" y="48" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="700">
        1. Gold-Leaf Electroscope
      </text>
      {/* Glass Jar */}
      <rect x="115" y="102" width="120" height="122" rx="12" fill="#FFFFFF" stroke="#334155" strokeWidth="2.5" />
      {/* Insulating stopper */}
      <rect x="155" y="92" width="40" height="18" fill="#92400E" rx="2" />
      {/* Brass cap & rod */}
      <ellipse cx="175" cy="70" rx="28" ry="8" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
      <line x1="175" y1="78" x2="175" y2="165" stroke="#D97706" strokeWidth="4" />
      {/* Diverging gold leaves */}
      <line x1="175" y1="165" x2="152" y2="205" stroke="#EAB308" strokeWidth="3.5" />
      <line x1="175" y1="165" x2="198" y2="205" stroke="#EAB308" strokeWidth="3.5" />
      <text x="175" y="218" textAnchor="middle" fill="#B45309" fontSize="10" fontWeight="700">Gold Leaves Diverge (+ / +)</text>
      <text x="242" y="74" textAnchor="start" fill="#334155" fontSize="10" fontWeight="600">Brass Disc</text>
      <text x="242" y="104" textAnchor="start" fill="#78350F" fontSize="10">Insulator</text>
      <text x="175" y="248" textAnchor="middle" fill="#475569" fontSize="10">Like charges repel, causing leaves to diverge</text>

      <line x1="350" y1="42" x2="350" y2="255" stroke="#CBD5E1" strokeDasharray="5 4" />

      {/* Right: Domestic Safety Circuit */}
      <text x="535" y="48" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="700">
        2. Household Wiring &amp; Fuse Protection
      </text>
      {/* Live wire (Red/Brown) */}
      <line x1="385" y1="95" x2="465" y2="95" stroke="#DC2626" strokeWidth="3" />
      {/* Fuse symbol */}
      <rect x="465" y="84" width="44" height="22" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" rx="3" />
      <path d="M 470,95 Q 487,88 504,95" fill="none" stroke="#DC2626" strokeWidth="2" />
      <text x="487" y="76" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="700">Fuse (Live)</text>
      {/* Switch */}
      <line x1="509" y1="95" x2="550" y2="95" stroke="#DC2626" strokeWidth="3" />
      <line x1="550" y1="95" x2="578" y2="82" stroke="#DC2626" strokeWidth="2.5" />
      <line x1="580" y1="95" x2="650" y2="95" stroke="#DC2626" strokeWidth="3" />
      <text x="565" y="76" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Switch</text>

      {/* Appliance Load */}
      <rect x="625" y="95" width="52" height="72" rx="6" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
      <text x="651" y="135" textAnchor="middle" fill="#312E81" fontSize="10.5" fontWeight="700">Load</text>

      {/* Neutral wire (Blue/Black) */}
      <line x1="385" y1="167" x2="650" y2="167" stroke="#2563EB" strokeWidth="3" />
      <text x="415" y="184" textAnchor="start" fill="#2563EB" fontSize="10" fontWeight="700">Neutral Wire (0 V)</text>
      <text x="385" y="84" textAnchor="start" fill="#DC2626" fontSize="10" fontWeight="700">Live (220 V)</text>

      {/* Earth Wire (Green) */}
      <line x1="415" y1="205" x2="650" y2="205" stroke="#16A34A" strokeWidth="2.5" strokeDasharray="6 3" />
      <line x1="650" y1="167" x2="650" y2="205" stroke="#16A34A" strokeWidth="2" />
      <text x="415" y="222" textAnchor="start" fill="#15803D" fontSize="10" fontWeight="700">Earth Wire (Green) → Prevents Electric Shock</text>
      <text x="535" y="248" textAnchor="middle" fill="#334155" fontSize="10.5">Appliances wired in PARALLEL; Switch &amp; Fuse always on LIVE wire</text>
    </svg>
  );
};
