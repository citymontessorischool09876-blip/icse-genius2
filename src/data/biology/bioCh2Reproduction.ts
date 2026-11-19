import { Chapter } from '../../types';

export const BIO_CH2_REPRODUCTION: Chapter = {
  id: 'bio-ch2',
  subjectId: 'biology',
  chapterNumber: 2,
  title: 'Reproduction in Plants and Animals',
  subtitle: 'Asexual fission, budding, fragmentation & spores; natural & artificial vegetative propagation (grafting, layering, tissue culture); floral whorls, pollination & double fertilisation; human male/female reproductive anatomy & fertilisation',
  term: 'Half-Yearly',
  estimatedMinutes: 95,
  notes: {
    introduction: `Why do lotus flowers bloom anew every monsoon, *Amoeba* split endlessly across pond drops, and human families pass traits from generation to generation? While individual organisms eventually age and die, life perpetuates across centuries through the miraculous biological process of **Reproduction**—the creation of new offspring matching their parental species.

In Chapter 2 of Class 8 ICSE Biology (*Concise Biology / Gem's Biology*), we explore both grand strategies of life across kingdoms: **Asexual Reproduction** (rapid clonal multiplication via fission, budding, fragmentation, spore formation, and natural/artificial **vegetative propagation** including **grafting and tissue culture**) and **Sexual Reproduction** (the four concentric **floral whorls**, self vs cross **pollination**, fruit/seed development, and the complete **human male and female reproductive systems**, internal fertilisation, and foetal development inside the uterus).`,
    learningObjectives: [
      'Contrast asexual reproduction (single parent, exact clones, no gametes) with sexual reproduction (two parents/gametes, genetic variation).',
      'Explain and give biological examples of binary fission, multiple fission, budding, fragmentation, regeneration, and spore formation.',
      'Differentiate natural vegetative propagules (tuber, rhizome, bulb, runner, leaf buds) and explain artificial horticulture methods (cutting, layering, grafting, micropropagation).',
      'Draw and label the four whorls of a complete bisexual flower (calyx, corolla, androecium, gynoecium) and trace pollen → ovule fertilisation.',
      'Compare self-pollination vs cross-pollination and list floral adaptations for insect-pollinated (entomophilous) vs wind-pollinated (anemophilous) flowers.',
      'Identify parts and functions of human male and female reproductive organs, trace fertilisation in the oviduct, implantation, placenta role, and gestation.'
    ],
    topics: [
      {
        id: 'bio-ch2-t1',
        title: '1. Modes of Asexual Reproduction & Vegetative Propagation',
        content: `In **Asexual Reproduction**, a single parent organism creates genetically identical offspring (**clones**) without forming or fusing sex cells (**gametes**). It multiplies populations rapidly in favourable environments—though lacking genetic variation if climates shift suddenly.`,
        subtopics: [
          {
            subheading: '1.1 Six Classical Modes of Asexual Multiplication',
            body: `1. **Binary Fission** (*Amoeba*, *Paramoecium*, bacteria): One mature parent cell splits its nucleus first (**karyokinesis**) and then divides its cytoplasm (**cytokinesis**) cleanly into **two equal daughter cells**.
2. **Multiple Fission** (*Plasmodium* malaria parasite, *Amoeba* in drought): Under harsh conditions, the parent cell wraps inside a protective thick wall (**cyst**), divides its nucleus repeatedly into dozens of tiny nuclei, and bursts open when rains return to release **many daughter cells simultaneously**!
3. **Budding** (*Yeast* unicellular fungus; *Hydra* multicellular cnidarian): A small bulb-like outgrowth (**bud**) sprouts on the parent wall, receives a daughter nucleus, grows tentacles (in *Hydra*) or forms temporary yeast chains, and detaches as an independent clone.
4. **Fragmentation** (*Spirogyra* pond silk alga): Mature ribbon filaments snap mechanically into smaller pieces, and each filament fragment grows via mitosis into a full long alga!
5. **Spore Formation (Sporulation)** (*Rhizopus* bread mould, ferns, mosses): Tiny spherical **sporangia** perched atop stalk hyphae burst open to scatter thousands of microscopic dust-like **spores** sealed in tough protective coats—which sprout instantly upon landing on damp warm bread!
6. **Regeneration** (*Planaria* flatworm, starfish): Specialised stem cells regrow lost body parts—or reconstruct whole complete flatworms from severed slices!`,
            keyPoint: 'Binary fission yields TWO daughter cells; Multiple fission inside a protective cyst yields MANY daughter cells at once!'
          },
          {
            subheading: '1.2 Natural & Artificial Vegetative Propagation in Plants',
            body: `Higher plants propagate asexually from non-floral vegetative organs—**roots, stems, and leaves**:
- **Natural Underground Stems**:
  - **Stem Tuber (*Potato*)**: Swollen starch-rich underground stem tip bearing buds called **"eyes"** inside small scale depressions; each eye sprouts a leafy shoot!
  - **Rhizome (*Ginger, Turmeric*)**: Horizontal underground creeping stem showing clear **nodes, internodes, and scaly leaves**.
  - **Bulb (*Onion, Garlic*)**: Short flattened disc stem wrapped in fleshy food-storing scale leaves and a central apical bud.
  - **Corm (*Gladiolus, Saffron*)**: Short, stout, vertical underground stem.
- **Sub-Aerial / Leaf / Root Methods**: **Runners** (*Strawberry, Mint, Grass*), **Leaf marginal buds** (*Bryophyllum* notches sprout mini root-bearing plantlets!), **Fleshy root tubers** (*Sweet potato, Dahlia*).

**Four Crucial Artificial Horticulture Methods**:
1. **Stem Cutting** (*Rose, Hibiscus, Sugarcane*): Slant-cut woody twig bearing nodes planted into damp soil grows adventitious roots.
2. **Layering** (*Jasmine, Bougainvillea, Lemon*): A flexible lower branch is bent down, notched, and pegged beneath moist soil while still attached to the mother plant; once roots sprout, the daughter plant is snipped free!
3. **Grafting** (*Mango, Apple, Rose*): A young desired twig (**Scion**, giving superior sweet fruit/flowers) is fitted wedge-to-wedge over a sturdy, disease-resistant rooted base stem (**Stock**) and wrapped tightly until their **vascular cambium** fuses!
4. **Micropropagation (Tissue Culture)** (*Orchids, Banana*): Tiny sterile piece of growing tip (**explant**) placed in sterile agar jelly laced with plant hormones (**auxins & cytokinins**) multiplies into an undifferentiated cell mass (**callus**) and rapidly yields **thousands of disease-free cloned plantlets** inside glass tubes!`,
            keyPoint: 'In Grafting: STOCK = bottom rooted plant (gives water/vigour); SCION = top grafted twig (determines fruit/flower quality)!'
          }
        ],
        definitions: [
          { term: 'Clone', definition: 'Exact genetic copy of a single parent organism produced via asexual or vegetative reproduction.' },
          { term: 'Vegetative Propagation', definition: 'Asexual multiplication of flowering plants from root, stem, or leaf parts bearing vegetative buds rather than seeds.' },
          { term: 'Stock & Scion', definition: 'In grafting, Stock is the rooted base plant providing soil support, while Scion is the upper attached shoot determining fruit/flower quality.' },
          { term: 'Tissue Culture (Micropropagation)', definition: 'Growing thousands of identical disease-free plantlets rapidly from tiny sterile tissue explants on hormone-rich nutrient medium.' }
        ],
        comparisonTable: {
          caption: 'Asexual vs Sexual Reproduction: Core Biological Comparison',
          headers: ['Criterion', 'Asexual Reproduction', 'Sexual Reproduction'],
          rows: [
            ['Number of Parents', '**One single parent**', 'Usually **two parents** (male & female gametes)'],
            ['Gametes & Fertilisation', '**Absent** (no sperm/egg fusion)', '**Present** (haploid male + female gametes fuse → diploid zygote)'],
            ['Genetic Makeup of Offspring', 'Identical **clones** to parent', '**Unique genetic variation** (new combinations of traits)'],
            ['Speed & Numbers', 'Very **fast**, large numbers rapidly', 'Relatively slower'],
            ['Evolutionary Advantage', 'Preserves prized crop traits unchanged (sweetness of grafted mango)', 'Drives species **adaptation & survival** in changing climates']
          ]
        },
        realLifeExample: 'Every prized **Dasheri or Alphonso mango** in orchards grows on **grafted trees**—because planting an ordinary mango seed produces unpredictable sour fruit after 10 years, whereas grafting an Alphonso scion guarantees identical sweet fruit in 3–4 years!',
        commonMistakes: [
          {
            mistake: 'Writing that **Potato** is a modified root because it grows underground, while **Sweet potato** is a stem.',
            correction: 'Exact opposite! **Potato & Ginger** have nodes, internodes, and axillary bud "eyes"—proving they are **underground STEMS**; **Sweet potato & Dahlia** are swollen **storage ROOTS**!'
          }
        ]
      },
      {
        id: 'bio-ch2-t2',
        title: '2. Sexual Reproduction in Flowering Plants: Floral Whorls & Pollination',
        content: `A **flower** is not merely decorative—it is a highly modified, condensed **reproductive shoot** designed strictly for sexual reproduction! A **complete flower** carries **four concentric whorls** seated atop the swollen stem tip (**thalamus / receptacle**) at the end of the flower stalk (**pedicel**).`,
        subtopics: [
          {
            subheading: '2.1 Four Floral Whorls (Matching L.S. Diagram)',
            body: `1. **Calyx (Sepals — Outer Accessory Whorl)**: Leaf-like green sepals guarding delicate inner petals inside the unopened flower bud.
2. **Corolla (Petals — Inner Accessory Whorl)**: Brightly coloured, fragrant petals attracting insect and bird pollinators toward hidden nectar glands (**nectaries**).
3. **Androecium (Stamens — Male Essential Whorl)**: Each stamen has a slender stalk (**filament**) topped by a bi-lobed **anther** housing four **pollen sacs** packed with powdery **pollen grains** (containing male gametes).
4. **Gynoecium / Pistil (Carpels — Female Essential Whorl)**: Occupies the dead centre with three zones:
   - **Stigma**: Sticky or feathery tip designed to trap landing pollen grains.
   - **Style**: Slender hollow/spongy neck lifting the stigma and guiding the growing pollen tube downward.
   - **Ovary**: Swollen basal chamber housing tiny egg-bearing **ovules** (each ovule houses a female egg cell / **ovum**).`,
            keyPoint: 'Essential whorls directly making gametes = Androecium (male stamens) & Gynoecium (female pistil). Accessory whorls = Calyx & Corolla!'
          },
          {
            subheading: '2.2 Pollination & Double Fertilisation → Fruit & Seed',
            body: `**Pollination** is the physical transfer of pollen grains from an **anther** onto a receptive **stigma**:
- **Self-Pollination**: Pollen lands on the stigma of the **same flower** (*autogamy*) or another flower on the **same individual plant** (*geitonogamy*)—conserves traits but adds zero genetic diversity.
- **Cross-Pollination** (*allogamy*): Pollen travels to a flower on a **different plant of the same species** via external agents (**insects, wind, water, birds**)—producing vigorous, varied seeds!

**Wind (*Anemophily*) vs Insect (*Entomophily*) Adaptations**:
- **Wind-pollinated flowers** (*Maize, Wheat, Grasses*): Small, dull, scentless, nectarless; produce millions of **lightweight, smooth dry pollen grains**; dangle long exposed stamens and trap pollen with large **feathery stigmas**!
- **Insect-pollinated flowers** (*Rose, Hibiscus, Sunflower, Mustard*): Large colourful petals, sweet scent, sugary **nectar**; heavy **sticky or spiny pollen**; enclosed sticky stigma.

**Fertilisation & Post-Fertilisation Fate**:
Once a compatible pollen grain lands on a sugary stigma, it sprouts a **pollen tube** that burrows down the **style**, enters an **ovule** through its tiny pore (**micropyle**), and delivers **two male nuclei**:
- One fuses with the **egg cell (ovum)** → **diploid Zygote** (grows into the baby **embryo** inside the seed).
- The second fuses with central polar nuclei (**Triple Fusion / Double Fertilisation**) → **Endosperm** (starchy food bank nourishing the baby embryo!).
After fertilisation, petals/stamens wither away: **Ovary ripens → Fruit**; **Ovary wall → Pericarp**; **Ovules mature → Seeds**; and **Ovule coats → Seed coat (Testa)**.`,
            keyPoint: 'Always nail the post-fertilisation transformation: OVARY becomes FRUIT; OVULES become SEEDS!'
          }
        ],
        definitions: [
          { term: 'Complete / Bisexual Flower', definition: 'Flower possessing both male stamens and female pistil (e.g., Hibiscus, Mustard, Pea), unlike unisexual flowers (e.g., Papaya, Maize).' },
          { term: 'Pollination', definition: 'Transfer of mature pollen grains from the anther of a stamen to the receptive stigma of a carpel.' },
          { term: 'Fertilisation (Syngamy)', definition: 'Fusion of a haploid male gamete nucleus with a haploid female egg nucleus to form a diploid single-celled zygote.' }
        ],
        diagram: {
          id: 'diag-bio-flower-ls',
          title: 'Longitudinal Section (L.S.) of a Complete Bisexual Flower',
          caption: 'All four concentric whorls seated on thalamus: Sepals (Calyx), Petals (Corolla), Stamens (Anther + Filament), and central Pistil (Stigma, Style, Ovary with Ovules).',
          svgFigure: 'bio_flower_structure'
        },
        comparisonTable: {
          caption: 'Wind-Pollinated (Anemophilous) vs Insect-Pollinated (Entomophilous) Flowers',
          headers: ['Feature', 'Wind-Pollinated (Maize, Grass)', 'Insect-Pollinated (Hibiscus, Rose)'],
          rows: [
            ['Petals / Scent / Nectar', 'Small, green/dull, **no scent, no nectar**', 'Large **bright petals, sweet fragrance & nectar**'],
            ['Pollen Grains', 'Produced in huge clouds; **light, dry, smooth**', 'Fewer; **heavy, sticky or spiny** to cling to bees'],
            ['Stamens & Anthers', 'Long dangling filaments exposed outside', 'Seated inside corolla near nectar base'],
            ['Stigma', '**Large, feathery, protruding** net to catch air pollen', '**Sticky** or lobed inside corolla cup']
          ]
        },
        realLifeExample: 'When biting into a crisp **green pea pod**, the tough outer green shell is the ripened **ovary wall (pericarp)**, while each round sweet **pea** inside is a fertilised **ovule (seed)** attached cleanly to the pod wall!',
        commonMistakes: [
          {
            mistake: 'Thinking Pollination and Fertilisation are the same event.',
            correction: '**Pollination** is merely the **delivery** of pollen onto the stigma (no gametes fuse yet!). **Fertilisation** occurs later inside the ovule when the male nucleus fuses with the egg nucleus!'
          }
        ]
      },
      {
        id: 'bio-ch2-t3',
        title: '3. Reproduction in Animals & Human Reproductive Systems',
        content: `Animals reproduce chiefly sexually by uniting specialised **male gametes (sperms)** and **female gametes (ova / eggs)**. Depending on where fertilisation occurs and how embryos develop, animals divide into clear reproductive groups before we zoom in on **human anatomy**.`,
        subtopics: [
          {
            subheading: '3.1 External vs Internal Fertilisation & Oviparous vs Viviparous Animals',
            body: `- **External Fertilisation** (*Frog, Toad, most Bony Fish*): Male and female shed vast numbers of sperms and jelly-coated eggs simultaneously into pond water. Because predators and currents destroy most unguarded eggs, amphibians must lay hundreds at once!
- **Internal Fertilisation** (*Birds, Reptiles, Mammals including Humans*): Male transfers sperms directly inside the female reproductive tract—protecting gametes and boosting survival odds dramatically.
- **Oviparous Animals** (*Hens, Lizards, Frogs, Butterfly*): Lay shelled or jelly eggs outside the mother's body where embryos nourish off stored **yolk**.
- **Viviparous Animals** (*Humans, Dogs, Whales, Cows*): Give birth directly to live young ones nourished internally inside the mother's womb (**uterus**).`,
            keyPoint: 'External fertilisation is risky → hundreds of eggs released in water; Internal fertilisation is sheltered → fewer eggs needed!'
          },
          {
            subheading: '3.2 Human Male & Female Reproductive Anatomy',
            body: `**Human Male Reproductive System**:
1. **Pair of Testes**: Oval glands housed outside the warm abdomen inside a protective skin pouch (**scrotum**)—kept ~**$2\\text{–}3^\\circ\\text{C}$ cooler** than $37^\\circ\\text{C}$ body temperature, essential for healthy **sperm production** and **testosterone** secretion!
2. **Epididymis & Sperm Ducts (*Vas deferens*)**: Coiled storage tubes where sperms mature and muscular ducts carrying them upward.
3. **Accessory Glands (Seminal Vesicles & Prostate)**: Pour alkaline, fructose-rich nutritive fluid into sperms to form **semen**—energising swimming sperm tails.
4. **Urethra & Penis**: Common muscular passage inside the penis delivering semen during mating. *(A microscopic **human sperm** has a streamlined head carrying DNA + enzyme cap, mitochondrial middle piece for ATP, and whipping flagellum tail.)*

**Human Female Reproductive System**:
1. **Pair of Ovaries**: Almond-shaped pelvic glands releasing one mature **egg (ovum)** alternately roughly every **28 days (ovulation)** plus hormones **oestrogen & progesterone**.
2. **Pair of Oviducts (Fallopian Tubes)**: Funnel-edged ciliated tubes linking ovaries to the womb—this is the **EXACT SITE OF FERTILISATION** in humans!
3. **Uterus (Womb)**: Hollow, thick-walled pear-shaped muscular sac where the tiny ball of cells embeds (**implantation**) and grows safely for **~9 months (40 weeks gestation)**.
4. **Cervix & Vagina**: Lower neck opening into the elastic muscular birth canal.`,
            keyPoint: 'ICSE Classic 1-mark check: In humans, Fertilisation takes place inside the OVIDUCT (Fallopian tube), whereas Implantation & embryonic growth occur inside the UTERUS!'
          }
        ],
        definitions: [
          { term: 'Scrotum', definition: 'External skin sac keeping human testes 2–3°C cooler than core body temperature for normal sperm production.' },
          { term: 'Ovulation', definition: 'Monthly release of a mature ovum from one ovary into the funnelled entrance of the oviduct.' },
          { term: 'Oviduct (Fallopian Tube)', definition: 'Ciliated tube connecting ovary to uterus where fertilisation of egg by sperm normally occurs.' },
          { term: 'Viviparous vs Oviparous', definition: 'Viviparous animals birth live young nourished internally; Oviparous animals lay eggs that hatch outside the body.' }
        ],
        comparisonTable: {
          caption: 'Human Male Gamete (Sperm) vs Female Gamete (Ovum)',
          headers: ['Feature', 'Sperm (Male Gamete)', 'Ovum / Egg (Female Gamete)'],
          rows: [
            ['Size & Shape', 'Microscopic, tiny (~50 µm); head, neck, tail', 'Much larger spherical cell (~120 µm, visible pinpoint)'],
            ['Motility', '**Active swimmer** powered by flagellum tail & mitochondria', '**Non-motile**; swept gently along by oviduct cilia'],
            ['Stored Food', 'Virtually none (relies on seminal fructose)', 'Contains nutrient-rich cytoplasm (**yolk** traces)'],
            ['Origin Organ', 'Testes (millions daily from puberty)', 'Ovaries (1 mature egg per 28-day cycle)']
          ]
        },
        realLifeExample: 'Many insects and amphibians show dramatic **metamorphosis** after hatching—an aquatic gill-breathing tadpole remodels tail, lungs, and legs into an air-breathing frog, while a crawling mulberry caterpillar spins a cocoon pupa to emerge as a winged silk moth!',
        commonMistakes: [
          {
            mistake: 'Writing that human fertilisation happens inside the uterus (womb) or ovary.',
            correction: 'Fertilisation happens inside the **upper Oviduct (Fallopian tube)**! The already-dividing embryo travels down for 5–7 days before implanting into the soft inner **uterus** lining.'
          }
        ]
      },
      {
        id: 'bio-ch2-t4',
        title: '4. Embryonic Development, Placenta & Twin Births',
        content: `Following fertilisation inside the oviduct, a single microscopic cell (**zygote**) launches one of biology's fastest architectural assemblies—transforming inside 40 weeks into a complete newborn human infant!`,
        subtopics: [
          {
            subheading: '4.1 Zygote → Embryo → Foetus & Role of Placenta',
            body: `1. **Zygote → Morula → Blastocyst**: As the fertilised zygote sweeps down the oviduct, repeated mitotic divisions create a solid mulberry-like cell ball (**morula**) and then a hollow sphere (**embryo / blastocyst**).
2. **Implantation**: About **one week after fertilisation**, the embryo burrows warmly into the thick, blood-rich lining of the **uterus** (*implantation*).
3. **Embryo → Foetus**: By **8 weeks**, major limbs, beating heart, eyes, and recognisable human organs appear—now termed a **Foetus**.
4. **Placenta & Umbilical Cord**: A specialised disc-like vascular organ (**placenta**) embeds in the uterine wall and links to the baby's navel via the **umbilical cord**. Though mother's and baby's bloodstreams **never mix directly**, dissolved **oxygen, glucose, amino acids, and antibodies** diffuse cleanly across the thin placenta to the baby—while foetal **carbon dioxide and urea wastes** exit into the mother's blood for disposal!
5. **Amniotic Sac & Amniotic Fluid**: Cushions the floating baby gently against physical shocks and temperature swings throughout **~280 days (~9 months) of gestation**.`,
            keyPoint: 'Zygote = single fertilised cell; Embryo = early ball/organ-forming stage up to 8 weeks; Foetus = recognisable baby stage from 8 weeks until birth!'
          },
          {
            subheading: '4.2 Identical vs Fraternal Twins & Test-Tube Babies (IVF)',
            body: `- **Identical (Monozygotic) Twins**: **One single egg** fertilised by **one sperm** forms a single zygote that splits cleanly into two identical halves early on → **always the same sex** and genetically identical!
- **Fraternal (Dizygotic) Twins**: **Two separate eggs** released together get fertilised by **two separate sperms** → genetically as distinct as ordinary siblings (may be same or opposite sex!).
- **IVF (*In Vitro* Fertilisation)**: When blocked oviducts stop sperms meeting eggs naturally, doctors retrieve eggs and mix them with sperms cleanly inside a warm sterile laboratory dish, then implant the healthy early embryo straight into the mother's uterus!`,
            keyPoint: 'Identical twins come from ONE zygote splitting in two; Fraternal twins come from TWO separately fertilised eggs!'
          }
        ],
        definitions: [
          { term: 'Implantation', definition: 'Embedding of the dividing early embryo securely into the thickened blood-rich lining of the mother\'s uterus.' },
          { term: 'Placenta', definition: 'Disc-like lifeline tissue connecting mother and foetus across the umbilical cord to supply O₂/nutrients and remove CO₂/wastes without mixing blood.' },
          { term: 'Gestation Period', definition: 'Total duration from fertilisation to childbirth inside the mother\'s womb (~280 days / 9 months in humans).' }
        ],
        realLifeExample: 'That tiny belly-button (**navel**) in the middle of your stomach is your permanent lifelong scar from where doctors cleanly snipped the **umbilical cord** moments after you took your first independent breath at birth!',
        commonMistakes: [
          {
            mistake: 'Thinking maternal blood flows directly through the umbilical cord into the foetus.',
            correction: 'Mother and baby may even have **different blood groups**! Their blood **never mixes**—only dissolved gases, nutrients, and wastes diffuse across the ultra-thin **placental barrier**.'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Binary vs Multiple Fission', definition: 'Binary fission splits a cell into 2 daughters (*Amoeba*); Multiple fission under a cyst creates dozens simultaneously (*Plasmodium*).' },
      { term: 'Fragmentation vs Regeneration', definition: 'Fragmentation breaks filaments naturally into new individuals (*Spirogyra*); Regeneration regrows lost body parts or whole flatworms (*Planaria*).' },
      { term: 'Vegetative Propagation', definition: 'Asexual plant propagation using roots, stems, or leaf buds without floral seeds.' },
      { term: 'Grafting (Stock & Scion)', definition: 'Horticultural joining of a desirable upper twig (scion) onto a sturdy rooted base stem (stock).' },
      { term: 'Calyx & Corolla', definition: 'Outer green sepal ring (protects bud) and bright petal ring (attracts pollinators) forming accessory floral whorls.' },
      { term: 'Androecium & Gynoecium', definition: 'Essential male stamens (anther + filament) and female carpel/pistil (stigma, style, ovary containing ovules).' },
      { term: 'Pollination', definition: 'Physical transfer of pollen grains from anther to stigma (self or cross-pollination).' },
      { term: 'Fertilisation', definition: 'Nuclear fusion of haploid male gamete with female egg cell forming a diploid zygote.' },
      { term: 'Oviduct (Fallopian Tube)', definition: 'Pair of tubes sweeping released ova toward the uterus; exact normal site of human fertilisation.' },
      { term: 'Placenta', definition: 'Vascular maternal–foetal exchange organ providing oxygen/nutrients and removing wastes across the umbilical cord.' }
    ],
    formulaSheet: [
      { title: 'Fertilisation Summary Equation', expression: 'Male Gamete (n) + Female Gamete (n) → Zygote (2n) → Embryo → Foetus', meaning: 'Restores full diploid chromosome number (2n = 46 in humans) at fertilisation.' },
      { title: 'Post-Fertilisation Floral Fate', expression: 'Ovary → Fruit | Ovary Wall → Pericarp | Ovule → Seed | Zygote → Embryo', meaning: 'Every fruit is biologically a ripened flower ovary shielding fertilised ovules (seeds).' }
    ],
    solvedExamples: [
      {
        id: 'bio2-ex1',
        question: 'Match five crops with their vegetative propagation organ: (a) Potato, (b) Bryophyllum, (c) Onion, (d) Ginger, (e) Sweet potato.',
        steps: [
          '(a) Potato: Underground **stem tuber** (bearing bud "eyes").',
          '(b) *Bryophyllum*: **Leaf marginal buds** along notched edges.',
          '(c) Onion: Tunicated underground **bulb** (condensed stem + fleshy scale leaves).',
          '(d) Ginger: Creeping underground **rhizome** (stem with nodes/internodes).',
          '(e) Sweet potato: Swollen adventitious **root tuber**.'
        ],
        finalAnswer: 'Potato = Stem tuber; Bryophyllum = Leaf buds; Onion = Bulb; Ginger = Rhizome; Sweet potato = Root tuber.',
        keyRule: 'Verify nodes/scale leaves to prove whether an underground structure is stem vs root.'
      },
      {
        id: 'bio2-ex2',
        question: 'Contrast a **complete bisexual flower** vs an **unisexual incomplete flower**, giving one Indian example of each.',
        steps: [
          '1. A **complete bisexual flower** (*Hibiscus*, *Mustard*, *Pea*) bears all four whorls: calyx, corolla, male stamens, and female pistil inside one blossom.',
          '2. An **unisexual incomplete flower** (*Papaya*, *Watermelon*, *Maize*) lacks either stamens (female pistillate flower) or pistil (male staminate flower), obligating **cross-pollination**.'
        ],
        finalAnswer: 'Complete bisexual has all 4 whorls (*Hibiscus*); unisexual lacks either androecium or gynoecium (*Papaya*, *Maize*).',
        keyRule: 'Unisexual plants on separate male/female trees (*Papaya*) enforce 100% cross-pollination.'
      },
      {
        id: 'bio2-ex3',
        question: 'A botanist removes all anthers carefully from an unopened *Hibiscus* bud with tweezers and ties a paper bag over it. Why does she do this (*Emasculation & Bagging*), and what happens next if left sealed?',
        steps: [
          '1. Removing anthers before maturity (**emasculation**) stops accidental **self-pollination**.',
          '2. Covering with a paper bag (**bagging**) stops unwanted insect or wind pollen from reaching the stigma.',
          '3. If left permanently sealed without dusting chosen pollen manually, no pollination or fertilisation happens → the flower dries up and drops without setting fruit!'
        ],
        finalAnswer: 'Emasculation + bagging controls artificial cross-breeding; left untouched without hand-pollination, no seed/fruit forms.',
        keyRule: 'Artificial plant hybridisation uses Emasculation → Bagging → Controlled Dusting → Rebagging.'
      },
      {
        id: 'bio2-ex4',
        question: 'Why are mature human testes housed inside the external **scrotum** rather than protected safely deep inside the abdomen like ovaries?',
        steps: [
          '1. Core human abdominal temperature stays near **$37^\\circ\\text{C}$**, which is slightly too warm for normal sperm cell division (*spermatogenesis*).',
          '2. Hanging externally inside the thin-walled **scrotum** keeps testes roughly **$2\\text{–}3^\\circ\\text{C}$ cooler (~$34^\\circ\\text{C}$)**—vital for producing active fertile sperms.'
        ],
        finalAnswer: 'Scrotum maintains testes 2–3°C below core body temperature (37°C), essential for viable sperm production.',
        keyRule: 'Sperm maturation requires cooler temperature (~34–35°C) maintained by the scrotal pouch.'
      },
      {
        id: 'bio2-ex5',
        question: 'A wind-pollinated maize field sits beside an insect-pollinated mustard field. Give THREE floral contrasts a student notices immediately.',
        steps: [
          '1. **Petals & Colour**: Mustard shows bright yellow fragrant petals; Maize tassels are tiny, dull green/brown without petals.',
          '2. **Pollen**: Mustard produces sticky/clumpy pollen clinging to bees; Maize releases dry dusty pollen clouds.',
          '3. **Stigma**: Mustard keeps a small sticky stigma inside petals; Maize hangs long silky **feathery stigmas** out to trap wind-blown grains.'
        ],
        finalAnswer: 'Mustard has bright petals, nectar & sticky pollen; Maize has dull petal-less flowers, massive dry pollen & dangling feathery stigmas.',
        keyRule: 'Always pair Wind = dry light pollen + feathery stigma; Insect = bright petals + nectar + sticky pollen.'
      },
      {
        id: 'bio2-ex6',
        question: 'How can identical twins always share the exact same biological sex while fraternal twins can be a brother and a sister?',
        steps: [
          '1. **Identical twins** originate from a **single fertilised zygote** (already fixed as XY or XX) that splits into two embryos—hence 100% identical chromosomes and **same sex**.',
          '2. **Fraternal twins** form when **two distinct eggs** get fertilised separately by **two different sperms** (one carrying X, another possibly carrying Y)—yielding either boy–girl or same-sex siblings.'
        ],
        finalAnswer: 'Identical twins split from one single zygote (identical DNA/sex); fraternal twins come from two separate eggs & two sperms.',
        keyRule: '1 Zygote split = Monozygotic (Identical); 2 Ova + 2 Sperms = Dizygotic (Fraternal).'
      },
      {
        id: 'bio2-ex7',
        question: 'Trace step-by-step how a single pollen grain on a stigma fertilises an ovule deep inside the ovary.',
        steps: [
          '1. Sticky/sugary stigma fluid stimulates the compatible pollen grain to germinate a hollow **pollen tube**.',
          '2. The pollen tube secretes digestive enzymes and grows downward through the **style** into the **ovary** cavity.',
          '3. Entering an **ovule** through its tiny opening (**micropyle**), the tube tip bursts and releases two male nuclei.',
          '4. One male nucleus fuses with the egg (**syngamy → Zygote**); the second fuses with polar nuclei (**Triple Fusion → Endosperm**).'
        ],
        finalAnswer: 'Pollen tube burrows down style → enters ovule micropyle → delivers male gametes → Zygote + Endosperm formed.',
        keyRule: 'Pollination lands on Stigma; Fertilisation occurs inside the Ovule.'
      },
      {
        id: 'bio2-ex8',
        question: 'Explain why a horticulturist chooses **Tissue Culture** rather than planting seeds to supply 10,000 viral-free banana plants to farmers.',
        steps: [
          '1. Edible cultivated bananas are **seedless** (sterile triploids) and cannot grow from seeds.',
          '2. Ordinary suckers take years and easily pass fungal or viral diseases down to farms.',
          '3. By snipping sterile microscopic apical tips (**explants**) onto hormone agar jelly, **micropropagation** creates thousands of uniform, **disease-free cloned plantlets** in just weeks inside a single clean room!'
        ],
        finalAnswer: 'Tissue culture rapidly clones thousands of disease-free identical banana plantlets even without viable seeds.',
        keyRule: 'Explant → Callus → Hormone-induced shoots & roots → Hardened Plantlets.'
      }
    ],
    gradedQuestions: {
      easy: [
        { id: 'bio2-e1', marks: 2, question: 'Name the asexual method used by (a) *Amoeba* during fair weather, (b) *Yeast*, (c) *Spirogyra*, (d) Bread mould (*Rhizopus*).', solutionSteps: ['(a) *Amoeba*: **Binary fission**.', '(b) *Yeast*: **Budding**.', '(c) *Spirogyra*: **Fragmentation**.', '(d) *Rhizopus*: **Spore formation**.'], finalAnswer: 'Binary fission, Budding, Fragmentation, Spore formation.' },
        { id: 'bio2-e2', marks: 2, question: 'Which floral parts transform into (a) Fruit and (b) Seeds after fertilisation?', solutionSteps: ['(a) **Ovary** swells and ripens into the **Fruit**.', '(b) Fertilised **Ovules** mature into **Seeds**.'], finalAnswer: 'Ovary → Fruit; Ovules → Seeds.' },
        { id: 'bio2-e3', marks: 2, question: 'Give two differences between external fertilisation and internal fertilisation.', solutionSteps: ['1. External occurs outside the body in water (frogs/fish) with high egg loss; Internal occurs safely inside the female body (birds/mammals).', '2. External produces hundreds of unguarded eggs; Internal requires very few well-protected ova.'], finalAnswer: 'Site (water vs inside body) and egg survival/numbers.' },
        { id: 'bio2-e4', marks: 2, question: 'Name the site of (a) Sperm production, (b) Human egg release, (c) Human fertilisation, (d) Implantation.', solutionSteps: ['(a) **Testes**; (b) **Ovary**; (c) **Oviduct (Fallopian tube)**; (d) **Uterus (Womb)**.'], finalAnswer: 'Testes, Ovary, Oviduct, Uterus.' }
      ],
      medium: [
        { id: 'bio2-m1', marks: 3, question: 'Differentiate between Grafting and Layering in garden plants, naming Stock and Scion.', solutionSteps: ['1. **Layering** (Jasmine): A lower intact branch is pegged under damp soil until roots sprout, then detached.', '2. **Grafting** (Mango): A superior twig (**Scion**) is joined directly onto a hardy rooted stem (**Stock**) so cambia fuse into one plant.'], finalAnswer: 'Layering roots an attached branch in soil; Grafting fuses detached Scion onto rooted Stock.' },
        { id: 'bio2-m2', marks: 3, question: 'Give three adaptations of a wind-pollinated flower like maize.', solutionSteps: ['1. Produces massive clouds of tiny, **smooth, dry, lightweight pollen**.', '2. Long dangling filaments shake pollen easily into breezes.', '3. Large **feathery, hairy stigmas** hang outside to comb airborne grains.'], finalAnswer: 'Light dry pollen, exposed anthers, and protruding feathery stigmas (no bright petals/nectar).' },
        { id: 'bio2-m3', marks: 3, question: 'State two functions of the Placenta and explain why maternal and foetal blood do not mix.', solutionSteps: ['1. Supplies dissolved **O₂, glucose, amino acids & antibodies** to the foetus via the umbilical cord.', '2. Removes foetal **CO₂ and nitrogenous wastes** into maternal blood.', '3. Direct mixing could trigger fatal blood-clotting immune incompatibility if blood groups differ!'], finalAnswer: 'Supplies O₂/nutrients and clears wastes; membrane prevents incompatible blood agglutination.' },
        { id: 'bio2-m4', marks: 3, question: 'Explain three advantages of Cross-Pollination over Self-Pollination.', solutionSteps: ['1. Combines traits from two parent plants creating **genetic variation**.', '2. Produces healthier, larger, disease-resistant seeds and vigorous offspring.', '3. Helps species adapt to changing climates over evolution.'], finalAnswer: 'Introduces variation, boosts seedling vigour, and enhances evolutionary adaptability.' }
      ],
      difficult: [
        { id: 'bio2-d1', marks: 4, question: 'Contrast Zygote, Embryo, and Foetus along the human pregnancy timeline.', solutionSteps: ['1. **Zygote**: Single diploid fertilised cell formed instantaneously inside the oviduct.', '2. **Embryo**: Multicellular developing mass formed via mitotic cleavage up to **Week 8**, undergoing implantation and organ layout.', '3. **Foetus**: Developing human from **Week 9 to birth (~40 weeks)** showing distinct face, limbs, organs, and movement inside amniotic fluid.'], finalAnswer: 'Zygote (1 cell) → Embryo (Weeks 1–8) → Foetus (Week 9 to birth).' },
        { id: 'bio2-d2', marks: 4, question: 'If a woman has both oviducts permanently blocked by scar tissue, can she conceive naturally? How does IVF bypass this without hurting her ovaries or uterus?', solutionSteps: ['1. Natural conception fails because sperms travelling up from the uterus cannot meet the ovulated egg inside blocked **oviducts**.', '2. **IVF**: Doctors collect healthy eggs directly from her **ovaries**, fertilise them with sperms cleanly in a glass lab dish, and transfer the early healthy embryo directly into her intact **uterus** for normal implantation and pregnancy!'], finalAnswer: 'No natural conception due to blocked oviduct meeting point; IVF fertilises eggs outside and places embryo directly inside the uterus.' },
        { id: 'bio2-d3', marks: 4, question: 'Explain Multiple Fission in *Plasmodium* (or *Amoeba* during drought) and contrast it with Binary Fission.', solutionSteps: ['1. In harsh dry ponds (*Amoeba*) or red blood cells (*Plasmodium*), the cell builds a thick protective **cyst**.', '2. Its nucleus splits repeatedly by mitosis into dozens of daughter nuclei; cytoplasm fragments around each nucleus.', '3. When conditions turn favourable, the cyst wall ruptures to scatter many daughter cells at once—whereas Binary fission produces strictly **two** daughters under ideal food/warmth.'], finalAnswer: 'Multiple fission divides repeatedly inside a protective cyst yielding many daughters; Binary fission produces 2 daughters.' },
        { id: 'bio2-d4', marks: 4, question: 'Why do farmers propagate commercial apple and rose varieties vegetatively via grafting/cuttings rather than growing seeds—even though plants make abundant seeds?', solutionSteps: ['1. Sexual seed production shuffles genes across pollination, producing off-type offspring (**loss of exact fruit sweetness/flower colour**).', '2. Seedlings often wait 8–10 years before first fruiting.', '3. **Grafting & cuttings** preserve exact clonal fruit quality and yield harvests far sooner!'], finalAnswer: 'Seeds introduce unpredictable variation and long wait times; grafting/cuttings guarantee rapid identical clonal crops.' }
      ]
    },
    practiceWorksheet: {
      title: 'ICSE Class 8 Biology Worksheet — Reproduction in Plants & Animals (30 Marks)',
      instructions: 'Label diagrams neatly and distinguish floral vs human reproductive terms accurately.',
      sections: [
        {
          sectionTitle: 'Section A: Quick Terminology & Identification (1 × 8 = 8 Marks)',
          items: [
            '1. Which essential floral whorl produces pollen grains inside anthers? ______',
            '2. Identify the vegetative part used to grow new: (a) *Bryophyllum*, (b) Potato, (c) Ginger.',
            '3. Name the two parts joined in Grafting: bottom rooted base (______) + upper twig (______).',
            '4. Exact organ in the human female where fertilisation occurs: ______.',
            '5. Protective pouch keeping male testes cooler than 37°C: ______.',
            '6. Undifferentiated mass of cells grown during early plant tissue culture: ______.',
            '7. Post-fertilisation: Ovule matures into ______ while Ovary wall forms ______.',
            '8. True or False: Fraternal twins arise from one fertilised egg splitting into two.'
          ]
        },
        {
          sectionTitle: 'Section B: Conceptual Reasoning (3 × 4 = 12 Marks)',
          items: [
            '9. Compare Binary fission, Budding, and Spore formation with one neat labelled organism each.',
            '10. Contrast Self-Pollination vs Cross-Pollination and Wind vs Insect floral features.',
            '11. Explain why frogs lay hundreds of eggs in ponds whereas humans typically produce one egg monthly.',
            '12. Distinguish Zygote, Embryo, and Foetus and state the exact function of the Placenta.'
          ]
        },
        {
          sectionTitle: 'Section C: Labelled L.S. Flower & Application (5 × 2 = 10 Marks)',
          items: [
            '13. Draw a neat L.S. of a Complete Flower labelling Pedicel, Thalamus, Sepal, Petal, Anther, Filament, Stigma, Style, Ovary, and Ovules.',
            '14. Describe the 4 steps of Micropropagation (Tissue Culture) and list two major agricultural benefits.'
          ]
        }
      ],
      answerKey: [
        '1. Androecium (Stamens)',
        '2. (a) Leaf margins, (b) Stem tuber eyes, (c) Underground rhizome',
        '3. Stock; Scion',
        '4. Oviduct (Fallopian tube)',
        '5. Scrotum',
        '6. Callus',
        '7. Seed; Pericarp (Fruit wall)',
        '8. False (two separate ova fertilised by two sperms)',
        '9. Binary fission: Amoeba (2 daughters); Budding: Yeast/Hydra (unequal bud); Spores: Rhizopus (sporangium)',
        '10. Self = same plant; Cross = different plant. Wind = dry pollen + feathery stigma; Insect = bright petals + nectar + sticky pollen',
        '11. Frog external fertilisation suffers high predation/water loss; human internal fertilisation + uterus shields the single embryo',
        '12. Zygote (1 cell) → Embryo (Week 1–8) → Foetus (Week 9–birth); Placenta exchanges O₂/nutrients & wastes across umbilical cord',
        '13. Must depict Calyx, Corolla, Stamens (Anther+Filament) and central Carpel (Stigma, Style, Ovary+Ovules) on Thalamus',
        '14. Sterilise Explant → Hormone agar → Callus → Rooted plantlets; clones thousands of viral-free identical crops rapidly'
      ]
    },
    examPreparationTips: [
      'Always learn exact **biological pairs**: Calyx ↔ Sepals, Corolla ↔ Petals, Androecium ↔ Stamens (male), Gynoecium ↔ Carpels/Pistil (female).',
      'In **Human Reproduction**, double-check the distinction: **Ovulation = Ovary**, **Fertilisation = Oviduct**, **Implantation & Gestation = Uterus**!',
      'Memorise **Potato = Stem tuber** vs **Sweet potato = Root tuber**—one of the top ICSE trap questions!'
    ],
    chapterSummary: [
      '**Asexual reproduction** produces exact single-parent clones via fission (*Amoeba, Plasmodium*), budding (*Yeast, Hydra*), fragmentation (*Spirogyra*), regeneration (*Planaria*), and spores (*Rhizopus*).',
      '**Vegetative propagation** occurs naturally via tubers, rhizomes, bulbs, runners, and *Bryophyllum* leaf buds, and artificially via cuttings, layering, **grafting (stock + scion)**, and **tissue culture**.',
      'A complete flower has four whorls on its thalamus: **Calyx, Corolla, Androecium (male), and Gynoecium (female)**.',
      'Following **pollination** (wind, insect, or water), **double fertilisation** produces a **zygote (→ embryo)** and **endosperm**; the **ovary turns into fruit** and **ovules into seeds**.',
      'Humans perform **internal fertilisation** inside the **oviduct (Fallopian tube)**; the embryo implants in the **uterus** and grows to a **foetus** nourished via the **placenta and umbilical cord** over ~9 months.'
    ],
    importantQuestionsAndAnswers: [
      { type: 'Short Answer', question: 'Why does *Amoeba* switch from binary fission to multiple fission inside a cyst?', answer: 'When pond water dries up or turns freezing, *Amoeba* forms a tough resistant **cyst wall** to survive and multiplies inside by **multiple fission**, releasing dozens of healthy daughter amoebae instantly once favourable rains return.' },
      { type: 'Short Answer', question: 'What is the biological difference between a Stock and a Scion in mango grafting?', answer: 'The **Stock** is the rooted lower wild/hardy plant providing water, minerals, and disease resistance; the **Scion** is the upper grafted twig from a prized cultivar that determines the delicious sweetness and variety of harvested mangoes.' },
      { type: 'Short Answer', question: 'State any three differences between Pollination and Fertilisation.', answer: '1. Pollination is physical pollen transfer from anther to stigma; Fertilisation is biological fusion of male and female nuclei.\n2. Pollination precedes fertilisation and needs wind/insects; Fertilisation happens internally inside the ovule.\n3. Pollination alone creates no seed; Fertilisation yields the diploid zygote and seed.' },
      { type: 'Reasoning', question: 'Why must wind-pollinated flowers like wheat and maize produce far more pollen than bright hibiscus flowers?', answer: 'Air currents scatter pollen blindly in random directions where most grains fall onto soil or leaves; producing millions of lightweight dry grains ensures enough statistically intercept protruding feathery stigmas—unlike targeted bee visits!' },
      { type: 'Short Answer', question: 'List the three regions of the female Gynoecium (Pistil) and state each role.', answer: '1. **Stigma**: Sticky/feathery top landing pad trapping pollen grains.\n2. **Style**: Elongated stalk lifting stigma and guiding the growing pollen tube downward.\n3. **Ovary**: Swollen base housing **ovules** (female eggs), ripening into fruit post-fertilisation.' },
      { type: 'Long Answer', question: 'Trace the journey of human reproduction from ovulation through fertilisation, implantation, and placental nourishment.', answer: 'Every ~28 days, one **ovary** releases a mature **ovum (ovulation)** into the ciliated funnel of the **oviduct**. Active flagellated **sperms** swim upward from the vagina and uterus into the **oviduct**, where one sperm fuses with the ovum (**fertilisation**) forming a diploid **zygote**. As it glides down the oviduct, repeated cell divisions form a hollow **embryo** which burrows into the soft blood-rich wall of the **uterus (~Day 6–7, implantation)**. Connected via the **umbilical cord** to the vascular **placenta**, the embryo grows into a **foetus** inside shock-absorbing **amniotic fluid**, absorbing maternal O₂ and nutrients while clearing CO₂ and wastes until birth (~40 weeks).' },
      { type: 'Long Answer', question: 'Explain Natural vs Artificial Vegetative Propagation with two examples each and state two limitations of vegetative propagation.', answer: '**Natural**: Underground stems like **potato tubers** (eyes), **ginger rhizomes**, **onion bulbs**, grass **runners**, and ***Bryophyllum* leaf buds** sprout new clones naturally. **Artificial**: Gardeners multiply desired plants via **stem cuttings** (rose), **layering** (jasmine), **grafting** (mango/apple), and **tissue culture** (orchids/bananas). **Limitations**: (1) All plants share **zero genetic variation**, so one sudden blight disease can wipe out an entire orchard at once; (2) Clones crowd nearby soil causing overcrowding and mineral competition.' },
      { type: 'HOTS', question: 'If all flowers of a pumpkin creeper turn out to be male staminate flowers except two female flowers that are eaten by beetles, why will that vine bear zero pumpkins?', answer: 'Pumpkins are **unisexual** plants: ONLY the **female pistillate flower** houses an **ovary** containing ovules capable of swelling into a fruit (pumpkin)! Male flowers carry solely pollen-making stamens and wither off naturally without ever producing fruits.' }
    ],
    practiceExercises: [
      { question: 'Classify each organism by asexual mode: Yeast, Plasmodium, Planaria, Rhizopus, Bryophyllum.', hint: 'Match organism to fission/budding/regeneration/spores/leaf buds.', answerGuide: 'Yeast=Budding; Plasmodium=Multiple fission; Planaria=Regeneration; Rhizopus=Spore formation; Bryophyllum=Leaf buds.' },
      { question: 'Why is the Scion wrapped tightly with waxed tape over the Stock during grafting?', hint: 'Prevent infection, drying, and align cambium.', answerGuide: 'Seals cut from fungal spores and drying while pressing male & female vascular cambia tightly together to fuse xylem & phloem.' },
      { question: 'Name the fluid cushioning a human foetus inside the uterus and the structure uniting foetal navel to placenta.', hint: 'Amniotic & Umbilical.', answerGuide: 'Amniotic fluid (inside amniotic sac); Umbilical cord.' }
    ]
  },
  quizQuestions: [
    {
      id: 'bio2-q1',
      type: 'mcq',
      question: 'Which organism reproduces inside a protective cyst during harsh conditions by Multiple Fission?',
      options: ['Yeast', 'Spirogyra', 'Plasmodium', 'Hydra'],
      correctAnswer: 'Plasmodium',
      explanation: 'Malaria parasite Plasmodium divides repeatedly inside a cyst via multiple fission to release many daughter cells simultaneously.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio2-q2',
      type: 'mcq',
      question: 'Which of the following is an underground STEM rather than a modified root?',
      options: ['Sweet potato', 'Carrot', 'Potato', 'Dahlia'],
      correctAnswer: 'Potato',
      explanation: 'Potato is a stem tuber bearing scale leaves and axillary bud "eyes" (nodes); sweet potato and dahlia are storage roots.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio2-q3',
      type: 'mcq',
      question: 'In plant grafting, the upper selected shoot twig bearing desired fruit traits is called the:',
      options: ['Stock', 'Scion', 'Rhizome', 'Callus'],
      correctAnswer: 'Scion',
      explanation: 'Stock is the hardy rooted base stem; Scion is the grafted upper shoot producing desired fruit or flower varieties.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio2-q4',
      type: 'mcq',
      question: 'Which pair forms the two ESSENTIAL reproductive whorls of a complete flower?',
      options: ['Calyx and Corolla', 'Androecium and Gynoecium', 'Sepals and Petals', 'Pedicel and Thalamus'],
      correctAnswer: 'Androecium and Gynoecium',
      explanation: 'Androecium (stamens) and Gynoecium (carpels) produce male and female gametes directly; calyx and corolla are accessory whorls.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio2-q5',
      type: 'mcq',
      question: 'After successful fertilisation inside a flower, the OVULES mature directly into:',
      options: ['Fruit', 'Pericarp', 'Seeds', 'Petals'],
      correctAnswer: 'Seeds',
      explanation: 'Ovules turn into seeds while the surrounding ovary swells and ripens into the fruit.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio2-q6',
      type: 'mcq',
      question: 'Which combination belongs strictly to a WIND-pollinated (anemophilous) flower?',
      options: [
        'Bright petals, sweet nectar, sticky pollen',
        'Dull petal-less blooms, abundant dry light pollen, protruding feathery stigma',
        'Scented red corolla, hidden small stigma',
        'Heavy spiny pollen clinging to bees'
      ],
      correctAnswer: 'Dull petal-less blooms, abundant dry light pollen, protruding feathery stigma',
      explanation: 'Wind flowers waste no energy on petals or nectar; they rely on clouds of dry light pollen caught by wide feathery stigmas.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio2-q7',
      type: 'mcq',
      question: 'Where does fertilisation of the human ovum by a sperm normally take place?',
      options: ['Inside the Uterus', 'Inside the Ovary', 'Inside the Oviduct (Fallopian tube)', 'Inside the Vagina'],
      correctAnswer: 'Inside the Oviduct (Fallopian tube)',
      explanation: 'Sperms swim upward through the uterus to meet the released egg inside the upper oviduct (Fallopian tube).',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio2-q8',
      type: 'mcq',
      question: 'Why must human testes remain suspended inside the external scrotum rather than inside the abdomen?',
      options: [
        'To stay 2–3°C cooler than 37°C body temperature for viable sperm production',
        'To stay warmer than 40°C',
        'To receive direct sunlight',
        'To store menstrual fluid'
      ],
      correctAnswer: 'To stay 2–3°C cooler than 37°C body temperature for viable sperm production',
      explanation: 'Spermatogenesis requires a cooler temperature (~34–35°C) maintained by the external scrotal pouch.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio2-q9',
      type: 'fill_blank',
      question: 'In plant tissue culture, a sterile explant first multiplies into an undifferentiated lump of cells called a _____.',
      correctAnswer: 'callus',
      explanation: 'On hormone nutrient agar, explants proliferate into an unorganised cell mass called a callus before regenerating shoots and roots.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio2-q10',
      type: 'mcq',
      question: 'Which statement accurately describes the human Placenta?',
      options: [
        'It pumps maternal blood directly into the foetus heart',
        'It allows O₂ and nutrients to diffuse across to the foetus while clearing CO₂ without mixing blood',
        'It acts as the male sperm gland',
        'It produces pollen tubes'
      ],
      correctAnswer: 'It allows O₂ and nutrients to diffuse across to the foetus while clearing CO₂ without mixing blood',
      explanation: 'Mother and foetus blood remain cleanly separated by thin membranes across which gases, food, and wastes diffuse.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio2-q11',
      type: 'true_false',
      question: 'Pollination and Fertilisation mean the exact same process in flowering plants.',
      correctAnswer: false,
      explanation: 'Pollination is transfer of pollen to stigma; fertilisation is nuclear fusion inside the ovule later.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio2-q12',
      type: 'hots',
      question: 'In a garden experiment, a student removes ONLY the stamens from a complete Hibiscus flower and leaves the central stigma, style, and ovary open to visiting honeybees. Can this flower still form seeds and fruit?',
      options: [
        'No — removing stamens destroys the ovules instantly',
        'Yes — visiting bees bring compatible pollen from other Hibiscus flowers to pollinate the intact pistil',
        'No — petals drop immediately if stamens are gone',
        'Yes — stamens grow back inside two hours'
      ],
      correctAnswer: 'Yes — visiting bees bring compatible pollen from other Hibiscus flowers to pollinate the intact pistil',
      explanation: 'The female Gynoecium (stigma, style, ovary with ovules) remains intact and readily undergoes insect-mediated cross-pollination!',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    { id: 'fc-b2-1', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'Match: Binary Fission, Multiple Fission, Budding, Fragmentation, Spores.', back: 'Amoeba (Binary), Plasmodium (Multiple), Yeast/Hydra (Budding), Spirogyra (Fragmentation), Rhizopus (Spores).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b2-2', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'Natural vegetative propagules: Potato, Ginger, Onion, Bryophyllum, Sweet potato.', back: 'Potato=Stem tuber; Ginger=Rhizome; Onion=Bulb; Bryophyllum=Leaf marginal buds; Sweet potato=Root tuber.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b2-3', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'Stock vs Scion in plant Grafting?', back: 'Stock = rooted bottom base stem (vigour/minerals); Scion = upper grafted twig (fruit/flower quality).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b2-4', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'List the 4 floral whorls from outside to centre.', back: '1. Calyx (Sepals), 2. Corolla (Petals), 3. Androecium (Stamens — male), 4. Gynoecium (Pistil — female).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b2-5', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'Post-fertilisation fate of Ovary and Ovules?', back: 'Ovary → Fruit (Ovary wall → Pericarp); Ovules → Seeds (Zygote → Embryo).', category: 'Formula', importance: 'Essential' },
    { id: 'fc-b2-6', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'Wind-pollinated vs Insect-pollinated flower features?', back: 'Wind: dull, scentless, massive dry light pollen, feathery stigma. Insect: bright petals, nectar, sticky pollen.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b2-7', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'Where do Sperm production, Fertilisation & Implantation happen in humans?', back: 'Sperms = Testes (in scrotum); Fertilisation = Oviduct (Fallopian tube); Implantation = Uterus.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b2-8', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'Difference between Oviparous and Viviparous animals?', back: 'Oviparous lay eggs outside (birds, frogs, reptiles); Viviparous birth live young nourished internally (mammals).', category: 'Definition', importance: 'Standard' },
    { id: 'fc-b2-9', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'What is the role of the Placenta & Umbilical Cord?', back: 'Exchanges O₂, glucose & antibodies from mother to foetus and clears CO₂/wastes without mixing blood.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b2-10', subjectId: 'biology', chapterId: 'bio-ch2', chapterTitle: 'Reproduction in Plants and Animals', front: 'Identical (Monozygotic) vs Fraternal (Dizygotic) twins?', back: 'Identical = 1 zygote splits into 2 (always same sex & identical DNA); Fraternal = 2 eggs fertilised by 2 sperms.', category: 'Scientific Law', importance: 'Standard' }
  ]
};
