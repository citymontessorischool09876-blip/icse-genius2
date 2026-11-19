import { Chapter } from '../../types';

export const CHEM_CH2_CHANGES: Chapter = {
  id: 'chem-ch2',
  subjectId: 'chemistry',
  chapterNumber: 2,
  title: 'Physical and Chemical Changes',
  subtitle: 'Detailed classification of reversible physical vs permanent chemical changes, simultaneous physical-chemical candle burning, fast vs slow reactions, exothermic vs endothermic transformations, and conditions favouring chemical change',
  term: 'Annual',
  estimatedMinutes: 85,
  notes: {
    introduction: `Drop an ice cube onto a warm kitchen plate and watch it melt into sparkling water—freeze the water back in an ice tray and your original ice returns unchanged! Now crack a wooden matchstick across a matchbox strip: bright flame bursts out, dark soot and ash fall away, and smoke drifts into the air—no refrigerator or magnet on Earth can ever coax that ash and smoke back into the intact matchstick.

Every second inside your kitchen, classroom, and living cells, matter undergoes endless transformations. Chemists sort all natural and industrial transformations into two primary categories: **Physical Changes** (temporary rearrangements of state or shape leaving molecules intact) and **Chemical Changes** (permanent rearrangements of atoms forging brand-new chemical substances). Even better, chemistry also tracks whether a change happens fast or slow, reverses easily, or absorbs (**endothermic**) vs releases (**exothermic**) heat energy!

In Chapter 2 of Class 8 ICSE Chemistry (*Gem's Chemistry / Concise Chemistry*), we master the six decisive tests separating physical from chemical changes, examine intriguing "dual" processes like **burning a candle** and **heating zinc oxide / ammonium chloride**, classify **desirable vs undesirable, periodic vs non-periodic, reversible vs irreversible**, and write balanced chemical equations for rusting, combustion, photosynthesis, respiration, and neutralisation.`,
    learningObjectives: [
      'Define Physical Change and Chemical Change with clear molecular explanations (intermolecular spacing vs atomic bond breaking/making).',
      'Compare physical and chemical changes across six criteria: new substance, reversibility, chemical composition, mass of substance, energy change, and examples.',
      'Analyse tricky dual-change and apparent-exception examples: burning of a candle, magnetisation of iron, dissolution of sugar vs quicklime in water, heating Pt wire vs Mg ribbon, and heating NH₄Cl vs ZnO.',
      'Classify changes as Desirable vs Undesirable, Fast vs Slow, Periodic vs Non-Periodic, Reversible vs Irreversible.',
      'Distinguish Exothermic reactions (heat released: combustion, respiration, slaking lime) from Endothermic reactions (heat absorbed: photosynthesis, dissolving NH₄Cl, thermal decomposition of CaCO₃).',
      'Explain the chemical conditions triggering chemical changes (close contact, solution state, heat, light, electricity, pressure, catalyst).'
    ],
    topics: [
      {
        id: 'chem-ch2-t1',
        title: '1. Physical Changes vs Chemical Changes at the Molecular Level',
        content: `Whether a transformation is physical or chemical depends entirely on one question: **Did the molecules themselves stay intact, or did atoms break apart and re-bond into brand-new molecules?**`,
        subtopics: [
          {
            subheading: '1.1 Physical Changes (Molecules Remain Unchanged)',
            body: `A **Physical Change** is a temporary, usually easily **reversible** alteration affecting only physical appearance—shape, size, temperature, magnetic alignment, or physical state (solid/liquid/gas)—where **NO new chemical substance is formed**.
- **Molecular View**: In melting ice ($\\text{H}_2\\text{O}(s) \\to \\text{H}_2\\text{O}(l)$) or subliming iodine ($\\text{I}_2(s) \\to \\text{I}_2(g)$), the covalent bonds *inside* each $\\text{H}_2\\text{O}$ or $\\text{I}_2$ molecule stay completely untouched! Only intermolecular spacing and speed change.
- **Classic Examples**:
  - Dissolving sugar or table salt in water (evaporation recovers exact white salt crystals cleanly).
  - Breaking glass, shredding paper, stretching rubber, hammering copper into wire.
  - Glowing of an electric bulb tungsten filament or heating a platinum wire (returns cool and silvery identical when switched off).
  - Magnetisation of an iron bar (heating or hammering demagnetises it back).
  - Changing water states (evaporation, condensation, boiling, freezing, crystallisation).`,
            keyPoint: 'Notice: Shattering a glass tumbler cannot be glued easily back to look neat, YET it is still a PHYSICAL change because broken glass is chemically identical SiO₂—no new substance formed!'
          },
          {
            subheading: '1.2 Chemical Changes (Atoms Rearrange into New Substances)',
            body: `A **Chemical Change (Chemical Reaction)** is a permanent, normally **irreversible** change in which original substances (**reactants**) react to form one or more **entirely new chemical substances (products)** possessing completely different chemical composition, formula, and properties!
- **Observable Clues of a Chemical Change**:
  1. Evolution of a gas with effervescence (zinc in dilute HCl releasing $\\text{H}_2$).
  2. Sharp colour change (green copper carbonate turning black CuO; moist red-brown rusting iron).
  3. Formation of an insoluble **precipitate** ($\\text{AgCl}\\downarrow$).
  4. Evolution or absorption of heat, light, or sound (burning magnesium with dazzling white light).
  5. Permanent odour/taste shift (souring milk, ripening mango, rotting food).
- **Classic Examples**: Combustion of wood/LPG/magnesium ($2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$), rusting of iron, digestion of food, respiration, photosynthesis, fermentation of sugar to alcohol, curdling of milk, photography film darkening in sunlight.`,
            keyPoint: 'Even if individual solids gain or lose mass (like ash or rust), TOTAL mass across reactants and products remains strictly conserved!'
          }
        ],
        comparisonTable: {
          caption: 'Physical Change vs Chemical Change: Master 6-Point Exam Table',
          headers: ['Criterion', 'Physical Change', 'Chemical Change'],
          rows: [
            ['New Substance Formed?', '**No** new substance formed', '**Yes**, one or more brand-new substances form'],
            ['Chemical Composition', 'Remains strictly **identical**', 'Changes **completely** (new formula)'],
            ['Reversibility', 'Generally temporary and **easily reversible**', 'Normally permanent and **irreversible** by physical means'],
            ['Mass of Individual Substance', 'No change in individual substance mass', 'Individual residue mass may change (though total mass stays conserved)'],
            ['Energy Exchange', 'Very little or no net permanent energy change (latent heat returns on reversal)', 'Usually absorbs or evolves large **heat, light, or electrical energy**'],
            ['Examples', 'Melting wax, boiling water, glowing bulb, tearing paper', 'Burning wax, rusting iron, curdling milk, baking cake']
          ]
        },
        definitions: [
          { term: 'Physical Change', definition: 'A temporary, usually reversible change in physical state, shape, or size without forming any new chemical substance.' },
          { term: 'Chemical Change', definition: 'A permanent transformation producing one or more new substances with completely different chemical properties and formulas.' }
        ],
        realLifeExample: 'Shaping wheat flour dough into round rotis is a **physical change** (still raw flour); baking that dough on a hot *tawa* turns starch and proteins permanently into cooked bread—an irreversible **chemical change**!',
        commonMistakes: [
          {
            mistake: 'Thinking "irreversible" automatically means "chemical change" (e.g., chopping a tree log into sawdust).',
            correction: 'You cannot easily glue sawdust back into a tree, yet cutting wood creates NO new chemical molecules—making chopping wood a **physical change**! The decisive test is always: *Was a NEW chemical substance formed?*'
          }
        ]
      },
      {
        id: 'chem-ch2-t2',
        title: '2. Dual Changes & Classic ICSE Examination Tricky Examples',
        content: `ICSE examiners love testing whether students genuinely understand molecular identity rather than memorising blind lists! Let us dissect the five classic "borderline" transformations tested every year.`,
        subtopics: [
          {
            subheading: '2.1 Burning of a Candle vs Heating Platinum / Magnesium / ZnO',
            body: `1. **Burning of a Candle (BOTH Physical & Chemical!)**:
   - **Physical Change**: Solid paraffin wax near the hot wick **melts** into liquid droplets and trickles down, re-solidifying unchanged at the base.
   - **Chemical Change**: Liquid wax drawn up the cotton wick **vaporises and combusts** with oxygen to form new invisible gases—**Carbon dioxide ($\\text{CO}_2$)** and **Water vapour ($\\text{H}_2\\text{O}$)** plus heat and light!
2. **Heating a Platinum Wire vs Heating Magnesium Ribbon**:
   - **Platinum Wire**: Glows bright white-red in a flame; upon cooling, returns to identical gleaming silver-grey platinum metal—**Physical Change**.
   - **Magnesium Ribbon**: Burns fiercely with dazzling white light ($2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$), turning permanently into crumbly white basic ash—**Chemical Change**.
3. **Heating Zinc Oxide ($\\text{ZnO}$) vs Heating Ammonium Chloride ($\\text{NH}_4\\text{Cl}$)**:
   - White $\\text{ZnO}$ turns **lemon-yellow** while hot and flips back to **white** on cooling without reacting—**Physical Change**!
   - Heating $\\text{NH}_4\\text{Cl}$ splits it transiently into $\\text{NH}_3 + \\text{HCl}$ gases (**thermal dissociation**), which recombine immediately on cool glass back into white $\\text{NH}_4\\text{Cl}$ (**sublimation** physical look-alike, reversible!).
4. **Dissolving Sugar vs Dissolving Quicklime ($\\text{CaO}$) in Water**:
   - Sugar in water = **Physical** (evaporation recovers sugar crystals).
   - Quicklime in water = **Chemical**! ($\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{Heat}$, releasing brisk hissing heat and forming slaked lime!).`,
            keyPoint: 'Burning a candle = Physical (melting wax) + Chemical (wax vapour burning into CO₂ + H₂O)!'
          }
        ],
        diagram: {
          id: 'diag-chem-changes',
          title: 'Physical vs Chemical Transformations: Candle Dual-Change & Exothermic/Endothermic Profiles',
          caption: 'Comparison of reversible melting wax vs irreversible combustion in a candle, alongside heat-releasing (exothermic) and heat-absorbing (endothermic) reaction curves.',
          svgFigure: 'chem_changes_cycle'
        },
        realLifeExample: 'Charging a smartphone lithium-ion battery uses electricity to drive reversible **chemical** electrode reactions, whereas running electricity through a room heater\'s nichrome coil merely heats the metal (**physical** glow)!',
        commonMistakes: [
          {
            mistake: 'Writing that burning an LPG gas stove or candle is purely physical because you don\'t see solid ash left behind.',
            correction: 'Combustion produces gaseous products ($\\text{CO}_2$ and $\\text{H}_2\\text{O}$ vapour) that float away unseen—any combustion/burning is strictly a **chemical change**!'
          }
        ]
      },
      {
        id: 'chem-ch2-t3',
        title: '3. Exothermic, Endothermic, Fast/Slow & Periodic Classifications',
        content: `Chemical and physical processes never happen without interacting with **energy** and **time**. Chemists therefore pair each change along useful operational scales.`,
        subtopics: [
          {
            subheading: '3.1 Exothermic vs Endothermic Changes & Energy Diagrams',
            body: `- **Exothermic Changes (Exo = Out, Heat Released $\\to +\\text{Heat}$ on RHS)**: Surroundings **warm up**!
  - Burning fuels ($\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O} + \\text{Heat}$)
  - Cellular **Respiration** ($\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{ATP/Heat}$)
  - **Slaking of quicklime** ($\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{Heat}$ — boils water in mason buckets!)
  - **Neutralisation** ($\\text{NaOH} + \\text{HCl} \\to \\text{NaCl} + \\text{H}_2\\text{O} + \\text{Heat}$); dissolving concentrated $\\text{H}_2\\text{SO}_4$ or $\\text{NaOH}$ pellets in water.
- **Endothermic Changes (Endo = In, Heat Absorbed $\\to +\\text{Heat}$ on LHS)**: Surroundings **cool down** or continuous burner heat is required!
  - **Photosynthesis** ($6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{Sunlight, Chlorophyll}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$)
  - Thermal decomposition of limestone ($\\text{CaCO}_3 + \\text{Heat} \\to \\text{CaO} + \\text{CO}_2$)
  - Dissolving **ammonium chloride ($\\text{NH}_4\\text{Cl}$)** or **potassium nitrate ($\\text{KNO}_3$)** in water (beaker feels icy cold—used in instant medical cold packs!).
  - Cooking nitrogen & oxygen inside lightning bolts ($\\text{N}_2 + \\text{O}_2 + \\text{Heat} \\to 2\\text{NO}$).`,
            keyPoint: 'Dissolving NaOH/CaO warms water (Exothermic); dissolving NH₄Cl/KNO₃ chills water (Endothermic)!'
          },
          {
            subheading: '3.2 Time, Desirability & Periodicity Classifications',
            body: `- **Fast vs Slow Changes**: Explosions, neutralisation, and $\\text{AgCl}$ precipitation occur in **milliseconds (fast)**; iron rusting, tooth decay, soil formation, and milk curdling take **hours to years (slow)**.
- **Desirable vs Undesirable**: Photosynthesis, milk-to-curd, compost manure (**desirable**); food spoilage, rusting bridges, forest fires (**undesirable**). (Cutting down trees: undesirable for forests, sometimes needed for paper—context matters!)
- **Periodic vs Non-Periodic**: Heartbeat, phases of the Moon, day-night, pendulum swings repeat at **fixed equal intervals (periodic)**; earthquakes, volcanic eruptions, lightning strikes, sneezing are **irregular (non-periodic)**.`,
            keyPoint: 'Notice how fermentation of grape juice into wine or dough rising with yeast is BOTH slow AND desirable (biochemical), whereas souring cooked dal is undesirable!'
          }
        ],
        definitions: [
          { term: 'Exothermic Reaction', definition: 'A reaction that liberates heat energy to the surroundings, causing temperature to rise.' },
          { term: 'Endothermic Reaction', definition: 'A reaction that absorbs heat energy from the surroundings or requires continuous heating to proceed.' },
          { term: 'Periodic Change', definition: 'A change that repeats itself faithfully at fixed, regular intervals of time (e.g., Earth\'s rotation, heartbeat).' }
        ],
        formulas: [
          { formula: 'CaO + H₂O → Ca(OH)₂ + Heat', explanation: 'Strongly exothermic slaking of quicklime.', unit: 'Exothermic' },
          { formula: 'CaCO₃ + Heat → CaO + CO₂↑', explanation: 'Endothermic thermal decomposition of limestone.', unit: 'Endothermic' },
          { formula: 'NH₄Cl(s) + H₂O → NH₄Cl(aq) − Heat', explanation: 'Endothermic dissolution chilling the beaker.', unit: 'Endothermic' }
        ],
        realLifeExample: 'Instant athletic **cold packs** used on twisted ankles hold dry ammonium nitrate/chloride crystals separated from a thin water pouch; squeezing snaps the inner pouch, triggering a strongly **endothermic dissolution** that turns icy cold within seconds without a freezer!',
        commonMistakes: [
          {
            mistake: 'Confusing **Respiration** (heat-releasing) with **Photosynthesis** (sunlight-absorbing).',
            correction: 'Photosynthesis absorbs sunlight energy (**Endothermic**); Respiration oxidises glucose releasing vital body warmth & energy (**Exothermic**).'
          }
        ]
      },
      {
        id: 'chem-ch2-t4',
        title: '4. Conditions Favouring Chemical Reactions & Rust Prevention',
        content: `Why do dry baking soda and citric acid crystals sit calmly mixed inside a dry packet for months, yet erupt furiously into fizzing foam the instant you pour in one spoonful of water? Chemical bonds only break and rearrange when reactant particles **collide with sufficient energy under favourable conditions**.`,
        subtopics: [
          {
            subheading: '4.1 Seven Conditions Triggering Chemical Change',
            body: `1. **Close Physical Contact**: Potassium iodide ($\\text{KI}$) and mercuric chloride ($\\text{HgCl}_2$) ground dry together yield scarlet $\\text{HgI}_2$.
2. **Solution State (Water Solvent)**: Tartaric acid + sodium bicarbonate (baking powder) only react once dissolved in water so ions move freely to collide.
3. **Heat (Thermal Energy)**: Cooking food, splitting limestone ($\\text{CaCO}_3$), burning coal.
4. **Light (Photochemical Reactions)**: Photosynthesis in leaves; darkening of silver bromide ($\\text{2AgBr} \\xrightarrow{\\text{Light}} 2\\text{Ag} + \\text{Br}_2$) on camera films; explosive $\\text{H}_2 + \\text{Cl}_2$ in bright sunlight!
5. **Electricity (Electrolysis)**: Splitting acidulated water into hydrogen and oxygen ($\\text{2H}_2\\text{O} \\xrightarrow{\\text{Electric current}} 2\\text{H}_2\\uparrow + \\text{O}_2\\uparrow$).
6. **High Pressure**: Manufacturing ammonia via Haber's process ($\\text{N}_2 + 3\\text{H}_2 \\xrightarrow{200\\text{ atm}} 2\\text{NH}_3$).
7. **Catalyst**: A chemical helper altering reaction rate without being consumed—e.g., **Manganese dioxide ($\\text{MnO}_2$)** makes hydrogen peroxide ($\\text{H}_2\\text{O}_2$) or $\\text{KClO}_3$ release oxygen rapidly at lower heat!`,
            keyPoint: 'Silver bromide (AgBr) is stored in dark amber bottles specifically to block sunlight from decomposing it!'
          },
          {
            subheading: '4.2 Rusting of Iron: Chemistry & Prevention Methods',
            body: `**Rusting** is the slow oxidation of iron in the presence of **BOTH oxygen (air) AND moisture (water)** to form flaky reddish-brown hydrated ferric oxide:
$$4\\text{Fe} + 3\\text{O}_2 + 2x\\text{H}_2\\text{O} \\longrightarrow 2\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$$
**Prevention**: Block oxygen/water contact via **oiling/greasing**, **painting**, **galvanisation** (coating with more-reactive **zinc** metal—zinc protects even if scratched!), **tin/chrome plating**, or making **stainless steel** (alloying Fe with Chromium & Nickel).`,
            keyPoint: 'Rusting requires BOTH O₂ and H₂O (moisture). Removing either stops rusting cold!'
          }
        ],
        definitions: [
          { term: 'Catalyst', definition: 'A substance that alters (usually speeds up) the rate of a chemical reaction without undergoing permanent chemical change itself.' },
          { term: 'Photochemical Reaction', definition: 'A chemical reaction triggered by absorption of light energy (e.g., photosynthesis, AgBr decomposition).' },
          { term: 'Galvanisation', definition: 'Coating iron or steel articles with a thin protective layer of zinc to prevent rusting.' }
        ],
        realLifeExample: 'Water pipes, rooftop tin sheets, and highway guardrails are **galvanised** with shiny zinc coating; even when chipped by stones, zinc preferentially corrodes instead of the iron beneath (**sacrificial protection**)!',
        commonMistakes: [
          {
            mistake: 'Writing that dry oxygen alone or pure air-free boiled water causes iron nails to rust.',
            correction: 'Dry air ($\\text{CaCl}_2$ drying tube) OR oxygen-free boiled water sealed under an oil layer will **NOT** rust iron—BOTH oxygen and water must be present simultaneously!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Physical Change', definition: 'Temporary, reversible change with no new chemical substance formed.', category: 'Changes' },
      { term: 'Chemical Change', definition: 'Permanent change creating new substance(s) with altered formula and properties.', category: 'Changes' },
      { term: 'Exothermic Change', definition: 'Process releasing heat energy into surroundings (+Heat on product side).', category: 'Energetics' },
      { term: 'Endothermic Change', definition: 'Process absorbing heat energy from surroundings (+Heat on reactant side).', category: 'Energetics' },
      { term: 'Periodic Change', definition: 'Change repeating predictably at regular time intervals.', category: 'Time' },
      { term: 'Photochemical Reaction', definition: 'Reaction initiated or driven by light (photosynthesis, 2AgBr → 2Ag + Br₂).', category: 'Conditions' },
      { term: 'Catalyst', definition: 'Agent accelerating a chemical reaction while remaining chemically unchanged at the end.', category: 'Conditions' },
      { term: 'Rusting', definition: 'Slow conversion of iron into flaky $\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$ needing both $\\text{O}_2$ and moisture.', category: 'Oxidation' },
      { term: 'Galvanisation', definition: 'Protective coating of zinc over iron to prevent rusting.', category: 'Prevention' },
      { term: 'Slaking of Lime', definition: 'Strongly exothermic reaction $\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2$.', category: 'Reactions' }
    ],
    formulaSheet: [
      { title: 'Combustion of Magnesium', expression: '2Mg + O₂ → 2MgO + Heat + Light', meaning: 'Chemical, irreversible, exothermic synthesis' },
      { title: 'Slaking of Quicklime', expression: 'CaO + H₂O → Ca(OH)₂ + Heat', meaning: 'Exothermic chemical formation of slaked lime' },
      { title: 'Photosynthesis', expression: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (Sunlight)', meaning: 'Endothermic photochemical food synthesis' },
      { title: 'Respiration', expression: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy', meaning: 'Exothermic biochemical oxidation' },
      { title: 'Rusting of Iron', expression: '4Fe + 3O₂ + xH₂O → 2Fe₂O₃·xH₂O', meaning: 'Slow undesirable oxidation needing air & moisture' },
      { title: 'Electrolysis of Water', expression: '2H₂O → 2H₂↑ + O₂↑ (Electric current)', meaning: 'Endothermic electrical decomposition' }
    ],
    comparisonTables: [
      {
        title: 'Exothermic vs Endothermic Processes',
        headers: ['Feature', 'Exothermic', 'Endothermic'],
        rows: [
          ['Heat Flow', 'Heat **released** out into surroundings', 'Heat **absorbed** in from surroundings'],
          ['Container Feel', 'Beaker grows **warm / hot**', 'Beaker feels **cool / cold**'],
          ['Equation Position', '$+\\text{Heat}$ written on **RHS (Products)**', '$+\\text{Heat}$ written on **LHS (Reactants)**'],
          ['Chemical Examples', 'Burning fuels, Respiration, $\\text{CaO} + \\text{H}_2\\text{O}$, Neutralisation', 'Photosynthesis, $\\text{CaCO}_3 \\to \\text{CaO} + \\text{CO}_2$, $\\text{NH}_4\\text{Cl}$ in water']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'chem2-ex1',
        question: 'Classify each as Physical or Chemical change and justify briefly: (a) Tearing paper, (b) Burning paper, (c) Melting butter, (d) Souring of milk.',
        steps: [
          '(a) Tearing paper: **Physical** — cellulose composition stays unchanged; only shape/size alters.',
          '(b) Burning paper: **Chemical** — cellulose combusts into new substances (carbon ash, $\\text{CO}_2$, water vapour).',
          '(c) Melting butter: **Physical** — reversible solid-to-liquid state change; cooling restores butter unchanged.',
          '(d) Souring of milk: **Chemical** — bacteria turn lactose permanently into lactic acid, curdling casein protein.'
        ],
        finalAnswer: '(a) Physical; (b) Chemical; (c) Physical; (d) Chemical.',
        keyRule: 'Always test whether brand-new chemical molecules with new formulas formed.'
      },
      {
        id: 'chem2-ex2',
        question: 'Explain why burning a wax candle exhibits BOTH a physical change and a chemical change simultaneously.',
        steps: [
          '1. Heat from the flame melts solid paraffin wax near the wick into liquid wax that runs down and solidifies back—a reversible **physical change**.',
          '2. Wax vapour drawn up the wick reacts chemically with atmospheric oxygen to form carbon dioxide gas, water vapour, soot, heat, and light—an irreversible **chemical change**.'
        ],
        finalAnswer: 'Wax melting/re-solidifying = Physical; Wax vapour combustion into CO₂ & H₂O = Chemical.',
        keyRule: 'A lit candle is the textbook ICSE example of simultaneous physical and chemical changes.'
      },
      {
        id: 'chem2-ex3',
        question: 'Contrast the heating of a Nichrome toaster coil with the heating of a Magnesium ribbon in air.',
        steps: [
          'Heating Nichrome coil: Metal glows bright red-orange while current flows; once switched off, it cools back into exact unchanged Nichrome wire (**Physical change**).',
          'Heating Magnesium ribbon: Metal ignites cleanly with dazzling white flame forming crumbly white magnesium oxide powder ($2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$) that cannot cool back to metal (**Chemical change**).'
        ],
        finalAnswer: 'Nichrome glowing = Physical; Magnesium burning = Chemical.',
        keyRule: 'Temporary incandescent glow without oxidation is physical; permanent ash formation is chemical.'
      },
      {
        id: 'chem2-ex4',
        question: 'Two clear beakers of water sit on a lab bench. You stir 10 g NaOH pellets into Beaker A and 10 g NH₄Cl crystals into Beaker B. What thermometer change do you observe in each?',
        steps: [
          'Beaker A (NaOH dissolving): Temperature **rises sharply** (feels warm)—**Exothermic change**.',
          'Beaker B (NH₄Cl dissolving): Temperature **drops sharply** (feels cold)—**Endothermic change**.'
        ],
        finalAnswer: 'Beaker A warms up (Exothermic); Beaker B cools down (Endothermic).',
        keyRule: 'Exothermic warms surroundings; Endothermic chills surroundings.'
      },
      {
        id: 'chem2-ex5',
        question: 'Why must dry baking powder (NaHCO₃ + solid tartaric acid) stay inside airtight moisture-proof tins, yet fizz briskly the moment milk or water is added to cake batter?',
        steps: [
          'Solid crystals held dry cannot let ions mingle cleanly.',
          'Water dissolves both solids into free-moving **ions** (**solution state condition**), triggering rapid neutralisation that releases $\\text{CO}_2$ gas bubbles to fluff up the cake!'
        ],
        finalAnswer: 'Reaction requires the aqueous solution state so acid and bicarbonate ions collide freely.',
        keyRule: 'Solution state is a classic trigger condition for ionic chemical changes.'
      },
      {
        id: 'chem2-ex6',
        question: 'Write balanced equations for: (a) Photosynthesis, (b) Slaking of quicklime, (c) Photo-decomposition of silver bromide.',
        steps: [
          '(a) $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{Sunlight, Chlorophyll}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$.',
          '(b) $\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{Heat}$.',
          '(c) $2\\text{AgBr} \\xrightarrow{\\text{Sunlight}} 2\\text{Ag} + \\text{Br}_2$.'
        ],
        finalAnswer: 'All three balanced chemical equations verified.',
        keyRule: 'Count every element on LHS and RHS carefully.'
      },
      {
        id: 'chem2-ex7',
        question: 'A student places three iron nails in three corked tubes: Tube 1 has tap water + air; Tube 2 has boiled distilled water + top oil layer; Tube 3 has dry air + anhydrous CaCl₂. Predict which nail rusts after 5 days.',
        steps: [
          'Tube 1 has **both oxygen and water** $\\implies$ **Nail 1 rusts heavily**.',
          'Tube 2 boiled out dissolved oxygen and oil blocks air entry (water only) $\\implies$ **No rust**.',
          'Tube 3 dry $\\text{CaCl}_2$ absorbs all moisture (air only) $\\implies$ **No rust**.'
        ],
        finalAnswer: 'Only the nail in Tube 1 rusts, proving rusting requires BOTH air (O₂) and moisture.',
        keyRule: 'Standard 3-test-tube rusting proof in ICSE Chemistry.'
      },
      {
        id: 'chem2-ex8',
        question: 'White zinc oxide powder turns bright yellow when heated in a dry test tube, then turns snowy white again upon cooling. Is this a physical or chemical change?',
        steps: [
          'No oxygen escapes, no gas forms, and no new chemical formula is produced—only minor reversible crystal lattice defect spacing alters light absorption while hot.',
          'Cooling cleanly restores the identical white $\\text{ZnO}$.'
        ],
        finalAnswer: 'Physical change (reversible colour shift with temperature without composition change).',
        keyRule: 'Heating ZnO is a classic reversible physical colour change.'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'chem2-e1',
          question: 'Classify as Exothermic or Endothermic: (a) Burning of coal, (b) Melting of ice, (c) Respiration, (d) Photosynthesis.',
          solutionSteps: ['(a) Exothermic; (b) Endothermic; (c) Exothermic; (d) Endothermic.'],
          finalAnswer: '(a) Exo, (b) Endo, (c) Exo, (d) Endo',
          marks: 2
        },
        {
          id: 'chem2-e2',
          question: 'Name two conditions strictly essential for the rusting of iron.',
          solutionSteps: ['Presence of both Oxygen (air) and Moisture (water).'],
          finalAnswer: 'Oxygen and Water (Moisture)',
          marks: 2
        },
        {
          id: 'chem2-e3',
          question: 'What is galvanisation? Which metal coats the iron?',
          solutionSteps: ['Coating iron or steel sheets with a thin protective layer of **Zinc** metal to stop rusting.'],
          finalAnswer: 'Coating iron with Zinc.',
          marks: 2
        },
        {
          id: 'chem2-e4',
          question: 'Give two examples each of Fast changes and Slow changes.',
          solutionSteps: ['Fast: Striking a match, fireworks explosion. Slow: Rusting iron, seed germination.'],
          finalAnswer: 'Fast: combustion/explosion; Slow: rusting/plant growth.',
          marks: 2
        }
      ],
      medium: [
        {
          id: 'chem2-m1',
          question: 'Differentiate Physical Change and Chemical Change on four clear points.',
          solutionSteps: [
            '1. New substance: No (Physical) vs Yes (Chemical).',
            '2. Reversibility: Easily reversed vs normally irreversible.',
            '3. Composition: Unchanged vs completely changed.',
            '4. Net Energy: Minimal vs significant heat/light exchange.'
          ],
          finalAnswer: '4-point contrast completed.',
          marks: 3
        },
        {
          id: 'chem2-m2',
          question: 'Explain why crystallisation of copper sulphate from hot saturated solution is a physical change even though large blue crystals appear.',
          solutionSteps: [
            'The dissolved salt ($\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$) simply separates from water back into solid crystals.',
            'No new substance is created; dissolving the crystals back in water restores the exact original solution.'
          ],
          finalAnswer: 'Pure physical separation without altering CuSO₄ chemical identity.',
          marks: 3
        },
        {
          id: 'chem2-m3',
          question: 'Why are photographic silver salts (AgCl / AgBr) kept stored inside dark brown/black bottles?',
          solutionSteps: [
            'Silver halides undergo **photochemical decomposition** when exposed to sunlight ($2\\text{AgBr} \\to 2\\text{Ag} + \\text{Br}_2$).',
            'Dark amber bottles block ultraviolet/visible light to prevent spoilage.'
          ],
          finalAnswer: 'Prevents light-triggered photochemical decomposition.',
          marks: 3
        },
        {
          id: 'chem2-m4',
          question: 'Compare desirable vs undesirable changes with one example of a change that can be both depending on context.',
          solutionSteps: [
            'Desirable: ripening fruit, baking bread. Undesirable: souring milk, iron rusting.',
            'Context example: **Fermentation / Combustion** — controlled fire cooks food (desirable), wild forest fire destroys habitats (undesirable).'
          ],
          finalAnswer: 'Context-dependent combustion / fermentation explained.',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'chem2-d1',
          question: 'When a copper wire is heated strongly in air, its gleaming pink surface turns black, and it does NOT turn pink again on cooling. Contrast this with heating a platinum wire.',
          solutionSteps: [
            'Platinum is an unreactive noble metal: heating only makes it glow (**physical change**), cooling restores identical shiny platinum.',
            'Copper reacts chemically with atmospheric oxygen at high heat ($2\\text{Cu} + \\text{O}_2 \\to 2\\text{CuO}$), permanently forming black copper(II) oxide (**chemical change**).'
          ],
          finalAnswer: 'Platinum heating = Physical; Copper heating = Chemical oxidation to black CuO.',
          marks: 4
        },
        {
          id: 'chem2-d2',
          question: 'During the ripening of a green raw mango into a sweet yellow ripe mango, list three changes occurring and prove it is an irreversible chemical change.',
          solutionSteps: [
            '1. Green chlorophyll degrades into yellow/orange carotenoids (colour shift).',
            '2. Sour organic acids & starch convert enzymatically into sweet fructose sugars (new substances!).',
            '3. Softening pectin & aromatic esters develop. No physical cooling or drying can turn a sweet ripe mango back green and raw.'
          ],
          finalAnswer: 'Enzymatic sugar synthesis, pigment conversion, and ester aroma prove permanent chemical change.',
          marks: 4
        },
        {
          id: 'chem2-d3',
          question: 'How does slaking of quicklime prove BOTH that a new substance formed AND that chemical changes involve energy transfer?',
          solutionSteps: [
            'Water poured onto chalky white CaO reacts vigorously: $\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{Heat}$.',
            'Massive heat boils leftover water (**exothermic**), and the new milky slaked lime product turns red litmus blue strongly and settles into a distinct crystal powder.'
          ],
          finalAnswer: 'Heat release + formation of alkaline Ca(OH)₂ prove chemical exothermic change.',
          marks: 4
        },
        {
          id: 'chem2-d4',
          question: 'Why does zinc galvanisation still protect an iron bridge girder from rusting even after the zinc coat gets scratched slightly?',
          solutionSteps: [
            'Zinc is **more chemically reactive** than iron.',
            'In moist air, exposed zinc reacts preferentially (**sacrificial anode**) instead of iron, shielding the scratched steel beneath until all nearby zinc wears away.'
          ],
          finalAnswer: 'More reactive zinc sacrifices itself electrochemically to protect iron.',
          marks: 4
        }
      ]
    },
    practiceWorksheet: {
      title: 'Chemistry Chapter 2 Worksheet: Physical & Chemical Changes (30 Marks)',
      instructions: 'Write balanced equations and clear molecular justifications.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Classification (1 × 5 = 5 Marks)',
          items: [
            '1. Melting of wax: Physical or Chemical?',
            '2. Rusting of iron gate: Physical or Chemical?',
            '3. Dissolving ammonium chloride in water: Exothermic or Endothermic?',
            '4. Pendulum swinging: Periodic or Non-periodic?',
            '5. Name the catalyst used to decompose potassium chlorate fast.'
          ]
        },
        {
          sectionTitle: 'Section B: Reasoning Questions (2 × 4 = 8 Marks)',
          items: [
            '6. Why is digestion of food classified as a chemical change?',
            '7. Why does milk turn sour faster on a hot July afternoon than inside a fridge?',
            '8. Give two examples of chemical reactions requiring electricity or sunlight.',
            '9. Why does a glowing electric bulb filament represent a physical change?'
          ]
        },
        {
          sectionTitle: 'Section C: Reactions & Conditions (3 × 4 = 12 Marks)',
          items: [
            '10. Write balanced equations for (a) Combustion of Mg and (b) Neutralisation of HCl by NaOH.',
            '11. State three ways to prevent iron bridges and bicycle chains from rusting.',
            '12. Contrast Exothermic vs Endothermic reactions with one chemical equation each.',
            '13. Explain why dry baking soda + dry citric acid crystals do not react until water drops in.'
          ]
        },
        {
          sectionTitle: 'Section D: Dual Change Analysis (5 Marks)',
          items: [
            '14. Explain clearly with examples how BOTH physical and chemical changes happen together when (a) lighting a candle and (b) slaking quicklime or burning LPG.'
          ]
        }
      ],
      answerKey: [
        '1. Physical.',
        '2. Chemical.',
        '3. Endothermic.',
        '4. Periodic.',
        '5. Manganese dioxide (MnO₂).',
        '6. Enzymes permanently break complex starch, proteins & fats into brand-new absorbable glucose, amino acids & fatty acids.',
        '7. Higher summer warmth accelerates Lactobacillus bacterial fermentation forming lactic acid rapidly.',
        '8. Electricity: Electrolysis of water (2H₂O → 2H₂ + O₂); Sunlight: Photosynthesis (or 2AgBr → 2Ag + Br₂).',
        '9. Tungsten heats white-hot and returns chemically intact once current switches off; no new compound forms.',
        '10. (a) 2Mg + O₂ → 2MgO; (b) NaOH + HCl → NaCl + H₂O.',
        '11. Painting, oiling/greasing, and zinc galvanisation (or alloying into stainless steel).',
        '12. Exothermic releases heat (CaO + H₂O → Ca(OH)₂ + Heat); Endothermic absorbs heat (CaCO₃ + Heat → CaO + CO₂).',
        '13. Water dissolves solids into mobile ions (**solution state**), enabling collisions.',
        '14. Candle: wax melting/dripping = physical; wax vapour burning to CO₂ + H₂O = chemical. Quicklime: steam escaping/evaporating = physical; CaO + H₂O → Ca(OH)₂ = chemical.'
      ]
    },
    examPreparationTips: [
      'Prepare a 2-column chart of **tricky items**: Heating ZnO (Physical), Heating Pt wire (Physical), Heating Cu wire (Chemical), Burning Candle (Both), Dissolving NH₄Cl (Endothermic Physical), Dissolving CaO (Exothermic Chemical).',
      'Always write the balancing coefficients in equations like $2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$ and $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\to \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$.'
    ],
    chapterSummary: [
      'Physical changes are reversible alterations in state/form with no new chemical substance formed.',
      'Chemical changes permanently form new substances via atomic bond rearrangement while strictly conserving total mass.',
      'Burning a candle displays both physical wax melting and chemical combustion simultaneously.',
      'Exothermic processes release heat (combustion, respiration, slaking lime); Endothermic processes absorb heat (photosynthesis, limestone heating, dissolving NH₄Cl).',
      'Chemical changes are triggered by contact, solution state, heat, light, electricity, pressure, or catalysts; rusting needs both oxygen and moisture.'
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Why is the burning of a magnesium ribbon a chemical change whereas the glowing of a platinum wire is a physical change?',
        answer: 'Burning magnesium combines chemically with oxygen ($2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$) to produce permanent white basic magnesium oxide ash. Platinum wire simply emits heat and light while electric/flame heating lasts and cools completely back to identical silver metal.',
        type: 'Short Answer'
      },
      {
        question: 'Why is respiration classified as an exothermic chemical change while photosynthesis is endothermic?',
        answer: 'Respiration oxidises glucose with oxygen inside cells to release $\\text{CO}_2$, water, and vital energy/warmth (exothermic). Conversely, photosynthesis continuously absorbs solar radiant energy via chlorophyll to build glucose from $\\text{CO}_2$ and water (endothermic).',
        type: 'Reasoning'
      },
      {
        question: 'Distinguish between Physical and Chemical changes across five parameters.',
        answer: '1. New substance: None in physical; formed in chemical. 2. Reversibility: Easily reversed physically vs irreversible. 3. Composition: Unchanged vs new chemical formula. 4. Net Energy: Minimal/temporary vs substantial heat/light exchange. 5. Examples: Melting ice vs rusting iron.',
        type: 'Long Answer'
      },
      {
        question: 'State the conditions required for rusting of iron and explain two prevention methods.',
        answer: 'Rusting requires **both atmospheric oxygen and moisture (water)**. Prevention: **Painting/Oiling** creates a physical barrier shutting out air and water; **Galvanisation** coats iron with more reactive **zinc**, which shields iron even across minor scratches.',
        type: 'Long Answer'
      },
      {
        question: 'Why does the temperature drop when potassium nitrate ($\\text{KNO}_3$) or ammonium chloride ($\\text{NH}_4\\text{Cl}$) dissolves in water?',
        answer: 'Breaking apart the ionic crystal lattice absorbs more heat from the surrounding water than is released when water molecules hydrate the separated ions—resulting in an **endothermic dissolution** that chills the beaker.',
        type: 'Reasoning'
      },
      {
        question: 'What is a photochemical reaction? Give two examples.',
        answer: 'A chemical reaction driven by absorbed light energy: (1) **Photosynthesis** in green leaves; (2) **Photographic silver bromide decomposition** ($2\\text{AgBr} \\xrightarrow{\\text{Light}} 2\\text{Ag} + \\text{Br}_2$).',
        type: 'Short Answer'
      },
      {
        question: 'Why is the boiling of an egg a chemical change whereas boiling plain water is a physical change?',
        answer: 'Boiling water merely increases spacing between intact $\\text{H}_2\\text{O}$ molecules (cooling condenses it right back to water). Boiling an egg permanently unfolds and cross-links **albumin protein chains** into a new solid rubbery structure that can never turn liquid raw egg again!',
        type: 'HOTS'
      },
      {
        question: 'When 100 g of water freezes into ice, 33,600 J of heat leaves to the freezer. Is freezing of water an exothermic physical change?',
        answer: 'Yes! Latent heat is released outward as liquid water crystallises into solid ice (exothermic heat release), yet no new chemical compound forms ($\\text{H}_2\\text{O}$ stays $\\text{H}_2\\text{O}$), so it is a **physical change**.',
        type: 'HOTS'
      }
    ],
    practiceExercises: [
      {
        question: 'Identify Physical vs Chemical: (i) Sublimation of iodine, (ii) Curdling of milk, (iii) Magnetising steel, (iv) Digestion of food.',
        hint: 'Ask whether a new chemical formula forms.',
        answerGuide: '(i) Physical, (ii) Chemical, (iii) Physical, (iv) Chemical.'
      },
      {
        question: 'Write the chemical formula of rust and name its two required reactants besides iron.',
        hint: 'Hydrated iron(III) oxide.',
        answerGuide: 'Fe₂O₃·xH₂O; requires Oxygen and Water.'
      },
      {
        question: 'Why does an explosion of hydrogen + chlorine gas happen quietly in the dark but detonate in bright sunlight?',
        hint: 'Condition: Light.',
        answerGuide: 'It is a photochemical reaction initiated rapidly by ultraviolet/visible light energy.'
      }
    ]
  },
  quizQuestions: [
    {
      id: 'chem2-q1',
      type: 'mcq',
      question: 'Which of the following is a permanent chemical change?',
      options: ['Sublimation of camphor', 'Rusting of iron', 'Melting of ice', 'Glowing of an electric bulb'],
      correctAnswer: 'Rusting of iron',
      explanation: 'Rusting creates hydrated iron(III) oxide (Fe₂O₃·xH₂O) and cannot be reversed physically.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem2-q2',
      type: 'true_false',
      question: 'Mass is destroyed when wood burns completely into light grey ash.',
      correctAnswer: false,
      explanation: 'Missing wood mass escapes into air as invisible CO₂ gas and water vapour; total mass remains strictly conserved.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem2-q3',
      type: 'mcq',
      question: 'Which process demonstrates BOTH a physical change and a chemical change occurring simultaneously?',
      options: ['Boiling water in a kettle', 'Burning of a wax candle', 'Stretching a rubber band', 'Freezing mercury'],
      correctAnswer: 'Burning of a wax candle',
      explanation: 'Solid wax melting/dripping is physical; wax vapour burning into CO₂ and H₂O is chemical.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem2-q4',
      type: 'mcq',
      question: 'Adding water to quicklime (CaO) produces slaked lime with brisk heat evolution. This change is:',
      options: ['Physical & Endothermic', 'Chemical & Endothermic', 'Chemical & Exothermic', 'Physical & Exothermic'],
      correctAnswer: 'Chemical & Exothermic',
      explanation: 'CaO + H₂O → Ca(OH)₂ + Heat forms a new compound while releasing large thermal energy.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem2-q5',
      type: 'mcq',
      question: 'Dissolving solid ammonium chloride (NH₄Cl) in water causes the beaker temperature to drop sharply because it is:',
      options: ['Exothermic', 'Endothermic', 'Photochemical', 'Combustion'],
      correctAnswer: 'Endothermic',
      explanation: 'NH₄Cl dissolution absorbs heat energy from the water, cooling the surroundings.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem2-q6',
      type: 'mcq',
      question: 'Which metal is coated onto iron during GALVANISATION to prevent rusting?',
      options: ['Copper', 'Zinc', 'Silver', 'Lead'],
      correctAnswer: 'Zinc',
      explanation: 'Zinc coating protects iron both as a barrier and sacrificially.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem2-q7',
      type: 'mcq',
      question: 'Heating white zinc oxide (ZnO) turns it yellow while hot and back to white on cooling. This is a:',
      options: ['Chemical change', 'Physical change', 'Combustion', 'Photochemical reaction'],
      correctAnswer: 'Physical change',
      explanation: 'No new substance forms and colour reverses cleanly on cooling.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem2-q8',
      type: 'fill_blank',
      question: 'Photosynthesis is an ______ photochemical reaction because green plants absorb sunlight energy.',
      correctAnswer: 'endothermic',
      explanation: 'Plants absorb continuous solar energy to convert CO₂ and H₂O into glucose.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem2-q9',
      type: 'true_false',
      question: 'Cutting a wooden log into fine sawdust is a chemical change because it cannot be glued back into a log.',
      correctAnswer: false,
      explanation: 'Sawdust is chemically identical cellulose wood—no new substance formed, so it is a physical change.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem2-q10',
      type: 'mcq',
      question: 'Silver bromide (AgBr) is stored in dark amber glass bottles to prevent:',
      options: ['Sublimation', 'Rusting', 'Photochemical decomposition in sunlight', 'Freezing'],
      correctAnswer: 'Photochemical decomposition in sunlight',
      explanation: 'Sunlight decomposes AgBr into grey silver metal and bromine gas (2AgBr → 2Ag + Br₂).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem2-q11',
      type: 'mcq',
      question: 'A substance that speeds up a chemical reaction without being consumed at the end is called a:',
      options: ['Reactant', 'Precipitate', 'Catalyst', 'Solute'],
      correctAnswer: 'Catalyst',
      explanation: 'Catalysts (like MnO₂) accelerate reaction rates without undergoing permanent chemical change.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem2-q12',
      type: 'hots',
      question: 'Iron nails sealed inside a tube containing freshly BOILED distilled water topped with a layer of oil will NOT rust because:',
      options: ['Oil dissolves iron', 'Boiling drove out dissolved oxygen and oil blocks air entry', 'Distilled water is too pure to wet iron', 'Nails need sunlight to rust'],
      correctAnswer: 'Boiling drove out dissolved oxygen and oil blocks air entry',
      explanation: 'Rusting strictly requires BOTH water AND oxygen; eliminating oxygen prevents rust.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'fc-c2',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'Decisive test distinguishing Physical vs Chemical Change?',
      back: 'Whether one or more NEW chemical substances with new formulas/properties are formed (Chemical = Yes; Physical = No).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c2-2',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'Why is burning a candle BOTH a physical and chemical change?',
      back: 'Physical: solid wax melts and drips unchanged. Chemical: wax vapour burns with O₂ forming CO₂ + H₂O.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c2-3',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'Heating Zinc Oxide vs Heating Platinum vs Heating Magnesium?',
      back: 'ZnO (yellow hot → white cool) & Pt wire (glows → cools) are PHYSICAL; Mg ribbon burning (2Mg + O₂ → 2MgO) is CHEMICAL.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c2-4',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'Define Exothermic vs Endothermic with one example each.',
      back: 'Exothermic releases heat (CaO + H₂O → Ca(OH)₂ + Heat, Respiration); Endothermic absorbs heat (Photosynthesis, NH₄Cl in water).',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c2-5',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'Chemical equation & two essential conditions for Iron Rusting?',
      back: '4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O. Requires BOTH Oxygen (air) and Moisture (water).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c2-6',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'What is Galvanisation?',
      back: 'Coating iron/steel with a protective layer of Zinc (Zn), which prevents rust even across small scratches.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c2-7',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'Give two Photochemical Reactions (light-driven).',
      back: 'Photosynthesis (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂) and 2AgBr → 2Ag + Br₂ (why AgBr sits in dark amber bottles).',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'fc-c2-8',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'Role of a Catalyst in a chemical reaction?',
      back: 'Changes (usually increases) reaction speed without undergoing permanent chemical change itself (e.g., MnO₂).',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'fc-c2-9',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'Is crystallisation of sugar or copper sulphate a physical or chemical change?',
      back: 'Physical change: dissolved solid simply crystallises back out with identical chemical formula.',
      category: 'Scientific Law',
      importance: 'Standard'
    },
    {
      id: 'fc-c2-10',
      subjectId: 'chemistry',
      chapterId: 'chem-ch2',
      chapterTitle: 'Physical and Chemical Changes',
      front: 'Why does breaking glass count as Physical even though you cannot reverse it easily?',
      back: 'Broken shards still consist of identical SiO₂ glass molecules—no new substance formed.',
      category: 'Scientific Law',
      importance: 'Standard'
    }
  ]
};
