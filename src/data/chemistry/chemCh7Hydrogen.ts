import { Chapter } from '../../types';

export const CHEM_CH7_HYDROGEN: Chapter = {
  id: 'chem-hydrogen',
  subjectId: 'chemistry',
  chapterNumber: 7,
  title: 'Hydrogen',
  subtitle: 'Discovery & cosmic abundance of hydrogen, preparation from cold water/steam/alkalis/acids (granulated zinc + dil. H₂SO₄/HCl), purification & downward displacement of water collection, Bosch industrial process, Redox (oxidation vs reduction), and burning pop-sound test',
  term: 'Annual',
  estimatedMinutes: 90,
  notes: {
    introduction: `Look up at the blazing midday Sun and every twinkling star in the night sky: roughly **75% of the visible Universe** is built out of the very simplest, lightest atom known to science—**Hydrogen ($\\text{H}_2$)**! Discovered as *"inflammable air"* by **Henry Cavendish** in 1766 and later named **Hydrogen** (*hydro = water, genes = producer*) by **Antoine Lavoisier** because burning it yields pure water, hydrogen is both the lightest element on Earth ($14.4\\times$ lighter than air!) and the cleanest high-energy rocket fuel powering spacecraft launches.

Even more centrally for Class 8 Chemistry, Hydrogen introduces the dual world of **Oxidation and Reduction (Redox Reactions)**—learning why stripping oxygen away from hot black copper(II) oxide turns it glowing pink copper!

In Chapter 7 of Class 8 ICSE Chemistry (*Gem's Chemistry / Concise Chemistry*), we study how reactive metals displace hydrogen from **cold water ($\\text{Na, K, Ca}$)**, **steam ($\\text{Mg, Zn, Fe}$ reversible $\\text{Fe}_3\\text{O}_4$)**, **hot alkalis ($\\text{Zn, Al, Pb}$)**, and **dilute acids**; master the **Laboratory Preparation using Granulated Zinc + dilute $\\text{H}_2\\text{SO}_4$ / $\\text{HCl}$** (including why **Nitric acid $\\text{HNO}_3$ is avoided** and how $\\text{AsH}_3/\\text{H}_2\\text{S}/\\text{H}_2\\text{O}$ impurities are scrubbed clean!); examine **Bosch's Industrial Process**; master **Oxidation vs Reduction**; and test pure hydrogen's unmistakable **pale-blue flame and sharp "pop" sound**.`,
    learningObjectives: [
      'State Hydrogen\'s historical discovery (Henry Cavendish, 1766; named by Lavoisier), cosmic abundance, and isotopes.',
      'Write balanced equations for Hydrogen preparation from Cold Water (K, Na, Ca), Boiling Water/Steam (Mg, Zn, Fe reversible Fe₃O₄), Dilute Acids, and Hot Concentrated Alkalis (Zn, Al, Pb).',
      'Draw/explain the complete Laboratory Preparation of Hydrogen using Granulated Zinc + dilute H₂SO₄: apparatus, downward displacement of water collection, drying agents (anhydrous CaCl₂ vs conc. H₂SO₄), and chemical reasons why dil. HNO₃ and pure Zn are avoided.',
      'Describe the industrial **Bosch Process** (Water Gas from coke + steam at 1,000°C, Water-Gas Shift reaction with Fe₂O₃ catalyst, and CO₂ scrubbing).',
      'Define Oxidation and Reduction (electron/oxygen/hydrogen definitions), identify Oxidising Agents and Reducing Agents in Redox reactions like $\\text{CuO} + \\text{H}_2 \\to \\text{Cu} + \\text{H}_2\\text{O}$, and list hydrogen\'s major uses.'
    ],
    topics: [
      {
        id: 'chem-ch7-t1',
        title: '1. Preparation of Hydrogen: Water, Steam, Acids & Alkalis',
        content: `Because hydrogen sits at **[H]** in the middle of the Metal Activity Series, every metal **above hydrogen** ($\\text{K, Na, Ca, Mg, Al, Zn, Fe, Pb}$) can displace hydrogen from water or acids—with **dramatically decreasing vigour** down the series!`,
        subtopics: [
          {
            subheading: '1.1 Action of Metals on Water & Steam',
            body: `1. **Very Reactive Metals on Cold Water**:
   - **Potassium ($2\\text{K} + 2\\text{H}_2\\text{O} \\to 2\\text{KOH} + \\text{H}_2\\uparrow$)**: Violent reaction; darts over water catching **lilac flame** instantly!
   - **Sodium ($2\\text{Na} + 2\\text{H}_2\\text{O} \\to 2\\text{NaOH} + \\text{H}_2\\uparrow$)**: Melts into a silvery globule skittering rapidly across water with **golden-yellow sparks**. *(Stored under kerosene to guard against moisture/air!)*
   - **Calcium ($\\text{Ca} + 2\\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{H}_2\\uparrow$)**: Smooth, steady safe effervescence; water turns milky (sparingly soluble calcium hydroxide), Calcium sinks cleanly instead of melting or burning!

2. **Moderately Reactive Metals on Boiling Water / Steam**:
   - **Magnesium + Boiling water / Steam**: $\\text{Mg} + \\text{H}_2\\text{O}\\text{ (steam)} \\to \\text{MgO} + \\text{H}_2\\uparrow$ (burns bright white ash).
   - **Zinc + Steam**: $\\text{Zn} + \\text{H}_2\\text{O}\\text{ (steam)} \\to \\text{ZnO} + \\text{H}_2\\uparrow$ (yellow hot / white cold).
   - **Red-Hot Iron + Steam (REVERSIBLE!)**:
     $$3\\text{Fe} + 4\\text{H}_2\\text{O}\\text{ (steam)} \\rightleftharpoons \\text{Fe}_3\\text{O}_4\\text{ (triferric tetroxide)} + 4\\text{H}_2\\uparrow$$`,
            keyPoint: 'Why does Potassium catch fire on cold water while Calcium bubbles calmly? Potassium\'s heat of reaction immediately ignites evolved H₂ gas (lilac K vapour colour); Calcium reacts slower so H₂ escapes unignited!'
          },
          {
            subheading: '1.2 Action of Hot Concentrated Alkalis (Amphoteric Metals: Zn, Al, Pb)',
            body: `Amphoteric metals (**Zinc, Aluminium, Lead**) uniquely dissolve even in boiling **concentrated $\\text{NaOH}$ or $\\text{KOH}$** to liberate pure Hydrogen gas and soluble aluminate/zincate salts:
- **Zinc**: $\\text{Zn} + 2\\text{NaOH} \\xrightarrow{\\Delta} \\text{Na}_2\\text{ZnO}_2\\text{ (sodium zincate)} + \\text{H}_2\\uparrow$
- **Aluminium**: $2\\text{Al} + 2\\text{NaOH} + 2\\text{H}_2\\text{O} \\to 2\\text{NaAlO}_2\\text{ (sodium aluminate)} + 3\\text{H}_2\\uparrow$`,
            keyPoint: 'Remember the 3 Amphoteric Metals that release H₂ with boiling NaOH/KOH: Zinc (Zn), Aluminium (Al), and Lead (Pb)!'
          }
        ],
        definitions: [
          { term: 'Water Gas', definition: 'Equimolar mixture of Carbon monoxide and Hydrogen ($\\text{CO} + \\text{H}_2$) formed by passing steam over white-hot coke at $1,000^\\circ\\text{C}$.' },
          { term: 'Occlusion', definition: 'Property of certain metals (Palladium, Platinum, Nickel) to adsorb large volumes of hydrogen gas onto their surfaces.' }
        ],
        realLifeExample: 'Laboratory Sodium metal is ALWAYS stored immersed inside glass bottles of **kerosene (paraffin oil)** because moisture or humid air triggers violent hydrogen ignition right on the table!',
        commonMistakes: [
          {
            mistake: 'Writing $\\text{Fe} + \\text{H}_2\\text{O} \\to \\text{FeO} + \\text{H}_2$ for red-hot iron + steam.',
            correction: 'Steam over red-hot iron produces magnetic **triferric tetroxide ($\\text{Fe}_3\\text{O}_4$)** reversibly: **$3\\text{Fe} + 4\\text{H}_2\\text{O} \\rightleftharpoons \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2\\uparrow$**!'
          }
        ]
      },
      {
        id: 'chem-ch7-t2',
        title: '2. Laboratory Preparation of Hydrogen & The Bosch Industrial Process',
        content: `In school laboratories, Hydrogen is never made from explosive Sodium or slow steam ovens—it is prepared smoothly at room temperature using **Granulated Zinc** and **dilute Sulphuric Acid ($\\text{H}_2\\text{SO}_4$)** (or dilute $\\text{HCl}$).`,
        subtopics: [
          {
            subheading: '2.1 Lab Preparation: Reactants, Impurities, Collection & Precautions',
            body: `**Reaction**:
$$\\text{Zn\\ (granulated)} + \\text{H}_2\\text{SO}_4\\text{ (dilute)} \\longrightarrow \\text{ZnSO}_4\\text{ (aq)} + \\text{H}_2\\uparrow$$

**Five Crucial ICSE Lab Questions Answered**:
1. **Why GRANULATED Zinc instead of ultra-pure Zinc?** Commercial granulated zinc contains a tiny trace of **copper impurity** which acts as a **catalyst**, speeding up brisk smooth hydrogen evolution (completely pure Zn reacts sluggishly!).
2. **Why NOT use Dilute Nitric Acid ($\\text{HNO}_3$)?** Nitric acid is a **strong oxidising agent**—it oxidises nascent hydrogen immediately into **water** while releasing toxic nitrogen oxides ($\\text{NO}/\\text{NO}_2$) instead of $\\text{H}_2$! *(Only very dilute 1% $\\text{HNO}_3$ with cold Mg/Mn yields $\\text{H}_2$.)*
3. **Why NOT use Concentrated Sulphuric Acid?** Hot conc. $\\text{H}_2\\text{SO}_4$ oxidises hydrogen and evolves choking **sulphur dioxide ($\\text{SO}_2$)**!
4. **Why Collect Over Water (Downward Displacement of Water)?** Hydrogen is **virtually insoluble in water** AND forms an **explosive mixture with air**—collecting over water pushes out all air safely! *(Note: Never use upward air displacement even though $\\text{H}_2$ is lighter than air because $\\text{H}_2 + \\text{air}$ explodes on any spark!)*
5. **Purification & Drying**: Trace impurities ($\\text{H}_2\\text{S}, \\text{AsH}_3, \\text{CO}_2$) scrub out via $\\text{Pb(NO}_3)_2$, $\\text{AgNO}_3$, and $\\text{KOH}$ wash bottles; moisture is dried using **fused anhydrous Calcium Chloride ($\\text{CaCl}_2$)** or $\\text{P}_2\\text{O}_5$ (safe!). **Caution**: Keep flames far away from the generating flask and check purity with a test tube before lighting the jet!`,
            keyPoint: 'Granulated Zn works faster due to Cu trace catalyst; Avoid dil. HNO₃ (oxidising agent → water + NO₂); Collect by downward displacement of WATER (virtually insoluble + avoids explosive air mix)!'
          },
          {
            subheading: '2.2 Industrial Production: The Bosch Process (Coal + Steam)',
            body: `Industrially, tonnes of hydrogen for ammonia fertilisers are made cheaply via **Bosch's two-step process**:
1. **Step 1 — Formation of Water Gas ($1,000^\\circ\\text{C}$, Endothermic)**: Pass superheated steam over white-hot coke:
   $$\\text{C\\ (coke)} + \\text{H}_2\\text{O\\ (steam)} \\xrightarrow{1000^\\circ\\text{C}} \\underbrace{\\text{CO} + \\text{H}_2}_{\\text{Water Gas}} - \\text{Heat}$$
2. **Step 2 — Water-Gas Shift Reaction ($450^\\circ\\text{C}$, $\\text{Fe}_2\\text{O}_3 / \\text{Cr}_2\\text{O}_3$ catalyst)**: Mix water gas with excess steam over heated iron(III) oxide catalyst to oxidise CO into removable $\\text{CO}_2$:
   $$(\\text{CO} + \\text{H}_2) + \\text{H}_2\\text{O} \\xrightarrow{450^\\circ\\text{C},\\text{ Fe}_2\\text{O}_3} \\text{CO}_2\\uparrow + 2\\text{H}_2\\uparrow + \\text{Heat}$$
3. **Step 3 — Separation**: Bubble gas mixture under high pressure through **cold water** (or caustic potash $\\text{KOH}$) to dissolve $\\text{CO}_2$, and pass through ammoniacal cuprous chloride ($\\text{CuCl}$) to scrub trace unreacted $\\text{CO}$, leaving pure compressed $\\text{H}_2$!`,
            keyPoint: 'Bosch Process: Step 1 Coke + Steam (1,000°C) → Water Gas (CO + H₂); Step 2 Water Gas + Steam (450°C, Fe₂O₃ catalyst) → CO₂ + 2H₂!'
          }
        ],
        diagram: {
          id: 'diag-chem-hydrogen',
          title: 'Laboratory Preparation of Hydrogen (Granulated Zinc + dil. H₂SO₄)',
          caption: 'Thistle funnel acid feed (tip dipped below liquid), Zinc granules in flat-bottom flask, and Downward Displacement of Water collection over beehive shelf.',
          svgFigure: 'chem_hydrogen_prep'
        },
        definitions: [
          { term: 'Granulated Zinc', definition: 'Commercial zinc containing trace copper catalyst that ensures rapid, steady hydrogen evolution with dilute H₂SO₄.' },
          { term: 'Bosch Process', definition: 'Two-stage industrial method producing hydrogen from white-hot coke and steam via Water Gas.' }
        ],
        realLifeExample: 'Why is the **thistle funnel stem** always dipped cleanly below the acid level inside the hydrogen flask? Because if its tip sits above the acid liquid, newly generated hydrogen gas leaks right back up the open funnel instead of going through the delivery tube to the water trough!',
        commonMistakes: [
          {
            mistake: 'Collecting hydrogen by upward displacement of air (holding an empty jar upside down in air) for a routine bench experiment.',
            correction: 'Hydrogen + Oxygen in air forms an **explosive oxy-hydrogen detonating mixture**! Safe labs collect hydrogen solely by **downward displacement of water**.'
          }
        ]
      },
      {
        id: 'chem-ch7-t3',
        title: '3. Properties, Pop-Sound Test & Major Uses of Hydrogen',
        content: `Pure Hydrogen is a **colourless, odourless, tasteless, non-toxic gas**, completely **neutral to dry or moist litmus** ($\\text{H}_2$ neither turns blue red nor red blue!). Being the lightest substance in nature (density $0.09\\text{ g/L}$, $14.4\\times$ lighter than air), hydrogen-filled balloons soar skyward—though modern airships now replace flammable hydrogen with **non-flammable Helium** after the 1937 *Hindenburg* airship fire!`,
        subtopics: [
          {
            subheading: '3.1 Combustibility (Pop Test) & Reactions with Non-Metals',
            body: `- **Combustion & Flame Test**: Hydrogen does **NOT support combustion** (a burning splinter pushed *inside* a jar of pure $\\text{H}_2$ extinguishes!), yet Hydrogen itself **is highly combustible**, burning silently if pure with a **pale-blue flame** forming pure water droplets ($2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$)!
- **Air-Mix Pop Sound**: When hydrogen mixed with air meets a burning matchstick at the test-tube mouth, it burns explosively with a crisp **"POP" sound**! *(Confirming Hydrogen gas cleanly in practical exams!)*
- **Key Chemical Reactions**:
  - **Chlorine (Photochemical in sunlight)**: $\\text{H}_2 + \\text{Cl}_2 \\xrightarrow{\\text{Sunlight}} 2\\text{HCl}$ (explodes in bright sun; smooth in diffused light!).
  - **Nitrogen (Haber's Process)**: $\\text{N}_2 + 3\\text{H}_2 \\xrightarrow{450^\\circ\\text{C},\\ 200\\text{ atm},\\ \\text{Fe/Mo}} 2\\text{NH}_3$.
  - **Sulphur**: $\\text{H}_2 + \\text{S} \\xrightarrow{\\Delta} \\text{H}_2\\text{S}$ (rotten-egg smell).`,
            keyPoint: 'Burning splinter pushed into H₂ jar: H₂ burns at the jar mouth with a pale-blue flame + sharp POP sound, while the flame deep inside the pure gas goes out!'
          },
          {
            subheading: '3.2 Major Industrial & Green Uses of Hydrogen',
            body: `1. **Haber's Ammonia Fertiliser Synthesis** ($\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$).
2. **Hydrogenation of Liquid Vegetable Oils** (Nickel catalyst at $180^\\circ\\text{C}$) converting unsaturated liquid oils into semi-solid *Vanaspati ghee / margarine*.
3. **Oxy-Hydrogen Welding Torch** ($\\sim 2,800^\\circ\\text{C}$) for cutting and welding thick steel plates.
4. **Liquid Hydrogen Rocket Fuel** (alongside liquid $\\text{O}_2$—zero carbon emissions, water exhaust only!) and clean hydrogen fuel-cell buses.
5. **Metal Extraction**: Reducing tungsten oxide ($\\text{WO}_3$) and copper(II) oxide ($\\text{CuO}$) to pure metals!`,
            keyPoint: 'Hydrogenation converts liquid unsaturated vegetable oil into solid saturated fat using H₂ and a Nickel (Ni) catalyst.'
          }
        ],
        definitions: [
          { term: 'Hydrogenation', definition: 'Addition of hydrogen across unsaturated liquid vegetable oils in the presence of a Nickel catalyst to yield solid fats.' },
          { term: 'Oxy-Hydrogen Flame', definition: 'Ultra-hot ~2,800°C flame produced by burning hydrogen with pure oxygen for cutting and welding metals.' }
        ],
        realLifeExample: 'ISRO\'s heaviest **LVM3 (Cryogenic Stage)** space rockets burn super-cooled liquid Hydrogen fuel with liquid Oxygen—emitting purely scorching **water steam** out of the rocket nozzle with highest thrust per kilogram!',
        commonMistakes: [
          {
            mistake: 'Confusing **Hydrogen (combusts with POP sound)** with **Oxygen (rekindles glowing splinter)** or **CO₂ (turns limewater milky)**.',
            correction: 'Oxygen supports burning without burning itself; Carbon dioxide puts fires out and clouds limewater; **Hydrogen burns itself with pale-blue flame + POP sound**!'
          }
        ]
      },
      {
        id: 'chem-ch7-t4',
        title: '4. Oxidation and Reduction (Redox Reactions)',
        content: `Whenever hot hydrogen gas passes over black **copper(II) oxide ($\\text{CuO}$)** inside a heated glass tube, a stunning transformation unfolds: the black powder glows **reddish-pink pure copper**, while glistening **water droplets** condense at the cool tube tip! Hydrogen stole oxygen cleanly away from copper—demonstrating **Redox (Simultaneous Oxidation & Reduction)**!`,
        subtopics: [
          {
            subheading: '4.1 Classical & Modern Electron Definitions of Oxidation vs Reduction',
            body: `- **Oxidation**:
  1. **Addition of Oxygen** (or any electronegative non-metal), OR
  2. **Removal of Hydrogen**, OR
  3. **Loss of Electrons (OIL)** — e.g., $\\text{Na} \\to \\text{Na}^+ + e^-$.
- **Reduction**:
  1. **Removal of Oxygen**, OR
  2. **Addition of Hydrogen**, OR
  3. **Gain of Electrons (RIG)** — e.g., $\\text{Cl}_2 + 2e^- \\to 2\\text{Cl}^-$.
  *(Mnemonic: **OIL RIG** — **O**xidation **I**s **L**oss of $e^-$; **R**eduction **I**s **G**ain of $e^-$!)*

**Why Oxidation & Reduction Always Occur Together (**REDOX**)**:
In $\\mathbf{\\text{CuO\\ (black)} + \\text{H}_2 \\xrightarrow{\\Delta} \\text{Cu\\ (pink)} + \\text{H}_2\\text{O}}$:
- **$\\text{CuO}$ loses Oxygen $\\to \\text{Cu}$**: So **$\\text{CuO}$ is REDUCED**! Because $\\text{CuO}$ *supplied* the oxygen to oxidise $\\text{H}_2$, **$\\text{CuO}$ is the OXIDISING AGENT**!
- **$\\text{H}_2$ gains Oxygen $\\to \\text{H}_2\\text{O}$**: So **$\\text{H}_2$ is OXIDISED**! Because $\\text{H}_2$ *removed* oxygen from $\\text{CuO}$, **$\\text{H}_2$ is the REDUCING AGENT**!

*(Careful! Notice the **swap rule**: The substance being **Oxidised** acts as the **Reducing Agent**; the substance being **Reduced** acts as the **Oxidising Agent**!)*`,
            keyPoint: 'SWAP RULE: Oxidised substance = Reducing Agent (H₂); Reduced substance = Oxidising Agent (CuO)!'
          }
        ],
        comparisonTable: {
          caption: 'Oxidation vs Reduction & Agents Comparison',
          headers: ['Feature', 'Oxidation', 'Reduction'],
          rows: [
            ['Oxygen Rule', '**Addition** of Oxygen', '**Removal** of Oxygen'],
            ['Hydrogen Rule', '**Removal** of Hydrogen', '**Addition** of Hydrogen'],
            ['Electron Rule (OIL RIG)', '**Loss** of electrons ($\\text{Fe}^{2+} \\to \\text{Fe}^{3+} + e^-$)', '**Gain** of electrons ($\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$)'],
            ['Agent Role', 'Substance **oxidised** is the **Reducing Agent**', 'Substance **reduced** is the **Oxidising Agent**'],
            ['Common Lab Agents', 'Oxidising agents: $\\text{O}_2, \\text{Cl}_2, \\text{HNO}_3, \\text{KMnO}_4, \\text{CuO}, \\text{H}_2\\text{O}_2$', 'Reducing agents: $\\text{H}_2, \\text{C}, \\text{CO}, \\text{H}_2\\text{S}, \\text{SO}_2, \\text{Na/Mg}$']
          ]
        },
        definitions: [
          { term: 'Oxidation', definition: 'Chemical process involving addition of oxygen, removal of hydrogen, or loss of electrons.' },
          { term: 'Reduction', definition: 'Chemical process involving removal of oxygen, addition of hydrogen, or gain of electrons.' },
          { term: 'Oxidising Agent', definition: 'Substance that supplies oxygen or removes hydrogen/electrons from another substance—itself getting reduced.' },
          { term: 'Reducing Agent', definition: 'Substance that removes oxygen or supplies hydrogen/electrons to another substance—itself getting oxidised.' }
        ],
        realLifeExample: 'When rust corrodes iron bridges ($\\text{Fe} \\to \\text{Fe}_2\\text{O}_3$), iron undergoes **oxidation**; inside blast furnaces, hot carbon monoxide reduces iron ore right back into molten pig iron (**$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\to 2\\text{Fe} + 3\\text{CO}_2$**)!',
        commonMistakes: [
          {
            mistake: 'Calling the substance that gets *oxidised* the "Oxidising Agent".',
            correction: 'Reverse! Think of a travel agent who *helps others travel*: an **Oxidising Agent** *oxidises the other reactant* while **getting reduced itself**! And a **Reducing Agent** *reduces the other reactant* while **getting oxidised itself**!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Granulated Zinc', definition: 'Zinc with trace copper catalyst used in lab hydrogen preparation.', category: 'Preparation' },
      { term: 'Bosch Process', definition: 'Industrial hydrogen manufacture via Water Gas ($\\text{C} + \\text{H}_2\\text{O}$) + Steam shift.', category: 'Industrial' },
      { term: 'Water Gas', definition: 'Fuel/synthesis mixture of Carbon monoxide + Hydrogen ($\\text{CO} + \\text{H}_2$).', category: 'Industrial' },
      { term: 'Hydrogenation', definition: 'Nickel-catalysed addition of $\\text{H}_2$ converting liquid oils into solid fats.', category: 'Uses' },
      { term: 'Pop-Sound Test', definition: 'Diagnostic test where $\\text{H}_2$ + air ignites with a crisp pop and pale-blue flame.', category: 'Tests' },
      { term: 'Oxidation', definition: 'Gain of oxygen, loss of hydrogen, or loss of electrons (OIL).', category: 'Redox' },
      { term: 'Reduction', definition: 'Loss of oxygen, gain of hydrogen, or gain of electrons (RIG).', category: 'Redox' },
      { term: 'Redox Reaction', definition: 'Reaction where oxidation and reduction take place simultaneously.', category: 'Redox' }
    ],
    formulaSheet: [
      { title: 'Cold Water + Active Metal', expression: '2Na + 2H₂O → 2NaOH + H₂↑   |   Ca + 2H₂O → Ca(OH)₂ + H₂↑', meaning: 'Ca sinks & bubbles calmly; Na/K melt & ignite' },
      { title: 'Red-Hot Iron + Steam (Reversible)', expression: '3Fe + 4H₂O (steam) ⇌ Fe₃O₄ + 4H₂↑', meaning: 'Produces magnetic iron oxide reversibly' },
      { title: 'Lab Preparation (Granulated Zn)', expression: 'Zn + H₂SO₄ (dil) → ZnSO₄ + H₂↑', meaning: 'Collected by downward displacement of water' },
      { title: 'Amphoteric Metal + Hot Alkali', expression: 'Zn + 2NaOH → Na₂ZnO₂ + H₂↑', meaning: 'Sodium zincate formed cleanly' },
      { title: 'Bosch Step 1 & Step 2', expression: 'C + H₂O → (CO + H₂)   |   CO + H₂ + H₂O → CO₂ + 2H₂', meaning: '1,000°C Water gas then 450°C Fe₂O₃ shift' },
      { title: 'Classic CuO Redox', expression: 'CuO (black) + H₂ → Cu (pink) + H₂O', meaning: 'CuO = Oxidising Agent; H₂ = Reducing Agent' }
    ],
    comparisonTables: [
      {
        title: 'Action of Metals on Water & Steam',
        headers: ['Metal', 'Reaction Condition', 'Observation', 'Products'],
        rows: [
          ['Potassium (K)', 'Cold water', 'Violent; darts & catches **lilac flame**', '$\\text{KOH} + \\text{H}_2$'],
          ['Sodium (Na)', 'Cold water', 'Melts to silver ball; **golden-yellow sparks**', '$\\text{NaOH} + \\text{H}_2$'],
          ['Calcium (Ca)', 'Cold water', 'Sinks; smooth steady bubbling; water turns **milky**', '$\\text{Ca(OH)}_2 + \\text{H}_2$'],
          ['Magnesium (Mg)', 'Boiling water / Steam', 'Burns briskly on heating in steam', '$\\text{MgO} + \\text{H}_2$'],
          ['Iron (Fe)', 'Red-hot + Steam', '**Reversible** reaction', '$\\text{Fe}_3\\text{O}_4 + \\text{H}_2$'],
          ['Copper / Silver (Cu, Ag)', 'Even red-hot steam', '**No reaction** (below Hydrogen)', 'None']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'chem7-ex1',
        question: 'Identify what is **Oxidised**, what is **Reduced**, the **Oxidising Agent**, and the **Reducing Agent** in: $\\text{H}_2\\text{S} + \\text{Cl}_2 \\to 2\\text{HCl} + \\text{S}$.',
        steps: [
          '1. $\\text{H}_2\\text{S}$ loses Hydrogen to become elemental $\\text{S}$ $\\implies$ **$\\text{H}_2\\text{S}$ is Oxidised** (and is the **Reducing Agent**).',
          '2. $\\text{Cl}_2$ gains Hydrogen to become $\\text{HCl}$ $\\implies$ **$\\text{Cl}_2$ is Reduced** (and is the **Oxidising Agent**).'
        ],
        finalAnswer: 'Oxidised = H₂S (Reducing Agent); Reduced = Cl₂ (Oxidising Agent).',
        keyRule: 'Even without Oxygen present, losing Hydrogen = Oxidation and gaining Hydrogen = Reduction!'
      },
      {
        id: 'chem7-ex2',
        question: 'In $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\to 2\\text{Fe} + 3\\text{CO}_2$, identify the reducing agent and oxidising agent.',
        steps: [
          '$\\text{Fe}_2\\text{O}_3$ loses oxygen $\\to \\text{Fe}$ (**Reduced** $\\implies$ **Oxidising Agent**).',
          '$\\text{CO}$ gains oxygen $\\to \\text{CO}_2$ (**Oxidised** $\\implies$ **Reducing Agent**).'
        ],
        finalAnswer: 'Oxidising Agent = Fe₂O₃; Reducing Agent = CO.',
        keyRule: 'Trace which reactant gained oxygen (Reducing Agent) vs lost oxygen (Oxidising Agent).'
      },
      {
        id: 'chem7-ex3',
        question: 'Why do we NOT use (a) dilute Nitric acid ($\\text{HNO}_3$) or (b) pure Sodium metal for preparing hydrogen in the school laboratory?',
        steps: [
          '(a) Dilute $\\text{HNO}_3$ is a strong **oxidising agent**; it immediately oxidises produced hydrogen into **water** while releasing toxic nitrogen oxides ($\\text{NO}/\\text{NO}_2$).',
          '(b) Pure Sodium reacts **violently and explosively** with acids and even cold water, spraying corrosive alkali/acid across the bench!'
        ],
        finalAnswer: 'dil. HNO₃ oxidises H₂ to H₂O; Na reacts explosively.',
        keyRule: 'Granulated Zn + dil. H₂SO₄/HCl offers safe, controllable room-temperature gas flow.'
      },
      {
        id: 'chem7-ex4',
        question: 'Why must a student ALWAYS test a tiny test tube of generated hydrogen away from the flask before igniting the delivery jet?',
        steps: [
          'At the start, the flask holds air mixed with freshly forming $\\text{H}_2$.',
          'Igniting an **air + hydrogen mixture** directly at the flask jet flashes backward into the flask, causing a violent **explosion** shattering glass!',
          'When a collected test tube burns quietly with a soft flame (instead of a sharp bark), all air is purged and the jet can be lit safely.'
        ],
        finalAnswer: 'Prevents flashback explosion of trapped hydrogen–air mixture inside the flask.',
        keyRule: 'Wait until pure H₂ burns silently in a test tube before lighting the jet.'
      },
      {
        id: 'chem7-ex5',
        question: 'Write balanced equations for Zinc reacting with (a) dilute $\\text{H}_2\\text{SO}_4$, (b) Steam, and (c) hot concentrated $\\text{NaOH}$.',
        steps: [
          '(a) $\\text{Zn} + \\text{H}_2\\text{SO}_4\\text{ (dil)} \\to \\text{ZnSO}_4 + \\text{H}_2\\uparrow$.',
          '(b) $\\text{Zn} + \\text{H}_2\\text{O\\ (steam)} \\to \\text{ZnO} + \\text{H}_2\\uparrow$.',
          '(c) $\\text{Zn} + 2\\text{NaOH\\ (conc)} \\xrightarrow{\\Delta} \\text{Na}_2\\text{ZnO}_2 + \\text{H}_2\\uparrow$.'
        ],
        finalAnswer: 'All three Zinc hydrogen-preparation equations balanced.',
        keyRule: 'Amphoteric Zinc produces H₂ with acids, steam, AND strong hot alkalis!'
      },
      {
        id: 'chem7-ex6',
        question: 'In the Bosch process, how is toxic Carbon Monoxide converted and how is $\\text{CO}_2$ separated from $\\text{H}_2$?',
        steps: [
          '1. Water gas ($\\text{CO} + \\text{H}_2$) is mixed with excess steam and passed at $450^\\circ\\text{C}$ over $\\text{Fe}_2\\text{O}_3$ catalyst, oxidising $\\text{CO} \\to \\text{CO}_2$ while doubling hydrogen ($\\text{CO} + \\text{H}_2 + \\text{H}_2\\text{O} \\to \\text{CO}_2 + 2\\text{H}_2$).',
          '2. Gas mixture bubbles under pressure through **cold water or KOH solution**, which dissolves away acidic $\\text{CO}_2$, leaving pure $\\text{H}_2$ insoluble.'
        ],
        finalAnswer: 'CO converts to CO₂ via steam over Fe₂O₃ (450°C); CO₂ dissolves in pressurised cold water/KOH.',
        keyRule: 'Carbon dioxide dissolves in water under pressure and turns KOH into K₂CO₃, whereas H₂ stays gaseous.'
      },
      {
        id: 'chem7-ex7',
        question: 'Why cannot concentrated Sulphuric acid ($\\text{H}_2\\text{SO}_4$) be used to **dry** wet hydrogen gas?Wait—actually why NOT dry *moist $\\text{H}_2$ from Zn/acid* with conc. $\\text{H}_2\\text{SO}_4$ vs Fused $\\text{CaCl}_2$? Explain ICSE lab safety note!',
        steps: [
          'Although cold conc. $\\text{H}_2\\text{SO}_4$ absorbs moisture, **trace heat or warm reaction can cause conc. $\\text{H}_2\\text{SO}_4$ to oxidise $\\text{H}_2$** into $\\text{SO}_2 + \\text{H}_2\\text{O}$—and conc. acid mishaps are hazardous.',
          'Therefore, neutral **fused anhydrous Calcium Chloride ($\\text{CaCl}_2$)** or **$\\text{P}_2\\text{O}_5$** is preferred in U-tubes to dry Hydrogen cleanly without reacting!'
        ],
        finalAnswer: 'Anhydrous fused CaCl₂ dries hydrogen safely without any risk of redox reaction.',
        keyRule: 'Dry neutral H₂ safely over fused anhydrous CaCl₂ (or P₂O₅).'
      },
      {
        id: 'chem7-ex8',
        question: 'Identify the Redox half-reactions in: $\\text{Zn} + \\text{Cu}^{2+} \\to \\text{Zn}^{2+} + \\text{Cu}$.',
        steps: [
          '**Oxidation half (OIL)**: $\\text{Zn} \\to \\text{Zn}^{2+} + 2e^-$ (Zinc loses 2 electrons $\\implies$ **Reducing Agent**).',
          '**Reduction half (RIG)**: $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$ (Copper ion gains 2 electrons $\\implies$ **Oxidising Agent**).'
        ],
        finalAnswer: 'Zn oxidised (Reducing agent); Cu²⁺ reduced (Oxidising agent).',
        keyRule: 'OIL RIG: Oxidation Is Loss of electrons; Reduction Is Gain of electrons.'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'chem7-e1',
          question: 'Who discovered Hydrogen gas and why did Lavoisier name it "Hydrogen"?',
          solutionSteps: ['Henry Cavendish (1766) isolated "inflammable air"; Antoine Lavoisier named it Hydrogen ("water-former") because burning it forms pure water.'],
          finalAnswer: 'Henry Cavendish; Lavoisier named it "water-producer".',
          marks: 2
        },
        {
          id: 'chem7-e2',
          question: 'What happens when a burning matchstick enters the mouth of a test tube containing Hydrogen?',
          solutionSteps: ['Hydrogen ignites at the mouth with a pale-blue flame and sharp **pop sound**.'],
          finalAnswer: 'Burns with a pale-blue flame and sharp POP sound.',
          marks: 2
        },
        {
          id: 'chem7-e3',
          question: 'Why is Sodium stored immersed under kerosene oil?',
          solutionSteps: ['To prevent violent contact with atmospheric moisture and oxygen, which ignites evolved hydrogen.'],
          finalAnswer: 'Protects Na from violent reaction with moisture and air.',
          marks: 2
        },
        {
          id: 'chem7-e4',
          question: 'Name the drying agent used cleanly to dry moist Hydrogen gas in the lab.',
          solutionSteps: ['Fused anhydrous Calcium Chloride ($\\text{CaCl}_2$) (or $\\text{P}_2\\text{O}_5$).'],
          finalAnswer: 'Anhydrous Calcium Chloride (CaCl₂)',
          marks: 1
        }
      ],
      medium: [
        {
          id: 'chem7-m1',
          question: 'Write balanced equations for Calcium and Magnesium reacting with cold water and steam respectively.',
          solutionSteps: [
            'Calcium + cold water: $\\text{Ca} + 2\\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{H}_2\\uparrow$.',
            'Magnesium + steam: $\\text{Mg} + \\text{H}_2\\text{O} \\to \\text{MgO} + \\text{H}_2\\uparrow$.'
          ],
          finalAnswer: 'Both balanced equations verified.',
          marks: 3
        },
        {
          id: 'chem7-m2',
          question: 'In $\\text{PbO} + \\text{H}_2 \\xrightarrow{\\Delta} \\text{Pb} + \\text{H}_2\\text{O}$, name the substance oxidised, substance reduced, oxidising agent, and reducing agent.',
          solutionSteps: [
            'Oxidised: $\\text{H}_2$ (gained O $\\to$ Reducing Agent).',
            'Reduced: $\\text{PbO}$ (lost O $\\to$ Oxidising Agent).'
          ],
          finalAnswer: 'Oxidised/Reducing Agent = H₂; Reduced/Oxidising Agent = PbO.',
          marks: 3
        },
        {
          id: 'chem7-m3',
          question: 'Why is Hydrogen collected by **downward displacement of water** instead of upward displacement of air?',
          solutionSteps: [
            '1. Hydrogen is virtually insoluble in water.',
            '2. Hydrogen mixes with air to form a dangerously explosive mixture; collecting over water keeps air completely excluded.'
          ],
          finalAnswer: 'Virtually insoluble in water and avoids forming explosive air mixtures.',
          marks: 3
        },
        {
          id: 'chem7-m4',
          question: 'Why are Helium-filled weather balloons replacing Hydrogen balloons today despite Hydrogen having higher lifting power?',
          solutionSteps: [
            'Hydrogen is intensely flammable and forms explosive oxy-hydrogen mixtures on tiny sparks.',
            'Helium is nearly as light ($2\\times \\text{H}_2$) yet completely inert and non-flammable.'
          ],
          finalAnswer: 'Helium is completely non-flammable and safe from explosions.',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'chem7-d1',
          question: 'Write balanced equations for the entire Bosch industrial process, naming temperature and catalyst for both steps.',
          solutionSteps: [
            'Step 1 (Water Gas, $1,000^\\circ\\text{C}$): $\\text{C} + \\text{H}_2\\text{O} \\xrightarrow{1000^\\circ\\text{C}} \\text{CO} + \\text{H}_2$.',
            'Step 2 (Shift Reaction, $450^\\circ\\text{C}$, $\\text{Fe}_2\\text{O}_3$ catalyst): $\\text{CO} + \\text{H}_2 + \\text{H}_2\\text{O} \\xrightarrow{450^\\circ\\text{C}, \\text{Fe}_2\\text{O}_3} \\text{CO}_2\\uparrow + 2\\text{H}_2\\uparrow$.'
          ],
          finalAnswer: 'Complete 2-step Bosch equations with exact conditions.',
          marks: 4
        },
        {
          id: 'chem7-d2',
          question: 'Why does commercial granulated zinc react smoothly with dilute $\\text{H}_2\\text{SO}_4$ while ultra-pure zinc strips barely bubble at all?',
          solutionSteps: [
            'Granulated zinc contains minute **copper impurities** acting as local electrochemical catalysts.',
            'Tiny Zn–Cu micro-cells accelerate hydrogen ion reduction swiftly, whereas pure zinc develops high hydrogen overpotential stalling the surface.'
          ],
          finalAnswer: 'Trace Copper impurity in granulated zinc catalyses smooth reaction.',
          marks: 4
        },
        {
          id: 'chem7-d3',
          question: 'Explain why **Lead** fails to produce steady continuous hydrogen with dilute sulphuric acid even though Lead sits slightly above [H] in the Activity Series.',
          solutionSteps: [
            'Lead reacts briefly with dilute $\\text{H}_2\\text{SO}_4$ to form **insoluble Lead(II) sulphate ($\\text{PbSO}_4$)**.',
            'This insoluble white crust immediately coats the lead metal, sealing it off from acid and stopping further reaction!'
          ],
          finalAnswer: 'Insoluble PbSO₄ layer coats Lead and halts the reaction.',
          marks: 4
        },
        {
          id: 'chem7-d4',
          question: 'Give an example of a reaction where **no oxygen atom appears at all**, yet it is still a genuine Redox reaction, and explain using electrons.',
          solutionSteps: [
            '$2\\text{Na} + \\text{Cl}_2 \\to 2\\text{NaCl}$.',
            'Sodium loses an electron ($\\text{Na} \\to \\text{Na}^+ + e^-$: **Oxidation**, Na = Reducing Agent).',
            'Chlorine gains an electron ($\\text{Cl}_2 + 2e^- \\to 2\\text{Cl}^-$: **Reduction**, $\\text{Cl}_2$ = Oxidising Agent).'
          ],
          finalAnswer: '2Na + Cl₂ → 2NaCl via electron loss (Na) and gain (Cl₂).',
          marks: 4
        }
      ]
    },
    practiceWorksheet: {
      title: 'Chemistry Chapter 7 Worksheet: Hydrogen & Redox Reactions (30 Marks)',
      instructions: 'Write balanced equations with arrows and state diagnostic flame/colour changes.',
      sections: [
        {
          sectionTitle: 'Section A: Objective Questions (1 × 5 = 5 Marks)',
          items: [
            '1. Name the gas evolved when Sodium reacts with cold water.',
            '2. What colour flame appears when Potassium hits water?',
            '3. Write the composition of Water Gas.',
            '4. Which catalyst converts liquid vegetable oil + H₂ into solid fat?',
            '5. Does pure Hydrogen gas turn moist red litmus blue?'
          ]
        },
        {
          sectionTitle: 'Section B: Lab Safeguards & Observations (2 × 4 = 8 Marks)',
          items: [
            '6. Why is dilute nitric acid NOT used with zinc to prepare hydrogen in the lab?',
            '7. Why should the lower end of the thistle funnel dip below acid level in the gas flask?',
            '8. What happens when hot hydrogen passes over heated black Copper(II) oxide?',
            '9. Give two uses of Hydrogen.'
          ]
        },
        {
          sectionTitle: 'Section C: Equations & Redox Identification (3 × 4 = 12 Marks)',
          items: [
            '10. Write balanced equations for: (a) Aluminium + hot NaOH + water; (b) Red-hot Iron + Steam.',
            '11. Identify Oxidised, Reduced, Oxidising agent, and Reducing agent in: $\\text{Fe}_2\\text{O}_3 + 3\\text{H}_2 \\to 2\\text{Fe} + 3\\text{H}_2\\text{O}$.',
            '12. Explain the two reactions of the Industrial Bosch Process.',
            '13. Compare the action of Calcium vs Potassium on cold water.'
          ]
        },
        {
          sectionTitle: 'Section D: Diagnostic Reasoning (5 Marks)',
          items: [
            '14. Describe the complete lab preparation of Hydrogen from Granulated Zinc, including collection method, impurities removed, drying agent, and confirmation test.'
          ]
        }
      ],
      answerKey: [
        '1. Hydrogen (H₂).',
        '2. Lilac / violet flame.',
        '3. Equimolar CO + H₂.',
        '4. Finely divided Nickel (Ni).',
        '5. No; H₂ is neutral to litmus.',
        '6. HNO₃ is a strong oxidising agent that oxidises H₂ into water + NO/NO₂ fumes.',
        '7. Prevents newly generated hydrogen gas from escaping up through the open thistle funnel.',
        '8. Black CuO reduces to reddish-pink copper metal while water droplets condense (CuO + H₂ → Cu + H₂O).',
        '9. Ammonia manufacture (Haber), hydrogenation of oils, oxy-hydrogen welding, rocket fuel.',
        '10. (a) 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑; (b) 3Fe + 4H₂O ⇌ Fe₃O₄ + 4H₂↑.',
        '11. Oxidised/Reducing Agent = H₂; Reduced/Oxidising Agent = Fe₂O₃.',
        '12. C + H₂O → CO + H₂ (1,000°C); then CO + H₂ + H₂O → CO₂ + 2H₂ (450°C, Fe₂O₃).',
        '13. K floats, darts, melts, burns with lilac flame; Ca sinks, bubbles smoothly without catching fire, turning water milky.',
        '14. Zn + dil. H₂SO₄ → ZnSO₄ + H₂↑; collected by downward displacement of water; dried over fused CaCl₂; burns with pale-blue flame + pop sound.'
      ]
    },
    examPreparationTips: [
      'Always learn the **five "Why?" questions of lab H₂ preparation**: Why granulated Zn? Why not HNO₃? Why thistle funnel dipped? Why downward displacement of water? Why anhydrous CaCl₂?',
      'Remember **Redox Swap**: Whatever gets **O**xidised is the **R**educing Agent; whatever gets **R**educed is the **O**xidising Agent.'
    ],
    chapterSummary: [
      'Hydrogen (discovered by Cavendish, named by Lavoisier) is the lightest gas, neutral to litmus, burning with a pale-blue flame & pop sound.',
      'Prepared in labs via Granulated Zinc + dil. H₂SO₄ (collected over water; avoid oxidising dil. HNO₃).',
      'Industrially manufactured cheaply via the Bosch Process (coke + steam → Water gas → shift to CO₂ + 2H₂).',
      'Oxidation = +O / −H / −e⁻ (OIL); Reduction = −O / +H / +e⁻ (RIG). Both always happen together in Redox.',
      'Key industrial uses of hydrogen include ammonia synthesis (Haber process), hydrogenation of vegetable oils into vanaspati ghee, oxy-hydrogen welding flames, and liquid rocket propellant.'
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Why is dilute nitric acid NOT used in the laboratory preparation of hydrogen?',
        answer: 'Dilute nitric acid ($\\text{HNO}_3$) is a powerful **oxidising agent**. As soon as hydrogen starts forming, $\\text{HNO}_3$ oxidises it into **water ($\\text{H}_2\\text{O}$)** and itself reduces to nitrogen oxides ($\\text{NO}$ or $\\text{NO}_2$).',
        type: 'Reasoning'
      },
      {
        question: 'How do you confirm chemically that a jar of gas is Hydrogen?',
        answer: 'Bring a burning splint near the mouth of the gas jar: pure/air-mixed hydrogen ignites with a characteristic sharp **"POP" sound** and pale-blue flame, leaving misty droplets of pure water (turning dry blue cobalt chloride paper pink!).',
        type: 'Short Answer'
      },
      {
        question: 'Describe the two stages of the Bosch Process for industrial manufacture of Hydrogen.',
        answer: '1. Steam passes over white-hot coke at $1,000^\\circ\\text{C}$ producing **Water Gas**: $\\text{C} + \\text{H}_2\\text{O} \\to \\text{CO} + \\text{H}_2$.\n2. Water gas mixed with excess steam passes at $450^\\circ\\text{C}$ over **$\\text{Fe}_2\\text{O}_3$ catalyst**: $\\text{CO} + \\text{H}_2 + \\text{H}_2\\text{O} \\to \\text{CO}_2 + 2\\text{H}_2$. $\\text{CO}_2$ is dissolved out in pressurised cold water/KOH.',
        type: 'Long Answer'
      },
      {
        question: 'Define Oxidising Agent and Reducing Agent with the example $\\text{ZnO} + \\text{C} \\to \\text{Zn} + \\text{CO}$.',
        answer: 'Here **Carbon ($\\text{C}$)** removes oxygen from $\\text{ZnO}$ and gets oxidised to $\\text{CO}$, so Carbon is the **Reducing Agent**. **Zinc oxide ($\\text{ZnO}$)** supplies oxygen to carbon and gets reduced to Zn metal, so $\\text{ZnO}$ is the **Oxidising Agent**.',
        type: 'Long Answer'
      },
      {
        question: 'What happens when Hydrogen reacts with Sulphur vs Chlorine in sunlight?',
        answer: 'Passing $\\text{H}_2$ over heated boiling sulphur forms rotten-egg smelling **Hydrogen sulphide ($\\text{H}_2\\text{S}$)**: $\\text{H}_2 + \\text{S} \\to \\text{H}_2\\text{S}$. Mixing $\\text{H}_2 + \\text{Cl}_2$ in direct sunlight explodes forming **Hydrogen chloride**: $\\text{H}_2 + \\text{Cl}_2 \\to 2\\text{HCl}$.',
        type: 'Short Answer'
      },
      {
        question: 'Why does Calcium sink in cold water while Sodium floats and skitters wildly on top?',
        answer: 'Sodium has lower density ($0.97\\text{ g/cm}^3 < 1$) and melts from huge reaction heat, skating over the surface; Calcium is denser ($1.55\\text{ g/cm}^3 > 1$) so it sinks cleanly and bubbles calm $\\text{H}_2$ upward.',
        type: 'Reasoning'
      },
      {
        question: 'Can a piece of pure Magnesium turn into Hydrogen with very dilute (~1%) cold Nitric acid even though Zinc cannot?',
        answer: 'Yes! Magnesium and Manganese are strong enough reducers that with ultra-dilute (1%), ice-cold $\\text{HNO}_3$ they release $\\text{H}_2$ gas ($\\text{Mg} + 2\\text{HNO}_3 \\to \\text{Mg(NO}_3)_2 + \\text{H}_2\\uparrow$) before nitric acid can oxidise it completely.',
        type: 'HOTS'
      },
      {
        question: 'In the reaction $\\text{MnO}_2 + 4\\text{HCl} \\to \\text{MnCl}_2 + 2\\text{H}_2\\text{O} + \\text{Cl}_2$, identify the Oxidising and Reducing agents.',
        answer: '$\\text{HCl}$ loses Hydrogen to become $\\text{Cl}_2$ (**Oxidised $\\implies$ Reducing Agent**). $\\text{MnO}_2$ loses Oxygen to become $\\text{MnCl}_2$ (**Reduced $\\implies$ Oxidising Agent**).',
        type: 'HOTS'
      }
    ],
    practiceExercises: [
      {
        question: 'Write balanced equations for Hydrogen reacting with (a) Nitrogen (Haber) and (b) Copper(II) oxide.',
        hint: 'Check 3 H₂ for N₂.',
        answerGuide: '(a) N₂ + 3H₂ ⇌ 2NH₃; (b) CuO + H₂ → Cu + H₂O.'
      },
      {
        question: 'Why is hydrogen NOT collected by downward displacement of air (or upward displacement of air)?',
        hint: 'Mixes explosively with air oxygen.',
        answerGuide: 'Although lighter than air, H₂ + air forms an explosive mixture; downward displacement of water excludes air safely.'
      },
      {
        question: 'Identify oxidised & reduced species in $\\text{Fe} + \\text{S} \\to \\text{FeS}$ using electron loss/gain.',
        hint: 'Fe → Fe²⁺ + 2e⁻; S + 2e⁻ → S²⁻.',
        answerGuide: 'Fe is oxidised (Reducing agent); S is reduced (Oxidising agent).'
      }
    ]
  },
  quizQuestions: [
    {
      id: 'chem7-q1',
      type: 'mcq',
      question: 'In the school laboratory, Hydrogen is safely prepared using dilute sulphuric acid and:',
      options: ['Pure Copper turnings', 'Granulated Zinc', 'Sodium pieces', 'Silver wire'],
      correctAnswer: 'Granulated Zinc',
      explanation: 'Granulated zinc (with trace Cu impurity catalyst) reacts steadily at room temperature.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem7-q2',
      type: 'mcq',
      question: 'Why is dilute Nitric acid NOT normally used to prepare Hydrogen from metals?',
      options: ['It freezes too quickly', 'It is a strong oxidising agent that oxidises H₂ into water', 'It cannot dissolve metals', 'It turns H₂ solid'],
      correctAnswer: 'It is a strong oxidising agent that oxidises H₂ into water',
      explanation: 'HNO₃ oxidises nascent hydrogen immediately to H₂O while evolving nitrogen oxides.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem7-q3',
      type: 'mcq',
      question: 'When Potassium metal touches cold water, hydrogen catches fire instantly with a ______ flame:',
      options: ['Golden yellow', 'Brick red', 'Lilac / Violet', 'Emerald green'],
      correctAnswer: 'Lilac / Violet',
      explanation: 'Potassium imparts a characteristic lilac flame colour; Sodium burns golden-yellow.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem7-q4',
      type: 'mcq',
      question: 'Red-hot Iron reacts reversibly with steam to form:',
      options: ['FeO + H₂', 'Fe₂O₃ + H₂', 'Fe₃O₄ + H₂', 'Fe(OH)₃'],
      correctAnswer: 'Fe₃O₄ + H₂',
      explanation: '3Fe + 4H₂O (steam) ⇌ Fe₃O₄ + 4H₂↑.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem7-q5',
      type: 'mcq',
      question: 'What is "Water Gas" produced in Step 1 of the industrial Bosch Process?',
      options: ['CO₂ + H₂', 'CO + H₂', 'N₂ + 3H₂', 'CH₄ + H₂O'],
      correctAnswer: 'CO + H₂',
      explanation: 'C(coke) + H₂O(steam) at 1,000°C produces equimolar Carbon monoxide + Hydrogen (Water gas).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem7-q6',
      type: 'mcq',
      question: 'In the reaction $\\text{CuO} + \\text{H}_2 \\to \\text{Cu} + \\text{H}_2\\text{O}$, which substance is the **Reducing Agent**?',
      options: ['CuO', 'H₂', 'Cu', 'H₂O'],
      correctAnswer: 'H₂',
      explanation: 'H₂ removes oxygen from CuO (getting oxidised itself), so H₂ is the Reducing Agent.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem7-q7',
      type: 'mcq',
      question: 'Which catalyst is used during the hydrogenation of liquid vegetable oils into solid vanaspati fat?',
      options: ['Manganese dioxide', 'Iron', 'Nickel', 'Platinum'],
      correctAnswer: 'Nickel',
      explanation: 'Finely divided Nickel (Ni) at ~180°C catalyses oil hydrogenation.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem7-q8',
      type: 'fill_blank',
      question: 'By the electronic definition, Oxidation is the ______ of electrons (OIL).',
      correctAnswer: 'loss',
      explanation: 'OIL RIG: Oxidation Is Loss of electrons; Reduction Is Gain.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem7-q9',
      type: 'true_false',
      question: 'Hydrogen turns moist red litmus paper bright blue.',
      correctAnswer: false,
      explanation: 'Hydrogen gas is completely neutral to both red and blue litmus papers.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem7-q10',
      type: 'mcq',
      question: 'Boiling concentrated NaOH releases Hydrogen gas when heated with Zinc, forming:',
      options: ['Zinc hydroxide', 'Sodium zincate (Na₂ZnO₂)', 'Sodium oxide', 'Zinc carbonate'],
      correctAnswer: 'Sodium zincate (Na₂ZnO₂)',
      explanation: 'Zn + 2NaOH → Na₂ZnO₂ + H₂↑.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem7-q11',
      type: 'mcq',
      question: 'How is Hydrogen safely collected in a laboratory gas jar?',
      options: ['Upward displacement of air', 'Downward displacement of air', 'Downward displacement of water', 'Bubbling through limewater'],
      correctAnswer: 'Downward displacement of water',
      explanation: 'Hydrogen is virtually insoluble in water and collecting over water prevents explosive air mixing.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem7-q12',
      type: 'hots',
      question: 'During the Bosch process, why is Calcium hydroxide or cold water under pressure used at the end?',
      options: ['To dissolve unreacted carbon', 'To absorb acidic CO₂ gas leaving pure insoluble H₂', 'To liquefy H₂', 'To catalyse Fe₂O₃'],
      correctAnswer: 'To absorb acidic CO₂ gas leaving pure insoluble H₂',
      explanation: 'CO₂ dissolves under pressure in water or reacts with KOH/Ca(OH)₂ while neutral H₂ stays gaseous.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'fc-c7-1',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'Lab Preparation equation & why Granulated Zinc is chosen?',
      back: 'Zn + H₂SO₄(dil) → ZnSO₄ + H₂↑. Trace Cu in granulated zinc acts as catalyst for steady flow.',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c7-2',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'Why avoid dilute HNO₃ when preparing Hydrogen?',
      back: 'HNO₃ is a strong oxidising agent—it oxidises H₂ straight into water and emits NO/NO₂.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c7-3',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'Why collect Hydrogen over water (downward displacement of water)?',
      back: 'Practically insoluble in water and excludes air safely (preventing explosive H₂ + air mix).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c7-4',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'Action of K, Na, Ca on cold water (observations + flames)?',
      back: 'K: lilac flame; Na: melts into ball, golden-yellow flame; Ca: sinks, calm bubbles, milky Ca(OH)₂.',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c7-5',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'Equation for Red-Hot Iron + Steam?',
      back: '3Fe + 4H₂O (steam) ⇌ Fe₃O₄ + 4H₂↑ (reversible!).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c7-6',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'Two equations of the Industrial Bosch Process?',
      back: '(1) C + H₂O (1000°C) → CO + H₂ (Water gas); (2) CO + H₂ + H₂O (450°C, Fe₂O₃) → CO₂ + 2H₂.',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c7-7',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'Amphoteric metals + hot NaOH equation for Zinc?',
      back: 'Zn + 2NaOH → Na₂ZnO₂ (sodium zincate) + H₂↑ (also Al & Pb).',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'fc-c7-8',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'Diagnostic flame test for Hydrogen gas?',
      back: 'Neutral to litmus; burns with a pale-blue flame and sharp POP sound (water mist forms).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c7-9',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'Define Oxidation & Reduction (Oxygen, Hydrogen, Electrons).',
      back: 'Oxidation: +O, −H, or loss of e⁻ (OIL). Reduction: −O, +H, or gain of e⁻ (RIG).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c7-10',
      subjectId: 'chemistry',
      chapterId: 'chem-hydrogen',
      chapterTitle: 'Hydrogen',
      front: 'In CuO + H₂ → Cu + H₂O, name Oxidising Agent & Reducing Agent.',
      back: 'CuO (gets reduced) = Oxidising Agent; H₂ (gets oxidised) = Reducing Agent.',
      category: 'Scientific Law',
      importance: 'Essential'
    }
  ]
};
