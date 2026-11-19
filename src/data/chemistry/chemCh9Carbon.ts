import { Chapter } from '../../types';

export const CHEM_CH9_CARBON: Chapter = {
  id: 'chem-carbon',
  subjectId: 'chemistry',
  chapterNumber: 9,
  title: 'Carbon and its Compounds',
  subtitle: 'Allotropy of carbon (crystalline: Diamond, Graphite, Fullerene C₆₀ vs amorphous: Charcoal, Coke, Lampblack), wood charcoal adsorption, Carbon Dioxide (CaCO₃ + HCl lab prep, limewater milky/excess clear test, fire extinguishers, dry ice, Greenhouse Effect), and toxic Carbon Monoxide (HbCO & reducing power)',
  term: 'Annual',
  estimatedMinutes: 95,
  notes: {
    introduction: `Hold a sparkling bridal **diamond** ring in your left hand and a humble dark **pencil lead** in your right hand. One is the hardest crystal in the natural world, blindingly transparent and non-conducting; the other is soft, jet-black, slippery to the touch, and conducts electricity freely enough to light a bulb! Astonishingly, burning either one completely in pure oxygen produces **nothing except pure carbon dioxide ($\\text{CO}_2$)**—proving beyond doubt that BOTH are **100% pure elemental Carbon ($Z = 6, 2,4$)**!

How can identical carbon atoms craft diamond, graphite, soccer-ball **Buckminsterfullerene ($\\text{C}_{60}$)**, water-filtering **activated charcoal**, blast-furnace **coke**, fizzy **carbon dioxide**, AND deadly colourless **carbon monoxide**? Because Carbon is chemistry's supreme architect—capable of **allotropy**, **tetravalency**, and endless **catenation** (self-linking)!

In Chapter 9—the final unit of Class 8 ICSE Chemistry (*Gem's Chemistry / Concise Chemistry*)—we contrast **Crystalline vs Amorphous Allotropes of Carbon**, explore **adsorption** inside activated charcoal gas masks, master the **Laboratory Preparation & Limewater Test of Carbon Dioxide ($\\text{CO}_2$)**, compare **Soda-Acid Fire Extinguishers**, examine the **Greenhouse Effect**, and learn why **Carbon Monoxide ($\\text{CO}$)** causes silent suffocation (**carboxyhaemoglobin**) yet serves as industry's master metallic reducing agent!`,
    learningObjectives: [
      'Define Allotropy and explain why Diamond (3D tetrahedral sp³) and Graphite (2D hexagonal sheets + free mobile electrons) have drastically opposite hardness and electrical conductivity despite being pure Carbon.',
      'Identify Buckminsterfullerene (C₆₀) and compare Amorphous Allotropes (Wood charcoal, Animal bone charcoal, Sugar charcoal, Coke, Coal, Lampblack/Soot) with uses.',
      'Explain **Adsorption** by wood charcoal and demonstrate decolorising dye/smell filtering experiments.',
      'Prepare **Carbon Dioxide ($\\text{CO}_2$)** cleanly in the lab ($\\text{CaCO}_3 + 2\\text{HCl}$), explain why **dilute $\\text{H}_2\\text{SO}_4$ is NOT used with marble**, and trace the two-step **Limewater Test** (first milky $\\text{CaCO}_3\\downarrow$, then excess clears to soluble $\\text{Ca(HCO}_3)_2$).',
      'Explain CO₂ fire extinguishers, Dry Ice, and Carbon Monoxide ($\\text{CO}$) toxicity (irreversible Carboxyhaemoglobin) alongside its industrial blast-furnace reduction of $\\text{Fe}_2\\text{O}_3$.'
    ],
    topics: [
      {
        id: 'chem-ch9-t1',
        title: '1. Allotropy of Carbon: Crystalline (Diamond, Graphite, Fullerene)',
        content: `**Allotropy** is the phenomenon in which a single element exists in **two or more distinct physical forms in the same physical state**—having **different physical properties** (due to different 3D arrangements of atoms) yet **identical chemical reactions**! *(Other allotropic elements: Phosphorus, Sulphur, Oxygen $\\text{O}_2/\\text{O}_3$.)*`,
        subtopics: [
          {
            subheading: '1.1 Diamond vs Graphite vs Buckminsterfullerene (C₆₀)',
            body: `1. **Diamond (Rigid 3D Tetrahedral Network)**:
   - Every carbon atom ($Z=6$, 4 valence $e^-$) bonds covalently to **four neighbouring carbon atoms** at tetrahedral angles ($109.5^\\circ$).
   - **Zero free electrons** remain $\\implies$ **Electrical Insulator** (yet superb thermal conductor!).
   - Continuous rigid 3D lattice $\\implies$ **Hardest natural substance**, extreme refractive index ($2.42$ $\\to$ brilliant gem sparkle), high density ($3.51\\text{ g/cm}^3$).
   - *Uses*: Jewellery, **glass cutters**, granite rock-drilling tips, precision eye-surgery blades.

2. **Graphite (Layered Hexagonal Sheets + Free Electrons!)**:
   - Every carbon atom bonds tightly to only **THREE neighbours** in flat hexagonal sheets; the **4th valence electron stays FREE & MOBILE** across each layer!
   - Adjacent layers are held only by **weak interlayer (van der Waals) forces**, letting sheets slide smoothly past one another!
   - Therefore, Graphite is **soft, slippery, opaque black**, and an **excellent electrical conductor**!
   - *Uses*: **Pencil leads** (blended with clay), **high-temperature dry machine lubricant** (where liquid oil would burn away), **battery/electrolysis electrodes**, and nuclear reactor moderators!

3. **Buckminsterfullerene ($\\text{C}_{60}$)**:
   - Discovered in 1985: hollow **football/geodesic dome cage** of 60 carbon atoms arranged in **20 hexagons and 12 pentagons**, promising nanotechnology drug-delivery and superconductors!`,
            keyPoint: 'Diamond = 4 bonds per C, zero free e⁻ (Insulator, Hardest 3D). Graphite = 3 bonds per C + 1 free mobile e⁻ (Conductor) + weak sliding layers (Soft Lubricant)!'
          }
        ],
        diagram: {
          id: 'diag-chem-carbon',
          title: 'Allotropes of Carbon (Diamond, Graphite, C₆₀) & Lab CO₂ Preparation',
          caption: 'Atomic lattice contrast between 3D tetrahedral Diamond, 2D layered conducting Graphite, C₆₀ cage, and marble-chip + dil. HCl CO₂ generator.',
          svgFigure: 'chem_carbon_allotropes'
        },
        comparisonTable: {
          caption: 'Diamond vs Graphite: Structure–Property Link',
          headers: ['Property', 'Diamond', 'Graphite'],
          rows: [
            ['Atomic Bonding', 'Each C bonded to **4 other C** (3D tetrahedron)', 'Each C bonded to **3 other C** (flat hexagonal sheets)'],
            ['Appearance & Hardness', 'Transparent sparkling crystal; **hardest** known', 'Grey-black opaque; **soft & slippery** (marks paper)'],
            ['Free Valence Electrons?', '**None** (all 4 locked in covalent bonds)', '**Yes** (4th electron free to move along layers)'],
            ['Electrical Conductivity', '**Non-conductor (Insulator)**', '**Good conductor** (used for electrodes!)'],
            ['Density & Burning Check', '$3.51\\text{ g/cm}^3$; burns at $900^\\circ\\text{C}$ to pure $\\text{CO}_2$', '$2.25\\text{ g/cm}^3$; burns at $700^\\circ\\text{C}$ to pure $\\text{CO}_2$']
          ]
        },
        definitions: [
          { term: 'Allotropy', definition: 'Existence of an element in two or more structural forms in the same physical state having identical chemical properties but different physical properties.' },
          { term: 'Catenation', definition: 'Unique self-linking ability of Carbon atoms to bond cleanly into long chains, branched rings, and 3D cages.' }
        ],
        realLifeExample: 'In hot industrial bakery ovens or giant steel rollers where grease oil would smoke and catch fire, engineers lubricate bearings with powdered **Graphite** because it stays silky-slippery beyond $700^\\circ\\text{C}$!',
        commonMistakes: [
          {
            mistake: 'Writing that "pencil lead" contains the toxic metal Lead ($\\text{Pb}$)!',
            correction: 'Pencil "lead" contains **zero Lead metal**—it is a harmless baked mixture of **Graphite + fine clay**!'
          }
        ]
      },
      {
        id: 'chem-ch9-t2',
        title: '2. Amorphous Allotropes of Carbon & Charcoal Adsorption',
        content: `Unlike neatly patterned diamond and graphite, **amorphous allotropes** consist of tiny disordered micro-crystals of graphite giving them huge surface area and porous structures ideal for **fuels, metallurgy, inks, and purification**!`,
        subtopics: [
          {
            subheading: '2.1 Destructive Distillation, Adsorption & Four Major Amorphous Forms',
            body: `**Destructive Distillation**: Heating wood, bones, or coal strongly in the **absence of air** drives out volatile gases/tar, leaving porous carbon behind:
1. **Wood Charcoal**: Light black porous solid made by destructive distillation of wood. Possesses an enormous inner pore surface that traps gases, smells, and coloured dyes onto its outer surface—a surface-trapping process called **Adsorption**! (**Activated charcoal** steamed open is packed inside **drinking-water purifier filters** and **poison-gas masks**!)
2. **Animal / Bone Charcoal**: Rich in calcium phosphate + carbon; excels at **adsorbing brown colour** from raw brown sugarcane syrup to turn sugar snowy white!
3. **Sugar Charcoal**: Purest amorphous carbon (made by charring cane sugar with conc. $\\text{H}_2\\text{SO}_4$).
4. **Coke**: Greyish porous residue from destructive distillation of coal—burns cleanly **without smoke**, serving as the primary fuel & **reducing agent** inside iron blast furnaces ($\\text{Fe}_2\\text{O}_3 + 3\\text{C} \\to 2\\text{Fe} + 3\\text{CO}$)!
5. **Lampblack / Carbon Black (Kajal / Soot)**: Flocculent velvety soot collected by burning kerosene/turpentine oil in limited air—used in **black printer ink, shoe polish, car tyres** (toughens rubber!), and traditional kajal.`,
            keyPoint: 'Adsorption (charcoal trapping gases/dyes onto its SURFACE) ≠ Absorption (sponge soaking water throughout its BULK)!'
          }
        ],
        definitions: [
          { term: 'Destructive Distillation', definition: 'Heating an organic substance (wood, coal, bone) strongly in the complete absence of air to break it down into charcoal/coke and volatile byproducts.' },
          { term: 'Adsorption', definition: 'Surface phenomenon in which a porous solid like charcoal attracts and holds gas molecules or dissolved dyes onto its outer/pore surfaces.' }
        ],
        realLifeExample: 'Look inside any modern kitchen RO or gravity water purifier cartridge: the black granular cylinder is **Activated Wood/Coconut-Shell Charcoal**, adsorbing foul chlorine odours, pesticides, and yellow tint cleanly out of drinking water!',
        commonMistakes: [
          {
            mistake: 'Confusing **Adsorption** (charcoal trapping molecules on its surface) with **Absorption**.',
            correction: 'In **Adsorption** (with a **d**), gas/dye clings to the solid *surface* only; in **Absorption**, liquid penetrates uniformly throughout the whole volume.'
          }
        ]
      },
      {
        id: 'chem-ch9-t3',
        title: '3. Carbon Dioxide (CO₂): Lab Prep, Limewater Test, Fire Extinguishers & Greenhouse',
        content: `Making up just **0.04%** of Earth's atmosphere, **Carbon Dioxide ($\\text{CO}_2$)** punches far above its weight: green plants need it for photosynthesis, fizzy soft drinks bottle it under pressure, firefighters spray it to smother electrical flames, and rising $\\text{CO}_2$ emissions drive global climate warming!`,
        subtopics: [
          {
            subheading: '3.1 Lab Prep ($\\text{CaCO}_3 + \\text{HCl}$), Precautions & Limewater Two-Step Test',
            body: `**Laboratory Preparation Reaction (No heating needed!)**:
$$\\text{CaCO}_3\\text{ (marble chips)} + 2\\text{HCl\\ (dilute)} \\longrightarrow \\text{CaCl}_2\\text{ (aq)} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$$
- **Collection**: By **upward displacement of air** (since $\\text{CO}_2$ is **$1.5\\times$ heavier than air**, sinking cleanly to the jar bottom! Not collected over cold water because $\\text{CO}_2$ dissolves moderately in water!).
- **Crucial ICSE Question — Why NOT Dilute $\\text{H}_2\\text{SO}_4$ with Marble ($\\text{CaCO}_3$)?** Dilute sulphuric acid forms **insoluble Calcium Sulphate ($\\text{CaSO}_4$)**, which immediately cakes as a white crust over the marble chips and **stops the reaction dead**! (With **Dilute $\\text{HCl}$**, product $\\text{CaCl}_2$ is completely water-soluble so bubbling stays smooth!)

**Famous Two-Step Limewater Test ($\\text{Ca(OH)}_2$)**:
1. Bubble $\\text{CO}_2$ gently through clear limewater $\\to$ **Turns MILKY WHITE** due to insoluble white Calcium carbonate precipitate:
   $$\\text{Ca(OH)}_2\\text{ (aq)} + \\text{CO}_2 \\longrightarrow \\text{CaCO}_3\\downarrow\\text{ (milky)} + \\text{H}_2\\text{O}$$
2. Keep bubbling **EXCESS $\\text{CO}_2$** $\\to$ **Milkiness DISAPPEARS**, turning crystal clear again as insoluble carbonate converts into soluble Calcium bicarbonate:
   $$\\text{CaCO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2\\text{ (excess)} \\longrightarrow \\text{Ca(HCO}_3)_2\\text{ (soluble, colourless)}$$`,
            keyPoint: 'Why never dil. H₂SO₄ on marble? Insoluble CaSO₄ crust smothers the chips! Limewater test: short CO₂ → Milky (CaCO₃↓); Excess CO₂ → Clears back up (Ca(HCO₃)₂)!'
          },
          {
            subheading: '3.2 Extinguishers, Dry Ice & Greenhouse Warming',
            body: `- **Properties**: Colourless, odourless, non-combustible gas ($1.5\\times$ air density) that **neither burns nor supports ordinary combustion**; slightly acidic (turns moist blue litmus faint pink/red: $\\text{CO}_2 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{CO}_3$). *(Note: Burning **Magnesium** IS intense enough to keep burning inside $\\text{CO}_2$: $2\\text{Mg} + \\text{CO}_2 \\to 2\\text{MgO} + \\text{C}$ black specks!)*
- **Soda–Acid Fire Extinguisher**: Tilting/breaking an acid vial drops $\\text{H}_2\\text{SO}_4$ onto baking soda ($2\\text{NaHCO}_3 + \\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O} + 2\\text{CO}_2\\uparrow$), shooting foamy $\\text{CO}_2$ that blankets flames away from oxygen (**Never spray water-soda extinguishers on live electrical or oil fires; use pure compressed $\\text{CO}_2$ gas extinguishers for electrical panels!**).
- **Dry Ice**: Solid $\\text{CO}_2$ subliming at $-78.5^\\circ\\text{C}$ for deep-freezing ice cream and vaccines.
- **Greenhouse Effect**: Atmospheric $\\text{CO}_2, \\text{CH}_4$, and $\\text{H}_2\\text{O}$ vapour let incoming short-wave sunlight warm Earth, then trap outgoing long-wave infrared heat—naturally keeping Earth livable (~15°C), while excessive fossil-fuel $\\text{CO}_2$ causes dangerous **Global Warming**!`,
            keyPoint: 'Even though CO₂ puts out candles cleanly, burning Magnesium ribbon continues burning brightly inside a CO₂ jar leaving white MgO ash and black Carbon specks!'
          }
        ],
        definitions: [
          { term: 'Limewater Test', definition: 'Diagnostic test where CO₂ first turns clear Ca(OH)₂ milky white (CaCO₃↓), and excess CO₂ turns it clear again (Ca(HCO₃)₂).' },
          { term: 'Dry Ice', definition: 'Solid Carbon dioxide sublimes directly to gas at −78.5°C without turning into wet liquid.' },
          { term: 'Greenhouse Effect', definition: 'Trapping of outgoing terrestrial infrared heat by atmospheric CO₂, CH₄, and water vapour, warming Earth\'s lower atmosphere.' }
        ],
        formulas: [
          { formula: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑', explanation: 'Standard lab CO₂ generation using soluble CaCl₂ product.' },
          { formula: 'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O', explanation: 'Step 1: Limewater turns milky white.' },
          { formula: 'CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂', explanation: 'Step 2: Excess CO₂ clears milkiness into soluble calcium bicarbonate.' },
          { formula: '2Mg + CO₂ → 2MgO + C', explanation: 'Active burning Magnesium reduces CO₂ even though CO₂ extinguishes normal flames!' }
        ],
        realLifeExample: 'Caves across Meghalaya and limestone hills grow hanging **stalactites** and rising **stalagmites** over centuries via that exact reversible limewater chemistry: rainwater loaded with $\\text{CO}_2$ dissolves limestone into soluble $\\text{Ca(HCO}_3)_2$, then drips inside warm caves where escaping $\\text{CO}_2$ re-deposits solid rock $\\text{CaCO}_3$!',
        commonMistakes: [
          {
            mistake: 'Saying Magnesium cannot burn in carbon dioxide or collecting $\\text{CO}_2$ by downward displacement of air.',
            correction: '$\\text{CO}_2$ is **heavier** than air ($44\\text{ vs }28.8\\text{ avg}$), so it sinks to the jar bottom pushing air **upward (upward displacement of air)**! And hot Magnesium strips oxygen straight out of $\\text{CO}_2$!'
          }
        ]
      },
      {
        id: 'chem-ch9-t4',
        title: '4. Carbon Monoxide (CO): Incomplete Combustion, Toxicity & Metallurgy',
        content: `While burning carbon or petrol in **plenty of air** cleanly yields carbon dioxide ($\\text{C} + \\text{O}_2 \\to \\text{CO}_2$), burning fuels inside a **closed poorly ventilated room, charcoal *angithi*, or clogged car engine** produces incomplete combustion—generating invisible, odourless, deadly **Carbon Monoxide ($\\text{CO}$)**!`,
        subtopics: [
          {
            subheading: '4.1 Formation, Haemoglobin Toxicity & Industrial Reducing Power',
            body: `- **Formation Reactions**:
  1. Incomplete carbon burning: $2\\text{C} + \\text{O}_2\\text{ (limited)} \\to 2\\text{CO}$.
  2. Passing $\\text{CO}_2$ over red-hot coke/charcoal inside stoves: $\\text{CO}_2 + \\text{C\\ (red-hot)} \\xrightarrow{\\Delta} 2\\text{CO}$ *(causes fatal sleeping tragedies if a coal brazier burns inside a locked winter bedroom!)*.
- **Why CO Is a Deadly Poison**: Carbon monoxide binds to blood **haemoglobin** roughly **$200\\text{–}300\\times$ more tightly than Oxygen**, forming a bright cherry-red stable complex called **Carboxyhaemoglobin ($\\text{HbCO}$)**! Locked up by CO, red blood cells **cannot transport oxygen** to brain or heart tissues, causing rapid headache, coma, and asphyxiation!
- **Properties & Lab Combustion**: Colourless, almost odourless, **insoluble** in water, **neutral oxide** (zero effect on litmus), and burns cleanly in air with a **pale-blue flame** forming $\\text{CO}_2$: $2\\text{CO} + \\text{O}_2 \\to 2\\text{CO}_2$.
- **Vital Industrial Role — Metallurgical Reducing Agent**: Inside blast furnaces, hot CO strips oxygen smoothly off metal ores to yield pure metals:
  - $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{\\Delta} 2\\text{Fe} + 3\\text{CO}_2\\uparrow$ (Iron extraction!)
  - $\\text{CuO} + \\text{CO} \\to \\text{Cu} + \\text{CO}_2\\uparrow$`,
            keyPoint: 'Why never sleep in a closed room with a burning coal angithi? Carbon dioxide reacting with glowing red coals forms lethal CO (CO₂ + C → 2CO), blocking oxygen by forming Carboxyhaemoglobin!'
          }
        ],
        comparisonTable: {
          caption: 'Carbon Dioxide (CO₂) vs Carbon Monoxide (CO)',
          headers: ['Feature', 'Carbon Dioxide ($\\text{CO}_2$)', 'Carbon Monoxide ($\\text{CO}$)'],
          rows: [
            ['Formation', 'Complete combustion ($\\text{C} + \\text{O}_2 \\to \\text{CO}_2$)', 'Incomplete combustion ($2\\text{C} + \\text{O}_2 \\to 2\\text{CO}$)'],
            ['Litmus / Oxide Type', 'Mildly **Acidic** (blue $\\to$ pink/red)', 'Strictly **Neutral** (no litmus effect)'],
            ['Density vs Air', '$1.5\\times$ heavier than air', 'Slightly lighter (~same density as $\\text{N}_2$)'],
            ['Combustibility', 'Non-combustible (puts out fires)', '**Combustible** (burns with **pale-blue flame** $\\to \\text{CO}_2$)'],
            ['Limewater Test', 'Turns limewater **milky**', 'No direct effect on limewater'],
            ['Physiological Effect', 'Suffocates only at high concentration; not a blood poison', '**Highly toxic poison** (forms **Carboxyhaemoglobin**)']
          ]
        },
        definitions: [
          { term: 'Carboxyhaemoglobin', definition: 'Stable compound formed when toxic Carbon monoxide binds haemoglobin ~200–300× more strongly than oxygen, starving tissues of oxygen.' },
          { term: 'Incomplete Combustion', definition: 'Burning of carbon-based fuels in an insufficient supply of oxygen, producing toxic Carbon monoxide and soot instead of pure CO₂.' }
        ],
        realLifeExample: 'Every modern home with enclosed gas water-heaters or garages installs digital **CO detectors**, because unlike choking black smoke, deadly Carbon Monoxide has zero smell and zero colour to alert sleeping families!',
        commonMistakes: [
          {
            mistake: 'Testing for Carbon monoxide by bubbling it directly through clear limewater and expecting milkiness.',
            correction: 'Only **$\\text{CO}_2$** turns limewater milky! To detect CO, burn it in air first (pale-blue flame $\\to \\text{CO}_2$) and *then* check that product gas clouds limewater!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Allotropy', definition: 'Existence of an element in multiple physical forms with distinct structures yet identical chemical identity.', category: 'Structure' },
      { term: 'Diamond', definition: '3D tetrahedral covalent allotrope of carbon; hardest natural crystal, electrical insulator.', category: 'Crystalline' },
      { term: 'Graphite', definition: '2D hexagonal layered allotrope with 1 mobile electron per carbon; soft lubricant & conductor.', category: 'Crystalline' },
      { term: 'Fullerene ($\\text{C}_{60}$)', definition: 'Hollow soccer-ball carbon cage made of 20 hexagons and 12 pentagons.', category: 'Crystalline' },
      { term: 'Adsorption', definition: 'Surface trapping of gases, odours, or dyes by porous wood/animal charcoal.', category: 'Amorphous' },
      { term: 'Destructive Distillation', definition: 'Strong heating of coal/wood/bone without air to produce coke/charcoal.', category: 'Processes' },
      { term: 'Limewater Test', definition: 'CO₂ turns Ca(OH)₂ milky (CaCO₃↓), clearing again on excess CO₂ (Ca(HCO₃)₂).', category: 'Tests' },
      { term: 'Dry Ice', definition: 'Solid CO₂ subliming directly at −78.5°C.', category: 'Applications' },
      { term: 'Carboxyhaemoglobin', definition: 'Lethal CO–haemoglobin blood complex blocking oxygen delivery.', category: 'Toxicity' },
      { term: 'Greenhouse Effect', definition: 'Infrared heat trapping by atmospheric CO₂, CH₄, and H₂O vapour warming Earth.', category: 'Environment' }
    ],
    formulaSheet: [
      { title: 'Allotrope Identity Check', expression: 'C (Diamond / Graphite) + O₂ → CO₂', meaning: 'Equal masses of diamond and graphite yield identical CO₂ mass' },
      { title: 'Lab CO₂ Generation', expression: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑', meaning: 'Produces soluble CaCl₂; dil. H₂SO₄ is avoided' },
      { title: 'Limewater Step 1 & Step 2', expression: 'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O   |   CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂', meaning: 'Milky white then colourless clear on excess CO₂' },
      { title: 'Soda-Acid Extinguisher', expression: '2NaHCO₃ + H₂SO₄ → Na₂SO₄ + 2H₂O + 2CO₂↑', meaning: 'Generates dense CO₂ blanket cutting off fire oxygen' },
      { title: 'CO in Coal Stoves & Iron Blast Furnace', expression: 'CO₂ + C → 2CO   |   Fe₂O₃ + 3CO → 2Fe + 3CO₂↑', meaning: 'Red-hot coke forms CO; CO reduces iron ore to molten iron' }
    ],
    comparisonTables: [
      {
        title: 'Amorphous Carbon Forms & Main Uses',
        headers: ['Amorphous Form', 'Source / Method', 'Primary Application'],
        rows: [
          ['Wood / Activated Charcoal', 'Destructive distillation of wood', 'Water purifiers, gas masks (gas & odour **adsorption**)'],
          ['Bone / Animal Charcoal', 'Destructive distillation of bones', '**Decolorising** raw brown sugarcane syrup into white sugar'],
          ['Coke', 'Destructive distillation of coal', 'Smokeless fuel & **reducing agent** extracting Iron/Zinc'],
          ['Lampblack / Soot', 'Incomplete oil/turpentine burning', 'Printer ink, car tyre rubber reinforcement, kajal, polish']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'chem9-ex1',
        question: 'Explain at the atomic bonding level why **Diamond** is ultra-hard and an insulator, whereas **Graphite** is soft/slippery and conducts electricity.',
        steps: [
          '1. In **Diamond**, each carbon bonds strongly to **4 neighbours** in a rigid 3D tetrahedral network—making it impossible to scratch and locking all 4 valence electrons cleanly (**insulator**).',
          '2. In **Graphite**, each carbon bonds to only **3 neighbours** in flat hexagonal sheets held by weak interlayer forces that slide effortlessly (**lubricant/pencil**), while the **4th free electron** glides along sheets (**conductor**).'
        ],
        finalAnswer: '3D 4-bond locked network (Diamond) vs 2D 3-bond sliding sheets + free 4th electron (Graphite).',
        keyRule: 'Contrast number of bonds per carbon atom (4 vs 3) every time!'
      },
      {
        id: 'chem9-ex2',
        question: 'Why must **dilute Hydrochloric acid (HCl)** be used with marble chips ($\\text{CaCO}_3$) in lab $\\text{CO}_2$ preparation instead of **dilute Sulphuric acid ($\\text{H}_2\\text{SO}_4$)**?',
        steps: [
          'With dilute $\\text{H}_2\\text{SO}_4$, marble reacts to form **insoluble Calcium Sulphate ($\\text{CaSO}_4$)**.',
          'This white $\\text{CaSO}_4$ crust sticks tightly around every marble chip, shielding it from remaining acid and **stopping gas evolution within seconds**!',
          'Dilute $\\text{HCl}$ produces completely water-soluble $\\text{CaCl}_2$, leaving fresh marble exposed continuously.'
        ],
        finalAnswer: 'Insoluble CaSO₄ crust coats marble and stalls reaction; CaCl₂ is soluble.',
        keyRule: 'Exactly like Pb + H₂SO₄ stalling in Ch 7, insoluble CaSO₄ stalls marble + H₂SO₄!'
      },
      {
        id: 'chem9-ex3',
        question: 'What happens when Carbon dioxide bubbles slowly through clear limewater at first, and then continuously in excess? Write both equations.',
        steps: [
          'First, clear limewater turns **milky white** due to insoluble chalk ($\\text{CaCO}_3\\downarrow$): $\\text{Ca(OH)}_2 + \\text{CO}_2 \\to \\text{CaCO}_3\\downarrow + \\text{H}_2\\text{O}$.',
          'On prolonged bubbling of **excess $\\text{CO}_2$**, milkiness **vanishes back to a clear solution** because soluble Calcium bicarbonate forms: $\\text{CaCO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2 \\to \\text{Ca(HCO}_3)_2$.'
        ],
        finalAnswer: 'Turns milky (CaCO₃↓), then clears (soluble Ca(HCO₃)₂).',
        keyRule: 'Always write BOTH step equations when asked for the complete Limewater test!'
      },
      {
        id: 'chem9-ex4',
        question: 'How does wood charcoal clarify reddish ink-tinted water inside a laboratory funnel filter?',
        steps: [
          'Wood charcoal is riddled with microscopic pores providing huge surface area.',
          'By **adsorption**, charcoal attracts and locks large organic ink dye molecules onto its surface while crystal-clear water drips cleanly out into the beaker below.'
        ],
        finalAnswer: 'Charcoal adsorbs organic dye particles onto its porous surface.',
        keyRule: 'Surface trapping of dyes/gases = Adsorption.'
      },
      {
        id: 'chem9-ex5',
        question: 'Why should an open burning charcoal stove (*angithi*) NEVER be kept inside a tightly shut bedroom while sleeping?',
        steps: [
          'Inside an airtight room, oxygen drops steadily while rising $\\text{CO}_2$ reacts with glowing hot charcoal: $\\text{CO}_2 + \\text{C} \\to 2\\text{CO}$.',
          'Colourless, odourless **Carbon Monoxide ($\\text{CO}$)** bonds irreversibly with blood haemoglobin into **Carboxyhaemoglobin**, starving sleeping people of oxygen silently!'
        ],
        finalAnswer: 'Incomplete combustion / CO₂ + C produces lethal CO forming Carboxyhaemoglobin.',
        keyRule: 'CO binds haemoglobin ~200–300× stronger than oxygen!'
      },
      {
        id: 'chem9-ex6',
        question: 'Why are **Pure $\\text{CO}_2$ Gas Extinguishers** safe for live server rooms and petrol spills, whereas water and soda-acid water jets are dangerous?',
        steps: [
          'Water conducts electricity (fatal shock hazard on live wires) and sinks beneath light floating petrol, splashing blazing oil across the room!',
          'Dense compressed $\\text{CO}_2$ gas is a **non-conductor**, heavier than air ($1.5\\times$), sinks cleanly as an oxygen-blocking blanket, and leaves zero messy wet damage!'
        ],
        finalAnswer: 'CO₂ is a heavy, non-conducting gas blanket that smothers flames without shock or oil splash.',
        keyRule: 'Compressed CO₂ extinguishes Class B (oil) & Class C (electrical) fires safely.'
      },
      {
        id: 'chem9-ex7',
        question: 'How can you prove experimentally that Diamond and Graphite are allotropes of the exact SAME element Carbon?',
        steps: [
          'Burn **$1\\text{ g}$ of pure Diamond** and **$1\\text{ g}$ of pure Graphite** separately in excess pure oxygen at $900^\\circ\\text{C}$.',
          'Both leave **zero solid ash** and produce the **exact same $3.67\\text{ g}$ of pure $\\text{CO}_2$ gas** (turning limewater milky), proving both are 100% pure Carbon!'
        ],
        finalAnswer: 'Equal weights burn completely in O₂ leaving zero ash and forming identical masses of CO₂.',
        keyRule: 'Chemical combustion proof establishes elemental identity of allotropes.'
      },
      {
        id: 'chem9-ex8',
        question: 'Predict what happens when a burning **Magnesium ribbon** is lowered into a jar filled with Carbon Dioxide gas.',
        steps: [
          'Unlike a wax candle (which goes out immediately!), dazzling hot Magnesium has stronger affinity for oxygen than Carbon does.',
          'Magnesium breaks $\\text{CO}_2$ apart and **continues burning fiercely**: $2\\text{Mg} + \\text{CO}_2 \\to 2\\text{MgO\\ (white ash)} + \\text{C\\ (black soot specks on jar walls)}$.'
        ],
        finalAnswer: 'Burns brightly forming white MgO ash and black carbon specks!',
        keyRule: '2Mg + CO₂ → 2MgO + C — never use CO₂ extinguishers on blazing Magnesium metal fires!'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'chem9-e1',
          question: 'Name two crystalline allotropes and two amorphous allotropes of Carbon.',
          solutionSteps: ['Crystalline: Diamond, Graphite (and Fullerene C₆₀). Amorphous: Wood charcoal, Coke (or Lampblack, Bone charcoal).'],
          finalAnswer: 'Crystalline: Diamond, Graphite; Amorphous: Charcoal, Coke',
          marks: 2
        },
        {
          id: 'chem9-e2',
          question: 'What is Dry Ice and why is it called "dry"?',
          solutionSteps: ['Solid Carbon Dioxide (CO₂). Called dry because it sublimes straight to gas without melting into wet liquid.'],
          finalAnswer: 'Solid CO₂; sublimes directly without wetting.',
          marks: 2
        },
        {
          id: 'chem9-e3',
          question: 'Write the chemical equation for preparing $\\text{CO}_2$ from marble chips in the lab.',
          solutionSteps: ['$\\text{CaCO}_3 + 2\\text{HCl} \\to \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$.'],
          finalAnswer: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑',
          marks: 2
        },
        {
          id: 'chem9-e4',
          question: 'Which gas forms Carboxyhaemoglobin in human blood?',
          solutionSteps: ['Carbon monoxide ($\\text{CO}$).'],
          finalAnswer: 'Carbon monoxide (CO)',
          marks: 1
        }
      ],
      medium: [
        {
          id: 'chem9-m1',
          question: 'Why does Graphite conduct electricity while Diamond does not, even though both contain only Carbon atoms?',
          solutionSteps: [
            'In Graphite, each carbon bonds to 3 others, leaving a **4th free mobile valence electron** to carry current.',
            'In Diamond, all 4 valence electrons are locked tightly into rigid covalent bonds—zero free electrons!'
          ],
          finalAnswer: 'Graphite has free mobile 4th valence electrons; Diamond locks all 4.',
          marks: 3
        },
        {
          id: 'chem9-m2',
          question: 'State the uses of (a) Bone charcoal, (b) Coke, and (c) Lampblack.',
          solutionSteps: [
            '(a) Bone charcoal: decolorises brown sugarcane juice in sugar refineries.',
            '(b) Coke: smokeless metallurgical fuel & reducing agent for Iron.',
            '(c) Lampblack: black printing inks, car tyre rubber filler, shoe polish.'
          ],
          finalAnswer: '3 uses matched cleanly.',
          marks: 3
        },
        {
          id: 'chem9-m3',
          question: 'How would you distinguish a jar of Carbon dioxide ($\\text{CO}_2$) from Carbon monoxide ($\\text{CO}$) using two simple tests?',
          solutionSteps: [
            '1. Limewater test: $\\text{CO}_2$ turns clear limewater milky; $\\text{CO}$ produces no immediate cloudiness.',
            '2. Burning splint: $\\text{CO}_2$ puts the flame out immediately; $\\text{CO}$ itself ignites with a **pale-blue flame** forming $\\text{CO}_2$!'
          ],
          finalAnswer: 'Limewater milkiness (CO₂) vs Pale-blue combustion flame (CO).',
          marks: 3
        },
        {
          id: 'chem9-m4',
          question: 'Why is Carbon dioxide collected by **upward displacement of air** rather than over cold water?',
          solutionSteps: [
            '1. $\\text{CO}_2$ is appreciably **soluble in water** (forming mild carbonic acid).',
            '2. $\\text{CO}_2$ is **$1.5\\times$ heavier than air**, so it collects cleanly at the bottom of an upright jar pushing lighter air out upward.'
          ],
          finalAnswer: 'Heavier than air (upward air displacement) and moderately soluble in water.',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'chem9-d1',
          question: 'Trace the chemical equations explaining how limestone caves form stalactites when rainwater passes through soil $\\text{CO}_2$ and drips inside caves.',
          solutionSteps: [
            '1. Rainwater absorbs $\\text{CO}_2$ and dissolves underground $\\text{CaCO}_3$ rock slowly: $\\text{CaCO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2 \\to \\text{Ca(HCO}_3)_2$ (soluble!).',
            '2. Inside open cave air, dripping solution loses $\\text{CO}_2$ back out, re-depositing solid white stone crystals: $\\text{Ca(HCO}_3)_2 \\to \\text{CaCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$.'
          ],
          finalAnswer: 'Reversible carbonate–bicarbonate dissolution & re-precipitation.',
          marks: 4
        },
        {
          id: 'chem9-d2',
          question: 'Explain why rising atmospheric $\\text{CO}_2$ traps heat in Earth\'s atmosphere (**Greenhouse Effect**) without blocking incoming daytime sunlight.',
          solutionSteps: [
            'Short-wavelength visible sunlight passes effortlessly downward through transparent $\\text{CO}_2$ molecules to warm Earth\'s land and oceans.',
            'Warm Earth radiates heat back upward as **longer-wavelength infrared (IR) rays**, which $\\text{CO}_2$ and methane molecules strongly absorb and re-radiate downward—warming the troposphere!'
          ],
          finalAnswer: 'CO₂ lets short-wave sunlight enter freely yet traps outgoing long-wave infrared heat.',
          marks: 4
        },
        {
          id: 'chem9-d3',
          question: 'Write balanced equations showing how Coke AND Carbon Monoxide both act as metallurgical Reducing Agents inside an Iron blast furnace.',
          solutionSteps: [
            '1. $\\text{Fe}_2\\text{O}_3 + 3\\text{C} \\xrightarrow{\\Delta} 2\\text{Fe} + 3\\text{CO}\\uparrow$.',
            '2. $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{\\Delta} 2\\text{Fe} + 3\\text{CO}_2\\uparrow$.'
          ],
          finalAnswer: 'Both reduce Fe₂O₃ cleanly to metallic Iron.',
          marks: 4
        },
        {
          id: 'chem9-d4',
          question: 'Compare Wood Charcoal heated in a stream of steam ("activation") vs untreated wood charcoal, explaining what changes physically.',
          solutionSteps: [
            'Untreated wood charcoal has tarry residues clogging many tiny internal pores.',
            'Steaming at $900^\\circ\\text{C}$ (**Activation**) clears out clogged tar, expanding microscopic pore surface area dramatically—boosting **adsorption capacity** many times over!'
          ],
          finalAnswer: 'Steam clears clogged tar pores, massively expanding adsorption surface area.',
          marks: 4
        }
      ]
    },
    practiceWorksheet: {
      title: 'Chemistry Chapter 9 Worksheet: Carbon & its Compounds (30 Marks)',
      instructions: 'Write balanced equations and justify structure–property relationships clearly.',
      sections: [
        {
          sectionTitle: 'Section A: Objective Questions (1 × 5 = 5 Marks)',
          items: [
            '1. Formula of Buckminsterfullerene.',
            '2. Which crystalline allotrope conducts electricity?',
            '3. Name the acid avoided when reacting marble chips for CO₂ prep.',
            '4. Write the chemical formula of Calcium bicarbonate.',
            '5. Name the poison compound formed when CO binds to blood haemoglobin.'
          ]
        },
        {
          sectionTitle: 'Section B: Short Reasoning (2 × 4 = 8 Marks)',
          items: [
            '6. Why is Graphite used to make dry-cell electrodes and pencil leads?',
            '7. How does Carbon dioxide extinguish fire in a Soda–Acid extinguisher?',
            '8. Distinguish Adsorption vs Absorption using wood charcoal.',
            '9. Why is CO called a Neutral Oxide while CO₂ is Acidic?'
          ]
        },
        {
          sectionTitle: 'Section C: Reactions & Tests (3 × 4 = 12 Marks)',
          items: [
            '10. Write BOTH equations of the Limewater test (milky then clear).',
            '11. What happens when burning Magnesium enters a jar of pure $\\text{CO}_2$? Give balanced equation.',
            '12. Write the Soda–Acid extinguisher equation ($\\text{NaHCO}_3 + \\text{H}_2\\text{SO}_4$).',
            '13. Show with an equation how Carbon monoxide reduces Iron(III) oxide.'
          ]
        },
        {
          sectionTitle: 'Section D: Structural Comparison (5 Marks)',
          items: [
            '14. Contrast Diamond vs Graphite across 5 points: atomic bonding, free electrons, hardness, conductivity, and 2 uses each.'
          ]
        }
      ],
      answerKey: [
        '1. C₆₀.',
        '2. Graphite.',
        '3. Dilute Sulphuric acid (H₂SO₄) — forms insoluble CaSO₄.',
        '4. Ca(HCO₃)₂.',
        '5. Carboxyhaemoglobin (HbCO).',
        '6. Graphite has mobile 4th electrons (good conductor → electrodes) and weak sliding hexagonal sheets (soft & marks paper → pencils).',
        '7. Dense non-combustible CO₂ sinks over the flame, cutting off atmospheric oxygen supply.',
        '8. Adsorption traps gas/dye on charcoal surface; Absorption soaks fluid into bulk volume.',
        '9. CO does not affect litmus or react with alkalis; CO₂ dissolves in water to form H₂CO₃ turning blue litmus pink.',
        '10. Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O; CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂.',
        '11. Continues burning brightly leaving white MgO + black C specks: 2Mg + CO₂ → 2MgO + C.',
        '12. 2NaHCO₃ + H₂SO₄ → Na₂SO₄ + 2H₂O + 2CO₂↑.',
        '13. Fe₂O₃ + 3CO → 2Fe + 3CO₂↑.',
        '14. Diamond: 4 bonds/C, 0 free e⁻, hardest crystal, insulator, gem/glass-cutter; Graphite: 3 bonds/C, 1 free e⁻, soft sliding sheets, conductor, electrodes/lubricant.'
      ]
    },
    examPreparationTips: [
      'Always write **both** Limewater equations (short $\\text{CO}_2$ $\\to$ milky; excess $\\text{CO}_2$ $\\to$ clear) whenever asked for the $\\text{CO}_2$ confirmatory test.',
      'Be sharp on the **3 famous exceptions** in Ch 9: Graphite conducts (non-metal), Dil. $\\text{H}_2\\text{SO}_4$ fails with marble (insoluble $\\text{CaSO}_4$), and Burning Mg keeps burning inside $\\text{CO}_2$!'
    ],
    chapterSummary: [
      'Allotropes of Carbon include crystalline Diamond (3D insulator, hardest), Graphite (2D sheets, conductor, lubricant), Fullerene ($\\text{C}_{60}$), and amorphous forms (charcoal, coke, lampblack).',
      'Activated wood/bone charcoal purifies water and sugar via surface Adsorption.',
      'Lab $\\text{CO}_2$ ($\\text{CaCO}_3 + 2\\text{HCl}$) turns limewater milky ($\\text{CaCO}_3\\downarrow$) then clear on excess ($\\text{Ca(HCO}_3)_2$); Dry ice is solid $\\text{CO}_2$.',
      'Carbon monoxide ($\\text{CO}$, incomplete combustion) is a neutral toxic gas forming Carboxyhaemoglobin and a key metallurgical reducing agent.',
      'Dense, non-combustible $\\text{CO}_2$ extinguishes fires in soda-acid extinguishers and contributes to global warming via the greenhouse effect when excess fossil fuel emissions trap outgoing infrared heat.'
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Explain why Diamond is used for cutting glass while Graphite is used as a dry lubricant in heavy machinery.',
        answer: 'Diamond\'s rigid 3D tetrahedral network of 4 strong covalent bonds per carbon atom makes it the hardest natural substance—scratching glass effortlessly. Graphite consists of flat hexagonal sheets held by weak interlayer forces that slide smoothly over one another even at extreme oven temperatures.',
        type: 'Reasoning'
      },
      {
        question: 'Why does Carbon dioxide turn limewater milky initially and clear again when passed in excess?',
        answer: 'Initially, $\\text{CO}_2$ reacts with $\\text{Ca(OH)}_2$ to precipitate insoluble white **Calcium carbonate ($\\text{CaCO}_3\\downarrow$)** making water milky. Excess $\\text{CO}_2$ converts insoluble $\\text{CaCO}_3$ into water-soluble **Calcium bicarbonate ($\\text{Ca(HCO}_3)_2$)**, restoring clarity.',
        type: 'Long Answer'
      },
      {
        question: 'Why is dilute $\\text{H}_2\\text{SO}_4$ NOT used instead of dilute $\\text{HCl}$ to prepare $\\text{CO}_2$ from calcium carbonate?',
        answer: 'Dilute $\\text{H}_2\\text{SO}_4$ reacts with $\\text{CaCO}_3$ to coat the marble chips with **insoluble white $\\text{CaSO}_4$**, halting the reaction rapidly. Dilute $\\text{HCl}$ forms soluble $\\text{CaCl}_2$, allowing continuous $\\text{CO}_2$ evolution.',
        type: 'Reasoning'
      },
      {
        question: 'How does Carbon monoxide poison a person inside a closed room with a coal fire?',
        answer: 'Limited oxygen reacts with hot coal to emit invisible $\\text{CO}$ ($\\text{CO}_2 + \\text{C} \\to 2\\text{CO}$). Inhaled $\\text{CO}$ binds blood haemoglobin ~200–300× tighter than oxygen into stable **Carboxyhaemoglobin**, preventing oxygen transport to vital tissues.',
        type: 'Long Answer'
      },
      {
        question: 'State two ways to extinguish a petrol/oil fire or an electrical fire safely using Carbon dioxide.',
        answer: 'Never spray water (conducts electricity / sinks beneath burning petrol). Discharge compressed liquid **$\\text{CO}_2$ fire extinguishers**: dense non-conducting $\\text{CO}_2$ blankets the fire, cooling it slightly and cutting off atmospheric oxygen.',
        type: 'Short Answer'
      },
      {
        question: 'What is Destructive Distillation? Name two useful solid carbon allotropes obtained by it.',
        answer: 'Heating organic substances strongly in the complete absence of air to decompose them cleanly. It yields **Wood Charcoal** (from wood) and **Coke** (from bituminous coal).',
        type: 'Short Answer'
      },
      {
        question: 'Why does a Soda–Acid fire extinguisher NOT contain ordinary water alone?',
        answer: 'Mixing $\\text{NaHCO}_3$ with $\\text{H}_2\\text{SO}_4$ generates instant high-pressure **$\\text{CO}_2$ gas bubbles** ($2\\text{NaHCO}_3 + \\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O} + 2\\text{CO}_2\\uparrow$) that expel a dense oxygen-excluding $\\text{CO}_2$/foam stream onto normal fires.',
        type: 'HOTS'
      },
      {
        question: 'Can a candle flame and a burning magnesium strip both be extinguished by lowering them into a jar of $\\text{CO}_2$?',
        answer: 'The candle goes out immediately because wax cannot break $\\text{CO}_2$ bonds. Burning **Magnesium**, however, releases enough heat to strip oxygen out of $\\text{CO}_2$ ($2\\text{Mg} + \\text{CO}_2 \\to 2\\text{MgO} + \\text{C}$), continuing to burn brightly!',
        type: 'HOTS'
      }
    ],
    practiceExercises: [
      {
        question: 'Balance: $\\text{CuO} + \\text{CO} \\to \\text{Cu} + \\text{CO}_2$ and name the reducing agent.',
        hint: 'CO gains O to become CO₂.',
        answerGuide: 'Already balanced (1:1); CO is the reducing agent.'
      },
      {
        question: 'Which allotrope of carbon is used in (a) sugar decolorisation, (b) glass cutting, (c) dry-cell battery rod?',
        hint: 'Bone charcoal, Diamond, Graphite.',
        answerGuide: '(a) Bone/Animal charcoal; (b) Diamond; (c) Graphite.'
      },
      {
        question: 'Name two greenhouse gases besides $\\text{CO}_2$ and one step to slow global warming.',
        hint: 'CH₄, H₂O vapour; afforestation/renewables.',
        answerGuide: 'Methane (CH₄), water vapour; planting trees & switching to solar/wind energy.'
      }
    ]
  },
  quizQuestions: [
    {
      id: 'chem9-q1',
      type: 'mcq',
      question: 'Which crystalline allotrope of Carbon is a GOOD conductor of electricity?',
      options: ['Diamond', 'Graphite', 'Coke', 'Sugar charcoal'],
      correctAnswer: 'Graphite',
      explanation: 'Each carbon in Graphite forms 3 covalent bonds, leaving a free mobile 4th electron to conduct current.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem9-q2',
      type: 'mcq',
      question: 'In a Diamond crystal, each Carbon atom is bonded covalently to ______ other Carbon atoms:',
      options: ['2', '3', '4', '6'],
      correctAnswer: '4',
      explanation: 'Rigid 3D tetrahedral 4-bond network gives diamond extreme hardness.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem9-q3',
      type: 'mcq',
      question: 'Why is dilute $\\text{H}_2\\text{SO}_4$ NOT used with marble chips ($\\text{CaCO}_3$) to prepare $\\text{CO}_2$?',
      options: ['It explodes violently', 'It forms an insoluble CaSO₄ coating that stops the reaction', 'It freezes marble', 'It produces CO instead'],
      correctAnswer: 'It forms an insoluble CaSO₄ coating that stops the reaction',
      explanation: 'Insoluble white CaSO₄ seals marble from further acid; dil. HCl forms soluble CaCl₂.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem9-q4',
      type: 'mcq',
      question: 'Passing **excess** $\\text{CO}_2$ through milky limewater turns it crystal clear again due to the formation of:',
      options: ['Calcium oxide', 'Insoluble Calcium carbonate', 'Soluble Calcium bicarbonate Ca(HCO₃)₂', 'Calcium chloride'],
      correctAnswer: 'Soluble Calcium bicarbonate Ca(HCO₃)₂',
      explanation: 'CaCO₃ + H₂O + CO₂(excess) → Ca(HCO₃)₂ (soluble colourless solution).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem9-q5',
      type: 'mcq',
      question: 'Which property allows activated wood charcoal to purify smelly muddy water?',
      options: ['Combustion', 'Adsorption', 'Allotropy', 'Sublimation'],
      correctAnswer: 'Adsorption',
      explanation: 'Porous charcoal traps odour and dye molecules onto its huge surface area via adsorption.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem9-q6',
      type: 'mcq',
      question: 'Carbon monoxide is deadly when inhaled because it combines strongly with haemoglobin to form:',
      options: ['Oxyhaemoglobin', 'Carboxyhaemoglobin', 'Carbonic acid', 'Carbaminohaemoglobin'],
      correctAnswer: 'Carboxyhaemoglobin',
      explanation: 'CO binds haemoglobin ~200–300× stronger than O₂, forming lethal Carboxyhaemoglobin.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem9-q7',
      type: 'mcq',
      question: 'Which allotrope of Carbon is used to decolorise brown raw sugar syrup into white crystals?',
      options: ['Diamond dust', 'Animal / Bone charcoal', 'Lampblack', 'Buckminsterfullerene'],
      correctAnswer: 'Animal / Bone charcoal',
      explanation: 'Bone charcoal strongly adsorbs brown pigment impurities out of sugarcane juice.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem9-q8',
      type: 'fill_blank',
      question: 'Solid Carbon dioxide, which sublimes directly at −78.5°C without forming liquid, is commonly called ______.',
      correctAnswer: 'dry ice',
      explanation: 'Solid CO₂ is known as Dry Ice.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem9-q9',
      type: 'true_false',
      question: 'Ordinary pencil "lead" is made out of metallic Lead (Pb) mixed with clay.',
      correctAnswer: false,
      explanation: 'Pencil leads contain ZERO Lead metal—they are made of Graphite mixed with clay.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem9-q10',
      type: 'mcq',
      question: 'Carbon monoxide gas burns in air with a pale-blue flame to form:',
      options: ['Methane', 'Carbon dioxide (CO₂)', 'Water vapour', 'Carbon soot'],
      correctAnswer: 'Carbon dioxide (CO₂)',
      explanation: '2CO + O₂ → 2CO₂.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem9-q11',
      type: 'mcq',
      question: 'What is the chemical formula of Buckminsterfullerene?',
      options: ['C₁₂', 'C₂₄', 'C₆₀', 'C₁₀₀'],
      correctAnswer: 'C₆₀',
      explanation: 'Buckminsterfullerene consists of 60 carbon atoms arranged in a hollow soccer-ball cage.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem9-q12',
      type: 'hots',
      question: 'When a blazing Magnesium ribbon enters a jar of pure $\\text{CO}_2$, what happens?',
      options: [
        'It goes out instantly like a matchstick',
        'It keeps burning brightly leaving white MgO ash and black carbon specks',
        'It turns into Calcium carbonate',
        'It explodes into Hydrogen'
      ],
      correctAnswer: 'It keeps burning brightly leaving white MgO ash and black carbon specks',
      explanation: 'Hot Magnesium strips oxygen from CO₂ (2Mg + CO₂ → 2MgO + C).',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'fc-c9-1',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'Define Allotropy and name 3 Crystalline Allotropes of Carbon.',
      back: 'Same element existing in ≥2 physical forms (same chemistry, different structures). Diamond, Graphite, Fullerene (C₆₀).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c9-2',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'Structural reason Diamond is an insulator & hard vs Graphite conductor & soft?',
      back: 'Diamond: 4 bonds/C (3D tetrahedral, 0 free e⁻). Graphite: 3 bonds/C (2D sliding sheets + 1 free mobile e⁻).',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c9-3',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'Define Adsorption and name 2 charcoal applications.',
      back: 'Surface trapping of gases/dyes onto porous charcoal: Wood charcoal in water/gas filters; Bone charcoal decolorises raw sugar.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c9-4',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'Lab Preparation equation of CO₂ and why dil. H₂SO₄ is avoided?',
      back: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. Dil. H₂SO₄ forms an insoluble CaSO₄ crust stalling marble chips.',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c9-5',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'Two-step Limewater Test equations for CO₂?',
      back: '(1) Ca(OH)₂ + CO₂ → CaCO₃↓ (milky); (2) CaCO₃ + H₂O + CO₂(excess) → Ca(HCO₃)₂ (clear soluble).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c9-6',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'Why is Carbon Monoxide (CO) deadly inside closed rooms with coal braziers?',
      back: 'CO₂ + glowing C → 2CO; inhaled CO binds haemoglobin 200–300× stronger than O₂ forming Carboxyhaemoglobin (asphyxiation).',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c9-7',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'Soda–Acid Fire Extinguisher chemical equation?',
      back: '2NaHCO₃ + H₂SO₄ → Na₂SO₄ + 2H₂O + 2CO₂↑ (CO₂ blankets flame away from oxygen).',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'fc-c9-8',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'What happens when burning Magnesium enters pure CO₂?',
      back: '2Mg + CO₂ → 2MgO (white ash) + C (black soot) — Magnesium keeps burning brightly!',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'fc-c9-9',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'Distinguish CO₂ vs CO by litmus and flame test.',
      back: 'CO₂: acidic (blue litmus → pink), non-combustible, clouds limewater. CO: neutral oxide, burns with pale-blue flame → CO₂.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c9-10',
      subjectId: 'chemistry',
      chapterId: 'chem-carbon',
      chapterTitle: 'Carbon and its Compounds',
      front: 'Uses of Coke and Lampblack?',
      back: 'Coke: smokeless fuel & iron-ore reducing agent (Fe₂O₃ + 3C → 2Fe + 3CO); Lampblack: black ink & tyre rubber filler.',
      category: 'Definition',
      importance: 'Standard'
    }
  ]
};
