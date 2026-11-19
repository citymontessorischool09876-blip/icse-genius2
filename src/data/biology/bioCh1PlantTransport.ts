import { Chapter } from '../../types';

export const BIO_CH1_PLANT_TRANSPORT: Chapter = {
  id: 'bio-ch1',
  subjectId: 'biology',
  chapterNumber: 1,
  title: 'Transport of Food and Minerals in Plants',
  subtitle: 'Xylem & phloem conducting tissues, root hair osmosis & active mineral uptake, radial ascent of sap, transpiration pull, phloem translocation (girdling), and macro/micronutrient deficiency disorders',
  term: 'Half-Yearly',
  estimatedMinutes: 90,
  notes: {
    introduction: `Consider a towering 100-metre redwood tree or a leafy neem tree standing in your school courtyard. Without any beating mechanical heart or muscular arteries, it silently lifts hundreds of litres of groundwater from deep underground soil up to its sunlit canopy every single day—while simultaneously shipping sweet sugars baked inside its green leaves down to dark underground roots for storage! How does a silent, rooted plant pull off this two-way engineering miracle?

In Chapter 1 of Class 8 ICSE Biology (*Concise Biology / Gem's Biology*), we dissect the **vascular conducting system of plants**. You will inspect the microscopic structure of **Xylem** (nature's dead lignified water-pipes) and **Phloem** (living food-pipelines), follow water step-by-step across **root hair cells by osmosis** and mineral ions by **active transport**, test **transpiration pull and root pressure**, verify **downward translocation of sucrose by the ring-girdling experiment**, and diagnose **mineral deficiency diseases** (chlorosis, necrosis, stunted growth) caused by missing macronutrients and micronutrients.`,
    learningObjectives: [
      'Differentiate between unicellular diffusion transport (in algae/mosses) and complex vascular bundle transport (xylem and phloem) in higher plants.',
      'List all four cell types composing Xylem and Phloem respectively, identifying living vs dead components and transport direction.',
      'Explain how root hair cells are structurally adapted for water uptake via osmosis and active uptake of dissolved mineral ions using ATP.',
      'Trace the radial pathway of water across soil water → root hair → cortex → endodermis → xylem vessel → leaf mesophyll → stomata.',
      'Define transpiration, explain stomatal vs cuticular vs lenticular transpiration, and analyse factors affecting transpiration rate (light, temperature, wind, humidity).',
      'Explain the Cohesion–Tension / Transpiration Pull theory for ascent of sap and verify phloem translocation using the classic stem-girdling experiment.',
      'Classify essential minerals into macronutrients (N, P, K, Ca, Mg, S) and micronutrients (Fe, Zn, Mn, B, Cu) and recognise their deficiency symptoms.'
    ],
    topics: [
      {
        id: 'bio-ch1-t1',
        title: '1. Vascular Conducting System: Xylem & Phloem Architecture',
        content: `In tiny aquatic plants like *Chlamydomonas* or *Spirogyra*, every cell sits directly in water, so simple **diffusion** satisfies all needs. Tall terrestrial herbs, shrubs, and trees need specialised long-distance highways bundled together inside roots, stems, and leaf veins as **vascular bundles** containing two distinct complex permanent tissues: **Xylem** and **Phloem**.`,
        subtopics: [
          {
            subheading: '1.1 Xylem (Water & Mineral Conducting Tissue)',
            body: `Named from the Greek word *xylon* (wood), **Xylem** carries **water and dissolved inorganic mineral salts** strictly **unidirectionally upward** from roots → stem → leaves, while giving mechanical strength to wood:
1. **Xylem Vessels (Tracheae)**: Long cylindrical pipes stacked end-to-end with dissolved cross-walls and hollow **lignified** (woody) walls—forming continuous capillary straws inside flowering plants (angiosperms).
2. **Tracheids**: Elongated, spindle-shaped dead cells with tapering pointed ends and bordered pits—permitting water passage side-to-side.
3. **Xylem Fibres (Wood Fibres)**: Thick-walled dead sclerenchyma fibres providing purely mechanical rigidity.
4. **Xylem Parenchyma**: The **ONLY living cell type** in xylem! Thin-walled cells that store starch/tannins and aid slow lateral conduction of water.`,
            keyPoint: 'Remember the classic ICSE rule: Three out of four xylem elements (Tracheids, Vessels, Xylem fibres) are DEAD at maturity; only Xylem Parenchyma is living!'
          },
          {
            subheading: '1.2 Phloem (Food / Sucrose Conducting Tissue)',
            body: `Named from *phloios* (bark), **Phloem** transports soluble organic food (**sucrose** and **amino acids**) prepared during leaf photosynthesis to growing buds, fruits, and storage roots—moving **bidirectionally (both upward and downward)**:
1. **Sieve Tubes**: Cylindrical **living cells** placed end-to-end whose end walls are perforated with tiny pores like a kitchen sieve (**sieve plates**). Mature sieve tube elements famously **lack a nucleus** so cytoplasm streams freely!
2. **Companion Cells**: Elongated, metabolically bustling living cells glued right beside each sieve tube, carrying a prominent **nucleus and numerous mitochondria** to energise and control the enucleated sieve tube!
3. **Phloem Parenchyma**: Living thin-walled cells storing food and aiding radial movement.
4. **Phloem Fibres (Bast Fibres)**: The **ONLY dead component** of phloem (commercially harvested as **jute, flax, and hemp** ropes!).`,
            keyPoint: 'Flip-flop ICSE rule: Xylem is mostly DEAD (only Xylem Parenchyma is living); Phloem is mostly LIVING (only Phloem Fibres are dead)!'
          }
        ],
        definitions: [
          { term: 'Vascular Bundle', definition: 'Strand of conducting tissue containing xylem and phloem (often separated by cambium in dicot stems) that runs continuously from root tips to leaf veins.' },
          { term: 'Sieve Plate', definition: 'Perforated transverse cross-wall connecting adjacent sieve tube elements so dissolved sucrose solution flows smoothly.' },
          { term: 'Lignin', definition: 'Hard, waterproof organic polymer deposited in xylem walls to prevent collapse under strong suction tension.' }
        ],
        comparisonTable: {
          caption: 'Structural & Functional Comparison: Xylem vs Phloem',
          headers: ['Feature', 'Xylem', 'Phloem'],
          rows: [
            ['Substances Transported', 'Water & dissolved mineral salts (inorganic sap)', 'Prepared organic food (mainly **sucrose**) & amino acids'],
            ['Direction of Flow', '**Unidirectional** (Strictly upward: Roots → Leaves)', '**Bidirectional** (Upward to buds/flowers & downward to roots)'],
            ['Energy Requirement', 'Largely **passive** (driven by solar transpiration pull)', '**Active translocation** (requires metabolic **ATP** from companion cells)'],
            ['Living vs Dead Elements', '3 Dead (Tracheids, Vessels, Fibres); **1 Living (Xylem parenchyma)**', '3 Living (Sieve tubes, Companion cells, Parenchyma); **1 Dead (Phloem fibres)**'],
            ['Main Mechanical Role', 'Forms tough heartwood giving structural support', 'Minimal support (except bast fibres in bark)']
          ]
        },
        diagram: {
          id: 'diag-plant-transport-interactive',
          title: 'Xylem & Phloem Vascular Transport in Higher Plants',
          caption: 'Two-way plant highway: unidirectional xylem water ascent vs bidirectional phloem sugar translocation.',
          imageUrl: '/diagrams/diagram_plant_transport_1794062474107.jpg',
          interactiveType: 'plant_transport'
        },
        realLifeExample: 'When you strip the tough outer fibrous threads off raw **celery stalks** or **bamboo shoots**, or weave strong gunny sacks from **jute**, you are holding bundles of dead lignified **xylem** and **phloem bast fibres**!',
        commonMistakes: [
          {
            mistake: 'Writing that Phloem transports glucose in plants, or transports food strictly downward.',
            correction: 'Photosynthesis produces glucose, which leaves convert into stable, non-reactive **sucrose** before loading into phloem; flow is **bidirectional** (e.g., downward to potato tubers in summer, **upward** from sprouting tubers to young shoots in spring!).'
          }
        ]
      },
      {
        id: 'bio-ch1-t2',
        title: '2. Water & Mineral Absorption by Roots (Osmosis vs Active Transport)',
        content: `Roots anchor the plant and absorb both **water** and **mineral salts**. However, almost no water enters through thick, corky old roots—over **90% of absorption** happens inside a tiny zone right behind the root tip carpeted with microscopic, thin-walled **root hairs**.`,
        subtopics: [
          {
            subheading: '2.1 Three Structural Adaptations of a Root Hair Cell',
            body: `Each root hair is a tubular **unicellular outgrowth of a single epidermal cell** (NOT a multicellular rootlet!):
1. **Enormous Surface Area**: Millions of delicate thread-like root hairs push snugly between tiny soil grains, multiplying contact with the soil water film.
2. **Ultra-Thin Cell Wall & Selectively Permeable Plasma Membrane**: Outer cellulose wall is freely permeable to water and salts, while the inner **plasma membrane** acts as a **semi-permeable membrane**.
3. **Hypertonic Cell Sap Vacuole**: Inside the root hair sits a huge central **vacuole** packed with concentrated **cell sap** (dissolved sugars, salts, and organic acids)—far more concentrated (lower water concentration) than dilute muddy rainwater outside!`,
            keyPoint: 'Water moves into root hairs PASSIVELY down its concentration gradient (from dilute soil water → concentrated cell sap) by OSMOSIS!'
          },
          {
            subheading: '2.2 Osmosis, Plasmolysis & Active Transport of Minerals',
            body: `**Osmosis** is the net movement of **water molecules** from a region of their **higher concentration** (dilute / hypotonic solution) to a region of their **lower concentration** (concentrated / hypertonic solution) across a **semi-permeable membrane**:
- **Turgidity**: When root cells soak up water by **endosmosis**, swollen vacuoles press against cell walls, making cells stiff and crisp (**turgid**)—keeping herbaceous stems upright and stomata open!
- **Plasmolysis & Salt Burn**: Sprinkle excessive chemical fertiliser or common salt around grass roots → surrounding soil water turns **hypertonic** (saltier than cell sap). Water rushes OUT of root hairs (**exosmosis**), cytoplasm shrinks away from the cell wall (**plasmolysis**), and the plant rapidly **wilts and dies**!

**Active Transport of Minerals**: Mineral ions like nitrate ($\\text{NO}_3^-$), potassium ($\\text{K}^+$), phosphate ($\\text{PO}_4^{3-}$), and magnesium ($\\text{Mg}^{2+}$) are often **already more concentrated inside root cell sap** than in dilute soil water! Yet roots still absorb them *against* the concentration gradient using **ATP energy** generated by root respiration—a process called **Active Transport**. That is why waterlogged soils lacking soil oxygen suffocate roots and halt mineral uptake!`,
            keyPoint: 'Water absorption = PASSIVE Osmosis; Mineral ion absorption = mainly ACTIVE Transport requiring O₂ and ATP!'
          }
        ],
        definitions: [
          { term: 'Osmosis', definition: 'Diffusion of solvent (water) molecules from a hypotonic (dilute) region to a hypertonic (concentrated) region across a semi-permeable membrane.' },
          { term: 'Semi-Permeable Membrane', definition: 'Thin membrane (like plasma membrane or visking tubing) that lets tiny solvent water molecules pass freely while blocking larger solute molecules.' },
          { term: 'Active Transport', definition: 'Movement of mineral ions or molecules from lower to higher concentration (against gradient) using carrier proteins and cellular ATP energy.' },
          { term: 'Turgidity vs Flaccidity', definition: 'Turgid = swollen, rigid plant cell full of water; Flaccid = limp, water-depleted cell when water exits via exosmosis.' }
        ],
        comparisonTable: {
          caption: 'Three Fundamental Cellular Transport Mechanisms in Plants',
          headers: ['Property', 'Simple Diffusion', 'Osmosis', 'Active Transport'],
          rows: [
            ['Direction', 'High → Low concentration', 'High water conc. → Low water conc.', '**Low → High** concentration (uphill)'],
            ['Membrane Required?', 'Not required', '**Semi-permeable membrane essential**', 'Living cell membrane + protein pumps'],
            ['Energy (ATP) Needed?', 'No (Passive)', 'No (Passive)', '**Yes — requires ATP from respiration**'],
            ['Plant Example', 'O₂ / CO₂ exchange via stomata', 'Soil water entry into root hairs', 'Uptake of NO₃⁻, K⁺, Mg²⁺ by roots']
          ]
        },
        diagram: {
          id: 'diag-bio-osmosis-root',
          title: 'Radial Transport from Soil Water Film through Root Hair to Xylem Vessel',
          caption: 'Water moves by osmosis down a water-potential gradient across root hair vacuole, cortex cells, and endodermis into hollow xylem vessels.',
          svgFigure: 'bio_osmosis_root'
        },
        realLifeExample: 'Crisp raw **potato fries or carrot sticks** soaked in plain tap water turn rock-hard (endosmosis → turgid), whereas sprinkling table salt over sliced cucumbers draws out shiny puddles within minutes (exosmosis)!',
        commonMistakes: [
          {
            mistake: 'Confusing **Root Hair** as a tiny branch root (multicellular) or saying minerals enter strictly by osmosis.',
            correction: 'Each root hair is a **single elongated epidermal cell**; and **osmosis applies ONLY to water (solvent)**—minerals move by **diffusion** and **active transport**!'
          }
        ]
      },
      {
        id: 'bio-ch1-t3',
        title: '3. Ascent of Sap, Transpiration Pull & Phloem Translocation',
        content: `Once water enters the root cortex and crosses the **endodermis**, it reaches central root **xylem vessels**. Together with dissolved salts, this dilute liquid is called **xylem sap**. Lifting sap from roots to leaf tips 100 m up relies on a harmonious three-force team—dominated overwhelmingly by **solar-powered Transpiration Pull**!`,
        subtopics: [
          {
            subheading: '3.1 Ascent of Sap: Root Pressure, Capillarity & Transpiration Pull',
            body: `1. **Root Pressure**: Root cells continuously pump mineral ions into root xylem, drawing water in by osmosis and generating a modest upward hydrostatic push called **root pressure**. In cool humid dawns when evaporation stops, grass and strawberry leaf tips ooze sparkling droplets from special pores (**hydathodes**) by **guttation**! *(Note: Root pressure alone lifts water only ~1–2 metres—far too weak for tall trees.)*
2. **Capillarity**: Microscopic xylem bore diameter (~0.02–0.1 mm) helps narrow adhesive water columns creep upward slightly along polar cellulose walls.
3. **Transpiration Pull & Cohesion–Adhesion (Dixon–Joly Theory)**: The true giant engine! As water evaporates out of leaf stomata (**transpiration**), thirsty leaf mesophyll cells pull water from leaf xylem veins. Because water molecules cling strongly to one another (**Cohesion** via hydrogen bonds) and stick tightly to xylem walls (**Adhesion**), an unbroken, taut water rope gets **sucked continuously upward** from soil to treetop!`,
            keyPoint: 'Cohesion = water-to-water attraction; Adhesion = water-to-xylem wall attraction. Together they maintain an unbroken water column under Transpiration Pull!'
          },
          {
            subheading: '3.2 Transpiration: Types, Factors & Lab Experiments',
            body: `**Transpiration** is the loss of water in the form of **water vapour** from the **aerial parts** (mainly leaves) of a living plant:
- **Stomatal Transpiration (~85–90%)**: Water vapour exits through microscopic leaf pores (**stomata**) guarded by twin bean-shaped **guard cells** (turgid guard cells curve apart → stoma opens by day; flaccid guard cells collapse → stoma closes by night).
- **Cuticular Transpiration (~5–10%)**: Slow seepage directly through waxy leaf cuticle (minimal in desert xerophytes).
- **Lenticular Transpiration (~1%)**: Tiny amounts escaping through raised woody bark pores called **lenticels**.

**Four Key Environmental Factors Increasing Transpiration**:
1. **Bright Sunlight**: Triggers stomatal opening and warms leaf air spaces → **↑ Increases rate**.
2. **Higher Temperature**: Boosts evaporation speed → **↑ Increases rate**.
3. **Wind / Air Current**: Sweeps humid vapour boundary layer away from leaf → **↑ Increases rate**.
4. **High Atmospheric Humidity**: Air is already saturated with moisture → **↓ DECREASES rate**!

**Ring-Girdling Experiment (Proof of Phloem Food Transport)**: Cut and peel away a complete ring of outer **bark + phloem** around a potted woody stem while leaving central **xylem** intact. Days later, upper leaves stay fresh and green (xylem water continues rising!), *but* tissue directly **above the girdle swells markedly** with accumulated sweet sucrose and organic food blocked from travelling down to the roots!`,
            keyPoint: 'In the stem girdling experiment, stripping PHLOEM swells the stem ABOVE the cut (proving downward food transport); cutting XYLEM wilts upper leaves within hours!'
          }
        ],
        definitions: [
          { term: 'Ascent of Sap', definition: 'Upward movement of absorbed water and dissolved mineral salts from roots to aerial stems and leaves through xylem vessels.' },
          { term: 'Transpiration Pull', definition: 'Negative suction tension developed in leaf xylem due to continuous evaporation of water vapour from mesophyll cells.' },
          { term: 'Guttation', definition: 'Oozing of liquid xylem droplets from leaf margin hydathodes at humid dawn driven by positive root pressure (different from pure vapour transpiration).' },
          { term: 'Translocation', definition: 'Long-distance active movement of soluble organic food (sucrose) through phloem sieve tubes from source leaves to sinks.' }
        ],
        comparisonTable: {
          caption: 'Transpiration vs Evaporation vs Guttation',
          headers: ['Criterion', 'Transpiration', 'Evaporation', 'Guttation'],
          rows: [
            ['Living Cells Involved?', '**Yes** (regulated by living guard cells)', 'No (purely physical process)', 'Yes (driven by root pressure)'],
            ['State of Water Lost', 'Invisible **water vapour**', 'Water vapour', '**Liquid water droplets**'],
            ['Exit Structure', 'Stomata, cuticle, lenticels', 'Any exposed wet surface', 'Leaf margin **hydathodes**'],
            ['Pure or Impure?', 'Pure distilled water vapour', 'Pure vapour', 'Contains dissolved salts & sugars'],
            ['Peak Timing', 'Warm bright daytime', 'Any temperature', 'Cool humid early mornings']
          ]
        },
        realLifeExample: 'On scorching afternoons, a potted tomato plant may droop slightly (**temporary wilting**) when rapid transpiration outpaces root water uptake—yet bounces crisp upright again by cool evening once stomata shut and roots catch up!',
        commonMistakes: [
          {
            mistake: 'Writing that high humidity increases transpiration.',
            correction: 'High **humidity REDUCES transpiration** because moist outside air narrows the water vapour concentration gradient out of stomata!'
          }
        ]
      },
      {
        id: 'bio-ch1-t4',
        title: '4. Essential Plant Minerals: Macronutrients vs Micronutrients',
        content: `Plants cannot live on water and air alone! Alongside Carbon, Hydrogen, and Oxygen ($\\text{C, H, O}$ obtained from $\\text{CO}_2$ and $\\text{H}_2\\text{O}$), plants absorb **13 essential mineral elements** from soil—grouped by quantity needed into **Macronutrients** and **Micronutrients (Trace elements)**.`,
        subtopics: [
          {
            subheading: '4.1 Macronutrients vs Micronutrients & Classic Deficiency Symptoms',
            body: `- **Macronutrients** (required in larger amounts > $1\\text{ mg/g}$ dry weight): **Nitrogen ($\\text{N}$), Phosphorus ($\\text{P}$), Potassium ($\\text{K}$)** *(the Big 3 NPK fertilisers!)* plus **Calcium ($\\text{Ca}$), Magnesium ($\\text{Mg}$), and Sulphur ($\\text{S}$)**.
- **Micronutrients** (needed in minute traces—yet just as vital for enzyme cofactors!): **Iron ($\\text{Fe}$), Zinc ($\\text{Zn}$), Manganese ($\\text{Mn}$), Boron ($\\text{B}$), Copper ($\\text{Cu}$), Molybdenum ($\\text{Mo}$), Chlorine ($\\text{Cl}$)**.

**Key ICSE Roles & Deficiency Syndromes**:
- **Nitrogen ($\\text{N}$)**: Core building block of **amino acids, proteins, DNA, and chlorophyll**. Deficiency → **Chlorosis** (uniform yellowing of older leaves) & stunted weak stems.
- **Phosphorus ($\\text{P}$)**: Essential for **ATP** energy currency, nucleic acids, root branching & flowering. Deficiency → **Purplish-red tints** on leaves and delayed flowering/seed ripening.
- **Potassium ($\\text{K}$)**: Regulates **stomatal opening/closing** and enzyme activation. Deficiency → **Scorched yellow-brown leaf margins (necrosis)** and weak stems.
- **Magnesium ($\\text{Mg}$)**: Lies at the exact **central atom of every chlorophyll molecule**! Deficiency → **Interveinal chlorosis** (leaf blade turns yellow while veins stay green!).
- **Iron ($\\text{Fe}$, micronutrient)**: Vital catalyst needed to synthesise chlorophyll. Deficiency → Rapid **chlorosis in young top leaves**.
- **Zinc ($\\text{Zn}$)**: Needed for auxin growth hormones. Deficiency → **Little-leaf disease / malformed mottled leaves**.`,
            keyPoint: 'Classic ICSE favourite: Magnesium (Mg) sits at the core of Chlorophyll—both Mg deficiency and N or Fe deficiency trigger yellowing leaves (Chlorosis)!'
          }
        ],
        definitions: [
          { term: 'Macronutrients', definition: 'Essential mineral elements required in relatively large quantities by plants (N, P, K, Ca, Mg, S).' },
          { term: 'Micronutrients', definition: 'Essential trace elements required in minute amounts, chiefly acting as enzyme activators (Fe, Zn, Mn, B, Cu, Mo, Cl).' },
          { term: 'Chlorosis', definition: 'Loss or failure of green chlorophyll pigment causing leaves to turn pale yellow due to N, Mg, or Fe deficiency.' },
          { term: 'Necrosis', definition: 'Localised premature death and browning of leaf tip/margin tissue due to severe K, Ca, or Mg deficiency.' }
        ],
        comparisonTable: {
          caption: 'Key Plant Mineral Nutrients, Roles & Deficiency Symptoms',
          headers: ['Element', 'Class', 'Primary Biological Role', 'Key Deficiency Symptom'],
          rows: [
            ['**Nitrogen (N)**', 'Macronutrient', 'Proteins, nucleic acids, chlorophyll', 'Pale **yellowing (chlorosis)** of older leaves; stunted growth'],
            ['**Phosphorus (P)**', 'Macronutrient', '**ATP**, DNA/RNA, strong roots & seeds', 'Stunted roots, dull **purplish leaves**, delayed fruiting'],
            ['**Potassium (K)**', 'Macronutrient', 'Stomatal guard cell turgor & enzymes', 'Scorched yellow/brown dead margins (**marginal necrosis**)'],
            ['**Magnesium (Mg)**', 'Macronutrient', '**Central atom of Chlorophyll ring**', '**Interveinal chlorosis** (yellow blades, green veins)'],
            ['**Iron (Fe)**', 'Micronutrient', 'Catalyses chlorophyll synthesis & cytochromes', '**Young-leaf chlorosis** (top new shoots turn yellow)'],
            ['**Zinc (Zn)**', 'Micronutrient', 'Auxin hormone & enzyme activation', 'Mottled dwarf leaves (**little-leaf disease**); stunted stem']
          ]
        },
        realLifeExample: 'Bags of farm fertiliser carry bold three-number codes like **NPK 15-15-15** or **20-10-10**, showing exact percentages of **Nitrogen (N), Phosphorus (P), and Potassium (K)**—plants\' top three macronutrient demands!',
        commonMistakes: [
          {
            mistake: 'Listing Iron (Fe) as a macronutrient because plants need lots of chlorophyll.',
            correction: 'Unlike **Magnesium (Mg)** which forms part of every chlorophyll molecule (Macronutrient), **Iron (Fe)** only acts as a catalytic helper and is a **Micronutrient**!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Xylem', definition: 'Complex permanent tissue conducting water & minerals unidirectionally upward; includes tracheids, vessels, xylem fibres (dead) and xylem parenchyma (living).' },
      { term: 'Phloem', definition: 'Complex living tissue conducting sucrose & amino acids bidirectionally; includes sieve tubes, companion cells, phloem parenchyma (living) and bast fibres (dead).' },
      { term: 'Root Hair', definition: 'Tubular unicellular extension of root epidermis maximising water osmosis and mineral uptake.' },
      { term: 'Osmosis', definition: 'Net passage of water across a semi-permeable membrane from dilute (hypotonic) to concentrated (hypertonic) solution.' },
      { term: 'Active Transport', definition: 'ATP-powered pumping of mineral ions from low soil concentration into higher cell-sap concentration.' },
      { term: 'Transpiration', definition: 'Evaporative loss of water vapour mainly through leaf stomata, cooling leaves and generating transpiration pull.' },
      { term: 'Root Pressure', definition: 'Hydrostatic push developed inside root xylem by continuous active mineral pumping and osmotic water inflow; causes guttation.' },
      { term: 'Translocation', definition: 'Metabolic ATP-dependent transport of organic sugars (sucrose) through phloem from source leaves to sinks.' },
      { term: 'Chlorosis', definition: 'Yellowing of green leaves due to inadequate chlorophyll synthesis (deficiency of N, Mg, or Fe).' },
      { term: 'Girdling (Ringing)', definition: 'Removing an annular bark+phloem ring from a stem—causing swelling above the ring and proving phloem sugar translocation.' }
    ],
    formulaSheet: [
      { title: 'Water Absorption Path', expression: 'Soil Water Film → Root Hair Cell Wall & Membrane → Vacuole → Cortex → Endodermis → Root Xylem → Stem Xylem → Leaf Mesophyll → Stomata', meaning: 'Complete radial and vertical highway driven by osmosis + transpiration pull.' },
      { title: 'Cobalt Chloride Paper Test', expression: 'Dry Blue CoCl₂ Paper + Leaf Vapour → Pink Hydrated CoCl₂·6H₂O', meaning: 'Classic proof that transpiration releases water vapour faster from the lower stomata-rich leaf surface.' },
      { title: 'NPK Macronutrient Trio', expression: 'N (Proteins/Leaves) · P (ATP/Roots) · K (Stomata/Resistance)', meaning: 'Primary soil macronutrients replenished via fertilisers and manure.' }
    ],
    solvedExamples: [
      {
        id: 'bio1-ex1',
        question: 'A farmer spreads excess urea/salt fertiliser around a potted rose bush without watering it. Within 4 hours, every leaf droops limp. Explain biologically.',
        steps: [
          '1. Excess dry fertiliser dissolves into the thin soil moisture film, turning the soil solution **strongly hypertonic** (more concentrated than root-hair cell sap).',
          '2. By osmosis, water now rushes **OUT of root hair vacuoles** into the salty soil (**exosmosis**).',
          '3. Root cells lose water, undergo **plasmolysis**, and turn flaccid; transpiration still continues in leaves.',
          '4. Leaves lose turgor pressure faster than roots replenish water → plant undergoes rapid **wilting**.'
        ],
        finalAnswer: 'Hypertonic soil triggers exosmosis and plasmolysis, causing rapid wilting (reversible only by immediate heavy watering).',
        keyRule: 'Excess concentrated salts near roots reverse osmosis direction from endosmosis to lethal exosmosis.'
      },
      {
        id: 'bio1-ex2',
        question: 'Design a simple **Cobalt Chloride Paper Experiment** to compare transpiration rates on the upper vs lower surface of a dicot leaf.',
        steps: [
          '1. Pick a healthy potted broad-leaf plant (e.g., *Hibiscus* or geranium).',
          '2. Place dry **bright-blue cobalt chloride paper** strips on both the upper (adaxial) and lower (abaxial) surfaces of one intact leaf.',
          '3. Press clean dry glass slides over both strips using paper clips to seal out external air moisture.',
          '4. Observation: The paper on the **lower surface turns pink far faster** than the upper surface strip.'
        ],
        finalAnswer: 'Dicot leaves house far more stomata on their shaded lower epidermis, producing faster stomatal transpiration.',
        keyRule: 'Dry CoCl₂ paper turns Blue → Pink on absorbing even traces of water vapour.'
      },
      {
        id: 'bio1-ex3',
        question: 'In a **stem girdling** demonstration, a 2 cm ring of bark and phloem is stripped off a woody twig kept watered in soil. Predict what happens after 10 days and explain why.',
        steps: [
          '1. Deep central **xylem** remains unharmed, so water and minerals still travel upward—upper leaves remain fresh and green.',
          '2. Outer **phloem sieve tubes** have been severed at the ring.',
          '3. Sugars (sucrose) manufactured by sunlit upper leaves travel down to the cut and pile up directly **above the girdle**.',
          '4. Consequently, the stem tissue right **above the ring swells noticeably** and may sprout tiny adventitious roots.'
        ],
        finalAnswer: 'Stem swells above the phloem ring while upper leaves stay green—proving phloem conducts organic food downward.',
        keyRule: 'Bark peeling severs Phloem while leaving inner woody Xylem intact.'
      },
      {
        id: 'bio1-ex4',
        question: 'Why does heavy waterlogging in an agricultural field stunt crop mineral nutrition even though unlimited water surrounds the roots?',
        steps: [
          '1. Flooded soil drives air out of soil pore spaces, starving roots of **oxygen ($\\text{O}_2$)**.',
          '2. Without oxygen, root cells cannot perform aerobic respiration to manufacture **ATP**.',
          '3. Since absorbing mineral ions like $\\text{NO}_3^-$ and $\\text{K}^+$ against steep gradients requires **Active Transport (ATP)**, mineral uptake grinds to a halt!'
        ],
        finalAnswer: 'Waterlogging causes root oxygen starvation → halts ATP production → stops active mineral transport.',
        keyRule: 'Active transport requires living respiration + O₂ + ATP.'
      },
      {
        id: 'bio1-ex5',
        question: 'How does **Cohesion–Adhesion–Transpiration Pull** lift water 80 metres up a eucalyptus tree without the water column snapping?',
        steps: [
          '1. **Transpiration**: Sunlight evaporates water from spongy mesophyll into leaf air spaces and out via stomata, lowering mesophyll water potential.',
          '2. **Suction Tension**: Thirsty mesophyll pulls replacement water out of fine leaf xylem tips.',
          '3. **Cohesion**: Hydrogen bonds lock neighbouring water molecules tightly into a continuous non-breaking liquid thread.',
          '4. **Adhesion**: Water molecules cling firmly to hydrophilic cellulose/lignin xylem walls, resisting gravity along narrow vessels.'
        ],
        finalAnswer: 'Continuous upward evaporation creates solar suction transmitted along a cohesive, adhesive water column.',
        keyRule: 'Transpiration Pull works like drinking through a continuous straw powered by sunlight.'
      },
      {
        id: 'bio1-ex6',
        question: 'Distinguish carefully between **Guttation** seen on nasturtium leaves at dawn and ordinary **Dew** droplets on grass.',
        steps: [
          '1. **Dew** forms purely physically when moist night air condenses onto chilled surfaces across the entire leaf blade.',
          '2. **Guttation** exits specifically from internal vascular **hydathodes** along leaf margins/tips as liquid xylem sap pushed up by **positive root pressure** when root uptake exceeds nighttime transpiration.'
        ],
        finalAnswer: 'Dew is atmospheric condensation across blades; Guttation is internal xylem sap forced out of margin hydathodes by root pressure.',
        keyRule: 'Guttation contains dissolved salts and minerals; dew is pure condensed rainwater.'
      },
      {
        id: 'bio1-ex7',
        question: 'A spinach plant shows severe yellowing between veins on older leaves (*interveinal chlorosis*) even though watered well. Name the most likely missing macronutrient and justify.',
        steps: [
          '1. Green pigment **chlorophyll** contains a single central **Magnesium ($\\text{Mg}^{2+}$)** ion anchored inside its porphyrin head.',
          '2. When soil lacks Magnesium, the plant strips mobile $\\text{Mg}^{2+}$ out of older lower leaves to rescue growing buds.',
          '3. Consequently, older leaf tissue between green veins turns bright yellow.'
        ],
        finalAnswer: 'Magnesium (Mg) deficiency—the essential central atom of every chlorophyll molecule.',
        keyRule: 'Chlorosis points immediately to Mg, N, or Fe deficiency; interveinal yellowing on older leaves is classic Mg²⁺ deficiency.'
      },
      {
        id: 'bio1-ex8',
        question: 'Two identical leafy twigs are placed in measuring cylinders with water topped with a thin layer of oil. Twig A is kept in a breezy sunny balcony; Twig B inside a shaded damp bathroom. Which cylinder drops lower after 3 hours?',
        steps: [
          '1. The surface **oil layer** blocks direct physical evaporation from the water meniscus—so every millilitre lost equals pure **plant transpiration**.',
          '2. Twig A receives **bright light** (opens stomata wider), **warmth**, and **wind** (sweeps vapour boundary away)—maximising transpiration.',
          '3. Twig B sits in shade and **high humidity**, keeping stomata partly shut and narrowing vapour gradient.'
        ],
        finalAnswer: 'Cylinder A drops substantially lower because light, warmth, and wind accelerate stomatal transpiration.',
        keyRule: 'Oil on water surfaces ensures weight/volume change measures strictly plant transpiration.'
      }
    ],
    gradedQuestions: {
      easy: [
        { id: 'bio1-e1', marks: 2, question: 'Name the tissue responsible for (a) upward transport of water and minerals, (b) translocation of sucrose.', solutionSteps: ['(a) Water & minerals: **Xylem**.', '(b) Prepared food (sucrose): **Phloem**.'], finalAnswer: '(a) Xylem, (b) Phloem.' },
        { id: 'bio1-e2', marks: 2, question: 'Name the ONLY living cell in Xylem and the ONLY dead cell in Phloem.', solutionSteps: ['Xylem only living component: **Xylem parenchyma**.', 'Phloem only dead component: **Phloem fibres (bast fibres)**.'], finalAnswer: 'Xylem parenchyma; Phloem fibres.' },
        { id: 'bio1-e3', marks: 2, question: 'State two functions of transpiration in plants.', solutionSteps: ['1. Generates upward **transpiration pull** lifting water & dissolved minerals from roots to leaves.', '2. Produces **evaporative cooling**, protecting delicate sunlit leaves from scorching heat.'], finalAnswer: 'Supplies water/minerals via transpiration pull & cools the plant.' },
        { id: 'bio1-e4', marks: 2, question: 'Which chemical paper tests water vapour lost during transpiration, and what colour change appears?', solutionSteps: ['Dry **Cobalt Chloride ($\\text{CoCl}_2$) paper**.', 'Turns cleanly from **Blue → Pink** when exposed to transpiring water vapour.'], finalAnswer: 'Cobalt chloride paper turns Blue → Pink.' }
      ],
      medium: [
        { id: 'bio1-m1', marks: 3, question: 'List three structural adaptations of a root hair cell that optimise water absorption.', solutionSteps: ['1. Long tubular outgrowth provides enormous **surface area** in contact with soil moisture.', '2. Thin permeable cell wall + **semi-permeable plasma membrane** permit rapid osmosis.', '3. Concentrated **hypertonic cell sap vacuole** keeps water rushing inward continuously.'], finalAnswer: 'Huge surface area, thin semi-permeable membrane, and concentrated vacuolar cell sap.' },
        { id: 'bio1-m2', marks: 3, question: 'Why is mineral uptake called active transport whereas root water uptake is passive osmosis?', solutionSteps: ['1. Water concentration outside in moist soil exceeds cell-sap water concentration, so water enters passively without ATP (**osmosis**).', '2. Mineral ions often sit at higher concentration inside roots than soil, so membrane pumps must spend **respiratory ATP** to pull ions uphill (**active transport**).'], finalAnswer: 'Water moves passively down gradient (osmosis); minerals move uphill using ATP (active transport).' },
        { id: 'bio1-m3', marks: 3, question: 'Distinguish between Root Pressure and Transpiration Pull as engines for Ascent of Sap.', solutionSteps: ['1. **Root Pressure** is a weak positive push from bottom root xylem (prominent at humid night; causes **guttation**; lifts ~1–2 m).', '2. **Transpiration Pull** is a powerful negative solar suction from evaporating stomata (lifts sap up **100+ m** giants via cohesion–adhesion).'], finalAnswer: 'Root pressure pushes weakly from below (~1–2 m); Transpiration pull sucks powerfully from leaves (>100 m).' },
        { id: 'bio1-m4', marks: 3, question: 'Classify N, Fe, P, Zn, Mg, and B into Macronutrients and Micronutrients, naming one deficiency symptom of N.', solutionSteps: ['**Macronutrients**: Nitrogen (N), Phosphorus (P), Magnesium (Mg).', '**Micronutrients**: Iron (Fe), Zinc (Zn), Boron (B).', '**Nitrogen deficiency**: General **chlorosis** (yellowing of leaves) and stunted vegetative growth.'], finalAnswer: 'Macro: N, P, Mg; Micro: Fe, Zn, B; N-deficiency causes leaf yellowing & stunted growth.' }
      ],
      difficult: [
        { id: 'bio1-d1', marks: 4, question: 'Suppose an airtight clear polythene bag wraps around a well-watered potted plant placed in sunlight for 2 hours. Describe what you observe inside the bag, prove it is water, and explain the cellular pathway.', solutionSteps: ['1. **Observation**: Fine misty droplets condense across the inner polythene wall.', '2. **Chemical Test**: Touching a drop with anhydrous **white CuSO₄** turns it **blue** (or blue CoCl₂ paper turns **pink**), proving pure water.', '3. **Pathway**: Soil film → root hair (osmosis) → cortex → endodermis → xylem vessels → leaf mesophyll → intercellular spaces → stomatal vapour exit → condensation on cool bag.'], finalAnswer: 'Condensation drops turn dry CoCl₂ blue→pink; proves water vapour exited via stomata through radial & xylem transport.' },
        { id: 'bio1-d2', marks: 4, question: 'In two separate twig experiments: (i) Xylem of Twig X is clogged with melted wax; (ii) Phloem ring of Twig Y is peeled off. Contrast the fate of leaves and roots in both twigs after 5 days.', solutionSteps: ['1. **Twig X (blocked xylem)**: Water supply up to the leaves stops immediately while transpiration continues → upper leaves **wilt and die** rapidly.', '2. **Twig Y (peeled phloem)**: Central xylem remains open, so leaves stay **fresh and turgid**; however sucrose cannot descend past the ring → stem **above the ring swells** while starved roots weaken slowly over weeks.'], finalAnswer: 'Blocked xylem wilts upper leaves immediately; removed phloem keeps leaves fresh while swelling the stem above the ring.' },
        { id: 'bio1-d3', marks: 4, question: 'Why do desert cacti shed wide leaves into sharp spines and open stomata strictly at night (CAM photosynthesis), whereas submerged pondweed (*Hydrilla*) lacks stomata altogether?', solutionSteps: ['1. **Cacti**: Wide leaves under desert heat would fatally drain scarce water via stomatal transpiration; spines shrink exposed surface area while waxy thick cuticles lock water in.', '2. **Submerged *Hydrilla***: Already bathed in water—needs zero transpiration pull and absorbs dissolved CO₂/O₂ directly across thin epidermis!'], finalAnswer: 'Cacti minimise lethal water loss via spines and night-opening stomata; *Hydrilla* absorbs gases directly underwater without stomata.' },
        { id: 'bio1-d4', marks: 4, question: 'Explain why companion cells sit tightly attached to mature sieve tubes inside phloem, packed with mitochondria while sieve tubes lack nuclei.', solutionSteps: ['1. Mature **sieve tube elements** lose their nucleus and large vacuoles to keep an unobstructed hollow tube for syrupy **sucrose sap** streaming.', '2. Enucleated cells cannot survive or pump sucrose alone; hence adjacent **companion cells** use their own nucleus and rich **mitochondria (ATP)** to load/unload sucrose actively via cytoplasmic plasmodesmata!'], finalAnswer: 'Companion cells supply genetic control and mitochondrial ATP needed to keep enucleated sieve tubes alive and actively loading sucrose.' }
      ]
    },
    practiceWorksheet: {
      title: 'ICSE Class 8 Biology Worksheet — Plant Transport (30 Marks)',
      instructions: 'Answer cleanly using biological terms and neat directional flow arrows.',
      sections: [
        {
          sectionTitle: 'Section A: Objective Recall (1 × 8 = 8 Marks)',
          items: [
            '1. Which phloem cell lacks a nucleus at maturity? ______',
            '2. Name the two intermolecular forces maintaining an unbroken xylem water thread: ______ and ______.',
            '3. Guttation occurs through specialised leaf margin pores called ______.',
            '4. Dry blue cobalt chloride paper turns ______ in contact with moisture.',
            '5. Nitrogen and ______ deficiencies both cause leaf chlorosis; Potassium deficiency causes marginal ______.',
            '6. Excess salt near roots kills grass via ______ (endosmosis / exosmosis).',
            '7. True or False: Phloem transports sugar solely downward toward the roots.',
            '8. Circle the odd one out: Tracheids, Xylem vessels, Companion cells, Xylem fibres.'
          ]
        },
        {
          sectionTitle: 'Section B: Short Biological Reasoning (3 × 4 = 12 Marks)',
          items: [
            '9. Draw and explain the 5-step radial pathway of water from soil film to root xylem.',
            '10. Why does a freshly uprooted seedling wilt within minutes even before drying out completely?',
            '11. Explain why high humidity lowers transpiration whereas brisk wind accelerates it.',
            '12. Contrast Macronutrients and Micronutrients giving two examples and one role each.'
          ]
        },
        {
          sectionTitle: 'Section C: Experimental & Diagrammatic Study (5 × 2 = 10 Marks)',
          items: [
            '13. Describe the complete Ring-Girdling experiment with expected outcome above and below the cut.',
            '14. Compare Xylem and Phloem across 5 parameters: direction, substance, living/dead components, ATP use, and wall thickening.'
          ]
        }
      ],
      answerKey: [
        '1. Sieve tube element',
        '2. Cohesion and Adhesion',
        '3. Hydathodes',
        '4. Pink',
        '5. Magnesium / Iron; necrosis',
        '6. Exosmosis',
        '7. False (bidirectional)',
        '8. Companion cells (part of Phloem; rest are Xylem)',
        '9. Soil Water → Root Hair (osmosis) → Epidermis → Cortex → Endodermis → Root Xylem',
        '10. Delicate root hairs break during uprooting, halting osmotic water intake',
        '11. Humidity shrinks vapour concentration gradient; wind blows humid halo off leaves',
        '12. Macro (>1 mg/g: N proteins, Mg chlorophyll); Micro (trace: Fe chlorophyll catalyst, Zn auxin)',
        '13. Phloem ring peeled → stem swells above girdle with piled sucrose; upper leaves stay green',
        '14. Xylem: upward, water+minerals, 3 dead/1 living, passive, lignified; Phloem: bidirectional, sucrose, 3 living/1 dead, active ATP, cellulose sieve plates'
      ]
    },
    examPreparationTips: [
      'Master the **"1 Exception Rule"**: In Xylem, only *xylem parenchyma* is alive; in Phloem, only *phloem fibres (bast)* are dead!',
      'Remember **Chlorophyll = Magnesium at core**, **Proteins/Chlorophyll = Nitrogen**, **Chlorophyll catalyst = Iron**, **Stomata = Potassium**.',
      'Whenever asked to explain wilting after over-fertilising, mention **hypertonic soil → exosmosis → plasmolysis → loss of turgor**!'
    ],
    chapterSummary: [
      '**Xylem** conducts water and inorganic mineral ions strictly upward (unidirectional) via dead tracheids/vessels, xylem fibres, and living xylem parenchyma.',
      '**Phloem** translocates soluble organic sucrose bidirectionally via living sieve tubes, companion cells, phloem parenchyma, and dead bast fibres.',
      'Water enters **unicellular root hairs** passively by **osmosis**; minerals enter largely by respiration-powered **active transport** (ATP).',
      'Radial path: **Soil water → Root hair → Cortex → Endodermis → Xylem**; vertical **Ascent of Sap** is driven mainly by solar **Transpiration Pull + Cohesion–Adhesion**.',
      '**Transpiration** cools leaves and pulls sap upward; rate rises with light, heat, and wind, and **falls** with high humidity.',
      'Girdling proves **phloem food transport**; essential soil minerals divide into **Macronutrients (N, P, K, Ca, Mg, S)** and **Micronutrients (Fe, Zn, Mn, B, Cu, Mo, Cl)**.'
    ],
    importantQuestionsAndAnswers: [
      { type: 'Short Answer', question: 'Why is the cell sap inside root hairs kept more concentrated than surrounding soil water?', answer: 'A concentrated (hypertonic) vacuole establishes a steep water-potential gradient, ensuring freshwater molecules continually enter the root hair effortlessly by passive endosmosis.' },
      { type: 'Short Answer', question: 'Differentiate between Osmosis and Active Transport in root cells.', answer: 'Osmosis is passive movement of **water** from higher to lower water concentration across a semi-permeable membrane without ATP; Active Transport pumps **mineral ions** from lower soil concentration into higher root concentration spending respiratory **ATP**.' },
      { type: 'Short Answer', question: 'Why do leaves of woody trees shed excess water via stomata rather than hydathodes?', answer: 'Stomata open/close dynamically via guard cells depending on sunlight and water availability, releasing vast pure **water vapour** (transpiration) for massive suction cooling—whereas hydathodes cannot close and merely drip small guttation drops when root pressure peaks at night.' },
      { type: 'Reasoning', question: 'If a stem is cut cleanly underwater rather than in open air before placing in a vase, cut roses stay fresh far longer. Explain.', answer: 'Cutting in air draws tiny **air bubbles** into broken xylem vessels, breaking the cohesive water column and blocking ascent of sap; cutting underwater preserves an unbroken liquid thread for continuous transpiration pull.' },
      { type: 'Short Answer', question: 'How does Potassium ($\\text{K}^+$) ion movement control daytime stomatal opening?', answer: 'By day, guard cells actively pump $\\text{K}^+$ ions inside, making guard cell sap hypertonic; surrounding epidermal water enters by endosmosis, making guard cells swell turgidly and curve outward to open the stomatal pore.' },
      { type: 'Long Answer', question: 'Describe the four component cells of Phloem and explain how the Ring-Girdling experiment proves phloem function.', answer: 'Phloem comprises: (1) Living enucleated **sieve tubes** with perforated **sieve plates** acting as sucrose pipes; (2) Metabolically active **companion cells** supplying ATP and nuclear control; (3) Storage **phloem parenchyma**; and (4) Dead **phloem bast fibres**. In **girdling**, peeling an outer bark+phloem ring cuts phloem pipes while sparing deeper woody xylem: water still rises to keep top leaves fresh, but descending sucrose piles up and creates a swollen ridge right **above the cut**, proving phloem carries prepared food!' },
      { type: 'Long Answer', question: 'Trace the complete pathway and forces responsible for Ascent of Sap in tall trees.', answer: 'Water moves radially: Soil moisture → root hair (endosmosis) → root cortex (cell-to-cell osmosis) → endodermis → root xylem. Inside hollow lignified xylem vessels, upward sap ascent is driven by (1) weak **root pressure** from osmotic mineral loading, (2) narrow-bore **capillarity**, and overwhelmingly (3) **Cohesion–Adhesion–Transpiration Pull**: sunlit stomata evaporate water vapour from leaf mesophyll, creating powerful suction pulled unbroken down hydrogen-bonded (**cohesive**) water columns clinging (**adhesive**) to xylem walls.' },
      { type: 'HOTS', question: 'Farmers plant leguminous beans or clover between cereal wheat harvests to reduce nitrogen fertiliser costs. How do plants benefit microscopically?', answer: 'Legume root nodules house symbiotic ***Rhizobium* bacteria** that convert inert atmospheric $\\text{N}_2$ gas into plant-absorbable soil **nitrates ($\\text{NO}_3^-$)**. Subsequent wheat roots actively absorb these nitrates using ATP to build amino acids, proteins, and chlorophyll without chlorosis.' }
    ],
    practiceExercises: [
      { question: 'Trace why pouring salt onto garden weeds kills them within hours.', hint: 'Exosmosis and plasmolysis.', answerGuide: 'Salt creates a hypertonic soil film; water exits root hairs via exosmosis → cells plasmolyse and weed dies.' },
      { question: 'Why does covering ONLY the lower surface of a dicot leaf with Vaseline stop almost all transpiration?', hint: 'Location of stomata.', answerGuide: 'Most dicot stomata lie on the lower epidermis; Vaseline seals pores, halting stomatal water loss.' },
      { question: 'Identify the missing mineral: (a) central atom of chlorophyll; (b) leaf margin scorching/necrosis.', hint: 'Macronutrients Mg vs K.', answerGuide: '(a) Magnesium (Mg); (b) Potassium (K).' }
    ]
  },
  quizQuestions: [
    {
      id: 'bio1-q1',
      type: 'mcq',
      question: 'Which cell component is the ONLY living element found inside Xylem tissue?',
      options: ['Xylem vessels', 'Tracheids', 'Xylem parenchyma', 'Xylem fibres'],
      correctAnswer: 'Xylem parenchyma',
      explanation: 'Tracheids, vessels, and xylem fibres are dead lignified cells; only xylem parenchyma remains alive for storage and radial transport.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio1-q2',
      type: 'mcq',
      question: 'Food prepared by photosynthesis is transported through phloem mainly in the form of:',
      options: ['Starch', 'Glucose', 'Sucrose', 'Cellulose'],
      correctAnswer: 'Sucrose',
      explanation: 'Leaves convert reactive glucose into stable, soluble sucrose before active translocation through phloem sieve tubes.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio1-q3',
      type: 'mcq',
      question: 'Which phloem cells lack a nucleus at maturity and rely on adjacent companion cells?',
      options: ['Sieve tubes', 'Phloem fibres', 'Root hairs', 'Guard cells'],
      correctAnswer: 'Sieve tubes',
      explanation: 'Mature sieve tube elements lose their nucleus to provide an open channel; companion cells supply ATP and nuclear control.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio1-q4',
      type: 'mcq',
      question: 'Water moves from moist soil into root hair vacuoles primarily by:',
      options: ['Active transport', 'Transpiration', 'Osmosis', 'Plasmolysis'],
      correctAnswer: 'Osmosis',
      explanation: 'Dilute soil water moves passively across the semi-permeable plasma membrane into concentrated vacuolar sap via osmosis.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio1-q5',
      type: 'mcq',
      question: 'Why does absorption of mineral ions like nitrate (NO₃⁻) from dilute soil require root respiration?',
      options: [
        'It occurs via passive diffusion',
        'Minerals move uphill against concentration gradient using ATP (active transport)',
        'Respiration cools the soil water',
        'Roots melt minerals chemically'
      ],
      correctAnswer: 'Minerals move uphill against concentration gradient using ATP (active transport)',
      explanation: 'Root cells spend respiratory ATP energy to pump dilute soil mineral ions into concentrated root sap.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio1-q6',
      type: 'mcq',
      question: 'Which environmental change DECREASES the rate of transpiration from a plant leaf?',
      options: ['Strong dry wind', 'Bright afternoon sunlight', 'Higher air temperature', 'High atmospheric humidity'],
      correctAnswer: 'High atmospheric humidity',
      explanation: 'Moist humid air outside narrows the water vapour diffusion gradient out of stomata, slowing transpiration.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio1-q7',
      type: 'mcq',
      question: 'At the centre of every green chlorophyll molecule sits a single atom of which macronutrient?',
      options: ['Iron (Fe)', 'Magnesium (Mg)', 'Potassium (K)', 'Phosphorus (P)'],
      correctAnswer: 'Magnesium (Mg)',
      explanation: 'Magnesium sits at the core of the chlorophyll ring; Iron is a micronutrient catalyst for chlorophyll synthesis.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio1-q8',
      type: 'mcq',
      question: 'Liquid xylem sap droplets oozing from grass leaf tips at humid dawn is called:',
      options: ['Transpiration', 'Plasmolysis', 'Guttation', 'Translocation'],
      correctAnswer: 'Guttation',
      explanation: 'Positive root pressure forces excess xylem liquid out of leaf margin hydathodes at humid dawn—termed guttation.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio1-q9',
      type: 'fill_blank',
      question: 'In a dry leaf experiment, blue cobalt chloride paper turns _____ on absorbing transpired water vapour.',
      correctAnswer: 'pink',
      explanation: 'Anhydrous blue CoCl₂ hydrates to pink CoCl₂·6H₂O in contact with water vapour.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio1-q10',
      type: 'mcq',
      question: 'Which pair correctly lists ONLY Micronutrients (trace elements)?',
      options: ['Nitrogen and Phosphorus', 'Iron and Zinc', 'Magnesium and Calcium', 'Potassium and Sulphur'],
      correctAnswer: 'Iron and Zinc',
      explanation: 'N, P, K, Ca, Mg, S are macronutrients; Fe, Zn, Mn, B, Cu, Mo, Cl are micronutrients.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio1-q11',
      type: 'true_false',
      question: 'In the stem girdling experiment, stripping away the outer phloem ring causes leaves above the cut to wilt within one hour.',
      correctAnswer: false,
      explanation: 'Leaves stay green because inner xylem remains intact; instead the stem swells just above the cut from blocked phloem sucrose!',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio1-q12',
      type: 'hots',
      question: 'A botanist injects a poison into plant roots that completely blocks cellular ATP synthesis without harming cell membranes. Which immediate effect occurs?',
      options: [
        'Water uptake stops immediately while mineral uptake speeds up',
        'Active mineral ion uptake halts sharply while osmotic water inflow continues temporarily',
        'Leaves immediately perform photosynthesis faster',
        'Xylem vessels turn into phloem sieve tubes'
      ],
      correctAnswer: 'Active mineral ion uptake halts sharply while osmotic water inflow continues temporarily',
      explanation: 'Active mineral transport needs ATP directly, whereas water enters passively down gradient by osmosis initially.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    { id: 'fc-b1-1', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'Name all 4 components of Xylem (and mark the ONLY living one).', back: 'Tracheids (dead), Vessels (dead), Xylem Fibres (dead), and Xylem Parenchyma (ONLY LIVING cell).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b1-2', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'Name all 4 components of Phloem (and mark the ONLY dead one).', back: 'Sieve tubes (living, no nucleus), Companion cells (living), Phloem parenchyma (living), and Phloem bast fibres (ONLY DEAD).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b1-3', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'Direction of flow: Xylem vs Phloem?', back: 'Xylem = Unidirectional upward (water/minerals). Phloem = Bidirectional (sucrose to buds above or roots below).', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b1-4', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'Water uptake mechanism vs Mineral ion uptake mechanism in root hairs?', back: 'Water enters passively by OSMOSIS; Mineral ions enter mostly by ATP-driven ACTIVE TRANSPORT.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b1-5', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'Trace the 5-step radial pathway of water inside a root.', back: 'Soil Water Film → Root Hair → Root Cortex → Endodermis → Root Xylem Vessel.', category: 'Formula', importance: 'Essential' },
    { id: 'fc-b1-6', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'What 2 intermolecular forces keep xylem sap intact during Transpiration Pull?', back: 'Cohesion (water-to-water attraction) and Adhesion (water-to-lignified xylem wall attraction).', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b1-7', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'What happens in the stem Ring-Girdling experiment?', back: 'Outer phloem ring is peeled off; leaves stay fresh (xylem intact) while stem swells ABOVE the cut from piled-up sucrose.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b1-8', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'Distinguish Transpiration vs Guttation.', back: 'Transpiration = water vapour lost via stomata/cuticle/lenticels. Guttation = liquid xylem droplets oozed at dawn from hydathodes via root pressure.', category: 'Definition', importance: 'Standard' },
    { id: 'fc-b1-9', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'List the 6 plant Macronutrients vs key Micronutrients.', back: 'Macro: N, P, K, Ca, Mg, S. Micro: Fe, Zn, Mn, B, Cu, Mo, Cl.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b1-10', subjectId: 'biology', chapterId: 'bio-ch1', chapterTitle: 'Transport of Food and Minerals in Plants', front: 'Central metallic atom of Chlorophyll molecule & its deficiency sign?', back: 'Magnesium (Mg); deficiency causes interveinal chlorosis (yellow leaf blades with green veins).', category: 'Definition', importance: 'Essential' }
  ]
};
