import { Chapter } from '../../types';

export const CHEM_CH1_MATTER: Chapter = {
  id: 'chem-matter',
  subjectId: 'chemistry',
  chapterNumber: 1,
  title: 'Matter',
  subtitle: 'Kinetic molecular theory of matter in chemistry, interconversion of states (melting, boiling, sublimation, liquefaction), heating & cooling behaviour, and Antoine Lavoisier\'s Law of Conservation of Mass',
  term: 'Half-Yearly',
  estimatedMinutes: 85,
  notes: {
    introduction: `Everything that surrounds us in the chemistry laboratory—from gleaming copper wire and purple crystals of potassium permanganate to swirling green chlorine gas and clear distilled water—shares one universal classification: it is **matter**, possessing measurable **mass** and occupying **volume (space)**. Yet while physics studies how forces push and heat flows through matter, **chemistry** asks deeper structural questions: *What happens when tiny particles rearrange during heating, dissolving, or reacting inside a closed flask? Why does mass never vanish even when solid marble fizzes away into invisible carbon dioxide gas?*

In Chapter 1 of Class 8 ICSE Chemistry (*Gem's Chemistry / Concise Chemistry*), we examine the **particulate and kinetic nature of matter** from a chemical perspective, compare molecular packing and forces across solids, liquids, and gases, trace all **six reversible state interconversions** including classic laboratory **sublimation of iodine, camphor, and ammonium chloride**, investigate **diffusion of bromine vapour and copper(II) sulphate**, and prove quantitatively **Antoine Lavoisier's Law of Conservation of Mass** using Landolt's sealed H-tube chemical reactions!`,
    learningObjectives: [
      'Define matter, atom, molecule, and explain the five core postulates of the Kinetic Theory of Matter.',
      'Compare solids, liquids, and gases by molecular arrangement, intermolecular attraction, spaces, fluidity, compressibility, and diffusion rates.',
      'Explain all six interconversions of states of matter (melting, freezing, vaporisation, condensation, sublimation, deposition) in terms of heat absorption/release and molecular kinetic energy.',
      'Describe experimental demonstrations of diffusion in liquids (KMnO₄ / CuSO₄ in water) and gases (bromine vapour in air jars), plus laboratory sublimation of NH₄Cl.',
      'State the Law of Conservation of Mass (Antoine Lavoisier, 1789), describe its verification using silver nitrate and sodium chloride in Landolt\'s flask, and balance reacting masses.',
      'Distinguish carefully between apparent mass loss in open vessels (escaping gases) vs true conservation of total mass in closed chemical systems.'
    ],
    topics: [
      {
        id: 'chem-ch1-t1',
        title: '1. Kinetic Molecular Theory & Particulate Properties of Matter',
        content: `Matter is composed of discrete, ultra-tiny particles called **atoms** (smallest reactive unit of an element) and **molecules** (smallest independent unit of an element or compound showing all its properties). Even a single crystal of potassium permanganate ($\\text{KMnO}_4$) no bigger than a pinhead contains roughly $10^{18}$ formula units—enough to tint $1,000\\text{ litres}$ of clear water vivid violet!`,
        subtopics: [
          {
            subheading: '1.1 Main Postulates of the Kinetic Theory of Matter',
            body: `1. **Discrete Particles**: All matter—solid, liquid, or gas—consists of tiny moving particles (atoms, molecules, or ions) too small to see under ordinary optical microscopes.
2. **Intermolecular Spaces (Voids)**: Empty spaces lie between adjacent particles. For example, dissolving $50\\text{ g}$ of sugar into $100\\text{ mL}$ of water does **not** raise the water level appreciably because tiny sugar molecules tuck neatly into the empty intermolecular voids between water molecules!
3. **Continuous Motion & Kinetic Energy**: Particles never rest permanently. In solids they vibrate around fixed lattice sites; in liquids they tumble past neighbours; in gases they dart swiftly along straight zigzag paths colliding elastically.
4. **Temperature Boosts Molecular Speed**: Raising temperature supplies thermal energy, increasing average particle kinetic speed and accelerating **diffusion** (intermixing).
5. **Intermolecular Attraction (Cohesion)**: Mutual electrostatic attraction binds particles together—strongest at tiny solid spacing ($10^{-10}\\text{ m}$) and negligible across wide gas gaps.`,
            keyPoint: 'Dissolving salt or sugar in water without changing volume proves liquids possess empty intermolecular spaces!'
          },
          {
            subheading: '1.2 Chemical Evidence: Diffusion in Liquids & Gases',
            body: `**Diffusion** is the spontaneous intermixing of particles of two or more substances solely due to their continuous random kinetic motion (moving from higher to lower concentration without stirring):
- **In Solids (Virtually Zero)**: Two clamped smooth blocks of gold and lead left pressed for years fuse only across a microscopic boundary layer.
- **In Liquids (Slow)**: Drop a deep-purple crystal of **potassium permanganate ($\\text{KMnO}_4$)** into cold water vs hot water. Purple streaks drift steadily until the whole beaker turns uniform magenta—moving **much faster in hot water** because higher thermal kinetic energy speeds up molecular collisions!
- **In Gases (Extremely Rapid)**: Invert an empty air jar over a gas jar filled with reddish-brown **bromine ($\\text{Br}_2$) vapour** (which is denser than air). Even against gravity, heavy reddish-brown bromine fumes diffuse upward rapidly until both jars turn uniform amber-brown! Also **Graham's insight**: lighter gas molecules (like $\\text{NH}_3$, mass $17$) diffuse **faster** than heavier gas molecules (like $\\text{HCl}$, mass $36.5$).`,
            keyPoint: 'Hot water diffuses colour faster than cold water because Kinetic Energy ∝ Temperature; lighter gases diffuse faster than heavy gases!'
          }
        ],
        definitions: [
          { term: 'Matter', definition: 'Anything that has mass, occupies space (volume), and offers resistance to change in state.' },
          { term: 'Molecule', definition: 'Smallest stable particle of an element or compound capable of independent existence while retaining all chemical properties.' },
          { term: 'Diffusion', definition: 'Spontaneous intermixing of particles of different substances driven by continuous random thermal motion.' },
          { term: 'Intermolecular Space', definition: 'Empty gap existing between neighbouring molecules of any sample of matter.' }
        ],
        realLifeExample: 'When an open bottle of concentrated ammonia ($\\text{NH}_3$) sits across a lab bench from open hydrochloric acid ($\\text{HCl}$), a white smoke ring of ammonium chloride ($\\text{NH}_4\\text{Cl}$) forms noticeably **closer to the HCl bottle**—because lightweight $\\text{NH}_3$ molecules diffuse faster than heavy $\\text{HCl}$ molecules!',
        commonMistakes: [
          {
            mistake: 'Writing that gases do not diffuse downward or that heavy gases cannot diffuse upward into air.',
            correction: 'Even heavy reddish-brown bromine vapour ($\\text{Br}_2$) diffuses **upward against gravity** into an upper air jar due to constant high-speed kinetic collisions!'
          }
        ]
      },
      {
        id: 'chem-ch1-t2',
        title: '2. States of Matter & Six Reversible Phase Interconversions',
        content: `One and the same chemical substance—whether water ($\\text{H}_2\\text{O}$), iron ($\\text{Fe}$), or carbon dioxide ($\\text{CO}_2$)—can exist in **solid, liquid, or gaseous state** simply by tuning **temperature** and **pressure**. Increasing temperature pumps in kinetic energy to break cohesive bonds apart; increasing pressure squeezes gas molecules closer into liquids (**liquefaction**—how cooking **LPG** and medical **liquid oxygen** are bottled!).`,
        subtopics: [
          {
            subheading: '2.1 Six Change-of-State Transitions Explained Chemically',
            body: `- **1. Melting (Fusion)**: Solid $\\xrightarrow{\\text{Heat}}$ Liquid at fixed **melting point** (ice $0^\\circ\\text{C}$; pure iron $1,538^\\circ\\text{C}$; sodium chloride $801^\\circ\\text{C}$). Heat energy goes solely into overcoming lattice attraction (**Latent Heat of Fusion**), so thermometer stays steady while melting.
- **2. Freezing (Solidification)**: Liquid $\\xrightarrow{\\text{Cool}}$ Solid at **freezing point** (releases exact same latent heat back to surroundings).
- **3. Vaporisation (Boiling & Evaporation)**: Liquid $\\xrightarrow{\\text{Heat}}$ Gas/Vapour (boiling at fixed boiling point $100^\\circ\\text{C}$ for water; evaporation at all temperatures from exposed surface).
- **4. Condensation (Liquefaction)**: Gas/Vapour $\\xrightarrow{\\text{Cool / Compress}}$ Liquid (e.g., misty water droplets forming outside an iced tumbler; compressing butane/propane gas into liquid **LPG** cylinders).
- **5. Sublimation**: Direct conversion **Solid $\\xrightarrow{\\text{Heat}}$ Vapour** without turning liquid! Classic ICSE sublimes: **Ammonium chloride ($\\text{NH}_4\\text{Cl}$), Camphor, Iodine ($\\text{I}_2$), Naphthalene, Solid $\\text{CO}_2$ (Dry Ice), Anthracene**.
- **6. Deposition (Sublimation reverse / Hoarfrost)**: Direct conversion **Vapour $\\xrightarrow{\\text{Cool}}$ Solid** (e.g., violet iodine vapours cooling into glittering metallic-purple crystals on an inverted flask!).`,
            keyPoint: 'Always keep all 5 standard ICSE sublimable solids at your fingertips: Ammonium chloride (NH₄Cl), Iodine (I₂), Camphor, Naphthalene, and Dry Ice (solid CO₂)!'
          },
          {
            subheading: '2.2 Fourth & Fifth States (Context): Plasma & BEC',
            body: `Beyond the three everyday chemical states sit two extreme physical regimes: **Plasma**—an ultra-hot ionised gas mixture of free electrons and positive ions glowing inside stars, neon signs, and lightning bolts—and **Bose–Einstein Condensate (BEC)** formed when super-rare gases cool within a billionth of a degree above absolute zero ($0\\text{ K}$).`,
            keyPoint: 'Every phase transition is a PHYSICAL CHANGE—chemical formula H₂O stays H₂O in ice, water, and steam!'
          }
        ],
        comparisonTable: {
          caption: 'Six Phase Transitions: Energy Flow & Molecular Spacing Change',
          headers: ['Transition', 'Direction', 'Heat Flow', 'Molecular Spacing Change'],
          rows: [
            ['Melting (Fusion)', 'Solid → Liquid', 'Absorbed (**Endothermic**)', 'Tight lattice loosens slightly'],
            ['Freezing', 'Liquid → Solid', 'Released (**Exothermic**)', 'Mobile molecules lock into crystal'],
            ['Boiling / Vaporisation', 'Liquid → Gas', 'Absorbed (**Endothermic**)', 'Clusters separate into huge voids'],
            ['Condensation', 'Gas → Liquid', 'Released (**Exothermic**)', 'Fast molecules pull back into clusters'],
            ['Sublimation', 'Solid → Gas directly', 'Absorbed (**Endothermic**)', 'Surface molecules break straight into vapour'],
            ['Deposition', 'Gas → Solid directly', 'Released (**Exothermic**)', 'Vapour deposits straight onto crystal lattice']
          ]
        },
        definitions: [
          { term: 'Sublimation', definition: 'Direct phase transition from solid into vapour on heating without passing through the liquid state.' },
          { term: 'Liquefaction', definition: 'Conversion of a gas into a liquid by cooling and applying high pressure (e.g., LPG cylinders).' },
          { term: 'Volatile Liquid', definition: 'Liquid with weak intermolecular forces and low boiling point that evaporates rapidly at room temperature (petrol, acetone, alcohol).' }
        ],
        realLifeExample: 'Dry ice (solid $\\text{CO}_2$) sublimates directly at $-78.5^\\circ\\text{C}$ into cold carbon dioxide gas without leaving any wet liquid puddle—making it ideal for shipping frozen medicines and creating theatrical stage fog!',
        commonMistakes: [
          {
            mistake: 'Confusing **steam** (invisible water gas) with white **mist/clouds** billowing out of a kettle spout.',
            correction: 'True steam right at the spout tip is completely **invisible**! The white cloud you see is actually **condensed liquid water micro-droplets** formed as hot invisible steam hits cool kitchen air.'
          }
        ]
      },
      {
        id: 'chem-ch1-t3',
        title: '3. Law of Conservation of Mass (Antoine Lavoisier)',
        content: `Before 1789, chemists were baffled: when a shiny magnesium ribbon burns in air, the white ash weighs *more* than the metal; when wood burns in a fireplace, the light grey ash weighs *far less* than the logs! Did mass magically appear and disappear? French chemist **Antoine Lavoisier** (the Father of Modern Chemistry) conducted sealed-vessel weighing experiments that solved the puzzle forever—discovering the **Law of Conservation of Mass**.`,
        subtopics: [
          {
            subheading: '3.1 Statement, Atomic Explanation & Landolt\'s Sealed Flask Experiment',
            body: `**Statement**: *Matter can neither be created nor be destroyed in any physical change or chemical reaction; the total mass of the products formed is strictly equal to the total mass of the reactants consumed.*

**Atomic Reason (John Dalton)**: In a chemical reaction, **no atoms are ever created or obliterated**—existing reactant atoms simply rearrange partners into new product molecules! Since each atom keeps its exact mass, total mass cannot change.

**Laboratory Verification (Landolt's H-Tube / Sealed Conical Flask Experiment)**:
1. Take $50\\text{ mL}$ of **Silver Nitrate ($\\text{AgNO}_3$) solution** in an upright conical flask and suspend a small ignition test tube holding **Sodium Chloride ($\\text{NaCl}$) solution** cleanly inside via a thread, sealing the neck tightly with a rubber cork.
2. Weigh the complete sealed apparatus carefully on a sensitive beam balance: say **$M_1 = 185.40\\text{ g}$**.
3. Tilt the sealed flask gently so $\\text{NaCl}$ spills out and reacts with $\\text{AgNO}_3$, instantly forming a thick curdy-white precipitate of **Silver Chloride ($\\text{AgCl}$)**:
$$\\text{AgNO}_3\\text{ (aq)} + \\text{NaCl}\\text{ (aq)} \\longrightarrow \\text{AgCl}\\downarrow\\text{ (white ppt)} + \\text{NaNO}_3\\text{ (aq)}$$
4. Wipe and re-weigh the still-sealed flask carefully: **$M_2 = 185.40\\text{ g}$**! Zero mass was gained or lost ($M_1 = M_2$), proving Lavoisier's Law!`,
            keyPoint: 'Why do burning wood logs appear to lose mass in an open hearth? Because gaseous products CO₂ and H₂O vapour escape unweighed into the sky! Capture all smoke and oxygen inside a sealed chamber and Mass_before = Mass_after!'
          },
          {
            subheading: '3.2 Explaining Magnesium Ash Mass Gain & Calcium Carbonate Heating',
            body: `- **Burning Magnesium ($2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$)**: $48\\text{ g}$ of magnesium combines chemically with $32\\text{ g}$ of invisible **oxygen gas** from the air to form **$80\\text{ g}$ of white $\\text{MgO}$ ash**! Mass was NOT created—air oxygen simply joined the solid!
- **Thermal Decomposition of Limestone ($\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2\\uparrow$)**: Heating $100\\text{ g}$ of marble ($\\text{CaCO}_3$) in an open crucible leaves $56\\text{ g}$ of quicklime ($\\text{CaO}$), because **$44\\text{ g}$ of invisible $\\text{CO}_2$ gas** escaped! Note $56\\text{ g} + 44\\text{ g} = 100\\text{ g}$—strictly conserved!`,
            keyPoint: 'Balancing any chemical equation (making LHS atoms = RHS atoms) is the direct mathematical application of the Law of Conservation of Mass!'
          }
        ],
        diagram: {
          id: 'diag-chem-conservation',
          title: 'Landolt Sealed-Flask Verification of Law of Conservation of Mass',
          caption: 'Closed-vessel reaction between AgNO₃ and NaCl solutions before and after tilting, proving total mass remains strictly identical (M₁ = M₂).',
          svgFigure: 'chem_conservation_mass'
        },
        definitions: [
          { term: 'Law of Conservation of Mass', definition: 'Total mass of reactants entering a chemical reaction equals total mass of all products formed; matter can neither be created nor destroyed.' },
          { term: 'Reactants', definition: 'Starting chemical substances that undergo reaction (written on the left side of a chemical equation).' },
          { term: 'Products', definition: 'New chemical substances formed after a reaction (written on the right side of a chemical equation).' },
          { term: 'Precipitate (ppt)', definition: 'Insoluble solid product separating rapidly out of a liquid reaction mixture (denoted by $\\downarrow$).' }
        ],
        formulas: [
          { formula: 'Total Mass of Reactants = Total Mass of Products', explanation: 'Lavoisier\'s conservation equation for closed physical and chemical systems.' },
          { formula: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃', explanation: 'Classic white precipitation reaction used in Landolt\'s closed-flask mass conservation verification.' },
          { formula: 'CaCO₃ → CaO + CO₂↑', explanation: '100 g calcium carbonate decomposes cleanly into 56 g quicklime + 44 g CO₂.' }
        ],
        realLifeExample: 'When an iron garden gate rusts ($4\\text{Fe} + 3\\text{O}_2 + x\\text{H}_2\\text{O} \\to 2\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$), it grows slightly heavier because atmospheric oxygen and moisture chemically lock onto the iron!',
        commonMistakes: [
          {
            mistake: 'Stating Lavoisier\'s Law fails when effervescence gas ($\\text{CO}_2$ or $\\text{H}_2$) escapes from an open beaker on a weighing scale.',
            correction: 'The law ALWAYS holds! An open beaker loses weight only because gaseous products escaped into the room unmeasured. Using a sealed flask proves mass stays strictly equal.'
          }
        ]
      },
      {
        id: 'chem-ch1-t4',
        title: '4. Chemical Classification Preview: Pure Substances vs Mixtures',
        content: `Before classifying transformations and atoms in subsequent chapters, chemistry organises all **matter** into two sweeping families based on chemical uniformity: **Pure Substances** (fixed composition) and **Mixtures** (variable blend).`,
        subtopics: [
          {
            subheading: '4.1 Pure Substances (Elements & Compounds) vs Mixtures',
            body: `- **Pure Substance**: Contains only **one kind of particle** with constant physical constants (sharp melting & boiling points):
  - **Elements** (Iron $\\text{Fe}$, Oxygen $\\text{O}_2$, Gold $\\text{Au}$): Built of single type of atom only.
  - **Compounds** (Water $\\text{H}_2\\text{O}$, Salt $\\text{NaCl}$, Sugar $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$): Two or more elements chemically bonded in a **fixed mass ratio**.
- **Mixture** (Air, Seawater, Soil, Brass alloy): Two or more substances blended physically in **any arbitrary ratio**, keeping their individual properties and separable by physical methods (filtration, distillation, magnet).`,
            keyPoint: 'Sharp boiling point (100.0°C) = Pure water; Boiling spread over 101–104°C = Impure salt-water mixture!'
          }
        ],
        definitions: [
          { term: 'Pure Substance', definition: 'Matter consisting of only one kind of particle (element or compound) with fixed composition and sharp melting/boiling points.' },
          { term: 'Mixture', definition: 'Physical combination of two or more elements or compounds in any proportion without chemical bonding.' }
        ],
        realLifeExample: 'Goldsmiths test gold purity partially by checking its sharp melting point ($1,064^\\circ\\text{C}$) and fixed density ($19.3\\text{ g/cm}^3$); mixing cheaper copper changes both physical constants immediately!',
        commonMistakes: [
          {
            mistake: 'Calling transparent clear tap water or clean air a chemically "pure substance".',
            correction: 'Tap water contains dissolved mineral salts and gases (making it a **homogeneous mixture**), and air is a mixture of $\\text{N}_2, \\text{O}_2, \\text{Ar}, \\text{CO}_2$!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Matter', definition: 'Anything possessing mass and occupying measurable volume.', category: 'Fundamentals' },
      { term: 'Kinetic Molecular Theory', definition: 'Model explaining states of matter via particle spacing, cohesive forces, and continuous motion.', category: 'Theory' },
      { term: 'Intermolecular Cohesion', definition: 'Short-range attraction pulling molecules of the same substance together.', category: 'Forces' },
      { term: 'Diffusion', definition: 'Spontaneous intermixing of particles from high to low concentration due to random motion.', category: 'Phenomena' },
      { term: 'Sublimation', definition: 'Direct solid-to-gas transition skipping the liquid phase (camphor, NH₄Cl, I₂, dry ice).', category: 'Phase Change' },
      { term: 'Deposition', definition: 'Direct gas-to-solid crystallisation upon cooling.', category: 'Phase Change' },
      { term: 'Liquefaction', definition: 'Condensing gas into liquid by cooling and high compression.', category: 'Phase Change' },
      { term: 'Law of Conservation of Mass', definition: 'Antoine Lavoisier\'s law: total mass of reactants equals total mass of products.', category: 'Laws' },
      { term: 'Precipitate', definition: 'Insoluble solid separating out from a liquid solution reaction.', category: 'Reactions' },
      { term: 'Pure Substance', definition: 'Element or compound with fixed composition and sharp melting/boiling points.', category: 'Classification' }
    ],
    formulaSheet: [
      { title: 'Mass Conservation Principle', expression: 'Σ Mass(Reactants) = Σ Mass(Products)', meaning: 'Holds strictly in every closed chemical reaction' },
      { title: 'Landolt Mass Test Reaction', expression: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃', meaning: 'White precipitate reaction inside sealed flask leaves total mass unchanged' },
      { title: 'Limestone Decomposition Balance', expression: 'CaCO₃ (100 g) → CaO (56 g) + CO₂↑ (44 g)', meaning: '56 g + 44 g = 100 g conserved' },
      { title: 'Magnesium Combustion Balance', expression: '2Mg (48 g) + O₂ (32 g) → 2MgO (80 g)', meaning: 'Apparent ash weight gain comes from combined atmospheric oxygen' },
      { title: 'Diffusion & Temperature Rule', expression: 'Rate of Diffusion ∝ √(T / Molecular Mass)', meaning: 'Hotter and lighter gases/solutes diffuse fastest' }
    ],
    comparisonTables: [
      {
        title: 'Solids vs Liquids vs Gases (Chemical Particulate Summary)',
        headers: ['Property', 'Solid', 'Liquid', 'Gas'],
        rows: [
          ['Particle Packing', 'Rigid ordered lattice', 'Loose sliding clusters', 'Widely scattered random flight'],
          ['Intermolecular Space', 'Minimal', 'Slightly larger', 'Vast (compressible)'],
          ['Intermolecular Force', 'Maximum', 'Moderate', 'Negligible'],
          ['Diffusion Rate', 'Practically zero', 'Slow', 'Very rapid']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'chem1-ex1',
        question: 'When 10.0 g of calcium carbonate ($\\text{CaCO}_3$) is heated strongly, 5.6 g of calcium oxide ($\\text{CaO}$) remains in the crucible. Calculate the mass of carbon dioxide ($\\text{CO}_2$) gas released.',
        steps: [
          'Reaction: $\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2\\uparrow$.',
          'By Law of Conservation of Mass: $\\text{Mass}(\\text{CaCO}_3) = \\text{Mass}(\\text{CaO}) + \\text{Mass}(\\text{CO}_2)$.',
          '$10.0\\text{ g} = 5.6\\text{ g} + \\text{Mass}(\\text{CO}_2) \\implies \\text{Mass}(\\text{CO}_2) = 10.0 - 5.6 = 4.4\\text{ g}$.'
        ],
        finalAnswer: '4.4 g of CO₂ gas',
        keyRule: 'Mass of reactant = Sum of solid residue + escaped gas mass.'
      },
      {
        id: 'chem1-ex2',
        question: 'In Landolt\'s experiment, 17.0 g of silver nitrate reacts completely with 5.85 g of sodium chloride to form 14.35 g of white silver chloride precipitate and sodium nitrate solution. Find the mass of sodium nitrate formed.',
        steps: [
          'Total reactant mass $= 17.0 + 5.85 = 22.85\\text{ g}$.',
          'By conservation of mass: $22.85 = 14.35 + \\text{Mass}(\\text{NaNO}_3)$.',
          '$\\text{Mass}(\\text{NaNO}_3) = 22.85 - 14.35 = 8.50\\text{ g}$.'
        ],
        finalAnswer: '8.50 g of NaNO₃',
        keyRule: 'Total Mass(Reactants) = Total Mass(Products).'
      },
      {
        id: 'chem1-ex3',
        question: 'When 12 g of carbon burns completely in 32 g of oxygen inside a closed bomb calorimeter, how many grams of carbon dioxide form?',
        steps: [
          'Reaction: $\\text{C} + \\text{O}_2 \\to \\text{CO}_2$.',
          'Mass of $\\text{CO}_2 = 12\\text{ g} + 32\\text{ g} = 44\\text{ g}$.'
        ],
        finalAnswer: '44 g of CO₂',
        keyRule: 'Reactants combine completely here in a 12 : 32 (3 : 8) mass ratio.'
      },
      {
        id: 'chem1-ex4',
        question: 'A student stirs 20 g of table salt into 100 mL of water (density 1 g/mL) inside a graduated beaker and sees the volume barely stay near 100 mL while total mass becomes 120 g. Explain both observations.',
        steps: [
          '1. **Mass check**: $100\\text{ g water} + 20\\text{ g salt} = 120\\text{ g}$ (Conservation of Mass).',
          '2. **Volume check**: Separated $\\text{Na}^+$ and $\\text{Cl}^-$ ions slip neatly into the **empty intermolecular spaces** between water molecules without pushing the water surface much higher!'
        ],
        finalAnswer: 'Total mass adds strictly (120 g), while empty liquid intermolecular voids accommodate dissolved salt particles.',
        keyRule: 'Dissolving demonstrates empty intermolecular spaces + conservation of mass.'
      },
      {
        id: 'chem1-ex5',
        question: 'A jar of dense reddish-brown bromine vapour sits upright below an inverted jar of colourless air. After 15 minutes both jars are uniform amber-brown. Why did dense bromine climb upward?',
        steps: [
          'Gas molecules move continuously in all random directions at hundreds of metres per second.',
          'Through **gaseous diffusion**, fast-moving bromine and air molecules collide and intermix uniformly throughout all available volume, completely overcoming gravity\'s tiny pull.'
        ],
        finalAnswer: 'Upward gaseous diffusion driven by random thermal kinetic motion.',
        keyRule: 'Diffusion occurs in all directions, even upward against gravity.'
      },
      {
        id: 'chem1-ex6',
        question: 'How would you separate a dry mixture of common salt (NaCl) and ammonium chloride (NH₄Cl) cleanly in the laboratory?',
        steps: [
          'Place the mixture in a porcelain dish covered by an inverted glass funnel with a cotton plug in the stem.',
          'Heat gently: **Ammonium chloride sublimates** directly into white vapours that cool and **deposit as pure white $\\text{NH}_4\\text{Cl}$ crystals** inside the cool upper funnel walls.',
          '**Common salt (NaCl)** does not sublime and stays behind cleanly in the dish.'
        ],
        finalAnswer: 'Sublimation separates sublimable NH₄Cl from non-sublimable NaCl.',
        keyRule: 'Use sublimation whenever one component sublimes (NH₄Cl, I₂, camphor, naphthalene) and the other does not.'
      },
      {
        id: 'chem1-ex7',
        question: 'Why does cooking LPG exist as a liquid inside heavy steel cylinders yet spray out instantly as an invisible fuel gas when the stove knob opens?',
        steps: [
          'Inside the sealed tank, petroleum gases (butane/propane) are compressed under **high pressure**, squeezing molecules close enough for intermolecular cohesion to hold them as a **liquid (liquefaction)**.',
          'Turning the knob drops pressure suddenly back to $1\\text{ atm}$, letting the liquid rapidly **vaporise** back into gas.'
        ],
        finalAnswer: 'High tank pressure liquefies gas; releasing pressure drops it back into gas.',
        keyRule: 'High pressure + Cooling favours Liquid/Solid; Low pressure + Heating favours Gas.'
      },
      {
        id: 'chem1-ex8',
        question: 'If 4.8 g of magnesium burns completely in air to yield 8.0 g of white magnesium oxide ash, how many grams of oxygen combined with the magnesium?',
        steps: [
          'Reaction: $2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$.',
          'Mass of oxygen absorbed $= \\text{Mass}(\\text{MgO}) - \\text{Mass}(\\text{Mg}) = 8.0 - 4.8 = 3.2\\text{ g}$.'
        ],
        finalAnswer: '3.2 g of oxygen gas',
        keyRule: 'Mass gained by a burning metal equals the exact mass of oxygen fixed from air!'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'chem1-e1',
          question: 'Name four substances that undergo sublimation on gentle heating.',
          solutionSteps: ['Camphor, Ammonium chloride ($\\text{NH}_4\\text{Cl}$), Iodine ($\\text{I}_2$), and Naphthalene (or Solid $\\text{CO}_2$ Dry Ice).'],
          finalAnswer: 'Camphor, Ammonium chloride, Iodine, Naphthalene',
          marks: 2
        },
        {
          id: 'chem1-e2',
          question: 'State the Law of Conservation of Mass and name the scientist who proposed it.',
          solutionSteps: ['Antoine Lavoisier (1789): Matter can neither be created nor destroyed; total mass of reactants equals total mass of products.'],
          finalAnswer: 'Antoine Lavoisier — Total mass of reactants = Total mass of products.',
          marks: 2
        },
        {
          id: 'chem1-e3',
          question: 'Which state of matter shows (a) maximum compressibility and (b) rigid fixed shape?',
          solutionSteps: ['(a) Gases (vast voids); (b) Solids (tightly bound lattice).'],
          finalAnswer: '(a) Gases; (b) Solids',
          marks: 2
        },
        {
          id: 'chem1-e4',
          question: 'What happens to a potassium permanganate crystal dropped into hot water vs cold water?',
          solutionSteps: ['It dissolves and diffuses purple colour noticeably faster in hot water due to higher molecular kinetic energy.'],
          finalAnswer: 'Diffuses faster in hot water.',
          marks: 2
        }
      ],
      medium: [
        {
          id: 'chem1-m1',
          question: '15 g of baking soda reacts with 10 g of dilute acetic acid in an open beaker, leaving 20.6 g of liquid solution. Why did 4.4 g appear to "vanish", and was Lavoisier\'s law violated?',
          solutionSteps: [
            '$15 + 10 = 25.0\\text{ g}$ reactants minus $20.6\\text{ g}$ residue leaves $4.4\\text{ g}$ unaccounted.',
            'Effervescence released $4.4\\text{ g}$ of **carbon dioxide ($\\text{CO}_2$) gas** into the air.',
            'No violation occurred—in a closed flask with balloon capture, total mass stays strictly $25.0\\text{ g}$.'
          ],
          finalAnswer: '4.4 g escaped as CO₂ gas; mass is strictly conserved.',
          marks: 3
        },
        {
          id: 'chem1-m2',
          question: 'Contrast gases vs liquids across intermolecular force, intermolecular space, compressibility, and free surfaces.',
          solutionSteps: [
            'Liquids: moderate force, small voids, nearly incompressible, 1 horizontal free surface.',
            'Gases: negligible force, vast voids, highly compressible, 0 free surfaces.'
          ],
          finalAnswer: '4-point comparison completed.',
          marks: 3
        },
        {
          id: 'chem1-m3',
          question: 'Write the balanced chemical equation for the Landolt experiment and name the insoluble product formed.',
          solutionSteps: ['$\\text{AgNO}_3\\text{ (aq)} + \\text{NaCl}\\text{ (aq)} \\to \\text{AgCl}\\downarrow + \\text{NaNO}_3\\text{ (aq)}$. White curdy precipitate is Silver Chloride ($\\text{AgCl}$).'],
          finalAnswer: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃ (Silver Chloride ppt).',
          marks: 3
        },
        {
          id: 'chem1-m4',
          question: 'Explain why a balloon filled with helium gas shrinks slightly inside a deep freezer and puffs back up in a warm room.',
          solutionSteps: [
            'Cooling slows helium molecules, reducing collision speed and outward gas pressure so the balloon contracts.',
            'Warming increases kinetic energy and pressure, re-expanding the balloon.'
          ],
          finalAnswer: 'Molecular kinetic speed rises with temperature, expanding gas volume.',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'chem1-d1',
          question: 'Calculate the mass of carbon monoxide formed when 12 g of carbon reacts with 16 g of oxygen in limited air ($\\text{2C} + \\text{O}_2 \\to \\text{2CO}$). If 12 g carbon burned with 40 g oxygen instead, would 52 g of $\\text{CO}_2$ form?',
          solutionSteps: [
            'Part 1: $12\\text{ g C} + 16\\text{ g O}_2 \\to 28\\text{ g CO}$ (complete combination).',
            'Part 2: $12\\text{ g C}$ requires strictly $32\\text{ g O}_2$ to form $44\\text{ g CO}_2$. The extra $40 - 32 = 8\\text{ g O}_2$ remains **unreacted excess oxygen**!',
            'Products + leftover = $44\\text{ g CO}_2 + 8\\text{ g unreacted O}_2 = 52\\text{ g total}$ (still conserved!).'
          ],
          finalAnswer: '28 g CO; in excess oxygen, 44 g CO₂ + 8 g leftover O₂ (total still 52 g).',
          marks: 4
        },
        {
          id: 'chem1-d2',
          question: 'Why does a freshly cut piece of solid dry ice seem to "smoke" continuously without melting into a puddle on a lab desk?',
          solutionSteps: [
            'Solid $\\text{CO}_2$ sublimates directly at $-78.5^\\circ\\text{C}$ at $1\\text{ atm}$ pressure—skipping the liquid phase completely.',
            'The ultra-cold gas chills surrounding humid air, condensing atmospheric water vapour into visible white fog clouds.'
          ],
          finalAnswer: 'Dry ice sublimates straight to gas, condensing room humidity into fog.',
          marks: 4
        },
        {
          id: 'chem1-d3',
          question: 'A closed flask holds 20 g of iron filings and 10 g of sulphur powder. It is heated strongly to form black iron(II) sulphide (FeS). Predict the final mass of the sealed flask and explain how you check if a chemical change happened.',
          solutionSteps: [
            '1. Sealed total mass remains strictly $20 + 10 = 30\\text{ g}$ (+ flask mass) by conservation of mass.',
            '2. Black FeS is non-magnetic (iron filings were magnetic) and reacts with dilute acid to release foul rotten-egg $\\text{H}_2\\text{S}$ gas—proving a new compound formed!'
          ],
          finalAnswer: 'Total mass unchanged (30 g contents); non-magnetic FeS formed.',
          marks: 4
        },
        {
          id: 'chem1-d4',
          question: 'In an ammonia–HCl diffusion tube experiment, why does the white ring of solid ammonium chloride form closer to the HCl cotton plug than to the NH₃ plug?',
          solutionSteps: [
            '$\\text{NH}_3$ (molecular mass $17$) is much lighter than $\\text{HCl}$ (molecular mass $36.5$).',
            'By kinetic theory, lighter molecules travel and diffuse faster at the same temperature—so $\\text{NH}_3$ covers more tube length before colliding to form $\\text{NH}_4\\text{Cl}$ smoke closer to the $\\text{HCl}$ end.'
          ],
          finalAnswer: 'Lighter NH₃ diffuses faster than heavier HCl, meeting nearer the HCl side.',
          marks: 4
        }
      ]
    },
    practiceWorksheet: {
      title: 'Chemistry Chapter 1 Worksheet: Matter & Mass Conservation (30 Marks)',
      instructions: 'Show complete mass balance steps and balanced chemical equations.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Facts (1 × 5 = 5 Marks)',
          items: [
            '1. Name the French chemist who established the Law of Conservation of Mass.',
            '2. What is the direct transition from vapour straight back into solid called?',
            '3. Write the formula of the white precipitate formed in Landolt\'s experiment.',
            '4. Does sugar dissolving in water increase total volume markedly? Yes/No.',
            '5. Which state of matter possesses maximum intermolecular attraction?'
          ]
        },
        {
          sectionTitle: 'Section B: Reasoning & Laboratory Tests (2 × 4 = 8 Marks)',
          items: [
            '6. Why is pure distilled water a compound/pure substance whereas tap water is a mixture?',
            '7. Why does perfume spray spread faster in a warm sunlit room than in an air-conditioned cold room?',
            '8. How do you separate iodine crystals mixed with fine white sand?',
            '9. Explain why an iron nail appears heavier after rusting in damp air.'
          ]
        },
        {
          sectionTitle: 'Section C: Mass Conservation Numericals (3 × 4 = 12 Marks)',
          items: [
            '10. 25 g of marble chips ($\\text{CaCO}_3$) yield 14 g of quicklime ($\\text{CaO}$) on heating. Find mass of $\\text{CO}_2$ evolved.',
            '11. When 6.4 g of copper heats completely with 1.6 g of oxygen, how much black copper(II) oxide forms?',
            '12. 10.6 g of sodium carbonate reacts with 7.3 g of HCl to leave 11.7 g of NaCl + 1.8 g water + $\\text{CO}_2$ gas. Find the $\\text{CO}_2$ mass.',
            '13. Balance: $\\text{Mg} + \\text{O}_2 \\to \\text{MgO}$ and $\\text{Fe} + \\text{S} \\to \\text{FeS}$.'
          ]
        },
        {
          sectionTitle: 'Section D: Landolt Experiment (5 Marks)',
          items: [
            '14. Describe Landolt\'s sealed flask experiment to verify the Law of Conservation of Mass.'
          ]
        }
      ],
      answerKey: [
        '1. Antoine Lavoisier.',
        '2. Deposition.',
        '3. AgCl (Silver chloride).',
        '4. No (sugar particles occupy intermolecular spaces between water molecules).',
        '5. Solid.',
        '6. Distilled water has only H₂O molecules with sharp 100°C b.p.; tap water contains dissolved salts and gases in variable amounts.',
        '7. Higher temperature increases kinetic speed of perfume vapour molecules, accelerating diffusion.',
        '8. Sublimation: gentle heating turns iodine into purple vapour which deposits on a cool inverted funnel, leaving sand behind.',
        '9. Atmospheric oxygen and water vapour chemically combine onto iron to form hydrated ferric oxide.',
        '10. 25 − 14 = 11 g CO₂.',
        '11. 6.4 + 1.6 = 8.0 g CuO.',
        '12. Reactants = 17.9 g; Products known = 13.5 g ⇒ CO₂ = 17.9 − 13.5 = 4.4 g.',
        '13. 2Mg + O₂ → 2MgO; Fe + S → FeS (already balanced).',
        '14. Seal AgNO₃ and suspended NaCl tube inside a flask, weigh (M₁), tilt to mix forming white AgCl↓ + NaNO₃, re-weigh (M₂ = M₁).'
      ]
    },
    examPreparationTips: [
      'Whenever asked to verify Conservation of Mass experimentally, sketch the **sealed flask with suspended NaCl test tube** and write the exact equation $\\text{AgNO}_3 + \\text{NaCl} \\to \\text{AgCl}\\downarrow + \\text{NaNO}_3$.',
      'Practise mass-balance numericals—they only require addition/subtraction once you write Reactants = Products!',
      'Be ready to list at least **4 sublimable substances** from memory.'
    ],
    chapterSummary: [
      'Matter consists of tiny moving molecules separated by intermolecular voids and held by cohesive attractions.',
      'Diffusion increases with temperature and decreases with particle mass; gases diffuse vastly faster than liquids or solids.',
      'Sublimation (solid → gas) skips the liquid state (NH₄Cl, I₂, camphor, naphthalene, dry ice).',
      'Antoine Lavoisier\'s Law of Conservation of Mass states total mass of reactants strictly equals total mass of products (verified in sealed Landolt vessels).',
      'Melting, boiling, condensation, and freezing occur at constant temperature because latent heat breaks or reforms intermolecular forces without changing kinetic energy.'
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Explain using the Kinetic Theory why gases fill their entire container completely while solids hold fixed shape.',
        answer: 'In **gases**, thermal kinetic energy far exceeds negligible intermolecular attractions, letting molecules dart freely into every corner of any vessel. In **solids**, cohesive forces lock molecules tightly in place so they only vibrate about fixed lattice positions.',
        type: 'Short Answer'
      },
      {
        question: 'Why does dry ice keep ice-cream carts frozen without turning slushy like ordinary water ice?',
        answer: 'Dry ice (solid $\\text{CO}_2$) **sublimes** directly from solid into harmless gas at $-78.5^\\circ\\text{C}$ under $1\\text{ atm}$—absorbing huge latent heat without ever forming messy wet water.',
        type: 'Reasoning'
      },
      {
        question: 'Describe Landolt\'s experiment verifying Lavoisier\'s Law of Conservation of Mass.',
        answer: 'Solutions of $\\text{AgNO}_3$ and $\\text{NaCl}$ are sealed inside separate limbs/tubes of a glass vessel and weighed ($M_1$). On tilting to mix, $\\text{AgNO}_3 + \\text{NaCl} \\to \\text{AgCl}\\downarrow + \\text{NaNO}_3$ yields a white precipitate inside the sealed vessel. Re-weighing gives $M_2 = M_1$, proving zero mass gain or loss.',
        type: 'Long Answer'
      },
      {
        question: 'When a candle burns down completely to nothing on a dish, was its mass destroyed?',
        answer: 'No! Hydrocarbon wax reacted with atmospheric oxygen to form invisible **carbon dioxide gas** and **water vapour**. Trapping all released gases inside an airtight chamber shows $\\text{Mass(wax + oxygen)} = \\text{Mass(CO}_2 + \\text{H}_2\\text{O)}$!',
        type: 'Reasoning'
      },
      {
        question: 'How does increasing external pressure affect the physical state of a gas?',
        answer: 'High pressure squeezes gas molecules far closer together, bringing them within short-range intermolecular attraction range—causing **liquefaction** (or even solidification) when cooled, as seen in compressed LPG tanks.',
        type: 'Short Answer'
      },
      {
        question: 'How does bromine diffusion show that gas molecules have empty spaces between them and move rapidly?',
        answer: 'Heavy reddish-brown bromine vapour climbs upward through colourless air molecules until both jars match uniformly—showing gas molecules dart randomly through vast empty spaces between colliding neighbours.',
        type: 'Short Answer'
      },
      {
        question: 'What is the difference between a vapour and a gas, and between sublimation and evaporation?',
        answer: 'A gas is gaseous at ordinary room conditions ($\\text{O}_2, \\text{N}_2$), whereas **vapour** is the gas phase of a substance normally solid or liquid at room temperature (water vapour, camphor vapour). **Evaporation** turns liquid surface molecules into vapour; **sublimation** turns solid crystals straight into vapour without melting.',
        type: 'HOTS'
      },
      {
        question: 'In a sealed test tube, 5.6 g iron reacts completely with 3.2 g sulphur to produce black iron(II) sulphide. What mass of FeS forms and what happens if 5 g sulphur were used instead?',
        answer: '5.6 g Fe + 3.2 g S gives $8.8\\text{ g FeS}$. If $5\\text{ g S}$ is mixed, only $3.2\\text{ g S}$ reacts to yield **$8.8\\text{ g FeS}$**, leaving **$1.8\\text{ g}$ unreacted sulphur**—total sealed mass remains $10.6\\text{ g}$!',
        type: 'HOTS'
      }
    ],
    practiceExercises: [
      {
        question: 'Heating 50 g of limestone ($\\text{CaCO}_3$) leaves 28 g of lime ($\\text{CaO}$). Find the mass of $\\text{CO}_2$ released.',
        hint: '50 − 28.',
        answerGuide: '22 g of CO₂.'
      },
      {
        question: 'Why does a lump of sugar dissolve faster in steaming tea than in iced water?',
        hint: 'Higher temperature speeds up kinetic motion and diffusion.',
        answerGuide: 'Warm water molecules move faster, bombarding and dispersing sucrose molecules rapidly.'
      },
      {
        question: 'Name two everyday processes demonstrating deposition (gas → solid).',
        hint: 'Look inside winter frost or iodine sublimation funnel.',
        answerGuide: 'Frost crystals forming directly from cold air vapour; iodine vapours crystallising inside a cool glass funnel.'
      }
    ]
  },
  quizQuestions: [
    {
      id: 'chem1-m-q1',
      type: 'mcq',
      question: 'Which scientist formulated the Law of Conservation of Mass in 1789?',
      options: ['John Dalton', 'Antoine Lavoisier', 'Robert Boyle', 'Niels Bohr'],
      correctAnswer: 'Antoine Lavoisier',
      explanation: 'Antoine Lavoisier proved in sealed vessels that total reactant mass equals total product mass.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem1-m-q2',
      type: 'mcq',
      question: 'When 50 g of sugar dissolves completely in 200 mL of water, the volume barely changes because:',
      options: ['Sugar evaporates immediately', 'Sugar molecules shrink to zero', 'Sugar molecules fit into empty intermolecular spaces of water', 'Water contracts chemically'],
      correctAnswer: 'Sugar molecules fit into empty intermolecular spaces of water',
      explanation: 'Liquids contain empty intermolecular voids large enough to accommodate dissolved solute particles.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem1-m-q3',
      type: 'mcq',
      question: 'Which set contains ONLY substances that undergo sublimation on heating?',
      options: ['Salt, Sugar, Sand', 'Camphor, Ammonium chloride, Iodine', 'Iron, Copper, Sulphur', 'Wax, Ice, Chalk'],
      correctAnswer: 'Camphor, Ammonium chloride, Iodine',
      explanation: 'Camphor, NH₄Cl, I₂, naphthalene, and dry ice pass directly from solid into vapour.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem1-m-q4',
      type: 'mcq',
      question: 'In Landolt\'s experiment, silver nitrate reacts with sodium chloride to form a white precipitate of:',
      options: ['Sodium nitrate', 'Silver chloride (AgCl)', 'Silver oxide', 'Sodium oxide'],
      correctAnswer: 'Silver chloride (AgCl)',
      explanation: 'AgNO₃ + NaCl → AgCl↓ (white precipitate) + NaNO₃.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem1-m-q5',
      type: 'mcq',
      question: 'Heating 20 g of calcium carbonate yields 11.2 g of calcium oxide. What mass of CO₂ escaped?',
      options: ['31.2 g', '11.2 g', '8.8 g', '4.4 g'],
      correctAnswer: '8.8 g',
      explanation: '20.0 − 11.2 = 8.8 g CO₂ by Law of Conservation of Mass.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem1-m-q6',
      type: 'mcq',
      question: 'Why does cooking LPG stay liquid inside steel cylinders?',
      options: ['It is frozen below −100°C', 'High pressure forces gas molecules close enough to liquefy', 'Water is mixed inside', 'Tank walls absorb gas'],
      correctAnswer: 'High pressure forces gas molecules close enough to liquefy',
      explanation: 'Compressing petroleum gas under high pressure causes liquefaction.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem1-m-q7',
      type: 'true_false',
      question: 'Heavy reddish-brown bromine vapour CANNOT diffuse upward into a lighter gas jar filled with air.',
      correctAnswer: false,
      explanation: 'Random kinetic motion diffuses bromine vapour upward rapidly against gravity until both jars match.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem1-m-q8',
      type: 'fill_blank',
      question: 'The direct change of a gas/vapour straight back into a solid on cooling is called ______.',
      correctAnswer: 'deposition',
      explanation: 'Deposition is the direct reverse of sublimation (gas → solid).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem1-m-q9',
      type: 'mcq',
      question: 'Diffusion occurs FASTEST in:',
      options: ['Solids at 0°C', 'Cold liquids', 'Warm liquids', 'Gases at high temperature'],
      correctAnswer: 'Gases at high temperature',
      explanation: 'Gas molecules move fastest across vast empty spaces, and high temperature boosts kinetic speed further.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem1-m-q10',
      type: 'mcq',
      question: 'When 2.4 g of magnesium burns in air to form 4.0 g of magnesium oxide, the mass of oxygen consumed is:',
      options: ['6.4 g', '2.4 g', '1.6 g', '4.0 g'],
      correctAnswer: '1.6 g',
      explanation: '4.0 g MgO − 2.4 g Mg = 1.6 g oxygen.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem1-m-q11',
      type: 'true_false',
      question: 'When a wooden log burns away to light ash in an open campfire, the Law of Conservation of Mass fails.',
      correctAnswer: false,
      explanation: 'Total mass never fails; missing mass escaped unseen as CO₂ gas and water vapour.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem1-m-q12',
      type: 'hots',
      question: 'In a glass diffusion tube, cotton soaked in NH₃ (mass 17) sits at the left end and HCl (mass 36.5) at the right end. Where does the white NH₄Cl ring form?',
      options: ['Exactly at the dead centre', 'Closer to the NH₃ end', 'Closer to the HCl end', 'Outside the tube'],
      correctAnswer: 'Closer to the HCl end',
      explanation: 'Lighter NH₃ molecules diffuse much faster and travel farther down the tube before meeting heavier HCl.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'fc-c1m-1',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'State Antoine Lavoisier\'s Law of Conservation of Mass.',
      back: 'Matter can neither be created nor destroyed; total mass of reactants strictly equals total mass of products.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c1m-2',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'What reaction verifies mass conservation in Landolt\'s closed flask?',
      back: 'AgNO₃(aq) + NaCl(aq) → AgCl↓ (white ppt) + NaNO₃(aq). Mass before mixing = Mass after mixing.',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c1m-3',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'Name 5 common ICSE sublimable solids.',
      back: 'Ammonium chloride (NH₄Cl), Camphor, Iodine (I₂), Naphthalene, and Dry Ice (solid CO₂).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c1m-4',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'Why does dissolving 50 g salt in water barely raise the volume?',
      back: 'Dissolved solute particles slip into empty intermolecular spaces between water molecules.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c1m-5',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'Order of Diffusion Speed: Solids, Liquids, Gases?',
      back: 'Gases >> Liquids >> Solids (fastest in lighter gases and at higher temperatures).',
      category: 'Scientific Law',
      importance: 'Standard'
    },
    {
      id: 'fc-c1m-6',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'Why does burning magnesium ribbon weigh MORE than the original ribbon?',
      back: 'Magnesium chemically combines with atmospheric oxygen (2Mg + O₂ → 2MgO), adding oxygen\'s mass.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c1m-7',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'Why does burning wood weigh LESS in an open fireplace?',
      back: 'Gaseous products (CO₂ and H₂O vapour) escape unweighed into the air; total mass stays conserved.',
      category: 'Scientific Law',
      importance: 'Standard'
    },
    {
      id: 'fc-c1m-8',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'Define Deposition.',
      back: 'Direct conversion of gas/vapour straight back into solid crystals upon cooling (reverse of sublimation).',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'fc-c1m-9',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'How are gases like LPG or oxygen liquefied in cylinders?',
      back: 'By cooling and applying high pressure (liquefaction), forcing gas molecules close enough for cohesion.',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'fc-c1m-10',
      subjectId: 'chemistry',
      chapterId: 'chem-matter',
      chapterTitle: 'Matter',
      front: 'What is the visible white "smoke" from an ammonia + HCl diffusion test?',
      back: 'Solid ammonium chloride (NH₄Cl), forming closer to HCl because lighter NH₃ diffuses faster.',
      category: 'Definition',
      importance: 'Standard'
    }
  ]
};
