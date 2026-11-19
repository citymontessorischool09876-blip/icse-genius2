import React from 'react';
import { DiagramItem } from '../../types/index.ts';
import { ScienceSvgDiagram } from './ScienceSvgDiagram.tsx';

interface MathSvgDiagramProps {
  figureType: NonNullable<DiagramItem['svgFigure']>;
  className?: string;
}

export const MathSvgDiagram: React.FC<MathSvgDiagramProps> = ({
  figureType,
  className = 'w-full h-auto max-h-[340px]',
}) => {
  if (
    figureType.startsWith('phy_') ||
    figureType.startsWith('chem_') ||
    figureType.startsWith('bio_')
  ) {
    return <ScienceSvgDiagram figureType={figureType} className={className} />;
  }

  if (figureType === 'squares_cubes_grid') {
    return (
      <svg viewBox="0 0 720 260" className={className} role="img" aria-label="Geometric interpretation of Perfect Squares and Perfect Cubes">
        <rect width="720" height="260" rx="14" fill="#F8FAFC" />

        {/* Left: 4 x 4 Square */}
        <text x="145" y="28" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Perfect Square: 4² = 16 sq. units
        </text>
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 4 }).map((__, c) => (
            <rect
              key={`sq-${r}-${c}`}
              x={65 + c * 40}
              y={45 + r * 40}
              width="38"
              height="38"
              rx="4"
              fill={(r + c) % 2 === 0 ? '#4F46E5' : '#6366F1'}
              fillOpacity={0.85}
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
          ))
        )}
        <text x="145" y="226" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="600">
          4 rows × 4 columns = 16 unit tiles (√16 = 4)
        </text>
        <text x="48" y="130" textAnchor="middle" fill="#4F46E5" fontSize="12" fontWeight="700">
          4
        </text>
        <text x="145" y="246" textAnchor="middle" fill="#475569" fontSize="11">
          Side = n ⟹ Area = n²
        </text>

        {/* Divider */}
        <line x1="340" y1="24" x2="340" y2="240" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5 5" />

        {/* Right: 3 x 3 x 3 Isometric Cube */}
        <text x="530" y="28" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Perfect Cube: 3³ = 27 cubic units
        </text>
        {/* Front 3x3 face */}
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 3 }).map((__, c) => (
            <rect
              key={`cb-${r}-${c}`}
              x={430 + c * 34}
              y={96 + r * 34}
              width="32"
              height="32"
              fill="#7C3AED"
              fillOpacity={0.85}
              stroke="#F8FAFC"
              strokeWidth="1.5"
            />
          ))
        )}
        {/* Top 3x3 slant face */}
        <polygon
          points="430,96 478,56 580,56 532,96"
          fill="#A78BFA"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        {/* Side slant face */}
        <polygon
          points="532,96 580,56 580,158 532,198"
          fill="#5B21B6"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        {/* Grid lines on top & side */}
        <line x1="464" y1="96" x2="512" y2="56" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="498" y1="96" x2="546" y2="56" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="446" y1="82" x2="548" y2="82" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="462" y1="69" x2="564" y2="69" stroke="#FFFFFF" strokeWidth="1.2" />

        <line x1="532" y1="130" x2="580" y2="90" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="532" y1="164" x2="580" y2="124" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="548" y1="83" x2="548" y2="185" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="564" y1="69" x2="564" y2="171" stroke="#FFFFFF" strokeWidth="1.2" />

        <text x="515" y="226" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="600">
          3 × 3 × 3 layers = 27 unit cubes (∛27 = 3)
        </text>
        <text x="515" y="246" textAnchor="middle" fill="#475569" fontSize="11">
          Edge = n ⟹ Volume = n³
        </text>
      </svg>
    );
  }

  if (figureType === 'interest_growth_curve') {
    return (
      <svg viewBox="0 0 720 270" className={className} role="img" aria-label="Comparison of Simple Interest vs Compound Interest Growth">
        <rect width="720" height="270" rx="14" fill="#F8FAFC" />
        <text x="360" y="26" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Simple Interest (Linear Growth) vs. Compound Interest (Exponential Growth)
        </text>
        <text x="360" y="44" textAnchor="middle" fill="#475569" fontSize="11">
          Example: Principal P = ₹10,000 at R = 10% p.a. over 4 Years
        </text>

        {/* Axes */}
        <line x1="90" y1="215" x2="530" y2="215" stroke="#334155" strokeWidth="1.8" />
        <line x1="90" y1="65" x2="90" y2="215" stroke="#334155" strokeWidth="1.8" />

        {/* Horizontal grid */}
        {[180, 145, 110, 75].map((y, idx) => (
          <g key={y}>
            <line x1="90" y1={y} x2="530" y2={y} stroke="#E2E8F0" strokeDasharray="4 4" />
            <text x="80" y={y + 4} textAnchor="end" fill="#64748B" fontSize="10">
              ₹{11 + idx}k
            </text>
          </g>
        ))}
        <text x="80" y="218" textAnchor="end" fill="#64748B" fontSize="10">₹10k</text>

        {/* Years x-ticks */}
        {[0, 1, 2, 3, 4].map((yr) => {
          const x = 90 + yr * 105;
          return (
            <g key={yr}>
              <line x1={x} y1="215" x2={x} y2="220" stroke="#334155" strokeWidth="1.5" />
              <text x={x} y="235" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
                Year {yr}
              </text>
            </g>
          );
        })}

        {/* Simple Interest Line: 10000 -> 11000 -> 12000 -> 13000 -> 14000 */}
        <polyline
          fill="none"
          stroke="#0284C7"
          strokeWidth="3"
          points="90,215 195,180 300,145 405,110 510,75"
        />
        {[
          [90, 215],
          [195, 180],
          [300, 145],
          [405, 110],
          [510, 75],
        ].map(([cx, cy], i) => (
          <circle key={`si-${i}`} cx={cx} cy={cy} r="4.5" fill="#0284C7" />
        ))}

        {/* Compound Interest Curve: 10000 -> 11000 -> 12100 -> 13310 -> 14641 */}
        <polyline
          fill="none"
          stroke="#7C3AED"
          strokeWidth="3.2"
          points="90,215 195,180 300,141 405,99 510,53"
        />
        {[
          [90, 215, '₹10,000'],
          [195, 180, '₹11,000'],
          [300, 141, '₹12,100'],
          [405, 99, '₹13,310'],
          [510, 53, '₹14,641'],
        ].map(([cx, cy, label], i) => (
          <g key={`ci-${i}`}>
            <circle cx={Number(cx)} cy={Number(cy)} r="5" fill="#7C3AED" />
            {i >= 2 && (
              <text x={Number(cx)} y={Number(cy) - 9} textAnchor="middle" fill="#6D28D9" fontSize="10" fontWeight="700">
                {label}
              </text>
            )}
          </g>
        ))}

        {/* Legend box */}
        <rect x="545" y="75" width="155" height="115" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
        <line x1="560" y1="100" x2="585" y2="100" stroke="#7C3AED" strokeWidth="3" />
        <text x="593" y="104" fill="#0F172A" fontSize="11" fontWeight="700">Compound Interest</text>
        <text x="560" y="120" fill="#64748B" fontSize="10">Interest earns interest</text>

        <line x1="560" y1="148" x2="585" y2="148" stroke="#0284C7" strokeWidth="3" />
        <text x="593" y="152" fill="#0F172A" fontSize="11" fontWeight="700">Simple Interest</text>
        <text x="560" y="168" fill="#64748B" fontSize="10">Fixed ₹1,000 / year</text>
      </svg>
    );
  }

  if (figureType === 'quadrilaterals_properties') {
    return (
      <svg viewBox="0 0 720 260" className={className} role="img" aria-label="Special Quadrilaterals and Diagonal Properties">
        <rect width="720" height="260" rx="14" fill="#F8FAFC" />
        <text x="360" y="26" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Quadrilateral Geometry: Parallelogram, Rhombus, Rectangle & Trapezium
        </text>

        {/* Parallelogram */}
        <polygon points="50,175 85,75 200,75 165,175" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2.5" />
        <line x1="50" y1="175" x2="200" y2="75" stroke="#818CF8" strokeWidth="1.3" strokeDasharray="4 4" />
        <line x1="85" y1="75" x2="165" y2="175" stroke="#818CF8" strokeWidth="1.3" strokeDasharray="4 4" />
        <circle cx="125" cy="125" r="3.5" fill="#4F46E5" />
        <text x="125" y="205" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Parallelogram</text>
        <text x="125" y="222" textAnchor="middle" fill="#475569" fontSize="10">Opp. sides ∥ &amp; equal</text>
        <text x="125" y="236" textAnchor="middle" fill="#475569" fontSize="10">Diagonals bisect each other</text>

        {/* Rhombus */}
        <polygon points="315,65 375,125 315,185 255,125" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2.5" />
        <line x1="315" y1="65" x2="315" y2="185" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="255" y1="125" x2="375" y2="125" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x="315" y="115" width="10" height="10" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
        <text x="315" y="205" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Rhombus</text>
        <text x="315" y="222" textAnchor="middle" fill="#475569" fontSize="10">All 4 sides equal</text>
        <text x="315" y="236" textAnchor="middle" fill="#475569" fontSize="10">Diagonals bisect at 90°</text>

        {/* Rectangle */}
        <rect x="425" y="80" width="120" height="90" fill="#ECFDF5" stroke="#059669" strokeWidth="2.5" />
        <line x1="425" y1="80" x2="545" y2="170" stroke="#34D399" strokeWidth="1.4" strokeDasharray="4 4" />
        <line x1="545" y1="80" x2="425" y2="170" stroke="#34D399" strokeWidth="1.4" strokeDasharray="4 4" />
        <rect x="425" y="158" width="12" height="12" fill="none" stroke="#059669" strokeWidth="1.5" />
        <text x="485" y="205" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Rectangle</text>
        <text x="485" y="222" textAnchor="middle" fill="#475569" fontSize="10">Each vertex angle = 90°</text>
        <text x="485" y="236" textAnchor="middle" fill="#475569" fontSize="10">Equal diagonals (d₁ = d₂)</text>

        {/* Trapezium */}
        <polygon points="585,175 610,80 675,80 700,175" fill="#FFFBEB" stroke="#D97706" strokeWidth="2.5" />
        <line x1="610" y1="80" x2="610" y2="175" stroke="#D97706" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="617" y="132" fill="#B45309" fontSize="11" fontWeight="700">h</text>
        <text x="642" y="72" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="700">a</text>
        <text x="642" y="191" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="700">b</text>
        <text x="642" y="208" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Trapezium</text>
        <text x="642" y="224" textAnchor="middle" fill="#475569" fontSize="10">1 pair opp. sides parallel</text>
        <text x="642" y="238" textAnchor="middle" fill="#475569" fontSize="10">Area = ½(a + b) × h</text>
      </svg>
    );
  }

  if (figureType === 'trapezium_area_derivation') {
    return (
      <svg viewBox="0 0 720 250" className={className} role="img" aria-label="Area of Trapezium and General Polygon Triangulation">
        <rect width="720" height="250" rx="14" fill="#F8FAFC" />
        <text x="360" y="26" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Area Derivation: Splitting Trapezium &amp; Irregular Polygons into Triangles
        </text>

        {/* Trapezium split by diagonal */}
        <polygon points="80,190 125,75 245,75 295,190" fill="#EEF2FF" stroke="#1E3A8A" strokeWidth="2.5" />
        <line x1="80" y1="190" x2="245" y2="75" stroke="#4F46E5" strokeWidth="2" strokeDasharray="5 4" />
        <line x1="125" y1="75" x2="125" y2="190" stroke="#059669" strokeWidth="1.8" strokeDasharray="3 3" />
        <rect x="125" y="178" width="12" height="12" fill="none" stroke="#059669" strokeWidth="1.5" />
        <text x="185" y="66" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="700">Parallel Side a</text>
        <text x="187" y="210" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="700">Parallel Side b</text>
        <text x="133" y="142" fill="#059669" fontSize="12" fontWeight="700">h</text>
        <text x="150" y="115" fill="#4F46E5" fontSize="11" fontWeight="700">T₁ = ½ah</text>
        <text x="205" y="160" fill="#4F46E5" fontSize="11" fontWeight="700">T₂ = ½bh</text>
        <text x="187" y="234" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
          Area = T₁ + T₂ = ½(a + b) × h
        </text>

        {/* Right: Pentagon triangulation */}
        <polygon points="440,185 415,110 515,58 615,110 590,185" fill="#F5F3FF" stroke="#5B21B6" strokeWidth="2.5" />
        <line x1="440" y1="185" x2="515" y2="58" stroke="#7C3AED" strokeWidth="1.8" strokeDasharray="5 3" />
        <line x1="440" y1="185" x2="615" y2="110" stroke="#7C3AED" strokeWidth="1.8" strokeDasharray="5 3" />
        <text x="455" y="118" fill="#5B21B6" fontSize="11" fontWeight="700">Δ₁</text>
        <text x="520" y="122" fill="#5B21B6" fontSize="11" fontWeight="700">Δ₂</text>
        <text x="548" y="162" fill="#5B21B6" fontSize="11" fontWeight="700">Δ₃</text>
        <text x="515" y="212" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
          n-sided Polygon = (n − 2) Triangles
        </text>
        <text x="515" y="232" textAnchor="middle" fill="#475569" fontSize="11">
          Interior Angle Sum = (n − 2) × 180°
        </text>
      </svg>
    );
  }

  if (figureType === 'exponents_powers_scale') {
    return (
      <svg viewBox="0 0 720 270" className={className} role="img" aria-label="Laws of Exponents and Scientific Notation Scale">
        <rect width="720" height="270" rx="14" fill="#F8FAFC" />
        <text x="360" y="26" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Power Ladder Pattern (÷ Base Each Step Down) &amp; Scientific Notation Scale
        </text>

        {/* Left: Ladder proving a^0 = 1 and a^-n = 1/a^n */}
        <rect x="28" y="46" width="315" height="204" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
        <text x="185" y="68" textAnchor="middle" fill="#312E81" fontSize="12" fontWeight="700">
          Why 10⁰ = 1 and 10⁻ⁿ = 1/10ⁿ
        </text>
        {[
          { exp: '10³', val: '= 1,000', y: 92, bg: '#EEF2FF', col: '#3730A3' },
          { exp: '10²', val: '= 100   (÷ 10)', y: 118, bg: '#EEF2FF', col: '#3730A3' },
          { exp: '10¹', val: '= 10    (÷ 10)', y: 144, bg: '#EEF2FF', col: '#3730A3' },
          { exp: '10⁰', val: '= 1     (÷ 10)', y: 170, bg: '#FEF3C7', col: '#92400E' },
          { exp: '10⁻¹', val: '= 1/10  = 0.1', y: 196, bg: '#F5F3FF', col: '#6D28D9' },
          { exp: '10⁻²', val: '= 1/10² = 0.01', y: 222, bg: '#F5F3FF', col: '#6D28D9' },
        ].map((row) => (
          <g key={row.exp}>
            <rect x="44" y={row.y - 14} width="282" height="21" rx="5" fill={row.bg} />
            <text x="64" y={row.y} fill={row.col} fontSize="12" fontWeight="700">
              {row.exp}
            </text>
            <text x="128" y={row.y} fill="#1E293B" fontSize="11.5" fontFamily="monospace" fontWeight="600">
              {row.val}
            </text>
          </g>
        ))}

        {/* Right: Scientific Notation Decimal Shift */}
        <rect x="364" y="46" width="328" height="204" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
        <text x="528" y="68" textAnchor="middle" fill="#312E81" fontSize="12" fontWeight="700">
          Standard Form: k × 10ⁿ (1 ≤ k &lt; 10)
        </text>

        <rect x="380" y="84" width="296" height="68" rx="8" fill="#ECFDF5" stroke="#A7F3D0" />
        <text x="394" y="103" fill="#065F46" fontSize="11" fontWeight="700">
          Large Number (&gt; 10): Shift Decimal LEFT → +n
        </text>
        <text x="394" y="123" fill="#0F172A" fontSize="12" fontFamily="monospace" fontWeight="700">
          150,000,000,000 = 1.5 × 10¹¹
        </text>
        <text x="394" y="140" fill="#047857" fontSize="10.5">
          11 hops left to place point right after first digit 1
        </text>

        <rect x="380" y="166" width="296" height="68" rx="8" fill="#EFF6FF" stroke="#BFDBFE" />
        <text x="394" y="185" fill="#1E40AF" fontSize="11" fontWeight="700">
          Tiny Number (&lt; 1): Shift Decimal RIGHT → −n
        </text>
        <text x="394" y="205" fill="#0F172A" fontSize="12" fontFamily="monospace" fontWeight="700">
          0.00000437 = 4.37 × 10⁻⁶
        </text>
        <text x="394" y="222" fill="#1D4ED8" fontSize="10.5">
          6 hops right to sit just after non-zero digit 4
        </text>
      </svg>
    );
  }

  if (figureType === 'algebraic_identities_area') {
    return (
      <svg viewBox="0 0 720 270" className={className} role="img" aria-label="Geometric Proof of Algebraic Identities (a+b)^2 and a^2-b^2">
        <rect width="720" height="270" rx="14" fill="#F8FAFC" />
        <text x="360" y="25" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Geometric Area Proofs: (a + b)² = a² + 2ab + b²  &amp;  a² − b² = (a + b)(a − b)
        </text>

        {/* Left: (a+b)^2 square partition */}
        <text x="165" y="48" textAnchor="middle" fill="#312E81" fontSize="12" fontWeight="700">
          Square of side (a + b)
        </text>
        {/* Top-left: a^2 */}
        <rect x="75" y="64" width="115" height="115" fill="#4F46E5" fillOpacity="0.88" stroke="#FFFFFF" strokeWidth="2" />
        <text x="132" y="126" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="700">a²</text>
        {/* Top-right: ab */}
        <rect x="190" y="64" width="60" height="115" fill="#0EA5E9" fillOpacity="0.85" stroke="#FFFFFF" strokeWidth="2" />
        <text x="220" y="126" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700">a·b</text>
        {/* Bottom-left: ab */}
        <rect x="75" y="179" width="115" height="60" fill="#0EA5E9" fillOpacity="0.85" stroke="#FFFFFF" strokeWidth="2" />
        <text x="132" y="213" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700">a·b</text>
        {/* Bottom-right: b^2 */}
        <rect x="190" y="179" width="60" height="60" fill="#F59E0B" fillOpacity="0.92" stroke="#FFFFFF" strokeWidth="2" />
        <text x="220" y="213" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700">b²</text>

        {/* Side labels */}
        <text x="132" y="59" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="700">a</text>
        <text x="220" y="59" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="700">b</text>
        <text x="64" y="124" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="700">a</text>
        <text x="64" y="212" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="700">b</text>
        <text x="162" y="258" textAnchor="middle" fill="#1E293B" fontSize="11.5" fontWeight="700">
          Total Area = a² + ab + ab + b² = a² + 2ab + b²
        </text>

        {/* Divider */}
        <line x1="348" y1="38" x2="348" y2="254" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5 5" />

        {/* Right: Difference of Squares a^2 - b^2 */}
        <text x="535" y="48" textAnchor="middle" fill="#5B21B6" fontSize="12" fontWeight="700">
          Difference of Squares: a² − b²
        </text>
        {/* Remaining L-shape split into two rectangles */}
        <rect x="415" y="64" width="120" height="115" fill="#7C3AED" fillOpacity="0.86" stroke="#FFFFFF" strokeWidth="2" />
        <text x="475" y="122" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700">
          (a − b) × a
        </text>
        <rect x="415" y="179" width="120" height="58" fill="#8B5CF6" fillOpacity="0.72" stroke="#FFFFFF" strokeWidth="2" />
        <text x="475" y="212" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
          b × (a − b)
        </text>
        {/* Removed corner b^2 */}
        <rect x="535" y="179" width="58" height="58" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="564" y="206" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="600">−b²</text>
        <text x="564" y="220" textAnchor="middle" fill="#64748B" fontSize="9.5">removed</text>

        <text x="403" y="124" textAnchor="end" fill="#334155" fontSize="11" fontWeight="700">a − b</text>
        <text x="403" y="212" textAnchor="end" fill="#334155" fontSize="11" fontWeight="700">b</text>
        <text x="475" y="59" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="700">a</text>
        <text x="535" y="258" textAnchor="middle" fill="#1E293B" fontSize="11.5" fontWeight="700">
          Shaded Area = (a − b)(a + b) = a² − b²
        </text>
      </svg>
    );
  }

  if (figureType === 'linear_coordinate_plane' || figureType === 'linear_slope') {
    return (
      <svg viewBox="0 0 720 270" className={className} role="img" aria-label="Cartesian Coordinate Plane, Four Quadrants, and Linear Graph y = 2x + 1">
        <rect width="720" height="270" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Cartesian Coordinate Plane &amp; Linear Graph (y = 2x + 1)
        </text>

        {/* Grid box left */}
        <rect x="50" y="38" width="380" height="212" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
        {/* Light grid */}
        {[90, 140, 190, 290, 340, 390].map((gx) => (
          <line key={`vx-${gx}`} x1={gx} y1="44" x2={gx} y2="244" stroke="#F1F5F9" strokeWidth="1" />
        ))}
        {[64, 94, 124, 184, 214].map((gy) => (
          <line key={`hy-${gy}`} x1="56" y1={gy} x2="424" y2={gy} stroke="#F1F5F9" strokeWidth="1" />
        ))}

        {/* Axes intersecting at Origin (240, 154) */}
        <line x1="60" y1="154" x2="420" y2="154" stroke="#334155" strokeWidth="2" />
        <line x1="240" y1="44" x2="240" y2="244" stroke="#334155" strokeWidth="2" />
        <text x="415" y="148" fill="#0F172A" fontSize="11" fontWeight="700">X</text>
        <text x="64" y="148" fill="#0F172A" fontSize="11" fontWeight="700">X&apos;</text>
        <text x="247" y="54" fill="#0F172A" fontSize="11" fontWeight="700">Y</text>
        <text x="247" y="242" fill="#0F172A" fontSize="11" fontWeight="700">Y&apos;</text>
        <text x="228" y="168" fill="#475569" fontSize="10.5" fontWeight="700">O(0,0)</text>

        {/* Quadrant labels */}
        <text x="355" y="64" fill="#64748B" fontSize="10.5" fontWeight="700">Q-I (+, +)</text>
        <text x="95" y="64" fill="#64748B" fontSize="10.5" fontWeight="700">Q-II (−, +)</text>
        <text x="95" y="234" fill="#64748B" fontSize="10.5" fontWeight="700">Q-III (−, −)</text>
        <text x="355" y="234" fill="#64748B" fontSize="10.5" fontWeight="700">Q-IV (+, −)</text>

        {/* Line y = 2x + 1: 1 unit x = 40px, 1 unit y = 22px */}
        {/* Points: (-1,-1) -> (200,176); (0,1) -> (240,132); (1,3) -> (280,88); (2,5) -> (320,44) */}
        <line x1="170" y1="209" x2="320" y2="44" stroke="#4F46E5" strokeWidth="3" />
        {/* Slope triangle between (0,1) and (1,3) */}
        <line x1="240" y1="132" x2="280" y2="132" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" />
        <line x1="280" y1="132" x2="280" y2="88" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" />
        <text x="260" y="145" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="700">Δx = 1</text>
        <text x="303" y="114" fill="#047857" fontSize="10" fontWeight="700">Δy = 2</text>

        {/* Plotted Points */}
        {[
          { cx: 200, cy: 176, lbl: '(-1,-1)' },
          { cx: 240, cy: 132, lbl: '(0,1)' },
          { cx: 280, cy: 88, lbl: '(1,3)' },
        ].map((pt) => (
          <g key={pt.lbl}>
            <circle cx={pt.cx} cy={pt.cy} r="4.5" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x={pt.cx - 8} y={pt.cy - 8} textAnchor="end" fill="#4338CA" fontSize="10.5" fontWeight="700">
              {pt.lbl}
            </text>
          </g>
        ))}

        {/* Right Info Box */}
        <rect x="448" y="38" width="244" height="212" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
        <text x="570" y="62" textAnchor="middle" fill="#1E1B4B" fontSize="12" fontWeight="700">
          Coordinate Graph Rules
        </text>
        <text x="464" y="88" fill="#334155" fontSize="11" fontWeight="600">• Abscissa = x-coordinate</text>
        <text x="464" y="108" fill="#334155" fontSize="11" fontWeight="600">• Ordinate = y-coordinate</text>
        <text x="464" y="132" fill="#4338CA" fontSize="11" fontWeight="700">• On X-axis: y = 0  → (x, 0)</text>
        <text x="464" y="152" fill="#4338CA" fontSize="11" fontWeight="700">• On Y-axis: x = 0  → (0, y)</text>
        <rect x="464" y="170" width="212" height="62" rx="8" fill="#EEF2FF" stroke="#C7D2FE" />
        <text x="570" y="191" textAnchor="middle" fill="#312E81" fontSize="11.5" fontWeight="700">
          Slope m = Δy / Δx
        </text>
        <text x="570" y="211" textAnchor="middle" fill="#4F46E5" fontSize="11" fontFamily="monospace" fontWeight="700">
          m = (3 − 1) / (1 − 0) = 2
        </text>
      </svg>
    );
  }

  if (figureType === 'commercial_math_flow') {
    return (
      <svg viewBox="0 0 720 245" className={className} role="img" aria-label="Commercial Maths Price Flow: Cost Price, Marked Price, Discount, Selling Price, and GST">
        <rect width="720" height="245" rx="14" fill="#F8FAFC" />
        <text x="360" y="26" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Commercial Pricing Chain: Effective CP → MP → Discount → SP → Final GST Bill
        </text>

        {/* CP Box */}
        <rect x="30" y="60" width="140" height="92" rx="10" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
        <text x="100" y="84" textAnchor="middle" fill="#312E81" fontSize="12" fontWeight="700">Effective CP</text>
        <text x="100" y="104" textAnchor="middle" fill="#475569" fontSize="10.5">Buy Price + Overheads</text>
        <text x="100" y="132" textAnchor="middle" fill="#4338CA" fontSize="11" fontWeight="700">Base for Profit/Loss%</text>

        {/* Arrow CP -> SP */}
        <line x1="170" y1="106" x2="215" y2="106" stroke="#059669" strokeWidth="2.5" />
        <polygon points="215,101 224,106 215,111" fill="#059669" />
        <text x="196" y="95" textAnchor="middle" fill="#047857" fontSize="9.5" fontWeight="700">+Profit%</text>

        {/* MP Box (top) */}
        <rect x="260" y="42" width="160" height="58" rx="10" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
        <text x="340" y="65" textAnchor="middle" fill="#92400E" fontSize="12" fontWeight="700">Marked Price (MP)</text>
        <text x="340" y="84" textAnchor="middle" fill="#B45309" fontSize="10.5">Base for Discount%</text>

        {/* Arrow MP down to SP */}
        <line x1="340" y1="100" x2="340" y2="128" stroke="#D97706" strokeWidth="2" />
        <polygon points="335,126 340,134 345,126" fill="#D97706" />
        <text x="385" y="120" fill="#B45309" fontSize="10" fontWeight="700">−Discount%</text>

        {/* SP Box */}
        <rect x="228" y="136" width="210" height="72" rx="10" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
        <text x="333" y="160" textAnchor="middle" fill="#065F46" fontSize="12" fontWeight="700">Net Selling Price (SP)</text>
        <text x="333" y="178" textAnchor="middle" fill="#047857" fontSize="10.5">SP = MP × (100 − d%) / 100</text>
        <text x="333" y="195" textAnchor="middle" fill="#065F46" fontSize="10" fontWeight="700">Base for Tax / GST%</text>

        {/* Arrow SP -> Invoice */}
        <line x1="438" y1="172" x2="495" y2="172" stroke="#7C3AED" strokeWidth="2.5" />
        <polygon points="495,167 505,172 495,177" fill="#7C3AED" />
        <text x="470" y="162" textAnchor="middle" fill="#6D28D9" fontSize="10" fontWeight="700">+GST%</text>

        {/* Final Bill Box */}
        <rect x="508" y="130" width="182" height="82" rx="10" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2" />
        <text x="599" y="156" textAnchor="middle" fill="#4C1D95" fontSize="12" fontWeight="700">Final Customer Bill</text>
        <text x="599" y="176" textAnchor="middle" fill="#5B21B6" fontSize="10.5">SP × (100 + GST%) / 100</text>
        <text x="599" y="196" textAnchor="middle" fill="#6D28D9" fontSize="10">Tax always applied LAST</text>

        <text x="360" y="232" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
          Golden Rule: Never mix bases! Profit% uses CP, Discount% uses MP, and GST% uses Discounted SP.
        </text>
      </svg>
    );
  }

  if (figureType === 'polygon_angles_sum') {
    return (
      <svg viewBox="0 0 720 245" className={className} role="img" aria-label="Exterior Angle Sum 360 Degrees and Regular Polygon Formulas">
        <rect width="720" height="245" rx="14" fill="#F8FAFC" />
        <text x="360" y="25" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          Polygon Angle Geometry: Exterior Angles Always Sum to 360°
        </text>

        {/* Regular Hexagon with extended sides showing exterior angles */}
        <polygon points="150,70 220,70 255,130 220,190 150,190 115,130" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2.5" />
        {/* Extended sides clockwise */}
        <line x1="220" y1="70" x2="270" y2="70" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" />
        <line x1="255" y1="130" x2="280" y2="173" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" />
        <line x1="220" y1="190" x2="170" y2="190" stroke="#D97706" strokeWidth="2" />
        <line x1="150" y1="190" x2="105" y2="190" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" />
        <line x1="115" y1="130" x2="90" y2="87" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" />

        <text x="185" y="132" textAnchor="middle" fill="#312E81" fontSize="12" fontWeight="700">Regular Hexagon</text>
        <text x="185" y="149" textAnchor="middle" fill="#4338CA" fontSize="10.5">(n = 6 sides)</text>
        <text x="242" y="62" fill="#B45309" fontSize="11" fontWeight="700">e = 60°</text>
        <text x="185" y="92" textAnchor="middle" fill="#1E3A8A" fontSize="11" fontWeight="700">i = 120°</text>
        <text x="185" y="224" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
          Linear Pair at every vertex: i + e = 180°
        </text>

        {/* Formula box right */}
        <rect x="345" y="48" width="345" height="174" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
        <text x="517" y="72" textAnchor="middle" fill="#1E1B4B" fontSize="12.5" fontWeight="700">
          Universal Polygon Angle Laws (n sides)
        </text>
        <text x="364" y="100" fill="#334155" fontSize="11.5" fontWeight="600">
          1. Sum of Interior Angles = (n − 2) × 180°
        </text>
        <text x="364" y="124" fill="#334155" fontSize="11.5" fontWeight="600">
          2. Sum of Exterior Angles = 360° (ALL convex n-gons)
        </text>
        <text x="364" y="148" fill="#4338CA" fontSize="11.5" fontWeight="700">
          3. Regular Exterior Angle e = 360° / n
        </text>
        <text x="364" y="172" fill="#4338CA" fontSize="11.5" fontWeight="700">
          4. Number of Sides n = 360° / e
        </text>
        <text x="364" y="196" fill="#6D28D9" fontSize="11.5" fontWeight="700">
          5. Total Diagonals = n(n − 3) / 2
        </text>
      </svg>
    );
  }

  if (figureType === 'mensuration_3d_solids') {
    return (
      <svg viewBox="0 0 720 265" className={className} role="img" aria-label="3D Mensuration Solids: Cuboid, Cube, and Unrolled Right Circular Cylinder">
        <rect width="720" height="265" rx="14" fill="#F8FAFC" />
        <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="700">
          3D Mensuration: Cube, Cuboid &amp; Cylinder Curved-Surface Net (2πr × h)
        </text>

        {/* Left: Cuboid */}
        <polygon points="40,175 40,95 140,95 140,175" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
        <polygon points="40,95 70,70 170,70 140,95" fill="#C7D2FE" stroke="#4F46E5" strokeWidth="2" />
        <polygon points="140,95 170,70 170,150 140,175" fill="#A5B4FC" stroke="#4F46E5" strokeWidth="2" />
        <text x="90" y="191" textAnchor="middle" fill="#312E81" fontSize="11" fontWeight="700">l</text>
        <text x="163" y="168" fill="#312E81" fontSize="11" fontWeight="700">b</text>
        <text x="29" y="138" fill="#312E81" fontSize="11" fontWeight="700">h</text>
        <text x="105" y="214" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Cuboid (l, b, h)</text>
        <text x="105" y="232" textAnchor="middle" fill="#475569" fontSize="10.5">LSA = 2(l + b)h | V = lbh</text>

        {/* Middle: Right Circular Cylinder */}
        <ellipse cx="290" cy="78" rx="48" ry="14" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="2" />
        <line x1="242" y1="78" x2="242" y2="178" stroke="#7C3AED" strokeWidth="2" />
        <line x1="338" y1="78" x2="338" y2="178" stroke="#7C3AED" strokeWidth="2" />
        <path d="M242,178 A48,14 0 0,0 338,178" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
        <path d="M242,178 A48,14 0 0,1 338,178" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="290" y1="78" x2="338" y2="78" stroke="#4C1D95" strokeWidth="1.8" />
        <text x="314" y="73" textAnchor="middle" fill="#4C1D95" fontSize="11" fontWeight="700">r</text>
        <text x="350" y="132" fill="#4C1D95" fontSize="11" fontWeight="700">h</text>
        <text x="290" y="214" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Cylinder (r, h)</text>
        <text x="290" y="232" textAnchor="middle" fill="#475569" fontSize="10.5">CSA = 2πrh | V = πr²h</text>

        {/* Arrow unrolling */}
        <line x1="368" y1="128" x2="412" y2="128" stroke="#059669" strokeWidth="2.5" />
        <polygon points="412,123 422,128 412,133" fill="#059669" />
        <text x="394" y="118" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="700">Unroll</text>

        {/* Right: Unrolled Cylinder Net */}
        <circle cx="555" cy="64" r="18" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.8" />
        <text x="555" y="68" textAnchor="middle" fill="#4C1D95" fontSize="10" fontWeight="700">πr²</text>
        <rect x="445" y="88" width="220" height="84" rx="4" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
        <text x="555" y="126" textAnchor="middle" fill="#065F46" fontSize="12.5" fontWeight="700">
          Curved Wall = 2πr × h
        </text>
        <text x="555" y="144" textAnchor="middle" fill="#047857" fontSize="10.5">
          Rectangle of circumference 2πr &amp; height h
        </text>
        <circle cx="555" cy="196" r="18" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.8" />
        <text x="555" y="200" textAnchor="middle" fill="#4C1D95" fontSize="10" fontWeight="700">πr²</text>
        <text x="555" y="234" textAnchor="middle" fill="#0F172A" fontSize="11.5" fontWeight="700">
          TSA = 2πrh + 2πr² = 2πr(r + h)
        </text>
      </svg>
    );
  }

  // Default / rational_number_line vector diagram with Density Zoom Interval
  return (
    <svg viewBox="0 0 720 220" className={className} role="img" aria-label="Rational Number Line and Density Interval Zoom">
      <rect width="720" height="220" rx="14" fill="#F8FAFC" />
      <text x="360" y="24" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
        Rational Number Line &amp; Density Property (Zoom on [0, 1] Sub-Divided into Quarters)
      </text>

      {/* Main Number Line */}
      <line x1="45" y1="80" x2="675" y2="80" stroke="#1E3A8A" strokeWidth="2.5" />
      <polygon points="45,75 35,80 45,85" fill="#1E3A8A" />
      <polygon points="675,75 685,80 675,85" fill="#1E3A8A" />

      {[-2, -1, 0, 1, 2].map((n, i) => {
        const x = 120 + i * 120;
        return (
          <g key={n}>
            <line x1={x} y1="68" x2={x} y2="92" stroke="#1E3A8A" strokeWidth="2" />
            <text x={x} y="112" textAnchor="middle" fill="#0F172A" fontSize="12.5" fontWeight="700">
              {n}
            </text>
          </g>
        );
      })}
      {/* Highlight -7/4 and 3/4 */}
      <circle cx="150" cy="80" r="5" fill="#DC2626" />
      <text x="150" y="57" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="700">−7/4 (−1¾)</text>
      <circle cx="450" cy="80" r="5" fill="#7C3AED" />
      <text x="450" y="57" textAnchor="middle" fill="#6D28D9" fontSize="11" fontWeight="700">3/4</text>

      {/* Zoom lines from [0, 1] (360..480) to bottom interval (160..560) */}
      <line x1="360" y1="86" x2="160" y2="152" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 3" />
      <line x1="480" y1="86" x2="560" y2="152" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 3" />

      {/* Zoomed [0, 1] sub-divided into 8ths */}
      <line x1="160" y1="160" x2="560" y2="160" stroke="#4F46E5" strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((k) => {
        const x = 160 + k * 50;
        const lbl = k === 0 ? '0' : k === 8 ? '1' : k % 4 === 0 ? `${k / 4}/2` : k % 2 === 0 ? `${k / 2}/4` : `${k}/8`;
        return (
          <g key={k}>
            <line x1={x} y1="150" x2={x} y2="170" stroke="#4F46E5" strokeWidth={k % 2 === 0 ? 2 : 1.3} />
            <text x={x} y="188" textAnchor="middle" fill={k % 2 === 0 ? '#312E81' : '#64748B'} fontSize="11" fontWeight={k % 2 === 0 ? '700' : '500'}>
              {lbl}
            </text>
          </g>
        );
      })}
      <text x="360" y="208" textAnchor="middle" fill="#475569" fontSize="10.5">
        Subdividing into 8 parts places 7 rational points inside [0, 1]; subdividing into 1,000 parts places 999!
      </text>
    </svg>
  );
};
