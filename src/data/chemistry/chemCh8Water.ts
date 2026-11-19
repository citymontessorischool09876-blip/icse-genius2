import { Chapter } from '../../types';

export const CHEM_CH8_WATER: Chapter = {
  id: 'chem-water',
  subjectId: 'chemistry',
  chapterNumber: 8,
  title: 'Water',
  subtitle: 'Universal solvent & physical constants, dissolved air & aquatic survival, solutions (saturated/unsaturated/supersaturated & solubility curves), Water of Crystallisation, Efflorescence/Deliquescence/Hygroscopy, Drying vs Dehydrating agents, and Hard vs Soft water removal',
  term: 'Annual',
  estimatedMinutes: 95,
  notes: {
    introduction: `Without a single drop of liquid water, no plant could lift minerals from soil, no fish could breathe dissolved oxygen, and not one chemical reaction inside your cells could run! Covering nearly 71% of Earth's crust, **Water ($\\text{H}_2\\text{O}$)** is rightly celebrated as the **Universal Solvent**—dissolving more salts, sugars, acids, and gases than any other liquid on Earth.

Yet glance closely at three dry chemical jars on a laboratory shelf: sparkling blue **Copper(II) sulphate ($\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$)** crumbles into white powder if heated; translucent **Washing Soda** turns chalky white when left open in dry air (**efflorescence**); **Sodium hydroxide** melts right into a wet puddle (**deliquescence**); and soap refuses to lather cleanly inside borewell **hard water**! Behind every single one of those intriguing transformations lies water's special chemistry!

In Chapter 8 of Class 8 ICSE Chemistry (*Gem's Chemistry / Concise Chemistry*), we explore water's **anomalous constants & chemical tests** (turning white anhydrous $\\text{CuSO}_4$ blue!), **dissolved air enrichment in oxygen**, **saturated vs supersaturated solutions & solubility curves**, **Water of Crystallisation**, **Efflorescent, Deliquescent, and Hygroscopic solids**, **Drying vs Dehydrating Agents**, and how to soften **Temporary and Permanent Hard Water**!`,
    learningObjectives: [
      'State physical constants of pure water (f.p. 0°C, b.p. 100°C, max density 1 g/cm³ at 4°C), chemical tests (anhydrous CuSO₄ white → blue; CoCl₂ blue → pink), and why dissolved air has higher O₂% (33%) than atmospheric air (21%).',
      'Distinguish True Solutions, Saturated, Unsaturated, and Supersaturated solutions, define Solubility (g / 100 g water), and read Solubility Curves (KNO₃ vs NaCl vs CaSO₄).',
      'Explain Water of Crystallisation with examples (CuSO₄·5H₂O, Na₂CO₃·10H₂O, FeSO₄·7H₂O, MgSO₄·7H₂O) and contrast Efflorescent, Deliquescent, and Hygroscopic substances.',
      'Differentiate Drying Agents (physical moisture removal, e.g., CaCl₂, Quicklime) from Dehydrating Agents (chemical extraction of H₂O elements, e.g., conc. H₂SO₄ charring sugar).',
      'Explain Temporary Hardness (Ca/Mg bicarbonates — removed by boiling/Clark\'s lime) vs Permanent Hardness (Ca/Mg chlorides & sulphates — removed by washing soda Na₂CO₃ or ion-exchange resins).'
    ],
    topics: [
      {
        id: 'chem-ch8-t1',
        title: '1. Pure Water Constants, Chemical Tests & Dissolved Gases',
        content: `Pure distilled water ($\\text{H}_2\\text{O}$) is an odourless, tasteless, transparent, neutral covalent compound ($1:8$ Hydrogen : Oxygen mass ratio; $2:1$ volume ratio in electrolysis). Unlike ordinary tap water, pure water conducts virtually zero electric current!`,
        subtopics: [
          {
            subheading: '1.1 Diagnostic Chemical Tests for Water & Dissolved Air Enrichment',
            body: `**How Chemists Confirm Moisture / Water (Purely Chemical!)**:
1. **Anhydrous Copper(II) Sulphate Test**: White anhydrous $\\text{CuSO}_4$ powder immediately turns **bright blue** on touching water:
   $$\\text{CuSO}_4\\text{ (white)} + 5\\text{H}_2\\text{O} \\longrightarrow \\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O\\ (blue crystals)}$$
2. **Dry Cobalt(II) Chloride Paper Test**: Dry **blue** $\\text{CoCl}_2$ paper turns **pink** upon absorbing water vapour! *(Note: Checking $100^\\circ\\text{C}$ b.p. proves purity!)*

**Dissolved Gases in Natural Water**:
- Rainwater and river water dissolve air gases ($\\text{O}_2, \\text{N}_2, \\text{CO}_2$). Crucially, **Oxygen is roughly twice as soluble in water as Nitrogen**! Therefore, air boiled out of river water contains **~33% Oxygen** (compared to only **21% in atmospheric air**)—rich dissolved oxygen keeping fish gills supplied! Meanwhile, dissolved **$\\text{CO}_2$** forms carbonic acid letting water weeds photosynthesise underwater and giving fresh spring water its pleasant crisp taste (why freshly **boiled cooled water tastes flat**!).`,
            keyPoint: 'Dissolved air in water holds ~33% O₂ (vs 21% in air) because O₂ dissolves better than N₂! Boiled water tastes flat because heat drives out dissolved CO₂ and O₂!'
          }
        ],
        definitions: [
          { term: 'Universal Solvent', definition: 'Title given to water because its polar molecules dissolve an unmatched range of ionic salts, sugars, acids, and gases.' },
          { term: 'Anhydrous Salt', definition: 'Dry crystalline or powdered salt from which all water of crystallisation has been removed (e.g., white $\\text{CuSO}_4$).' }
        ],
        realLifeExample: 'Why do aquarium fish gasp near the water surface during summer heatwaves or inside un-aerated bowls? Because **gas solubility in water drops sharply as temperature rises**—warm water holds far less dissolved $\\text{O}_2$ than cool mountain streams!',
        commonMistakes: [
          {
            mistake: 'Writing that anhydrous $\\text{CuSO}_4$ proves a liquid is *pure* water.',
            correction: 'White $\\text{CuSO}_4$ turns blue with *any* aqueous solution (even salty brine or juice)! It proves **presence of water**; only sharp **$0^\\circ\\text{C}$ f.p. and $100^\\circ\\text{C}$ b.p.** prove **purity**!'
          }
        ]
      },
      {
        id: 'chem-ch8-t2',
        title: '2. Solutions, Saturation & Solubility Curves',
        content: `When copper sulphate crystals dissolve evenly into clear water, the dissolved **Solute** and **Solvent** form a homogeneous **True Solution**. Yet any fixed amount of water can hold only so much dissolved salt at a given temperature!`,
        subtopics: [
          {
            subheading: '2.1 Unsaturated, Saturated, Supersaturated & Solubility Definition',
            body: `- **Unsaturated Solution**: Can still dissolve *more* solute at the same temperature.
- **Saturated Solution**: Holds the **maximum** amount of dissolved solute possible in that solvent at a fixed temperature (any extra crystals drop undissolved to the bottom). Heating a saturated solution usually turns it *unsaturated* so more solute can dissolve!
- **Supersaturated Solution**: Holds *more* solute temporarily than normal saturation (prepared by cooling a hot saturated solution of Sodium thiosulphate **hypo** gently without shaking—dropping in a single seed crystal triggers instant rapid crystallisation!).

**Solubility Formula**: *Maximum mass (in grams) of a solute that can dissolve in **$100\\text{ g}$ of solvent (water)** to form a saturated solution at a specified temperature*:
$$\\text{Solubility} = \\frac{\\text{Mass of Solute (g)}}{\\text{Mass of Solvent (g)}} \\times 100$$

**Solubility Curves (Temperature Dependence)**:
1. **Steep Rise with Temperature**: Potassium nitrate (**$\\text{KNO}_3$**), Sugar, Copper sulphate.
2. **Flat / Minimal Change with Temperature**: Common salt (**$\\text{NaCl}$**) rises barely from $35.7\\text{ g}$ ($0^\\circ\\text{C}$) to $39.8\\text{ g}$ ($100^\\circ\\text{C}$).
3. **Decreases with Temperature (*Exceptions!*)**: **Calcium sulphate ($\\text{CaSO}_4$)**, **Calcium hydroxide / Slaked lime ($\\text{Ca(OH)}_2$)**, and **ALL Gases** ($\\text{O}_2, \\text{CO}_2$—why warm fizzy soda goes flat fast!).`,
            keyPoint: 'Always note the denominator in Solubility: mass of PURE SOLVENT (usually 100 g water), NOT total solution mass! And ALWAYS state the exact Temperature!'
          }
        ],
        definitions: [
          { term: 'Saturated Solution', definition: 'Solution containing the maximum possible mass of dissolved solute at a specified temperature.' },
          { term: 'Solubility', definition: 'Maximum mass of solute (in grams) dissolving in 100 g of water at a specific temperature to form a saturated solution.' }
        ],
        formulas: [
          { formula: 'Solubility = (Mass of Solute / Mass of Water) × 100', explanation: 'Calculates grams of solute dissolved per 100 g of pure water.', unit: 'g / 100 g water' }
        ],
        realLifeExample: 'Chilled Pepsi or cola fizzes delicately and holds sharp carbonic acid bite because $\\text{CO}_2$ gas is bottled cold under high pressure—leave the bottle open in warm sun and gas solubility plummets (**Henry\'s trend**), turning it flat!',
        commonMistakes: [
          {
            mistake: 'Putting total *solution mass* in the denominator of the solubility formula when a question gives "mass of saturated solution" and "mass of dissolved salt".',
            correction: 'Subtract first: $\\text{Mass of Water (solvent)} = \\text{Total Solution Mass} - \\text{Solute Mass}$, then compute $(\\text{Solute} / \\text{Water}) \\times 100$!'
          }
        ]
      },
      {
        id: 'chem-ch8-t3',
        title: '3. Water of Crystallisation, Efflorescence, Deliquescence & Drying/Dehydrating Agents',
        content: `Why are copper sulphate crystals vibrant sapphire blue and perfectly rhomboidal, whereas dried copper sulphate is shapeless white dust? Because exact fixed numbers of water molecules lock directly inside crystal lattices as **Water of Crystallisation**!`,
        subtopics: [
          {
            subheading: '3.1 Hydrated Salts, Efflorescence, Deliquescence & Hygroscopy',
            body: `- **Hydrated Salts (Water of Crystallisation)**:
  - **Blue Vitriol**: $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ (Blue $\\xrightarrow{\\Delta}$ white anhydrous $\\text{CuSO}_4 + 5\\text{H}_2\\text{O}$)
  - **Washing Soda**: $\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$
  - **Green Vitriol**: $\\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O}$; **Epsom Salt**: $\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$; **Gypsum**: $\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$; **Glauber's Salt**: $\\text{Na}_2\\text{SO}_4 \\cdot 10\\text{H}_2\\text{O}$.
  *(Note: Table salt **$\\text{NaCl}$**, **$\\text{KNO}_3$**, and **$\\text{KCl}$** are crystal solids containing **ZERO** water of crystallisation!)*

**Three Moisture Behaviours in Exposed Air**:
1. **Efflorescent Substances (Lose Water → Crumble to Powder)**: Hydrated crystals having higher vapour pressure than air slowly lose part or all water of crystallisation in dry air—e.g., **Washing Soda ($\\text{Na}_2\\text{CO}_3\\cdot 10\\text{H}_2\\text{O} \\to \\text{Na}_2\\text{CO}_3\\cdot\\text{H}_2\\text{O} + 9\\text{H}_2\\text{O}$)**, **Glauber's salt**, **Epsom salt**.
2. **Deliquescent Substances (Absorb Moisture → Dissolve into Liquid Puddle!)**: Crystalline solids absorbing so much humid air vapour that they dissolve completely in it! Examples: **Sodium hydroxide ($\\text{NaOH}$), Potassium hydroxide ($\\text{KOH}$), Anhydrous $\\text{CaCl}_2$, Ferric chloride ($\\text{FeCl}_3$), Magnesium chloride ($\\text{MgCl}_2$)** *(why ordinary damp table salt gets wet in monsoons—trace $\\text{MgCl}_2$ impurity!)*.
3. **Hygroscopic Substances (Absorb Moisture WITHOUT Dissolving into Liquid)**: Stay solid or liquid while soaking up humid air—e.g., **Concentrated $\\text{H}_2\\text{SO}_4$, Quicklime ($\\text{CaO}$), Silica gel packets, Phosphorus pentoxide ($\\text{P}_2\\text{O}_5$)**.`,
            keyPoint: 'Efflorescence = Hydrate loses H₂O → turns powdery! Deliquescence = Absorbs air H₂O → turns wet liquid puddle! Hygroscopic = Absorbs H₂O without liquefying!'
          },
          {
            subheading: '3.2 Drying Agents (Desiccants) vs Dehydrating Agents',
            body: `- **Drying Agent (Physical Moisture Absorption)**: Removes **free adhering water/moisture** from wet gases or solids without altering chemical formula—e.g., **Anhydrous $\\text{CaCl}_2$** (neutral gases), **Quicklime $\\text{CaO}$** (basic $\\text{NH}_3$ gas), **Conc. $\\text{H}_2\\text{SO}_4$** (acidic gases like $\\text{HCl}, \\text{SO}_2$). *(Warning: Never dry $\\text{NH}_3$ over acidic conc. $\\text{H}_2\\text{SO}_4$—they neutralise immediately! Use $\\text{CaO}$!)*
- **Dehydrating Agent (Chemical Water Removal!)**: Chemically **strips Hydrogen & Oxygen atoms in a $2:1$ water ratio** straight out of molecules—turning snowy white cane sugar ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$) into a steaming black pillar of pure **Carbon**!
$$\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}\\text{ (cane sugar)} \\xrightarrow{\\text{Conc. H}_2\\text{SO}_4} 12\\text{C\\ (black sugar charcoal)} + 11\\text{H}_2\\text{O}$$`,
            keyPoint: 'Dry Ammonia gas ONLY over Quicklime (CaO)—never conc. H₂SO₄ or fused CaCl₂ (both react chemically with NH₃!). And Conc. H₂SO₄ charring sugar proves it is a DEHYDRATING agent!'
          }
        ],
        diagram: {
          id: 'diag-chem-water',
          title: 'Hydrated Crystals (CuSO₄·5H₂O), Solubility Curves & Hard Water Softening',
          caption: 'Reversible hydration (blue ↔ white CuSO₄), classic solubility-temperature curves (KNO₃ vs NaCl vs CaSO₄), and boiling/washing-soda removal of Ca²⁺/Mg²⁺ hardness.',
          svgFigure: 'chem_water_crystal'
        },
        definitions: [
          { term: 'Water of Crystallisation', definition: 'Definite fixed number of water molecules chemically bound into one formula unit of a crystalline salt ($\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$).' },
          { term: 'Efflorescence', definition: 'Loss of water of crystallisation to dry air by hydrated crystals, turning them powdery.' },
          { term: 'Deliquescence', definition: 'Absorption of atmospheric moisture by a solid until it completely dissolves into a liquid solution ($\\text{NaOH}, \\text{CaCl}_2$).' },
          { term: 'Dehydrating Agent', definition: 'Chemical agent that removes chemically combined H and O atoms as water from compounds (e.g., conc. $\\text{H}_2\\text{SO}_4$ charring sugar).' }
        ],
        realLifeExample: 'Have you seen tiny white **"Silica Gel — Do Not Eat"** sachets inside new shoe boxes and camera bags? Silica gel is a harmless porous **hygroscopic desiccant** that traps humid vapour so leather shoes and lenses stay mildew-free!',
        commonMistakes: [
          {
            mistake: 'Equating a **Hygroscopic** agent (like $\\text{CaO}$ or Silica gel) with a **Deliquescent** agent (like $\\text{NaOH}$).',
            correction: 'Hygroscopic materials stay solid (or liquid like conc. $\\text{H}_2\\text{SO}_4$) after absorbing water; **deliquescent** crystals like $\\text{NaOH}$ or $\\text{FeCl}_3$ turn completely from solid pellets into a liquid puddle!'
          }
        ]
      },
      {
        id: 'chem-ch8-t4',
        title: '4. Hard Water vs Soft Water: Causes, Disadvantages & Softening Methods',
        content: `Try washing your hands with soap in clear mountain rainwater vs salty borewell water: rainwater bursts into rich fluffy **lather** instantly (**Soft Water**), whereas borewell water refuses to lather, leaving sticky grey-white **curdy scum** (**Hard Water**)!`,
        subtopics: [
          {
            subheading: '4.1 Temporary vs Permanent Hardness & Removal Equations',
            body: `Water hardness is caused strictly by **dissolved Calcium ($\\text{Ca}^{2+}$) and Magnesium ($\\text{Mg}^{2+}$) salts** that react with sodium stearate soap to form insoluble calcium/magnesium stearate scum!

1. **Temporary Hardness**:
   - **Cause**: Dissolved **Calcium or Magnesium Hydrogencarbonates (bicarbonates)** — **$\\text{Ca(HCO}_3)_2$** and **$\\text{Mg(HCO}_3)_2$**.
   - **Why "Temporary"?** Easily removed by **Simple Boiling** or **Clark's Slaked Lime Process**:
     - **Boiling**: Soluble bicarbonates decompose into **insoluble carbonate precipitates** (kettle fur/scale!) which filter clean:
       $$\\text{Ca(HCO}_3)_2 \\xrightarrow{\\text{Boil}} \\text{CaCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$$
     - **Clark's Method (Calculated $\\text{Ca(OH)}_2$)**:
       $$\\text{Ca(HCO}_3)_2 + \\text{Ca(OH)}_2 \\longrightarrow 2\\text{CaCO}_3\\downarrow + 2\\text{H}_2\\text{O}$$

2. **Permanent Hardness**:
   - **Cause**: Dissolved **Chlorides and Sulphates of Calcium and Magnesium** — **$\\text{CaCl}_2, \\text{MgCl}_2, \\text{CaSO}_4, \\text{MgSO}_4$**.
   - **Why "Permanent"?** Cannot be decomposed or removed by ordinary boiling!
   - **Removal Methods (Soften BOTH Temporary AND Permanent Hardness!)**:
     - **Washing Soda Method ($\\text{Na}_2\\text{CO}_3$)**: Precipitates $\\text{Ca}^{2+}/\\text{Mg}^{2+}$ cleanly as insoluble carbonates:
       $$\\text{CaSO}_4 + \\text{Na}_2\\text{CO}_3 \\longrightarrow \\text{CaCO}_3\\downarrow + \\text{Na}_2\\text{SO}_4$$
       $$\\text{CaCl}_2 + \\text{Na}_2\\text{CO}_3 \\longrightarrow \\text{CaCO}_3\\downarrow + 2\\text{NaCl}$$
     - **Permutit / Ion-Exchange Resin**: Swaps $\\text{Ca}^{2+}/\\text{Mg}^{2+}$ ions cleanly for harmless $\\text{Na}^+$ ions inside household water softeners!

*(Industrial note: Hard water causes wasteful **boiler scale** clogging steam boilers and reduces pipe efficiency, though trace dissolved calcium actually strengthens human bones/teeth and improves taste!)*`,
            keyPoint: 'Temporary Hardness = Bicarbonates Ca(HCO₃)₂, Mg(HCO₃)₂ (removed by Boiling!). Permanent Hardness = Chlorides & Sulphates CaCl₂, MgSO₄ (needs Washing Soda Na₂CO₃ or Ion Exchange—NOT boiling!).'
          }
        ],
        comparisonTable: {
          caption: 'Temporary vs Permanent Hardness of Water',
          headers: ['Feature', 'Temporary Hardness', 'Permanent Hardness'],
          rows: [
            ['Dissolved Salts', '$\\text{Ca(HCO}_3)_2$ & $\\text{Mg(HCO}_3)_2$ (Bicarbonates)', '$\\text{CaCl}_2, \\text{MgCl}_2, \\text{CaSO}_4, \\text{MgSO}_4$ (Chlorides & Sulphates)'],
            ['Removed by Boiling?', '**Yes** ($\\text{CaCO}_3\\downarrow$ precipitates cleanly)', '**No** (chlorides/sulphates stay dissolved)'],
            ['Chemical Removal', 'Boiling or Clark\'s slaked lime $\\text{Ca(OH)}_2$', 'Washing soda ($\\text{Na}_2\\text{CO}_3$) or Permutit/Ion exchange']
          ]
        },
        definitions: [
          { term: 'Hard Water', definition: 'Water containing dissolved Ca²⁺ and Mg²⁺ salts that prevents easy soap lathering by forming curdy scum.' },
          { term: 'Soft Water', definition: 'Water free of dissolved Ca²⁺/Mg²⁺ salts (e.g., rainwater, distilled water) that lathers effortlessly with soap.' }
        ],
        realLifeExample: 'Notice chalky white mineral crusts ("kettle fur") caking the inner coil of electric water kettles? That flaky crust is literally **$\\text{CaCO}_3$ and $\\text{MgCO}_3$** precipitated when boiling removed temporary hardness from municipal water!',
        commonMistakes: [
          {
            mistake: 'Writing that **Washing Soda ($\\text{Na}_2\\text{CO}_3$)** removes *only* permanent hardness, or that **Distillation** leaves hardness behind.',
            correction: 'Washing soda removes **BOTH permanent AND temporary hardness**; **Distillation** leaves ALL dissolved salts behind in the flask, producing 100% soft distilled water!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Anhydrous CuSO₄ Test', definition: 'White anhydrous $\\text{CuSO}_4$ turns blue with water; proves water presence.', category: 'Tests' },
      { term: 'Solubility', definition: 'Max grams of solute dissolving in $100\\text{ g}$ solvent at fixed temperature.', category: 'Solutions' },
      { term: 'Saturated Solution', definition: 'Solution holding maximum dissolved solute at that temperature.', category: 'Solutions' },
      { term: 'Water of Crystallisation', definition: 'Fixed water molecules bonded inside a crystal ($\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$).', category: 'Crystals' },
      { term: 'Efflorescence', definition: 'Hydrated crystal losing moisture to dry air and turning powdery ($\\text{Na}_2\\text{CO}_3\\cdot 10\\text{H}_2\\text{O}$).', category: 'Moisture' },
      { term: 'Deliquescence', definition: 'Solid absorbing humid air moisture until dissolving completely into liquid ($\\text{NaOH}, \\text{CaCl}_2$).', category: 'Moisture' },
      { term: 'Hygroscopic', definition: 'Substance absorbing atmospheric moisture without turning liquid (Quicklime, Silica gel).', category: 'Moisture' },
      { term: 'Dehydrating Agent', definition: 'Agent chemically extracting H & O as water ($\\text{Conc. H}_2\\text{SO}_4$ on sugar).', category: 'Agents' },
      { term: 'Temporary Hardness', definition: 'Hardness due to $\\text{Ca(HCO}_3)_2 / \\text{Mg(HCO}_3)_2$, removed simply by boiling.', category: 'Hard Water' },
      { term: 'Permanent Hardness', definition: 'Hardness due to $\\text{Ca/Mg}$ chlorides & sulphates, removed by washing soda $\\text{Na}_2\\text{CO}_3$.', category: 'Hard Water' }
    ],
    formulaSheet: [
      { title: 'Solubility Calculation', expression: 'Solubility = (Mass of Solute ÷ Mass of Water) × 100', meaning: 'Grams dissolved per 100 g pure water at stated temperature' },
      { title: 'Blue Vitriol Dehydration', expression: 'CuSO₄·5H₂O (blue) ⇌ CuSO₄ (white) + 5H₂O', meaning: 'Reversible chemical water test' },
      { title: 'Dehydration of Sugar', expression: 'C₁₂H₂₂O₁₁ + (Conc. H₂SO₄) → 12C (black) + 11H₂O', meaning: 'Proves conc. H₂SO₄ is a chemical dehydrating agent' },
      { title: 'Boiling Temporary Hardness', expression: 'Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑', meaning: 'Precipitates insoluble carbonate scale on boiling' },
      { title: 'Softening Permanent Hardness', expression: 'CaSO₄ + Na₂CO₃ → CaCO₃↓ + Na₂SO₄', meaning: 'Washing soda removes soluble Ca²⁺/Mg²⁺ as chalky precipitate' }
    ],
    comparisonTables: [
      {
        title: 'Efflorescent vs Deliquescent vs Hygroscopic Substances',
        headers: ['Type', 'Interaction with Air Moisture', 'Physical Change', 'ICSE Examples'],
        rows: [
          ['**Efflorescent**', 'Loses crystal water to dry air', 'Crystals crumble to dry **powder**', 'Washing soda, Glauber\'s salt, Epsom salt'],
          ['**Deliquescent**', 'Absorbs humid air water heavily', 'Dissolves into a **wet solution**', '$\\text{NaOH}, \\text{KOH}, \\text{CaCl}_2, \\text{MgCl}_2, \\text{FeCl}_3$'],
          ['**Hygroscopic**', 'Absorbs air moisture mildly', '**No phase change** (stays solid/liquid)', 'Conc. $\\text{H}_2\\text{SO}_4, \\text{CaO}, \\text{P}_2\\text{O}_5$, Silica gel']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'chem8-ex1',
        question: 'At 25°C, 24 g of Potassium chloride ($\\text{KCl}$) dissolves completely in 60 g of water to make a saturated solution. Calculate the solubility of KCl at 25°C.',
        steps: [
          'Given: Mass of solute $= 24\\text{ g}$, Mass of pure solvent (water) $= 60\\text{ g}$.',
          'Solubility $= \\frac{24}{60} \\times 100 = 0.4 \\times 100 = 40\\text{ g / 100 g water}$.'
        ],
        finalAnswer: '40 g per 100 g water at 25°C.',
        keyRule: 'Always quote temperature alongside solubility!'
      },
      {
        id: 'chem8-ex2',
        question: '36 g of a saturated salt solution evaporated cleanly to dryness leaves 9 g of dry solute at 30°C. Find the solubility of the salt at 30°C.',
        steps: [
          'Careful! $36\\text{ g}$ is the **TOTAL SOLUTION** mass (Solute + Water)!',
          'Mass of Water (solvent) $= 36 - 9 = 27\\text{ g}$.',
          'Solubility $= \\frac{9}{27} \\times 100 = \\frac{1}{3} \\times 100 = 33.33\\text{ g / 100 g water}$.'
        ],
        finalAnswer: '33.33 g per 100 g water at 30°C.',
        keyRule: 'Subtract Solute from Total Solution to get Solvent mass BEFORE multiplying by 100!'
      },
      {
        id: 'chem8-ex3',
        question: 'A saturated solution of Potassium nitrate ($\\text{KNO}_3$, solubility $110\\text{ g}$ at $60^\\circ\\text{C}$ and $32\\text{ g}$ at $20^\\circ\\text{C}$) containing $50\\text{ g}$ of water at $60^\\circ\\text{C}$ is cooled to $20^\\circ\\text{C}$. What mass of crystals precipitates out?',
        steps: [
          'At $60^\\circ\\text{C}$ in $100\\text{ g}$ water: dissolves $110\\text{ g}$. So in **$50\\text{ g}$ water**: dissolves $\\frac{110}{2} = 55\\text{ g}$.',
          'At $20^\\circ\\text{C}$ in $50\\text{ g}$ water: max dissolved $= \\frac{32}{2} = 16\\text{ g}$.',
          'Mass of $\\text{KNO}_3$ crystallising out $= 55 - 16 = 39\\text{ g}$.'
        ],
        finalAnswer: '39 g of KNO₃ crystals deposit.',
        keyRule: 'Scale solubility from 100 g water down/up to the exact water mass given, then subtract!'
      },
      {
        id: 'chem8-ex4',
        question: 'Why does common table salt turn damp and sticky during the rainy monsoon season, whereas pure laboratory NaCl stays dry?',
        steps: [
          'Pure $\\text{NaCl}$ is NOT deliquescent.',
          'However, commercial sea salt retains small traces of **Magnesium chloride ($\\text{MgCl}_2$)** and **Calcium chloride ($\\text{CaCl}_2$)**, which are strongly **deliquescent**—absorbing monsoon humidity and wetting the salt crystals!'
        ],
        finalAnswer: 'Trace deliquescent MgCl₂ and CaCl₂ impurities absorb humid air.',
        keyRule: 'Commercial NaCl goes wet in monsoons solely due to MgCl₂/CaCl₂ trace impurities!'
      },
      {
        id: 'chem8-ex5',
        question: 'How would you prove whether a sample of clear well water contains Temporary Hardness, Permanent Hardness, or Soft Water using soap solution and boiling?',
        steps: [
          '1. Shake sample A directly with soap solution: **Instant rich lather** $\\implies$ **Soft Water**!',
          '2. If Sample gives curdy scum (Hard): **Boil** a fresh portion thoroughly for 5 minutes, filter out any chalky precipitate, cool, and shake with soap again:',
          '   - **Now lathers richly** $\\implies$ **Temporary Hardness** (bicarbonates destroyed by boiling).',
          '   - **Still gives scum** $\\implies$ **Permanent Hardness** (chlorides/sulphates survived boiling).'
        ],
        finalAnswer: 'Boil, cool, and shake with soap: lathers now = Temporary; still scum = Permanent.',
        keyRule: 'Boiling removes ONLY Temporary hardness—making it the perfect diagnostic splitter!'
      },
      {
        id: 'chem8-ex6',
        question: 'Why cannot **concentrated $\\text{H}_2\\text{SO}_4$** be used to dry **Ammonia ($\\text{NH}_3$)** gas, and which drying agent IS used instead?',
        steps: [
          'Ammonia ($\\text{NH}_3$) is a **basic/alkaline gas**, whereas Sulphuric acid is a strong acid—they react immediately forming solid ammonium sulphate ($2\\text{NH}_3 + \\text{H}_2\\text{SO}_4 \\to \\text{(NH}_4)_2\\text{SO}_4$) instead of dry gas!',
          '(Even $\\text{CaCl}_2$ reacts forming $\\text{CaCl}_2\\cdot 8\\text{NH}_3$!).',
          'Therefore, pass moist $\\text{NH}_3$ through **Quicklime ($\\text{CaO}$, basic)**!'
        ],
        finalAnswer: 'Use Quicklime (CaO); conc. H₂SO₄ reacts chemically with alkaline NH₃.',
        keyRule: 'Acidic gases dry over conc. H₂SO₄; Basic NH₃ dries strictly over basic Quicklime (CaO)!'
      },
      {
        id: 'chem8-ex7',
        question: 'Explain the visible change when **concentrated Sulphuric acid** is poured onto white table sugar crystals.',
        steps: [
          'Conc. $\\text{H}_2\\text{SO}_4$ acts as a powerful **dehydrating agent**, stripping Hydrogen and Oxygen in $2:1$ ratio from sucrose ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$).',
          'Steam hisses out as the white sugar puffs dramatically into a steaming **spongy black column of pure Carbon (sugar charcoal)**!'
        ],
        finalAnswer: 'Charring into black carbon + steam proves dehydration.',
        keyRule: 'Dehydration strips chemically bonded H₂O out of compounds.'
      },
      {
        id: 'chem8-ex8',
        question: 'Write balanced equations showing how **Washing Soda ($\\text{Na}_2\\text{CO}_3$)** softens water containing both $\\text{MgCl}_2$ and $\\text{CaSO}_4$.',
        steps: [
          '1. $\\text{MgCl}_2 + \\text{Na}_2\\text{CO}_3 \\to \\text{MgCO}_3\\downarrow + 2\\text{NaCl}$.',
          '2. $\\text{CaSO}_4 + \\text{Na}_2\\text{CO}_3 \\to \\text{CaCO}_3\\downarrow + \\text{Na}_2\\text{SO}_4$.',
          'Insoluble $\\text{MgCO}_3$ and $\\text{CaCO}_3$ precipitate out cleanly, leaving harmless $\\text{Na}^+$ ions that do NOT interfere with soap lather!'
        ],
        finalAnswer: 'Precipitates MgCO₃↓ and CaCO₃↓, freeing soft water.',
        keyRule: 'Na⁺ ions do NOT cause water hardness—only Ca²⁺ and Mg²⁺ do!'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'chem8-e1',
          question: 'State the colour change when water drops touch (a) white anhydrous $\\text{CuSO}_4$ and (b) dry blue Cobalt chloride paper.',
          solutionSteps: ['(a) White → Blue; (b) Blue → Pink.'],
          finalAnswer: '(a) White → Blue; (b) Blue → Pink',
          marks: 2
        },
        {
          id: 'chem8-e2',
          question: 'Name two salts responsible for Temporary Hardness and two salts causing Permanent Hardness.',
          solutionSteps: ['Temporary: Ca(HCO₃)₂, Mg(HCO₃)₂; Permanent: CaSO₄, MgCl₂ (or CaCl₂, MgSO₄).'],
          finalAnswer: 'Temp: Ca/Mg bicarbonates; Perm: Ca/Mg chlorides & sulphates.',
          marks: 2
        },
        {
          id: 'chem8-e3',
          question: 'Give two examples each of Efflorescent and Deliquescent substances.',
          solutionSteps: ['Efflorescent: Washing soda (Na₂CO₃·10H₂O), Epsom salt; Deliquescent: NaOH, anhydrous CaCl₂.'],
          finalAnswer: 'Effl: Washing soda, Glauber salt; Deliq: NaOH, CaCl₂.',
          marks: 2
        },
        {
          id: 'chem8-e4',
          question: 'Why does distilled water taste flat whereas spring water tastes crisp and refreshing?',
          solutionSteps: ['Spring water contains dissolved mineral salts and CO₂/O₂ gases; distilled water lacks both dissolved minerals and gases.'],
          finalAnswer: 'Spring water contains dissolved gases (CO₂/O₂) and beneficial minerals.',
          marks: 2
        }
      ],
      medium: [
        {
          id: 'chem8-m1',
          question: '15 g of solute dissolves in 50 g of water to saturate it at 40°C. Calculate its solubility at 40°C.',
          solutionSteps: ['$\\text{Solubility} = \\frac{15}{50} \\times 100 = 30\\text{ g / 100 g water}$.'],
          finalAnswer: '30 g per 100 g water at 40°C.',
          marks: 3
        },
        {
          id: 'chem8-m2',
          question: 'Compare a **Drying Agent** vs a **Dehydrating Agent** with one example each.',
          solutionSteps: [
            'Drying agent removes physical moisture without changing chemical bonds (e.g., fused CaCl₂ drying H₂).',
            'Dehydrating agent chemically extracts combined H & O in 2:1 ratio as water (e.g., conc. H₂SO₄ charring sugar to carbon).'
          ],
          finalAnswer: 'Physical moisture removal (CaCl₂) vs chemical H₂O extraction (conc. H₂SO₄).',
          marks: 3
        },
        {
          id: 'chem8-m3',
          question: 'How does Clark\'s process soften temporary hard water using Slaked Lime?',
          solutionSteps: [
            'Adding calculated slaked lime $\\text{Ca(OH)}_2$ converts soluble calcium bicarbonate into insoluble white chalk precipitate:',
            '$\\text{Ca(HCO}_3)_2 + \\text{Ca(OH)}_2 \\to 2\\text{CaCO}_3\\downarrow + 2\\text{H}_2\\text{O}$.'
          ],
          finalAnswer: 'Precipitates insoluble CaCO₃↓ leaving soft water.',
          marks: 3
        },
        {
          id: 'chem8-m4',
          question: 'Why do dissolved gases like O₂ and CO₂ escape visibly as tiny bubbles when tap water is gently warmed even before boiling?',
          solutionSteps: [
            'Unlike most solids, **solubility of gases decreases as temperature rises**.',
            'Warming forces dissolved air out as tiny bubbles sticking to the beaker glass long before $100^\\circ\\text{C}$ boiling starts!'
          ],
          finalAnswer: 'Gas solubility decreases with rising temperature.',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'chem8-d1',
          question: 'A saturated solution at 50°C weighs 65 g and contains 25 g of solute. Find its solubility at 50°C, and how many grams of extra solute dissolve if we double the water?',
          solutionSteps: [
            'Water mass $= 65 - 25 = 40\\text{ g}$.',
            'Solubility $= \\frac{25}{40} \\times 100 = 62.5\\text{ g / 100 g water}$.',
            'Doubling water from $40\\text{ g} \\to 80\\text{ g}$ allows an extra $25\\text{ g}$ solute to dissolve (total $50\\text{ g}$).'
          ],
          finalAnswer: 'Solubility = 62.5 g / 100 g water; 25 g extra solute dissolves.',
          marks: 4
        },
        {
          id: 'chem8-d2',
          question: 'Why does hydrated Blue Vitriol turn white when heated in a test tube, AND turn white slowly inside a closed desiccator jar containing concentrated $\\text{H}_2\\text{SO}_4$?',
          solutionSteps: [
            'Heating drives out its 5 molecules of **water of crystallisation** into steam ($\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O} \\to \\text{CuSO}_4 + 5\\text{H}_2\\text{O}$).',
            'In a closed desiccator, strongly hygroscopic/dehydrating **conc. $\\text{H}_2\\text{SO}_4$** strips water vapour from the air space, steadily dehydrating blue vitriol into white anhydrous $\\text{CuSO}_4$!'
          ],
          finalAnswer: 'Both remove the 5 water-of-crystallisation molecules from CuSO₄·5H₂O.',
          marks: 4
        },
        {
          id: 'chem8-d3',
          question: 'Mention two disadvantages of using hard water in steam boilers/laundries and one health/ecological benefit of hard water.',
          solutionSteps: [
            'Disadvantages: (1) Forms insulating **boiler scale** ($\\text{CaCO}_3/\\text{CaSO}_4$) wasting fuel and risking boiler burst; (2) Wastes soap forming sticky scum on clothes.',
            'Benefit: Dissolved calcium strengthens human bones and teeth (reducing heart-disease risk slightly) and supplies shells for aquatic snails/mussels.'
          ],
          finalAnswer: 'Boiler scale & soap waste vs strong bones/shells.',
          marks: 4
        },
        {
          id: 'chem8-d4',
          question: 'Explain why **Calcium sulphate ($\\text{CaSO}_4$)** and **Sodium hydroxide ($\\text{NaOH}$)** behave oppositely when left exposed on dry vs humid days, and also how $\\text{CaSO}_4$ solubility behaves with heat.',
          solutionSteps: [
            'First, $\\text{CaSO}_4$ solubility **decreases** slightly at higher boiler temperatures (precipitating tough boiler scale!).',
            'Second, hydrated Gypsum ($\\text{CaSO}_4\\cdot 2\\text{H}_2\\text{O}$) is stable/mild, whereas crystalline **NaOH** is fiercely **deliquescent**—absorbing water vapour on humid days until it turns into a liquid caustic puddle!'
          ],
          finalAnswer: 'CaSO₄ precipitates at high T (retrograde solubility); NaOH deliquesces in humid air.',
          marks: 4
        }
      ]
    },
    practiceWorksheet: {
      title: 'Chemistry Chapter 8 Worksheet: Water, Solutions & Hardness (30 Marks)',
      instructions: 'Show solubility calculations clearly and write balanced equations for hardness removal.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Terms (1 × 5 = 5 Marks)',
          items: [
            '1. Percentage of Oxygen inside air dissolved in natural river water (~21% or ~33%)?',
            '2. Formula of Blue Vitriol (Hydrated Copper(II) Sulphate).',
            '3. Name one salt whose solubility barely changes with rising temperature.',
            '4. Which ion ($\\text{Na}^+$ or $\\text{Ca}^{2+}$) causes water hardness?',
            '5. Name the drying agent specifically suited for Ammonia gas.'
          ]
        },
        {
          sectionTitle: 'Section B: Concepts & Comparisons (2 × 4 = 8 Marks)',
          items: [
            '6. Distinguish Efflorescent vs Deliquescent crystals with one example each.',
            '7. Why does soap refuse to lather cleanly in borewell water?',
            '8. How does a Drying agent differ from a Dehydrating agent?',
            '9. Give two chemical tests proving a colourless liquid contains water.'
          ]
        },
        {
          sectionTitle: 'Section C: Numerical & Hardness Equations (3 × 4 = 12 Marks)',
          items: [
            '10. 18 g of salt saturates 45 g of water at 20°C. Find its solubility.',
            '11. Write balanced equations removing Temporary Hardness by (a) boiling and (b) Clark\'s method.',
            '12. Write balanced equation removing Permanent Hardness ($\\text{CaCl}_2$) using Washing Soda.',
            '13. Explain why aquatic fishes survive comfortably at 4°C beneath frozen winter lake ice.'
          ]
        },
        {
          sectionTitle: 'Section D: Solubility Graph Analysis (5 Marks)',
          items: [
            '14. Contrast how solubility changes with temperature for $\\text{KNO}_3$, $\\text{NaCl}$, $\\text{CaSO}_4$, and $\\text{CO}_2$ gas—and explain what happens when a hot saturated $\\text{KNO}_3$ solution cools down.'
          ]
        }
      ],
      answerKey: [
        '1. ~33% (due to higher O₂ solubility vs N₂).',
        '2. CuSO₄·5H₂O.',
        '3. Sodium chloride (NaCl).',
        '4. Calcium ion (Ca²⁺) [and Mg²⁺].',
        '5. Quicklime (CaO).',
        '6. Efflorescent loses water to dry air turning powdery (washing soda); Deliquescent absorbs air moisture turning completely liquid (NaOH).',
        '7. Dissolved Ca²⁺/Mg²⁺ ions react with soap forming insoluble grey curdy scum instead of lather.',
        '8. Drying removes physical free water; Dehydrating extracts chemically combined H₂O elements (conc. H₂SO₄ on sugar).',
        '9. White anhydrous CuSO₄ turns blue; dry blue CoCl₂ paper turns pink.',
        '10. (18 / 45) × 100 = 40 g / 100 g water at 20°C.',
        '11. (a) Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑; (b) Ca(HCO₃)₂ + Ca(OH)₂ → 2CaCO₃↓ + 2H₂O.',
        '12. CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl.',
        '13. Floating ice insulates 4°C bottom water AND cold water holds high dissolved O₂.',
        '14. KNO₃ rises steeply; NaCl flat; CaSO₄ & CO₂ decrease with heat. Cooling hot saturated KNO₃ precipitates excess salt as pure crystals.'
      ]
    },
    examPreparationTips: [
      'Watch solubility questions like hawks: check whether they gave **mass of water (solvent)** OR **mass of saturated solution**!',
      'Memorise exact hydrated formulas: **$\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$**, **$\\text{Na}_2\\text{CO}_3\\cdot 10\\text{H}_2\\text{O}$**, **$\\text{FeSO}_4\\cdot 7\\text{H}_2\\text{O}$**, **$\\text{MgSO}_4\\cdot 7\\text{H}_2\\text{O}$**.'
    ],
    chapterSummary: [
      'Water is a neutral Universal Solvent proved chemically via white anhydrous CuSO₄ (→ blue) and blue CoCl₂ (→ pink).',
      'Solubility = (Solute ÷ Water) × 100 at fixed temperature; solid KNO₃ rises sharply with heat, NaCl stays nearly flat, while CaSO₄ and gases drop.',
      'Efflorescent hydrates lose water to dry air; Deliquescent solids absorb moisture until liquid; Hygroscopic absorb moisture without liquefying.',
      'Temporary hardness (Ca/Mg bicarbonates) boils out as CaCO₃↓; Permanent hardness (Ca/Mg chlorides & sulphates) softens via Washing Soda Na₂CO₃ or Ion Exchange.',
      'Water reaches maximum density at $4^\\circ\\text{C}$ ($1\\text{ g/cm}^3$), allowing ice to float and insulate aquatic life beneath frozen lakes, while water of crystallisation gives salts like blue vitriol ($\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$) their crystal geometry and colour.'
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Why does freshly boiled water taste flat compared to tap or spring water?',
        answer: 'Boiling drives out all **dissolved atmospheric gases** ($\\text{O}_2$ and $\\text{CO}_2$) whose solubility drops to near zero at $100^\\circ\\text{C}$, stripping the crisp taste away.',
        type: 'Reasoning'
      },
      {
        question: 'How does a chemical Dehydrating agent differ from a Drying agent?',
        answer: 'A **drying agent** (anhydrous $\\text{CaCl}_2$, $\\text{CaO}$) absorbs free physical water/moisture from gases without changing molecule formulas. A **dehydrating agent** (conc. $\\text{H}_2\\text{SO}_4$) chemically breaks molecules to extract H and O in a $2:1$ water ratio (e.g., charring sugar $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11} \\to 12\\text{C} + 11\\text{H}_2\\text{O}$).',
        type: 'Long Answer'
      },
      {
        question: 'Distinguish between Temporary Hardness and Permanent Hardness of water with removal equations.',
        answer: '**Temporary hardness** is caused by soluble $\\text{Ca(HCO}_3)_2$ and $\\text{Mg(HCO}_3)_2$, removed simply by **boiling** ($\\text{Ca(HCO}_3)_2 \\to \\text{CaCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$) or Clark\'s lime. **Permanent hardness** is caused by $\\text{Ca/Mg}$ chlorides and sulphates, unaffected by boiling and softened using **Washing soda** ($\\text{CaSO}_4 + \\text{Na}_2\\text{CO}_3 \\to \\text{CaCO}_3\\downarrow + \\text{Na}_2\\text{SO}_4$) or ion-exchange.',
        type: 'Long Answer'
      },
      {
        question: 'Why does Washing Soda turn chalky white in dry air while Sodium Hydroxide turns into a liquid puddle?',
        answer: 'Washing soda ($\\text{Na}_2\\text{CO}_3\\cdot 10\\text{H}_2\\text{O}$) is **efflorescent**—losing 9 crystal water molecules to dry air and crumbling to white monohydrate powder. Solid $\\text{NaOH}$ is **deliquescent**—absorbing so much atmospheric humidity that it dissolves in its own absorbed water!',
        type: 'Reasoning'
      },
      {
        question: 'What happens when a single tiny seed crystal drops into a supersaturated solution of Sodium thiosulphate?',
        answer: 'All excess dissolved salt beyond normal saturation instantaneously crystallises outward into a dramatic solid crystalline mass releasing latent heat!',
        type: 'Short Answer'
      },
      {
        question: 'Why does table salt NOT have water of crystallisation whereas Blue Vitriol does?',
        answer: 'Ionic $\\text{Na}^+$ and $\\text{Cl}^-$ stack directly into tight anhydrous cubic crystals without binding water molecules; $\\text{Cu}^{2+}$ and $\\text{SO}_4^{2-}$ coordinate 5 structural water molecules ($\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$) to stabilise crystal symmetry and colour.',
        type: 'HOTS'
      },
      {
        question: 'Name three salts showing steep, flat, and decreasing solubility curves with temperature.',
        answer: 'Steep increase: **Potassium nitrate ($\\text{KNO}_3$)**; nearly flat: **Sodium chloride ($\\text{NaCl}$)**; slight decrease: **Calcium sulphate ($\\text{CaSO}_4$)** or **$\\text{Ca(OH)}_2$**.',
        type: 'Short Answer'
      },
      {
        question: 'Why can synthetic detergents still wash clothes cleanly in borewell hard water whereas ordinary soap fails?',
        answer: 'Soap (sodium stearate) precipitates with $\\text{Ca}^{2+}/\\text{Mg}^{2+}$ as insoluble sticky scum; synthetic **detergents** form calcium/magnesium salts that remain completely **water-soluble**, producing rich foam even in hard water!',
        type: 'HOTS'
      }
    ],
    practiceExercises: [
      {
        question: 'At 40°C, 50 g of saturated solution yields 14 g dry KCl on evaporation. Find solubility of KCl at 40°C.',
        hint: 'Water = 50 − 14 = 36 g.',
        answerGuide: '(14 / 36) × 100 = 38.89 g / 100 g water.'
      },
      {
        question: 'Name the salt giving: (a) 10 H₂O molecules, (b) 5 H₂O molecules, (c) 7 H₂O molecules.',
        hint: 'Washing soda, Blue vitriol, Epsom/Green vitriol.',
        answerGuide: '(a) Na₂CO₃·10H₂O; (b) CuSO₄·5H₂O; (c) FeSO₄·7H₂O or MgSO₄·7H₂O.'
      },
      {
        question: 'Why should an airtight cap stay snapped shut over Silica Gel or Calcium Chloride laboratory jars?',
        hint: 'Moisture absorption.',
        answerGuide: 'Both absorb atmospheric water vapour rapidly (CaCl₂ deliquesces into wet brine; silica gel saturates).'
      }
    ]
  },
  quizQuestions: [
    {
      id: 'chem8-q1',
      type: 'mcq',
      question: 'White anhydrous Copper(II) sulphate powder turns ______ in contact with water:',
      options: ['Pink', 'Bright Blue', 'Black', 'Yellow'],
      correctAnswer: 'Bright Blue',
      explanation: 'CuSO₄ (white) + 5H₂O → CuSO₄·5H₂O (bright blue crystals).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem8-q2',
      type: 'mcq',
      question: 'Why is the oxygen percentage (~33%) in dissolved water air HIGHER than in ordinary atmospheric air (~21%)?',
      options: ['Water produces O₂ spontaneously', 'Oxygen is roughly twice as soluble in water as Nitrogen', 'Nitrogen escapes upward as gas', 'Fish exhale O₂'],
      correctAnswer: 'Oxygen is roughly twice as soluble in water as Nitrogen',
      explanation: 'Higher water solubility enriches dissolved oxygen to ~33%, supporting aquatic gills.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem8-q3',
      type: 'mcq',
      question: 'If 12 g of salt saturates 30 g of water at 25°C, what is its solubility?',
      options: ['12 g / 100 g', '30 g / 100 g', '40 g / 100 g', '28.6 g / 100 g'],
      correctAnswer: '40 g / 100 g',
      explanation: 'Solubility = (12 / 30) × 100 = 40 g per 100 g water.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem8-q4',
      type: 'mcq',
      question: 'Which compound exhibits **Efflorescence**, losing crystal water to dry air and turning powdery?',
      options: ['Sodium hydroxide (NaOH)', 'Washing soda (Na₂CO₃·10H₂O)', 'Table salt (NaCl)', 'Concentrated H₂SO₄'],
      correctAnswer: 'Washing soda (Na₂CO₃·10H₂O)',
      explanation: 'Washing soda loses 9 H₂O molecules to dry air, forming white crumbly Na₂CO₃·H₂O.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem8-q5',
      type: 'mcq',
      question: 'Which substance absorbs moisture from humid air until it dissolves completely into a liquid (**Deliquescent**)?',
      options: ['Silica gel', 'Calcium oxide (CaO)', 'Anhydrous Calcium chloride (CaCl₂)', 'Gypsum'],
      correctAnswer: 'Anhydrous Calcium chloride (CaCl₂)',
      explanation: 'CaCl₂, MgCl₂, NaOH, KOH, and FeCl₃ deliquesce into liquid puddles in humid air.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem8-q6',
      type: 'mcq',
      question: 'Temporary hardness of water is caused by dissolved:',
      options: ['Calcium chloride and Magnesium sulphate', 'Sodium chloride and Potassium nitrate', 'Calcium and Magnesium bicarbonates', 'Lead nitrate'],
      correctAnswer: 'Calcium and Magnesium bicarbonates',
      explanation: 'Ca(HCO₃)₂ and Mg(HCO₃)₂ cause temporary hardness removable by boiling.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem8-q7',
      type: 'mcq',
      question: 'Permanent hardness (CaSO₄ / MgCl₂) is removed in laundries by adding:',
      options: ['Boiling alone', 'Washing soda (Na₂CO₃)', 'Table salt (NaCl)', 'Dilute HCl'],
      correctAnswer: 'Washing soda (Na₂CO₃)',
      explanation: 'Na₂CO₃ precipitates Ca²⁺ and Mg²⁺ out cleanly as insoluble CaCO₃↓ / MgCO₃↓.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem8-q8',
      type: 'fill_blank',
      question: 'Charring cane sugar into a black carbon mass demonstrates that concentrated H₂SO₄ is a strong ______ agent.',
      correctAnswer: 'dehydrating',
      explanation: 'Conc. H₂SO₄ chemically strips H and O in 2:1 ratio as water from sugar (C₁₂H₂₂O₁₁ → 12C + 11H₂O).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem8-q9',
      type: 'true_false',
      question: 'Solubility of ALL gases in water increases rapidly as water temperature rises.',
      correctAnswer: false,
      explanation: 'Solubility of gases (O₂, CO₂) DECREASES as water gets warmer—why warm soda goes flat fast.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem8-q10',
      type: 'mcq',
      question: 'Which drying agent MUST be used to dry basic Ammonia ($\\text{NH}_3$) gas safely?',
      options: ['Concentrated H₂SO₄', 'Quicklime (CaO)', 'Fused CaCl₂', 'P₂O₅'],
      correctAnswer: 'Quicklime (CaO)',
      explanation: 'Both H₂SO₄, P₂O₅, and CaCl₂ react chemically with NH₃; basic Quicklime (CaO) dries it without reacting.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem8-q11',
      type: 'mcq',
      question: 'Which hydrated crystal formula represents Green Vitriol (Ferrous sulphate)?',
      options: ['CuSO₄·5H₂O', 'FeSO₄·7H₂O', 'CaSO₄·2H₂O', 'Na₂CO₃·10H₂O'],
      correctAnswer: 'FeSO₄·7H₂O',
      explanation: 'Green vitriol is FeSO₄·7H₂O (Blue vitriol = CuSO₄·5H₂O; Gypsum = CaSO₄·2H₂O).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem8-q12',
      type: 'hots',
      question: 'A saturated solution weighing 60 g contains 20 g of dissolved nitrate salt at 30°C. What is the solubility of the salt at 30°C?',
      options: ['33.3 g / 100 g water', '50 g / 100 g water', '40 g / 100 g water', '20 g / 100 g water'],
      correctAnswer: '50 g / 100 g water',
      explanation: 'Water mass = 60 − 20 = 40 g. Solubility = (20 / 40) × 100 = 50 g / 100 g water!',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'fc-c8-1',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Two chemical tests for Water?',
      back: '(1) White anhydrous CuSO₄ turns bright BLUE; (2) Dry blue Cobalt chloride (CoCl₂) paper turns PINK.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c8-2',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Solubility formula & key trap with "mass of saturated solution"?',
      back: 'Solubility = (Mass of Solute ÷ Mass of PURE WATER) × 100. Always subtract solute from total solution mass first!',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c8-3',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Contrast solubility vs temperature for KNO₃, NaCl, CaSO₄, and Gases.',
      back: 'KNO₃ rises steeply; NaCl stays nearly flat; CaSO₄ and ALL Gases (O₂, CO₂) DECREASE as T rises.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c8-4',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Define Efflorescence vs Deliquescence vs Hygroscopy.',
      back: 'Efflorescence: loses crystal water → dry powder (Na₂CO₃·10H₂O). Deliquescence: absorbs air water → wet liquid (NaOH, CaCl₂). Hygroscopic: absorbs moisture without liquefying (CaO, silica gel).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c8-5',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Drying Agent vs Dehydrating Agent?',
      back: 'Drying removes physical moisture (CaCl₂, CaO); Dehydrating chemically extracts H₂O atoms from compounds (conc. H₂SO₄ charring sugar → 12C + 11H₂O).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c8-6',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Why is Ammonia gas dried strictly over Quicklime (CaO)?',
      back: 'Because NH₃ is alkaline—it neutralises acidic conc. H₂SO₄ and complexes with CaCl₂, whereas basic CaO dries it safely.',
      category: 'Scientific Law',
      importance: 'Standard'
    },
    {
      id: 'fc-c8-7',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Causes & Removal of Temporary Water Hardness?',
      back: 'Caused by Ca(HCO₃)₂ & Mg(HCO₃)₂. Removed by Boiling (→ CaCO₃↓ + H₂O + CO₂) or Clark\'s Ca(OH)₂.',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c8-8',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Causes & Removal of Permanent Water Hardness?',
      back: 'Caused by Ca/Mg Chlorides & Sulphates. Boiling fails; soften with Washing Soda (Na₂CO₃ → CaCO₃↓) or Ion-exchange.',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c8-9',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Why does dissolved air in water hold ~33% O₂ instead of 21%?',
      back: 'Oxygen is nearly twice as soluble in water as Nitrogen.',
      category: 'Scientific Law',
      importance: 'Standard'
    },
    {
      id: 'fc-c8-10',
      subjectId: 'chemistry',
      chapterId: 'chem-water',
      chapterTitle: 'Water',
      front: 'Hydrated formulas of Blue Vitriol, Green Vitriol, Washing Soda & Gypsum?',
      back: 'CuSO₄·5H₂O (Blue), FeSO₄·7H₂O (Green), Na₂CO₃·10H₂O (Washing soda), CaSO₄·2H₂O (Gypsum).',
      category: 'Formula',
      importance: 'Standard'
    }
  ]
};
