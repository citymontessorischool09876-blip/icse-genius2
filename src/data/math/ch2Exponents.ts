import { Chapter } from '../../types/index.ts';

export const CH2_EXPONENTS: Chapter = {
  id: 'math-exponents',
  subjectId: 'mathematics',
  chapterNumber: 2,
  title: 'Exponents and Powers',
  subtitle: 'Laws of Integral Exponents, Negative Indices, Exponential Equations & Standard Form',
  term: 'Half-Yearly',
  estimatedMinutes: 75,
  notes: {
    introduction:
      'Think about the extreme scales that scientists, engineers, and computer scientists measure every day. Astronomers measure the average distance between the Earth and the Sun as roughly 150,000,000,000 metres, and the mass of our planet as 5,970,000,000,000,000,000,000,000 kilograms. At the opposite microscopic extreme, biologists measure the width of a human red blood cell as 0.000007 metres, and chemists report the mass of a single electron as 0.000000000000000000000000000000911 kilograms! Writing dozens of trailing or leading zeroes makes reading, comparing, and multiplying such numbers slow and dangerously prone to copying errors.\n\nExponents (also called Indices or Powers) solve this problem brilliantly by replacing long chains of repeated multiplication—or repeated division—with compact superscript notation such as 1.5 × 10¹¹ m or 7 × 10⁻⁶ m. You already met positive whole-number powers like 2⁵ = 32 and 10⁴ = 10,000 in Class 7. In ICSE Class 8 (aligned with Revised New Mathematics Today), we expand our mastery to rational bases, zero and negative integral exponents, the complete set of seven Laws of Exponents, solving algebraic equations where the unknown sits inside an exponent, and converting any real-world measurement smoothly between Usual Decimal Form and Scientific Notation (Standard Form).\n\nBeyond physics and chemistry, exponents power the digital world inside your pocket: computer memory scales in powers of 2 (1 Kilobyte = 2¹⁰ = 1,024 bytes; 1 Megabyte = 2²⁰ bytes), compound interest grows exponentially as (1 + R/100)ⁿ, and sound loudness (decibels) or earthquake magnitudes (Richter scale) increase by powers of 10.',
    learningObjectives: [
      'Identify the base, exponent (index), and exponential value in expressions with integer and rational bases.',
      'Explain logically using division-by-base patterns why a⁰ = 1 (for a ≠ 0) and why a⁻ⁿ = 1/aⁿ.',
      'Apply the Reciprocal Law (p/q)⁻ⁿ = (q/p)ⁿ cleanly while keeping negative base signs intact.',
      'State, prove, and apply all seven Laws of Exponents across positive, zero, and negative integral exponents.',
      'Prime-factorise composite integers (such as 4, 6, 8, 9, 10, 12, 25, 27, 32, 64, 125) before simplifying multi-term exponential fractions.',
      'Solve exponential equations of the form aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ by converting both sides to a matching prime base.',
      'Express astronomically large and microscopically small numbers in Standard Form k × 10ⁿ (where 1 ≤ k < 10) and convert back to Usual Form.',
      'Compare, add, subtract, and divide real-world physical quantities given in Scientific Notation.',
    ],
    topics: [
      {
        id: 'exp-top1',
        title: 'Exponential Notation, Parity Sign Rules & Negative Integral Exponents',
        content:
          'When any non-zero rational number "a" is multiplied by itself n times (for a positive integer n), we write the shorthand:\na × a × a × ... (n factors) = aⁿ.\nIn aⁿ, the number "a" is called the BASE, "n" is called the EXPONENT (or Index), and the whole expression aⁿ is read as "a raised to the power n" (or simply "a to the nth power"). Two special exponents have common names: a² is called "a squared", and a³ is called "a cubed".\n\nWhat happens when the exponent shrinks down to 0 or goes negative? Watch the clean division pattern for any non-zero base—say base 3:\n3⁴ = 81\n3³ = 27  (divide previous answer by 3)\n3² = 9   (divide 27 by 3)\n3¹ = 3   (divide 9 by 3)\n3⁰ = 3 ÷ 3 = 1\n3⁻¹ = 1 ÷ 3 = 1/3\n3⁻² = (1/3) ÷ 3 = 1/9 = 1/3²\n3⁻³ = (1/9) ÷ 3 = 1/27 = 1/3³.\nEvery time the exponent decreases by 1, the value divides by the base! This universal consistency explains BOTH why a⁰ = 1 and why a⁻ⁿ = 1/aⁿ for every non-zero rational base a.',
        subtopics: [
          {
            subheading: 'Even vs. Odd Exponents on Negative Rational Bases',
            body: 'Suppose the base is negative, written inside parentheses as (−p/q). Multiplying pairs of negative numbers produces a positive number ((−) × (−) = +). Therefore:\n• (−a) raised to ANY EVEN integer power = +a^(even). Example: (−2/3)⁴ = (+16/81) and (−1)¹⁰⁰ = +1.\n• (−a) raised to ANY ODD integer power = −a^(odd). Example: (−2/3)³ = −8/27 and (−1)⁹⁹ = −1.\nCrucial Notation Alert: Brackets completely change meaning! (−5)² = (−5) × (−5) = +25 because the minus sign sits inside the base; by contrast, −5² means −(5 × 5) = −25 because the exponent 2 acts ONLY on 5, with the negative applied afterwards.',
            keyPoint: '(−1)^(even) = +1, while (−1)^(odd) = −1. Always wrap negative bases in brackets when raising to a power.',
          },
          {
            subheading: 'Multiplicative Inverse & Reciprocal Rule for Negative Exponents',
            body: 'Because aⁿ × a⁻ⁿ = aⁿ⁺⁽⁻ⁿ⁾ = a⁰ = 1, the expression a⁻ⁿ is strictly the MULTIPLICATIVE INVERSE (reciprocal) of aⁿ! Extending this directly to any non-zero rational base (p/q) where p ≠ 0 and q ≠ 0:\n(p/q)⁻ⁿ = 1 / (p/q)ⁿ = (q/p)ⁿ.\nIn plain words: to turn a negative exponent positive, flip the rational base upside down (reciprocate numerator and denominator) WITHOUT changing the base’s positive/negative sign! Example: (−3/5)⁻² = (−5/3)² = +25/9.',
            keyPoint: 'Negative exponent = RECIPROCAL of base, NOT negative sign! Thus 2⁻³ = 1/8 (positive!), NOT −8.',
          },
          {
            subheading: 'Special Zero Rules: 0ⁿ vs. a⁰',
            body: 'For any positive integer n ≥ 1, 0ⁿ = 0 × 0 × ... × 0 = 0. However, for any non-zero number a ≠ 0, a⁰ = 1. What about 0⁰ or 0⁻²? Dividing by zero is undefined, so 0⁻ⁿ = 1/0ⁿ is strictly undefined, and 0⁰ is indeterminate in school algebra.',
          },
        ],
        diagram: {
          id: 'diag-exp-svg',
          title: 'Power Ladder (Proving a⁰ = 1 & a⁻ⁿ = 1/aⁿ) and Standard Form Decimal Shift',
          caption: 'Step-by-step division ladder proving zero and negative exponents alongside decimal-hopping rules for Scientific Notation.',
          svgFigure: 'exponents_powers_scale',
        },
        definitions: [
          { term: 'Base', definition: 'The repeated factor "a" in the exponential expression aⁿ.' },
          { term: 'Exponent / Index', definition: 'The superscript integer "n" in aⁿ showing repeated multiplication (n > 0) or reciprocal division (n < 0).' },
          { term: 'Zero Exponent Property', definition: 'For every non-zero rational number a, a⁰ = 1.' },
          { term: 'Negative Exponent Law', definition: 'For non-zero p/q and integer n, (p/q)⁻ⁿ = (q/p)ⁿ.' },
        ],
        commonMistakes: [
          {
            mistake: 'Evaluating 4⁻² as −16 or −1/16.',
            correction: 'A negative index flips the base into its reciprocal without negating the value: 4⁻² = 1/4² = +1/16.',
          },
          {
            mistake: 'Computing (−3)² as −9 or −3² as +9.',
            correction: '(−3)² = (−3)(−3) = +9, whereas −3² = −(3×3) = −9. Watch parentheses!',
          },
        ],
      },
      {
        id: 'exp-top2',
        title: 'The Seven Fundamental Laws of Exponents (Proofs & Prime Strategy)',
        content:
          'When exponents are positive, zero, or negative integers and bases a, b are non-zero rational numbers, ALL seven Laws of Exponents operate without exception. These laws eliminate massive multiplication by letting us add, subtract, or multiply small integer indices directly.\n\nWhy does the Product Law aᵐ × aⁿ = aᵐ⁺ⁿ hold? Simply count total factors: multiplying m copies of "a" by n more copies of "a" produces (m + n) copies of "a" in total. Even with negative powers—say 2⁵ × 2⁻³ = 32 × (1/8) = 4 = 2² = 2⁵⁺⁽⁻³⁾—the rule remains 100% consistent!\n\nExam Power Strategy (Prime Base Decomposition): Whenever a fraction mixes composite numbers like 4, 6, 8, 9, 10, 12, 15, 25, 27, 36, 125, immediately rewrite each composite base as a product of primes (e.g., 6⁻⁴ = (2 × 3)⁻⁴ = 2⁻⁴ × 3⁻⁴; 125 = 5³; 27 = 3³). Once every factor sits on prime bases 2, 3, 5, 7..., matching powers combine effortlessly.',
        subtopics: [
          {
            subheading: 'Law 1 & Law 2: Product Law and Quotient Law (Same Base)',
            body: '• Product Law: aᵐ × aⁿ = aᵐ⁺ⁿ (bases MUST match; add the exponents).\n• Quotient Law: aᵐ ÷ aⁿ = aᵐ⁻ⁿ (bases MUST match; subtract bottom exponent from top exponent).\nBe extra careful when subtracting a negative denominator exponent: a⁻² ÷ a⁻⁵ = a⁻²⁻⁽⁻⁵⁾ = a⁻²⁺⁵ = a⁺³!',
          },
          {
            subheading: 'Law 3: Power of a Power',
            body: '(aᵐ)ⁿ = aᵐˣⁿ = aᵐⁿ.\nFor example, [(−2/3)²]⁻³ = (−2/3)²ˣ⁽⁻³⁾ = (−2/3)⁻⁶ = (−3/2)⁶ = 729/64.\nDo NOT confuse (a²)³ with a² × a³: (a²)³ means a² · a² · a² = a⁶ (multiply exponents), whereas a² × a³ = a⁵ (add exponents)!',
          },
          {
            subheading: 'Law 4 & Law 5: Power of a Product and Power of a Quotient',
            body: '• Power of a Product: (a × b)ⁿ = aⁿ × bⁿ. Reversing this lets you combine DIFFERENT bases having the SAME exponent: 2⁻³ × 5⁻³ = (2 × 5)⁻³ = 10⁻³ = 1/1000!\n• Power of a Quotient: (a / b)ⁿ = aⁿ / bⁿ. Useful for simplifying fractions like 12⁵ / 4⁵ = (12/4)⁵ = 3⁵ = 243.',
          },
          {
            subheading: 'Law 6 & Law 7: Zero Power and Negative Power Laws',
            body: '• Zero Power: a⁰ = 1 for any a ≠ 0. Watch out: 2⁰ + 3⁰ = 1 + 1 = 2 (NOT 5⁰ = 1!).\n• Negative Power Switch: Moving any exponential factor across the fraction bar simply reverses the sign of its exponent: a⁻ᵐ / b⁻ⁿ = bⁿ / aᵐ.',
            keyPoint: 'Shortcut: Any factor a⁻ᵐ in a numerator jumps down to the denominator as a⁺ᵐ, and any b⁻ⁿ in a denominator jumps up to the numerator as b⁺ⁿ!',
          },
        ],
        diagram: {
          id: 'diag-exponents-scale',
          title: 'Visualizing Exponent Laws & Powers-of-10 Scale',
          caption: 'Textbook illustration summarizing Product/Quotient rules and cosmic-to-atomic scale spanning 10⁻¹⁰ m to 10¹² m.',
          imageUrl: '/diagrams/diagram_exponents_powers_1794912683042.jpg',
        },
        comparisonTable: {
          caption: 'Table 2.1: Complete Reference Table of All Seven Laws of Exponents (a, b ≠ 0; m, n ∈ Z)',
          headers: ['Law Name', 'Algebraic Formula', 'Worked Example', 'Common Exam Trap to Avoid'],
          rows: [
            ['1. Product Law', 'aᵐ × aⁿ = aᵐ⁺ⁿ', '3⁻⁴ × 3⁶ = 3² = 9', 'Never multiply bases: 2³×2² ≠ 4⁵'],
            ['2. Quotient Law', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '5² ÷ 5⁻³ = 5²⁻⁽⁻³⁾ = 5⁵', 'Always subtract signed denominator index carefully'],
            ['3. Power of a Power', '(aᵐ)ⁿ = aᵐⁿ', '(2⁻²)³ = 2⁻⁶ = 1/64', 'Multiply exponents here, do not add them'],
            ['4. Power of a Product', '(a × b)ⁿ = aⁿ × bⁿ', '(2 × 5)⁻² = 2⁻² × 5⁻² = 1/100', 'Apply exponent to BOTH coefficients & variables'],
            ['5. Power of a Quotient', '(a / b)ⁿ = aⁿ / bⁿ', '(3/5)² = 9/25', 'Raise BOTH numerator and denominator to power n'],
            ['6. Zero Exponent', 'a⁰ = 1 (a ≠ 0)', '(−7/19)⁰ = 1', '3⁰ + 5⁰ = 1 + 1 = 2 (NOT 8⁰ = 1!)'],
            ['7. Negative Exponent', '(a/b)⁻ⁿ = (b/a)ⁿ', '(−2/5)⁻³ = (−5/2)³ = −125/8', 'Flip fraction ONLY; keep negative base sign!'],
          ],
        },
        commonMistakes: [
          {
            mistake: 'Writing 2⁰ + 3⁰ + 4⁰ = (2 + 3 + 4)⁰ = 9⁰ = 1.',
            correction: 'Exponent acts on each term separately BEFORE addition (BODMAS): 2⁰ + 3⁰ + 4⁰ = 1 + 1 + 1 = 3.',
          },
          {
            mistake: 'Writing (a + b)⁻¹ = a⁻¹ + b⁻¹ (e.g., (2⁻¹ + 3⁻¹)⁻¹ = 2 + 3 = 5).',
            correction: 'Exponents NEVER distribute over addition or subtraction! Evaluate inside parentheses first: (1/2 + 1/3)⁻¹ = (5/6)⁻¹ = 6/5.',
          },
        ],
      },
      {
        id: 'exp-top3',
        title: 'Solving Exponential Equations by Equating Bases',
        content:
          'An Exponential Equation is an equation in which the unknown variable (such as x, m, or n) appears inside the exponent—for example, 2ˣ⁺³ = 64 or (3/5)²ˣ⁻¹ = 125/27.\n\nHow do we solve them cleanly without logarithms? We rely on the Fundamental Uniqueness Property of Powers:\nIf aˣ = aʸ, where base "a" is NOT 0, 1, or −1, then the exponents MUST be equal: x = y!\n(Why exclude 0, 1, and −1? Because 1⁵ = 1⁹ even though 5 ≠ 9, and (−1)² = (−1)⁴ even though 2 ≠ 4!)',
        subtopics: [
          {
            subheading: '3-Step Blueprint for Solving Exponential Equations',
            body: 'Step 1: Simplify each side separately using Product, Quotient, and Negative Exponent laws until LHS = (Base)ᴬ and RHS = (Same Base)ᴮ.\nStep 2: If one side is a rational number like 81/16 or 125/27, prime-factorise it into a power of the matching base (e.g., 81/16 = (3/2)⁴ = (2/3)⁻⁴).\nStep 3: Once bases match identically on both sides, drop the bases and solve the resulting Class 8 linear equation A = B!',
            keyPoint: 'Watch sign inversions! If LHS has base (2/3) and RHS simplifies to (3/2)⁴, flip RHS first as (2/3)⁻⁴ before equating exponents.',
          },
        ],
        formulas: [
          {
            formula: 'Base-Matching Rule: If aˣ = aʸ  (a ≠ 0, 1, −1), then x = y',
            explanation: 'Core principle for solving every Class 8 exponential equation.',
          },
        ],
      },
      {
        id: 'exp-top4',
        title: 'Scientific Notation (Standard Form) & Comparing Extreme Scales',
        content:
          'Scientists across the globe use a single agreed format called Standard Form (or Scientific Notation) to write very large or very small numbers unambiguously.\n\nDefinition: A positive number N is in Standard Form if it is written as:\nN = k × 10ⁿ,\nwhere:\n1. k (called the Mantissa / Significand) is a decimal number satisfying 1 ≤ k < 10 (meaning strictly ONE non-zero digit sits to the left of the decimal point), and\n2. n (called the Order-of-Magnitude Exponent) is an integer (positive, zero, or negative).',
        subtopics: [
          {
            subheading: 'Rule 1: Large Numbers (Greater Than or Equal to 10) → Positive Exponent',
            body: 'Count how many places the decimal point must jump LEFT so that only one non-zero digit stays before the decimal point. That hop count gives the POSITIVE exponent +n.\n• Example 1: Diameter of Sun = 1,400,000,000 m. Decimal sits implicitly at the end; moving left 9 places leaves 1.4 → 1.4 × 10⁹ m.\n• Example 2: 53,400.75 → shift 4 places left → 5.340075 × 10⁴.',
          },
          {
            subheading: 'Rule 2: Small Numbers (Strictly Less Than 1) → Negative Exponent',
            body: 'Count how many places the decimal point jumps RIGHT until it lands immediately AFTER the first non-zero digit. That hop count gives the NEGATIVE exponent −n.\n• Example 1: Thickness of a plant cell wall = 0.0000085 m. Jump right 6 places past 8 → 8.5 × 10⁻⁶ m.\n• Example 2: 0.000000007 m = 7 × 10⁻⁹ m (= 7 nanometres).',
          },
          {
            subheading: 'Converting Standard Form Back to Usual Decimal Form',
            body: 'To unpack k × 10ⁿ into ordinary decimal notation:\n• If n > 0: shift the decimal point n places RIGHT, appending zeroes wherever digits run out. (Example: 3.614 × 10⁶ = 3,614,000.)\n• If n < 0: shift the decimal point |n| places LEFT, inserting leading zeroes right after "0.". (Example: 4.2 × 10⁻⁵ = 0.000042.)',
          },
          {
            subheading: 'Comparing & Adding Numbers in Scientific Notation',
            body: '• To Compare two numbers k₁ × 10ᵃ and k₂ × 10ᵇ: FIRST compare exponents a and b! A larger power of 10 ALWAYS wins regardless of k (so 1.2 × 10⁷ > 9.9 × 10⁶). Compare k₁ and k₂ ONLY when exponents a = b match.\n• To Add or Subtract (e.g., 3.2 × 10⁵ + 4.5 × 10⁴): NEVER add mantissas with mismatched powers! First rewrite both with the SAME power of 10 (3.2 × 10⁵ + 0.45 × 10⁵ = 3.65 × 10⁵).',
          },
        ],
        realLifeExample:
          'Astrophysics & Cell Biology: Light travels at 3 × 10⁸ m/s, while the Andromeda Galaxy lies 2.4 × 10²² m away. Dividing using Quotient Law tells us light takes (2.4 × 10²²) ÷ (3 × 10⁸) = 0.8 × 10¹⁴ = 8 × 10¹³ seconds (~2.5 million years) to reach Earth! Meanwhile, inside a microchip, a 5-nanometre (5 × 10⁻⁹ m) wire is nearly 10,000 times thinner than a human hair (5 × 10⁻⁵ m).',
        commonMistakes: [
          {
            mistake: 'Writing 38.4 × 10⁵ or 0.45 × 10⁻⁴ and calling it Standard Form.',
            correction: 'Standard form strictly enforces 1 ≤ k < 10! Rewrite 38.4 × 10⁵ = 3.84 × 10⁶, and 0.45 × 10⁻⁴ = 4.5 × 10⁻⁵.',
          },
        ],
      },
    ],
    importantTerminology: [
      { term: 'Base', definition: 'The factor being repeatedly multiplied or inverted in aⁿ.', category: 'Notation' },
      { term: 'Exponent / Index', definition: 'Superscript integer n indicating power level in aⁿ.', category: 'Notation' },
      { term: 'Power', definition: 'The full exponential expression aⁿ (or its evaluated value).', category: 'Notation' },
      { term: 'Zero Exponent Law', definition: 'a⁰ = 1 for any non-zero rational base a.', category: 'Law' },
      { term: 'Multiplicative Inverse of aⁿ', definition: 'a⁻ⁿ = 1/aⁿ, because aⁿ × a⁻ⁿ = 1.', category: 'Inverse' },
      { term: 'Reciprocal Base Flip', definition: '(p/q)⁻ⁿ = (q/p)ⁿ for p, q ≠ 0.', category: 'Law' },
      { term: 'Prime Base Decomposition', definition: 'Rewriting composite bases (4, 6, 8, 9, 10, 25, 125) into prime powers (2, 3, 5) before simplifying.', category: 'Strategy' },
      { term: 'Exponential Equation', definition: 'An equation containing the unknown variable inside an exponent, solved by matching bases.', category: 'Algebra' },
      { term: 'Standard Form (Scientific Notation)', definition: 'Writing a positive number uniquely as k × 10ⁿ where 1 ≤ k < 10 and n ∈ Z.', category: 'Science Standard' },
      { term: 'Mantissa / Significand', definition: 'The decimal multiplier k (1 ≤ k < 10) in Scientific Notation k × 10ⁿ.', category: 'Notation' },
    ],
    formulaSheet: [
      { title: 'Product Law', expression: 'aᵐ × aⁿ = aᵐ⁺ⁿ', meaning: 'Add exponents when multiplying identical non-zero bases.' },
      { title: 'Quotient Law', expression: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', meaning: 'Subtract divisor exponent from dividend exponent.' },
      { title: 'Power of a Power', expression: '(aᵐ)ⁿ = aᵐⁿ', meaning: 'Multiply stacked exponents together.' },
      { title: 'Power of Product', expression: '(a × b)ⁿ = aⁿ × bⁿ', meaning: 'Distribute outer power over multiplication.' },
      { title: 'Power of Quotient', expression: '(a / b)ⁿ = aⁿ / bⁿ', meaning: 'Distribute outer power over numerator and denominator.' },
      { title: 'Zero Exponent', expression: 'a⁰ = 1   (a ≠ 0)', meaning: 'Every non-zero rational base raised to 0 equals 1.' },
      { title: 'Negative Rational Power', expression: '(p/q)⁻ⁿ = (q/p)ⁿ', meaning: 'Flip base fraction to turn negative exponent positive.' },
      { title: 'Negative Parity Rules', expression: '(−1)ᵉᵛᵉⁿ = +1 ;  (−1)ᵒᵈᵈ = −1', meaning: 'Even exponent cancels negative base sign; odd keeps it.' },
      { title: 'Equating Exponents', expression: 'aˣ = aʸ ⟹ x = y  (a ≠ 0, ±1)', meaning: 'Equal bases force equal exponents.' },
      { title: 'Standard Form', expression: 'k × 10ⁿ   (1 ≤ k < 10, n ∈ Z)', meaning: 'Shift left → +n; Shift right → −n.' },
    ],
    comparisonTables: [
      {
        title: 'Table 2.2: Usual Decimal Form vs. Standard Form (Scientific Notation) Conversions',
        headers: ['Physical Quantity / Number', 'Usual Decimal Form', 'Decimal Hops Needed', 'Standard Form (k × 10ⁿ)'],
        rows: [
          ['Speed of light in vacuum', '300,000,000 m/s', '8 places LEFT', '3.0 × 10⁸ m/s'],
          ['Distance Earth to Sun (1 AU)', '149,600,000,000 m', '11 places LEFT', '1.496 × 10¹¹ m'],
          ['Radius of a Hydrogen atom', '0.000000000053 m', '11 places RIGHT', '5.3 × 10⁻¹¹ m'],
          ['Diameter of a Red Blood Cell', '0.000007 m', '6 places RIGHT', '7.0 × 10⁻⁶ m'],
          ['Charge of an Electron', '0.00000000000000000016 C', '19 places RIGHT', '1.6 × 10⁻¹⁹ C'],
        ],
      },
    ],
    solvedExamples: [
      {
        id: 'sol-exp-1',
        question: 'Evaluate: (3⁻¹ + 4⁻¹)⁻¹ × 5⁻¹',
        steps: [
          'Step 1: Evaluate negative powers inside the bracket first (BODMAS!): 3⁻¹ = 1/3 and 4⁻¹ = 1/4.',
          'Step 2: Add the two fractions using LCM(3, 4) = 12: 1/3 + 1/4 = (4 + 3)/12 = 7/12.',
          'Step 3: Apply the outer power (−1) to the combined sum: (7/12)⁻¹ = 12/7.',
          'Step 4: Multiply by 5⁻¹ = 1/5: (12/7) × (1/5) = 12/35.',
        ],
        finalAnswer: '12/35',
        keyRule: 'Remember: (a + b)⁻¹ ≠ a⁻¹ + b⁻¹! Always add fractions inside brackets BEFORE taking reciprocal.',
      },
      {
        id: 'sol-exp-2',
        question: 'Simplify and express with positive exponents: [25 × t⁻⁴] / [5⁻³ × 10 × t⁻⁸]   (t ≠ 0)',
        steps: [
          'Step 1: Prime factorise composite numbers: 25 = 5² and 10 = 2 × 5¹.',
          'Step 2: Substitute: (5² × t⁻⁴) / (5⁻³ × 2 × 5¹ × t⁻⁸).',
          'Step 3: Combine powers of base 5 in the denominator: 5⁻³ × 5¹ = 5⁻³⁺¹ = 5⁻².',
          'Step 4: Apply Quotient Law aᵐ ÷ aⁿ = aᵐ⁻ⁿ separately to base 5 and base t:',
          'For base 5: 5² ÷ 5⁻² = 5²⁻⁽⁻²⁾ = 5⁴ = 625.',
          'For base t: t⁻⁴ ÷ t⁻⁸ = t⁻⁴⁻⁽⁻⁸⁾ = t⁴.',
          'Step 5: Keep the remaining factor 2 in the denominator: (625 × t⁴) / 2.',
        ],
        finalAnswer: '625t⁴ / 2',
        keyRule: 'Factor every composite integer into prime bases 2, 3, 5 first.',
      },
      {
        id: 'sol-exp-3',
        question: 'Find the value of m if (−3)ᵐ⁺¹ × (−3)⁵ = (−3)⁷.',
        steps: [
          'Step 1: Apply Product Law aᵖ × aᵍ = aᵖ⁺ᵍ on LHS: (−3)⁽ᵐ⁺¹⁾⁺⁵ = (−3)⁷.',
          'Step 2: Simplify exponent: (−3)ᵐ⁺⁶ = (−3)⁷.',
          'Step 3: Since bases are identical (−3 ≠ 0, 1, −1), equate exponents:',
          'm + 6 = 7',
          'Step 4: Solve linear equation: m = 7 − 6 = 1.',
        ],
        finalAnswer: 'm = 1',
        keyRule: 'If aˣ = aʸ (where a ≠ 0, 1, −1), then x = y.',
      },
      {
        id: 'sol-exp-4',
        question: 'By what number should (−3/2)⁻³ be divided so that the quotient is (9/4)⁻²?',
        steps: [
          'Step 1: Let the required divisor be x. Equation: (−3/2)⁻³ ÷ x = (9/4)⁻².',
          'Step 2: Isolate x: x = (−3/2)⁻³ ÷ (9/4)⁻².',
          'Step 3: Convert negative powers by reciprocating bases: (−3/2)⁻³ = (−2/3)³ = −8/27.',
          'Step 4: Similarly, (9/4)⁻² = (4/9)² = 16/81.',
          'Step 5: Perform division: x = (−8/27) ÷ (16/81) = (−8/27) × (81/16) = (−1/1) × (3/2) = −3/2.',
        ],
        finalAnswer: '−3/2  (or (−2/3)⁻¹)',
        keyRule: 'Convert every negative power to positive rational values before dividing.',
      },
      {
        id: 'sol-exp-5',
        question: 'Evaluate: { (1/3)⁻² − (1/2)⁻³ } ÷ (1/4)⁻².',
        steps: [
          'Step 1: Apply (p/q)⁻ⁿ = (q/p)ⁿ to each term:',
          '(1/3)⁻² = (3/1)² = 9',
          '(1/2)⁻³ = (2/1)³ = 8',
          '(1/4)⁻² = (4/1)² = 16',
          'Step 2: Substitute inside the curly bracket: { 9 − 8 } ÷ 16.',
          'Step 3: Simplify: 1 ÷ 16 = 1/16.',
        ],
        finalAnswer: '1/16',
        keyRule: 'Fractions of the form (1/k)⁻ⁿ simplify directly to kⁿ!',
      },
      {
        id: 'sol-exp-6',
        question: 'If x = (3/2)² × (2/3)⁻⁴, find the value of x⁻².',
        steps: [
          'Step 1: Simplify x by matching bases! Convert (2/3)⁻⁴ = (3/2)⁺⁴.',
          'Step 2: So x = (3/2)² × (3/2)⁴ = (3/2)²⁺⁴ = (3/2)⁶.',
          'Step 3: Now compute x⁻² using Power-of-a-Power Law:',
          'x⁻² = [ (3/2)⁶ ]⁻² = (3/2)⁻¹² = (2/3)¹².',
        ],
        finalAnswer: '(2/3)¹²',
        keyRule: 'Do NOT expand huge powers like 2¹²/3¹² unless asked; keep large answers in positive exponential form.',
      },
      {
        id: 'sol-exp-7',
        question: 'Solve for p: 9ᵖ⁺² = 27³ᵖ⁻⁴.',
        steps: [
          'Step 1: Express both 9 and 27 in prime base 3: 9 = 3² and 27 = 3³.',
          'Step 2: Rewrite equation: (3²)ᵖ⁺² = (3³)³ᵖ⁻⁴.',
          'Step 3: Apply Power-of-a-Power Law (multiply exponents cleanly using brackets):',
          '3²⁽ᵖ⁺²⁾ = 3³⁽³ᵖ⁻⁴⁾  ⟹  3²ᵖ⁺⁴ = 3⁹ᵖ⁻¹².',
          'Step 4: Since bases are equal (3), equate exponents: 2p + 4 = 9p − 12.',
          'Step 5: Solve linear equation: 4 + 12 = 9p − 2p ⟹ 16 = 7p ⟹ p = 16/7.',
        ],
        finalAnswer: 'p = 16/7',
        keyRule: 'Always multiply the outer factor across BOTH terms of a binomial exponent using brackets.',
      },
      {
        id: 'sol-exp-8',
        question: 'In a stack there are 5 books each of thickness 20 mm and 5 paper sheets each of thickness 0.016 mm. Find the total thickness of the stack in Standard Form.',
        steps: [
          'Step 1: Total thickness of 5 books = 5 × 20 mm = 100 mm.',
          'Step 2: Total thickness of 5 paper sheets = 5 × 0.016 mm = 0.080 mm = 0.08 mm.',
          'Step 3: Add together in same unit (mm): Total thickness = 100 + 0.08 = 100.08 mm.',
          'Step 4: Shift decimal 2 places LEFT so mantissa lies in [1, 10): 1.0008 × 10² mm.',
        ],
        finalAnswer: '1.0008 × 10² mm',
        keyRule: 'Keep all significant trailing non-zero digits (0008) intact inside mantissa k.',
      },
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'exp-e1',
          question: 'Evaluate: (2⁰ + 3⁻¹) × 3²',
          solutionSteps: ['2⁰ = 1 and 3⁻¹ = 1/3.', '(1 + 1/3) × 9 = (4/3) × 9 = 4 × 3 = 12.'],
          finalAnswer: '12',
          marks: 2,
        },
        {
          id: 'exp-e2',
          question: 'Write 6.02 × 10⁻⁴ in usual decimal form.',
          solutionSteps: ['Negative exponent −4 shifts decimal point 4 places to the left.', '6.02 → 0.000602.'],
          finalAnswer: '0.000602',
          marks: 1,
        },
        {
          id: 'exp-e3',
          question: 'Express (−243)/(3125) in exponential notation.',
          solutionSteps: ['−243 = (−3)⁵ and 3125 = 5⁵.', 'Hence (−243)/3125 = (−3/5)⁵.'],
          finalAnswer: '(−3/5)⁵',
          marks: 2,
        },
        {
          id: 'exp-e4',
          question: 'Find the multiplicative inverse of (5/7)⁻³.',
          solutionSteps: ['(5/7)⁻³ × (5/7)⁺³ = (5/7)⁰ = 1.', 'Therefore multiplicative inverse is (5/7)³ = 125/343.'],
          finalAnswer: '(5/7)³ = 125/343',
          marks: 1,
        },
      ],
      medium: [
        {
          id: 'exp-m1',
          question: 'Find x such that (2/5)³ × (2/5)⁻⁶ = (2/5)²ˣ⁻¹.',
          solutionSteps: ['LHS = (2/5)³⁺⁽⁻⁶⁾ = (2/5)⁻³.', 'Equating exponents: 2x − 1 = −3 ⟹ 2x = −2 ⟹ x = −1.'],
          finalAnswer: 'x = −1',
          marks: 3,
        },
        {
          id: 'exp-m2',
          question: 'Simplify: [8⁻¹ × 5³] / 2⁻⁴.',
          solutionSteps: ['Write 8 = 2³, so 8⁻¹ = (2³)⁻¹ = 2⁻³.', 'Expression = (2⁻³ × 5³) / 2⁻⁴ = 2⁻³⁻⁽⁻⁴⁾ × 5³ = 2¹ × 125 = 250.'],
          finalAnswer: '250',
          marks: 3,
        },
        {
          id: 'exp-m3',
          question: 'Express (3.5 × 10⁻⁵) × (4.0 × 10⁸) in Standard Form.',
          solutionSteps: ['Multiply mantissas: 3.5 × 4.0 = 14.0.', 'Add powers of 10: 10⁻⁵ × 10⁸ = 10³.', 'Adjust 14.0 × 10³ = 1.4 × 10¹ × 10³ = 1.4 × 10⁴.'],
          finalAnswer: '1.4 × 10⁴',
          marks: 3,
        },
        {
          id: 'exp-m4',
          question: 'By what number should (−2/3)⁻² be multiplied to obtain (−4/9)⁻¹?',
          solutionSteps: ['Let multiplier be m. (−2/3)⁻² × m = (−4/9)⁻¹.', '(−3/2)² × m = (−9/4) ⟹ (9/4) × m = −9/4 ⟹ m = −1.'],
          finalAnswer: '−1',
          marks: 3,
        },
      ],
      difficult: [
        {
          id: 'exp-d1',
          question: 'Simplify completely: [3⁻⁵ × 10⁻⁵ × 125] / [5⁻⁷ × 6⁻⁵]',
          solutionSteps: [
            'Prime factorise every composite base: 10⁻⁵ = 2⁻⁵ × 5⁻⁵; 125 = 5³; 6⁻⁵ = 2⁻⁵ × 3⁻⁵.',
            'Numerator: 3⁻⁵ × 2⁻⁵ × 5⁻⁵ × 5³ = 3⁻⁵ × 2⁻⁵ × 5⁻².',
            'Denominator: 5⁻⁷ × 2⁻⁵ × 3⁻⁵.',
            'Cancel identical powers 3⁻⁵ and 2⁻⁵ cleanly! Remaining = 5⁻² ÷ 5⁻⁷ = 5⁻²⁺⁷ = 5⁵ = 3,125.',
          ],
          finalAnswer: '5⁵ = 3,125',
          marks: 4,
        },
        {
          id: 'exp-d2',
          question: 'Find the value of x if 5²ˣ ÷ 5⁻³ = 5⁵ × 25.',
          solutionSteps: [
            'Simplify LHS: 5²ˣ⁻⁽⁻³⁾ = 5²ˣ⁺³.',
            'Simplify RHS: 5⁵ × 5² = 5⁷.',
            'Equate exponents (base 5): 2x + 3 = 7 ⟹ 2x = 4 ⟹ x = 2.',
          ],
          finalAnswer: 'x = 2',
          marks: 4,
        },
        {
          id: 'exp-d3',
          question: 'Evaluate: { (5/2)⁻² ÷ (1/4)⁻² } × (5/8)⁰ + (−1)³⁰¹.',
          solutionSteps: [
            'First term: (5/2)⁻² = (2/5)² = 4/25; (1/4)⁻² = 4² = 16.',
            '(4/25) ÷ 16 = (4/25) × (1/16) = 1/100.',
            '(5/8)⁰ = 1, so first block = (1/100) × 1 = 1/100.',
            '(−1)³⁰¹ = −1 (odd exponent).',
            'Total = 1/100 − 1 = −99/100.',
          ],
          finalAnswer: '−99/100',
          marks: 4,
        },
        {
          id: 'exp-d4',
          question: 'If 2ˣ = 32 and 3ʸ = 27, calculate the exact value of (x + y)ˣ⁻ʸ.',
          solutionSteps: [
            '2ˣ = 32 = 2⁵ ⟹ x = 5.',
            '3ʸ = 27 = 3³ ⟹ y = 3.',
            'Compute (x + y)ˣ⁻ʸ = (5 + 3)⁵⁻³ = 8² = 64.',
          ],
          finalAnswer: '64',
          marks: 4,
        },
      ],
    },
    examPreparationTips: [
      'Factorise every composite base (4, 6, 8, 9, 10, 12, 25, 27, 125) into prime bases 2, 3, 5 on the very first step.',
      'Never distribute an outer exponent across + or −: evaluate (a⁻¹ + b⁻¹) inside brackets before inverting.',
      'Check Standard Form mantissa k strictly satisfies 1 ≤ k < 10 (e.g., rewrite 45.2 × 10⁴ as 4.52 × 10⁵).',
      'Watch negative base parity carefully: (−1)²⁰²⁶ = +1 while (−1)²⁰²⁷ = −1.',
      'State the name of each Exponent Law applied beside major simplification steps to gain full CISCE presentation marks.',
    ],
    chapterSummary: [
      'Repeated multiplication of base a for n times is denoted aⁿ.',
      'For any non-zero rational number a ≠ 0: a⁰ = 1 and a⁻ⁿ = 1/aⁿ.',
      'For any non-zero p/q: (p/q)⁻ⁿ = (q/p)ⁿ — reciprocate the base and keep the base’s original sign.',
      'Even powers of a negative base are positive; odd powers of a negative base are negative.',
      'Product Law: aᵐ × aⁿ = aᵐ⁺ⁿ; Quotient Law: aᵐ ÷ aⁿ = aᵐ⁻ⁿ (matching non-zero bases).',
      'Power of a Power: (aᵐ)ⁿ = aᵐⁿ; Power of Product/Quotient: (ab)ⁿ = aⁿbⁿ and (a/b)ⁿ = aⁿ/bⁿ.',
      'Base-Matching Property: If aˣ = aʸ (a ≠ 0, 1, −1), then x = y.',
      'Scientific Notation (Standard Form) expresses every positive number uniquely as k × 10ⁿ with 1 ≤ k < 10 and n ∈ Z.',
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Why does a⁰ equal 1 for every non-zero rational number a, whereas 0⁰ is avoided?',
        answer:
          'By the Quotient Law, aᵐ ÷ aᵐ = aᵐ⁻ᵐ = a⁰. Simultaneously, any non-zero quantity divided by itself equals 1 (aᵐ / aᵐ = 1). Comparing both gives a⁰ = 1. However, if a = 0, aᵐ / aᵐ becomes 0/0, which involves division by zero and is indeterminate.',
        type: 'Reasoning',
      },
      {
        question: 'Is 2⁻⁵ larger or smaller than (−2)⁵? Justify without guessing.',
        answer:
          '2⁻⁵ = 1/2⁵ = +1/32 (positive, > 0). By contrast, (−2)⁵ = −32 (negative, < 0). Since every positive rational number is strictly greater than every negative number, 2⁻⁵ > (−2)⁵.',
        type: 'Reasoning',
      },
      {
        question: 'Express (16/81)⁻³ ÷ (2/3)⁻⁴ in simplified exponential form with a positive exponent.',
        answer:
          'Rewrite 16/81 = (2/3)⁴. First term = [(2/3)⁴]⁻³ = (2/3)⁻¹². Now divide: (2/3)⁻¹² ÷ (2/3)⁻⁴ = (2/3)⁻¹²⁻⁽⁻⁴⁾ = (2/3)⁻⁸ = (3/2)⁸.',
        type: 'Short Answer',
      },
      {
        question: 'Compare the diameter of Earth (1.276 × 10⁷ m) with the diameter of the Sun (1.4 × 10⁹ m). Roughly how many times wider is the Sun?',
        answer:
          'Ratio = (1.4 × 10⁹) / (1.276 × 10⁷) = (1.4 / 1.276) × 10⁹⁻⁷ ≈ 1.097 × 10² ≈ 110 times wider.',
        type: 'Short Answer',
      },
      {
        question: 'Solve for x: 4²ˣ⁺¹ = 8ˣ⁺³.',
        answer:
          'Rewrite both sides using prime base 2: 4 = 2² and 8 = 2³. Equation becomes (2²)²ˣ⁺¹ = (2³)ˣ⁺³ ⟹ 2⁴ˣ⁺² = 2³ˣ⁺⁹. Since bases match, equate exponents: 4x + 2 = 3x + 9 ⟹ 4x − 3x = 9 − 2 ⟹ x = 7.',
        type: 'Long Answer',
      },
      {
        question: 'Evaluate completely: [ (2/5)⁻² × (5/2)⁻³ ] ÷ [ (4/25)⁻² ].',
        answer:
          'First convert (5/2)⁻³ = (2/5)³ and 4/25 = (2/5)². Bracket 1 = (2/5)⁻² × (2/5)³ = (2/5)¹. Bracket 2 = [(2/5)²]⁻² = (2/5)⁻⁴. Dividing: (2/5)¹ ÷ (2/5)⁻⁴ = (2/5)¹⁻⁽⁻⁴⁾ = (2/5)⁵ = 32/3125.',
        type: 'Long Answer',
      },
      {
        question: 'Simplify and find the value of k if [(−2)³]⁴ ÷ (−2)⁵ = (−2)ᵏ.',
        answer:
          'LHS = (−2)³ˣ⁴ ÷ (−2)⁵ = (−2)¹² ÷ (−2)⁵ = (−2)¹²⁻⁵ = (−2)⁷. Comparing (−2)⁷ = (−2)ᵏ gives k = 7.',
        type: 'Short Answer',
      },
      {
        question: 'If 3ᵃ = 81, 4ᵇ = 64, find the exact value of a⁻² + b⁻³.',
        answer:
          '3ᵃ = 3⁴ ⟹ a = 4. Also 4ᵇ = 4³ ⟹ b = 3. Now a⁻² + b⁻³ = 4⁻² + 3⁻³ = 1/16 + 1/27 = (27 + 16)/432 = 43/432.',
        type: 'HOTS',
      },
    ],
    practiceExercises: [
      {
        question: 'Evaluate (−2/3)⁻⁴ as a simplified rational number.',
        hint: 'Reciprocate base first to convert exponent to +4; remember (−)⁴ = +.',
        answerGuide: '(−3/2)⁴ = +81/16.',
      },
      {
        question: 'Find n if (7/9)⁻⁸ × (7/9)ⁿ = (9/7)². ',
        hint: 'Rewrite RHS (9/7)² as (7/9)⁻² before equating exponents.',
        answerGuide: '−8 + n = −2 ⟹ n = 6.',
      },
      {
        question: 'Add 4.2 × 10⁵ and 3.5 × 10⁴ and give the answer in Standard Form.',
        hint: 'Convert 3.5 × 10⁴ = 0.35 × 10⁵ so powers of 10 match.',
        answerGuide: '4.55 × 10⁵.',
      },
    ],
    practiceWorksheet: {
      title: 'Chapter 2 Comprehensive Practice Worksheet (30 Marks)',
      instructions: 'Show prime factorisation steps and express final exponential answers with positive exponents.',
      sections: [
        {
          sectionTitle: 'Section A — Multiple Choice Questions (MCQs) [1 mark each]',
          items: [
            '1. What is the value of (7⁰ + 5⁰) × (3⁰ − 2⁰)?  (a) 0   (b) 1   (c) 2   (d) 12',
            '2. Which of these equals (3/4)⁻³?  (a) −27/64   (b) 64/27   (c) −64/27   (d) 27/64',
            '3. Write 0.00000309 in Standard Form:  (a) 3.09 × 10⁻⁶   (b) 3.09 × 10⁶   (c) 30.9 × 10⁻⁷   (d) 3.9 × 10⁻⁶',
            '4. If (2/3)ˣ = 27/8, then x equals:  (a) 3   (b) −3   (c) 2   (d) −2',
            '5. Simplify (−1)⁴⁴ − (−1)⁴⁵:  (a) 0   (b) 1   (c) 2   (d) −2',
          ],
        },
        {
          sectionTitle: 'Section B — Short Answer Questions [2 marks each]',
          items: [
            '6. Evaluate (5⁻¹ × 3⁻¹) ÷ 6⁻¹.',
            '7. Simplify (−2/5)⁷ ÷ (−2/5)⁴ and write the final numerical answer.',
            '8. Convert 4.05 × 10⁻⁵ into Usual Decimal Form.',
            '9. Find the reciprocal of (−3/2)⁻⁴.',
          ],
        },
        {
          sectionTitle: 'Section C — Long Answer Questions [3–4 marks each]',
          items: [
            '10. Find n if 9 × 3ⁿ = 3⁷.',
            '11. Simplify: [3⁻³ × 6² × 125] / [25 × 2² × 3⁻¹].',
            '12. Solve for m: (5/7)²ᵐ⁺¹ × (5/7)⁻³ = (7/5)⁴.',
          ],
        },
        {
          sectionTitle: 'Section D — HOTS & Science Applications [4 marks each]',
          items: [
            '13. The mass of a proton is 1.67 × 10⁻²⁷ kg and mass of an electron is 9.11 × 10⁻³¹ kg. Approximately how many times heavier is a proton than an electron?',
            '14. If 2ˣ × 3ʸ = 648 (where x and y are positive integers), find x and y, and evaluate xʸ.',
          ],
        },
      ],
      answerKey: [
        '1. (a) 0  (since 3⁰ − 2⁰ = 1 − 1 = 0)',
        '2. (b) 64/27  ((4/3)³)',
        '3. (a) 3.09 × 10⁻⁶',
        '4. (b) −3  (27/8 = (3/2)³ = (2/3)⁻³)',
        '5. (c) 2  (1 − (−1) = 2)',
        '6. (1/15) ÷ (1/6) = 6/15 = 2/5',
        '7. (−2/5)³ = −8/125',
        '8. 0.0000405',
        '9. (−3/2)⁴ = 81/16',
        '10. 3² × 3ⁿ = 3⁷ ⟹ n + 2 = 7 ⟹ n = 5',
        '11. (3⁻³ × 2² × 3² × 5³)/(5² × 2² × 3⁻¹) = 3⁰ × 2⁰ × 5¹ = 5',
        '12. (5/7)²ᵐ⁻² = (5/7)⁻⁴ ⟹ 2m − 2 = −4 ⟹ m = −1',
        '13. (1.67 / 9.11) × 10⁴ ≈ 0.1833 × 10,000 ≈ 1,833 times heavier',
        '14. 648 = 8 × 81 = 2³ × 3⁴ ⟹ x = 3, y = 4; xʸ = 3⁴ = 81',
      ],
    },
  },
  quizQuestions: [
    { id: 'eq1', type: 'mcq', question: 'What is the value of (3⁻¹ + 4⁻¹)⁰?', options: ['7/12', '12/7', '1', '0'], correctAnswer: '1', explanation: 'Any non-zero value raised to exponent 0 equals 1.', difficulty: 'easy', marks: 1 },
    { id: 'eq2', type: 'mcq', question: 'Which of the following is the multiplicative inverse of (−3/5)²?', options: ['25/9', '−25/9', '9/25', '−9/25'], correctAnswer: '25/9', explanation: '(−3/5)² = +9/25; its multiplicative inverse is 25/9.', difficulty: 'medium', marks: 1 },
    { id: 'eq3', type: 'true_false', question: '5⁻³ is a negative rational number.', correctAnswer: false, explanation: '5⁻³ = 1/5³ = +1/125, which is positive.', difficulty: 'easy', marks: 1 },
    { id: 'eq4', type: 'fill_blank', question: 'In Standard Form, 0.00054 is written as 5.4 × 10^(_______). (Enter the integer exponent)', correctAnswer: '-4', explanation: 'Moving the decimal point 4 places to the right yields exponent −4.', difficulty: 'medium', marks: 1 },
    { id: 'eq5', type: 'hots', question: 'If 2ˣ⁺³ = 64, what is the value of x?', options: ['2', '3', '4', '6'], correctAnswer: '3', explanation: '64 = 2⁶, so x + 3 = 6 ⟹ x = 3.', difficulty: 'medium', marks: 2 },
    { id: 'eq6', type: 'mcq', question: 'Simplify: [2⁻² × 2⁻³] ÷ 2⁻⁷', options: ['4', '1/4', '2', '8'], correctAnswer: '4', explanation: '2⁻⁵ ÷ 2⁻⁷ = 2⁻⁵⁺⁷ = 2² = 4.', difficulty: 'medium', marks: 1 },
    { id: 'eq7', type: 'mcq', question: 'Evaluate (−1)¹⁰¹ + (−1)¹⁰²:', options: ['−2', '0', '1', '2'], correctAnswer: '0', explanation: '(−1)¹⁰¹ = −1 (odd power) and (−1)¹⁰² = +1 (even power), so −1 + 1 = 0.', difficulty: 'easy', marks: 1 },
    { id: 'eq8', type: 'mcq', question: 'Which of the following numbers is properly written in Standard Form?', options: ['24.5 × 10⁴', '0.45 × 10⁻³', '3.08 × 10⁻⁷', '10.2 × 10⁵'], correctAnswer: '3.08 × 10⁻⁷', explanation: 'Standard form k × 10ⁿ strictly requires 1 ≤ k < 10; only 3.08 satisfies this.', difficulty: 'easy', marks: 1 },
    { id: 'eq9', type: 'hots', question: 'If (3/5)⁴ × (3/5)⁻⁶ = (5/3)ˣ, find x:', options: ['−2', '2', '10', '−10'], correctAnswer: '2', explanation: 'LHS = (3/5)⁻² = (5/3)², so x = 2.', difficulty: 'hard', marks: 2 },
    { id: 'eq10', type: 'fill_blank', question: 'Evaluate: (2⁻¹ ÷ 5⁻¹)² = _______ (give as simplified fraction a/b).', correctAnswer: '25/4', explanation: '(1/2 ÷ 1/5)² = (5/2)² = 25/4.', difficulty: 'medium', marks: 1 },
    { id: 'eq11', type: 'true_false', question: 'For all non-zero numbers a and b, (a + b)⁻² = a⁻² + b⁻².', correctAnswer: false, explanation: 'False: exponents do not distribute over addition! Test a = 1, b = 1: (2)⁻² = 1/4 whereas 1⁻² + 1⁻² = 2.', difficulty: 'medium', marks: 1 },
    { id: 'eq12', type: 'hots', question: 'What is the value of [ (1/2)⁻² + (1/3)⁻² + (1/4)⁻² ]?', options: ['29', '1/29', '9', '14'], correctAnswer: '29', explanation: '2² + 3² + 4² = 4 + 9 + 16 = 29.', difficulty: 'medium', marks: 2 },
  ],
  flashcards: [
    { id: 'fc-exp1', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'Value of (p/q)⁻ⁿ?', back: '(q/p)ⁿ — reciprocate the base and make exponent positive.', category: 'Formula', importance: 'Essential' },
    { id: 'fc-exp2', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'Product Law vs Power-of-Power Law?', back: 'aᵐ × aⁿ = aᵐ⁺ⁿ (add exponents) vs (aᵐ)ⁿ = aᵐⁿ (multiply exponents).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-exp3', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'Standard Form condition for k in k × 10ⁿ?', back: '1 ≤ k < 10 (strictly one non-zero digit left of decimal point).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-exp4', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'What is (−1)⁵⁰ vs (−1)⁵¹?', back: '(−1)⁵⁰ = +1 (even power); (−1)⁵¹ = −1 (odd power).', category: 'Formula', importance: 'Standard' },
    { id: 'fc-exp5', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'How does (−3)² differ from −3²?', back: '(−3)² = (−3)×(−3) = +9; −3² = −(3×3) = −9.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-exp6', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'Value of 2⁰ + 3⁰ + 5⁰?', back: '1 + 1 + 1 = 3 (apply zero power separately before adding!).', category: 'Formula', importance: 'Standard' },
    { id: 'fc-exp7', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'Sign of exponent n in Standard Form for numbers < 1?', back: 'Negative (−n), counting hops RIGHT past the first non-zero digit.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-exp8', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'Base-Matching Rule when solving aˣ = aʸ?', back: 'If a ≠ 0, 1, −1, then matching bases force x = y.', category: 'Formula', importance: 'Essential' },
    { id: 'fc-exp9', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'Which number is greater: 9.8 × 10⁵ or 1.1 × 10⁶?', back: '1.1 × 10⁶, because 10⁶ > 10⁵ (compare exponent of 10 FIRST!).', category: 'Scientific Law', importance: 'Standard' },
    { id: 'fc-exp10', subjectId: 'mathematics', chapterId: 'math-exponents', chapterTitle: 'Exponents & Powers', front: 'Prime decomposition tip for 12⁻⁴ or 25³?', back: 'Rewrite 12⁻⁴ = (2² × 3)⁻⁴ = 2⁻⁸ × 3⁻⁴ and 25³ = (5²)³ = 5⁶.', category: 'Formula', importance: 'Standard' },
  ],
};
