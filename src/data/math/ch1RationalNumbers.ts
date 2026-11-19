import { Chapter } from '../../types/index.ts';

export const CH1_RATIONAL_NUMBERS: Chapter = {
  id: 'math-ch1',
  subjectId: 'mathematics',
  chapterNumber: 1,
  title: 'Rational Numbers',
  subtitle: 'Properties, Standard Form, Number Line Representation, Density & Word Problems',
  term: 'Half-Yearly',
  estimatedMinutes: 75,
  notes: {
    introduction:
      'Every branch of mathematics grows out of a practical limitation of the number system that came before it. In primary school, we begin with Natural Numbers (N = {1, 2, 3, ...}) simply to count apples, chairs, or students in a classroom. When we ask "How many books remain if all 5 books are given away?", Natural Numbers fall short—so mathematicians added zero to form Whole Numbers (W = {0, 1, 2, ...}). Yet Whole Numbers still break down whenever we subtract a larger quantity from a smaller one, such as calculating a temperature drop from 4°C down by 9°C (4 − 9 = −5°C) or recording a bank account overdraft. To solve subtraction completely, we expand to Integers (Z = {..., −3, −2, −1, 0, 1, 2, 3, ...}).\n\nHowever, Integers still leave division incomplete! Suppose 3 equal bars of chocolate must be shared fairly among 5 friends, or we try solving the simple equation 5x = 3. No integer satisfies 5x = 3. In real life—measuring ¾ of a kilometre, sharing 5/2 metres of cloth, reading −12.5 m below sea level, or expressing electrical resistance ratios—we constantly need quotients of integers. Thus, mathematics introduces Rational Numbers (denoted by Q, from the word "Quotient").\n\nIn ICSE Class 8 (aligned with Revised New Mathematics Today), Rational Numbers unify all integers, positive and negative fractions, terminating decimals (like 0.375 = 3/8), and repeating decimals (like 0.333... = 1/3) under one coherent algebraic roof. In this chapter, we examine their exact definition, unique standard form, plotting and comparison on the number line, the six fundamental algebraic properties across addition, subtraction, multiplication, and division, the astonishing Density Property, and structured ICSE word problems.',
    learningObjectives: [
      'Define a rational number rigorously as p/q where p and q are integers and q ≠ 0, and explain why division by zero is undefined.',
      'Distinguish clearly between Fractions (non-negative parts of a whole) and Rational Numbers (positive, zero, or negative quotients of integers).',
      'Classify positive, negative, and zero rational numbers and calculate the absolute value |p/q|.',
      'Convert any rational number into its unique Standard Form (q > 0 and HCF(|p|, q) = 1) and generate equivalent rational numbers.',
      'Compare and order rational numbers accurately using both Cross-Multiplication and the LCM of denominators.',
      'Plot any positive or negative rational number on a number line by partitioning unit intervals into equal subdivisions.',
      'Verify and apply Closure, Commutative, Associative, Identity, Inverse, and Distributive Laws to simplify complex expressions rapidly.',
      'Insert any specified count of rational numbers between two distinct rational numbers using the Mean Method and Equivalent Denominator Method, and solve multi-step word problems.',
    ],
    topics: [
      {
        id: 'math1-top1',
        title: 'Meaning, Number System Hierarchy, Classification & Standard Form',
        content:
          'A number is called a Rational Number if it can be written in the form p/q, where p (called the numerator) and q (called the denominator) are both integers (p ∈ Z, q ∈ Z), and the denominator q is strictly not equal to zero (q ≠ 0).\n\nWhy must q ≠ 0? Division answers the inverse multiplication question: writing 6/2 = 3 works because 2 × 3 = 6. Now try assigning any value k to 6/0 = k. That would force 0 × k = 6. Since zero multiplied by any finite number is always 0—never 6—no such number k exists! Even 0/0 is indeterminate because 0 × k = 0 would fit every k at once, breaking uniqueness. Hence division by zero is permanently undefined in mathematics.\n\nNotice how earlier number families sit neatly inside Q like nested boxes: Every Natural Number is a Whole Number; every Whole Number is an Integer; and every Integer m can be expressed as m/1 (for example, −7 = −7/1, and 0 = 0/1 = 0/(−8)). Therefore, every Natural Number, Whole Number, Integer, and Fraction is automatically a Rational Number—while numbers like −3/5 or 7/(−4) are Rational Numbers that are neither integers nor fractions.',
        subtopics: [
          {
            subheading: 'Positive, Negative, and Zero Rational Numbers',
            body: 'We classify a rational number p/q into three mutually exclusive types based on signs:\n• Positive Rational Number: Numerator p and denominator q carry the SAME sign (both positive like 5/8, or both negative like (−5)/(−8)). Because two minus signs divide to give a plus sign, (−p)/(−q) = p/q > 0.\n• Negative Rational Number: Numerator p and denominator q carry OPPOSITE signs (either p < 0 and q > 0, like −4/9, or p > 0 and q < 0, like 4/(−9)). Both represent the exact same negative point −4/9 on the left of zero.\n• Zero (0): Written as 0/1, 0/(−3), etc. Zero is a rational number that is NEITHER positive nor negative; it acts as the neutral boundary point between positive and negative numbers.',
            keyPoint: 'Always simplify double negatives immediately: (−7)/(−11) = +7/11 is a POSITIVE rational number, not negative!',
          },
          {
            subheading: 'Equivalent Rational Numbers & Fundamental Property',
            body: 'If p/q is a rational number and m is any non-zero integer (m ≠ 0), multiplying or dividing both numerator and denominator by m leaves the numerical value unchanged:\np/q = (p × m) / (q × m)  and  p/q = (p ÷ d) / (q ÷ d) when d divides both p and q.\nFor example, −2/3 = (−4)/6 = (−6)/9 = 10/(−15). These look different visually, yet mark the exact same location on the number line.',
            keyPoint: 'To test whether two rational numbers a/b and c/d are equivalent, cross-multiply: a/b = c/d if and only if a × d = b × c.',
          },
          {
            subheading: 'Standard Form (Lowest Terms with Positive Denominator)',
            body: 'Because each rational number has infinitely many equivalent forms, mathematicians define one unique canonical version called Standard Form. A rational number p/q is in Standard Form if and only if two rules hold simultaneously:\n1. Its denominator q is strictly positive (q > 0). If q < 0, multiply numerator and denominator by −1 to move the minus sign up to the numerator.\n2. The positive magnitudes |p| and q have no common factor greater than 1, i.e., HCF(|p|, q) = 1 (they are co-prime).\n\nWorked Mini-Example: Convert 84/(−126) into standard form.\nStep 1: Multiply top and bottom by −1 to make denominator positive: 84/(−126) = −84/126.\nStep 2: Find HCF(84, 126). Prime factors: 84 = 2² × 3 × 7; 126 = 2 × 3² × 7 → HCF = 2 × 3 × 7 = 42.\nStep 3: Divide numerator and denominator by 42: (−84 ÷ 42) / (126 ÷ 42) = −2/3.',
            keyPoint: 'In every ICSE exam question, leave your final rational answer in Standard Form even if the question does not explicitly remind you.',
          },
          {
            subheading: 'Absolute Value (Modulus) of a Rational Number',
            body: 'The absolute value of a rational number x, written |x|, measures its unsigned distance from 0 on the number line. For x = p/q, |p/q| = |p| / |q|. Thus |−5/9| = 5/9, |5/9| = 5/9, and |0| = 0. Notice that |x| is always greater than or equal to 0, and |a − b| gives the positive distance separating points a and b on the number line.',
          },
        ],
        definitions: [
          {
            term: 'Rational Number (Q)',
            definition: 'Any number expressible in the form p/q where p and q are integers and q ≠ 0.',
          },
          {
            term: 'Standard Form',
            definition: 'The unique form p/q of a rational number where denominator q > 0 and HCF(|p|, q) = 1.',
          },
          {
            term: 'Equivalent Rational Numbers',
            definition: 'Different-looking quotients (like −3/4 and 9/(−12)) representing the same rational value, linked by (p×m)/(q×m) for m ≠ 0.',
          },
          {
            term: 'Absolute Value |p/q|',
            definition: 'The non-negative distance of p/q from 0 on the number line, equal to |p| / |q|.',
          },
        ],
        comparisonTable: {
          caption: 'Table 1.1: Comparing Whole Numbers, Integers, Fractions, and Rational Numbers',
          headers: ['Feature', 'Fractions (a/b)', 'Integers (Z)', 'Rational Numbers (Q)'],
          rows: [
            ['Allowed Numerator/Denominator', 'Whole numbers (a ≥ 0, b > 0)', 'Whole positive, 0, negative (denom = 1)', 'Any integers p, q with q ≠ 0'],
            ['Can Value Be Negative?', 'No (always ≥ 0)', 'Yes (e.g., −1, −45)', 'Yes (e.g., −3/7, 5/(−8))'],
            ['Closed under Addition & Multiplication?', 'Yes', 'Yes', 'Yes'],
            ['Closed under Subtraction?', 'No (e.g., 1/3 − 2/3 ∉ Fractions)', 'Yes', 'Yes'],
            ['Closed under Division (non-zero)?', 'Yes (for positive fractions)', 'No (e.g., 3 ÷ 5 ∉ Z)', 'Yes (every non-zero division stays in Q)'],
            ['Typical Examples', '3/4, 0/5, 9/2', '−12, 0, +19', '−3/4, −12/1, 0/1, 7/3'],
          ],
        },
        commonMistakes: [
          {
            mistake: 'Leaving 7/(−11) as Standard Form because 7 and 11 are prime.',
            correction: 'Standard form strictly requires a POSITIVE denominator (q > 0). Rewrite 7/(−11) as −7/11.',
          },
          {
            mistake: 'Treating 0/5 as undefined, or 5/0 as 0.',
            correction: '0 divided by any non-zero integer IS valid and equals 0 (0/5 = 0). Dividing BY zero (5/0) is undefined!',
          },
        ],
      },
      {
        id: 'math1-top2',
        title: 'Number Line Representation, Comparison & Ordering',
        content:
          'Every rational number corresponds to a single exact geometric point on a straight horizontal line extending infinitely in both directions, called the Number Line. We mark a reference origin at 0. All positive rational numbers lie to the right of 0, and all negative rational numbers lie symmetrically to the left of 0.\n\nTo plot any rational number p/q cleanly:\nCase 1 (Proper Rational, |p| < q): The point lies strictly between −1 and +1. Divide the unit segment [0, 1] (if positive) or [−1, 0] (if negative) into exactly q equal sub-segments, then count |p| marks outward from 0.\nCase 2 (Improper Rational, |p| ≥ q): First rewrite p/q as a mixed fraction (for example, −11/4 = −2¾). This immediately tells you the point sits between −2 and −3! Divide the unit segment [−2, −3] into 4 equal parts and step 3 parts left from −2.',
        subtopics: [
          {
            subheading: 'Method 1: Number Line Positioning & Sign Comparison',
            body: 'On a standard horizontal number line, numbers increase steadily from left to right. Therefore:\n• Every positive rational number is greater than 0.\n• 0 is greater than every negative rational number.\n• Every positive rational number is strictly greater than every negative rational number (no calculation needed: 1/1000 > −99!).\n• Among two negative rational numbers, the one closer to 0 is GREATER. For instance, −1/4 > −3/4 because −1/4 lies to the right of −3/4.',
          },
          {
            subheading: 'Method 2: LCM Common-Denominator Method (Best for 3 or More Numbers)',
            body: 'To arrange several rational numbers (ascending or descending):\nStep 1: Ensure every denominator is positive (move minus signs to numerators).\nStep 2: Compute L = LCM of all positive denominators.\nStep 3: Convert each rational number into an equivalent rational number with denominator L.\nStep 4: Compare the adjusted numerators just like ordinary integers, then write back the ORIGINAL numbers in order.',
            keyPoint: 'Example: Compare −3/4, −5/6, and −7/12. LCM(4, 6, 12) = 12 → −9/12, −10/12, −7/12. Since −10 < −9 < −7, ascending order is −5/6 < −3/4 < −7/12.',
          },
          {
            subheading: 'Method 3: Cross-Multiplication Method (Fastest for Comparing Two Numbers)',
            body: 'To compare two rational numbers a/b and c/d whose denominators b and d are POSITIVE (b > 0, d > 0), multiply diagonally upward from denominators to opposite numerators:\n• Compute Left Product = a × d and Right Product = c × b.\n• If a·d > c·b, then a/b > c/d.\n• If a·d < c·b, then a/b < c/d.\n• If a·d = c·b, then a/b = c/d.\nWarning: You MUST make both denominators positive first before cross-multiplying, otherwise the inequality direction reverses!',
          },
        ],
        diagram: {
          id: 'diag-rational-svg-zoom',
          title: 'Rational Number Line & Density Sub-Divisions [0, 1]',
          caption: 'Vector illustration locating negative improper rationals (−7/4 = −1¾), zero, and zoomed 1/8 subdivisions across [0, 1].',
          svgFigure: 'rational_number_line',
        },
        formulas: [
          {
            formula: 'Cross-Comparison: a/b > c/d  ⟺  a·d > c·b   (provided b > 0, d > 0)',
            explanation: 'Avoids computing full LCM when comparing just two rational numbers.',
          },
        ],
        commonMistakes: [
          {
            mistake: 'Saying −5/6 > −3/4 because 5/6 > 3/4.',
            correction: 'Adding a minus sign reverses the inequality! Since 5/6 = 10/12 > 9/12 = 3/4, we get −10/12 < −9/12, so −5/6 < −3/4.',
          },
          {
            mistake: 'Cross-multiplying with a negative denominator still in place (e.g., 2/(−3) vs −1/2).',
            correction: 'First convert 2/(−3) to −2/3 so both denominators (3 and 2) are positive; then (−2)×2 = −4 < (−1)×3 = −3, proving −2/3 < −1/2.',
          },
        ],
      },
      {
        id: 'math1-top3',
        title: 'Arithmetic Operations on Rational Numbers (Addition, Subtraction, Multiplication & Division)',
        content:
          'All four basic operations follow transparent, systematic rules when rational numbers are written with positive denominators. Care with integer sign rules ((+)×(−)=(−), (−)×(−)=(+)) eliminates 90% of calculation slips.',
        subtopics: [
          {
            subheading: 'Addition of Rational Numbers',
            body: '• Same Positive Denominator: Keep the denominator unchanged and add numerators: (a/c) + (b/c) = (a + b)/c.\n  Example: (−7/11) + (3/11) = (−7 + 3)/11 = −4/11.\n• Different Denominators: Compute L = LCM of positive denominators, convert both rational numbers to denominator L, add numerators, and simplify to standard form.\n  Example: (−5/6) + (7/9). LCM(6, 9) = 18. Convert: (−15/18) + (14/18) = (−15 + 14)/18 = −1/18.',
          },
          {
            subheading: 'Subtraction of Rational Numbers',
            body: 'Subtracting a rational number y from x simply means adding the additive inverse (−y) to x: x − y = x + (−y).\nCarefully distribute minus signs when the second rational number is negative!\nExample: Subtract −3/8 from −5/12.\nNotice the phrasing "from B subtract A" means B − A (NOT A − B!).\nCalculation: (−5/12) − (−3/8) = −5/12 + 3/8. Using LCM(12, 8) = 24 → −10/24 + 9/24 = −1/24.',
            keyPoint: 'Watch English wording carefully: "Subtract A from B" = B − A, whereas "A minus B" = A − B.',
          },
          {
            subheading: 'Multiplication of Rational Numbers',
            body: 'To multiply a/b and c/d (with b ≠ 0, d ≠ 0), multiply numerators together and denominators together:\n(a/b) × (c/d) = (a × c) / (b × d).\nBefore multiplying large integers, cross-cancel any common factor shared between a numerator and ANY denominator!\nExample: (−14/15) × (25/(−28)) = (−14/15) × (−25/28). Product of two negatives is positive: cancel 14 & 28 (÷14 → 1 & 2) and cancel 25 & 15 (÷5 → 5 & 3) → +(1×5)/(3×2) = 5/6.',
          },
          {
            subheading: 'Division of Rational Numbers',
            body: 'Dividing a rational number a/b by a NON-ZERO rational number c/d (c ≠ 0, d ≠ 0) means multiplying a/b by the reciprocal (d/c) of c/d:\n(a/b) ÷ (c/d) = (a/b) × (d/c).\nNever invert the first number (dividend)—ONLY flip the divisor after the ÷ symbol!',
          },
        ],
        formulas: [
          {
            formula: 'a/b ± c/d = (a·d ± b·c) / (b·d)   [or use LCM(b, d)]',
            explanation: 'General sum and difference formulas for non-zero denominators.',
          },
          {
            formula: '(a/b) × (c/d) = (ac)/(bd)   and   (a/b) ÷ (c/d) = (a/b) × (d/c)',
            explanation: 'Direct product and reciprocal-division formulas (c ≠ 0).',
          },
        ],
        realLifeExample:
          'In tailoring and carpentry: Suppose a carpenter cuts 5 equal wooden shelves each measuring 1⅜ m (= 11/8 m) from a plank 8½ m (= 17/2 m) long. Total length used = 5 × 11/8 = 55/8 m. Leftover plank = 17/2 − 55/8 = 68/8 − 55/8 = 13/8 = 1⅝ m.',
      },
      {
        id: 'math1-top4',
        title: 'Algebraic Properties of Q, Identities, Inverses & Simplification Tricks',
        content:
          'Why do we study Closure, Commutative, Associative, Identity, Inverse, and Distributive laws in Class 8? Not merely to answer True/False definitions—these properties allow us to rearrange messy multi-fraction expressions into clean mental sums and factor out common fractions so multi-digit LCM steps vanish.',
        subtopics: [
          {
            subheading: 'Closure, Commutative & Associative Laws Across Operations',
            body: '1. Closure Property: Adding, subtracting, or multiplying any two rational numbers ALWAYS produces another rational number (x + y ∈ Q, x − y ∈ Q, x × y ∈ Q). Division fails closure on all of Q ONLY because a ÷ 0 is undefined; if 0 is excluded, Q \\ {0} is closed under division.\n2. Commutative Property (Order Independence): Addition and multiplication satisfy x + y = y + x and x × y = y × x. Subtraction and division FAIL commutativity (3/4 − 1/4 = 1/2 ≠ −1/2 = 1/4 − 3/4).\n3. Associative Property (Bracket Regrouping): (x + y) + z = x + (y + z) and (x × y) × z = x × (y × z). Subtraction and division are NOT associative: (8 ÷ 4) ÷ 2 = 1, whereas 8 ÷ (4 ÷ 2) = 4!',
          },
          {
            subheading: 'Additive Identity (0), Multiplicative Identity (1) & Inverses',
            body: '• Additive Identity (0): Adding 0 leaves every rational number untouched: x + 0 = 0 + x = x.\n• Multiplicative Identity (1): Multiplying by 1 leaves every rational number untouched: x × 1 = 1 × x = x.\n• Additive Inverse (−x): Every rational number a/b has a unique negative (−a/b) such that a/b + (−a/b) = 0. Simply negate the rational number! (Inverse of −7/9 is +7/9; inverse of 0 is 0 itself.)\n• Multiplicative Inverse / Reciprocal (x⁻¹): Every NON-ZERO rational number a/b has reciprocal b/a such that (a/b) × (b/a) = 1. Flip top and bottom ONLY—preserve the sign! Note that 0 has NO reciprocal, while +1 and −1 are the only rational numbers equal to their own reciprocals.',
          },
          {
            subheading: 'Distributive Law of Multiplication Over Addition and Subtraction',
            body: 'For any three rational numbers a, b, c:\na × (b + c) = (a × b) + (a × c)\na × (b − c) = (a × b) − (a × c).\nRead forward, it expands brackets; read backward (ab + ac = a(b + c)), it factors out a common rational multiplier! This trick frequently turns long ICSE expressions into 2-line mental calculations.',
            keyPoint: 'Always inspect long products separated by + or − for a shared fraction like (−3/7) to pull out via Distributive Property.',
          },
        ],
        comparisonTable: {
          caption: 'Table 1.2: Master Matrix of Properties of Rational Numbers (Q)',
          headers: ['Property', 'Addition (+)', 'Subtraction (−)', 'Multiplication (×)', 'Division (÷)'],
          rows: [
            ['Closure', 'Yes (always in Q)', 'Yes (always in Q)', 'Yes (always in Q)', 'No (a ÷ 0 undefined; Yes on Q\\{0})'],
            ['Commutative', 'Yes: a + b = b + a', 'No: a − b ≠ b − a', 'Yes: a × b = b × a', 'No: a ÷ b ≠ b ÷ a'],
            ['Associative', 'Yes: (a+b)+c = a+(b+c)', 'No', 'Yes: (ab)c = a(bc)', 'No'],
            ['Identity Element', '0 (a + 0 = a)', 'None (0−a ≠ a)', '1 (a × 1 = a)', 'None (1÷a ≠ a)'],
            ['Inverse of p/q', '−p/q (sum = 0)', 'N/A', 'q/p if p ≠ 0 (product = 1)', 'N/A'],
            ['Distributive', 'Multiplication distributes over +', 'Multiplication distributes over −', 'a(b ± c) = ab ± ac', 'Right-distributive only: (b±c)÷a = b÷a ± c÷a'],
          ],
        },
        commonMistakes: [
          {
            mistake: 'Claiming the multiplicative inverse of −4/9 is +9/4.',
            correction: 'Reciprocal NEVER flips the sign! (−4/9) × (+9/4) = −1, NOT +1. The true multiplicative inverse of −4/9 is −9/4.',
          },
          {
            mistake: 'Applying left-distributivity to division: a ÷ (b + c) = (a ÷ b) + (a ÷ c).',
            correction: 'INVALID! Test 12 ÷ (2 + 4) = 12 ÷ 6 = 2, whereas 12÷2 + 12÷4 = 6 + 3 = 9. Division NEVER distributes from the left.',
          },
        ],
      },
      {
        id: 'math1-top5',
        title: 'The Density Property & Word Problem Translation',
        content:
          'Between two integers like 4 and 5, there is no other integer. Rational numbers behave completely differently: between ANY two distinct rational numbers a and b (even as close as 1/1000 and 1/1001!), there exist INFINITELY MANY rational numbers. This is known as the Density Property of Rational Numbers.',
        subtopics: [
          {
            subheading: 'Method A: Mean (Average / Midpoint) Method',
            body: 'If a and b are any two distinct rational numbers with a < b, their arithmetic mean m = (a + b) / 2 ALWAYS satisfies a < m < b. To insert 2 or 3 rational numbers, repeat this midpoint step:\n1. m₁ = (a + b) / 2 lies between a and b.\n2. m₂ = (a + m₁) / 2 lies between a and m₁.\n3. m₃ = (m₁ + b) / 2 lies between m₁ and b.\nThis method works well for 1–3 insertions, though denominators double each step.',
          },
          {
            subheading: 'Method B: Equivalent Denominator / Scaling Method (Best for 5+ Numbers)',
            body: 'To insert n rational numbers between a/b and c/d rapidly:\nStep 1: Convert both to a common positive denominator L = LCM(b, d).\nStep 2: Count how many integers already sit between the new numerators.\nStep 3: If fewer than n integers exist between them, multiply BOTH numerator and denominator of both numbers by (n + 1) or by 10 to stretch the gap immediately! Then list any n fractions cleanly in between.',
          },
        ],
        diagram: {
          id: 'diag-rational-static',
          title: 'Rational Number Line Plotting & Infinite Sub-Division Lens',
          caption: 'Illustrated textbook diagram showing negative and positive rational points and density subdivisions on the real number line.',
          imageUrl: '/diagrams/diagram_rational_numberline_1794912680786.jpg',
        },
        formulas: [
          {
            formula: 'Arithmetic Mean: m = ½ (a + b)',
            explanation: 'Guarantees a < m < b whenever a < b.',
          },
        ],
        realLifeExample:
          'Digital measurement & finance: In currency rates or scientific vernier scales, whenever two measurements read 1.41 m and 1.42 m, increasing instrument precision reveals 1.411, 1.412, ..., 1.419 between them—a physical manifestation of rational density.',
      },
    ],
    importantTerminology: [
      { term: 'Rational Number (Q)', definition: 'A number of the form p/q where p, q ∈ Z and q ≠ 0.', category: 'Definition' },
      { term: 'Standard Form', definition: 'p/q with strictly positive denominator q > 0 and HCF(|p|, q) = 1.', category: 'Representation' },
      { term: 'Fraction vs. Rational', definition: 'Fractions are non-negative (a/b with whole a, b > 0); rational numbers allow negative signs.', category: 'Classification' },
      { term: 'Additive Identity (0)', definition: 'Zero, since x + 0 = 0 + x = x for every rational number x.', category: 'Identity' },
      { term: 'Multiplicative Identity (1)', definition: 'One, since x × 1 = 1 × x = x for every rational number x.', category: 'Identity' },
      { term: 'Additive Inverse (−x)', definition: 'Opposite-sign number such that x + (−x) = 0.', category: 'Inverse' },
      { term: 'Multiplicative Inverse (Reciprocal)', definition: 'For non-zero a/b, the flipped quotient b/a satisfying (a/b)×(b/a) = 1.', category: 'Inverse' },
      { term: 'Closure Property', definition: 'Operation on two elements of Q yields an element strictly inside Q.', category: 'Algebraic Law' },
      { term: 'Commutative Law', definition: 'a ∘ b = b ∘ a (holds for + and × in Q; fails for − and ÷).', category: 'Algebraic Law' },
      { term: 'Associative Law', definition: '(a ∘ b) ∘ c = a ∘ (b ∘ c) (holds for + and ×; fails for − and ÷).', category: 'Algebraic Law' },
      { term: 'Distributive Law', definition: 'a × (b ± c) = (a × b) ± (a × c).', category: 'Algebraic Law' },
      { term: 'Density Property', definition: 'Between any two distinct rational numbers exist infinitely many rational numbers.', category: 'Theorem' },
    ],
    formulaSheet: [
      { title: 'Standard Form Test', expression: 'q > 0  AND  HCF(|p|, q) = 1', meaning: 'Move negative sign to numerator and divide both by HCF.' },
      { title: 'Absolute Value', expression: '|p/q| = |p| / |q|  (≥ 0)', meaning: 'Unsigned distance from 0 on the number line.' },
      { title: 'Cross-Comparison (b, d > 0)', expression: 'a/b > c/d  ⟺  a·d > c·b', meaning: 'Fast check after ensuring denominators b, d are positive.' },
      { title: 'Addition & Subtraction', expression: 'a/b ± c/d = (ad ± bc)/(bd)', meaning: 'Prefer LCM(b, d) to keep numbers small.' },
      { title: 'Multiplication', expression: '(a/b) × (c/d) = (ac)/(bd)', meaning: 'Cancel common numerator/denominator factors first.' },
      { title: 'Division', expression: '(a/b) ÷ (c/d) = (a/b) × (d/c)  (c ≠ 0)', meaning: 'Multiply dividend by reciprocal of non-zero divisor.' },
      { title: 'Distributive Property', expression: 'a·(b ± c) = a·b ± a·c', meaning: 'Factor out common rational factor across + or −.' },
      { title: 'Mean Insertion (Density)', expression: 'm = (a + b) / 2', meaning: 'Exact midpoint strictly between a and b.' },
    ],
    comparisonTables: [
      {
        title: 'Table 1.3: Additive Inverse vs. Multiplicative Inverse (Reciprocal)',
        headers: ['Given Rational Number', 'Additive Inverse (−x) [Sum = 0]', 'Multiplicative Inverse (1/x) [Product = 1]'],
        rows: [
          ['5/8', '−5/8', '8/5'],
          ['−3/7', '+3/7', '−7/3 (sign unchanged!)'],
          ['−1⅔  (= −5/3)', '+5/3 (= 1⅔)', '−3/5'],
          ['1', '−1', '1 (self-reciprocal)'],
          ['−1', '+1', '−1 (self-reciprocal)'],
          ['0', '0 (self-additive-inverse)', 'Does NOT exist (1/0 undefined)'],
        ],
      },
    ],
    solvedExamples: [
      {
        id: 'sol-m1-1',
        question: 'Express (−48)/72 and 56/(−98) in standard form, and determine which rational number is greater.',
        steps: [
          'Step 1: Examine (−48)/72. Denominator 72 is already positive. Find HCF(48, 72) = 24.',
          'Step 2: Divide numerator and denominator by 24: (−48 ÷ 24) / (72 ÷ 24) = −2/3.',
          'Step 3: Examine 56/(−98). Shift the minus sign to the numerator: −56/98.',
          'Step 4: Find HCF(56, 98) = 14. Divide top and bottom by 14: (−56 ÷ 14) / (98 ÷ 14) = −4/7.',
          'Step 5: Compare −2/3 and −4/7 using LCM(3, 7) = 21: −2/3 = −14/21 and −4/7 = −12/21.',
          'Step 6: Since −12 > −14 on the number line, −12/21 > −14/21, so −4/7 > −2/3.',
        ],
        finalAnswer: 'Standard forms are −2/3 and −4/7; 56/(−98) is greater.',
        keyRule: 'Always convert to positive denominator and simplest terms before comparing.',
      },
      {
        id: 'sol-m1-2',
        question: 'Evaluate using properties of rational numbers: (2/5) × (−3/7) − 1/14 − (3/7) × (3/5).',
        steps: [
          'Step 1: Group terms containing the common factor (3/7) together using Commutative Property:',
          '= (2/5) × (−3/7) − (3/7) × (3/5) − 1/14',
          'Step 2: Notice −(3/7) × (3/5) = + (−3/7) × (3/5). Factor out (−3/7) using Distributive Property:',
          '= (−3/7) × [ 2/5 + 3/5 ] − 1/14',
          'Step 3: Simplify inside brackets: 2/5 + 3/5 = 5/5 = 1.',
          '= (−3/7) × 1 − 1/14 = −3/7 − 1/14',
          'Step 4: Take LCM(7, 14) = 14: −3/7 = −6/14.',
          '= (−6 − 1)/14 = −7/14 = −1/2.',
        ],
        finalAnswer: '−1/2',
        keyRule: 'Grouping like rational factors with Distributive Law eliminates tedious multiplication.',
      },
      {
        id: 'sol-m1-3',
        question: 'Find five rational numbers strictly between −2/3 and 1/4.',
        steps: [
          'Step 1: Find LCM of denominators 3 and 4, which is 12.',
          'Step 2: Convert both rational numbers to equivalent fractions with denominator 12:',
          '−2/3 = (−2 × 4)/(3 × 4) = −8/12',
          '1/4 = (1 × 3)/(4 × 3) = 3/12',
          'Step 3: List integers strictly between −8 and 3: −7, −6, −5, −4, −3, −2, −1, 0, 1, 2 (10 choices already exist!).',
          'Step 4: Choose any five and reduce to lowest terms: −7/12, −6/12 (= −1/2), −5/12, −4/12 (= −1/3), 1/12.',
        ],
        finalAnswer: '−7/12, −1/2, −5/12, −1/3, and 1/12 (infinitely many other valid answers exist).',
        keyRule: 'Converting to a common denominator immediately opens a clear integer ladder.',
      },
      {
        id: 'sol-m1-4',
        question: 'Insert three rational numbers between 1/3 and 1/2 using the Mean (Midpoint) Method.',
        steps: [
          'Step 1: First rational number q₁ = ½ (1/3 + 1/2) = ½ × (2 + 3)/6 = ½ × (5/6) = 5/12. Now 1/3 < 5/12 < 1/2.',
          'Step 2: Second rational number q₂ between 1/3 and 5/12:',
          'q₂ = ½ (1/3 + 5/12) = ½ × (4 + 5)/12 = ½ × (9/12) = 9/24 = 3/8.',
          'Step 3: Third rational number q₃ between 5/12 and 1/2:',
          'q₃ = ½ (5/12 + 1/2) = ½ × (5 + 6)/12 = ½ × (11/12) = 11/24.',
          'Step 4: Ordered result: 1/3 < 3/8 < 5/12 < 11/24 < 1/2.',
        ],
        finalAnswer: '3/8, 5/12, and 11/24',
        keyRule: 'Halving the sum of two fractions always yields their exact midpoint.',
      },
      {
        id: 'sol-m1-5',
        question: 'What number should be added to (−5/8 + 3/4) to obtain −7/12?',
        steps: [
          'Step 1: Let the required rational number be x.',
          'Step 2: Equation: (−5/8 + 3/4) + x = −7/12.',
          'Step 3: Evaluate bracket using LCM(8, 4) = 8: −5/8 + 6/8 = 1/8.',
          'Step 4: So 1/8 + x = −7/12 ⟹ x = −7/12 − 1/8.',
          'Step 5: Take LCM(12, 8) = 24: x = (−14 − 3)/24 = −17/24.',
        ],
        finalAnswer: '−17/24',
        keyRule: 'Verify by plugging back: 1/8 + (−17/24) = 3/24 − 17/24 = −14/24 = −7/12 (Checked!).',
      },
      {
        id: 'sol-m1-6',
        question: 'Divide the sum of 13/5 and −12/7 by the product of −31/7 and 1/(−2).',
        steps: [
          'Step 1: Compute the Sum: 13/5 + (−12/7). LCM(5, 7) = 35.',
          '= (13 × 7)/35 + (−12 × 5)/35 = (91 − 60)/35 = 31/35.',
          'Step 2: Compute the Product: (−31/7) × (−1/2) = (−31 × −1)/(7 × 2) = +31/14.',
          'Step 3: Divide Sum by Product: (31/35) ÷ (31/14).',
          'Step 4: Multiply by reciprocal: (31/35) × (14/31). Cancel 31, and divide 14 & 35 by 7:',
          '= (1/5) × (2/1) = 2/5.',
        ],
        finalAnswer: '2/5',
        keyRule: 'Compute the sum and product in labelled sub-steps before dividing.',
      },
      {
        id: 'sol-m1-7',
        question: 'Arrange in descending order: −4/9, 5/(−12), −7/18, −2/3.',
        steps: [
          'Step 1: Make all denominators positive: −4/9, −5/12, −7/18, −2/3.',
          'Step 2: Compute LCM(9, 12, 18, 3) = 36.',
          'Step 3: Convert each rational number to denominator 36:',
          '−4/9 = −16/36',
          '−5/12 = −15/36',
          '−7/18 = −14/36',
          '−2/3 = −24/36',
          'Step 4: Compare numerators in descending order (greatest to least): −14 > −15 > −16 > −24.',
          'Step 5: Map back to original given numbers: −7/18 > 5/(−12) > −4/9 > −2/3.',
        ],
        finalAnswer: '−7/18 > 5/(−12) > −4/9 > −2/3',
        keyRule: 'Always express the final ordering using the ORIGINAL fractions stated in the question.',
      },
      {
        id: 'sol-m1-8',
        question: 'The product of two rational numbers is −16/9. If one of the numbers is −4/3, find the other and compute the sum of both numbers.',
        steps: [
          'Step 1: Let the unknown rational number be x. Given (−4/3) × x = −16/9.',
          'Step 2: Solve for x by dividing product by given factor:',
          'x = (−16/9) ÷ (−4/3) = (−16/9) × (−3/4).',
          'Step 3: Cancel signs ((−)×(−) = +), divide 16 by 4 (= 4) and 9 by 3 (= 3): x = +4/3.',
          'Step 4: Find the sum of the two numbers: (−4/3) + (4/3) = 0.',
        ],
        finalAnswer: 'Other number = 4/3; Sum = 0',
        keyRule: 'Product ÷ Known Factor = Unknown Factor; here the two numbers happen to be additive inverses!',
      },
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'm1-e1',
          question: 'Write the additive inverse and multiplicative inverse of −7/19.',
          solutionSteps: [
            'Additive inverse reverses sign: −(−7/19) = +7/19 (Check: −7/19 + 7/19 = 0).',
            'Multiplicative inverse flips numerator and denominator preserving sign: −19/7 (Check: (−7/19) × (−19/7) = 1).',
          ],
          finalAnswer: 'Additive inverse = 7/19; Multiplicative inverse = −19/7.',
          marks: 2,
        },
        {
          id: 'm1-e2',
          question: 'Arrange in ascending order: −3/5, −7/10, −1/2.',
          solutionSteps: [
            'LCM of 5, 10, 2 is 10.',
            '−3/5 = −6/10; −7/10 = −7/10; −1/2 = −5/10.',
            'Comparing numerators from smallest to largest: −7 < −6 < −5.',
          ],
          finalAnswer: '−7/10 < −3/5 < −1/2',
          marks: 2,
        },
        {
          id: 'm1-e3',
          question: 'Express −3/8 as an equivalent rational number with: (a) numerator 15, (b) denominator −40.',
          solutionSteps: [
            '(a) To change numerator −3 to +15, multiply top and bottom by −5: (−3 × −5) / (8 × −5) = 15/(−40).',
            '(b) To change denominator +8 to −40, multiply top and bottom by −5: 15/(−40).',
          ],
          finalAnswer: '15/(−40) in both cases',
          marks: 2,
        },
        {
          id: 'm1-e4',
          question: 'Verify closure property for subtraction with x = 2/3 and y = 5/6.',
          solutionSteps: [
            'x − y = 2/3 − 5/6 = 4/6 − 5/6 = −1/6.',
            'Since −1 ∈ Z, 6 ∈ Z and 6 ≠ 0, −1/6 is a rational number in Q.',
          ],
          finalAnswer: '−1/6 ∈ Q (Closure verified)',
          marks: 2,
        },
      ],
      medium: [
        {
          id: 'm1-m1',
          question: 'Verify the distributive property x × (y − z) = (x × y) − (x × z) for x = −3/4, y = 2/3, z = −5/6.',
          solutionSteps: [
            'LHS = (−3/4) × [2/3 − (−5/6)] = (−3/4) × [4/6 + 5/6] = (−3/4) × (9/6) = (−3/4) × (3/2) = −9/8.',
            'RHS = [(−3/4) × (2/3)] − [(−3/4) × (−5/6)] = (−1/2) − (5/8) = −4/8 − 5/8 = −9/8.',
            'Since LHS = RHS = −9/8, distributive law is verified.',
          ],
          finalAnswer: 'LHS = RHS = −9/8 (Verified)',
          marks: 3,
        },
        {
          id: 'm1-m2',
          question: 'A 117/4 m long ribbon is cut into equal pieces of length 13/4 m each. How many pieces are obtained?',
          solutionSteps: [
            'Number of pieces = Total length ÷ Length of each piece',
            '= (117/4) ÷ (13/4) = (117/4) × (4/13) = 117/13 = 9.',
          ],
          finalAnswer: '9 pieces',
          marks: 2,
        },
        {
          id: 'm1-m3',
          question: 'Find 6 rational numbers strictly between −1/2 and 2/3.',
          solutionSteps: [
            'LCM(2, 3) = 6. Convert: −1/2 = −3/6 and 2/3 = 4/6.',
            'Integers between −3 and 4 are: −2, −1, 0, 1, 2, 3 — exactly 6 integers!',
            'Thus 6 rational numbers are: −2/6 (−1/3), −1/6, 0, 1/6, 2/6 (1/3), and 3/6 (1/2).',
          ],
          finalAnswer: '−1/3, −1/6, 0, 1/6, 1/3, 1/2',
          marks: 3,
        },
        {
          id: 'm1-m4',
          question: 'Simplify: [3/4 + (−2/5)] ÷ [−3/4 × 8/15].',
          solutionSteps: [
            'First bracket: 3/4 − 2/5 = (15 − 8)/20 = 7/20.',
            'Second bracket: (−3/4) × (8/15) = (−1/1) × (2/5) = −2/5.',
            'Divide: (7/20) ÷ (−2/5) = (7/20) × (−5/2) = −7/8.',
          ],
          finalAnswer: '−7/8',
          marks: 3,
        },
      ],
      difficult: [
        {
          id: 'm1-d1',
          question: 'Find x if [(3/4) + (−5/6)] ÷ x = (−2/3) × (5/8).',
          solutionSteps: [
            'Simplify LHS bracket: 3/4 − 5/6 = (9 − 10)/12 = −1/12.',
            'Simplify RHS product: (−2/3) × (5/8) = −10/24 = −5/12.',
            'Equation becomes: (−1/12) ÷ x = −5/12.',
            'Therefore x = (−1/12) ÷ (−5/12) = (−1/12) × (−12/5) = 1/5.',
          ],
          finalAnswer: 'x = 1/5',
          marks: 4,
        },
        {
          id: 'm1-d2',
          question: 'One-third of a student’s monthly pocket money goes to books, two-fifths to sports kit, and the remaining ₹240 is saved. Find total pocket money.',
          solutionSteps: [
            'Let total pocket money be ₹x.',
            'Fraction spent = 1/3 + 2/5 = (5 + 6)/15 = 11/15.',
            'Fraction saved = 1 − 11/15 = 4/15.',
            'Given (4/15)x = 240 ⟹ x = 240 × (15/4) = 60 × 15 = 900.',
          ],
          finalAnswer: 'Total pocket money = ₹900',
          marks: 4,
        },
        {
          id: 'm1-d3',
          question: 'Verify the associative property of multiplication (a × b) × c = a × (b × c) and show by contrast that (a ÷ b) ÷ c ≠ a ÷ (b ÷ c) for a = −2/3, b = 4/5, c = −3/10.',
          solutionSteps: [
            'Multiplication LHS: [(−2/3) × (4/5)] × (−3/10) = (−8/15) × (−3/10) = +24/150 = 4/25.',
            'Multiplication RHS: (−2/3) × [(4/5) × (−3/10)] = (−2/3) × (−6/25) = +12/75 = 4/25. Verified!',
            'Division LHS: [(−2/3) ÷ (4/5)] ÷ (−3/10) = [(−2/3) × (5/4)] ÷ (−3/10) = (−5/6) × (−10/3) = 25/9.',
            'Division RHS: (−2/3) ÷ [(4/5) ÷ (−3/10)] = (−2/3) ÷ [(4/5) × (−10/3)] = (−2/3) ÷ (−8/3) = (−2/3) × (−3/8) = 1/4.',
            'Since 25/9 ≠ 1/4, division is not associative.',
          ],
          finalAnswer: 'Multiplication verified (4/25 = 4/25); Division fails associativity (25/9 ≠ 1/4).',
          marks: 4,
        },
        {
          id: 'm1-d4',
          question: 'Evaluate: (−2/3) × (3/5) + (5/2) − (3/5) × (1/6) by naming every property applied at each step.',
          solutionSteps: [
            'Step 1 (Commutativity of Addition): (−2/3 × 3/5) − (3/5 × 1/6) + 5/2.',
            'Step 2 (Commutativity of Multiplication): (3/5 × −2/3) + (3/5 × −1/6) + 5/2.',
            'Step 3 (Distributivity of × over +): (3/5) × (−2/3 − 1/6) + 5/2.',
            'Step 4: Simplify bracket: −4/6 − 1/6 = −5/6.',
            'Step 5: (3/5) × (−5/6) + 5/2 = −1/2 + 5/2 = 4/2 = 2.',
          ],
          finalAnswer: '2',
          marks: 4,
        },
      ],
    },
    examPreparationTips: [
      'Always convert final rational answers into Standard Form (positive denominator q > 0 and HCF(|p|, q) = 1).',
      'Watch negative sign rules closely: (−) × (−) = (+), (−) ÷ (+) = (−), and reciprocal keeps the original sign.',
      'Write the LCM calculation explicitly in your right-hand working column to safeguard full ICSE step marks.',
      'For any "Verify LHS = RHS" question, compute LHS and RHS in two clearly separated blocks and conclude with "Hence LHS = RHS, Verified."',
      'Translate "Subtract A from B" strictly as B − A, NOT A − B.',
    ],
    chapterSummary: [
      'Rational numbers Q = {p/q : p, q ∈ Z, q ≠ 0} include all natural numbers, whole numbers, integers, and fractions.',
      'Standard form of p/q requires q > 0 and HCF(|p|, q) = 1.',
      'Every non-negative fraction is a rational number, though negative rational numbers (like −3/4) are not fractions.',
      'Q is closed under addition, subtraction, and multiplication; division is closed only across Q \\ {0}.',
      'Addition and multiplication are commutative and associative in Q; subtraction and division are neither.',
      '0 is the additive identity; 1 is the multiplicative identity; 0 is the only rational number with no reciprocal.',
      '1 and −1 are the only rational numbers equal to their own reciprocals; 0 equals its own additive inverse.',
      'Multiplication distributes over addition and subtraction: a(b ± c) = ab ± ac.',
      'By the Density Property, infinitely many rational numbers lie between any two distinct rational numbers.',
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Why is division of rational numbers not commutative? Prove using a numerical counterexample.',
        answer:
          'Division is non-commutative because swapping dividend and divisor changes the quotient (a ÷ b ≠ b ÷ a in general). Counterexample: Let a = 1/2 and b = 1/4. Then a ÷ b = (1/2) ÷ (1/4) = 2, whereas b ÷ a = (1/4) ÷ (1/2) = 1/2. Since 2 ≠ 1/2, division is not commutative.',
        type: 'Reasoning',
      },
      {
        question: 'Which rational numbers are equal to their own reciprocals, and which rational number equals its own negative?',
        answer:
          '1 and −1 are equal to their own reciprocals (1/1 = 1 and 1/(−1) = −1). Zero (0) is the only rational number equal to its own additive inverse (−0 = 0).',
        type: 'Short Answer',
      },
      {
        question: 'State why every integer is a rational number, whereas every rational number need not be an integer.',
        answer:
          'Any integer m can be written as m/1, which matches p/q with p = m ∈ Z, q = 1 ∈ Z, q ≠ 0; hence every integer is rational. Conversely, rational numbers like 3/4 or −5/2 cannot simplify to integer denominators equal to 1, so they are not integers.',
        type: 'Short Answer',
      },
      {
        question: 'Check whether 12/(−18) and (−18)/27 are equivalent rational numbers.',
        answer:
          'Reduce both to standard form: 12/(−18) = −12/18 = −2/3 (dividing by HCF 6), and (−18)/27 = −2/3 (dividing by HCF 9). Since both reduce to −2/3 (and cross-products 12×27 = 324 = (−18)×(−18)), they are equivalent.',
        type: 'Short Answer',
      },
      {
        question: 'Represent −7/4 and 5/4 on the same number line and find 4 rational numbers strictly between them.',
        answer:
          'Draw a number line from −2 to +2 divided into 4 equal parts per unit integer. Count 7 sub-parts left of 0 to plot −7/4 (= −1¾), and 5 sub-parts right of 0 to plot 5/4 (= 1¼). Four rational numbers between −7/4 and 5/4 are −5/4, −1/4, 1/4, and 3/4.',
        type: 'Long Answer',
      },
      {
        question: 'The sum of two rational numbers is −3/5. If one of them is −9/20, find the other number and verify your answer.',
        answer:
          'Let the unknown number be x. Given x + (−9/20) = −3/5 ⟹ x = −3/5 − (−9/20) = −3/5 + 9/20. Using LCM(5, 20) = 20: x = (−12 + 9)/20 = −3/20. Verification: (−3/20) + (−9/20) = −12/20 = −3/5 (Verified).',
        type: 'Long Answer',
      },
      {
        question: 'Is |x + y| always equal to |x| + |y| for all rational numbers x and y? Support your answer with examples.',
        answer:
          'No! Equality holds when x and y carry the same sign (or either is 0), e.g., |2/3 + 1/3| = 1 = |2/3| + |1/3|. However, when signs are opposite, say x = 3/4 and y = −1/4: |3/4 + (−1/4)| = |2/4| = 1/2, whereas |3/4| + |−1/4| = 3/4 + 1/4 = 1. In general, |x + y| ≤ |x| + |y| (Triangle Inequality).',
        type: 'HOTS',
      },
      {
        question: 'By what rational number should −33/8 be divided to obtain −11/2?',
        answer:
          'Let the divisor be x. Equation: (−33/8) ÷ x = −11/2 ⟹ x = (−33/8) ÷ (−11/2) = (−33/8) × (−2/11) = (+3/4). So divide by 3/4.',
        type: 'Long Answer',
      },
    ],
    practiceExercises: [
      {
        question: 'Verify associative property for addition with x = −1/2, y = 2/3, z = −5/6.',
        hint: 'Compute [x + (y + z)] and [(x + y) + z] separately using LCM 6.',
        answerGuide: 'Both LHS and RHS simplify cleanly to −4/6 = −2/3.',
      },
      {
        question: 'By what rational number should −15/56 be divided to get −5/7?',
        hint: 'If a ÷ x = b, then x = a ÷ b.',
        answerGuide: 'x = (−15/56) ÷ (−5/7) = (−15/56) × (−7/5) = 3/8.',
      },
      {
        question: 'Verify x × (y + z) = (x × y) + (x × z) for x = −2/5, y = 3/4, z = −5/8.',
        hint: 'Evaluate bracket 3/4 − 5/8 = 1/8 first for LHS; expand separately for RHS.',
        answerGuide: 'Both LHS and RHS equal −1/20.',
      },
    ],
    practiceWorksheet: {
      title: 'Chapter 1 Comprehensive Practice Worksheet (30 Marks)',
      instructions: 'Show complete intermediate steps and leave every rational answer in Standard Form.',
      sections: [
        {
          sectionTitle: 'Section A — Multiple Choice Questions (MCQs) [1 mark each]',
          items: [
            '1. Which rational number lies strictly between −1/3 and −1/4?  (a) −1/2   (b) −7/24   (c) 0   (d) −1/5',
            '2. The multiplicative inverse of (−3/4) × (−8/9) is:  (a) −2/3   (b) 3/2   (c) −3/2   (d) 2/3',
            '3. Which of the following is NOT closed under all integers in Q?  (a) Addition   (b) Subtraction   (c) Multiplication   (d) Division including 0',
            '4. What is the standard form of 112/(−168)?  (a) −2/3   (b) 2/(−3)   (c) −4/6   (d) −28/42',
            '5. Which property allows writing (1/5 × 3/7) + (1/5 × 4/7) = 1/5 × (3/7 + 4/7)?  (a) Closure   (b) Associative   (c) Distributive   (d) Identity',
          ],
        },
        {
          sectionTitle: 'Section B — Short Answer Questions [2 marks each]',
          items: [
            '6. Write the additive inverse of 11/(−15) and the multiplicative inverse of −1¾.',
            '7. Verify whether |(−3/5) + (1/10)| < |−3/5| + |1/10|.',
            '8. Plot −5/3 and 4/3 accurately on a number line.',
            '9. Insert 4 rational numbers strictly between −3/4 and −1/2.',
          ],
        },
        {
          sectionTitle: 'Section C — Long Answer Questions [3–4 marks each]',
          items: [
            '10. Simplify using Distributive Property: (−4/9) × (5/11) + (−4/9) × (6/11) − 5/9.',
            '11. Subtract the sum of −5/6 and 7/12 from the product of −2/3 and 9/8.',
            '12. Verify x × (y + z) = (x × y) + (x × z) for x = 2/5, y = −3/7, z = 1/14.',
          ],
        },
        {
          sectionTitle: 'Section D — HOTS & Real-Life Applications [4 marks each]',
          items: [
            '13. A train covers 245/2 km in 7/4 hours at uniform speed. Find the distance covered in 3½ hours.',
            '14. In a school library, 3/8 of books are Science, 2/5 are Mathematics, and the remaining 180 books are Literature. Find total books in the library.',
          ],
        },
      ],
      answerKey: [
        '1. (b) −7/24 (since −1/3 = −8/24 and −1/4 = −6/24)',
        '2. (b) 3/2 (product is +2/3, whose reciprocal is 3/2)',
        '3. (d) Division including 0 (division by 0 is undefined)',
        '4. (a) −2/3',
        '5. (c) Distributive Property',
        '6. Additive inverse = 11/15; −1¾ = −7/4 ⟹ Multiplicative inverse = −4/7',
        '7. LHS = |−5/10| = 1/2 = 0.5; RHS = 3/5 + 1/10 = 7/10 = 0.7. True (0.5 < 0.7)',
        '8. Divide each unit integer interval into 3 parts; mark 5 parts left (−1⅔) and 4 parts right (+1⅓)',
        '9. −15/20 = −3/4 and −10/20 = −1/2 ⟹ −14/20 (−7/10), −13/20, −12/20 (−3/5), −11/20',
        '10. (−4/9)(1) − 5/9 = −9/9 = −1',
        '11. (−3/4) − (−1/4) = −2/4 = −1/2',
        '12. Both LHS and RHS equal −1/7',
        '13. Speed = (245/2) × (4/7) = 70 km/h; Distance in 7/2 h = 245 km',
        '14. Literature fraction = 1 − (3/8 + 2/5) = 1 − 31/40 = 9/40; Total = 180 × (40/9) = 800 books',
      ],
    },
  },
  quizQuestions: [
    {
      id: 'mq1',
      type: 'mcq',
      question: 'Which of the following rational numbers is in standard form?',
      options: ['−14/21', '5/(−9)', '−8/15', '22/33'],
      correctAnswer: '−8/15',
      explanation: 'In −8/15, denominator 15 > 0 and HCF(8, 15) = 1. All others have common factors or a negative denominator.',
      difficulty: 'easy',
      marks: 1,
    },
    {
      id: 'mq2',
      type: 'true_false',
      question: 'The reciprocal of zero is zero.',
      correctAnswer: false,
      explanation: 'Zero has no reciprocal because 1/0 is mathematically undefined.',
      difficulty: 'easy',
      marks: 1,
    },
    {
      id: 'mq3',
      type: 'fill_blank',
      question: 'The additive identity for rational numbers is _______.',
      correctAnswer: '0',
      explanation: 'Adding 0 to any rational number leaves it unchanged (p/q + 0 = p/q).',
      difficulty: 'easy',
      marks: 1,
    },
    {
      id: 'mq4',
      type: 'hots',
      question: 'A car travels 35/4 km in 1/2 an hour. What is its uniform speed in kilometres per hour?',
      options: ['17.5 km/h', '18 km/h', '35/8 km/h', '16.5 km/h'],
      correctAnswer: '17.5 km/h',
      explanation: 'Speed = Distance ÷ Time = (35/4) ÷ (1/2) = (35/4) × 2 = 35/2 = 17.5 km/h.',
      difficulty: 'medium',
      marks: 2,
    },
    {
      id: 'mq5',
      type: 'mcq',
      question: 'What is the multiplicative inverse of −1⅛?',
      options: ['9/8', '−8/9', '8/9', '−9/8'],
      correctAnswer: '−8/9',
      explanation: '−1⅛ = −9/8. Flipping numerator and denominator while preserving the negative sign gives −8/9.',
      difficulty: 'medium',
      marks: 1,
    },
    {
      id: 'mq6',
      type: 'mcq',
      question: 'Which property is illustrated by (2/3) × [(4/5) + (−1/3)] = (2/3 × 4/5) + (2/3 × −1/3)?',
      options: ['Closure Property', 'Associative Property', 'Commutative Property', 'Distributive Property'],
      correctAnswer: 'Distributive Property',
      explanation: 'Multiplication distributes over addition: a(b + c) = ab + ac.',
      difficulty: 'easy',
      marks: 1,
    },
    {
      id: 'mq7',
      type: 'mcq',
      question: 'The sum of a rational number and its additive inverse is always:',
      options: ['1', '−1', '0', 'Undefined'],
      correctAnswer: '0',
      explanation: 'By definition, a/b + (−a/b) = 0 (the additive identity).',
      difficulty: 'easy',
      marks: 1,
    },
    {
      id: 'mq8',
      type: 'hots',
      question: 'What must be subtracted from −3/4 to obtain 1/2?',
      options: ['−5/4', '5/4', '−1/4', '1/4'],
      correctAnswer: '−5/4',
      explanation: 'Let (−3/4) − x = 1/2 ⟹ x = (−3/4) − (2/4) = −5/4.',
      difficulty: 'hard',
      marks: 2,
    },
    {
      id: 'mq9',
      type: 'mcq',
      question: 'How many rational numbers exist strictly between 1/5 and 1/4?',
      options: ['0', '1', '5', 'Infinitely many'],
      correctAnswer: 'Infinitely many',
      explanation: 'By the Density Property of Q, infinitely many rational numbers lie between any two distinct rational numbers.',
      difficulty: 'easy',
      marks: 1,
    },
    {
      id: 'mq10',
      type: 'mcq',
      question: 'Which of the following statements is FALSE about rational numbers?',
      options: [
        'Every fraction is a rational number.',
        'Every integer is a rational number.',
        'Subtraction of rational numbers is commutative.',
        '1 and −1 are their own reciprocals.',
      ],
      correctAnswer: 'Subtraction of rational numbers is commutative.',
      explanation: 'In general, a − b ≠ b − a (for instance, 1/2 − 1/3 = 1/6 whereas 1/3 − 1/2 = −1/6).',
      difficulty: 'medium',
      marks: 1,
    },
    {
      id: 'mq11',
      type: 'fill_blank',
      question: 'Evaluate the absolute value expression |−3/4| − |1/4| = _______ (write as simplified fraction).',
      correctAnswer: '1/2',
      explanation: '|−3/4| = 3/4 and |1/4| = 1/4, so 3/4 − 1/4 = 2/4 = 1/2.',
      difficulty: 'medium',
      marks: 1,
    },
    {
      id: 'mq12',
      type: 'hots',
      question: 'Which of these numbers is the greatest: −5/6, 7/(−9), −11/12, or −2/3?',
      options: ['−5/6', '7/(−9)', '−11/12', '−2/3'],
      correctAnswer: '−2/3',
      explanation: 'Using LCM 36: −30/36, −28/36, −33/36, −24/36. Since −24 > −28 > −30 > −33, −2/3 is the greatest.',
      difficulty: 'hard',
      marks: 2,
    },
  ],
  flashcards: [
    { id: 'fc-m1', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'What is the Additive Inverse of a/b?', back: '−a/b (such that a/b + (−a/b) = 0)', category: 'Definition', importance: 'Essential' },
    { id: 'fc-m2', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'What is the Multiplicative Identity for rational numbers?', back: '1 (because x × 1 = x)', category: 'Definition', importance: 'Essential' },
    { id: 'fc-m3', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'State the Density Property of Rational Numbers.', back: 'Between any two distinct rational numbers exist infinitely many rational numbers.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-m4', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'Two rules for Standard Form of p/q?', back: 'Denominator q > 0 AND HCF(|p|, q) = 1.', category: 'Formula', importance: 'Essential' },
    { id: 'fc-m5', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'Which two rational numbers are their own reciprocals?', back: '1 and −1 (0 has no reciprocal).', category: 'Definition', importance: 'Standard' },
    { id: 'fc-m6', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'Does reciprocal change the sign of a negative rational number?', back: 'NO! Reciprocal of −a/b is −b/a so their product equals +1.', category: 'Formula', importance: 'Essential' },
    { id: 'fc-m7', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'Which operations fail Commutativity and Associativity in Q?', back: 'Subtraction (−) and Division (÷). Addition and Multiplication satisfy both.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-m8', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'Midpoint formula to insert a rational between a and b?', back: 'm = (a + b) / 2', category: 'Formula', importance: 'Standard' },
    { id: 'fc-m9', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'Cross-comparison rule for a/b > c/d (with b, d > 0)?', back: 'a/b > c/d ⟺ a·d > c·b', category: 'Formula', importance: 'Standard' },
    { id: 'fc-m10', subjectId: 'mathematics', chapterId: 'math-ch1', chapterTitle: 'Rational Numbers', front: 'Why is a/0 undefined for non-zero a?', back: 'Because 0 × k = 0 can never equal non-zero a.', category: 'Definition', importance: 'Standard' },
  ],
};
