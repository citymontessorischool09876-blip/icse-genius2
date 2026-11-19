import { Chapter } from '../../types';

export const BIO_CH6_NERVOUS: Chapter = {
  id: 'bio-nervous',
  subjectId: 'biology',
  chapterNumber: 6,
  title: 'Human Body: The Nervous System',
  subtitle: 'Neuron structure (dendrites, cyton, myelinated axon, nodes of Ranvier, synapse), sensory/motor/relay nerves, Brain regions (Cerebrum, Cerebellum, Medulla oblongata) & Spinal Cord, PNS & Autonomic nervous system, and Reflex Arcs',
  term: 'Annual',
  estimatedMinutes: 90,
  notes: {
    introduction: `Suppose you accidentally brush your fingertip against a scorching hot iron—within a fraction of a millisecond, *before* your brain even registers pain, your bicep yanks your hand cleanly to safety! Seconds later, your eyes read these exact sentences, your lungs quietly pace your breathing, and your fingers balance a pen effortlessly without consciously instructing every tiny muscle fibre. All of these split-second miracles run over the human body's living high-speed electrical superhighway: the **Nervous System**!

In Chapter 6 of Class 8 ICSE Biology (*Concise Biology / Gem's Biology*), we explore the cellular anatomy of a **Neuron** (with **dendrites, cyton, myelin sheath, Nodes of Ranvier, and synaptic junctions**), divide the human network into **Central Nervous System (Brain & Spinal Cord)**, **Peripheral Nervous System (12 cranial + 31 spinal nerve pairs)**, and **Autonomic Sympathetic/Parasympathetic controls**, inspect the three prime brain regions (**Cerebrum, Cerebellum, Medulla oblongata**), and trace every step of a **5-component Reflex Arc** alongside **Ivan Pavlov's conditioned reflexes**.`,
    learningObjectives: [
      'Draw and label every structural part of a multipolar Neuron (Dendrites, Cyton/Cell body, Nucleus, Axon, Myelin sheath, Node of Ranvier, Axon terminals) and explain impulse transmission across a Synapse.',
      'Differentiate Sensory (afferent), Motor (efferent), and Association/Interneurons.',
      'Explain protective armour shielding the Central Nervous System (Cranium, Vertebral column, 3 Meninges, Cerebrospinal Fluid).',
      'Identify exact functions of the three principal Brain divisions: Cerebrum (thought/memory/senses), Cerebellum (balance/posture), and Medulla oblongata (heartbeat/breathing).',
      'Classify Peripheral Nerves (12 pairs Cranial + 31 pairs Spinal) and contrast Autonomic Sympathetic vs Parasympathetic responses.',
      'Distinguish Voluntary, Involuntary, Unconditioned Reflex, and Conditioned Reflex actions (Pavlov\'s dog experiment), tracing the complete Reflex Arc pathway.'
    ],
    topics: [
      {
        id: 'bio-ch6-t1',
        title: '1. The Neuron (Nerve Cell), Nerves & Synaptic Transmission',
        content: `Packed with roughly **86 billion nerve cells** inside the human brain alone, the structural and functional unit of the nervous system is the **Neuron**—Earth's longest specialised animal cell (single leg sciatic axons stretch over 1 metre!).`,
        subtopics: [
          {
            subheading: '1.1 Anatomy of a Neuron & One-Way Synapse',
            body: `1. **Cell Body (Cyton / Soma)**: Star-shaped control hub housing a prominent **nucleus** and protein-making granules (*Nissl's granules*).
2. **Dendrites (Dendrons)**: Short, tree-like branched projections sprouting from the cyton that **receive** incoming signals from senses or neighbouring neurons and funnel impulses **toward the cyton**.
3. **Axon (Nerve Fibre)**: One long, unbranched cable carrying outgoing electrical nerve impulses **AWAY from the cyton** toward axon terminals!
4. **Myelin Sheath & Nodes of Ranvier**: A glistening fatty insulating sleeve wrapped around fast axons (like plastic insulation on copper wire!) broken at tiny bare gaps called **Nodes of Ranvier**—letting impulses leap swiftly (**saltatory conduction** up to $100\\text{ m/s}$) without short-circuiting!
5. **Axon Terminals & Synapse**: Branched end-knobs never physically touch the next neuron—leaving a microscopic fluid gap called a **Synapse**! When an electrical impulse hits an axon terminal, tiny vesicles squirt chemical **Neurotransmitters** (e.g., *acetylcholine*) across the synapse to spark the next neuron's dendrites—ensuring signals travel strictly **ONE-WAY**!`,
            keyPoint: 'Impulse direction inside EVERY neuron: Dendrites → Cyton → Axon → Axon Terminals → Synapse (strictly ONE-WAY)!'
          },
          {
            subheading: '1.2 Three Functional Classes of Neurons & Bundles Called Nerves',
            body: `- **Sensory (Afferent) Neurons**: Carry messages FROM **sense organs / receptors** (skin, eye, ear) **TO** the Spinal Cord and Brain.
- **Motor (Efferent) Neurons**: Carry commands FROM the Brain and Spinal Cord **OUT TO effectors** (**muscles or glands**).
- **Association / Relay Neurons (Interneurons)**: Connect sensory and motor neurons cleanly inside the Brain and Spinal Cord!
*(Note: A **Nerve** is a macroscopic cable bundling hundreds of insulated axons wrapped in connective tissue—just like a braided fibre-optic telephone cable!)*`,
            keyPoint: 'A NEURON is a single microscopic cell; a NERVE is a macroscopic cable bundle containing hundreds of neuron axons!'
          }
        ],
        definitions: [
          { term: 'Neuron', definition: 'Specialised elongated nerve cell—the basic structural and functional unit transmitting rapid electrochemical impulses.' },
          { term: 'Myelin Sheath', definition: 'Insulating lipid-protein covering around axons punctuated by Nodes of Ranvier that accelerates impulse conduction and prevents cross-talk.' },
          { term: 'Synapse', definition: 'Microscopic gap between the axon terminal of one neuron and dendrites of the next, bridged one-way by chemical neurotransmitters.' },
          { term: 'Nerve', definition: 'Cable-like bundle of parallel sensory and/or motor nerve fibres (axons) enclosed inside a protective sheath outside the CNS.' }
        ],
        diagram: {
          id: 'diag-bio-neuron-reflex',
          title: 'Anatomy of a Myelinated Neuron & 5-Step Reflex Arc Pathway',
          caption: 'Dendrites feed signals into the Cyton, racing down the Myelin-insulated Axon across Nodes of Ranvier to Axon Terminals (Synapse), alongside the complete Spinal Reflex Arc.',
          svgFigure: 'bio_neuron_reflex'
        },
        comparisonTable: {
          caption: 'Three Functional Types of Neurons',
          headers: ['Neuron Type', 'Direction of Impulse', 'Starts At → Ends At'],
          rows: [
            ['**Sensory (Afferent)**', 'Receptor → CNS', 'Eye, Ear, Skin pain receptor → Spinal Cord / Brain'],
            ['**Association (Interneuron)**', 'Within CNS only', 'Relays Sensory input → Motor output inside Spinal Cord/Brain'],
            ['**Motor (Efferent)**', 'CNS → Effector', 'Spinal Cord / Brain → Muscle fibre or Sweat/Salivary gland']
          ]
        },
        realLifeExample: 'Multiple sclerosis damages the fatty **myelin sheath** wrapping body axons—causing signals to leak and slow down, showing how vital clean myelin insulation is for crisp movement and vision!',
        commonMistakes: [
          {
            mistake: 'Confusing **Axon** with **Dendrite** impulse direction or thinking two neurons weld physically together.',
            correction: '**D**endrites drive signals **towards** Cyton; **A**xon drives impulses **A**way from Cyton—and neighbouring neurons stay cleanly separated across a microscopic chemical **Synapse**!'
          }
        ]
      },
      {
        id: 'bio-ch6-t2',
        title: '2. Central Nervous System: Brain Regions & Spinal Cord',
        content: `Humans organise nervous hardware cleanly into the **Central Nervous System (CNS — Brain & Spinal Cord)**, the **Peripheral Nervous System (PNS)** wiring limbs and senses to the CNS, and the self-piloting **Autonomic Nervous System (ANS)** controlling internal viscera.`,
        subtopics: [
          {
            subheading: '2.1 Armouring the CNS + Three Principal Brain Divisions',
            body: `Soft delicate brain and spinal tissue sits encased inside a triple fortress:
1. Bony **Cranium (Skull)** shielding the Brain, and stacked **Vertebrae (Backbone)** guarding the Spinal Cord.
2. Three tough protective membranes called **Meninges** (*Dura mater, Arachnoid, Pia mater* — inflamed in *meningitis*).
3. Clear shock-absorbing **Cerebrospinal Fluid (CSF)** cushioning the brain like liquid bubble-wrap!

**Three Key ICSE Brain Regions**:
- **1. Cerebrum (Forebrain — Largest ~80% weight)**: Deeply folded outer **grey matter (cortex)** packed with ridges (*gyri*) and grooves (*sulci*) boosting surface area! Right hemisphere rules the left body; left hemisphere rules the right body. Seat of **intelligence, memory, reasoning, willpower, speech, learning, and conscious sensations (sight, hearing, touch, taste, smell)**!
- **2. Cerebellum (Hindbrain — "Little Brain" tucked under rear cerebrum)**: Coordinates **smooth voluntary muscle timing, fine motor precision (typing/riding a bike), and body posture & balance**! *(Alcohol poisons the cerebellum first—causing staggering walk and slurred speech!)*
- **3. Medulla Oblongata (Brainstem base leading into Spinal Cord)**: Controls vital **involuntary life-support centres** automatically 24/7—**heartbeat rate, rhythmic breathing, blood pressure, swallowing, coughing, and sneezing**! *(Injury to the medulla is instantly fatal because breathing and heartbeat stop!)*`,
            keyPoint: 'Cerebrum = Thinking, Memory & Senses; Cerebellum = Balance & Coordination; Medulla Oblongata = Vital Involuntary Heartbeat & Breathing!'
          },
          {
            subheading: '2.2 The Spinal Cord (Grey Inside vs White Outside)',
            body: `Extending ~45 cm down from the medulla inside the neural canal of the backbone, the **Spinal Cord** flips the Brain's colour layout:
- **Inner H-shaped butterfly core = Grey Matter** (packed with neuron cytons/cell bodies).
- **Outer layer = White Matter** (glistening white myelinated nerve tracts racing up/down to the brain!).
*(Note: **Brain** has Grey Cortex OUTSIDE and White Tracts INSIDE; **Spinal Cord** has Grey Butterfly INSIDE and White Tracts OUTSIDE!)* Two main jobs: **(a) Conducts sensory/motor messages** between body and brain; **(b) Serves as the lightning-fast control centre of Spinal Reflex Actions**!`,
            keyPoint: 'Brain = Grey OUTSIDE, White INSIDE; Spinal Cord = White OUTSIDE, Grey (H-shaped) INSIDE!'
          }
        ],
        definitions: [
          { term: 'Meninges & CSF', definition: 'Three protective membranes wrapping the brain/spinal cord bathed in shock-absorbing Cerebrospinal Fluid (CSF).' },
          { term: 'Cerebrum', definition: 'Largest folded forebrain region governing intelligence, memory, reasoning, willpower, and sensory perception.' },
          { term: 'Cerebellum', definition: 'Hindbrain organ coordinating posture, equilibrium, and smooth balanced skeletal muscle movements.' },
          { term: 'Medulla Oblongata', definition: 'Lowest brainstem region regulating involuntary life-sustaining functions: breathing, heart rate, swallowing, and vomiting.' }
        ],
        comparisonTable: {
          caption: 'Three Major Human Brain Divisions & Primary Functions',
          headers: ['Brain Region', 'Anatomical Location', 'Core Functions Controlled'],
          rows: [
            ['**Cerebrum**', 'Largest upper folded hemispheres', 'Intelligence, memory, speech, consciousness, senses, voluntary commands'],
            ['**Cerebellum**', 'Behind & beneath posterior cerebrum', 'Posture, **body balance**, smooth fine-motor coordination'],
            ['**Medulla Oblongata**', 'Base of brainstem joining spinal cord', 'Involuntary **breathing, heartbeat, blood pressure**, coughing/swallowing']
          ]
        },
        realLifeExample: 'Bicycle helmets save lives specifically by preventing skull fractures and sudden jarring shocks to the **Cerebrum and Medulla** inside Cerebrospinal Fluid!',
        commonMistakes: [
          {
            mistake: 'Mixing up **Cerebrum** and **Cerebellum** functions or confusing brain vs spinal grey/white matter placement.',
            correction: 'Think "**Cere-BELL-um = BALance**"; "**CereBRum = BRainpower/Memory**"; and "**Medulla = Vital Heartbeat/Breathing**"!'
          }
        ]
      },
      {
        id: 'bio-ch6-t3',
        title: '3. Peripheral & Autonomic Nervous Systems (Sympathetic vs Parasympathetic)',
        content: `Command wires fanning outward from the CNS reach every fingertip, sweat gland, and heartbeat pacemaker via two coordinated divisions: **PNS** and **ANS**.`,
        subtopics: [
          {
            subheading: '3.1 Peripheral Nervous System (PNS): Cranial & Spinal Nerves',
            body: `- **12 Pairs of Cranial Nerves**: Emerge directly from the **Brain**, wiring head/neck senses and face muscles (*Olfactory* nose, *Optic* eye, *Auditory* ear, plus *Vagus* dipping down to heart & gut!).
- **31 Pairs of Spinal Nerves**: Emerge symmetrically through gaps between vertebrae from the **Spinal Cord**—every spinal nerve is a **Mixed Nerve** carrying both Sensory dorsal fibres entering AND Motor ventral fibres exiting!`,
            keyPoint: 'Humans have precisely 12 pairs of Cranial Nerves (Brain) and 31 pairs of Mixed Spinal Nerves (Spinal Cord)!'
          },
          {
            subheading: '3.2 Autonomic Nervous System (ANS): Gas Pedal vs Brake Pedal',
            body: `Running completely automatically without conscious thought, the **ANS** controls heart rate, pupil size, bronchial tubes, sweat glands, and digestion through **two antagonistic twins**:
- **Sympathetic System ("Accelerator / Emergency Prep")**: Fires alongside Adrenaline during stress, sports, or fright—**accelerates heartbeat, dilates eye pupils, widens lung bronchioles, inhibits stomach digestion**, preparing the body for action!
- **Parasympathetic System ("Brake / Rest & Digest")**: Takes over calmly during sleep or after meals—**slows heartbeat back down, constricts pupils, boosts saliva & gut peristalsis** to digest food and conserve energy!`,
            keyPoint: 'Sympathetic = Fight-or-Flight accelerator (faster heart, wider pupils, pauses gut); Parasympathetic = Rest-and-Digest calmer!'
          }
        ],
        definitions: [
          { term: 'Cranial Nerves', definition: '12 pairs of nerves arising directly from the brain serving eyes, ears, nose, tongue, face, and vagus viscera.' },
          { term: 'Spinal Nerves', definition: '31 pairs of mixed sensory-and-motor nerves emerging from the spinal cord to supply neck, trunk, and limbs.' },
          { term: 'Autonomic Nervous System', definition: 'Involuntary self-regulating division composed of Sympathetic and Parasympathetic branches controlling visceral organs.' }
        ],
        comparisonTable: {
          caption: 'Antagonistic Actions of Sympathetic vs Parasympathetic Systems',
          headers: ['Body Organ', 'Sympathetic (Stress / Action)', 'Parasympathetic (Rest / Digest)'],
          rows: [
            ['**Heart Rate**', 'Increases (pumps faster)', 'Decreases back to resting ~72 bpm'],
            ['**Eye Pupils**', 'Dilates (lets in more light)', 'Constricts to normal size'],
            ['**Airways (Bronchi)**', 'Dilates (deeper O₂ intake)', 'Constricts back to resting diameter'],
            ['**Digestive Tract & Saliva**', 'Inhibits / slows down digestion', '**Stimulates** saliva & peristalsis cleanly']
          ]
        },
        realLifeExample: 'Sitting calmly in an air-conditioned cinema when suddenly a fire alarm rings—your **Sympathetic** nerves immediately widen pupils and pulse; once announced as a false drill, your **Parasympathetic** nerves drop your pulse calmly back down!',
        commonMistakes: [
          {
            mistake: 'Thinking all cranial nerves carry only sensory messages.',
            correction: 'Some cranial nerves are purely sensory (Optic/Olfactory), some purely motor (eye-turning), and others like the **Vagus nerve** are **mixed**—while **ALL 31 spinal nerves are strictly MIXED**!'
          }
        ]
      },
      {
        id: 'bio-ch6-t4',
        title: '4. Voluntary Actions vs Reflex Actions, Reflex Arc & Pavlov\'s Experiment',
        content: `How do your fingers instantly drop a scalding frying pan long before your cerebrum even finishes thinking *"Ouch, that burned me!"*? Through a brilliant spinal-cord shortcut called a **Reflex Action**.`,
        subtopics: [
          {
            subheading: '4.1 Voluntary vs Involuntary vs Complete 5-Part Reflex Arc',
            body: `- **Voluntary Action**: Consciously planned and chosen by the **Cerebrum** (*e.g., picking up a textbook, solving a geometry proof, riding toward school*).
- **Reflex Action**: An **instantaneous, automatic, stereotyped, and protective involuntary response** to a sudden stimulus executed rapidly via the **Spinal Cord** (or brainstem for eye blinking) *without prior conscious cerebrum thought*!
- **The 5 Essential Links of a Reflex Arc**:
  1. **Receptor**: Heat/pain nerve ending inside skin receiving the **Stimulus**.
  2. **Sensory (Afferent) Neuron**: Races impulse from finger receptor into dorsal root of the **Spinal Cord**.
  3. **Interneuron (Association Neuron / CNS)**: Relays signal cleanly across spinal grey matter (also sends an alert copy *up* to brain afterward!).
  4. **Motor (Efferent) Neuron**: Fires emergency command outward through ventral root.
  5. **Effector (Muscle / Gland)**: Arm bicep muscle contracts instantly, **jerking the hand away safely**!`,
            keyPoint: 'Always recite the 5-link Reflex Arc strictly in order: Stimulus → Receptor → Sensory Neuron → Spinal Cord (Interneuron) → Motor Neuron → Effector!'
          },
          {
            subheading: '4.2 Natural (Unconditioned) vs Conditioned (Acquired) Reflexes',
            body: `- **Natural / Unconditioned (Inborn) Reflexes**: Built-in from birth needing zero learning—*knee-jerk, eye-blinking to dust, pupil narrowing in bright sunlight, salivating with lemon juice on tongue, pulling hand from a sharp needle!*
- **Conditioned / Acquired Reflexes (Ivan Pavlov's Famous Bell–Dog Experiment)**:
  - **Before Conditioning**: Dog naturally salivates at sight/smell of food (natural reflex), ignores a plain ringing bell.
  - **Training Pairing**: Russian physiologist **Ivan Pavlov** repeatedly rang a bell *just seconds before* serving meat powder for weeks.
  - **After Conditioning**: Simply ringing the **bell alone** (with zero food!) triggered copious salivation! Everyday human conditioned reflexes include **tying shoelaces without looking, braking automatically at red traffic lights, typing fluently, and salivating at the clink of lunchboxes**!`,
            keyPoint: 'Unconditioned = Inborn survival reflexes (blinking, knee-jerk); Conditioned = Learned habit reflexes built by repeated association (Pavlov\'s bell, braking at red light)!'
          }
        ],
        definitions: [
          { term: 'Reflex Action', definition: 'Automatic, instantaneous, involuntary protective response to a stimulus mediated primarily by the spinal cord without conscious brain deliberation.' },
          { term: 'Reflex Arc', definition: 'Shortest anatomical neural circuit travelled by a reflex impulse: Receptor → Sensory neuron → Interneuron (CNS) → Motor neuron → Effector.' },
          { term: 'Conditioned Reflex', definition: 'Learned automatic response acquired through repeated association of a neutral cue with a natural stimulus (demonstrated by Ivan Pavlov).' }
        ],
        comparisonTable: {
          caption: 'Natural (Unconditioned) vs Conditioned Reflexes',
          headers: ['Criterion', 'Natural / Unconditioned Reflex', 'Conditioned / Acquired Reflex'],
          rows: [
            ['Origin', '**Inborn / Inherited** at birth', '**Learned** through repeated experience/training'],
            ['Persistence', 'Permanent across whole life', 'Can gradually **fade** if reinforcement stops'],
            ['Primary Centre', 'Chiefly Spinal Cord / Brainstem', 'Initially involves **Cerebrum** learning → turns automatic'],
            ['Examples', 'Knee-jerk, blinking, hand pull from hot stove', 'Pavlov\'s dog salivating at bell, cycling, braking at red light']
          ]
        },
        realLifeExample: 'Walking past an Indian sweet shop and instantly feeling your mouth water just from seeing colourful gulab jamuns behind clean glass is a pure **Conditioned Reflex** learned in childhood!',
        commonMistakes: [
          {
            mistake: 'Confusing **Heartbeat / Gut Peristalsis** with **Spinal Reflexes** or putting Motor before Sensory in a Reflex Arc.',
            correction: 'Sensory ALWAYS brings input **IN** first (`S` before `M`), followed by Interneuron → Motor → Effector! Continuous background breathing/heartbeat are **Involuntary visceral controls (Medulla/ANS)** rather than sudden stimulus-response **Reflexes**.'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Neuron & Cyton', definition: 'Functional nerve cell unit comprising star-shaped nucleated cell body (cyton), branching dendrites, and long axon.' },
      { term: 'Myelin Sheath & Node of Ranvier', definition: 'Fatty axon insulator punctuated by bare nodes enabling super-fast saltatory electrical leaps.' },
      { term: 'Synapse', definition: 'Microscopic gap between two neurons bridged chemically by neurotransmitters ensuring strictly one-way flow.' },
      { term: 'Cerebrum', definition: 'Largest folded forebrain region controlling intelligence, memory, reasoning, willpower, and conscious senses.' },
      { term: 'Cerebellum', definition: 'Hindbrain balance centre regulating equilibrium, muscle tone, and smooth skilled movement.' },
      { term: 'Medulla Oblongata', definition: 'Lowest brainstem hub controlling automatic breathing, heartbeat, swallowing, and sneezing.' },
      { term: 'Spinal Cord', definition: 'Dorsal nerve cord protected in backbone (inner grey butterfly + outer white tracts) driving spinal reflexes.' },
      { term: 'Cranial & Spinal Nerves', definition: '12 pairs of nerves from Brain and 31 pairs of mixed nerves from Spinal Cord forming the PNS.' },
      { term: 'Reflex Arc', definition: '5-step emergency pathway: Receptor → Sensory neuron → Interneuron (CNS) → Motor neuron → Effector.' },
      { term: 'Conditioned Reflex', definition: 'Habitual learned reflex acquired via repeated stimulus pairing (Pavlov\'s dog salivating at bell).' }
    ],
    formulaSheet: [
      { title: 'Neuron Impulse Flow', expression: 'Dendrites → Cyton (Cell Body) → Axon → Axon Terminals → Neurotransmitter Synapse', meaning: 'Strictly unidirectional transmission inside every nerve circuit.' },
      { title: '5-Step Spinal Reflex Arc', expression: 'Stimulus → Receptor → Sensory Neuron → Spinal Cord (Interneuron) → Motor Neuron → Effector (Muscle/Gland)', meaning: 'Bypasses slow conscious cerebrum to save tissues instantaneously from injury.' }
    ],
    solvedExamples: [
      {
        id: 'bio6-ex1',
        question: 'Write out the exact anatomical **Reflex Arc** occurring when a student accidentally steps barefoot onto a sharp thumbtack.',
        steps: [
          '1. **Stimulus**: Sharp tack pricks skin of foot sole.',
          '2. **Receptor**: Pain receptors in foot skin fire nerve impulses.',
          '3. **Sensory (Afferent) Neuron**: Carries impulse up leg into dorsal horn of **Spinal Cord**.',
          '4. **Interneuron (Association Neuron)**: Connects sensory input immediately across spinal grey matter to motor neuron.',
          '5. **Motor (Efferent) Neuron**: Delivers command down leg to **Effector (leg flexor muscles)** → **Foot jerks up instantly**!'
        ],
        finalAnswer: 'Foot Receptor → Sensory Neuron → Spinal Interneuron → Motor Neuron → Leg Muscle Effector (foot withdraws before brain feels full pain).',
        keyRule: 'Receptor → Sensory → CNS (Interneuron) → Motor → Effector.'
      },
      {
        id: 'bio6-ex2',
        question: 'Why did Russian scientist **Ivan Pavlov** earn international fame studying dogs, meat powder, and a ringing bell?',
        steps: [
          '1. Dogs naturally salivate (**unconditioned reflex**) upon tasting meat, NOT at a plain bell.',
          '2. Pavlov rang a bell repeatedly right before feeding meat for many days.',
          '3. Soon, ringing the **bell alone** (with zero food!) triggered salivation—proving animals form learned **Conditioned Reflexes** linking neutral cues to biological responses!'
        ],
        finalAnswer: 'Pavlov proved Conditioned (Acquired) Reflexes—brain association turns a neutral sound (bell) into an automatic salivation trigger.',
        keyRule: 'Pavlov\'s experiment is the classic scientific proof of Conditioned Reflexes.'
      },
      {
        id: 'bio6-ex3',
        question: 'Doctors immediately warn motorists NEVER to drink alcohol because even two drinks cause erratic steering, slurred speech, and stumbling. Which **specific brain region** is impaired first?',
        steps: [
          '1. Alcohol depresses the **Cerebellum**—the hindbrain hub coordinating fine muscle balance, smooth posture, and eye–hand steering accuracy.',
          '2. Meanwhile, slowed impulses across **synapses** lengthen braking reaction times dangerously!'
        ],
        finalAnswer: 'Cerebellum (posture, balance, and fine motor coordination) alongside slowed Cerebrum reaction speed.',
        keyRule: 'Staggering walk + slurred balance always points directly to Cerebellum impairment.'
      },
      {
        id: 'bio6-ex4',
        question: 'Why does a severe blow directly to the back of the neck / base of the skull (**Medulla Oblongata**) often cause instant death—whereas limited damage to part of the **Cerebrum** may only impair memory or speech?',
        steps: [
          '1. The **Medulla Oblongata** houses the vital involuntary centres regulating **rhythmic breathing** and **heartbeat rate**.',
          '2. Destroying the Medulla stops heart pumping and diaphragm breathing immediately!',
          '3. Though the **Cerebrum** governs higher intelligence and voluntary speech, breathing and heart rhythm continue independently via Medulla & SA node.'
        ],
        finalAnswer: 'Medulla Oblongata controls vital involuntary heartbeat and breathing; injuring it halts life-support instantly.',
        keyRule: 'Always associate Medulla Oblongata with life-or-death involuntary breathing & heartbeat.'
      },
      {
        id: 'bio6-ex5',
        question: 'Explain why **Nerve Impulses ALWAYS travel ONE-WAY** across a chemical **Synapse** (Axon Terminal → next Dendrite) and never backward.',
        steps: [
          '1. Only the **Axon Terminals** of the pre-synaptic neuron pack neurotransmitter vesicles (*acetylcholine*).',
          '2. Only the **Dendrite membrane** of the next post-synaptic neuron carries matching chemical receptor locks!',
          '3. Because dendrites lack neurotransmitter pouches and axon terminals lack receptors, backward flow across a synapse is physically impossible!'
        ],
        finalAnswer: 'Neurotransmitter vesicles sit exclusively in Axon Terminals while receptors sit solely on next Dendrites—enforcing strict one-way conduction.',
        keyRule: 'Synapse acts as a biological one-way chemical diode!'
      },
      {
        id: 'bio6-ex6',
        question: 'State TWO structural advantages of wrapping nerve axons inside a **Myelin Sheath** interrupted by **Nodes of Ranvier**.',
        steps: [
          '1. **Electrical Insulation**: Prevents electrical nerve impulses from leaking sideways or short-circuiting into adjacent axons inside tightly packed nerves.',
          '2. **Ultra-Fast Saltatory Speed**: Impulses leap rapidly from one bare **Node of Ranvier** to the next (~100 m/s instead of ~2 m/s along unmyelinated fibres)!'
        ],
        finalAnswer: 'Prevents cross-talk short-circuits and accelerates nerve speed by letting impulses jump across Nodes of Ranvier.',
        keyRule: 'Myelin = Fatty insulator; Nodes of Ranvier = Signal jumping gaps boosting speed!'
      },
      {
        id: 'bio6-ex7',
        question: 'Contrast the layout of **Grey Matter** and **White Matter** inside the Human **Brain** vs the **Spinal Cord**.',
        steps: [
          '1. **Brain (Cerebrum / Cerebellum)**: **Grey Matter** (cytons/cell bodies) forms the folded **OUTER cortex**; **White Matter** (myelinated axons) fills the **INNER core**.',
          '2. **Spinal Cord**: Layout reverses—H-shaped **Grey Matter** forms the **INNER central core**, surrounded by an **OUTER coat of White Matter** nerve tracts!'
        ],
        finalAnswer: 'Brain = Grey outside / White inside; Spinal Cord = Grey H-core inside / White outside.',
        keyRule: 'Grey matter = cell bodies (cytons); White matter = fatty myelinated axons.'
      },
      {
        id: 'bio6-ex8',
        question: 'Classify these actions cleanly into **Voluntary**, **Natural Reflex**, **Conditioned Reflex**, or **Autonomic Involuntary**: (a) Pupils shrinking in bright sun, (b) Solving a math equation, (c) Braking instinctively at a red signal, (d) Stomach digesting dinner.',
        steps: [
          '(a) Pupils shrinking in bright sun: **Natural (Unconditioned) Reflex**.',
          '(b) Solving a math equation: **Voluntary Action** (Cerebrum).',
          '(c) Braking instinctively at red light: **Conditioned (Acquired) Reflex**.',
          '(d) Stomach digesting dinner: **Autonomic Involuntary** (Parasympathetic + Medulla).'
        ],
        finalAnswer: '(a) Natural reflex, (b) Voluntary, (c) Conditioned reflex, (d) Autonomic involuntary.',
        keyRule: 'Learned habits = Conditioned reflex; Inborn instant protection = Natural reflex; Thinking choice = Voluntary.'
      }
    ],
    gradedQuestions: {
      easy: [
        { id: 'bio6-e1', marks: 2, question: 'Name the three main structural parts of a Neuron and state the direction an impulse travels inside it.', solutionSteps: ['Parts: **Dendrites**, **Cell Body (Cyton)**, and **Axon**.', 'Impulse travels: **Dendrites → Cyton → Axon** (toward axon terminals).'], finalAnswer: 'Dendrites, Cyton, Axon; flow = Dendrites → Cyton → Axon.' },
        { id: 'bio6-e2', marks: 2, question: 'What protects the delicate human Brain from everyday bumps and mechanical shocks?', solutionSteps: ['1. Bony skull (**Cranium**).', '2. Three protective **Meninges** membranes + shock-absorbing **Cerebrospinal Fluid (CSF)** cushion.'], finalAnswer: 'Cranium (skull), three Meninges, and Cerebrospinal Fluid (CSF).' },
        { id: 'bio6-e3', marks: 2, question: 'How many pairs of Cranial Nerves and Spinal Nerves belong to the human Peripheral Nervous System?', solutionSteps: ['**12 pairs of Cranial Nerves** (arising from Brain).', '**31 pairs of Spinal Nerves** (arising from Spinal Cord).'], finalAnswer: '12 pairs Cranial Nerves; 31 pairs Spinal Nerves.' },
        { id: 'bio6-e4', marks: 2, question: 'State one primary function each for Cerebrum, Cerebellum, and Medulla Oblongata.', solutionSteps: ['**Cerebrum**: Intelligence, memory, reasoning & conscious senses.', '**Cerebellum**: Body balance & smooth muscle coordination.', '**Medulla**: Breathing, heartbeat & involuntary life-support.'], finalAnswer: 'Cerebrum = Thought/Memory; Cerebellum = Balance; Medulla = Breathing/Heartbeat.' }
      ],
      medium: [
        { id: 'bio6-m1', marks: 3, question: 'Distinguish between Sensory Neurons, Motor Neurons, and Association (Relay) Neurons.', solutionSteps: ['1. **Sensory**: Carry receptor stimuli → CNS.', '2. **Association (Interneuron)**: Link sensory to motor signals inside Brain/Spinal Cord.', '3. **Motor**: Carry CNS commands → Muscles/Glands (effectors).'], finalAnswer: 'Sensory (Receptor→CNS), Relay (within CNS), Motor (CNS→Effector).' },
        { id: 'bio6-m2', marks: 3, question: 'Compare Sympathetic and Parasympathetic Autonomic actions on Heart, Pupils, and Digestion.', solutionSteps: ['**Sympathetic (Stress)**: Speeds heart, dilates pupils, slows gut digestion.', '**Parasympathetic (Rest)**: Slows heart, constricts pupils, boosts saliva & gut digestion.'], finalAnswer: 'Sympathetic accelerates action & pauses gut; Parasympathetic calms pulse & boosts digestion.' },
        { id: 'bio6-m3', marks: 3, question: 'Why is a **Reflex Action** executed inside the Spinal Cord faster than a **Voluntary Action**?', solutionSteps: ['1. Voluntary actions must travel all the way up to the Cerebrum for conscious decision before descending.', '2. Reflex actions route across a short 3-neuron **Spinal Reflex Arc** straight from skin → spinal cord → arm muscle in ~15 milliseconds—preventing severe burns!'], finalAnswer: 'Short spinal cord loop skips slow conscious cerebrum analysis.' },
        { id: 'bio6-m4', marks: 3, question: 'Contrast Natural (Unconditioned) Reflexes with Conditioned Reflexes, giving two examples of each.', solutionSteps: ['1. **Natural**: Inborn, permanent without learning (*blinking, knee-jerk, pulling from needle*).', '2. **Conditioned**: Acquired by training/association, can fade (*Pavlov\'s dog salivating at bell, braking at red light, tying laces*).'], finalAnswer: 'Inborn automatic protection vs learned repeated association.' }
      ],
      difficult: [
        { id: 'bio6-d1', marks: 4, question: 'Draw/trace the complete **Reflex Arc** for blinking automatically when wind blows dust toward your eye, naming every neuron and structure.', solutionSteps: ['1. **Stimulus**: Dust/breeze strikes cornea.', '2. **Receptor**: Corneal pain/touch endings.', '3. **Sensory Neuron**: Ophthalmic cranial fibres carry alert to **Brainstem**. *(Note: head reflexes route via brainstem instead of lower spinal cord!)*', '4. **Interneuron → Motor Neuron**: Brainstem fires eyelid motor fibres immediately.', '5. **Effector**: Eyelid *orbicularis* muscles contract → **Instant protective blink**!'], finalAnswer: 'Cornea Receptor → Sensory → Brainstem Interneuron → Motor → Eyelid Muscle Effector.' },
        { id: 'bio6-d2', marks: 4, question: 'Why are **Grey Matter** and **White Matter** coloured differently under a microscope, and how does their arrangement differ between Brain and Spinal Cord?', solutionSteps: ['1. **Grey Matter** appears pinkish-grey because it packs dense **neuron cell bodies (cytons)** and unmyelinated dendrites.', '2. **White Matter** gleams bright white because of fatty **myelin sheaths** wrapping long axon bundles!', '3. **Layout**: Brain places Grey Matter **outside** (cortex) and White **inside**; Spinal Cord flips them—Grey butterfly **inside**, White tracts **outside**!'], finalAnswer: 'Grey = cytons; White = myelinated axons. Brain is Grey-out/White-in; Spinal cord is White-out/Grey-in.' },
        { id: 'bio6-d3', marks: 4, question: 'Explain how a single **Synapse** guarantees unidirectional signal flow AND allows one neuron to integrate signals from hundreds of neighbours.', solutionSteps: ['1. Neurotransmitter pouches reside solely inside **Axon Terminals**, while chemical receptors sit solely on post-synaptic **Dendrites**—blocking backward signal flow cleanly.', '2. Because a star-shaped Cyton spreads wide branching **Dendrites** receiving thousands of tiny excitatory and inhibitory synapses, a neuron computes combined inputs before firing!'], finalAnswer: 'Asymmetric vesicle/receptor placement enforces one-way flow while branched dendrites integrate multiple inputs.' },
        { id: 'bio6-d4', marks: 4, question: 'If a patient suffers a car-accident spinal fracture severing the lower thoracic Spinal Cord completely, explain why they lose foot sensation AND cannot move toes voluntarily—yet their foot still jerks if pricked lightly with a pin!', solutionSteps: ['1. Severed spinal white tracts block upward sensory messages to the **Cerebrum** (no conscious feeling of prick) and block downward voluntary motor commands (paralysis).', '2. However, the lower **Lumbar Spinal Reflex Arc** below the injury remains physically intact—so a pinprick still triggers an automatic **local spinal reflex jerk** without brain awareness!'], finalAnswer: 'Severed tracts break brain communication, yet intact lower spinal grey segments preserve automatic local reflex jerks.' }
      ]
    },
    practiceWorksheet: {
      title: 'ICSE Class 8 Biology Worksheet — The Nervous System (30 Marks)',
      instructions: 'Sequence reflex pathways accurately and distinguish brain centres cleanly.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Structural Recall (1 × 8 = 8 Marks)',
          items: [
            '1. Basic structural & functional unit of the nervous system: ______.',
            '2. Fatty insulating cover around axons interrupted by bare ______ of Ranvier.',
            '3. Microscopic chemical gap bridging two adjacent neurons: ______.',
            '4. Largest folded forebrain part governing memory and intelligence: ______.',
            '5. Three shock-absorbing membranes shielding Brain and Spinal Cord: ______.',
            '6. Total number of Cranial nerves (______ pairs) and Spinal nerves (______ pairs).',
            '7. Name the involuntary brainstem region controlling heartbeat & breathing: ______.',
            '8. True or False: In the Spinal Cord, Grey Matter surrounds White Matter on the outside.'
          ]
        },
        {
          sectionTitle: 'Section B: Biological Reasoning (3 × 4 = 12 Marks)',
          items: [
            '9. Trace the exact 5-step Reflex Arc when touching a thorny rose stem.',
            '10. Contrast Cerebrum, Cerebellum, and Medulla Oblongata functions.',
            '11. Explain why nerve impulses travel ONLY in one direction across a Synapse.',
            '12. Distinguish Natural vs Conditioned Reflexes using Ivan Pavlov\'s experiment.'
          ]
        },
        {
          sectionTitle: 'Section C: Diagram & Autonomic Control (5 × 2 = 10 Marks)',
          items: [
            '13. Draw a neat labelled myelinated Neuron showing Dendrites, Cyton, Nucleus, Axon, Myelin Sheath, Node of Ranvier, and Axon Terminals.',
            '14. Compare Sympathetic and Parasympathetic divisions across 4 organs (Heart, Pupils, Lungs, Stomach) and state CNS Grey/White matter difference.'
          ]
        }
      ],
      answerKey: [
        '1. Neuron',
        '2. Nodes',
        '3. Synapse',
        '4. Cerebrum',
        '5. Meninges',
        '6. 12 pairs Cranial; 31 pairs Spinal',
        '7. Medulla oblongata',
        '8. False (Spinal cord has inner H-shaped Grey Matter and outer White Matter)',
        '9. Skin Receptor → Sensory Neuron → Spinal Interneuron → Motor Neuron → Arm Muscle Effector',
        '10. Cerebrum: memory/senses/thought; Cerebellum: posture/balance; Medulla: involuntary heart/breathing',
        '11. Neurotransmitter vesicles exist only in Axon terminals; receptors exist only on next Dendrites',
        '12. Natural = inborn (blinking); Conditioned = learned by repeated pairing (Pavlov\'s bell triggers dog salivation)',
        '13. Must label all 7 parts clearly with arrow flowing Dendrites → Cyton → Axon',
        '14. Sympathetic speeds heart/lungs/pupils & pauses gut; Parasympathetic slows pulse & boosts gut; Brain=Grey out, Spinal=Grey in'
      ]
    },
    examPreparationTips: [
      'Memorise **Brain 3-Slogans**: **Cere-BR-um** = Brainpower/Memory; **Cere-BELL-um** = Balance/Posture; **Medulla** = Heartbeat/Breathing.',
      'Always double-check **Grey/White flip**: **B**rain has Grey **O**utside; **S**pinal Cord has Grey **I**nside (Butterfly H)!',
      'Never skip **Interneuron / CNS** when writing the 5-step **Reflex Arc**!'
    ],
    chapterSummary: [
      'The **Neuron** transmits one-way electrochemical impulses from **Dendrites → Cyton → Axon** (accelerated by **Myelin sheath & Nodes of Ranvier**) across chemical **Synapses**.',
      '**Sensory** neurons carry inputs to CNS; **Interneurons** process inside CNS; **Motor** neurons drive **Effectors (muscles/glands)**.',
      'The CNS (shielded by cranium/vertebrae, **3 Meninges**, and **CSF**) consists of the **Brain** (**Cerebrum** thought/memory, **Cerebellum** balance, **Medulla** breathing/heartbeat) and **Spinal Cord**.',
      'The PNS contains **12 cranial** and **31 mixed spinal nerve pairs**; the **Autonomic System** balances **Sympathetic** action with **Parasympathetic** rest.',
      '**Reflex Actions** execute instant protective responses along a **5-step Reflex Arc**—contrasted between inborn **Natural** and learned **Conditioned (Pavlov)** reflexes.'
    ],
    importantQuestionsAndAnswers: [
      { type: 'Short Answer', question: 'What is a Synapse and which chemical bridges messages across it?', answer: 'A **Synapse** is the tiny microscopic fluid gap separating the axon terminals of one neuron from the dendrites of the next. Arrival of an electrical impulse releases chemical **Neurotransmitters** (such as *acetylcholine*) to excite the next neuron one-way.' },
      { type: 'Short Answer', question: 'List two key functions performed by Cerebrospinal Fluid (CSF).', answer: '1. Acts as a liquid **hydraulic shock-absorber** protecting delicate brain and spinal tissue from sudden head knocks.\n2. Supplies nutrients and removes metabolic wastes gently around CNS surfaces.' },
      { type: 'Short Answer', question: 'Why are all 31 pairs of Spinal Nerves classified as "Mixed Nerves"?', answer: 'Because every spinal nerve bundles BOTH incoming **Sensory (afferent)** fibres entering the dorsal spinal root AND outgoing **Motor (efferent)** command fibres leaving the ventral spinal root inside a single sheath!' },
      { type: 'Reasoning', question: 'Why do humans yank their hand away from a hot teapot BEFORE consciously feeling the burning sting in the Cerebrum?', answer: 'Because the short **Spinal Reflex Arc** loops instantly from skin → sensory → spinal cord → motor → arm muscle (~15 ms), saving tissue immediately while slower upward signals reach the Cerebrum a fraction of a second later to register "Ouch!"' },
      { type: 'Short Answer', question: 'Give three everyday examples of Conditioned Reflexes in school students.', answer: '1. Mouth watering at the smell or lunchbox rattle of favourite biryani.\n2. Pressing bicycle handbrakes automatically when a red traffic light flashes.\n3. Writing cursive words or tying shoelaces smoothly without looking step-by-step.' },
      { type: 'Long Answer', question: 'Describe the structure of a Myelinated Neuron and trace the complete 5-part Reflex Arc pathway.', answer: 'A **Neuron** has (1) **Cyton (cell body)** with nucleus & Nissl granules, (2) branching **Dendrites** receiving incoming stimuli toward cyton, and (3) a long **Axon** insulated by **Myelin Sheath** segments separated by bare **Nodes of Ranvier** ending in **Axon Terminals** facing a **Synapse**. In a **Reflex Arc**, a **Stimulus** triggers a **Receptor** → fires **Sensory neuron** → relays across **Spinal Interneuron** → triggers **Motor neuron** → contracts **Effector muscle** instantaneously!' },
      { type: 'Long Answer', question: 'Contrast Cerebrum, Cerebellum, and Medulla Oblongata in location, appearance, and vital physiological control.', answer: '1. **Cerebrum** (largest upper folded domes; outer grey cortex, inner white): Seat of intelligence, reasoning, memory, willpower, language, and all five conscious senses.\n2. **Cerebellum** (ribbed twin lobes tucked beneath back of cerebrum): Coordinates body equilibrium, muscle tone, and smooth skilled sports/writing movements.\n3. **Medulla Oblongata** (lowest cone linking brain to spinal cord): Controls continuous involuntary life-support centres—heartbeat rhythm, breathing ventilation, blood vessel tone, coughing, and swallowing.' },
      { type: 'HOTS', question: 'After a stroke blocks tiny blood vessels feeding strictly the LEFT side of a patient\'s **Cerebrum**, doctors observe paralysis on the RIGHT arm and leg. Explain this neurological crossover.', answer: 'Ascending sensory and descending motor nerve tracts cross over cleanly inside the lower brainstem (**Medulla decussation**)! Thus the **Left Cerebral Hemisphere** commands right-side muscles (and typically speech), while the **Right Cerebral Hemisphere** commands left-side body movement.' }
    ],
    practiceExercises: [
      { question: 'Arrange properly: Motor neuron, Receptor, Effector, Sensory neuron, Interneuron.', hint: 'Input → CNS → Output.', answerGuide: 'Receptor → Sensory neuron → Interneuron (Spinal cord) → Motor neuron → Effector.' },
      { question: 'Match brain region: (a) Solving sudoku, (b) Tightrope balance, (c) Breathing while fast asleep.', hint: 'Cerebrum, Cerebellum, Medulla.', answerGuide: '(a) Cerebrum, (b) Cerebellum, (c) Medulla Oblongata.' },
      { question: 'What happens to pupil diameter and heart rate when Sympathetic system activates?', hint: 'Fight-or-flight prep.', answerGuide: 'Pupils dilate wide and heart rate increases rapidly.' }
    ]
  },
  quizQuestions: [
    {
      id: 'bio6-q1',
      type: 'mcq',
      question: 'Which structural part of a Neuron carries electrical nerve impulses AWAY from the cell body (Cyton)?',
      options: ['Dendrites', 'Axon', 'Nucleus', 'Meninges'],
      correctAnswer: 'Axon',
      explanation: 'Dendrites bring impulses toward the Cyton; the long Axon transmits impulses away toward Axon Terminals.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio6-q2',
      type: 'mcq',
      question: 'Tiny uninsulated gaps along the Myelin Sheath where fast nerve impulses leap forward are called:',
      options: ['Synapses', 'Nodes of Ranvier', 'Nissl granules', 'Effectors'],
      correctAnswer: 'Nodes of Ranvier',
      explanation: 'Impulses jump swiftly from node to node along myelinated axons (saltatory conduction).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio6-q3',
      type: 'mcq',
      question: 'Which division of the human Brain maintains posture, equilibrium, and smooth muscular balance?',
      options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Spinal cord'],
      correctAnswer: 'Cerebellum',
      explanation: 'The Cerebellum ("little brain") coordinates posture, balance, and precision skeletal movement.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio6-q4',
      type: 'mcq',
      question: 'Vital involuntary centres controlling heartbeat rate, breathing, and swallowing reside inside the:',
      options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Olfactory lobe'],
      correctAnswer: 'Medulla oblongata',
      explanation: 'Medulla oblongata at the brainstem base automates breathing, heartbeat, blood pressure, coughing, and swallowing.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio6-q5',
      type: 'mcq',
      question: 'What is the correct sequence of the 5-part Spinal Reflex Arc?',
      options: [
        'Effector → Motor → Interneuron → Sensory → Receptor',
        'Receptor → Motor → Interneuron → Sensory → Effector',
        'Receptor → Sensory neuron → Spinal Interneuron → Motor neuron → Effector',
        'Cerebrum → Effector → Sensory → Receptor'
      ],
      correctAnswer: 'Receptor → Sensory neuron → Spinal Interneuron → Motor neuron → Effector',
      explanation: 'Receptor senses stimulus → Sensory neuron enters spinal cord → Interneuron relays → Motor neuron fires Effector.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio6-q6',
      type: 'mcq',
      question: 'How many pairs of Cranial Nerves and Spinal Nerves exist in humans?',
      options: ['10 cranial, 21 spinal', '12 cranial, 31 spinal', '31 cranial, 12 spinal', '24 cranial, 62 spinal'],
      correctAnswer: '12 cranial, 31 spinal',
      explanation: 'Humans possess 12 pairs of cranial nerves (from brain) and 31 pairs of mixed spinal nerves (from spinal cord).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio6-q7',
      type: 'mcq',
      question: 'Ivan Pavlov\'s famous experiment with dogs salivating at the sound of a bell demonstrated:',
      options: ['Natural inborn reflex', 'Conditioned (acquired) reflex', 'Hormonal dwarfism', 'Sympathetic digestion'],
      correctAnswer: 'Conditioned (acquired) reflex',
      explanation: 'Repeated pairing of bell + food trained an automatic learned Conditioned Reflex.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio6-q8',
      type: 'mcq',
      question: 'How does the arrangement of Grey Matter and White Matter differ between Brain and Spinal Cord?',
      options: [
        'Both have White Matter outside',
        'Brain has Grey outside / White inside; Spinal Cord has White outside / Grey H-core inside',
        'Brain has Grey inside / White outside',
        'Neither contains White Matter'
      ],
      correctAnswer: 'Brain has Grey outside / White inside; Spinal Cord has White outside / Grey H-core inside',
      explanation: 'Cerebral cortex puts grey cytons outside; Spinal cord places the butterfly grey core inside wrapped in white tracts.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio6-q9',
      type: 'fill_blank',
      question: 'A microscopic junction where neurotransmitters bridge impulses one-way between two neurons is called a _____.',
      correctAnswer: 'synapse',
      explanation: 'Chemical neurotransmitters cross the synaptic gap one-way from axon terminals to the next dendrites.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio6-q10',
      type: 'mcq',
      question: 'Which Autonomic branch slows heartbeat back down and stimulates stomach digestion after dinner?',
      options: ['Sympathetic system', 'Parasympathetic system', 'Sensory cranial system', 'Spinal reflex arc'],
      correctAnswer: 'Parasympathetic system',
      explanation: 'Parasympathetic nerves control "Rest and Digest"—lowering pulse and boosting saliva & peristalsis.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio6-q11',
      type: 'true_false',
      question: 'Inside a synapse, nerve signals routinely bounce backward from dendrites back into the previous neuron\'s axon terminals.',
      correctAnswer: false,
      explanation: 'Neurotransmitter vesicles reside solely in axon terminals and receptors solely on post-synaptic dendrites—enforcing strictly ONE-WAY flow.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio6-q12',
      type: 'hots',
      question: 'While baking, Meera brushes a hot tray edge and jerks her hand back instantly before crying "Ow!". Why did her hand move BEFORE she felt the burn?',
      options: [
        'Hand nerves connect faster to teeth than eyes',
        'Her Spinal Cord completed the fast Reflex Arc immediately before slower ascending sensory tracts reached her conscious Cerebrum',
        'Her Cerebellum shut down completely',
        'Her Pancreas released insulin instantly'
      ],
      correctAnswer: 'Her Spinal Cord completed the fast Reflex Arc immediately before slower ascending sensory tracts reached her conscious Cerebrum',
      explanation: 'The spinal cord reflex arc withdraws the hand immediately in milliseconds while pain awareness travels slightly later to the cerebrum.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    { id: 'fc-b6-1', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'Impulse path inside a single Neuron?', back: 'Dendrites → Cyton (Cell body) → Axon → Axon Terminals → Synapse (strictly one-way!).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-b6-2', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'Role of Myelin Sheath & Nodes of Ranvier?', back: 'Fatty insulator preventing cross-talk short-circuits; Nodes of Ranvier allow fast leaping conduction.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b6-3', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'How does a Synapse ensure one-way conduction?', back: 'Neurotransmitter vesicles lie only in Axon Terminals; receptor proteins lie only on next Dendrites.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b6-4', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'Roles of Cerebrum, Cerebellum & Medulla Oblongata?', back: 'Cerebrum = Intelligence/Memory/Senses; Cerebellum = Balance/Posture; Medulla = Breathing/Heartbeat.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b6-5', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'Grey vs White Matter layout: Brain vs Spinal Cord?', back: 'Brain = Grey outside / White inside. Spinal Cord = White outside / Grey H-shaped butterfly core inside.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b6-6', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'How many Cranial and Spinal nerve pairs in humans?', back: '12 pairs Cranial Nerves (Brain) and 31 pairs Mixed Spinal Nerves (Spinal Cord).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-b6-7', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'Recite the 5-step Reflex Arc pathway.', back: 'Stimulus → Receptor → Sensory neuron → Spinal Interneuron → Motor neuron → Effector (Muscle/Gland).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-b6-8', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'What did Ivan Pavlov\'s Bell–Dog experiment prove?', back: 'Conditioned (Acquired) Reflexes—neutral cues paired repeatedly with natural stimuli trigger automatic reflexes.', category: 'Date / Event', importance: 'Essential' },
    { id: 'fc-b6-9', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'Sympathetic vs Parasympathetic Autonomic actions?', back: 'Sympathetic = Emergency action (fast pulse, wide pupils, pause gut); Parasympathetic = Rest & Digest (calm pulse, boost gut).', category: 'Scientific Law', importance: 'Standard' },
    { id: 'fc-b6-10', subjectId: 'biology', chapterId: 'bio-nervous', chapterTitle: 'Human Body: The Nervous System', front: 'What shields the Brain & Spinal Cord mechanically?', back: 'Skull (Cranium) / Vertebral column, 3 protective Meninges, and shock-absorbing Cerebrospinal Fluid (CSF).', category: 'Definition', importance: 'Standard' }
  ]
};
