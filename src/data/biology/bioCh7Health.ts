import { Chapter } from '../../types';

export const BIO_CH7_HEALTH: Chapter = {
  id: 'bio-health',
  subjectId: 'biology',
  chapterNumber: 7,
  title: 'Health and Hygiene (Diseases and First Aid)',
  subtitle: 'Communicable vs non-communicable diseases, pathogens & transmission vectors (Anopheles, Aedes, housefly), active vs passive immunity & vaccination schedules (BCG, DPT, OPV, MMR), personal/public hygiene, first aid protocols, and substance-abuse hazards',
  term: 'Annual',
  estimatedMinutes: 90,
  notes: {
    introduction: `According to the **World Health Organization (WHO)**, true **Health** is not merely the absence of fever or pain—it is *"a state of complete physical, mental, and social well-being."* Every single day, invisible armies of bacteria, viruses, fungi, and mosquito-borne protozoa challenge our bodies, while unexpected playground sprains, kitchen burns, or electric shocks demand calm, life-saving action long before an ambulance arrives!

In Chapter 7 of Class 8 ICSE Biology (*Concise Biology / Gem's Biology*), we distinguish **Communicable (infectious) vs Non-communicable diseases**, identify key microbial **pathogens and insect vectors** (*Anopheles, Aedes, housefly*), trace how **Vaccines** train our immune memory (**Edward Jenner** and **BCG / DPT / OPV / MMR**), practise scientific **Hygiene & Sanitation**, master evidence-based **First Aid** for burns, bleeding, fractures, animal/snake bites, poisoning, and fainting, and review the organ damage caused by **tobacco, alcohol, and addictive drugs**.`,
    learningObjectives: [
      'Define Health and Disease (WHO) and distinguish Communicable (infectious) vs Non-communicable (deficiency, degenerative, genetic, allergy) diseases.',
      'Match major pathogens (Bacteria, Viruses, Protozoa, Fungi, Helminths) and transmission routes (air, water/food, vector, contact) to classic diseases.',
      'Differentiate Active vs Passive Immunity and explain how Vaccines trigger rapid secondary memory-cell antibody surges (including Edward Jenner\'s smallpox discovery).',
      'Recall the primary childhood immunisation vaccines: BCG, DPT, OPV, MMR, Hepatitis B, and TT.',
      'Describe practical personal hygiene, safe drinking water, and community sanitation habits blocking disease cycles.',
      'Apply correct First Aid step-by-step for minor/severe burns, cuts/bleeding, fractures, dog/snake bites, poisoning, fainting, and electrocution—while avoiding dangerous myths.'
    ],
    topics: [
      {
        id: 'bio-ch7-t1',
        title: '1. Classification of Diseases, Pathogens & Insect Vectors',
        content: `Any structural or functional disturbance impairing normal body comfort or efficiency is a **Disease**. Clinicians group human diseases broadly into **Communicable** (contagious, spreading person-to-person via germs) and **Non-communicable** (non-infectious—cannot catch from sneezing or touching!).`,
        subtopics: [
          {
            subheading: '1.1 Communicable vs Non-Communicable Diseases + Five Pathogen Classes',
            body: `- **Non-Communicable Diseases** (*do NOT spread between people*): Deficiency diseases (*Scurvy Vit C, Rickets Vit D, Goitre Iodine, Anaemia Iron*), Lifestyle/metabolic (*Diabetes, Hypertension*), Degenerative (*Arthritis, Cataract*), Genetic (*Haemophilia*), Allergies (*Asthma*), Cancer.
- **Communicable Diseases** (*caused by microscopic **Pathogens** spreading via air, contaminated water/food, physical contact, or biological vectors*):
  1. **Bacteria**: **Tuberculosis** (*Mycobacterium tuberculosis* — airborne cough droplets), **Cholera** (*Vibrio cholerae* — dirty water/food), **Typhoid** (*Salmonella typhi* — houseflies/contaminated water), **Tetanus** (*Clostridium tetani* — rusted/dirty wound soil).
  2. **Viruses**: **Influenza / Common Cold** (air droplets), **Polio** (faecal–oral water), **Dengue & Chikungunya** (*Aedes* daytime-biting mosquito!), **Rabies** (saliva of infected dog/monkey bite), **AIDS** (**HIV** via infected blood, unsterile needles, mother-to-child—NEVER via shaking hands or mosquito bites!).
  3. **Protozoa**: **Malaria** (*Plasmodium* spread exclusively by **Female *Anopheles* mosquito**), **Amoebic dysentery**.
  4. **Fungi**: **Ringworm / Athlete's foot** (skin contact/shared damp towels).
  5. **Parasitic Worms (Helminths)**: **Ascariasis** (roundworm via dirty unwashed hands/raw unwashed veggies).`,
            keyPoint: 'Always nail the mosquito species match: Female Anopheles = Malaria (Plasmodium); Aedes aegypti = Dengue & Chikungunya (Viruses); Culex = Filariasis!'
          }
        ],
        definitions: [
          { term: 'Health (WHO)', definition: 'A state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity.' },
          { term: 'Pathogen', definition: 'Disease-causing microscopic organism (bacterium, virus, protozoan, fungus, or parasitic worm).' },
          { term: 'Vector', definition: 'Living carrier (especially insects like mosquitoes and houseflies) transferring infectious pathogens from sick hosts to healthy people.' },
          { term: 'Droplet Infection', definition: 'Airborne disease transmission via tiny pathogen-laden cough or sneeze spray inhaling directly into nearby respiratory tracts (e.g., TB, Influenza).' }
        ],
        comparisonTable: {
          caption: 'Major Communicable Pathogens, Vectors & Preventive Hygiene',
          headers: ['Disease', 'Pathogen Class', 'Mode / Vector', 'Primary Prevention'],
          rows: [
            ['**Malaria**', 'Protozoan (*Plasmodium*)', '**Female *Anopheles* mosquito**', 'Mosquito nets, drainage of stagnant puddles'],
            ['**Dengue / Chikungunya**', 'Virus', '**Female *Aedes* mosquito** (day-biter)', 'Empty flowerpot/cooler water weekly; sleeves'],
            ['**Cholera & Typhoid**', 'Bacteria (*Vibrio, Salmonella*)', '**Housefly** / contaminated water & food', 'Boiled/filtered water, covered food, handwashing'],
            ['**Tuberculosis (TB)**', 'Bacterium (*Mycobacterium*)', '**Airborne cough/sneeze droplets**', '**BCG vaccine**, covered cough, airy rooms'],
            ['**Rabies**', 'Virus', 'Infected dog/cat/monkey bite', 'Wash bite 15 min + **Anti-rabies vaccine** immediately'],
            ['**AIDS**', 'Virus (**HIV**)', 'Infected blood/needles, mother-to-baby', 'Disposable sterile needles, screened safe blood']
          ]
        },
        realLifeExample: 'Stagnant rainwater sitting inside discarded car tyres or rooftop desert coolers becomes an instant breeding nursery for ***Aedes* mosquito larvae**—turning whole neighbourhoods into monsoon **Dengue** hotspots unless emptied weekly!',
        commonMistakes: [
          {
            mistake: 'Writing that **Malaria** is caused by a mosquito or that HIV spreads via mosquitoes or hugging.',
            correction: 'The mosquito (**Female *Anopheles***) is only the **Vector (carrier)**—the actual disease-causing pathogen is the microscopic protozoan ***Plasmodium***! And **HIV does NOT survive in mosquitoes** or spread through casual handshakes/food sharing.'
          }
        ]
      },
      {
        id: 'bio-ch7-t2',
        title: '2. Immunity, Vaccination & Memory B-Cells',
        content: `Why do people rarely catch chickenpox twice in their lives, and how does a tiny pain-free drop of **Oral Polio Vaccine (OPV)** shield a baby against paralysis forever? The secret lies inside our adaptive **Immune System**!`,
        subtopics: [
          {
            subheading: '2.1 Active vs Passive Immunity & How Vaccines Work',
            body: `- **Immunity**: Body's natural resistance power against pathogens and their toxins.
- **Active Immunity** (*Slow start, LIFELONG protection!*): Your **own WBCs / Lymphocytes** produce custom **Antibodies** and **Memory B-cells**—triggered either after surviving a natural infection OR gently via **Vaccination**!
- **Passive Immunity** (*INSTANT protection, TEMPORARY for weeks!*): Ready-made **antibodies** injected or passed directly from outside (*e.g., **anti-snake venom** serum, **anti-tetanus (ATS)** injection after rusted nail wounds, and protective maternal antibodies crossing **placenta / mother's first milk colostrum**!*).
- **Vaccination (Edward Jenner, 1796)**: Inspired by milkmaids catching mild **cowpox** yet never catching deadly **smallpox**, English physician **Edward Jenner** pioneered the first vaccine! Injecting harmless **killed, weakened (attenuated), or surface-fragment germs** stimulates a gentle **Primary Response** that trains long-lived **Memory B-cells**—so if the real virulent pathogen invades years later, memory cells unleash a massive, **lightning-fast Secondary Antibody Surge**, wiping out invaders before symptoms appear!`,
            keyPoint: 'Active Immunity = Body makes its OWN antibodies (Vaccines → long-lasting); Passive Immunity = Ready-made antibodies borrowed externally (Anti-venom, Colostrum → instant but temporary)!'
          },
          {
            subheading: '2.2 Essential ICSE Immunisation Vaccines',
            body: `- **BCG** (*Bacillus Calmette–Guérin*): Protects against **Tuberculosis (TB)** (given at birth).
- **OPV** (*Oral Polio Vaccine*, Sabin live attenuated drops): Protects against **Poliomyelitis** (India achieved polio-free status through *Pulse Polio*!).
- **DPT** (*Triple Antigen*): Protects against **Diphtheria, Pertussis (Whooping Cough), and Tetanus**.
- **MMR**: Protects against **Measles, Mumps, and Rubella**.
- **TT**: **Tetanus Toxoid** (given after deep soil/rusty-metal cuts or injuries!).`,
            keyPoint: 'Remember triple-vaccine letters: DPT = Diphtheria + Pertussis + Tetanus; MMR = Measles + Mumps + Rubella; BCG = Tuberculosis!'
          }
        ],
        definitions: [
          { term: 'Active Immunity', definition: 'Long-lasting immunity developed when a person\'s own lymphocytes manufacture antibodies and memory cells after infection or vaccination.' },
          { term: 'Passive Immunity', definition: 'Immediate temporary protection achieved by injecting or transferring pre-formed external antibodies (e.g., anti-venom serum, maternal colostrum).' },
          { term: 'Vaccine', definition: 'Safe preparation of killed, weakened, or detoxified pathogen antigens administered to build active immune memory without severe disease.' }
        ],
        diagram: {
          id: 'diag-bio-disease-vectors',
          title: 'Vaccination Antibody Memory Surge & Common Disease Vectors',
          caption: 'Vaccine priming induces long-lived memory B-cells triggering a steep rapid secondary antibody surge upon booster or real pathogen exposure; alongside key insect/droplet transmission paths.',
          svgFigure: 'bio_disease_vectors'
        },
        comparisonTable: {
          caption: 'Active Immunity vs Passive Immunity',
          headers: ['Feature', 'Active Immunity', 'Passive Immunity'],
          rows: [
            ['Source of Antibodies', '**Produced by person\'s own WBCs**', 'Manufactured **outside** and transferred ready-made'],
            ['Speed of Protection', 'Takes 1–2 weeks to build up', '**Immediate / Instantaneous**'],
            ['Duration', '**Long-lasting / Lifelong** (Memory cells)', '**Short-lived** (few weeks to months; zero memory cells)'],
            ['Examples', '**BCG, OPV, DPT, MMR vaccines**; surviving chickenpox', '**Anti-snake venom, ATS serum**, mother\'s colostrum milk']
          ]
        },
        realLifeExample: 'If you step barefoot onto a rusty garden nail contaminated with soil *Clostridium tetani*, doctors check your vaccination card for recent **TT (Active)** and in severe deep wounds give **ATS (Passive ready-made antitoxin)** simultaneously for instant defence!',
        commonMistakes: [
          {
            mistake: 'Thinking Antibiotics (like Penicillin) kill viruses such as Dengue, Polio, or Common Cold.',
            correction: '**Antibiotics target ONLY Bacteria** (e.g. cell-wall synthesis)—they have **ZERO effect on Viruses**! Viral outbreaks must be fought via prevention, hygiene, and **Vaccines**!'
          }
        ]
      },
      {
        id: 'bio-ch7-t3',
        title: '3. First Aid Protocols for Common Emergencies',
        content: `**First Aid** is the immediate, temporary, skilled emergency care given using safe everyday materials at an accident spot *before* professional medical help arrives—often saving limbs or lives during the crucial "Golden Hour".`,
        subtopics: [
          {
            subheading: '3.1 Burns, Bleeding Cuts, Fractures & Fainting',
            body: `- **Minor & Moderate Burns**: Immediately hold the burned skin under **cool running tap water for 10–15 minutes** to stop deep heat damage, then cover loosely with a sterile dry cloth. **NEVER smear butter, oil, ink, or toothpaste** (traps heat and invites infection!) and **NEVER burst blisters** (natural sterile cover!). *(Chemical burns: flush with plenty of clean water gently!)*
- **Bleeding Cuts & Wounds**: Wash gently with clean water/antiseptic; press firm **direct pressure** with a clean gauze pad and elevate the bleeding limb above heart level until clotting stops. Apply a bandage snugly (never overly tight tourniquet choking toes blue!).
- **Fractures (Broken Bones)**: Keep the injured limb **completely still / immobilised** using a **padded rigid splint** (cardboard/folded newspaper + sling) tying above and below the break. **NEVER attempt to push, bend, or straighten a crooked bone!**
- **Fainting**: Lay the patient flat on their back in cool airy shade, **loosen tight neck collars**, and **raise legs slightly** on a bag/pillow (~30 cm) to restore venous blood smoothly to the brain!`,
            keyPoint: 'First Aid Golden NOs: NEVER put butter/toothpaste on burns; NEVER pop burn blisters; NEVER yank or realign suspected fractures!'
          },
          {
            subheading: '3.2 Dog/Snake Bites, Electrocution & Accidental Poisoning',
            body: `- **Dog / Animal Bite (Rabies risk)**: Immediately wash the wound thoroughly under **running water with soap for at least 15 minutes** to flush viral saliva out, dab povidone-iodine antiseptic, do NOT stitch tightly, and rush for **Anti-Rabies Vaccine (ARV)** ASAP!
- **Venomous Snake Bite**: Keep the victim **calm and completely immobile** (panic speeds heartbeat and spreads venom faster!), immobilise the bitten limb loosely *below heart level* with a splint, and rush immediately to a hospital for **Polyvalent Anti-Snake Venom (Passive immunity)**. **NEVER cut the bite open or suck venom with your mouth!**
- **Electrocution**: **NEVER touch a victim still gripping live wires with bare hands!** Switch off mains power first, or push the wire away standing on dry wood/rubber using a **dry wooden broomstick**, then check breathing/CPR!
- **Poisoning**: Identify the swallowed chemical bottle immediately and rush to emergency care (do NOT blindly induce vomiting for corrosive acids/alkalis/kerosene, as acid burns the oesophagus twice coming back up!).`,
            keyPoint: 'For Dog Bite = Wash 15 min with soap + running water + Anti-Rabies Vaccine; For Electrocution = Break power FIRST using dry wood/rubber before touching victim!'
          }
        ],
        definitions: [
          { term: 'First Aid', definition: 'Immediate temporary emergency care rendered at the scene of injury or sudden illness using available materials before hospital treatment.' },
          { term: 'Splint', definition: 'Rigid padded support strapped gently around a suspected bone fracture to immobilise bone ends and prevent further vessel/nerve tears.' }
        ],
        realLifeExample: 'Applying **15 minutes of cool running water** on a scalding tea splash immediately removes residual skin heat, preventing deep blistering far better than any home kitchen paste!',
        commonMistakes: [
          {
            mistake: 'Tying razor-tight tourniquets or slicing/sucking snake bites like dramatic movie scenes.',
            correction: 'Modern medical First Aid strictly forbids tight tourniquets and cutting/sucking bites—they cause gangrene and mouth poisoning; keep victim calm, immobilise limb gently, and race for **hospital anti-venom**!'
          }
        ]
      },
      {
        id: 'bio-ch7-t4',
        title: '4. Personal Hygiene, Community Sanitation & Substance Abuse Hazards',
        content: `Preventing infectious outbreaks costs pennies compared to curing hospital wards—starting right with **daily personal cleanliness**, safe **5-F hygiene**, clean civic drainage, and protecting adolescent minds and organs from toxic **addictions**.`,
        subtopics: [
          {
            subheading: '4.1 Personal Hygiene & Community Sanitation ("The 5 Fs")',
            body: `- **Personal Hygiene**: Wash hands thoroughly with soap for 20 seconds before eating and after using toilets (breaks the **5-F faecal–oral chain**: *Fluids, Fingers, Flies, Fields, Food*); brush teeth twice daily; keep nails trimmed; bathe daily with soap; never share towels/combs (blocks ringworm and head lice!).
- **Safe Water & Sanitation**: Boil, chlorinate, or UV-RO purify doubtful water; keep garbage bins tightly lidded to starve breeding houseflies; spray larvicides or drain rooftop water bowls weekly to smash *Aedes* & *Anopheles* mosquito cycles!`,
            keyPoint: 'Soap and 20-second handwashing before meals breaks Typhoid, Cholera, Hepatitis A, and roundworm transmission instantly!'
          },
          {
            subheading: '4.2 Medical Hazards of Tobacco, Alcohol & Narcotic Drugs',
            body: `- **Tobacco (Cigarettes, Beedis, Gutkha/Chewing Tobacco)**: Packs **Nicotine** (constricts arteries → high BP & heart attacks), **Carbon Monoxide** (blocks RBC oxygen), and **Carcinogenic Tar** causing deadly **lung, mouth, and throat cancers** plus **emphysema**!
- **Alcohol (Ethanol)**: Depresses **Cerebellum** balance causing fatal road crashes; causes fatty liver scarring (**Liver Cirrhosis**) and stomach ulcers.
- **Narcotic Drugs (Heroin, Cocaine, Morphine abuse)**: Hijack brain synapses creating crippling addiction, respiratory arrest overdoses, and **HIV/Hepatitis** from shared needles!`,
            keyPoint: 'Three toxic villains in tobacco smoke: Nicotine (addictive vasoconstrictor), CO (carboxyhaemoglobin), and Tar (cancer carcinogen)!'
          }
        ],
        definitions: [
          { term: 'Sanitation', definition: 'Public-health management of safe drinking water, covered waste disposal, sewage treatment, and vector breeding elimination.' },
          { term: 'Liver Cirrhosis', definition: 'Permanent fibrous scarring and failure of liver cells caused primarily by chronic heavy alcohol abuse.' }
        ],
        realLifeExample: 'During community cleanliness drives (**Swachh Bharat**), sealing open roadside drains and providing safe toilets eliminated massive monsoon cholera clusters almost overnight!',
        commonMistakes: [
          {
            mistake: 'Assuming chewing smokeless *gutkha* or *paan masala* tobacco is harmless because no smoke enters the lungs.',
            correction: 'Chewing tobacco still delivers toxic **nicotine** straight into gums and ranks as a **leading cause of painful oral/cheek cancer** across India!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Health (WHO)', definition: 'Complete state of physical, mental, and social well-being—not merely absence of disease.' },
      { term: 'Communicable Disease', definition: 'Infectious illness caused by transmissible pathogens (e.g., TB, Malaria, Dengue, Cholera).' },
      { term: 'Vector', definition: 'Carrier organism transmitting pathogens between hosts (e.g., Female *Anopheles*, *Aedes*, Housefly).' },
      { term: 'Active Immunity', definition: 'Long-term immunity generated by a person\'s own antibody-making memory B-cells after infection or vaccination.' },
      { term: 'Passive Immunity', definition: 'Short-term instant protection from externally injected antibodies (anti-venom, ATS, colostrum).' },
      { term: 'Vaccination (Edward Jenner)', definition: 'Priming immune memory safely using weakened/killed pathogen antigens.' },
      { term: 'BCG / DPT / OPV / MMR', definition: 'Core vaccines guarding TB (BCG), Diphtheria-Pertussis-Tetanus (DPT), Polio (OPV), and Measles-Mumps-Rubella (MMR).' },
      { term: 'Splint', definition: 'Rigid padded brace immobilising suspected bone fractures before hospital X-ray.' },
      { term: 'Liver Cirrhosis', definition: 'Irreversible fibrous liver scarring driven by chronic alcohol consumption.' },
      { term: 'Carcinogenic Tar', definition: 'Sticky cancer-causing chemical condensate in burning tobacco smoke damaging oral and lung cells.' }
    ],
    formulaSheet: [
      { title: 'Vector–Pathogen Pairs', expression: 'Female Anopheles → Plasmodium (Malaria) | Aedes → Dengue Virus | Housefly → Vibrio/Salmonella (Cholera/Typhoid)', meaning: 'Distinguishes living carrier (vector) from microscopic causative pathogen.' },
      { title: 'Vaccine Abbreviations', expression: 'BCG = Tuberculosis | OPV = Polio | DPT = Diphtheria, Pertussis, Tetanus | MMR = Measles, Mumps, Rubella', meaning: 'Universal ICSE immunisation summary.' }
    ],
    solvedExamples: [
      {
        id: 'bio7-ex1',
        question: 'Distinguish carefully between the **Pathogen** and the **Vector** of Malaria and Dengue, plus suggest two practical neighbourhood control steps.',
        steps: [
          '1. **Malaria**: Pathogen = Protozoan ***Plasmodium***; Vector = **Female *Anopheles* mosquito**.',
          '2. **Dengue**: Pathogen = **Dengue Virus**; Vector = **Female *Aedes* mosquito**.',
          '3. **Control Steps**: (a) Empty/scrub flowerpot trays, tyres, and desert coolers weekly so aquatic larvae cannot mature; (b) Sleep under mosquito nets and spray biological larvicides (*Gambusia* mosquito-fish in garden ponds!).'
        ],
        finalAnswer: 'Malaria (Plasmodium / Anopheles); Dengue (Virus / Aedes); eliminate standing water & use nets/Gambusia fish.',
        keyRule: 'Mosquitoes are VECTORS carrying microscopic PATHOGENS—never confuse the carrier with the germ!'
      },
      {
        id: 'bio7-ex2',
        question: 'A child gets bitten on the ankle by an unvaccinated stray dog. List the exact **First Aid & medical protocol** parents must execute immediately.',
        steps: [
          '1. Immediately hold the bite under **clean running tap water and wash vigorously with soap for at least 15 minutes** to scrub away Rabies-carrying saliva.',
          '2. Gently dab mild antiseptic (povidone-iodine) and keep open/lightly dressed—avoid tight stitching or chilly/turmeric paste!',
          '3. Rush straight to a clinic/hospital the same day to start the complete **Anti-Rabies Vaccine (ARV)** schedule!'
        ],
        finalAnswer: '15-minute vigorous soap-and-running-water wash → mild antiseptic → immediate medical Anti-Rabies Vaccination.',
        keyRule: 'Rabies is 100% preventable immediately with soap wash + ARV—yet virtually fatal once brain symptoms appear!'
      },
      {
        id: 'bio7-ex3',
        question: 'Contrast **Active Immunity** given by a Measles vaccine vs **Passive Immunity** given by Anti-Snake Venom serum.',
        steps: [
          '1. **Measles Vaccine (Active)**: Harmless weakened virus trains the child\'s **own WBCs** to manufacture antibodies and lifelong **Memory B-cells** over ~2 weeks.',
          '2. **Anti-Snake Venom (Passive)**: Venom acts far too fast to wait 2 weeks—so doctors inject ready-made horse antibodies immediately neutralising toxin within minutes (lasting just a few weeks without lifelong memory).'
        ],
        finalAnswer: 'Vaccine stimulates slow lifelong self-made antibodies + memory; Anti-venom gives instant temporary external antibodies.',
        keyRule: 'Use Passive Immunity for sudden acute poison/toxins (snake venom, tetanus); use Active Vaccines for lifelong future prevention!'
      },
      {
        id: 'bio7-ex4',
        question: 'In a chemistry kitchen accident, boiling water splashes across a student\'s forearm. State TWO steps you MUST do immediately and TWO dangerous home myths you MUST avoid.',
        steps: [
          '1. **DO Immediately**: Hold the burned forearm gently under **cool (not icy) running tap water for 10–15 minutes**; remove loose watches/bangles early and cover lightly with clean sterile non-fluffy cloth.',
          '2. **DO NOT**: Never rub toothpaste, butter, ghee, or ink onto burns (locks heat inside & infects wound); never prick intact protective blisters!'
        ],
        finalAnswer: 'Cool running water 10–15 min + loose sterile dressing; NEVER apply toothpaste/butter or burst blisters.',
        keyRule: 'Heat persists inside burned skin—cool running water draws thermal energy out cleanly.'
      },
      {
        id: 'bio7-ex5',
        question: 'Why does a booster vaccine dose produce a vastly taller, faster **antibody spike** than the very first childhood vaccine shot?',
        steps: [
          '1. The **first dose (Primary Response)** slowly activates naive B-lymphocytes taking 7–14 days to build modest antibodies—while crucially leaving behind vigilant **Memory B-cells**.',
          '2. When a **Booster dose** (or real germ!) returns, these primed Memory B-cells recognise the antigen immediately and multiply within **24–48 hours**, flooding blood with massive high-affinity antibodies (**Secondary Surge**).'
        ],
        finalAnswer: 'Primed Memory B-cells from the primary shot launch an immediate, high-amplitude Secondary Antibody Surge.',
        keyRule: 'Memory B-cells are the exact cellular explanation for vaccination longevity and booster power!'
      },
      {
        id: 'bio7-ex6',
        question: 'During a science lab repair, a technician grips an exposed frayed wire and freezes from electric shock. Describe step-by-step safe **First Aid**.',
        steps: [
          '1. **NEVER touch the victim directly** with bare hands or wet towels while current flows—you will get electrocuted too!',
          '2. Instantly flip OFF the room **MCB / main power switch**.',
          '3. If switch is out of reach, stand on a **dry rubber mat/wooden plank** and knock the wire away using a **dry wooden broom handle**.',
          '4. Lay the unconscious victim flat, check breathing/pulse, perform CPR/rescue breaths if trained, and summon ambulance!'
        ],
        finalAnswer: 'Disconnect mains power or use dry non-conducting wood/rubber before touching victim → check airway/breathing/ambulance.',
        keyRule: 'Break the electrical circuit FIRST using insulators—never sacrifice a second rescuer!'
      },
      {
        id: 'bio7-ex7',
        question: 'Clarify why **HIV / AIDS** does NOT spread through sharing classroom desks, hugging an infected classmate, or mosquito bites.',
        steps: [
          '1. **HIV (Human Immunodeficiency Virus)** is extremely fragile outside living human body fluids (blood, semen, vaginal fluid, breast milk) and dries dead rapidly on air-exposed surfaces, desks, or saliva cups.',
          '2. Inside mosquitoes, HIV cannot replicate and gets digested completely inside mosquito stomachs without reaching salivary glands!',
          '3. True prevention targets **sterile disposable syringes, screened blood transfusions, and safe medical procedures**.'
        ],
        finalAnswer: 'HIV survives only inside specific deep human body fluids (blood/needles/mother-child), dying outside and inside mosquito stomachs.',
        keyRule: 'Knowing true vs false HIV routes fights deadly medical stigma scientifically.'
      },
      {
        id: 'bio7-ex8',
        question: 'A footballer trips violently and cries out clutching a swollen, crooked shinbone. What First Aid steps protect his leg before ambulance arrival?',
        steps: [
          '1. Suspect a closed **fracture**—keep the player completely lying still and reassure him calmly.',
          '2. Gently cushion and **immobilise the leg with a rigid padded splint** (rolled newspaper/wooden board) tied snugly above and below the break without jarring the shin.',
          '3. **NEVER attempt to straighten, massage, or pull the crooked bone** (sharp bone splinters could slice arteries or nerves inside!), and transport gently to hospital!'
        ],
        finalAnswer: 'Immobilise cleanly using a padded splint across adjacent joints without ever attempting to pull or straighten the bone.',
        keyRule: 'Splinting immobilises joints above and below a fracture so jagged bone ends cannot tear blood vessels.'
      }
    ],
    gradedQuestions: {
      easy: [
        { id: 'bio7-e1', marks: 2, question: 'State the WHO definition of Health and give one example each of a Communicable and Non-communicable disease.', solutionSteps: ['**WHO Health**: Complete physical, mental, and social well-being—not merely absence of disease.', '**Communicable**: Tuberculosis / Malaria. **Non-communicable**: Diabetes / Simple Goitre / Scurvy.'], finalAnswer: 'Complete physical, mental & social well-being; TB (comm.) vs Diabetes (non-comm.).' },
        { id: 'bio7-e2', marks: 2, question: 'Write the full disease names protected by **BCG**, **OPV**, **DPT**, and **MMR** vaccines.', solutionSteps: ['**BCG**: Tuberculosis; **OPV**: Polio; **DPT**: Diphtheria, Pertussis (Whooping Cough), Tetanus; **MMR**: Measles, Mumps, Rubella.'], finalAnswer: 'BCG=TB; OPV=Polio; DPT=Diphtheria/Pertussis/Tetanus; MMR=Measles/Mumps/Rubella.' },
        { id: 'bio7-e3', marks: 2, question: 'Name the causative microbe and insect vector of (a) Malaria and (b) Dengue.', solutionSteps: ['(a) **Malaria**: Protozoan *Plasmodium* carried by **Female *Anopheles* mosquito**.', '(b) **Dengue**: Dengue Virus carried by **Female *Aedes* mosquito**.'], finalAnswer: 'Malaria: Plasmodium / Anopheles; Dengue: Virus / Aedes.' },
        { id: 'bio7-e4', marks: 2, question: 'What immediate First Aid is given to a student who faints in warm sunlight?', solutionSteps: ['1. Lay flat in cool shade, loosen tight uniform collars/ties.', '2. Raise legs slightly (~30 cm) to boost blood return to brain; sprinkle cool water lightly after waking.'], finalAnswer: 'Lay flat in shade, loosen collar, elevate legs slightly to aid brain blood flow.' }
      ],
      medium: [
        { id: 'bio7-m1', marks: 3, question: 'Distinguish Active Immunity from Passive Immunity with two examples of each.', solutionSteps: ['1. **Active Immunity**: Person\'s own lymphocytes make antibodies & memory cells—slow onset, **lifelong** (e.g., **BCG vaccine, surviving chickenpox**).', '2. **Passive Immunity**: Ready-made antibodies received externally—**instant**, short-lived (e.g., **Anti-snake venom serum, maternal colostrum**).'], finalAnswer: 'Self-made lifelong immunity (Vaccines) vs borrowed instant temporary antibodies (Antivenom, Colostrum).' },
        { id: 'bio7-m2', marks: 3, question: 'Who discovered the first Vaccine, and explain how vaccines harness Memory B-cells.', solutionSteps: ['1. English doctor **Edward Jenner (1796)** noticed cowpox shielded milkmaids from smallpox.', '2. Vaccines introduce weakened/killed germs stimulating a harmless **primary response** that stores vigilant **Memory B-cells**—ensuring a massive, rapid **secondary antibody surge** if real germs invade!'], finalAnswer: 'Edward Jenner; vaccines train long-lived Memory B-cells for rapid secondary antibody defence.' },
        { id: 'bio7-m3', marks: 3, question: 'List three specific harmful chemicals in cigarette tobacco smoke and one organ disorder caused by each.', solutionSteps: ['1. **Nicotine**: Constricts arteries → raised blood pressure, addiction & heart attack risk.', '2. **Carbon Monoxide (CO)**: Binds haemoglobin as carboxyhaemoglobin → oxygen starvation.', '3. **Coal Tar**: Carcinogen causing **lung, throat & oral cancers** and emphysema.'], finalAnswer: 'Nicotine (hypertension/addiction), CO (O₂ starvation), Tar (lung/mouth cancer).' },
        { id: 'bio7-m4', marks: 3, question: 'Contrast correct First Aid vs common harmful myths for (a) Burns, (b) Snake bite, and (c) Nosebleed.', solutionSteps: ['(a) **Burns**: Cool running water 15 min (NO butter/toothpaste or popping blisters).', '(b) **Snake bite**: Calmly immobilise below heart + hospital anti-venom (NO cutting/sucking venom).', '(c) **Nosebleed**: Sit leaning **slightly FORWARD** pinching soft nostrils 10 min (do NOT tilt head backward swallowing blood!).'], finalAnswer: 'Cool water burns; immobilise snake bites; lean forward pinching nosebleeds.' }
      ],
      difficult: [
        { id: 'bio7-d1', marks: 4, question: 'Why is **Polio** eradicated widely across India using simple oral drops (**OPV**), whereas **Dengue & Malaria** still require neighbourhood drainage drives?', solutionSteps: ['1. **Poliovirus** spreads solely human-to-human without an animal insect host; mass OPV drops built herd immunity everywhere blocking viral survival cleanly.', '2. **Malaria & Dengue** multiply inside wild **mosquito vectors** (*Anopheles, Aedes*) breeding outdoors in stagnant pools; breaking transmission demands both clean vector drainage/nets AND personal protection!'], finalAnswer: 'Polio lacks animal vectors and succumbed to herd vaccination; Malaria/Dengue cycle through outdoor breeding mosquitoes requiring vector control.' },
        { id: 'bio7-d2', marks: 4, question: 'Suppose a doctor prescribes an **Antibiotic (Amoxicillin)** for Streptococcal bacterial throat tonsillitis, yet strictly refuses antibiotics for seasonal viral Influenza. Justify scientifically.', solutionSteps: ['1. Antibiotics selectively target **bacterial structures** like rigid bacterial peptidoglycan **cell walls** and prokaryotic 70S ribosomes.', '2. **Viruses** lack cell walls, cytoplasm, and independent metabolism—living hidden inside host human cells!', '3. Hence antibiotics cannot harm Influenza viruses at all, while misusing antibiotics breeds dangerous **antibiotic-resistant superbugs**!'], finalAnswer: 'Antibiotics target bacterial walls/machinery absent in viruses; misuse breeds resistant bacteria.' },
        { id: 'bio7-d3', marks: 4, question: 'Explain the **"5-F" faecal–oral transmission routes** for Cholera & Typhoid and describe how simple household sanitation breaks every single link.', solutionSteps: ['1. **5 Fs**: **Fingers** (unwashed hands), **Flies** (landing from open waste onto uncovered sweets), **Fluids** (sewage-contaminated tap/well water), **Fields** (raw vegetables irrigated with sewage), and **Food**.', '2. **Sanitation Fix**: Soap handwashing after toilets, lidded bins/screened food, boiling/chlorinating water, closed sanitary latrines, and washing raw fruit thoroughly!'], finalAnswer: 'Breaks Fingers–Flies–Fluids–Fields–Food cycle via soap handwashing, safe toilets, covered food, and boiled water.' },
        { id: 'bio7-d4', marks: 4, question: 'Compare **Liver Cirrhosis** from alcohol abuse vs **Oral Submucous Fibrosis / Lung Cancer** from chewing/smoking tobacco.', solutionSteps: ['1. **Alcohol** is detoxified in liver hepatocytes; chronic drinking destroys hepatocytes replacing them with useless scar tissue (**Liver Cirrhosis**), causing jaundice and fatal liver failure.', '2. **Tobacco** delivers **carcinogenic nitrosamines and tar** directly onto oral cheeks (*gutkha*) or bronchial lungs (*cigarettes*), triggering DNA mutations into lethal **oral or lung cancers** and rigid mouth scarring!'], finalAnswer: 'Alcohol scars liver into Cirrhosis; tobacco carcinogens mutate oral/lung DNA into cancer and emphysema.' }
      ]
    },
    practiceWorksheet: {
      title: 'ICSE Class 8 Biology Worksheet — Health, Diseases & First Aid (30 Marks)',
      instructions: 'Match pathogens/vectors accurately and follow modern evidence-based First Aid.',
      sections: [
        {
          sectionTitle: 'Section A: Pathogen, Vector & Vaccine Drill (1 × 8 = 8 Marks)',
          items: [
            '1. Causative protozoan parasite of Malaria: ______ (carried by ______ mosquito).',
            '2. Daytime-biting mosquito vector spreading Dengue and Chikungunya: ______.',
            '3. Name the scientist who pioneered the first vaccine (against smallpox, 1796): ______.',
            '4. Expand BCG (prevents ______) and DPT (prevents ______, ______, ______).',
            '5. Does Anti-Snake Venom confer Active or Passive Immunity? ______.',
            '6. Chronic heavy alcohol drinking causes irreversible scarring of liver called ______.',
            '7. True or False: Antibiotics like Penicillin cure common viral colds quickly.',
            '8. Minimum cool running water time recommended immediately for minor skin burns: ______ minutes.'
          ]
        },
        {
          sectionTitle: 'Section B: Biological & First Aid Logic (3 × 4 = 12 Marks)',
          items: [
            '9. Compare Communicable and Non-communicable diseases with 2 verified examples each.',
            '10. Why does a booster vaccine shot spike antibodies dramatically higher than the initial dose?',
            '11. List exact First Aid steps for (a) Stray dog bite and (b) Suspected forearm bone fracture.',
            '12. Why must you NEVER lean a nosebleed victim\'s head far backward or touch an electrocuted person bare-handed?'
          ]
        },
        {
          sectionTitle: 'Section C: Public Health & Case Applications (5 × 2 = 10 Marks)',
          items: [
            '13. Compare Active vs Passive Immunity across antibody origin, speed, duration, and 2 examples.',
            '14. Describe the 5-F disease chain for Cholera/Typhoid and outline 4 civic/personal hygiene barriers stopping outbreaks.'
          ]
        }
      ],
      answerKey: [
        '1. Plasmodium; Female Anopheles',
        '2. Female Aedes mosquito',
        '3. Edward Jenner',
        '4. BCG = Tuberculosis; DPT = Diphtheria, Pertussis, Tetanus',
        '5. Passive Immunity',
        '6. Liver Cirrhosis',
        '7. False (antibiotics kill bacteria only, not viruses)',
        '8. 10–15 minutes',
        '9. Communicable = pathogen-spread (TB, Cholera); Non-comm. = non-infectious (Diabetes, Goitre)',
        '10. Primed Memory B-cells respond instantly launching a rapid secondary antibody surge',
        '11. Dog bite: 15 min soap+water wash → antiseptic → ARV; Fracture: keep still + padded splint across joints (do not straighten)',
        '12. Tilting back drains blood down throat/stomach; bare-hand touch shocks rescuer too (cut mains/use dry wood)',
        '13. Active = self-made WBC antibodies, slow, lifelong (BCG, OPV); Passive = external antibodies, instant, short-lived (Antivenom, ATS)',
        '14. Fingers, Flies, Fluids, Fields, Food; soap washing, clean water boiling/RO, covered food/bins, sanitary latrines'
      ]
    },
    examPreparationTips: [
      'Never mix up mosquito vectors: **Anopheles = Malaria**; **Aedes = Dengue/Chikungunya**; **Housefly = Cholera/Typhoid**.',
      'Master **Vaccines + Diseases**: **BCG → TB**; **DPT → Diphtheria, Pertussis, Tetanus**; **OPV → Polio**; **MMR → Measles, Mumps, Rubella**.',
      'In First Aid questions, always pair what **TO DO** AND what **NOT TO DO** (e.g., cool water vs butter on burns; calm splint vs cutting snake bite)!'
    ],
    chapterSummary: [
      '**Health (WHO)** means complete physical, mental, and social well-being; diseases divide into **Communicable** (pathogen-driven) and **Non-communicable** (deficiency/lifestyle/genetic).',
      'Key pathogen–vector pairs: *Plasmodium* / **Female *Anopheles*** (Malaria), Virus / ***Aedes*** (Dengue), Bacteria / **Housefly & dirty water** (Cholera, Typhoid), Airborne droplets (TB, Flu).',
      '**Vaccination (Edward Jenner)** builds lifelong **Active Immunity** via **Memory B-cells** (**BCG, DPT, OPV, MMR**), whereas **Passive Immunity** gives instant temporary external antibodies (anti-venom, ATS, colostrum).',
      'Sound **First Aid** saves lives: 15-min cool running water on burns, 15-min soap wash + ARV for dog bites, padded splints for fractures, dry wood/power cut for electrocution, and calm hospital rush for snake bites.',
      'Avoiding **tobacco (nicotine/CO/tar), alcohol (cirrhosis), and narcotic drugs**, paired with **5-F hand/water hygiene**, protects lifelong organ health.'
    ],
    importantQuestionsAndAnswers: [
      { type: 'Short Answer', question: 'Distinguish between a Pathogen and a Vector using Cholera and Malaria as examples.', answer: 'A **Pathogen** is the disease-causing germ itself (*Plasmodium* for Malaria; *Vibrio cholerae* for Cholera), whereas a **Vector** is the carrier transmitting that germ from host to host (**Female *Anopheles*** for Malaria; **Housefly** for Cholera).' },
      { type: 'Short Answer', question: 'Why is Mother\'s first thick milk (**Colostrum**) vital for a newborn baby\'s first months?', answer: 'Colostrum is packed with ready-made maternal antibodies giving the newborn immediate **Passive Immunity** while its own infant immune system matures safely.' },
      { type: 'Short Answer', question: 'Give two reasons why biting flies and uncovered street chaat trigger summer Typhoid/Cholera spikes.', answer: 'Houseflies land on dirty sewage/garbage picking up *Salmonella* / *Vibrio* on sticky hairy legs and deposit germs directly onto uncovered street food; humid warm weather multiplies bacteria swiftly unless food stays sealed and hands washed!' },
      { type: 'Reasoning', question: 'Why should an athlete NOT wrap an icy-cold block directly onto a deep thermal burn, and instead use cool running tap water?', answer: 'Direct freezing ice causes secondary **frostbite tissue damage** starving burned capillaries of blood—whereas **cool running tap water (~15–20°C)** safely draws deep residual heat out for 10–15 minutes!' },
      { type: 'Short Answer', question: 'How does carbon monoxide and tar in smoking harm both active smokers and nearby non-smokers (*Passive Smoking*)?', answer: 'Side-stream cigarette smoke releases poisonous **CO** (forming carboxyhaemoglobin starving tissues of O₂) and **carcinogenic tar** right into shared room air—forcing nearby family/children to inhale toxic carcinogens involuntarily!' },
      { type: 'Long Answer', question: 'Explain the principle of Vaccination, contrasting Primary and Secondary Immune Responses with reference to Edward Jenner and three ICSE childhood vaccines.', answer: '**Edward Jenner (1796)** proved harmless cowpox protected milkmaids against fatal smallpox—inventing **Vaccination**. A vaccine injects harmless killed, attenuated, or surface-protein antigens causing a gentle **Primary Response** where lymphocytes learn the shape of the enemy and build modest antibodies over 1–2 weeks while saving long-lived **Memory B-cells**. When real germs invade later, Memory B-cells unleash a massive, instantaneous **Secondary Antibody Surge**, neutralising infection before illness strikes! Core childhood vaccines: **BCG** (Tuberculosis), **DPT** (Diphtheria, Pertussis, Tetanus), and **OPV** (Polio).' },
      { type: 'Long Answer', question: 'Provide correct evidence-based First Aid steps for FOUR common emergencies: (a) Forearm thermal burn, (b) Bleeding wrist cut, (c) Broken collar/arm bone, (d) Venomous snake bite.', answer: '(a) **Burn**: Hold under cool running tap water 10–15 min; cover gently with clean sterile gauze; never apply toothpaste/butter or burst blisters.\n(b) **Bleeding cut**: Rinse clean gently, apply firm direct sterile pressure while elevating limb above heart level, wrap snugly.\n(c) **Fracture**: Keep still, support arm in triangular sling/padded rigid splint immobilising joints above and below break; never straighten bone.\n(d) **Snake bite**: Calm victim, immobilise bitten limb slightly below heart level, remove tight rings/shoes early, rush immediately for hospital anti-snake venom—never cut or suck venom!' },
      { type: 'HOTS', question: 'A child vaccinated thoroughly against Polio (OPV) and Measles (MMR) later drinks muddy pond water and still catches Cholera. Did her vaccines fail? Explain immunologically.', answer: 'No—antibodies and **Memory B-cells are strictly antigen-specific** ("lock-and-key")! OPV and MMR memory cells specifically target Polio and Measles/Mumps/Rubella viruses—offering zero protection against bacterial *Vibrio cholerae* toxins swallowed in unboiled water!' }
    ],
    practiceExercises: [
      { question: 'Match disease → pathogen type → mode: TB, Cholera, Malaria, Ringworm, Dengue.', hint: 'Bacteria/Protozoa/Fungi/Virus.', answerGuide: 'TB=Bacterium/Droplets; Cholera=Bacterium/Water-fly; Malaria=Protozoan/Anopheles; Ringworm=Fungus/Contact; Dengue=Virus/Aedes.' },
      { question: 'Classify immunity: (a) Recovering from mumps, (b) Newborn getting maternal antibodies, (c) Anti-tetanus ATS shot, (d) BCG dose.', hint: 'Self-made vs externally borrowed.', answerGuide: '(a) Natural Active, (b) Natural Passive, (c) Artificial Passive, (d) Artificial Active.' },
      { question: 'Why is leaning slightly FORWARD better than tilting backward during a nosebleed?', hint: 'Airway & stomach blood hazard.', answerGuide: 'Tilting back runs blood down throat causing choking/vomiting; leaning forward + pinching soft nostril 10 min clots cleanly.' }
    ]
  },
  quizQuestions: [
    {
      id: 'bio7-q1',
      type: 'mcq',
      question: 'Dengue fever and Chikungunya viruses are transmitted from person to person by which mosquito vector?',
      options: ['Male Culex mosquito', 'Female Anopheles mosquito', 'Female Aedes mosquito', 'Housefly'],
      correctAnswer: 'Female Aedes mosquito',
      explanation: 'Female Aedes aegypti mosquitoes (often daytime biters breeding in clean stagnant cooler/tyre water) spread Dengue & Chikungunya.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio7-q2',
      type: 'mcq',
      question: 'Who is celebrated as the Father of Vaccination after discovering smallpox immunisation using cowpox in 1796?',
      options: ['Louis Pasteur', 'Alexander Fleming', 'Edward Jenner', 'William Harvey'],
      correctAnswer: 'Edward Jenner',
      explanation: 'English physician Edward Jenner tested cowpox inoculation in 1796, giving lifelong immunity against deadly smallpox.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio7-q3',
      type: 'mcq',
      question: 'The triple antigen vaccine **DPT** immunises children simultaneously against which three bacterial diseases?',
      options: [
        'Dengue, Polio, Typhoid',
        'Diphtheria, Pertussis (Whooping cough), and Tetanus',
        'Diabetes, Pneumonia, Tuberculosis',
        'Dysentery, Plague, Tonsillitis'
      ],
      correctAnswer: 'Diphtheria, Pertussis (Whooping cough), and Tetanus',
      explanation: 'DPT protects against Diphtheria, Pertussis (whooping cough), and Tetanus.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio7-q4',
      type: 'mcq',
      question: 'Receiving a ready-made Anti-Snake Venom injection after a cobra bite is an example of:',
      options: ['Natural Active Immunity', 'Artificial Active Immunity', 'Artificial Passive Immunity', 'Non-communicable allergy'],
      correctAnswer: 'Artificial Passive Immunity',
      explanation: 'Pre-formed anti-venom antibodies provide immediate temporary Artificial Passive Immunity without waiting weeks.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio7-q5',
      type: 'mcq',
      question: 'Which immediate First Aid treatment is medically recommended for a minor scald/thermal burn on the arm?',
      options: [
        'Rub thick butter or toothpaste quickly',
        'Prick any large blisters open with a pin',
        'Hold under cool running tap water for 10–15 minutes',
        'Wrap tight cotton wool directly inside wound'
      ],
      correctAnswer: 'Hold under cool running tap water for 10–15 minutes',
      explanation: 'Cool running water draws deep heat safely out without infection; never apply paste/butter or burst protective blisters.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio7-q6',
      type: 'mcq',
      question: 'If you find an injured classmate still touching a live naked electrical wire, your VERY FIRST step is to:',
      options: [
        'Grab her shoulders firmly with wet hands',
        'Switch OFF mains power or separate wire using dry non-conducting wood/rubber',
        'Pour cold drinking water over the wire',
        'Apply a cloth tourniquet'
      ],
      correctAnswer: 'Switch OFF mains power or separate wire using dry non-conducting wood/rubber',
      explanation: 'Touching an energised person directly electrocutes the rescuer too; break electrical contact with mains/dry wood first.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio7-q7',
      type: 'mcq',
      question: 'Chronic heavy alcohol consumption causes permanent fibrous liver scarring known medically as:',
      options: ['Simple Goitre', 'Liver Cirrhosis', 'Diabetes mellitus', 'Cretinism'],
      correctAnswer: 'Liver Cirrhosis',
      explanation: 'Excess ethanol kills liver cells replacing functional tissue with stiff fibrous scar tissue (Cirrhosis).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio7-q8',
      type: 'mcq',
      question: 'Malaria is caused by the microscopic protozoan _____, carried by the female Anopheles mosquito:',
      options: ['Vibrio cholerae', 'Plasmodium', 'Mycobacterium', 'Rhizobium'],
      correctAnswer: 'Plasmodium',
      explanation: 'Plasmodium protozoan parasite causes malaria; female Anopheles acts only as the biting vector.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio7-q9',
      type: 'fill_blank',
      question: 'The **BCG** vaccine given soon after birth protects infants primarily against _____.',
      correctAnswer: 'tuberculosis',
      explanation: 'BCG (Bacillus Calmette–Guérin) shields children against severe Tuberculosis (TB).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio7-q10',
      type: 'mcq',
      question: 'What is the single most critical immediate First Aid step after any stray dog bite before rushing for Anti-Rabies shots?',
      options: [
        'Tie limb tightly with wire',
        'Wash wound thoroughly with soap and running water for at least 15 minutes',
        'Rub red chilli powder over bite marks',
        'Stitch wound tightly immediately at home'
      ],
      correctAnswer: 'Wash wound thoroughly with soap and running water for at least 15 minutes',
      explanation: 'Soap dissolves the lipid envelope of Rabies virus while 15 min running water mechanically flushes saliva out.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio7-q11',
      type: 'true_false',
      question: 'Antibiotics like Amoxicillin or Penicillin are highly effective at killing seasonal Influenza and Dengue viruses.',
      correctAnswer: false,
      explanation: 'Antibiotics kill bacteria only—they have zero effect against viruses like Influenza, Dengue, Polio, or HIV.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio7-q12',
      type: 'hots',
      question: 'When a vaccinated student later encounters the real pathogen, antibodies soar 100× higher within 48 hours instead of taking 2 weeks. Which cells enable this dramatic Secondary Surge?',
      options: ['Enucleated Red Blood Cells', 'Memory B-cells trained during vaccination', 'Thrombocyte platelets', 'Kidney nephrons'],
      correctAnswer: 'Memory B-cells trained during vaccination',
      explanation: 'Long-lived Memory B-cells rapidly proliferate into antibody factories upon second antigen encounter.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    { id: 'fc-b7-1', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'State the WHO definition of Health.', back: 'A state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b7-2', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'Distinguish Pathogen vs Vector in Malaria & Dengue.', back: 'Malaria: Pathogen=Plasmodium, Vector=Female Anopheles. Dengue: Pathogen=Virus, Vector=Female Aedes.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b7-3', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'Active Immunity vs Passive Immunity?', back: 'Active = body makes own antibodies + memory cells (Vaccines, slow, lifelong). Passive = ready-made external antibodies (Anti-venom, colostrum, instant, temporary).', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b7-4', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'Vaccines protected by BCG, OPV, DPT, MMR?', back: 'BCG=TB; OPV=Polio; DPT=Diphtheria, Pertussis, Tetanus; MMR=Measles, Mumps, Rubella.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b7-5', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'How do Vaccines trigger rapid future protection?', back: 'Primary dose trains long-lived Memory B-cells, which trigger a massive fast Secondary Antibody Surge on re-exposure.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b7-6', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'Correct First Aid for a skin burn (and 2 myths to avoid)?', back: 'Hold under cool running water 10–15 min + loose sterile cloth. NEVER smear butter/toothpaste or pop blisters!', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b7-7', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'Immediate First Aid for a stray Dog Bite?', back: 'Wash vigorously with soap and running water for 15 minutes → mild antiseptic → immediate hospital Anti-Rabies Vaccine.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b7-8', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'First Aid for Snake Bite & Fractures?', back: 'Snake: keep calm, immobilise limb below heart, hospital anti-venom (no cutting/sucking!). Fracture: padded splint without straightening bone.', category: 'Scientific Law', importance: 'Standard' },
    { id: 'fc-b7-9', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'First Aid for Electrocution?', back: 'Never touch victim bare-handed; cut mains power or separate wire with dry non-conducting wood/rubber first.', category: 'Scientific Law', importance: 'Standard' },
    { id: 'fc-b7-10', subjectId: 'biology', chapterId: 'bio-health', chapterTitle: 'Health and Hygiene (Diseases and First Aid)', front: 'Three toxic hazards in Tobacco smoke & Alcohol organ damage?', back: 'Tobacco: Nicotine (BP/addiction), CO (blocks O₂), Tar (Cancer). Alcohol: Cerebellum crashes & Liver Cirrhosis.', category: 'Definition', importance: 'Standard' }
  ]
};
