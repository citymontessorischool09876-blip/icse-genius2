import { Chapter } from '../../types';

export const BIO_CH4_ENDOCRINE: Chapter = {
  id: 'bio-endocrine',
  subjectId: 'biology',
  chapterNumber: 4,
  title: 'Human Body: Endocrine System and Adolescence',
  subtitle: 'Exocrine vs ductless endocrine glands, Pituitary master gland, Thyroid, Pancreas (Insulin/Glucagon), Adrenal emergency hormone, Gonads, hormone hypo-/hypersecretion disorders, adolescence & puberty changes, hygiene, and stress management',
  term: 'Annual',
  estimatedMinutes: 95,
  notes: {
    introduction: `Think about two lightning-fast emergencies in everyday student life: hearing a sudden loud clap right behind your ear makes your heart pound furiously within two seconds, while over the course of four years between Class 6 and Class 10 your height shoots upward by 25 centimetres, your voice deepens or matures, and adult bones remodel silently! While high-speed electrical nerve impulses handle instant reflexes, slow-acting, long-lasting chemical messengers called **Hormones** orchestrate our growth, metabolism, blood sugar, stress responses, and **Adolescence**.

In Chapter 4 of Class 8 ICSE Biology (*Concise Biology / Gem's Biology*), we tour the **Human Endocrine System**—comparing **ducted exocrine glands** with **ductless endocrine glands**, mapping every key hormone from the **Pituitary ("Master Gland"), Thyroid, Pancreas (Islets of Langerhans), Adrenals, and Gonads**, diagnosing clinical disorders (*Gigantism, Dwarfism, Simple Goitre, Cretinism, Diabetes mellitus*), and guiding you scientifically through the **physical, emotional, and hygiene transitions of Adolescence**.`,
    learningObjectives: [
      'Differentiate cleanly between Exocrine glands (with ducts) and Endocrine glands (ductless, hormone-secreting into blood).',
      'Define Hormones and explain target-organ specificity and negative-feedback control.',
      'Locate all five major human endocrine glands on a body outline and state each hormone\'s physiological function: Pituitary, Thyroid, Adrenal, Pancreas, Testes/Ovaries.',
      'Identify hallmark hyposecretion and hypersecretion disorders: Dwarfism, Gigantism, Simple Goitre, Cretinism, Myxoedema, and Diabetes mellitus.',
      'Define Adolescence & Puberty (WHO age 10–19), detailing primary vs secondary sexual characteristics, voice box enlargement (Adam\'s apple), and the 28-day menstrual cycle.',
      'Recognise healthy personal hygiene, balanced nutrition (iron/calcium), stress-coping strategies, and lifelong hazards of tobacco, alcohol, and addictive drugs.'
    ],
    topics: [
      {
        id: 'bio-ch4-t1',
        title: '1. Exocrine vs Endocrine Glands & Properties of Hormones',
        content: `Glands are specialised epithelial organs manufacturing useful body secretions. Depending on how those secretions leave the gland, human glands fall cleanly into **Exocrine**, **Endocrine**, and **Heterocrine (Dual)** categories.`,
        subtopics: [
          {
            subheading: '1.1 Ducted Exocrine vs Ductless Endocrine Glands',
            body: `- **Exocrine Glands (Have Ducts)**: Pour enzymes or fluids directly onto a local target surface through tubes (**ducts**)—such as **salivary glands** (saliva into mouth), **sweat & sebaceous glands** (onto skin), **tear glands**, and gastric glands.
- **Endocrine Glands (Ductless Glands)**: Lack tubes altogether! They release tiny quantities of potent chemical messengers called **Hormones** directly into surrounding blood capillaries, travelling body-wide to activate specific **target organs**.
- **Heterocrine (Mixed) Gland — The Pancreas**: Both **exocrine** (pours digestive pancreatic juice down the pancreatic duct into duodenum) AND **endocrine** (**Islets of Langerhans** pour **Insulin & Glucagon** straight into blood)!`,
            keyPoint: 'Pancreas is a classic ICSE Dual (Heterocrine) gland: Exocrine acini make digestive enzymes; Endocrine Islets of Langerhans make Insulin & Glucagon!'
          },
          {
            subheading: '1.2 Four Signature Characteristics of Hormones',
            body: `1. Secreted directly into bloodstream by ductless glands in **trace nanomolar amounts**.
2. Travel throughout the entire body yet act **strictly on specific target organs/cells** carrying matching receptors (chemical keys for specific cellular locks).
3. Chemically may be proteins/peptides (**Insulin, Growth Hormone**), amino acid derivatives (**Thyroxine, Adrenaline**), or lipids/steroids (**Testosterone, Oestrogen**).
4. Destroyed/excreted after acting—never stored permanently as enzymes—so balanced secretion via **Negative Feedback** keeps blood chemistry steady!`,
            keyPoint: 'Hormones act slower than nerve impulses, spread everywhere via blood, and trigger long-lasting metabolic or growth effects!'
          }
        ],
        definitions: [
          { term: 'Hormone', definition: 'Trace chemical messenger secreted directly into the bloodstream by a ductless endocrine gland to regulate specific distant target organs.' },
          { term: 'Endocrine Gland', definition: 'Ductless gland releasing hormones directly into blood capillaries rather than via tubes.' },
          { term: 'Heterocrine Gland', definition: 'Mixed gland performing both exocrine (ducted) and endocrine (ductless) functions—e.g., Pancreas and Gonads.' }
        ],
        comparisonTable: {
          caption: 'Comparison: Exocrine Glands vs Endocrine Glands (and Nervous vs Hormonal Control)',
          headers: ['Criterion', 'Exocrine Glands', 'Endocrine Glands'],
          rows: [
            ['Presence of Ducts', '**Present** (carry secretion locally)', '**Absent (Ductless)**'],
            ['Secretion Type', 'Enzymes, sweat, mucus, saliva, tears', '**Hormones**'],
            ['Transport Route', 'Via specific duct onto epithelial/gut surface', 'Directly into **bloodstream**'],
            ['Site of Action', 'Local (near the gland)', 'Often distant **target organs** across whole body'],
            ['Examples', 'Salivary, Sweat, Sebaceous, Tear, Gastric glands', 'Pituitary, Thyroid, Adrenal, Islets of Pancreas']
          ]
        },
        realLifeExample: 'When doctors check blood sugar after fasting or prescribe **thyroxine tablets** for low thyroid levels, they are measuring or replacing hormone imbalances circulating silently inside venous blood!',
        commonMistakes: [
          {
            mistake: 'Calling the entire Pancreas purely endocrine or confusing hormones with digestive enzymes.',
            correction: 'Enzymes catalytically speed digestion inside ducts/gut without getting consumed quickly; **Hormones** act as blood-borne signals and are broken down cleanly after signalling!'
          }
        ]
      },
      {
        id: 'bio-ch4-t2',
        title: '2. Major Human Endocrine Glands, Hormones & Disorders',
        content: `Every major gland in the human endocrine orchestra sits precisely along the brain, neck, abdomen, and pelvis—each controlling vital functions and producing dramatic clinical signs when under-active (**Hyposecretion**) or over-active (**Hypersecretion**).`,
        subtopics: [
          {
            subheading: '2.1 Pituitary ("Master Gland") & Thyroid Gland',
            body: `1. **Pituitary Gland** (pea-sized gland hanging directly beneath the brain's **hypothalamus**): Nicknamed the **"Master Gland"** because its tropic hormones (**TSH, ACTH, FSH, LH**) command almost every other endocrine gland!
   - **Growth Hormone (GH / Somatotropin)**: Drives long-bone and muscle growth in childhood.
     - *Hyposecretion in childhood* → **Pituitary Dwarfism** (proportionate short stature with normal intellect).
     - *Hypersecretion in childhood* → **Gigantism** (extraordinary >2.1 m tall growth); *in adults* → **Acromegaly** (thickened jaw, hands, feet).
   - **Antidiuretic Hormone (ADH)**: Helps kidney tubules reabsorb water; lack causes excessive dilute urine (*Diabetes insipidus*—NOT sugar diabetes!).
2. **Thyroid Gland** (butterfly-shaped two-lobed gland hugging the **trachea / windpipe** in the neck):
   - Secretes iodine-rich **Thyroxine**, setting the body's **Basal Metabolic Rate (BMR)**, physical growth, and brain development.
   - **Simple Goitre**: Caused by **dietary Iodine deficiency**—starved thyroid swells into a huge bulging neck lump trying desperately to trap scarce iodine! *(Solved nationwide via **iodised table salt**!)*
   - **Cretinism** (*childhood hypothyroidism*): Stunted physical & mental retardation; **Myxoedema** (*adult hypothyroidism*): Puffy skin, sluggishness, weight gain.`,
            keyPoint: 'Simple Goitre = swollen neck due to IODINE deficiency; Dwarfism/Gigantism = childhood GH imbalance; Diabetes mellitus = Insulin deficiency!'
          },
          {
            subheading: '2.2 Pancreas (Islets of Langerhans), Adrenals & Gonads',
            body: `3. **Pancreas — Islets of Langerhans**:
   - **Insulin** (*Beta cells*): **Lowers** elevated blood glucose after meals by telling liver and muscle cells to soak up glucose and pack it away as stored **glycogen**!
     - *Hyposecretion of Insulin* → **Diabetes mellitus** (hyperglycaemia—excess glucose spills into sweet urine, causing thirst, frequent urination, fatigue).
   - **Glucagon** (*Alpha cells*): **Raises** low blood glucose during fasting by converting liver glycogen back into free glucose!
4. **Adrenal Glands** (paired triangular caps sitting atop both **kidneys**):
   - Secrete **Adrenaline (Epinephrine)**—the famous **"Fight, Fright, or Flight" Emergency Hormone**! Facing sudden danger, trauma, or stage fright, adrenaline surges within seconds: **accelerates heartbeat & breathing, dilates pupils, shifts blood from digestion to skeletal muscles, and boosts blood sugar** for peak speed or strength!
5. **Gonads (Testes & Ovaries)**:
   - **Testes** secrete **Testosterone**: Triggers male puberty muscle bulk, facial/body hair, deep voice, and sperm maturation.
   - **Ovaries** secrete **Oestrogen & Progesterone**: Trigger female puberty breast growth, pelvic widening, egg maturation, and thickening of the uterine lining for pregnancy.`,
            keyPoint: 'Insulin LOWERS blood sugar (Glucose → Liver Glycogen); Glucagon RAISES blood sugar (Glycogen → Glucose) — exact antagonistic partners!'
          }
        ],
        definitions: [
          { term: 'Master Gland (Pituitary)', definition: 'Pea-sized gland at the base of the brain whose tropic hormones regulate Thyroid, Adrenals, and Gonads alongside secreting Growth Hormone.' },
          { term: 'Thyroxine', definition: 'Iodine-containing hormone from the thyroid gland governing Basal Metabolic Rate (BMR), tissue growth, and warmth.' },
          { term: 'Insulin', definition: 'Hormone from pancreatic beta cells that lowers high blood sugar by stimulating cellular glucose uptake and glycogen storage.' },
          { term: 'Adrenaline', definition: 'Emergency "Fight-or-Flight" hormone from adrenal glands preparing heartbeat, lungs, and muscles for sudden crisis.' }
        ],
        diagram: {
          id: 'diag-bio-endocrine-glands',
          title: 'Major Ductless Human Endocrine Glands & Hormones',
          caption: 'Anatomical locations of Pituitary (brain base), Thyroid (neck), Adrenals (above kidneys), Pancreas (Islets of Langerhans), and Gonads.',
          svgFigure: 'bio_endocrine_glands'
        },
        comparisonTable: {
          caption: 'Master Reference Chart: ICSE Endocrine Glands, Hormones & Disorders',
          headers: ['Gland & Site', 'Key Hormone(s)', 'Primary Function', 'Disorder (Hypo / Hyper)'],
          rows: [
            ['**Pituitary** (Base of brain)', 'GH, TSH, ADH, FSH/LH', 'Growth + controls other endocrine glands', 'Hypo (child): **Dwarfism**; Hyper (child): **Gigantism**'],
            ['**Thyroid** (Neck on trachea)', '**Thyroxine** (needs Iodine)', 'Controls Basal Metabolic Rate (BMR)', 'Iodine lack: **Simple Goitre**; Child hypo: **Cretinism**'],
            ['**Pancreas** (Islets behind stomach)', '**Insulin** & **Glucagon**', 'Maintains blood glucose balance', 'Insulin lack: **Diabetes mellitus** (sugar in urine)'],
            ['**Adrenals** (Top of kidneys)', '**Adrenaline**', 'Emergency Fight-or-Flight readiness', 'Stress response (rapid pulse, dilated pupils)'],
            ['**Testes / Ovaries** (Pelvis)', 'Testosterone / Oestrogen', 'Secondary sex traits & gamete ripening', 'Delayed or early puberty development']
          ]
        },
        realLifeExample: 'Walking alone down a dark street when a stray dog suddenly lunges barking—within two seconds your palms turn sweaty, legs sprint wildly, and heart pounds in your chest. That instant physical super-boost is **Adrenaline** from your adrenal glands!',
        commonMistakes: [
          {
            mistake: 'Confusing **Simple Goitre** (iodine deficiency) with **Diabetes** or confusing **Insulin** (lowers sugar) with **Glucagon** (raises sugar).',
            correction: 'Iodine builds **Thyroxine** (missing I₂ → **Goitre**); **Insulin** pushes excess blood sugar *into* liver glycogen (**Diabetes** occurs when Insulin is missing!).'
          }
        ]
      },
      {
        id: 'bio-ch4-t3',
        title: '3. Adolescence & Puberty: Physical & Physiological Changes',
        content: `Between childhood and adulthood stretches a dynamic transformational bridge called **Adolescence**—defined by the **World Health Organization (WHO)** as ages **10 to 19 years**. Driven by pituitary gonadotropins awakening the testes and ovaries, the body achieves reproductive maturity through **Puberty** (typically starting ~11–12 in girls and ~12–14 in boys).`,
        subtopics: [
          {
            subheading: '3.1 Rapid Growth Spurt, Voice Box & Secondary Sexual Characters',
            body: `1. **Sudden Height & Bone Spurt**: Growth Hormone + sex steroids elongate arm and leg long bones rapidly (girls often shoot up slightly earlier around age 11–13; boys surge strongly around 13–15 until ~18–19).
2. **Voice Change (Larynx / Adam's Apple)**: In adolescent boys, testosterone enlarges the **larynx (voice box)** visibly at the throat front as the protruding **Adam's apple**—deepening the voice permanently after a brief awkward "voice cracking" phase! Girls' larynx grows modestly, preserving higher pitch.
3. **Sweat & Sebaceous Glands**: Surge in oil-producing **sebaceous glands** often triggers teenage **pimples / acne** unless kept clean!
4. **Secondary Sexual Characteristics** (non-gamete visible traits distinguishing mature males & females):
   - *Boys*: Beard/moustache facial hair, chest/underarm/pubic hair, broader shoulders, heavier skeletal muscle.
   - *Girls*: Broadening hip/pelvic girdle, breast development (mammary glands), underarm/pubic hair, rounding contours.`,
            keyPoint: 'Adam\'s apple in teen boys is simply the enlarged cartilage larynx (voice box) stimulated by rising Testosterone!'
          },
          {
            subheading: '3.2 Reproductive Phase in Females: The 28-Day Menstrual Cycle',
            body: `- **Menarche**: The very **first menstruation (period)** marking onset of female reproductive capability around age **10–13 years**.
- **28-Day Menstrual Cycle**: Roughly once every ~28 days, one ovary matures and releases one ovum (**ovulation**, around Day 14), while the **uterus** builds a plush blood-rich inner cushion to welcome a fertilised embryo.
- **Menstruation**: If fertilisation does **NOT** occur, the temporary thick uterine lining breaks down gently and exits through the vagina along with mild bleeding for ~**3 to 5 days**—a completely **normal, healthy biological cycle**, never an illness or impurity!
- **Menopause**: Natural permanent cessation of ovulation and menstruation around age **45–50 years**.`,
            keyPoint: 'Menarche = first menstrual period at puberty (~11–13 yrs); Menopause = natural end of menstruation (~45–50 yrs).'
          }
        ],
        definitions: [
          { term: 'Adolescence', definition: 'Transitional stage of physical, psychological, and reproductive maturation spanning roughly ages 10 to 19 years.' },
          { term: 'Puberty', definition: 'Biological onset of reproductive maturity accompanied by gamete production and secondary sexual traits.' },
          { term: 'Adam\'s Apple', definition: 'Prominent external bulge of the enlarged male voice box (larynx) at the front of the neck during male puberty.' },
          { term: 'Menarche & Menopause', definition: 'Menarche is the first menstruation at puberty onset; Menopause is its natural cessation around ages 45–50.' }
        ],
        realLifeExample: 'Teenagers notice their school shoes suddenly shrinking within six months—long foot and leg bones actually lengthen first before torso width catches up!',
        commonMistakes: [
          {
            mistake: 'Thinking painful teenage acne or uneven height spurts are unnatural or permanent.',
            correction: 'Both reflect temporary hormonal surges during puberty—gentle face-washing without squeezing pimples and balanced sleep/nutrition settle them smoothly!'
          }
        ]
      },
      {
        id: 'bio-ch4-t4',
        title: '4. Adolescent Health: Nutrition, Hygiene, Stress & Saying NO to Drugs',
        content: `Rapid teenage bone, blood, and brain construction demands extra fuel, disciplined **personal hygiene**, healthy **mental stress outlets**, and firm life choices against addictive substances.`,
        subtopics: [
          {
            subheading: '4.1 Balanced Diet, Personal Hygiene & Menstrual Care',
            body: `- **Balanced Teenage Nutrition**:
  - **Proteins** (milk, pulses/dal, eggs, soya, paneer) build surging muscle and enzymes.
  - **Calcium & Vitamin D** (dairy, ragi, morning sunlight) harden elongating bones and prevent weak osteoporosis later.
  - **Iron** (spinach, jaggery, dates, beans) builds **haemoglobin** for expanding blood volume—vital especially for teenage girls losing monthly iron!
  - Avoid empty fast-food junk (chips/colas) lacking vitamins and minerals!
- **Personal & Menstrual Hygiene**: Daily bathing with soap cleans increased underarm and groin sweat/apocrine secretions preventing bacterial body odour; gentle warm water keeps skin clear; girls should use clean sanitary pads changed regularly every 4–6 hours during menstruation.`,
            keyPoint: 'Teenage diet golden trio: Proteins (growth) + Calcium (bones) + Iron (haemoglobin)!'
          },
          {
            subheading: '4.2 Emotional Changes, Stress Management & Drug/Tobacco Hazards',
            body: `- **Mental & Emotional Growth**: Adolescents crave independence, identity, and peer acceptance while navigating academic and social pressure—occasionally experiencing mood swings. Healthy **Stress Management** practices include **daily outdoor sports/yoga, deep breathing meditation, creative hobbies, 8–9 hours sleep, and talking openly with parents or school counsellors**!
- **Firm "NO" to Tobacco, Alcohol & Narcotic Drugs**: Nicotine in cigarettes/gutkha narrows arteries and causes oral/lung cancer; alcohol damages adolescent liver and brain judgment; opioids/narcotics hijack brain dopamine creating fatal chemical addiction. Saying a confident **"NO"** protects your entire future health!`,
            keyPoint: 'Exercise releases natural endorphins that melt exam stress safely—unlike tobacco or drugs, which trap teenagers in addiction!'
          }
        ],
        definitions: [
          { term: 'Balanced Diet', definition: 'Daily meals containing carbohydrates, fats, proteins, vitamins, minerals, fibre, and water in proportions supporting rapid growth.' },
          { term: 'Stress Management', definition: 'Constructive lifestyle habits—exercise, yoga, mindfulness, time-planning, and supportive communication—that regulate emotional pressure.' },
          { term: 'Drug Addiction', definition: 'Compulsive physical and psychological dependence on toxic psychoactive substances despite severe organ harm.' }
        ],
        realLifeExample: 'Many schools pair morning sports and meditation assemblies right before tough ICSE pre-board exams—because aerobic play lowers stress cortisol while sharpening memory consolidation!',
        commonMistakes: [
          {
            mistake: 'Skipping breakfast or fasting aggressively during exams/puberty to "stay slim".',
            correction: 'Adolescent brains and bones grow fastest between 12 and 17—starving starves brain glucose, weakens bones permanently, and triggers **anaemia**!'
          }
        ]
      }
    ],
    importantTerminology: [
      { term: 'Endocrine System', definition: 'Network of ductless glands releasing chemical hormones directly into the bloodstream.' },
      { term: 'Exocrine Gland', definition: 'Gland discharging secretions locally through tubular ducts (e.g., salivary, sweat, tear glands).' },
      { term: 'Pituitary Gland', definition: 'Pea-sized "Master Gland" beneath the brain coordinating growth and other endocrine glands.' },
      { term: 'Thyroxine & Simple Goitre', definition: 'Metabolic thyroid hormone built with iodine; iodine shortage swells the neck gland into Simple Goitre.' },
      { term: 'Insulin vs Glucagon', definition: 'Pancreatic Islets hormones lowering high blood sugar (Insulin) vs raising low blood sugar (Glucagon).' },
      { term: 'Adrenaline', definition: 'Adrenal emergency hormone triggering accelerated heart rate, breathing, and alert strength.' },
      { term: 'Adolescence & Puberty', definition: 'Ages 10–19 growth phase culminating in reproductive maturity and secondary sexual traits.' },
      { term: 'Adam\'s Apple', definition: 'Visible thyroid cartilage prominence caused by testosterone enlarging the male larynx.' },
      { term: 'Menarche vs Menopause', definition: 'First menstrual bleeding at puberty vs permanent natural cessation around ages 45–50.' },
      { term: 'Diabetes Mellitus', definition: 'Chronic metabolic disorder from insufficient insulin secretion or action, leaving high blood & urine glucose.' }
    ],
    formulaSheet: [
      { title: 'Antagonistic Blood Sugar Control', expression: 'High Glucose → Insulin (Beta cells) → Liver Glycogen | Low Glucose → Glucagon (Alpha cells) → Blood Glucose', meaning: 'Dual hormonal thermostat keeping human fasting blood sugar steady (~70–100 mg/dL).' },
      { title: 'Hormone-Disorder Match', expression: 'GH↓ = Dwarfism | GH↑ = Gigantism | I₂↓ = Simple Goitre | Insulin↓ = Diabetes mellitus', meaning: 'Core ICSE clinical identification summary.' }
    ],
    solvedExamples: [
      {
        id: 'bio4-ex1',
        question: 'Why does the government require **Iodised Table Salt** to be sold across mountain valleys of India? Explain biologically.',
        steps: [
          '1. Heavy Himalayan rains leach natural **iodine salts** out of mountain soil and river water.',
          '2. The neck **Thyroid gland** requires iodine atoms to synthesise **Thyroxine**.',
          '3. Without dietary iodine, low blood thyroxine triggers pituitary TSH to over-stimulate the thyroid, swelling it into a huge **Simple Goitre** (and risking childhood **Cretinism**).',
          '4. Adding tiny traces of Potassium Iodate to everyday salt stops goitre effortlessly across whole populations!'
        ],
        finalAnswer: 'Dietary iodine in iodised salt enables normal Thyroxine synthesis, preventing endemic Simple Goitre and Cretinism.',
        keyRule: 'No Iodine → No Thyroxine → Compensatory Thyroid enlargement = Simple Goitre.'
      },
      {
        id: 'bio4-ex2',
        question: 'When a student finishes a heavy sweet meal of *jalebis*, blood glucose spikes. Trace how the Pancreas restores normal blood sugar within 90 minutes.',
        steps: [
          '1. Blood glucose rises rapidly above normal (~100 mg/dL).',
          '2. Beta cells inside the pancreatic **Islets of Langerhans** sense the spike and pour **Insulin** straight into blood.',
          '3. Insulin signals liver and muscle cells to absorb glucose rapidly and polymerise it into stored **Glycogen**.',
          '4. Blood glucose drops cleanly back to normal baseline!'
        ],
        finalAnswer: 'Pancreas secretes Insulin → stimulates glucose uptake and liver glycogen storage → restores normal blood sugar.',
        keyRule: 'Insulin works ONLY when elevated blood sugar needs pulling down into storage.'
      },
      {
        id: 'bio4-ex3',
        question: 'Why is the **Pancreas** called a **Heterocrine (Dual) Gland**, unlike the Sweat gland or Thyroid gland?',
        steps: [
          '1. Sweat glands have **ducts** (strictly Exocrine); Thyroid has **no ducts** (strictly Endocrine).',
          '2. Pancreas contains BOTH: (a) exocrine lobules discharging **digestive enzymes** via the pancreatic duct into the small intestine, AND (b) endocrine **Islets of Langerhans** secreting **Insulin & Glucagon** straight into blood capillaries!'
        ],
        finalAnswer: 'Pancreas performs both ducted digestive juice secretion (exocrine) and ductless blood hormone release (endocrine).',
        keyRule: 'Heterocrine = Exocrine + Endocrine combined inside one single organ.'
      },
      {
        id: 'bio4-ex4',
        question: 'A 100 m sprint athlete standing on starting blocks feels her heart race, breathing deepen, and mouth go slightly dry seconds before the pistol fires. Explain the hormone behind all three signs.',
        steps: [
          '1. Anticipation triggers sympathetic nerves to stimulate the **Adrenal glands** sitting above her kidneys.',
          '2. Adrenals flood the blood with **Adrenaline ("Emergency Hormone")**.',
          '3. Adrenaline increases heartbeat & breathing rate (more O₂ to leg muscles), mobilises liver glucose for ATP, and temporarily shuts down non-urgent saliva & gut digestion (dry mouth)!'
        ],
        finalAnswer: 'Adrenaline boosts heart/lung oxygen delivery to leg muscles while temporarily pausing digestion.',
        keyRule: 'Fight-or-Flight prioritises heart, lungs, and skeletal muscles over digestion.'
      },
      {
        id: 'bio4-ex5',
        question: 'Why do identical twins aged 14 experience pimples on their foreheads and sudden shoulder/voice changes—even though their childhood skin was totally smooth?',
        steps: [
          '1. At puberty onset, the Pituitary triggers Testes/Ovaries to release surges of sex steroids (**Testosterone / Oestrogen**).',
          '2. Alongside deepening the male **larynx (Adam\'s apple)** and widening bones, hormones super-activate skin **sebaceous (oil) glands** and sweat glands.',
          '3. Excess sticky sebum mixing with dead skin pores gets infected mildly by normal skin bacteria → creating temporary **teenage acne**.'
        ],
        finalAnswer: 'Pubertal sex hormone surges hyper-activate skin sebaceous oil glands while reshaping bones and voice box.',
        keyRule: 'Acne reflects normal over-active sebaceous glands during puberty—not dirty blood.'
      },
      {
        id: 'bio4-ex6',
        question: 'Distinguish cleanly between **Diabetes mellitus** and **Cretinism** in terms of gland, hormone, and age/cause.',
        steps: [
          '1. **Diabetes mellitus**: Caused by **Insulin** deficiency from pancreatic **Islets of Langerhans**; blood sugar climbs dangerously high and glucose leaks into urine (any age).',
          '2. **Cretinism**: Caused by severe **Thyroxine** deficiency from the **Thyroid gland** during **infancy/childhood**, triggering stunted dwarfism and impaired brain development.'
        ],
        finalAnswer: 'Diabetes = Pancreatic Insulin lack (high blood sugar); Cretinism = Infantile Thyroid Thyroxine lack (stunted physical & mental growth).',
        keyRule: 'Pituitary Dwarfism has normal intelligence; Thyroid Cretinism impairs both height and brain development!'
      },
      {
        id: 'bio4-ex7',
        question: 'How does the **Pituitary Gland** prove worthy of the title **"Master Endocrine Gland"**?',
        steps: [
          '1. Beyond its own Growth Hormone (GH) and ADH, the Pituitary releases specialised **Tropic Hormones**:',
          '2. **TSH** commands the Thyroid to release Thyroxine; **ACTH** commands Adrenals; **FSH & LH** command Testes and Ovaries!',
          '3. Without pituitary signals, distant target glands lie dormant!'
        ],
        finalAnswer: 'Pituitary tropic hormones (TSH, ACTH, FSH, LH) direct and regulate almost every other endocrine gland.',
        keyRule: 'Hypothalamus controls Pituitary, and Pituitary conducts the whole Endocrine orchestra!'
      },
      {
        id: 'bio4-ex8',
        question: 'Suggest FOUR healthy, practical strategies an ICSE Class 8 student should adopt to manage examination stress instead of caffeine overload or late-night screen scrolling.',
        steps: [
          '1. Follow a structured study timetable with short 45-minute blocks and 10-minute stretches.',
          '2. Engage in 30–45 minutes of daily outdoor sports, brisk walking, or yoga pranayama to lower stress cortisol.',
          '3. Get consistent **8 hours of sleep** in a dark screen-free bedroom for memory consolidation.',
          '4. Eat iron- and protein-rich home meals and talk candidly with parents or trusted teachers when anxious.'
        ],
        finalAnswer: 'Timed study breaks, daily exercise/yoga, 8-hour sleep hygiene, balanced meals, and open communication.',
        keyRule: 'Physical movement and deep sleep beat late-night cramming for hormone balance and exam recall.'
      }
    ],
    gradedQuestions: {
      easy: [
        { id: 'bio4-e1', marks: 2, question: 'Define a Hormone and give one key difference between Exocrine and Endocrine glands.', solutionSteps: ['**Hormone**: Trace chemical messenger secreted straight into blood by ductless glands acting on specific target organs.', '**Difference**: Exocrine glands use **ducts** (e.g., salivary); Endocrine glands are **ductless** (e.g., thyroid).'], finalAnswer: 'Blood-borne chemical signal; Exocrine = with ducts, Endocrine = ductless.' },
        { id: 'bio4-e2', marks: 2, question: 'Name the gland and hormone responsible for: (a) Fighting emergency danger; (b) Lowering elevated blood sugar.', solutionSteps: ['(a) **Adrenal gland → Adrenaline**.', '(b) **Pancreas (Islets of Langerhans) → Insulin**.'], finalAnswer: '(a) Adrenal / Adrenaline; (b) Pancreas / Insulin.' },
        { id: 'bio4-e3', marks: 2, question: 'What is Adam\'s apple, and which hormone triggers its rapid enlargement in adolescent boys?', solutionSteps: ['**Adam\'s apple** is the prominent front-neck bulge formed by an enlarged **larynx (voice box)**.', 'Triggered by rising male hormone **Testosterone** at puberty.'], finalAnswer: 'Enlarged male larynx (voice box) driven by Testosterone.' },
        { id: 'bio4-e4', marks: 2, question: 'Define Menarche and Menopause with approximate Indian age milestones.', solutionSteps: ['**Menarche**: First menstrual bleeding signalling reproductive onset around ages **11–13 years**.', '**Menopause**: Natural permanent ending of menstrual cycles around ages **45–50 years**.'], finalAnswer: 'First period (~11–13 yrs) vs natural cessation (~45–50 yrs).' }
      ],
      medium: [
        { id: 'bio4-m1', marks: 3, question: 'State one childhood hyposecretion and one hypersecretion disorder of Pituitary Growth Hormone (GH).', solutionSteps: ['1. **Hyposecretion (deficiency)** of GH in childhood → **Pituitary Dwarfism** (proportionately tiny body, normal IQ).', '2. **Hypersecretion (excess)** of GH in childhood → **Gigantism** (abnormal tallness exceeding 2.1 m).'], finalAnswer: 'Hypo = Pituitary Dwarfism; Hyper = Gigantism.' },
        { id: 'bio4-m2', marks: 3, question: 'List three physiological changes triggered by Adrenaline when a person faces sudden fright.', solutionSteps: ['1. **Heartbeat & blood pressure surge**, pumping oxygen-rich blood fast to legs/arms.', '2. **Breathing rate deepens & quickens** to load O₂ into lungs.', '3. Liver rapidly converts glycogen into **glucose**, while skin/gut blood vessels constrict!'], finalAnswer: 'Faster heartbeat, deeper rapid breathing, and instant liver glucose release to muscles.' },
        { id: 'bio4-m3', marks: 3, question: 'Explain three distinct secondary sexual characteristics seen at puberty in girls vs boys.', solutionSteps: ['**Boys**: Deeper cracked-then-low voice (Adam\'s apple), facial beard/moustache hair, broader muscular shoulders.', '**Girls**: Hip/pelvic widening, mammary/breast development, onset of monthly menstrual cycle (menarche).'], finalAnswer: 'Boys: facial hair, Adam\'s apple, broad shoulders; Girls: hip widening, breasts, menarche.' },
        { id: 'bio4-m4', marks: 3, question: 'Why is **Iron** especially important in an adolescent girl\'s diet alongside Calcium and Protein?', solutionSteps: ['1. **Protein** builds surging bones, muscles, and enzymes.', '2. **Calcium** hardens fast-growing long bones.', '3. **Iron** synthesises **haemoglobin** in red blood cells—replacing monthly menstrual blood loss and preventing teenage **anaemia**!'], finalAnswer: 'Replaces menstrual blood loss and builds haemoglobin to prevent teenage anaemia.' }
      ],
      difficult: [
        { id: 'bio4-d1', marks: 4, question: 'Compare **Nervous Control** vs **Endocrine (Hormonal) Control** in the human body across four features.', solutionSteps: ['1. **Signal Medium**: Nerve impulses are fast **electrochemical waves** along neurons; Hormones are **chemical molecules** carried in **blood**.', '2. **Speed**: Nervous = **instantaneous (milliseconds)**; Hormonal = **slower (seconds to years)**.', '3. **Duration**: Nervous = brief, vanishes immediately; Hormonal = **prolonged, lasting effects**.', '4. **Target Spread**: Nervous acts on discrete pinpoint muscles/glands; Hormonal acts broadly on distant target organs.'], finalAnswer: 'Nerve = fast, electrochemical, brief, local; Hormone = slower, blood-borne chemical, long-lasting, widespread.' },
        { id: 'bio4-d2', marks: 4, question: 'Explain how **Negative Feedback** keeps **Thyroxine** levels steady between the Pituitary and Thyroid glands.', solutionSteps: ['1. When blood **Thyroxine** falls too low, the **Pituitary** senses it and secretes more **TSH (Thyroid Stimulating Hormone)**.', '2. TSH stimulates the Thyroid to manufacture more Thyroxine until normal BMR is restored.', '3. Rising blood Thyroxine now **switches OFF / inhibits** Pituitary TSH release—preventing toxic runaway hyperthyroidism!'], finalAnswer: 'Low thyroxine stimulates Pituitary TSH; restored thyroxine suppresses TSH automatically like a house thermostat.' },
        { id: 'bio4-d3', marks: 4, question: 'Distinguish between **Diabetes mellitus** and **Simple Goitre** on the basis of affected gland, missing factor, symptoms, and remedy.', solutionSteps: ['1. **Diabetes mellitus**: Pancreatic **Islets of Langerhans** fail to secrete sufficient **Insulin** → high blood glucose & sweet urine; managed by diet, exercise, and insulin injections.', '2. **Simple Goitre**: Neck **Thyroid** swells cleanly due to dietary **Iodine** deficiency → visible neck bulge & sluggishness; prevented easily by eating **iodised salt** and seafood!'], finalAnswer: 'Diabetes = Pancreas/Insulin lack (high sugar); Goitre = Thyroid/Iodine lack (swollen neck).' },
        { id: 'bio4-d4', marks: 4, question: 'Why must adolescents strictly say NO to addictive drugs and cigarettes even under intense peer pressure?', solutionSteps: ['1. **Developing Teenage Brain**: Adolescent prefrontal cortex (decision-making & memory) is still wiring up—nicotine, alcohol, and opioids permanently alter dopamine circuits creating lifelong chemical **addiction**.', '2. **Organ Toxicity**: Tobacco tar destroys lungs & causes cancer; alcohol scars liver & causes accidents; shared drug needles risk fatal **HIV / Hepatitis B**!', '3. True confidence comes from healthy sports, friendships, and assertive refusal.'], finalAnswer: 'Teenage brains addict faster; substances wreck lungs, liver, immunity, and judgment permanently.' }
      ]
    },
    practiceWorksheet: {
      title: 'ICSE Class 8 Biology Worksheet — Endocrine System & Adolescence (30 Marks)',
      instructions: 'Identify glands, hormones, and clinical syndromes precisely.',
      sections: [
        {
          sectionTitle: 'Section A: Hormone & Gland Mapping (1 × 8 = 8 Marks)',
          items: [
            '1. Name the gland fondly called the "Master Endocrine Gland": ______.',
            '2. Which dual (heterocrine) organ makes both digestive juice AND Insulin? ______.',
            '3. Trace mineral essential for Thyroxine synthesis: ______.',
            '4. Hormone secreted in emergency situations: ______ (from ______ gland).',
            '5. First menstrual cycle at puberty (~11–13 yrs) is called ______.',
            '6. Enlarged male voice box visible on the front neck: ______.',
            '7. Childhood deficiency of Growth Hormone produces ______.',
            '8. True or False: Glucagon lowers high blood sugar after a sweet meal.'
          ]
        },
        {
          sectionTitle: 'Section B: Biological Reasoning (3 × 4 = 12 Marks)',
          items: [
            '9. Compare Exocrine and Endocrine glands across 3 parameters with examples.',
            '10. Why do Himalayan hill communities prevent Simple Goitre by using iodised salt?',
            '11. Contrast Pituitary Dwarfism with Thyroid Cretinism.',
            '12. Why do teenagers commonly experience acne and sudden mood shifts during puberty?'
          ]
        },
        {
          sectionTitle: 'Section C: Applied Physiology & Health (5 × 2 = 10 Marks)',
          items: [
            '13. Explain how Insulin and Glucagon work together as antagonistic partners to regulate blood glucose.',
            '14. Design a 1-day healthy adolescent nutrition, hygiene, and exam stress-management plan.'
          ]
        }
      ],
      answerKey: [
        '1. Pituitary gland',
        '2. Pancreas',
        '3. Iodine',
        '4. Adrenaline; Adrenal gland',
        '5. Menarche',
        '6. Adam\'s apple (larynx)',
        '7. Pituitary Dwarfism',
        '8. False (Insulin lowers sugar; Glucagon raises it)',
        '9. Exocrine has ducts & releases enzymes locally (sweat/salivary); Endocrine is ductless & releases blood hormones',
        '10. Mountain soil lacks iodine needed to make Thyroxine; iodised salt prevents swollen thyroid (goitre)',
        '11. Dwarfism = GH deficiency (short height, normal brain); Cretinism = infantile Thyroxine deficiency (stunted body + brain)',
        '12. Sex hormone surge stimulates sebaceous oil glands (acne) while rapid growth & brain rewiring shift emotions',
        '13. High sugar → Insulin (glucose → liver glycogen); Low sugar → Glucagon (glycogen → blood glucose)',
        '14. Protein+Calcium+Iron balanced meals, daily bathing/pads, 45 min sports/yoga, 8-hr sleep, zero tobacco/alcohol'
      ]
    },
    examPreparationTips: [
      'Memorise **5 Gland → Hormone → Disease** chains cold: Pituitary→GH→Dwarfism/Gigantism; Thyroid→Thyroxine→Goitre/Cretinism; Pancreas→Insulin→Diabetes; Adrenal→Adrenaline→Fight/Flight; Testes/Ovaries→Testosterone/Oestrogen.',
      'Remember **Insulin** = Glucose **IN**to liver (lowers blood sugar); **Glucagon** = Glucose **GONE** out of liver (raises blood sugar)!',
      'In puberty answers, always distinguish **Primary** (gamete organs) vs **Secondary** sexual characteristics cleanly.'
    ],
    chapterSummary: [
      '**Exocrine glands** discharge secretions via ducts; **Endocrine glands** are ductless and pour trace **hormones** directly into blood to target specific organs.',
      '**Pituitary** ("Master Gland") releases Growth Hormone (Dwarfism vs Gigantism) and tropic hormones regulating other glands.',
      '**Thyroid** uses **Iodine** to produce **Thyroxine** regulating Basal Metabolic Rate (BMR); shortage causes **Simple Goitre** or childhood **Cretinism**.',
      '**Pancreas (Islets of Langerhans)** balances blood glucose via **Insulin** (lowers sugar; lack → **Diabetes mellitus**) and **Glucagon** (raises sugar).',
      '**Adrenals** atop kidneys release **Adrenaline** ("Fight-or-Flight" hormone); **Testes & Ovaries** secrete **Testosterone & Oestrogen/Progesterone**.',
      '**Adolescence (ages 10–19)** brings rapid growth, Adam\'s apple in boys, **menarche** and the 28-day menstrual cycle in girls, demanding balanced protein/iron/calcium diet, hygiene, stress care, and firm refusal of drugs/tobacco.'
    ],
    importantQuestionsAndAnswers: [
      { type: 'Short Answer', question: 'Why are hormones often called "chemical messengers" rather than catalysts like enzymes?', answer: 'Unlike reusable digestive enzymes inside tubes, hormones carry coded regulatory signals across blood from ductless glands to distant target organs, trigger metabolic changes, and get broken down promptly once their message finishes.' },
      { type: 'Short Answer', question: 'Why is the Thyroid gland visible as a swollen bulge in the neck during Simple Goitre?', answer: 'Dietary iodine deficiency prevents Thyroxine synthesis; responding to falling blood thyroxine, Pituitary TSH pushes Thyroid cells to enlarge desperately trying to capture any trace iodine—forming a visible neck swelling.' },
      { type: 'Short Answer', question: 'Distinguish cleanly between Menarche and Menstruation.', answer: '**Menarche** is the very first menstrual period signalling puberty onset in a girl (~11–13 yrs); **Menstruation** is the monthly ~3–5 day shedding of the unused thickened uterine lining whenever fertilisation does not occur.' },
      { type: 'Reasoning', question: 'Why might an untreated diabetic patient feel strangely exhausted and thirsty even with huge amounts of glucose floating inside their blood?', answer: 'Without **Insulin**, body muscle cells stay locked shut to blood glucose—starving inside a sea of sugar (**exhaustion**)! Meanwhile, kidneys spill excess glucose into urine pulling huge volumes of water out with it (**excess urination & thirst**).' },
      { type: 'Short Answer', question: 'State two functions of Testosterone in males and two functions of Oestrogen in females.', answer: '**Testosterone**: Triggers sperm maturation plus male secondary traits (beard, deep voice/Adam\'s apple, muscular chest). **Oestrogen**: Matures ovarian follicles plus female secondary traits (breast growth, pelvic widening, preparing uterine lining).' },
      { type: 'Long Answer', question: 'Describe any four major Human Endocrine Glands with their exact locations, secreted hormones, and physiological functions.', answer: '1. **Pituitary (Base of brain)**: "Master Gland" releasing Growth Hormone (bone elongation), TSH, ACTH, FSH/LH.\n2. **Thyroid (Neck hugging trachea)**: Secretes iodine-rich Thyroxine controlling BMR, cellular oxidation, and growth.\n3. **Pancreas Islets (Abdomen behind stomach)**: Beta cells release Insulin (lowers blood glucose → glycogen); Alpha cells release Glucagon (raises blood glucose).\n4. **Adrenal Glands (Caps atop kidneys)**: Release Adrenaline in emergencies—accelerating heart rate, dilating airways, and mobilising quick muscle glucose.' },
      { type: 'Long Answer', question: 'Discuss four physical changes occurring during Adolescence and explain the importance of nutrition, hygiene, and stress management during these years.', answer: 'Physical changes: (1) Rapid skeletal height spurt; (2) Enlarged larynx (**Adam\'s apple**) deepening male voice; (3) Overactive oil/sweat glands causing acne/body odour; (4) Maturation of testes/ovaries, secondary hair/body contours, and **menarche**. Health priorities: Protein, Calcium, and Iron prevent stunted growth & anaemia; daily bathing & clean menstrual pads stop infections; sports, yoga, 8-hour sleep, and saying NO to tobacco/alcohol protect teenage mental and organ health.' },
      { type: 'HOTS', question: 'A patient undergoes emergency surgery removing 100% of his Thyroid gland due to a tumour. What lifelong daily medication must his doctor prescribe immediately, and why?', answer: 'Lifelong daily oral **synthetic Thyroxine tablets**! Without a thyroid gland, Basal Metabolic Rate plunges dangerously causing cold intolerance, weight gain, slow heart rate, and **Myxoedema** unless external Thyroxine restores normal metabolism.' }
    ],
    practiceExercises: [
      { question: 'Identify the hormone: (a) Fight-or-flight, (b) Lowers blood sugar, (c) Requires dietary iodine, (d) Male puberty voice/beard.', hint: 'Adrenaline, Insulin, Thyroxine, Testosterone.', answerGuide: '(a) Adrenaline, (b) Insulin, (c) Thyroxine, (d) Testosterone.' },
      { question: 'Why does a sudden scary dream wake you up sweating with a pounding pulse?', hint: 'Adrenal response to fear.', answerGuide: 'Brain alarm triggers Adrenaline surge—accelerating pulse, sweat, and muscle readiness instantaneously.' },
      { question: 'Which mineral prevents Simple Goitre and which mineral prevents teenage menstrual Anaemia?', hint: 'Iodine vs Iron.', answerGuide: 'Iodine prevents Goitre; Iron builds haemoglobin preventing Anaemia.' }
    ]
  },
  quizQuestions: [
    {
      id: 'bio4-q1',
      type: 'mcq',
      question: 'Which gland is nicknamed the "Master Endocrine Gland" because its tropic hormones regulate other ductless glands?',
      options: ['Thyroid gland', 'Pituitary gland', 'Adrenal gland', 'Salivary gland'],
      correctAnswer: 'Pituitary gland',
      explanation: 'Pituitary tropic hormones (TSH, ACTH, FSH, LH) command thyroid, adrenals, and gonads alongside secreting Growth Hormone.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio4-q2',
      type: 'mcq',
      question: 'Deficiency of which mineral in food and water causes swelling of the neck Thyroid gland called Simple Goitre?',
      options: ['Calcium', 'Iron', 'Iodine', 'Potassium'],
      correctAnswer: 'Iodine',
      explanation: 'Thyroid gland needs Iodine to manufacture Thyroxine; iodine shortage causes compensatory thyroid enlargement (Goitre).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio4-q3',
      type: 'mcq',
      question: 'Which hormone lowers high blood sugar after meals by promoting glycogen storage in the liver?',
      options: ['Glucagon', 'Insulin', 'Adrenaline', 'Testosterone'],
      correctAnswer: 'Insulin',
      explanation: 'Beta cells of the Pancreas (Islets of Langerhans) secrete Insulin to absorb glucose into cells and store glycogen.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio4-q4',
      type: 'mcq',
      question: 'Where are the paired Adrenal glands (producing the Fight-or-Flight hormone Adrenaline) located?',
      options: ['Base of the brain', 'Wrapping the windpipe in the neck', 'Sitting directly atop both kidneys', 'Inside the pelvis'],
      correctAnswer: 'Sitting directly atop both kidneys',
      explanation: 'Adrenal glands sit like triangular caps directly above the upper poles of both kidneys.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio4-q5',
      type: 'mcq',
      question: 'Why is the Pancreas classified as a Heterocrine (Dual) gland?',
      options: [
        'It lies on both left and right sides',
        'It secretes both digestive enzymes via a duct (exocrine) and Insulin/Glucagon into blood (endocrine)',
        'It works only in childhood',
        'It regulates both eyes and ears'
      ],
      correctAnswer: 'It secretes both digestive enzymes via a duct (exocrine) and Insulin/Glucagon into blood (endocrine)',
      explanation: 'Pancreas uniquely combines ducted pancreatic digestive juice and ductless endocrine Islets of Langerhans.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio4-q6',
      type: 'mcq',
      question: 'Excessive secretion of Growth Hormone (GH) during childhood leads to which condition?',
      options: ['Pituitary Dwarfism', 'Cretinism', 'Gigantism', 'Diabetes mellitus'],
      correctAnswer: 'Gigantism',
      explanation: 'Childhood GH hypersecretion causes extreme long-bone overgrowth called Gigantism (whereas deficiency causes Dwarfism).',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio4-q7',
      type: 'mcq',
      question: 'The protruding throat cartilage ("Adam\'s apple") common in adolescent boys is caused by rapid enlargement of the:',
      options: ['Thyroid gland', 'Larynx (Voice box)', 'Oesophagus', 'Pituitary gland'],
      correctAnswer: 'Larynx (Voice box)',
      explanation: 'Pubertal testosterone enlarges the male voice box (larynx), deepening the voice and creating the Adam\'s apple.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio4-q8',
      type: 'mcq',
      question: 'Which term marks the FIRST menstrual bleeding in an adolescent girl at puberty onset?',
      options: ['Menopause', 'Ovulation', 'Menarche', 'Gestation'],
      correctAnswer: 'Menarche',
      explanation: 'Menarche is the onset of menstruation around ages 11–13; Menopause is its natural cessation around ages 45–50.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio4-q9',
      type: 'fill_blank',
      question: 'According to the WHO, the transitional developmental stage of Adolescence spans roughly ages _____ to 19 years.',
      correctAnswer: '10',
      explanation: 'WHO defines Adolescence as ages 10 to 19 years between childhood and adulthood.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio4-q10',
      type: 'mcq',
      question: 'Teenage acne/pimples occur mostly because pubertal hormone surges super-activate skin:',
      options: ['Salivary glands', 'Sebaceous (oil) glands', 'Lacrimal glands', 'Adrenal cortex'],
      correctAnswer: 'Sebaceous (oil) glands',
      explanation: 'Excess oily sebum clogs skin pores alongside sweat and skin bacteria, causing teenage acne.',
      difficulty: 'medium',
      marks: 1
    },
    {
      id: 'bio4-q11',
      type: 'true_false',
      question: 'Endocrine glands possess long narrow ducts to pour their hormones directly into target organs.',
      correctAnswer: false,
      explanation: 'Endocrine glands are completely DUCTLESS—they release hormones directly into surrounding blood capillaries.',
      difficulty: 'easy',
      marks: 1
    },
    {
      id: 'bio4-q12',
      type: 'hots',
      question: 'A teenage boy eats poorly without green leafy vegetables, jaggery, or pulses while experiencing rapid height growth. Doctors note pale eyelids, breathlessness during stairs, and low haemoglobin. Which mineral deficiency has developed?',
      options: ['Iodine deficiency (Goitre)', 'Iron deficiency (Anaemia)', 'Sodium deficiency', 'Fluorine deficiency'],
      correctAnswer: 'Iron deficiency (Anaemia)',
      explanation: 'Expanding adolescent blood volume requires extra dietary Iron to build red-cell haemoglobin; shortage causes Anaemia.',
      difficulty: 'hard',
      marks: 2
    }
  ],
  flashcards: [
    { id: 'fc-b4-1', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'Exocrine vs Endocrine glands?', back: 'Exocrine = WITH ducts (salivary, sweat); Endocrine = DUCTLESS, secrete blood-borne hormones (thyroid, pituitary).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b4-2', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'Why is Pancreas called a Heterocrine gland?', back: 'Acts exocrine (pancreatic digestive enzymes via duct) AND endocrine (Islets of Langerhans make Insulin & Glucagon).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b4-3', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'Pituitary Growth Hormone: Hypo vs Hyper in childhood?', back: 'Hyposecretion = Pituitary Dwarfism; Hypersecretion = Gigantism.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b4-4', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'Thyroid hormone, required mineral & deficiency signs?', back: 'Hormone = Thyroxine; needs Iodine; deficiency causes Simple Goitre (neck swelling) and childhood Cretinism.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b4-5', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'Insulin vs Glucagon blood-sugar actions?', back: 'Insulin LOWERS blood glucose (stored as liver glycogen; lack → Diabetes mellitus). Glucagon RAISES low blood glucose.', category: 'Scientific Law', importance: 'Essential' },
    { id: 'fc-b4-6', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'Name the "Emergency / Fight-or-Flight" hormone & gland.', back: 'Adrenaline secreted by Adrenal glands sitting directly atop both kidneys.', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b4-7', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'Testes vs Ovaries hormones?', back: 'Testes → Testosterone (male puberty); Ovaries → Oestrogen & Progesterone (female puberty & pregnancy prep).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b4-8', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'What is the Adam\'s apple?', back: 'Visible front neck prominence of the male larynx (voice box) enlarged by testosterone at puberty.', category: 'Definition', importance: 'Standard' },
    { id: 'fc-b4-9', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'Menarche vs Menopause?', back: 'Menarche = first menstrual period (~11–13 yrs); Menopause = natural ending of cycles (~45–50 yrs).', category: 'Definition', importance: 'Essential' },
    { id: 'fc-b4-10', subjectId: 'biology', chapterId: 'bio-endocrine', chapterTitle: 'Human Body: Endocrine System and Adolescence', front: 'Three essential adolescent nutrients & their jobs?', back: 'Proteins (muscle/tissue growth), Calcium (strong lengthening bones), Iron (haemoglobin preventing anaemia).', category: 'Scientific Law', importance: 'Standard' }
  ]
};
