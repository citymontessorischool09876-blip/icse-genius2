import { Chapter } from '../../types';

export const CHEM_CH5_LANGUAGE: Chapter = {
  id: 'chem-language',
  subjectId: 'chemistry',
  chapterNumber: 5,
  title: 'Language of Chemistry',
  subtitle: 'Berzelius element symbols & Latin names, fixed & variable valencies (-ous / -ic), polyatomic radicals/ions, criss-cross method for deriving chemical formulas, writing & balancing chemical equations (hit-and-trial), and calculating relative molecular mass',
  term: 'Half-Yearly',
  estimatedMinutes: 95,
  notes: {
    introduction: `Imagine trying to describe cooking or chemistry worldwide if every country wrote *"water + quicklime gives slaked lime"* in dozens of different scripts! In 1814, Swedish chemist **Jöns Jacob Berzelius** gave science a crystal-clear universal shorthand: **chemical symbols**, **formulas**, and **balanced chemical equations**. With just a few letters and numbers—$\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2$—a chemist in Lucknow, Tokyo, or Zurich instantly reads the exact elements, atom counts, valencies, and mass ratios!

In Chapter 5 of Class 8 ICSE Chemistry (*Gem's Chemistry / Concise Chemistry*), we learn the **Language of Chemistry**: why **Iron is $\\text{Fe}$ (Ferrum)** and **Sodium is $\\text{Na}$ (Natrium)**, master **variable valencies** (Ferrous $+2$ vs Ferric $+3$, Cuprous $+1$ vs Cupric $+2$), memorise the essential **polyatomic radicals** (Hydroxide, Nitrate, Carbonate, Sulphate, Ammonium, Phosphate), derive hundreds of exact formulas effortlessly using the **Criss-Cross Valency Method**, calculate **Relative Molecular Mass ($M_r$)**, and balance chemical equations cleanly by the **Hit-and-Trial Method**!`,
    learningObjectives: [
      'State Berzelius\'s rules for writing element symbols and match the 11 classical Latin-derived chemical symbols (Na, K, Fe, Cu, Ag, Au, Hg, Pb, Sn, Sb, W).',
      'Distinguish atomicity (monatomic, diatomic, triatomic, polyatomic) and variable valencies using -ous (lower) and -ic (higher) suffixes.',
      'Write exact formulas and charges for common basic cations and acidic polyatomic radicals (OH⁻, NO₃⁻, HCO₃⁻, CO₃²⁻, SO₄²⁻, SO₃²⁻, PO₄³⁻, NH₄⁺).',
      'Apply the Criss-Cross Method cleanly—including brackets around polyatomic radicals and cancelling common GCD factors—to write correct compound formulas.',
      'Read all qualitative & quantitative information conveyed by a balanced chemical equation, identify limitations, and balance reactions step-by-step via Hit-and-Trial.',
      'Calculate Relative Molecular Mass (M_r) and percentage composition of a given compound from atomic masses.'
    ],
    topics: [
      {
        id: 'chem-ch5-t1',
        title: '1. Berzelius Symbols, Latin Names, Atomicity & Variable Valency',
        content: `A **Chemical Symbol** is a short 1- or 2-letter abbreviation representing **one atom of an element** (and $1\\text{ mole}$ quantitatively). Under **Berzelius's rules**:
- Single-letter symbols are ALWAYS **CAPITAL** ($\\text{H}, \\text{C}, \\text{N}, \\text{O}, \\text{S}, \\text{P}$).
- Two-letter symbols ALWAYS start **Capital + lowercase** ($\\text{Ca}, \\text{Al}, \\text{Cl}, \\text{Zn}, \\text{Mg}$) — writing $\\text{CO}$ (Carbon monoxide gas!) instead of $\\text{Co}$ (Cobalt metal!) is a classic error!`,
        subtopics: [
          {
            subheading: '1.1 Latin-Derived Symbols & Atomicity of Molecules',
            body: `Eleven vital elements carry symbols drawn from their classical **Latin/German names**:
| Element | Latin Name | Symbol | Element | Latin Name | Symbol |
|---|---|---|---|---|---|
| **Sodium** | *Natrium* | **Na** | **Silver** | *Argentum* | **Ag** |
| **Potassium** | *Kalium* | **K** | **Gold** | *Aurum* | **Au** |
| **Iron** | *Ferrum* | **Fe** | **Mercury** | *Hydrargyrum* | **Hg** |
| **Copper** | *Cuprum* | **Cu** | **Lead** | *Plumbum* | **Pb** |
| **Tin** | *Stannum* | **Sn** | **Antimony** | *Stibium* | **Sb** |
| **Tungsten** | *Wolfram* | **W** | | | |

**Atomicity** is the number of atoms bonded inside **one single molecule** of an element:
- **Monatomic (1)**: Noble gases ($\\text{He, Ne, Ar}$) and Metals ($\\text{Na, Fe, Cu}$).
- **Diatomic (2)**: $\\text{H}_2, \\text{O}_2, \\text{N}_2, \\text{F}_2, \\text{Cl}_2, \\text{Br}_2, \\text{I}_2$.
- **Triatomic (3)**: Ozone ($\\text{O}_3$).
- **Tetratomic (4)**: White Phosphorus ($\\text{P}_4$); **Octatomic (8)**: Sulphur ($\\text{S}_8$).`,
            keyPoint: 'Always keep lowercase exact: Co = Cobalt element; CO = Carbon monoxide toxic gas!'
          },
          {
            subheading: '1.2 Variable Valency (-ous vs -ic & Stock Roman Numerals)',
            body: `Certain transition & heavy metals (Fe, Cu, Pb, Sn, Hg) can lose different numbers of electrons depending on reaction conditions—exhibiting **Variable Valency**:
- Lower valency ends in **-ous** (or Roman numeral in brackets); Higher valency ends in **-ic**:
  - **Copper**: **Cuprous / Copper(I)** $\\text{Cu}^+$ ($+1$, e.g., $\\text{Cu}_2\\text{O}$) vs **Cupric / Copper(II)** $\\text{Cu}^{2+}$ ($+2$, e.g., $\\text{CuO}, \\text{CuSO}_4$).
  - **Iron**: **Ferrous / Iron(II)** $\\text{Fe}^{2+}$ ($+2$, green salts like $\\text{FeSO}_4$) vs **Ferric / Iron(III)** $\\text{Fe}^{3+}$ ($+3$, brown/yellow salts like $\\text{FeCl}_3, \\text{Fe}_2\\text{O}_3$).
  - **Mercury**: **Mercurous** $\\text{Hg}^+$ vs **Mercuric** $\\text{Hg}^{2+}$.
  - **Tin / Lead**: **Stannous** $\\text{Sn}^{2+}$ / **Plumbous** $\\text{Pb}^{2+}$ vs **Stannic** $\\text{Sn}^{4+}$ / **Plumbic** $\\text{Pb}^{4+}$.`,
            keyPoint: '-ous = LOWER valency (Fe²⁺ Ferrous, Cu⁺ Cuprous); -ic = HIGHER valency (Fe³⁺ Ferric, Cu²⁺ Cupric)!'
          }
        ],
        definitions: [
          { term: 'Symbol', definition: 'Short 1- or 2-letter chemical representation of one atom of an element.' },
          { term: 'Atomicity', definition: 'Total number of atoms present inside a single molecule of an element (e.g., O₂ is 2, O₃ is 3, P₄ is 4, S₈ is 8).' },
          { term: 'Variable Valency', definition: 'Property of certain elements (like Fe, Cu, Sn, Pb) to exhibit more than one combining capacity in different compounds.' }
        ],
        realLifeExample: 'Notice your multivitamin tablet lists **"Ferrous Sulphate ($\\text{FeSO}_4$)"** rather than Ferric—choosing the specific $+2$ oxidation state of iron that human intestinal cells absorb cleanly!',
        commonMistakes: [
          {
            mistake: 'Writing Hydrogen or Chlorine gas in equations as single atoms $\\text{H}$ or $\\text{Cl}$ instead of $\\text{H}_2$ or $\\text{Cl}_2$.',
            correction: 'Gaseous non-metals (H, N, O, F, Cl, Br, I) always travel as **diatomic molecules** ($\\text{H}_2, \\text{N}_2, \\text{O}_2, \\text{Cl}_2$) in free chemical equations!'
          }
        ]
      },
      {
        id: 'chem-ch5-t2',
        title: '2. Radicals (Polyatomic Ions) & The Criss-Cross Valency Method',
        content: `A **Radical** is an atom or tightly bonded **group of atoms** carrying a net electrical charge that behaves as a **single intact unit** during chemical reactions!
- **Basic Radicals (Cations, $+$)**: Metals + $\\text{H}^+$ and **Ammonium ($\\text{NH}_4^+$)** (the only non-metallic common cation!).
- **Acidic Radicals (Anions, $-$ )**: Non-metal ions ($\\text{Cl}^-, \\text{O}^{2-}, \\text{S}^{2-}, \\text{N}^{3-}$) and polyatomic oxyanions ($\\text{OH}^-, \\text{NO}_3^-, \\text{CO}_3^{2-}, \\text{SO}_4^{2-}, \\text{PO}_4^{3-}$).`,
        subtopics: [
          {
            subheading: '2.1 Master Radical Valency Reference & Criss-Cross Rules',
            body: `**Five-Step Criss-Cross Method**:
1. Write **Cation (Basic radical)** on the LEFT and **Anion (Acidic radical)** on the RIGHT.
2. Write each valency magnitude directly **below** its symbol.
3. **Simplify / Divide by GCD** if both valencies share a common factor (e.g., $2\\text{ and }2 \\to 1\\text{ and }1$; $4\\text{ and }2 \\to 2\\text{ and }1$).
4. **Criss-Cross** the simplified numbers diagonally as subscripts.
5. **Crucial Bracket Rule**: Put **parentheses $(...)$** around any **polyatomic radical** whenever its subscript is **2 or greater**! (Never write $\\text{CaOH}_2$ — it MUST be **$\\text{Ca(OH)}_2$**! And omit the digit $1$ cleanly.)

Let's verify:
- **Aluminium Sulphate**: $\\text{Al}^{3+}$ and $\\text{SO}_4^{2-}$ $\\implies$ criss-cross 3 and 2 $\\implies$ **$\\text{Al}_2(\\text{SO}_4)_3$**!
- **Calcium Phosphate**: $\\text{Ca}^{2+}$ and $\\text{PO}_4^{3-}$ $\\implies$ **$\\text{Ca}_3(\\text{PO}_4)_2$**!
- **Magnesium Oxide**: $\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ $\\implies$ GCD 2 cancels $(2,2 \\to 1,1)$ $\\implies$ **$\\text{MgO}$** (NOT $\\text{Mg}_2\\text{O}_2$)!`,
            keyPoint: 'Always cancel common valency divisors BEFORE criss-crossing, and ALWAYS bracket polyatomic radicals like (OH)₂, (NO₃)₂, (NH₄)₂, (SO₄)₃ when subscript ≥ 2!'
          }
        ],
        diagram: {
          id: 'diag-chem-crisscross',
          title: 'Criss-Cross Valency Method: Deriving Chemical Formulas',
          caption: 'Step-by-step criss-cross derivation for Al₂(SO₄)₃, Ca(OH)₂, MgO (factor cancellation), and (NH₄)₂CO₃.',
          svgFigure: 'chem_crisscross_valency'
        },
        comparisonTable: {
          caption: 'Essential ICSE Cations & Polyatomic Radicals Valency Chart',
          headers: ['Valency', 'Basic Radicals (Cations +)', 'Acidic Radicals (Anions −)'],
          rows: [
            ['**1**', '$\\text{H}^+, \\text{Na}^+, \\text{K}^+, \\text{Ag}^+, \\text{Cu}^+, \\mathbf{\\text{NH}_4^+}$ (Ammonium)', '$\\text{Cl}^-, \\text{Br}^-, \\text{I}^-, \\text{OH}^-$ (Hydroxide), $\\text{NO}_3^-$ (Nitrate), $\\text{HCO}_3^-$ (Bicarbonate)'],
            ['**2**', '$\\text{Mg}^{2+}, \\text{Ca}^{2+}, \\text{Zn}^{2+}, \\text{Cu}^{2+}, \\text{Fe}^{2+}, \\text{Pb}^{2+}$', '$\\text{O}^{2-}$ (Oxide), $\\text{S}^{2-}$ (Sulphide), $\\text{CO}_3^{2-}$ (Carbonate), $\\text{SO}_4^{2-}$ (Sulphate), $\\text{SO}_3^{2-}$ (Sulphite)'],
            ['**3**', '$\\text{Al}^{3+}, \\text{Fe}^{3+}$ (Ferric)', '$\\text{N}^{3-}$ (Nitride), $\\text{PO}_4^{3-}$ (Phosphate)'],
            ['**4**', '$\\text{C}^{4+}, \\text{Pb}^{4+}, \\text{Sn}^{4+}$', '$\\text{C}^{4-}$ (Carbide)']
          ]
        },
        definitions: [
          { term: 'Radical', definition: 'An atom or group of atoms behaving as a single charged unit in chemical reactions (e.g., $\\text{NH}_4^+, \\text{SO}_4^{2-}, \\text{NO}_3^-$).' },
          { term: 'Chemical Formula', definition: 'Symbolic representation of one molecule of a substance showing the elements present and exact number of atoms of each.' }
        ],
        realLifeExample: 'Baking soda is Sodium Hydrogen Carbonate ($\\text{Na}^+$ and $\\text{HCO}_3^-$ $\\to \\text{NaHCO}_3$), while garden gypsum fertiliser is Calcium Sulphate ($\\text{Ca}^{2+}$ and $\\text{SO}_4^{2-}$ $\\to \\text{CaSO}_4$)!',
        commonMistakes: [
          {
            mistake: 'Forgetting parentheses in hydroxides/nitrates like writing $\\text{CaOH}_2$ or $\\text{AlNO}_3$.',
            correction: '$\\text{CaOH}_2$ literally counts only 1 Oxygen and 2 Hydrogens! The correct formula is **$\\text{Ca(OH)}_2$** (2 Oxygen + 2 Hydrogen) and Aluminium nitrate is **$\\text{Al(NO}_3)_3$**!'
          },
          {
            mistake: 'Confusing Sulphide ($\\text{S}^{2-}$), Sulphite ($\\text{SO}_3^{2-}$), and Sulphate ($\\text{SO}_4^{2-}$)!',
            correction: '**-ide** = no oxygen ($\\text{S}^{2-}$); **-ite** = fewer oxygens ($\\text{SO}_3^{2-}$); **-ate** = more oxygens ($\\text{SO}_4^{2-}$)! Same for Nitride ($\\text{N}^{3-}$), Nitrite ($\\text{NO}_2^-$), Nitrate ($\\text{NO}_3^-$)!'
          }
        ]
      },
      {
        id: 'chem-ch5-t3',
        title: '3. Chemical Equations: Information, Balancing Rules & Hit-and-Trial',
        content: `A **Chemical Equation** uses symbols and formulas to depict a chemical reaction cleanly: **Reactants $\\longrightarrow$ Products**.
To obey the **Law of Conservation of Mass**, every equation MUST be **balanced** so that the **total number of atoms of each element on the LHS equals the total number on the RHS**.`,
        subtopics: [
          {
            subheading: '3.1 Hit-and-Trial Balancing Golden Rules (Never Change Subscripts!)',
            body: `**Cardinal Rule**: You may ONLY adjust **coefficients** (numbers written *in front* of entire formulas)—**NEVER alter subscripts** inside a formula (changing $\\text{H}_2\\text{O}$ to $\\text{H}_2\\text{O}_2$ turns drinkable water into toxic hydrogen peroxide bleach!).

**Four-Step Hit-and-Trial Strategy**:
1. Write the exact **skeletal equation** with correct criss-crossed formulas (e.g., $\\text{Fe} + \\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + \\text{H}_2$).
2. Pick the **most complex formula** or element with the largest subscript ($\\text{Fe}_3\\text{O}_4$: 4 O and 3 Fe).
3. Balance **metals/polyatomic radicals** first, then non-metals, leaving **free $\\text{H}_2$ and $\\text{O}_2$ for last**:
   - Place $3$ before $\\text{Fe}$ and $4$ before $\\text{H}_2\\text{O}$: $3\\text{Fe} + 4\\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + \\text{H}_2$.
   - Count Hydrogens: LHS has $4 \\times 2 = 8\\text{ H}$, so put $4$ before $\\text{H}_2$:
     $$3\\text{Fe} + 4\\text{H}_2\\text{O} \\longrightarrow \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2\\uparrow$$
4. Verify every atom count on both sides: $3\\text{ Fe}, 8\\text{ H}, 4\\text{ O}$ on LHS AND RHS!`,
            keyPoint: 'What an equation DOES NOT show directly without extra symbols: speed of reaction, reversibility, physical states (add s/l/g/aq), temperature/catalyst conditions, or explosion violence!'
          }
        ],
        definitions: [
          { term: 'Skeletal Equation', definition: 'An unbalanced chemical equation written simply by substituting correct formulas for reactants and products.' },
          { term: 'Balanced Chemical Equation', definition: 'An equation where the number of atoms of every element on LHS equals RHS, obeying Lavoisier\'s Law of Conservation of Mass.' }
        ],
        realLifeExample: 'In welding, burning acetylene in pure oxygen follows $2\\text{C}_2\\text{H}_2 + 5\\text{O}_2 \\to 4\\text{CO}_2 + 2\\text{H}_2\\text{O}$; industrial engineers use the exact coefficients ($2 : 5$) to tune torch oxygen valves for spotless hot blue flames!',
        commonMistakes: [
          {
            mistake: 'Trying to balance $\\text{H}_2 + \\text{O}_2 \\to \\text{H}_2\\text{O}$ by writing $\\text{H}_2 + \\text{O}_2 \\to \\text{H}_2\\text{O}_2$.',
            correction: 'NEVER modify formula subscripts! Multiply the entire water molecule by 2: **$2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$**.'
          }
        ]
      },
      {
        id: 'chem-ch5-t4',
        title: '4. Relative Atomic Mass & Calculating Relative Molecular Mass (M_r)',
        content: `Individual atoms weigh around $10^{-24}\\text{ grams}$—far too tiny for ordinary balances! Chemists therefore measure masses on a convenient relative scale compared to **$\\frac{1}{12}\\text{th}$ the mass of one Carbon-12 atom** (**1 amu / u**): $\\text{H} = 1, \\text{C} = 12, \\text{N} = 14, \\text{O} = 16, \\text{Na} = 23, \\text{Mg} = 24, \\text{S} = 32, \\text{Cl} = 35.5, \\text{K} = 39, \\text{Ca} = 40, \\text{Fe} = 56, \\text{Cu} = 63.5$.

The **Relative Molecular Mass ($M_r$)** of any compound equals simply the **sum of atomic masses of every atom in its formula**:
- **Water ($\\text{H}_2\\text{O}$)**: $(2 \\times 1) + 16 = \\mathbf{18\\text{ u}}$
- **Sulphuric Acid ($\\text{H}_2\\text{SO}_4$)**: $(2 \\times 1) + 32 + (4 \\times 16) = \\mathbf{98\\text{ u}}$
- **Calcium Hydroxide ($\\text{Ca(OH)}_2$)**: $40 + 2 \\times (16 + 1) = 40 + 34 = \\mathbf{74\\text{ u}}$`,
        subtopics: [
          {
            subheading: '4.1 Percentage Composition Formula',
            body: `To find the exact percentage by mass of any element inside a compound:
$$\\%\\text{ of Element} = \\frac{\\text{Total Atomic Mass of Element in Formula}}{\\text{Molecular Mass of Compound } (M_r)} \\times 100\\%$$
For water ($M_r = 18$): $\\%\\text{ Hydrogen} = \\frac{2}{18} \\times 100 = 11.11\\%$; $\\%\\text{ Oxygen} = \\frac{16}{18} \\times 100 = 88.89\\%$.`,
            keyPoint: 'Always multiply subscripts OUTSIDE parentheses into every atom INSIDE—e.g., Ca(NO₃)₂ has 1 Ca, 2 N, and 6 O atoms!'
          }
        ],
        formulas: [
          { formula: 'M_r = Σ (Atom Count × Atomic Mass)', explanation: 'Relative molecular mass of any molecule or formula unit.', unit: 'amu (u)' },
          { formula: '% Element = (Element Mass / Total M_r) × 100%', explanation: 'Percentage composition by mass in a pure compound.' }
        ],
        realLifeExample: 'Fertiliser bags advertise **"46% Nitrogen"** on Urea ($\\text{CO(NH}_2)_2$, $M_r = 60$, containing $2\\text{ N} = 28\\text{ u} \\implies \\frac{28}{60} \\times 100 = 46.7\\%\\text{ N}$)—calculated directly via molecular mass!',
        commonMistakes: [
          {
            mistake: 'Forgetting to multiply all subscripts inside parentheses like counting only 1 N in $\\text{Ca(NO}_3)_2$ or only 4 O in $\\text{Al}_2(\\text{SO}_4)_3$.',
            correction: '$\\text{Al}_2(\\text{SO}_4)_3$ holds **2 Al, 3 S, and $3 \\times 4 = 12$ O** atoms!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Berzelius System', definition: 'Modern 1- or 2-letter element symbol system using Capital first letter + lowercase second.', category: 'Symbols' },
      { term: 'Atomicity', definition: 'Number of atoms joined inside one molecule of an element ($\\text{O}_2=2, \\text{P}_4=4, \\text{S}_8=8$).', category: 'Molecules' },
      { term: 'Variable Valency', definition: 'Multiple valency states shown by metals like Fe ($2,3$) and Cu ($1,2$), named -ous and -ic.', category: 'Valency' },
      { term: 'Radical', definition: 'Charged single atom or polyatomic group acting as one unit ($\\text{NH}_4^+, \\text{SO}_4^{2-}$).', category: 'Radicals' },
      { term: 'Criss-Cross Method', definition: 'Diagonal exchange of simplified cation/anion valencies to form subscripts.', category: 'Formulas' },
      { term: 'Balanced Equation', definition: 'Chemical equation with equal numbers of each element\'s atoms on LHS and RHS.', category: 'Equations' },
      { term: 'Relative Molecular Mass ($M_r$)', definition: 'Sum of relative atomic masses of all atoms in one molecule/formula unit.', category: 'Calculations' },
      { term: 'Sulphide / Sulphite / Sulphate', definition: 'Distinguishing anions: $\\text{S}^{2-}$ (no O), $\\text{SO}_3^{2-}$ (3 O), $\\text{SO}_4^{2-}$ (4 O).', category: 'Nomenclature' }
    ],
    formulaSheet: [
      { title: 'Criss-Cross General Rule', expression: 'Aᵐ⁺ + Bⁿ⁻  →  AₙBₘ (simplify m, n by GCD first)', meaning: 'Use brackets around polyatomic B if m > 1' },
      { title: 'Ammonium / Hydroxyl / Oxyanion Rule', expression: 'NH₄⁺, OH⁻, NO₃⁻, HCO₃⁻ (1) | CO₃²⁻, SO₄²⁻ (2) | PO₄³⁻ (3)', meaning: 'Core ICSE Class 8 radical charges' },
      { title: 'Molecular Mass', expression: 'M_r = Σ (Count × Atomic Mass)', meaning: 'Sum all atoms including multipliers outside brackets' },
      { title: 'Mass Percentage', expression: '% Element = (Total Element Mass / M_r) × 100', meaning: 'Exact composition ratio in pure compound' }
    ],
    comparisonTables: [
      {
        title: '-ide vs -ite vs -ate Acidic Radical Pattern',
        headers: ['Element Core', '-ide (No Oxygen)', '-ite (Lower Oxygen)', '-ate (Higher Oxygen)'],
        rows: [
          ['Sulphur', 'Sulphide ($\\text{S}^{2-}$)', 'Sulphite ($\\text{SO}_3^{2-}$)', 'Sulphate ($\\text{SO}_4^{2-}$)'],
          ['Nitrogen', 'Nitride ($\\text{N}^{3-}$)', 'Nitrite ($\\text{NO}_2^-$)', 'Nitrate ($\\text{NO}_3^-$)'],
          ['Carbon', 'Carbide ($\\text{C}^{4-}$)', '—', 'Carbonate ($\\text{CO}_3^{2-}$)'],
          ['Chlorine', 'Chloride ($\\text{Cl}^-$)', 'Chlorite ($\\text{ClO}_2^-$)', 'Chlorate ($\\text{ClO}_3^-$)']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'chem5-ex1',
        question: 'Derive the exact chemical formulas using Criss-Cross: (a) Ammonium Carbonate, (b) Ferric Oxide, (c) Zinc Nitrate, (d) Stannic Chloride.',
        steps: [
          '(a) **Ammonium Carbonate**: $\\text{NH}_4^+$ (1) and $\\text{CO}_3^{2-}$ (2) $\\implies$ criss-cross gives **$\\text{(NH}_4)_2\\text{CO}_3$**.',
          '(b) **Ferric Oxide** (Iron-III): $\\text{Fe}^{3+}$ (3) and $\\text{O}^{2-}$ (2) $\\implies$ **$\\text{Fe}_2\\text{O}_3$**.',
          '(c) **Zinc Nitrate**: $\\text{Zn}^{2+}$ (2) and $\\text{NO}_3^-$ (1) $\\implies$ **$\\text{Zn(NO}_3)_2$**.',
          '(d) **Stannic Chloride** (Tin-IV): $\\text{Sn}^{4+}$ (4) and $\\text{Cl}^-$ (1) $\\implies$ **$\\text{SnCl}_4$**.'
        ],
        finalAnswer: '(NH₄)₂CO₃; Fe₂O₃; Zn(NO₃)₂; SnCl₄.',
        keyRule: '-ic selects the higher valency (Ferric = +3, Stannic = +4).'
      },
      {
        id: 'chem5-ex2',
        question: 'Name these compounds chemically: (a) $\\text{Cu}_2\\text{S}$, (b) $\\text{FeSO}_4$, (c) $\\text{Mg}_3\\text{N}_2$, (d) $\\text{Al(OH)}_3$.',
        steps: [
          '(a) $\\text{Cu}_2\\text{S}$: $\\text{S}^{2-}$ requires two $\\text{Cu}^+$ (+1, Cuprous) $\\implies$ **Copper(I) sulphide / Cuprous sulphide**.',
          '(b) $\\text{FeSO}_4$: Sulphate is $-2$, so Fe is $+2$ (Ferrous) $\\implies$ **Iron(II) sulphate / Ferrous sulphate**.',
          '(c) $\\text{Mg}_3\\text{N}_2$: **Magnesium nitride** ($\\text{N}^{3-}$).',
          '(d) $\\text{Al(OH)}_3$: **Aluminium hydroxide**.'
        ],
        finalAnswer: 'Cuprous sulphide; Ferrous sulphate; Magnesium nitride; Aluminium hydroxide.',
        keyRule: 'Deduce transition-metal Roman numeral directly from the anion\'s fixed charge.'
      },
      {
        id: 'chem5-ex3',
        question: 'Balance step-by-step: $\\text{Fe} + \\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + \\text{H}_2$.',
        steps: [
          'Pick largest formula $\\text{Fe}_3\\text{O}_4$: needs 3 Fe and 4 O atoms.',
          'Put 3 before $\\text{Fe}$ and 4 before $\\text{H}_2\\text{O}$: $3\\text{Fe} + 4\\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + \\text{H}_2$.',
          'LHS now has $4 \\times 2 = 8\\text{ H}$; balance RHS with $4\\text{H}_2$: **$3\\text{Fe} + 4\\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2$**.'
        ],
        finalAnswer: '3Fe + 4H₂O → Fe₃O₄ + 4H₂',
        keyRule: 'Balance the most atom-rich compound first, leaving single elements like H₂ or O₂ for last.'
      },
      {
        id: 'chem5-ex4',
        question: 'Balance: $\\text{KClO}_3 \\xrightarrow{\\Delta, \\text{MnO}_2} \\text{KCl} + \\text{O}_2\\uparrow$.',
        steps: [
          'LHS has 3 O; RHS has 2 O (LCM = 6).',
          'Put $2$ before $\\text{KClO}_3$ and $3$ before $\\text{O}_2$: $2\\text{KClO}_3 \\to \\text{KCl} + 3\\text{O}_2$.',
          'Balance 2 K and 2 Cl with $2\\text{KCl}$: **$2\\text{KClO}_3 \\to 2\\text{KCl} + 3\\text{O}_2\\uparrow$**.'
        ],
        finalAnswer: '2KClO₃ → 2KCl + 3O₂↑',
        keyRule: 'Use the LCM (6) when balancing odd (3) vs even (2) oxygen atoms!'
      },
      {
        id: 'chem5-ex5',
        question: 'Translate to a balanced chemical equation: "Calcium hydroxide reacts with Nitric acid to yield Calcium nitrate and Water."',
        steps: [
          'Formulas: $\\text{Ca(OH)}_2 + \\text{HNO}_3 \\to \\text{Ca(NO}_3)_2 + \\text{H}_2\\text{O}$.',
          'RHS has 2 nitrate ($\\text{NO}_3$) groups $\\implies$ put $2$ before $\\text{HNO}_3$.',
          'Now LHS has $2\\text{ H} + 2\\text{ OH}$ ($4\\text{ H}, 2\\text{ O}$ outside nitrate) $\\implies$ put $2$ before $\\text{H}_2\\text{O}$: **$\\text{Ca(OH)}_2 + 2\\text{HNO}_3 \\to \\text{Ca(NO}_3)_2 + 2\\text{H}_2\\text{O}$**.'
        ],
        finalAnswer: 'Ca(OH)₂ + 2HNO₃ → Ca(NO₃)₂ + 2H₂O',
        keyRule: 'Keep intact polyatomic radicals like NO₃⁻ together as one block while balancing!'
      },
      {
        id: 'chem5-ex6',
        question: 'Calculate the Relative Molecular Mass ($M_r$) of Aluminium Sulphate $\\text{Al}_2(\\text{SO}_4)_3$. ($\\text{Al}=27, \\text{S}=32, \\text{O}=16$).',
        steps: [
          'Count atoms carefully: $2\\text{ Al} + 3\\text{ S} + (3 \\times 4 = 12)\\text{ O}$.',
          '$M_r = (2 \\times 27) + (3 \\times 32) + (12 \\times 16) = 54 + 96 + 192 = 342\\text{ u}$.'
        ],
        finalAnswer: '342 u (amu)',
        keyRule: 'Distribute the outside bracket subscript 3 across BOTH S and O₄.'
      },
      {
        id: 'chem5-ex7',
        question: 'Calculate the percentage of Nitrogen by mass in Ammonium Nitrate $\\text{NH}_4\\text{NO}_3$. ($\\text{N}=14, \\text{H}=1, \\text{O}=16$).',
        steps: [
          'Notice there are **2 Nitrogen atoms** ($1\\text{ in }\\text{NH}_4 + 1\\text{ in }\\text{NO}_3$), $4\\text{ H}$, and $3\\text{ O}$.',
          '$M_r = (2 \\times 14) + (4 \\times 1) + (3 \\times 16) = 28 + 4 + 48 = 80\\text{ u}$.',
          '$\\%\\text{ N} = \\frac{28}{80} \\times 100\\% = 35\\%$.'
        ],
        finalAnswer: '35% Nitrogen',
        keyRule: 'Add ALL atoms of the same element occurring in multiple places inside one formula!'
      },
      {
        id: 'chem5-ex8',
        question: 'If an element $X$ forms the oxide $\\text{XO}_2$, find the valency of $X$ and write the formulas of its Chloride and Sulphate.',
        steps: [
          'Oxygen has valency $2$. Two oxygens provide total negative charge $2 \\times 2 = 4$.',
          'Therefore, $X$ must have **Valency = 4**!',
          'Chloride ($\\text{Cl}^-$ valency 1): **$\\text{XCl}_4$**. Sulphate ($\\text{SO}_4^{2-}$ valency 2, cancel $4:2 \\to 2:1$): **$\\text{X(SO}_4)_2$**.'
        ],
        finalAnswer: 'Valency of X = 4; Chloride = XCl₄; Sulphate = X(SO₄)₂.',
        keyRule: 'Work backward from Oxygen (2) to deduce unknown valency, simplifying common ratios cleanly.'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'chem5-e1',
          question: 'Write the Latin names and chemical symbols of Sodium, Potassium, Iron, and Silver.',
          solutionSteps: ['Sodium: Natrium (Na); Potassium: Kalium (K); Iron: Ferrum (Fe); Silver: Argentum (Ag).'],
          finalAnswer: 'Na, K, Fe, Ag',
          marks: 2
        },
        {
          id: 'chem5-e2',
          question: 'Derive the formulas of Potassium sulphate and Calcium carbonate.',
          solutionSteps: ['K⁺ + SO₄²⁻ → K₂SO₄; Ca²⁺ + CO₃²⁻ (2,2 cancels) → CaCO₃.'],
          finalAnswer: 'K₂SO₄ and CaCO₃',
          marks: 2
        },
        {
          id: 'chem5-e3',
          question: 'Find the Relative Molecular Mass of $\\text{CO}_2$ and $\\text{NaOH}$ ($\\text{C}=12, \\text{O}=16, \\text{Na}=23, \\text{H}=1$).',
          solutionSteps: ['CO₂ = 12 + 32 = 44 u; NaOH = 23 + 16 + 1 = 40 u.'],
          finalAnswer: '44 u and 40 u',
          marks: 2
        },
        {
          id: 'chem5-e4',
          question: 'Identify the atomicity of Oxygen ($\\text{O}_2$), Ozone ($\\text{O}_3$), Helium ($\\text{He}$), and Sulphur ($\\text{S}_8$).',
          solutionSteps: ['O₂: 2 (diatomic); O₃: 3 (triatomic); He: 1 (monatomic); S₈: 8 (octatomic).'],
          finalAnswer: '2, 3, 1, 8',
          marks: 2
        }
      ],
      medium: [
        {
          id: 'chem5-m1',
          question: 'Balance: (a) $\\text{N}_2 + \\text{H}_2 \\to \\text{NH}_3$, and (b) $\\text{Al} + \\text{HCl} \\to \\text{AlCl}_3 + \\text{H}_2$.',
          solutionSteps: [
            '(a) $\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$.',
            '(b) Balance Cl & H together (LCM 6): $2\\text{Al} + 6\\text{HCl} \\to 2\\text{AlCl}_3 + 3\\text{H}_2$.'
          ],
          finalAnswer: 'N₂ + 3H₂ → 2NH₃; 2Al + 6HCl → 2AlCl₃ + 3H₂',
          marks: 3
        },
        {
          id: 'chem5-m2',
          question: 'Write formulas for (a) Magnesium nitride, (b) Ammonium sulphate, and (c) Copper(II) hydroxide.',
          solutionSteps: ['(a) Mg²⁺ + N³⁻ → Mg₃N₂; (b) NH₄⁺ + SO₄²⁻ → (NH₄)₂SO₄; (c) Cu²⁺ + OH⁻ → Cu(OH)₂.'],
          finalAnswer: 'Mg₃N₂; (NH₄)₂SO₄; Cu(OH)₂',
          marks: 3
        },
        {
          id: 'chem5-m3',
          question: 'Calculate the percentage of Calcium in Limestone ($\\text{CaCO}_3$). ($\\text{Ca}=40, \\text{C}=12, \\text{O}=16$).',
          solutionSteps: ['$M_r = 40 + 12 + 48 = 100\\text{ u}$; $\\%\\text{ Ca} = \\frac{40}{100} \\times 100\\% = 40\\%$.'],
          finalAnswer: '40%',
          marks: 3
        },
        {
          id: 'chem5-m4',
          question: 'Distinguish between $2\\text{H}$ and $\\text{H}_2$, and between $\\text{Co}$ and $\\text{CO}$.',
          solutionSteps: [
            '$2\\text{H}$ denotes two uncombined Hydrogen atoms; $\\text{H}_2$ denotes one bonded diatomic Hydrogen molecule.',
            '$\\text{Co}$ is the metallic element Cobalt; $\\text{CO}$ is a molecule of Carbon monoxide compound.'
          ],
          finalAnswer: '2 separate atoms vs 1 bonded molecule; Cobalt element vs CO compound.',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'chem5-d1',
          question: 'Balance: $\\text{Pb(NO}_3)_2 \\xrightarrow{\\Delta} \\text{PbO} + \\text{NO}_2 + \\text{O}_2$ and $\\text{NH}_3 + \\text{O}_2 \\to \\text{NO} + \\text{H}_2\\text{O}$.',
          solutionSteps: [
            '1. Odd/even O count on RHS: double lead nitrate $\\implies$ **$2\\text{Pb(NO}_3)_2 \\to 2\\text{PbO} + 4\\text{NO}_2 + \\text{O}_2$** (Check: 2 Pb, 4 N, 12 O = 2 + 8 + 2 = 12 O!).',
            '2. $4\\text{NH}_3 + 5\\text{O}_2 \\to 4\\text{NO} + 6\\text{H}_2\\text{O}$ (4 N, 12 H, 10 O on both sides!).'
          ],
          finalAnswer: '2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂; 4NH₃ + 5O₂ → 4NO + 6H₂O.',
          marks: 4
        },
        {
          id: 'chem5-d2',
          question: 'Find the relative molecular mass of washing soda crystals $\\text{Na}_2\\text{CO}_3\\cdot 10\\text{H}_2\\text{O}$ and the percentage of water of crystallisation inside it. ($\\text{Na}=23, \\text{C}=12, \\text{O}=16, \\text{H}=1$).',
          solutionSteps: [
            '$\\text{Na}_2\\text{CO}_3 = 46 + 12 + 48 = 106\\text{ u}$.',
            '$10\\text{H}_2\\text{O} = 10 \\times 18 = 180\\text{ u}$.',
            'Total $M_r = 106 + 180 = 286\\text{ u}$.',
            '$\\%\\text{ Water} = \\frac{180}{286} \\times 100 \\approx 62.94\\%$.'
          ],
          finalAnswer: 'M_r = 286 u; Water = 62.94%.',
          marks: 4
        },
        {
          id: 'chem5-d3',
          question: 'Why does a chemical equation fail to tell us whether a reaction is safe/slow or explosive, and how do chemists upgrade equations to include extra details?',
          solutionSteps: [
            'Plain formulas do not show reaction speed, temperature/pressure/catalyst needed, heat absorbed/released, or physical states.',
            'Chemists add state symbols $(s), (l), (g), (aq)$, reaction conditions above arrows ($\\Delta, \\text{MnO}_2$), $\\uparrow/\\downarrow$ arrows, and $+\\text{Heat}$.'
          ],
          finalAnswer: 'Add state tags, arrow conditions, ↑/↓ arrows, and ±Heat.',
          marks: 4
        },
        {
          id: 'chem5-d4',
          question: 'A metal sulphate has formula $\\text{M}_2(\\text{SO}_4)_3$. Predict the formulas of its Hydroxide, Carbonate, Nitride, and Chloride.',
          solutionSteps: [
            'From $\\text{M}_2(\\text{SO}_4)_3$, metal $M$ carries **Valency +3** ($\\text{SO}_4$ has 2).',
            'Hydroxide: **$\\text{M(OH)}_3$**; Carbonate: **$\\text{M}_2(\\text{CO}_3)_3$**; Nitride (3,3 cancels): **$\\text{MN}$**; Chloride: **$\\text{MCl}_3$**.'
          ],
          finalAnswer: 'M(OH)₃, M₂(CO₃)₃, MN, MCl₃.',
          marks: 4
        }
      ]
    },
    practiceWorksheet: {
      title: 'Chemistry Chapter 5 Worksheet: Language of Chemistry (30 Marks)',
      instructions: 'Atomic masses: H=1, C=12, N=14, O=16, Na=23, S=32, Ca=40.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Symbols & Radicals (1 × 5 = 5 Marks)',
          items: [
            '1. Write the Latin name of Lead and Tungsten.',
            '2. Write the formula and charge of the Sulphite radical vs Sulphide ion.',
            '3. What is the valency of Copper in Cu₂O?',
            '4. Write the symbol for 1 molecule of Phosphorus.',
            '5. Name one positive polyatomic radical.'
          ]
        },
        {
          sectionTitle: 'Section B: Criss-Cross Formula Practice (2 × 4 = 8 Marks)',
          items: [
            '6. Derive Calcium bicarbonate and Aluminium oxide.',
            '7. Derive Ferrous nitrate and Ferric chloride.',
            '8. Name chemically: (a) $\\text{KNO}_2$, (b) $\\text{Na}_3\\text{PO}_4$.',
            '9. Find $M_r$ of Nitric acid ($\\text{HNO}_3$) and Sodium carbonate ($\\text{Na}_2\\text{CO}_3$).'
          ]
        },
        {
          sectionTitle: 'Section C: Balancing & Mass % (3 × 4 = 12 Marks)',
          items: [
            '10. Balance: $\\text{Zn} + \\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2$ and $\\text{Fe}_2\\text{O}_3 + \\text{CO} \\to \\text{Fe} + \\text{CO}_2$.',
            '11. Translate & balance: "Aluminium reacts with Sulphuric acid to give Aluminium sulphate and Hydrogen."',
            '12. Calculate percentage of Sulphur in $\\text{H}_2\\text{SO}_4$.',
            '13. State two limitations of an ordinary skeletal chemical equation.'
          ]
        },
        {
          sectionTitle: 'Section D: Mystery Valency Deduction (5 Marks)',
          items: [
            '14. Element $E$ forms carbonate $\\text{ECO}_3$. Find $E$\'s valency, then write balanced reaction of $\\text{E}$ reacting with dilute $\\text{HCl}$ to give $\\text{ECl}_2 + \\text{H}_2$.'
          ]
        }
      ],
      answerKey: [
        '1. Plumbum (Pb); Wolfram (W).',
        '2. Sulphite: SO₃²⁻; Sulphide: S²⁻.',
        '3. +1 (Cuprous / Copper-I).',
        '4. P₄.',
        '5. Ammonium (NH₄⁺).',
        '6. Ca(HCO₃)₂; Al₂O₃.',
        '7. Fe(NO₃)₂; FeCl₃.',
        '8. (a) Potassium nitrite; (b) Sodium phosphate.',
        '9. HNO₃ = 63 u; Na₂CO₃ = 106 u.',
        '10. Zn + 2HCl → ZnCl₂ + H₂; Fe₂O₃ + 3CO → 2Fe + 3CO₂.',
        '11. 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂↑.',
        '12. M_r = 98; % S = (32 / 98) × 100 ≈ 32.65%.',
        '13. Fails to show rate/speed of reaction, physical states, temperature/catalyst conditions, or heat released/absorbed.',
        '14. From ECO₃, E has Valency +2 (since CO₃ is −2). Reaction: E + 2HCl → ECl₂ + H₂↑.'
      ]
    },
    examPreparationTips: [
      'Memorise **Radicals Table** thoroughly: $\\text{NH}_4^+, \\text{OH}^-, \\text{NO}_3^-, \\text{HCO}_3^-, \\text{CO}_3^{2-}, \\text{SO}_3^{2-}, \\text{SO}_4^{2-}, \\text{PO}_4^{3-}$ — every chemical equation chapter ahead depends on it!',
      'Always double-check **4 things after balancing**: atom count of every element on LHS = RHS, lowest whole-number coefficients, no altered subscripts, and clean brackets around radicals.'
    ],
    chapterSummary: [
      'Berzelius symbols represent atoms concisely; 11 elements use classical Latin symbols (Na, K, Fe, Cu, Ag, Au, Hg, Pb, Sn, Sb, W).',
      'Metals like Fe (+2/+3) and Cu (+1/+2) show variable valency named -ous (lower) and -ic (higher).',
      'Criss-cross method exchanges simplified valencies diagonally, bracketing polyatomic radicals when subscript ≥ 2.',
      'Chemical equations must be balanced via coefficients only (never subscripts) to satisfy Conservation of Mass.',
      'Atomicity counts atoms per molecule ($\\text{He}=1$, $\\text{O}_2=2$, $\\text{O}_3=3$, $\\text{P}_4=4$, $\\text{S}_8=8$), while common polyatomic radicals include $\\text{NH}_4^+$, $\\text{OH}^-$, $\\text{NO}_3^-$, $\\text{SO}_4^{2-}$, and $\\text{CO}_3^{2-}$.'
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Why must a chemical equation always be balanced?',
        answer: 'According to the Law of Conservation of Mass, atoms are neither created nor destroyed in a chemical reaction; hence total atoms of every element in reactants must equal total atoms in products.',
        type: 'Short Answer'
      },
      {
        question: 'Distinguish between Ferrous and Ferric compounds with one formula example each.',
        answer: '**Ferrous** refers to Iron exhibiting its lower $+2$ valency (e.g., $\\text{FeCl}_2$, $\\text{FeSO}_4$), whereas **Ferric** refers to Iron exhibiting its higher $+3$ valency (e.g., $\\text{FeCl}_3$, $\\text{Fe}_2\\text{O}_3$).',
        type: 'Short Answer'
      },
      {
        question: 'List four pieces of qualitative and quantitative information conveyed by: $\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$.',
        answer: '1. Reactants are Nitrogen and Hydrogen; product is Ammonia. 2. 1 molecule of $\\text{N}_2$ reacts with 3 molecules of $\\text{H}_2$ to produce 2 molecules of $\\text{NH}_3$. 3. $28\\text{ g}$ of $\\text{N}_2$ combine strictly with $6\\text{ g}$ of $\\text{H}_2$ to form $34\\text{ g}$ of $\\text{NH}_3$. 4. Total mass ($34\\text{ g}$) is conserved.',
        type: 'Long Answer'
      },
      {
        question: 'What is the difference between Symbol and Formula?',
        answer: 'A **Symbol** stands for one atom of a single element ($\\text{O}, \\text{Fe}$), whereas a **Formula** represents one molecule of an element or compound showing types and counts of atoms joined together ($\\text{O}_2, \\text{H}_2\\text{O}, \\text{H}_2\\text{SO}_4$).',
        type: 'Short Answer'
      },
      {
        question: 'Write all Latin-derived element symbols for Alkali and Coinage/Heavy metals.',
        answer: 'Sodium = *Natrium* ($\\text{Na}$), Potassium = *Kalium* ($\\text{K}$), Copper = *Cuprum* ($\\text{Cu}$), Silver = *Argentum* ($\\text{Ag}$), Gold = *Aurum* ($\\text{Au}$), Iron = *Ferrum* ($\\text{Fe}$), Lead = *Plumbum* ($\\text{Pb}$), Tin = *Stannum* ($\\text{Sn}$), Mercury = *Hydrargyrum* ($\\text{Hg}$).',
        type: 'Long Answer'
      },
      {
        question: 'Why do we write $\\text{Mg(OH)}_2$ with brackets around OH rather than $\\text{MgOH}_2$?',
        answer: 'Hydroxide ($\\text{OH}^-$) is a **polyatomic radical** acting as one unit. Without brackets, $\\text{MgOH}_2$ wrongly implies 1 O and 2 H atoms, whereas **$\\text{Mg(OH)}_2$** correctly represents 1 Mg, 2 O, and 2 H atoms.',
        type: 'Reasoning'
      },
      {
        question: 'Balance: $\\text{Cu} + \\text{HNO}_3 \\to \\text{Cu(NO}_3)_2 + \\text{NO}_2 + \\text{H}_2\\text{O}$.',
        answer: 'Balanced equation: **$\\text{Cu} + 4\\text{HNO}_3 \\to \\text{Cu(NO}_3)_2 + 2\\text{NO}_2 + 2\\text{H}_2\\text{O}$** (Check: 1 Cu, 4 H, 4 N = 2+2 N, 12 O = 6+4+2 O).',
        type: 'HOTS'
      },
      {
        question: 'What is the significance of $\\Delta$, $\\uparrow$, and $\\downarrow$ symbols in chemical equations?',
        answer: '$\\Delta$ above the arrow means **heat is supplied**; $\\uparrow$ after a product denotes an escaping **gas**; $\\downarrow$ denotes an insoluble settling **precipitate**.',
        type: 'Short Answer'
      }
    ],
    practiceExercises: [
      {
        question: 'Write formulas for Lead(II) nitrate, Sodium bicarbonate, and Ferric sulphate.',
        hint: 'Use Criss-Cross with Pb²⁺, NO₃⁻; Na⁺, HCO₃⁻; Fe³⁺, SO₄²⁻.',
        answerGuide: 'Pb(NO₃)₂; NaHCO₃; Fe₂(SO₄)₃.'
      },
      {
        question: 'Balance: $\\text{Fe}_2\\text{O}_3 + \\text{HCl} \\to \\text{FeCl}_3 + \\text{H}_2\\text{O}$.',
        hint: 'Balance 2 Fe first, then Cl, then H/O.',
        answerGuide: 'Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O.'
      },
      {
        question: 'Calculate $M_r$ of Glucose $\\text{C}_6\\text{H}_{12}\\text{O}_6$ ($\\text{C}=12, \\text{H}=1, \\text{O}=16$).',
        hint: '6(12) + 12(1) + 6(16).',
        answerGuide: '72 + 12 + 96 = 180 u.'
      }
    ]
  },
  quizQuestions: [
    {
      id: 'chem5-q1',
      type: 'mcq',
      question: 'Which element has the Latin-derived symbol **Sb**?',
      options: ['Silver', 'Sodium', 'Antimony (Stibium)', 'Tin'],
      correctAnswer: 'Antimony (Stibium)',
      explanation: 'Sb comes from Latin Stibium (Antimony). Silver is Ag, Sodium is Na, Tin is Sn.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem5-q2',
      type: 'mcq',
      question: 'What is the correct chemical formula of **Aluminium Sulphate**?',
      options: ['AlSO₄', 'Al₃(SO₄)₂', 'Al₂(SO₄)₃', 'Al₂SO₄'],
      correctAnswer: 'Al₂(SO₄)₃',
      explanation: 'Al³⁺ (3) and SO₄²⁻ (2) criss-cross cleanly into Al₂(SO₄)₃.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem5-q3',
      type: 'mcq',
      question: 'In **Ferric oxide** ($\\text{Fe}_2\\text{O}_3$), the valency of Iron is:',
      options: ['+1', '+2', '+3', '+4'],
      correctAnswer: '+3',
      explanation: '-ic denotes the higher Iron valency (+3); Ferrous oxide is FeO (+2).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem5-q4',
      type: 'mcq',
      question: 'Which symbol correctly denotes the **Sulphite** radical?',
      options: ['S²⁻', 'SO₃²⁻', 'SO₄²⁻', 'HSO₄⁻'],
      correctAnswer: 'SO₃²⁻',
      explanation: 'S²⁻ = Sulphide; SO₃²⁻ = Sulphite; SO₄²⁻ = Sulphate.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem5-q5',
      type: 'mcq',
      question: 'What is the atomicity of a Sulphur ($\\text{S}_8$) molecule?',
      options: ['1', '2', '4', '8'],
      correctAnswer: '8',
      explanation: 'Rhombic sulphur molecules form crown rings of 8 atoms (octatomic).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem5-q6',
      type: 'mcq',
      question: 'Which correctly balances: $__\\text{Al} + __\\text{O}_2 \\to __\\text{Al}_2\\text{O}_3$?',
      options: ['2, 3, 2', '4, 3, 2', '2, 2, 1', '4, 6, 2'],
      correctAnswer: '4, 3, 2',
      explanation: '4Al + 3O₂ → 2Al₂O₃ gives 4 Al and 6 O on both sides.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem5-q7',
      type: 'mcq',
      question: 'Calculate the Relative Molecular Mass ($M_r$) of Calcium hydroxide $\\text{Ca(OH)}_2$ ($\\text{Ca}=40, \\text{O}=16, \\text{H}=1$):',
      options: ['57 u', '58 u', '74 u', '98 u'],
      correctAnswer: '74 u',
      explanation: '40 + 2 × (16 + 1) = 40 + 34 = 74 u.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem5-q8',
      type: 'fill_blank',
      question: 'The chemical symbol of Potassium, derived from its Latin name Kalium, is ______.',
      correctAnswer: 'K',
      explanation: 'Potassium = Kalium (K).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem5-q9',
      type: 'true_false',
      question: 'To balance a chemical equation, you are allowed to change subscripts inside formulas as long as both sides match.',
      correctAnswer: false,
      explanation: 'Subscripts MUST NEVER be altered because changing subscripts changes the chemical substance itself; adjust coefficients only.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem5-q10',
      type: 'mcq',
      question: 'Which compound formula simplifies valencies $(4, 2) \\to (2, 1)$ correctly?',
      options: ['C₂O₄', 'CO₂', 'C₄O₂', 'CO'],
      correctAnswer: 'CO₂',
      explanation: 'Carbon (+4) and Oxygen (−2) simplify 4:2 to 2:1 before criss-crossing to CO₂.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem5-q11',
      type: 'mcq',
      question: 'Which is the ONLY common positively charged polyatomic radical (basic radical)?',
      options: ['Nitrate (NO₃⁻)', 'Hydroxide (OH⁻)', 'Ammonium (NH₄⁺)', 'Phosphate (PO₄³⁻)'],
      correctAnswer: 'Ammonium (NH₄⁺)',
      explanation: 'Ammonium (NH₄⁺) carries +1 charge and behaves like an alkali metal cation.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem5-q12',
      type: 'hots',
      question: 'A metal nitride has formula $\\text{M}_3\\text{N}_2$. What is the formula of the metal\'s **Phosphate**?',
      options: ['MPO₄', 'M₂(PO₄)₃', 'M₃(PO₄)₂', 'M₂PO₄'],
      correctAnswer: 'M₃(PO₄)₂',
      explanation: 'Nitride (N³⁻) has valency 3, so M has valency +2. Phosphate (PO₄³⁻) has valency 3 ⇒ criss-crossing M²⁺ and PO₄³⁻ yields M₃(PO₄)₂!',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'fc-c5-1',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'Latin names for Na, K, Fe, Cu, Ag, Au, Pb, Sn, Hg?',
      back: 'Natrium, Kalium, Ferrum, Cuprum, Argentum, Aurum, Plumbum, Stannum, Hydrargyrum.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c5-2',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'Difference between -ous and -ic metal valencies?',
      back: '-ous = LOWER valency (Fe²⁺ Ferrous, Cu⁺ Cuprous); -ic = HIGHER valency (Fe³⁺ Ferric, Cu²⁺ Cupric).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c5-3',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'Charges on Hydroxide, Nitrate, Carbonate, Sulphate, Phosphate, Ammonium?',
      back: 'OH⁻ (−1), NO₃⁻ (−1), CO₃²⁻ (−2), SO₄²⁻ (−2), PO₄³⁻ (−3), NH₄⁺ (+1).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c5-4',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'Difference between Sulphide, Sulphite, and Sulphate?',
      back: 'Sulphide = S²⁻ (no O); Sulphite = SO₃²⁻ (3 O); Sulphate = SO₄²⁻ (4 O).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c5-5',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'Golden rule of Criss-Cross parentheses & cancellation?',
      back: 'Divide valencies by GCD first (Mg²⁺O²⁻ → MgO), and bracket polyatomic ions whenever subscript ≥ 2: Ca(OH)₂.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c5-6',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'Cardinal rule while balancing chemical equations?',
      back: 'Change front COEFFICIENTS only—NEVER touch formula subscripts!',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c5-7',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'Define Atomicity with 4 examples.',
      back: 'Number of atoms in 1 element molecule: He (1), O₂ (2), O₃ (3), P₄ (4), S₈ (8).',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'fc-c5-8',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'How do you calculate Percentage Composition by mass?',
      back: '% Element = (Total atomic mass of that element in formula ÷ Total M_r) × 100%.',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'fc-c5-9',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'Distinguish Co vs CO and 2N vs N₂.',
      back: 'Co = Cobalt atom, CO = Carbon monoxide molecule; 2N = 2 separate N atoms, N₂ = 1 bonded N₂ molecule.',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'fc-c5-10',
      subjectId: 'chemistry',
      chapterId: 'chem-language',
      chapterTitle: 'Language of Chemistry',
      front: 'What do Δ, ↑, ↓ mean in chemical equations?',
      back: 'Δ = heat supplied; ↑ = gas evolved; ↓ = insoluble precipitate formed.',
      category: 'Definition',
      importance: 'Standard'
    }
  ]
};
