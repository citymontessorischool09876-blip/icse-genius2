import React from 'react';
import { DiagramItem } from '../../../types/index.ts';

interface Props {
  figureType: NonNullable<DiagramItem['svgFigure']>;
  className?: string;
}

export const BiologySvg: React.FC<Props> = ({
  figureType,
  className = 'w-full h-auto max-h-[340px]',
}) => {
  if (figureType === 'bio_osmosis_root') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Root Hair Osmosis Water Absorption and Ascent through Xylem">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Water Absorption by Root Hair (Osmosis) &amp; Radial Transport to Xylem
        </text>
        {/* Soil particles + water film on left */}
        <rect x="25" y="55" width="135" height="190" rx="10" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        <text x="92" y="75" textAnchor="middle" fill="#92400E" fontSize="11" fontWeight="700">Soil Water Film</text>
        {[[65, 110], [115, 100], [55, 165], [105, 175], [75, 215]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="14" fill="#B45309" fillOpacity="0.6" stroke="#78350F" />
        ))}
        <text x="92" y="236" textAnchor="middle" fill="#0284C7" fontSize="10" fontWeight="700">High Water Potential</text>

        {/* Root Hair Epidermal Cell */}
        <path d="M100,130 L215,130 L215,98 L285,98 L285,188 L215,188 L215,154 L100,154 Q84,142 100,130 Z" fill="#D1FAE5" stroke="#059669" strokeWidth="2.5" />
        {/* Large Central Vacuole */}
        <path d="M112,135 L268,112 L268,174 L112,149 Z" fill="#7DD3FC" fillOpacity="0.65" stroke="#0284C7" strokeWidth="1.2" />
        <circle cx="242" cy="122" r="7" fill="#065F46" />
        <text x="165" y="122" textAnchor="middle" fill="#065F46" fontSize="10" fontWeight="700">Root Hair</text>
        <text x="242" y="182" textAnchor="middle" fill="#0369A1" fontSize="9.5" fontWeight="700">Vacuole (Cell Sap)</text>

        {/* Cortex cells */}
        {[290, 365, 440].map((x, i) => (
          <g key={x}>
            <rect x={x} y="102" width="70" height="82" rx="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
            <text x={x + 35} y="120" textAnchor="middle" fill="#047857" fontSize="9.5" fontWeight="700">Cortex {i + 1}</text>
            <circle cx={x + 35} cy="148" r="14" fill="#BAE6FD" />
          </g>
        ))}

        {/* Endodermis & Xylem Vessel */}
        <rect x="520" y="72" width="38" height="145" rx="6" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
        <text x="539" y="148" textAnchor="middle" fill="#92400E" fontSize="9.5" fontWeight="700" transform="rotate(-90 539 148)">Endodermis</text>

        <rect x="572" y="55" width="70" height="190" rx="8" fill="#BAE6FD" stroke="#0284C7" strokeWidth="3" />
        <text x="607" y="145" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="800">XYLEM</text>
        <text x="607" y="162" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="700">VESSEL</text>
        {/* Upward ascent arrow */}
        <line x1="665" y1="225" x2="665" y2="75" stroke="#0284C7" strokeWidth="3.5" />
        <polygon points="665,65 659,79 671,79" fill="#0284C7" />
        <text x="674" y="150" textAnchor="start" fill="#0369A1" fontSize="10" fontWeight="700" transform="rotate(-90 674 150)">Ascent of Sap ↑</text>

        {/* Osmosis Arrows */}
        <line x1="125" y1="142" x2="565" y2="142" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="6 3" />
        <polygon points="570,142 558,137 558,147" fill="#2563EB" />
        <text x="360" y="258" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="700">
          Osmosis: Soil → Root Hair → Cortex → Endodermis → Xylem → Leaves (Transpiration Pull)
        </text>
      </svg>
    );
  }

  if (figureType === 'bio_flower_structure') {
    return (
      <svg viewBox="0 0 720 280" className={className} role="img" aria-label="Longitudinal Section of a Complete Bisexual Flower">
        <rect width="720" height="280" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Longitudinal Section (L.S.) of a Complete Flower: 4 Floral Whorls
        </text>
        {/* Pedicel & Thalamus */}
        <rect x="348" y="220" width="24" height="42" fill="#16A34A" stroke="#14532D" strokeWidth="1.5" />
        <ellipse cx="360" cy="215" rx="45" ry="12" fill="#22C55E" stroke="#14532D" strokeWidth="1.5" />
        {/* Calyx (Sepals) */}
        <path d="M318,214 Q265,208 242,186 Q285,196 325,204 Z" fill="#15803D" />
        <path d="M402,214 Q455,208 478,186 Q435,196 395,204 Z" fill="#15803D" />
        {/* Corolla (Petals) */}
        <path d="M328,205 Q215,175 215,90 Q285,95 335,190 Z" fill="#F472B6" fillOpacity="0.65" stroke="#DB2777" strokeWidth="2" />
        <path d="M392,205 Q505,175 505,90 Q435,95 385,190 Z" fill="#F472B6" fillOpacity="0.65" stroke="#DB2777" strokeWidth="2" />

        {/* Stamens (Androecium) */}
        <path d="M335,200 Q290,150 285,100" fill="none" stroke="#CA8A04" strokeWidth="3.5" />
        <ellipse cx="285" cy="96" rx="13" ry="7" fill="#FACC15" stroke="#A16207" strokeWidth="2" />
        <path d="M385,200 Q430,150 435,100" fill="none" stroke="#CA8A04" strokeWidth="3.5" />
        <ellipse cx="435" cy="96" rx="13" ry="7" fill="#FACC15" stroke="#A16207" strokeWidth="2" />

        {/* Central Pistil / Carpel (Gynoecium) */}
        <path d="M336,185 C328,215 392,215 384,185 C378,162 369,150 368,105 L352,105 C351,150 342,162 336,185 Z" fill="#86EFAC" stroke="#047857" strokeWidth="2.5" />
        {/* Stigma */}
        <ellipse cx="360" cy="98" rx="18" ry="8" fill="#10B981" stroke="#047857" strokeWidth="2" />
        {/* Ovules inside Ovary */}
        <circle cx="352" cy="186" r="5" fill="#FEF08A" stroke="#854D0E" />
        <circle cx="368" cy="186" r="5" fill="#FEF08A" stroke="#854D0E" />
        <circle cx="360" cy="196" r="5" fill="#FEF08A" stroke="#854D0E" />

        {/* Left Labels: Gynoecium (Female) */}
        <text x="155" y="72" textAnchor="end" fill="#047857" fontSize="11.5" fontWeight="700">Stigma (Receives pollen)</text>
        <line x1="160" y1="69" x2="342" y2="96" stroke="#047857" strokeWidth="1.2" />
        <text x="155" y="135" textAnchor="end" fill="#047857" fontSize="11.5" fontWeight="700">Style (Pollen tube path)</text>
        <line x1="160" y1="132" x2="352" y2="132" stroke="#047857" strokeWidth="1.2" />
        <text x="155" y="182" textAnchor="end" fill="#047857" fontSize="11.5" fontWeight="700">Ovary → Fruit</text>
        <line x1="160" y1="179" x2="336" y2="185" stroke="#047857" strokeWidth="1.2" />
        <text x="155" y="218" textAnchor="end" fill="#92400E" fontSize="11.5" fontWeight="700">Ovules → Seeds</text>
        <line x1="160" y1="215" x2="355" y2="196" stroke="#92400E" strokeWidth="1.2" />

        {/* Right Labels: Androecium & Accessory Whorls */}
        <text x="555" y="78" textAnchor="start" fill="#A16207" fontSize="11.5" fontWeight="700">Anther (Pollen sacs)</text>
        <line x1="448" y1="95" x2="550" y2="75" stroke="#A16207" strokeWidth="1.2" />
        <text x="555" y="114" textAnchor="start" fill="#A16207" fontSize="11.5" fontWeight="700">Filament (Stamen stalk)</text>
        <line x1="422" y1="142" x2="550" y2="111" stroke="#A16207" strokeWidth="1.2" />
        <text x="555" y="158" textAnchor="start" fill="#DB2777" fontSize="11.5" fontWeight="700">Petal (Corolla · Pollinator lure)</text>
        <line x1="490" y1="145" x2="550" y2="155" stroke="#DB2777" strokeWidth="1.2" />
        <text x="555" y="200" textAnchor="start" fill="#15803D" fontSize="11.5" fontWeight="700">Sepal (Calyx · Bud guard)</text>
        <line x1="455" y1="198" x2="550" y2="197" stroke="#15803D" strokeWidth="1.2" />
        <text x="360" y="272" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="600">Pedicel &amp; Thalamus</text>
      </svg>
    );
  }

  if (figureType === 'bio_ecosystem_pyramid') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Ecological Energy Pyramid showing Lindeman 10 Percent Law">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Ecological Pyramid of Energy &amp; 10% Energy Transfer Law
        </text>
        {/* 4 Upright Trapezium Tiers centered at x = 260 */}
        <polygon points="215,52 305,52 340,96 180,96" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
        <text x="260" y="79" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">Tertiary Consumers (Hawk)</text>

        <polygon points="180,96 340,96 385,144 135,144" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
        <text x="260" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">Secondary Consumers (Snake / Frog)</text>

        <polygon points="135,144 385,144 430,192 90,192" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />
        <text x="260" y="172" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700">Primary Consumers (Grasshopper / Deer)</text>

        <polygon points="90,192 430,192 475,244 45,244" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2" />
        <text x="260" y="222" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">Producers (Green Plants · Autotrophs)</text>

        {/* Energy values on right */}
        {[
          { y: 79, e: '10 J  (0.1%)', col: '#B91C1C' },
          { y: 125, e: '100 J  (1%)', col: '#B45309' },
          { y: 172, e: '1,000 J  (10%)', col: '#0369A1' },
          { y: 222, e: '10,000 J  (100%)', col: '#15803D' },
        ].map((t) => (
          <text key={t.y} x="495" y={t.y} textAnchor="start" fill={t.col} fontSize="12" fontWeight="800">{t.e}</text>
        ))}

        {/* Sun & Decomposers Note */}
        <rect x="492" y="48" width="205" height="90" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="594" y="68" textAnchor="middle" fill="#92400E" fontSize="11" fontWeight="700">10% Law (Lindeman)</text>
        <text x="594" y="86" textAnchor="middle" fill="#334155" fontSize="10">Only 10% of energy passes</text>
        <text x="594" y="101" textAnchor="middle" fill="#334155" fontSize="10">to the next trophic level;</text>
        <text x="594" y="116" textAnchor="middle" fill="#334155" fontSize="10">90% is lost as heat &amp;</text>
        <text x="594" y="130" textAnchor="middle" fill="#334155" fontSize="10">metabolic respiration.</text>
        <text x="260" y="264" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="600">
          Decomposers (Bacteria &amp; Fungi) recycle nutrients back to the soil from all trophic levels
        </text>
      </svg>
    );
  }

  if (figureType === 'bio_endocrine_glands') {
    return (
      <svg viewBox="0 0 720 290" className={className} role="img" aria-label="Human Body Major Endocrine Glands Illustration">
        <rect width="720" height="290" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Human Endocrine System: Ductless Glands &amp; Key Hormones
        </text>
        {/* Human Silhouette centered at x = 355 */}
        <circle cx="355" cy="72" r="26" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />
        {/* Neck & Torso */}
        <path d="M342,96 L342,110 L295,120 L282,195 L302,195 L312,140 L315,252 L395,252 L398,140 L408,195 L428,195 L415,120 L368,110 L368,96 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />

        {/* Glands plotted anatomically */}
        {/* Pituitary (base of brain) */}
        <circle cx="355" cy="68" r="5" fill="#7C3AED" />
        {/* Thyroid (neck butterfly) */}
        <ellipse cx="355" cy="107" rx="11" ry="5" fill="#EC4899" />
        {/* Adrenals (top of kidneys) */}
        <polygon points="330,174 340,174 335,165" fill="#EF4444" />
        <polygon points="370,174 380,174 375,165" fill="#EF4444" />
        {/* Pancreas */}
        <ellipse cx="362" cy="186" rx="18" ry="6" fill="#F59E0B" stroke="#B45309" />
        {/* Gonads (Ovaries / Testes) */}
        <circle cx="338" cy="234" r="5" fill="#0284C7" />
        <circle cx="372" cy="234" r="5" fill="#0284C7" />

        {/* Left Callouts */}
        <line x1="255" y1="68" x2="348" y2="68" stroke="#7C3AED" strokeWidth="1.5" />
        <text x="248" y="65" textAnchor="end" fill="#6D28D9" fontSize="11" fontWeight="700">Pituitary (Master Gland)</text>
        <text x="248" y="79" textAnchor="end" fill="#475569" fontSize="9.5">Growth Hormone (GH), TSH, ADH</text>

        <line x1="255" y1="168" x2="332" y2="168" stroke="#EF4444" strokeWidth="1.5" />
        <text x="248" y="165" textAnchor="end" fill="#DC2626" fontSize="11" fontWeight="700">Adrenal Glands (Above Kidneys)</text>
        <text x="248" y="179" textAnchor="end" fill="#475569" fontSize="9.5">Adrenaline (Fight-or-Flight Hormone)</text>

        <line x1="255" y1="234" x2="332" y2="234" stroke="#0284C7" strokeWidth="1.5" />
        <text x="248" y="231" textAnchor="end" fill="#0369A1" fontSize="11" fontWeight="700">Gonads (Testes / Ovaries)</text>
        <text x="248" y="245" textAnchor="end" fill="#475569" fontSize="9.5">Testosterone / Oestrogen &amp; Progesterone</text>

        {/* Right Callouts */}
        <line x1="368" y1="107" x2="455" y2="107" stroke="#EC4899" strokeWidth="1.5" />
        <text x="462" y="104" textAnchor="start" fill="#BE185D" fontSize="11" fontWeight="700">Thyroid Gland (Neck)</text>
        <text x="462" y="118" textAnchor="start" fill="#475569" fontSize="9.5">Thyroxine (Needs Iodine · Regulates BMR)</text>

        <line x1="382" y1="186" x2="455" y2="186" stroke="#D97706" strokeWidth="1.5" />
        <text x="462" y="183" textAnchor="start" fill="#B45309" fontSize="11" fontWeight="700">Pancreas (Islets of Langerhans)</text>
        <text x="462" y="197" textAnchor="start" fill="#475569" fontSize="9.5">Insulin (Lowers glucose) &amp; Glucagon</text>

        <text x="360" y="278" textAnchor="middle" fill="#334155" fontSize="10.5" fontWeight="600">
          Endocrine glands are ductless and secrete hormones directly into the bloodstream
        </text>
      </svg>
    );
  }

  if (figureType === 'bio_human_heart') {
    return (
      <svg viewBox="0 0 720 290" className={className} role="img" aria-label="Internal Four-Chambered Structure of the Human Heart and Double Circulation">
        <rect width="720" height="290" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Internal Structure of the Human Heart &amp; Double Blood Circulation
        </text>
        {/* Heart Outer Shape centered around x = 355 */}
        <path
          d="M275,92 C255,92 245,140 265,180 C285,222 330,254 358,262 C386,254 435,220 450,178 C462,140 450,92 425,92 L360,104 Z"
          fill="#FEE2E2"
          stroke="#991B1B"
          strokeWidth="3"
        />
        {/* Muscular Septum dividing Right side (viewer left = deoxygenated blue) and Left side (viewer right = oxygenated red) */}
        <rect x="351" y="104" width="14" height="150" rx="6" fill="#991B1B" />
        {/* Right Atrium (Blue) & Right Ventricle (Blue) */}
        <path d="M268,100 L351,106 L351,154 L262,154 Z" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1.5" />
        <path d="M264,160 L351,160 L351,244 C312,235 280,202 264,160 Z" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="1.5" />
        {/* Left Atrium (Red) & Left Ventricle (Thick walled Red) */}
        <path d="M365,106 L438,100 L444,154 L365,154 Z" fill="#FCA5A5" stroke="#B91C1C" strokeWidth="1.5" />
        <path d="M365,160 L442,160 C428,204 398,236 365,246 Z" fill="#F87171" stroke="#B91C1C" strokeWidth="1.5" />

        {/* Chamber Texts */}
        <text x="308" y="132" textAnchor="middle" fill="#1E3A8A" fontSize="11" fontWeight="800">Right Atrium</text>
        <text x="308" y="198" textAnchor="middle" fill="#1E3A8A" fontSize="11" fontWeight="800">Right</text>
        <text x="308" y="212" textAnchor="middle" fill="#1E3A8A" fontSize="11" fontWeight="800">Ventricle</text>
        <text x="404" y="132" textAnchor="middle" fill="#7F1D1D" fontSize="11" fontWeight="800">Left Atrium</text>
        <text x="404" y="198" textAnchor="middle" fill="#7F1D1D" fontSize="11" fontWeight="800">Left</text>
        <text x="404" y="212" textAnchor="middle" fill="#7F1D1D" fontSize="11" fontWeight="800">Ventricle</text>

        {/* Great Vessels */}
        {/* Vena Cava into RA */}
        <rect x="275" y="55" width="20" height="45" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
        {/* Pulmonary Artery from RV */}
        <path d="M325,104 L325,60 L295,60" fill="none" stroke="#2563EB" strokeWidth="10" />
        {/* Aorta from LV */}
        <path d="M385,104 L385,55 Q410,42 426,64" fill="none" stroke="#DC2626" strokeWidth="10" />

        {/* Left Labels (Deoxygenated Side) */}
        <text x="230" y="64" textAnchor="end" fill="#1D4ED8" fontSize="10.5" fontWeight="700">Superior &amp; Inferior Vena Cava</text>
        <text x="230" y="77" textAnchor="end" fill="#475569" fontSize="9.5">(Deoxygenated blood from Body → RA)</text>
        <text x="230" y="114" textAnchor="end" fill="#1D4ED8" fontSize="10.5" fontWeight="700">Pulmonary Artery → Lungs</text>
        <text x="230" y="162" textAnchor="end" fill="#1E3A8A" fontSize="10.5" fontWeight="700">Tricuspid Valve (RA → RV)</text>
        <line x1="235" y1="158" x2="295" y2="157" stroke="#1E3A8A" strokeWidth="1.2" />

        {/* Right Labels (Oxygenated Side) */}
        <text x="475" y="64" textAnchor="start" fill="#DC2626" fontSize="10.5" fontWeight="700">Aorta → Entire Body</text>
        <text x="475" y="77" textAnchor="start" fill="#475569" fontSize="9.5">(Largest artery · Oxygenated blood)</text>
        <text x="475" y="118" textAnchor="start" fill="#DC2626" fontSize="10.5" fontWeight="700">Pulmonary Veins ← Lungs</text>
        <text x="475" y="162" textAnchor="start" fill="#991B1B" fontSize="10.5" fontWeight="700">Bicuspid (Mitral) Valve</text>
        <line x1="418" y1="157" x2="470" y2="158" stroke="#991B1B" strokeWidth="1.2" />
        <text x="475" y="218" textAnchor="start" fill="#991B1B" fontSize="10" fontWeight="700">Septum separates O₂ &amp; CO₂ blood</text>
        <line x1="365" y1="226" x2="470" y2="215" stroke="#991B1B" strokeWidth="1.2" />

        <text x="360" y="280" textAnchor="middle" fill="#334155" fontSize="10.5" fontWeight="700">
          Left Ventricle has the thickest muscular wall because it pumps oxygenated blood to the entire body
        </text>
      </svg>
    );
  }

  if (figureType === 'bio_neuron_reflex') {
    return (
      <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Structure of a Neuron and Five-Step Reflex Arc">
        <rect width="720" height="275" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Anatomy of a Neuron (Nerve Cell) &amp; Reflex Arc Pathway
        </text>
        {/* Cyton / Cell Body */}
        <polygon points="105,112 135,88 175,100 180,136 142,155 108,140" fill="#FDE68A" stroke="#D97706" strokeWidth="2.5" />
        <circle cx="144" cy="122" r="11" fill="#92400E" />
        {/* Dendrites */}
        <path d="M105,112 L72,92 M105,112 L68,118 M108,140 L75,152 M135,88 L120,62 M135,88 L152,58" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
        <text x="80" y="55" textAnchor="middle" fill="#B45309" fontSize="10.5" fontWeight="700">Dendrites</text>
        <text x="145" y="174" textAnchor="middle" fill="#92400E" fontSize="10.5" fontWeight="700">Cell Body (Cyton) + Nucleus</text>

        {/* Axon + Myelin Sheath */}
        <line x1="178" y1="120" x2="545" y2="120" stroke="#D97706" strokeWidth="5" />
        {[220, 290, 360, 430].map((x) => (
          <rect key={x} x={x} y="107" width="54" height="26" rx="10" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2" />
        ))}
        <text x="355" y="96" textAnchor="middle" fill="#0369A1" fontSize="11" fontWeight="700">Myelin Sheath (Insulator)</text>
        <text x="282" y="152" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">Node of Ranvier</text>
        <text x="415" y="152" textAnchor="middle" fill="#B45309" fontSize="10.5" fontWeight="700">Axon (Nerve Fibre)</text>

        {/* Axon Terminals */}
        <path d="M545,120 L595,90 M545,120 L605,115 M545,120 L598,145" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
        {[
          [595, 90],
          [605, 115],
          [598, 145],
        ].map(([cx, cy], idx) => (
          <circle key={idx} cx={cx} cy={cy} r="5" fill="#7C3AED" />
        ))}
        <text x="615" y="118" textAnchor="start" fill="#6D28D9" fontSize="10.5" fontWeight="700">Axon Terminals</text>
        <text x="615" y="132" textAnchor="start" fill="#475569" fontSize="9.5">(Synapse junction)</text>

        {/* Bottom: 5-step Reflex Arc */}
        <rect x="35" y="192" width="650" height="66" rx="10" fill="#EEF2FF" stroke="#818CF8" strokeWidth="1.5" />
        <text x="360" y="212" textAnchor="middle" fill="#312E81" fontSize="11.5" fontWeight="700">
          Pathway of a Reflex Arc (Spinal Cord Controlled — Instantaneous &amp; Involuntary)
        </text>
        <text x="360" y="236" textAnchor="middle" fill="#1E1B4B" fontSize="11" fontWeight="700">
          Stimulus → Receptor → Sensory Neuron → Spinal Cord (Interneuron) → Motor Neuron → Effector (Muscle/Gland)
        </text>
      </svg>
    );
  }

  if (figureType === 'bio_disease_vectors') {
    return (
      <svg viewBox="0 0 720 270" className={className} role="img" aria-label="Modes of Disease Transmission and Primary vs Secondary Vaccination Immunity">
        <rect width="720" height="270" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Vaccination Immune Response &amp; Disease Transmission Chains
        </text>
        {/* Left: Antibody graph */}
        <text x="195" y="48" textAnchor="middle" fill="#0F766E" fontSize="12" fontWeight="700">1. How Vaccines Train Memory B-Cells</text>
        <line x1="65" y1="215" x2="340" y2="215" stroke="#334155" strokeWidth="2" />
        <line x1="65" y1="215" x2="65" y2="62" stroke="#334155" strokeWidth="2" />
        <text x="48" y="140" textAnchor="middle" fill="#475569" fontSize="10" transform="rotate(-90 48 140)">Antibody Level</text>
        {/* Curve */}
        <path d="M 75,212 Q 115,212 135,165 Q 155,195 190,198 Q 225,198 250,76 Q 275,112 330,122" fill="none" stroke="#0D9488" strokeWidth="3.5" />
        <text x="135" y="152" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="700">Primary</text>
        <text x="135" y="163" textAnchor="middle" fill="#0369A1" fontSize="9.5">(Vaccine Dose)</text>
        <text x="255" y="68" textAnchor="middle" fill="#0F766E" fontSize="10.5" fontWeight="800">Rapid Secondary Surge</text>
        <text x="200" y="236" textAnchor="middle" fill="#334155" fontSize="10.5">Time (1st Exposure vs Booster / Real Pathogen)</text>

        <line x1="365" y1="45" x2="365" y2="250" stroke="#CBD5E1" strokeDasharray="5 4" />

        {/* Right: Vectors & Prevention */}
        <text x="540" y="48" textAnchor="middle" fill="#0F766E" fontSize="12" fontWeight="700">2. Common Vectors &amp; Diseases</text>
        {[
          { y: 68, vec: 'Female Anopheles Mosquito', dis: 'Malaria (Plasmodium)', col: '#DC2626' },
          { y: 112, vec: 'Aedes Mosquito', dis: 'Dengue & Chikungunya (Virus)', col: '#D97706' },
          { y: 156, vec: 'Housefly (Contaminated Food)', dis: 'Cholera, Typhoid, Dysentery', col: '#0284C7' },
          { y: 200, vec: 'Airborne Droplets (Sneeze)', dis: 'Tuberculosis, Influenza, COVID', col: '#7C3AED' },
        ].map((r) => (
          <g key={r.vec}>
            <rect x="390" y={r.y} width="300" height="36" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="404" y={r.y + 15} fill={r.col} fontSize="11" fontWeight="700">{r.vec}</text>
            <text x="404" y={r.y + 29} fill="#334155" fontSize="10">{r.dis}</text>
          </g>
        ))}
      </svg>
    );
  }

  // bio_nitrogen_agri
  return (
    <svg viewBox="0 0 720 275" className={className} role="img" aria-label="Biological Nitrogen Fixation in Legume Root Nodules and Crop Production">
      <rect width="720" height="275" rx="14" fill="#F8FAFC" />
      <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
        Biological Nitrogen Fixation: Rhizobium Symbiosis &amp; Nitrogen Cycle
      </text>
      {/* Left: Legume Plant + Root Nodules */}
      <rect x="45" y="155" width="215" height="95" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
      <text x="152" y="242" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="700">Soil (Nitrates Absorbed by Crops)</text>
      {/* Stem & Leaves */}
      <line x1="152" y1="62" x2="152" y2="155" stroke="#16A34A" strokeWidth="4" />
      <ellipse cx="132" cy="95" rx="18" ry="8" fill="#22C55E" transform="rotate(-25 132 95)" />
      <ellipse cx="172" cy="108" rx="18" ry="8" fill="#22C55E" transform="rotate(25 172 108)" />
      {/* Roots & Nodules */}
      <path d="M152,155 Q125,185 110,210 M152,155 Q152,195 152,218 M152,155 Q180,185 196,212" fill="none" stroke="#92400E" strokeWidth="2.5" />
      {[[126, 182], [116, 198], [152, 192], [178, 186], [190, 202]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5.5" fill="#F43F5E" stroke="#9F1239" strokeWidth="1.5" />
      ))}
      <text x="152" y="54" textAnchor="middle" fill="#15803D" fontSize="11.5" fontWeight="700">Leguminous Plant (Pea / Gram)</text>
      <text x="202" y="176" textAnchor="start" fill="#9F1239" fontSize="10" fontWeight="700">Root Nodules (Rhizobium)</text>

      {/* Right: Cycle Flow */}
      <rect x="330" y="52" width="350" height="44" rx="8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
      <text x="505" y="79" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="700">Atmospheric Nitrogen Gas (N₂ · 78%)</text>

      <line x1="420" y1="96" x2="420" y2="136" stroke="#059669" strokeWidth="2.5" />
      <polygon points="420,142 415,132 425,132" fill="#059669" />
      <text x="410" y="121" textAnchor="end" fill="#059669" fontSize="9.5" fontWeight="700">Rhizobium &amp; Lightning</text>

      <rect x="330" y="144" width="350" height="44" rx="8" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.8" />
      <text x="505" y="171" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="700">Usable Soil Nitrates (NO₃⁻) → Plant Proteins</text>

      <line x1="590" y1="144" x2="590" y2="102" stroke="#DC2626" strokeWidth="2.5" />
      <polygon points="590,96 585,106 595,106" fill="#DC2626" />
      <text x="600" y="121" textAnchor="start" fill="#DC2626" fontSize="9.5" fontWeight="700">Denitrifying Bacteria</text>

      <rect x="330" y="206" width="350" height="44" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.8" />
      <text x="505" y="226" textAnchor="middle" fill="#92400E" fontSize="11" fontWeight="700">Decomposition &amp; Ammonification</text>
      <text x="505" y="241" textAnchor="middle" fill="#475569" fontSize="10">Crop Rotation replenishes soil Nitrogen naturally</text>
    </svg>
  );
};
