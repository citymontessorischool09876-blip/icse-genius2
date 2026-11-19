import { Chapter } from '../../types';

export const CHEM_CH6_REACTIONS: Chapter = {
  id: 'chem-reactions',
  subjectId: 'chemistry',
  chapterNumber: 6,
  title: 'Chemical Reactions',
  subtitle: 'Four major reaction types (Combination, Decomposition—thermal/electrolytic/photolytic, Single Displacement & Metal Activity Series, Double Displacement—precipitation & neutralisation), catalysis/enzymes, and Metallic vs Non-metallic Oxides (Acidic, Basic, Amphoteric, Neutral)',
  term: 'Annual',
  estimatedMinutes: 95,
  notes: {
    introduction: `Drop a gleaming iron nail into a bright sky-blue beaker of copper(II) sulphate solution, wait ten minutes, and watch chemistry perform a quiet swap: the blue solution fades to pale **apple-green**, while the iron nail wears a brand-new coating of **pink-red copper**! Heat emerald-green **copper(II) carbonate** crystals in a dry test tube and watch them crumble into jet-black copper(II) oxide while colourless carbon dioxide gas bubbles through limewater, turning it milky white!

Millions of chemical reactions power everything from steel smelting and antacid tablets to human digestion and vehicle airbags—yet nearly all inorganic reactions fall neatly into **four master patterns**: **Combination ($A + B \\to AB$)**, **Decomposition ($AB \\to A + B$)**, **Displacement ($A + BC \\to AC + B$)**, and **Double Displacement ($AB + CD \\to AD + CB$)**!

In Chapter 6 of Class 8 ICSE Chemistry (*Gem's Chemistry / Concise Chemistry*), we master all four reaction classes with balanced equations and vivid laboratory colour observations, use the **Metal Activity Series** (**K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au**) to predict displacement winners instantly, distinguish **Thermal, Electrolytic, and Photolytic Decomposition**, compare **Precipitation vs Neutralisation**, explore **Catalysts & Biological Enzymes**, and classify **Acidic, Basic, Amphoteric, and Neutral Oxides**!`,
    learningObjectives: [
      'Identify, write balanced equations for, and give laboratory observations for all four major reaction types: Combination, Decomposition, Displacement, and Double Displacement.',
      'Differentiate the three energy drivers of Decomposition reactions: Thermal (Δ), Electrolytic (electricity), and Photolytic (sunlight), plus Thermal Dissociation (reversible).',
      'Apply the Metal Activity Series (K down to Au) to predict whether a given metal displaces Hydrogen from dilute acid or displaces another metal from its salt solution.',
      'Explain Double Displacement sub-types—Precipitation (AgCl↓, BaSO₄↓) and Acid-Base Neutralisation—with everyday applications (antacids, soil pH, wasp/bee stings).',
      'Define Catalyst, Positive vs Negative Catalyst (inhibitor), Promoter, and Enzyme with industrial & biological examples (MnO₂, Fe in Haber, pepsin/amylase).',
      'Classify Oxides into Basic (Na₂O, MgO, CuO), Acidic (CO₂, SO₂, P₂O₅), Amphoteric (ZnO, Al₂O₃, PbO), and Neutral (CO, NO, H₂O) with equations.'
    ],
    topics: [
      {
        id: 'chem-ch6-t1',
        title: '1. Combination (Synthesis) & Decomposition Reactions',
        content: `Think of **Combination** and **Decomposition** as exact opposites: Combination welds simple pieces into a single compound; Decomposition breaks one compound apart into simpler substances using heat, light, or electricity!`,
        subtopics: [
          {
            subheading: '1.1 Combination / Direct Synthesis ($A + B \\to AB$)',
            body: `Two or more elements or simpler compounds join to form **one single complex product** (generally **exothermic**):
- **Element + Element**:
  - $2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$ (dazzling white flame $\\to$ white ash)
  - $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$
  - $\\text{Fe} + \\text{S} \\xrightarrow{\\Delta} \\text{FeS}$ (black iron sulphide)
  - $\\text{N}_2 + 3\\text{H}_2 \\xrightarrow{\\text{Fe catalyst, 450°C}} 2\\text{NH}_3$ (Haber's ammonia synthesis)
- **Compound + Element / Compound**:
  - $\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{Heat}$ (Quicklime $\\to$ Slaked lime)
  - $\\text{NH}_3\\text{ (g)} + \\text{HCl}\\text{ (g)} \\to \\text{NH}_4\\text{Cl}\\text{ (s)}$ (dense white fumes)`,
            keyPoint: 'Combination ALWAYS has TWO or more reactants on the left and ONLY ONE single product on the right!'
          },
          {
            subheading: '1.2 Decomposition ($AB \\to A + B$): Thermal, Electrolytic & Photolytic',
            body: `A single compound breaks down into two or more simpler substances (**endothermic**—energy must be supplied!):
1. **Thermal Decomposition (by Heat $\\Delta$)**:
   - **Calcium carbonate**: $\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2\\uparrow$ (makes cement lime)
   - **Copper(II) carbonate**: $\\text{CuCO}_3\\text{ (green)} \\xrightarrow{\\Delta} \\text{CuO}\\text{ (black)} + \\text{CO}_2\\uparrow$
   - **Lead(II) nitrate**: $2\\text{Pb(NO}_3)_2\\text{ (white)} \\xrightarrow{\\Delta} 2\\text{PbO}\\text{ (yellow litharge)} + 4\\text{NO}_2\\uparrow\\text{ (red-brown fumes)} + \\text{O}_2\\uparrow$! *(Famous ICSE test!)*
   - **Thermal Dissociation (Reversible!)**: $\\text{NH}_4\\text{Cl} \\rightleftharpoons \\text{NH}_3 + \\text{HCl}$ (splits on heating, recombines cleanly upon cooling).
2. **Electrolytic Decomposition (by Electricity)**:
   - $2\\text{H}_2\\text{O}\\text{ (acidulated)} \\xrightarrow{\\text{DC Current}} 2\\text{H}_2\\uparrow\\text{ (cathode, 2 vol)} + \\text{O}_2\\uparrow\\text{ (anode, 1 vol)}$.
   - Molten $\\text{NaCl}$ splits into shiny $\\text{Na}$ metal + green $\\text{Cl}_2$ gas.
3. **Photolytic Decomposition (by Sunlight)**:
   - $2\\text{AgCl}\\text{ (white)} \\xrightarrow{\\text{Sunlight}} 2\\text{Ag}\\text{ (grey)} + \\text{Cl}_2\\uparrow$; $2\\text{AgBr} \\xrightarrow{\\text{Light}} 2\\text{Ag} + \\text{Br}_2$.`,
            keyPoint: 'Copper carbonate turns Green → Black (CuO + CO₂); Lead nitrate crystals crackle giving Yellow PbO + Brown NO₂ fumes + O₂!'
          }
        ],
        definitions: [
          { term: 'Combination Reaction', definition: 'Reaction where two or more reactants combine chemically to form one single product ($A + B \\to AB$).' },
          { term: 'Decomposition Reaction', definition: 'Reaction where a single compound splits into two or more simpler elements or compounds by heat, electricity, or light.' },
          { term: 'Thermal Dissociation', definition: 'Reversible thermal decomposition where cooling recombines the separated products back into the original compound ($\\text{NH}_4\\text{Cl} \\rightleftharpoons \\text{NH}_3 + \\text{HCl}$).' }
        ],
        realLifeExample: 'White chalky Calcium Carbonate ($\\text{CaCO}_3$, limestone) heated fiercely inside rotary cement kilns decomposes into quicklime ($\\text{CaO}$)—then builders mix that quicklime with water to make sizzling slaked lime plaster ($\\text{Ca(OH)}_2$), which slowly absorbs air $\\text{CO}_2$ over weeks to harden right back into shiny $\\text{CaCO}_3$ marble finish on walls!',
        commonMistakes: [
          {
            mistake: 'Confusing **Thermal Decomposition** (irreversible like $\\text{CaCO}_3$ or $\\text{KClO}_3$) with **Thermal Dissociation**.',
            correction: 'Thermal *dissociation* (e.g., $\\text{NH}_4\\text{Cl}$) is **reversible** upon cooling; normal thermal *decomposition* of $\\text{Pb(NO}_3)_2$ or $\\text{KClO}_3$ does not snap back just by cooling.'
          }
        ]
      },
      {
        id: 'chem-ch6-t2',
        title: '2. Single Displacement, Metal Activity Series & Double Displacement',
        content: `When a reactive metal meets a compound of a less-reactive metal, a chemical takeover takes place—guided strictly by the **Metal Reactivity (Activity) Series**.`,
        subtopics: [
          {
            subheading: '2.1 Metal Activity Series & Single Displacement ($A + BC \\to AC + B$)',
            body: `Metals arranged from **MOST reactive** at the top to **LEAST reactive** at the bottom:
**$\\text{K} > \\text{Na} > \\text{Ca} > \\text{Mg} > \\text{Al} > \\text{Zn} > \\text{Fe} > \\text{Pb} > [\\mathbf{\\text{H}}] > \\text{Cu} > \\text{Hg} > \\text{Ag} > \\text{Au}$**
*(Mnemonic: "**K**edar **Na**th **Ca** **Ma**ali **Al**oo **Z**ara **Fe**eke **P**akata **H**ai; **Cu**te **H**arish **Ag**ra **Au**nga!")*

**Two Golden Prediction Rules**:
1. Any metal **ABOVE another metal** displaces it from its aqueous salt solution:
   - **Iron in Copper(II) Sulphate**: $\\text{Fe} + \\text{CuSO}_4\\text{ (blue)} \\to \\text{FeSO}_4\\text{ (pale green)} + \\text{Cu}\\downarrow\\text{ (red-brown deposit)}$.
   - **Zinc in Copper(II) Sulphate**: $\\text{Zn} + \\text{CuSO}_4\\text{ (blue)} \\to \\text{ZnSO}_4\\text{ (colourless)} + \\text{Cu}\\downarrow$.
   - *Reverse check*: **Copper wire dipped into Ferrous sulphate ($\\text{FeSO}_4$) gives NO REACTION** because Cu sits BELOW Fe!
2. Metals **ABOVE Hydrogen ($[\\text{H}]$)** displace $\\text{H}_2$ gas from dilute acids ($\\text{Zn} + \\text{H}_2\\text{SO}_4 \\to \\text{ZnSO}_4 + \\text{H}_2\\uparrow$). Metals **BELOW Hydrogen** ($\\text{Cu, Ag, Au}$) do **NOT** release hydrogen from dilute $\\text{HCl}$ or $\\text{H}_2\\text{SO}_4$!`,
            keyPoint: 'Rule: Higher metal kicks Lower metal out! Fe beats Cu; Cu CANNOT beat Fe or H!'
          },
          {
            subheading: '2.2 Double Displacement ($AB + CD \\to AD + CB$): Precipitation & Neutralisation',
            body: `Two ionic compounds in aqueous solution **mutually exchange their positive & negative ions**! Two vital types occur:
1. **Precipitation Reactions** (one product is an insoluble solid precipitate $\\downarrow$):
   - $\\text{AgNO}_3\\text{ (aq)} + \\text{NaCl}\\text{ (aq)} \\to \\text{AgCl}\\downarrow\\text{ (curdy white ppt)} + \\text{NaNO}_3\\text{ (aq)}$
   - $\\text{BaCl}_2\\text{ (aq)} + \\text{Na}_2\\text{SO}_4\\text{ (aq)} \\to \\text{BaSO}_4\\downarrow\\text{ (heavy white ppt)} + 2\\text{NaCl}\\text{ (aq)}$
   - $\\text{Pb(NO}_3)_2 + 2\\text{KI} \\to \\text{PbI}_2\\downarrow\\text{ (bright golden-yellow ppt)} + 2\\text{KNO}_3$!
2. **Neutralisation Reactions ($\\text{Acid} + \\text{Base} \\to \\text{Salt} + \\text{Water} + \\text{Heat}$)**:
   - $\\text{HCl} + \\text{NaOH} \\to \\text{NaCl} + \\text{H}_2\\text{O} + \\text{Heat}$
   - $\\text{H}_2\\text{SO}_4 + 2\\text{KOH} \\to \\text{K}_2\\text{SO}_4 + 2\\text{H}_2\\text{O} + \\text{Heat}$
   - *Daily Life*: Milk of Magnesia $\\text{Mg(OH)}_2$ neutralises excess stomach acid ($\\text{HCl}$); baking soda ($\\text{NaHCO}_3$) soothes acidic bee/ant formic stings; acidic vinegar soothes alkaline wasp stings; slaked lime treats overly acidic farm soil!`,
            keyPoint: 'Every Acid + Base Neutralisation is an EXOTHERMIC Double Displacement producing Salt + Water!'
          }
        ],
        diagram: {
          id: 'diag-chem-reactions',
          title: 'Four Reaction Types & Metal Activity Series Displacement',
          caption: 'Visual scheme of Combination, Decomposition, Single Displacement (Fe + CuSO₄ → FeSO₄ + Cu), and Double Displacement alongside the Reactivity Series.',
          svgFigure: 'chem_reaction_types'
        },
        definitions: [
          { term: 'Displacement Reaction', definition: 'Reaction in which a more reactive element displaces a less reactive element from its compound.' },
          { term: 'Double Displacement', definition: 'Reaction between two aqueous ionic compounds exchanging ions mutually to form a precipitate, gas, or water.' },
          { term: 'Neutralisation', definition: 'Exothermic reaction of an acid with a base to produce a neutral salt and water.' }
        ],
        realLifeExample: 'Never store sour pickled mangoes or lemon juice inside zinc-galvanised or aluminium jars—citric/acetic acids react chemically with active metals to liberate hydrogen and toxic dissolved metal salts!',
        commonMistakes: [
          {
            mistake: 'Writing $\\text{Cu} + \\text{H}_2\\text{SO}_4\\text{ (dilute)} \\to \\text{CuSO}_4 + \\text{H}_2$.',
            correction: 'Copper sits **BELOW Hydrogen** in the Reactivity Series and **CANNOT displace $\\text{H}_2$** from dilute HCl or dilute H₂SO₄!'
          }
        ]
      },
      {
        id: 'chem-ch6-t3',
        title: '3. Catalysis: Positive/Negative Catalysts, Promoters & Enzymes',
        content: `How do industrial plants convert stubborn Nitrogen and Hydrogen into fertiliser Ammonia without needing $3,000^\\circ\\text{C}$, and how do our bodies digest lunch cleanly at just **$37^\\circ\\text{C}$**? Through **Catalysts** and biological **Enzymes**!`,
        subtopics: [
          {
            subheading: '3.1 Types of Catalysts & Promoters',
            body: `- **Catalyst**: A chemical substance that alters the rate of a reaction without itself undergoing any permanent change in mass or chemical composition at the end.
- **Positive Catalyst** (accelerates rate):
  - **Manganese dioxide ($\\text{MnO}_2$)** speeds up thermal decomposition of $\\text{KClO}_3$ at $250^\\circ\\text{C}$ instead of $400^\\circ\\text{C}$, and rapidly bubbles $\\text{O}_2$ from $\\text{H}_2\\text{O}_2$.
  - **Finely divided Iron ($\\text{Fe}$)** catalyses Haber's Ammonia process ($\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$).
  - **Nickel ($\\text{Ni}$)** catalyses hydrogenation of liquid vegetable oils into solid vanaspati/margarine.
- **Negative Catalyst / Inhibitor** (slows undesirable decomposition): Glycerine or phosphoric acid added to medical hydrogen peroxide bottles prevents spontaneous decomposition; traces of alcohol slow chloroform oxidation.
- **Promoter**: Substance that boosts a catalyst's efficiency even though it isn't the main catalyst alone—e.g., **Molybdenum ($\\text{Mo}$)** acts as promoter for the Iron catalyst in Haber's process!
- **Enzymes (Biochemical Catalysts)**: Special proteins built by living cells—e.g., **Amylase (ptyalin)** in saliva turns starch into maltose; **Pepsin** digests stomach proteins; **Yeast zymase** ferments glucose into ethanol + $\\text{CO}_2$.`,
            keyPoint: 'Positive Catalyst = speeds up (MnO₂, Fe, Ni); Inhibitor = slows down (Phosphoric acid in H₂O₂); Promoter = boosts catalyst (Mo for Fe); Enzyme = living protein catalyst!'
          }
        ],
        definitions: [
          { term: 'Positive Catalyst', definition: 'Substance increasing chemical reaction speed without being permanently consumed (e.g., MnO₂, Fe, Ni).' },
          { term: 'Promoter', definition: 'Substance added alongside a catalyst to enhance the catalyst\'s activity (e.g., Molybdenum for Iron in Haber process).' },
          { term: 'Enzyme', definition: 'Complex protein biocatalyst speeding specific biochemical reactions inside living cells (e.g., salivary amylase, pepsin).' }
        ],
        realLifeExample: 'Modern cars carry a **Catalytic Converter** coated with honeycomb **Platinum/Palladium/Rhodium** inside the exhaust pipe—instantly turning poisonous carbon monoxide ($\\text{CO}$) and nitrogen oxides into harmless $\\text{CO}_2$ and $\\text{N}_2$!',
        commonMistakes: [
          {
            mistake: 'Assuming a catalyst increases the *total final yield* of product obtained from a fixed quantity of reactants.',
            correction: 'A catalyst ONLY makes the reaction reach completion **faster**—total product yield stays governed strictly by reactant mass!'
          }
        ]
      },
      {
        id: 'chem-ch6-t4',
        title: '4. Classification of Oxides: Basic, Acidic, Amphoteric & Neutral',
        content: `Whenever an element combines chemically with oxygen, it forms a binary compound called an **Oxide**. Chemists sort oxides cleanly into **four families** by testing whether they react with **water, acids, or bases (alkalis)**!`,
        subtopics: [
          {
            subheading: '4.1 Four Classes of Oxides with Key Reactions',
            body: `1. **Basic Oxides (Typically Metallic Oxides — $\\text{Na}_2\\text{O}, \\text{K}_2\\text{O}, \\text{CaO}, \\text{MgO}, \\text{CuO}, \\text{FeO}$)**:
   - React with acids to form Salt + Water (**neutralisation**): $\\text{CuO} + \\text{H}_2\\text{SO}_4 \\to \\text{CuSO}_4 + \\text{H}_2\\text{O}$.
   - Soluble basic oxides dissolve in water to form **alkalis** turning red litmus blue: $\\text{Na}_2\\text{O} + \\text{H}_2\\text{O} \\to 2\\text{NaOH}$; $\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2$.
2. **Acidic Oxides (Typically Non-Metallic Oxides — $\\text{CO}_2, \\text{SO}_2, \\text{SO}_3, \\text{P}_2\\text{O}_5, \\text{NO}_2$)**:
   - Dissolve in water to form **acids** turning blue litmus red (**acid rain culprits!**): $\\text{CO}_2 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{CO}_3$ (carbonic acid); $\\text{SO}_3 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{SO}_4$.
   - React with bases to form Salt + Water: $\\text{CO}_2 + 2\\text{NaOH} \\to \\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O}$.
3. **Amphoteric Oxides (Dual Nature — $\\text{ZnO}, \\text{Al}_2\\text{O}_3, \\text{PbO}$ — *Memorise these famous 3!*)**:
   - Metallic oxides that react chemically with **BOTH acids AND strong alkalis** to yield Salt + Water!
     - As base with acid: $\\text{ZnO} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2\\text{O}$
     - As acid with alkali: $\\text{ZnO} + 2\\text{NaOH} \\to \\text{Na}_2\\text{ZnO}_2\\text{ (sodium zincate)} + \\text{H}_2\\text{O}$
4. **Neutral Oxides (Non-metallic — $\\text{H}_2\\text{O}, \\text{CO}, \\text{NO}, \\text{N}_2\\text{O}$)**:
   - Neither acidic nor basic; **zero effect on red or blue litmus**, and do not form salts with acids or alkalis!`,
            keyPoint: 'Memorise the BIG THREE Amphoteric Oxides: Zinc oxide (ZnO), Aluminium oxide (Al₂O₃), and Lead(II) oxide (PbO) — they react with BOTH acids AND NaOH/KOH!'
          }
        ],
        comparisonTable: {
          caption: 'Four Classes of Oxides: Litmus Test & Chemical Behaviour',
          headers: ['Oxide Class', 'Origin', 'Litmus Action (if soluble)', 'Examples'],
          rows: [
            ['**Basic Oxide**', 'Metals', 'Red → **Blue**', '$\\text{Na}_2\\text{O}, \\text{K}_2\\text{O}, \\text{CaO}, \\text{MgO}, \\text{CuO}$'],
            ['**Acidic Oxide**', 'Non-metals', 'Blue → **Red**', '$\\text{CO}_2, \\text{SO}_2, \\text{SO}_3, \\text{P}_2\\text{O}_5, \\text{NO}_2$'],
            ['**Amphoteric Oxide**', 'Borderline metals', 'Reacts with **BOTH acids & strong alkalis**', '$\\mathbf{\\text{ZnO}, \\text{Al}_2\\text{O}_3, \\text{PbO}}$'],
            ['**Neutral Oxide**', 'Non-metals', '**No change** on either litmus', '$\\text{CO}, \\text{NO}, \\text{N}_2\\text{O}, \\text{H}_2\\text{O}$']
          ]
        },
        definitions: [
          { term: 'Basic Oxide', definition: 'Metallic oxide reacting with acids to yield salt and water (soluble ones form alkalis in water).' },
          { term: 'Acidic Oxide', definition: 'Non-metallic oxide reacting with bases to give salt and water (dissolves in water forming acids).' },
          { term: 'Amphoteric Oxide', definition: 'Metallic oxide displaying dual behaviour by reacting with BOTH acids and strong alkalis to form salts ($\\text{ZnO}, \\text{Al}_2\\text{O}_3, \\text{PbO}$).' },
          { term: 'Neutral Oxide', definition: 'Non-metallic oxide showing neither acidic nor basic properties ($\\text{CO}, \\text{NO}, \\text{H}_2\\text{O}$).' }
        ],
        realLifeExample: 'Acid rain forms when smokestack acidic oxides **$\\text{SO}_2, \\text{SO}_3$**, and **$\\text{NO}_2$** dissolve into atmospheric raindrops producing dilute sulphuric and nitric acids that corrode marble monuments like the Taj Mahal!',
        commonMistakes: [
          {
            mistake: 'Writing that **all** non-metal oxides are acidic (classifying Carbon monoxide $\\text{CO}$ as acidic like $\\text{CO}_2$).',
            correction: 'Carbon dioxide ($\\text{CO}_2$) is acidic, whereas **Carbon monoxide ($\\text{CO}$), Nitric oxide ($\\text{NO}$), Nitrous oxide ($\\text{N}_2\\text{O}$), and Water ($\\text{H}_2\\text{O}$)** are strictly **NEUTRAL oxides**!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Combination Reaction', definition: 'Two or more reactants uniting to form one single compound ($A+B \\to AB$).', category: 'Types' },
      { term: 'Thermal Decomposition', definition: 'Heat-driven breakdown of one compound into multiple products ($\\text{CaCO}_3 \\to \\text{CaO} + \\text{CO}_2$).', category: 'Types' },
      { term: 'Thermal Dissociation', definition: 'Reversible thermal splitting recombining upon cooling ($\\text{NH}_4\\text{Cl} \\rightleftharpoons \\text{NH}_3 + \\text{HCl}$).', category: 'Types' },
      { term: 'Activity Series', definition: 'Ranking of metals by reactivity from K (top) down to Au (bottom).', category: 'Reactivity' },
      { term: 'Displacement', definition: 'More reactive metal displacing a less reactive metal or $\\text{H}_2$ from compound/acid.', category: 'Types' },
      { term: 'Double Displacement', definition: 'Mutual ion exchange between aqueous salts ($\\text{AgNO}_3 + \\text{NaCl} \\to \\text{AgCl}\\downarrow + \\text{NaNO}_3$).', category: 'Types' },
      { term: 'Neutralisation', definition: 'Exothermic reaction of Acid + Base forming Salt + Water.', category: 'Types' },
      { term: 'Catalyst / Promoter', definition: 'Rate-altering helper ($\\text{MnO}_2, \\text{Fe}$) vs efficiency booster ($\\text{Mo}$).', category: 'Kinetics' },
      { term: 'Amphoteric Oxide', definition: 'Oxide reacting with BOTH acids and strong alkalis ($\\text{ZnO}, \\text{Al}_2\\text{O}_3, \\text{PbO}$).', category: 'Oxides' },
      { term: 'Neutral Oxide', definition: 'Oxide showing no reaction with acids, bases, or litmus ($\\text{CO}, \\text{NO}, \\text{H}_2\\text{O}$).', category: 'Oxides' }
    ],
    formulaSheet: [
      { title: 'Metal Activity Order', expression: 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au', meaning: 'Higher element displaces lower element from salts/acids' },
      { title: 'Iron + Copper Sulphate', expression: 'Fe(s) + CuSO₄(aq, blue) → FeSO₄(aq, green) + Cu↓(red-brown)', meaning: 'Classic displacement colour change' },
      { title: 'Lead Nitrate Decomposition', expression: '2Pb(NO₃)₂ → 2PbO(yellow) + 4NO₂↑(brown) + O₂↑', meaning: 'Thermal decomposition releasing brown fumes' },
      { title: 'Amphoteric Oxide Dual Check', expression: 'ZnO + 2HCl → ZnCl₂ + H₂O  |  ZnO + 2NaOH → Na₂ZnO₂ + H₂O', meaning: 'Zinc oxide neutralises both acid and base' },
      { title: 'Golden Yellow Precipitate', expression: 'Pb(NO₃)₂ + 2KI → PbI₂↓ (yellow) + 2KNO₃', meaning: 'Double displacement precipitation' }
    ],
    comparisonTables: [
      {
        title: 'Four Chemical Reaction Classes Summary',
        headers: ['Type', 'General Form', 'Key Balanced Example', 'Thermal Trend'],
        rows: [
          ['Combination', '$A + B \\to AB$', '$\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2$', 'Usually Exothermic'],
          ['Decomposition', '$AB \\to A + B$', '$\\text{CuCO}_3 \\xrightarrow{\\Delta} \\text{CuO} + \\text{CO}_2$', 'Always Endothermic'],
          ['Displacement', '$A + BC \\to AC + B$', '$\\text{Zn} + \\text{H}_2\\text{SO}_4 \\to \\text{ZnSO}_4 + \\text{H}_2\\uparrow$', 'Exothermic'],
          ['Double Displacement', '$AB + CD \\to AD + CB$', '$\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\to \\text{BaSO}_4\\downarrow + 2\\text{NaCl}$', 'Neutralisation is Exothermic']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'chem6-ex1',
        question: 'Identify the type of each reaction: (a) $2\\text{H}_2\\text{O}_2 \\xrightarrow{\\text{MnO}_2} 2\\text{H}_2\\text{O} + \\text{O}_2$, (b) $\\text{Zn} + 2\\text{AgNO}_3 \\to \\text{Zn(NO}_3)_2 + 2\\text{Ag}$, (c) $\\text{CaO} + \\text{CO}_2 \\to \\text{CaCO}_3$, (d) $\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\to \\text{BaSO}_4\\downarrow + 2\\text{NaCl}$.',
        steps: [
          '(a) One compound breaks into water & oxygen $\\implies$ **Catalytic Decomposition**.',
          '(b) Reactive Zinc replaces less-reactive Silver $\\implies$ **Single Displacement**.',
          '(c) Two compounds combine into one product $\\implies$ **Combination**.',
          '(d) Aqueous ions swap partners forming white $\\text{BaSO}_4\\downarrow$ $\\implies$ **Double Displacement (Precipitation)**.'
        ],
        finalAnswer: '(a) Decomposition, (b) Displacement, (c) Combination, (d) Double Displacement.',
        keyRule: 'Count number of reactants/products and check if elements swap cleanly.'
      },
      {
        id: 'chem6-ex2',
        question: 'Can you stir a silver nitrate ($\\text{AgNO}_3$) solution using a clean copper spoon? Predict what happens with a balanced equation.',
        steps: [
          'Check Reactivity Series: **Copper ($\\text{Cu}$) sits ABOVE Silver ($\\text{Ag}$)**!',
          'Therefore, Copper **displaces Silver** cleanly from solution: $\\text{Cu} + 2\\text{AgNO}_3\\text{ (colourless)} \\to \\text{Cu(NO}_3)_2\\text{ (blue)} + 2\\text{Ag}\\downarrow\\text{ (silvery-grey deposit)}$.',
          'So **NO**—using a copper spoon ruins the solution (turning it blue) and corrodes the spoon!'
        ],
        finalAnswer: 'No; Cu displaces Ag, turning the solution blue and depositing silver on the spoon.',
        keyRule: 'You can never store a salt solution of a LESS active metal inside a vessel of a MORE active metal.'
      },
      {
        id: 'chem6-ex3',
        question: 'What happens when (a) green $\\text{CuCO}_3$ is heated strongly, and (b) white $\\text{Pb(NO}_3)_2$ crystals are heated in a dry test tube?',
        steps: [
          '(a) **Copper carbonate**: Emerald-green solid decomposes into **black Copper(II) oxide** and $\\text{CO}_2$ gas (turns limewater milky): $\\text{CuCO}_3 \\xrightarrow{\\Delta} \\text{CuO} + \\text{CO}_2\\uparrow$.',
          '(b) **Lead nitrate**: Crystals crackle (**decrepitate**), releasing **reddish-brown Nitrogen dioxide ($\\text{NO}_2$) fumes** and oxygen (rekindles glowing splint), leaving **buff-yellow Lead(II) oxide ($\\text{PbO}$)**: $2\\text{Pb(NO}_3)_2 \\xrightarrow{\\Delta} 2\\text{PbO} + 4\\text{NO}_2\\uparrow + \\text{O}_2\\uparrow$.'
        ],
        finalAnswer: '(a) Green → Black CuO + CO₂; (b) Yellow PbO + Brown NO₂ fumes + O₂.',
        keyRule: 'Colour observations on heating metal carbonates & nitrates are classic ICSE identification markers.'
      },
      {
        id: 'chem6-ex4',
        question: 'Prove chemically that **Aluminium oxide ($\\text{Al}_2\\text{O}_3$)** is an **Amphoteric Oxide** using two balanced equations.',
        steps: [
          '1. Reacting as a Base with Hydrochloric acid: $\\text{Al}_2\\text{O}_3 + 6\\text{HCl} \\to 2\\text{AlCl}_3 + 3\\text{H}_2\\text{O}$.',
          '2. Reacting as an Acid with strong Sodium hydroxide: $\\text{Al}_2\\text{O}_3 + 2\\text{NaOH} \\to 2\\text{NaAlO}_2\\text{ (sodium aluminate)} + \\text{H}_2\\text{O}$.'
        ],
        finalAnswer: 'Reacts with both HCl (forming AlCl₃) and NaOH (forming NaAlO₂), proving amphoteric character.',
        keyRule: 'Remember sodium zincate (Na₂ZnO₂) and sodium aluminate (NaAlO₂)!'
      },
      {
        id: 'chem6-ex5',
        question: 'Why does a farmer spread slaked lime ($\\text{Ca(OH)}_2$) across overly acidic rainwater soil, and why do doctors prescribe Milk of Magnesia ($\\text{Mg(OH)}_2$) for stomach acidity?',
        steps: [
          'Excessive acid lowers soil fertility or irritates the stomach lining ($\\text{HCl}$).',
          'Both treatments perform **Neutralisation reactions**: mild harmless bases ($\\text{Ca(OH)}_2$ or $\\text{Mg(OH)}_2$) react with excess acid forming harmless neutral salt and water ($\\text{Mg(OH)}_2 + 2\\text{HCl} \\to \\text{MgCl}_2 + 2\\text{H}_2\\text{O}$).'
        ],
        finalAnswer: 'Both cure acidity safely via acid–base neutralisation.',
        keyRule: 'Mild bases neutralise acid problems; mild acids (vinegar) neutralise alkaline wasp stings.'
      },
      {
        id: 'chem6-ex6',
        question: 'Compare Thermal Decomposition of $\\text{CaCO}_3$ vs Thermal Dissociation of $\\text{NH}_4\\text{Cl}$.',
        steps: [
          '1. $\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2\\uparrow$: once $\\text{CO}_2$ escapes, simple cooling in the tube does not reform marble (**Thermal Decomposition**).',
          '2. $\\text{NH}_4\\text{Cl} \\rightleftharpoons \\text{NH}_3 + \\text{HCl}$: gases cool near the tube mouth and instantly recombine back into solid white $\\text{NH}_4\\text{Cl}$ (**Reversible Thermal Dissociation**).'
        ],
        finalAnswer: 'CaCO₃ is irreversible thermal decomposition; NH₄Cl is reversible thermal dissociation.',
        keyRule: 'Thermal dissociation uses the reversible double-arrow ⇌.'
      },
      {
        id: 'chem6-ex7',
        question: 'Classify these oxides as Acidic, Basic, Amphoteric, or Neutral: $\\text{SO}_2, \\text{MgO}, \\text{ZnO}, \\text{CO}, \\text{P}_2\\text{O}_5, \\text{NO}$.',
        steps: [
          'Basic: $\\text{MgO}$ (metal oxide).',
          'Acidic: $\\text{SO}_2, \\text{P}_2\\text{O}_5$ (non-metal oxides dissolving to acids).',
          'Amphoteric: $\\text{ZnO}$ (reacts with both acids & alkalis).',
          'Neutral: $\\text{CO}, \\text{NO}$ (no effect on litmus/salts).'
        ],
        finalAnswer: 'Basic: MgO; Acidic: SO₂, P₂O₅; Amphoteric: ZnO; Neutral: CO, NO.',
        keyRule: 'Watch out for CO and NO—they are Neutral, NOT acidic!'
      },
      {
        id: 'chem6-ex8',
        question: 'Explain why Copper turns silver-nitrate solution blue, whereas Copper dropped into Zinc sulphate solution shows zero change.',
        steps: [
          'In the Activity Series: $\\text{Zn} > \\text{H} > \\text{Cu} > \\text{Ag}$.',
          'Copper sits **above Ag**, so Cu displaces Ag forming blue $\\text{Cu(NO}_3)_2$.',
          'Copper sits **below Zn**, so Cu lacks strength to displace Zn from $\\text{ZnSO}_4$ (**No Reaction**).'
        ],
        finalAnswer: 'Reactivity order Zn > Cu > Ag allows Cu + AgNO₃ reaction but blocks Cu + ZnSO₄.',
        keyRule: 'Always check relative positions in K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au.'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'chem6-e1',
          question: 'Name two Amphoteric Oxides and two Neutral Oxides.',
          solutionSteps: ['Amphoteric: ZnO, Al₂O₃ (or PbO); Neutral: CO, NO (or H₂O, N₂O).'],
          finalAnswer: 'Amphoteric: ZnO, Al₂O₃; Neutral: CO, NO',
          marks: 2
        },
        {
          id: 'chem6-e2',
          question: 'What colour changes occur when an iron nail sits inside blue $\\text{CuSO}_4$ solution?',
          solutionSteps: ['Blue CuSO₄ fades to pale green FeSO₄, and red-brown copper plates onto the iron nail.'],
          finalAnswer: 'Solution turns blue → pale green; nail gets red-brown copper coating.',
          marks: 2
        },
        {
          id: 'chem6-e3',
          question: 'Define Catalyst and name the catalyst used to split $\\text{H}_2\\text{O}_2$ quickly into water and oxygen.',
          solutionSteps: ['A catalyst alters reaction speed without being consumed; Manganese dioxide ($\\text{MnO}_2$) catalyses $\\text{H}_2\\text{O}_2$.'],
          finalAnswer: 'MnO₂.',
          marks: 2
        },
        {
          id: 'chem6-e4',
          question: 'Give one balanced example of a Combination reaction between two compounds.',
          solutionSteps: ['$\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2$ or $\\text{NH}_3 + \\text{HCl} \\to \\text{NH}_4\\text{Cl}$.'],
          finalAnswer: 'CaO + H₂O → Ca(OH)₂',
          marks: 2
        }
      ],
      medium: [
        {
          id: 'chem6-m1',
          question: 'State what happens when Copper metal vs Magnesium metal is dropped into dilute Hydrochloric acid.',
          solutionSteps: [
            'Magnesium sits high above [H]: reacts briskly releasing $\\text{H}_2$ gas ($\\text{Mg} + 2\\text{HCl} \\to \\text{MgCl}_2 + \\text{H}_2\\uparrow$).',
            'Copper sits below [H]: **No reaction** with dilute HCl.'
          ],
          finalAnswer: 'Mg releases H₂ briskly; Cu shows no reaction.',
          marks: 3
        },
        {
          id: 'chem6-m2',
          question: 'Give one balanced equation each for Thermal, Electrolytic, and Photolytic Decomposition.',
          solutionSteps: [
            'Thermal: $\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2$.',
            'Electrolytic: $2\\text{H}_2\\text{O} \\xrightarrow{\\text{Electricity}} 2\\text{H}_2 + \\text{O}_2$.',
            'Photolytic: $2\\text{AgCl} \\xrightarrow{\\text{Light}} 2\\text{Ag} + \\text{Cl}_2$.'
          ],
          finalAnswer: 'All three decomposition equations verified.',
          marks: 3
        },
        {
          id: 'chem6-m3',
          question: 'Distinguish between a Catalyst and a Promoter using Haber\'s Ammonia Synthesis.',
          solutionSteps: [
            'In $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$, finely divided **Iron (Fe)** is the main **catalyst** speeding up the reaction.',
            '**Molybdenum (Mo)** is added as a **promoter** to boost Iron\'s catalytic activity further.'
          ],
          finalAnswer: 'Fe = Catalyst; Mo = Promoter in Haber process.',
          marks: 3
        },
        {
          id: 'chem6-m4',
          question: 'What happens when aqueous Potassium iodide ($\\text{KI}$) is added to Lead(II) nitrate ($\\text{Pb(NO}_3)_2$)? Name the reaction type.',
          solutionSteps: [
            'Bright **golden-yellow precipitate of Lead(II) iodide ($\\text{PbI}_2\\downarrow$)** forms immediately.',
            '$\\text{Pb(NO}_3)_2 + 2\\text{KI} \\to \\text{PbI}_2\\downarrow + 2\\text{KNO}_3$ (**Double Displacement / Precipitation**).'
          ],
          finalAnswer: 'Golden-yellow PbI₂ precipitate via Double Displacement.',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'chem6-d1',
          question: 'Why does dry Magnesium oxide ($\\text{MgO}$) only slowly turn moist red litmus blue, whereas Sodium oxide ($\\text{Na}_2\\text{O}$) turns it vivid blue instantaneously?',
          solutionSteps: [
            '$\\text{Na}_2\\text{O}$ is highly water-soluble, reacting immediately to produce a strong concentrated alkali ($\\text{Na}_2\\text{O} + \\text{H}_2\\text{O} \\to 2\\text{NaOH}$).',
            '$\\text{MgO}$ is only sparingly soluble in water, yielding mild $\\text{Mg(OH)}_2$ slowly—and remember dry litmus never reacts until moist!'
          ],
          finalAnswer: 'Na₂O dissolves freely into strong NaOH; MgO is sparingly soluble.',
          marks: 4
        },
        {
          id: 'chem6-d2',
          question: 'An unknown reactive metal $X$ displaces Iron from $\\text{FeSO}_4$, reacts violently with cold water releasing $\\text{H}_2$, and fails to displace Potassium from $\\text{KCl}$. Suggest where $X$ sits in the Activity Series.',
          solutionSteps: [
            'Because $X$ reacts violently with cold water and beats Iron ($>\\text{Fe}$), yet cannot beat Potassium ($<\\text{K}$), $X$ sits at the very reactive top metals **Sodium (Na) or Calcium (Ca)**!'
          ],
          finalAnswer: 'Between K and Mg (likely Na or Ca).',
          marks: 4
        },
        {
          id: 'chem6-d3',
          question: 'Why do factories add Phosphoric acid ($\\text{H}_3\\text{PO}_4$) or glycerine to bottled Hydrogen Peroxide ($\\text{H}_2\\text{O}_2$), whereas hospital labs drop $\\text{MnO}_2$ when they want fast oxygen?',
          solutionSteps: [
            'Phosphoric acid acts as a **negative catalyst (inhibitor)** stabilising $\\text{H}_2\\text{O}_2$ on pharmacy shelves.',
            '$\\text{MnO}_2$ acts as a **positive catalyst** decomposing $\\text{H}_2\\text{O}_2$ swiftly into water + oxygen when needed.'
          ],
          finalAnswer: 'Inhibitor preserves shelf life; Positive catalyst MnO₂ speeds O₂ release.',
          marks: 4
        },
        {
          id: 'chem6-d4',
          question: 'Write balanced equations showing $\\text{PbO}$ behaving as an Amphoteric Oxide with both Nitric acid and Sodium hydroxide.',
          solutionSteps: [
            '1. With Nitric acid (as base): $\\text{PbO} + 2\\text{HNO}_3 \\to \\text{Pb(NO}_3)_2 + \\text{H}_2\\text{O}$.',
            '2. With Sodium hydroxide (as acid): $\\text{PbO} + 2\\text{NaOH} \\to \\text{Na}_2\\text{PbO}_2\\text{ (sodium plumbite)} + \\text{H}_2\\text{O}$.'
          ],
          finalAnswer: 'Pb(NO₃)₂ + H₂O with acid; Na₂PbO₂ + H₂O with alkali.',
          marks: 4
        }
      ]
    },
    practiceWorksheet: {
      title: 'Chemistry Chapter 6 Worksheet: Chemical Reactions & Oxides (30 Marks)',
      instructions: 'Write balanced equations with conditions and predict outcomes using the Activity Series.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Match (1 × 5 = 5 Marks)',
          items: [
            '1. Name the white precipitate formed when BaCl₂ mixes with Na₂SO₄.',
            '2. Is Nitrogen + Hydrogen → Ammonia a Combination or Decomposition reaction?',
            '3. Which metal among Cu, Zn, Fe CANNOT displace H₂ from dilute H₂SO₄?',
            '4. Name the enzyme in human saliva.',
            '5. Write the formula of Sodium zincate.'
          ]
        },
        {
          sectionTitle: 'Section B: Predictions & Observations (2 × 4 = 8 Marks)',
          items: [
            '6. State what happens when zinc granules drop into dilute H₂SO₄ and give the equation.',
            '7. What colour residue and fumes appear when Lead(II) nitrate is strongly heated?',
            '8. Differentiate Positive Catalyst vs Negative Catalyst with one example each.',
            '9. Classify into Acidic, Basic, Amphoteric, or Neutral: $\\text{SO}_3, \\text{K}_2\\text{O}, \\text{Al}_2\\text{O}_3, \\text{N}_2\\text{O}$.'
          ]
        },
        {
          sectionTitle: 'Section C: Balancing & Reactions (3 × 4 = 12 Marks)',
          items: [
            '10. Write two equations proving $\\text{ZnO}$ is Amphoteric.',
            '11. Explain why aqueous copper(II) sulphate should NOT be stored in a zinc-coated bucket.',
            '12. Distinguish Precipitation vs Neutralisation Double Displacement with balanced equations.',
            '13. Contrast Thermal Decomposition vs Electrolytic Decomposition with balanced equations.'
          ]
        },
        {
          sectionTitle: 'Section D: Metal Reactivity Ordering (5 Marks)',
          items: [
            '14. Metal $P$ displaces $Q$ from $Q\\text{SO}_4$; $R$ displaces $P$ from $P\\text{NO}_3$; $Q$ fails to displace Hydrogen from dil. HCl while $P$ does. Arrange $P, Q, R, [\\text{H}]$ from MOST to LEAST reactive and justify.'
          ]
        }
      ],
      answerKey: [
        '1. Barium sulphate (BaSO₄↓).',
        '2. Combination (Synthesis) reaction.',
        '3. Copper (Cu sits below Hydrogen).',
        '4. Salivary amylase (ptyalin).',
        '5. Na₂ZnO₂.',
        '6. Brisk hydrogen effervescence: Zn + H₂SO₄ → ZnSO₄ + H₂↑.',
        '7. Yellow solid PbO residue + Reddish-brown NO₂ fumes (+ colourless O₂).',
        '8. Positive speeds up (MnO₂ in KClO₃); Negative/Inhibitor slows down (Phosphoric acid in H₂O₂).',
        '9. SO₃ = Acidic; K₂O = Basic; Al₂O₃ = Amphoteric; N₂O = Neutral.',
        '10. ZnO + 2HCl → ZnCl₂ + H₂O; ZnO + 2NaOH → Na₂ZnO₂ + H₂O.',
        '11. Zn is above Cu in Activity Series so Zn corrodes by displacing Cu (Zn + CuSO₄ → ZnSO₄ + Cu).',
        '12. Precipitation: AgNO₃ + NaCl → AgCl↓ + NaNO₃; Neutralisation: NaOH + HCl → NaCl + H₂O.',
        '13. Thermal: CaCO₃ → CaO + CO₂; Electrolytic: 2H₂O → 2H₂ + O₂.',
        '14. Order: R > P > [H] > Q (R beats P; P beats [H] and Q; Q sits below [H]).'
      ]
    },
    examPreparationTips: [
      'Learn the **Metal Activity Series** verbatim (`K Na Ca Mg Al Zn Fe Pb [H] Cu Hg Ag Au`)—at least 3 questions in every Chemistry paper depend on predicting whether a displacement occurs!',
      'Memorise all **3 Amphoteric Oxides ($\\text{ZnO}, \\text{Al}_2\\text{O}_3, \\text{PbO}$)** and **4 Neutral Oxides ($\\text{CO}, \\text{NO}, \\text{N}_2\\text{O}, \\text{H}_2\\text{O}$)**.'
    ],
    chapterSummary: [
      'Combination joins multiple reactants into one ($A+B\\to AB$); Decomposition splits one compound using heat, electricity, or light ($AB\\to A+B$).',
      'Single Displacement ($A+BC\\to AC+B$) succeeds only if $A$ sits higher than $B$ in the Activity Series.',
      'Double Displacement swaps ions cleanly, yielding insoluble precipitates ($\\text{AgCl}\\downarrow, \\text{BaSO}_4\\downarrow, \\text{PbI}_2\\downarrow$) or Neutralisation (Salt + Water).',
      'Catalysts alter reaction speed without consumption; Oxides divide into Basic, Acidic, Amphoteric ($\\text{ZnO}, \\text{Al}_2\\text{O}_3, \\text{PbO}$), and Neutral ($\\text{CO}, \\text{NO}, \\text{H}_2\\text{O}$).',
      'Exothermic reactions release heat (combustion, neutralisation, respiration), whereas endothermic reactions absorb energy (thermal decomposition, photosynthesis), with promoters enhancing and poisons inhibiting catalyst activity.'
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Why does the blue colour of copper(II) sulphate fade to light green when iron filings are dropped into it?',
        answer: 'Iron is more reactive than Copper in the Activity Series, so it displaces Copper: $\\text{Fe} + \\text{CuSO}_4\\text{ (blue)} \\to \\text{FeSO}_4\\text{ (pale green)} + \\text{Cu}\\downarrow\\text{ (red-brown)}$.',
        type: 'Reasoning'
      },
      {
        question: 'Why are Zinc oxide ($\\text{ZnO}$) and Aluminium oxide ($\\text{Al}_2\\text{O}_3$) called Amphoteric Oxides?',
        answer: 'Because both react with acids like bases (e.g., $\\text{ZnO} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2\\text{O}$) AND react with strong alkalis like acids (e.g., $\\text{ZnO} + 2\\text{NaOH} \\to \\text{Na}_2\\text{ZnO}_2 + \\text{H}_2\\text{O}$).',
        type: 'Short Answer'
      },
      {
        question: 'Distinguish Thermal Decomposition from Thermal Dissociation with balanced equations.',
        answer: 'Thermal decomposition is irreversible breaking of a compound by heat (e.g., $2\\text{KClO}_3 \\xrightarrow{\\Delta} 2\\text{KCl} + 3\\text{O}_2$). Thermal dissociation is a reversible heat-driven breakdown that snaps back on cooling (e.g., $\\text{NH}_4\\text{Cl} \\rightleftharpoons \\text{NH}_3 + \\text{HCl}$).',
        type: 'Long Answer'
      },
      {
        question: 'Give three everyday life examples of Acid-Base Neutralisation.',
        answer: '1. Taking Milk of Magnesia ($\\text{Mg(OH)}_2$) for stomach acid indigestion. 2. Rubbing baking soda paste on acidic bee/ant stings (or vinegar on alkaline wasp stings). 3. Adding slaked lime ($\\text{Ca(OH)}_2$) to neutralise acidic farm soil.',
        type: 'Short Answer'
      },
      {
        question: 'State the role of catalysts, promoters, and inhibitors with one industrial/lab example each.',
        answer: '1. **Positive Catalyst** speeds up a reaction ($\\text{MnO}_2$ in decomposing $\\text{KClO}_3$ or Iron in Haber\\\'s $\\text{NH}_3$). 2. **Promoter** boosts catalyst efficiency (Molybdenum for Iron in Haber). 3. **Negative Catalyst / Inhibitor** slows unwanted decay (Phosphoric acid in bottled $\\text{H}_2\\text{O}_2$).',
        type: 'Long Answer'
      },
      {
        question: 'Why does Silver nitrate solution turn milky white when touched with tap water, yet stay clear in pure distilled water?',
        answer: 'Municipal tap water contains trace dissolved **chloride salts** (chlorination), triggering double displacement $\\text{AgNO}_3 + \\text{Cl}^- \\to \\text{AgCl}\\downarrow\\text{ (white ppt)}$!',
        type: 'HOTS'
      },
      {
        question: 'What happens when carbon dioxide dissolves in rainwater vs sodium hydroxide?',
        answer: 'Being an **acidic oxide**, $\\text{CO}_2$ dissolves in water forming weak **carbonic acid** ($\\text{CO}_2 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{CO}_3$), and reacts with $\\text{NaOH}$ yielding Salt + Water ($\\text{CO}_2 + 2\\text{NaOH} \\to \\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O}$).',
        type: 'Short Answer'
      },
      {
        question: 'If dilute hydrochloric acid is poured onto Copper powder vs Zinc powder, in which tube will a burning splint pop?',
        answer: 'Only in the **Zinc tube** ($\\text{Zn} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2\\uparrow$), because Zn sits above [H] in the Activity Series while Cu sits below [H] and gives no reaction.',
        type: 'HOTS'
      }
    ],
    practiceExercises: [
      {
        question: 'Predict whether each happens and write equation if yes: (a) $\\text{Mg} + \\text{CuSO}_4$, (b) $\\text{Ag} + \\text{ZnSO}_4$.',
        hint: 'Mg > Cu > Ag.',
        answerGuide: '(a) Yes: Mg + CuSO₄ → MgSO₄ + Cu; (b) No reaction (Ag is below Zn).'
      },
      {
        question: 'Balance: $\\text{Na}_2\\text{O} + \\text{H}_2\\text{O} \\to \\text{NaOH}$ and classify $\\text{Na}_2\\text{O}$.',
        hint: 'Soluble metal oxide → strong alkali.',
        answerGuide: 'Na₂O + H₂O → 2NaOH (Basic Oxide).'
      },
      {
        question: 'What is the colour of Lead(II) iodide precipitate and Copper(II) oxide residue?',
        hint: 'PbI₂ vs CuO.',
        answerGuide: 'PbI₂ = golden-yellow ppt; CuO = black residue.'
      }
    ]
  },
  quizQuestions: [
    {
      id: 'chem6-q1',
      type: 'mcq',
      question: 'When an iron nail is dipped in blue copper(II) sulphate solution, the solution slowly turns:',
      options: ['Dark purple', 'Pale green', 'Bright yellow', 'Deep red'],
      correctAnswer: 'Pale green',
      explanation: 'Fe + CuSO₄ (blue) → FeSO₄ (pale green) + Cu↓ (red-brown).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem6-q2',
      type: 'mcq',
      question: 'Which of the following is an **Amphoteric Oxide** reacting with BOTH acids and strong alkalis?',
      options: ['Sodium oxide (Na₂O)', 'Carbon dioxide (CO₂)', 'Zinc oxide (ZnO)', 'Nitric oxide (NO)'],
      correctAnswer: 'Zinc oxide (ZnO)',
      explanation: 'ZnO, Al₂O₃, and PbO are the classic Amphoteric Oxides.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem6-q3',
      type: 'mcq',
      question: 'Which metal CANNOT displace hydrogen gas from dilute hydrochloric acid?',
      options: ['Zinc', 'Magnesium', 'Iron', 'Copper'],
      correctAnswer: 'Copper',
      explanation: 'Copper sits below Hydrogen in the Activity Series (alongside Hg, Ag, Au).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem6-q4',
      type: 'mcq',
      question: 'Heating Lead(II) nitrate crystals strongly releases reddish-brown fumes of:',
      options: ['Oxygen (O₂)', 'Lead oxide (PbO)', 'Nitrogen dioxide (NO₂)', 'Carbon dioxide (CO₂)'],
      correctAnswer: 'Nitrogen dioxide (NO₂)',
      explanation: '2Pb(NO₃)₂ → 2PbO (yellow) + 4NO₂↑ (brown) + O₂↑.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem6-q5',
      type: 'mcq',
      question: 'Which set contains ONLY **Neutral Oxides**?',
      options: ['CO₂, SO₂, NO₂', 'Na₂O, CaO, MgO', 'CO, NO, H₂O', 'ZnO, Al₂O₃, PbO'],
      correctAnswer: 'CO, NO, H₂O',
      explanation: 'Carbon monoxide (CO), Nitric oxide (NO), N₂O, and H₂O are neutral oxides.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem6-q6',
      type: 'mcq',
      question: 'In Haber\'s manufacture of ammonia, Iron acts as catalyst while ______ acts as promoter:',
      options: ['Manganese dioxide', 'Molybdenum', 'Nickel', 'Phosphoric acid'],
      correctAnswer: 'Molybdenum',
      explanation: 'Molybdenum (Mo) promotes the Iron catalyst in N₂ + 3H₂ ⇌ 2NH₃.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'chem6-q7',
      type: 'mcq',
      question: 'Mixing aqueous $\\text{BaCl}_2$ and $\\text{Na}_2\\text{SO}_4$ produces a white precipitate of $\\text{BaSO}_4$. This is a:',
      options: ['Combination reaction', 'Thermal decomposition', 'Single displacement', 'Double displacement (precipitation)'],
      correctAnswer: 'Double displacement (precipitation)',
      explanation: 'Aqueous ions swap partners cleanly to form insoluble BaSO₄↓ + 2NaCl.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem6-q8',
      type: 'fill_blank',
      question: 'Every Acid + Base reaction yielding Salt + Water + Heat is called ______.',
      correctAnswer: 'neutralisation',
      explanation: 'Neutralisation is an exothermic double-displacement reaction between an acid and a base.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem6-q9',
      type: 'true_false',
      question: 'Copper wire can displace Iron from an aqueous Ferrous sulphate (FeSO₄) solution.',
      correctAnswer: false,
      explanation: 'Iron sits well above Copper in the Activity Series, so Copper cannot displace Iron.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem6-q10',
      type: 'mcq',
      question: 'Heating emerald-green Copper(II) carbonate ($\\text{CuCO}_3$) leaves a black solid residue of:',
      options: ['Copper metal', 'Copper(II) oxide (CuO)', 'Carbon soot', 'Copper sulphide'],
      correctAnswer: 'Copper(II) oxide (CuO)',
      explanation: 'CuCO₃ (green) → CuO (black) + CO₂↑.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem6-q11',
      type: 'mcq',
      question: 'Which enzyme in human saliva starts breaking down starch chemically in the mouth?',
      options: ['Pepsin', 'Amylase', 'Zymase', 'Lipase'],
      correctAnswer: 'Amylase',
      explanation: 'Salivary amylase (ptyalin) catalyses starch → maltose conversion.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'chem6-q12',
      type: 'hots',
      question: 'Three metals $A, B, C$ satisfy: $A$ displaces $B$; $C$ displaces $A$; only $B$ fails to release $\\text{H}_2$ from dilute HCl. Order reactivity from HIGHEST to LOWEST:',
      options: ['A > B > C', 'C > A > B', 'B > A > C', 'C > B > A'],
      correctAnswer: 'C > A > B',
      explanation: 'C beats A, A beats B, and B sits below [H], giving C > A > [H] > B.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'fc-c6-1',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'State the Metal Activity Series from K down to Au.',
      back: 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au.',
      category: 'Scientific Law',
      importance: 'Essential'
    },
    {
      id: 'fc-c6-2',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'Observation & equation for Iron in Copper(II) sulphate?',
      back: 'Fe + CuSO₄ (blue) → FeSO₄ (pale green) + Cu↓ (red-brown coating on nail).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c6-3',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'Name the 3 Amphoteric Oxides and prove one with equations.',
      back: 'ZnO, Al₂O₃, PbO. React with BOTH acids (ZnO+2HCl → ZnCl₂+H₂O) and alkalis (ZnO+2NaOH → Na₂ZnO₂+H₂O).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c6-4',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'Name 4 Neutral Oxides.',
      back: 'Carbon monoxide (CO), Nitric oxide (NO), Nitrous oxide (N₂O), Water (H₂O). No effect on litmus.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c6-5',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'Products & colours when Lead(II) nitrate is strongly heated?',
      back: '2Pb(NO₃)₂ → 2PbO (yellow) + 4NO₂↑ (brown fumes) + O₂↑ (colourless).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c6-6',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'Three types of Decomposition with one example each?',
      back: 'Thermal (CaCO₃ → CaO+CO₂); Electrolytic (2H₂O → 2H₂+O₂); Photolytic (2AgCl → 2Ag+Cl₂).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'fc-c6-7',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'Thermal Decomposition vs Thermal Dissociation?',
      back: 'Decomposition is normally irreversible (CaCO₃); Dissociation reverses cleanly upon cooling (NH₄Cl ⇌ NH₃ + HCl).',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'fc-c6-8',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'Catalyst vs Promoter vs Inhibitor examples?',
      back: 'Catalyst: MnO₂ / Fe; Promoter: Mo (boosts Fe in Haber); Inhibitor: H₃PO₄ in H₂O₂.',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'fc-c6-9',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'Basic Oxide vs Acidic Oxide litmus & water test?',
      back: 'Basic (metal: Na₂O, CaO) → alkalis turning red litmus blue. Acidic (non-metal: CO₂, SO₂) → acids turning blue litmus red.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'fc-c6-10',
      subjectId: 'chemistry',
      chapterId: 'chem-reactions',
      chapterTitle: 'Chemical Reactions',
      front: 'What colour precipitate forms when Pb(NO₃)₂ reacts with KI?',
      back: 'Bright golden-yellow precipitate of Lead(II) iodide (PbI₂↓) via Double Displacement.',
      category: 'Definition',
      importance: 'Standard'
    }
  ]
};
