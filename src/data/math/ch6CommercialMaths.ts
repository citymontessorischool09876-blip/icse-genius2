import { Chapter } from '../../types/index.ts';

export const CH6_COMMERCIAL_MATHS: Chapter = {
  id: 'math-commercial-maths',
  subjectId: 'mathematics',
  chapterNumber: 6,
  title: 'Percentage, Profit & Loss, Discount and Compound Interest',
  subtitle: 'Successive Percentage Change, Marked Price, GST, Simple vs. Compound Interest, Growth & Depreciation',
  term: 'Annual',
  estimatedMinutes: 85,
  notes: {
    introduction:
      'Every time you check the battery indicator on a tablet ("78% charged"), read a festival sale banner ("20% + 10% Extra Off + 12% GST"), compare two bank Fixed Deposit plans, or hear news about city population growth or vehicle depreciation, you are directly witnessing Commercial Mathematics in action. Understanding how percentages shift bases from Cost Price to Marked Price to Selling Price makes you financially sharper in everyday life and prepares you for one of the highest-weightage chapters in ICSE Class 8.\n\nIn Class 7, you learned basic percentage conversions and computed Simple Interest via I = PRT/100—where interest remains frozen on the initial principal every year. In ICSE Class 8 (aligned with Revised New Mathematics Today), we progress to multi-step Percentage Increase/Decrease & Reverse Percentages, Profit & Loss with Overhead Expenses, Marked Price, Successive Discounts, Goods and Services Tax (GST), and Compound Interest.\n\nIn Compound Interest, earned interest is not withdrawn—at the end of every conversion period (annual, half-yearly, or quarterly), that interest joins the Principal so money earns "interest on interest" along an exponential curve! Those identical exponential formulas A = P(1 ± R/100)ⁿ also govern bacteria growth, urban population expansion, and annual machine depreciation.',
    learningObjectives: [
      'Convert fluently between percentages, fractions, and decimals, and solve percentage change and reverse-percentage ("find original value") questions.',
      'Calculate Effective Cost Price (including transport/repair overheads), Profit/Loss, and Profit%/Loss% strictly on Cost Price (CP).',
      'Distinguish Marked Price (MP) from Selling Price (SP), compute Discount% strictly on MP, and find single discount equivalents for successive discounts.',
      'Compute Goods & Services Tax (GST) on the final discounted Selling Price, and recover pre-GST prices accurately without subtracting GST% directly.',
      'Compute Compound Interest both step-by-step year-by-year (without formula) and directly using A = P(1 + R/100)ⁿ.',
      'Adjust rate r and period n cleanly for Half-Yearly (R/2, 2T), Quarterly (R/4, 4T), fractional years (e.g., 2½ years), and varying annual rates (R₁%, R₂%).',
      'Apply growth (1 + R/100)ⁿ and depreciation (1 − R/100)ⁿ formulas to population, machinery, and 2-year (CI − SI) difference problems.',
    ],
    topics: [
      {
        id: 'com-top1',
        title: 'Percentages, Reverse Percentages & Net Percentage Change',
        content:
          'Percent literally means "per hundred" (out of 100): x% = x / 100. Two mental-math traps cause most percentage errors:\n1. Always identify the TRUE BASE (the "after of/than" original reference quantity): "By what percent is 50 greater than 40?" uses base 40: (10/40) × 100 = 25%. By contrast, "By what percent is 40 less than 50?" uses base 50: (10/50) × 100 = 20%!\n2. Reverse Percentage (Finding Original 100%): Suppose a salary AFTER a 10% hike becomes ₹33,000. You CANNOT subtract 10% of 33,000! Instead, New Value = (100 + 10)% = 110% of Original ⟹ Original = 33,000 × (100 / 110) = ₹30,000!',
        subtopics: [
          {
            subheading: 'Core Percentage Formulas',
            body: '• Percentage Increase = (Increase / Original Value) × 100%\n• Percentage Decrease = (Decrease / Original Value) × 100%\n• After +x% change: New Value = Original × (100 + x) / 100\n• After −x% change: New Value = Original × (100 − x) / 100.\nNet Effect of +x% followed by −x%: Suppose a number rises 20% and then drops 20%: 100 → 120 → 120 × (80/100) = 96! It ALWAYS ends in a net DECREASE of (x² / 100)% = (20²/100)% = 4% decrease—never back to 100!',
            keyPoint: 'Increasing by x% and then decreasing by x% ALWAYS produces a net loss of (x² / 100)%, never break-even!',
          },
        ],
        formulas: [
          { formula: 'New = Original × (100 ± Change%) / 100', explanation: 'Always multiply Original by factor (1 ± r/100); divide by it to recover Original.' },
          { formula: 'Equal +x% then −x% Change: Net Loss = (x² / 100)%', explanation: 'Because the −x% decrease acts on a larger temporary value.' },
        ],
        commonMistakes: [
          {
            mistake: 'Reversing a 20% rise by subtracting 20% from the new inflated value.',
            correction: 'Always divide by 1.20 (i.e., multiply by 100/120) to return cleanly to the original 100% base.',
          },
        ],
      },
      {
        id: 'com-top2',
        title: 'Profit & Loss, Overhead Expenses, Marked Price, Successive Discounts & GST',
        content:
          'Commercial pricing follows a strict chain of four prices:\n1. Effective Cost Price (CP) = Purchase Price + Overhead Expenses (transport, repairs, labour, packaging).\n2. Marked Price (MP) / List Price = Printed price tag set above CP before any sale reduction.\n3. Selling Price (SP) = Actual sale price paid by the buyer BEFORE government tax: SP = MP − Discount.\n4. Invoice / Final Bill Price = Discounted SP + GST% on SP.\n\nGOLDEN RULE OF DENOMINATORS: Never confuse bases!\n• Profit% or Loss% is ALWAYS divided by Effective CP.\n• Discount% is ALWAYS divided by Marked Price (MP).\n• GST% is ALWAYS calculated on the NET Selling Price (after subtracting discount)!',
        subtopics: [
          {
            subheading: 'Profit & Loss Formulas and "Articles Equal" Problems',
            body: '• Gain (Profit) = SP − CP (when SP > CP);   Gain% = (Gain / CP) × 100\n• Loss = CP − SP (when CP > SP);   Loss% = (Loss / CP) × 100\n• Direct Bridge: SP = CP × (100 + Gain%) / 100   OR   CP × (100 − Loss%) / 100.\n  Reversing to find CP: CP = (SP × 100) / (100 + Gain%)   OR   (SP × 100) / (100 − Loss%).\n• Two-Article Trap: If two items are sold at the SAME SP—one at +10% profit and the other at −10% loss—overall result is ALWAYS a net Loss% = (10² / 100)% = 1% loss (compute both CPs separately to confirm!).',
          },
          {
            subheading: 'Marked Price, Successive Discounts & Goods and Services Tax (GST)',
            body: '• Single Discount: Discount = MP − SP = (d% / 100) × MP ⟹ SP = MP × (100 − d) / 100.\n• Successive Discounts (d₁% followed by d₂%): Apply them ONE BY ONE multiplicatively, NEVER add them! On MP = ₹100 with 20% and 10% discounts: first 20% off → ₹80; next 10% off ₹80 deducts ₹8 → SP = ₹72, equivalent to a single 28% discount (NOT 30%!). General formula: SP = MP × (1 − d₁/100) × (1 − d₂/100).\n• Goods and Services Tax (GST): GST applies ONLY onto the final discounted SP: Final Bill = SP × (100 + GST%) / 100.',
            keyPoint: 'Never apply Discount% to GST, and never add successive discounts together! Order is always: MP → (−Discount%) → SP → (+GST%) → Final Bill.',
          },
        ],
        diagram: {
          id: 'diag-com-flow',
          title: 'Commercial Pricing Chain: Effective CP → MP → Discount → SP → GST Bill',
          caption: 'Color-coded pricing flowchart showing exact bases for Profit%, Discount%, and GST%.',
          svgFigure: 'commercial_math_flow',
        },
        commonMistakes: [
          {
            mistake: 'Adding 20% and 15% successive discounts into a 35% discount.',
            correction: 'Apply sequentially on MP = 100: 100 × 0.80 × 0.85 = ₹68 → single equivalent discount is 32%, NOT 35%!',
          },
          {
            mistake: 'Subtracting 18% directly from a GST-inclusive bill of ₹5,900.',
            correction: 'Bill = SP × 118/100 = 5,900 ⟹ Pre-GST SP = 5,900 × (100/118) = ₹5,000!',
          },
        ],
      },
      {
        id: 'com-top3',
        title: 'Simple Interest vs. Compound Interest (Step-by-Step & Formula)',
        content:
          'When you deposit money (Principal P) into a savings bank or take a loan at Rate R% per annum for Time T years, the extra money paid is Interest:\n• Under Simple Interest (SI), interest for EVERY year is calculated solely on the ORIGINAL Principal P: SI = (P × R × T) / 100. Interest rises linearly by the exact same fixed rupee amount every year.\n• Under Compound Interest (CI), at the end of each fixed Conversion Period (usually 1 year), unpaid interest is added into the Principal to form a NEW, LARGER Principal for the next period! Because Principal grows each cycle, interest earns interest—creating an accelerating exponential curve.\n\nFundamental Relationship: For the 1st year (under annual compounding), SI and CI are IDENTICAL. From Year 2 onward, CI is strictly greater than SI!',
        subtopics: [
          {
            subheading: 'Computing Compound Interest Without Formula (Year-by-Year Table)',
            body: 'ICSE questions frequently state "Find Compound Interest without using the formula":\nYear 1: I₁ = (P₁ × R × 1)/100;  Amount A₁ = P₁ + I₁ (becomes Principal P₂ for Year 2!).\nYear 2: I₂ = (P₂ × R × 1)/100;  Amount A₂ = P₂ + I₂ (becomes P₃ for Year 3!).\nTotal CI = A_final − Original P (or sum I₁ + I₂ + ...). Notice this method handles differing yearly rates effortlessly!',
          },
          {
            subheading: 'Direct Compound Amount Formula & Shortcut 2-Year (CI − SI) Formula',
            body: 'Repeating multiplication by (1 + R/100) for n periods yields:\nA = P (1 + R/100)ⁿ   and   CI = A − P = P [ (1 + R/100)ⁿ − 1 ].\nNote: Watch carefully whether the question asks for AMOUNT (A) or COMPOUND INTEREST (CI = A − P)!\n2-Year ICSE Shortcut: For T = 2 years compounded annually at R%:\nCI − SI = P × (R / 100)²!\n(Proof: SI = 2PR/100, while CI = P(1 + 2R/100 + R²/10000 − 1) = SI + P(R/100)².)',
          },
        ],
        diagram: {
          id: 'diag-ci-growth',
          title: 'Linear Growth (Simple Interest) vs. Exponential Growth (Compound Interest)',
          caption: 'Growth of ₹10,000 at 10% p.a. over 4 years: SI grows linearly to ₹14,000, while CI compounds exponentially to ₹14,641.',
          svgFigure: 'interest_growth_curve',
        },
        comparisonTable: {
          caption: 'Table 6.1: Compounding Frequencies & Formula Adjustments (Annual Rate R%, Time T years)',
          headers: ['Compounding Mode', 'Conversion Period', 'Rate per Period (r)', 'Number of Periods (n)', 'Amount Formula'],
          rows: [
            ['Annually', '12 months (1 yr)', 'R%', 'T', 'A = P(1 + R/100)^T'],
            ['Half-Yearly', '6 months', 'r = R / 2 %', 'n = 2T', 'A = P(1 + R/200)^(2T)'],
            ['Quarterly', '3 months', 'r = R / 4 %', 'n = 4T', 'A = P(1 + R/400)^(4T)'],
            ['Mixed Years (a + b/c yrs, annual)', 'Annual', 'R%', 'a full yrs + (b/c) yr', 'A = P(1 + R/100)ᵃ · (1 + (b/c)·R/100)'],
            ['Varying Annual Rates (R₁%, R₂%, R₃%)', 'Annual', 'R₁, R₂, R₃', '1 + 1 + 1', 'A = P(1 + R₁/100)(1 + R₂/100)(1 + R₃/100)'],
          ],
        },
      },
      {
        id: 'com-top4',
        title: 'Half-Yearly/Quarterly Compounding, Reverse Rate/Time & Growth/Depreciation',
        content:
          'Two crucial real-world extensions apply the exact same compound growth engine:\n1. Fractional Compounding & Non-Annual Periods: Whenever a bank compounds HALF-YEARLY, interest is added twice per year—so divide annual rate by 2 (r = R/2%) and double years into half-years (n = 2T). For QUARTERLY compounding, divide rate by 4 (r = R/4%) and quadruple years into quarters (n = 4T).\n2. Population Growth & Asset Depreciation: Living populations, bacteria cultures, and inflation appreciate positively via V_future = V_present × (1 + R/100)ⁿ, whereas physical assets (cars, scooters, factory machines, laptops) wear down and lose resale value via Depreciation:\nV_future = V_present × (1 − R/100)ⁿ.',
        subtopics: [
          {
            subheading: 'Finding Original Value (Back-in-Time) vs. Future Value',
            body: 'Read time direction carefully!\n• "Population today is P; find population 2 years HENCE": V_future = P(1 + R/100)².\n• "Value today is ₹V; find its price 2 years AGO when it depreciated at R% p.a.": Set Present Value on LHS! V = P_old × (1 − R/100)², then divide to find P_old!',
            keyPoint: 'Always plug the EARLIER chronological value in place of P and the LATER chronological value in place of A!',
          },
        ],
        realLifeExample:
          'Banking & Automobile Resale: A car purchased in Lucknow for ₹8,00,000 depreciates at 10% annually. After 3 years its book value drops to 8,00,000 × (0.9)³ = ₹5,83,200. Meanwhile, investing ₹1,00,000 in a bank bond compounding half-yearly at 10% p.a. (5% per 6 months) grows to 1,00,000 × (1.05)⁴ = ₹1,21,550.63 in 2 years!',
      },
    ],
    importantTerminology: [
      { term: 'Effective Cost Price (CP)', definition: 'Purchase price plus all overhead costs (freight, repairs, installation).', category: 'Profit & Loss' },
      { term: 'Selling Price (SP)', definition: 'Net transaction price paid before GST, equal to MP − Discount.', category: 'Profit & Loss' },
      { term: 'Marked Price (MP)', definition: 'Printed label/list price on an item prior to discounts.', category: 'Discount' },
      { term: 'Successive Discounts', definition: 'Two or more discounts applied sequentially on diminishing balances, never added directly.', category: 'Discount' },
      { term: 'GST (Goods & Services Tax)', definition: 'Tax percentage computed onto the net discounted Selling Price.', category: 'Taxation' },
      { term: 'Principal (P)', definition: 'Initial sum invested, deposited, or borrowed.', category: 'Banking' },
      { term: 'Amount (A)', definition: 'Total sum accumulated (Principal + Total Interest).', category: 'Banking' },
      { term: 'Conversion Period', definition: 'Time interval (1 yr, 6 mo, 3 mo) after which accrued interest compounds into Principal.', category: 'Compound Interest' },
      { term: 'Appreciation / Growth', definition: 'Exponential upward increase modeled by P(1 + R/100)ⁿ.', category: 'Application' },
      { term: 'Depreciation', definition: 'Annual exponential reduction in asset value modeled by P(1 − R/100)ⁿ.', category: 'Application' },
    ],
    formulaSheet: [
      { title: 'Profit% / Loss%', expression: 'Gain% = (Gain/CP)×100 ;  Loss% = (Loss/CP)×100', meaning: 'CP is ALWAYS the denominator.' },
      { title: 'SP–CP Bridge', expression: 'SP = CP × (100 + G%)/100 = CP × (100 − L%)/100', meaning: 'Direct conversion between CP and SP.' },
      { title: 'Discount Formula', expression: 'SP = MP × (100 − d%) / 100', meaning: 'Discount% always acts on Marked Price (MP).' },
      { title: 'Successive Discounts', expression: 'SP = MP × (1 − d₁/100)(1 − d₂/100)', meaning: 'Single equivalent discount = d₁ + d₂ − (d₁d₂)/100.' },
      { title: 'Invoice with GST', expression: 'Bill = Net SP × (100 + GST%) / 100', meaning: 'Add GST AFTER subtracting discounts.' },
      { title: 'Compound Amount (Annual)', expression: 'A = P(1 + R/100)ⁿ ;   CI = A − P', meaning: 'n = years, R = annual rate %.' },
      { title: 'Half-Yearly Compounding', expression: 'A = P(1 + R/200)^(2T)', meaning: 'Rate halved (R/2); time doubled (2T periods).' },
      { title: 'Quarterly Compounding', expression: 'A = P(1 + R/400)^(4T)', meaning: 'Rate quartered (R/4); time × 4 (4T periods).' },
      { title: 'Mixed Time (e.g., 2½ yrs)', expression: 'A = P(1 + R/100)² · (1 + ½·R/100)', meaning: 'Full power for whole years, scaled rate factor for fraction.' },
      { title: '2-Year CI − SI Difference', expression: 'CI − SI = P × (R / 100)²', meaning: 'Valid for 2-year annual compounding (1st yr CI = SI).' },
    ],
    comparisonTables: [
      {
        title: 'Table 6.2: Simple Interest vs. Compound Interest on ₹10,000 at 10% p.a.',
        headers: ['End of Year', 'SI Interest This Yr', 'SI Total Amount', 'CI Principal Base', 'CI Interest This Yr', 'CI Total Amount'],
        rows: [
          ['Year 1', '₹1,000', '₹11,000', '₹10,000', '₹1,000 (Matches SI!)', '₹11,000'],
          ['Year 2', '₹1,000', '₹12,000', '₹11,000', '₹1,100', '₹12,100'],
          ['Year 3', '₹1,000', '₹13,000', '₹12,100', '₹1,210', '₹13,310'],
          ['Year 4', '₹1,000', '₹14,000', '₹13,310', '₹1,331', '₹14,641'],
        ],
      },
    ],
    solvedExamples: [
      {
        id: 'sol-com-1',
        question: 'A shopkeeper buys a bicycle for ₹4,200, spends ₹300 on repairs, and marks it at ₹6,000. If he gives a 10% discount, find his profit or loss percent.',
        steps: [
          'Step 1: Effective Cost Price CP = Purchase + Overheads = 4,200 + 300 = ₹4,500.',
          'Step 2: Marked Price MP = ₹6,000; Discount = 10% of 6,000 = (10/100) × 6,000 = ₹600.',
          'Step 3: Selling Price SP = MP − Discount = 6,000 − 600 = ₹5,400.',
          'Step 4: Since SP > CP, Profit = 5,400 − 4,500 = ₹900.',
          'Step 5: Profit% = (Profit / Effective CP) × 100 = (900 / 4,500) × 100 = 20%.',
        ],
        finalAnswer: '20% Profit',
        keyRule: 'Always include repair/transport charges in Effective CP before computing Profit%.',
      },
      {
        id: 'sol-com-2',
        question: 'Find the Compound Interest on ₹16,000 at 10% per annum for 1½ years, compounded half-yearly.',
        steps: [
          'Step 1: Half-yearly compounding halves the annual rate and doubles the years:',
          'Rate per half-year r = 10% / 2 = 5%. Number of half-years n = 1.5 × 2 = 3.',
          'Step 2: Amount A = P(1 + r/100)ⁿ = 16,000 × (1 + 5/100)³.',
          'Step 3: Simplify bracket: 1 + 1/20 = 21/20.',
          'A = 16,000 × (21/20) × (21/20) × (21/20) = 16,000 × (9,261 / 8,000) = 2 × 9,261 = ₹18,522.',
          'Step 4: Compound Interest CI = A − P = 18,522 − 16,000 = ₹2,522.',
        ],
        finalAnswer: 'Compound Interest = ₹2,522 (Amount = ₹18,522)',
        keyRule: 'Halve R and double T whenever compounding is half-yearly.',
      },
      {
        id: 'sol-com-3',
        question: 'A scooter bought for ₹64,000 depreciates at 5% per annum. Find its value after 2 years.',
        steps: [
          'Step 1: Present value P = ₹64,000, rate of depreciation R = 5% p.a., n = 2 years.',
          'Step 2: Apply Depreciation formula (minus sign): V = P(1 − R/100)ⁿ.',
          'Step 3: V = 64,000 × (1 − 5/100)² = 64,000 × (19/20) × (19/20).',
          'Step 4: V = 64,000 × (361 / 400) = 160 × 361 = ₹57,760.',
        ],
        finalAnswer: '₹57,760',
        keyRule: 'Use (1 − R/100)ⁿ for depreciation and (1 + R/100)ⁿ for appreciation/population growth.',
      },
      {
        id: 'sol-com-4',
        question: 'Find the single discount equivalent to two successive discounts of 20% and 15%.',
        steps: [
          'Step 1: Assume Marked Price MP = ₹100.',
          'Step 2: Price after first 20% discount = 100 × (80/100) = ₹80.',
          'Step 3: Apply second 15% discount ON ₹80: SP = 80 × (85/100) = ₹68.',
          'Step 4: Net Discount = 100 − 68 = ₹32 → 32%.',
        ],
        finalAnswer: '32%',
        keyRule: 'Assuming MP = ₹100 converts successive discounts into effortless arithmetic.',
      },
      {
        id: 'sol-com-5',
        question: 'A dealer sells two smartphones at ₹12,000 each. On one he gains 20% and on the other he loses 20%. Find his overall gain or loss percent.',
        steps: [
          'Step 1: First phone (SP₁ = 12,000, Gain = 20%):',
          'CP₁ = (12,000 × 100) / (100 + 20) = 12,00,000 / 120 = ₹10,000.',
          'Step 2: Second phone (SP₂ = 12,000, Loss = 20%):',
          'CP₂ = (12,000 × 100) / (100 − 20) = 12,00,000 / 80 = ₹15,000.',
          'Step 3: Total CP = 10,000 + 15,000 = ₹25,000; Total SP = 12,000 + 12,000 = ₹24,000.',
          'Step 4: Since Total CP > Total SP, Overall Loss = 25,000 − 24,000 = ₹1,000.',
          'Loss% = (1,000 / 25,000) × 100 = 4% Loss.',
        ],
        finalAnswer: '4% Overall Loss (₹1,000 loss)',
        keyRule: 'When two items share the SAME Selling Price with equal +x% gain and −x% loss, the result is NEVER no-profit-no-loss; it is ALWAYS (x²/100)% loss!',
      },
      {
        id: 'sol-com-6',
        question: 'A shirt marked at ₹1,500 is offered at a 10% festive discount, and 12% GST is charged on the discounted price. Calculate the final customer bill.',
        steps: [
          'Step 1: Marked Price MP = ₹1,500; Discount = 10% of 1,500 = ₹150.',
          'Step 2: Net Selling Price (after discount) = 1,500 − 150 = ₹1,350.',
          'Step 3: Calculate 12% GST ON Net SP ₹1,350: GST = (12/100) × 1,350 = ₹162.',
          'Step 4: Final Customer Bill = 1,350 + 162 = ₹1,512.',
        ],
        finalAnswer: '₹1,512',
        keyRule: 'Tax/GST ALWAYS applies onto the discounted SP, never onto the original Marked Price.',
      },
      {
        id: 'sol-com-7',
        question: 'Calculate the Compound Interest on ₹10,000 at 8% p.a. for 2½ years compounded annually.',
        steps: [
          'Step 1: Whole years = 2, fractional part = 1/2 year.',
          'Step 2: Apply mixed-years formula: A = P(1 + R/100)² × (1 + (½ × R)/100).',
          'A = 10,000 × (1 + 8/100)² × (1 + 4/100)',
          '= 10,000 × (27/25) × (27/25) × (26/25)',
          '= 10,000 × (18,954 / 15,625) = ₹12,130.56.',
          'Step 3: Compound Interest CI = 12,130.56 − 10,000 = ₹2,130.56.',
        ],
        finalAnswer: 'CI = ₹2,130.56 (Amount = ₹12,130.56)',
        keyRule: 'For a fractional year under annual compounding, multiply by (1 + (fraction × R)/100) rather than taking fractional exponents.',
      },
      {
        id: 'sol-com-8',
        question: 'At what rate percent per annum will ₹4,000 amount to ₹4,410 in 2 years compounded annually?',
        steps: [
          'Step 1: P = 4,000, A = 4,410, n = 2.',
          'Step 2: Substitute into A = P(1 + R/100)²: 4,410 = 4,000(1 + R/100)².',
          'Step 3: Divide by P: (1 + R/100)² = 4,410 / 4,000 = 441 / 400.',
          'Step 4: Recognize squares on RHS: 441/400 = (21/20)².',
          'Step 5: Take positive square root of both sides: 1 + R/100 = 21/20.',
          'Step 6: R/100 = 21/20 − 1 = 1/20 ⟹ R = 100 / 20 = 5% p.a.',
        ],
        finalAnswer: '5% per annum',
        keyRule: 'Always simplify A/P into a clean fraction (441/400) and recognize matching squares or cubes!',
      },
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'com-e1',
          question: 'By selling a jacket for ₹1,320, a dealer makes 10% profit. Find its Cost Price.',
          solutionSteps: ['CP = (SP × 100) / (100 + Profit%) = (1,320 × 100) / 110 = 12 × 100 = ₹1,200.'],
          finalAnswer: '₹1,200',
          marks: 2,
        },
        {
          id: 'com-e2',
          question: 'A student’s monthly pocket money increases from ₹400 to ₹500. Find the percentage increase.',
          solutionSteps: ['Increase = 500 − 400 = ₹100.', 'Percentage Increase = (100 / 400) × 100 = 25%.'],
          finalAnswer: '25%',
          marks: 1,
        },
        {
          id: 'com-e3',
          question: 'Find the discount and selling price of a bag marked at ₹850 with a 12% discount.',
          solutionSteps: ['Discount = 12% of 850 = (12/100) × 850 = ₹102.', 'SP = 850 − 102 = ₹748.'],
          finalAnswer: 'Discount = ₹102; SP = ₹748',
          marks: 2,
        },
        {
          id: 'com-e4',
          question: 'Calculate Simple Interest vs Compound Interest for the 1st year on ₹5,000 at 8% p.a.',
          solutionSteps: ['SI for 1 yr = (5000 × 8 × 1)/100 = ₹400.', 'CI for 1st yr = 5000(1.08) − 5000 = ₹400. Both are equal!'],
          finalAnswer: 'Both equal ₹400',
          marks: 2,
        },
      ],
      medium: [
        {
          id: 'com-m1',
          question: 'A jacket is billed at ₹3,360 inclusive of 12% GST. Find the price before GST was added.',
          solutionSteps: ['Let pre-GST price = ₹x.', 'x × (112/100) = 3,360 ⟹ x = 3,360 × (100/112) = 30 × 100 = ₹3,000.'],
          finalAnswer: '₹3,000',
          marks: 3,
        },
        {
          id: 'com-m2',
          question: 'If the Cost Price of 15 pens equals the Selling Price of 12 pens, find the gain or loss percent.',
          solutionSteps: ['Let CP of 1 pen = ₹1. Then CP of 12 pens = ₹12, while SP of 12 pens = CP of 15 pens = ₹15.', 'Gain = 15 − 12 = ₹3; Gain% = (3/12) × 100 = 25%.'],
          finalAnswer: '25% Profit',
          marks: 3,
        },
        {
          id: 'com-m3',
          question: 'In what time will ₹8,000 amount to ₹9,261 at 10% p.a. compounded half-yearly?',
          solutionSteps: [
            'Half-yearly rate r = 10/2 = 5%.',
            '9,261 = 8,000(1 + 5/100)ⁿ ⟹ 9,261/8,000 = (21/20)ⁿ.',
            'Since 9,261 = 21³ and 8,000 = 20³, (21/20)³ = (21/20)ⁿ ⟹ n = 3 half-years = 1½ years.',
          ],
          finalAnswer: '1½ years (3 half-years)',
          marks: 3,
        },
        {
          id: 'com-m4',
          question: 'What must a trader mark on an item costing ₹1,200 so that after allowing a 20% discount, he still gains 20%?',
          solutionSteps: [
            'Required SP = CP × (120/100) = 1,200 × 1.2 = ₹1,440.',
            'MP × (100 − 20)/100 = 1,440 ⟹ 0.8 × MP = 1,440 ⟹ MP = 1,440 / 0.8 = ₹1,800.',
          ],
          finalAnswer: '₹1,800',
          marks: 3,
        },
      ],
      difficult: [
        {
          id: 'com-d1',
          question: 'The difference between Compound Interest (compounded annually) and Simple Interest on a certain sum for 2 years at 10% p.a. is ₹45. Find the sum.',
          solutionSteps: [
            'For 2 years annual compounding: CI − SI = P(R/100)².',
            '45 = P × (10/100)² = P × (1/100).',
            'Therefore P = 45 × 100 = ₹4,500.',
            '(Verify: SI = 4500×10×2/100 = ₹900; CI = 4500(1.21 − 1) = ₹945; Difference = ₹45!)',
          ],
          finalAnswer: '₹4,500',
          marks: 4,
        },
        {
          id: 'com-d2',
          question: 'Find the Compound Interest on ₹16,000 for 9 months at 20% per annum compounded quarterly.',
          solutionSteps: [
            'Quarterly rate r = 20% / 4 = 5% per quarter.',
            'Number of quarters in 9 months: n = 9 / 3 = 3 quarters.',
            'A = 16,000 × (1 + 5/100)³ = 16,000 × (21/20)³ = 16,000 × (9,261 / 8,000) = ₹18,522.',
            'CI = 18,522 − 16,000 = ₹2,522.',
          ],
          finalAnswer: '₹2,522',
          marks: 4,
        },
        {
          id: 'com-d3',
          question: 'A city’s population increased at 5% in the first year, decreased by 4% in the second year, and increased by 10% in the third year. If initial population was 50,000, find population after 3 years.',
          solutionSteps: [
            'Use chain formula with signed annual rates: V = P(1 + 5/100)(1 − 4/100)(1 + 10/100).',
            '= 50,000 × (21/20) × (24/25) × (11/10).',
            'Simplify: 50,000 / (20 × 25 × 10) = 50,000 / 5,000 = 10.',
            'V = 10 × 21 × 24 × 11 = 10 × 5,544 = 55,440.',
          ],
          finalAnswer: '55,440 residents',
          marks: 4,
        },
        {
          id: 'com-d4',
          question: 'A sum of money triples itself in 4 years at Compound Interest. In how many years will it become 27 times itself at the same annual rate?',
          solutionSteps: [
            'Given P(1 + R/100)⁴ = 3P ⟹ (1 + R/100)⁴ = 3.',
            'We want P(1 + R/100)ⁿ = 27P ⟹ (1 + R/100)ⁿ = 27 = 3³.',
            'Substitute 3 = (1 + R/100)⁴: [(1 + R/100)⁴]³ = (1 + R/100)¹².',
            'Therefore n = 12 years!',
          ],
          finalAnswer: '12 years',
          marks: 4,
        },
      ],
    },
    examPreparationTips: [
      'NEVER subtract GST% directly from a GST-inclusive bill—divide by (1 + GST/100) to find the pre-tax price.',
      'Check carefully whether a Compound Interest question asks for final AMOUNT (A) or COMPOUND INTEREST (CI = A − P).',
      'Always read whether compounding is Annual, Half-Yearly (R/2, 2T), or Quarterly (R/4, 4T) before substituting!',
      'Memorize 21²=441, 21³=9,261, 11³=1,331, and 26²=676—these ratios appear constantly in 5%, 10%, and 4% ICSE CI questions.',
      'For successive discounts or unknown CP/MP, assuming Base = ₹100 keeps algebra crisp and error-free.',
    ],
    chapterSummary: [
      'Profit%/Loss% always use Effective CP (= Buy Price + Overheads) as denominator.',
      'Discount% always uses Marked Price (MP) as denominator: SP = MP(100 − d%)/100.',
      'Successive discounts d₁% and d₂% multiply sequentially; net equivalent discount = d₁ + d₂ − (d₁d₂)/100.',
      'GST is always added onto the final discounted Selling Price.',
      'Simple Interest remains constant every year; Compound Interest grows exponentially because interest joins Principal.',
      '1st year SI and 1st year CI (compounded annually) are always equal.',
      'Half-yearly halves R and doubles T; Quarterly quarters R and quadruples T.',
      'Appreciation uses (1 + R/100)ⁿ while Depreciation uses (1 − R/100)ⁿ.',
      'For 2 years annual compounding: CI − SI = P(R/100)².',
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'When is Simple Interest exactly equal to Compound Interest for the same Principal and annual Rate?',
        answer:
          'Under annual compounding, Simple Interest and Compound Interest are strictly equal at the end of the 1st year, because earned interest has not yet been capitalized into the Principal to earn secondary interest. From Year 2 onward, CI exceeds SI.',
        type: 'Reasoning',
      },
      {
        question: 'Explain why a 20% price increase followed by a 20% price cut does NOT bring the price back to its original value.',
        answer:
          'Suppose original price = ₹100. A 20% increase gives ₹120. The subsequent 20% decrease acts on the LARGER base ₹120 (deducting ₹24, not ₹20!), leaving ₹96—a net 4% loss.',
        type: 'Reasoning',
      },
      {
        question: 'A trader marks his goods 40% above Cost Price and allows a 20% discount on cash purchase. Find his net profit percentage.',
        answer:
          'Let CP = ₹100. Marked Price MP = 100 + 40 = ₹140. After 20% discount on MP: SP = 140 × (80/100) = ₹112. Net Profit = 112 − 100 = ₹12 → 12% Profit.',
        type: 'Short Answer',
      },
      {
        question: 'Find the Compound Interest without using the CI formula on ₹12,500 for 2 years at 10% p.a.',
        answer:
          'Year 1: I₁ = (12,500 × 10 × 1)/100 = ₹1,250. Principal for Year 2 = 12,500 + 1,250 = ₹13,750.\nYear 2: I₂ = (13,750 × 10 × 1)/100 = ₹1,375.\nTotal CI = I₁ + I₂ = 1,250 + 1,375 = ₹2,625.',
        type: 'Long Answer',
      },
      {
        question: 'If A’s salary is 25% more than B’s salary, by what percent is B’s salary less than A’s?',
        answer:
          'Let B’s salary = ₹100. Then A’s salary = ₹125. Difference = ₹25. Percentage less than A = (25 / 125) × 100 = 20% less.',
        type: 'Short Answer',
      },
      {
        question: 'Kamala borrowed ₹26,400 from a bank to buy a scooter at 15% p.a. compounded yearly. What total amount will she pay after 2 years and 4 months?',
        answer:
          '4 months = 4/12 = 1/3 year. Amount = 26,400 × (1 + 15/100)² × (1 + (⅓ × 15)/100) = 26,400 × (23/20) × (23/20) × (21/20) = 26,400 × (11,109 / 8,000) = 3.3 × 11,109 = ₹36,659.70.',
        type: 'Long Answer',
      },
      {
        question: 'By selling a wristwatch for ₹1,140, a shopkeeper loses 5%. At what price must he sell it to gain 5%?',
        answer:
          'First find CP: CP = (1,140 × 100) / (100 − 5) = 1,14,000 / 95 = ₹1,200. Now compute new SP for 5% gain: SP = 1,200 × (105/100) = ₹1,260.',
        type: 'Short Answer',
      },
      {
        question: 'The present value of a machine is ₹2,91,600. If its value depreciates by 10% every year, find its purchase price 2 years ago.',
        answer:
          'Let purchase price 2 years ago = ₹P. Present value = P(1 − 10/100)² = P × (9/10)² = 0.81P. Given 0.81P = 2,91,600 ⟹ P = 2,91,600 / 0.81 = ₹3,60,000.',
        type: 'HOTS',
      },
    ],
    practiceExercises: [
      {
        question: 'Find the difference between CI and SI on ₹8,000 at 5% p.a. for 2 years.',
        hint: 'Use 2-year shortcut CI − SI = P(R/100)².',
        answerGuide: '8,000 × (5/100)² = 8,000 × (1/400) = ₹20.',
      },
      {
        question: 'A TV is sold for ₹19,200 after a 20% discount. Find its Marked Price.',
        hint: 'MP × (80/100) = 19,200.',
        answerGuide: 'MP = 19,200 × (100/80) = ₹24,000.',
      },
      {
        question: 'Convert successive discounts of 30% and 10% into a single equivalent discount.',
        hint: 'Apply on MP = 100: 100 → 70 → 63.',
        answerGuide: '100 − 63 = 37% single discount.',
      },
    ],
    practiceWorksheet: {
      title: 'Chapter 6 Comprehensive Practice Worksheet (30 Marks)',
      instructions: 'State all formulas explicitly before substituting numerical values.',
      sections: [
        {
          sectionTitle: 'Section A — Multiple Choice Questions (MCQs) [1 mark each]',
          items: [
            '1. Profit or Loss percentage is ALWAYS computed on:  (a) Marked Price   (b) Selling Price   (c) Cost Price   (d) GST',
            '2. A single discount equivalent to two successive discounts of 10% and 20% is:  (a) 30%   (b) 28%   (c) 15%   (d) 32%',
            '3. A microwave costs ₹10,000 + 18% GST. The total bill payable is:  (a) ₹10,180   (b) ₹11,800   (c) ₹8,200   (d) ₹12,000',
            '4. For compounding quarterly over 1½ years at 16% p.a., r and n are:  (a) 8%, 3   (b) 4%, 6   (c) 4%, 4   (d) 16%, 6',
            '5. If CP of 10 pens equals SP of 8 pens, gain% is:  (a) 20%   (b) 25%   (c) 12.5%   (d) 80%',
          ],
        },
        {
          sectionTitle: 'Section B — Short Answer Questions [2 marks each]',
          items: [
            '6. Find the Compound Interest on ₹5,000 for 2 years at 8% p.a. compounded annually.',
            '7. Population of a town is 1,25,000 and grows 4% annually. Find its population after 2 years.',
            '8. An item sold for ₹460 suffers an 8% loss. Find its Cost Price.',
            '9. Find the final invoice on a ₹2,000 mixer after a 15% discount and 10% GST.',
          ],
        },
        {
          sectionTitle: 'Section C — Long Answer Questions [3–4 marks each]',
          items: [
            '10. Find the Compound Interest on ₹24,000 for 1½ years at 10% p.a. compounded half-yearly.',
            '11. Simple Interest on a sum for 2 years at 6% p.a. is ₹900. Find the Compound Interest on the same sum, rate, and period.',
            '12. A refrigerator marked at ₹22,000 is sold with two successive discounts of 15% and 10%. Find final SP.',
          ],
        },
        {
          sectionTitle: 'Section D — HOTS & Multi-Step Applications [4 marks each]',
          items: [
            '13. Find the difference between CI compounded annually and CI compounded half-yearly on ₹10,000 for 1 year at 10% p.a.',
            '14. At what rate% p.a. will ₹6,400 amount to ₹6,892.10 in 1½ years compounded half-yearly?',
          ],
        },
      ],
      answerKey: [
        '1. (c) Cost Price',
        '2. (b) 28%  (100 → 90 → 72)',
        '3. (b) ₹11,800',
        '4. (b) r = 16/4 = 4%, n = 1.5 × 4 = 6 quarters',
        '5. (b) 25%  ((2/8) × 100)',
        '6. A = 5,000(1.08)² = ₹5,832 ⟹ CI = ₹832',
        '7. 1,25,000 × (26/25)² = 1,35,200',
        '8. CP = (460 × 100)/92 = ₹500',
        '9. Discounted SP = 2,000 × 0.85 = ₹1,700; With 10% GST = 1,700 × 1.10 = ₹1,870',
        '10. A = 24,000 × (21/20)³ = ₹27,783 ⟹ CI = ₹3,783',
        '11. P = (900 × 100)/(6 × 2) = ₹7,500; CI = 7,500(1.06² − 1) = 7,500(0.1236) = ₹927',
        '12. SP = 22,000 × 0.85 × 0.90 = ₹16,830',
        '13. Annual CI = ₹1,000; Half-yearly = 10,000(1.05² − 1) = ₹1,025; Difference = ₹25',
        '14. (1 + r/100)³ = 6,892.1 / 6,400 = 68,921 / 64,000 = (41/40)³ ⟹ r = 2.5% per half-year ⟹ Annual R = 5% p.a.',
      ],
    },
  },
  quizQuestions: [
    { id: 'comq1', type: 'mcq', question: 'Discount is always calculated on:', options: ['Cost Price', 'Selling Price', 'Marked Price', 'GST'], correctAnswer: 'Marked Price', explanation: 'By convention, Discount = MP − SP, and Discount% = (Discount/MP) × 100.', difficulty: 'easy', marks: 1 },
    { id: 'comq2', type: 'mcq', question: 'If SP of 12 articles equals CP of 15 articles, the profit percentage is:', options: ['20%', '25%', '30%', '15%'], correctAnswer: '25%', explanation: 'Let CP of 1 item = ₹1. SP of 12 = ₹15, CP of 12 = ₹12. Profit% = (3/12)×100 = 25%.', difficulty: 'medium', marks: 2 },
    { id: 'comq3', type: 'fill_blank', question: 'For compounding half-yearly over 2 years at 12% p.a., the number of conversion periods n = _______.', correctAnswer: '4', explanation: '2 years × 2 half-years/year = 4 conversion periods.', difficulty: 'easy', marks: 1 },
    { id: 'comq4', type: 'true_false', question: 'Two successive discounts of 10% and 20% equal a single discount of 30%.', correctAnswer: false, explanation: '100 → 90 → 72, giving a single equivalent discount of 28%.', difficulty: 'easy', marks: 1 },
    { id: 'comq5', type: 'mcq', question: 'An article inclusive of 10% GST costs ₹1,320. What was its price before GST?', options: ['₹1,188', '₹1,200', '₹1,220', '₹1,100'], correctAnswer: '₹1,200', explanation: 'Original SP = 1,320 × (100/110) = ₹1,200.', difficulty: 'medium', marks: 1 },
    { id: 'comq6', type: 'mcq', question: 'Find the Compound Interest on ₹1,000 for 2 years at 10% p.a. compounded annually:', options: ['₹200', '₹210', '₹1,210', '₹220'], correctAnswer: '₹210', explanation: 'A = 1,000(1.1)² = ₹1,210 ⟹ CI = 1,210 − 1,000 = ₹210.', difficulty: 'easy', marks: 1 },
    { id: 'comq7', type: 'true_false', question: 'Simple Interest and Compound Interest for the 1st year on the same principal and annual rate are always equal.', correctAnswer: true, explanation: 'True: compounding begins at the end of Period 1, so Year 1 CI equals Year 1 SI.', difficulty: 'easy', marks: 1 },
    { id: 'comq8', type: 'hots', question: 'A shopkeeper sells two bicycles at ₹9,900 each, gaining 10% on one and losing 10% on the other. Overall result is:', options: ['No profit no loss', '1% profit', '1% loss', '2% loss'], correctAnswer: '1% loss', explanation: 'Equal +x% and −x% on equal SP always gives (x²/100)% loss = (10²/100)% = 1% loss.', difficulty: 'hard', marks: 2 },
    { id: 'comq9', type: 'mcq', question: 'The value of a laptop bought for ₹40,000 depreciates by 10% per year. Its value after 2 years is:', options: ['₹32,000', '₹32,400', '₹36,000', '₹32,800'], correctAnswer: '₹32,400', explanation: '40,000 × (0.9)² = 40,000 × 0.81 = ₹32,400.', difficulty: 'medium', marks: 1 },
    { id: 'comq10', type: 'fill_blank', question: 'If a number increases by 20% and then decreases by 20%, the net percentage decrease is _______%.', correctAnswer: '4', explanation: '100 → 120 → 96, giving a 4% decrease.', difficulty: 'medium', marks: 1 },
    { id: 'comq11', type: 'mcq', question: 'What is the quarterly rate r% if the annual rate is 16% p.a.?', options: ['8%', '4%', '2%', '16%'], correctAnswer: '4%', explanation: 'Quarterly divides annual rate by 4: 16% / 4 = 4%.', difficulty: 'easy', marks: 1 },
    { id: 'comq12', type: 'hots', question: 'The difference between CI and SI on a sum for 2 years at 5% p.a. is ₹15. What is the sum?', options: ['₹4,000', '₹5,000', '₹6,000', '₹7,500'], correctAnswer: '₹6,000', explanation: 'CI − SI = P(R/100)² ⟹ 15 = P(5/100)² = P/400 ⟹ P = ₹6,000.', difficulty: 'hard', marks: 2 },
  ],
  flashcards: [
    { id: 'fc-com1', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'Formula for Half-Yearly Compound Amount?', back: 'A = P(1 + R/200)^(2T)', category: 'Formula', importance: 'Essential' },
    { id: 'fc-com2', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'Formula for 2-Year (CI − SI) Difference?', back: 'CI − SI = P × (R / 100)²', category: 'Formula', importance: 'Essential' },
    { id: 'fc-com3', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'Which base price applies to Profit%, Discount%, and GST%?', back: 'Profit% → Effective CP;  Discount% → MP;  GST% → Discounted SP.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-com4', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'How do you find Pre-GST SP from a GST-inclusive Bill?', back: 'SP = Bill × 100 / (100 + GST%)  — never subtract GST% directly!', category: 'Formula', importance: 'Essential' },
    { id: 'fc-com5', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'Single equivalent discount for successive discounts d₁% and d₂%?', back: 'd = d₁ + d₂ − (d₁ × d₂) / 100', category: 'Formula', importance: 'Essential' },
    { id: 'fc-com6', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'Depreciation value formula after n years at R% p.a.?', back: 'V = P × (1 − R/100)ⁿ', category: 'Formula', importance: 'Essential' },
    { id: 'fc-com7', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'Quarterly compounding adjustments for R% and T years?', back: 'Rate r = R/4 %; Number of periods n = 4T quarters.', category: 'Formula', importance: 'Standard' },
    { id: 'fc-com8', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'Outcome of selling two items at EQUAL SP, one +x% gain, one −x% loss?', back: 'ALWAYS a net Loss of (x² / 100)%!', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-com9', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'Mixed time CI formula (e.g., 2½ years annual)?', back: 'A = P(1 + R/100)² · (1 + (½·R)/100)', category: 'Formula', importance: 'Standard' },
    { id: 'fc-com10', subjectId: 'mathematics', chapterId: 'math-commercial-maths', chapterTitle: 'Commercial Maths', front: 'When does Compound Interest equal Simple Interest?', back: 'At the end of Year 1 (under annual compounding); from Year 2 onward, CI > SI.', category: 'Definition', importance: 'Standard' },
  ],
};
