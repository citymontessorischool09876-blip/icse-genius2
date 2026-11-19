import { Chapter } from '../../types/index.ts';

export const CH3_SQUARES_CUBES: Chapter = {
  id: 'math-squares-cubes',
  subjectId: 'mathematics',
  chapterNumber: 3,
  title: 'Squares, Square Roots, Cubes and Cube Roots',
  subtitle: 'Perfect Squares & Cubes, Pythagorean Triplets, Prime Factorisation & Long Division Method',
  term: 'Half-Yearly',
  estimatedMinutes: 80,
  notes: {
    introduction:
      'Suppose a school assembly ground is shaped like a perfect square whose side measures 24 metres. Finding how many square metres of interlocking tiles cover it is direct multiplication: 24 × 24 = 24² = 576 m². Now reverse the question: suppose a gardener knows a square courtyard has area 1,764 m² and needs to buy fencing around its perimeter. To calculate the side length s such that s × s = 1,764, she must run squaring in reverse—discovering the Square Root (√1,764 = 42 m).\n\nMoving from flat two-dimensional areas into three-dimensional solid space introduces Cubes and Cube Roots. A 4 × 4 × 4 Rubik’s-style block contains 4 × 4 × 4 = 4³ = 64 unit cubes, while designing a cubical underground water cistern capable of holding 3,375 cubic metres requires finding its internal edge s such that s³ = 3,375—giving the Cube Root (∛3,375 = 15 m).\n\nIn ICSE Class 8 (aligned with Revised New Mathematics Today), this chapter bridges arithmetic and geometry. We uncover elegant structural properties of square numbers (digit-ending tests, trailing-zero parity, sum of odd integers, Pythagorean triplets), compare Prime Factorisation (paired factors for √, triplets for ∛) with the systematic Long Division Method (essential for huge integers, decimals, and "least number to add or subtract" problems), and learn rapid cube-root estimation for negative and rational numbers.',
    learningObjectives: [
      'Define perfect squares and apply unit-digit (2, 3, 7, 8) and trailing-zero tests to eliminate non-squares immediately.',
      'Derive and use structural properties of squares: sum of first n consecutive odd numbers, count of non-squares 2n between n² and (n+1)², and Pythagorean triplets (2m, m²−1, m²+1).',
      'Compute square roots by Prime Factorisation and identify the least multiplier/divisor needed to make an imperfect number a perfect square.',
      'Execute the Long Division Method accurately for large 4-to-6-digit integers, decimal numbers, and "least number to add/subtract" problems.',
      'Calculate square roots of fractions and products using √(a/b) = √a / √b and √(ab) = √a · √b.',
      'Identify perfect cubes via prime triplets and compute cube roots of positive, negative, and rational numbers (∛(−m) = −∛m).',
      'Estimate cube roots of 4-to-6-digit perfect cubes mentally using unit-digit correspondence and cube-interval bounds.',
    ],
    topics: [
      {
        id: 'sq-top1',
        title: 'Perfect Squares, Digit Tests & Structural Number Patterns',
        content:
          'A natural number m is called a Perfect Square (or square number) if there exists a natural number n such that m = n × n = n². Geometrically, n² unit tiles arrange cleanly into a square grid of n rows and n columns.\n\nLook closely at the unit digits of squares of 0 through 9:\n0² = 0,  1² = 1,  2² = 4,  3² = 9,  4² = 16,  5² = 25,  6² = 36,  7² = 49,  8² = 64,  9² = 81.\nObserve what digits NEVER appear in the units place: 2, 3, 7, and 8! Furthermore, whenever a number ends in zeroes, squaring DOUBLES the count of trailing zeroes (e.g., 30² = 900 has 2 zeroes; 400² = 160,000 has 4 zeroes).\n\nNotice also a subtlety tested in ICSE Reasoning questions: A number ending in 2, 3, 7, or 8, or ending in an ODD count of trailing zeroes (like 4,000), is GUARANTEED NOT to be a perfect square. However, ending in 0, 1, 4, 5, 6, or 9 only means it MIGHT be a square—it does not guarantee it (for example, 14, 21, 35, and 59 are NOT squares!).',
        subtopics: [
          {
            subheading: 'Pattern 1: Unit Digit Symmetry & Tens Digit Clues',
            body: '• If a number ends in 1 or 9, its square ends in 1.\n• If a number ends in 2 or 8, its square ends in 4.\n• If a number ends in 3 or 7, its square ends in 9.\n• If a number ends in 4 or 6, its square ends in 6.\n• If a number ends in 5, its square ALWAYS ends in 25 (e.g., 25² = 625, 35² = 1225).\n• Shortcut for squaring any number ending in 5 (say N5): multiply N × (N + 1) and attach 25 at the end! Example: 75² → 7 × 8 = 56 → 5,625.',
            keyPoint: 'Even numbers always have even squares; odd numbers always have odd squares.',
          },
          {
            subheading: 'Pattern 2: Sum of Consecutive Odd Natural Numbers',
            body: 'Every perfect square n² equals the exact sum of the first n consecutive odd natural numbers starting from 1:\n1 = 1 = 1²\n1 + 3 = 4 = 2²\n1 + 3 + 5 = 9 = 3²\n1 + 3 + 5 + 7 = 16 = 4²\n...\n1 + 3 + 5 + ... + (2n − 1) = n².\nThis produces the Repeated Subtraction Test: subtracting 1, 3, 5, 7, ... sequentially from a square lands on 0 at step n, proving √(n²) = n.',
          },
          {
            subheading: 'Pattern 3: Non-Squares Between Consecutive Squares & Adding Consecutive Triangular Numbers',
            body: 'How many whole integers lie STRICTLY between n² and (n + 1)²? Compute (n + 1)² − n² − 1 = (n² + 2n + 1) − n² − 1 = 2n!\nFor example, between 9² = 81 and 10² = 100 lie exactly 2 × 9 = 18 non-square integers (82 through 99).\nAlso, the difference between two consecutive squares equals their sum: (n + 1)² − n² = (n + 1) + n = 2n + 1. Example: 38² − 37² = 38 + 37 = 75 (no squaring required!).',
          },
          {
            subheading: 'Pattern 4: Pythagorean Triplets',
            body: 'Three positive integers (a, b, c) form a Pythagorean Triplet if a² + b² = c² (meaning they form the sides of a right-angled triangle). For EVERY integer m > 1, the triple:\n(2m,  m² − 1,  m² + 1)\nis ALWAYS a Pythagorean triplet! Let us verify algebraically: (2m)² + (m² − 1)² = 4m² + m⁴ − 2m² + 1 = m⁴ + 2m² + 1 = (m² + 1)².\nWorked Mini-Example: Find a Pythagorean triplet whose smallest member is 12.\nSet 2m = 12 ⟹ m = 6. Then m² − 1 = 36 − 1 = 35, and m² + 1 = 36 + 1 = 37. Check: 12² + 35² = 144 + 1225 = 1369 = 37²!',
            keyPoint: 'Caution: If 2m is odd or gives a smaller m² − 1, test m² − 1 = given number as well (e.g., for smallest member 8: 2m = 8 gives (8, 15, 17); while m² − 1 = 8 gives m = 3 → (6, 8, 10)).',
          },
        ],
        diagram: {
          id: 'diag-sq-cube-grid',
          title: 'Geometrical Meaning of Perfect Square (4² = 16) and Perfect Cube (3³ = 27)',
          caption: '2D square tiling (area n²) contrasted with 3D isometric cube packing (volume n³).',
          svgFigure: 'squares_cubes_grid',
        },
        definitions: [
          { term: 'Perfect Square', definition: 'A natural number m expressible as n² where n is a natural number.' },
          { term: 'Square Root (√)', definition: 'The positive number y whose square equals x (y² = x); inverse operation of squaring.' },
          { term: 'Pythagorean Triplet', definition: 'Three natural numbers (a, b, c) satisfying a² + b² = c², generated systematically by (2m, m²−1, m²+1).' },
          { term: 'Hardy–Ramanujan Number', definition: '1729 — the smallest integer expressible as the sum of two positive cubes in two ways: 12³ + 1³ = 10³ + 9³.' },
        ],
        commonMistakes: [
          {
            mistake: 'Writing √(9 + 16) = √9 + √16 = 3 + 4 = 7.',
            correction: 'Square roots NEVER split over addition or subtraction! Evaluate inside first: √(9 + 16) = √25 = 5.',
          },
          {
            mistake: 'Claiming 1,500 is a square because √1500 might have 15 + 00.',
            correction: 'Count trailing zeroes and test non-zero part: 1,500 has 2 zeroes (even), yet 15 is NOT a square! Both parts must be squares.',
          },
        ],
      },
      {
        id: 'sq-top2',
        title: 'Square Roots by Prime Factorisation & Smallest Multiplier/Divisor Problems',
        content:
          'To compute √N when N is a perfect square, Prime Factorisation breaks N into its prime building blocks:\nStep 1: Divide N repeatedly by primes (2, 3, 5, 7, 11, ...) until quotient reaches 1.\nStep 2: Group identical prime factors into PAIRS (2 × 2, 3 × 3, ...).\nStep 3: Take ONE factor out of each pair and multiply them together—that product is √N!\n\nWhy does Prime Factorisation work so cleanly for "Find the smallest number to multiply or divide N to make a perfect square"? Because any prime factor left UNPAIRED after pairing is the exact culprit keeping N from being a perfect square! Multiplying N by those unpaired prime(s) completes their pairs; dividing N by those unpaired prime(s) removes them completely.',
        subtopics: [
          {
            subheading: 'Root Laws for Products and Rational Fractions',
            body: 'For any positive rational numbers a and b:\n1. Product Law: √(a × b) = √a × √b  (Example: √(16 × 49) = 4 × 7 = 28).\n2. Quotient Law: √(a / b) = √a / √b  (Example: √(144/625) = 12/25).\nFor mixed fractions inside a root, ALWAYS convert to an improper fraction first! Example: √(2⁷/₉) = √(25/9) = 5/3 = 1⅔. Never take separate roots of the integer part and fraction part!',
          },
          {
            subheading: 'Smallest Square Divisible by Several Given Numbers',
            body: 'Classic ICSE problem: "Find the smallest square number divisible by each of a, b, c."\nStep 1: Compute L = LCM(a, b, c).\nStep 2: Prime factorise L and identify all unpaired primes.\nStep 3: Multiply L by the product of those unpaired primes—the resulting square is both the smallest perfect square AND divisible by a, b, and c.',
          },
        ],
        formulas: [
          { formula: '√(a × b) = √a × √b   and   √(a / b) = √a / √b   (a, b > 0)', explanation: 'Square roots distribute cleanly over multiplication and division (NEVER over + or −).' },
          { formula: '(n + 1)² − n² = 2n + 1', explanation: 'Difference of two consecutive squares equals their sum.' },
        ],
        realLifeExample:
          'School Parade & Plantation Problems: When 1,296 NCC cadets must stand in a square formation (number of rows equals cadets per row), the commander computes √1,296 = √(2⁴ × 3⁴) = 2² × 3² = 36 rows of 36 cadets each.',
      },
      {
        id: 'sq-top3',
        title: 'Square Roots by Long Division Method (Integers, Decimals & Rounding)',
        content:
          'What if a number is huge (like 5,49,081), is NOT a perfect square (so Prime Factorisation gets stuck), or is a decimal like 54.76 or 0.9? The Long Division Method works universally for EVERY non-negative number!',
        subtopics: [
          {
            subheading: '6-Step Long Division Algorithm',
            body: '1. Form Pairs (Bars): Starting strictly from the decimal point, place bars over pairs of digits moving RIGHT-TO-LEFT on the integer part (if odd number of digits, the leftmost digit gets a single bar), and moving LEFT-TO-RIGHT on the fractional part (pad a trailing 0 if needed so every decimal bar covers 2 digits).\n2. First Quotient Digit: Find the largest integer q whose square q² ≤ leftmost period. Subtract q² from that period.\n3. Bring Down Next Pair: Bring down the next two-digit bar beside the remainder to form the New Dividend.\n4. Double Quotient for Partial Divisor: Double the entire current quotient and append a blank space (2q_) on the left.\n5. Guess Matching Digit d: Choose the largest digit d (0–9) such that (2q followed by d) × d ≤ New Dividend. Write d in BOTH the divisor blank and the top quotient!\n6. Repeat until all pairs are exhausted (or to required decimal places).',
            keyPoint: 'Always insert the decimal point in the quotient the instant you cross the decimal point to bring down the first fractional pair!',
          },
          {
            subheading: 'Least Number to Subtract vs. Least Number to Add',
            body: 'When applying Long Division to a non-square N yields quotient q and non-zero remainder R:\n• Since q² is the largest square strictly below N (and N = q² + R), the LEAST NUMBER TO SUBTRACT from N to make a perfect square is simply the REMAINDER R itself (leaving q²).\n• The next higher square is (q + 1)². Therefore, the LEAST NUMBER TO ADD to N to make a perfect square is (q + 1)² − N!\nNever guess which direction—check N − R = q² vs. (q + 1)² − N.',
          },
          {
            subheading: 'Greatest & Least n-Digit Perfect Squares',
            body: '• Greatest 4-digit / 5-digit perfect square: Start with 9,999 (or 99,999), run Long Division, and SUBTRACT the remainder R.\n• Least 4-digit / 5-digit perfect square: Start with 1,000 (or 10,000), run Long Division to get quotient q with non-zero remainder, and compute (q + 1)²!',
          },
        ],
        comparisonTable: {
          caption: 'Table 3.1: Prime Factorisation vs. Long Division Method for Square Roots',
          headers: ['Criterion', 'Prime Factorisation Method', 'Long Division Method'],
          rows: [
            ['Best suited for', 'Moderate perfect squares with small prime factors', 'Very large numbers, decimals & imperfect numbers'],
            ['Finds smallest multiplier/divisor?', 'Yes — unpaired prime(s) directly show it', 'No'],
            ['Finds least number to add/subtract?', 'No (cannot measure gap directly)', 'Yes — Remainder R (subtract) or (q+1)²−N (add)'],
            ['Works on decimals like √0.9?', 'Awkward unless converted to fraction with power-10 denom', 'Yes — direct decimal pairing (0.90 00 00)'],
          ],
        },
        commonMistakes: [
          {
            mistake: 'Pairing 0.9 as 0.09 when computing √0.9 by Long Division.',
            correction: 'Decimal digits pair LEFT-TO-RIGHT starting from the decimal point! 0.9 becomes 0. 90 00 00, giving √0.9 ≈ 0.948 (nearly 1, NOT 0.3!).',
          },
          {
            mistake: 'Pairing 5-digit integer 12544 from left-to-right as (12)(54)(4).',
            correction: 'Integer digits pair strictly RIGHT-TO-LEFT from the units digit: (1)(25)(44)!',
          },
        ],
      },
      {
        id: 'sq-top4',
        title: 'Cubes, Negative Cubes, Prime Triplets & Fast Cube Root Estimation',
        content:
          'When a number n is multiplied by itself three times—n × n × n = n³—the result is called the Cube of n. A natural number is a Perfect Cube if and only if every prime factor in its prime factorisation appears in groups of THREE (triplets).\n\nLook at two critical contrasts between Squares and Cubes:\n1. Sign Behaviour: Squaring any negative number kills its minus sign ((−4)² = +16), so negative integers have NO real square roots. Cubing a negative number PRESERVES its minus sign: (−4)³ = (−4)(−4)(−4) = −64! Consequently, every negative integer has a real negative cube root: ∛(−m) = −∛m.\n2. Unit Digits: While squares avoid 2, 3, 7, and 8, cubes of 0–9 produce ALL TEN digits (0–9) in a crisp ONE-TO-ONE bijection! Check: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343, 8³=512, 9³=729, 0³=0.',
        subtopics: [
          {
            subheading: '3-Step Cube Root Estimation Shortcut (For Verified Perfect Cubes ≤ 6 Digits)',
            body: 'Because each digit 0–9 maps to a UNIQUE last digit in cubes (2 ↔ 8, 3 ↔ 7, and 0,1,4,5,6,9 stay themselves!), we can compute ∛N in 5 seconds:\nExample: Find ∛19,683 (given it is a perfect cube).\nStep 1: Split off the last THREE digits into Group 1: (19) | (683).\nStep 2: Group 1 (683) ends in 3. Since only 7³ = 343 ends in 3, the UNITS DIGIT of ∛19683 is 7!\nStep 3: Inspect Group 2 (19). Bracket 19 between consecutive cubes: 2³ = 8 ≤ 19 < 27 = 3³. Pick the smaller integer → TENS DIGIT is 2!\nAnswer: ∛19,683 = 27! (Check: 27 × 27 × 27 = 19,683.)',
            keyPoint: 'Pairs that swap unit digits under cubing: 2 ↔ 8 and 3 ↔ 7; all other digits (0, 1, 4, 5, 6, 9) match their own cube’s unit digit!',
          },
          {
            subheading: 'Cube Roots of Products & Negative Fractions',
            body: 'Just like square roots:\n• ∛(a × b) = ∛a × ∛b\n• ∛(a / b) = ∛a / ∛b  (b ≠ 0)\n• ∛(−a) = −∛a.\nExample: ∛(−125 × 343) = − (∛125 × ∛343) = − (5 × 7) = −35.',
          },
        ],
        comparisonTable: {
          caption: 'Table 3.2: Comprehensive Comparison — Perfect Squares vs. Perfect Cubes',
          headers: ['Property', 'Squares (n²) & Roots (√m)', 'Cubes (n³) & Roots (∛m)'],
          rows: [
            ['Prime Factor Grouping', 'Pairs of 2 identical factors', 'Triplets of 3 identical factors'],
            ['Negative Base Power', '(−a)² = +a² (always positive)', '(−a)³ = −a³ (always negative)'],
            ['Root of Negative Number', 'Not a real number', 'Real & negative: ∛(−64) = −4'],
            ['Trailing Zeroes in Perfect Power', 'Even count (2, 4, 6...)', 'Multiple of 3 (3, 6, 9...)'],
            ['Possible Units Digits', 'Only 0, 1, 4, 5, 6, 9 (never 2, 3, 7, 8)', 'All 10 digits 0–9 (unique 1-to-1 match!)'],
          ],
        },
        realLifeExample:
          'Shipping Logistics & Fluid Engineering: A pharmaceutical factory packs cube-shaped boxes of volume 2,744 cm³ inside master cartons. Taking ∛2744 = ∛(2³ × 7³) = 14 cm immediately gives the exact inner dimension needed for tray dividers.',
      },
    ],
    importantTerminology: [
      { term: 'Perfect Square', definition: 'An integer m = n² formed by squaring a natural number n.', category: 'Definition' },
      { term: 'Square Root (√)', definition: 'The non-negative value r such that r² = N.', category: 'Operator' },
      { term: 'Pythagorean Triplet', definition: 'Three natural numbers (a, b, c) with a² + b² = c²; general form (2m, m²−1, m²+1).', category: 'Geometry Link' },
      { term: 'Period / Bar (Long Division)', definition: 'Pairs of digits grouped right-to-left (integer) and left-to-right (decimal) from the decimal point.', category: 'Algorithm' },
      { term: 'Perfect Cube', definition: 'An integer m = n³ where every prime factor occurs in multiples of 3.', category: 'Definition' },
      { term: 'Cube Root (∛)', definition: 'The unique real value y such that y³ = x; defined for negative integers as well.', category: 'Operator' },
      { term: 'Unpaired Prime', definition: 'A prime left out of pairs (for squares) or triplets (for cubes) showing the smallest multiplier/divisor.', category: 'Prime Method' },
      { term: 'Triangular Number Sum', definition: 'Sum of two consecutive triangular numbers always yields a square (e.g., 6 + 10 = 16 = 4²).', category: 'Pattern' },
      { term: 'Taxicab / Hardy–Ramanujan Number', definition: '1729 = 1³ + 12³ = 9³ + 10³, smallest sum of two positive cubes in two distinct ways.', category: 'Number Theory' },
      { term: 'Rational Root', definition: '√(p/q) = √p/√q or ∛(p/q) = ∛p/∛q evaluated after converting mixed numbers to improper fractions.', category: 'Algebra' },
    ],
    formulaSheet: [
      { title: 'Odd Integer Identity', expression: '1 + 3 + 5 + ... + (2n − 1) = n²', meaning: 'Sum of first n consecutive odd natural numbers equals n².' },
      { title: 'Non-Squares Between Squares', expression: 'Count between n² and (n + 1)² = 2n', meaning: 'Exactly 2n natural numbers lie strictly between consecutive squares.' },
      { title: 'Consecutive Square Difference', expression: '(n + 1)² − n² = 2n + 1 = (n + 1) + n', meaning: 'Difference of consecutive squares equals their sum.' },
      { title: 'Pythagorean Triplet Formula', expression: '(2m,  m² − 1,  m² + 1)   for m > 1', meaning: 'Guarantees (2m)² + (m²−1)² = (m²+1)².' },
      { title: 'Square of Number Ending in 5', expression: '(N5)² = [N × (N + 1)] followed by 25', meaning: 'Mental math rule: 85² → 8×9=72 → 7,225.' },
      { title: 'Root Product & Quotient', expression: '√(ab) = √a · √b ;  √(a/b) = √a / √b', meaning: 'Also true for cube roots ∛(ab) and ∛(a/b).' },
      { title: 'Negative Cube Root', expression: '∛(−m) = −∛m', meaning: 'Negative sign pulls straight outside cube root.' },
      { title: 'Least Addition to Square', expression: 'Add = (q + 1)² − N', meaning: 'When Long Division of N yields integer quotient q and remainder R > 0.' },
    ],
    comparisonTables: [
      {
        title: 'Table 3.3: Must-Know Squares (1–25) & Cubes (1–12) Quick Reference',
        headers: ['n', 'n² (Square)', 'n³ (Cube)', 'Unit Digit Pattern Note'],
        rows: [
          ['1 / 11 / 21', '1 / 121 / 441', '1 / 1331 / 9261', 'Ends in 1 → Square ends in 1; Cube ends in 1'],
          ['2 / 12 / 22', '4 / 144 / 484', '8 / 1728 / 10648', 'Ends in 2 → Square ends in 4; Cube ends in 8'],
          ['3 / 13 / 23', '9 / 169 / 529', '27 / 2197 / —', 'Ends in 3 → Square ends in 9; Cube ends in 7'],
          ['4 / 14 / 24', '16 / 196 / 576', '64 / 2744 / —', 'Ends in 4 → Square ends in 6; Cube ends in 4'],
          ['5 / 15 / 25', '25 / 225 / 625', '125 / 3375 / —', 'Ends in 5 → Square ends in 25; Cube ends in 5'],
          ['6 / 7 / 8 / 9', '36, 49, 64, 81', '216, 343, 512, 729', '7³ ends in 3; 8³ ends in 2; 9³ ends in 9'],
        ],
      },
    ],
    solvedExamples: [
      {
        id: 'sol-sq-1',
        question: 'Find the smallest natural number by which 1,800 must be (a) multiplied, and (b) divided, to make it a perfect square. Find the square root of the resulting square in each case.',
        steps: [
          'Step 1: Prime factorise 1,800 = 18 × 100 = (2 × 3²) × (2² × 5²) = 2³ × 3² × 5².',
          'Step 2: Group identical prime factors into pairs: (2 × 2) × 2 × (3 × 3) × (5 × 5).',
          'Step 3: Observe that a single factor 2 remains unpaired.',
          'Step 4 (Multiply): Multiplying 1,800 by 2 pairs it up → 1,800 × 2 = 3,600 = (2² × 2² × 3² × 5²). Its square root = 2 × 2 × 3 × 5 = 60.',
          'Step 5 (Divide): Dividing 1,800 by 2 removes the stray 2 → 1,800 ÷ 2 = 900 = (2² × 3² × 5²). Its square root = 2 × 3 × 5 = 30.',
        ],
        finalAnswer: '(a) Multiply by 2 (√3600 = 60);  (b) Divide by 2 (√900 = 30).',
        keyRule: 'Whatever prime factors remain unpaired tell you the exact multiplier OR divisor.',
      },
      {
        id: 'sol-sq-2',
        question: 'Find the square root of 54.76 using the Long Division Method.',
        steps: [
          'Step 1: Pair digits outward from the decimal point: 54 . 76.',
          'Step 2: Largest integer square ≤ 54 is 7² = 49. Place 7 in quotient and subtract 49: Remainder = 54 − 49 = 5.',
          'Step 3: Place decimal point right after 7 in quotient. Bring down the next pair 76 → New Dividend = 576.',
          'Step 4: Double current quotient 7 → partial divisor prefix = 14_. Choose digit d such that (14d) × d ≤ 576.',
          'Step 5: Test d = 4: 144 × 4 = 576 cleanly! Remainder = 0.',
        ],
        finalAnswer: '√54.76 = 7.4',
        keyRule: 'Insert the decimal point in the quotient immediately upon bringing down the first decimal bar.',
      },
      {
        id: 'sol-sq-3',
        question: 'Find (a) the least 4-digit number that is a perfect square, and (b) the least number to be added to 5,607 to make a perfect square.',
        steps: [
          'Part (a): Least 4-digit number is 1,000. Group pairs: 10 00.',
          '3² = 9 ≤ 10 (rem 1 → 100). Double 3 → 6_. 61 × 1 = 61 ≤ 100 (quotient = 31, rem = 39).',
          'So 31² = 961 < 1,000. The very next perfect square is 32² = 1,024.',
          'Part (b): Run Long Division on 56 07: 7² = 49 (rem 7 → 707); double 7 → 14_. 144 × 4 = 576 (rem 131).',
          'Thus 74² = 5,476 < 5,607 < 75² = 5,625.',
          'Least number to add = 75² − 5,607 = 5,625 − 5,607 = 18.',
        ],
        finalAnswer: '(a) 1,024   (b) Add 18 (resulting square = 5,625 = 75²)',
        keyRule: 'For "least number to add", advance the Long Division integer quotient q to (q + 1)².',
      },
      {
        id: 'sol-sq-4',
        question: 'Find the greatest 5-digit number that is a perfect square.',
        steps: [
          'Step 1: Greatest 5-digit number is 99,999. Group right-to-left: (9)(99)(99).',
          'Step 2: First period 9: 3² = 9, remainder 0. Bring down 99.',
          'Step 3: Double 3 → 6_. 61 × 1 = 61 ≤ 99 (62×2=124 > 99). Remainder = 99 − 61 = 38. Bring down 99 → 3899.',
          'Step 4: Double 31 → 62_. Try d = 6: 626 × 6 = 3,756 ≤ 3,899 (627×7 = 4,389 > 3,899).',
          'Step 5: Remainder = 3,899 − 3,756 = 143.',
          'Step 6: Subtract remainder 143 from 99,999: 99,999 − 143 = 99,856 (= 316²).',
        ],
        finalAnswer: '99,856 (which equals 316²)',
        keyRule: 'Greatest n-digit square = Greatest n-digit integer − Long Division Remainder.',
      },
      {
        id: 'sol-sq-5',
        question: 'Find the square root of 3 correct to 2 decimal places using Long Division.',
        steps: [
          'Step 1: To round accurately to 2 decimal places, compute to 3 decimal places by padding 3 zero pairs: 3. 00 00 00.',
          'Step 2: 1² = 1 ≤ 3 (rem 2 → bring down 00 → 200; place decimal point after 1).',
          'Step 3: Double 1 → 2_. Test d = 7: 27 × 7 = 189 ≤ 200 (rem 11 → 1100). Quotient = 1.7.',
          'Step 4: Double 17 → 34_. Test d = 3: 343 × 3 = 1,029 ≤ 1,100 (rem 71 → 7100). Quotient = 1.73.',
          'Step 5: Double 173 → 346_. Test d = 2: 3462 × 2 = 6,924 ≤ 7,100. Quotient = 1.732.',
          'Step 6: Round 1.732 to 2 decimal places (third digit 2 < 5): 1.73.',
        ],
        finalAnswer: '√3 ≈ 1.73 (to 2 decimal places)',
        keyRule: 'Always compute ONE extra decimal digit beyond the rounding requirement.',
      },
      {
        id: 'sol-sq-6',
        question: 'Evaluate: ∛(−2744 / 125)',
        steps: [
          'Step 1: Pull negative sign outside cube root: − ∛(2744 / 125) = − (∛2744 / ∛125).',
          'Step 2: Prime factorise 2,744 = 2 × 1,372 = 2² × 686 = 2³ × 343 = 2³ × 7³.',
          'Step 3: Take one factor per triplet: ∛2744 = 2 × 7 = 14.',
          'Step 4: Prime factorise 125 = 5³ ⟹ ∛125 = 5.',
          'Step 5: Combine with negative sign: −14/5 = −2⅘ = −2.8.',
        ],
        finalAnswer: '−14/5 (or −2.8)',
        keyRule: 'Cube roots preserve negative signs: ∛(−a/b) = −∛a / ∛b.',
      },
      {
        id: 'sol-sq-7',
        question: 'Find the smallest natural number by which 3,087 must be multiplied so that the product becomes a perfect cube.',
        steps: [
          'Step 1: Prime factorise 3,087: sum of digits 3+0+8+7 = 18 (divisible by 9).',
          '3,087 ÷ 3 = 1,029;  1,029 ÷ 3 = 343;  343 = 7 × 7 × 7 = 7³.',
          'Step 2: So 3,087 = 3² × 7³.',
          'Step 3: Factor 7³ is already a complete triplet, whereas factor 3 appears only twice (3²).',
          'Step 4: Multiply by one more 3 to complete the triplet 3³: 3,087 × 3 = 9,261 = 21³.',
        ],
        finalAnswer: '3',
        keyRule: 'Do NOT confuse squares and cubes: for a cube, every prime exponent must be a multiple of 3.',
      },
      {
        id: 'sol-sq-8',
        question: 'Evaluate: √(1.96) + √(0.0196) − ∛(−0.008)',
        steps: [
          'Step 1: Convert decimals to fractions cleanly:',
          '√(1.96) = √(196/100) = 14/10 = 1.4.',
          '√(0.0196) = √(196/10000) = 14/100 = 0.14.',
          '∛(−0.008) = ∛(−8/1000) = −2/10 = −0.2.',
          'Step 2: Substitute carefully tracking the double minus:',
          '= 1.4 + 0.14 − (−0.2) = 1.54 + 0.20 = 1.74.',
        ],
        finalAnswer: '1.74',
        keyRule: 'Every 2 decimal places inside √ halve to 1 decimal place outside; every 3 decimal places inside ∛ divide by 3!',
      },
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'sq-e1',
          question: 'Write a Pythagorean triplet whose smallest member is 10.',
          solutionSteps: ['Set 2m = 10 ⟹ m = 5.', 'Other members: m² − 1 = 25 − 1 = 24 and m² + 1 = 25 + 1 = 26.', 'Verify: 10² + 24² = 100 + 576 = 676 = 26².'],
          finalAnswer: '(10, 24, 26)',
          marks: 2,
        },
        {
          id: 'sq-e2',
          question: 'Using the identity for consecutive odd numbers, find √64 by repeated subtraction.',
          solutionSteps: ['64−1=63; 63−3=60; 60−5=55; 55−7=48; 48−9=39; 39−11=28; 28−13=15; 15−15=0.', 'Zero is reached in exactly 8 steps.'],
          finalAnswer: '√64 = 8',
          marks: 2,
        },
        {
          id: 'sq-e3',
          question: 'Without calculating, how many natural numbers lie strictly between 15² and 16²?',
          solutionSteps: ['Count between n² and (n + 1)² = 2n.', 'Here n = 15, so 2 × 15 = 30.'],
          finalAnswer: '30 non-square numbers',
          marks: 1,
        },
        {
          id: 'sq-e4',
          question: 'Find the cube of −4/5.',
          solutionSteps: ['(−4/5)³ = (−4)³ / 5³ = −64 / 125.'],
          finalAnswer: '−64/125',
          marks: 1,
        },
      ],
      medium: [
        {
          id: 'sq-m1',
          question: 'Find the smallest number by which 675 must be multiplied to obtain a perfect cube.',
          solutionSteps: ['675 = 25 × 27 = 5² × 3³.', 'Factor 3 is already a triplet (3³), while 5 appears only twice (5²).', 'Multiply by one more 5 to complete 5³: 675 × 5 = 3,375 = 15³.'],
          finalAnswer: '5',
          marks: 2,
        },
        {
          id: 'sq-m2',
          question: 'Find the smallest square number that is divisible by each of 8, 15, and 20.',
          solutionSteps: [
            'LCM(8, 15, 20) = 120.',
            'Prime factorise 120 = 2³ × 3¹ × 5¹ = (2²) × 2 × 3 × 5.',
            'Unpaired primes are 2, 3, and 5. Multiply 120 by (2 × 3 × 5) = 30.',
            'Result = 120 × 30 = 3,600 (= 60²).',
          ],
          finalAnswer: '3,600',
          marks: 3,
        },
        {
          id: 'sq-m3',
          question: 'Evaluate √(4²¹/₂₅) cleanly as a mixed fraction.',
          solutionSteps: [
            'Convert the mixed fraction to an improper fraction: (4 × 25 + 21) / 25 = (100 + 21) / 25 = 121 / 25.',
            'Apply Quotient Law of Roots: √(121 / 25) = √121 / √25 = 11 / 5 = 2⅕.',
          ],
          finalAnswer: '2⅕',
          marks: 2,
        },
        {
          id: 'sq-m4',
          question: 'Estimate the cube root of 110,592 without prime factorisation (given it is a perfect cube).',
          solutionSteps: [
            'Split into last 3 digits and remaining digits: (110) | (592).',
            'Last digit of 592 is 2 → units digit of cube root is 8 (since 8³ = 512 ends in 2).',
            'First group 110 lies between 4³ = 64 and 5³ = 125 → tens digit is 4.',
            'Check: 48³ = 110,592!',
          ],
          finalAnswer: '48',
          marks: 2,
        },
      ],
      difficult: [
        {
          id: 'sq-d1',
          question: 'Three numbers are in the ratio 1 : 2 : 3 and the sum of their cubes is 4,500. Find the numbers.',
          solutionSteps: [
            'Let the numbers be x, 2x, and 3x.',
            'Sum of cubes: x³ + (2x)³ + (3x)³ = x³ + 8x³ + 27x³ = 36x³.',
            '36x³ = 4,500 ⟹ x³ = 4,500 / 36 = 125 ⟹ x = ∛125 = 5.',
            'Numbers are 5, 10, and 15.',
          ],
          finalAnswer: '5, 10, and 15',
          marks: 4,
        },
        {
          id: 'sq-d2',
          question: 'The area of a square field is 51,984 m². A cyclist runs along its boundary at 12 km/h. How long will it take to complete 5 rounds?',
          solutionSteps: [
            'Side of square = √51,984 = 228 m (via Long Division: 2²=4, rem 119; 42×2=84, rem 3584; 448×8=3584).',
            'Perimeter of 1 round = 4 × 228 = 912 m.',
            'Total distance in 5 rounds = 5 × 912 = 4,560 m = 4.56 km.',
            'Time = Distance / Speed = 4.56 / 12 = 0.38 hours = 0.38 × 60 = 22.8 minutes (= 22 min 48 sec).',
          ],
          finalAnswer: '22 minutes 48 seconds',
          marks: 4,
        },
        {
          id: 'sq-d3',
          question: 'Find the square root of 17,956 and hence evaluate √179.56 + √1.7956.',
          solutionSteps: [
            'By Long Division: 17956 → (1)(79)(56) → 1²=1; 23×3=69 (rem 10); 264×4=1056 → √17,956 = 134.',
            '√179.56 = √(17956/100) = 134/10 = 13.4.',
            '√1.7956 = √(17956/10000) = 134/100 = 1.34.',
            'Sum = 13.4 + 1.34 = 14.74.',
          ],
          finalAnswer: '√17,956 = 134; Sum = 14.74',
          marks: 4,
        },
        {
          id: 'sq-d4',
          question: 'A General wants to arrange 1,000 soldiers in a solid square formation (equal rows and columns). (a) How many soldiers are left out of the largest possible square? (b) How many minimum extra soldiers are needed to form the next larger square?',
          solutionSteps: [
            'Run Long Division on 1,000 → (10)(00): 3² = 9 (remainder 1 → bring down 00 → 100); double 3 → 6_; 61 × 1 = 61 (remainder 39).',
            'Thus 31² = 961 soldiers fit inside a 31 × 31 square, leaving 39 extra soldiers left over.',
            'To form the next 32 × 32 (= 1,024) square, additional soldiers needed = 1,024 − 1,000 = 24.',
          ],
          finalAnswer: '(a) 39 soldiers left out;  (b) 24 more soldiers needed for a 32×32 square.',
          marks: 4,
        },
      ],
    },
    examPreparationTips: [
      'Memorize squares up to 25² = 625 and cubes up to 12³ = 1,728 to speed up exam checking dramatically.',
      'Always convert mixed numbers (like 2⁷/₉) to improper fractions (25/9) BEFORE taking √ or ∛.',
      'In Long Division of decimals like √0.9, pad zeroes in pairs AFTER the decimal: 0. 90 00 00.',
      'Write (2x)³ = 8x³ (never 2x³) whenever setting up ratio-of-cubes word problems.',
      'When using the Cube Root Estimation shortcut, always confirm the given number IS stated to be a perfect cube first!',
    ],
    chapterSummary: [
      'Perfect squares NEVER end in digits 2, 3, 7, 8 or in an odd number of trailing zeroes.',
      'The sum of the first n consecutive odd natural numbers starting at 1 is always n².',
      'Strictly between n² and (n + 1)² lie exactly 2n non-square natural numbers.',
      'For any integer m > 1, (2m, m² − 1, m² + 1) generates a Pythagorean Triplet.',
      'Prime factorisation uses pairs of identical factors for √ and triplets for ∛.',
      'Long Division handles huge integers, decimals, and least-addition/subtraction problems universally.',
      'Negative numbers have no real square roots, but every negative number has a negative cube root: ∛(−a) = −∛a.',
      'In cube-root estimation, unit digits swap cleanly as 2 ↔ 8 and 3 ↔ 7 while 0, 1, 4, 5, 6, 9 remain unchanged.',
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Without computing roots, explain why 4,35,600 is a perfect square whereas 4,35,000 is not.',
        answer:
          '4,35,600 = 4,356 × 100 = 66² × 10² = 660² (it has an even count of 2 trailing zeroes and 4,356 is a square). By contrast, 4,35,000 ends in 3 trailing zeroes (an odd count), which immediately makes it impossible to be a perfect square.',
        type: 'Reasoning',
      },
      {
        question: 'Can a perfect cube end with two zeroes (e.g., 2,700)? Explain with reason.',
        answer:
          'No! Cubing any integer ending in k zeroes produces 3k trailing zeroes (a multiple of 3). Because 2 is not a multiple of 3, a number ending in exactly two zeroes can never be a perfect cube.',
        type: 'Reasoning',
      },
      {
        question: 'A school auditorium seats 2,025 students such that the number of rows equals the number of seats per row. Find the number of rows.',
        answer:
          'Let number of rows = x. Then seats per row = x, giving x × x = x² = 2,025. Prime factorising 2,025 = 5² × 3⁴ = (5 × 3²)² = 45². Therefore, there are 45 rows.',
        type: 'Short Answer',
      },
      {
        question: 'Evaluate: ∛(−512) × √(0.0256).',
        answer:
          '∛(−512) = −8 (since 8³ = 512). Next, √(0.0256) = √(256 / 10000) = 16 / 100 = 0.16. Product = (−8) × 0.16 = −1.28.',
        type: 'Short Answer',
      },
      {
        question: 'Find the smallest number by which 13,230 must be divided so that the quotient is a perfect cube.',
        answer:
          'Prime factorise 13,230 = 10 × 1323 = (2 × 5) × (3 × 441) = 2 × 5 × 3 × 3² × 7² = 2¹ × 3³ × 5¹ × 7². Notice 3³ is a complete triplet, whereas 2¹, 5¹, and 7² are incomplete. Dividing by 2 × 5 × 7² = 490 removes all incomplete factors, leaving 27 = 3³.',
        type: 'Long Answer',
      },
      {
        question: 'Evaluate √(40.96) + √(0.4096) by first finding √4,096 via Long Division.',
        answer:
          'Long Division on (40)(96): 6² = 36 (rem 4 → 496). Double 6 → 12_. 124 × 4 = 496 (rem 0). So √4,096 = 64. Thus √(40.96) = 6.4 and √(0.4096) = 0.64. Sum = 6.4 + 0.64 = 7.04.',
        type: 'Long Answer',
      },
      {
        question: 'Write a Pythagorean triplet in which one member is 17 (as the hypotenuse).',
        answer:
          'Try m² + 1 = 17 ⟹ m² = 16 ⟹ m = 4. Then 2m = 8 and m² − 1 = 15. Thus (8, 15, 17) is a Pythagorean triplet (8² + 15² = 64 + 225 = 289 = 17²).',
        type: 'Short Answer',
      },
      {
        question: 'Find the value of x if √(1 + x/144) = 13/12.',
        answer:
          'Square both sides: 1 + x/144 = (13/12)² = 169/144. Subtract 1 (= 144/144): x/144 = 169/144 − 144/144 = 25/144. Multiplying both sides by 144 yields x = 25.',
        type: 'HOTS',
      },
    ],
    practiceExercises: [
      {
        question: 'Find the smallest square number divisible by each of 8, 15, and 20.',
        hint: 'Find LCM(8, 15, 20) = 120, then multiply by unpaired primes.',
        answerGuide: '120 = 2³ × 3 × 5; multiply by 2 × 3 × 5 = 30 to get 3,600 (= 60²).',
      },
      {
        question: 'Find the side of a cube whose volume is 4,913 cm³.',
        hint: 'Use cube-root estimation: ends in 3 → root ends in 7; remaining 4 lies between 1³ and 2³.',
        answerGuide: '∛4,913 = 17 cm.',
      },
      {
        question: 'Find the least number that must be subtracted from 3,250 to get a perfect square.',
        hint: 'Run Long Division on (32)(50) and read off the final remainder.',
        answerGuide: '57² = 3,249; remainder = 1 (subtract 1).',
      },
    ],
    practiceWorksheet: {
      title: 'Chapter 3 Comprehensive Practice Worksheet (30 Marks)',
      instructions: 'Show full prime factorisation trees and Long Division bars clearly.',
      sections: [
        {
          sectionTitle: 'Section A — Multiple Choice Questions (MCQs) [1 mark each]',
          items: [
            '1. Which number can NEVER be a perfect square?  (a) 10,201   (b) 6,241   (c) 4,832   (d) 9,801',
            '2. What is the unit digit of (478)³?  (a) 2   (b) 4   (c) 6   (d) 8',
            '3. How many non-square integers lie strictly between 19² and 20²?  (a) 19   (b) 38   (c) 39   (d) 40',
            '4. Evaluate ∛(−27/125):  (a) 3/5   (b) −3/5   (c) −9/25   (d) −27/5',
            '5. Which of the following is NOT a Pythagorean triplet?  (a) (6, 8, 10)   (b) (5, 12, 13)   (c) (7, 24, 25)   (d) (4, 5, 6)',
          ],
        },
        {
          sectionTitle: 'Section B — Short Answer Questions [2 marks each]',
          items: [
            '6. Without adding, evaluate: 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15.',
            '7. Find the smallest number to multiply 2,560 by to make a perfect cube.',
            '8. Evaluate √(144/225) + ∛(−27/125).',
            '9. Write a Pythagorean triplet whose smallest member is 14.',
          ],
        },
        {
          sectionTitle: 'Section C — Long Answer Questions [3–4 marks each]',
          items: [
            '10. Find √7,921 by the Long Division Method.',
            '11. Find the least number that must be added to 1,300 to obtain a perfect square, and state the square root of that perfect square.',
            '12. Find √2 correct to 2 decimal places using Long Division.',
          ],
        },
        {
          sectionTitle: 'Section D — HOTS & Geometry Applications [4 marks each]',
          items: [
            '13. Find the side of a square field whose area equals that of a rectangle of sides 64 m and 36 m.',
            '14. Find the difference between 12³ and 36², and determine the smallest integer it must be multiplied by to become a perfect cube.',
          ],
        },
      ],
      answerKey: [
        '1. (c) 4,832 (squares never end in 2)',
        '2. (a) 2 (since 8³ = 512)',
        '3. (b) 38 (2 × 19 = 38)',
        '4. (b) −3/5',
        '5. (d) (4, 5, 6) since 16 + 25 = 41 ≠ 36',
        '6. 8 odd terms ⟹ 8² = 64',
        '7. 2,560 = 2⁹ × 5¹; multiply by 5² = 25 (yields 64,000 = 40³)',
        '8. 12/15 + (−3/5) = 4/5 − 3/5 = 1/5',
        '9. 2m = 14 ⟹ m = 7 → (14, 48, 50)',
        '10. 89 (89 × 89 = 7,921)',
        '11. 36² = 1,296 < 1,300 < 37² = 1,369; add 69; √1,369 = 37',
        '12. √2 = 1.414... ≈ 1.41',
        '13. Area = 64 × 36 = 2,304 m² ⟹ side = 48 m',
        '14. 12³ − 36² = 1,728 − 1,296 = 432 = 2⁴ × 3³; multiply by 2² = 4 to obtain 1,728 (= 12³)!',
      ],
    },
  },
  quizQuestions: [
    { id: 'sqq1', type: 'mcq', question: 'Which of the following numbers can NEVER be a perfect square?', options: ['2,401', '7,921', '5,347', '4,096'], correctAnswer: '5,347', explanation: 'No perfect square ends in the digit 7.', difficulty: 'easy', marks: 1 },
    { id: 'sqq2', type: 'mcq', question: 'How many natural numbers lie strictly between 12² and 13²?', options: ['12', '24', '25', '26'], correctAnswer: '24', explanation: 'Between n² and (n + 1)² lie 2n numbers = 2 × 12 = 24.', difficulty: 'easy', marks: 1 },
    { id: 'sqq3', type: 'fill_blank', question: 'Evaluate ∛(−512) = _______.', correctAnswer: '-8', explanation: '(−8) × (−8) × (−8) = −512.', difficulty: 'easy', marks: 1 },
    { id: 'sqq4', type: 'true_false', question: 'If a number ends in 5, its cube always ends in 5.', correctAnswer: true, explanation: '5³ = 125, so any integer ending in 5 has a cube ending in 5.', difficulty: 'easy', marks: 1 },
    { id: 'sqq5', type: 'hots', question: 'What is the smallest number by which 392 must be multiplied to get a perfect cube?', options: ['2', '4', '7', '14'], correctAnswer: '7', explanation: '392 = 2³ × 7². Multiplying by 7 yields 2³ × 7³ = 14³ = 2,744.', difficulty: 'medium', marks: 2 },
    { id: 'sqq6', type: 'mcq', question: 'Evaluate 52² − 51² without direct squaring:', options: ['1', '101', '103', '203'], correctAnswer: '103', explanation: '(n + 1)² − n² = (n + 1) + n = 52 + 51 = 103.', difficulty: 'easy', marks: 1 },
    { id: 'sqq7', type: 'mcq', question: 'If a cube has volume 1,331 cm³, what is the length of each edge?', options: ['9 cm', '11 cm', '13 cm', '21 cm'], correctAnswer: '11 cm', explanation: '11 × 11 × 11 = 1,331.', difficulty: 'easy', marks: 1 },
    { id: 'sqq8', type: 'mcq', question: 'What is the value of √(0.0144)?', options: ['1.2', '0.12', '0.012', '0.14'], correctAnswer: '0.12', explanation: '√(144 / 10000) = 12 / 100 = 0.12.', difficulty: 'medium', marks: 1 },
    { id: 'sqq9', type: 'true_false', question: 'For all positive numbers a and b, √(a + b) = √a + √b.', correctAnswer: false, explanation: 'False: √(9 + 16) = √25 = 5, whereas √9 + √16 = 3 + 4 = 7.', difficulty: 'medium', marks: 1 },
    { id: 'sqq10', type: 'hots', question: 'What is the smallest natural number by which 720 must be divided to make it a perfect square?', options: ['2', '3', '5', '10'], correctAnswer: '5', explanation: '720 = 144 × 5 = 12² × 5. Dividing by 5 leaves 144 = 12².', difficulty: 'medium', marks: 2 },
    { id: 'sqq11', type: 'fill_blank', question: 'The greatest 3-digit perfect square is _______.', correctAnswer: '961', explanation: '31² = 961 and 32² = 1,024 (4 digits).', difficulty: 'medium', marks: 1 },
    { id: 'sqq12', type: 'hots', question: 'Evaluate: ∛(−27) + √(169) − √(25):', options: ['5', '−5', '15', '11'], correctAnswer: '5', explanation: '(−3) + 13 − 5 = 5.', difficulty: 'medium', marks: 2 },
  ],
  flashcards: [
    { id: 'fc-sq1', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'Which unit digits can NEVER end a perfect square?', back: '2, 3, 7, 8 (and an odd number of trailing zeroes).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-sq2', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'Formula for a Pythagorean Triplet from integer m > 1?', back: '(2m,  m² − 1,  m² + 1)', category: 'Formula', importance: 'Essential' },
    { id: 'fc-sq3', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'How many integers lie strictly between n² and (n + 1)²?', back: '2n non-square natural numbers.', category: 'Formula', importance: 'Standard' },
    { id: 'fc-sq4', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'How do you find least number to ADD vs SUBTRACT via Long Division?', back: 'Subtract = Remainder R; Add = (q + 1)² − N.', category: 'Formula', importance: 'Essential' },
    { id: 'fc-sq5', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'What is ∛(−1,728)?', back: '−12 (since (−12)³ = −1,728).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-sq6', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'Cube-root unit-digit swap pairs?', back: '2 ↔ 8 and 3 ↔ 7 (all other digits 0, 1, 4, 5, 6, 9 map to themselves!).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-sq7', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'What is the Hardy–Ramanujan number 1729 famous for?', back: 'Smallest sum of two positive cubes in two distinct ways: 12³ + 1³ = 10³ + 9³.', category: 'Definition', importance: 'Standard' },
    { id: 'fc-sq8', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'Difference of two consecutive squares (n + 1)² − n²?', back: '(n + 1) + n = 2n + 1 (just add the two consecutive bases!).', category: 'Formula', importance: 'Standard' },
    { id: 'fc-sq9', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'How do you convert √0.9 for Long Division?', back: 'Pair decimal digits left-to-right with trailing zeroes: 0. 90 00 00 (≈ 0.949).', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-sq10', subjectId: 'mathematics', chapterId: 'math-squares-cubes', chapterTitle: 'Squares & Cubes', front: 'Prime factorisation difference between Square Root and Cube Root?', back: 'Pair identical primes in 2s for √; group in triplets of 3 for ∛.', category: 'Definition', importance: 'Essential' },
  ],
};
