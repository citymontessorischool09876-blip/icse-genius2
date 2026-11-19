import { Chapter } from '../../types/index.ts';

export const CH5_LINEAR_EQUATIONS: Chapter = {
  id: 'math-ch2',
  subjectId: 'mathematics',
  chapterNumber: 5,
  title: 'Linear Equations in One Variable & Linear Graphs',
  subtitle: 'Transposition, Cross-Multiplication, Real-World Word Problems & Cartesian Coordinate Graphs',
  term: 'Half-Yearly',
  estimatedMinutes: 80,
  notes: {
    introduction:
      'Suppose you walk into a stationery shop in Lucknow, buy 4 identical notebooks and a ₹30 geometry box, and pay a total bill of ₹230. How much did each notebook cost? Even before guessing numbers, translating that sentence into algebra—4x + 30 = 230—immediately gives 4x = 200, or x = ₹50. That mathematical balance beam, where a Left-Hand Side (LHS) equals a Right-Hand Side (RHS) and the unknown variable carries degree strictly equal to 1, is called a Linear Equation in One Variable.\n\nIn Class 7, you practiced straightforward one- and two-step equations like 3x − 7 = 14. In ICSE Class 8 (aligned with Revised New Mathematics Today), Linear Equations advance into far richer territory: equations having variables on BOTH sides, multi-fraction equations cleared via LCM, equations reducible to linear form by Cross-Multiplication, structured real-world word problems (consecutive integers, two-digit reversals, ages, ratios, coins/denominations, perimeter/angles, downstream/upstream boat speed), and Cartesian Linear Graphs.\n\nConnecting algebraic equations with coordinate geometry—plotting ordered pairs (x, y) across all four quadrants to reveal straight lines, intercepts, and constant slopes—prepares students directly for simultaneous equations in Class 9 and coordinate physics graphs (distance–time and velocity–time curves).',
    learningObjectives: [
      'Distinguish algebraic expressions from equations and recognize a linear equation of degree 1 (ax + b = 0, a ≠ 0).',
      'Apply the four Rules of Balance and systematic Transposition to solve equations with variables on both sides.',
      'Clear multi-term fractional denominators cleanly in one step using the LCM method without dropping signs.',
      'Solve fractional equations of the form (ax + b)/(cx + d) = p/q safely via Cross-Multiplication.',
      'Translate word descriptions—consecutive integers, ages, ratios, two-digit numbers, currency coins, geometry angles, and downstream/upstream motion—into exact algebraic equations.',
      'Locate ordered pairs (x, y) across Quadrants I–IV, identify X-axis (y = 0) and Y-axis (x = 0) intercepts, plot Linear Graphs, and calculate Slope m = Δy/Δx.',
    ],
    topics: [
      {
        id: 'lin-top1',
        title: 'Standard Linear Form, Balance Principle & Transposition Rules',
        content:
          'An Equation is a mathematical statement asserting that two algebraic expressions are equal, connected by the "=" sign. The expression to the left of "=" is the Left-Hand Side (LHS), and the expression to the right is the Right-Hand Side (RHS). Any linear equation in one variable x can be simplified into the Standard Form:\nax + b = 0  (where a, b are rational constants and a ≠ 0).\nThe highest exponent of the variable x in a linear equation is strictly 1 (no x², √x, or 1/x terms remain after simplifying), and every non-degenerate linear equation possesses EXACTLY ONE unique root (solution) x = −b/a.\n\nThink of LHS = RHS as a delicate two-pan balance scale. To keep the pans perfectly level, whatever mathematical operation you perform on the LHS MUST simultaneously be performed on the RHS:\n1. Add the same number to both sides.\n2. Subtract the same number from both sides.\n3. Multiply both sides by the same NON-ZERO number.\n4. Divide both sides by the same NON-ZERO number.',
        subtopics: [
          {
            subheading: 'Transposition Method (Faster Pan-Balance Shortcut)',
            body: 'Instead of writing "+7" or "−7" on both sides repeatedly, Transposition moves any term directly across the "=" sign while reversing its algebraic operation:\n• + (Addition) transposes to − (Subtraction)\n• − (Subtraction) transposes to + (Addition)\n• × (Multiplication of whole side) transposes to ÷ (Division)\n• ÷ (Division of whole side) transposes to × (Multiplication).\nStandard Order of Attack: First expand all brackets carefully (watch minus signs before parentheses!), collect all variable terms (x) onto the LHS and all constant numbers onto the RHS, combine like terms into Px = Q, and finally divide x = Q/P.',
            keyPoint: 'NEVER change the sign of a multiplier when dividing! If −4x = 12, dividing by −4 gives x = 12 / (−4) = −3 (NOT +3, and −4 does NOT become +4 when dividing!).',
          },
          {
            subheading: 'LCM Method for Equations with Fractional Denominators',
            body: 'Whenever fractional denominators appear across multiple terms—for example, (2x − 1)/3 − (x − 2)/4 = 5 − x/2:\nStep 1: Wrap every numerator containing + or − in invisible brackets: (2x − 1), (x − 2).\nStep 2: Find L = LCM of ALL denominators (here LCM(3, 4, 2) = 12).\nStep 3: Multiply EVERY SINGLE TERM on BOTH LHS and RHS (including whole integers like 5!) by L = 12.\n12·[(2x − 1)/3] − 12·[(x − 2)/4] = 12·(5) − 12·(x/2)\n4(2x − 1) − 3(x − 2) = 60 − 6x.\nEvery denominator vanishes in ONE clean line!',
          },
          {
            subheading: 'Cross-Multiplication for Equations Reducible to Linear Form',
            body: 'Whenever a SINGLE fraction on the LHS equals a SINGLE fraction on the RHS:\n(ax + b) / (cx + d) = p / q   (with denominators cx + d ≠ 0 and q ≠ 0),\nmultiply diagonally across the "=" sign:\nq(ax + b) = p(cx + d).\nCritical Trap Check: You can ONLY cross-multiply when EACH side is a single undivided fraction! If there is an extra "+ 3" outside, like (2x + 1)/5 + 3 = 7/2, first move "+3" to the RHS (or combine over a common denominator) BEFORE cross-multiplying.',
          },
        ],
        definitions: [
          { term: 'Linear Equation in One Variable', definition: 'An equation of degree 1 in a single variable, reducible to ax + b = 0 where a ≠ 0.' },
          { term: 'Root / Solution of Equation', definition: 'The numerical value of the variable that satisfies LHS = RHS when substituted back.' },
          { term: 'Transposition', definition: 'Shifting a term across the equals sign while reversing its operation (+ ⟷ −, × ⟷ ÷).' },
          { term: 'Cross-Multiplication', definition: 'Equating cross-products A·D = B·C whenever single fractions obey A/B = C/D (B, D ≠ 0).' },
        ],
        commonMistakes: [
          {
            mistake: 'Multiplying ONLY the fraction terms by LCM and forgetting plain integer terms (e.g., changing x/3 + 4 = x/2 into 2x + 4 = 3x).',
            correction: 'Multiply EVERY term on both sides by LCM 6, including whole number 4: 2x + 24 = 3x!',
          },
          {
            mistake: 'Dropping signs inside subtracted numerators: writing −(x − 5)/2 as (−x − 5)/2.',
            correction: 'Treat the fraction bar like brackets: −(x − 5) distributes minus over BOTH terms to give −x + 5!',
          },
        ],
      },
      {
        id: 'lin-top2',
        title: 'Word Problem Templates: Numbers, Ages, Ratios, Coins, Geometry & Motion',
        content:
          'In CISCE exams, solving an equation is rarely the stumbling block—translating plain English sentences into that starting equation is where students either ace 4 marks or lose track. Always follow the 4-Step ICSE Word-Problem Framework:\n1. Declare Unknown(s) Clearly ("Let the present age of the son be x years" — always include units!).\n2. Build Algebraic Expressions for every other quantity mentioned in the problem.\n3. Translate the central comparison sentence ("exceeds by", "becomes twice", "total value is ₹...") into LHS = RHS.\n4. Solve for x, compute the FINAL requested answer (watch whether it asks for father’s age, length, or percentage—NOT just x!), and verify in the word statement.',
        subtopics: [
          {
            subheading: 'Two-Digit Number & Reversed-Digit Problems',
            body: 'In our Base-10 number system, a 2-digit number with tens digit "t" and units digit "u" does NOT equal t·u (4 and 7 make 47, NOT 4×7 = 28!). Instead:\n• Original Two-Digit Number = 10t + u.\n• Number obtained by Interchanging (Reversing) Digits = 10u + t.\n• Notice two built-in identities: Sum of number and its reverse = 11(t + u); Difference = 9|t − u|.',
          },
          {
            subheading: 'Ages, Ratios & Denomination (Coin/Note) Problems',
            body: '• Age Shifts: If present age is x, then k years AGO it was (x − k), and k years HENCE it will be (x + k). Remember: BOTH people age by +k simultaneously!\n• Ratio Template: If two quantities stand in ratio a : b, assume them immediately as a·x and b·x.\n• Coin/Currency Value vs. Count: Total Value (₹) = (Number of coins) × (Value of 1 coin). Never add coin counts directly to rupee totals!',
          },
          {
            subheading: 'Geometry & Boat Stream (Downstream vs. Upstream) Problems',
            body: '• Geometry: Recall Perimeter of rectangle = 2(l + b); Complementary angles sum to 90°; Supplementary angles sum to 180°; Triangle angles sum to 180°.\n• Boats in Flowing Water: Let boat speed in still water = x km/h, and river stream speed = s km/h:\n  – Going Downstream (WITH the current): Speed = (x + s) km/h (faster!).\n  – Going Upstream (AGAINST the current): Speed = (x − s) km/h (slower!).\n  – Distance = Speed × Time. Since upstream & downstream routes between the same two ports cover EQUAL distance: Time_down × (x + s) = Time_up × (x − s).',
            keyPoint: 'Whenever two numbers have a sum S (e.g., sum = 45), define them as x and (45 − x) rather than introducing two separate variables!',
          },
        ],
        comparisonTable: {
          caption: 'Table 5.1: ICSE Word-to-Algebra Translation Dictionary',
          headers: ['English Statement', 'Exact Algebraic Expression', 'Worked Mini-Setup'],
          rows: [
            ['"Three consecutive integers"', 'x,  x + 1,  x + 2', 'Sum = 48 ⟹ 3x + 3 = 48'],
            ['"Three consecutive even OR odd integers"', 'x,  x + 2,  x + 4', 'Both even (2,4,6) and odd (3,5,7) step by +2!'],
            ['"Two numbers in ratio 5 : 8"', '5x  and  8x', 'Difference 21 ⟹ 8x − 5x = 21'],
            ['"Two-digit number (tens t, units u)"', 'Value = 10t + u;  Reversed = 10u + t', 'Sum of digits = 9 ⟹ u = 9 − t'],
            ['"A exceeds B by 12"', 'A − B = 12  (or A = B + 12)', '"Exceeds" means "is greater than"'],
            ['"Twice a number diminished by 7"', '2x − 7', 'Subtract 7 AFTER doubling x'],
            ['"Downstream vs. Upstream (stream s)"', 'Down: (x + s);  Up: (x − s)', 'Equal distance: t₁(x + s) = t₂(x − s)'],
          ],
        },
        realLifeExample:
          'Metro Rail & Ride-Sharing Pricing: A cab tariff charges a fixed flag-down fee of ₹40 plus ₹15 per kilometre traveled. Setting up Total Bill = 15d + 40 lets a commuter paying ₹265 solve 15d + 40 = 265 ⟹ 15d = 225 ⟹ d = 15 km immediately.',
      },
      {
        id: 'lin-top3',
        title: 'Cartesian Coordinate Plane & Four Quadrants',
        content:
          'René Descartes united algebra and geometry by inventing the Cartesian Coordinate System. Draw two perpendicular number lines intersecting at zero:\n• The horizontal axis (X′OX) is the X-axis.\n• The vertical axis (YOY′) is the Y-axis.\n• Their perpendicular intersection point O(0, 0) is called the ORIGIN.\n\nEvery point P in the flat plane is uniquely addressed by an Ordered Pair (x, y)—order matters strictly, so (3, 5) ≠ (5, 3)! The first number x is the Abscissa (horizontal distance left/right from the Y-axis), and the second number y is the Ordinate (vertical distance up/down from the X-axis).',
        subtopics: [
          {
            subheading: 'Signs in the Four Quadrants & Points Lying Directly on Axes',
            body: 'The two perpendicular axes slice the plane counter-clockwise into four Quadrants:\n• Quadrant I (Top-Right): x > 0, y > 0 → (+, +)   [e.g., (4, 3)]\n• Quadrant II (Top-Left): x < 0, y > 0 → (−, +)   [e.g., (−2, 5)]\n• Quadrant III (Bottom-Left): x < 0, y < 0 → (−, −)   [e.g., (−3, −4)]\n• Quadrant IV (Bottom-Right): x > 0, y < 0 → (+, −)   [e.g., (6, −1)].\nPoints on the Axes (Belong to NO Quadrant!):\n• Any point directly on the X-axis has vertical height y = 0 → form (x, 0), e.g., (5, 0) or (−3, 0).\n• Any point directly on the Y-axis has horizontal shift x = 0 → form (0, y), e.g., (0, 4) or (0, −7).',
            keyPoint: 'Memory Trap: Distance FROM the Y-axis is |x| (abscissa!), whereas distance FROM the X-axis is |y| (ordinate!).',
          },
        ],
        diagram: {
          id: 'diag-lin-svg',
          title: 'Four-Quadrant Cartesian Plane & Plotted Linear Graph (y = 2x + 1)',
          caption: 'Vector diagram illustrating Quadrants I–IV sign conventions, axes coordinates, and rise-over-run slope triangle Δy/Δx.',
          svgFigure: 'linear_coordinate_plane',
        },
        commonMistakes: [
          {
            mistake: 'Plotting (4, −2) by moving 4 units UP and 2 units LEFT.',
            correction: 'ALWAYS read horizontal X FIRST (left/right), then vertical Y SECOND (up/down): (4, −2) goes 4 right, 2 down.',
          },
          {
            mistake: 'Claiming point (0, 5) lies in Quadrant I.',
            correction: 'Because x = 0, (0, 5) lies directly ON the positive Y-axis, NOT inside any quadrant.',
          },
        ],
      },
      {
        id: 'lin-top4',
        title: 'Plotting Linear Graphs, Slope (m) & Real-Life Applications',
        content:
          'Consider a linear relation in two variables such as y = 2x + 1. Pick three convenient x-values (e.g., x = −1, 0, 1), compute the matching y-values (−1, 1, 3), plot points (−1, −1), (0, 1), (1, 3) on graph paper, and join them with a ruler. All points align strictly along a SINGLE straight line—hence the name Linear Graph!\n\nEvery non-vertical straight line has a constant steepness called its Slope (or Gradient m), measuring how much y rises (or falls) for every 1-unit step right along x:\nSlope m = Vertical Rise (Δy) / Horizontal Run (Δx) = (y₂ − y₁) / (x₂ − x₁).',
        subtopics: [
          {
            subheading: 'Special Lines & Real-Life Quantity Graphs',
            body: '• Line y = mx (like Distance = 60 × Time or Simple Interest = 80 × Years): Passes straight through the Origin O(0, 0) whenever c = 0!\n• Horizontal Line y = c: Parallel to the X-axis, slope m = 0 (e.g., y = 4 passes through (0, 4), (3, 4), (−2, 4)).\n• Vertical Line x = c: Parallel to the Y-axis (e.g., x = −3 passes through (−3, 0), (−3, 2)).\n• Reading Values from Graphs: Once a Cost–Quantity or Distance–Time line is drawn, interpolate intermediate readings smoothly using perpendicular grid drops onto the X and Y axes.',
          },
        ],
        diagram: {
          id: 'diag-linear-graph',
          title: 'Interactive & Textbook View: Intersecting Linear Graphs',
          caption: 'Textbook diagram illustrating coordinate axes, intersecting straight lines, and graphical solution points.',
          imageUrl: '/diagrams/diagram_linear_equations_1794062475067.jpg',
          interactiveType: 'linear_graph',
        },
        formulas: [
          { formula: 'Unique Root: ax + b = 0  (a ≠ 0) ⟹ x = −b/a', explanation: 'Exact algebraic solution of a one-variable linear equation.' },
          { formula: 'Slope m = (y₂ − y₁) / (x₂ − x₁)', explanation: 'Constant rate of change (gradient) between any two points on a line.' },
        ],
      },
    ],
    importantTerminology: [
      { term: 'Linear Equation', definition: 'An equation in which the highest power (degree) of the variable is strictly 1.', category: 'Definition' },
      { term: 'Root / Solution', definition: 'The value of the unknown variable making LHS = RHS true.', category: 'Definition' },
      { term: 'Transposition', definition: 'Moving a term across "=" while inverting its sign (+ ⟷ −).', category: 'Method' },
      { term: 'Cross-Multiplication', definition: 'Solving A/B = C/D by multiplying diagonals A·D = B·C.', category: 'Method' },
      { term: 'Origin O(0, 0)', definition: 'Point of perpendicular intersection of the X-axis and Y-axis.', category: 'Graphs' },
      { term: 'Abscissa', definition: 'The x-coordinate of a point, measuring directed horizontal distance from the Y-axis.', category: 'Graphs' },
      { term: 'Ordinate', definition: 'The y-coordinate of a point, measuring directed vertical distance from the X-axis.', category: 'Graphs' },
      { term: 'Quadrants I–IV', definition: 'Four regions of the Cartesian plane carrying signs (+,+), (−,+), (−,−), and (+,−).', category: 'Graphs' },
      { term: 'Slope / Gradient (m)', definition: 'Ratio Δy/Δx measuring vertical rise per unit horizontal run along a line.', category: 'Graphs' },
      { term: 'Linear Graph', definition: 'A straight-line graph connecting all ordered pairs satisfying a linear relation.', category: 'Graphs' },
    ],
    formulaSheet: [
      { title: 'Standard Linear Root', expression: 'ax + b = 0  (a ≠ 0)  ⟹  x = −b/a', meaning: 'Single unique solution for every one-variable linear equation.' },
      { title: 'Cross-Multiplication', expression: 'A/B = C/D  ⟹  A·D = B·C', meaning: 'Requires B ≠ 0, D ≠ 0 and single fraction on each side.' },
      { title: 'Two-Digit Number Forms', expression: 'N = 10t + u ;   N_rev = 10u + t', meaning: 'Sum = 11(t + u); Difference = 9|t − u|.' },
      { title: 'Consecutive Integers', expression: 'All: x, x+1, x+2  |  Even/Odd: x, x+2, x+4', meaning: 'Step by +1 for consecutive integers; +2 for even or odd.' },
      { title: 'Boat Downstream & Upstream', expression: 'Down = (x + s) ;   Up = (x − s)', meaning: 'Still-water speed x, stream speed s.' },
      { title: 'Slope (Gradient)', expression: 'm = (y₂ − y₁) / (x₂ − x₁)', meaning: 'Positive climbs up-right; negative drops down-right; 0 is horizontal.' },
      { title: 'Axis Intercept Points', expression: 'On X-axis: (x, 0) ;   On Y-axis: (0, y)', meaning: 'Points lying directly on an axis belong to no quadrant.' },
      { title: 'Horizontal / Vertical Lines', expression: 'y = k (∥ X-axis) ;   x = k (∥ Y-axis)', meaning: 'Constant coordinate equations.' },
    ],
    comparisonTables: [
      {
        title: 'Table 5.2: Quadrant Sign Conventions & Axis Coordinates',
        headers: ['Location on Cartesian Plane', 'Sign of Abscissa (x)', 'Sign of Ordinate (y)', 'Sample Coordinates'],
        rows: [
          ['Quadrant I', 'Positive (+)', 'Positive (+)', '(3, 5), (0.5, 8)'],
          ['Quadrant II', 'Negative (−)', 'Positive (+)', '(−4, 2), (−7, 1)'],
          ['Quadrant III', 'Negative (−)', 'Negative (−)', '(−3, −6), (−1, −1)'],
          ['Quadrant IV', 'Positive (+)', 'Negative (−)', '(5, −2), (9, −4)'],
          ['On X-axis (excluding Origin)', 'Any non-zero real', '0', '(4, 0), (−6, 0)'],
          ['On Y-axis (excluding Origin)', '0', 'Any non-zero real', '(0, 7), (0, −3)'],
          ['Origin O', '0', '0', '(0, 0)'],
        ],
      },
    ],
    solvedExamples: [
      {
        id: 'sol-lin-1',
        question: 'Solve for x and verify your answer: (3x − 2)/4 − (2x + 3)/3 = 2/3 − x',
        steps: [
          'Step 1: Find LCM of denominators 4 and 3, which is 12.',
          'Step 2: Multiply EVERY term on both sides by 12 (wrap fractional numerators in brackets!):',
          '12·[(3x − 2)/4] − 12·[(2x + 3)/3] = 12·(2/3) − 12·x',
          'Step 3: Simplify coefficients: 3(3x − 2) − 4(2x + 3) = 4(2) − 12x.',
          'Step 4: Expand brackets carefully: 9x − 6 − 8x − 12 = 8 − 12x.',
          'Step 5: Combine like terms on LHS: x − 18 = 8 − 12x.',
          'Step 6: Transpose −12x to LHS and −18 to RHS: x + 12x = 8 + 18 ⟹ 13x = 26 ⟹ x = 2.',
          'Verification: LHS = (6 − 2)/4 − (4 + 3)/3 = 1 − 7/3 = −4/3. RHS = 2/3 − 2 = −4/3. LHS = RHS (Verified!).',
        ],
        finalAnswer: 'x = 2',
        keyRule: 'Clear every denominator in Step 2 using LCM, including whole-number or standalone variable terms like −x.',
      },
      {
        id: 'sol-lin-2',
        question: 'Solve by cross-multiplication: (2y + 5)/(3y + 1) = 3/4',
        steps: [
          'Step 1: Confirm both LHS and RHS are single undivided fractions, then cross-multiply:',
          '4(2y + 5) = 3(3y + 1)',
          'Step 2: Expand both brackets: 8y + 20 = 9y + 3.',
          'Step 3: Transpose: 20 − 3 = 9y − 8y ⟹ 17 = y.',
          'Check denominator non-zero: 3(17) + 1 = 52 ≠ 0.',
        ],
        finalAnswer: 'y = 17',
        keyRule: 'Check that the obtained root never makes any original denominator zero.',
      },
      {
        id: 'sol-lin-3',
        question: 'The digits of a two-digit number differ by 3. If the digits are interchanged and the resulting number is added to the original number, we get 143. What can the original number be?',
        steps: [
          'Step 1: Let units digit = x. Since digits differ by 3, let tens digit = x + 3 (assuming tens > units first).',
          'Step 2: Original number = 10(x + 3) + x = 10x + 30 + x = 11x + 30.',
          'Step 3: Interchanged number = 10x + (x + 3) = 11x + 3.',
          'Step 4: Sum = (11x + 30) + (11x + 3) = 22x + 33 = 143.',
          'Step 5: Solve: 22x = 143 − 33 = 110 ⟹ x = 110 / 22 = 5.',
          'Step 6: Units digit = 5, tens digit = 5 + 3 = 8, so original number is 85 (if units > tens by 3, the number is 58).',
        ],
        finalAnswer: '85 (or 58)',
        keyRule: 'Verify: 85 + 58 = 143 and |8 − 5| = 3!',
      },
      {
        id: 'sol-lin-4',
        question: 'A father is 4 times as old as his son. After 16 years, he will be only twice as old as his son. Find their present ages.',
        steps: [
          'Step 1: Let son’s present age = x years. Then father’s present age = 4x years.',
          'Step 2: Compute ages after 16 years for BOTH: Son = (x + 16), Father = (4x + 16).',
          'Step 3: Translate condition ("father will be twice son"): 4x + 16 = 2(x + 16).',
          'Step 4: Expand and solve: 4x + 16 = 2x + 32 ⟹ 4x − 2x = 32 − 16 ⟹ 2x = 16 ⟹ x = 8.',
          'Step 5: Son’s present age = 8 years; Father’s present age = 4 × 8 = 32 years.',
        ],
        finalAnswer: 'Son = 8 years; Father = 32 years.',
        keyRule: 'Always add the time shift (+16) to BOTH persons’ ages before writing the equation.',
      },
      {
        id: 'sol-lin-5',
        question: 'The denominator of a rational number is greater than its numerator by 8. If the numerator is increased by 17 and the denominator is decreased by 1, the number obtained is 3/2. Find the rational number.',
        steps: [
          'Step 1: Let numerator = x. Then denominator = x + 8. Original rational number = x / (x + 8).',
          'Step 2: Apply changes: New numerator = x + 17; New denominator = (x + 8) − 1 = x + 7.',
          'Step 3: Equation: (x + 17) / (x + 7) = 3 / 2.',
          'Step 4: Cross-multiply: 2(x + 17) = 3(x + 7) ⟹ 2x + 34 = 3x + 21.',
          'Step 5: 34 − 21 = 3x − 2x ⟹ x = 13.',
          'Step 6: Denominator = 13 + 8 = 21. Original rational number = 13 / 21.',
        ],
        finalAnswer: '13/21',
        keyRule: 'Check: (13 + 17) / (21 − 1) = 30 / 20 = 3/2 (Verified!).',
      },
      {
        id: 'sol-lin-6',
        question: 'Lakshmi has currency notes of denominations ₹100, ₹50, and ₹10 in the ratio 2 : 3 : 5. If the total cash with her is ₹4,00,000, how many notes of each denomination does she have?',
        steps: [
          'Step 1: Let counts of ₹100, ₹50, and ₹10 notes be 2x, 3x, and 5x respectively.',
          'Step 2: Calculate value contributed by each denomination:',
          'Value from ₹100 notes = 100 × (2x) = 200x',
          'Value from ₹50 notes = 50 × (3x) = 150x',
          'Value from ₹10 notes = 10 × (5x) = 50x',
          'Step 3: Set total value equal to ₹4,00,000:',
          '200x + 150x + 50x = 4,00,000 ⟹ 400x = 4,00,000 ⟹ x = 1,000.',
          'Step 4: Find exact note counts: ₹100 notes = 2(1000) = 2,000; ₹50 notes = 3(1000) = 3,000; ₹10 notes = 5(1000) = 5,000.',
        ],
        finalAnswer: '2,000 notes of ₹100; 3,000 notes of ₹50; 5,000 notes of ₹10.',
        keyRule: 'Always multiply Note Count × Denomination Value before adding up total cash!',
      },
      {
        id: 'sol-lin-7',
        question: 'Half of a herd of deer are grazing in the field, three-fourths of the remaining are playing nearby, and the rest 9 are drinking water from the pond. Find the total number of deer in the herd.',
        steps: [
          'Step 1: Let total deer in herd = x.',
          'Step 2: Deer grazing in field = x/2. Therefore, REMAINING deer = x − x/2 = x/2.',
          'Step 3: Three-fourths of the REMAINING playing nearby = (3/4) × (x/2) = 3x/8.',
          'Step 4: Total deer = Grazing + Playing + Drinking:',
          'x = x/2 + 3x/8 + 9',
          'Step 5: Multiply entire equation by LCM(2, 8) = 8: 8x = 4x + 3x + 72.',
          'Step 6: 8x = 7x + 72 ⟹ x = 72.',
        ],
        finalAnswer: '72 deer',
        keyRule: 'Pay extreme attention to "of the remaining": 3/4 multiplies (x − x/2), NOT total x!',
      },
      {
        id: 'sol-lin-8',
        question: 'Plot the points A(−2, −3), B(0, 1), and C(2, 5) on a coordinate plane. Verify they are collinear and find the slope of line AC.',
        steps: [
          'Step 1: Point A(−2, −3) → 2 left, 3 down (Quadrant III).',
          'Step 2: Point B(0, 1) → x = 0, 1 up (Positive Y-axis).',
          'Step 3: Point C(2, 5) → 2 right, 5 up (Quadrant I).',
          'Step 4: Check slope between A & B: m_AB = (1 − (−3)) / (0 − (−2)) = 4 / 2 = 2.',
          'Step 5: Check slope between B & C: m_BC = (5 − 1) / (2 − 0) = 4 / 2 = 2.',
          'Step 6: Since consecutive slopes match identically (m = 2) and share point B, A, B, C lie on the same straight line y = 2x + 1!',
        ],
        finalAnswer: 'Collinear straight line y = 2x + 1; Slope m = 2.',
        keyRule: 'Equal slopes between consecutive pairs prove collinearity algebraically.',
      },
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'lin-e1',
          question: 'Solve: 5t − 3 = 3t − 5',
          solutionSteps: ['Transpose 3t to LHS and −3 to RHS: 5t − 3t = −5 + 3.', '2t = −2 ⟹ t = −1.'],
          finalAnswer: 't = −1',
          marks: 1,
        },
        {
          id: 'lin-e2',
          question: 'Identify which quadrant or axis each point lies on: P(−5, 3), Q(4, −6), R(−2, −8), S(7, 0).',
          solutionSteps: ['P(−, +) → Quadrant II.', 'Q(+, −) → Quadrant IV.', 'R(−, −) → Quadrant III.', 'S has y = 0 → Positive X-axis.'],
          finalAnswer: 'P: Q-II, Q: Q-IV, R: Q-III, S: X-axis',
          marks: 2,
        },
        {
          id: 'lin-e3',
          question: 'Solve: 8x + 4 = 3(x − 1) + 7.',
          solutionSteps: ['Expand RHS: 8x + 4 = 3x − 3 + 7 = 3x + 4.', '8x − 3x = 4 − 4 ⟹ 5x = 0 ⟹ x = 0.'],
          finalAnswer: 'x = 0',
          marks: 2,
        },
        {
          id: 'lin-e4',
          question: 'Fifteen years from now Ravi’s age will be four times his present age. What is Ravi’s present age?',
          solutionSteps: ['Let present age = x years.', 'x + 15 = 4x ⟹ 15 = 3x ⟹ x = 5 years.'],
          finalAnswer: '5 years',
          marks: 2,
        },
      ],
      medium: [
        {
          id: 'lin-m1',
          question: 'The sum of three consecutive multiples of 8 is 888. Find the multiples.',
          solutionSteps: ['Let consecutive multiples be 8x, 8(x+1), and 8(x+2).', '8x + 8x + 8 + 8x + 16 = 888 ⟹ 24x + 24 = 888.', '24x = 864 ⟹ x = 36. Multiples: 8×36 = 288, 296, 304.'],
          finalAnswer: '288, 296, 304',
          marks: 3,
        },
        {
          id: 'lin-m2',
          question: 'Solve for x: (2x − 1)/5 − (x + 2)/2 = 3/2.',
          solutionSteps: ['Multiply entire equation by LCM(5, 2) = 10:', '2(2x − 1) − 5(x + 2) = 5(3)', '4x − 2 − 5x − 10 = 15 ⟹ −x − 12 = 15 ⟹ −x = 27 ⟹ x = −27.'],
          finalAnswer: 'x = −27',
          marks: 3,
        },
        {
          id: 'lin-m3',
          question: 'The perimeter of a rectangular swimming pool is 154 m. Its length is 2 m more than twice its breadth. Find the length and breadth.',
          solutionSteps: ['Let breadth = x m. Then length = (2x + 2) m.', 'Perimeter 2(l + b) = 154 ⟹ l + b = 77.', '(2x + 2) + x = 77 ⟹ 3x = 75 ⟹ x = 25 m.', 'Breadth = 25 m; Length = 2(25) + 2 = 52 m.'],
          finalAnswer: 'Length = 52 m; Breadth = 25 m',
          marks: 3,
        },
        {
          id: 'lin-m4',
          question: 'Find the slope of the straight line passing through points (−3, 4) and (5, −12).',
          solutionSteps: ['m = (y₂ − y₁) / (x₂ − x₁) = (−12 − 4) / (5 − (−3))', '= −16 / 8 = −2.'],
          finalAnswer: 'Slope m = −2',
          marks: 2,
        },
      ],
      difficult: [
        {
          id: 'lin-d1',
          question: 'A steamer goes downstream from one port to another in 9 hours and covers the same distance upstream in 10 hours. If the speed of the stream is 1 km/h, find the speed of the steamer in still water and the distance between the ports.',
          solutionSteps: [
            'Let still-water speed = x km/h. Stream speed = 1 km/h.',
            'Downstream speed = (x + 1) km/h; Upstream speed = (x − 1) km/h.',
            'Distance is identical both ways: 9(x + 1) = 10(x − 1).',
            '9x + 9 = 10x − 10 ⟹ x = 19 km/h.',
            'Distance between ports = 9 × (19 + 1) = 9 × 20 = 180 km.',
          ],
          finalAnswer: 'Steamer speed = 19 km/h; Distance = 180 km',
          marks: 4,
        },
        {
          id: 'lin-d2',
          question: 'Solve for m: m − (m − 1)/2 = 1 − (m − 2)/3.',
          solutionSteps: [
            'Multiply every term by LCM(2, 3) = 6:',
            '6m − 3(m − 1) = 6 − 2(m − 2)',
            'Expand carefully: 6m − 3m + 3 = 6 − 2m + 4.',
            '3m + 3 = 10 − 2m ⟹ 5m = 7 ⟹ m = 7/5.',
          ],
          finalAnswer: 'm = 7/5',
          marks: 4,
        },
        {
          id: 'lin-d3',
          question: 'Hari and Harry’s present ages are in the ratio 5 : 7. Four years from now the ratio of their ages will be 3 : 4. Find their present ages.',
          solutionSteps: [
            'Let present ages be 5x and 7x years.',
            'After 4 years: (5x + 4) / (7x + 4) = 3 / 4.',
            'Cross-multiply: 4(5x + 4) = 3(7x + 4) ⟹ 20x + 16 = 21x + 12.',
            'x = 4. Present ages: Hari = 5(4) = 20 years; Harry = 7(4) = 28 years.',
          ],
          finalAnswer: 'Hari = 20 years; Harry = 28 years',
          marks: 4,
        },
        {
          id: 'lin-d4',
          question: 'Solve: (0.25(4f − 3)) = 0.05(10f − 9) using fractions or clean decimals.',
          solutionSteps: [
            'Multiply both sides by 100 to eliminate decimals instantly: 25(4f − 3) = 5(10f − 9).',
            'Divide both sides by 5: 5(4f − 3) = 10f − 9.',
            'Expand: 20f − 15 = 10f − 9 ⟹ 10f = 6 ⟹ f = 6/10 = 0.6 (= 3/5).',
          ],
          finalAnswer: 'f = 0.6 (or 3/5)',
          marks: 3,
        },
      ],
    },
    examPreparationTips: [
      'Write a clean opening "Let ..." declaration WITH UNITS (years, cm, km/h, ₹) in every word problem.',
      'Multiply decimal equations by 10 or 100 on Line 1 to eliminate messy decimals immediately.',
      'NEVER forget whole-number terms (like "+ 5") when multiplying an entire equation by an LCM.',
      'On graph sheets, always label X, X′, Y, Y′, Origin O, arrowhead tips, and Axis Scale (e.g., "1 cm = 1 unit") cleanly.',
      'Substitute your final root back into LHS and RHS mentally to catch sign slips before moving to the next question.',
    ],
    chapterSummary: [
      'A Linear Equation in One Variable has degree 1 and standard form ax + b = 0 (a ≠ 0), yielding one unique root x = −b/a.',
      'Transposition shifts terms across "=" while reversing operations (+ ⟷ −).',
      'Multiplying every term on both sides by the LCM of denominators clears all fractions in one step.',
      'Cross-multiplication A·D = B·C applies ONLY when each side is a single fraction.',
      'A two-digit number with tens digit t and units digit u equals 10t + u (reversed: 10u + t).',
      'On the Cartesian Plane: Abscissa = x, Ordinate = y, and signs run counter-clockwise (+,+), (−,+), (−,−), (+,−).',
      'Points on X-axis satisfy y = 0; points on Y-axis satisfy x = 0.',
      'Slope m = (y₂ − y₁)/(x₂ − x₁) stays constant across any two points on a straight line.',
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Without plotting on graph paper, name the location (quadrant or axis) of P(−4, 5), Q(−2, −6), R(3, −1), S(0, 7), and T(−8, 0).',
        answer:
          'P(−4, 5) has signs (−, +) → Quadrant II.\nQ(−2, −6) has signs (−, −) → Quadrant III.\nR(3, −1) has signs (+, −) → Quadrant IV.\nS(0, 7) has x = 0 → lies strictly on the positive Y-axis (in no quadrant).\nT(−8, 0) has y = 0 → lies strictly on the negative X-axis.',
        type: 'Short Answer',
      },
      {
        question: 'Why is x² + 3x = 4 NOT a linear equation, and why is x/2 + 5 = 9 considered linear?',
        answer:
          'In x² + 3x = 4, the highest exponent of x is 2 (making it quadratic, degree 2). In x/2 + 5 = 9 (i.e., ½x + 5 = 9), the variable x has exponent strictly 1, so it is a linear equation of degree 1.',
        type: 'Reasoning',
      },
      {
        question: 'What is the perpendicular distance of point M(−5, 7) from the X-axis and from the Y-axis?',
        answer:
          'Perpendicular distance from the X-axis equals |ordinate| = |7| = 7 units. Perpendicular distance from the Y-axis equals |abscissa| = |−5| = 5 units.',
        type: 'Short Answer',
      },
      {
        question: 'Solve for x: (x − 3)/5 + (x − 4)/7 = 6 − (2x − 1)/35.',
        answer:
          'Multiply every term by LCM(5, 7, 35) = 35: 7(x − 3) + 5(x − 4) = 210 − (2x − 1). Expand: 7x − 21 + 5x − 20 = 210 − 2x + 1 ⟹ 12x − 41 = 211 − 2x ⟹ 14x = 252 ⟹ x = 18.',
        type: 'Long Answer',
      },
      {
        question: 'The sum of two numbers is 95. If one exceeds the other by 15, find both numbers.',
        answer:
          'Let smaller number = x. Then larger number = x + 15. Sum: x + (x + 15) = 95 ⟹ 2x = 80 ⟹ x = 40. Thus the two numbers are 40 and 55.',
        type: 'Short Answer',
      },
      {
        question: 'Aman’s age is three times his son’s age. Ten years ago he was five times his son’s age. Find their present ages.',
        answer:
          'Let son’s present age = x years; Aman’s present age = 3x years. Ten years ago: Son = (x − 10), Aman = (3x − 10). Equation: 3x − 10 = 5(x − 10) ⟹ 3x − 10 = 5x − 50 ⟹ 40 = 2x ⟹ x = 20. Son is 20 years old; Aman is 60 years old.',
        type: 'Long Answer',
      },
      {
        question: 'Find the area of the rectangle formed by plotting vertices A(1, 1), B(6, 1), C(6, 4), and D(1, 4) on a Cartesian plane.',
        answer:
          'Horizontal base AB runs from x = 1 to x = 6 along y = 1 → Length = 6 − 1 = 5 units. Vertical height BC runs from y = 1 to y = 4 along x = 6 → Breadth = 4 − 1 = 3 units. Area = 5 × 3 = 15 sq. units.',
        type: 'HOTS',
      },
      {
        question: 'A number consists of two digits whose sum is 9. When 27 is subtracted from the number, its digits interchange their places. Find the original number.',
        answer:
          'Let units digit = x, so tens digit = 9 − x. Original number = 10(9 − x) + x = 90 − 9x. Reversed number = 10x + (9 − x) = 9x + 9. Given: (90 − 9x) − 27 = 9x + 9 ⟹ 63 − 9x = 9x + 9 ⟹ 54 = 18x ⟹ x = 3. Tens digit = 6, units digit = 3 → Original number = 63.',
        type: 'Long Answer',
      },
    ],
    practiceExercises: [
      {
        question: 'Solve for y: (y − 3)/5 − (y − 2)/2 = 1',
        hint: 'Multiply every term by LCM = 10 and keep −5(y − 2) = −5y + 10.',
        answerGuide: '2y − 6 − 5y + 10 = 10 ⟹ −3y + 4 = 10 ⟹ y = −2.',
      },
      {
        question: 'Two complementary angles differ by 16°. Find both angles.',
        hint: 'Complementary angles sum to 90°: x + (x + 16) = 90.',
        answerGuide: '37° and 53°.',
      },
      {
        question: 'For linear relation y = 3x − 2, verify whether the point (4, 10) lies on its graph.',
        hint: 'Substitute x = 4 and check whether RHS gives y = 10.',
        answerGuide: 'y = 3(4) − 2 = 10, yes — (4, 10) lies on the line.',
      },
    ],
    practiceWorksheet: {
      title: 'Chapter 5 Comprehensive Practice Worksheet (30 Marks)',
      instructions: 'Show LHS = RHS verification checks for equations and neat ordered tables for graph questions.',
      sections: [
        {
          sectionTitle: 'Section A — Multiple Choice Questions (MCQs) [1 mark each]',
          items: [
            '1. If 5x − 7 = 2x + 8, what is x?  (a) 3   (b) 5   (c) −5   (d) 15',
            '2. Which point lies in Quadrant II?  (a) (3, −4)   (b) (−3, −4)   (c) (−3, 4)   (d) (0, 4)',
            '3. A point on the X-axis at distance 6 units left of the origin has coordinates:  (a) (0, −6)   (b) (6, 0)   (c) (−6, 0)   (d) (−6, −6)',
            '4. Three consecutive integers sum to 51. The largest integer is:  (a) 16   (b) 17   (c) 18   (d) 19',
            '5. Which line passes directly through Origin O(0, 0)?  (a) y = 2x + 3   (b) y = 4x   (c) x = 5   (d) y = −2',
          ],
        },
        {
          sectionTitle: 'Section B — Short Answer Questions [2 marks each]',
          items: [
            '6. Solve by cross-multiplication: (7y + 4)/(y + 2) = −4/3.',
            '7. Two supplementary angles differ by 34°. Find both angles.',
            '8. Find the slope of the line joining A(1, 2) and B(4, 8).',
            '9. Write the equation of a line parallel to the X-axis passing through (2, −5).',
          ],
        },
        {
          sectionTitle: 'Section C — Long Answer Questions [3–4 marks each]',
          items: [
            '10. Solve and verify: (x + 2)/3 − (x − 1)/4 = 2 − (x − 3)/6.',
            '11. Construct a table of 4 points for y = 2x − 1, plot the line on Cartesian axes, and find from the graph where it cuts the X-axis.',
            '12. Bansi has 3 times as many ₹2 coins as he has ₹5 coins. If he has in all ₹77, how many coins of each denomination does he have?',
          ],
        },
        {
          sectionTitle: 'Section D — HOTS & Applications [4 marks each]',
          items: [
            '13. The distance between two towns is 300 km. Two cars start simultaneously toward each other; one travels 7 km/h faster than the other. If they are 34 km apart after 2 hours, find their speeds.',
            '14. Deveshi has a total of ₹590 in ₹50, ₹20, and ₹10 notes. Ratio of ₹50 to ₹20 notes is 3 : 5, and total notes are 25. Find how many notes of each kind she has.',
          ],
        },
      ],
      answerKey: [
        '1. (b) 5  (3x = 15)',
        '2. (c) (−3, 4)',
        '3. (c) (−6, 0)',
        '4. (c) 18  (16 + 17 + 18 = 51)',
        '5. (b) y = 4x  (when x = 0, y = 0)',
        '6. 21y + 12 = −4y − 8 ⟹ 25y = −20 ⟹ y = −4/5',
        '7. x + (x + 34) = 180 ⟹ 73° and 107°',
        '8. m = (8 − 2)/(4 − 1) = 6/3 = 2',
        '9. y = −5',
        '10. Multiply by 12: 4(x+2) − 3(x−1) = 24 − 2(x−3) ⟹ x + 11 = 30 − 2x ⟹ 3x = 19 ⟹ x = 19/3',
        '11. Cuts X-axis where y = 0 ⟹ 2x − 1 = 0 ⟹ (0.5, 0)',
        '12. 5x + 2(3x) = 77 ⟹ 11x = 77 ⟹ x = 7 → 7 coins of ₹5, 21 coins of ₹2',
        '13. 2x + 2(x + 7) = 300 − 34 = 266 ⟹ 4x + 14 = 266 ⟹ x = 63 km/h and 70 km/h',
        '14. 50(3x) + 20(5x) + 10(25 − 8x) = 590 ⟹ 250x + 250 − 80x = 590 ⟹ 170x = 340 ⟹ x = 2 → 6 of ₹50, 10 of ₹20, 9 of ₹10',
      ],
    },
  },
  quizQuestions: [
    { id: 'mql1', type: 'mcq', question: 'What is the root of the equation 3x − 7 = 14?', options: ['5', '7', '8', '6'], correctAnswer: '7', explanation: '3x = 14 + 7 = 21 ⟹ x = 7.', difficulty: 'easy', marks: 1 },
    { id: 'mql2', type: 'mcq', question: 'Which point lies directly on the Y-axis?', options: ['(5, 0)', '(0, −4)', '(4, 4)', '(−4, 1)'], correctAnswer: '(0, −4)', explanation: 'Any point on the Y-axis has abscissa x = 0.', difficulty: 'easy', marks: 1 },
    { id: 'mql3', type: 'fill_blank', question: 'The point of intersection of the X-axis and Y-axis is called the _______.', correctAnswer: 'origin', explanation: 'Origin O(0, 0) is the intersection point of both coordinate axes.', difficulty: 'easy', marks: 1 },
    { id: 'mql4', type: 'hots', question: 'If (x + 2)/3 = (x − 2)/5, what is x?', options: ['−8', '8', '−4', '4'], correctAnswer: '−8', explanation: '5(x + 2) = 3(x − 2) ⟹ 5x + 10 = 3x − 6 ⟹ 2x = −16 ⟹ x = −8.', difficulty: 'medium', marks: 2 },
    { id: 'mql5', type: 'mcq', question: 'What is the perpendicular distance of point (−6, −9) from the X-axis?', options: ['6 units', '9 units', '−6 units', '−9 units'], correctAnswer: '9 units', explanation: 'Distance is always non-negative, and distance from the X-axis equals |y-coordinate| = |−9| = 9 units.', difficulty: 'medium', marks: 1 },
    { id: 'mql6', type: 'mcq', question: 'Which quadrant contains the point (−5, −2)?', options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'], correctAnswer: 'Quadrant III', explanation: 'Both x < 0 and y < 0 define Quadrant III.', difficulty: 'easy', marks: 1 },
    { id: 'mql7', type: 'true_false', question: 'Every linear equation in one variable has infinitely many solutions.', correctAnswer: false, explanation: 'False: ax + b = 0 (a ≠ 0) has a unique single root x = −b/a.', difficulty: 'easy', marks: 1 },
    { id: 'mql8', type: 'mcq', question: 'If a two-digit number has tens digit x and units digit 5, its numerical value is:', options: ['5x', 'x + 5', '10x + 5', '50 + x'], correctAnswer: '10x + 5', explanation: 'Place value of tens digit x is 10x, plus units digit 5.', difficulty: 'easy', marks: 1 },
    { id: 'mql9', type: 'fill_blank', question: 'If 2x − 1/3 = 5/3, then x = _______.', correctAnswer: '1', explanation: '2x = 5/3 + 1/3 = 6/3 = 2 ⟹ x = 1.', difficulty: 'easy', marks: 1 },
    { id: 'mql10', type: 'mcq', question: 'What is the slope of the line passing through (0, 2) and (3, 11)?', options: ['2', '3', '4', '9'], correctAnswer: '3', explanation: 'Slope m = (11 − 2) / (3 − 0) = 9/3 = 3.', difficulty: 'medium', marks: 1 },
    { id: 'mql11', type: 'hots', question: 'Sum of two consecutive odd integers is 68. Find the smaller integer.', options: ['31', '33', '35', '29'], correctAnswer: '33', explanation: 'x + (x + 2) = 68 ⟹ 2x = 66 ⟹ x = 33 (check: 33 + 35 = 68).', difficulty: 'medium', marks: 2 },
    { id: 'mql12', type: 'true_false', question: 'The graph of the equation y = 6 is a line parallel to the Y-axis.', correctAnswer: false, explanation: 'False: y = 6 has constant height 6 for every x, making it horizontal and parallel to the X-axis.', difficulty: 'medium', marks: 1 },
  ],
  flashcards: [
    { id: 'fc-m-lin', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'How do consecutive odd integers step in algebra?', back: 'x,  x + 2,  x + 4 (both consecutive even and odd step by +2!).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-m-lin2', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'Formula for Slope m between (x₁, y₁) and (x₂, y₂)?', back: 'm = (y₂ − y₁) / (x₂ − x₁)', category: 'Formula', importance: 'Essential' },
    { id: 'fc-m-lin3', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'Value of two-digit number with tens t and units u?', back: '10t + u (Reversed number: 10u + t).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-m-lin4', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'Downstream vs Upstream speed formulas (boat x, stream s)?', back: 'Downstream = (x + s);  Upstream = (x − s).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-m-lin5', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'Signs of (x, y) in Quadrants I, II, III, and IV?', back: 'Q-I (+,+), Q-II (−,+), Q-III (−,−), Q-IV (+,−).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-m-lin6', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'Which axis contains (0, −7), and which contains (5, 0)?', back: '(0, −7) lies on Y-axis (x = 0); (5, 0) lies on X-axis (y = 0).', category: 'Definition', importance: 'Standard' },
    { id: 'fc-m-lin7', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'Distance of point P(x, y) from X-axis vs from Y-axis?', back: 'From X-axis = |y| (ordinate); From Y-axis = |x| (abscissa).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-m-lin8', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'Golden rule before cross-multiplying A/B = C/D?', back: 'Ensure EACH side is a single fraction with no added/subtracted standalone terms outside.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-m-lin9', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'Graph of y = c vs Graph of x = c?', back: 'y = c is parallel to X-axis (horizontal); x = c is parallel to Y-axis (vertical).', category: 'Formula', importance: 'Standard' },
    { id: 'fc-m-lin10', subjectId: 'mathematics', chapterId: 'math-ch2', chapterTitle: 'Linear Equations & Graphs', front: 'What does "A exceeds B by 9" translate to?', back: 'A − B = 9 (or A = B + 9).', category: 'Definition', importance: 'Standard' },
  ],
};
