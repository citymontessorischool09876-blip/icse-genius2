import { Chapter } from '../../types/index.ts';

export const CH4_ALGEBRA_FACTORISATION: Chapter = {
  id: 'math-algebra-factorisation',
  subjectId: 'mathematics',
  chapterNumber: 4,
  title: 'Algebraic Expressions, Identities & Factorisation',
  subtitle: 'Polynomial Operations, Long Division, Special Identities, Regrouping & Splitting the Middle Term',
  term: 'Annual',
  estimatedMinutes: 85,
  notes: {
    introduction:
      'In arithmetic, every statement deals with one specific number at a time: 3 + 5 = 8 or 103² = 10,609. Algebra lifts us to a higher viewpoint by using letters (variables such as x, y, a, b) to stand for unspecified numbers so that a single expression captures an infinite family of calculations simultaneously. Whether expressing the perimeter of any rectangle (2l + 2b), calculating compound profit growth, or modeling projectile paths in physics, Algebraic Expressions form the universal grammar of mathematics.\n\nIn Class 7, you practiced combining like terms through simple addition and subtraction. In ICSE Class 8 (aligned with Revised New Mathematics Today), algebra expands dramatically into four vital areas: (1) classifying true Polynomials and performing full multi-term polynomial multiplication and long division; (2) proving geometrically and algebraically the four Special Algebraic Identities; (3) computing complex squares and reciprocal expressions like (x² + 1/x²) mentally using those identities; and (4) Factorisation—the art of reversing expansion to split a polynomial cleanly back into product brackets using common factors, regrouping, difference of two squares, and middle-term splitting.\n\nWhy is Factorisation given so much prominence in Class 8? Because just as breaking 36 into 2² × 3² unlocks fractions, HCF/LCM, and roots in arithmetic, factoring x² − 5x + 6 into (x − 2)(x − 3) unlocks quadratic equations, algebraic fractions, mensuration shortcuts, and Class 9–10 CISCE board mathematics.',
    learningObjectives: [
      'Identify terms, numerical/literal coefficients, like vs. unlike terms, and determine whether an algebraic expression qualifies as a Polynomial.',
      'Calculate the exact degree of one-variable and multi-variable polynomials.',
      'Add, subtract, multiply (monomial × polynomial, binomial × binomial, polynomial × polynomial), and divide polynomials using step-by-step Long Division.',
      'Distinguish clearly between a Conditional Algebraic Equation and a Universal Algebraic Identity.',
      'Derive geometrically and apply the four Special Algebraic Identities: (a + b)², (a − b)², a² − b², and (x + a)(x + b).',
      'Solve multi-step reciprocal identity problems finding x² + 1/x², x⁴ + 1/x⁴, and (a − b) from (a + b) and ab.',
      'Factorise algebraic expressions systematically via HCF extraction, pair regrouping, standard identities (a² − b², a² ± 2ab + b²), and splitting the middle term of x² + bx + c and ax² + bx + c.',
    ],
    topics: [
      {
        id: 'alg-top1',
        title: 'Polynomials: Structure, Degree & Addition/Subtraction/Multiplication',
        content:
          'An Algebraic Expression combines constants (fixed numbers like 5, −3/4) and variables (letters like x, y) using arithmetic operations (+, −, ×, ÷, integer exponents). However, not every algebraic expression is a Polynomial!\n\nStrict Definition of a Polynomial: An algebraic expression is called a Polynomial if and only if EVERY variable appearing in every term carries a NON-NEGATIVE INTEGER exponent (i.e., exponent belongs to Whole Numbers {0, 1, 2, 3, ...}). Equivalently, no variable may appear inside a denominator (like 5/x = 5x⁻¹), under a fractional radical sign (like √x = x¹/²), or with negative exponents.\n\n• Addition & Subtraction: Arrange polynomials cleanly in columns (or grouped brackets) and combine ONLY LIKE TERMS—terms having identical variable letters raised to identical respective exponents (for instance, 7x²y and −4yx² are like terms because multiplication commutes; 7x²y and 7xy² are UNLIKE terms!).\n• Multiplication: Multiply coefficients numerically AND apply the Product Law of Exponents (xᵐ × xⁿ = xᵐ⁺ⁿ) to matching variables across every term.',
        subtopics: [
          {
            subheading: 'Classification by Terms & Polynomial Degree',
            body: '• By Term Count: Monomial (1 term, e.g., −7x³y), Binomial (2 unlike terms, e.g., 4x − 9), Trinomial (3 unlike terms, e.g., x² − 5x + 6), Multinomial (4+ terms).\n• Degree of a One-Variable Polynomial: The highest exponent of the variable with a non-zero coefficient. Example: degree of 3x⁴ − 5x² + 9 is 4; degree of a non-zero constant like 7 (= 7x⁰) is 0.\n• Degree of a Multi-Variable Polynomial: Compute the SUM of variable exponents in each term, then pick the LARGEST sum. Example: in 4x³y² − 7xy⁵ + 8x, term degrees are (3+2)=5, (1+5)=6, and 1 → Polynomial Degree = 6.',
            keyPoint: 'Watch subtraction phrasing: "Subtract P from Q" ALWAYS means Q − P, reversing the sign of EVERY term inside P!',
          },
          {
            subheading: 'Systematic Polynomial Multiplication (Distributive Expansion)',
            body: 'To multiply a binomial (a + b) by another polynomial (c + d + e), multiply EACH term of the first bracket onto the ENTIRE second bracket:\n(a + b)(c + d + e) = a(c + d + e) + b(c + d + e).\nExample: Expand (2x − 3)(x² − 4x + 5):\n= 2x(x² − 4x + 5) − 3(x² − 4x + 5)\n= (2x³ − 8x² + 10x) + (−3x² + 12x − 15)\n= 2x³ − 11x² + 22x − 15.',
          },
        ],
        definitions: [
          { term: 'Polynomial', definition: 'An algebraic expression in which all variable exponents are whole numbers {0, 1, 2, 3, ...}.' },
          { term: 'Degree of a Polynomial', definition: 'Highest total sum of variable exponents present in any non-zero term.' },
          { term: 'Like Terms', definition: 'Terms possessing identical variable combinations with identical powers (only coefficients may differ).' },
          { term: 'Numerical vs. Literal Coefficient', definition: 'In −9x²y, the numerical coefficient is −9, while the coefficient of y is −9x².' },
        ],
        commonMistakes: [
          {
            mistake: 'Calling x² + 3/x + 1 a polynomial of degree 2.',
            correction: '3/x = 3x⁻¹ carries a negative exponent (−1), which disqualifies the entire expression from being a polynomial!',
          },
          {
            mistake: 'Forgetting to distribute minus when subtracting: (5x² − 3x) − (2x² − 4x + 1) = 5x² − 3x − 2x² − 4x + 1.',
            correction: 'Minus before brackets flips EVERY sign inside: −(2x² − 4x + 1) = −2x² + 4x − 1, giving 3x² + x − 1.',
          },
        ],
      },
      {
        id: 'alg-top2',
        title: 'Division of Polynomials (By Monomials & Binomial Long Division)',
        content:
          'Division is the inverse operation of multiplication. When dividing a polynomial Dividend by a non-zero Divisor, our goal is to determine the Quotient polynomial and Remainder such that:\nDividend = (Divisor × Quotient) + Remainder\n(exactly like Euclid’s Division Lemma in arithmetic!). If Remainder = 0, the divisor is an exact factor of the dividend.',
        subtopics: [
          {
            subheading: 'Case 1: Dividing a Polynomial by a Monomial',
            body: 'Split the fraction into individual terms over the monomial divisor, and apply Coefficient Division + Quotient Law of Exponents (xᵐ ÷ xⁿ = xᵐ⁻ⁿ) term by term:\n(12x⁴y² − 8x³y + 4x²y) ÷ (4x²y)\n= (12x⁴y²)/(4x²y) − (8x³y)/(4x²y) + (4x²y)/(4x²y)\n= 3x²y − 2x + 1.\nWarning: Never cancel only the last term like (4x²y)/(4x²y) = 0; any non-zero quantity divided by itself equals 1!',
          },
          {
            subheading: 'Case 2: Polynomial Long Division (Dividing by a Binomial/Trinomial)',
            body: 'To divide P(x) by (ax + b):\nStep 1 (Sort in Descending Order): Arrange BOTH Dividend and Divisor in strict descending powers of the variable (insert 0·xᵏ placeholders for any missing intermediate powers!).\nStep 2 (Divide Leading Terms): Divide the highest-power term of current dividend by the highest-power term of divisor → write as next Quotient term.\nStep 3 (Multiply & Subtract): Multiply the ENTIRE divisor by this quotient term, align like terms underneath dividend, flip signs, and subtract cleanly.\nStep 4 (Bring Down & Repeat): Continue until the remainder is either 0 or has a degree STRICTLY LESS than the divisor’s degree.',
            keyPoint: 'Always leave a 0x² or 0x placeholder when dividing expressions like (x³ − 8) by (x − 2) so columns stay perfectly aligned!',
          },
        ],
        formulas: [
          {
            formula: 'Division Check Identity: Dividend = (Divisor × Quotient) + Remainder',
            explanation: 'Degree of Remainder < Degree of Divisor (or Remainder = 0).',
          },
        ],
        commonMistakes: [
          {
            mistake: 'Writing (6x² + 3x) ÷ 3x = 2x + 0 = 2x.',
            correction: '3x ÷ 3x equals 1, NOT 0! Correct answer is 2x + 1.',
          },
        ],
      },
      {
        id: 'alg-top3',
        title: 'Algebraic Identities: Geometric Proofs & Mental Calculation Power',
        content:
          'What separates an Equation from an Identity? Compare 2x + 3 = 11 with (x + 2)² = x² + 4x + 4:\n• 2x + 3 = 11 is an EQUATION—it holds true ONLY for the single root x = 4.\n• (x + 2)² = x² + 4x + 4 is an ALGEBRAIC IDENTITY—replace x with 0, 5, −3, 1/2, or 1000 and LHS ALWAYS equals RHS!\n\nWhy does (a + b)² equal a² + 2ab + b² and NEVER a² + b²? Geometry makes this crystal clear! Draw a large square of side (a + b). Split each edge into length "a" and length "b". Drawing two perpendicular cuts slices the square into FOUR pieces: one square of area a², one smaller square of area b², and TWO identical rectangles each measuring a × b! Adding all four pieces yields Total Area = a² + 2ab + b².',
        subtopics: [
          {
            subheading: 'The Four Standard Class 8 Identities (Expansion)',
            body: 'Identity I (Square of Sum): (a + b)² = a² + 2ab + b²\nIdentity II (Square of Difference): (a − b)² = a² − 2ab + b²\nIdentity III (Product of Sum & Difference): (a + b)(a − b) = a² − b²\nIdentity IV (Binomial Product with Common Term): (x + a)(x + b) = x² + (a + b)x + ab.\nNotice that multiplying 104 × 96 by hand takes time, whereas (100 + 4)(100 − 4) = 100² − 4² = 10,000 − 16 = 9,984 takes two seconds!',
          },
          {
            subheading: 'Derived Bridge Identities for (a + b), (a − b), ab & Reciprocals',
            body: 'Adding and subtracting Identities I and II unlocks instant exam bridges:\n• (a + b)² − (a − b)² = 4ab  ⟹  (a − b)² = (a + b)² − 4ab\n• (a + b)² + (a − b)² = 2(a² + b²)\n• Reciprocal Pair (a = x, b = 1/x): Since 2 · x · (1/x) = 2:\n  (x + 1/x)² = x² + 1/x² + 2\n  (x − 1/x)² = x² + 1/x² − 2.\nThat tiny cancellation of x and 1/x is an ICSE favourite 3-to-4 mark question!',
            keyPoint: 'Notice in (a − b)² = a² − 2ab + b², the last term +b² is ALWAYS POSITIVE!',
          },
        ],
        diagram: {
          id: 'diag-alg-svg',
          title: 'Geometric Area Proofs of (a + b)² and (a² − b²)',
          caption: 'Vector partitioning proving why (a + b)² contains TWO ab rectangles alongside squares a² and b², and why removing b² from a² leaves (a + b)(a − b).',
          svgFigure: 'algebraic_identities_area',
        },
        comparisonTable: {
          caption: 'Table 4.1: The Four Core Class 8 ICSE Algebraic Identities & Mental Arithmetic Tricks',
          headers: ['Identity Name', 'Algebraic Formula', 'Numerical Application Example'],
          rows: [
            ['Identity I: Square of Sum', '(a + b)² = a² + 2ab + b²', '103² = (100 + 3)² = 10000 + 600 + 9 = 10,609'],
            ['Identity II: Square of Difference', '(a − b)² = a² − 2ab + b²', '98² = (100 − 2)² = 10000 − 400 + 4 = 9,604'],
            ['Identity III: Difference of Squares', '(a + b)(a − b) = a² − b²', '52 × 48 = (50 + 2)(50 − 2) = 2500 − 4 = 2,496'],
            ['Identity IV: Common-Term Product', '(x + a)(x + b) = x² + (a + b)x + ab', '104 × 106 = (100 + 4)(100 + 6) = 10000 + 1000 + 24 = 11,024'],
          ],
        },
        commonMistakes: [
          {
            mistake: 'Writing (3x + 2)² = 3x² + 12x + 4 or 9x² + 4.',
            correction: 'Square the ENTIRE coefficient 3 too: (3x)² = 9x², and include middle term 2(3x)(2) = 12x → 9x² + 12x + 4.',
          },
          {
            mistake: 'Writing (2a − 5b)² = 4a² − 20ab − 25b².',
            correction: '(−5b) × (−5b) = +25b²! The squared last term is ALWAYS positive.',
          },
        ],
      },
      {
        id: 'alg-top4',
        title: 'Four Systematic Strategies of Polynomial Factorisation',
        content:
          'Factorisation is the exact reverse of expansion: instead of multiplying factors out into sums, we rewrite a polynomial sum back as a PRODUCT of simpler factors. Always attack any factorisation problem using this strict 4-step priority checklist so you never get stuck:',
        subtopics: [
          {
            subheading: 'Strategy 1: Extracting the Greatest Common Factor (HCF)',
            body: 'Always inspect EVERY term first for a shared numerical divisor or variable power! Pull out the lowest power of every common variable alongside the numerical HCF.\nExample: Factorise 18x³y² − 27x²y³ + 9x²y².\nHCF of coefficients (18, 27, 9) = 9; lowest shared powers = x²y².\nFactoring out 9x²y² leaves: 9x²y²(2x − 3y + 1).\nWarning: Never drop the "+1" when an entire term equals the HCF!',
          },
          {
            subheading: 'Strategy 2: Regrouping in Pairs (4-Term Expressions)',
            body: 'When all four terms share no single common factor overall, pair them up (2 + 2) so each pair produces the EXACT SAME binomial bracket!\nExample: Factorise ab − a − b + 1.\nPair 1 & 2, and Pair 3 & 4: a(b − 1) − 1(b − 1) = (b − 1)(a − 1).\nNotice how pulling out −1 flipped (−b + 1) cleanly into −1(b − 1)!',
          },
          {
            subheading: 'Strategy 3: Using Standard Identities (Difference of Squares & Perfect Trinomials)',
            body: '• Spot 2-term Difference of Squares A² − B² = (A + B)(A − B). (Always extract numerical HCF first! E.g., 5x² − 45 = 5(x² − 9) = 5(x + 3)(x − 3).)\n• Spot 3-term Perfect Square Trinomials: A² + 2AB + B² = (A + B)² or A² − 2AB + B² = (A − B)².\n• Hidden Difference of Squares: Sometimes 4 terms group as (A² ± 2AB + B²) − C², which collapses into [(square)]² − C² = (A ± B + C)(A ± B − C)!',
          },
          {
            subheading: 'Strategy 4: Splitting the Middle Term (Quadratic Trinomials ax² + bx + c)',
            body: 'To factorise ax² + bx + c:\n1. Compute the Target Product P = a × c, and Target Sum S = b.\n2. Find two signed integers p and q such that p × q = P AND p + q = S.\n3. Rewrite bx as px + qx, forming a 4-term expression ax² + px + qx + c.\n4. Apply Strategy 2 (Pair Regrouping) to extract matching binomial brackets!\nCheck Sign Clues: If a·c > 0, p and q share the SAME sign (both match sign of b); if a·c < 0, p and q carry OPPOSITE signs (larger magnitude takes sign of b).',
            keyPoint: 'Once factorised, multiply your two brackets mentally in 5 seconds to verify 100% accuracy before moving on!',
          },
        ],
        diagram: {
          id: 'diag-alg-static',
          title: 'Visualizing Algebraic Identity Area Model',
          caption: 'Illustrated geometry diagram linking binomial square expansions and factorisation rectangles.',
          imageUrl: '/diagrams/diagram_algebra_identities_1794912683556.jpg',
        },
        realLifeExample:
          'Architecture & Landscaping Borders: Suppose a rectangular swimming pool measures (2x + 3) m by (2x − 3) m, surrounded by a square tiled deck of side 2x m. Pool area = (2x + 3)(2x − 3) = 4x² − 9 m², which is ALWAYS exactly 9 m² smaller than the 4x² m² square—independent of whatever pool size x the architect picks!',
      },
    ],
    importantTerminology: [
      { term: 'Algebraic Expression', definition: 'Combination of constants and variables connected by arithmetic operations.', category: 'Basics' },
      { term: 'Polynomial', definition: 'An expression where every variable has strictly whole-number exponents {0, 1, 2, ...}.', category: 'Definition' },
      { term: 'Monomial / Binomial / Trinomial', definition: 'Polynomials having strictly 1, 2, or 3 unlike terms respectively.', category: 'Classification' },
      { term: 'Degree of Polynomial', definition: 'Highest sum of variable powers among all non-zero terms.', category: 'Property' },
      { term: 'Like Terms', definition: 'Terms with identical variable parts raised to identical exponents.', category: 'Basics' },
      { term: 'Algebraic Equation', definition: 'Equality satisfied ONLY by specific root values of the variable.', category: 'Contrast' },
      { term: 'Algebraic Identity', definition: 'Universal equality true for EVERY numerical value substituted into its variables.', category: 'Theorem' },
      { term: 'Factorisation', definition: 'Expressing a polynomial sum/difference as a product of irreducible factors.', category: 'Process' },
      { term: 'Difference of Two Squares', definition: 'A² − B² = (A + B)(A − B).', category: 'Identity' },
      { term: 'Splitting Middle Term', definition: 'Writing bx in ax² + bx + c as px + qx where pq = ac and p + q = b.', category: 'Method' },
    ],
    formulaSheet: [
      { title: 'Square of a Sum', expression: '(a + b)² = a² + 2ab + b²', meaning: 'Forward = expand; backward = factorise perfect trinomial.' },
      { title: 'Square of a Difference', expression: '(a − b)² = a² − 2ab + b²', meaning: 'Last term +b² is ALWAYS positive.' },
      { title: 'Difference of Squares', expression: 'a² − b² = (a + b)(a − b)', meaning: 'Prime factorisation shortcut & algebraic factoring.' },
      { title: 'Product with Common Term', expression: '(x + a)(x + b) = x² + (a + b)x + ab', meaning: 'Coefficient of x is sum (a+b); constant is product ab.' },
      { title: 'Bridge Linking Sum & Difference', expression: '(a − b)² = (a + b)² − 4ab', meaning: 'Equivalently, (a + b)² − (a − b)² = 4ab.' },
      { title: 'Sum of Two Squares Identity', expression: '(a + b)² + (a − b)² = 2(a² + b²)', meaning: 'Useful to compute a² + b² quickly.' },
      { title: 'Reciprocal Sum Square', expression: '(x + 1/x)² = x² + 1/x² + 2', meaning: 'Thus x² + 1/x² = (x + 1/x)² − 2.' },
      { title: 'Reciprocal Difference Square', expression: '(x − 1/x)² = x² + 1/x² − 2', meaning: 'Thus x² + 1/x² = (x − 1/x)² + 2.' },
    ],
    comparisonTables: [
      {
        title: 'Table 4.2: Algebraic Factorisation Decision Flowchart',
        headers: ['What You See', 'Recommended Method', 'Worked Example', 'Factored Result'],
        rows: [
          ['Common factor in ALL terms', '1. Extract HCF first', '6x³y − 9x²y²', '3x²y(2x − 3y)'],
          ['4 terms with no global HCF', '2. Pair & Regroup', 'ax + bx − ay − by', '(a + b)(x − y)'],
          ['Two squares separated by (−)', '3A. Identity A² − B²', '25m² − 49n²', '(5m + 7n)(5m − 7n)'],
          ['3 terms with 1st & last squares', '3B. Perfect Square (A ± B)²', '4x² − 12x + 9', '(2x − 3)²'],
          ['General quadratic ax² + bx + c', '4. Split Middle Term (pq = ac)', '2x² − 7x − 15', '(x − 5)(2x + 3)'],
        ],
      },
    ],
    solvedExamples: [
      {
        id: 'sol-alg-1',
        question: 'If (x + 1/x) = 5, find the values of (a) x² + 1/x²  and  (b) x⁴ + 1/x⁴.',
        steps: [
          'Step 1: Square both sides of x + 1/x = 5:',
          '(x + 1/x)² = 5²',
          'Step 2: Expand LHS using (a + b)² = a² + 2ab + b²:',
          'x² + 2(x)(1/x) + 1/x² = 25 ⟹ x² + 2 + 1/x² = 25.',
          'Step 3: Transpose +2: x² + 1/x² = 25 − 2 = 23.',
          'Step 4: Square both sides of x² + 1/x² = 23:',
          '(x² + 1/x²)² = 23² ⟹ x⁴ + 2(x²)(1/x²) + 1/x⁴ = 529.',
          'Step 5: Transpose +2: x⁴ + 1/x⁴ = 529 − 2 = 527.',
        ],
        finalAnswer: '(a) 23   (b) 527',
        keyRule: 'The cross term 2·x·(1/x) always simplifies cleanly to constant 2.',
      },
      {
        id: 'sol-alg-2',
        question: 'Factorise completely: 16x⁴ − 81y⁴',
        steps: [
          'Step 1: Express both terms as squares: (4x²)² − (9y²)².',
          'Step 2: Apply A² − B² = (A + B)(A − B):',
          '= (4x² + 9y²)(4x² − 9y²).',
          'Step 3: Inspect (4x² − 9y²)—it is AGAIN a difference of squares: (2x)² − (3y)²!',
          'Step 4: Factorise the second bracket completely: (4x² + 9y²)(2x + 3y)(2x − 3y).',
        ],
        finalAnswer: '(4x² + 9y²)(2x + 3y)(2x − 3y)',
        keyRule: 'Never stop halfway—always inspect every resulting factor to see if A² − B² applies again!',
      },
      {
        id: 'sol-alg-3',
        question: 'Factorise by splitting the middle term: x² − 5x − 24',
        steps: [
          'Step 1: Compare with ax² + bx + c: a = 1, b = −5, c = −24.',
          'Target Product = a·c = −24; Target Sum = b = −5.',
          'Step 2: Find two integers whose product is −24 and sum is −5: −8 and +3 (check: (−8)(+3) = −24; −8 + 3 = −5).',
          'Step 3: Split middle term −5x into −8x + 3x: x² − 8x + 3x − 24.',
          'Step 4: Group pairs and factor common terms: x(x − 8) + 3(x − 8).',
          'Step 5: Extract common binomial (x − 8): (x − 8)(x + 3).',
        ],
        finalAnswer: '(x − 8)(x + 3)',
        keyRule: 'Check quickly: (x − 8)(x + 3) = x² + 3x − 8x − 24 = x² − 5x − 24.',
      },
      {
        id: 'sol-alg-4',
        question: 'Divide (6x³ + 13x² + x − 2) by (2x + 1) using Polynomial Long Division.',
        steps: [
          'Step 1: Divide leading term 6x³ by 2x → first Quotient term = 3x².',
          'Step 2: Multiply (2x + 1) by 3x² = 6x³ + 3x². Subtract from dividend:',
          '(6x³ + 13x² + x − 2) − (6x³ + 3x²) = 10x² + x − 2.',
          'Step 3: Divide leading term 10x² by 2x → next Quotient term = +5x.',
          'Step 4: Multiply (2x + 1) by 5x = 10x² + 5x. Subtract:',
          '(10x² + x − 2) − (10x² + 5x) = −4x − 2.',
          'Step 5: Divide −4x by 2x → next Quotient term = −2.',
          'Step 6: Multiply (2x + 1) by (−2) = −4x − 2. Subtract → Remainder = 0.',
        ],
        finalAnswer: 'Quotient = 3x² + 5x − 2; Remainder = 0',
        keyRule: 'Arrange dividend and divisor strictly in descending powers of x before starting.',
      },
      {
        id: 'sol-alg-5',
        question: 'Subtract (3a² − 5ab + 2b² − 7) from the sum of (5a² + 2ab − b²) and (−a² + 3ab + 4b² + 9).',
        steps: [
          'Step 1: First compute the sum of the two polynomials:',
          '(5a² + 2ab − b²) + (−a² + 3ab + 4b² + 9)',
          '= (5 − 1)a² + (2 + 3)ab + (−1 + 4)b² + 9 = 4a² + 5ab + 3b² + 9.',
          'Step 2: Subtract (3a² − 5ab + 2b² − 7) from the sum obtained:',
          '= (4a² + 5ab + 3b² + 9) − (3a² − 5ab + 2b² − 7)',
          '= 4a² + 5ab + 3b² + 9 − 3a² + 5ab − 2b² + 7',
          'Step 3: Collect like terms cleanly:',
          '= (4 − 3)a² + (5 + 5)ab + (3 − 2)b² + (9 + 7) = a² + 10ab + b² + 16.',
        ],
        finalAnswer: 'a² + 10ab + b² + 16',
        keyRule: 'Reverse every sign inside the subtracted bracket carefully.',
      },
      {
        id: 'sol-alg-6',
        question: 'Evaluate using algebraic identities: (a) 197 × 203   (b) (8.6)² − (1.4)²',
        steps: [
          '(a) Express symmetrically around 200: 197 × 203 = (200 − 3)(200 + 3).',
          'Apply (a − b)(a + b) = a² − b²: 200² − 3² = 40,000 − 9 = 39,991.',
          '(b) Apply Difference of Squares a² − b² = (a + b)(a − b):',
          '(8.6)² − (1.4)² = (8.6 + 1.4)(8.6 − 1.4) = (10)(7.2) = 72.',
        ],
        finalAnswer: '(a) 39,991   (b) 72',
        keyRule: 'Spot averages like (197+203)/2 = 200 to apply (a + b)(a − b) = a² − b² instantly.',
      },
      {
        id: 'sol-alg-7',
        question: 'Factorise by extracting common terms and regrouping: 6x² + 11x − 10',
        steps: [
          'Step 1: Here a = 6, b = 11, c = −10. Product a·c = 6 × (−10) = −60; Sum b = +11.',
          'Step 2: Factors of −60 adding to +11: +15 and −4 (+15 × −4 = −60; +15 − 4 = +11).',
          'Step 3: Split middle term: 6x² + 15x − 4x − 10.',
          'Step 4: Regroup in pairs: 3x(2x + 5) − 2(2x + 5).',
          'Step 5: Pull out common factor (2x + 5): (2x + 5)(3x − 2).',
        ],
        finalAnswer: '(2x + 5)(3x − 2)',
        keyRule: 'Remember when a ≠ 1, multiply a × c first—do NOT use c alone!',
      },
      {
        id: 'sol-alg-8',
        question: 'Factorise: x² − y² − 2yz − z² + 2x + 1 (or step into 4-term square grouping: a² − b² + 2bc − c²)',
        steps: [
          'Step 1: Group the last three terms inside parentheses prefixed by a minus sign:',
          '= x² + 2x + 1 − (y² + 2yz + z²).',
          'Step 2: Recognize BOTH groups as Perfect Square Trinomials:',
          'x² + 2x + 1 = (x + 1)²   and   y² + 2yz + z² = (y + z)².',
          'Step 3: Expression becomes (x + 1)² − (y + z)² (Difference of Two Squares!).',
          'Step 4: Apply A² − B² = (A + B)(A − B):',
          '= [ (x + 1) + (y + z) ] [ (x + 1) − (y + z) ] = (x + y + z + 1)(x − y − z + 1).',
        ],
        finalAnswer: '(x + y + z + 1)(x − y − z + 1)',
        keyRule: 'Group square-bearing terms plus their cross-term 2yz cleanly inside a bracket.',
      },
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'alg-e1',
          question: 'Expand using identity: (3x − 4y)²',
          solutionSteps: ['Apply (a − b)² = a² − 2ab + b² with a = 3x, b = 4y.', '(3x)² − 2(3x)(4y) + (4y)² = 9x² − 24xy + 16y².'],
          finalAnswer: '9x² − 24xy + 16y²',
          marks: 2,
        },
        {
          id: 'alg-e2',
          question: 'State the degree of the polynomial 5x³y² − 7x⁴y³ + 2xy − 9.',
          solutionSteps: ['Term exponent sums: 3+2 = 5; 4+3 = 7; 1+1 = 2; 0.', 'Maximum exponent sum = 7.'],
          finalAnswer: 'Degree = 7',
          marks: 1,
        },
        {
          id: 'alg-e3',
          question: 'Multiply (4a²b) × (−3ab³) × (½ a³b²).',
          solutionSteps: ['Multiply numerical coefficients: 4 × (−3) × (1/2) = −6.', 'Add powers of a: 2 + 1 + 3 = 6; powers of b: 1 + 3 + 2 = 6.'],
          finalAnswer: '−6a⁶b⁶',
          marks: 2,
        },
        {
          id: 'alg-e4',
          question: 'Factorise by taking HCF: 14m³n² − 21m²n³ + 7mn.',
          solutionSteps: ['Numerical HCF(14, 21, 7) = 7; lowest shared powers = mn.', 'Divide each term by 7mn: 7mn(2m²n − 3mn² + 1).'],
          finalAnswer: '7mn(2m²n − 3mn² + 1)',
          marks: 2,
        },
      ],
      medium: [
        {
          id: 'alg-m1',
          question: 'Evaluate 997² using a suitable algebraic identity (no direct multiplication).',
          solutionSteps: ['Write 997 = 1,000 − 3.', '(1,000 − 3)² = 1,000² − 2(1,000)(3) + 3² = 1,000,000 − 6,000 + 9 = 994,009.'],
          finalAnswer: '994,009',
          marks: 2,
        },
        {
          id: 'alg-m2',
          question: 'If x + y = 12 and xy = 27, find the value of x² + y² and (x − y).',
          solutionSteps: [
            '(x + y)² = x² + y² + 2xy ⟹ 12² = x² + y² + 2(27) ⟹ 144 − 54 = x² + y² ⟹ x² + y² = 90.',
            '(x − y)² = (x + y)² − 4xy = 144 − 108 = 36 ⟹ x − y = ±6.',
          ],
          finalAnswer: 'x² + y² = 90;  x − y = ±6',
          marks: 3,
        },
        {
          id: 'alg-m3',
          question: 'Factorise: p² − 13p − 48.',
          solutionSteps: ['Product = −48, Sum = −13 → pairs: −16 and +3.', 'p² − 16p + 3p − 48 = p(p − 16) + 3(p − 16) = (p − 16)(p + 3).'],
          finalAnswer: '(p − 16)(p + 3)',
          marks: 3,
        },
        {
          id: 'alg-m4',
          question: 'Divide (x³ − 6x² + 11x − 6) by (x − 2).',
          solutionSteps: [
            'x³ ÷ x = x² → x²(x − 2) = x³ − 2x²; subtract → −4x² + 11x − 6.',
            '−4x² ÷ x = −4x → −4x(x − 2) = −4x² + 8x; subtract → 3x − 6.',
            '3x ÷ x = +3 → 3(x − 2) = 3x − 6; remainder = 0.',
          ],
          finalAnswer: 'Quotient = x² − 4x + 3, Remainder = 0',
          marks: 3,
        },
      ],
      difficult: [
        {
          id: 'alg-d1',
          question: 'Factorise completely: x² − y² − 2yz − z²',
          solutionSteps: [
            'Group last three terms with a minus sign: x² − (y² + 2yz + z²).',
            'Recognize perfect square inside bracket: x² − (y + z)².',
            'Apply A² − B² = (A + B)(A − B): [x + (y + z)][x − (y + z)] = (x + y + z)(x − y − z).',
          ],
          finalAnswer: '(x + y + z)(x − y − z)',
          marks: 4,
        },
        {
          id: 'alg-d2',
          question: 'If x² + 1/x² = 38, find the exact values of (x − 1/x) and (x + 1/x).',
          solutionSteps: [
            '(x − 1/x)² = x² + 1/x² − 2 = 38 − 2 = 36 ⟹ x − 1/x = ±6.',
            '(x + 1/x)² = x² + 1/x² + 2 = 38 + 2 = 40 ⟹ x + 1/x = ±√40 = ±2√10.',
          ],
          finalAnswer: 'x − 1/x = ±6;  x + 1/x = ±√40',
          marks: 4,
        },
        {
          id: 'alg-d3',
          question: 'Simplify and find the value when a = 2, b = −1: (3a + 2b)² − (3a − 2b)² + 4a(a − 6b).',
          solutionSteps: [
            'Use identity (A + B)² − (A − B)² = 4AB with A = 3a, B = 2b: 4(3a)(2b) = 24ab.',
            'Expand second part: 4a(a − 6b) = 4a² − 24ab.',
            'Combine: 24ab + 4a² − 24ab = 4a²!',
            'Substitute a = 2, b = −1: 4(2)² = 16 (completely independent of b!).',
          ],
          finalAnswer: 'Simplified expression = 4a²; Value = 16',
          marks: 4,
        },
        {
          id: 'alg-d4',
          question: 'Factorise completely: 3a⁵ − 48a.',
          solutionSteps: [
            'Step 1 (HCF first!): Factor out 3a → 3a(a⁴ − 16).',
            'Step 2 (Difference of squares twice): a⁴ − 16 = (a²)² − 4² = (a² + 4)(a² − 4).',
            'Step 3: Factor (a² − 4) = (a + 2)(a − 2).',
            'Complete product: 3a(a² + 4)(a + 2)(a − 2).',
          ],
          finalAnswer: '3a(a² + 4)(a + 2)(a − 2)',
          marks: 4,
        },
      ],
    },
    examPreparationTips: [
      'In EVERY factorisation problem, check for a shared HCF (number and variable) across all terms as Step 1.',
      'Check quadratic factorisations in 5 seconds by multiplying your two final brackets in the rough margin.',
      'When using Long Division, sort dividend and divisor strictly in descending powers and add 0x placeholder terms for skipped powers.',
      'Write the identity formula used (e.g., "Using (a − b)² = a² − 2ab + b²") in brackets on the right side to earn full step marks.',
      'Remember (a + b)² − (a − b)² = 4ab saves massive expansion time on difference-of-squares questions.',
    ],
    chapterSummary: [
      'A polynomial contains only whole-number exponents {0, 1, 2, ...} on its variables.',
      'Degree of a multi-variable polynomial is the maximum sum of variable powers in any term.',
      'Division Identity: Dividend = (Divisor × Quotient) + Remainder.',
      'An Identity holds true for all values of variables, unlike an equation which holds only for roots.',
      'Key Identities: (a ± b)² = a² ± 2ab + b²; a² − b² = (a + b)(a − b); (x + a)(x + b) = x² + (a + b)x + ab.',
      'Reciprocal forms: (x + 1/x)² = x² + 1/x² + 2 and (x − 1/x)² = x² + 1/x² − 2.',
      'Factorisation sequence: 1. Extract HCF → 2. Regroup pairs → 3. Identities (A² − B² or (A ± B)²) → 4. Split middle term (pq = ac, p + q = b).',
    ],
    importantQuestionsAndAnswers: [
      {
        question: 'Explain the distinction between an Algebraic Equation and an Algebraic Identity using clear examples.',
        answer:
          'An Algebraic Equation (e.g., 3x − 5 = 10) is a conditional equality true only for particular values called roots (here x = 5). An Algebraic Identity (e.g., (x + 3)² = x² + 6x + 9) holds universally true for EVERY possible numerical value substituted for x.',
        type: 'Short Answer',
      },
      {
        question: 'Why is (x² + 4/x − 7) NOT considered a polynomial?',
        answer:
          'In the middle term 4/x = 4x⁻¹, the variable x carries a negative exponent (−1). By definition, every term in a polynomial must have whole-number (non-negative integer) exponents on all variables.',
        type: 'Reasoning',
      },
      {
        question: 'Using a suitable identity, evaluate (4.9)² cleanly without direct multiplication.',
        answer:
          'Write 4.9 = 5 − 0.1. Apply (a − b)² = a² − 2ab + b²: (5 − 0.1)² = 5² − 2(5)(0.1) + (0.1)² = 25 − 1.0 + 0.01 = 24.01.',
        type: 'Short Answer',
      },
      {
        question: 'Factorise completely: 4x² − 12xy + 9y² − 16z².',
        answer:
          'Group the first three terms as a perfect square trinomial: (2x)² − 2(2x)(3y) + (3y)² = (2x − 3y)². Now rewrite: (2x − 3y)² − (4z)². Applying A² − B² = (A + B)(A − B) yields (2x − 3y + 4z)(2x − 3y − 4z).',
        type: 'Long Answer',
      },
      {
        question: 'Factorise 2x² − 7x − 15 and verify the result by dividing it by (x − 5).',
        answer:
          'Here a = 2, b = −7, c = −15, so a·c = −30. Split −7x = −10x + 3x: 2x² − 10x + 3x − 15 = 2x(x − 5) + 3(x − 5) = (x − 5)(2x + 3). Dividing (2x² − 7x − 15) by (x − 5) via Long Division yields quotient (2x + 3) and remainder 0, verifying exact factorisation.',
        type: 'Long Answer',
      },
      {
        question: 'What must be subtracted from (3x³ − 4x² + 5x − 2) so that the resulting polynomial is exactly divisible by (x − 1)?',
        answer:
          'Divide (3x³ − 4x² + 5x − 2) by (x − 1): Quotient = 3x² − x + 4, and Remainder = 2. By Dividend = Divisor × Quotient + Remainder, subtracting the Remainder 2 makes the polynomial 3x³ − 4x² + 5x − 4 completely divisible by (x − 1).',
        type: 'HOTS',
      },
      {
        question: 'If a + b = 7 and a² + b² = 29, find the product ab.',
        answer:
          'Using (a + b)² = a² + b² + 2ab: 7² = 29 + 2ab ⟹ 49 − 29 = 2ab ⟹ 20 = 2ab ⟹ ab = 10.',
        type: 'Short Answer',
      },
      {
        question: 'Find the continued product using identities: (x − 2)(x + 2)(x² + 4)(x⁴ + 16).',
        answer:
          'Step 1: (x − 2)(x + 2) = x² − 4.\nStep 2: (x² − 4)(x² + 4) = x⁴ − 16.\nStep 3: (x⁴ − 16)(x⁴ + 16) = (x⁴)² − 16² = x⁸ − 256.',
        type: 'HOTS',
      },
    ],
    practiceExercises: [
      {
        question: 'Factorise: a(a − 1) − b(b − 1)',
        hint: 'Expand first to a² − a − b² + b, then regroup as (a² − b²) − (a − b).',
        answerGuide: '(a − b)(a + b) − 1(a − b) = (a − b)(a + b − 1).',
      },
      {
        question: 'Divide (x⁴ − 16) by (x + 2) using Long Division.',
        hint: 'Insert 0x³ + 0x² + 0x placeholders so columns stay neat.',
        answerGuide: 'Quotient = x³ − 2x² + 4x − 8, Remainder = 0.',
      },
      {
        question: 'If x − 1/x = 3, compute x² + 1/x² and x⁴ + 1/x⁴.',
        hint: 'Square x − 1/x = 3 first; notice −2 moves to RHS as +2!',
        answerGuide: 'x² + 1/x² = 11;  x⁴ + 1/x⁴ = 11² − 2 = 119.',
      },
    ],
    practiceWorksheet: {
      title: 'Chapter 4 Comprehensive Practice Worksheet (30 Marks)',
      instructions: 'State the exact algebraic identity used wherever applicable.',
      sections: [
        {
          sectionTitle: 'Section A — Multiple Choice Questions (MCQs) [1 mark each]',
          items: [
            '1. Which of the following is NOT a polynomial?  (a) 5x² − 3x + 1   (b) x − 1/x   (c) 7   (d) ½ y³ + 4y',
            '2. What is the coefficient of x² in (x − 3)²?  (a) 1   (b) −6   (c) 9   (d) 3',
            '3. Factorise completely: 9x² − 25y²:  (a) (3x − 5y)²   (b) (3x + 5y)(3x − 5y)   (c) (9x + 25y)(x − y)   (d) 3(x + 5y)(x − 5y)',
            '4. Evaluate (x − 4)(x + 7) using identity:  (a) x² − 3x − 28   (b) x² + 3x − 28   (c) x² + 11x − 28   (d) x² − 28',
            '5. If x + 1/x = 6, then x² + 1/x² equals:  (a) 36   (b) 38   (c) 34   (d) 32',
          ],
        },
        {
          sectionTitle: 'Section B — Short Answer Questions [2 marks each]',
          items: [
            '6. Evaluate 102 × 98 using a suitable identity.',
            '7. Find (a − b) if a + b = 9 and ab = 14.',
            '8. Factorise completely: 3x² − 48.',
            '9. Expand and simplify: (2p + 3q)² − (2p − 3q)².',
          ],
        },
        {
          sectionTitle: 'Section C — Long Answer Questions [3–4 marks each]',
          items: [
            '10. Factorise by splitting the middle term: (a) y² + 11y + 24   (b) 6m² − 7m − 3.',
            '11. Divide (2x³ + 3x² − 11x − 6) by (2x + 1) and verify Dividend = Divisor × Quotient + Remainder.',
            '12. Factorise by regrouping: xy − x − y + 1.',
          ],
        },
        {
          sectionTitle: 'Section D — HOTS & Multi-Step Applications [4 marks each]',
          items: [
            '13. Factorise: 25a² − b² + 4bc − 4c².',
            '14. If 2x − 3y = 10 and xy = 16, find the value of 4x² + 9y².',
          ],
        },
      ],
      answerKey: [
        '1. (b) x − 1/x  (has exponent −1)',
        '2. (a) 1  (x² − 6x + 9)',
        '3. (b) (3x + 5y)(3x − 5y)',
        '4. (b) x² + 3x − 28',
        '5. (c) 34  (6² − 2 = 34)',
        '6. (100 + 2)(100 − 2) = 10,000 − 4 = 9,996',
        '7. (a − b)² = (a + b)² − 4ab = 81 − 56 = 25 ⟹ a − b = ±5',
        '8. 3(x² − 16) = 3(x + 4)(x − 4)',
        '9. 4(2p)(3q) = 24pq',
        '10. (a) (y + 3)(y + 8)   (b) (3m + 1)(2m − 3)',
        '11. Quotient = x² + x − 6, Remainder = 0',
        '12. x(y − 1) − 1(y − 1) = (y − 1)(x − 1)',
        '13. (5a)² − (b − 2c)² = (5a + b − 2c)(5a − b + 2c)',
        '14. (2x − 3y)² = 4x² + 9y² − 12xy ⟹ 100 = 4x² + 9y² − 192 ⟹ 4x² + 9y² = 292',
      ],
    },
  },
  quizQuestions: [
    { id: 'algq1', type: 'mcq', question: 'What is the value of 105² − 95²?', options: ['100', '1,000', '2,000', '200'], correctAnswer: '2,000', explanation: 'a² − b² = (105 + 95)(105 − 95) = 200 × 10 = 2,000.', difficulty: 'easy', marks: 1 },
    { id: 'algq2', type: 'mcq', question: 'If x − 1/x = 4, then x² + 1/x² equals:', options: ['14', '16', '18', '12'], correctAnswer: '18', explanation: '(x − 1/x)² = x² − 2 + 1/x² = 16 ⟹ x² + 1/x² = 16 + 2 = 18.', difficulty: 'medium', marks: 1 },
    { id: 'algq3', type: 'true_false', question: 'The expression x + 3/x is a polynomial in one variable.', correctAnswer: false, explanation: '3/x = 3x⁻¹ has a negative exponent (−1), which disqualifies it from being a polynomial.', difficulty: 'medium', marks: 1 },
    { id: 'algq4', type: 'mcq', question: 'The factorised form of x² − 9x + 20 is:', options: ['(x − 4)(x + 5)', '(x − 4)(x − 5)', '(x + 4)(x + 5)', '(x − 2)(x − 10)'], correctAnswer: '(x − 4)(x − 5)', explanation: '−4 + (−5) = −9 and (−4)(−5) = +20.', difficulty: 'easy', marks: 1 },
    { id: 'algq5', type: 'mcq', question: 'What is the degree of the polynomial 7x²y³ − 4x⁴y² + 9x?', options: ['5', '6', '4', '9'], correctAnswer: '6', explanation: 'Term sums are 2+3=5, 4+2=6, and 1; highest exponent sum is 6.', difficulty: 'easy', marks: 1 },
    { id: 'algq6', type: 'fill_blank', question: 'Simplify (3x + 5y)² − (3x − 5y)² = _______ xy. (Enter integer coefficient)', correctAnswer: '60', explanation: '(A + B)² − (A − B)² = 4AB = 4(3x)(5y) = 60xy.', difficulty: 'medium', marks: 1 },
    { id: 'algq7', type: 'mcq', question: 'What must be added to 9x² + 16y² to make it a perfect square?', options: ['12xy', '24xy', '6xy', '48xy'], correctAnswer: '24xy', explanation: '(3x + 4y)² = 9x² + 2(3x)(4y) + 16y² = 9x² + 24xy + 16y² (so +24xy or −24xy).', difficulty: 'medium', marks: 1 },
    { id: 'algq8', type: 'true_false', question: 'Every algebraic identity holds true only for a finite set of roots.', correctAnswer: false, explanation: 'False: an identity holds universally true for ALL numerical values of its variables.', difficulty: 'easy', marks: 1 },
    { id: 'algq9', type: 'hots', question: 'Factorise completely: a⁴ − 1.', options: ['(a² + 1)(a² − 1)', '(a² + 1)(a + 1)(a − 1)', '(a − 1)⁴', '(a² − 1)²'], correctAnswer: '(a² + 1)(a + 1)(a − 1)', explanation: 'Factor A² − B² twice: (a² + 1)(a² − 1) = (a² + 1)(a + 1)(a − 1).', difficulty: 'medium', marks: 2 },
    { id: 'algq10', type: 'mcq', question: 'Divide (15x⁴ − 10x³ + 5x²) by 5x²:', options: ['3x² − 2x', '3x² − 2x + 1', '3x² − 2x + 5', '3x² − 10x + 1'], correctAnswer: '3x² − 2x + 1', explanation: '5x² ÷ 5x² equals 1 (not 0!).', difficulty: 'easy', marks: 1 },
    { id: 'algq11', type: 'fill_blank', question: 'Evaluate 99 × 101 using identity: _______', correctAnswer: '9999', explanation: '(100 − 1)(100 + 1) = 100² − 1² = 10,000 − 1 = 9,999.', difficulty: 'easy', marks: 1 },
    { id: 'algq12', type: 'hots', question: 'If x² − kx + 25 is a perfect square trinomial with k > 0, find k:', options: ['5', '10', '25', '50'], correctAnswer: '10', explanation: 'x² − 2(x)(5) + 5² = x² − 10x + 25, so k = 10.', difficulty: 'hard', marks: 2 },
  ],
  flashcards: [
    { id: 'fc-alg1', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'Difference of Two Squares Identity?', back: 'a² − b² = (a + b)(a − b)', category: 'Formula', importance: 'Essential' },
    { id: 'fc-alg2', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'Relate (a + b)² and (a − b)² directly.', back: '(a − b)² = (a + b)² − 4ab', category: 'Formula', importance: 'Essential' },
    { id: 'fc-alg3', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'Condition for an expression to be a Polynomial?', back: 'All variable exponents must be whole numbers {0, 1, 2, ...} — no x in denominators or fractional powers.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-alg4', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'How do you find x² + 1/x² from (x + 1/x) = k?', back: 'x² + 1/x² = k² − 2 (from squaring both sides!).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-alg5', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'How do you find x² + 1/x² from (x − 1/x) = k?', back: 'x² + 1/x² = k² + 2.', category: 'Formula', importance: 'Essential' },
    { id: 'fc-alg6', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'Four-step Factorisation Priority Checklist?', back: '1. Common HCF → 2. Regroup Pairs → 3. Identities (A² − B² / (A±B)²) → 4. Split Middle Term.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-alg7', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'In splitting middle term of ax² + bx + c, what must p and q satisfy?', back: 'p × q = a × c  AND  p + q = b.', category: 'Formula', importance: 'Essential' },
    { id: 'fc-alg8', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'Identity IV: Expand (x + a)(x + b)?', back: 'x² + (a + b)x + ab', category: 'Formula', importance: 'Standard' },
    { id: 'fc-alg9', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'Equation vs. Identity difference?', back: 'Equation holds only for specific root(s); Identity holds universally for ALL values of variables.', category: 'Definition', importance: 'Standard' },
    { id: 'fc-alg10', subjectId: 'mathematics', chapterId: 'math-algebra-factorisation', chapterTitle: 'Algebra & Factorisation', front: 'Polynomial Long Division check relation?', back: 'Dividend = (Divisor × Quotient) + Remainder (with deg(R) < deg(Divisor)).', category: 'Formula', importance: 'Standard' },
  ],
};
