import { Chapter } from '../../types';

export const CHEM_CH3_ELEMENTS_MIXTURES: Chapter = {
  id: 'chem-elements-mixtures',
  subjectId: 'chemistry',
  chapterNumber: 3,
  title: 'Elements, Compounds and Mixtures',
  subtitle: 'Pure substances vs mixtures, metals/non-metals/metalloids/noble gases, compounds vs mixtures (Fe + S vs FeS), homogeneous vs heterogeneous solutions & alloys, and 10 separation techniques (fractional distillation, separating funnel, chromatography, sublimation)',
  term: 'Half-Yearly',
  estimatedMinutes: 95,
  notes: {
    introduction: `Open a pencil box, a kitchen pantry, and a science reagent rack: inside you find silvery aluminium rulers (**element**), snowy white table sugar (**compound**), sparkling brass compasses (**alloy mixture**), and muddy rainwater (**heterogeneous suspension**). Remarkably, every one of the millions of materials on Earth boils down to **just 118 known chemical elements**—combining either chemically in exact ratios to build **compounds**, or blending physically in flexible amounts to form **mixtures**!

How can a chemist separate tiny green ink pigments inside a single drop of black fountain-pen ink, extract pure freshwater from salty ocean brine, split miscible alcohol from water ($78^\\circ\\text{C}$ vs $100^\\circ\\text{C}$), or skim floating cooking oil cleanly off soup? Every laboratory purification and industrial refinery relies on picking the exact **physical separation technique** tuned to particle size, boiling point, solubility, magnetism, or density!

In Chapter 3 of Class 8 ICSE Chemistry (*Gem's Chemistry / Concise Chemistry*), we classify **Metals, Non-Metals, Metalloids, and Noble Gases**, contrast **Compounds vs Mixtures** through the famous **Iron + Sulphur vs Iron(II) Sulphide** lab test, explore **Alloys & Colloids**, and master all **10 separation methods** including **Separating Funnel**, **Fractional Distillation**, **Centrifugation**, and **Paper Chromatography**.`,
    learningObjectives: [
      'Define Element, Compound, and Mixture at the atomic/molecular level and contrast Metals, Non-metals, Metalloids, and Noble Gases with examples.',
      'Explain why a Compound (H₂O, NaCl, FeS) has completely new properties and fixed mass ratios, contrasting it against a Mixture (Fe + S, air, brass).',
      'Distinguish Homogeneous mixtures (true solutions, alloys, air) from Heterogeneous mixtures (suspensions, colloids, soil, oil + water) including Tyndall effect.',
      'Select and justify the right separation method for Solid–Solid, Solid–Liquid, and Liquid–Liquid mixtures (Magnet, Sublimation, Filtration, Evaporation vs Crystallisation, Distillation, Fractional Distillation, Separating Funnel, Centrifugation, Chromatography).'
    ],
    topics: [
      {
        id: 'chem-ch3-t1',
        title: '1. Elements (Metals, Non-Metals, Metalloids, Noble Gases) & Compounds',
        content: `Every sample of pure matter falls cleanly into one of two chemical categories: **Elements** (built from one kind of atom only) or **Compounds** (built from two or more different elements chemically bonded in a fixed mass ratio).`,
        subtopics: [
          {
            subheading: '1.1 Four Classes of Elements (118 Known)',
            body: `1. **Metals (~90+ elements — Fe, Cu, Al, Au, Ag, Na, Hg)**: Shiny lustre, **malleable** (hammered into foils), **ductile** (drawn into wires), **sonorous**, high thermal & electrical **conductors**, solid at room temp (*exception*: **Mercury Hg** is liquid!).
2. **Non-Metals (~18 elements — O, N, C, S, P, Cl, Br)**: Dull appearance (*exception*: shiny Iodine, Graphite), **brittle** solids or gases (*exception*: liquid **Bromine Br**), poor conductors of heat & electricity (*exception*: **Graphite** conducts electricity!), low melting/boiling points (*exception*: **Diamond** is hardest natural solid).
3. **Metalloids (Semi-metals — Boron B, Silicon Si, Germanium Ge, Arsenic As, Antimony Sb)**: Borderline elements showing **both metallic and non-metallic properties**—crucial semiconductors inside computer microchips!
4. **Noble / Inert Gases (Group 18 — He, Ne, Ar, Kr, Xe, Rn)**: Monatomic colourless gases with full stable valence shells—chemically unreactive (Helium balloons, Argon in filament bulbs, Neon glow signs).`,
            keyPoint: 'Exam Exceptions Cheat-Sheet: Liquid Metal = Mercury (Hg); Liquid Non-metal = Bromine (Br₂); Conducting Non-metal = Graphite (C); Lustrous Non-metal = Iodine (I₂); Soft cuttable Metals = Na & K!'
          },
          {
            subheading: '1.2 Compounds: Fixed Formula, New Properties & Iron + Sulphur Test',
            body: `A **Compound** forms when two or more elements **react chemically** in a **definite fixed proportion by mass**—creating molecules whose properties bear zero resemblance to their parent elements!
- **Water ($\\text{H}_2\\text{O}$)**: Flammable explosive **Hydrogen** + combustion-supporting **Oxygen** combine strictly $1 : 8$ by mass into liquid **Water**, which puts out fires!
- **Sodium Chloride ($\\text{NaCl}$)**: Soft explosive **Sodium** + toxic green **Chlorine** bond $23 : 35.5$ into harmless edible **table salt**!

**Classic ICSE Lab Proof — Iron + Sulphur Mixture vs Iron(II) Sulphide ($\\text{FeS}$) Compound**:
- **Mixture ($\\text{Fe} + \\text{S}$ stirred cold)**: Yellow sulphur and grey iron specks remain visible under a hand lens; a **magnet** pulls iron filings right out; **carbon disulphide ($\\text{CS}_2$)** dissolves yellow sulphur leaving grey iron; dilute $\\text{HCl}$ reacts ONLY with iron releasing odourless **hydrogen ($\\text{H}_2$)**!
- **Compound ($\\text{FeS}$ formed by strongly heating $\\text{Fe} + \\text{S}$)**: Uniform black non-magnetic solid! Magnet attracts **nothing**; $\\text{CS}_2$ dissolves **nothing**; dilute $\\text{HCl}$ releases foul rotten-egg smelling **hydrogen sulphide ($\\text{H}_2\\text{S}$)** gas!`,
            keyPoint: 'Always memorise the 4 laboratory differences between (Fe + S) mixture and FeS compound: appearance, magnet test, CS₂ solubility, and dilute HCl gas product (H₂ vs rotten-egg H₂S)!'
          }
        ],
        comparisonTable: {
          caption: 'Mixtures vs Compounds: 6-Point ICSE Distinction',
          headers: ['Feature', 'Mixture (e.g., Fe + S, Air, Brass)', 'Compound (e.g., FeS, H₂O, NaCl)'],
          rows: [
            ['Composition Ratio', 'Variable (mixed in **any ratio**)', '**Fixed ratio** by mass ($1:8$ in $\\text{H}_2\\text{O}$)'],
            ['Energy During Formation', 'No heat/light evolved on mixing', 'Significant heat/light usually absorbed or evolved'],
            ['Properties', 'Retains **individual properties** of constituents', 'Completely **new properties** unlike parent elements'],
            ['Separation Method', 'Separated easily by **physical methods** (magnet, filter)', 'Broken down only by **chemical/electrochemical** means'],
            ['Melting / Boiling Point', 'Broad, variable melting/boiling range', '**Sharp, fixed** melting and boiling points'],
            ['Homogeneity', 'Homogeneous or Heterogeneous', 'Always **uniformly Homogeneous**']
          ]
        },
        definitions: [
          { term: 'Element', definition: 'Pure substance composed of only one type of atom that cannot be broken into simpler substances by chemical means.' },
          { term: 'Compound', definition: 'Pure substance formed when two or more elements combine chemically in a fixed proportion by mass.' },
          { term: 'Mixture', definition: 'Impure substance formed by physically blending two or more elements or compounds in any ratio without chemical reaction.' },
          { term: 'Metalloid', definition: 'Element displaying intermediate properties between metals and non-metals (e.g., Silicon, Boron, Germanium).' }
        ],
        realLifeExample: 'Air is a **mixture** (not a compound!) because: (1) its $\\text{O}_2/\\text{CO}_2$ percentages vary from forests to city traffic, (2) liquid air separates cleanly by fractional distillation, and (3) oxygen in air still supports burning just like pure $\\text{O}_2$!',
        commonMistakes: [
          {
            mistake: 'Calling **Brass (Cu + Zn)** or **Stainless Steel** a pure compound because it looks completely uniform and shiny.',
            correction: 'Alloys are **homogeneous mixtures** of metals! Brass has variable zinc proportions (20–40%) and retains copper/zinc malleability—no fixed chemical formula.'
          }
        ]
      },
      {
        id: 'chem-ch3-t2',
        title: '2. Homogeneous vs Heterogeneous Mixtures: Solutions, Colloids & Suspensions',
        content: `Not all mixtures look blotchy or uneven! Dissolve table salt in clear water and even a microscope cannot spot separate salt grains—yet muddy pond water settles sand quickly to the bottom.`,
        subtopics: [
          {
            subheading: '2.1 True Solutions vs Colloids vs Suspensions',
            body: `1. **Homogeneous Mixtures (Uniform composition throughout, single visible phase)**:
   - **True Solutions**: Solute particle diameter $< 1\\text{ nm}$; crystal clear; never settles; passes cleanly through filter paper (e.g., sugar water, soda water, vinegar, air, alloys like **Bronze [Cu+Sn]** and **Brass [Cu+Zn]**).
2. **Heterogeneous Mixtures (Non-uniform composition, distinct visible boundaries)**:
   - **Suspensions**: Large visible insoluble particles ($> 100\\text{ nm}$); cloudy; **settle** on standing and trapped by filter paper (e.g., chalk in water, muddy river water, sand + water).
   - **Colloids (Borderline Heterogeneous!)**: Intermediate particles ($1\\text{–}100\\text{ nm}$) invisible to the naked eye and pass through ordinary filter paper—**never settle**—yet scatter a bright flashlight beam visibly (**Tyndall Effect**)! Examples: **milk, fog, mist, jelly, blood, smoke**.`,
            keyPoint: 'Milk looks smooth to the naked eye, yet under a microscope or light beam it scatters light (Tyndall Effect) due to floating fat globules—making milk a COLLOID (heterogeneous), not a true solution!'
          }
        ],
        definitions: [
          { term: 'Homogeneous Mixture', definition: 'Mixture having uniform composition and properties throughout with no visible boundary between components (e.g., brine, brass, air).' },
          { term: 'Heterogeneous Mixture', definition: 'Mixture with non-uniform composition where distinct components or phases remain distinguishable (e.g., oil + water, sand + salt).' },
          { term: 'Alloy', definition: 'Homogeneous solid mixture of two or more metals (or a metal + small carbon/non-metal) fused together (e.g., Brass, Steel, Solder).' }
        ],
        realLifeExample: 'Sunlight streaming through early morning mist or a dusty cinema projector beam shows bright glowing shafts of light via the **Tyndall Effect**—proving air + mist/dust is a heterogeneous colloid/aerosol!',
        commonMistakes: [
          {
            mistake: 'Thinking all clear liquids that pass through filter paper must be true solutions.',
            correction: 'Milk and starch-water pass straight through ordinary paper filters, yet scatter a laser beam via the Tyndall Effect—they are **colloids**!'
          }
        ]
      },
      {
        id: 'chem-ch3-t3',
        title: '3. Separation Techniques: Solid–Solid & Solid–Liquid Mixtures',
        content: `Chemists choose a separation method by finding **one physical property where the components differ sharply**—particle size, magnetic pull, sublimation tendency, solubility, or boiling point.`,
        subtopics: [
          {
            subheading: '3.1 Separating Solid–Solid & Insoluble Solid–Liquid Mixtures',
            body: `1. **Magnetic Separation**: Separates magnetic substances (**Iron, Cobalt, Nickel**) from non-magnetic mixtures (e.g., $\\text{Fe}$ filings from $\\text{S}$ powder or factory scrap steel).
2. **Sublimation**: Separates a **sublimable solid** (**$\\text{NH}_4\\text{Cl}$, Camphor, $\\text{I}_2$, Naphthalene**) from a non-sublimable solid (**$\\text{NaCl}$, Sand**) inside a funnel setup.
3. **Solvent Extraction**: Dissolve one component selectively (e.g., add $\\text{CS}_2$ to dissolve Sulphur out of $\\text{S} + \\text{Charcoal}$; or add water to dissolve Sugar/Salt out of Sand), filter, then evaporate solvent!
4. **Sedimentation, Decantation & Filtration**: Heavy insoluble solids (**mud/sand**) settle at the bottom (**sedimentation**); clear top liquid pours off gently (**decantation**); fine suspended solids (**chalk dust**) get caught as **residue** on filter paper while clear **filtrate** passes through.
5. **Centrifugation**: Spins colloidal milk/blood at ultra-high speed; denser curd/red blood cells fling outward/bottom while lighter cream floats on top (**dairy cream separators & blood plasma labs!**).`,
            keyPoint: 'Need to separate Sand + Salt + Ammonium Chloride? Step 1: Sublimation removes NH₄Cl; Step 2: Water dissolves Salt, Filtration traps Sand; Step 3: Evaporation recovers Salt!'
          },
          {
            subheading: '3.2 Dissolved Solids: Evaporation vs Crystallisation vs Simple Distillation',
            body: `- **Evaporation to Dryness**: Heating recovers soluble solids like **table salt** from seawater—*Drawback*: delicate solids like **sugar or $\\text{CuSO}_4$ char/decompose** if heated bone-dry, and soluble impurities stay mixed inside!
- **Crystallisation (Superior Purification)**: Heat solution only until saturated, cool slowly so pure symmetric **crystals** (alum, sugar candy, $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$) grow cleanly while dissolved impurities remain behind in the leftover **mother liquor**!
- **Simple Distillation (Heating + Condensing in Liebig Condenser)**: Used when you want BOTH the dissolved solid AND pure liquid **solvent** back—e.g., making **pure distilled water** from seawater ($100^\\circ\\text{C}$ steam cools in the water-jacketed Liebig condenser to drip pure distillate while salt stays in the flask).`,
            keyPoint: 'Evaporation loses the water and chars sugar; Crystallisation gives pure intact crystals; Simple Distillation recovers PURE WATER (solvent)!'
          }
        ],
        diagram: {
          id: 'diag-chem-separation',
          title: 'Key Laboratory Separation Setups: Separating Funnel, Distillation & Chromatography',
          caption: 'Immisible liquid separation via Separating Funnel (density layers), Boiling-point Fractional Distillation, and Ink-pigment Paper Chromatography.',
          svgFigure: 'chem_separation_methods'
        },
        definitions: [
          { term: 'Filtrate vs Residue', definition: 'Filtrate is the clear liquid passing through filter paper; Residue is the insoluble solid trapped on the filter paper.' },
          { term: 'Crystallisation', definition: 'Purification process separating pure solid crystals from a hot saturated solution upon slow cooling.' },
          { term: 'Distillation', definition: 'Vaporising a liquid by boiling and immediately cooling the vapour inside a Liebig condenser to collect pure liquid distillate.' }
        ],
        realLifeExample: 'Along Gujarat\'s coastal salt pans, shallow seawater ponds use solar **evaporation** to harvest raw sea salt—followed by industrial **crystallisation** to refine snowy-white table salt free of bitter magnesium chlorides!',
        commonMistakes: [
          {
            mistake: 'Using **Evaporation to dryness** to obtain pure sugar or hydrated copper sulphate crystals.',
            correction: 'Sugar caramelises/chars black and $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$ loses water turning grey powder if boiled bone-dry! Always use **Crystallisation** for sugar and hydrated crystals.'
          }
        ]
      },
      {
        id: 'chem-ch3-t4',
        title: '4. Liquid–Liquid Mixtures: Separating Funnel, Fractional Distillation & Chromatography',
        content: `When two liquids mix together, the very first question a chemist asks is: **Are they Immiscible (forming two distinct layers) or Miscible (blending smoothly into one)?**`,
        subtopics: [
          {
            subheading: '4.1 Immiscible vs Miscible Liquids & Paper Chromatography',
            body: `1. **Separating Funnel (Immiscible Liquids of Different Densities)**:
   - Oil + Water, Kerosene + Water, Carbon Tetrachloride ($\\text{CCl}_4$) + Water form two distinct horizontal layers!
   - Pour into a pear-shaped **Separating Funnel**, let settle untouched: **denser lower liquid** (e.g., water $\\rho = 1.0$) drains out first through the bottom stopcock; **lighter upper liquid** (e.g., kerosene $\\rho = 0.8$) stays cleanly trapped inside!
2. **Fractional Distillation (Miscible Liquids with Different Boiling Points)**:
   - Water ($100^\\circ\\text{C}$) + Ethanol ($78^\\circ\\text{C}$), Acetone ($56^\\circ\\text{C}$) + Water, or **Crude Petroleum** refining (separating Petrol, Kerosene, Diesel, Bitumen) and **Liquid Air** ($\\text{N}_2$ at $-196^\\circ\\text{C}$ vs $\\text{O}_2$ at $-183^\\circ\\text{C}$)!
   - Uses a tall **fractionating column packed with glass beads** above the boiling flask: the lower-boiling volatile liquid (ethanol at $78^\\circ\\text{C}$) climbs to the top first into the condenser while higher-boiling water vapours condense on the cool glass beads and trickle back down!
3. **Paper Chromatography (Micro-Solutes with Different Solubilities / Adsorption)**:
   - Separates trace **coloured pigments in black ink, chlorophyll leaf extracts, food dyes, and blood drugs**!
   - Spot ink onto filter paper strip above a solvent (water/alcohol). As solvent creeps upward by capillary action, components **more soluble in the mobile solvent** race highest up the paper, separating cleanly into vibrant spots ($R_f$ bands)!`,
            keyPoint: 'Immiscible liquids → Separating Funnel (density). Miscible liquids with ≥25°C or close boiling gap → Fractional Distillation (boiling point). Mixed ink dyes → Paper Chromatography!'
          }
        ],
        comparisonTable: {
          caption: 'Quick Selector Guide: Picking the Exact Separation Method',
          headers: ['Mixture Example', 'Key Property Difference', 'Correct Separation Method'],
          rows: [
            ['Iron filings + Sulphur powder', 'Magnetism', '**Magnetic Separation**'],
            ['Ammonium chloride + Common salt', 'Sublimation', '**Sublimation**'],
            ['Chalk powder + Water', 'Insoluble solid particle size', '**Filtration**'],
            ['Pure Water + Dissolved Salt', 'Volatility (Liquid vs non-volatile solid)', '**Simple Distillation**'],
            ['Copper sulphate + Impure brine', 'Differential solubility / crystal growth', '**Crystallisation**'],
            ['Kerosene oil + Water', 'Immiscible + Density difference', '**Separating Funnel**'],
            ['Ethanol (78°C) + Water (100°C) / Crude Oil', 'Miscible + Boiling point difference', '**Fractional Distillation**'],
            ['Cream from Milk / Blood cells', 'Centrifugal density', '**Centrifugation**'],
            ['Dyes in Black Ink / Plant Pigments', 'Differential solubility & paper adsorption', '**Paper Chromatography**']
          ]
        },
        definitions: [
          { term: 'Immiscible Liquids', definition: 'Liquids that do not dissolve in each other and separate into distinct layers (e.g., oil and water).' },
          { term: 'Fractional Distillation', definition: 'Separation of miscible liquids having different boiling points using a glass-bead fractionating column.' },
          { term: 'Chromatography', definition: 'Separation of dissolved micro-components (such as ink dyes) based on differential movement along stationary filter paper in a rising solvent.' }
        ],
        realLifeExample: 'Every drop of petrol, aviation kerosene, diesel, and cooking LPG comes from huge **fractional distillation towers** heating crude petroleum up to $400^\\circ\\text{C}$—condensing light fuels high up the cool tower and heavy asphalt tar at the hot base!',
        commonMistakes: [
          {
            mistake: 'Trying to separate **alcohol + water** with a **Separating Funnel**, or **kerosene + water** by distillation.',
            correction: 'Alcohol dissolves completely in water (miscible $\\to$ **Fractional Distillation**)! Kerosene does NOT mix with water (immiscible $\\to$ **Separating Funnel** is effortless without any heating!).'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Element', definition: 'Pure substance made of a single type of atom ($\\text{Fe}, \\text{O}_2$).', category: 'Classification' },
      { term: 'Metalloid', definition: 'Element showing dual metal/non-metal traits (Silicon, Boron, Germanium).', category: 'Elements' },
      { term: 'Noble Gas', definition: 'Chemically inert Group 18 gas with complete outer electron shell (He, Ne, Ar).', category: 'Elements' },
      { term: 'Compound', definition: 'Pure substance with elements chemically bonded in a fixed mass ratio ($\\text{H}_2\\text{O}, \\text{FeS}$).', category: 'Classification' },
      { term: 'Homogeneous Mixture', definition: 'Uniform single-phase physical blend (brine, air, brass alloy).', category: 'Mixtures' },
      { term: 'Colloid', definition: 'Intermediate heterogeneous suspension scattering light via Tyndall effect (milk, fog).', category: 'Mixtures' },
      { term: 'Crystallisation', definition: 'Pure crystal recovery from hot saturated solution upon cooling.', category: 'Separation' },
      { term: 'Separating Funnel', definition: 'Apparatus draining denser lower layer from immiscible liquids (oil + water).', category: 'Separation' },
      { term: 'Fractional Distillation', definition: 'Fractionating-column boiling-point separation of miscible liquids (ethanol + water).', category: 'Separation' },
      { term: 'Chromatography', definition: 'Capillary solvent separation of ink pigments and leaf dyes.', category: 'Separation' }
    ],
    formulaSheet: [
      { title: 'Iron + Sulphur (Mixture)', expression: 'Fe + S  (stirred cold) → Heterogeneous Fe + S', meaning: 'Magnet extracts Fe; CS₂ dissolves S; dil. HCl gives odourless H₂' },
      { title: 'Iron(II) Sulphide (Compound)', expression: 'Fe + S  (heated strongly) → FeS', meaning: 'Non-magnetic black compound; insoluble in CS₂; dil. HCl gives foul H₂S' },
      { title: 'Water Fixed Composition', expression: '2H₂ + O₂ → 2H₂O  (Mass ratio H:O = 1:8)', meaning: 'Always 1 g H per 8 g O regardless of water source' },
      { title: 'Fractionating Boiling Order', expression: 'Lower B.P. distils FIRST → Higher B.P. later', meaning: 'Acetone (56°C) or Ethanol (78°C) collects before Water (100°C)' }
    ],
    comparisonTables: [
      {
        title: 'Metals vs Non-Metals vs Metalloids',
        headers: ['Property', 'Metals', 'Non-Metals', 'Metalloids'],
        rows: [
          ['Appearance', 'Lustrous (shiny)', 'Dull (*exc.* Iodine, Graphite)', 'Metallic lustre often'],
          ['State at Room Temp', 'Hard solids (*exc.* liquid Hg)', 'Solids or gases (*exc.* liquid Br₂)', 'Brittle solids'],
          ['Malleability / Ductility', 'Malleable & ductile', 'Brittle (shatter when hammered)', 'Semi-brittle'],
          ['Electrical Conductivity', 'Excellent conductors', 'Insulators (*exc.* Graphite)', 'Semiconductors (Si, Ge)']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'chem3-ex1',
        question: 'Design a clean 4-step laboratory flowchart to separate a mixture of **Sand, Common Salt (NaCl), Iron Filings, and Camphor** completely.',
        steps: [
          '1. **Magnet**: Pass a bar magnet over the dry spread mixture $\\to$ collects **Iron Filings** cleanly.',
          '2. **Sublimation**: Gently warm remaining mixture in a dish under an inverted funnel $\\to$ **Camphor** sublimes and deposits inside the cool funnel.',
          '3. **Dissolve & Filter**: Stir remaining Sand + Salt in warm water, then filter $\\to$ **Sand** stays trapped as residue on filter paper.',
          '4. **Evaporation / Crystallisation**: Heat the clear salt filtrate to evaporate water $\\to$ leaves pure white **Common Salt**!'
        ],
        finalAnswer: 'Magnet (Fe) → Sublimation (Camphor) → Dissolution + Filtration (Sand) → Evaporation (Salt).',
        keyRule: 'Remove magnetic and sublimable solids DRY first before ever adding water!'
      },
      {
        id: 'chem3-ex2',
        question: 'How would you distinguish a grey-yellow mixture of Iron & Sulphur from black Iron(II) Sulphide compound using TWO quick chemical/physical tests?',
        steps: [
          '1. **Magnet Test**: Hold magnet near both—the **mixture** loses iron filings clinging to the magnet; **FeS compound** is completely unaffected.',
          '2. **Dilute HCl Test**: Mixture fizzes odourless flammable **$\\text{H}_2$** gas ($\\text{Fe} + 2\\text{HCl} \\to \\text{FeCl}_2 + \\text{H}_2\\uparrow$); FeS compound releases unmistakable rotten-egg smelling **$\\text{H}_2\\text{S}$** gas ($\\text{FeS} + 2\\text{HCl} \\to \\text{FeCl}_2 + \\text{H}_2\\text{S}\\uparrow$).'
        ],
        finalAnswer: 'Magnet pulls Fe only from mixture; dil. HCl gives H₂ from mixture vs rotten-egg H₂S from FeS.',
        keyRule: 'Compounds do NOT show the properties of their individual constituent elements.'
      },
      {
        id: 'chem3-ex3',
        question: 'A chemist accidentally mixed Mustard Oil ($\\rho = 0.91\\text{ g/cm}^3$), Water ($\\rho = 1.00\\text{ g/cm}^3$), and Acetone (miscible with water, B.P. $56^\\circ\\text{C}$). How can all three be separated?',
        steps: [
          'Mustard oil does not mix with water/acetone and floats on top as a distinct layer.',
          '1. **Separating Funnel**: Drain the heavier lower **aqueous acetone–water** layer out, retaining pure **Mustard Oil** on top.',
          '2. **Fractional Distillation**: Heat the remaining miscible acetone–water solution in a fractionating column; **Acetone** boils off cleanly at **$56^\\circ\\text{C}$** first, leaving pure **Water** ($100^\\circ\\text{C}$) behind!'
        ],
        finalAnswer: 'Separating Funnel removes Mustard Oil → Fractional Distillation separates Acetone (56°C) from Water (100°C).',
        keyRule: 'Use Separating Funnel for immiscible layers first, then Fractional Distillation for the miscible layer.'
      },
      {
        id: 'chem3-ex4',
        question: 'State whether the following are Elements, Compounds, or Mixtures: (a) Distilled water, (b) Tap water, (c) Diamond, (d) Brass, (e) Carbon dioxide, (f) Air.',
        steps: [
          '(a) Distilled water ($\\text{H}_2\\text{O}$): **Compound**.',
          '(b) Tap water (contains dissolved salts/air): **Mixture** (Homogeneous).',
          '(c) Diamond (pure crystalline Carbon $\\text{C}$): **Element**.',
          '(d) Brass (alloy of Copper + Zinc): **Mixture** (Homogeneous).',
          '(e) Carbon dioxide ($\\text{CO}_2$): **Compound**.',
          '(f) Air ($\\text{N}_2, \\text{O}_2, \\text{Ar}, \\text{CO}_2$): **Mixture** (Homogeneous).'
        ],
        finalAnswer: 'Elements: Diamond; Compounds: Distilled water, CO₂; Mixtures: Tap water, Brass, Air.',
        keyRule: 'Alloys (Brass, Bronze, Steel) and natural air/tap water are mixtures, NOT compounds!'
      },
      {
        id: 'chem3-ex5',
        question: 'Why does a Liebig condenser connect cold tap water at the **lower nozzle** and drain warm water out of the **upper nozzle**?',
        steps: [
          'Entering cold water at the bottom fills the entire outer glass jacket slowly upward against gravity, eliminating air pockets.',
          'Running counter-current ensures the coolest fresh water meets the almost-condensed liquid right before exit—maximising cooling efficiency.'
        ],
        finalAnswer: 'Bottom-in, top-out counterflow fills the jacket completely without air bubbles and maximises condensation.',
        keyRule: 'Water always enters a Liebig condenser at the LOWER end and exits at the UPPER end.'
      },
      {
        id: 'chem3-ex6',
        question: 'How does paper chromatography separate blue, yellow, and red dyes blended inside a single drop of green ink?',
        steps: [
          'Spot ink 2 cm above the bottom edge of a strip of chromatography paper suspended slightly dipped into water.',
          'Water climbs upward via capillary action, dissolving the dyes.',
          'Dyes that are **more soluble in water** and cling lightly to cellulose paper travel fastest to the **top**; less-soluble dyes lag near the **bottom**, revealing separate colour bands!'
        ],
        finalAnswer: 'Differential solubility in moving solvent vs paper adsorption separates dyes by height.',
        keyRule: 'Greater solubility in the mobile solvent = higher dye spot on the chromatogram!'
      },
      {
        id: 'chem3-ex7',
        question: 'Why is crystallisation superior to simple evaporation for purifying copper sulphate crystals contaminated with a trace of soluble impurity?',
        steps: [
          '1. Boiling copper sulphate solution to complete dryness decomposes/dehydrates blue $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$ into dirty white anhydrous powder.',
          '2. Evaporation also leaves all soluble impurities crusted directly onto the salt.',
          '3. Slow **crystallisation** forms pure geometric blue crystals while soluble impurities stay behind dissolved in the liquid mother liquor.'
        ],
        finalAnswer: 'Prevents thermal charring/dehydration and leaves soluble impurities behind in mother liquor.',
        keyRule: 'Crystallisation gives pure hydrated crystals without decomposing heat-sensitive solutes.'
      },
      {
        id: 'chem3-ex8',
        question: 'Identify the odd element in each pair and explain why: (a) Mercury & Copper, (b) Graphite & Sulphur, (c) Silicon & Sodium.',
        steps: [
          '(a) **Mercury** — only metallic element that is **liquid** at room temperature.',
          '(b) **Graphite** — only common non-metal that **conducts electricity** well and feels shiny.',
          '(c) **Silicon** — a **metalloid** semiconductor (Sodium is a soft reactive alkali metal).'
        ],
        finalAnswer: '(a) Mercury (liquid metal); (b) Graphite (conducting non-metal); (c) Silicon (metalloid).',
        keyRule: 'Watch out for ICSE element exceptions: Hg, Br₂, Graphite, Diamond, I₂!'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'chem3-e1',
          question: 'Name one liquid metal and one liquid non-metal at room temperature.',
          solutionSteps: ['Liquid metal: Mercury (Hg); Liquid non-metal: Bromine (Br₂).'],
          finalAnswer: 'Mercury (metal) and Bromine (non-metal)',
          marks: 2
        },
        {
          id: 'chem3-e2',
          question: 'Which method separates: (a) Cream from milk, and (b) Cooking oil floating on water?',
          solutionSteps: ['(a) Centrifugation; (b) Separating funnel.'],
          finalAnswer: '(a) Centrifugation; (b) Separating funnel',
          marks: 2
        },
        {
          id: 'chem3-e3',
          question: 'Name two metalloids and two noble gases.',
          solutionSteps: ['Metalloids: Silicon (Si), Boron (B) [or Germanium]. Noble gases: Helium (He), Neon (Ne), Argon (Ar).'],
          finalAnswer: 'Metalloids: Si, B; Noble gases: He, Ne (or Ar)',
          marks: 2
        },
        {
          id: 'chem3-e4',
          question: 'Distinguish Filtrate from Residue during filtration.',
          solutionSteps: ['Filtrate passes cleanly through filter paper; Residue stays trapped on top of the paper.'],
          finalAnswer: 'Filtrate = passed clear liquid; Residue = trapped insoluble solid.',
          marks: 2
        }
      ],
      medium: [
        {
          id: 'chem3-m1',
          question: 'Give three strong reasons why AIR is classified as a mixture and not a chemical compound.',
          solutionSteps: [
            '1. Composition varies slightly from place to place (humidity, CO₂ near cities).',
            '2. Components keep individual properties (O₂ supports combustion; CO₂ turns limewater milky).',
            '3. Components separate cleanly by physical fractional distillation of liquid air, and no heat/light changes occur when gases mix.'
          ],
          finalAnswer: 'Variable ratio, retained individual properties, physical separation without energy exchange.',
          marks: 3
        },
        {
          id: 'chem3-m2',
          question: 'How does Fractional Distillation differ from Simple Distillation? Give one application of each.',
          solutionSteps: [
            'Simple distillation separates a volatile liquid from a non-volatile solid (seawater → distilled water).',
            'Fractional distillation uses a glass-bead fractionating column to separate **two or more miscible liquids** with close boiling points (ethanol 78°C + water 100°C, crude petroleum).'
          ],
          finalAnswer: 'Uses fractionating column for miscible liquids with close boiling points.',
          marks: 3
        },
        {
          id: 'chem3-m3',
          question: 'Compare True Solutions, Colloids, and Suspensions across particle visibility, filtration, and settling.',
          solutionSteps: [
            'True solution: clear, passes filter paper, never settles (salt water).',
            'Colloid: scatters light (Tyndall), passes ordinary filter paper, never settles (milk).',
            'Suspension: cloudy, trapped by filter paper, settles on standing (chalk in water).'
          ],
          finalAnswer: '3-row comparison completed.',
          marks: 3
        },
        {
          id: 'chem3-m4',
          question: 'What is the purpose of glass beads packed inside a fractionating column?',
          solutionSteps: [
            'Glass beads provide a large cool surface area where higher-boiling vapour (e.g., steam) condenses and drips back into the flask, letting only the lower-boiling vapour (ethanol) pass smoothly to the condenser.'
          ],
          finalAnswer: 'Repeatedly condenses higher-boiling vapour back down for sharp separation.',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'chem3-d1',
          question: 'You are given two clear colourless bottles—one holding pure distilled water and one holding dilute sugar solution—without tasting! Suggest a physical method to identify which is pure compound vs mixture.',
          solutionSteps: [
            'Measure exact boiling point (at 1 atm) or evaporate a few drops on a clean watch glass.',
            'Pure distilled water boils sharply at **$100.0^\\circ\\text{C}$** and leaves **zero residue** on evaporating.',
            'Sugar solution boils **above $100^\\circ\\text{C}$** (boiling point elevation) and leaves sticky/charred sugar residue on a watch glass!'
          ],
          finalAnswer: 'Watch-glass evaporation residue test + sharp 100.0°C boiling point check.',
          marks: 4
        },
        {
          id: 'chem3-d2',
          question: 'Explain why a Separating Funnel works for Kerosene + Water, whereas Fractional Distillation is mandatory for Methanol ($65^\\circ\\text{C}$) + Water ($100^\\circ\\text{C}$).',
          solutionSteps: [
            'Kerosene and water are **immiscible** and settle into two distinct layers by density—the bottom denser water layer drains directly through the stopcock.',
            'Methanol and water are completely **miscible** (single uniform layer), so a separating funnel sees no boundary; fractional distillation exploits their $35^\\circ\\text{C}$ boiling point difference.'
          ],
          finalAnswer: 'Immiscible layers use density (funnel); single-phase miscible liquids use boiling points (fractional distillation).',
          marks: 4
        },
        {
          id: 'chem3-d3',
          question: 'How would you separate pure Sulphur from a mixture containing Sulphur powder, Iron filings, and Potassium chloride?',
          solutionSteps: [
            '1. Pass a magnet to remove **Iron filings**.',
            '2. Shake remaining S + KCl in water (KCl dissolves; S floats/sinks insoluble) and filter $\\to$ residue on filter paper is **Sulphur**; evaporate filtrate to recover KCl (or add $\\text{CS}_2$ to dissolve S and evaporate safely in fume hood).'
          ],
          finalAnswer: 'Magnet (Fe) → Water + Filter (pure S residue).',
          marks: 4
        },
        {
          id: 'chem3-d4',
          question: 'Why does adding salt to pure water lower its freezing point below 0°C and raise its boiling point above 100°C?',
          solutionSteps: [
            'Adding solute ions converts a pure compound into an impure **mixture (solution)**.',
            'Dissolved $\\text{Na}^+/\\text{Cl}^-$ ions interfere with crystal ice alignment (lowering freezing point—used to melt icy roads!) and hinder water escape (raising boiling point).'
          ],
          finalAnswer: 'Mixing solutes disrupts sharp phase boundaries, lowering f.p. and raising b.p.',
          marks: 4
        }
      ]
    },
    practiceWorksheet: {
      title: 'Chemistry Chapter 3 Worksheet: Elements, Compounds, Mixtures & Separation (30 Marks)',
      instructions: 'Identify separation principles clearly and write balanced chemical equations where needed.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Match & Facts (1 × 5 = 5 Marks)',
          items: [
            '1. Name the non-metal that is a good conductor of electricity.',
            '2. What property allows Paper Chromatography to separate plant leaf pigments?',
            '3. Is Brass (Copper + Zinc) a compound or a homogeneous mixture?',
            '4. Which solvent dissolves elemental sulphur without dissolving iron filings?',
            '5. Name the liquid metal used in thermometers.'
          ]
        },
        {
          sectionTitle: 'Section B: Concepts & Comparisons (2 × 4 = 8 Marks)',
          items: [
            '6. State two differences between a Compound and a Mixture.',
            '7. Why is Milk classified as a Colloid rather than a True Solution?',
            '8. Compare Metals and Non-Metals on malleability and electrical conductivity.',
            '9. Write two properties of Noble Gases and name one application.'
          ]
        },
        {
          sectionTitle: 'Section C: Separation Planning (3 × 4 = 12 Marks)',
          items: [
            '10. Which separation method isolates: (a) Alcohol + Water, (b) Petrol + Water, (c) Blood plasma + cells?',
            '11. How do you separate a dry mix of Iodine crystals and Table Salt?',
            '12. Why is Crystallisation preferred over evaporation for preparing pure copper(II) sulphate?',
            '13. Write the reaction of Iron(II) sulphide (FeS) with dilute hydrochloric acid.'
          ]
        },
        {
          sectionTitle: 'Section D: Lab Analysis (5 Marks)',
          items: [
            '14. Describe how fractional distillation separates Ethanol (B.P. 78°C) from Water (B.P. 100°C), noting the exact role of the fractionating column.'
          ]
        }
      ],
      answerKey: [
        '1. Graphite (an allotrope of carbon).',
        '2. Differential solubility in the mobile solvent and differential adsorption onto stationary paper.',
        '3. Homogeneous mixture (alloy).',
        '4. Carbon disulphide (CS₂).',
        '5. Mercury (Hg).',
        '6. Compound: fixed ratio, brand-new properties, chemical separation; Mixture: variable ratio, retains properties, physical separation.',
        '7. Milk particles (1–100 nm) scatter light visibly (Tyndall Effect) even though they pass filter paper.',
        '8. Metals are malleable & good conductors; Non-metals are brittle & insulators (except graphite).',
        '9. Unreactive gases with complete outer shells; Argon fills electric bulbs / Helium fills airships.',
        '10. (a) Fractional distillation; (b) Separating funnel; (c) Centrifugation.',
        '11. Sublimation: gentle heating turns iodine to purple vapour depositing cleanly on an inverted cool funnel.',
        '12. Boiling bone-dry dehydrates CuSO₄·5H₂O and traps soluble impurities inside; crystallisation grows pure blue crystals.',
        '13. FeS + 2HCl → FeCl₂ + H₂S↑ (rotten-egg gas).',
        '14. Mixture boils gently; glass beads inside the fractionating column repeatedly condense rising steam back down while lower-boiling ethanol vapour (78°C) exits top into Liebig condenser first.'
      ]
    },
    examPreparationTips: [
      'Memorise the **Separator Selector Table** (Immiscible → Separating Funnel; Miscible → Fractional Distillation; Ink → Chromatography; Dry I₂/NH₄Cl → Sublimation).',
      'Always learn the **four tests differentiating Fe + S mixture vs FeS compound** (appearance, magnet, CS₂, dil. HCl gas).'
    ],
    chapterSummary: [
      'Elements divide into Metals, Non-Metals, Metalloids (semiconductors Si, Ge), and inert Noble Gases (He, Ne, Ar).',
      'Compounds form chemically in fixed mass ratios with brand-new properties; Mixtures blend physically in any ratio keeping individual properties.',
      'True solutions are transparent homogeneous blends (<1 nm); Colloids scatter light (Tyndall Effect, e.g., milk); Suspensions settle quickly (chalk in water).',
      'Separation exploits distinct physical traits: Magnet, Sublimation, Filtration, Crystallisation, Distillation, Separating Funnel, Fractional Distillation, Centrifugation, and Chromatography.',
      'Paper chromatography separates dissolved ink pigments by differential mobility in a solvent, while fractional distillation separates miscible liquids with close boiling points such as crude petroleum fractions.'
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Why does water extinguish fire even though it is made of flammable Hydrogen and combustion-supporting Oxygen?',
        answer: 'Water ($\\text{H}_2\\text{O}$) is a **chemical compound**, not a physical mixture. During chemical combination ($2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$), atoms bond into entirely new molecules whose properties differ completely from parent hydrogen and oxygen.',
        type: 'Reasoning'
      },
      {
        question: 'Name the apparatus used to separate two immiscible liquids like carbon tetrachloride and water, and state which drains out first.',
        answer: 'A **Separating Funnel**. Because denser carbon tetrachloride ($\\rho \\approx 1.59\\text{ g/cm}^3$) settles as the **bottom layer** below water ($1.0\\text{ g/cm}^3$), $\\text{CCl}_4$ drains cleanly out first through the bottom stopcock!',
        type: 'Short Answer'
      },
      {
        question: 'Describe how to separate a mixture of Iron filings, Sand, and Ammonium Chloride.',
        answer: '1. Pass a magnet repeatedly through the dry powder to lift out **Iron filings**. 2. Place remaining Sand + $\\text{NH}_4\\text{Cl}$ in a dish covered by an inverted funnel and heat gently: **$\\text{NH}_4\\text{Cl}$ sublimes** and deposits as pure white crystals on the cool funnel walls, leaving **Sand** behind in the dish.',
        type: 'Long Answer'
      },
      {
        question: 'State four major differences between a Compound and a Mixture.',
        answer: '1. **Ratio**: Fixed mass ratio in compounds vs variable in mixtures. 2. **Properties**: Brand new in compounds vs average of constituents in mixtures. 3. **Separation**: Chemical/electrolytic only vs simple physical methods. 4. **Melting/Boiling point**: Sharp & constant vs variable range.',
        type: 'Long Answer'
      },
      {
        question: 'How does centrifuging separate cream from fresh whole milk?',
        answer: 'Spinning milk rapidly in a centrifuge throws denser watery skim milk outward/downward to the tube bottom while lighter butterfat globules (cream) gather cleanly at the top centre.',
        type: 'Short Answer'
      },
      {
        question: 'Which property forms the basis of Chromatography, and list two modern applications.',
        answer: 'Chromatography separates components based on **differential solubility in a moving solvent and adsorption onto stationary paper**. Uses: separating ink/food dyes, isolating plant leaf chlorophyll pigments, and testing blood/urine in forensic & doping labs.',
        type: 'Short Answer'
      },
      {
        question: 'Why do we use a fractionating column to separate acetone (56°C) from water (100°C), when simple distillation also boils acetone first?',
        answer: 'At $56^\\circ\\text{C}$, some water already evaporates as vapour alongside acetone! Glass beads in a **fractionating column** cool and condense ascending water vapour back into the flask, yielding much purer acetone distillate.',
        type: 'HOTS'
      },
      {
        question: 'Why is sea water boils at ~102°C instead of 100.0°C, and why does pure distilled water freeze strictly at 0.0°C?',
        answer: 'Pure distilled water is a **pure chemical compound** with invariant sharp constants ($0.0^\\circ\\text{C}$ m.p., $100.0^\\circ\\text{C}$ b.p.). Sea water is an **impure mixture** of dissolved salts that lowers freezing point and elevates boiling point.',
        type: 'HOTS'
      }
    ],
    practiceExercises: [
      {
        question: 'Name the separation technique for: (a) Salt from seawater, (b) Pure water from seawater, (c) Pigments from flower petals.',
        hint: 'Check whether solute, solvent, or colour bands are desired.',
        answerGuide: '(a) Evaporation/Crystallisation; (b) Simple Distillation; (c) Paper Chromatography.'
      },
      {
        question: 'In a separating funnel holding Kerosene ($\\rho = 0.8$) and Water ($\\rho = 1.0$), which liquid forms the lower layer?',
        hint: 'Higher density sinks to bottom.',
        answerGuide: 'Water forms the lower layer and drains out first.'
      },
      {
        question: 'Classify Silicon, Argon, Brass, and Calcium carbonate into Element, Metalloid/Noble gas, Compound, or Mixture.',
        hint: 'Alloy = mixture; formula CaCO₃ = compound.',
        answerGuide: 'Silicon = Element (Metalloid); Argon = Element (Noble Gas); Brass = Mixture (Alloy); CaCO₃ = Compound.'
      }
    ]
  },
  quizQuestions: [
    {
      id: 'chem3-q1',
      type: 'mcq',
      question: 'Which of the following is a NON-METAL that conducts electricity well?',
      options: ['Sulphur', 'Phosphorus', 'Graphite', 'Diamond'],
      correctAnswer: 'Graphite',
      explanation: 'Graphite (carbon allotrope) has mobile free electrons between hexagonal layers, conducting electricity readily.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem3-q2',
      type: 'mcq',
      question: 'Two miscible liquids having different boiling points—Ethanol (78°C) and Water (100°C)—are best separated by:',
      options: ['Separating funnel', 'Filtration', 'Fractional distillation', 'Sublimation'],
      correctAnswer: 'Fractional distillation',
      explanation: 'Miscible liquids with distinct boiling points are separated cleanly using a fractionating column.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem3-q3',
      type: 'mcq',
      question: 'Which apparatus separates two IMMISCIBLE liquids such as oil and water?',
      options: ['Liebig condenser', 'Separating funnel', 'Centrifuge', 'Sublimation dish'],
      correctAnswer: 'Separating funnel',
      explanation: 'Immiscible liquids form density layers; the denser lower layer drains out via the separating funnel stopcock.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem3-q4',
      type: 'mcq',
      question: 'Adding dilute HCl to heated Iron(II) sulphide (FeS) compound releases:',
      options: ['Odourless hydrogen (H₂)', 'Rotten-egg smelling H₂S gas', 'Green chlorine gas', 'No reaction'],
      correctAnswer: 'Rotten-egg smelling H₂S gas',
      explanation: 'FeS + 2HCl → FeCl₂ + H₂S↑ (whereas cold Fe + S mixture yields odourless H₂ from Fe).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem3-q5',
      type: 'mcq',
      question: 'Which separation technique isolates distinct coloured pigments from a drop of black ink?',
      options: ['Centrifugation', 'Paper chromatography', 'Magnetic separation', 'Decantation'],
      correctAnswer: 'Paper chromatography',
      explanation: 'Paper chromatography separates trace dissolved dyes by differential solubility and paper adsorption.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem3-q6',
      type: 'mcq',
      question: 'Milk scatters a beam of light via the Tyndall Effect even though its particles pass through filter paper. Milk is a:',
      options: ['Pure compound', 'True homogeneous solution', 'Colloid', 'Element'],
      correctAnswer: 'Colloid',
      explanation: 'Colloids have 1–100 nm particles that never settle yet visibly scatter light.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem3-q7',
      type: 'mcq',
      question: 'Brass (Copper + Zinc) is classified chemically as a:',
      options: ['Compound', 'Element', 'Homogeneous mixture (alloy)', 'Metalloid'],
      correctAnswer: 'Homogeneous mixture (alloy)',
      explanation: 'Alloys have variable composition without fixed chemical stoichiometry, making them homogeneous mixtures.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem3-q8',
      type: 'fill_blank',
      question: 'The liquid metal at room temperature is ______ and the liquid non-metal is bromine.',
      correctAnswer: 'mercury',
      explanation: 'Mercury (Hg) is the only common liquid metal at room temperature.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem3-q9',
      type: 'true_false',
      question: 'Air is classified as a chemical compound because nitrogen and oxygen occur in roughly constant proportions.',
      correctAnswer: false,
      explanation: 'Air is a homogeneous MIXTURE: composition varies slightly, gases keep individual properties, and liquid air separates physically.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem3-q10',
      type: 'mcq',
      question: 'In a Liebig condenser during simple distillation, cold cooling water should:',
      options: ['Enter from the top and exit at the bottom', 'Enter from the bottom and exit at the top', 'Stay stagnant without flowing', 'Mix directly with steam'],
      correctAnswer: 'Enter from the bottom and exit at the top',
      explanation: 'Bottom-in, top-out fills the outer cooling jacket cleanly without air traps.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem3-q11',
      type: 'mcq',
      question: 'Which method recovers BOTH pure salt crystals and pure liquid distilled water from brine?',
      options: ['Evaporation to dryness', 'Filtration', 'Simple distillation', 'Decantation'],
      correctAnswer: 'Simple distillation',
      explanation: 'Simple distillation condenses pure steam back into liquid distillate while leaving salt behind.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem3-q12',
      type: 'hots',
      question: 'In what exact order should you separate a solid mixture of **Sand, Naphthalene, and Sodium Chloride**?',
      options: [
        'Add water → Filter → Sublime → Evaporate',
        'Sublime Naphthalene → Dissolve Salt & Filter Sand → Evaporate Salt',
        'Use Separating funnel → Magnet → Crystallise',
        'Fractional distillation → Centrifugation'
      ],
      correctAnswer: 'Sublime Naphthalene → Dissolve Salt & Filter Sand → Evaporate Salt',
      explanation: 'Always remove sublimable Naphthalene dry first; then water dissolves Salt cleanly from Sand for filtration and evaporation.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'fc-c3-1',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'Four key metal/non-metal ICSE exceptions?',
      back: 'Liquid metal: Mercury (Hg); Liquid non-metal: Bromine (Br₂); Conducting non-metal: Graphite; Lustrous non-metal: Iodine.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c3-2',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'Distinguish a Compound vs a Mixture in 3 key ways.',
      back: 'Compound: fixed ratio, brand-new properties, chemical separation only. Mixture: any ratio, keeps constituent properties, physical separation.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c3-3',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'Three lab differences between (Fe + S) mixture vs FeS compound?',
      back: 'Mixture: magnet pulls Fe, CS₂ dissolves S, dil. HCl gives odourless H₂. FeS: non-magnetic, insoluble in CS₂, dil. HCl gives rotten-egg H₂S.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c3-4',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'What is a Colloid and what optical effect proves it?',
      back: '1–100 nm heterogeneous mixture (milk, fog, blood) that passes filter paper, never settles, yet scatters light (Tyndall Effect).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c3-5',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'Method for Immiscible Liquids vs Miscible Liquids (different B.P.)?',
      back: 'Immiscible (oil + water) → Separating Funnel (density). Miscible (ethanol 78°C + water 100°C) → Fractional Distillation (boiling point).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c3-6',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'Why use Crystallisation instead of Evaporation to dryness for CuSO₄ or sugar?',
      back: 'Heating dry chars sugar and dehydrates CuSO₄·5H₂O; crystallisation grows pure crystals leaving impurities in mother liquor.',
      category: 'Scientific Law',
      importance: 'Standard'
    },
    {
      id: 'fc-c3-7',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'What separates coloured pigments in black ink?',
      back: 'Paper Chromatography (exploiting different solubilities in moving solvent & adsorption on filter paper).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c3-8',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'What is Centrifugation used for?',
      back: 'Spinning colloidal/fine suspensions rapidly to separate cream from milk or blood cells from plasma by density.',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'fc-c3-9',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'Examples of Metalloids and Noble Gases?',
      back: 'Metalloids: Silicon (Si), Boron (B), Germanium (Ge). Noble Gases: Helium (He), Neon (Ne), Argon (Ar).',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'fc-c3-10',
      subjectId: 'chemistry',
      chapterId: 'chem-elements-mixtures',
      chapterTitle: 'Elements, Compounds and Mixtures',
      front: 'Why are Alloys like Brass and Bronze classified as mixtures?',
      back: 'Metals blend homogeneously in variable proportions without forming fixed chemical formulas.',
      category: 'Scientific Law',
      importance: 'Standard'
    }
  ]
};
