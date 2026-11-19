import { Chapter } from '../../types';

export const CH8_MENSURATION_SOLIDS: Chapter = {
  id: 'math-mensuration-solids',
  subjectId: 'mathematics',
  chapterNumber: 8,
  title: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
  subtitle: 'Circumference and circular paths, surface areas & volumes of cubes and cuboids, right circular cylinders, hollow pipes, and capacity conversions',
  term: 'Annual',
  estimatedMinutes: 95,
  notes: {
    introduction: `Mensuration—from the Latin word *mensura*, meaning "to measure"—bridges abstract geometry with everyday engineering, architecture, packaging, and water management. Whenever you calculate the length of fencing around a circular garden, determine how many litres of water an overhead cylindrical tank can store, compute how much paint covers the four walls and ceiling of a classroom, or measure the iron mass inside a hollow drainage pipe, you are applying Mensuration.

In this final Mathematics chapter—aligned with your prescribed ICSE Class 8 syllabus (*Revised New Mathematics Today – Class 8*)—we unify two-dimensional curved boundaries (**Circles, Semicircles, Quadrants, and Concentric Rings**) with three-dimensional solid shapes (**Cubes, Cuboids, Right Circular Cylinders, and Hollow Cylinders**). You will learn not just to memorise surface area and volume formulas, but to understand *where they come from*: why unfolding a cylinder produces a rectangle of area $2\\pi r \\times h$, why open boxes subtract thickness once from height instead of twice, and why melting, recasting, or pouring liquids always conserves **volume** rather than surface area.

Master the unit conversion bridge ($1\\text{ m}^3 = 1,000\\text{ Litres}$, $1,000\\text{ cm}^3 = 1\\text{ Litre}$), verify matching length units *before* multiplying, and use the $\\pi(R + r)(R - r)$ algebraic factorisation shortcut—and every ICSE Class 8 Mensuration problem becomes systematic and reliable.`,
    learningObjectives: [
      'Calculate circumference, perimeter, and area of circles, semicircles, quadrants, concentric circular tracks, and wire-rebent figures.',
      'Apply lateral surface area (4 walls), total surface area, space diagonal √(l² + b² + h²), and volume formulas for cubes and cuboids.',
      'Distinguish between closed boxes and open-top boxes (4 walls + base, or subtracting thickness once in open-lid thick boxes).',
      'Derive and apply curved surface area (2πrh), total surface area 2πr(r + h), and volume (πr²h) of right circular cylinders, road rollers, and rolled paper sheets.',
      'Solve hollow cylinder (pipe) problems for metal volume π(R² − r²)h and total surface area using R − r = thickness.',
      'Solve real-world volume conservation problems (melting/recasting, earth dug from wells, water flow rate through pipes) and convert cleanly between cm³, m³, mL, and Litres.'
    ],
    topics: [
      {
        id: 'math-mens-t1',
        title: '1. Circles, Semicircles, Quadrants & Concentric Circular Rings',
        content: `Unlike polygons bounded by straight edges, a **circle** is a closed curve every point of which is at a fixed distance (radius $r$) from a fixed centre. Across every circle in the universe, the ratio of its circumference $C$ to its diameter $d = 2r$ equals the exact same irrational constant **$\\pi$ (pi)**, conventionally taken in ICSE calculations as $\\frac{22}{7}$ (or $3.14$ when instructed).`,
        subtopics: [
          {
            subheading: '1.1 Circle, Semicircle & Quadrant Perimeters vs Areas',
            body: `Students frequently confuse **arc length** with **total perimeter** on partial circles—never forget the straight diameter or radius edges that close the boundary!
- **Full Circle**: Circumference $C = 2\\pi r = \\pi d$; Area $A = \\pi r^2 = \\dfrac{\\pi d^2}{4}$.
- **Semicircle (Half-circle)**: Area $= \\frac{1}{2}\\pi r^2$. Its **perimeter** consists of the curved half-circumference ($\\pi r$) PLUS the straight diameter ($2r$):
$$\\text{Perimeter of Semicircle} = \\pi r + 2r = r(\\pi + 2) = \\frac{36}{7}r \\text{ (taking } \\pi = \\frac{22}{7}\\text{)}$$
- **Quadrant (Quarter-circle)**: Area $= \\frac{1}{4}\\pi r^2$. Its **perimeter** consists of one-quarter of the circumference ($\\frac{\\pi r}{2}$) PLUS two perpendicular radii ($2r$): $\\text{Perimeter} = \\frac{\\pi r}{2} + 2r$.`,
            keyPoint: 'Shortcut for π = 22/7: Perimeter of a semicircle = (22/7 + 2)r = (36/7)r. For example, if Perimeter = 72 cm, then r = 72 × 7 / 36 = 14 cm immediately!'
          },
          {
            subheading: '1.2 Concentric Rings, Circular Tracks & Road Width',
            body: `Two circles sharing the same centre with outer radius $R$ and inner radius $r$ ($R > r$) form a **concentric circular ring** (or circular path) of uniform width $w = R - r$. Instead of squaring $R$ and $r$ separately and risking decimal errors, use the algebraic identity $R^2 - r^2 = (R + r)(R - r)$:
$$\\text{Area of Circular Ring} = \\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2) = \\pi(R + r)(R - r)$$
Notice that if you know the **inner circumference** $C_{\\text{inner}} = 2\\pi r$ and the **outer circumference** $C_{\\text{outer}} = 2\\pi R$, you can immediately find the track width via $w = R - r = \\dfrac{C_{\\text{outer}} - C_{\\text{inner}}}{2\\pi}$.`,
            keyPoint: 'Always factor π(R² − r²) into π(R + r)(R − r). When width w = R − r is 3.5 or 7, it cancels the denominator 7 of π = 22/7!'
          },
          {
            subheading: '1.3 Rotating Wheels & Wire-Rebending Conservation',
            body: `Two classic ICSE word problems test circular circumference directly:
1. **Wheel Revolutions**: In one complete revolution along the ground, a circular wheel moves forward by a distance equal to its circumference $2\\pi r$. Hence:
$$\\text{Distance covered} = \\text{Number of revolutions} \\times 2\\pi r \\implies \\text{Revolutions} = \\frac{\\text{Total Distance}}{2\\pi r}$$
*(Ensure Total Distance and radius $r$ are in the SAME unit—typically metres or centimetres!)*
2. **Wire Rebending**: When a single wire is straightened out from a circle and bent into a square (or triangle/rectangle), its **area changes** (a circle encloses MORE area than any polygon of the same perimeter!), while its **total perimeter/circumference stays invariant**.`,
            keyPoint: 'Rebending wire preserves PERIMETER (Circumference of circle = Perimeter of square), NOT area.'
          }
        ],
        definitions: [
          { term: 'Circumference', definition: 'The complete boundary length (perimeter) of a circle, given by 2πr.' },
          { term: 'Concentric Circles', definition: 'Two or more circles in the same plane sharing the exact same centre but having different radii.' },
          { term: 'Circular Ring (Annulus)', definition: 'The flat region enclosed between two concentric circles of radii R and r.' }
        ],
        formulas: [
          { formula: 'Circle: C = 2πr = πd ,  Area = πr²', explanation: 'Use π = 22/7 when r or d is a multiple of 7 (or 3.5); otherwise 3.14 if specified.' },
          { formula: 'Semicircle: Perimeter = πr + 2r = (36/7)r ,  Area = ½ πr²', explanation: 'Always add diameter 2r to curved arc πr for perimeter.' },
          { formula: 'Circular Ring Area = π(R + r)(R − r)', explanation: 'Outer circle area minus inner circle area, factored via difference of squares.' },
          { formula: 'Number of Wheel Revolutions = Total Distance / (2πr)', explanation: 'Convert km or m into cm (or vice versa) so numerator and denominator share units.' }
        ],
        comparisonTable: {
          caption: '2D Circular Figures: Boundary Length vs Enclosed Area',
          headers: ['Shape', 'Boundary / Perimeter Formula', 'Enclosed Area Formula', 'Critical Detail'],
          rows: [
            ['Full Circle', '2πr', 'πr²', 'Ratio C/d = π'],
            ['Semicircle', 'πr + 2r  [≈ (36/7)r]', '½ πr²', 'Includes straight diameter 2r'],
            ['Quadrant', '(πr / 2) + 2r', '¼ πr²', 'Includes two perpendicular radii'],
            ['Concentric Ring', 'Outer = 2πR; Inner = 2πr', 'π(R + r)(R − r)', 'Ring width w = R − r']
          ]
        },
        realLifeExample: 'A bicycle speedometer counts how many times the front wheel (say diameter $70\\text{ cm}$, so $C = \\frac{22}{7} \\times 70 = 220\\text{ cm} = 2.2\\text{ m}$) completes one full turn using a magnetic spoke sensor. Multiplying revolutions per minute by $2.2\\text{ m}$ tells the rider both exact distance travelled and speed in km/h.',
        commonMistakes: [
          {
            mistake: 'Writing Perimeter of a Semicircle as simply πr.',
            correction: 'πr is ONLY the curved arc length! A closed semicircular shape also has a straight diameter edge of length 2r, so Perimeter = πr + 2r.'
          },
          {
            mistake: 'Confusing diameter d with radius r when substituting into πr².',
            correction: 'Always divide diameter by 2 first (r = d/2) before squaring!'
          }
        ]
      },
      {
        id: 'math-mens-t2',
        title: '2. Cubes & Cuboids: Surface Areas, Diagonals & Volume',
        content: `Moving into three dimensions, **cuboids** (rectangular prisms such as bricks, rooms, and boxes) and **cubes** (square-faced prisms such as dice and sugar cubes) are the building blocks of solid mensuration. Every cuboid has **6 rectangular faces**, **12 edges** (4 lengths $l$, 4 breadths $b$, 4 heights $h$), and **8 vertices**. When $l = b = h = a$, the cuboid specialises into a **cube** with 6 identical square faces.`,
        subtopics: [
          {
            subheading: '2.1 Total Surface Area (TSA) vs Lateral Surface Area (4 Walls)',
            body: `Imagine unfolding a closed cardboard box of dimensions $l \\times b \\times h$ flat onto a table into its **2D net**:
- Top & Bottom faces: $2 \\times (l \\times b)$
- Front & Back faces: $2 \\times (l \\times h)$
- Left & Right faces: $2 \\times (b \\times h)$
Adding all 6 faces gives **Total Surface Area (TSA)**:
$$\\text{TSA of Cuboid} = 2(lb + bh + hl) \\qquad \\text{TSA of Cube} = 6a^2$$
If we exclude the floor and ceiling—keeping only the **four vertical walls**—we get the **Lateral Surface Area (LSA)**:
$$\\text{LSA (Area of 4 Walls)} = 2lh + 2bh = 2(l + b)h = \\text{Perimeter of Base} \\times \\text{Height}$$
For a cube, 4 walls give $\\text{LSA} = 4a^2$. For **whitewashing a room (4 walls + ceiling)** or **lining an open-top aquarium (4 walls + bottom)**, include **one** $lb$ face: $2(l + b)h + lb$ (or $5a^2$ for an open cube).`,
            keyPoint: 'Always count how many faces are actually being painted or covered: Closed = 6 faces; Open top = 5 faces (2(l+b)h + lb); Four walls only = 4 faces (2(l+b)h).'
          },
          {
            subheading: '2.2 Volume, Capacity & Packing Bricks / Cubes',
            body: `**Volume** measures the 3D space occupied by a solid:
$$\\text{Volume of Cuboid} = l \\times b \\times h = \\text{Base Area} \\times \\text{Height} \\qquad \\text{Volume of Cube} = a^3$$
When packing smaller cubes or bricks inside a larger wall or crate (or cutting smaller cubes from a big block), keep two rules in mind:
1. If dimensions divide cleanly, $\\text{Number of items} = \\dfrac{\\text{Volume of Large Solid}}{\\text{Volume of One Small Item}}$.
2. In **open boxes with uniform wall thickness $t$**, outer length and breadth lose $2t$ on the inside ($l_{\\text{in}} = l - 2t$, $b_{\\text{in}} = b - 2t$), whereas height loses **$2t$ ONLY if the box is closed** and **$1t$ if the box is open at the top** ($h_{\\text{in}} = h - t$)!`,
            keyPoint: 'Volume of material in a thick box = Outer Volume − Inner Volume. Check whether the box has a lid (h − 2t) or is open at the top (h − t)!'
          },
          {
            subheading: '2.3 Space Diagonal (Longest Rod in a Room) & Scaling Laws',
            body: `To find the **longest straight rod or bamboo pole** that can fit inside a rectangular room $l \\times b \\times h$, apply Pythagoras theorem twice—first across the rectangular floor to get floor diagonal $\\sqrt{l^2 + b^2}$, then vertically up height $h$:
$$\\text{Space Diagonal of Cuboid} = \\sqrt{l^2 + b^2 + h^2} \\qquad \\text{Space Diagonal of Cube} = \\sqrt{a^2 + a^2 + a^2} = a\\sqrt{3}$$
**Scaling Laws**: If every edge of a cube (or every dimension $l, b, h$ of a cuboid) is multiplied by factor $k$:
- **Surface Area** scales by **$k^2$** (doubling edges makes TSA $2^2 = 4\\times$ larger).
- **Volume** scales by **$k^3$** (doubling edges makes Volume $2^3 = 8\\times$ larger!).`,
            keyPoint: 'Diagonal of a square face = a√2, whereas main 3D space diagonal of a cube = a√3. Do not confuse √2 and √3!'
          }
        ],
        definitions: [
          { term: 'Total Surface Area (TSA)', definition: 'The sum of the areas of all outer faces enclosing a 3D solid.' },
          { term: 'Lateral Surface Area (LSA)', definition: 'The sum of the areas of the vertical side faces only, excluding top and bottom bases.' },
          { term: 'Volume vs Capacity', definition: 'Volume is the 3D space occupied by a solid object; capacity is the inner fluid volume (in Litres or mL) a hollow container can hold.' }
        ],
        formulas: [
          { formula: 'Cuboid TSA = 2(lb + bh + hl) ,  LSA (4 walls) = 2(l + b)h', explanation: 'Measured in square units (cm² or m²).' },
          { formula: 'Cuboid Volume = l × b × h ,  Diagonal = √(l² + b² + h²)', explanation: 'Volume in cubic units; space diagonal gives longest internal rod.' },
          { formula: 'Cube TSA = 6a² ,  LSA = 4a² ,  Volume = a³', explanation: 'Special case of cuboid where l = b = h = a.' },
          { formula: 'Cube Space Diagonal = a√3 ,  Face Diagonal = a√2', explanation: 'Useful when finding cube edge given main diagonal.' }
        ],
        diagram: {
          id: 'diag-mensuration-solids-static',
          title: '3D Mensuration Solids: Cuboid, Cube & Right Circular Cylinder',
          caption: 'Overview of faces, dimensions (l, b, h; edge a; radius r, height h), surface nets, and volume relationships for Class 8 solid geometry.',
          imageUrl: '/diagrams/diagram_mensuration_solids_1794912683975.jpg'
        },
        comparisonTable: {
          caption: 'Cube vs Cuboid Quick Formula Reference',
          headers: ['Measurement', 'Cuboid (l, b, h)', 'Cube (edge a)', 'Units'],
          rows: [
            ['Area of 4 vertical walls (LSA)', '2(l + b)h', '4a²', 'sq. units'],
            ['Open-top container (5 faces)', '2(l + b)h + lb', '5a²', 'sq. units'],
            ['Total Surface Area (6 faces)', '2(lb + bh + hl)', '6a²', 'sq. units'],
            ['Volume', 'l × b × h', 'a³', 'cubic units'],
            ['Main 3D Space Diagonal', '√(l² + b² + h²)', 'a√3', 'linear units']
          ]
        },
        realLifeExample: 'Shipping companies minimise cardboard waste by designing boxes with compact proportions: if you pack 27 identical $10\\text{ cm}$ cubes in a $3 \\times 3 \\times 3$ block ($30\\text{ cm}$ cube), the outer TSA is $6(30^2) = 5,400\\text{ cm}^2$. Stacking the same 27 cubes in a skinny $27 \\times 1 \\times 1$ line ($270 \\times 10 \\times 10\\text{ cm}$) keeps the exact same volume ($27,000\\text{ cm}^3$) yet wastes $11,000\\text{ cm}^2$ of cardboard—more than double!',
        commonMistakes: [
          {
            mistake: 'Subtracting 2×thickness from height on an OPEN-TOP box.',
            correction: 'An open box has a bottom floor of thickness t, but NO lid at the top! So inner height = outer height − t (not − 2t).'
          },
          {
            mistake: 'Multiplying dimensions with mixed units (e.g., length in m, thickness in cm).',
            correction: 'Convert every dimension to the SAME unit (all in cm or all in m) before computing surface area or volume.'
          }
        ]
      },
      {
        id: 'math-mens-t3',
        title: '3. Right Circular Cylinders: CSA, TSA, Road Rollers & Rolled Sheets',
        content: `A **right circular cylinder** is a solid generated by rotating a rectangle about one of its sides—like a tin can, battery cell, or cylindrical concrete pillar—whose circular top and bottom bases are congruent, parallel, and perpendicular to the central axis joining their centres. Understanding the cylinder's unfolded **2D net** makes every formula effortless.`,
        subtopics: [
          {
            subheading: '3.1 Unfolding the Cylinder: Deriving CSA, TSA & Volume',
            body: `Cut a cylindrical soup-can label vertically along its height $h$ and lay it flat. It opens into an exact **rectangle** whose length equals the circle's circumference ($2\\pi r$) and whose breadth equals the cylinder's height ($h$)!
- **Curved Surface Area (CSA / Lateral Surface Area)**:
$$\\text{CSA} = \\text{Circumference} \\times \\text{Height} = 2\\pi r h = \\pi d h$$
- **Total Surface Area (TSA)** adds the two flat circular caps (top + bottom, each $\\pi r^2$):
$$\\text{TSA} = 2\\pi r h + 2\\pi r^2 = 2\\pi r (h + r)$$
- **Open-Top Cylinder (Bucket / Open Drum)**: Only 1 circular base plus curved wall $\\implies \\text{Area} = 2\\pi r h + \\pi r^2 = \\pi r (2h + r)$.
- **Volume** equals base area stacked vertically to height $h$:
$$\\text{Volume} = \\text{Area of Circular Base} \\times \\text{Height} = \\pi r^2 h$$`,
            keyPoint: 'Think of Volume as stacking thin circular coins of area πr² up to height h: Volume = πr²h. Think of CSA as unrolling the curved label into a rectangle: 2πrh.'
          },
          {
            subheading: '3.2 Road Rollers & Cylindrical Pillar Painting',
            body: `In one full rotation along a flat playground, a cylindrical **road roller** presses an area equal to its **Curved Surface Area ($2\\pi rh$)**—the flat circular end caps never touch the ground! Therefore:
$$\\text{Area levelled in } N \\text{ revolutions} = N \\times 2\\pi r h$$
Watch out for **mixed units**: road roller diameters are frequently given in centimetres (e.g. $d = 84\\text{ cm} \\Rightarrow r = 0.42\\text{ m}$) while length is in metres ($h = 1\\text{ m}$ or $1.5\\text{ m}$). Convert radius to metres before multiplying! Similarly, cylindrical pillars only have their **CSA** painted (top touches ceiling, bottom touches floor).`,
            keyPoint: 'Road rollers, cylindrical pillars, and chimney exteriors ONLY use Curved Surface Area (2πrh), never Total Surface Area.'
          },
          {
            subheading: '3.3 Rolling a Rectangular Sheet Two Different Ways',
            body: `Take a rectangular paper sheet of length $L$ and breadth $B$:
- **Case A (Rolled along Length $L$)**: Circumference $2\\pi r_1 = L \\implies r_1 = \\frac{L}{2\\pi}$, and height $h_1 = B$.
- **Case B (Rolled along Breadth $B$)**: Circumference $2\\pi r_2 = B \\implies r_2 = \\frac{B}{2\\pi}$, and height $h_2 = L$.
Notice an insightful ICSE property: **Both cylinders have the EXACT same CSA ($= L \\times B$)**, because the paper's area hasn't changed! However, their **volumes are DIFFERENT**—since radius is *squared* in $\\pi r^2 h$, the wider cylinder rolled along the longer edge ($L$) always holds **greater volume** (ratio $V_1 : V_2 = L : B$)!`,
            keyPoint: 'Rolling a sheet along its longer side gives larger radius and therefore GREATER volume than rolling along its shorter side, even though CSA stays identical!'
          }
        ],
        definitions: [
          { term: 'Right Circular Cylinder', definition: 'A 3D solid with two congruent parallel circular bases whose central axis stands perpendicular (90°) to the bases.' },
          { term: 'Curved Surface Area (CSA)', definition: 'The area of the smooth side wall of a cylinder excluding its flat circular top and bottom caps.' }
        ],
        formulas: [
          { formula: 'CSA of Cylinder = 2πrh = πdh', explanation: 'Unfolded label forms a rectangle of width 2πr and height h.', unit: 'sq. units' },
          { formula: 'TSA of Closed Cylinder = 2πr(r + h)', explanation: 'CSA (2πrh) + two circular caps (2πr²).', unit: 'sq. units' },
          { formula: 'Open-Top Cylinder Area = πr(2h + r)', explanation: 'CSA (2πrh) + one bottom circular base (πr²).', unit: 'sq. units' },
          { formula: 'Volume of Cylinder = πr²h', explanation: 'Circular base area πr² multiplied by height h.', unit: 'cubic units' }
        ],
        diagram: {
          id: 'diag-mensuration-cylinder-net',
          title: 'Right Circular Cylinder & Its Unfolded 2D Surface Net',
          caption: 'A cylinder unrolls into one central rectangle (length 2πr, height h) plus two circular bases (area πr² each), visually explaining CSA = 2πrh and TSA = 2πr(r + h).',
          svgFigure: 'mensuration_3d_solids'
        },
        comparisonTable: {
          caption: 'Right Circular Cylinder: Closed vs Open vs Rolled Sheet',
          headers: ['Scenario', 'Relevant Surface Formula', 'Volume Formula'],
          rows: [
            ['Closed drum / gas cylinder', 'TSA = 2πr(r + h)', 'πr²h'],
            ['Open bucket / open storage tank', 'πr(2h + r) = 2πrh + πr²', 'πr²h'],
            ['Road roller / pillar / open-ended tube (CSA)', '2πrh', 'πr²h (for solid pillar)'],
            ['Sheet L × B rolled along L', 'CSA = L × B', 'π(L/2π)² × B = L²B / (4π)']
          ]
        },
        realLifeExample: 'Beverage manufacturers design aluminium soda cans as right circular cylinders rather than cubes because cylinders distribute internal gas pressure evenly without weak corners and maximise enclosed millilitre capacity per square centimetre of aluminium sheet!',
        commonMistakes: [
          {
            mistake: 'Using TSA = 2πr(r + h) for a road roller or open water bucket.',
            correction: 'A road roller uses ONLY CSA (2πrh); an open bucket has only ONE circular base so use 2πrh + πr².'
          },
          {
            mistake: 'Thinking that doubling radius and halving height keeps a cylinder’s volume unchanged.',
            correction: 'Because radius is SQUARED in πr²h, doubling r multiplies r² by 4, while halving h divides by 2—so Volume actually DOUBLES!'
          }
        ]
      },
      {
        id: 'math-mens-t4',
        title: '4. Hollow Cylinders, Volume Conservation & Capacity Conversions',
        content: `Real pipes, steel shafts, hollow concrete pillars, and dug-out wells are rarely solid cylinders—they have an inner bore of radius $r$ and an outer wall of radius $R$. Moreover, high-scoring ICSE problems test **Conservation of Volume** (when solids are melted, recast, or water flows through pipes into tanks) and **Capacity Conversions** between cubic lengths and Litres.`,
        subtopics: [
          {
            subheading: '4.1 Hollow Cylinders & Pipes (Thickness, Metal Volume & TSA)',
            body: `Let a hollow pipe of length (height) $h$ have outer radius $R$ and inner radius $r$ ($R > r$). Its wall **thickness** is $t = R - r$ (so $R = r + t$ or $r = R - t$; watch carefully whether diameters $D, d$ or radii $R, r$ are given!).
- **Area of circular ring cross-section (each end rim)** $= \\pi(R^2 - r^2) = \\pi(R + r)(R - r)$.
- **Volume of metal/material in the pipe**:
$$V = \\pi R^2 h - \\pi r^2 h = \\pi(R^2 - r^2)h = \\pi(R + r)(R - r)h$$
- **Mass of pipe** $= \\text{Volume of metal} \\times \\text{Density}$ (e.g., if $1\\text{ cm}^3$ weighs $8\\text{ g}$, divide grams by $1,000$ to express mass in $\\text{kg}$).
- **Total Surface Area of open-ended hollow pipe** = Outer CSA ($2\\pi Rh$) + Inner CSA ($2\\pi rh$) + Two end rings ($2\\pi(R^2 - r^2)$):
$$\\text{TSA} = 2\\pi(R + r)h + 2\\pi(R + r)(R - r) = 2\\pi(R + r)(h + R - r)$$`,
            keyPoint: 'To get inner radius from outer diameter D and wall thickness t: FIRST divide D by 2 to get outer radius R, THEN subtract thickness t ONCE (r = R − t). Never subtract 2t from a radius!'
          },
          {
            subheading: '4.2 Conservation of Volume: Melting, Recasting & Digging Wells',
            body: `Whenever clay, wax, or molten metal is melted and recast into new shapes without wastage, **Total Volume stays constant**:
- **Melting & Recasting**: $\\text{Volume of original solid} = n \\times \\text{Volume of each new solid}$.
- **Well Dug & Embankment / Platform**: Earth dug out of a cylindrical well of radius $r$ and depth $H$ has volume $\\pi r^2 H$.
  - If spread over a **rectangular plot** $L \\times B$, height $h_{\\text{plot}} = \\dfrac{\\pi r^2 H}{L \\times B}$.
  - If spread uniformly *around the well* as a circular **embankment ring** of width $w$ (so outer radius $R = r + w$), the embankment is a hollow cylinder of volume $\\pi(R^2 - r^2)h_{\\text{emb}} = \\pi r^2 H$.`,
            keyPoint: 'In earth-spreading problems, equate Volume of Well (πr²H) directly to the Volume of Earth Spread (Base Area × Rise in Height).'
          },
          {
            subheading: '4.3 Water Flow Through Cylindrical Pipes',
            body: `Suppose water flows through a cylindrical pipe of inner radius $r$ at speed $v$ (e.g., $3\\text{ km/h}$ or $2\\text{ m/s}$). Imagine the column of water exiting the pipe in $1$ unit of time: it forms a long cylinder of radius $r$ and length equal to speed $v$!
$$\\text{Volume flowing per unit time} = \\text{Cross-sectional Area} \\times \\text{Speed} = \\pi r^2 \\times v$$
To find time $t$ required to fill or raise a tank by height $h_{\\text{tank}}$: convert speed and pipe radius to **metres** (e.g. $3\\text{ km/h} = 3,000\\text{ m/h}$, $14\\text{ cm diameter} \\Rightarrow r = 0.07\\text{ m}$) and solve:
$$(\\pi r^2 v) \\times t = \\text{Target Volume in Tank}$$`,
            keyPoint: 'Speed acts as the "height/length" of the flowing water cylinder! Convert km/h to m/h (× 1,000) or m/min (× 1,000 ÷ 60) first.'
          },
          {
            subheading: '4.4 Master Capacity & Volume Unit Conversions',
            body: `Because $1\\text{ Litre}$ is defined as the volume of a $10\\text{ cm} \\times 10\\text{ cm} \\times 10\\text{ cm}$ cube:
- $1\\text{ cm}^3 = 1\\text{ mL}$ (millilitre)
- $1,000\\text{ cm}^3 = 1\\text{ Litre (L)}$
- $1\\text{ m}^3 = 100\\text{ cm} \\times 100\\text{ cm} \\times 100\\text{ cm} = 1,000,000\\text{ cm}^3 = 1,000\\text{ Litres} = 1\\text{ kilolitre (kL)}$
So to convert **$\\text{m}^3 \\to \\text{Litres}$**, multiply by **$1,000$**; to convert **$\\text{cm}^3 \\to \\text{Litres}$**, divide by **$1,000$**!`,
            keyPoint: '1 m³ holds 1,000 Litres, whereas 1,000 cm³ makes just 1 Litre. Remember: 1 cm³ = 1 mL!'
          }
        ],
        definitions: [
          { term: 'Hollow Cylinder', definition: 'A cylindrical tube bounded between two concentric cylindrical walls of outer radius R and inner radius r.' },
          { term: 'Embankment', definition: 'A raised circular ring platform built around a dug well using the excavated earth.' },
          { term: 'Kilolitre (kL)', definition: 'A capacity unit equal to 1,000 Litres, identically equal to 1 cubic metre (1 m³).' }
        ],
        formulas: [
          { formula: 'Hollow Cylinder Material Volume = π(R² − r²)h = π(R + r)(R − r)h', explanation: 'Also equals Cross-sectional ring area × height.', unit: 'cubic units' },
          { formula: 'Hollow Cylinder TSA = 2π(R + r)h + 2π(R² − r²)', explanation: 'Outer CSA + Inner CSA + Top ring + Bottom ring.', unit: 'sq. units' },
          { formula: 'Pipe Flow Volume in time t = (πr² × speed) × t', explanation: 'Ensure radius, speed distance unit, and tank unit all match.' },
          { formula: '1 m³ = 1,000 Litres  |  1,000 cm³ = 1 Litre  |  1 cm³ = 1 mL', explanation: 'Standard capacity conversions for tanks and vessels.' }
        ],
        comparisonTable: {
          caption: 'Solid Volume & Capacity Conversion Matrix',
          headers: ['Conversion Direction', 'Operation', 'Quick Example'],
          rows: [
            ['m³ → Litres', 'Multiply by 1,000', '4.5 m³ = 4,500 L'],
            ['Litres → m³', 'Divide by 1,000', '12,000 L = 12 m³'],
            ['cm³ → Litres', 'Divide by 1,000', '3,500 cm³ = 3.5 L'],
            ['cm³ → mL', 'Equal (1 : 1)', '648 cm³ = 648 mL'],
            ['m³ → cm³', 'Multiply by 1,000,000 (10⁶)', '0.25 m³ = 250,000 cm³']
          ]
        },
        realLifeExample: 'Civil engineers calculate how fast a rooftop rainwater harvesting tank fills during a monsoon shower by treating each downpipe as a flowing cylinder: knowing the pipe radius ($5\\text{ cm}$) and average water speed gives the exact litres per minute entering a $5,000\\text{ L}$ underground sump.',
        commonMistakes: [
          {
            mistake: 'Writing Hollow Cylinder volume as π(R − r)²h instead of π(R² − r²)h.',
            correction: '(R − r)² is NOT equal to R² − r²! Subtract the SQUARES first: π(R² − r²)h = π(R + r)(R − r)h.'
          },
          {
            mistake: 'Multiplying 1 m³ by 100 instead of 1,000,000 when converting to cm³.',
            correction: 'Since 1 m = 100 cm, 1 m³ = 100 × 100 × 100 = 1,000,000 cm³ = 1,000 Litres.'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Mensuration', category: 'General', definition: 'Branch of mathematics dealing with measurement of lengths, perimeters, surface areas, and volumes of geometric figures.' },
      { term: 'Circumference', category: '2D Circles', definition: 'Total boundary length of a circle, equal to 2πr or πd.' },
      { term: 'Annulus (Circular Ring)', category: '2D Circles', definition: 'Flat ring between two concentric circles; area = π(R + r)(R − r).' },
      { term: 'Lateral Surface Area (LSA)', category: '3D Solids', definition: 'Total area of the side/vertical faces only, excluding top and bottom bases.' },
      { term: 'Total Surface Area (TSA)', category: '3D Solids', definition: 'Complete outer area covering every face and base of a 3D solid.' },
      { term: 'Space Diagonal', category: 'Cuboid / Cube', definition: 'Longest straight line segment connecting opposite corners through the interior: √(l² + b² + h²) or a√3.' },
      { term: 'Right Circular Cylinder', category: 'Cylinders', definition: 'Solid with parallel circular bases joined by an axis perpendicular to the bases.' },
      { term: 'Curved Surface Area (CSA)', category: 'Cylinders', definition: 'Area of the curved side wall of a cylinder (2πrh), equal to the unfolded rectangle.' },
      { term: 'Hollow Cylinder', category: 'Cylinders', definition: 'Pipe-shaped solid bounded by outer radius R and inner radius r; material volume = π(R² − r²)h.' },
      { term: 'Capacity', category: 'Units', definition: 'Internal volume of fluid a hollow vessel can hold, commonly measured in Litres (1 m³ = 1,000 L).' }
    ],
    formulaSheet: [
      { title: 'Circle & Semicircle', expression: 'C = 2πr ;  A = πr² ;  Semicircle P = πr + 2r', meaning: 'Take π = 22/7 unless stated otherwise' },
      { title: 'Circular Ring / Track', expression: 'A = π(R² − r²) = π(R + r)(R − r)', meaning: 'Width of track w = R − r' },
      { title: 'Cuboid Surface & Volume', expression: 'LSA = 2(l + b)h ;  TSA = 2(lb + bh + hl) ;  V = lbh', meaning: '4 walls + ceiling = 2(l + b)h + lb' },
      { title: 'Cuboid Space Diagonal', expression: 'd = √(l² + b² + h²)', meaning: 'Longest rod that fits inside a room' },
      { title: 'Cube Surface, Volume & Diagonal', expression: 'LSA = 4a² ;  TSA = 6a² ;  V = a³ ;  d = a√3', meaning: 'Cube of edge length a' },
      { title: 'Cylinder CSA & TSA', expression: 'CSA = 2πrh ;  TSA = 2πr(r + h)', meaning: 'Open-top cylinder = 2πrh + πr²' },
      { title: 'Cylinder Volume', expression: 'V = πr²h', meaning: 'Circular base area × height' },
      { title: 'Hollow Cylinder Volume', expression: 'V = π(R + r)(R − r)h', meaning: 'Wall thickness t = R − r' },
      { title: 'Hollow Cylinder TSA', expression: 'TSA = 2π(R + r)(h + R − r)', meaning: 'Outer CSA + Inner CSA + 2 ring ends' },
      { title: 'Capacity & Volume Conversions', expression: '1 m³ = 1,000 L ;  1,000 cm³ = 1 L ;  1 cm³ = 1 mL', meaning: 'Essential for tank and flow-rate questions' }
    ],
    comparisonTables: [
      {
        title: 'Solid Mensuration Master Comparison: Cube, Cuboid, Solid Cylinder & Hollow Cylinder',
        headers: ['Solid Figure', 'Lateral / Curved Surface Area', 'Total Surface Area', 'Volume'],
        rows: [
          ['Cube (edge a)', '4a²', '6a²', 'a³'],
          ['Cuboid (l, b, h)', '2(l + b)h', '2(lb + bh + hl)', 'l × b × h'],
          ['Solid Cylinder (r, h)', '2πrh', '2πr(r + h)', 'πr²h'],
          ['Hollow Cylinder (R, r, h)', 'Outer: 2πRh ; Inner: 2πrh', '2π(R + r)(h + R − r)', 'π(R² − r²)h']
        ]
      }
    ],
    solvedExamples: [
      {
        id: 'mens-se1',
        question: 'A copper wire, when bent into the shape of a square, encloses an area of 484 cm². If the same wire is straightened and bent into the form of a circle, find the radius and area of the circle. (Take π = 22/7)',
        steps: [
          'Area of the square = side² = 484 cm² ⇒ side a = √484 = 22 cm.',
          'Length of wire = Perimeter of square = 4 × 22 = 88 cm.',
          'When bent into a circle, Circumference = length of wire = 88 cm.',
          '2 × (22/7) × r = 88 ⇒ (44/7) × r = 88 ⇒ r = (88 × 7) / 44 = 14 cm.',
          'Area of circle = πr² = (22/7) × 14 × 14 = 22 × 2 × 14 = 616 cm².'
        ],
        finalAnswer: 'Radius = 14 cm; Area = 616 cm²',
        keyRule: 'Rebending a wire preserves Perimeter (Circumference), and a circle always encloses more area than a square of equal perimeter.'
      },
      {
        id: 'mens-se2',
        question: 'A circular park of radius 21 m has a uniform running path of width 3.5 m built all around its outside. Find the area of the path and the cost of paving it at ₹120 per m². (Take π = 22/7)',
        steps: [
          'Inner radius r = 21 m; width w = 3.5 m.',
          'Outer radius R = 21 + 3.5 = 24.5 m.',
          'Area of circular path = π(R² − r²) = π(R + r)(R − r)',
          '= (22/7) × (24.5 + 21) × (24.5 − 21) = (22/7) × 45.5 × 3.5.',
          'Since 3.5 / 7 = 0.5 and 22 × 0.5 = 11: Area = 11 × 45.5 = 500.5 m².',
          'Cost of paving = 500.5 × ₹120 = ₹60,060.'
        ],
        finalAnswer: 'Area of path = 500.5 m²; Cost = ₹60,060',
        keyRule: 'Factor π(R² − r²) into π(R + r)(R − r) to avoid squaring decimals.'
      },
      {
        id: 'mens-se3',
        question: 'A lecture hall is 12 m long, 9 m wide, and 8 m high. Find: (a) the cost of whitewashing its four walls and ceiling at ₹25 per m², and (b) the length of the longest straight pole that can be placed inside it.',
        steps: [
          'Here l = 12 m, b = 9 m, h = 8 m.',
          '(a) Area of four walls = 2(l + b)h = 2(12 + 9) × 8 = 2 × 21 × 8 = 336 m².',
          'Area of ceiling = l × b = 12 × 9 = 108 m².',
          'Total area to whitewash = 336 + 108 = 444 m².',
          'Cost of whitewashing = 444 × ₹25 = ₹11,100.',
          '(b) Longest straight pole = Space Diagonal = √(l² + b² + h²) = √(12² + 9² + 8²) = √(144 + 81 + 64) = √289 = 17 m.'
        ],
        finalAnswer: '(a) Cost = ₹11,100; (b) Longest pole = 17 m',
        keyRule: 'Four walls + ceiling = 2(l + b)h + lb; longest rod = √(l² + b² + h²).'
      },
      {
        id: 'mens-se4',
        question: 'Three solid cubes, each of edge 6 cm, are placed side by side in a row to form a cuboid. Find the total surface area and volume of the resulting cuboid, and express its volume in millilitres.',
        steps: [
          'Joining 3 cubes of edge 6 cm end-to-end creates a cuboid with l = 6 + 6 + 6 = 18 cm, b = 6 cm, and h = 6 cm.',
          'TSA = 2(lb + bh + hl) = 2(18 × 6 + 6 × 6 + 6 × 18)',
          '= 2(108 + 36 + 108) = 2(252) = 504 cm².',
          'Volume = l × b × h = 18 × 6 × 6 = 648 cm³.',
          'Since 1 cm³ = 1 mL, the volume equals 648 mL.'
        ],
        finalAnswer: 'TSA = 504 cm²; Volume = 648 cm³ (648 mL)',
        keyRule: 'Joining cubes end-to-end triples only ONE dimension (length), hiding 4 inner square faces from the surface area.'
      },
      {
        id: 'mens-se5',
        question: 'A cylindrical road roller has a diameter of 84 cm and a length of 1 m. It takes 750 complete revolutions to move once over a playground to level it. Find the area of the playground in m². (Take π = 22/7)',
        steps: [
          'Convert diameter to metres: d = 84 cm = 0.84 m ⇒ radius r = 0.42 m; length h = 1 m.',
          'Area levelled in 1 revolution = CSA of roller = 2πrh',
          '= 2 × (22/7) × 0.42 × 1 = 2 × 22 × 0.06 = 2.64 m².',
          'Area levelled in 750 revolutions = 750 × 2.64 = 1,980 m².'
        ],
        finalAnswer: '1,980 m²',
        keyRule: 'Always convert cm to m first, and multiply CSA (2πrh) by total revolutions.'
      },
      {
        id: 'mens-se6',
        question: 'A rectangular sheet of paper measuring 44 cm × 18 cm is rolled along its length (44 cm) to form a hollow right circular cylinder of height 18 cm. Find the base radius, curved surface area, and volume of the cylinder. (Take π = 22/7)',
        steps: [
          'When rolled along its 44 cm edge, the length becomes the base circumference: 2πr = 44 cm, and height h = 18 cm.',
          '2 × (22/7) × r = 44 ⇒ (44/7) × r = 44 ⇒ r = 7 cm.',
          'Curved Surface Area = 2πrh = 44 × 18 = 792 cm² (identical to the sheet area!).',
          'Volume = πr²h = (22/7) × 7 × 7 × 18 = 22 × 7 × 18 = 154 × 18 = 2,772 cm³.'
        ],
        finalAnswer: 'Radius = 7 cm; CSA = 792 cm²; Volume = 2,772 cm³',
        keyRule: 'Rolling along an edge turns that edge directly into the circumference 2πr of the circular base.'
      },
      {
        id: 'mens-se7',
        question: 'A hollow iron cylindrical pipe is 35 cm long. Its outer diameter is 12 cm and the thickness of the iron is 1 cm. Find the volume of iron in the pipe and its total mass if 1 cm³ of iron weighs 8 g. (Give mass in kg; π = 22/7)',
        steps: [
          'Outer diameter D = 12 cm ⇒ outer radius R = 12 ÷ 2 = 6 cm.',
          'Thickness t = 1 cm ⇒ inner radius r = R − t = 6 − 1 = 5 cm.',
          'Length (height) h = 35 cm.',
          'Volume of iron = π(R² − r²)h = (22/7) × (6² − 5²) × 35',
          '= 22 × (36 − 25) × 5 = 22 × 11 × 5 = 1,210 cm³.',
          'Total mass = 1,210 × 8 g = 9,680 g = 9,680 ÷ 1,000 = 9.68 kg.'
        ],
        finalAnswer: 'Volume = 1,210 cm³; Mass = 9.68 kg',
        keyRule: 'Compute R = D/2 first, subtract thickness once to get r = R − t, then use π(R² − r²)h.'
      },
      {
        id: 'mens-se8',
        question: 'A cylindrical well of diameter 7 m is dug 20 m deep. The earth dug out is spread evenly to form a rectangular platform 22 m long and 14 m wide. Calculate the height of the platform. (Take π = 22/7)',
        steps: [
          'Radius of cylindrical well r = 7 ÷ 2 = 3.5 m; depth H = 20 m.',
          'Volume of earth dug out = πr²H = (22/7) × (7/2) × (7/2) × 20',
          '= 11 × 7 × 10 = 770 m³.',
          'This volume forms a cuboidal platform with length 22 m, breadth 14 m, and unknown height h:',
          '22 × 14 × h = 770 ⇒ 308 × h = 770 ⇒ h = 770 ÷ 308 = 10 ÷ 4 = 2.5 m.'
        ],
        finalAnswer: '2.5 m',
        keyRule: 'Volume Conservation: Volume of earth dug from well = Volume of rectangular platform created.'
      }
    ],
    gradedQuestions: {
      easy: [
        {
          id: 'mens-e1',
          question: 'Find the circumference and area of a circle of radius 10.5 cm. (Take π = 22/7)',
          solutionSteps: [
            'Circumference = 2πr = 2 × (22/7) × 10.5 = 2 × 22 × 1.5 = 66 cm.',
            'Area = πr² = (22/7) × 10.5 × 10.5 = 22 × 1.5 × 10.5 = 33 × 10.5 = 346.5 cm².'
          ],
          finalAnswer: 'Circumference = 66 cm; Area = 346.5 cm²',
          marks: 2
        },
        {
          id: 'mens-e2',
          question: 'Calculate the total surface area and volume of a solid cube whose edge is 8 cm.',
          solutionSteps: [
            'TSA = 6a² = 6 × 8² = 6 × 64 = 384 cm².',
            'Volume = a³ = 8³ = 8 × 8 × 8 = 512 cm³.'
          ],
          finalAnswer: 'TSA = 384 cm²; Volume = 512 cm³',
          marks: 2
        },
        {
          id: 'mens-e3',
          question: 'Find the curved surface area and volume of a right circular cylinder of radius 7 cm and height 15 cm. (Take π = 22/7)',
          solutionSteps: [
            'CSA = 2πrh = 2 × (22/7) × 7 × 15 = 44 × 15 = 660 cm².',
            'Volume = πr²h = (22/7) × 7 × 7 × 15 = 154 × 15 = 2,310 cm³.'
          ],
          finalAnswer: 'CSA = 660 cm²; Volume = 2,310 cm³',
          marks: 2
        },
        {
          id: 'mens-e4',
          question: 'A cuboidal water tank is 4 m long, 3 m wide, and 2.5 m deep. How many litres of water can it store when completely full?',
          solutionSteps: [
            'Volume of tank = l × b × h = 4 × 3 × 2.5 = 30 m³.',
            'Since 1 m³ = 1,000 Litres, Capacity = 30 × 1,000 = 30,000 Litres.'
          ],
          finalAnswer: '30,000 Litres',
          marks: 2
        }
      ],
      medium: [
        {
          id: 'mens-m1',
          question: 'Find the perimeter and area of a semicircular protractor whose diameter is 14 cm. (Take π = 22/7)',
          solutionSteps: [
            'Radius r = 14 ÷ 2 = 7 cm.',
            'Perimeter of semicircle = πr + 2r = (22/7 × 7) + (2 × 7) = 22 + 14 = 36 cm.',
            'Area of semicircle = ½ πr² = ½ × (22/7) × 7 × 7 = 11 × 7 = 77 cm².'
          ],
          finalAnswer: 'Perimeter = 36 cm; Area = 77 cm²',
          marks: 3
        },
        {
          id: 'mens-m2',
          question: 'How many bricks each measuring 25 cm × 12.5 cm × 7.5 cm are required to build a solid wall 10 m long, 3 m high, and 50 cm thick?',
          solutionSteps: [
            'Convert wall dimensions to cm: Length = 10 × 100 = 1,000 cm; Height = 3 × 100 = 300 cm; Thickness = 50 cm.',
            'Number of bricks = (Volume of Wall) ÷ (Volume of 1 Brick)',
            '= (1,000 × 300 × 50) ÷ (25 × 12.5 × 7.5)',
            '= (1,000 / 25) × (300 / 7.5) × (50 / 12.5) = 40 × 40 × 4 = 6,400 bricks.'
          ],
          finalAnswer: '6,400 bricks',
          marks: 3
        },
        {
          id: 'mens-m3',
          question: 'The curved surface area of a right circular cylinder of height 20 cm is 880 cm². Find its base radius, total surface area, and volume. (Take π = 22/7)',
          solutionSteps: [
            'CSA = 2πrh ⇒ 2 × (22/7) × r × 20 = 880.',
            '(880 / 7) × r = 880 ⇒ r = 7 cm.',
            'TSA = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 20) = 44 × 27 = 1,188 cm².',
            'Volume = πr²h = (22/7) × 7 × 7 × 20 = 154 × 20 = 3,080 cm³.'
          ],
          finalAnswer: 'r = 7 cm; TSA = 1,188 cm²; Volume = 3,080 cm³',
          marks: 3
        },
        {
          id: 'mens-m4',
          question: 'A cylindrical pillar has a diameter of 50 cm and a height of 3.5 m. Find the cost of painting its curved surface at the rate of ₹20 per m². (Take π = 22/7)',
          solutionSteps: [
            'Diameter d = 50 cm = 0.5 m ⇒ radius r = 0.25 m; height h = 3.5 m.',
            'CSA = 2πrh = 2 × (22/7) × 0.25 × 3.5.',
            'Simplify 3.5 / 7 = 0.5 and 2 × 0.5 = 1: CSA = 22 × 0.25 = 5.5 m².',
            'Cost of painting = 5.5 × ₹20 = ₹110.'
          ],
          finalAnswer: '₹110',
          marks: 3
        }
      ],
      difficult: [
        {
          id: 'mens-d1',
          question: 'Water is flowing at the rate of 3 km/h through a cylindrical pipe of diameter 14 cm into a rectangular tank 50 m long and 44 m wide. In how many hours will the level of water in the tank rise by 21 cm? (Take π = 22/7)',
          solutionSteps: [
            'Convert all dimensions to metres: Pipe diameter = 14 cm = 0.14 m ⇒ pipe radius r = 0.07 m.',
            'Speed of flowing water = 3 km/h = 3,000 m/h.',
            'Volume of water flowing per hour = πr² × speed = (22/7) × 0.07 × 0.07 × 3,000',
            '= 22 × 0.01 × 0.07 × 3,000 = 22 × 2.1 = 46.2 m³/hour.',
            'Target water rise in tank = 21 cm = 0.21 m.',
            'Required volume in tank = 50 × 44 × 0.21 = 2,200 × 0.21 = 462 m³.',
            'Time required = Required Volume ÷ Hourly Flow = 462 ÷ 46.2 = 10 hours.'
          ],
          finalAnswer: '10 hours',
          marks: 5
        },
        {
          id: 'mens-d2',
          question: 'An open rectangular wooden box (without a lid) has external dimensions 36 cm × 25 cm × 16.5 cm. If the wood is 1.5 cm thick throughout, find the volume of wood used in making the box.',
          solutionSteps: [
            'Outer dimensions: L = 36 cm, B = 25 cm, H = 16.5 cm.',
            'Outer volume = 36 × 25 × 16.5 = 900 × 16.5 = 14,850 cm³.',
            'Because the box is OPEN at the top: inner length = 36 − 2(1.5) = 33 cm; inner breadth = 25 − 2(1.5) = 22 cm; inner height = 16.5 − 1.5 = 15 cm (subtract thickness only once!).',
            'Inner volume = 33 × 22 × 15 = 726 × 15 = 10,890 cm³.',
            'Volume of wood = Outer Volume − Inner Volume = 14,850 − 10,890 = 3,960 cm³.'
          ],
          finalAnswer: '3,960 cm³',
          marks: 4
        },
        {
          id: 'mens-d3',
          question: 'A cylindrical bucket 28 cm in diameter and 72 cm high is full of water. The entire water is emptied into a rectangular tank 66 cm long and 28 cm wide. Find the height of the water level in the tank. (Take π = 22/7)',
          solutionSteps: [
            'Radius of bucket r = 28 ÷ 2 = 14 cm; height H = 72 cm.',
            'Volume of water in bucket = πr²H = (22/7) × 14 × 14 × 72 = 44 × 14 × 72 cm³.',
            'Let h be the height of water in the rectangular tank (66 cm × 28 cm):',
            '66 × 28 × h = 44 × 14 × 72.',
            'h = (44 × 14 × 72) ÷ (66 × 28) = (2/3) × (1/2) × 72 = 72 ÷ 3 = 24 cm.'
          ],
          finalAnswer: '24 cm',
          marks: 4
        },
        {
          id: 'mens-d4',
          question: 'The difference between the outer and inner curved surface areas of a hollow right circular cylinder 14 cm long is 88 cm². If the volume of metal used in making the cylinder is 176 cm³, find the outer and inner diameters of the cylinder. (Take π = 22/7)',
          solutionSteps: [
            'Let outer radius = R cm and inner radius = r cm; given h = 14 cm.',
            'Outer CSA − Inner CSA = 2πRh − 2πrh = 2π(R − r)h = 88.',
            '2 × (22/7) × (R − r) × 14 = 88 ⇒ 88(R − r) = 88 ⇒ R − r = 1 cm ... (Equation 1).',
            'Volume of metal = π(R² − r²)h = (22/7)(R + r)(R − r) × 14 = 176.',
            'Substitute R − r = 1: 44(R + r)(1) = 176 ⇒ R + r = 176 ÷ 44 = 4 cm ... (Equation 2).',
            'Add Equations (1) and (2): 2R = 5 ⇒ R = 2.5 cm, and r = 4 − 2.5 = 1.5 cm.',
            'Outer diameter = 2 × 2.5 = 5 cm; Inner diameter = 2 × 1.5 = 3 cm.'
          ],
          finalAnswer: 'Outer diameter = 5 cm; Inner diameter = 3 cm',
          marks: 5
        }
      ]
    },
    examPreparationTips: [
      'Always cancel the factor 7 in π = 22/7 early in the fraction line BEFORE multiplying large numbers—this cuts arithmetic effort by 80%.',
      'For volume transfer or brick-counting questions, keep numerator and denominator in factored multiplication form (e.g. (44 × 14 × 72) / (66 × 28)) and cancel common factors instead of multiplying out giant products.',
      'In every word problem, underline the exact object shape and check whether it is CLOSED (all bases included), OPEN AT TOP (1 base), or HOLLOW TUBE (0 flat bases).',
      'Write units explicitly on every final answer: cm or m for lengths, cm² or m² for areas, cm³ or m³ for volumes, and Litres/mL for capacities.'
    ],
    chapterSummary: [
      'Circle: C = 2πr, Area = πr²; Semicircle Perimeter = πr + 2r; Concentric Ring Area = π(R + r)(R − r).',
      'Cuboid: LSA (4 walls) = 2(l + b)h, TSA = 2(lb + bh + hl), Volume = lbh, Space Diagonal = √(l² + b² + h²).',
      'Cube: LSA = 4a², TSA = 6a², Volume = a³, Face Diagonal = a√2, Space Diagonal = a√3.',
      'Right Circular Cylinder: CSA = 2πrh, TSA = 2πr(r + h), Open-Top = 2πrh + πr², Volume = πr²h.',
      'Hollow Cylinder: Material Volume = π(R² − r²)h; TSA = 2π(R + r)h + 2π(R² − r²).',
      'Capacity conversions: 1 cm³ = 1 mL; 1,000 cm³ = 1 Litre; 1 m³ = 1,000 Litres = 1 kL.'
    ],
    importantQuestionsAndAnswers: [
      {
        type: 'Short Answer',
        question: 'The perimeter of a semicircular park is 108 m. Find its radius and area. (Take π = 22/7)',
        answer: 'Perimeter of semicircle = r(π + 2) = r(22/7 + 2) = (36/7)r. Given (36/7)r = 108 ⇒ r = (108 × 7)/36 = 3 × 7 = 21 m. Area = ½ πr² = ½ × (22/7) × 21 × 21 = 11 × 3 × 21 = 693 m².'
      },
      {
        type: 'Short Answer',
        question: 'The volume of a solid cube is 343 cm³. Find its edge length and total surface area.',
        answer: 'Volume a³ = 343 = 7³ ⇒ edge a = 7 cm. Total Surface Area = 6a² = 6 × 7² = 6 × 49 = 294 cm².'
      },
      {
        type: 'Short Answer',
        question: 'Two cylinders have their radii in the ratio 2 : 3 and their heights in the ratio 5 : 3. Find the ratio of their volumes and the ratio of their curved surface areas.',
        answer: 'Ratio of Volumes V₁ : V₂ = (π r₁² h₁) : (π r₂² h₂) = (2² × 5) : (3² × 3) = 20 : 27. Ratio of CSAs C₁ : C₂ = (2π r₁ h₁) : (2π r₂ h₂) = (2 × 5) : (3 × 3) = 10 : 9.'
      },
      {
        type: 'Short Answer',
        question: 'How many cubic metres of earth must be dug out to sink a cylindrical well 14 m deep and having inner diameter 4 m? (π = 22/7)',
        answer: 'Radius r = 4 ÷ 2 = 2 m; depth h = 14 m. Volume of earth = πr²h = (22/7) × 2 × 2 × 14 = 22 × 4 × 2 = 176 m³.'
      },
      {
        type: 'Reasoning',
        question: 'If every edge of a cube is doubled, by what factor do its Total Surface Area and Volume increase? Justify algebraically.',
        answer: 'Let original edge be a, so original TSA = 6a² and Volume = a³. When doubled, new edge = 2a. New TSA = 6(2a)² = 6(4a²) = 4 × (6a²), so TSA increases 4 times (becomes 400%, an increase of 300%). New Volume = (2a)³ = 8a³, so Volume increases 8 times (becomes 800%, an increase of 700%).'
      },
      {
        type: 'Long Answer',
        question: 'A closed rectangular wooden box has outer dimensions 16 cm × 12 cm × 8 cm, and the wood is 1 cm thick all around. Find the inner capacity of the box in cm³ and the volume of wood used.',
        answer: 'Outer Volume = 16 × 12 × 8 = 1,536 cm³. Since the box is CLOSED on all sides with 1 cm thickness, subtract 2(1) = 2 cm from EVERY dimension: Inner length = 16 − 2 = 14 cm, Inner breadth = 12 − 2 = 10 cm, Inner height = 8 − 2 = 6 cm. Inner capacity = 14 × 10 × 6 = 840 cm³. Volume of wood = 1,536 − 840 = 696 cm³.'
      },
      {
        type: 'Long Answer',
        question: 'A cylindrical milk tank has radius 1.5 m and length 7 m. Find the total quantity of milk in Litres that can be stored in the tank, and find its total outer surface area. (π = 22/7)',
        answer: 'Radius r = 1.5 m = 3/2 m; height h = 7 m. Volume = πr²h = (22/7) × (3/2) × (3/2) × 7 = 11 × 9 / 2 = 49.5 m³. Capacity in Litres = 49.5 × 1,000 = 49,500 Litres. TSA = 2πr(r + h) = 2 × (22/7) × 1.5 × (1.5 + 7) = (44/7) × 1.5 × 8.5 = (66 × 8.5)/7 = 561/7 ≈ 80.14 m².'
      },
      {
        type: 'HOTS',
        question: 'A rectangular sheet 22 cm × 10 cm is rolled first along its 22 cm side and then along its 10 cm side to form two cylinders C₁ and C₂. Find the difference between their volumes (use π = 22/7).',
        answer: 'Cylinder C₁ (rolled along 22 cm): 2πr₁ = 22 ⇒ r₁ = 3.5 cm, h₁ = 10 cm ⇒ V₁ = (22/7) × 3.5 × 3.5 × 10 = 11 × 35 = 385 cm³. Cylinder C₂ (rolled along 10 cm): 2πr₂ = 10 ⇒ r₂ = 35/22 cm, h₂ = 22 cm ⇒ V₂ = (22/7) × (35/22) × (35/22) × 22 = 5 × 35 = 175 cm³. Difference in volumes = V₁ − V₂ = 385 − 175 = 210 cm³.'
      }
    ],
    practiceExercises: [
      {
        question: 'A car wheel has diameter 56 cm. How many revolutions will it make to travel 1.76 km? (π = 22/7)',
        hint: 'Convert 1.76 km into cm (× 100,000) and divide by circumference πd.',
        answerGuide: 'Circumference = (22/7) × 56 = 176 cm; Distance = 176,000 cm; Revolutions = 1,000.'
      },
      {
        question: 'Find the height of a cuboid whose base area is 180 cm² and volume is 900 cm³.',
        hint: 'Volume = Base Area × Height.',
        answerGuide: 'Height = 900 ÷ 180 = 5 cm.'
      },
      {
        question: 'If the curved surface area of a cylinder is 440 cm² and its radius is 7 cm, find its height and volume.',
        hint: 'Solve 2 × (22/7) × 7 × h = 440 first.',
        answerGuide: '44h = 440 ⇒ h = 10 cm; Volume = (22/7) × 49 × 10 = 1,540 cm³.'
      },
      {
        question: 'Find the lateral surface area and space diagonal of a cube of edge 5 cm.',
        hint: 'LSA = 4a²; Space diagonal = a√3.',
        answerGuide: 'LSA = 4 × 25 = 100 cm²; Space diagonal = 5√3 cm (≈ 8.66 cm).'
      },
      {
        question: 'Convert 0.045 m³ into Litres and into cubic centimetres.',
        hint: '1 m³ = 1,000 L = 1,000,000 cm³.',
        answerGuide: '0.045 × 1,000 = 45 Litres; 0.045 × 1,000,000 = 45,000 cm³.'
      }
    ],
    practiceWorksheet: {
      title: 'ICSE Class 8 Chapter 8 Worksheet: Circles, Cubes, Cuboids & Cylinders (30 Marks)',
      instructions: 'Take π = 22/7 unless otherwise stated. Show all formula substitutions and unit conversions neatly.',
      sections: [
        {
          sectionTitle: 'Section A: Multiple Choice Questions (1 × 5 = 5 Marks)',
          items: [
            '1. The area of a circle whose circumference is 44 cm is: (a) 77 cm²  (b) 154 cm²  (c) 308 cm²  (d) 616 cm²',
            '2. If the edge of a cube is tripled, its volume becomes: (a) 3 times  (b) 6 times  (c) 9 times  (d) 27 times',
            '3. How many litres equal 2.4 cubic metres? (a) 24 L  (b) 240 L  (c) 2,400 L  (d) 24,000 L',
            '4. Area of four walls of a room 8 m × 5 m × 4 m is: (a) 104 m²  (b) 160 m²  (c) 184 m²  (d) 52 m²',
            '5. Curved surface area of a cylinder of diameter 14 cm and height 10 cm is: (a) 220 cm²  (b) 440 cm²  (c) 880 cm²  (d) 1,540 cm²'
          ]
        },
        {
          sectionTitle: 'Section B: Short Answer Questions (2 × 4 = 8 Marks)',
          items: [
            '6. Find the perimeter of a semicircular disc of radius 14 cm.',
            '7. Find the longest rod that can fit inside a box measuring 12 cm × 4 cm × 3 cm.',
            '8. The total surface area of a cube is 486 cm². Find its edge length and volume.',
            '9. Find the volume of a right circular cylinder with base circumference 88 cm and height 12 cm.'
          ]
        },
        {
          sectionTitle: 'Section C: Structured Long Answer Questions (3 × 3 = 9 Marks)',
          items: [
            '10. Find the area of a circular ring whose outer and inner radii are 17.5 cm and 10.5 cm.',
            '11. A classroom 10 m × 6 m × 4 m has two doors of 2 m × 1.5 m and four windows of 1.5 m × 1 m. Find the cost of painting its four walls (excluding doors and windows) at ₹30 per m².',
            '12. Find the volume of metal in a 21 cm long hollow pipe whose outer radius is 5 cm and inner radius is 3 cm.'
          ]
        },
        {
          sectionTitle: 'Section D: HOTS & Volume Conservation (4 × 2 = 8 Marks)',
          items: [
            '13. A solid iron cuboid 44 cm × 24 cm × 9 cm is melted and cast into a solid cylinder of height 21 cm. Find the radius of the cylinder.',
            '14. A cylindrical well of radius 7 m is dug 10 m deep. The earth dug out is spread around it to form a circular embankment of width 7 m. Find the height of the embankment.'
          ]
        }
      ],
      answerKey: [
        '1. (b) 154 cm²  [2πr = 44 ⇒ r = 7 ⇒ πr² = 154]',
        '2. (d) 27 times  [(3a)³ = 27a³]',
        '3. (c) 2,400 L  [2.4 × 1,000]',
        '4. (a) 104 m²  [2(8 + 5) × 4 = 26 × 4 = 104]',
        '5. (b) 440 cm²  [r = 7; 2 × (22/7) × 7 × 10 = 440]',
        '6. πr + 2r = (22/7 × 14) + 28 = 44 + 28 = 72 cm',
        '7. √(12² + 4² + 3²) = √(144 + 16 + 9) = √169 = 13 cm',
        '8. 6a² = 486 ⇒ a² = 81 ⇒ a = 9 cm; Volume = 9³ = 729 cm³',
        '9. 2πr = 88 ⇒ r = 14 cm; Volume = (22/7) × 14 × 14 × 12 = 616 × 12 = 7,392 cm³',
        '10. π(R + r)(R − r) = (22/7) × 28 × 7 = 22 × 28 = 616 cm²',
        '11. Four walls = 2(10 + 6) × 4 = 128 m²; Doors+Windows = 2(3) + 4(1.5) = 6 + 6 = 12 m²; Net area = 116 m²; Cost = 116 × 30 = ₹3,480',
        '12. π(5² − 3²) × 21 = (22/7) × 16 × 21 = 22 × 16 × 3 = 1,056 cm³',
        '13. (22/7) × r² × 21 = 44 × 24 × 9 ⇒ 66 r² = 9,504 ⇒ r² = 144 ⇒ r = 12 cm',
        '14. Well Volume = π(7²)(10) = 490π m³; Embankment outer radius R = 7 + 7 = 14 m; Ring area = π(14² − 7²) = π(196 − 49) = 147π m²; Height = 490π ÷ 147π = 10/3 = 3⅓ m (3.33 m)'
      ]
    }
  },
  quizQuestions: [
    {
      id: 'mens-q1',
      type: 'mcq',
      question: 'What is the perimeter of a semicircle of radius 7 cm? (Take π = 22/7)',
      options: ['22 cm', '36 cm', '44 cm', '77 cm'],
      correctAnswer: 1,
      explanation: 'Perimeter = πr + 2r = (22/7 × 7) + 2(7) = 22 + 14 = 36 cm.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'mens-q2',
      type: 'mcq',
      question: 'Find the area of a circular ring whose outer radius is 10.5 cm and inner radius is 3.5 cm. (π = 22/7)',
      options: ['154 cm²', '220 cm²', '308 cm²', '440 cm²'],
      correctAnswer: 2,
      explanation: 'Area = π(R + r)(R − r) = (22/7) × (10.5 + 3.5) × (10.5 − 3.5) = (22/7) × 14 × 7 = 22 × 14 = 308 cm².',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'mens-q3',
      type: 'mcq',
      question: 'What is the length of the longest rod that can be placed inside a cuboidal box measuring 12 m × 9 m × 8 m?',
      options: ['15 m', '17 m', '19 m', '21 m'],
      correctAnswer: 1,
      explanation: 'Space diagonal = √(12² + 9² + 8²) = √(144 + 81 + 64) = √289 = 17 m.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'mens-q4',
      type: 'mcq',
      question: 'If the edge of a solid cube is doubled, how many times does its Total Surface Area increase?',
      options: ['2 times', '4 times', '6 times', '8 times'],
      correctAnswer: 1,
      explanation: 'TSA of edge 2a is 6(2a)² = 6(4a²) = 4 × (6a²), which is 4 times the original TSA.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'mens-q5',
      type: 'fill_blank',
      question: 'A cuboidal tank of capacity 12,000 Litres has an internal volume of ______ cubic metres.',
      correctAnswer: '12',
      explanation: 'Since 1 m³ = 1,000 Litres, 12,000 ÷ 1,000 = 12 m³.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'mens-q6',
      type: 'mcq',
      question: 'Find the curved surface area of a right circular cylinder with base radius 7 cm and height 12 cm. (π = 22/7)',
      options: ['264 cm²', '528 cm²', '836 cm²', '1,848 cm²'],
      correctAnswer: 1,
      explanation: 'CSA = 2πrh = 2 × (22/7) × 7 × 12 = 44 × 12 = 528 cm².',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'mens-q7',
      type: 'mcq',
      question: 'A road roller of diameter 70 cm and length 2 m makes 50 revolutions. What area does it level? (π = 22/7)',
      options: ['110 m²', '220 m²', '440 m²', '1,100 m²'],
      correctAnswer: 1,
      explanation: 'r = 0.35 m, h = 2 m. CSA = 2 × (22/7) × 0.35 × 2 = 4.4 m². In 50 revolutions: 50 × 4.4 = 220 m².',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'mens-q8',
      type: 'true_false',
      question: 'If a rectangular sheet of paper is rolled once along its length and once along its breadth, both resulting cylinders have the exact same Curved Surface Area.',
      options: ['True', 'False'],
      correctAnswer: true,
      explanation: 'True! In both cases, the cylinder’s curved wall is formed from the entire rectangular sheet, so CSA = Length × Breadth.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'mens-q9',
      type: 'mcq',
      question: 'Two cubes each of edge 5 cm are joined end-to-end. What is the Total Surface Area of the resulting cuboid?',
      options: ['200 cm²', '250 cm²', '300 cm²', '150 cm²'],
      correctAnswer: 1,
      explanation: 'Dimensions become 10 × 5 × 5 cm. TSA = 2(50 + 25 + 50) = 2(125) = 250 cm² (or 12 − 2 = 10 faces × 25 cm² = 250 cm²).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'mens-q10',
      type: 'mcq',
      question: 'An open-top cylindrical bucket has radius r and height h. Which expression gives its total outer surface area?',
      options: ['2πr(r + h)', '2πrh + πr²', 'πr²h', '2πrh'],
      correctAnswer: 1,
      explanation: 'An open-top cylinder has one curved wall (2πrh) and one circular bottom (πr²), giving 2πrh + πr².',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'mens-q11',
      type: 'hots',
      question: 'Two right circular cylinders have equal volumes, and their heights are in the ratio 1 : 4. What is the ratio of their base radii?',
      options: ['1 : 2', '2 : 1', '1 : 4', '4 : 1'],
      correctAnswer: 1,
      explanation: 'π r₁² h₁ = π r₂² h₂ ⇒ (r₁/r₂)² = h₂/h₁ = 4/1 ⇒ r₁/r₂ = √(4/1) = 2 : 1.',
      difficulty: 'hard',
      marks: 2
    },
    {
      id: 'mens-q12',
      type: 'hots',
      question: 'A hollow cylindrical tube 14 cm long has outer radius 4 cm and inner radius 3 cm. What is the volume of material used? (π = 22/7)',
      options: ['44 cm³', '154 cm³', '308 cm³', '616 cm³'],
      correctAnswer: 2,
      explanation: 'V = π(R + r)(R − r)h = (22/7) × (4 + 3) × (4 − 3) × 14 = (22/7) × 7 × 1 × 14 = 22 × 14 = 308 cm³.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    {
      id: 'mens-fc1',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Perimeter and Area of a Semicircle (radius r)',
      back: 'Perimeter = πr + 2r = (36/7)r  |  Area = ½ πr²',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'mens-fc2',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Area of a Concentric Circular Ring (outer R, inner r)',
      back: 'π(R² − r²) = π(R + r)(R − r)',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'mens-fc3',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Cuboid: 4 Walls (LSA), TSA, Volume & Space Diagonal',
      back: 'LSA = 2(l + b)h | TSA = 2(lb + bh + hl) | V = lbh | Diagonal = √(l² + b² + h²)',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'mens-fc4',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Cube: LSA, TSA, Volume & Space Diagonal (edge a)',
      back: 'LSA = 4a² | TSA = 6a² | V = a³ | Face Diagonal = a√2 | Space Diagonal = a√3',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'mens-fc5',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Right Circular Cylinder: CSA, TSA & Volume',
      back: 'CSA = 2πrh | TSA = 2πr(r + h) | Volume = πr²h',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'mens-fc6',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Open-top Cylindrical Tank Surface Area',
      back: '2πrh + πr² = πr(2h + r)  (only ONE circular base)',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'mens-fc7',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Hollow Cylinder Material Volume & TSA',
      back: 'Volume = π(R² − r²)h | TSA = 2π(R + r)h + 2π(R² − r²)',
      category: 'Formula',
      importance: 'Essential'
    },
    {
      id: 'mens-fc8',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Area levelled by a Road Roller in N revolutions',
      back: 'N × Curved Surface Area = N × 2πrh',
      category: 'Formula',
      importance: 'Standard'
    },
    {
      id: 'mens-fc9',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Scaling Law when all edges of a Cube/Cuboid double (×2)',
      back: 'Surface Area increases 4 times (2²), and Volume increases 8 times (2³).',
      category: 'Definition',
      importance: 'Standard'
    },
    {
      id: 'mens-fc10',
      subjectId: 'mathematics',
      chapterId: 'math-mensuration-solids',
      chapterTitle: 'Mensuration: Circles, Cubes, Cuboids and Right Circular Cylinders',
      front: 'Key Capacity & Volume Conversions',
      back: '1 m³ = 1,000 Litres = 1 kL | 1,000 cm³ = 1 Litre | 1 cm³ = 1 mL',
      category: 'Formula',
      importance: 'Essential'
    }
  ]
};
