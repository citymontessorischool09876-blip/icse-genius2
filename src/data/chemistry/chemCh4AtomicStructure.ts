import { Chapter } from '../../types';

export const CHEM_CH4_ATOMIC_STRUCTURE: Chapter = {
  id: 'chem-ch1',
  subjectId: 'chemistry',
  chapterNumber: 4,
  title: 'Atomic Structure',
  subtitle: 'Dalton\'s atomic theory, subatomic particles (electron, proton, neutron), Thomson, Rutherford & Bohr atomic models, Atomic Number (Z), Mass Number (A), 2n² electronic configuration (Z = 1–20), isotopes, and ionic vs covalent bonding',
  term: 'Half-Yearly',
  estimatedMinutes: 95,
  notes: {
    introduction: `Cut a ribbon of pure silver thinner and thinner until you reach a single microscopic particle that still behaves chemically as silver—that ultimate building block is an **atom** (from Greek *atomos*, meaning "indivisible"). In 1808, English schoolteacher **John Dalton** proposed that atoms were solid, unbreakable billiard balls. Yet within a single century, dazzling experiments with cathode-ray glass tubes, radioactive alpha beams, and glowing emission spectra shattered Dalton's indivisible sphere—revealing a miniature solar system hidden inside every atom!

Every atom consists of an unimaginably tiny, ultra-dense positively charged **nucleus** packed with **protons ($p^+$)** and neutral **neutrons ($n^0$)**, orbited by ultra-light negatively charged **electrons ($e^-$)** spinning within quantised energy shells ($K, L, M, N$). Even more remarkably, the simple arrangement of electrons in the outermost shell dictates **everything about chemistry**: why sodium explodes in water, why neon refuses to react at all, why salt forms hard crystals, and why water molecules stick together!

In Chapter 4 of Class 8 ICSE Chemistry (*Gem's Chemistry / Concise Chemistry*), we trace the discovery of **electrons, protons, and neutrons**, follow the leap from **J.J. Thomson** and **Rutherford's gold-foil experiment** to **Niels Bohr's planetary shells**, master **Atomic Number ($Z$)**, **Mass Number ($A$)**, **Bohr–Bury $2n^2$ electronic configurations for elements $Z = 1\\text{ to }20$**, **isotopes**, and both **electrovalent (ionic)** and **covalent** chemical bonding!`,
    learningObjectives: [
      'State Dalton\'s Atomic Theory postulates alongside the two major limitations uncovered by modern science (subatomic divisibility & isotopes).',
      'Compare Electron, Proton, and Neutron across symbol, discoverer, relative charge, actual charge, and relative atomic mass.',
      'Explain Rutherford\'s α-particle gold-foil scattering experiment (3 observations & 3 conclusions) and Niels Bohr\'s quantised stationary shell model.',
      'Calculate protons, electrons, and neutrons from Atomic Number (Z) and Mass Number (A = Z + n), and define Isotopes with protium/deuterium/tritium and carbon/chlorine examples.',
      'Write complete K, L, M, N shell configurations for the first 20 elements (Hydrogen to Calcium) obeying both 2n² and outermost-shell ≤ 8 rules.',
      'Determine valency from valence electrons and explain Electrovalent/Ionic bonding (NaCl, MgCl₂, CaO) vs Covalent bonding (H₂, Cl₂, H₂O, CH₄).'
    ],
    topics: [
      {
        id: 'chem-ch4-t1',
        title: '1. Dalton\'s Theory & Discovery of Subatomic Particles',
        content: `In 1808, **John Dalton** stated that: (i) all matter consists of indivisible **atoms**; (ii) atoms of a given element have identical mass and properties, whereas different elements have different atomic masses; and (iii) atoms combine in simple whole-number ratios to form molecules. While whole-number combination remains true, cathode-ray and radioactivity discoveries proved atoms **are divisible** into three fundamental **subatomic particles**—and **isotopes** proved atoms of the same element can differ slightly in mass!`,
        subtopics: [
          {
            subheading: '1.1 Electron, Proton & Neutron: Properties & Discoverers',
            body: `1. **Electron ($e^-$ or $_{-1}e^0$) — J.J. Thomson (1897)**: Discovered in low-pressure cathode-ray discharge tubes (rays deflected toward the positive anode). Carries **$-1$ unit relative charge** ($-1.6 \\times 10^{-19}\\text{ C}$) and practically negligible mass (**$\\frac{1}{1840}\\text{ amu}$**). Orbits outside the nucleus.
2. **Proton ($p^+$ or $_1p^1$) — E. Goldstein (1886 anode/canal rays; nucleus named by Rutherford)**: Carries **$+1$ unit relative charge** ($+1.6 \\times 10^{-19}\\text{ C}$) and **$1\\text{ amu}$** relative mass ($1.672 \\times 10^{-27}\\text{ kg}$). Resides tightly inside the central nucleus.
3. **Neutron ($n^0$ or $_0n^1$) — James Chadwick (1932)**: Electrically **neutral ($0$ charge)** with relative mass **$1\\text{ amu}$** ($1.675 \\times 10^{-27}\\text{ kg}$). Resides inside the nucleus alongside protons (**except ordinary Hydrogen $^{1}_{1}\\text{H}$, which has ZERO neutrons!**). Together, protons + neutrons are called **Nucleons**.

**Why Every Atom Is Electrically Neutral**: In a neutral atom, $\\text{Number of Protons } (+1\\text{ each}) = \\text{Number of Electrons } (-1\\text{ each})$, making net charge **zero**!`,
            keyPoint: 'Ordinary Hydrogen (Protium, ¹H₁) is the ONLY stable atom in the periodic table that has NO neutrons (1 proton, 1 electron, 0 neutrons)!'
          }
        ],
        comparisonTable: {
          caption: 'Fundamental Subatomic Particles Comparison',
          headers: ['Particle', 'Symbol & Discoverer', 'Location', 'Relative Charge', 'Relative Mass (amu)'],
          rows: [
            ['Electron', '$e^-$ — J.J. Thomson (1897)', 'Outside nucleus in shells', '$-1$ ($-1.6 \\times 10^{-19}\\text{ C}$)', '$\\approx 1/1840$ (negligible)'],
            ['Proton', '$p^+$ — E. Goldstein (1886)', 'Inside central nucleus', '$+1$ ($+1.6 \\times 10^{-19}\\text{ C}$)', '$1\\text{ amu}$ ($1.672 \\times 10^{-27}\\text{ kg}$)'],
            ['Neutron', '$n^0$ — James Chadwick (1932)', 'Inside central nucleus', '$0$ (Neutral)', '$1\\text{ amu}$ ($1.675 \\times 10^{-27}\\text{ kg}$)']
          ]
        },
        definitions: [
          { term: 'Nucleus', definition: 'Extremely tiny, dense, positively charged central core of an atom containing protons and neutrons.' },
          { term: 'Nucleons', definition: 'Collective name for protons and neutrons located inside the atomic nucleus.' }
        ],
        realLifeExample: 'If an entire cricket stadium represents the full diameter of one carbon atom, its central **nucleus** is no larger than a single marble resting at the pitch centre—meaning over 99.999% of solid steel is actually empty atomic space!',
        commonMistakes: [
          {
            mistake: 'Writing that J.J. Thomson discovered protons or that protons orbit around electrons.',
            correction: 'Thomson discovered **electrons**; Goldstein discovered **anode rays (protons)**; Chadwick discovered **neutrons**. Protons & neutrons ALWAYS stay anchored inside the nucleus; only electrons revolve outside!'
          }
        ]
      },
      {
        id: 'chem-ch4-t2',
        title: '2. Atomic Models: Thomson, Rutherford & Niels Bohr + Z, A & Isotopes',
        content: `Once physicists proved atoms contained positive and negative charges, they needed a blueprint showing how those charges sit together without collapsing!`,
        subtopics: [
          {
            subheading: '2.1 From Plum-Pudding to Rutherford\'s Gold-Foil Breakthrough & Bohr Shells',
            body: `- **Thomson's Plum-Pudding Model (1904)**: Pictured an atom as a positive sphere embedded uniformly with negative electrons like raisins inside a Christmas pudding—soon disproved by Rutherford!
- **Rutherford's Alpha-Scattering Gold Foil Experiment (1911)**: Bombarded ultra-thin gold foil ($\\sim 100\\text{ nm}$) with fast $+2$ charged $\\alpha$-particles:
  1. **Most $\\alpha$-particles passed straight through undeflected** $\\implies$ **Most of an atom is empty space!**
  2. **A few deflected through small/large angles** $\\implies$ Centre contains a **positively charged** region repelling $+\\alpha$-particles.
  3. **Only ~1 in 12,000 bounced straight back $180^\\circ$** $\\implies$ Virtually the entire positive charge and mass sit packed inside an **ultra-tiny, dense central Nucleus**!
  *(Limitation: Maxwell's physics predicted orbiting accelerating electrons would radiate energy and spiral into the nucleus in $10^{-8}\\text{ s}$!)*
- **Niels Bohr's Planetary Shell Model (1913)**: Solved the spiral paradox! Electrons revolve ONLY in specific fixed **discrete stationary orbits (energy shells)** labelled **$K, L, M, N$** ($n = 1, 2, 3, 4$) without radiating energy while staying in one shell; energy is emitted or absorbed only when jumping between shells.`,
            keyPoint: 'Rutherford discovered the Nucleus; Niels Bohr introduced fixed energy shells (K, L, M, N) explaining atomic stability!'
          },
          {
            subheading: '2.2 Atomic Number (Z), Mass Number (A) & Isotopes',
            body: `- **Atomic Number ($Z$)**: Total number of **protons** in the nucleus of an atom ($= \\text{electrons}$ in a neutral atom). **$Z$ uniquely identifies the element** (every atom with $Z = 6$ is Carbon)!
- **Mass Number ($A$)**: Total number of **protons + neutrons (nucleons)** inside the nucleus:
$$A = Z + n \\quad \\implies \\quad \\text{Neutrons } (n) = A - Z$$
Written symbolically as $^{A}_{Z}X$ (e.g., $^{23}_{11}\\text{Na}$ has $11\\,p^+$, $11\\,e^-$, and $23 - 11 = 12\\,n^0$).
- **Isotopes**: Atoms of the **same element** having the **same Atomic Number ($Z$)** (identical protons & electrons $\\to$ **identical chemical properties!**) but **different Mass Numbers ($A$)** due to differing **neutrons**:
  - **Hydrogen Isotopes**: **Protium** ($^1_1\\text{H}$: $0\\,n^0$), **Deuterium** ($^2_1\\text{H}$ or $\\text{D}$: $1\\,n^0$, heavy water $\\text{D}_2\\text{O}$), **Tritium** ($^3_1\\text{H}$ or $\\text{T}$: $2\\,n^0$, radioactive).
  - **Chlorine Isotopes**: $^{35}_{17}\\text{Cl}$ ($75\\%$) and $^{37}_{17}\\text{Cl}$ ($25\\%$), yielding average atomic mass $35.5\\text{ amu}$!
  - **Carbon Isotopes**: $^{12}_6\\text{C}$ ($6\\,n^0$) and $^{14}_6\\text{C}$ ($8\\,n^0$, used in **archaeological carbon dating**!).`,
            keyPoint: 'Isotopes have SAME Z (same chemical reactions!) and DIFFERENT neutrons (different mass & density!).'
          }
        ],
        diagram: {
          id: 'diag-chem-atomic-bohr',
          title: 'Bohr Shell Diagrams ($Z = 1$ to $20$) & Sodium–Chlorine Ionic Transfer',
          caption: 'Nucleon nucleus notation ($^A_Z X$), Bohr–Bury shell capacities ($K=2, L=8, M=8/18$), and electron transfer from Na ($2,8,1$) to Cl ($2,8,7$).',
          svgFigure: 'chem_atomic_bohr'
        },
        definitions: [
          { term: 'Atomic Number (Z)', definition: 'Number of protons in the nucleus of an atom; defines the chemical identity of the element.' },
          { term: 'Mass Number (A)', definition: 'Sum of protons and neutrons (nucleons) in the nucleus ($A = Z + n$).' },
          { term: 'Isotopes', definition: 'Atoms of the same element sharing identical Atomic Number Z (identical chemical behaviour) but different Mass Numbers A due to different neutron counts.' }
        ],
        formulas: [
          { formula: 'A = Z + n   ⇒   Neutrons (n) = A − Z', explanation: 'Calculates neutrons directly from Mass Number A and Atomic Number Z.' }
        ],
        realLifeExample: 'Nuclear medicine doctors inject tiny safe traces of **Cobalt-60** (for cancer radiotherapy) and **Iodine-131** (to scan thyroid gland uptake)—two classic life-saving **radioactive isotopes**!',
        commonMistakes: [
          {
            mistake: 'Confusing **chemical behaviour** of two isotopes (thinking $^{37}\\text{Cl}$ reacts differently from $^{35}\\text{Cl}$).',
            correction: 'Chemical reactions depend strictly on **electrons ($Z$)**, NOT neutrons! Both isotopes of Chlorine have identical configuration $(2, 8, 7)$ and identical chemical reactions!'
          }
        ]
      },
      {
        id: 'chem-ch4-t3',
        title: '3. Bohr–Bury Electronic Configuration (Z = 1 to 20) & Valency',
        content: `Electrons do not pile randomly into shells; they fill inner low-energy shells first according to two strict **Bohr–Bury Rules**:
1. **Maximum capacity of shell $n$ is $2n^2$**:
   - $K$-shell ($n=1$): $2(1)^2 = \\mathbf{2}$ electrons max.
   - $L$-shell ($n=2$): $2(2)^2 = \\mathbf{8}$ electrons max.
   - $M$-shell ($n=3$): $2(3)^2 = \\mathbf{18}$ electrons max.
   - $N$-shell ($n=4$): $2(4)^2 = \\mathbf{32}$ electrons max.
2. **Outermost Shell Octet Limit**: The **outermost (valence) shell can NEVER hold more than 8 electrons** (even in $M$ or $N$!). Therefore, Potassium ($Z=19$) fills **$2, 8, 8, 1$** and Calcium ($Z=20$) fills **$2, 8, 8, 2$** rather than putting 9 or 10 into $M$!`,
        subtopics: [
          {
            subheading: '3.1 Complete Configuration Table (Z = 1 to 20) & Finding Valency',
            body: `Atoms seek a completely filled **stable duplet** (2 electrons in $K$-shell like Helium) or **stable octet** (8 electrons in outermost shell like Neon $2,8$ or Argon $2,8,8$). **Valency** is the number of valence electrons an atom **loses, gains, or shares** to achieve that octet:
- **1, 2, or 3 Valence Electrons (Metals — Na, Mg, Al, K, Ca)**: Lose 1, 2, or 3 electrons $\\to$ **Positive ions (Cations)** with Valency **+1, +2, +3**.
- **4 Valence Electrons (C, Si)**: Share 4 electrons cleanly (Covalent) $\\to$ Valency **4**.
- **5, 6, or 7 Valence Electrons (Non-Metals — N, P, O, S, F, Cl)**: Gain $(8 - v)$ electrons ($3, 2, 1$) $\\to$ **Negative ions (Anions)** with Valency **−3, −2, −1** (or share electrons).
- **8 Valence Electrons (or 2 in He — Noble Gases)**: Completely stable! Valency = **0**.`,
            keyPoint: 'Formula Check: Potassium (19) = 2, 8, 8, 1 (NOT 2, 8, 9!) and Calcium (20) = 2, 8, 8, 2 (NOT 2, 8, 10!) because the outermost shell NEVER exceeds 8 electrons!'
          }
        ],
        comparisonTable: {
          caption: 'First 20 Elements: Electronic Configuration (K, L, M, N) & Valency',
          headers: ['Z & Element', 'Configuration (K,L,M,N)', 'Valence e⁻ / Valency', 'Category'],
          rows: [
            ['1 H / 2 He', '1  /  2', '1 (Val 1)  /  2 (Val 0)', 'Non-metal / Noble gas (Duplet)'],
            ['3 Li / 4 Be / 5 B', '2,1 / 2,2 / 2,3', '1 (+1) / 2 (+2) / 3 (3)', 'Metals / Metalloid (B)'],
            ['6 C / 7 N / 8 O / 9 F / 10 Ne', '2,4 / 2,5 / 2,6 / 2,7 / 2,8', '4 (4) / 5 (−3) / 6 (−2) / 7 (−1) / 8 (0)', 'Non-metals / Neon (Octet)'],
            ['11 Na / 12 Mg / 13 Al', '2,8,1 / 2,8,2 / 2,8,3', '1 (+1) / 2 (+2) / 3 (+3)', 'Reactive Metals'],
            ['14 Si / 15 P / 16 S / 17 Cl / 18 Ar', '2,8,4 / 2,8,5 / 2,8,6 / 2,8,7 / 2,8,8', '4 (4) / 5 (−3) / 6 (−2) / 7 (−1) / 8 (0)', 'Metalloid / Non-metals / Argon'],
            ['19 K / 20 Ca', '2,8,8,1  /  2,8,8,2', '1 (+1)  /  2 (+2)', 'Alkali / Alkaline-Earth Metals']
          ]
        },
        definitions: [
          { term: 'Valence Shell & Valence Electrons', definition: 'The outermost occupied electron shell of an atom and the electrons residing in it, which govern chemical bonding.' },
          { term: 'Octet Rule', definition: 'Tendency of atoms to attain a stable configuration of 8 electrons in their outermost shell (or 2 in K-shell for H/He/Li) by losing, gaining, or sharing electrons.' },
          { term: 'Valency', definition: 'Combining capacity of an atom, equal to the number of electrons lost, gained, or shared to complete a stable duplet or octet.' }
        ],
        formulas: [
          { formula: 'Max Shell Capacity = 2 n²', explanation: 'K(n=1): 2; L(n=2): 8; M(n=3): 18; N(n=4): 32.' }
        ],
        realLifeExample: 'Neon signs glow orange-red and Argon fills crisp incandescent light bulbs because both gases sit comfortably at a full **octet (2,8 and 2,8,8)**—refusing to corrode or burn hot tungsten filaments even at $2,500^\\circ\\text{C}$!',
        commonMistakes: [
          {
            mistake: 'Writing Chlorine ($Z=17$, config $2, 8, 7$) has a valency of $7$.',
            correction: 'Chlorine does NOT lose 7 electrons! It easily **gains 1 electron** ($8 - 7 = 1$) to complete its octet, giving **Valency = 1 (−1)**!'
          }
        ]
      },
      {
        id: 'chem-ch4-t4',
        title: '4. Chemical Bonding: Electrovalent (Ionic) vs Covalent Compounds',
        content: `Except for unreactive Noble Gases, isolated atoms are restless because their outermost shells are incomplete. Atoms lock into stable compounds through two major **chemical bonds**: **transferring electrons (Electrovalent / Ionic)** or **sharing electron pairs (Covalent)**!`,
        subtopics: [
          {
            subheading: '4.1 Electrovalent (Ionic) vs Covalent Bonding & Properties',
            body: `1. **Electrovalent / Ionic Bond (Metal + Non-Metal → Complete Electron Transfer)**:
   - Metal atom transfers 1, 2, or 3 valence electrons permanently to a non-metal atom, forming oppositely charged **Cation (+)** and **Anion (−)** bound by fierce **electrostatic attraction**!
   - **Sodium Chloride ($\\text{NaCl}$)**: $\\text{Na}(2,8,1) \\to \\text{Na}^+(2,8) + e^-$; $\\text{Cl}(2,8,7) + e^- \\to \\text{Cl}^-(2,8,8)$ $\\implies$ $\\text{Na}^+\\text{Cl}^-$.
   - **Magnesium Chloride ($\\text{MgCl}_2$)**: $\\text{Mg}(2,8,2)$ donates 1 electron each to **two** $\\text{Cl}(2,8,7)$ atoms $\\implies$ $\\text{Mg}^{2+} + 2\\text{Cl}^-$.
   - **Calcium Oxide ($\\text{CaO}$)**: $\\text{Ca}(2,8,8,2)$ gives 2 electrons to $\\text{O}(2,6)$ $\\implies$ $\\text{Ca}^{2+}\\text{O}^{2-}$.
   - *Properties*: Hard crystalline solids, very high melting/boiling points, soluble in water, **conduct electricity when molten or dissolved in water** (mobile free ions!), insoluble in petrol/kerosene.

2. **Covalent Bond (Non-Metal + Non-Metal → Mutual Electron-Pair Sharing)**:
   - When two non-metals meet, neither wants to give electrons away—so they **share** one, two, or three pairs cleanly:
     - **Single Bond (1 shared pair)**: $\\text{H}_2$ ($\\text{H}-\\text{H}$), $\\text{Cl}_2$ ($\\text{Cl}-\\text{Cl}$), $\\text{HCl}$, $\\text{H}_2\\text{O}$ (Oxygen shares 2 pairs, one with each H), $\\text{CH}_4$ (Methane: Carbon shares 4 pairs with 4 H atoms).
     - **Double Bond (2 shared pairs)**: Oxygen molecule $\\text{O}=\\text{O}$ ($\\text{O}_2$), Carbon dioxide $\\text{O}=\\text{C}=\\text{O}$ ($\\text{CO}_2$).
     - **Triple Bond (3 shared pairs)**: Nitrogen molecule $\\text{N}\\equiv\\text{N}$ ($\\text{N}_2$—making atmospheric $\\text{N}_2$ remarkably unreactive!).
   - *Properties*: Gases, volatile liquids, or soft low-m.p. solids; generally insoluble in water (soluble in organic solvents); **poor/non-conductors of electricity** (no free ions!).`,
            keyPoint: 'Ionic = Electron TRANSFER (Metal + Non-metal, conducts electricity in water/melt). Covalent = Electron SHARING (Non-metal + Non-metal, non-conductor)!'
          }
        ],
        comparisonTable: {
          caption: 'Electrovalent (Ionic) vs Covalent Compounds Compared',
          headers: ['Property', 'Electrovalent (Ionic) Compounds', 'Covalent (Molecular) Compounds'],
          rows: [
            ['Formation', '**Complete transfer** of $e^-$ (Metal $\\to$ Non-metal)', '**Mutual sharing** of $e^-$ pairs (Non-metal + Non-metal)'],
            ['Constituent Particles', 'Oppositely charged **Ions** ($\\text{Na}^+, \\text{Cl}^-$)', 'Electrically neutral **Molecules** ($\\text{CH}_4, \\text{H}_2\\text{O}$)'],
            ['Melting & Boiling Points', '**Very high** (strong electrostatic lattice)', '**Low** (weak intermolecular attraction between molecules)'],
            ['Electrical Conductivity', 'Conduct when **molten or dissolved in water**', '**Non-conductors** (no free ions)'],
            ['Solubility', 'Soluble in **water**; insoluble in organic solvents', 'Usually soluble in organic solvents (petrol/ether); often insoluble in water'],
            ['Examples', '$\\text{NaCl}, \\text{MgCl}_2, \\text{CaO}, \\text{KBr}$', '$\\text{H}_2, \\text{O}_2, \\text{N}_2, \\text{CH}_4, \\text{CO}_2, \\text{CCl}_4$']
          ]
        },
        definitions: [
          { term: 'Cation & Anion', definition: 'Cation is a positively charged ion formed by losing electrons (metals); Anion is a negatively charged ion formed by gaining electrons (non-metals).' },
          { term: 'Electrovalent (Ionic) Bond', definition: 'Strong electrostatic attraction holding oppositely charged cations and anions formed by complete electron transfer.' },
          { term: 'Covalent Bond', definition: 'Chemical bond formed by mutual sharing of one, two, or three pairs of valence electrons between non-metal atoms.' }
        ],
        realLifeExample: 'Pure distilled water ($\\text{H}_2\\text{O}$, covalent) barely conducts electricity on a circuit bulb test—add a single teaspoon of **table salt ($\\text{NaCl}$, ionic)** and the dissociated $\\text{Na}^+$ and $\\text{Cl}^-$ ions immediately light the bulb brightly!',
        commonMistakes: [
          {
            mistake: 'Writing that solid dry table salt crystals conduct electricity.',
            correction: 'In **solid** $\\text{NaCl}$ crystals, $\\text{Na}^+$ and $\\text{Cl}^-$ ions are locked tightly in place and cannot move—so dry solid salt is an insulator! It conducts ONLY when **melted or dissolved in water** so ions become mobile!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Electron ($e^-$)', definition: 'Negatively charged ($-1$) subatomic particle ($1/1840\\text{ amu}$) discovered by J.J. Thomson.', category: 'Subatomic' },
      { term: 'Proton ($p^+$)', definition: 'Positively charged ($+1$) nuclear particle ($1\\text{ amu}$) discovered via E. Goldstein canal rays.', category: 'Subatomic' },
      { term: 'Neutron ($n^0$)', definition: 'Neutral ($0$ charge) nuclear particle ($1\\text{ amu}$) discovered by James Chadwick (1932).', category: 'Subatomic' },
      { term: 'Atomic Number ($Z$)', definition: 'Number of protons in an atom\'s nucleus ($Z = p^+ = e^-$ in neutral atom).', category: 'Constants' },
      { term: 'Mass Number ($A$)', definition: 'Total number of nucleons (protons + neutrons): $A = Z + n$.', category: 'Constants' },
      { term: 'Isotopes', definition: 'Atoms of the same element with identical $Z$ (same chemical traits) but different $A$ (neutrons).', category: 'Atoms' },
      { term: 'Valency', definition: 'Electrons lost, gained, or shared to attain a stable duplet (2) or octet (8).', category: 'Shells' },
      { term: 'Cation / Anion', definition: 'Positive ion formed by electron loss / Negative ion formed by electron gain.', category: 'Bonding' },
      { term: 'Ionic Bond', definition: 'Bond formed via electron transfer from metal to non-metal ($\\text{NaCl}, \\text{CaO}$).', category: 'Bonding' },
      { term: 'Covalent Bond', definition: 'Bond formed via sharing of electron pairs between non-metals ($\\text{CH}_4, \\text{N}_2$).', category: 'Bonding' }
    ],
    formulaSheet: [
      { title: 'Mass Number & Neutrons', expression: 'A = Z + n   ⇒   n = A − Z', meaning: 'Mass number equals protons plus neutrons' },
      { title: 'Neutral Atom Balance', expression: 'Protons (p⁺) = Electrons (e⁻) = Z', meaning: 'Zero net charge in neutral ground-state atoms' },
      { title: 'Bohr–Bury Max Shell Rule', expression: 'Max electrons in shell n = 2n²', meaning: 'K=2, L=8, M=18, N=32 (outermost shell max = 8)' },
      { title: 'Sodium Ion Formation', expression: 'Na (2,8,1) → Na⁺ (2,8) + e⁻', meaning: 'Metal loses 1 valence electron to form stable cation' },
      { title: 'Chloride Ion Formation', expression: 'Cl (2,8,7) + e⁻ → Cl⁻ (2,8,8)', meaning: 'Non-metal gains 1 electron to complete octet anion' },
      { title: 'Average Chlorine Mass', expression: 'Ar = (35 × 75% + 37 × 25%) = 35.5 amu', meaning: 'Weighted average of natural ³⁵Cl and ³⁷Cl isotopes' }
    ],
    comparisonTables: [
      {
        title: 'Isotopes of Hydrogen: Protium, Deuterium & Tritium',
        headers: ['Isotope', 'Symbol', 'Protons (Z)', 'Electrons', 'Neutrons (A − Z)', 'Special Note'],
        rows: [
          ['Protium', '$^1_1\\text{H}$', '1', '1', '**0**', 'Ordinary hydrogen (~99.98%); zero neutrons!'],
          ['Deuterium', '$^2_1\\text{H}$ (D)', '1', '1', '1', 'Forms Heavy Water ($\\text{D}_2\\text{O}$) used in nuclear reactors'],
          ['Tritium', '$^3_1\\text{H}$ (T)', '1', '1', '2', 'Radioactive beta-emitting isotope']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'chem4-ex1',
        question: 'An atom is represented as $^{31}_{15}\\text{P}$. Determine its Atomic Number, Mass Number, protons, electrons, neutrons, electronic configuration, and valency.',
        steps: [
          'Atomic Number $Z = 15$ $\\implies$ Protons $= 15$, Electrons $= 15$.',
          'Mass Number $A = 31$ $\\implies$ Neutrons $= A - Z = 31 - 15 = 16$.',
          'Electronic configuration ($15\\,e^-$): $K=2, L=8, M=5$ ($2, 8, 5$).',
          'Since valence electrons $= 5$ ($>4$), atom gains $8 - 5 = 3$ electrons (or shares 3/5) $\\implies$ **Valency = 3** (Non-metal: Phosphorus).'
        ],
        finalAnswer: 'Z=15, A=31, p=15, e=15, n=16; Config = 2, 8, 5; Valency = 3.',
        keyRule: 'For 5, 6, or 7 valence electrons, Valency = 8 − (valence electrons).'
      },
      {
        id: 'chem4-ex2',
        question: 'Write the electronic configurations of Potassium ($Z = 19$) and Calcium ($Z = 20$), explaining why the 19th electron enters the N-shell instead of M-shell.',
        steps: [
          'K ($Z = 19$): $K=2, L=8$ leaves $9$ electrons.',
          'Although $M$-shell capacity by $2n^2$ is $18$, Bohr–Bury\'s second rule forbids **more than 8 electrons in the outermost shell**!',
          'Therefore, $M$ holds $8$ electrons and the 19th enters $N$: **K = 2, 8, 8, 1** (Valency $+1$).',
          'Similarly, **Ca (Z = 20) = 2, 8, 8, 2** (Valency $+2$).'
        ],
        finalAnswer: 'K: 2, 8, 8, 1; Ca: 2, 8, 8, 2 (because outermost shell never exceeds 8 e⁻).',
        keyRule: 'Always cap the temporary outermost shell at 8 electrons up through Z = 20.'
      },
      {
        id: 'chem4-ex3',
        question: 'An ion $X^{2+}$ has 10 electrons and 12 neutrons. Find the Atomic Number ($Z$) and Mass Number ($A$) of the neutral parent atom $X$, and identify element $X$.',
        steps: [
          'Because ion $X^{2+}$ formed after **losing 2 electrons**, neutral atom $X$ originally had $10 + 2 = 12$ electrons.',
          'Therefore, Protons $Z = 12$ (Element is **Magnesium, Mg**!).',
          'Mass Number $A = Z + n = 12 + 12 = 24$.'
        ],
        finalAnswer: 'Z = 12, A = 24; Element is Magnesium (²⁴₁₂Mg).',
        keyRule: 'Careful! A cation X²⁺ has 2 FEWER electrons than Z; add back +2 to find true atomic number!'
      },
      {
        id: 'chem4-ex4',
        question: 'An anion $Y^{2-}$ contains 18 electrons and 16 neutrons. Find the Mass Number ($A$) and configuration of neutral atom $Y$.',
        steps: [
          'Anion $Y^{2-}$ gained 2 extra electrons to reach 18 $\\implies$ neutral $Y$ has $18 - 2 = 16$ electrons.',
          'Thus Atomic Number $Z = 16$ (**Sulphur, S**); Configuration $= 2, 8, 6$.',
          'Mass Number $A = 16 + 16 = 32$.'
        ],
        finalAnswer: 'Z = 16 (Sulphur), A = 32, neutral configuration = 2, 8, 6.',
        keyRule: 'An anion Y²⁻ gained 2 extra electrons, so subtract 2 to find neutral Z.'
      },
      {
        id: 'chem4-ex5',
        question: 'Explain the formation of Magnesium Chloride ($\\text{MgCl}_2$) using Bohr electron-transfer notation.',
        steps: [
          'Magnesium ($Z=12$): $2, 8, 2$ needs to **lose 2 valence electrons** to become stable $\\text{Mg}^{2+}$ ($2, 8$).',
          'Chlorine ($Z=17$): $2, 8, 7$ needs **1 electron** each to become stable $\\text{Cl}^-$ ($2, 8, 8$).',
          'One $\\text{Mg}$ atom transfers 1 electron to each of **two $\\text{Cl}$ atoms**: $\\text{Mg}^{2+} + 2\\text{Cl}^- \\to \\text{MgCl}_2$ (Electrovalent/Ionic).'
        ],
        finalAnswer: 'One Mg transfers 2 e⁻ to two Cl atoms forming ionic MgCl₂.',
        keyRule: 'Total electrons lost by cations must equal total electrons gained by anions.'
      },
      {
        id: 'chem4-ex6',
        question: 'Show how Methane ($\\text{CH}_4$) and Nitrogen gas ($\\text{N}_2$) achieve stable octets/duplets via covalent sharing.',
        steps: [
          '**Methane ($\\text{CH}_4$)**: Carbon ($2, 4$) has 4 valence electrons and shares 1 electron pair separately with **4 Hydrogen atoms** ($1$ each) $\\implies$ Carbon attains an **octet (8)** and each H attains a **duplet (2)** via **4 single covalent bonds**.',
          '**Nitrogen ($\\text{N}_2$)**: Each Nitrogen ($2, 5$) needs 3 electrons, so two N atoms share **3 pairs (6 electrons)** mutually, forming a super-strong **triple covalent bond ($\\text{N}\\equiv\\text{N}$)**!'
        ],
        finalAnswer: 'CH₄ forms 4 single covalent bonds; N₂ forms 1 triple covalent bond.',
        keyRule: 'Atoms needing 1, 2, or 3 electrons between two non-metals form single, double, or triple covalent bonds respectively.'
      },
      {
        id: 'chem4-ex7',
        question: 'Two atoms are $^{16}_8\\text{O}$ and $^{18}_8\\text{O}$. Do they belong to the same element or different elements? Compare their chemical behaviour.',
        steps: [
          'Both share identical Atomic Number $Z = 8$ (8 protons, 8 electrons, config $2, 6$).',
          'They have different neutrons ($8$ vs $10$), so they are **Isotopes of Oxygen**.',
          'Because chemical reactions depend purely on valence electrons ($6$ in both), their chemical behaviour is **identical**.'
        ],
        finalAnswer: 'Same element (Isotopes of Oxygen); identical chemical properties.',
        keyRule: 'Isotopes have identical Z ⇒ identical electron shells ⇒ identical chemical reactions.'
      },
      {
        id: 'chem4-ex8',
        question: 'Why does dry solid potassium bromide ($\\text{KBr}$) not light up an electric tester bulb, while its water solution does, and pure carbon tetrachloride ($\\text{CCl}_4$) never conducts at all?',
        steps: [
          '$\\text{KBr}$ is **ionic** ($\\text{K}^+\\text{Br}^-$): in solid crystal state ions are fixed motionless; dissolving in water frees mobile $\\text{K}^+$ and $\\text{Br}^-$ ions to carry current!',
          '$\\text{CCl}_4$ is **covalent**: it contains only neutral molecules and zero free ions, so it never conducts.'
        ],
        finalAnswer: 'Aqueous KBr provides mobile free ions; solid KBr locks ions; covalent CCl₄ forms no ions.',
        keyRule: 'Electrical conduction in solutions requires **mobile free ions**!'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'chem4-e1',
          question: 'Find electrons, protons, and neutrons in an atom of Aluminium ($^{27}_{13}\\text{Al}$).',
          solutionSteps: ['Protons = 13, Electrons = 13, Neutrons = 27 − 13 = 14.'],
          finalAnswer: 'p = 13, e = 13, n = 14',
          marks: 2
        },
        {
          id: 'chem4-e2',
          question: 'Write the electronic configuration of Nitrogen ($Z = 7$), Oxygen ($Z = 8$), and Neon ($Z = 10$).',
          solutionSteps: ['N: 2, 5; O: 2, 6; Ne: 2, 8.'],
          finalAnswer: 'N (2,5), O (2,6), Ne (2,8)',
          marks: 2
        },
        {
          id: 'chem4-e3',
          question: 'Which subatomic particle is missing in ordinary Hydrogen ($^1_1\\text{H}$)?',
          solutionSteps: ['Neutrons = $A - Z = 1 - 1 = 0$.'],
          finalAnswer: 'Neutron',
          marks: 1
        },
        {
          id: 'chem4-e4',
          question: 'Name the scientists who discovered (a) Electron, (b) Neutron, and (c) Atomic Nucleus.',
          solutionSteps: ['(a) J.J. Thomson, (b) James Chadwick, (c) Ernest Rutherford.'],
          finalAnswer: 'Thomson, Chadwick, Rutherford',
          marks: 2
        }
      ],
      medium: [
        {
          id: 'chem4-m1',
          question: 'State the three main conclusions drawn from Rutherford\'s gold-foil alpha-scattering experiment.',
          solutionSteps: [
            '1. Most space inside an atom is empty (most α passed straight).',
            '2. Positive charge sits concentrated at the centre (small deflections).',
            '3. Virtually all atomic mass packs inside a tiny dense central Nucleus (1 in 12,000 bounced straight back).'
          ],
          finalAnswer: '3 conclusions stated cleanly.',
          marks: 3
        },
        {
          id: 'chem4-m2',
          question: 'Explain why Argon ($Z=18$) and Helium ($Z=2$) both have zero valency even though Argon has 8 outer electrons and Helium has 2.',
          solutionSteps: [
            'Helium\'s only shell ($K$) has maximum capacity **2 (duplet)**; Argon\'s outermost shell ($M$) holds **8 (octet)**.',
            'Both are completely stable and neither lose, gain, nor share electrons $\\implies$ Valency = 0.'
          ],
          finalAnswer: 'Complete K-duplet (He) and complete outermost octet (Ar) yield zero reactivity.',
          marks: 3
        },
        {
          id: 'chem4-m3',
          question: 'Contrast Electrovalent and Covalent compounds across (a) melting point, (b) electrical conductivity in water, and (c) constituent particles.',
          solutionSteps: [
            '(a) Ionic: high m.p.; Covalent: low m.p.',
            '(b) Ionic: conducts via free ions in water; Covalent: non-conductor.',
            '(c) Ionic: ions; Covalent: neutral molecules.'
          ],
          finalAnswer: '3-point comparison completed.',
          marks: 3
        },
        {
          id: 'chem4-m4',
          question: 'Naturally occurring Chlorine consists of 75% $^{35}\\text{Cl}$ and 25% $^{37}\\text{Cl}$. Show why its atomic mass on the Periodic Table is fractional (35.5 amu).',
          solutionSteps: ['$\\text{Average} = (35 \\times 0.75) + (37 \\times 0.25) = 26.25 + 9.25 = 35.5\\text{ amu}$.'],
          finalAnswer: '35.5 amu (weighted average of natural isotopes).',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'chem4-d1',
          question: 'Element $M$ has 3 shells and 2 electrons in its outermost shell. Element $X$ has 2 shells and 7 electrons in its outermost shell. Identify $M$ and $X$, write the bond type, and derive the compound formula.',
          solutionSteps: [
            '$M$: 3 shells ($K, L, M$) with 2 outer $e^-$ $\\implies 2, 8, 2$ ($Z=12$, **Magnesium**).',
            '$X$: 2 shells ($K, L$) with 7 outer $e^-$ $\\implies 2, 7$ ($Z=9$, **Fluorine**).',
            'Metal $M^{2+}$ transfers 2 electrons to two non-metal $X^-$ atoms $\\implies$ **Ionic compound $\\text{MX}_2$ ($\\text{MgF}_2$)**.'
          ],
          finalAnswer: 'M = Mg, X = F; Ionic bond; Formula MgF₂ (MX₂).',
          marks: 4
        },
        {
          id: 'chem4-d2',
          question: 'Why does an oxide ion ($\\text{O}^{2-}$) share the exact same electron configuration ($2, 8$) as a neutral Neon atom ($\\text{Ne}$), yet still count as Oxygen?',
          solutionSteps: [
            'Element identity depends strictly on **number of protons ($Z$) inside the nucleus**, NEVER on gained or lost outer electrons!',
            '$\\text{O}^{2-}$ still holds **8 protons ($Z=8$)** in its nucleus (Neon holds 10 protons), making it Oxygen chemically.'
          ],
          finalAnswer: 'Nuclear proton count (Z = 8) fixes element identity regardless of gained electrons.',
          marks: 4
        },
        {
          id: 'chem4-d3',
          question: 'Why did Niels Bohr introduce stationary shells, fixing the major flaw in Rutherford\'s planetary model?',
          solutionSteps: [
            'Classical electromagnetism predicted orbiting electrons constantly lose energy as radiation and spiral into the nucleus—meaning atoms should collapse instantly.',
            'Bohr postulated quantised stationary shells where orbiting electrons do NOT radiate energy, stably matching observed hydrogen line spectra.'
          ],
          finalAnswer: 'Stationary non-radiating energy levels prevented predicted atomic collapse.',
          marks: 4
        },
        {
          id: 'chem4-d4',
          question: 'State two limitations of Dalton\'s Atomic Theory proved wrong by later atomic physics.',
          solutionSteps: [
            '1. "Atoms are indivisible" $\\to$ Disproved by discovery of **electrons, protons, and neutrons**.',
            '2. "All atoms of the same element have identical mass" $\\to$ Disproved by **isotopes** like $^{35}\\text{Cl}$ and $^{37}\\text{Cl}$.'
          ],
          finalAnswer: 'Subatomic divisibility and existence of Isotopes.',
          marks: 4
        }
      ]
    },
    practiceWorksheet: {
      title: 'Chemistry Chapter 4 Worksheet: Atomic Structure & Bonding (30 Marks)',
      instructions: 'Show shell counts clearly for K, L, M, N.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Facts (1 × 5 = 5 Marks)',
          items: [
            '1. Maximum electron capacity of the M-shell (n = 3) by 2n²?',
            '2. Write the mass and charge of a neutron.',
            '3. Name the radioactive isotope of Hydrogen.',
            '4. How many covalent pairs are shared in an Oxygen molecule (O₂)?',
            '5. Does Na⁺ ion have 11 or 10 electrons?'
          ]
        },
        {
          sectionTitle: 'Section B: Shell Diagrams & Valence Questions (2 × 4 = 8 Marks)',
          items: [
            '6. Write configurations and valencies for Sulphur ($Z=16$) and Potassium ($Z=19$).',
            '7. Calculate protons, electrons, and neutrons in $^{40}_{18}\\text{Ar}$ and $^{39}_{19}\\text{K}$.',
            '8. Define Isotopes and explain why $^{12}\\text{C}$ and $^{14}\\text{C}$ show identical chemical reactions.',
            '9. State two differences between a Cation and an Anion.'
          ]
        },
        {
          sectionTitle: 'Section C: Bonding & Gold-Foil Analysis (3 × 4 = 12 Marks)',
          items: [
            '10. Show electron transfer in the formation of Calcium Oxide ($\\text{CaO}$).',
            '11. Contrast Ionic vs Covalent compounds on (i) melting point and (ii) conductivity in aqueous state.',
            '12. What led Rutherford to conclude most of an atom is empty space?',
            '13. Draw/explain covalent bonding in Water ($\\text{H}_2\\text{O}$).'
          ]
        },
        {
          sectionTitle: 'Section D: HOTS Deduction (5 Marks)',
          items: [
            '14. Atom A ($Z=13, A=27$) combines with Atom B ($Z=8, A=16$). Find neutron counts of A & B, their electronic configurations, bond type, and formula of compound formed.'
          ]
        }
      ],
      answerKey: [
        '1. 2(3)² = 18 electrons.',
        '2. Mass: 1 amu; Charge: 0 (neutral).',
        '3. Tritium (³₁H).',
        '4. 2 shared pairs (Double covalent bond O=O).',
        '5. 10 electrons (2, 8).',
        '6. S (2, 8, 6), valency = 2; K (2, 8, 8, 1), valency = 1.',
        '7. Ar: p=18, e=18, n=22; K: p=19, e=19, n=20.',
        '8. Same Z, different A; identical Z gives identical electron shells and chemical reactivity.',
        '9. Cation (+, formed by metal losing e⁻, smaller than atom); Anion (−, formed by non-metal gaining e⁻, larger).',
        '10. Ca (2,8,8,2) loses 2e⁻ → Ca²⁺; O (2,6) gains 2e⁻ → O²⁻ forming ionic CaO.',
        '11. Ionic: high m.p., conducts in solution; Covalent: low m.p., non-conductor.',
        '12. Virtually all α-particles shot cleanly through thin gold foil without any deflection.',
        '13. Oxygen (2,6) shares 1 pair each with two Hydrogen (1) atoms forming 2 single covalent bonds (H−O−H).',
        '14. A = Al (14 neutrons, 2,8,3, val +3); B = O (8 neutrons, 2,6, val −2); Ionic bond; Formula Al₂O₃.'
      ]
    },
    examPreparationTips: [
      'Memorise configurations cleanly from **$Z = 1$ (H) to $Z = 20$ (Ca)**—especially remembering **K = 2,8,8,1** and **Ca = 2,8,8,2**.',
      'Check ion direction carefully: losing electrons gives POSITIVE charge (+); gaining electrons gives NEGATIVE charge (−)!'
    ],
    chapterSummary: [
      'Atoms consist of central nuclear Protons ($+1, 1\\text{ amu}$) and Neutrons ($0, 1\\text{ amu}$) orbited by Electrons ($-1, 1/1840\\text{ amu}$).',
      'Rutherford revealed the tiny positive nucleus; Bohr organised electrons into fixed $K, L, M, N$ shells obeying $2n^2$ and outermost octet $\\le 8$.',
      'Atomic Number $Z = p^+$; Mass Number $A = Z + n$. Isotopes share $Z$ but differ in $n$.',
      'Electrovalent bonds transfer electrons (high m.p., conduct in melt/water); Covalent bonds share electron pairs (low m.p., non-conductors).',
      'Metals with 1–3 valence electrons lose them to form positive cations, whereas non-metals with 5–7 valence electrons gain or share electrons to reach a noble-gas octet.'
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Why are noble gases chemically unreactive?',
        answer: 'Noble gases (He, Ne, Ar) have completely filled valence shells—Helium has a stable **duplet (2)** while Neon ($2,8$) and Argon ($2,8,8$) have stable **octets (8)**. Therefore, they neither lose, gain, nor share electrons.',
        type: 'Reasoning'
      },
      {
        question: 'State the observations of Rutherford\'s α-particle scattering experiment.',
        answer: '1. Most α-particles passed straight through the gold foil undeflected. 2. A small fraction deflected through slight angles. 3. Very few (~1 in 12,000) rebounded almost straight back ($180^\\circ$).',
        type: 'Short Answer'
      },
      {
        question: 'Contrast Ionic and Covalent bonds using Sodium Chloride and Methane as examples.',
        answer: 'In **NaCl**, metal Sodium ($2,8,1$) permanently transfers 1 valence electron to non-metal Chlorine ($2,8,7$), forming $\\text{Na}^+$ and $\\text{Cl}^-$ ions locked by strong electrostatic attraction (**Ionic bond**). In **Methane ($\\text{CH}_4$)**, non-metal Carbon ($2,4$) mutually shares 4 electron pairs with 4 Hydrogen atoms (**Covalent bonds**).',
        type: 'Long Answer'
      },
      {
        question: 'Why does an atom become positively charged when it loses an electron, not negatively charged?',
        answer: 'Each electron carries $-1$ charge balancing one nuclear $+1$ proton. Removing an electron leaves **one extra uncompensated $+1$ proton** inside the nucleus—giving net $+1$ charge.',
        type: 'Reasoning'
      },
      {
        question: 'What are Isotopes? Write the three isotopes of Hydrogen with their neutron counts.',
        answer: 'Isotopes are atoms of the same element having identical Atomic Number ($Z$) but different Mass Numbers ($A$). Hydrogen isotopes: **Protium ($^1_1\\text{H}$, 0 neutrons)**, **Deuterium ($^2_1\\text{H}$, 1 neutron)**, and **Tritium ($^3_1\\text{H}$, 2 neutrons)**.',
        type: 'Long Answer'
      },
      {
        question: 'Why can Potassium ($Z=19$) NOT have electronic configuration 2, 8, 9?',
        answer: 'By the Bohr–Bury stability rule, the **outermost shell of an atom cannot hold more than 8 electrons**. Thus after 8 electrons fill the M-shell, the 19th electron enters the N-shell ($2, 8, 8, 1$).',
        type: 'Short Answer'
      },
      {
        question: 'If an atom has Mass Number 23 and 12 neutrons, identify its element and calculate electrons in its $M$-shell.',
        answer: '$Z = A - n = 23 - 12 = 11$ (**Sodium, Na**). Configuration is $K=2, L=8, M=1$, so there is **1 electron** in the $M$-shell.',
        type: 'HOTS'
      },
      {
        question: 'Why does dry hydrogen chloride gas ($\\text{HCl}$) not turn dry blue litmus red, yet conducts electricity once dissolved in water?',
        answer: 'Gaseous $\\text{HCl}$ consists of neutral covalent molecules with no free ions; dissolving in polar water ionises it into mobile $\\text{H}^+$ (hydronium) and $\\text{Cl}^-$ ions that turn litmus red and carry electric current.',
        type: 'HOTS'
      }
    ],
    practiceExercises: [
      {
        question: 'Calculate protons, electrons, and neutrons in $^{19}_9\\text{F}$ and write its valency.',
        hint: 'Config = 2, 7.',
        answerGuide: 'p = 9, e = 9, n = 10; Config = 2, 7; Valency = 1 (gains 1 e⁻).'
      },
      {
        question: 'Write electronic configurations of Boron ($Z=5$), Silicon ($Z=14$), and Chlorine ($Z=17$).',
        hint: 'Fill 2, then 8, then remaining.',
        answerGuide: 'B: 2,3; Si: 2,8,4; Cl: 2,8,7.'
      },
      {
        question: 'How many shared electron pairs exist in (a) H₂, (b) O₂, and (c) N₂?',
        hint: 'Single = 1, Double = 2, Triple = 3.',
        answerGuide: '(a) 1 pair; (b) 2 pairs; (c) 3 pairs.'
      }
    ]
  },
  quizQuestions: [
    {
      id: 'cq1',
      type: 'mcq',
      question: 'What is the maximum number of electrons that can occupy the M shell (n = 3) according to 2n²?',
      options: ['8', '18', '32', '2'],
      correctAnswer: '18',
      explanation: 'Maximum capacity = 2n² = 2 × (3)² = 18 (though outermost shell never exceeds 8).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem4-q2',
      type: 'mcq',
      question: 'Which of the following is the correct electronic configuration of Potassium ($Z = 19$)?',
      options: ['2, 8, 9', '2, 8, 8, 1', '2, 9, 8', '2, 8, 7, 2'],
      correctAnswer: '2, 8, 8, 1',
      explanation: 'Outermost shell cannot hold more than 8 electrons, so the 19th electron enters the N-shell.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem4-q3',
      type: 'mcq',
      question: 'An atom has Atomic Number 13 and Mass Number 27. The number of neutrons in its nucleus is:',
      options: ['13', '27', '14', '40'],
      correctAnswer: '14',
      explanation: 'Neutrons = Mass Number (A) − Atomic Number (Z) = 27 − 13 = 14.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem4-q4',
      type: 'mcq',
      question: 'Which scientist discovered the Neutron in 1932?',
      options: ['J.J. Thomson', 'Ernest Rutherford', 'James Chadwick', 'Niels Bohr'],
      correctAnswer: 'James Chadwick',
      explanation: 'James Chadwick discovered the electrically neutral neutron inside the nucleus in 1932.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem4-q5',
      type: 'mcq',
      question: 'Ordinary Hydrogen (Protium, $^1_1\\text{H}$) is unique because its nucleus contains:',
      options: ['1 proton and 1 neutron', 'Zero neutrons', '2 protons', 'No protons'],
      correctAnswer: 'Zero neutrons',
      explanation: 'A − Z = 1 − 1 = 0 neutrons in Protium.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem4-q6',
      type: 'mcq',
      question: 'Isotopes of the same element ALWAYS have identical:',
      options: ['Mass Numbers', 'Number of Neutrons', 'Atomic Numbers (Protons & Electrons)', 'Physical densities'],
      correctAnswer: 'Atomic Numbers (Protons & Electrons)',
      explanation: 'Isotopes share identical Z (same chemical properties) while differing in neutron counts and Mass Number A.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem4-q7',
      type: 'mcq',
      question: 'What is the valency of Sulphur ($Z = 16$, configuration $2, 8, 6$)?',
      options: ['6', '2', '8', '4'],
      correctAnswer: '2',
      explanation: 'Sulphur has 6 valence electrons and gains 8 − 6 = 2 electrons to complete its octet (Valency = 2).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem4-q8',
      type: 'fill_blank',
      question: 'Rutherford\'s alpha-particle scattering experiment on thin gold foil led to the discovery of the central atomic ______.',
      correctAnswer: 'nucleus',
      explanation: 'Rebounding α-particles proved all positive charge and mass concentrate inside a tiny dense nucleus.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem4-q9',
      type: 'true_false',
      question: 'Ionic compounds like NaCl conduct electricity freely in the dry solid crystalline state.',
      correctAnswer: false,
      explanation: 'Ions are locked rigidly in solid crystals; NaCl conducts only when molten or dissolved in water.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem4-q10',
      type: 'mcq',
      question: 'How many covalent electron pairs are shared between the two atoms in a Nitrogen molecule ($\\text{N}_2$)?',
      options: ['1 pair (single bond)', '2 pairs (double bond)', '3 pairs (triple bond)', '4 pairs'],
      correctAnswer: '3 pairs (triple bond)',
      explanation: 'Nitrogen (2, 5) shares 3 electron pairs to complete each atom\'s octet (N≡N).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem4-q11',
      type: 'mcq',
      question: 'Which compound is formed by complete TRANSFER of electrons (Electrovalent/Ionic bond)?',
      options: ['Methane (CH₄)', 'Carbon dioxide (CO₂)', 'Calcium oxide (CaO)', 'Water (H₂O)'],
      correctAnswer: 'Calcium oxide (CaO)',
      explanation: 'Metal Ca (2,8,8,2) transfers 2 electrons to non-metal O (2,6) forming ionic Ca²⁺O²⁻.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem4-q12',
      type: 'hots',
      question: 'A cation $M^{3+}$ has 10 electrons and 14 neutrons. What is the Mass Number ($A$) of the neutral element $M$?',
      options: ['24', '27', '21', '13'],
      correctAnswer: '27',
      explanation: 'M³⁺ lost 3 electrons, so neutral M has 10 + 3 = 13 protons (Z = 13, Aluminium). A = 13 + 14 = 27.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'fc-c1',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'Charge, relative mass & discoverer of Electron, Proton, Neutron?',
      back: 'e⁻: −1, 1/1840 amu (Thomson); p⁺: +1, 1 amu (Goldstein); n⁰: 0, 1 amu (Chadwick).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c4-2',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'Define Atomic Number (Z) and Mass Number (A).',
      back: 'Z = number of protons; A = protons + neutrons (nucleons). Neutrons = A − Z.',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c4-3',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'State Bohr–Bury rules for filling electronic shells.',
      back: 'Max electrons in shell n = 2n² (2, 8, 18, 32), AND outermost shell can NEVER exceed 8 electrons (e.g., K = 2,8,8,1).',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c4-4',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'What did Rutherford\'s Gold-Foil experiment prove?',
      back: 'Atoms are mostly empty space with almost all mass and positive charge concentrated in a tiny central Nucleus.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c4-5',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'What are Isotopes? Name the 3 isotopes of Hydrogen.',
      back: 'Same Z (same chemical traits), different neutrons/Mass Number A. H isotopes: Protium (¹H, 0 n), Deuterium (²H, 1 n), Tritium (³H, 2 n).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c4-6',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'How do you find Valency for 1–3 vs 5–7 valence electrons?',
      back: '1, 2, 3 valence e⁻ → Valency equals valence e⁻ (+1,+2,+3). 5, 6, 7 valence e⁻ → Valency = 8 − valence e⁻ (−3,−2,−1).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c4-7',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'Ionic (Electrovalent) vs Covalent Bond?',
      back: 'Ionic: electron TRANSFER (Metal + Non-metal, high m.p., conducts in melt/water). Covalent: electron SHARING (Non-metals, low m.p., insulator).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c4-8',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'Why is an atom electrically neutral?',
      back: 'Total positively charged protons in nucleus strictly equal total negatively charged revolving electrons.',
      category: 'Scientific Law',
      importance: 'Standard'
    },
    {
      id: 'fc-c4-9',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'Single, Double & Triple Covalent Bond molecule examples?',
      back: 'Single: H₂, Cl₂, CH₄, H₂O; Double: O₂, CO₂; Triple: N₂ (N≡N).',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'fc-c4-10',
      subjectId: 'chemistry',
      chapterId: 'chem-ch1',
      chapterTitle: 'Atomic Structure',
      front: 'Electronic configuration of Ca (20), Cl (17), and Na⁺ ion?',
      back: 'Ca: 2, 8, 8, 2; Cl: 2, 8, 7; Na⁺ (lost 1 e⁻): 2, 8.',
      category: 'Formula',
      importance: 'Essential'
    }
  ]
};
