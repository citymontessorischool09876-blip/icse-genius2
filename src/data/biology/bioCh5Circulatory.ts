import { Chapter } from '../../types';

export const BIO_CH5_CIRCULATORY: Chapter = {
  id: 'bio-circulatory',
  subjectId: 'biology',
  chapterNumber: 5,
  title: 'Human Body: The Circulatory System',
  subtitle: 'Composition of blood (plasma, RBCs, WBCs, platelets & blood clotting), ABO blood groups & Rh factor, arteries vs veins vs capillaries, internal 4-chambered heart & valves, double circulation, heartbeat/BP, and the lymphatic system',
  term: 'Annual',
  estimatedMinutes: 95,
  notes: {
    introduction: `Place two fingertips lightly against the left side of your chest or the inside of your wrist. *Thump-thump… thump-thump… thump-thump.* Even while you sleep peacefully, a fist-sized muscular pump drives roughly **5 litres of warm red blood** through nearly **100,000 kilometres of living pipes** around 72 times every minute—more than **100,000 beats every single day** without ever pausing for an oil change!

In Chapter 5 of Class 8 ICSE Biology (*Concise Biology / Gem's Biology*), we investigate the **Human Circulatory System** (discovered systematically by **William Harvey** in 1628). You will break down **Blood plasma and formed cells** (erythrocytes, leukocytes, thrombocytes + clotting cascade), master **ABO & Rh blood compatibility** (**Universal Donor O⁻ vs Universal Recipient AB⁺**), contrast **Arteries, Veins, and Capillaries**, explore the **four-chambered Human Heart** and its one-way valves, trace **Pulmonary and Systemic Double Circulation**, decode **SA Node pacemaker beats and Blood Pressure (120/80 mmHg)**, and examine the parallel **Lymphatic drainage system**.`,
    learningObjectives: [
      'Describe the composition and roles of Blood Plasma (55%) and the three cellular elements (45%): RBCs, WBCs, and Platelets.',
      'Explain the blood-clotting cascade converting soluble fibrinogen into insoluble fibrin mesh.',
      'Apply Landsteiner\'s ABO Blood Group antigen–antibody rules and Rh factor compatibility to safe blood transfusions (O⁻ donor vs AB⁺ recipient).',
      'Compare Arteries, Veins, and Capillaries structurally (wall thickness, lumen width, valves) and functionally.',
      'Draw and label the 4-chambered Human Heart (atria, ventricles, septum, tricuspid, bicuspid/mitral, and semilunar valves) and great vessels.',
      'Trace complete Pulmonary and Systemic Double Circulation, pacemaker SA node beats (lubb–dupp sounds), normal blood pressure (120/80 mmHg), and Lymphatic transport.'
    ],
    topics: [
      {
        id: 'bio-ch5-t1',
        title: '1. Blood Composition, Clotting & ABO / Rh Blood Groups',
        content: `**Blood** is a fluid connective tissue circulating oxygen, nutrients, hormones, heat, and antibodies throughout the body while clearing metabolic wastes. Roughly **55%** is straw-coloured liquid **Plasma** (~90–92% water + proteins, salts, glucose, urea) and **45%** consists of living **Formed Elements (Blood Corpuscles)** suspended inside it.`,
        subtopics: [
          {
            subheading: '1.1 RBCs, WBCs & Platelets + Blood Clotting Mechanism',
            body: `1. **Red Blood Cells (Erythrocytes / RBCs)**:
   - Disc-shaped, **biconcave**, and famously **enucleated (lack a nucleus at maturity)** in mammals to cram maximum iron-rich **Haemoglobin** inside and squeeze smoothly through razor-thin capillaries! *(Short lifespan ~**120 days**; destroyed in spleen & liver.)*
   - Haemoglobin binds $\\text{O}_2$ loosely in lungs forming bright-red **Oxyhaemoglobin** and unloads it eagerly inside oxygen-hungry tissues! *(Note: Deadly **Carbon Monoxide (CO)** hijacks haemoglobin irreversibly as **Carboxyhaemoglobin**, suffocating cells!)*
2. **White Blood Cells (Leukocytes / WBCs)**:
   - Colourless, **nucleated**, larger irregular defenders capable of **amoeboid squeezing through capillary walls (diapedesis)** to attack germs!
   - *Phagocytes* (**Neutrophils / Monocytes**) engulf bacteria (**phagocytosis**); *Lymphocytes* produce targeted **Antibodies**!
3. **Platelets (Thrombocytes)**:
   - Tiny non-nucleated cell fragments essential for **Blood Clotting (Coagulation)**: Injured tissues and platelets release *thromboplastin*, which converts inactive blood protein **prothrombin** (+ $\\text{Ca}^{2+}$) into active **thrombin**, turning soluble **fibrinogen** into sticky insoluble threads of **Fibrin**—weaving a tight clot mesh that seals the cut!`,
            keyPoint: 'Mature mammalian RBCs and Platelets lack nuclei; ONLY WBCs possess distinct lobed or round nuclei!'
          },
          {
            subheading: '1.2 Karl Landsteiner\'s ABO Blood Groups & Rh Factor',
            body: `Human RBC surfaces carry chemical sugar markers called **Antigens (A, B)**, while Plasma carries opposite defensive proteins called **Antibodies (anti-A, anti-B)**:
- **Group A**: Antigen **A** on RBC | Antibody **anti-B** in plasma → receives **A, O**.
- **Group B**: Antigen **B** on RBC | Antibody **anti-A** in plasma → receives **B, O**.
- **Group AB (Universal Recipient)**: **BOTH Antigens A & B**, **NO antibodies** in plasma → safely receives red cells from **A, B, AB, or O**!
- **Group O (Universal Donor)**: **NO A/B Antigens** on RBC, **both anti-A & anti-B** in plasma → its washed RBCs can be transfused safely into **ANY** ABO group!
- **Rh Factor**: Over 85% people carry the **Rhesus (Rh) antigen** (**Rh⁺**); those lacking it are **Rh⁻**. Mixing incompatible blood causes deadly clumping (**agglutination**)! Hence strictly safest universal red-cell donor = **O⁻**, safest universal recipient = **AB⁺**!`,
            keyPoint: 'Universal Donor = Group O (no A/B antigens on RBCs to clump); Universal Recipient = Group AB (no anti-A/B antibodies in plasma)!'
          }
        ],
        definitions: [
          { term: 'Haemoglobin', definition: 'Iron-containing red respiratory pigment in RBCs carrying O₂ as unstable bright-red oxyhaemoglobin from lungs to cells.' },
          { term: 'Phagocytosis', definition: 'Engulfing and digesting invading bacteria or cellular debris directly by amoeboid white blood cells.' },
          { term: 'Blood Clotting (Fibrin)', definition: 'Enzyme-driven conversion of soluble plasma fibrinogen into an insoluble fibrous protein net (fibrin) trapping blood cells to plug wounds.' }
        ],
        comparisonTable: {
          caption: 'Formed Elements of Human Blood: Structure, Lifespan & Roles',
          headers: ['Corpuscle', 'Shape & Nucleus', 'Normal Lifespan', 'Primary Biological Role'],
          rows: [
            ['**RBC (Erythrocyte)**', 'Biconcave disc, **NO nucleus**', '~120 days (made in bone marrow)', 'Transports $\\text{O}_2$ (via **Haemoglobin**) & partial $\\text{CO}_2$'],
            ['**WBC (Leukocyte)**', 'Irregular amoeboid, **Nucleated**', 'Hours to days (or memory years)', 'Body immunity via **Phagocytosis** & **Antibodies**'],
            ['**Platelet (Thrombocyte)**', 'Tiny cell fragments, **NO nucleus**', '~5–9 days', 'Releases clotting triggers forming **Fibrin clot**']
          ]
        },
        realLifeExample: 'When you scrape your knee cycling on gravel, clear liquid oozes and crusts cleanly reddish-brown within 5 minutes—that natural bandage is thousands of platelets weaving sticky microscopic **fibrin threads**!',
        commonMistakes: [
          {
            mistake: 'Confusing **Group AB** and **Group O** donor vs recipient roles.',
            correction: 'Think cleanly of **Antigens on incoming RBCs**: **Group O** RBCs have **zero antigens** → invisible to recipient antibodies (**Universal Donor**); **Group AB** plasma has **zero antibodies** → attacks nobody (**Universal Recipient**)!'
          }
        ]
      },
      {
        id: 'bio-ch5-t2',
        title: '2. Blood Vessels: Arteries, Veins & Microscopic Capillaries',
        content: `Blood never pours loose around human organs like open insect circulation—humans possess a **Closed Circulatory System** flowing continuously inside three specialised muscular vessels:`,
        subtopics: [
          {
            subheading: '2.1 Arteries vs Veins vs Capillaries',
            body: `1. **Arteries**: Carry blood **AWAY from the heart** (**A = Away**!) under **high spurting pumping pressure**. Hence arteries possess **thick, elastic muscular walls**, a **narrow lumen**, **NO internal valves**, and sit protected **deep under muscles** (except wrist radial pulse!). Nearly all carry oxygenated blood—*except* **Pulmonary Artery** carrying **deoxygenated** blood to lungs!
2. **Veins**: Return blood **BACK TOWARD the heart** under low, steady pressure. Possess **thinner muscular walls**, a **wider lumen**, sit closer beneath skin (**visible blue-green wrist/hand lines**), and contain **pocket/semilunar valves** stopping downward gravity backflow! Nearly all carry deoxygenated blood—*except* **Pulmonary Veins** carrying **oxygenated** blood from lungs!
3. **Capillaries**: Microscopic, **one-cell-thick (single endothelial layer)** hair-fine networks linking tiny **arterioles** to **venules**—permitting rapid two-way diffusion of $\\text{O}_2$, glucose, hormones, and $\\text{CO}_2$ directly into living tissues!`,
            keyPoint: 'Remember ICSE Golden Exceptions: Pulmonary ARTERY carries DEOXYGENATED blood; Pulmonary VEIN carries OXYGENATED blood!'
          }
        ],
        definitions: [
          { term: 'Artery', definition: 'Thick-walled, narrow-lumen elastic blood vessel carrying blood away from the heart under high pressure without internal valves.' },
          { term: 'Vein', definition: 'Thinner-walled, wide-lumen blood vessel fitted with pocket valves to return blood smoothly back toward the heart.' },
          { term: 'Capillary', definition: 'Microscopic vessel bounded by a single thin endothelial cell layer enabling rapid nutrient, gas, and waste exchange.' }
        ],
        comparisonTable: {
          caption: 'Structural & Functional Comparison: Arteries vs Veins vs Capillaries',
          headers: ['Feature', 'Arteries', 'Veins', 'Capillaries'],
          rows: [
            ['Direction of Flow', '**Away** from heart → organs', 'From organs **toward** heart', 'Link arterioles to venules in tissues'],
            ['Wall Thickness', '**Thick, elastic & muscular**', 'Thinner, less muscular', '**One cell thick** (endothelium only)'],
            ['Internal Lumen', 'Narrow (keeps high pressure)', '**Wide**', 'Microscopic (single RBC file)'],
            ['Internal Valves', '**Absent** (except semilunar exits)', '**Present** (prevent backflow)', 'Absent'],
            ['Blood Oxygenation', 'Oxygenated (*exc.* **Pulmonary artery**)', 'Deoxygenated (*exc.* **Pulmonary veins**)', 'Switches O₂-rich → CO₂-rich']
          ]
        },
        realLifeExample: 'Doctors check your **pulse** on the wrist **radial artery** (never a vein!), because rhythmic high-pressure heart waves bulge arterial walls cleanly 72 times every minute!',
        commonMistakes: [
          {
            mistake: 'Defining an Artery as "a vessel carrying oxygenated blood".',
            correction: 'Always define Arteries and Veins by **DIRECTION relative to the heart**: Artery = **Away from heart** (even Pulmonary artery carrying *deoxygenated* blood to lungs!); Vein = **Toward heart** (even Pulmonary vein carrying *oxygenated* blood!).'
          }
        ]
      },
      {
        id: 'bio-ch5-t3',
        title: '3. The Four-Chambered Human Heart & Double Circulation',
        content: `Protected inside the ribcage tilted slightly toward the left and wrapped inside a double-layered shock-absorbing **Pericardium** lubricated by pericardial fluid, our **Heart** is divided lengthwise by a solid muscular **Septum** into **two totally separate pumps**—so oxygen-rich blood NEVER mixes with oxygen-poor blood!`,
        subtopics: [
          {
            subheading: '3.1 Four Chambers, Four Great Vessels & One-Way Heart Valves',
            body: `- **Upper Thin-Walled Receiving Chambers**: **Right Atrium** & **Left Atrium**.
- **Lower Thick-Walled Pumping Chambers**: **Right Ventricle** & **Left Ventricle**. *(Notice the **Left Ventricle** has the **thickest muscular wall** of all four chambers because it pumps oxygenated blood forcefully all the way to head and toes—whereas the Right Ventricle pumps gently just next-door to the lungs!)*
- **Four Crucial One-Way Valves** preventing backward leaks:
  1. **Tricuspid Valve** (3 flaps): Guards **Right Atrium → Right Ventricle**.
  2. **Bicuspid / Mitral Valve** (2 flaps): Guards **Left Atrium → Left Ventricle**.
  3. **Pulmonary & Aortic Semilunar Valves**: Guard exits from Ventricles into **Pulmonary Artery** and **Aorta**!`,
            keyPoint: 'Left Ventricle = thickest chamber wall (pumps across whole body via Aorta); Septum separates O₂-rich left side from CO₂-rich right side!'
          },
          {
            subheading: '3.2 Double Circulation: Pulmonary + Systemic Circuits',
            body: `In mammals, blood passes through the heart **TWICE** to complete **one full body circuit** (**Double Circulation**):
1. **Pulmonary Circulation (Heart ↔ Lungs)**:
   - **Superior & Inferior Vena Cava** pour dark deoxygenated blood from body tissues into **Right Atrium** → passes through **Tricuspid Valve** into **Right Ventricle** → pumped up **Pulmonary Artery** to **Lungs** (picks up $\\text{O}_2$, drops $\\text{CO}_2$!) → fresh bright-red oxygenated blood returns via **Pulmonary Veins** into **Left Atrium**!
2. **Systemic Circulation (Heart ↔ Whole Body)**:
   - **Left Atrium** squeezes oxygenated blood through **Bicuspid (Mitral) Valve** into **Left Ventricle** → blasts out through the giant arched **Aorta** across the whole body → returns deoxygenated via **Vena Cava**!`,
            keyPoint: 'Remember anatomical viewer orientation: Left side of the Heart diagram shows RIGHT Atrium/Ventricle (blue deoxygenated); Right side shows LEFT Atrium/Ventricle (red oxygenated)!'
          }
        ],
        definitions: [
          { term: 'Pericardium', definition: 'Protective double-walled membranous sac holding lubricating pericardial fluid around the beating heart.' },
          { term: 'Septum', definition: 'Thick muscular wall cleanly separating right (deoxygenated) and left (oxygenated) sides of the heart.' },
          { term: 'Double Circulation', definition: 'Circulatory plan where blood passes twice through the heart during one full circuit—once via lungs (Pulmonary) and once across body (Systemic).' }
        ],
        diagram: {
          id: 'diag-bio-human-heart',
          title: 'Internal Four-Chambered Structure of the Human Heart',
          caption: 'Right Atrium/Ventricle (deoxygenated blue via Vena Cava → Pulmonary Artery) cleanly separated by muscular Septum from Left Atrium/Ventricle (oxygenated red via Pulmonary Veins → Aorta).',
          svgFigure: 'bio_human_heart'
        },
        realLifeExample: 'Reptiles like lizards have an incomplete 3-chambered heart mixing some O₂ and CO₂ blood—making them sluggish when cold; our completely sealed 4-chambered septum delivers 100% pure O₂ blood supporting warm-blooded running and brain power!',
        commonMistakes: [
          {
            mistake: 'Reversing Tricuspid and Bicuspid valves or placing Pulmonary veins into the Right Atrium.',
            correction: '**R**ight side = **Tri**cuspid (remember: *R–T*); **L**eft side = **Bi**cuspid/Mitral! **Pulmonary Veins** empty strictly into the **Left Atrium**!'
          }
        ]
      },
      {
        id: 'bio-ch5-t4',
        title: '4. Heartbeat, Pulse, Blood Pressure & The Lymphatic System',
        content: `Every rhythmic heartbeat comprises one squeezing phase (**Systole**) and one relaxing refilling phase (**Diastole**) lasting roughly **$0.8\\text{ seconds}$** total (~72 beats/minute)—initiated autonomously inside cardiac muscle itself!`,
        subtopics: [
          {
            subheading: '4.1 Pacemaker (SA Node), Lubb–Dupp Sounds & Blood Pressure',
            body: `- **SA Node (Sinoatrial Node — Natural Pacemaker)**: Patch of specialised nodal tissue nestled in the upper **Right Atrium** wall generating spontaneous electrical impulses (~72/min) causing atria and ventricles to contract smoothly in sequence!
- **Two Classic Stethoscope Sounds ("Lubb – Dupp")**:
  - **"LUBB"** (First louder, longer sound): Closing of **Tricuspid & Bicuspid valves** at ventricular systole onset.
  - **"DUPP"** (Second sharper, shorter sound): Snapping shut of **Semilunar valves** as ventricles relax (diastole).
- **Blood Pressure (Sphygmomanometer)**: Force exerted by blood pushing against arterial walls:
  - Normal healthy adult reading = **$120 / 80\\text{ mmHg}$** (**$120\\text{ mmHg}$ Systolic** peak during ventricular squeeze over **$80\\text{ mmHg}$ Diastolic** resting dip). Persistent high BP (>140/90) is **Hypertension**.`,
            keyPoint: 'LUBB = Tricuspid/Bicuspid valves slamming shut; DUPP = Semilunar valves slamming shut! Normal BP = 120 / 80 mmHg!'
          },
          {
            subheading: '4.2 Tissue Fluid & The Lymphatic System',
            body: `As high-pressure blood streams through capillaries, thin watery plasma (lacking large plasma proteins and RBCs!) leaks out into spaces bathing living cells as **Tissue Fluid (Interstitial Fluid)**—delivering food/O₂ directly to cells. While most returns directly into capillaries, ~10% drains into blind-ended thin **Lymph Vessels** as pale clear **Lymph**:
- **Three Major Roles of Lymph**:
  1. Drains excess fluid and leaked proteins safely back into chest subclavian veins, preventing swelling (**oedema**).
  2. Lacteals (intestinal lymph vessels) absorb **digested fats & fat-soluble vitamins**!
  3. Filtering **Lymph Nodes** (*tonsils, spleen, neck/armpit nodes*) swarm with **lymphocytes** that trap bacteria and fight infections!`,
            keyPoint: 'Lymph = Blood MINUS RBCs, Platelets, and large plasma proteins — rich in infection-fighting WBC Lymphocytes!'
          }
        ],
        definitions: [
          { term: 'Pacemaker (SA Node)', definition: 'Sinoatrial node in the right atrium wall generating self-sustaining electrical impulses setting heart rhythm (~72 bpm).' },
          { term: 'Systole vs Diastole', definition: 'Contraction pumping phase (Systole) vs relaxation refilling phase (Diastole) of cardiac chambers.' },
          { term: 'Lymph', definition: 'Pale yellowish fluid drained from intercellular spaces into lymph vessels, lacking RBCs/platelets and carrying lymphocytes and absorbed fats.' }
        ],
        realLifeExample: 'When you have a sore throat or tonsillitis, tender bean-shaped lumps swell gently under your jaw—those are **cervical lymph nodes** manufacturing millions of WBC lymphocytes to trap invading bacteria!',
        commonMistakes: [
          {
            mistake: 'Saying heart sounds "Lubb–Dupp" are caused by blood splashing against heart walls.',
            correction: 'Doctors hear **"Lubb–Dupp"** strictly from **heart valves snapping shut** cleanly—faulty leaky valves cause extra whistling sounds called *heart murmurs*!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Haemoglobin', definition: 'Iron-rich pigment inside enucleated RBCs binding oxygen cleanly as bright-red oxyhaemoglobin.' },
      { term: 'Fibrinogen → Fibrin', definition: 'Soluble plasma protein converted into insoluble fibrous strands sealing cuts during blood clotting.' },
      { term: 'Universal Donor (O⁻) & Recipient (AB⁺)', definition: 'Group O⁻ lacks A/B/Rh antigens on RBCs; Group AB⁺ lacks anti-A/anti-B plasma antibodies.' },
      { term: 'Pulmonary Artery & Veins', definition: 'Only artery carrying deoxygenated blood (RV→Lungs); only veins carrying oxygenated blood (Lungs→LA).' },
      { term: 'Tricuspid & Bicuspid Valves', definition: 'One-way flaps separating Right Atrium/Ventricle (3 flaps) and Left Atrium/Ventricle (2 flaps / Mitral).' },
      { term: 'Double Circulation', definition: 'Complete Pulmonary (Heart↔Lungs) + Systemic (Heart↔Body) circulation keeping O₂ and CO₂ blood cleanly separated.' },
      { term: 'SA Node (Pacemaker)', definition: 'Electrical impulse generator in the upper right atrium initiating each 0.8 s heartbeat cycle.' },
      { term: 'Lubb & Dupp', definition: 'Closing sounds of AV (Tricuspid/Bicuspid) valves and Semilunar valves respectively.' },
      { term: 'Sphygmomanometer', definition: 'Medical instrument measuring arterial systolic/diastolic blood pressure (normal ~120/80 mmHg).' },
      { term: 'Lymph & Lymph Nodes', definition: 'Clear interstitial drainage fluid rich in lymphocytes; filters bacteria and transports absorbed intestinal fats.' }
    ],
    formulaSheet: [
      { title: 'Pulmonary & Systemic Loop', expression: 'Body → Vena Cava → RA → RV → Pulmonary Artery → Lungs → Pulmonary Veins → LA → LV → Aorta → Body', meaning: 'Complete 8-step closed human Double Circulation sequence.' },
      { title: 'Blood Pressure & Heart Rate', expression: 'Normal Adult BP = 120 / 80 mmHg (Systolic / Diastolic) | Heart Rate ≈ 72 beats/min (Cardiac Cycle ≈ 0.8 s)', meaning: 'Benchmark human cardiovascular clinical vitals.' }
    ],
    solvedExamples: [
      {
        id: 'bio5-ex1',
        question: 'Why does the **Left Ventricle** possess a muscular wall roughly THREE TIMES thicker than the Right Ventricle?',
        steps: [
          '1. The **Right Ventricle** pumps blood only a few centimetres next-door to the nearby **lungs** through low-resistance pulmonary capillaries.',
          '2. In contrast, the **Left Ventricle** must generate massive systolic pressure ($~120\\text{ mmHg}$) to force oxygenated blood upward against gravity to the **brain** and all the way down to the **toes** via the Aorta!',
          '3. Hence thicker cardiac muscle prevents fatigue and generates sustained systemic pressure.'
        ],
        finalAnswer: 'Left Ventricle pumps oxygenated blood across the entire high-resistance body, whereas Right Ventricle pumps gently next-door to the lungs.',
        keyRule: 'Ventricular wall thickness matches pumping distance and arterial pressure load.'
      },
      {
        id: 'bio5-ex2',
        question: 'A person with **Blood Group A** loses blood in an accident. Which donor blood groups can be safely transfused, and why would receiving **Group B** be fatal?',
        steps: [
          '1. Recipient Group **A** carries Antigen **A** on RBCs and defensive **anti-B antibodies** inside plasma.',
          '2. Safe donors: **Group A** (matching A) and **Group O** (carries NO A or B antigens on RBCs!).',
          '3. Fatal error: Receiving **Group B** introduces foreign **B antigens**, so recipient\'s **anti-B antibodies immediately clump (agglutinate)** the donor RBCs, blocking vital brain and kidney capillaries!'
        ],
        finalAnswer: 'Safe donors = Group A or Group O (Rh matched); Group B triggers fatal RBC clumping (agglutination) via anti-B antibodies.',
        keyRule: 'Always check whether RECIPIENT antibodies will attack DONOR RBC antigens!'
      },
      {
        id: 'bio5-ex3',
        question: 'Trace the exact journey of ONE red blood cell starting in the **left thumb vein**, passing through the lungs, and arriving at the **right kidney**.',
        steps: [
          '1. Left thumb vein → Brachial vein → **Superior Vena Cava** → **Right Atrium**.',
          '2. Through **Tricuspid Valve** → **Right Ventricle** → **Pulmonary Artery** → **Lung capillaries** (drops $\\text{CO}_2$, picks $\\text{O}_2$!).',
          '3. Returns via **Pulmonary Veins** → **Left Atrium** → through **Bicuspid (Mitral) Valve** → **Left Ventricle**.',
          '4. Leaves via **Aorta** → Descending abdominal aorta → **Renal Artery** → **Right Kidney**!'
        ],
        finalAnswer: 'Thumb vein → Sup. Vena Cava → RA → RV → Pulm. Artery → Lungs → Pulm. Veins → LA → LV → Aorta → Renal Artery → Kidney.',
        keyRule: 'Every return from body enters RA; every trip from lungs enters LA!'
      },
      {
        id: 'bio5-ex4',
        question: 'How is mammalian **RBC structure** uniquely adapted for maximum oxygen transport efficiency?',
        steps: [
          '1. **Enucleated (Zero Nucleus) & Zero Mitochondria**: Frees maximum internal volume to pack millions of **Haemoglobin** molecules—and prevents RBCs from wasting carried $\\text{O}_2$ on their own respiration!',
          '2. **Biconcave Disc Shape**: Dramatically enlarges surface-area-to-volume ratio for rapid $\\text{O}_2$ loading/unloading and lets flexible cells fold smoothly through tight capillaries.'
        ],
        finalAnswer: 'Enucleated biconcave disc packs maximum haemoglobin, boosts surface diffusion, and avoids consuming carried O₂.',
        keyRule: 'No nucleus + Biconcave shape = maximal oxygen-carrying haemoglobin efficiency.'
      },
      {
        id: 'bio5-ex5',
        question: 'Explain why accidental cutting of a deep **artery** causes bright red blood to shoot out in rhythmic spurts, whereas cutting a surface **vein** causes dark blood to ooze steadily.',
        steps: [
          '1. Arteries carry fresh **oxyhaemoglobin** (bright scarlet) pumped directly out of the Left Ventricle under surging systolic/diastolic pressure waves (**spurts cleanly with every heartbeat**).',
          '2. Veins carry oxygen-depleted blood (darker burgundy-red) gently under low continuous pressure pushed along by skeletal muscles and **valves** (**steady ooze**).'
        ],
        finalAnswer: 'Arteries carry bright oxygenated blood under pulsatile heart pressure; veins carry dark deoxygenated blood under steady low pressure.',
        keyRule: 'Colour reflects O₂ saturation; Spurting vs Steady flow reflects arterial vs venous pressure!'
      },
      {
        id: 'bio5-ex6',
        question: 'During severe **haemophilia** or low platelet count (**thrombocytopenia**, e.g. in dengue), minor nosebleeds turn dangerous. Trace what missing step breaks the normal **clotting cascade**.',
        steps: [
          '1. Normally, ruptured **platelets** release thromboplastin activating **prothrombin → thrombin** (requiring Vitamin K & $\\text{Ca}^{2+}$).',
          '2. Active **thrombin** converts soluble plasma **fibrinogen** into sticky insoluble **fibrin** threads trapping blood cells into a firm clot plug.',
          '3. Without sufficient platelets or clotting factors, soluble fibrinogen never polymerises into fibrin mesh—so bleeding continues unchecked!'
        ],
        finalAnswer: 'Insufficient platelets/clotting factors prevent conversion of soluble fibrinogen into a sealing insoluble fibrin clot mesh.',
        keyRule: 'Key clotting conversion: Soluble Fibrinogen —(Thrombin)→ Insoluble Fibrin threads.'
      },
      {
        id: 'bio5-ex7',
        question: 'Why does standing rigidly motionless during a hot school assembly occasionally make a student feel dizzy and faint—whereas marching briskly never does?',
        steps: [
          '1. Veins rely heavily on contracting leg skeletal muscles squeezing veins to push blood upward past one-way **venous valves** back to the heart.',
          '2. Standing stone-still in heat pools venous blood down in leg veins while heat dilates skin vessels, temporarily shrinking blood return to the heart and brain (**fainting**)!',
          '3. Laying the student flat with feet slightly raised restores venous gravity return to the brain within seconds!'
        ],
        finalAnswer: 'Immobility stops the leg muscle pump returning venous blood against gravity, briefly dipping brain blood pressure.',
        keyRule: 'One-way venous valves need leg muscle contractions to push blood smoothly back upward.'
      },
      {
        id: 'bio5-ex8',
        question: 'State THREE clear differences between **Blood** and **Lymph**.',
        steps: [
          '1. **Colour & RBCs**: Blood is bright/dark red carrying **RBCs and Platelets**; Lymph is pale clear fluid containing **NO RBCs and NO platelets**.',
          '2. **Proteins**: Blood holds high plasma protein; Lymph holds far lower protein concentration.',
          '3. **Flow & Role**: Blood pumps bidirectionally around closed heart loops; Lymph flows **unidirectionally** from tissues → lymph nodes → chest veins, rich in immune **lymphocytes** and absorbed dietary **fats**!'
        ],
        finalAnswer: 'Lymph = pale clear plasma minus RBCs/platelets, flowing one-way via lymph nodes carrying lymphocytes and absorbed fats.',
        keyRule: 'Think of Lymph as filtered tissue fluid returning cleanly through immune lymph-node checkpoints.'
      }
    ],
    gradedQuestions: {
      easy: [
        { id: 'bio5-e1', marks: 2, question: 'Name the two exceptions among blood vessels regarding oxygenated vs deoxygenated blood.', solutionSteps: ['1. **Pulmonary Artery**: Only artery carrying **deoxygenated** blood (RV → Lungs).', '2. **Pulmonary Veins**: Only veins carrying **oxygenated** blood (Lungs → LA).'], finalAnswer: 'Pulmonary Artery (deoxygenated) and Pulmonary Veins (oxygenated).' },
        { id: 'bio5-e2', marks: 2, question: 'Identify the Universal Blood Donor and Universal Blood Recipient groups (including Rh factor).', solutionSteps: ['**Universal Donor**: **O⁻ (O negative)** (zero A, B, or Rh antigens on RBCs).', '**Universal Recipient**: **AB⁺ (AB positive)** (zero anti-A/anti-B/Rh antibodies in plasma).'], finalAnswer: 'Donor = O⁻; Recipient = AB⁺.' },
        { id: 'bio5-e3', marks: 2, question: 'What produces the classic "LUBB" and "DUPP" sounds heard through a stethoscope?', solutionSteps: ['**"LUBB"**: Sudden closing of **Tricuspid & Bicuspid (AV)** valves.', '**"DUPP"**: Sudden closing of **Pulmonary & Aortic Semilunar** valves.'], finalAnswer: 'Lubb = AV valves closing; Dupp = Semilunar valves closing.' },
        { id: 'bio5-e4', marks: 2, question: 'Give the normal resting human Blood Pressure reading and name the medical instrument used to record it.', solutionSteps: ['Normal adult BP: **$120 / 80\\text{ mmHg}$** (Systolic / Diastolic).', 'Instrument: **Sphygmomanometer**.'], finalAnswer: '120 / 80 mmHg measured by a Sphygmomanometer.' }
      ],
      medium: [
        { id: 'bio5-m1', marks: 3, question: 'Compare Arteries, Veins, and Capillaries across wall thickness, presence of valves, and pressure.', solutionSteps: ['1. **Arteries**: Thick elastic muscular wall, NO valves, very high pumping pressure.', '2. **Veins**: Thinner wall + wide lumen, **pocket valves present**, low pressure.', '3. **Capillaries**: Single **one-cell-thick** endothelial wall, NO valves, tiny pressure permitting diffusion.'], finalAnswer: 'Thick high-pressure Arteries vs thinner valved Veins vs one-cell-thick Capillaries.' },
        { id: 'bio5-m2', marks: 3, question: 'Describe the three key biological roles played by White Blood Cells (Leukocytes) and Platelets.', solutionSteps: ['1. **WBC Phagocytosis**: Neutrophils/monocytes squeeze out of capillaries (diapedesis) and engulf invading germs.', '2. **Antibodies**: Lymphocytes manufacture specific antibodies neutralising pathogens.', '3. **Platelet Clotting**: Release thromboplastin initiating soluble **fibrinogen → fibrin clot mesh** plugging torn vessels.'], finalAnswer: 'WBCs engulf bacteria (phagocytosis) & build antibodies; Platelets trigger protective fibrin blood clots.' },
        { id: 'bio5-m3', marks: 3, question: 'What is the natural Pacemaker of the heart? Where is it located and what happens if it fails?', solutionSteps: ['**SA Node (Sinoatrial Node)** located in the upper wall of the **Right Atrium**.', 'Generates ~72 rhythmic electrical impulses/min setting heartbeat pace.', 'If damaged, heartbeat turns dangerously slow/irregular—requiring an implanted **artificial electronic pacemaker**!'], finalAnswer: 'SA Node in Right Atrium sets natural ~72 bpm rhythm; failure requires an artificial pacemaker.' },
        { id: 'bio5-m4', marks: 3, question: 'State three vital functions of the Lymphatic System in humans.', solutionSteps: ['1. Returns excess interstitial **tissue fluid** and leaked proteins back to chest veins, preventing swelling (**oedema**).', '2. Intestinal **lacteals** absorb digested **fats** into bloodstream.', '3. **Lymph nodes** generate **lymphocytes** that filter and destroy bacteria/viruses!'], finalAnswer: 'Drains excess tissue fluid, absorbs dietary fats (lacteals), and filters pathogens via lymph nodes.' }
      ],
      difficult: [
        { id: 'bio5-d1', marks: 4, question: 'Trace complete **Double Circulation** cleanly explaining why four heart chambers with a full Septum give mammals higher athletic stamina than frogs.', solutionSteps: ['1. **Pulmonary Loop**: Deoxygenated body blood → Vena Cava → RA → Tricuspid → RV → Pulmonary Artery → Lungs (oxygenated) → Pulmonary Veins → LA.', '2. **Systemic Loop**: LA → Bicuspid → LV → Aorta → Systemic body arteries → Tissues → Vena Cava.', '3. Unlike frogs (3-chambered heart mixing some O₂ and CO₂ blood), the sealed human **Septum** sends 100% pure O₂ blood at high pressure to muscles & brain—sustaining warm-blooded endurance!'], finalAnswer: 'Two clean non-mixing loops deliver maximal O₂ blood for warm-blooded metabolic stamina.' },
        { id: 'bio5-d2', marks: 4, question: 'Why is **Carbon Monoxide (CO)** poisoning far deadlier and harder to reverse than simple suffocation from carbon dioxide ($\\text{CO}_2$)?', solutionSteps: ['1. Haemoglobin binds oxygen cleanly as reversible **Oxyhaemoglobin**, unloading $\\text{O}_2$ easily at tissues.', '2. However, **CO binds Haemoglobin ~200× more tightly** than oxygen, forming stable bright-cherry **Carboxyhaemoglobin**!', '3. Even tiny traces of CO lock RBCs permanently shut—starving heart and brain neurons of oxygen rapidly!'], finalAnswer: 'CO binds Haemoglobin ~200× stronger than O₂ forming stable Carboxyhaemoglobin, blocking oxygen delivery.' },
        { id: 'bio5-d3', marks: 4, question: 'Explain why a patient with **Group AB⁺** can safely receive packed RBCs from **O⁻**, yet a patient with **O⁻** CANNOT receive blood from **AB⁺**!', solutionSteps: ['1. **AB⁺ recipient**: Plasma contains **NO anti-A, anti-B, or anti-Rh antibodies**; O⁻ donor RBCs carry **NO A, B, or Rh surface antigens** → zero immune clash!', '2. **O⁻ recipient**: Plasma carries **both anti-A AND anti-B antibodies** (and builds anti-Rh quickly!). Infusing AB⁺ RBCs covered in A, B, and Rh antigens causes instant lethal **clumping (agglutination)**!'], finalAnswer: 'AB⁺ has zero plasma antibodies; O⁻ has all antibodies while carrying zero donor antigens.' },
        { id: 'bio5-d4', marks: 4, question: 'Why are **valves present inside Veins and inside Heart chambers**, yet totally **absent along systemic Arteries**?', solutionSteps: ['1. Heart ventricular squeeze pushes blood powerfully forward into **Arteries** at high pressure (~120 mmHg)—blood rushes smoothly forward without needing arterial valves along branches.', '2. Once blood passes into low-pressure **Veins** (<10 mmHg), upward leg return against gravity would drip backward without **one-way pocket valves**!', '3. Inside the **Heart**, **Tricuspid, Bicuspid & Semilunar valves** prevent backflow between atrium and ventricle during powerful contractions.'], finalAnswer: 'High pressure drives forward flow in arteries; low venous pressure and heart pumping bursts strictly require one-way valves against backflow.' }
      ]
    },
    practiceWorksheet: {
      title: 'ICSE Class 8 Biology Worksheet — The Circulatory System (30 Marks)',
      instructions: 'Label heart chambers/valves clearly and verify directional arrows.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Precision Checks (1 × 8 = 8 Marks)',
          items: [
            '1. Iron-containing respiratory pigment inside mammalian RBCs: ______.',
            '2. Soluble blood protein converted into insoluble Fibrin clot strands: ______.',
            '3. Valve guarding Right Atrium → Right Ventricle: ______; Left Atrium → Left Ventricle: ______.',
            '4. Which blood vessel carries deoxygenated blood from RV directly to Lungs? ______.',
            '5. Largest artery curving directly out of Left Ventricle: ______.',
            '6. Natural pacemaker node initiating heart contractions: ______.',
            '7. True or False: Lymph contains numerous red blood cells giving it a pink colour.',
            '8. Normal systolic/diastolic blood pressure in a healthy resting adult: ______.'
          ]
        },
        {
          sectionTitle: 'Section B: Reasoning & Comparisons (3 × 4 = 12 Marks)',
          items: [
            '9. Compare RBCs, WBCs, and Platelets across nucleus, lifespan, and primary function.',
            '10. Why does the Left Ventricle have a far thicker muscular wall than the Right Ventricle?',
            '11. Contrast Arteries and Veins across lumen width, wall elasticity, and internal valves.',
            '12. Explain why Group O⁻ is the Universal Donor while Group AB⁺ is the Universal Recipient.'
          ]
        },
        {
          sectionTitle: 'Section C: Diagram & Clinical Logic (5 × 2 = 10 Marks)',
          items: [
            '13. Draw a clean block schematic of Internal Human Heart labelling all 4 chambers, Septum, Vena Cava, Aorta, Pulmonary vessels, and Tricuspid/Bicuspid valves.',
            '14. Trace the complete 2-loop Double Circulation path and explain why human blood never mixes O₂-rich and O₂-poor streams.'
          ]
        }
      ],
      answerKey: [
        '1. Haemoglobin',
        '2. Fibrinogen',
        '3. Tricuspid valve; Bicuspid (Mitral) valve',
        '4. Pulmonary artery',
        '5. Aorta',
        '6. SA Node (Sinoatrial node)',
        '7. False (Lymph lacks RBCs and platelets; pale clear)',
        '8. 120 / 80 mmHg',
        '9. RBC: no nucleus, 120d, O₂; WBC: nucleated, phagocytosis/antibodies; Platelets: no nucleus, blood clotting',
        '10. LV pumps O₂ blood across the entire systemic body; RV pumps gently next-door to lungs',
        '11. Artery: thick wall, narrow lumen, no valves; Vein: thin wall, wide lumen, pocket valves present',
        '12. O⁻ RBCs have zero A/B/Rh antigens; AB⁺ plasma has zero anti-A/B/Rh antibodies',
        '13. Must clearly differentiate Right (deoxygenated, Tricuspid) vs Left (oxygenated, Bicuspid, thicker LV wall) separated by Septum',
        '14. Pulmonary (RV→Lungs→LA) + Systemic (LV→Body→RA); complete muscular Septum seals O₂ and CO₂ streams apart'
      ]
    },
    examPreparationTips: [
      'Use **"R–T & L–B"** for heart valves: **R**ight side = **T**ricuspid; **L**eft side = **B**icuspid (Mitral)!',
      'Memorise **Artery = Away** rule—this guarantees you NEVER fall into the trap about Pulmonary Artery carrying deoxygenated blood!',
      'In heart diagrams, remember **Anatomical Left/Right**: viewer\'s LEFT side on paper represents the patient\'s **RIGHT Atrium & Right Ventricle**!'
    ],
    chapterSummary: [
      'Blood comprises ~55% **Plasma** and ~45% **RBCs** (biconcave, enucleated, Haemoglobin), **WBCs** (nucleated, phagocytosis & antibodies), and **Platelets** (trigger Fibrinogen → Fibrin clotting).',
      'ABO compatibility depends on RBC Antigens vs Plasma Antibodies: **O⁻ = Universal Donor**; **AB⁺ = Universal Recipient**.',
      '**Arteries** carry blood **away** from the heart (thick walls, narrow lumen, no valves); **Veins** carry blood **toward** the heart (thin walls, wide lumen, pocket valves); **Capillaries** are one-cell-thick exchange nets.',
      'Our **4-chambered Heart** separates deoxygenated right chambers (Tricuspid valve) from oxygenated left chambers (Bicuspid/Mitral valve, thickest Left Ventricle wall) via the **Septum**.',
      '**Double Circulation** completes Pulmonary (RV→Lungs→LA) and Systemic (LV→Body→RA) loops; **SA Node** drives ~72 bpm (**Lubb–Dupp** valve sounds; normal BP **120/80 mmHg**), while **Lymph** drains tissue fluid, fats, and immune cells.'
    ],
    importantQuestionsAndAnswers: [
      { type: 'Short Answer', question: 'Why is the right side of the human heart called the "Pulmonary Heart" and the left side the "Systemic Heart"?', answer: 'Because the **Right Atrium & Right Ventricle** pump deoxygenated blood exclusively to the **lungs (Pulmonary circuit)**, while the **Left Atrium & Left Ventricle** pump fresh oxygenated blood throughout the **entire body (Systemic circuit)**.' },
      { type: 'Short Answer', question: 'What is Double Circulation and state its chief physiological advantage?', answer: 'Blood passes through the heart **twice** during each full body trip (Pulmonary + Systemic loops). Keeping oxygenated and deoxygenated blood strictly separate ensures 100% O₂-saturated blood feeds high-energy warm-blooded muscles and brain!' },
      { type: 'Short Answer', question: 'State two structural ways Red Blood Cells differ from White Blood Cells.', answer: '1. Mature RBCs are uniform biconcave discs **lacking a nucleus**; WBCs are larger irregular amoeboid cells **possessing distinct nuclei**.\n2. RBCs contain red **haemoglobin** for gas transport; WBCs are colourless defenders fighting germs.' },
      { type: 'Reasoning', question: 'Why do doctors strictly wrap blood-pressure cuffs around the upper arm **brachial artery** rather than a wrist vein?', answer: 'Arterial blood reflects direct forceful **systolic (120 mmHg)** and **diastolic (80 mmHg)** pumping pressures generated by the Left Ventricle—whereas venous pressure has dropped flat (<10 mmHg) after passing tiny capillaries!' },
      { type: 'Short Answer', question: 'Why does human blood NOT clot spontaneously inside healthy living vessels?', answer: 'Healthy smooth vessel linings prevent platelet rupture, while liver cells circulate a natural anti-clotting agent called **Heparin** preventing spontaneous internal clots.' },
      { type: 'Long Answer', question: 'Describe the four valves inside the Human Heart, mentioning exact positions and functions.', answer: '1. **Tricuspid Valve** (3 cusps): Between **Right Atrium and Right Ventricle**—allows deoxygenated blood downward during atrial systole and shuts tightly ("Lubb") to stop backflow during RV squeeze.\n2. **Bicuspid / Mitral Valve** (2 cusps): Between **Left Atrium and Left Ventricle**—permits one-way oxygenated flow downward and seals tight during powerful LV contraction.\n3. **Pulmonary Semilunar Valve**: Base of Pulmonary Artery exit from RV—stops lung blood dripping back into relaxing RV ("Dupp").\n4. **Aortic Semilunar Valve**: Base of Aorta exit from LV—prevents high-pressure aortic blood rushing backward during diastole.' },
      { type: 'Long Answer', question: 'Explain Blood Coagulation (Clotting) step-by-step from cut injury to solid clot formation.', answer: 'When a vessel tears: (1) Ruptured platelets and injured tissues release **Thromboplastin (Thrombokinase)**; (2) In presence of Calcium ions (**Ca²⁺**), thromboplastin converts inactive plasma **Prothrombin** into active enzyme **Thrombin**; (3) **Thrombin** converts dissolved plasma protein **Fibrinogen** into sticky insoluble threads of **Fibrin**; (4) Fibrin tangles into a dense microscopic mesh trapping RBCs and platelets to form a sealing red **clot**, squeezing clear **serum** out cleanly!' },
      { type: 'HOTS', question: 'If a child is born with a congenital "hole in the Septum" between the Left and Right Ventricles, what symptoms would a cardiologist predict immediately?', answer: 'High-pressure oxygenated blood from the Left Ventricle mixes with deoxygenated Right Ventricular blood—diluting body oxygen supply! The child turns fatigued/breathless quickly during mild play and shows bluish skin/lips (**cyanosis**) until surgically repaired.' }
    ],
    practiceExercises: [
      { question: 'Trace the exact path from Right Ventricle back to Left Atrium via the lungs.', hint: 'Pulmonary Artery → Lungs → Pulmonary Veins.', answerGuide: 'RV → Pulmonary Semilunar Valve → Pulmonary Artery → Lung Capillaries → Pulmonary Veins → Left Atrium.' },
      { question: 'Why is Pulmonary Vein an artery/vein exception?', hint: 'Direction vs oxygen content.', answerGuide: 'Travels TOWARD the heart (making it a Vein) yet carries bright OXYGENATED blood fresh from lungs!' },
      { question: 'Distinguish Serum from Blood Plasma.', hint: 'Clotting proteins removed.', answerGuide: 'Serum = Plasma MINUS fibrinogen and clotting factors after blood clots.' }
    ]
  },
  quizQuestions: [
    {
      id: 'bio5-q1',
      type: 'mcq',
      question: 'Which blood vessel is the ONLY artery in the adult human body carrying DEOXYGENATED blood?',
      options: ['Aorta', 'Vena Cava', 'Pulmonary Artery', 'Pulmonary Vein'],
      correctAnswer: 'Pulmonary Artery',
      explanation: 'Arteries carry blood away from the heart; Pulmonary Artery pumps deoxygenated blood from Right Ventricle to lungs.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio5-q2',
      type: 'mcq',
      question: 'Which chamber of the human heart has the THICKEST muscular wall?',
      options: ['Right Atrium', 'Right Ventricle', 'Left Atrium', 'Left Ventricle'],
      correctAnswer: 'Left Ventricle',
      explanation: 'Left Ventricle generates peak systemic pressure to pump oxygenated blood through the Aorta to the entire body.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio5-q3',
      type: 'mcq',
      question: 'The Bicuspid (Mitral) valve guards the one-way opening directly between:',
      options: ['Right Atrium and Right Ventricle', 'Left Atrium and Left Ventricle', 'Right Ventricle and Pulmonary Artery', 'Left Ventricle and Aorta'],
      correctAnswer: 'Left Atrium and Left Ventricle',
      explanation: 'Left side uses the two-flap Bicuspid (Mitral) valve; Right side uses the three-flap Tricuspid valve.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio5-q4',
      type: 'mcq',
      question: 'Which blood corpuscle contains a distinct nucleus and fights pathogens via phagocytosis & antibodies?',
      options: ['Erythrocyte (RBC)', 'Leukocyte (WBC)', 'Thrombocyte (Platelet)', 'Plasma fibrinogen'],
      correctAnswer: 'Leukocyte (WBC)',
      explanation: 'Mature mammalian RBCs and Platelets lack nuclei; only WBCs (Leukocytes) are nucleated immune defenders.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio5-q5',
      type: 'mcq',
      question: 'Which blood group acts as the safest Universal Donor of packed red blood cells?',
      options: ['Group AB⁺', 'Group A⁺', 'Group B⁻', 'Group O⁻'],
      correctAnswer: 'Group O⁻',
      explanation: 'Group O⁻ RBCs carry zero A, B, or Rh surface antigens, avoiding recipient antibody clumping.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio5-q6',
      type: 'mcq',
      question: 'In blood clotting, active Thrombin converts soluble plasma Fibrinogen into an insoluble fibrous mesh called:',
      options: ['Haemoglobin', 'Heparin', 'Fibrin', 'Albumin'],
      correctAnswer: 'Fibrin',
      explanation: 'Insoluble Fibrin threads weave a dense biological net trapping blood cells to plug cuts cleanly.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio5-q7',
      type: 'mcq',
      question: 'What creates the first heartbeat sound ("LUBB") heard through a stethoscope?',
      options: [
        'Closing of Semilunar valves',
        'Closing of Tricuspid and Bicuspid (AV) valves',
        'Opening of Vena Cava',
        'Air rushing into lungs'
      ],
      correctAnswer: 'Closing of Tricuspid and Bicuspid (AV) valves',
      explanation: 'LUBB marks AV (Tricuspid & Bicuspid) closure at ventricular contraction; DUPP marks Semilunar closure.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio5-q8',
      type: 'mcq',
      question: 'Where is the natural Pacemaker (SA Node) of the human heart located?',
      options: ['Wall of Right Atrium', 'Tip of Left Ventricle', 'Inside the Aorta', 'Inside the Septum'],
      correctAnswer: 'Wall of Right Atrium',
      explanation: 'The Sinoatrial (SA) node sits in the upper Right Atrium wall and triggers ~72 beats/minute.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio5-q9',
      type: 'fill_blank',
      question: 'The normal resting blood pressure of a healthy adult human is _____ / 80 mmHg.',
      correctAnswer: '120',
      explanation: 'Normal adult arterial pressure is 120 mmHg (systolic) over 80 mmHg (diastolic).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio5-q10',
      type: 'mcq',
      question: 'How does Lymph differ structurally from whole Blood?',
      options: [
        'Lymph contains double the RBCs of blood',
        'Lymph lacks RBCs and Platelets, appearing pale clear and rich in immune lymphocytes',
        'Lymph flows exclusively inside arteries',
        'Lymph carries CO₂ only from brain'
      ],
      correctAnswer: 'Lymph lacks RBCs and Platelets, appearing pale clear and rich in immune lymphocytes',
      explanation: 'Lymph filters plasma across capillaries minus RBCs/platelets, draining via lymph nodes rich in WBC lymphocytes.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio5-q11',
      type: 'true_false',
      question: 'Human systemic arteries contain numerous internal pocket valves along their length just like veins.',
      correctAnswer: false,
      explanation: 'Veins contain pocket valves to stop low-pressure gravity backflow; systemic arteries rely on high pumping pressure and lack valves along their shafts.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio5-q12',
      type: 'hots',
      question: 'A person accidentally inhales exhaust gas rich in Carbon Monoxide (CO). Doctors observe normal breathing movements yet severe cellular oxygen starvation. Why?',
      options: [
        'CO freezes lung alveoli solid',
        'CO binds RBC Haemoglobin ~200× stronger than O₂ forming stable Carboxyhaemoglobin',
        'CO destroys all blood platelets',
        'CO dissolves the heart septum'
      ],
      correctAnswer: 'CO binds RBC Haemoglobin ~200× stronger than O₂ forming stable Carboxyhaemoglobin',
      explanation: 'Carbon monoxide irreversibly hijacks Haemoglobin into Carboxyhaemoglobin, preventing O₂ binding and delivery.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    { id: 'fc-b5-1', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'Percentage & contents of Blood Plasma vs Formed Elements?', back: '55% Plasma (90% water, proteins, salts, glucose, urea); 45% Formed Elements (RBCs, WBCs, Platelets).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b5-2', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'Why are mature human RBCs biconcave and enucleated?', back: 'Enucleation frees space for extra Haemoglobin; biconcave disc speeds O₂ diffusion and capillary flexing.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b5-3', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'Key final step of Blood Clotting?', back: 'Thrombin converts soluble plasma Fibrinogen into insoluble Fibrin threads trapping blood cells into a clot.', category: 'Formula', importance: 'Essential' },
    { id: 'fc-b5-4', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'Universal Donor vs Universal Recipient Blood Groups?', back: 'O⁻ = Universal Donor (no RBC antigens); AB⁺ = Universal Recipient (no anti-A/B/Rh plasma antibodies).', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b5-5', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'State the 2 Pulmonary vessel exceptions.', back: 'Pulmonary Artery = ONLY artery carrying DEOXYGENATED blood (to lungs); Pulmonary Veins = ONLY veins carrying OXYGENATED blood.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b5-6', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'Where are Tricuspid and Bicuspid (Mitral) valves located?', back: 'Tricuspid = Right Atrium → Right Ventricle; Bicuspid (Mitral) = Left Atrium → Left Ventricle.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b5-7', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'Why is the Left Ventricle wall thickest?', back: 'Pumps oxygenated blood at high pressure (~120 mmHg) through the Aorta to the entire body (vs RV only to nearby lungs).', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b5-8', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'What causes "LUBB" vs "DUPP" heart sounds?', back: 'LUBB = Tricuspid & Bicuspid valves closing; DUPP = Pulmonary & Aortic Semilunar valves closing.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b5-9', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'Pacemaker (SA Node) location & Normal Adult BP?', back: 'SA Node sits in Right Atrium wall (~72 bpm); Normal BP = 120/80 mmHg (Sphygmomanometer).', category: 'Formula', importance: 'Standard' },
    { id: 'fc-b5-10', subjectId: 'biology', chapterId: 'bio-circulatory', chapterTitle: 'Human Body: The Circulatory System', front: 'Three jobs of the Lymphatic System?', back: '1. Returns excess tissue fluid; 2. Lacteals absorb digested fats; 3. Lymph nodes produce infection-fighting lymphocytes.', category: 'Definition', importance: 'Standard' }
  ]
};
