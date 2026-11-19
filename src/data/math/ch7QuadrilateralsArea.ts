import { Chapter } from '../../types';

export const CH7_QUADRILATERALS_AREA: Chapter = {
  id: 'math-quadrilaterals-area',
  subjectId: 'mathematics',
  chapterNumber: 7,
  title: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
  subtitle: 'Polygon angle-sum laws, properties of special quadrilaterals, areas of trapeziums & rhombuses, and rectilinear figure decomposition',
  term: 'Annual',
  estimatedMinutes: 90,
  notes: {
    introduction: `Geometry becomes truly practical when we step beyond three-sided triangles into the world of four-sided quadrilaterals, multi-sided polygons, and real-world land measurement. Whether an architect designs a rectangular room, an engineer builds a rigid truss bridge out of hexagons and triangles, or a surveyor calculates the area of an irregularly shaped agricultural plot in hectares, every calculation depends on two pillars: understanding the angle and diagonal properties of polygons and knowing how to compute the area of rectilinear figures accurately.

In this chapter—aligned with your prescribed ICSE Class 8 syllabus (*Revised New Mathematics Today – Class 8*)—we explore two closely connected modules. First, we investigate **Polygons and Quadrilaterals**: what distinguishes convex from concave polygons, why the interior angles of an $n$-sided polygon always add up to $(n - 2) \\times 180^\\circ$, why every convex polygon's exterior angles invariably sum to $360^\\circ$, and how the special quadrilaterals (trapezium, kite, parallelogram, rectangle, rhombus, and square) relate to one another through side, angle, and diagonal symmetry.

Second, we master **Area of Rectilinear Figures**: deriving the formulas for the area of a trapezium ($\\frac{1}{2}(a + b)h$), a rhombus ($\\frac{1}{2} d_1 d_2$), and a general quadrilateral ($\\frac{1}{2} d (h_1 + h_2)$), and then learning how to split irregular pentagons, hexagons, octagons, and cross-paths into manageable triangles, rectangles, and trapeziums. Every proof, table, diagram, and step-by-step example below is designed to build both geometric intuition and precision in board-style examinations.`,
    learningObjectives: [
      'Classify polygons by number of sides (3 to 10+), distinguish between convex and concave polygons, and identify regular versus irregular polygons.',
      'Derive and apply the interior angle sum formula (n − 2) × 180°, the exterior angle sum property (360°), and the diagonal count formula n(n − 3)/2.',
      'Compute each interior and exterior angle of any regular polygon, and determine the number of sides when either angle is given.',
      'Compare and apply the exact side, angle, and diagonal properties of parallelograms, rectangles, rhombuses, squares, trapeziums, and kites.',
      'Derive and use the area formulas for a trapezium ½(a + b)h, a rhombus ½ d₁ d₂, and a general quadrilateral ½ d(h₁ + h₂).',
      'Calculate areas of irregular rectilinear polygons, regular hexagons/octagons, and bordered paths using triangulation and surveyor offset decomposition.'
    ],
    topics: [
      {
        id: 'math-quad-t1',
        title: '1. Polygons: Classification, Angle Sums & Diagonals',
        content: `A **polygon** is a simple closed plane figure formed entirely by three or more straight line segments meeting only at their endpoints. The word comes from Greek roots: *poly* (many) and *gonia* (angles). Circles and semi-circles are closed curves, but they are **not** polygons because they contain curved boundaries rather than straight line segments.

Understanding polygons starts with three fundamental questions: (1) Do all corners point outward (**convex**) or does at least one point inward (**concave**)? (2) Are all sides and angles equal (**regular**)? (3) How do the angles and diagonals scale mathematically as we increase the number of sides $n$?`,
        subtopics: [
          {
            subheading: '1.1 Naming Polygons & Convex vs Concave Shapes',
            body: `Polygons are named according to their number of sides $n$: **Triangle** ($n = 3$), **Quadrilateral** ($n = 4$), **Pentagon** ($n = 5$), **Hexagon** ($n = 6$), **Heptagon** ($n = 7$), **Octagon** ($n = 8$), **Nonagon** ($n = 9$), and **Decagon** ($n = 10$). A line segment joining two non-adjacent vertices is called a **diagonal**.

In a **convex polygon**, every interior angle is strictly less than $180^\\circ$, and every diagonal lies completely inside the polygon. Equivalently, if you extend any side into a straight line, the entire polygon remains on one side of that line. In a **concave polygon**, at least one interior angle is a **reflex angle** (greater than $180^\\circ$ and less than $360^\\circ$), causing the shape to "cave inward", and at least one diagonal passes outside the polygon. Unless stated otherwise, all ICSE polygon formulas for regular shapes assume **convex polygons**.`,
            keyPoint: 'Test for convexity: No interior angle exceeds 180°, and no diagonal ever steps outside the boundary of the polygon.'
          },
          {
            subheading: '1.2 Interior Angle Sum Theorem: (n − 2) × 180°',
            body: `Take any convex $n$-sided polygon and choose a single vertex. Draw all possible diagonals from that single vertex to the remaining non-adjacent vertices. Because you cannot draw a diagonal to the vertex itself or its two immediate neighbours, you can draw exactly $(n - 3)$ diagonals from that vertex. These $(n - 3)$ diagonals slice the polygon neatly into $(n - 2)$ non-overlapping triangles:
- Triangle ($n = 3$): $3 - 2 = 1$ triangle $\\Rightarrow 1 \\times 180^\\circ = 180^\\circ$.
- Quadrilateral ($n = 4$): $4 - 2 = 2$ triangles $\\Rightarrow 2 \\times 180^\\circ = 360^\\circ$.
- Pentagon ($n = 5$): $5 - 2 = 3$ triangles $\\Rightarrow 3 \\times 180^\\circ = 540^\\circ$.
- Hexagon ($n = 6$): $6 - 2 = 4$ triangles $\\Rightarrow 4 \\times 180^\\circ = 720^\\circ$.

Therefore, the **sum of all interior angles** of an $n$-sided polygon is $(n - 2) \\times 180^\\circ$, often written in ICSE textbooks in right-angle form as $(2n - 4) \\times 90^\\circ$ (since $180^\\circ = 2 \\times 90^\\circ$).`,
            keyPoint: 'Notice that (n − 2) × 180° = (2n − 4) × 90°. Both expressions are algebraically identical; know both for ICSE short-answer questions!'
          },
          {
            subheading: '1.3 Exterior Angle Sum Property (Always 360°)',
            body: `Extend each side of a convex polygon in the same cyclic order (all clockwise or all anticlockwise). At each vertex, the **interior angle ($I$)** and **exterior angle ($E$)** form a linear pair, so $I + E = 180^\\circ$. Summing across all $n$ vertices:
$$\\sum I + \\sum E = n \\times 180^\\circ$$
Substitute $\\sum I = (n - 2) \\times 180^\\circ = n \\times 180^\\circ - 360^\\circ$:
$$(n \\times 180^\\circ - 360^\\circ) + \\sum E = n \\times 180^\\circ \\implies \\sum E = 360^\\circ$$
Remarkably, whether a convex polygon has 3 sides, 8 sides, or 100 sides, **the sum of its exterior angles taken in order is ALWAYS $360^\\circ$**! Imagine walking completely around the perimeter of a polygonal park: by the time you return to your starting side facing the same direction, you have turned through one full revolution of $360^\\circ$.`,
            keyPoint: 'Exterior angle sum = 360° is independent of n. It is the fastest tool for finding the number of sides of a regular polygon!'
          },
          {
            subheading: '1.4 Regular Polygons & Number of Diagonals',
            body: `A **regular polygon** is both **equilateral** (all sides equal) and **equiangular** (all interior angles equal, and therefore all exterior angles equal). For an equilateral triangle ($n=3$), each interior angle is $60^\\circ$; for a square ($n=4$), $90^\\circ$. Note that a rhombus is equilateral without necessarily being equiangular, and a rectangle is equiangular without necessarily being equilateral—so neither is a regular polygon unless it is a square!

For any $n$-sided regular polygon:
- Each exterior angle $E = \\dfrac{360^\\circ}{n}$, so $n = \\dfrac{360^\\circ}{E}$.
- Each interior angle $I = \\dfrac{(n - 2) \\times 180^\\circ}{n} = 180^\\circ - E$.

**Counting Diagonals**: From each of the $n$ vertices, you can connect to $(n - 3)$ non-adjacent vertices. Multiplying gives $n(n - 3)$ directed connections, which counts every diagonal twice (once from $A$ to $C$, once from $C$ to $A$). Dividing by 2 gives the exact number of diagonals:
$$\\text{Number of diagonals} = \\frac{n(n - 3)}{2}$$`,
            keyPoint: 'When given an interior angle I of a regular polygon (e.g., 150°), subtract from 180° first to get E = 30°, then compute n = 360°/30° = 12 immediately.'
          }
        ],
        definitions: [
          { term: 'Convex Polygon', definition: 'A polygon in which every interior angle is less than 180° and all diagonals lie strictly inside the figure.' },
          { term: 'Concave Polygon', definition: 'A polygon having at least one reflex interior angle (> 180°) and at least one diagonal lying partly or wholly outside.' },
          { term: 'Regular Polygon', definition: 'A polygon whose all sides are equal in length and all interior angles are equal in measure.' },
          { term: 'Diagonal', definition: 'A line segment connecting any two non-adjacent vertices of a polygon.' }
        ],
        formulas: [
          { formula: 'Sum of Interior Angles = (n − 2) × 180° = (2n − 4) × 90°', explanation: 'Applies to any simple n-sided polygon (convex or concave).' },
          { formula: 'Sum of Exterior Angles = 360°', explanation: 'Applies to every convex polygon taken in cyclic order.' },
          { formula: 'Each Exterior Angle (Regular) = 360° / n', explanation: 'Rearranges to n = 360° / Exterior Angle.' },
          { formula: 'Each Interior Angle (Regular) = [(n − 2) × 180°] / n = 180° − (360° / n)', explanation: 'Equivalently, I + E = 180° at every vertex.' },
          { formula: 'Number of Diagonals = n(n − 3) / 2', explanation: 'Works for any n-sided polygon (for n = 3, gives 0 diagonals).' }
        ],
        comparisonTable: {
          caption: 'Quick Reference: Regular Polygons from Triangle to Decagon',
          headers: ['Polygon (n)', 'Diagonals n(n−3)/2', 'Interior Angle Sum', 'Each Interior Angle', 'Each Exterior Angle'],
          rows: [
            ['Equilateral Triangle (3)', '0', '180°', '60°', '120°'],
            ['Square (4)', '2', '360°', '90°', '90°'],
            ['Regular Pentagon (5)', '5', '540°', '108°', '72°'],
            ['Regular Hexagon (6)', '9', '720°', '120°', '60°'],
            ['Regular Octagon (8)', '20', '1080°', '135°', '45°'],
            ['Regular Nonagon (9)', '27', '1260°', '140°', '40°'],
            ['Regular Decagon (10)', '35', '1440°', '144°', '36°']
          ]
        },
        diagram: {
          id: 'diag-polygon-angles',
          title: 'Polygon Triangulation & Exterior Angle Revolution',
          caption: 'From one vertex of a pentagon, (5 − 3) = 2 diagonals form (5 − 2) = 3 triangles whose interior angles total 540°, while exterior angles extended in one direction always sum to 360°.',
          svgFigure: 'polygon_angles_sum'
        },
        realLifeExample: 'Why do honeybees build honeycombs using regular hexagons instead of regular pentagons or octagons? At a corner where tiles meet flat without gaps, the interior angles meeting at a point must divide 360° evenly. A regular hexagon has an interior angle of 120°, and 360° ÷ 120° = 3 hexagons fit snugly together! A regular pentagon (108°) leaves a 36° gap (3 × 108° = 324°), so pentagons cannot tile a flat floor by themselves.',
        commonMistakes: [
          {
            mistake: 'Confusing the interior angle with the exterior angle when calculating n = 360° / angle.',
            correction: 'Only the EXTERIOR angle divides 360° to give n. If given an interior angle of 144°, first find E = 180° − 144° = 36°, then n = 360° / 36° = 10.'
          },
          {
            mistake: 'Writing the diagonal formula as n(n − 3) without dividing by 2.',
            correction: 'Always divide by 2! For a quadrilateral (n = 4), 4(4 − 3) = 4 counts AC and CA separately; dividing by 2 gives the correct 2 diagonals.'
          }
        ]
      },
      {
        id: 'math-quad-t2',
        title: '2. Quadrilaterals & Properties of Special Quadrilaterals',
        content: `A **quadrilateral** is a four-sided polygon ($n = 4$) with 4 vertices, 4 sides, 4 angles, and 2 diagonals. By the polygon angle sum formula, the sum of its interior angles is $(4 - 2) \\times 180^\\circ = 360^\\circ$, and the sum of its exterior angles is also $360^\\circ$.

Notice how special quadrilaterals form a structured family hierarchy based on **parallel sides** and **equal lengths/angles**. A square sits at the pinnacle because it satisfies every property of a rectangle, a rhombus, and a parallelogram simultaneously!`,
        subtopics: [
          {
            subheading: '2.1 Trapezium and Isosceles Trapezium',
            body: `A **trapezium** is a quadrilateral with **at least one pair of opposite sides parallel** (in ICSE/Indian convention, usually defined as exactly one pair of parallel sides, called the *bases*). Because two sides are parallel, the interior angles along each non-parallel leg are **co-interior (allied) angles** and are supplementary:
$$\\text{If } AB \\parallel DC, \\text{ then } \\angle A + \\angle D = 180^\\circ \\text{ and } \\angle B + \\angle C = 180^\\circ$$
An **isosceles trapezium** is a trapezium whose two non-parallel sides are equal in length ($AD = BC$). In an isosceles trapezium: (i) the base angles are equal ($\\angle A = \\angle B$ and $\\angle C = \\angle D$), and (ii) the diagonals are equal in length ($AC = BD$).`,
            keyPoint: 'Co-interior angles between the parallel sides always add up to 180°—but angles on the same parallel base need NOT be equal unless the trapezium is isosceles.'
          },
          {
            subheading: '2.2 Kite: Symmetry Without Parallel Sides',
            body: `A **kite** is a quadrilateral with **two distinct pairs of equal adjacent sides** (for example, $AB = AD$ and $CB = CD$, with $AB \\neq CB$). Notice that unlike a parallelogram, a kite's opposite sides need not be parallel or equal.
Key geometric properties of a kite $ABCD$ (with main axis of symmetry $AC$):
1. The **diagonals intersect at right angles** ($AC \\perp BD$).
2. The main diagonal ($AC$, connecting the vertices where equal sides meet) **bisects the other diagonal** ($BD$) at $90^\\circ$ and **bisects the vertex angles** $\\angle A$ and $\\angle C$.
3. Exactly **one pair of opposite angles is equal** ($\\angle B = \\angle D$).`,
            keyPoint: 'Only the diagonal joining the vertices between unequal sides is bisected in a kite; both diagonals do NOT bisect each other.'
          },
          {
            subheading: '2.3 Parallelogram: The Foundation of Parallel Symmetry',
            body: `A **parallelogram** is a quadrilateral in which **both pairs of opposite sides are parallel** ($AB \\parallel DC$ and $AD \\parallel BC$). Every parallelogram exhibits four classic ICSE properties:
1. **Opposite sides are equal**: $AB = DC$ and $AD = BC$.
2. **Opposite angles are equal**: $\\angle A = \\angle C$ and $\\angle B = \\angle D$.
3. **Adjacent angles are supplementary**: $\\angle A + \\angle B = 180^\\circ$, $\\angle B + \\angle C = 180^\\circ$, etc.
4. **Diagonals bisect each other**: If diagonals $AC$ and $BD$ intersect at $O$, then $OA = OC$ and $OB = OD$. Each diagonal divides the parallelogram into two congruent triangles of equal area.`,
            keyPoint: 'Remember: A general parallelogram’s diagonals bisect each other, but they are NOT equal in length and do NOT meet at 90°.'
          },
          {
            subheading: '2.4 Rectangle, Rhombus, and Square (Special Parallelograms)',
            body: `Adding one extra constraint to a parallelogram produces the three "royal" quadrilaterals:
- **Rectangle** = Parallelogram with one angle $90^\\circ$. Result: **All four angles are $90^\\circ$**, and **diagonals are equal in length and bisect each other** ($AC = BD$, $OA = OB = OC = OD$).
- **Rhombus** = Parallelogram with all four sides equal ($AB = BC = CD = DA$). Result: **Diagonals bisect each other at right angles ($90^\\circ$)** and **bisect the vertex angles** through which they pass. Note that a rhombus's diagonals are generally unequal!
- **Square** = Both a Rectangle and a Rhombus. Result: **All four sides equal**, **all four angles $90^\\circ$**, and **diagonals are equal, bisect each other at $90^\\circ$, and form $45^\\circ$ angles with the sides**.`,
            keyPoint: 'Hierarchy rule: Every square is a rectangle and a rhombus; every rectangle and rhombus is a parallelogram; every parallelogram (under inclusive definitions) has opposite sides parallel.'
          }
        ],
        definitions: [
          { term: 'Parallelogram', definition: 'A quadrilateral with both pairs of opposite sides parallel and equal.' },
          { term: 'Rhombus', definition: 'A parallelogram with all four sides equal in length and diagonals bisecting each other at 90°.' },
          { term: 'Rectangle', definition: 'A parallelogram with four right angles (90°) and equal diagonals that bisect each other.' },
          { term: 'Trapezium', definition: 'A quadrilateral having one pair of opposite sides parallel.' },
          { term: 'Kite', definition: 'A quadrilateral with two distinct pairs of equal adjacent sides and perpendicular diagonals.' }
        ],
        formulas: [
          { formula: '∠A + ∠B + ∠C + ∠D = 360°', explanation: 'Interior angle sum for any quadrilateral.' },
          { formula: 'Parallelogram Adjacent Angles: ∠A + ∠B = 180°', explanation: 'Because AD ∥ BC makes ∠A and ∠B co-interior angles.' },
          { formula: 'Square Diagonal: d = a√2', explanation: 'By Pythagoras theorem on a right triangle with legs a and a.' },
          { formula: 'Rhombus Side-Diagonal Relation: a² = (d₁/2)² + (d₂/2)²', explanation: 'Because diagonals bisect each other at 90°, forming four congruent right triangles.' }
        ],
        comparisonTable: {
          caption: 'Complete Property Matrix of Special Quadrilaterals',
          headers: ['Property', 'Parallelogram', 'Rectangle', 'Rhombus', 'Square', 'Isosceles Trapezium', 'Kite'],
          rows: [
            ['Opposite sides parallel', 'Both pairs', 'Both pairs', 'Both pairs', 'Both pairs', 'One pair', 'No'],
            ['Equal sides', 'Opposite equal', 'Opposite equal', 'All 4 equal', 'All 4 equal', 'Non-parallel legs equal', '2 pairs adjacent equal'],
            ['Angles', 'Opposite equal', 'All 90°', 'Opposite equal', 'All 90°', 'Base angles equal', '1 opposite pair equal'],
            ['Diagonals equal?', 'No', 'Yes', 'No', 'Yes', 'Yes', 'No'],
            ['Diagonals bisect each other?', 'Yes', 'Yes', 'Yes', 'Yes', 'No', 'Only 1 is bisected'],
            ['Diagonals perpendicular (90°)?', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes']
          ]
        },
        diagram: {
          id: 'diag-quadrilaterals-matrix',
          title: 'Visual Properties of Special Quadrilaterals',
          caption: 'Comparing side parallelisms, right angles, and diagonal intersections across the Parallelogram, Rectangle, Rhombus, Square, and Trapezium.',
          svgFigure: 'quadrilaterals_properties'
        },
        realLifeExample: 'Scissor lifts and foldable ironing boards rely on the **parallelogram linkage**: because opposite sides remain equal in length as the hinges rotate, the top platform always stays parallel to the ground regardless of height! Meanwhile, rigid rectangular window frames require diagonal corner braces or right-angled glass panes so they do not shear sideways into a non-rectangular parallelogram.',
        commonMistakes: [
          {
            mistake: 'Assuming a rhombus has equal diagonals or 90° corner angles.',
            correction: 'A rhombus has 90° angles AT THE CENTRE where its diagonals intersect—NOT at the vertices (unless it is a square). Its diagonals are unequal.'
          },
          {
            mistake: 'Claiming every quadrilateral whose diagonals bisect at 90° is a square.',
            correction: 'Diagonals bisecting at 90° only guarantees a RHOMBUS. For it to be a square, the diagonals must ALSO be equal in length.'
          }
        ]
      },
      {
        id: 'math-quad-t3',
        title: '3. Area of Trapezium, Rhombus and General Quadrilateral',
        content: `Once we understand how diagonals and heights slice quadrilaterals into triangles, deriving exact area formulas becomes effortless. Rather than memorising detached equations, observe how **every quadrilateral area formula comes directly from $\\text{Area of Triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$**!`,
        subtopics: [
          {
            subheading: '3.1 Derivation & Formula for Area of a Trapezium',
            body: `Consider a trapezium $ABCD$ where parallel sides have lengths $AB = a$ and $DC = b$, and the perpendicular distance (height or altitude) between them is $h$. Draw diagonal $AC$ to split the trapezium into two triangles: $\\triangle ABC$ and $\\triangle ADC$.
- Both triangles share the exact same perpendicular height $h$ between the two parallel lines $AB$ and $DC$.
- $\\text{Area}(\\triangle ABC) = \\frac{1}{2} \\times a \\times h$
- $\\text{Area}(\\triangle ADC) = \\frac{1}{2} \\times b \\times h$
Adding the two areas together:
$$\\text{Area of Trapezium} = \\frac{1}{2}ah + \\frac{1}{2}bh = \\frac{1}{2}(a + b) \\times h$$
In words: **Area of a trapezium = $\\frac{1}{2} \\times (\\text{sum of parallel sides}) \\times (\\text{distance between them})$**.`,
            keyPoint: 'Only the two PARALLEL sides are added inside the bracket (a + b). The slanted non-parallel sides are NEVER plugged into the formula as height.'
          },
          {
            subheading: '3.2 Reverse Problems: Finding Height or Missing Parallel Side',
            body: `In ICSE exams, you are frequently given the area $A$ of a trapezium and asked to work backwards:
- **Finding height $h$**: $h = \\dfrac{2A}{a + b}$.
- **Finding one parallel side $b$**: $a + b = \\dfrac{2A}{h} \\implies b = \\dfrac{2A}{h} - a$.
- **Ratio/comparison of parallel sides**: If one side is $k$ units longer than the other (say $x$ and $x + k$) or in a ratio $m : n$ (say $mx$ and $nx$), substitute these algebraic expressions directly into $\\frac{1}{2}(a + b)h = A$ and solve the resulting linear equation.`,
            keyPoint: 'Always multiply Area by 2 FIRST when rearranging A = ½(a + b)h. This eliminates fractions immediately and prevents sign/division errors.'
          },
          {
            subheading: '3.3 Two Ways to Find the Area of a Rhombus',
            body: `Because a rhombus is simultaneously a parallelogram and a figure with perpendicular diagonals, it has **two** essential area formulas:
1. **Using Base and Altitude**: $\\text{Area} = \\text{side} \\times \\text{altitude} = b \\times h$ (since a rhombus is a parallelogram).
2. **Using Both Diagonals ($d_1$ and $d_2$)**: Let diagonals $AC = d_1$ and $BD = d_2$ meet at right angles at $O$. Then $OB = OD = d_2/2$. Splitting along $AC$:
$$\\text{Area} = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ADC) = \\frac{1}{2} d_1 \\left(\\frac{d_2}{2}\\right) + \\frac{1}{2} d_1 \\left(\\frac{d_2}{2}\\right) = \\frac{1}{2} \\times d_1 \\times d_2$$
**Pythagoras Bridge**: If a question gives the **perimeter** (hence side $a$) and **one diagonal $d_1$**, use $(d_2/2)^2 = a^2 - (d_1/2)^2$ to recover $d_2$, then apply $\\frac{1}{2} d_1 d_2$.`,
            keyPoint: 'If a question gives side and altitude, use base × altitude; if it gives diagonals, use ½ d₁ d₂. Knowing both lets you find altitude when given diagonals!'
          },
          {
            subheading: '3.4 Area of a General Quadrilateral (Diagonal + Offsets)',
            body: `Suppose $ABCD$ is a completely irregular quadrilateral with no parallel sides and no equal angles. Measure one diagonal $AC = d$, and drop perpendicular offsets from the remaining two opposite vertices $B$ and $D$ onto $AC$, having lengths $h_1$ and $h_2$:
$$\\text{Area}(ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ADC) = \\frac{1}{2} d h_1 + \\frac{1}{2} d h_2 = \\frac{1}{2} \\times d \\times (h_1 + h_2)$$
Notice that this exact same formula also holds for a **kite** when the main diagonal $d_1$ is split into two triangles of heights $d_2/2$ each, giving $\\text{Area of Kite} = \\frac{1}{2} d_1 d_2$.`,
            keyPoint: 'In ½ d (h₁ + h₂), h₁ and h₂ MUST be perpendiculars (90°) dropped from the two opposite vertices onto the same diagonal d.'
          }
        ],
        definitions: [
          { term: 'Bases of a Trapezium', definition: 'The pair of parallel opposite sides of a trapezium.' },
          { term: 'Altitude / Height', definition: 'The shortest perpendicular distance between a base and its opposite parallel side or vertex.' },
          { term: 'Offset (in Surveying)', definition: 'A perpendicular distance measured from a baseline or diagonal to a corner vertex of a polygonal plot.' }
        ],
        formulas: [
          { formula: 'Area of Trapezium = ½ × (a + b) × h', explanation: 'Where a, b are parallel sides and h is the perpendicular distance between them.', unit: 'sq. units' },
          { formula: 'Area of Rhombus = ½ × d₁ × d₂', explanation: 'Half the product of its two perpendicular diagonals (also valid for a kite).', unit: 'sq. units' },
          { formula: 'Area of Parallelogram / Rhombus = base × height', explanation: 'Product of any side and the perpendicular altitude dropped to that side.', unit: 'sq. units' },
          { formula: 'Area of General Quadrilateral = ½ × d × (h₁ + h₂)', explanation: 'Where d is one diagonal and h₁, h₂ are perpendiculars from opposite vertices onto d.', unit: 'sq. units' }
        ],
        comparisonTable: {
          caption: 'Master Quadrilateral Area Formula Comparison',
          headers: ['Quadrilateral', 'Primary Area Formula', 'Given Inputs Required', 'Alternate Formula'],
          rows: [
            ['Square', 'a²', 'Side length a', '½ d² (using diagonal d)'],
            ['Rectangle', 'l × b', 'Length l and breadth b', 'l × √(d² − l²)'],
            ['Parallelogram', 'b × h', 'Base b and perpendicular height h', '2 × Area of triangle on diagonal'],
            ['Rhombus', '½ × d₁ × d₂', 'Both diagonals d₁, d₂', 'side × altitude'],
            ['Trapezium', '½ × (a + b) × h', 'Parallel sides a, b and height h', 'Sum of two triangles / rectangle + triangle'],
            ['General Quadrilateral', '½ × d × (h₁ + h₂)', 'One diagonal d and two offsets h₁, h₂', 'Sum of two triangles along a diagonal']
          ]
        },
        diagram: {
          id: 'diag-trapezium-derivation',
          title: 'Visual Proof of Trapezium Area Formula',
          caption: 'Splitting trapezium ABCD along diagonal AC creates two triangles of base a and b sharing the same perpendicular height h: ½ah + ½bh = ½(a + b)h.',
          svgFigure: 'trapezium_area_derivation'
        },
        realLifeExample: 'Irrigation engineers design concrete drainage canals with trapezoidal cross-sections (wider at the top $b = 4\\text{ m}$ than at the bottom $a = 2\\text{ m}$, depth $h = 1.5\\text{ m}$) so the earth banks do not collapse. The cross-sectional flow area is immediately $\\frac{1}{2}(4 + 2) \\times 1.5 = 4.5\\text{ m}^2$.',
        commonMistakes: [
          {
            mistake: 'Forgetting the ½ factor in Area of Trapezium or Area of Rhombus.',
            correction: 'Think of a trapezium as HALF of a parallelogram of base (a + b) and height h, and a rhombus as HALF of the bounding rectangle d₁ × d₂—never drop the ½!'
          },
          {
            mistake: 'Using a slanted non-parallel side as the height h of a trapezium.',
            correction: 'Height h must meet the bases at 90°. If only slanted leg c is given, use Pythagoras with the horizontal projection to find h first.'
          }
        ]
      },
      {
        id: 'math-quad-t4',
        title: '4. Area of Pentagons, Hexagons and Irregular Rectilinear Figures',
        content: `Real-world plots of land, building blueprints, and machine parts rarely appear as neat rectangles or single trapeziums. Instead, they are **rectilinear figures** (shapes bounded by straight segments), **irregular pentagons/hexagons**, or **regular polygons with 5, 6, or 8 sides**. There is no single magic formula for an irregular 5- or 6-sided plot—instead, we use the systematic power of **Decomposition (Dissection)**.`,
        subtopics: [
          {
            subheading: '4.1 Decomposition Method & Surveyor Field-Book Calculations',
            body: `To find the area of an irregular polygon $ABCDE$ or $ABCDEF$:
1. **Triangulation**: Draw diagonals from one vertex to divide an $n$-sided polygon into $(n - 2)$ triangles and add their individual areas.
2. **Baseline + Perpendicular Offsets (Surveyor's Method)**: Land surveyors measure one long main diagonal (say $AD$) from $A$ to $D$ and drop perpendicular offsets from the remaining vertices ($B, C$ on one side; $E, F$ on the other side) onto $AD$. Every sub-region automatically becomes either a **right-angled triangle** ($\\frac{1}{2} \\times \\text{base} \\times \\text{offset}$) or a **right trapezium** ($\\frac{1}{2} \\times (\\text{offset}_1 + \\text{offset}_2) \\times \\text{segment between feet}$)!
Be extremely careful to subtract cumulative distances from $A$: if $AP = 20\\text{ m}$ and $AQ = 55\\text{ m}$, the trapezium height $PQ$ is $55 - 20 = 35\\text{ m}$, **not** $55\\text{ m}$!`,
            keyPoint: 'Always draw a rough labelled sketch of the baseline AD from A to D and mark cumulative distances sequentially so you subtract consecutive positions correctly for trapezium heights.'
          },
          {
            subheading: '4.2 Regular Hexagons and Regular Octagons',
            body: `Two regular polygons appear frequently in ICSE Class 8 examinations:
- **Regular Hexagon (side $a$)**: Joining all 6 vertices to its centre divides a regular hexagon into **6 congruent equilateral triangles**, each of side $a$. Since the area of one equilateral triangle is $\\dfrac{\\sqrt{3}}{4} a^2$:
$$\\text{Area of Regular Hexagon} = 6 \\times \\frac{\\sqrt{3}}{4} a^2 = \\frac{3\\sqrt{3}}{2} a^2$$
- **Regular Octagon**: Slice across the top two corners and bottom two corners horizontally. The octagon decomposes cleanly into **one top trapezium + one middle rectangle + one congruent bottom trapezium**. Measure the two trapezium areas using $\\frac{1}{2}(a + b)h$ and add the middle rectangle $l \\times b$.`,
            keyPoint: 'For a regular hexagon, remember the 6-equilateral-triangle split: knowing √3 ≈ 1.732 lets you compute the decimal area quickly if required.'
          },
          {
            subheading: '4.3 Cross-Paths, Borders & Subtraction Strategy',
            body: `Sometimes adding parts is slower than **subtracting cutouts**:
- **L-shape or T-shape**: Either split into two rectangles (careful not to double-count the corner square!) OR enclose it in a bounding rectangle and subtract the missing corner rectangle.
- **Framed Garden / Path Outside or Inside a Rectangle**: Outer area minus inner area. If a rectangular park $L \\times B$ has a uniform path of width $w$ running *around the outside*, outer dimensions become $(L + 2w)$ and $(B + 2w)$. If the path runs *inside*, inner dimensions become $(L - 2w)$ and $(B - 2w)$.
- **Two Perpendicular Crossroads**: Two strips of width $w$ parallel to $L$ and $B$ cross at the centre. Their combined area is $(L \\times w) + (B \\times w) - w^2$ (subtracting the central $w \\times w$ overlap once so it is not counted twice!).`,
            keyPoint: 'Why "2w" on outside/inside paths? Because the path borders BOTH ends of length (left + right) and BOTH ends of breadth (top + bottom)!'
          },
          {
            subheading: '4.4 Unit Conversions in Area & Land Measurement',
            body: `Always verify units **before** multiplying dimensions! A length in metres multiplied by a width in centimetres produces a meaningless hybrid number. Key ICSE conversions:
- $1\\text{ m}^2 = 100\\text{ cm} \\times 100\\text{ cm} = 10,000\\text{ cm}^2$
- $1\\text{ are} = 10\\text{ m} \\times 10\\text{ m} = 100\\text{ m}^2$
- $1\\text{ hectare (ha)} = 100\\text{ m} \\times 100\\text{ m} = 10,000\\text{ m}^2 = 100\\text{ ares}$
- $1\\text{ km}^2 = 1,000\\text{ m} \\times 1,000\\text{ m} = 1,000,000\\text{ m}^2 = 100\\text{ hectares}$`,
            keyPoint: 'Divide m² by 10,000 to convert into hectares; multiply m² by 10,000 to convert into cm².'
          }
        ],
        definitions: [
          { term: 'Rectilinear Figure', definition: 'A closed plane figure whose boundary consists entirely of straight line segments.' },
          { term: 'Decomposition (Dissection)', definition: 'Breaking a complex polygon into non-overlapping triangles, rectangles, and trapeziums whose areas can be summed.' },
          { term: 'Hectare (ha)', definition: 'A standard metric unit of land area equal to 10,000 m² (a square of side 100 m).' }
        ],
        formulas: [
          { formula: 'Area of Equilateral Triangle = (√3 / 4) × a²', explanation: 'Height is (√3 / 2)a; useful for hexagons and triangle-based polygons.', unit: 'sq. units' },
          { formula: 'Area of Regular Hexagon = (3√3 / 2) × a²', explanation: 'Six congruent equilateral triangles of side a meeting at the centre.', unit: 'sq. units' },
          { formula: 'Area of Crossroads = w(L + B − w)', explanation: 'Two perpendicular paths of width w across an L × B rectangle, removing central overlap w².', unit: 'sq. units' },
          { formula: '1 hectare = 10,000 m² = 100 ares', explanation: 'Standard agricultural and surveying land area conversion.' }
        ],
        comparisonTable: {
          caption: 'Area Unit Conversion & Path Subtraction Guide',
          headers: ['Conversion / Pattern', 'Exact Formula', 'Common Mistake to Avoid'],
          rows: [
            ['m² → cm²', 'Multiply by 10,000 (100²)', 'Multiplying only by 100'],
            ['m² → hectares', 'Divide by 10,000', 'Dividing by 1,000'],
            ['Outer path around L × B', '(L + 2w)(B + 2w) − L·B', 'Using + w instead of + 2w'],
            ['Inner path inside L × B', 'L·B − (L − 2w)(B − 2w)', 'Using − w instead of − 2w'],
            ['Perpendicular crossroads', 'L·w + B·w − w²', 'Forgetting to subtract central overlap w²']
          ]
        },
        realLifeExample: 'When estimating the cost of tiling an L-shaped living room plus a hallway, contractors do not guess: they partition the floor blueprint into two clean rectangles, convert square centimetres or inches into square metres, add a 5% cutting allowance, and calculate total tiles cleanly without waste.',
        commonMistakes: [
          {
            mistake: 'Using cumulative field-book coordinates directly as trapezium heights.',
            correction: 'If P is at 20 m and Q is at 55 m along AD, the perpendicular distance between offsets BP and CQ is PQ = 55 − 20 = 35 m, not 55 m!'
          },
          {
            mistake: 'Adding two perpendicular crossroads without subtracting the centre square.',
            correction: 'The intersection square of area w × w belongs to both paths, so subtract w² once.'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Convex Polygon', category: 'Polygons', definition: 'A polygon with every interior angle strictly less than 180° and all diagonals inside.' },
      { term: 'Concave Polygon', category: 'Polygons', definition: 'A polygon with at least one reflex interior angle (> 180°) and an exterior diagonal.' },
      { term: 'Regular Polygon', category: 'Polygons', definition: 'A polygon that is both equilateral (equal sides) and equiangular (equal angles).' },
      { term: 'Diagonal', category: 'Polygons', definition: 'A segment joining two non-adjacent vertices; total count = n(n − 3)/2.' },
      { term: 'Parallelogram', category: 'Quadrilaterals', definition: 'Quadrilateral with both pairs of opposite sides parallel and equal, and bisecting diagonals.' },
      { term: 'Rhombus', category: 'Quadrilaterals', definition: 'Equilateral parallelogram whose diagonals bisect each other at 90° and bisect vertex angles.' },
      { term: 'Isosceles Trapezium', category: 'Quadrilaterals', definition: 'Trapezium with equal non-parallel legs, equal base angles, and equal diagonals.' },
      { term: 'Kite', category: 'Quadrilaterals', definition: 'Quadrilateral with two distinct pairs of equal adjacent sides and perpendicular diagonals.' },
      { term: 'Rectilinear Figure', category: 'Mensuration', definition: 'A closed 2D shape formed solely by straight line segments.' },
      { term: 'Hectare', category: 'Units', definition: 'Metric land unit equal to 10,000 square metres (100 m × 100 m).' }
    ],
    formulaSheet: [
      { title: 'Interior Angle Sum', expression: 'S = (n − 2) × 180° = (2n − 4) × 90°', meaning: 'Total interior degrees in an n-sided polygon' },
      { title: 'Exterior Angle Sum', expression: 'Sum of all exterior angles = 360°', meaning: 'Constant for every convex polygon' },
      { title: 'Regular Polygon Angles', expression: 'E = 360° / n ;  I = 180° − E', meaning: 'Single exterior and interior angle of regular n-gon' },
      { title: 'Diagonals of n-gon', expression: 'D = n(n − 3) / 2', meaning: 'Total diagonals in an n-sided polygon' },
      { title: 'Area of Trapezium', expression: 'A = ½ (a + b) h', meaning: 'a, b = parallel sides; h = perpendicular height' },
      { title: 'Area of Rhombus / Kite', expression: 'A = ½ d₁ d₂', meaning: 'Half the product of perpendicular diagonals' },
      { title: 'Rhombus Side & Diagonals', expression: 'side² = (d₁/2)² + (d₂/2)²', meaning: 'Pythagoras relation from 90° diagonal intersection' },
      { title: 'Area of General Quadrilateral', expression: 'A = ½ d (h₁ + h₂)', meaning: 'Diagonal d multiplied by sum of two perpendicular offsets' },
      { title: 'Area of Regular Hexagon', expression: 'A = (3√3 / 2) a²', meaning: 'Six equilateral triangles of side a' },
      { title: 'Crossroads Area', expression: 'A = w(L + B − w)', meaning: 'Two perpendicular paths of width w across L × B rectangle' }
    ],
    comparisonTables: [
      {
        title: 'Quick Selection Guide: Which Quadrilateral / Polygon Formula Should I Use?',
        headers: ['What Is Given in the Question?', 'Best Formula / Property to Apply', 'Watch Out For'],
        rows: [
          ['Regular polygon interior angle I', 'Find E = 180° − I, then n = 360° / E', 'Do NOT divide 360° by I directly'],
          ['Number of diagonals D', 'Solve n(n − 3)/2 = D for integer n', 'Only positive integer n ≥ 4 is valid'],
          ['Adjacent angles of parallelogram in algebra', 'Set Angle 1 + Angle 2 = 180°', 'Opposite angles are equal; adjacent are supplementary'],
          ['Rhombus perimeter + one diagonal', 'side = P/4, find other diagonal via Pythagoras, then ½ d₁ d₂', 'Remember to use HALF-diagonals in Pythagoras'],
          ['Trapezium area, height, and one side', '2A / h = a + b, then subtract known side', 'Always double Area before dividing by h'],
          ['Irregular pentagon/hexagon with offsets', 'Split along main diagonal into triangles & right trapeziums', 'Subtract consecutive baseline marks for heights']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'quad-se1',
        question: 'For a regular octagon (8 sides), find: (a) the sum of all interior angles, (b) each interior angle, (c) each exterior angle, and (d) the total number of diagonals.',
        steps: [
          'Here number of sides n = 8.',
          '(a) Sum of interior angles = (n − 2) × 180° = (8 − 2) × 180° = 6 × 180° = 1080°.',
          '(b) Each interior angle = 1080° ÷ 8 = 135°.',
          '(c) Each exterior angle = 360° ÷ 8 = 45°. (Check: 135° + 45° = 180°.)',
          '(d) Number of diagonals = n(n − 3)/2 = 8 × (8 − 3) / 2 = (8 × 5) / 2 = 20.'
        ],
        finalAnswer: '(a) 1080°, (b) 135°, (c) 45°, (d) 20 diagonals',
        keyRule: 'For regular polygons, compute sum (n−2)×180°, divide by n for interior angle, and check I + E = 180°.'
      },
      {
        id: 'quad-se2',
        question: 'A convex polygon has exactly 44 diagonals. Find the number of sides in the polygon and the sum of its interior angles.',
        steps: [
          'Let the number of sides be n.',
          'Formula for diagonals: n(n − 3) / 2 = 44.',
          'Multiply both sides by 2: n(n − 3) = 88.',
          'Factorise 88 into two positive integers differing by 3: 88 = 11 × 8, where 11 − 8 = 3.',
          'Therefore n = 11 (a hendecagon / 11-gon).',
          'Sum of interior angles = (11 − 2) × 180° = 9 × 180° = 1620°.'
        ],
        finalAnswer: '11 sides; interior angle sum = 1620°',
        keyRule: 'Set n(n − 3) = 2D and look for two integers differing by 3 whose product equals 2D.'
      },
      {
        id: 'quad-se3',
        question: 'In a parallelogram ABCD, adjacent angles ∠A = (3x + 12)° and ∠B = (2x − 32)°. Find the value of x and the measure of all four interior angles.',
        steps: [
          'In a parallelogram, adjacent angles are supplementary (their sum is 180°).',
          'So ∠A + ∠B = 180° ⇒ (3x + 12) + (2x − 32) = 180.',
          'Combine like terms: 5x − 20 = 180 ⇒ 5x = 200 ⇒ x = 40.',
          '∠A = 3(40) + 12 = 120 + 12 = 132°.',
          '∠B = 2(40) − 32 = 80 − 32 = 48°.',
          'Since opposite angles of a parallelogram are equal: ∠C = ∠A = 132° and ∠D = ∠B = 48°.',
          'Check: 132° + 48° + 132° + 48° = 360°.'
        ],
        finalAnswer: 'x = 40; ∠A = 132°, ∠B = 48°, ∠C = 132°, ∠D = 48°',
        keyRule: 'Adjacent angles of a parallelogram sum to 180°, and opposite angles are equal.'
      },
      {
        id: 'quad-se4',
        question: 'In rectangle PQRS, the diagonals PR and QS intersect at point O. If OP = (4x − 5) cm and OQ = (2x + 7) cm, find x and the full length of diagonal PR.',
        steps: [
          'Properties of a rectangle: Diagonals are equal in length (PR = QS) and bisect each other at O.',
          'Therefore, half-diagonal OP equals half-diagonal OQ: OP = OQ.',
          'Set up equation: 4x − 5 = 2x + 7.',
          'Subtract 2x and add 5 on both sides: 2x = 12 ⇒ x = 6.',
          'Length of half-diagonal OP = 4(6) − 5 = 24 − 5 = 19 cm. (Check: OQ = 2(6) + 7 = 19 cm.)',
          'Full diagonal PR = 2 × OP = 2 × 19 = 38 cm.'
        ],
        finalAnswer: 'x = 6; PR = 38 cm',
        keyRule: 'In a rectangle, all four half-diagonals from intersection O to the four vertices are equal!'
      },
      {
        id: 'quad-se5',
        question: 'The perimeter of a rhombus is 52 cm and one of its diagonals measures 10 cm. Find: (a) the length of the other diagonal, (b) the area of the rhombus, and (c) its perpendicular altitude.',
        steps: [
          'All four sides of a rhombus are equal: side a = 52 ÷ 4 = 13 cm.',
          'Let diagonals AC = d₁ = 10 cm and BD = d₂ intersect at right angles at O.',
          'Since diagonals bisect each other: OA = d₁ / 2 = 10 / 2 = 5 cm.',
          'In right-angled ΔAOB (∠AOB = 90°), by Pythagoras theorem: OA² + OB² = AB².',
          '5² + OB² = 13² ⇒ 25 + OB² = 169 ⇒ OB² = 144 ⇒ OB = 12 cm.',
          '(a) Other diagonal d₂ = 2 × OB = 2 × 12 = 24 cm.',
          '(b) Area of rhombus = ½ × d₁ × d₂ = ½ × 10 × 24 = 120 cm².',
          '(c) Using Area = base × altitude: 120 = 13 × h ⇒ h = 120 / 13 = 9 3/13 cm (approx. 9.23 cm).'
        ],
        finalAnswer: '(a) 24 cm, (b) 120 cm², (c) 120/13 cm (9 3/13 cm)',
        keyRule: 'Combine Pythagoras on half-diagonals with ½ d₁ d₂ and base × height for complete rhombus mastery.'
      },
      {
        id: 'quad-se6',
        question: 'The area of a trapezium is 420 cm² and its perpendicular height is 14 cm. If one parallel side is 12 cm longer than the other, find the lengths of the two parallel sides.',
        steps: [
          'Let the shorter parallel side be x cm. Then the longer parallel side is (x + 12) cm.',
          'Given Area = 420 cm² and height h = 14 cm.',
          'Substitute into Area = ½ × (a + b) × h:',
          '420 = ½ × (x + x + 12) × 14',
          'Simplify ½ × 14 = 7: 420 = 7 × (2x + 12).',
          'Divide both sides by 7: 2x + 12 = 60.',
          'Subtract 12: 2x = 48 ⇒ x = 24 cm.',
          'Longer parallel side = 24 + 12 = 36 cm. Check: ½ × (24 + 36) × 14 = 30 × 14 = 420 cm².'
        ],
        finalAnswer: '24 cm and 36 cm',
        keyRule: 'Express unknown parallel sides algebraically and simplify ½ × h early to solve cleanly.'
      },
      {
        id: 'quad-se7',
        question: 'Find the area of pentagonal field ABCDE where diagonal AD = 90 m. Along AD from A, perpendicular offsets are BP = 30 m (at AP = 20 m) and CQ = 40 m (at AQ = 55 m) on one side of AD, and ER = 36 m (at AR = 50 m) on the opposite side of AD.',
        steps: [
          'Along one side of baseline AD (above AD), the polygon divides into right ΔABP, trapezium BCQP, and right ΔCQD:',
          '1. Area of ΔABP = ½ × AP × BP = ½ × 20 × 30 = 300 m².',
          '2. Height of trapezium BCQP is PQ = AQ − AP = 55 − 20 = 35 m.',
          '   Area of trapezium BCQP = ½ × (BP + CQ) × PQ = ½ × (30 + 40) × 35 = 35 × 35 = 1,225 m².',
          '3. Base of ΔCQD is QD = AD − AQ = 90 − 55 = 35 m.',
          '   Area of ΔCQD = ½ × QD × CQ = ½ × 35 × 40 = 700 m².',
          '4. On the opposite side of AD, ΔAED has full base AD = 90 m and altitude ER = 36 m:',
          '   Area of ΔAED = ½ × AD × ER = ½ × 90 × 36 = 1,620 m².',
          'Total Area = 300 + 1,225 + 700 + 1,620 = 3,845 m².'
        ],
        finalAnswer: '3,845 m²',
        keyRule: 'Subtract cumulative baseline positions from A to obtain true segment lengths PQ and QD.'
      },
      {
        id: 'quad-se8',
        question: 'Find the area of a regular-style octagonal surface ABCDEFGH whose each outer side is 5 cm, the width across opposite diagonal corners is HC = GD = 11 cm, and the perpendicular height of each end trapezium is 4 cm.',
        steps: [
          'Divide the octagon horizontally along segments HC and GD into three non-overlapping parts:',
          '1. Top trapezium ABCH: parallel sides AB = 5 cm and HC = 11 cm, perpendicular height = 4 cm.',
          '   Area(ABCH) = ½ × (5 + 11) × 4 = ½ × 16 × 4 = 32 cm².',
          '2. Middle rectangle HCDG: length HC = 11 cm and breadth CD = 5 cm.',
          '   Area(HCDG) = 11 × 5 = 55 cm².',
          '3. Bottom trapezium GDEF: congruent to top trapezium ABCH (parallel sides 11 cm and 5 cm, height 4 cm).',
          '   Area(GDEF) = ½ × (11 + 5) × 4 = 32 cm².',
          'Total Area of octagon = 32 + 55 + 32 = 119 cm².'
        ],
        finalAnswer: '119 cm²',
        keyRule: 'Decompose a symmetric octagon into two congruent trapeziums plus a central rectangle.'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'quad-e1',
          question: 'Find the sum of all interior angles of a regular 9-sided polygon (nonagon), and find the measure of each exterior angle.',
          solutionSteps: [
            'Here n = 9.',
            'Sum of interior angles = (9 − 2) × 180° = 7 × 180° = 1260°.',
            'Each exterior angle = 360° ÷ 9 = 40°.'
          ],
          finalAnswer: 'Interior sum = 1260°; each exterior angle = 40°',
          marks: 2
        },
        {
          id: 'quad-e2',
          question: 'Three angles of a quadrilateral measure 75°, 90°, and 105°. Calculate the fourth angle.',
          solutionSteps: [
            'Sum of four angles of a quadrilateral = 360°.',
            'Fourth angle = 360° − (75° + 90° + 105°) = 360° − 270° = 90°.'
          ],
          finalAnswer: '90°',
          marks: 2
        },
        {
          id: 'quad-e3',
          question: 'Find the area of a trapezium whose parallel sides are 18 cm and 26 cm, and the distance between them is 9 cm.',
          solutionSteps: [
            'Area = ½ × (a + b) × h = ½ × (18 + 26) × 9',
            '= ½ × 44 × 9 = 22 × 9 = 198 cm².'
          ],
          finalAnswer: '198 cm²',
          marks: 2
        },
        {
          id: 'quad-e4',
          question: 'The diagonals of a rhombus measure 16 cm and 25 cm. Calculate its area.',
          solutionSteps: [
            'Area of rhombus = ½ × d₁ × d₂',
            '= ½ × 16 × 25 = 8 × 25 = 200 cm².'
          ],
          finalAnswer: '200 cm²',
          marks: 2
        }
      ],
      medium: [
        {
          id: 'quad-m1',
          question: 'Each interior angle of a regular polygon measures 156°. Find the number of sides of the polygon.',
          solutionSteps: [
            'At any vertex, Interior Angle + Exterior Angle = 180°.',
            'Each exterior angle E = 180° − 156° = 24°.',
            'Number of sides n = 360° ÷ E = 360° ÷ 24° = 15.'
          ],
          finalAnswer: '15 sides',
          marks: 3
        },
        {
          id: 'quad-m2',
          question: 'The four angles of a quadrilateral are in the ratio 2 : 3 : 5 : 8. Find the measure of each angle and state whether the quadrilateral is convex or concave.',
          solutionSteps: [
            'Let the angles be 2x, 3x, 5x, and 8x.',
            '2x + 3x + 5x + 8x = 360° ⇒ 18x = 360° ⇒ x = 20°.',
            'The angles are: 2(20°) = 40°, 3(20°) = 60°, 5(20°) = 100°, and 8(20°) = 160°.',
            'Since every interior angle is less than 180°, the quadrilateral is convex.'
          ],
          finalAnswer: '40°, 60°, 100°, 160° (Convex)',
          marks: 3
        },
        {
          id: 'quad-m3',
          question: 'Diagonal AC of quadrilateral ABCD measures 24 cm. Perpendiculars BL and DM from B and D onto AC measure 8 cm and 13 cm respectively. Find the area of quadrilateral ABCD.',
          solutionSteps: [
            'Area of general quadrilateral = ½ × d × (h₁ + h₂).',
            'Here d = 24 cm, h₁ = 8 cm, h₂ = 13 cm.',
            'Area = ½ × 24 × (8 + 13) = 12 × 21 = 252 cm².'
          ],
          finalAnswer: '252 cm²',
          marks: 3
        },
        {
          id: 'quad-m4',
          question: 'The perimeter of a trapezium is 52 cm, its two non-parallel sides are 10 cm each, and its perpendicular altitude is 8 cm. Find the area of the trapezium.',
          solutionSteps: [
            'Perimeter = sum of parallel sides + sum of non-parallel sides.',
            'Sum of parallel sides (a + b) = 52 − (10 + 10) = 52 − 20 = 32 cm.',
            'Area = ½ × (a + b) × h = ½ × 32 × 8 = 16 × 8 = 128 cm².'
          ],
          finalAnswer: '128 cm²',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'quad-d1',
          question: 'In a regular polygon, each interior angle is 4 times each exterior angle. Find the number of sides and the total number of diagonals in the polygon.',
          solutionSteps: [
            'Let each exterior angle be E. Then each interior angle is 4E.',
            'Since I + E = 180°, we have 4E + E = 180° ⇒ 5E = 180° ⇒ E = 36°.',
            'Number of sides n = 360° ÷ 36° = 10 (regular decagon).',
            'Number of diagonals = n(n − 3)/2 = 10 × (10 − 3) / 2 = (10 × 7) / 2 = 35 diagonals.'
          ],
          finalAnswer: '10 sides; 35 diagonals',
          marks: 4
        },
        {
          id: 'quad-d2',
          question: 'In parallelogram ABCD, the angle bisectors of adjacent angles ∠A and ∠B meet at point P. Prove that ∠APB = 90°. Further, if ∠D = 110°, find ∠PAB and ∠PBA.',
          solutionSteps: [
            'In parallelogram ABCD, adjacent angles are supplementary: ∠A + ∠B = 180°.',
            'Since AP bisects ∠A and BP bisects ∠B: ∠PAB = ½∠A and ∠PBA = ½∠B.',
            'Adding them: ∠PAB + ∠PBA = ½(∠A + ∠B) = ½(180°) = 90°.',
            'In ΔAPB, by angle sum property: ∠APB = 180° − (∠PAB + ∠PBA) = 180° − 90° = 90° (Proved).',
            'Now given ∠D = 110°: Opposite angles of a parallelogram are equal, so ∠B = ∠D = 110°, and adjacent ∠A = 180° − 110° = 70°.',
            'Hence ∠PAB = ½(70°) = 35° and ∠PBA = ½(110°) = 55°.'
          ],
          finalAnswer: '∠APB = 90° (proved); ∠PAB = 35°, ∠PBA = 55°',
          marks: 4
        },
        {
          id: 'quad-d3',
          question: 'A field is in the shape of a trapezium ABCD with parallel sides AB = 25 m and DC = 10 m. Its non-parallel sides are AD = 13 m and BC = 14 m. Find the perpendicular height and total area of the field.',
          solutionSteps: [
            'Through C, draw CE parallel to DA meeting AB at E. Now AECD is a parallelogram, so AE = DC = 10 m and CE = AD = 13 m.',
            'The remaining base of ΔEBC is EB = 25 − 10 = 15 m, with sides CE = 13 m and CB = 14 m.',
            'Drop perpendicular CF ⊥ EB of height h, with EF = x and FB = 15 − x.',
            'By Pythagoras in right triangles CFE and CFB: h² = 13² − x² = 14² − (15 − x)².',
            '169 − x² = 196 − (225 − 30x + x²) ⇒ 169 = −29 + 30x ⇒ 30x = 198 ⇒ x = 6.6 m.',
            'Height h = √(13² − 6.6²) = √(169 − 43.56) = √125.44 = 11.2 m.',
            'Area of trapezium ABCD = ½ × (25 + 10) × 11.2 = 35 × 5.6 = 196 m².'
          ],
          finalAnswer: 'Height = 11.2 m; Area = 196 m²',
          marks: 5
        },
        {
          id: 'quad-d4',
          question: 'A rectangular park measures 80 m by 60 m. Two perpendicular crossroads, each 5 m wide, run through the centre parallel to the length and breadth. Find the area of the crossroads and the remaining grass area in hectares.',
          solutionSteps: [
            'Area of road parallel to length = 80 × 5 = 400 m².',
            'Area of road parallel to breadth = 60 × 5 = 300 m².',
            'Area of central square overlap (counted twice) = 5 × 5 = 25 m².',
            'Area of crossroads = 400 + 300 − 25 = 675 m².',
            'Total area of park = 80 × 60 = 4,800 m².',
            'Remaining grass area = 4,800 − 675 = 4,125 m² = 4,125 ÷ 10,000 = 0.4125 hectares.'
          ],
          finalAnswer: 'Crossroads = 675 m²; Remaining grass = 4,125 m² (0.4125 hectares)',
          marks: 4
        }
      ]
    },
    examPreparationTips: [
      'Always write the reason inside brackets in geometry proofs—for example: "(Opposite angles of a parallelogram are equal)" or "(Diagonals of a rhombus bisect each other at 90°)".',
      'For regular polygon problems, ALWAYS translate interior angle to exterior angle first using E = 180° − I; dividing 360° by E avoids messy algebraic equations.',
      'In trapezium reverse questions, double the area immediately: 2 × Area = (a + b) × h.',
      'Check units carefully in mensuration: convert cm to m (or m² to hectares) before final multiplication and always state sq. units in the final answer.'
    ],
    chapterSummary: [
      'Sum of interior angles of an n-sided polygon = (n − 2) × 180° = (2n − 4) × 90°.',
      'Sum of exterior angles of any convex polygon = 360°; each exterior angle of a regular n-gon = 360° / n.',
      'Total number of diagonals in an n-sided polygon = n(n − 3) / 2.',
      'In a parallelogram, opposite sides and opposite angles are equal, adjacent angles sum to 180°, and diagonals bisect each other.',
      'A rectangle has equal bisecting diagonals; a rhombus has unequal diagonals bisecting at 90°; a square has equal diagonals bisecting at 90°.',
      'Area of Trapezium = ½ (a + b) h; Area of Rhombus or Kite = ½ d₁ d₂; Area of General Quadrilateral = ½ d (h₁ + h₂).',
      'Area of Regular Hexagon = (3√3 / 2) a², and irregular polygons are calculated by decomposing into triangles and trapeziums along a baseline.'
    ],
    importantQuestionsAndAnswers: [
      {
        type: 'Short Answer',
        question: 'Can a regular polygon have each exterior angle equal to 50°? Give a mathematical reason.',
        answer: 'No. For a regular polygon with n sides, n = 360° ÷ Exterior Angle = 360° ÷ 50° = 7.2. Since the number of sides n must be a whole number (integer ≥ 3), an exterior angle of 50° is impossible.'
      },
      {
        type: 'Short Answer',
        question: 'Two adjacent angles of a parallelogram are in the ratio 4 : 5. Find all four angles.',
        answer: 'Adjacent angles of a parallelogram are supplementary: 4x + 5x = 180° ⇒ 9x = 180° ⇒ x = 20°. Therefore, the adjacent angles are 4(20°) = 80° and 5(20°) = 100°. Opposite angles are equal, so the four angles are 80°, 100°, 80°, and 100°.'
      },
      {
        type: 'Short Answer',
        question: 'The area of a rhombus is 96 cm² and one of its diagonals is 16 cm. Find the length of the other diagonal and each side.',
        answer: 'Using Area = ½ d₁ d₂: 96 = ½ × 16 × d₂ ⇒ 96 = 8 d₂ ⇒ d₂ = 12 cm. Half-diagonals are 16/2 = 8 cm and 12/2 = 6 cm. By Pythagoras at the 90° centre: side = √(8² + 6²) = √(64 + 36) = √100 = 10 cm.'
      },
      {
        type: 'Short Answer',
        question: 'Find the area of a regular hexagon of side 4 cm (leave answer in exact form with √3, and approximate decimal using √3 ≈ 1.732).',
        answer: 'Area = (3√3 / 2) × a² = (3√3 / 2) × 4² = (3√3 / 2) × 16 = 24√3 cm². Approximately: 24 × 1.732 = 41.568 cm².'
      },
      {
        type: 'Reasoning',
        question: 'Every square is a rhombus, but every rhombus is not a square. Justify this statement using geometric properties.',
        answer: 'A rhombus is defined as a parallelogram with all four sides equal. A square has all four sides equal (so it automatically satisfies the full definition of a rhombus), PLUS it has four 90° angles and equal diagonals. Because a general rhombus does not require 90° vertex angles or equal diagonals, a rhombus is not necessarily a square.'
      },
      {
        type: 'Long Answer',
        question: 'The parallel sides of a trapezium are in the ratio 3 : 5 and the perpendicular distance between them is 12 cm. If the area of the trapezium is 384 cm², find the lengths of the parallel sides.',
        answer: 'Let the parallel sides be 3x cm and 5x cm. Given h = 12 cm and Area = 384 cm². Using Area = ½(a + b)h: 384 = ½ × (3x + 5x) × 12 ⇒ 384 = 6 × 8x ⇒ 48x = 384 ⇒ x = 8. Therefore, the parallel sides are 3(8) = 24 cm and 5(8) = 40 cm.'
      },
      {
        type: 'Long Answer',
        question: 'A rectangular grassy lawn 50 m × 36 m has a uniform gravel path 2.5 m wide built all around its INSIDE boundary. Find the area of the gravel path and the cost of levelling it at ₹45 per m².',
        answer: 'Outer lawn area = 50 × 36 = 1,800 m². Since the 2.5 m path runs inside all four edges, inner length = 50 − 2(2.5) = 45 m and inner breadth = 36 − 2(2.5) = 31 m. Inner area = 45 × 31 = 1,395 m². Area of gravel path = 1,800 − 1,395 = 405 m². Cost of levelling = 405 × ₹45 = ₹18,225.'
      },
      {
        type: 'HOTS',
        question: 'In a convex pentagon, three angles are 105°, 110°, and 105°, while the remaining two angles are in the ratio 4 : 7. Find the two remaining angles.',
        answer: 'Sum of interior angles of a pentagon = (5 − 2) × 180° = 540°. Sum of the three known angles = 105° + 110° + 105° = 320°. Remaining sum = 540° − 320° = 220°. Let the two remaining angles be 4x and 7x: 4x + 7x = 220° ⇒ 11x = 220° ⇒ x = 20°. Therefore, the two angles are 4(20°) = 80° and 7(20°) = 140°.'
      }
    ],
    practiceExercises: [
      {
        question: 'Find the number of sides of a regular polygon if each interior angle is 165°.',
        hint: 'First compute each exterior angle E = 180° − 165°, then divide 360° by E.',
        answerGuide: 'E = 15°, so n = 360° / 15° = 24 sides.'
      },
      {
        question: 'One diagonal of a rhombus is 30 cm and its area is 240 cm². Find the perimeter of the rhombus.',
        hint: 'Use ½ d₁ d₂ = 240 to get d₂, then apply Pythagoras to half-diagonals to find side length.',
        answerGuide: 'd₂ = 16 cm; half-diagonals are 15 cm and 8 cm; side = √(15² + 8²) = 17 cm; Perimeter = 4 × 17 = 68 cm.'
      },
      {
        question: 'The parallel sides of a trapezium are 20 cm and 32 cm, and its area is 390 cm². Calculate its height.',
        hint: 'Use h = 2 × Area / (a + b).',
        answerGuide: 'h = (2 × 390) / (20 + 32) = 780 / 52 = 15 cm.'
      },
      {
        question: 'In parallelogram PQRS, diagonals meet at O. If OP = 14 cm and OQ = 9 cm, find PR + QS.',
        hint: 'Diagonals bisect each other, so PR = 2·OP and QS = 2·OQ.',
        answerGuide: 'PR = 28 cm, QS = 18 cm, so PR + QS = 46 cm.'
      },
      {
        question: 'Convert 2.75 hectares into square metres and into ares.',
        hint: '1 hectare = 10,000 m² = 100 ares.',
        answerGuide: '2.75 × 10,000 = 27,500 m², and 2.75 × 100 = 275 ares.'
      }
    ],
    practiceWorksheet: {
      title: 'ICSE Class 8 Chapter 7 Worksheet: Polygons, Quadrilaterals & Area (30 Marks)',
      instructions: 'Attempt all four sections in your notebook showing all geometrical reasons and calculation steps clearly.',
      sections: [
        {
          sectionTitle: 'Section A: Multiple Choice Questions (1 × 5 = 5 Marks)',
          items: [
            '1. How many diagonals does a regular hexagon (n = 6) have? (a) 6  (b) 9  (c) 12  (d) 18',
            '2. What is the sum of the exterior angles of a convex decagon? (a) 1440°  (b) 720°  (c) 360°  (d) 180°',
            '3. Which quadrilateral has equal diagonals that bisect each other at 90°? (a) Rectangle  (b) Rhombus  (c) Square  (d) Kite',
            '4. Area of a trapezium with parallel sides 12 cm and 18 cm and height 10 cm is: (a) 150 cm²  (b) 300 cm²  (c) 180 cm²  (d) 216 cm²',
            '5. 3.5 hectares is equal to: (a) 350 m²  (b) 3,500 m²  (c) 35,000 m²  (d) 350,000 m²'
          ]
        },
        {
          sectionTitle: 'Section B: Short Answer Questions (2 × 4 = 8 Marks)',
          items: [
            '6. Find the measure of each interior angle of a regular pentagon.',
            '7. Two adjacent angles of a parallelogram are (2x + 15)° and (3x − 10)°. Find x and the angles.',
            '8. Find the area of a rhombus whose diagonals are 14 cm and 22 cm.',
            '9. Diagonal BD of quadrilateral ABCD is 16 cm, and perpendiculars from A and C onto BD are 7 cm and 11 cm. Find Area(ABCD).'
          ]
        },
        {
          sectionTitle: 'Section C: Structured Long Answer Questions (3 × 3 = 9 Marks)',
          items: [
            '10. Each interior angle of a regular polygon is 135°. Find the number of sides and the number of diagonals.',
            '11. The area of a trapezium is 360 m² and height is 15 m. If one parallel side is 18 m, find the other parallel side.',
            '12. A rectangular hall 24 m × 16 m is surrounded outside by a verandah 2 m wide. Find the area of the verandah.'
          ]
        },
        {
          sectionTitle: 'Section D: HOTS & Geometry Proofs (4 × 2 = 8 Marks)',
          items: [
            '13. The perimeter of a rhombus is 40 cm and one diagonal is 12 cm. Find the other diagonal and the area of the rhombus.',
            '14. Find the area of pentagon ABCDE where diagonal AD = 60 m; along AD, AP = 15 m, AQ = 40 m with offsets BP = 20 m, CQ = 26 m on one side, and ER = 30 m on the opposite side of AD.'
          ]
        }
      ],
      answerKey: [
        '1. (b) 9  [6(6 − 3)/2 = 9]',
        '2. (c) 360°  [Exterior angle sum is always 360°]',
        '3. (c) Square',
        '4. (a) 150 cm²  [½(12 + 18) × 10 = 150]',
        '5. (c) 35,000 m²  [3.5 × 10,000]',
        '6. 108°  [(5 − 2) × 180° ÷ 5 = 540° ÷ 5 = 108°]',
        '7. 5x + 5 = 180° ⇒ x = 35; angles are 85° and 95°',
        '8. ½ × 14 × 22 = 154 cm²',
        '9. ½ × 16 × (7 + 11) = 8 × 18 = 144 cm²',
        '10. E = 180° − 135° = 45°; n = 360°/45° = 8 sides; Diagonals = 8(5)/2 = 20',
        '11. 18 + b = (2 × 360) / 15 = 48 ⇒ b = 30 m',
        '12. Outer = 28 × 20 = 560 m²; Inner = 24 × 16 = 384 m²; Verandah = 560 − 384 = 176 m²',
        '13. Side = 10 cm, half-d₁ = 6 cm ⇒ half-d₂ = √(10² − 6²) = 8 cm ⇒ d₂ = 16 cm; Area = ½ × 12 × 16 = 96 cm²',
        '14. ΔABP = ½(15)(20) = 150 m²; Trap BCQP = ½(20 + 26)(40 − 15) = 23 × 25 = 575 m²; ΔCQD = ½(60 − 40)(26) = 260 m²; ΔAED = ½(60)(30) = 900 m²; Total = 150 + 575 + 260 + 900 = 1,885 m²'
      ]
    }
  },
  quizQuestions: [
    {
      id: 'quad-q1',
      type: 'mcq',
      question: 'What is the sum of the interior angles of a convex heptagon (7 sides)?',
      options: ['720°', '900°', '1080°', '1260°'],
      correctAnswer: 1,
      explanation: 'Using (n − 2) × 180° with n = 7 gives (7 − 2) × 180° = 5 × 180° = 900°.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'quad-q2',
      type: 'mcq',
      question: 'How many diagonals does a regular polygon of 12 sides have?',
      options: ['44', '48', '54', '60'],
      correctAnswer: 2,
      explanation: 'Diagonals = n(n − 3)/2 = 12 × 9 / 2 = 54.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'quad-q3',
      type: 'mcq',
      question: 'If each interior angle of a regular polygon is 140°, how many sides does it have?',
      options: ['8', '9', '10', '12'],
      correctAnswer: 1,
      explanation: 'Exterior angle E = 180° − 140° = 40°. Number of sides n = 360° ÷ 40° = 9.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'quad-q4',
      type: 'true_false',
      question: 'The diagonals of every rhombus are equal in length and bisect each other at 90°.',
      options: ['True', 'False'],
      correctAnswer: false,
      explanation: 'False! Diagonals of a rhombus bisect each other at 90°, but they are generally UNEQUAL (they are equal only in a square).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'quad-q5',
      type: 'mcq',
      question: 'In a parallelogram ABCD, if ∠A = 68°, what is the measure of ∠B?',
      options: ['68°', '112°', '122°', '22°'],
      correctAnswer: 1,
      explanation: 'Adjacent angles of a parallelogram are supplementary: ∠B = 180° − 68° = 112°.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'quad-q6',
      type: 'mcq',
      question: 'The area of a trapezium is 260 cm², its parallel sides are 24 cm and 28 cm. What is its perpendicular height?',
      options: ['5 cm', '10 cm', '12 cm', '20 cm'],
      correctAnswer: 1,
      explanation: 'h = 2A / (a + b) = (2 × 260) / (24 + 28) = 520 / 52 = 10 cm.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'quad-q7',
      type: 'mcq',
      question: 'One diagonal of a rhombus is 18 cm and its perimeter is 60 cm. Find the area of the rhombus.',
      options: ['180 cm²', '216 cm²', '270 cm²', '432 cm²'],
      correctAnswer: 1,
      explanation: 'Side = 60/4 = 15 cm. Half-diagonal = 9 cm. Other half-diagonal = √(15² − 9²) = 12 cm, so d₂ = 24 cm. Area = ½ × 18 × 24 = 216 cm².',
      difficulty: 'hard',
      marks: 2
    },
    {
      id: 'quad-q8',
      type: 'mcq',
      question: 'Find the area of a quadrilateral whose diagonal is 30 cm and offsets from opposite vertices are 7 cm and 11 cm.',
      options: ['270 cm²', '540 cm²', '180 cm²', '210 cm²'],
      correctAnswer: 0,
      explanation: 'Area = ½ × 30 × (7 + 11) = 15 × 18 = 270 cm².',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'quad-q9',
      type: 'fill_blank',
      question: 'The sum of all exterior angles of a convex 15-sided polygon is ______ degrees.',
      correctAnswer: '360',
      explanation: 'For ANY convex polygon regardless of the number of sides, the sum of its exterior angles taken in order is always 360°.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'quad-q10',
      type: 'mcq',
      question: 'A rectangular lawn 40 m × 25 m has two perpendicular paths 2 m wide crossing through its centre parallel to its sides. What is the area of the paths?',
      options: ['126 m²', '130 m²', '134 m²', '65 m²'],
      correctAnswer: 0,
      explanation: 'Area = 40×2 + 25×2 − 2×2 = 80 + 50 − 4 = 126 m².',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'quad-q11',
      type: 'hots',
      question: 'If the number of diagonals of a polygon is 27, how many sides does it have?',
      options: ['7', '8', '9', '10'],
      correctAnswer: 2,
      explanation: 'n(n − 3)/2 = 27 ⇒ n(n − 3) = 54 = 9 × 6, so n = 9 sides (nonagon).',
      difficulty: 'hard',
      marks: 2
    },
    {
      id: 'quad-q12',
      type: 'mcq',
      question: 'Which quadrilateral has diagonals that intersect at 90°, where only ONE diagonal bisects the other?',
      options: ['Parallelogram', 'Rhombus', 'Kite', 'Rectangle'],
      correctAnswer: 2,
      explanation: 'In a kite, the diagonals are perpendicular and only the main symmetry diagonal bisects the cross-diagonal.',
      difficulty: 'medium',
      marks: 1
    }
  ],
  flashcards: [
    {
      id: 'quad-fc1',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Formula for Sum of Interior Angles of an n-sided polygon',
      back: '(n − 2) × 180°  or  (2n − 4) × 90°',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'quad-fc2',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Sum of Exterior Angles of any convex polygon',
      back: 'Always 360° (independent of the number of sides n).',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'quad-fc3',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Formula for total number of diagonals in an n-sided polygon',
      back: 'n(n − 3) / 2',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'quad-fc4',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Convex vs Concave Polygon',
      back: 'Convex: Every interior angle < 180° and all diagonals lie inside. Concave: At least one reflex angle (> 180°) and an exterior diagonal.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'quad-fc5',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Key diagonal differences: Rectangle vs Rhombus vs Square',
      back: 'Rectangle: equal & bisect. Rhombus: unequal & bisect at 90°. Square: equal AND bisect at 90°.',
      category: 'Definition',
      importance: 'Essential'
    },
    {
      id: 'quad-fc6',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Area of a Trapezium formula',
      back: 'Area = ½ × (sum of parallel sides) × height = ½ (a + b) h',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'quad-fc7',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Two Area Formulas for a Rhombus',
      back: '1) ½ × d₁ × d₂   2) base × altitude',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'quad-fc8',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Area of a General Quadrilateral given diagonal d and offsets h₁, h₂',
      back: 'Area = ½ × d × (h₁ + h₂)',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'quad-fc9',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Area of a Regular Hexagon of side a',
      back: '6 × (√3 / 4) a² = (3√3 / 2) a²',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'quad-fc10',
      subjectId: 'mathematics',
      chapterId: 'math-quadrilaterals-area',
      chapterTitle: 'Quadrilaterals, Polygons and Area of Rectilinear Figures',
      front: 'Metric Land Conversions: 1 hectare and 1 m²',
      back: '1 hectare = 10,000 m² = 100 ares; 1 m² = 10,000 cm².',
      category: 'Formula',
      importance: 'Essential'
    }
  ]
};
