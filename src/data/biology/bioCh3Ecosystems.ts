import { Chapter } from '../../types';

export const BIO_CH3_ECOSYSTEMS: Chapter = {
  id: 'bio-ecosystems',
  subjectId: 'biology',
  chapterNumber: 3,
  title: 'Ecosystems',
  subtitle: 'Biotic & abiotic ecosystem components, food chains vs food webs, trophic levels, ecological pyramids & Lindeman\'s 10% energy flow law, symbiotic relationships (mutualism, commensalism, parasitism), and forest conservation',
  term: 'Half-Yearly',
  estimatedMinutes: 85,
  notes: {
    introduction: `Step outside after a monsoon shower into a lush deciduous forest or beside a sunlit lotus pond. Towering sal trees catch morning sunbeams, caterpillars munch tender leaves, tree frogs ambush insects, swooping hawks watch from canopy branches, and silent fungal mushrooms sprout out of rotting timber underfoot. None of these creatures lives in isolation—every living organism is woven into a living web bound tightly to non-living sunlight, water, air, and soil minerals!

In Chapter 3 of Class 8 ICSE Biology (*Concise Biology / Gem's Biology*), we study the science of **Ecosystems** (coined by A.G. Tansley in 1935). You will classify **Biotic producers, consumers, and decomposers** alongside **Abiotic climate factors**, trace energy down **grazing and detritus food chains** and interconnected **food webs**, solve **10% energy transfer numerical problems** across **Ecological Pyramids**, compare **Symbiotic and Parasitic interactions**, and explore **India's Forest Ecosystems** and biodiversity conservation.`,
    learningObjectives: [
      'Define Ecosystem and distinguish clearly between its Biotic (living) and Abiotic (non-living) components.',
      'Classify biotic organisms into Autotrophs (producers), Heterotrophs (primary, secondary, tertiary consumers), and Saprotrophs (decomposers & detritivores).',
      'Explain unidirectional solar energy flow vs cyclic nutrient recycling, contrasting Food Chains and Food Webs.',
      'Interpret Ecological Pyramids of Numbers, Biomass, and Energy—applying Lindeman\'s 10% Law numerically across trophic levels.',
      'Compare key biological interactions: Mutualism (+/+), Commensalism (+/0), Parasitism (+/−), Predation, and Competition.',
      'Describe vertical forest strata (canopy, understorey, forest floor), forest flora/fauna roles, deforestation impacts, and conservation programmes (National Parks, Wildlife Sanctuaries, Chipko movement).'
    ],
    topics: [
      {
        id: 'bio-ch3-t1',
        title: '1. Structure of an Ecosystem: Biotic & Abiotic Components',
        content: `An **Ecosystem** is a self-sustaining functional unit of nature in which living organisms (**Biotic community**) interact continuously with one another and with their non-living physical environment (**Abiotic habitat**)—whether a tiny glass aquarium, a village pond, a desert oasis, or the entire Amazon rainforest.`,
        subtopics: [
          {
            subheading: '1.1 Biotic Components: Producers, Consumers & Decomposers',
            body: `1. **Producers (Autotrophs)**: Chlorophyll-bearing green plants, algae, and photosynthetic cyanobacteria that trap solar energy to manufacture organic glucose from $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ (**Photosynthesis**)—forming the sole energetic gateway into almost every ecosystem!
2. **Consumers (Heterotrophs)**: Animals unable to synthesise food that feed directly or indirectly on producers:
   - **Primary Consumers (Herbivores)**: Plant-eaters feeding directly on producers (*Grasshopper, Deer, Rabbit, Zooplankton*).
   - **Secondary Consumers (Primary Carnivores)**: Predators eating herbivores (*Frog, Lizard, Fox, Small Fish*).
   - **Tertiary Consumers (Top Carnivores / Apex Predators)**: Large carnivores feeding on secondary consumers (*Hawk, Snake, Lion, Tiger*) with no regular natural predators above them! *(**Omnivores** like Bears, Crows, and Humans feed across multiple levels.)*
3. **Decomposers (Saprotrophs)**: Microscopic **fungi and saprophytic bacteria** that secrete digestive enzymes onto dead bodies, fallen leaves, and animal dung—breaking complex proteins/cellulose back into simple **inorganic nitrates, phosphates, and $\\text{CO}_2$** returned to soil and air! *(**Scavengers** like vultures/hyenas & **Detritivores** like earthworms tear dead carcasses down first before microbes finish the chemical recycling.)*`,
            keyPoint: 'Without Decomposers (Bacteria & Fungi), Earth would quickly bury itself under dead corpses while running completely out of soil nitrates for living plants!'
          },
          {
            subheading: '1.2 Abiotic Components: Climatic & Edaphic Factors',
            body: `Non-living physical and chemical factors govern which species can survive in any biome:
- **Sunlight**: Primary energy engine; controls photosynthesis rates, flowering (*photoperiodism*), and animal vision/migrations.
- **Temperature**: Regulates enzyme activity; organisms either thrive across narrow ranges or migrate/hibernate (**estivation/hibernation**).
- **Water & Humidity**: Essential biological solvent; limits desert vs wetland flora (xerophytes vs hydrophytes).
- **Air & Wind**: Supplies $\\text{O}_2$ for respiration, $\\text{CO}_2$ for photosynthesis, and $\\text{N}_2$ for bacterial fixation; wind assists pollination and seed dispersal.
- **Soil (Edaphic Factor)**: Soil texture, humus content, pH, and mineral richness dictate crop and forest productivity.`,
            keyPoint: 'Energy flows ONE-WAY (Sun → Producers → Consumers → Lost as Heat), whereas Matter/Nutrients RECYCLE endlessly via Decomposers!'
          }
        ],
        definitions: [
          { term: 'Ecosystem', definition: 'Self-regulating natural unit comprising interacting biotic communities and their physical abiotic environment (term coined by A.G. Tansley).' },
          { term: 'Autotrophs (Producers)', definition: 'Chlorophyll-containing organisms capturing sunlight to convert inorganic CO₂ and water into organic glucose.' },
          { term: 'Decomposers (Saprotrophs)', definition: 'Bacteria and fungi that digest dead organic matter externally, recycling essential mineral nutrients back to soil.' }
        ],
        comparisonTable: {
          caption: 'Roles of Functional Biotic Groups in Every Ecosystem',
          headers: ['Biotic Group', 'Nutrition Mode', 'Examples', 'Ecosystem Role'],
          rows: [
            ['Producers', '**Autotrophic** (Photosynthesis)', 'Grass, Neem tree, Pond algae', 'Fix solar energy into organic chemical bonds'],
            ['Primary Consumers', '**Herbivorous** (Heterotrophic)', 'Grasshopper, Deer, Cattle, Tadpole', 'Transfer plant energy to animal biomass'],
            ['Secondary Consumers', '**Carnivorous** (Heterotrophic)', 'Frog, Spider, Insect-eating birds', 'Regulate herbivore populations cleanly'],
            ['Tertiary / Apex Consumers', '**Top Carnivore**', 'Hawk, Cobra, Tiger, Lion', 'Maintain ecological balance across trophic levels'],
            ['Decomposers', '**Saprotrophic**', '*Bacillus* bacteria, *Agaricus* fungi', 'Mineralise dead waste back into soil nutrients']
          ]
        },
        realLifeExample: 'A sealed glass **terrarium bottle** packed with damp potting soil, green moss, two tiny snails, and invisible soil bacteria can stay alive and balanced on a sunlit windowsill for years—solar light enters through glass while water, O₂, CO₂, and soil nutrients recycle completely inside!',
        commonMistakes: [
          {
            mistake: 'Confusing **Vultures / Earthworms** as true Decomposers.',
            correction: 'Vultures are **Scavengers** and earthworms are **Detritivores** (they *ingest* dead tissue internally); true **Decomposers** are **Bacteria and Fungi** that perform extracellular chemical mineralisation!'
          }
        ]
      },
      {
        id: 'bio-ch3-t2',
        title: '2. Food Chains, Food Webs & Ecological Pyramids (10% Energy Law)',
        content: `Every step in a feeding sequence where energy transfers from one organism to the next is called a **Trophic Level** (*trophos* = nourishment). Tracing who eats whom reveals linear **Food Chains** weaving together into resilient **Food Webs**, quantified cleanly by **Ecological Pyramids**.`,
        subtopics: [
          {
            subheading: '2.1 Food Chains vs Food Webs',
            body: `- **Food Chain**: A linear single-path feeding sequence showing unidirectional energy flow:
  - *Grassland Chain*: $\\text{Grass (T}_1\\text{)} \\to \\text{Grasshopper (T}_2\\text{)} \\to \\text{Frog (T}_3\\text{)} \\to \\text{Snake (T}_4\\text{)} \\to \\text{Hawk (T}_5\\text{)}$.
  - *Pond Aquatic Chain*: $\\text{Phytoplankton (T}_1\\text{)} \\to \\text{Zooplankton (T}_2\\text{)} \\to \\text{Small Fish (T}_3\\text{)} \\to \\text{Kingfisher / Crane (T}_4\\text{)}$.
- **Why Food Chains Stay Short (4–5 Levels Max)**: Only ~10% of energy reaches each upper step; after 4 or 5 jumps, virtually zero usable chemical energy remains to support another huge predator!
- **Food Web**: Real ecosystems interlock dozens of food chains into a complex feeding network! Because snakes eat mice, frogs, AND lizards, if a disease wipes out frogs temporarily, snakes survive on mice—giving a **Food Web far greater ecological stability** than any fragile single food chain!`,
            keyPoint: 'A single broken link collapses an isolated Food Chain—but a rich Food Web offers alternative feeding routes that stabilise biodiversity!'
          },
          {
            subheading: '2.2 Ecological Pyramids & Lindeman\'s 10% Energy Transfer Law',
            body: `Graphical steps stacked from Producers at the broad base up to Apex Predators at the peak form three types of **Ecological Pyramids** (*Charles Elton*):
1. **Pyramid of Numbers**: Counts individual organisms at each level. Usually upright (millions of grass blades → thousands of deer → few tigers)—*except* a **Single Giant Oak Tree** feeding thousands of caterpillars and beetles, which looks **spindle-shaped or inverted**!
2. **Pyramid of Biomass**: Measures total dry organic weight ($\\text{g/m}^2$). Upright in forests/grasslands, *but* sometimes **inverted in deep oceans** where rapidly reproducing tiny phytoplankton weigh less at any instant than heavy whales/fishes!
3. **Pyramid of Energy (ALWAYS STRICTLY UPRIGHT!)**: Measures total kilocalories or Joules ($\\text{J}$) flowing per year. By **Raymond Lindeman's 10% Law (1942)**, when one trophic level consumes the level below, **only ~10% of stored energy transfers onward as new body tissue**—while **~90% is lost** cleanly via cellular respiration, body heat, movement, and undigested faeces!

**Quick Numerical Rule**: Starting with $10,000\\text{ J}$ in Green Plants ($\\text{T}_1$) → Herbivores ($\\text{T}_2$) store **$1,000\\text{ J}$** → Frogs/Snakes ($\\text{T}_3$) store **$100\\text{ J}$** → Top Hawk ($\\text{T}_4$) receives just **$10\\text{ J}$**!`,
            keyPoint: 'Pyramids of Numbers or Biomass can occasionally invert—but the Pyramid of ENERGY is NEVER inverted because heat is lost at every step!'
          }
        ],
        definitions: [
          { term: 'Trophic Level', definition: 'Distinct feeding step or position occupied by a group of organisms inside an ecosystem food chain (T₁ = Producers).' },
          { term: 'Food Web', definition: 'Network of interconnected and overlapping food chains providing alternate dietary pathways and ecosystem stability.' },
          { term: 'Lindeman\'s 10% Law', definition: 'Principle stating that on average only ~10% of energy available at one trophic level passes to the next consumer level; 90% dissipates as metabolic heat and waste.' },
          { term: 'Biomagnification', definition: 'Progressive buildup in concentration of persistent toxic pesticides (like DDT) inside top predators along a food chain.' }
        ],
        diagram: {
          id: 'diag-bio-ecosystem-pyramid',
          title: 'Ecological Energy Pyramid & Lindeman\'s 10% Law',
          caption: 'Upright four-tier pyramid illustrating 90% metabolic energy loss at each step from 10,000 J in Producers down to 10 J in Tertiary Hawk consumers.',
          svgFigure: 'bio_ecosystem_pyramid'
        },
        comparisonTable: {
          caption: 'Comparison of the Three Ecological Pyramids',
          headers: ['Pyramid Type', 'Quantity Measured', 'Can it Ever Invert?', 'Classic Example / Exception'],
          rows: [
            ['**Pyramid of Numbers**', 'Individual head-count at each level', 'Yes (e.g., Tree ecosystem)', '1 Giant Banyan Tree → 10,000 Insects → 500 Lice'],
            ['**Pyramid of Biomass**', 'Total dry living weight ($\\text{kg/m}^2$)', 'Yes (Marine pond/ocean)', 'Rapidly dividing tiny algae weigh less than large fishes at one snapshot'],
            ['**Pyramid of Energy**', 'Rate of energy flow ($\\text{J/m}^2/\\text{yr}$)', '**NEVER — Always Upright**', '10,000 J (Plants) → 1,000 J → 100 J → 10 J (Hawk)']
          ]
        },
        realLifeExample: 'That is why vegetarian staples like wheat or pulses nourish far more people per hectare than beef: feeding $10,000\\text{ kcal}$ of corn directly to humans yields $10,000\\text{ kcal}$, whereas routing corn through cattle loses ~90% first!',
        commonMistakes: [
          {
            mistake: 'Drawing food-chain arrows pointing from predator BACK toward prey (Hawk → Snake).',
            correction: 'Biological arrows ALWAYS represent **direction of ENERGY flow ("is eaten by")**—pointing cleanly from Prey **to** Predator: **Grass → Grasshopper → Frog → Snake → Hawk**!'
          }
        ]
      },
      {
        id: 'bio-ch3-t3',
        title: '3. Interdependence & Symbiotic Relationships Among Organisms',
        content: `Beyond simply eating one another, neighbouring species evolve intimate lifelong ecological partnerships called **Biotic Interactions**—ranging from mutually beneficial alliances (**Symbiosis / Mutualism**) to one-sided exploitation (**Parasitism**).`,
        subtopics: [
          {
            subheading: '3.1 Mutualism, Commensalism, Parasitism & Predation',
            body: `1. **Mutualism (+ / + Both Benefit)**:
   - ***Rhizobium* bacteria in Legume Root Nodules**: Pea/gram plants shelter bacteria inside pink root nodules and feed them sugars, while *Rhizobium* fixes atmospheric $\\text{N}_2$ gas into fertile soil nitrates!
   - **Lichens (Alga + Fungus)**: Fungal threads anchor onto bare rocks and soak water/minerals, while green algal cells photosynthesise sugars for both!
   - **Honeybees & Flowering Plants**: Bees gather nectar/pollen food while unintentionally cross-pollinating flowers!
2. **Commensalism (+ / 0 One Benefits, Host Unharmed & Unhelped)**:
   - **Orchids growing on Mango branches (Epiphytes)**: Perched high to catch sunlight without stealing any sap from the host tree!
   - **Remora sucker-fish riding Sharks** (eats fallen scraps without bothering the shark); **Cattle Egret birds** snapping insects stirred up by grazing buffaloes!
3. **Parasitism (+ / − Parasite Benefits, Living Host Harmed)**:
   - **Ectoparasites** (live *outside* host): Head lice, dog ticks, blood-sucking leeches; and plant stem parasite ***Cuscuta* (Amarbel / Dodder)** wrapping yellow leafless threads to suck phloem sap via **haustoria**!
   - **Endoparasites** (live *inside* host): Liver fluke, tapeworm (*Taenia*) in human intestine, *Plasmodium* malaria parasite inside red blood cells.
4. **Predation (+ / − Immediate Kill & Consumption)**: Tiger hunting deer or frog snapping mosquitoes—crucially preventing prey overpopulation!`,
            keyPoint: 'Distinguish carefully: Symbiosis/Mutualism = BOTH gain (+/+); Commensalism = one gains, host unaffected (+/0); Parasitism = parasite feeds slowly off living host (+/−) without wishing immediate host death!'
          }
        ],
        definitions: [
          { term: 'Symbiosis (Mutualism)', definition: 'Close ecological partnership between two different species in which both organisms derive mutual benefit (+/+).' },
          { term: 'Commensalism', definition: 'Relationship where one partner (commensal) gains shelter, transport, or leftover food while the host remains neither benefited nor harmed (+/0).' },
          { term: 'Parasitism', definition: 'Non-mutual association where a smaller parasite lives on or inside a living host, stealing nutrition and harming the host (+/−).' }
        ],
        comparisonTable: {
          caption: 'Summary Matrix of Key Ecological Interactions',
          headers: ['Interaction', 'Species A', 'Species B', 'Classic ICSE Example'],
          rows: [
            ['**Mutualism**', 'Benefits (**+**)', 'Benefits (**+**)', '*Rhizobium* + Pea roots; Lichen (Alga + Fungus)'],
            ['**Commensalism**', 'Benefits (**+**)', 'Unaffected (**0**)', 'Epiphytic orchid on mango branch; Shark & Remora'],
            ['**Parasitism**', 'Benefits (**+**)', 'Harmed (**−**)', '*Cuscuta* (Amarbel) on hedge; Tapeworm in gut'],
            ['**Predation**', 'Predator (**+**)', 'Prey killed (**−**)', 'Tiger hunting spotted deer; Hawk catching snake']
          ]
        },
        realLifeExample: 'Look closely at roadside hedge bushes blanketed in bright yellow spaghetti-like tangles without any green leaves or roots—that is parasitic ***Cuscuta* (Amarbel)** sinking sucking pegs (**haustoria**) right into the host shrub\'s phloem!',
        commonMistakes: [
          {
            mistake: 'Calling an Epiphytic Orchid on a tree trunk a "parasite".',
            correction: 'Green orchids have their own **chlorophyll** and make their own food! They borrow only high sunlit perch space—so they are harmless **Commensals**, NOT parasites!'
          }
        ]
      },
      {
        id: 'bio-ch3-t4',
        title: '4. Forest Ecosystems, Biomes & Biodiversity Conservation',
        content: `Covering roughly **31% of Earth's land surface**, forests act as the planet's **"Green Lungs"**, absorbing billions of tonnes of greenhouse $\\text{CO}_2$, locking rainwater gently into underground aquifers, preventing topsoil erosion, and sheltering over **80% of terrestrial biodiversity**.`,
        subtopics: [
          {
            subheading: '4.1 Forest Vertical Strata & Characteristic Indian Flora/Fauna',
            body: `Inside a dense Indian tropical moist forest or Himalayan woodland, light intensity drops sharply from top to bottom—creating **four distinct horizontal layers**:
1. **Emergent & Canopy Layer**: Towering sunlit crowns (*Teak, Sal, Mahogany, Banyan, Deodar*) forming a continuous green umbrella—home to hornbills, flying squirrels, monkeys, and tree snakes.
2. **Understorey / Shrub Layer**: Shade-tolerant dwarf trees, bamboo clumps, wild hibiscus, and shade-adapted birds/butterflies.
3. **Herb & Fern Layer**: Low flowering herbs, ferns, and medicinal plants gripping damp humus.
4. **Forest Floor (Detritus Zone)**: Dim, humid carpet of fallen leaves (**humus**) teeming with earthworms, termites, beetles, mushrooms, and decomposers cycling nutrients nonstop!`,
            keyPoint: 'Forest canopies intercept fierce monsoon raindrops gently, letting water trickle softly down roots to recharge groundwater instead of washing topsoil into floods!'
          },
          {
            subheading: '4.2 Deforestation Threats & Conservation Milestones in India',
            body: `Unchecked **deforestation** for urban sprawl, mining, dams, and logging triggers **flash floods, soil erosion, species extinction, and global warming**. Conservation restores balance through:
- **In-Situ Conservation** (protecting wildlife inside natural habitats):
  - **National Parks** (strictly zero human grazing/logging): **Jim Corbett** (Uttarakhand — Bengal Tiger), **Gir** (Gujarat — Asiatic Lion), **Kaziranga** (Assam — One-horned Rhinoceros).
  - **Wildlife Sanctuaries & Biosphere Reserves**: **Sundarbans** (West Bengal mangrove tigers), **Nilgiri** Biosphere Reserve.
- **Afforestation & People's Movements**: **Chipko Movement** (1973, Garhwal Himalayas led by Sunderlal Bahuguna & Gaura Devi hugging trees to halt felling) and annual **Van Mahotsav** tree-planting drives!`,
            keyPoint: 'Distinguish In-Situ conservation (saving animals inside wild National Parks/Sanctuaries) vs Ex-Situ conservation (Zoos, Botanical Gardens, Seed Banks)!'
          }
        ],
        definitions: [
          { term: 'Canopy', definition: 'Continuous leafy roof formed by crowns of tall forest trees shading the lower understorey.' },
          { term: 'Humus', definition: 'Dark spongy organic soil layer formed by partial microbial decomposition of fallen forest leaves and twigs.' },
          { term: 'In-Situ Conservation', definition: 'Protecting endangered species inside their own native wild ecosystem (National Parks, Sanctuaries, Biosphere Reserves).' }
        ],
        realLifeExample: 'Before the 1973 **Chipko Movement** in Uttarakhand, bare deforested hillsides suffered catastrophic monsoon landslides; once village communities protected oaks and pine groves, hill springs flowed steadily again!',
        commonMistakes: [
          {
            mistake: 'Confusing **Wildlife Sanctuary** and **National Park** legal rules.',
            correction: 'In a **National Park**, *all* grazing, forestry, and private ownership are strictly banned; in a **Wildlife Sanctuary**, strictly regulated sustainable grazing/firewood gathering by local communities may be permitted.'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Ecosystem', definition: 'Self-sustaining interactive complex of living biotic communities and non-living abiotic surroundings.' },
      { term: 'Trophic Level', definition: 'Sequential feeding step in a food chain (T₁ Producers, T₂ Herbivores, T₃ Secondary, T₄ Tertiary consumers).' },
      { term: 'Food Chain vs Food Web', definition: 'Single linear pathway vs interconnected multi-pathway network of feeding relationships.' },
      { term: 'Lindeman\'s 10% Law', definition: 'Only ~10% of energy at any trophic level is incorporated into the next consumer level.' },
      { term: 'Biomagnification', definition: 'Increasing concentration of non-biodegradable toxins (like DDT or mercury) at higher trophic levels.' },
      { term: 'Mutualism', definition: 'Beneficial +/+ association between two distinct species (e.g., *Rhizobium* and legume roots).' },
      { term: 'Commensalism', definition: 'Association where one organism gains (+), while the host is unaffected (0) (e.g., Epiphytic orchid).' },
      { term: 'Parasitism', definition: 'Association where parasite benefits (+) while draining nutrients from a living harmed host (−) (e.g., *Cuscuta*).' },
      { term: 'Saprotrophs', definition: 'Decomposers (bacteria and fungi) feeding externally on dead decaying matter to recycle minerals.' },
      { term: 'In-Situ Conservation', definition: 'Preserving flora and fauna directly within their native ecosystems (National Parks, Biosphere Reserves).' }
    ],
    formulaSheet: [
      { title: 'Lindeman\'s 10% Energy Law Formula', expression: 'Energy at T(n+1) = 0.10 × Energy at T(n)', meaning: '90% of incoming trophic energy dissipates as metabolic heat, movement, and undigested faeces at every jump.' },
      { title: 'General Trophic Energy Cascade', expression: 'Sun (1,000,000 J incident) → Producers (10,000 J captured) → Primary (1,000 J) → Secondary (100 J) → Tertiary (10 J)', meaning: 'Demonstrates why energy pyramids are invariably steep and upright.' }
    ],
    solvedExamples: [
      {
        id: 'bio3-ex1',
        question: 'In a grassland food chain ($\\text{Grass} \\to \\text{Deer} \\to \\text{Lion}$), green grass stores **$25,000\\text{ J}$** of chemical energy. Applying Lindeman\'s 10% Law, calculate how much energy reaches (a) Deer and (b) Lion.',
        steps: [
          '1. Energy stored in Producers ($\\text{T}_1$, Grass) = **$25,000\\text{ J}$**.',
          '2. Energy transferred to Primary Consumer ($\\text{T}_2$, Deer) = $10\\% \\text{ of } 25,000 = 0.10 \\times 25,000 = \\mathbf{2,500\\text{ J}}$.',
          '3. Energy transferred to Secondary Consumer ($\\text{T}_3$, Lion) = $10\\% \\text{ of } 2,500 = 0.10 \\times 2,500 = \\mathbf{250\\text{ J}}$.'
        ],
        finalAnswer: '(a) Deer receives 2,500 J; (b) Lion receives 250 J.',
        keyRule: 'Multiply or divide neatly by 10 for every single arrow jump along a food chain!'
      },
      {
        id: 'bio3-ex2',
        question: 'If a Tertiary Consumer Hawk at $\\text{T}_4$ acquires just **$5\\text{ J}$** of energy along $\\text{Plant} \\to \\text{Mouse} \\to \\text{Snake} \\to \\text{Hawk}$, calculate backward how much energy was originally fixed inside the Plants ($\\text{T}_1$).',
        steps: [
          '1. Work backward multiplying by **10** per trophic step:',
          '2. Snake ($\\text{T}_3$) energy = $5\\text{ J} \\times 10 = \\mathbf{50\\text{ J}}$.',
          '3. Mouse ($\\text{T}_2$) energy = $50\\text{ J} \\times 10 = \\mathbf{500\\text{ J}}$.',
          '4. Green Plants ($\\text{T}_1$) energy = $500\\text{ J} \\times 10 = \\mathbf{5,000\\text{ J}}$.'
        ],
        finalAnswer: '5,000 J was stored in the green plants (T₁).',
        keyRule: 'Moving UP the pyramid divides energy by 10; working BACKWARD down to producers multiplies by 10 per step.'
      },
      {
        id: 'bio3-ex3',
        question: 'Explain why an ecological **Pyramid of Numbers** for a single huge Banyan tree supporting hundreds of birds and thousands of insects is *spindle-shaped* rather than upright, while its **Pyramid of Energy** stays strictly upright.',
        steps: [
          '1. At $\\text{T}_1$ there is only **1 single Banyan tree** (very narrow base number = 1).',
          '2. At $\\text{T}_2$ it feeds **thousands of herbivorous insects/caterpillars** (wide middle bar).',
          '3. At $\\text{T}_3$ those feed **dozens of insect-eating birds** (narrower top) → giving a **spindle shape**!',
          '4. Yet measured by **Energy ($\\text{J}$)**, that single massive tree captures far more total solar kilojoules than all insects combined, and insects hold far more than birds—keeping the **Energy Pyramid strictly upright**.'
        ],
        finalAnswer: 'Number pyramid distorts due to giant producer size (1 tree feeds thousands); Energy pyramid always stays upright due to 90% loss at each step.',
        keyRule: 'Never confuse headcount (Pyramid of Numbers) with total energy flow (Pyramid of Energy).'
      },
      {
        id: 'bio3-ex4',
        question: 'Identify the exact biotic relationship in each pair: (a) *Rhizobium* & gram roots, (b) *Cuscuta* on a bougainvillea bush, (c) Cattle Egret & grazing buffalo, (d) Tiger & Chital deer.',
        steps: [
          '(a) ***Rhizobium* & gram**: **Mutualism** (+/+: bacteria supply nitrates, plant supplies shelter & sugar).',
          '(b) ***Cuscuta* on bush**: **Parasitism** (+/−: leafless *Cuscuta* drains host phloem sap via haustoria).',
          '(c) **Cattle Egret & buffalo**: **Commensalism** (+/0: egret catches insects flushed from grass; buffalo unharmed).',
          '(d) **Tiger & Chital**: **Predation** (+/−: predator hunts & kills prey).'
        ],
        finalAnswer: '(a) Mutualism, (b) Parasitism, (c) Commensalism, (d) Predation.',
        keyRule: 'Check whether the second organism gains (+), suffers (−), or feels zero effect (0).'
      },
      {
        id: 'bio3-ex5',
        question: 'Pesticide DDT sprayed sparingly on mosquitoes in a lake reaches **$0.002\\text{ ppm}$** in water, yet fish-eating Osprey eagles develop **$25\\text{ ppm}$** inside body fat and lay thin-shelled cracked eggs. Name and explain this process.',
        steps: [
          '1. This phenomenon is **Biomagnification (Biological Amplification)**.',
          '2. DDT is **fat-soluble and non-biodegradable**—organisms cannot excrete it.',
          '3. As hundreds of plankton eat DDT water, small fish eat thousands of plankton, big fish eat small fish, and eagles eat big fish, every non-degradable drop accumulates upward, rising **>10,000 times** in top predators!'
        ],
        finalAnswer: 'Biomagnification — persistent non-biodegradable toxins concentrate exponentially up trophic levels.',
        keyRule: 'Energy DECREASES up food chains (10% law), whereas persistent toxins like DDT INCREASE up food chains (Biomagnification)!'
      },
      {
        id: 'bio3-ex6',
        question: 'Construct a realistic 4-link Pond Food Chain AND explain what immediate ripple hits tiny algae if fishermen over-catch all carnivorous Big Fish.',
        steps: [
          '1. Pond Food Chain: **Phytoplankton (Algae) → Zooplankton → Small Herbivorous Fish → Big Carnivorous Pike/Catfish**.',
          '2. Removing all Big Carnivorous Fish removes predation pressure on **Small Fish**, so Small Fish multiply explosively.',
          '3. Huge Small Fish swarms over-graze **Zooplankton**, causing Zooplankton to crash—which lets **Algae (Phytoplankton) bloom green wildly** until oxygen depletes!'
        ],
        finalAnswer: 'Phytoplankton → Zooplankton → Small Fish → Big Fish; removing top predators triggers trophic cascades down every level.',
        keyRule: 'Top apex predators prevent lower trophic populations from overgrazing and crashing ecosystem balance.'
      },
      {
        id: 'bio3-ex7',
        question: 'Why does adding organic garden **compost (humus)** improve both sandy desert soil AND heavy sticky clay soil simultaneously?',
        steps: [
          '1. Spongy dark **humus** binds loose dusty sand grains together so water and minerals don\'t leach away straight downward.',
          '2. In dense waterlogged clay, humus opens tiny crumb air pockets enabling **oxygen drainage** for root respiration.',
          '3. Simultaneously, slow decomposition releases steady nitrogen, phosphorus, and potassium salts naturally!'
        ],
        finalAnswer: 'Humus acts as a sponge in sand and an aerator in clay while slowly supplying recycled mineral nutrients.',
        keyRule: 'Decomposers create humus—crucial for both abiotic soil structure and biotic fertility.'
      },
      {
        id: 'bio3-ex8',
        question: 'Contrast a **National Park** and a **Wildlife Sanctuary** in India, citing one iconic example of each.',
        steps: [
          '1. **National Park**: Highest legal protection—no grazing, timber cutting, or private land rights allowed (*e.g., **Jim Corbett National Park** for Bengal Tiger or **Kaziranga** for One-horned Rhino*).',
          '2. **Wildlife Sanctuary**: Focuses on safeguarding target species where limited non-destructive human activities (controlled grazing/fuel collection) may be allowed (*e.g., **Bharatpur / Keoladeo Bird Sanctuary** or **Periyar**).'
        ],
        finalAnswer: 'National Parks ban all human exploitation strictly; Sanctuaries allow tightly regulated low-impact local access.',
        keyRule: 'Both are prime **In-Situ** conservation strategies protecting whole wild food webs.'
      }
    ],
    gradedQuestions: {
      easy: [
        { id: 'bio3-e1', marks: 2, question: 'Define Ecosystem and list two biotic and two abiotic components of a pond ecosystem.', solutionSteps: ['**Ecosystem**: Self-sustaining community of living organisms interacting with non-living surroundings.', '**Biotic**: Hydrilla plants, frogs/fish. **Abiotic**: Sunlight, dissolved oxygen/water temperature.'], finalAnswer: 'Living community + physical habitat; Biotic (algae, fish), Abiotic (water, sunlight).' },
        { id: 'bio3-e2', marks: 2, question: 'What are Saprotrophs (Decomposers)? Name the two chief microbial groups performing decomposition.', solutionSteps: ['Organisms feeding externally on dead organic matter and excreting enzymes to convert it back to soil nutrients.', 'Chief groups: **Saprophytic Bacteria** and **Fungi** (mushrooms/moulds).'], finalAnswer: 'Bacteria and Fungi recycling dead organic matter into soil minerals.' },
        { id: 'bio3-e3', marks: 2, question: 'State Lindeman\'s 10% Law of Energy Flow.', solutionSteps: ['During trophic transfer along a food chain, only **~10% of stored energy** from one level passes onward into the next consumer level; ~90% dissipates as metabolic heat and wastes.'], finalAnswer: 'Only ~10% of energy passes from one trophic level to the next.' },
        { id: 'bio3-e4', marks: 2, question: 'Name the two partner organisms inside a **Lichen** and identify the type of ecological relationship.', solutionSteps: ['Partners: A green **Alga** (photosynthesises sugar) and a **Fungus** (absorbs water/minerals and anchors).', 'Relationship: **Mutualism (Symbiosis, +/+)** where both partners benefit equally.'], finalAnswer: 'Alga + Fungus; Mutualism (+/+).' }
      ],
      medium: [
        { id: 'bio3-m1', marks: 3, question: 'Give three reasons why a Food Web makes an ecosystem far more resilient than a single isolated Food Chain.', solutionSteps: ['1. Predators feed on **multiple alternate prey**, surviving smoothly if one prey species temporarily declines.', '2. Prevents runaway **population explosions** of any single herbivore or weed species.', '3. Maintains steady nutrient cycling and biodiversity stability across seasonal shifts.'], finalAnswer: 'Alternate prey choices buffer extinction shocks, check overpopulation, and keep cycling balanced.' },
        { id: 'bio3-m2', marks: 3, question: 'Calculate the energy reaching a Snake (T₄) if sunlit Rice Plants (T₁) trap 18,000 J, assuming: Rice → Rat → Snake... wait, adjust for 3 vs 4 trophic levels cleanly!', solutionSteps: ['For **Rice (T₁) → Grasshopper (T₂) → Frog (T₃) → Snake (T₄)**:', '1. Grasshopper (T₂) = $10\\% \\text{ of } 18,000 = 1,800\\text{ J}$.', '2. Frog (T₃) = $10\\% \\text{ of } 1,800 = 180\\text{ J}$.', '3. Snake (T₄) = $10\\% \\text{ of } 180 = \\mathbf{18\\text{ J}}$.'], finalAnswer: '18 J reaches the Snake at T₄.' },
        { id: 'bio3-m3', marks: 3, question: 'Contrast Mutualism, Commensalism, and Parasitism with one clear plant or animal example each.', solutionSteps: ['1. **Mutualism (+/+)**: Both benefit (*Rhizobium* + Pea root nodules).', '2. **Commensalism (+/0)**: One benefits, host unaffected (Orchid epiphyte perched on mango branch).', '3. **Parasitism (+/−)**: Parasite steals food harming living host (*Cuscuta* on hedge shrub / Tapeworm in human gut).'], finalAnswer: '+/+ Mutualism (*Rhizobium*), +/0 Commensalism (Orchid), +/− Parasitism (*Cuscuta*).' },
        { id: 'bio3-m4', marks: 3, question: 'Explain three crucial ecological functions played by tropical and Himalayan forests.', solutionSteps: ['1. Act as global carbon sinks (**O₂ release & CO₂ uptake**) mitigating climate change.', '2. Bind topsoil firmly with deep roots, preventing **floods, landslides, and soil erosion** while recharging aquifers.', '3. Provide shelter and overlapping food webs supporting over **80% of terrestrial wildlife species**.'], finalAnswer: 'Climate regulation (CO₂/O₂), flood & erosion prevention, and wildlife habitat shelter.' }
      ],
      difficult: [
        { id: 'bio3-d1', marks: 4, question: 'Why are Food Chains almost always limited to 3 to 5 trophic levels—never 10 or 12 steps long—even in rich rainforests?', solutionSteps: ['1. According to **Lindeman\'s 10% Law**, **90% of chemical energy dissipates** at every feeding step via cellular respiration, heat, and excretion.', '2. Starting from $100,000\\text{ J}$ in producers: $\\text{T}_2 = 10,000\\text{ J}$, $\\text{T}_3 = 1,000\\text{ J}$, $\\text{T}_4 = 100\\text{ J}$, $\\text{T}_5 = 10\\text{ J}$.', '3. By $\\text{T}_6$ or $\\text{T}_7$, remaining energy becomes far too minuscule to sustain the metabolism of a viable breeding predator population!'], finalAnswer: 'Rapid 90% energy attrition per trophic jump leaves negligible usable energy beyond 4–5 steps.' },
        { id: 'bio3-d2', marks: 4, question: 'Differentiate between **Energy Flow** and **Mineral / Nutrient Cycling** inside an ecosystem.', solutionSteps: ['1. **Energy Flow is UNIDIRECTIONAL (Open)**: Sunlight enters via photosynthesis, steps down T₁ → T₂ → T₃ → T₄, and dissipates forever as low-grade heat—plants can NEVER reuse dissipated thermal energy!', '2. **Mineral Cycling is CYCLIC (Closed)**: Carbon, nitrogen, water, and phosphorus absorbed by producers pass through consumers, are mineralised by **decomposers**, and re-enter fresh plants endlessly!'], finalAnswer: 'Energy flows one-way and dissipates as heat; mineral nutrients cycle endlessly via decomposers.' },
        { id: 'bio3-d3', marks: 4, question: 'Why is an ecological Pyramid of Energy ALWAYS upright whereas a Pyramid of Biomass can turn inverted in an open ocean pond?', solutionSteps: ['1. **Energy Pyramid** measures *rate of energy produced per year* ($\\text{J/m}^2/\\text{yr}$); thermodynamics dictates consumers can never hold more annual energy than what producers fixed below.', '2. **Biomass Pyramid** measures a *single frozen-moment snapshot weight* ($\\text{g/m}^2$): tiny marine phytoplankton reproduce and get eaten so fast that their instantaneous standing weight can be smaller than slow-growing heavy fish feeding on them!'], finalAnswer: 'Annual energy flux must drop upward (always upright), whereas instant snapshot biomass can invert when producers reproduce rapidly.' },
        { id: 'bio3-d4', marks: 4, question: 'If all fungal and bacterial **decomposers** vanished worldwide tomorrow while plants and animals stayed alive initially, describe TWO catastrophes that would unfold within months.', solutionSteps: ['1. **Nutrient Lock-up**: Nitrogen, phosphorus, and potassium remain locked permanently inside dead leaves, corpses, and dung—soil nitrates vanish and **plants soon starve and die**, collapsing global oxygen & food!', '2. **Waste Accumulation**: Billions of tonnes of undecayed carcasses and fallen timber pile up covering forests and lakes!'], finalAnswer: 'Global mineral cycles halt starving plants of nitrates, while undecayed corpses/litter smother Earth.' }
      ]
    },
    practiceWorksheet: {
      title: 'ICSE Class 8 Biology Worksheet — Ecosystems (30 Marks)',
      instructions: 'Apply exact trophic terminology and show energy calculation steps clearly.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Concepts (1 × 8 = 8 Marks)',
          items: [
            '1. Who coined the term "Ecosystem" in 1935? ______',
            '2. Identify the trophic level of Green Algae (______) and Grasshopper (______).',
            '3. Which ecological pyramid can NEVER be inverted? ______',
            '4. Leafless yellow *Cuscuta* (Amarbel) shows ______ nutrition (+/−).',
            '5. Symbiotic pair inside Lichens: ______ and ______.',
            '6. Progressive toxin buildup up a food chain (like DDT in eagles) is called ______.',
            '7. True or False: Energy recycles endlessly back from lions to grass through decomposers.',
            '8. Name the forest conservation protest led by Sunderlal Bahuguna in Uttarakhand.'
          ]
        },
        {
          sectionTitle: 'Section B: Calculations & Interactions (3 × 4 = 12 Marks)',
          items: [
            '9. If Sunlight drops 500,000 J onto Maize and Maize traps 1% (5,000 J), compute energy reaching Rat (T₂) → Cobra (T₃) → Eagle (T₄).',
            '10. Contrast a Food Chain and a Food Web using an aquatic pond example.',
            '11. Distinguish Commensalism (+/0) vs Mutualism (+/+) with one Indian example each.',
            '12. Why are forests nicknamed Earth\'s "Green Lungs" and natural flood-absorbers?'
          ]
        },
        {
          sectionTitle: 'Section C: Structured Analysis (5 × 2 = 10 Marks)',
          items: [
            '13. Draw a labelled 4-tier Ecological Energy Pyramid showing 10,000 J at Producer base and explain 90% loss at each step.',
            '14. Compare In-Situ vs Ex-Situ wildlife conservation, naming three Indian National Parks and their flagship saved species.'
          ]
        }
      ],
      answerKey: [
        '1. A.G. Tansley',
        '2. T₁ (Producer); T₂ (Primary consumer)',
        '3. Pyramid of Energy',
        '4. Parasitism',
        '5. Alga and Fungus',
        '6. Biomagnification',
        '7. False (energy is unidirectional; nutrients recycle)',
        '8. Chipko Movement (1973)',
        '9. Rat = 500 J; Cobra = 50 J; Eagle = 5 J',
        '10. Chain = single path; Web = interconnected overlapping chains offering resilience',
        '11. Commensalism: Orchid on mango; Mutualism: Rhizobium in pea root nodules',
        '12. Absorb CO₂ & release O₂ (lungs); humus & deep roots slow runoff into aquifers preventing floods',
        '13. Producers (10,000 J) → Herbivores (1,000 J) → Sec. Consumers (100 J) → Apex (10 J); 90% lost as respiration/heat',
        '14. In-Situ: Corbett (Tiger), Gir (Asiatic Lion), Kaziranga (Rhino); Ex-Situ: Zoos, Botanical gardens, Seed banks'
      ]
    },
    examPreparationTips: [
      'Always double-check **arrow direction** in food chains: Grass **→** Deer **→** Tiger (meaning "is eaten by / energy flows to").',
      'Whenever calculating **10% Law numericals**, count **trophic steps** carefully before dividing by 10!',
      'Memorise **5 classic symbiosis pairs**: *Rhizobium* + Legume (Mutualism), Lichen (Mutualism), Orchid on tree (Commensalism), Cattle Egret + Buffalo (Commensalism), *Cuscuta* / Tapeworm (Parasitism).'
    ],
    chapterSummary: [
      'An **Ecosystem** combines living **Biotic** communities (Producers, Consumers, Decomposers) with non-living **Abiotic** factors (light, temperature, water, air, soil).',
      '**Energy flow** is **unidirectional** along 3–5 trophic levels following **Lindeman\'s 10% Law**, whereas **mineral nutrients cycle endlessly** via bacterial & fungal **decomposers**.',
      '**Food Webs** interlock multiple food chains, creating stability far superior to any isolated chain.',
      '**Pyramid of Energy** is ALWAYS strictly upright, while Pyramids of Numbers or Biomass can occasionally invert.',
      'Organisms interact via **Mutualism (+/+)**, **Commensalism (+/0)**, **Parasitism (+/−)**, and **Predation (+/−)**; forests conserve topsoil, aquifers, climate, and wild biodiversity protected in India by **National Parks, Sanctuaries, and Chipko initiatives**.'
    ],
    importantQuestionsAndAnswers: [
      { type: 'Short Answer', question: 'Why is the flow of energy in a food chain strictly unidirectional while nutrient flow is cyclic?', answer: 'Green plants capture solar light into chemical glucose; at each feeding step ~90% escapes permanently into space as metabolic **heat**, which living organisms can never convert back into sunlight—making energy flow one-way. Conversely, carbon, nitrogen, and phosphorus atoms are returned intact to soil/air by **decomposers** for endless plant reuse!' },
      { type: 'Short Answer', question: 'What is a Food Web and why does removing one prey rarely destroy an entire ecosystem?', answer: 'A **Food Web** is an interwoven network of many intersecting food chains; if one prey declines, predators switch temporarily to alternate prey species—buffering the community from total collapse.' },
      { type: 'Short Answer', question: 'Distinguish between Scavengers/Detritivores and Microbial Decomposers.', answer: 'Scavengers (vultures, hyenas) and detritivores (earthworms) physically tear and swallow dead tissue internally; true **decomposers** (bacteria & fungi) digest organic molecules externally and convert them completely back into inorganic soil minerals (**humus & nitrates**).' },
      { type: 'Reasoning', question: 'Why are top apex carnivores like Bengal Tigers always naturally far rarer in a jungle than spotted deer or wild grass?', answer: 'Because only 10% of stored food energy passes upward at each trophic step, a forest holding millions of grass blades can energetically sustain only a tiny fraction of deer (~10%) and an even smaller handful of tigers (~1%) at T₃/T₄.' },
      { type: 'Short Answer', question: 'Define Biomagnification and explain why fish-eating pelicans suffer worst from lake pesticide runoff.', answer: '**Biomagnification** is progressive accumulation of non-biodegradable toxins (like DDT) up a food chain; because top fish-eating birds devour thousands of contaminated smaller organisms across years, toxin concentration multiplies exponentially inside their tissues.' },
      { type: 'Long Answer', question: 'Explain Mutualism, Commensalism, and Parasitism cleanly with two verified examples of each.', answer: '1. **Mutualism (+/+)**: Both organisms benefit—e.g., (i) *Rhizobium* bacteria inside legume root nodules fix N₂ into nitrates in return for plant sugars; (ii) Algae & Fungi inside Lichens exchange food for moisture & rock shelter.\n2. **Commensalism (+/0)**: One benefits, host unharmed—e.g., (i) Green epiphytic orchid clinging onto mango branches for sunlight; (ii) Remora sucker-fish hitchhiking beneath sharks for leftover crumbs.\n3. **Parasitism (+/−)**: Parasite steals food from living host—e.g., (i) *Cuscuta* (Amarbel) piercing garden stems with haustoria; (ii) Human roundworms/tapeworms absorbing digested gut food.' },
      { type: 'Long Answer', question: 'Describe the four horizontal strata of a forest ecosystem and explain four consequences of large-scale deforestation.', answer: 'Forest strata: (1) Sunlit **Canopy** crowns (*Sal, Teak*); (2) **Understorey** dwarf trees & climbers; (3) Shade **Herb/Fern** zone; (4) Humid **Forest Floor** carpeted with humus & decomposers. Deforestation causes: (1) Severe **topsoil erosion and silting of rivers**; (2) Deadly **flash floods** combined with failing underground springs/droughts; (3) Rising atmospheric **CO₂ & global warming**; (4) **Habitat loss and extinction** of endemic wild species.' },
      { type: 'HOTS', question: 'In a grassland food chain, 50,000 J of solar light hits grass leaves, which convert 2% into plant chemical biomass. Calculate final energy reaching a Fox at T₃ (Grass → Rabbit → Fox).', answer: 'First, chemical energy trapped in Grass ($\\text{T}_1$) = $2\\% \\text{ of } 50,000 = \\mathbf{1,000\\text{ J}}$.\nNext, applying Lindeman\'s 10% Law: Rabbit ($\\text{T}_2$) receives $10\\% \\text{ of } 1,000 = \\mathbf{100\\text{ J}}$.\nFinally, Fox ($\\text{T}_3$) receives $10\\% \\text{ of } 100 = \\mathbf{10\\text{ J}}$.' }
    ],
    practiceExercises: [
      { question: 'Classify as Biotic or Abiotic: Sunlight, Earthworm, Humus pH, Mushroom, Pond dissolved O₂.', hint: 'Living vs physical/chemical factors.', answerGuide: 'Biotic: Earthworm, Mushroom; Abiotic: Sunlight, Humus pH, Dissolved O₂.' },
      { question: 'Write a 4-level Forest Food Chain and label T₁ through T₄.', hint: 'Leaves → Insect/Deer → Predator.', answerGuide: 'Teak Leaves (T₁) → Caterpillar (T₂) → Sparrow (T₃) → Hawk (T₄).' },
      { question: 'Why is an orchid on a mango branch NOT harming the mango tree like Dodder (Cuscuta)?', hint: 'Check roots/haustoria and green leaves.', answerGuide: 'Orchid has green chlorophyll making its own food (commensal); Cuscuta lacks chlorophyll and pierces mango phloem directly (parasite).' }
    ]
  },
  quizQuestions: [
    {
      id: 'bio3-q1',
      type: 'mcq',
      question: 'Which organisms act as the primary mineral recyclers (Decomposers) returning soil nitrates at the end of every food chain?',
      options: ['Herbivores', 'Bacteria and Fungi', 'Vultures and Crows', 'Green Algae'],
      correctAnswer: 'Bacteria and Fungi',
      explanation: 'Saprotrophic bacteria and fungi chemically mineralise dead organic matter into inorganic salts.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio3-q2',
      type: 'mcq',
      question: 'Which ecological pyramid is ALWAYS upright across every ecosystem on Earth without exception?',
      options: ['Pyramid of Numbers', 'Pyramid of Biomass', 'Pyramid of Energy', 'Pyramid of Sizes'],
      correctAnswer: 'Pyramid of Energy',
      explanation: 'Because ~90% of energy dissipates as metabolic heat at each trophic step, available energy strictly drops upward.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio3-q3',
      type: 'mcq',
      question: 'In a food chain Grass → Grasshopper → Frog → Snake, if Grass holds 4,000 J of chemical energy, how much reaches the Snake?',
      options: ['400 J', '40 J', '4 J', '4,000 J'],
      correctAnswer: '4 J',
      explanation: 'Grass 4,000 J → Grasshopper 400 J → Frog 40 J → Snake 4 J (three 10% jumps).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio3-q4',
      type: 'mcq',
      question: 'A Lichen is a classic mutualistic (+/+) biological partnership formed between:',
      options: ['Bacteria and Root Hair', 'Alga and Fungus', 'Fern and Moss', 'Grass and Cuscuta'],
      correctAnswer: 'Alga and Fungus',
      explanation: 'The green alga supplies photosynthetic sugars while fungal hyphae supply minerals, moisture, and rock attachment.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio3-q5',
      type: 'mcq',
      question: 'Yellow leafless Cuscuta (Amarbel) wrapping tightly around a garden hedge using sucking haustoria illustrates:',
      options: ['Mutualism', 'Commensalism', 'Parasitism', 'Saprotrophism'],
      correctAnswer: 'Parasitism',
      explanation: 'Cuscuta benefits (+) by stealing sap directly from the living host stem (−) without offering any benefit back.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio3-q6',
      type: 'mcq',
      question: 'An epiphytic orchid growing on high tree branches solely for sunlight without tapping host sap shows:',
      options: ['Parasitism', 'Commensalism', 'Predation', 'Competition'],
      correctAnswer: 'Commensalism',
      explanation: 'Orchid gains elevated sunlight (+) while the host tree experiences zero harm or gain (0).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio3-q7',
      type: 'mcq',
      question: 'Which famous 1973 Indian grassroots conservation campaign saw villagers hugging Himalayan trees to prevent logging?',
      options: ['Silent Valley Act', 'Chipko Movement', 'Project Elephant', 'Green Revolution'],
      correctAnswer: 'Chipko Movement',
      explanation: 'Led by Sunderlal Bahuguna and Gaura Devi in Uttarakhand, villagers hugged trees ("chipko") against commercial axes.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio3-q8',
      type: 'mcq',
      question: 'Why does a Food Web preserve wildlife balance better than an isolated linear Food Chain?',
      options: [
        'It creates energy out of thin air',
        'It eliminates all decomposers',
        'It offers alternate prey pathways if one species declines temporarily',
        'It stops photosynthesis completely'
      ],
      correctAnswer: 'It offers alternate prey pathways if one species declines temporarily',
      explanation: 'Multiple feeding options cushion predators against single-prey crashes and check runaway herbivore booms.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio3-q9',
      type: 'fill_blank',
      question: 'Progressive buildup of non-biodegradable toxins like DDT inside top predators along a food chain is called _____.',
      correctAnswer: 'biomagnification',
      explanation: 'Persistent fat-soluble chemicals concentrate tens to thousands of times higher in top predators (**biomagnification**).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio3-q10',
      type: 'mcq',
      question: 'Kaziranga National Park in Assam is internationally famous for protecting which endangered flagship species in situ?',
      options: ['Asiatic Lion', 'One-horned Indian Rhinoceros', 'Snow Leopard', 'Great Indian Bustard'],
      correctAnswer: 'One-horned Indian Rhinoceros',
      explanation: 'Kaziranga floodplains shelter the world\'s largest wild population of Greater One-horned Rhinos.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio3-q11',
      type: 'true_false',
      question: 'A single giant oak tree feeding 10,000 caterpillars and 500 birds forms an upright triangular Pyramid of Numbers.',
      correctAnswer: false,
      explanation: 'Because T₁ has only 1 tree supporting thousands of caterpillars at T₂, the Pyramid of Numbers becomes spindle-shaped/inverted!',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio3-q12',
      type: 'hots',
      question: 'In a 4-link food chain, an apex Hawk stores 12 J of energy. Assuming 10% energy transfer at every step, how much energy was originally held by the Producers (T₁)?',
      options: ['120 J', '1,200 J', '12,000 J', '120,000 J'],
      correctAnswer: '12,000 J',
      explanation: 'T₄ = 12 J → T₃ = 120 J → T₂ = 1,200 J → T₁ (Producers) = 12,000 J.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    { id: 'fc-b3-1', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'Who coined "Ecosystem", and what are its 2 main components?', back: 'A.G. Tansley (1935); Biotic (Producers, Consumers, Decomposers) + Abiotic (Light, Water, Temp, Air, Soil).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b3-2', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'State Lindeman\'s 10% Law of Energy Flow.', back: 'Only ~10% of energy passes from one trophic level to the next; ~90% is lost via respiration, heat, and waste.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b3-3', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'Why is the Pyramid of Energy NEVER inverted?', back: 'Metabolic heat is always lost at every feeding jump—energy flow is strictly unidirectional.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b3-4', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'Compare Energy Flow vs Nutrient Flow in ecosystems.', back: 'Energy flows ONE-WAY (Sun → Trophic levels → Heat); Nutrients RECYCLE endlessly via decomposers.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b3-5', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'Give 2 Mutualism (+/+) examples.', back: '1. Rhizobium bacteria in legume root nodules. 2. Lichens (Alga + Fungus).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b3-6', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'Give 2 Commensalism (+/0) examples.', back: '1. Epiphytic orchid perched on mango branches. 2. Cattle egret following grazing buffalo / Remora on shark.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b3-7', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'Distinguish Parasitism from Predation.', back: 'Parasite lives on/in living host draining nutrition gradually (Cuscuta, Tapeworm); Predator kills prey immediately (Tiger).', category: 'Definition', importance: 'Standard' },
    { id: 'fc-b3-8', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'What is Biomagnification?', back: 'Exponential rise in concentration of non-biodegradable toxins (like DDT) up higher trophic levels.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b3-9', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'Give 3 iconic Indian National Parks & flagship wildlife species.', back: 'Jim Corbett (Bengal Tiger), Gir (Asiatic Lion), Kaziranga (One-horned Rhinoceros).', category: 'Date / Event', importance: 'Standard' },
    { id: 'fc-b3-10', subjectId: 'biology', chapterId: 'bio-ecosystems', chapterTitle: 'Ecosystems', front: 'Why do decomposers (bacteria & fungi) matter more than scavengers?', back: 'Decomposers chemically break dead organic matter completely back into simple soil nitrates & CO₂ for plants.', category: 'Scientific Law', importance: 'Essential' }
  ]
};
