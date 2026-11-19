import { Subject } from '../types/index.ts';
import { MATH_CHAPTERS_PART_1 } from './mathChaptersPart1.ts';
import { MATH_CHAPTERS_PART_2 } from './mathChaptersPart2.ts';
import { ALL_PHYSICS_CHAPTERS } from './physicsChapters.ts';
import { ALL_CHEMISTRY_CHAPTERS } from './chemistryChapters.ts';
import { ALL_BIOLOGY_CHAPTERS } from './biologyChapters.ts';

const ALL_VERIFIED_MATH_CHAPTERS = [
  ...MATH_CHAPTERS_PART_1,
  ...MATH_CHAPTERS_PART_2,
];

export const ICSE_SUBJECTS: Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    code: 'MATH-08',
    iconName: 'Calculator',
    colorScheme: {
      primary: 'bg-blue-600',
      secondary: 'text-blue-600 dark:text-blue-400',
      bgBadge: 'bg-blue-50 dark:bg-blue-950/40',
      textBadge: 'text-blue-700 dark:text-blue-300',
      border: 'border-blue-200 dark:border-blue-800',
    },
    description:
      'Comprehensive ICSE Class 8 Mathematics covering Rational Numbers, Exponents, Squares & Cubes, Algebraic Identities & Factorisation, Linear Equations & Graphs, Commercial Maths, Quadrilaterals & Area, and Mensuration of Solids.',
    prescribedTextbook:
      'Revised New Mathematics Today – Class 8 (O.P. Malhotra, S.K. Gupta & Anubhuti Gangal · S. Chand School)',
    academicYear: '2026–27 (CISCE / CMS Core Alignment)',
    syllabusVerificationStatus: 'verified',
    verifiedSourceNote:
      'Aligned with CISCE Class 8 Mathematics framework and standard CMS Lucknow campuses (Revised New Mathematics Today, S. Chand School). Branch-specific tracks (such as JUMP Maths 8 or Cambridge Lower Secondary) and campus term circulars can be uploaded anytime via the Admin Syllabus Portal.',
    officialChapterOutline: ALL_VERIFIED_MATH_CHAPTERS.map((ch) => ({
      chapterNumber: ch.chapterNumber,
      title: ch.title,
      term: ch.term,
      status: 'available' as const,
    })),
    chapters: ALL_VERIFIED_MATH_CHAPTERS,
  },

  {
    id: 'physics',
    name: 'Physics',
    code: 'PHY-08',
    iconName: 'Atom',
    colorScheme: {
      primary: 'bg-indigo-600',
      secondary: 'text-indigo-600 dark:text-indigo-400',
      bgBadge: 'bg-indigo-50 dark:bg-indigo-950/40',
      textBadge: 'text-indigo-700 dark:text-indigo-300',
      border: 'border-indigo-200 dark:border-indigo-800',
    },
    description:
      'Comprehensive ICSE Class 8 Physics covering Matter & Kinetic Theory, Physical Quantities & Measurement (Density & Flotation), Force & Pressure, Energy & Mechanical Advantage, Light Energy (Refraction & Curved Mirrors), Heat Transfer & Expansion, Sound Waves, and Domestic Electricity & Static Charge.',
    prescribedTextbook:
      'Concise Physics Middle School Class 8 (Selina Publishers · CISCE Aligned)',
    academicYear: '2026–27 (CISCE / CMS Core Alignment)',
    syllabusVerificationStatus: 'verified',
    verifiedSourceNote:
      'Aligned with CISCE Class 8 Physics curriculum and CMS Lucknow campuses (Concise Physics Middle School Class 8). Custom campus term schedules can still be uploaded via Admin Syllabus Portal.',
    officialChapterOutline: ALL_PHYSICS_CHAPTERS.map((ch) => ({
      chapterNumber: ch.chapterNumber,
      title: ch.title,
      term: ch.term,
      status: 'available' as const,
    })),
    chapters: ALL_PHYSICS_CHAPTERS,
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    code: 'CHEM-08',
    iconName: 'FlaskConical',
    colorScheme: {
      primary: 'bg-emerald-600',
      secondary: 'text-emerald-600 dark:text-emerald-400',
      bgBadge: 'bg-emerald-50 dark:bg-emerald-950/40',
      textBadge: 'text-emerald-700 dark:text-emerald-300',
      border: 'border-emerald-200 dark:border-emerald-800',
    },
    description:
      'Comprehensive ICSE Class 8 Chemistry covering Matter & Mass Conservation, Physical & Chemical Changes, Elements/Compounds/Mixtures & Separation, Atomic Structure & Chemical Bonding, Language of Chemistry & Balanced Equations, Types of Chemical Reactions, Hydrogen & Redox, Water & Solubility/Hardness, and Carbon Allotropes & Oxides.',
    prescribedTextbook:
      'Concise Chemistry Middle School Class 8 (Selina ICSE · Dr. S.P. Singh)',
    academicYear: '2026–27 (CISCE / CMS Core Alignment)',
    syllabusVerificationStatus: 'verified',
    verifiedSourceNote:
      'Aligned with CISCE Class 8 Chemistry syllabus and CMS Lucknow campuses (Concise Chemistry Middle School Class 8). Administrators may update edition circulars via Admin Syllabus Portal.',
    officialChapterOutline: ALL_CHEMISTRY_CHAPTERS.map((ch) => ({
      chapterNumber: ch.chapterNumber,
      title: ch.title,
      term: ch.term,
      status: 'available' as const,
    })),
    chapters: ALL_CHEMISTRY_CHAPTERS,
  },
  {
    id: 'biology',
    name: 'Biology',
    code: 'BIO-08',
    iconName: 'Dna',
    colorScheme: {
      primary: 'bg-teal-600',
      secondary: 'text-teal-600 dark:text-teal-400',
      bgBadge: 'bg-teal-50 dark:bg-teal-950/40',
      textBadge: 'text-teal-700 dark:text-teal-300',
      border: 'border-teal-200 dark:border-teal-800',
    },
    description:
      'Comprehensive ICSE Class 8 Biology covering Plant Transport (Xylem/Phloem & Osmosis), Reproduction in Plants & Animals, Ecosystems & 10% Energy Law, Endocrine System & Adolescence, Circulatory System & Heart, Nervous System & Reflex Arc, Health, Diseases & First Aid, and Food Production & Management.',
    prescribedTextbook:
      'Concise Biology Middle School Class 8 (Selina ICSE · H.S. Vishnoi)',
    academicYear: '2026–27 (CISCE / CMS Core Alignment)',
    syllabusVerificationStatus: 'verified',
    verifiedSourceNote:
      'Aligned with CISCE Class 8 Biology curriculum and CMS Lucknow campuses (Concise Biology Middle School Class 8). Branch circulars or updates can be uploaded via Admin Syllabus Portal.',
    officialChapterOutline: ALL_BIOLOGY_CHAPTERS.map((ch) => ({
      chapterNumber: ch.chapterNumber,
      title: ch.title,
      term: ch.term,
      status: 'available' as const,
    })),
    chapters: ALL_BIOLOGY_CHAPTERS,
  },
  {
    id: 'history_civics',
    name: 'History & Civics',
    code: 'HIST-08',
    iconName: 'Landmark',
    colorScheme: {
      primary: 'bg-amber-600',
      secondary: 'text-amber-600 dark:text-amber-400',
      bgBadge: 'bg-amber-50 dark:bg-amber-950/40',
      textBadge: 'text-amber-700 dark:text-amber-300',
      border: 'border-amber-200 dark:border-amber-800',
    },
    description: 'The Modern World, Industrial Revolution, American Revolution, Revolt of 1857, and Union Legislature.',
    prescribedTextbook: 'Past and Present / Total History & Civics Class 8 (Morning Star)',
    academicYear: 'Pending Official 2026–27 CMS Upload',
    syllabusVerificationStatus: 'partial_missing',
    missingInformation: [
      'Confirmation of exact CMS Lucknow prescribed History & Civics publisher/edition for 2026–27.',
      'Remaining History & Civics chapters (Period of Transition, Decline of Mughal Empire, Indian National Movement, United Nations) awaiting official outline upload.',
    ],
    chapters: [
      {
        id: 'hist-ch1',
        subjectId: 'history_civics',
        chapterNumber: 1,
        title: 'The Great Revolt of 1857 (First War of Independence)',
        subtitle: 'Causes, Outbreak, Key Leaders, Reasons for Failure, and Constitutional Impact',
        term: 'Half-Yearly',
        estimatedMinutes: 50,
        notes: {
          introduction:
            'The Revolt of 1857 was a monumental watershed in modern Indian history. Described by British historians as the "Sepoy Mutiny" and by Indian nationalists as the "First War of Independence", it represented the culmination of a century of discontent against British East India Company rule across political, socio-religious, economic, and military spheres.',
          learningObjectives: [
            'Analyze political causes: Doctrine of Lapse, annexation of Awadh, and humiliation of Bahadur Shah Zafar.',
            'Identify economic exploitation: ruin of handicrafts, drain of wealth, and land revenue policies.',
            'Explain the immediate cause: Greased Cartridges and the martyrdom of Mangal Pandey.',
            'Detail the administrative transformations resulting from the Government of India Act 1858.',
          ],
          topics: [
            {
              id: 'hist-top-1',
              title: 'Multi-Dimensional Causes of the Revolt',
              content:
                'Lord Dalhousie’s Doctrine of Lapse annexed states like Jhansi, Satara, and Nagpur whose rulers lacked natural male heirs. Awadh was annexed in 1856 on charges of "misgovernance", deeply insulting Indian sepoys who predominantly hailed from Awadh. Economically, British machine-made textiles ruined millions of traditional Indian weavers.',
              definitions: [
                {
                  term: 'Doctrine of Lapse',
                  definition:
                    'An imperial annexation policy introduced by Lord Dalhousie where any princely state without a biological natural male heir automatically reverted to British dominion.',
                },
              ],
            },
            {
              id: 'hist-top-2',
              title: 'The Immediate Spark & Outbreak',
              content:
                'In early 1857, the British introduced the new Enfield rifle. The paper cartridge had a greased cap that sepoys had to bite off before loading. Rumours spread that the grease was made from cow and pig fat, deeply offending both Hindu and Muslim religious sentiments. On 29 March 1857, Sepoy Mangal Pandey revolted at Barrackpore, followed by the mass uprising at Meerut on 10 May 1857.',
            },
          ],
          importantTerminology: [
            {
              term: 'General Service Enlistment Act (1856)',
              definition: 'A decree requiring sepoys to serve overseas when commanded, defying Hindu beliefs against crossing the ocean (Kala Pani).',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-hist-1',
              question: 'Explain three major consequences of the Revolt of 1857.',
              steps: [
                '1. End of Company Rule: Queen Victoria’s Proclamation and the Act of 1858 dissolved the East India Company, placing India directly under the British Crown.',
                '2. Creation of Secretary of State & Viceroy: The Governor-General was designated Viceroy of India (Lord Canning was first Viceroy).',
                '3. Reorganization of Army: The ratio of European soldiers to Indian soldiers was substantially increased, and artillery was kept strictly in British hands to prevent future uprisings.',
              ],
              finalAnswer: 'The revolt ended Company rule and ushered in direct British Imperial governance.',
            },
          ],
          examPreparationTips: [
            'Remember important leaders and centres: Rani Lakshmibai (Jhansi), Begum Hazrat Mahal (Lucknow), Nana Saheb & Tatya Tope (Kanpur), Kunwar Singh (Bihar).',
            'Categorize causes under clear subheadings: Political, Economic, Socio-Religious, Military, and Immediate.',
          ],
          chapterSummary: [
            'Revolt started on 10 May 1857 at Meerut.',
            'Bahadur Shah Zafar was proclaimed Emperor of India.',
            'Revolt failed due to lack of unity, central leadership, modern arms, and non-participation of Southern and Western regions.',
            'Government of India Act 1858 transferred power to the Crown.',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'Why was the annexation of Awadh a major blunder for the British?',
              answer:
                'Awadh had been a loyal British ally. Annexing it on flimsy grounds of misgovernance alienated the landed aristocracy (Taluqdars) and angered 75,000 sepoys in the Company army who came from Awadh families, creating widespread resentment.',
              type: 'Short Answer',
            },
          ],
          practiceExercises: [
            {
              question: 'State two socio-religious causes that led to orthodox Indian opposition to British rule before 1857.',
              hint: 'Mention social reform laws like Abolition of Sati (1829) and Widow Remarriage Act (1856).',
              answerGuide: 'Orthodox sections viewed social reform laws and Christian missionary activities as threats to their ancient traditions.',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'hq1',
            type: 'mcq',
            question: 'Who was the Governor-General of India during the Revolt of 1857?',
            options: ['Lord Dalhousie', 'Lord Canning', 'Lord Curzon', 'Lord Wellesley'],
            correctAnswer: 'Lord Canning',
            explanation:
              'Lord Canning was Governor-General during 1857 and subsequently became the first Viceroy of India under the 1858 Act.',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-h1',
            subjectId: 'history_civics',
            chapterId: 'hist-ch1',
            chapterTitle: 'Revolt of 1857',
            front: 'Who led the 1857 uprising in Lucknow (CMS hometown)?',
            back: 'Begum Hazrat Mahal, on behalf of her minor son Birjis Qadr.',
            category: 'Date / Event',
            importance: 'Essential',
          },
        ],
      },
      {
        id: 'hist-ch2',
        subjectId: 'history_civics',
        chapterNumber: 2,
        title: 'The Union Legislature: Parliament of India',
        subtitle: 'Lok Sabha, Rajya Sabha, Composition, Qualifications, Speaker, and Law-Making Procedure',
        term: 'Annual',
        estimatedMinutes: 50,
        notes: {
          introduction:
            'India is a sovereign socialist secular democratic republic with a parliamentary system of government modeled on the Westminster model. At the federal level, the Union Legislature is known as the Parliament of India (Sansad), consisting of the President and two Houses: the Lok Sabha (House of the People) and the Rajya Sabha (Council of States). The Parliament represents the supreme will of the Indian electorate, enacts federal laws, scrutinizes government budgets, and holds the Council of Ministers accountable.',
          learningObjectives: [
            'Understand the bicameral structure of the Indian Parliament (Lok Sabha and Rajya Sabha).',
            'Compare the composition, term, and election procedures of both Houses.',
            'State the qualifications and disqualifications required for membership of Parliament (MP).',
            'Examine the pivotal role, election, and impartial powers of the Speaker of the Lok Sabha.',
            'Trace the step-by-step procedure by which an Ordinary Bill and a Money Bill become law.',
          ],
          topics: [
            {
              id: 'hist2-top-1',
              title: 'Composition and Powers of Lok Sabha & Rajya Sabha',
              content:
                'The Lok Sabha is the Lower House, directly elected by citizens through universal adult suffrage for a normal term of 5 years. The Rajya Sabha is the Upper House, representing the States and Union Territories; it is a permanent body not subject to dissolution, with one-third of its members retiring every second year (each member serves a 6-year term).',
              definitions: [
                {
                  term: 'Bicameral Legislature',
                  definition:
                    'A legislative body composed of two distinct chambers or houses (Lok Sabha and Rajya Sabha in India).',
                },
                {
                  term: 'Universal Adult Suffrage',
                  definition:
                    'The constitutional right of every Indian citizen aged 18 years and above to vote in general elections without discrimination on grounds of religion, race, caste, or gender.',
                },
              ],
              commonMistakes: [
                {
                  mistake: 'Assuming the Rajya Sabha can be dissolved during a national crisis.',
                  correction: 'The Rajya Sabha is a permanent constitutional house and is never dissolved; only the Lok Sabha can be dissolved.',
                },
                {
                  mistake: 'Believing Money Bills can originate in either House.',
                  correction: 'Money Bills can originate ONLY in the Lok Sabha on the prior recommendation of the President.',
                },
              ],
              realLifeExample:
                'During General Elections in Lucknow, adult citizens cast their secret ballot at designated polling stations using Electronic Voting Machines (EVMs) to elect their Member of Parliament to the Lok Sabha.',
            },
            {
              id: 'hist2-top-2',
              title: 'The Law-Making Procedure and Types of Bills',
              content:
                'A proposal for a new law is introduced in Parliament as a Bill. Bills are broadly categorized into Ordinary Bills and Money Bills. An Ordinary Bill passes through three distinct readings in each House: First Reading (Introduction), Second Reading (Detailed clause-by-clause scrutiny and debate), and Third Reading (Voting). After both Houses pass the Bill, it is sent to the President for assent. When the President signs the Bill, it becomes an Act of Parliament.',
              definitions: [
                {
                  term: 'Money Bill',
                  definition:
                    'A bill dealing exclusively with taxation, borrowing of money, or expenditure from the Consolidated Fund of India (Article 110).',
                },
                {
                  term: 'Quorum',
                  definition:
                    'The minimum number of members required to be present (one-tenth or 10% of total membership of the House) before it can transact business.',
                },
              ],
            },
          ],
          importantTerminology: [
            {
              term: 'Zero Hour',
              definition: 'The time slot immediately following Question Hour where MPs can raise urgent public issues with the prior permission of the Speaker.',
            },
            {
              term: 'Question Hour',
              definition: 'The first hour of every sitting of Parliament dedicated to MPs asking questions to Ministers about administrative actions.',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-civ-diff-1',
              question: 'Distinguish between Lok Sabha and Rajya Sabha regarding Money Bills.',
              steps: [
                '1. Origin: Money Bills can originate ONLY in the Lok Sabha; Rajya Sabha cannot initiate a Money Bill.',
                '2. Amendments: Rajya Sabha can only recommend amendments within 14 days; Lok Sabha can accept or reject all recommendations.',
                '3. Delay: If Rajya Sabha fails to return the Bill within 14 days, it is deemed to have been passed by both Houses.',
              ],
              finalAnswer: 'Lok Sabha enjoys supreme constitutional authority over national finances.',
              keyRule: 'The Speaker certifies whether a bill is a Money Bill or not, and this decision is final and binding.',
            },
          ],
          examPreparationTips: [
            'Memorize age qualifications: Minimum 25 years for Lok Sabha and 30 years for Rajya Sabha.',
            'Highlight that the Vice-President of India is the ex-officio Chairman of the Rajya Sabha.',
          ],
          chapterSummary: [
            'Parliament of India = President + Lok Sabha + Rajya Sabha.',
            'Lok Sabha term is 5 years; Rajya Sabha is permanent with 6-year terms (1/3 retiring every 2 years).',
            'Minimum age: Lok Sabha = 25 years, Rajya Sabha = 30 years.',
            'Money Bills require President recommendation and originate strictly in the Lok Sabha.',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'Why is the Lok Sabha more powerful than the Rajya Sabha despite being called the Lower House?',
              answer:
                'The Lok Sabha is directly elected by the sovereign citizens of India, making it truly representative of popular will. Furthermore: 1. In financial matters, Money Bills can only originate in Lok Sabha and Rajya Sabha can delay them for only 14 days. 2. The Council of Ministers is collectively responsible solely to the Lok Sabha; a vote of no-confidence passed by Lok Sabha forces the Prime Minister and cabinet to resign.',
              type: 'Long Answer',
            },
          ],
          practiceExercises: [
            {
              question: 'Explain what happens when a deadlock arises between the two Houses on an Ordinary Bill.',
              hint: 'Reference joint sitting convened by President and presided by Speaker.',
              answerGuide: 'The President can summon a Joint Sitting of both Houses under Article 108. Decisions are taken by simple majority; due to numerical superiority (543 vs 245), the Lok Sabha usually prevails.',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'hist2-q1',
            type: 'mcq',
            question: 'What is the minimum age required to contest election for the Lok Sabha?',
            options: ['18 years', '25 years', '30 years', '35 years'],
            correctAnswer: '25 years',
            explanation: 'Under the Constitution of India, a candidate must be at least 25 years of age to contest for Lok Sabha (and 30 for Rajya Sabha).',
            difficulty: 'easy',
            marks: 1,
          },
          {
            id: 'hist2-q2',
            type: 'true_false',
            question: 'The Rajya Sabha can reject a Money Bill passed by the Lok Sabha.',
            correctAnswer: false,
            explanation: 'The Rajya Sabha cannot reject or amend a Money Bill; it can only return it with recommendations within 14 days.',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-h2',
            subjectId: 'history_civics',
            chapterId: 'hist-ch2',
            chapterTitle: 'The Union Legislature',
            front: 'Who presides over a Joint Sitting of both Houses of Parliament?',
            back: 'The Speaker of the Lok Sabha.',
            category: 'Definition',
            importance: 'Essential',
          },
        ],
      },
    ],
  },
  {
    id: 'geography',
    name: 'Geography',
    code: 'GEOG-08',
    iconName: 'Globe',
    colorScheme: {
      primary: 'bg-emerald-700',
      secondary: 'text-emerald-700 dark:text-emerald-400',
      bgBadge: 'bg-emerald-50 dark:bg-emerald-950/40',
      textBadge: 'text-emerald-800 dark:text-emerald-300',
      border: 'border-emerald-300 dark:border-emerald-800',
    },
    description: 'Topographical maps, population dynamics, migration, urbanization, and Asia.',
    prescribedTextbook: 'Around the World Class 8 (Ratna Sagar / Frank EMU ICSE Geography)',
    academicYear: 'Pending Official 2026–27 CMS Upload',
    syllabusVerificationStatus: 'partial_missing',
    missingInformation: [
      'Confirmation of exact CMS Lucknow prescribed Geography textbook for the current academic year.',
      'Remaining Geography units (Migration, Urbanisation, Natural & Man-Made Disasters, Asia, India Physical & Climate) awaiting official CMS syllabus upload.',
    ],
    chapters: [
      {
        id: 'geog-ch1',
        subjectId: 'geography',
        chapterNumber: 1,
        title: 'Interpreting Topographical Maps: Contours and Landforms',
        subtitle: 'Contour Intervals, Slope Identification, Ridges, Valleys, and Four-Figure Grid References',
        term: 'Half-Yearly',
        estimatedMinutes: 50,
        notes: {
          introduction:
            'A topographical map (topo sheet) is a large-scale detailed map depicting natural and man-made features of a region. In ICSE Class 8, students learn how three-dimensional physical landforms like hills, plateaus, valleys, and slopes are accurately represented on a flat two-dimensional paper sheet using brown contour lines.',
          learningObjectives: [
            'Define contour line, contour interval, and index contour.',
            'Identify gentle slopes, steep slopes, conical hills, plateaus, ridges, and valleys from contour patterns.',
            'Read 4-figure grid references using Eastings and Northings.',
            'Interpret conventional symbols and colour codes used in Survey of India topo sheets.',
          ],
          topics: [
            {
              id: 'geog-top-1',
              title: 'Contour Lines and Landform Patterns',
              content:
                'A contour line connects all points having the same height above mean sea level. The vertical distance between two consecutive contour lines is called the Contour Interval (typically 20 metres on 1:50,000 scale Survey of India sheets). The spacing between contour lines reveals the nature of the terrain: closely spaced contours represent a steep slope, while widely spaced contours signify a gentle slope.',
              definitions: [
                {
                  term: 'Contour Line',
                  definition: 'An imaginary brown line drawn on a map joining places of equal elevation above mean sea level.',
                },
                {
                  term: 'Ridge',
                  definition: 'A long and narrow stretch of elevated highland with steep sides. Contours form an elongated loop pointing downwards.',
                },
                {
                  term: 'Valley',
                  definition: 'A low area of land between hills or mountains typically with a river flowing through it. Contours form a V-shape pointing towards higher ground (upstream).',
                },
              ],
              diagram: {
                id: 'diag-topo-map',
                title: 'Understanding Topographical Maps: Slope, Ridge, and Valley',
                caption:
                  '3D landform cross-section compared with 2D contour lines depicting steep slope, gentle slope, summit, ridge, and valley stream.',
                imageUrl: '/diagrams/map_topographical_contours_1794062476247.jpg',
                interactiveType: 'contour_slope',
              },
            },
          ],
          importantTerminology: [
            {
              term: 'Eastings',
              definition: 'Vertical grid lines running North-South whose numbering values increase towards the East.',
            },
            {
              term: 'Northings',
              definition: 'Horizontal grid lines running East-West whose numbering values increase towards the North.',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-geog-1',
              question: 'How do you determine whether a slope is gentle or steep on a topographical map?',
              steps: [
                'Step 1: Locate the contour lines covering the slope.',
                'Step 2: Observe the horizontal distance between adjacent contour lines.',
                'Step 3: If lines are crowded and very close to each other, elevation changes rapidly over short ground distance = Steep Slope.',
                'Step 4: If lines are far apart and widely spaced, elevation changes gradually = Gentle Slope.',
              ],
              finalAnswer: 'Contour spacing inversely reflects gradient steepness.',
            },
          ],
          examPreparationTips: [
            'Remember: In 4-figure grid reference, Eastings always precede Northings (Alphabetical: E comes before N).',
            'Learn colour meanings: Yellow = Cultivable agricultural land; Green = Forest/vegetation; Blue = Water bodies.',
          ],
          chapterSummary: [
            'Contour interval is uniform across a single topo sheet.',
            'V-shaped contours pointing upstream signify a river valley.',
            'Concentric circular contours with increasing heights towards centre represent a conical hill.',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'Differentiate between a ridge and a valley based on contour line shapes.',
              answer:
                'On a contour map, both ridges and valleys often show V-shaped or U-shaped contour bends. In a river valley, the apex of the "V" points towards higher ground (uphill/upstream). In a ridge, the apex points towards lower ground (downhill).',
              type: 'Short Answer',
            },
          ],
          practiceExercises: [
            {
              question: 'If the contour interval is 20m and five contour lines are counted from base to summit of a hill, what is the approximate height difference?',
              hint: 'Height difference = Number of intervals × Contour Interval.',
              answerGuide: 'Approx 4 × 20m = 80 metres.',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'gq1',
            type: 'mcq',
            question: 'Widely spaced contour lines on a topographical map indicate:',
            options: ['A gentle slope', 'A vertical cliff', 'A steep slope', 'A waterfall'],
            correctAnswer: 'A gentle slope',
            explanation:
              'When contour lines are far apart, it signifies that elevation rises very gradually over horizontal distance, denoting a gentle slope.',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-g1',
            subjectId: 'geography',
            chapterId: 'geog-ch1',
            chapterTitle: 'Topographical Maps',
            front: 'What does yellow wash signify on an ICSE Topo Sheet?',
            back: 'Cultivable agricultural land suitable for farming.',
            category: 'Definition',
            importance: 'Essential',
          },
        ],
      },
      {
        id: 'geog-ch2',
        subjectId: 'geography',
        chapterNumber: 2,
        title: 'Population Dynamics & Migration',
        subtitle: 'Birth & Death Rates, Natural Growth, Population Density Factors, and Age-Sex Pyramids',
        term: 'Annual',
        estimatedMinutes: 50,
        notes: {
          introduction:
            'Human beings are Earth\'s greatest dynamic resource. Population dynamics investigates how human populations change over time across space, encompassing fertility rates, mortality, life expectancy, and migration patterns. For Class 8 ICSE Geography, understanding demographic parameters and population pyramids allows students to critically evaluate environmental carrying capacity, urbanization challenges, and sustainable economic development.',
          learningObjectives: [
            'Define core demographic indicators: Birth Rate, Death Rate, Natural Growth Rate, and Infant Mortality Rate.',
            'Explain physical factors (relief, climate, soil, water) and socio-economic factors influencing uneven global population distribution.',
            'Calculate arithmetic Population Density: Total Population / Total Land Area (persons/km²).',
            'Contrast push factors and pull factors driving rural-to-urban and international migration.',
            'Analyze Age-Sex Population Pyramids for expanding, stable, and contracting populations.',
          ],
          topics: [
            {
              id: 'geog2-top-1',
              title: 'Demographic Parameters and Population Density',
              content:
                'The population of any geographic region is never static. Natural increase is the difference between crude birth rate and crude death rate. When birth rate exceeds death rate, natural growth occurs. Population density measures the concentration of human habitation per square kilometer. Factors like the fertile alluvial Indo-Gangetic Plains promote dense settlements, while arid deserts and rugged Himalayan topography remain sparsely populated.',
              definitions: [
                {
                  term: 'Birth Rate (Crude Birth Rate)',
                  definition:
                    'The number of live births per 1,000 people in a population in a given year.',
                },
                {
                  term: 'Death Rate (Crude Death Rate)',
                  definition:
                    'The number of deaths per 1,000 people in a population in a given year.',
                },
                {
                  term: 'Population Density',
                  definition:
                    'The number of individuals living per unit area of land, usually expressed as persons per square kilometer (persons/km²).',
                },
              ],
              formulas: [
                {
                  formula: 'Population Density = Total Population / Total Land Area (km²)',
                  explanation: 'Measures spatial pressure of human habitation on land resources.',
                  unit: 'persons/km²',
                },
                {
                  formula: 'Natural Growth Rate = Birth Rate - Death Rate',
                  explanation: 'Expressed per 1,000 people or as a percentage.',
                },
              ],
              commonMistakes: [
                {
                  mistake: 'Confusing total population with population density.',
                  correction: 'A large nation like Canada has a massive total area but very low density (4 persons/km²), whereas small islands can have very high densities.',
                },
              ],
              realLifeExample:
                'Uttar Pradesh is India\'s most populous state with fertile alluvial plains along the River Ganga, supporting intense agricultural yields and dense human settlements exceeding 820 persons/km².',
            },
            {
              id: 'geog2-top-2',
              title: 'Migration and Population Pyramids',
              content:
                'Migration is the movement of people from one place to another to settle permanently or temporarily. Push factors (poverty, famine, lack of jobs, political instability) compel people to leave their origin, while pull factors (better healthcare, superior educational institutions, higher wages, modern infrastructure) attract them to destinations. An Age-Sex Pyramid graphs the distribution of age cohorts between males and females.',
              definitions: [
                {
                  term: 'Push Factors',
                  definition:
                    'Unfavorable adverse conditions in a home region that compel people to emigrate (e.g., crop failure, war, unemployment).',
                },
                {
                  term: 'Pull Factors',
                  definition:
                    'Attractive advantageous conditions in a destination that draw immigrants (e.g., job security, advanced universities, safety).',
                },
              ],
            },
          ],
          importantTerminology: [
            {
              term: 'Emigration',
              definition: 'The act of leaving one\'s own country to settle permanently in another.',
            },
            {
              term: 'Immigration',
              definition: 'The act of entering a foreign country with the intention of residing there permanently.',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-geog-pop-1',
              question: 'A district has a total population of 2,400,000 and a geographical area of 3,000 km². Calculate its population density.',
              steps: [
                'Step 1: Formula: Density = Total Population / Total Area.',
                'Step 2: Density = 2,400,000 persons / 3,000 km².',
                'Step 3: Density = 800 persons/km².',
              ],
              finalAnswer: 'Population density is 800 persons/km² (Densely Populated category).',
              keyRule: 'Always specify the unit "persons per square kilometer" in ICSE geography numericals.',
            },
          ],
          examPreparationTips: [
            'Be ready to sketch and interpret a broad-based triangular pyramid (high birth rate, developing economy) vs bell-shaped pyramid (developed, zero-growth economy).',
            'Remember that brain drain is the emigration of highly trained intellectual individuals from developing to developed nations.',
          ],
          chapterSummary: [
            'Natural Increase = Birth Rate - Death Rate.',
            'Population Density = Total Population / Total Area (persons/km²).',
            'Migration drivers: Push factors (compulsion) and Pull factors (attraction).',
            'Age-Sex Pyramids reveal dependency ratio (children <15 and elderly >65 vs working cohort 15-64).',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'Explain three physical factors that cause the uneven distribution of population across the world.',
              answer:
                '1. Relief and Topography: Flat lowlands and river plains (e.g., Ganga plain) facilitate easy construction of transport networks and farming, whereas steep mountains hinder settlement. 2. Climate: Extreme temperatures (Arctic tundra or Sahara desert) discourage habitation, while temperate, moderate climates attract high densities. 3. Availability of Fresh Water: River valleys have always fostered human civilizations due to domestic and irrigation water supply.',
              type: 'Long Answer',
            },
          ],
          practiceExercises: [
            {
              question: 'State two socio-economic consequences of rapid overpopulation in urban mega-cities.',
              hint: 'Consider housing, traffic congestion, and sanitation.',
              answerGuide: 'Proliferation of unauthorized slums and squatter settlements, and severe stress on municipal water supply and sewerage infrastructure.',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'geog2-q1',
            type: 'mcq',
            question: 'What is the arithmetic measure of total population divided by total geographical area called?',
            options: ['Birth Rate', 'Population Density', 'Growth Rate', 'Carrying Capacity'],
            correctAnswer: 'Population Density',
            explanation: 'Population density expresses the spatial concentration of inhabitants per square kilometer.',
            difficulty: 'easy',
            marks: 1,
          },
          {
            id: 'geog2-q2',
            type: 'true_false',
            question: 'Better employment opportunities in cities are classified as a "push factor" of migration.',
            correctAnswer: false,
            explanation: 'Attractive employment opportunities in cities represent a "pull factor"; unpleasant rural poverty is a push factor.',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-g2',
            subjectId: 'geography',
            chapterId: 'geog-ch2',
            chapterTitle: 'Population Dynamics',
            front: 'What constitutes the Natural Growth Rate of a population?',
            back: 'The difference between the Crude Birth Rate and Crude Death Rate (Births - Deaths per 1,000 people).',
            category: 'Definition',
            importance: 'Essential',
          },
        ],
      },
    ],
  },
  {
    id: 'english_literature',
    name: 'English Literature',
    code: 'ENG-LIT-08',
    iconName: 'BookOpen',
    colorScheme: {
      primary: 'bg-purple-600',
      secondary: 'text-purple-600 dark:text-purple-400',
      bgBadge: 'bg-purple-50 dark:bg-purple-950/40',
      textBadge: 'text-purple-700 dark:text-purple-300',
      border: 'border-purple-200 dark:border-purple-800',
    },
    description: 'The Merchant of Venice extracts, classical poetry, short stories, character analysis, and themes.',
    prescribedTextbook: 'ICSE Collections / A Collection of Poems & Short Stories for Middle School',
    academicYear: 'Pending Official 2026–27 CMS Upload',
    syllabusVerificationStatus: 'partial_missing',
    missingInformation: [
      'Official CMS Lucknow Class 8 English Literature reader/novel list for 2026–27 (branch circulars vary).',
      'Full poem and prose roster prescribed by your campus teacher awaiting Admin upload.',
    ],
    chapters: [
      {
        id: 'englit-ch1',
        subjectId: 'english_literature',
        chapterNumber: 1,
        title: 'The Inchcape Rock by Robert Southey',
        subtitle: 'Poem Analysis, Themes, Rhyme Scheme, Character Contrast, and Moral Lesson',
        term: 'Half-Yearly',
        estimatedMinutes: 45,
        notes: {
          introduction:
            '"The Inchcape Rock" is a celebrated moral ballad composed by the English Romantic poet Robert Southey. Based on a 14th-century Scottish legend, the ballad dramatizes the timeless universal maxim: "As you sow, so shall you reap." It contrasts the benevolent, saintly Abbot of Aberbrothok with the malicious pirate Sir Ralph the Rover.',
          learningObjectives: [
            'Understand ballad form, stanzaic structure (AABB rhyme scheme), and musical rhythm.',
            'Contrast the characters of the Abbot of Aberbrothok and Sir Ralph the Rover.',
            'Analyze poetic devices: personification, alliteration, imagery, and dramatic irony.',
            'Derive the moral message regarding poetic justice and the self-destructive nature of evil.',
          ],
          topics: [
            {
              id: 'englit-top-1',
              title: 'Plot Summary and Poetic Imagery',
              content:
                'The Inchcape Rock was a perilous sandstone reef off the east coast of Scotland that caused numerous shipwrecks. The kind Abbot of Aberbrothok anchored a warning bell upon a buoy floating over the rock. Mariners blessed the Abbot when hearing the bell chime in storms. However, Sir Ralph the Rover, envious of the Abbot’s fame and driven by wickedness, sailed to the buoy on a calm spring day and cut the bell, watching it sink with a gurgling sound. Months later, returning rich with looted plunder in thick fog, Sir Ralph’s ship struck the silent Inchcape Rock and sank, with the pirate hearing the distant death-knell of the Inchcape Bell in his dying moments.',
              definitions: [
                {
                  term: 'Ballad',
                  definition: 'A narrative poem originally meant to be sung, telling an engaging story with rhythm and rhyme.',
                },
                {
                  term: 'Poetic Justice',
                  definition: 'An ideal literary outcome where virtue is ultimately rewarded and vice or wickedness is fittingly punished.',
                },
              ],
            },
          ],
          importantTerminology: [
            {
              term: 'Surge',
              definition: 'A powerful, rolling swell of water in the sea.',
            },
            {
              term: 'Scoured',
              definition: 'Travelled or searched extensively over the seas in quest of plunder.',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-eng-1',
              question: 'Explain the poetic devices in: "The ship was as still as she could be, / Her sails from heaven received no motion."',
              steps: [
                '1. Simile: "as still as she could be" establishes extreme calmness of the sea.',
                '2. Personification: The ship is referred to as "she".',
                '3. Metaphorical atmosphere: Southey establishes ominous peace before introducing the villain.',
              ],
              finalAnswer: 'Simile and personification used effectively to depict eerie calm.',
            },
          ],
          examPreparationTips: [
            'Mention the rhyme scheme (AABB) when answering form and structure questions.',
            'Quote key lines accurately (e.g., "He felt the cheering power of spring / It made him whistle, it made him sing").',
          ],
          chapterSummary: [
            'Ballad composed by Robert Southey.',
            'Themes: retribution, envy vs benevolence, poetic justice.',
            'Moral: Evil desires inevitably bring ruin upon the perpetrator.',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'Why did Sir Ralph cut down the Inchcape Bell?',
              answer:
                'Sir Ralph was motivated by malicious envy and malice. He could not tolerate the mariners blessing the Abbot of Aberbrothok for saving their lives, so he cut the bell to bring distress to sailors and spite the Abbot.',
              type: 'Short Answer',
            },
          ],
          practiceExercises: [
            {
              question: 'Describe Sir Ralph’s feelings when his ship was drifting blindly in the darkness and storm.',
              hint: 'Contrast his initial arrogance with his helpless realization that he is near the reef.',
              answerGuide: 'He was consumed by despair, fear, and regret, wishing he had never cut the warning bell.',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'englit1-q1',
            type: 'mcq',
            question: 'Who anchored the warning bell upon the Inchcape Rock?',
            options: ['The Abbot of Aberbrothok', 'Sir Ralph the Rover', 'King of Scotland', 'Robert Southey'],
            correctAnswer: 'The Abbot of Aberbrothok',
            explanation:
              'The kind Abbot placed the bell on a floating buoy to warn approaching ships of the hazardous hidden reef.',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-el1',
            subjectId: 'english_literature',
            chapterId: 'englit-ch1',
            chapterTitle: 'The Inchcape Rock',
            front: 'What is the rhyme scheme of each stanza in The Inchcape Rock?',
            back: 'AABB (four-line rhyming couplets, e.g., be/sea, motion/ocean).',
            category: 'Grammar Rule',
            importance: 'Essential',
          },
        ],
      },
      {
        id: 'englit-ch2',
        subjectId: 'english_literature',
        chapterNumber: 2,
        title: 'The Road Not Taken by Robert Frost',
        subtitle: 'Poetic Analysis, Extended Metaphors, Rhyme Scheme, and The Anatomy of Choice',
        term: 'Annual',
        estimatedMinutes: 45,
        notes: {
          introduction:
            'Published in 1916 by American poet Robert Frost, "The Road Not Taken" is one of the most celebrated and contemplative lyric poems in world literature. Set in an autumnal forest where two diverging paths present an agonizing dilemma to a lone traveler, the poem functions as a profound extended metaphor for the life-altering choices human beings must make when standing at the crossroads of existence.',
          learningObjectives: [
            'Analyze the figurative and metaphorical significance of the two diverging roads in the yellow wood.',
            'Identify poetic devices including extended metaphor, personification, imagery, and alliteration.',
            'Understand the rhyme scheme (ABAAB) and iambic tetrameter rhythm of each stanza.',
            'Evaluate the theme of individualism, non-conformity, and reflective contemplation regarding future consequences.',
          ],
          topics: [
            {
              id: 'englit2-top-1',
              title: 'Stanza-wise Interpretation and Divergence',
              content:
                'Stanza 1 introduces the traveler pausing in a "yellow wood", expressing regret that as one single individual he cannot travel both paths. He gazes down one road as far as his physical sight allows, until it bends into the undergrowth. Stanza 2 describes the alternative road: "just as fair", grassy and wanting wear, suggesting fewer individuals had chosen that trail. Stanza 3 reveals that both paths lay equally covered in fresh autumn leaves that morning, untrodden by black footprints. The speaker resolves to keep the first road for another day, yet realistically acknowledges that "way leads on to way", doubting if he will ever return.',
              definitions: [
                {
                  term: 'Extended Metaphor',
                  definition:
                    'A comparison between two unlike things that continues throughout a series of sentences in a paragraph or lines in a poem (here, the physical forest road represents life choices).',
                },
                {
                  term: 'Yellow Wood',
                  definition:
                    'The autumn forest foliage symbolizing maturity, transition, and the fleeting passage of time.',
                },
              ],
              commonMistakes: [
                {
                  mistake: 'Interpreting the poem as a simple celebration of unconventional rebellion.',
                  correction: 'Frost himself noted that both roads were "really about the same"; the sigh in the final stanza reflects wistful reflection rather than triumphant boastfulness.',
                },
              ],
              realLifeExample:
                'A Class 8 ICSE student choosing between pursuing Computer Science or Commerce is standing at Frost\'s metaphorical crossroads: each choice branches into unique college streams and career outcomes.',
            },
            {
              id: 'englit2-top-2',
              title: 'The Culminating Sigh and Lasting Significance',
              content:
                'In the final stanza, Frost looks into the distant future: "I shall be telling this with a sigh / Somewhere ages and ages hence". The "sigh" encapsulates the inevitable human curiosity and quiet regret about the unchosen possibilities of life. The famous closing lines—"I took the one less traveled by, / And that has made all the difference"—proclaim how individual agency and personal convictions define human destiny.',
              formulas: [
                {
                  formula: 'Rhyme Scheme: ABAAB',
                  explanation: 'Each 5-line stanza (quintet) follows ABAAB: wood (A), both (B), stood (A), could (A), undergrowth (B).',
                },
              ],
            },
          ],
          importantTerminology: [
            {
              term: 'Undergrowth',
              definition: 'Dense low shrubs and bushes growing beneath trees, symbolizing the unknown future hidden from current view.',
            },
            {
              term: 'Diverged',
              definition: 'Split, separated, or moved apart in different directions from a single junction.',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-frost-crit-1',
              question: 'Explain the deeper meaning behind the line: "Yet knowing how way leads on to way, I doubted if I should ever come back."',
              steps: [
                'Literal meaning: In a wilderness, taking one path leads into further subsequent trail junctions, making retracing one\'s steps improbable.',
                'Symbolic meaning: In human life, every major decision opens doors to new responsibilities, circumstances, and opportunities, making it virtually impossible to revert to the original starting point.',
              ],
              finalAnswer: 'Life is unidirectional and decisions are largely irreversible.',
              keyRule: 'Link Frost\'s physical landscape descriptions directly to the human psychological condition.',
            },
          ],
          examPreparationTips: [
            'Quote key phrases accurately in quotation marks: "yellow wood", "grassy and wanted wear", "with a sigh", "ages and ages hence".',
            'State that the tone is reflective, melancholic, and contemplative.',
          ],
          chapterSummary: [
            'Two roads diverge in a yellow autumn wood, forcing the traveler to pick one.',
            'Both roads were equally fair and carpeted with undisturbed autumn leaves that morning.',
            'The traveler chooses the less trodden path, knowing life rarely permits second chances.',
            'Rhyme Scheme: ABAAB in four structured 5-line stanzas.',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'What does the phrase "with a sigh" in the final stanza convey about the traveler\'s state of mind?',
              answer:
                'The word "sigh" conveys a blend of nostalgic contemplation and wistful wonder. It suggests neither pure sorrow nor unmitigated joy, but rather the quiet existential realization that choosing one life trajectory permanently closed the door on the alternate life he might have lived along the other road.',
              type: 'Reasoning',
            },
          ],
          practiceExercises: [
            {
              question: 'Identify the figure of speech in: "Because it was grassy and wanted wear".',
              hint: 'Consider attributing human desire to an inanimate road.',
              answerGuide: 'Personification: The road is given the human attribute of "wanting" to be walked upon.',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'englit2-q1',
            type: 'mcq',
            question: 'What is the rhyme scheme of each stanza in Robert Frost\'s "The Road Not Taken"?',
            options: ['AABB', 'ABAB', 'ABAAB', 'ABBA'],
            correctAnswer: 'ABAAB',
            explanation: 'Each 5-line quintet rhymes ABAAB (e.g., wood / both / stood / could / undergrowth).',
            difficulty: 'easy',
            marks: 1,
          },
          {
            id: 'englit2-q2',
            type: 'true_false',
            question: 'On that fateful morning, the leaves on both roads had already been trodden black by previous walkers.',
            correctAnswer: false,
            explanation: 'Frost explicitly states: "And both that morning equally lay / In leaves no step had trodden black."',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-el2',
            subjectId: 'english_literature',
            chapterId: 'englit-ch2',
            chapterTitle: 'The Road Not Taken',
            front: 'What does the "yellow wood" symbolize in Robert Frost\'s poem?',
            back: 'Autumn season, maturity, transition, and the inevitable passage of time.',
            category: 'Poetic Device',
            importance: 'Essential',
          },
        ],
      },
    ],
  },
  {
    id: 'english_language',
    name: 'English Language',
    code: 'ENG-LANG-08',
    iconName: 'PenTool',
    colorScheme: {
      primary: 'bg-rose-600',
      secondary: 'text-rose-600 dark:text-rose-400',
      bgBadge: 'bg-rose-50 dark:bg-rose-950/40',
      textBadge: 'text-rose-700 dark:text-rose-300',
      border: 'border-rose-200 dark:border-rose-800',
    },
    description: 'Tenses, active & passive voice, direct & indirect speech, prepositions, and formal letter writing.',
    prescribedTextbook: 'Total English Class 8 (Morning Star) / Wren & Martin High School Grammar',
    academicYear: 'Pending Official 2026–27 CMS Upload',
    syllabusVerificationStatus: 'partial_missing',
    missingInformation: [
      'Confirmation of CMS Lucknow English Language workbook edition and composition/letter rubric.',
      'Remaining grammar units (Tenses, Clauses, Prepositions, Synthesis, Comprehension) awaiting Admin upload.',
    ],
    chapters: [
      {
        id: 'englang-ch1',
        subjectId: 'english_language',
        chapterNumber: 1,
        title: 'Active and Passive Voice Transformation',
        subtitle: 'Rules of Conversion across All Tenses, Imperative Sentences, and Prepositional Verbs',
        term: 'Half-Yearly',
        estimatedMinutes: 50,
        notes: {
          introduction:
            'Voice is that form of a verb which shows whether the subject of the sentence performs the action (Active Voice) or is the recipient of the action (Passive Voice). In ICSE Class 8 examinations, voice transformation questions test precise grammatical manipulation without altering the original tense or meaning.',
          learningObjectives: [
            'Differentiate clearly between Active and Passive Voice.',
            'Apply tense-wise conversion rules using appropriate auxiliary verbs (is/am/are/was/were/being/been) + V3 (Past Participle).',
            'Convert interrogative, imperative, and modal sentences into passive voice.',
            'Avoid changing tenses or dropping prepositional particles.',
          ],
          topics: [
            {
              id: 'englang-top-1',
              title: 'General Rules for Transformation',
              content:
                '1. The object of the active verb becomes the subject of the passive verb.\n2. The main verb is always transformed into its Past Participle (V3) form.\n3. A suitable form of the auxiliary verb "to be" is introduced matching the active sentence tense and the new subject number.\n4. The active subject becomes the agent preceded by the preposition "by" (or "with"/"to" in special cases, e.g., known to).',
              formulas: [
                {
                  formula: 'Active: Subject + Verb + Object',
                  explanation: 'The doer of action takes prominence.',
                },
                {
                  formula: 'Passive: Object + Be-verb + V3 + by + Subject',
                  explanation: 'The recipient of action is emphasized.',
                },
              ],
            },
            {
              id: 'englang-top-2',
              title: 'Imperative Sentences (Commands, Requests, Advice)',
              content:
                'For orders/commands: Let + Object + be + V3 (e.g., "Shut the door." ⟹ "Let the door be shut.")\nFor advice: Subject + should be + V3 (e.g., "Help the poor." ⟹ "The poor should be helped.")\nFor requests: You are requested to + V1 (e.g., "Please lend me a pen." ⟹ "You are requested to lend me a pen.")',
            },
          ],
          importantTerminology: [
            {
              term: 'Transitive Verb',
              definition: 'A verb that takes a direct object. Only transitive verbs can be converted into passive voice.',
            },
            {
              term: 'Intransitive Verb',
              definition: 'A verb that does not take an object (e.g., laugh, sleep, go). Cannot be changed to passive voice.',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-englang-1',
              question: 'Convert: "The teacher has praised the students of Class 8."',
              steps: [
                'Identify: Subject = The teacher, Verb = has praised (Present Perfect), Object = the students of Class 8.',
                'New Subject = "The students of Class 8" (plural).',
                'Auxiliary for Present Perfect plural = have been.',
                'Past participle of praise = praised.',
                'Combine: "The students of Class 8 have been praised by the teacher."',
              ],
              finalAnswer: 'The students of Class 8 have been praised by the teacher.',
            },
          ],
          examPreparationTips: [
            'Do not confuse voice change with narration (direct/indirect speech). In voice, the tense NEVER shifts to the past!',
            'Remember: Future Continuous (will be doing) and all Perfect Continuous tenses have no standard passive voice form.',
          ],
          chapterSummary: [
            'Active voice emphasizes the doer; passive voice emphasizes the receiver of the action.',
            'Always use the V3 past participle in passive voice.',
            'Imperatives with orders use "Let + object + be + V3".',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'Why can the sentence "Birds fly in the sky" not be converted into passive voice?',
              answer:
                'The verb "fly" in this sentence is intransitive. "In the sky" is an adverbial prepositional phrase denoting location, not a direct grammatical object. Sentences without a direct object cannot be transformed into passive voice.',
              type: 'Reasoning',
            },
          ],
          practiceExercises: [
            {
              question: 'Change into passive voice: "Who wrote the play Hamlet?"',
              hint: 'Begin with "By whom was..."',
              answerGuide: 'By whom was the play Hamlet written?',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'elq1',
            type: 'mcq',
            question: 'What is the passive form of: "Open the window"?',
            options: [
              'The window opened.',
              'Let the window be opened.',
              'You should open the window.',
              'The window is being opened.',
            ],
            correctAnswer: 'Let the window be opened.',
            explanation: 'Imperative orders convert using the structure: Let + Object + be + Past Participle (V3).',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-lang1',
            subjectId: 'english_language',
            chapterId: 'englang-ch1',
            chapterTitle: 'Active and Passive Voice',
            front: 'What is the passive auxiliary structure for Present Continuous Tense?',
            back: 'is / am / are + being + V3 (e.g., is being repaired).',
            category: 'Grammar Rule',
            importance: 'Essential',
          },
        ],
      },
      {
        id: 'englang-ch2',
        subjectId: 'english_language',
        chapterNumber: 2,
        title: 'Direct and Indirect Speech (Reported Speech)',
        subtitle: 'Rules of Conversion, Backshift of Tenses, Time/Place Adverbials, and Interrogative Sentences',
        term: 'Annual',
        estimatedMinutes: 50,
        notes: {
          introduction:
            'When recounting what another person stated, we can either repeat their exact words within quotation marks (Direct Speech) or narrate the substance of their utterance from our own perspective without quotation marks (Indirect or Reported Speech). In Class 8 ICSE English Language, mastering reported speech requires systematic command over reporting verbs, backshifting of tenses, personal pronoun adjustments, and transforming questions and imperatives.',
          learningObjectives: [
            'Differentiate between Direct Speech and Indirect Speech.',
            'Apply the fundamental rule of tense backshift when the reporting verb is in the past tense (e.g., said).',
            'Identify situations where tense remains unchanged (universal truths, habitual facts).',
            'Convert interrogative questions (Yes/No with if/whether and Wh- questions).',
            'Transform imperative commands, requests, and exclamatory utterances into reported speech.',
          ],
          topics: [
            {
              id: 'englang2-top-1',
              title: 'Tense Changes and Adverbial Shifts',
              content:
                'If the reporting verb is in the Past Tense (e.g., said, told, inquired), the verbs in direct speech are shifted into corresponding past tenses: Simple Present → Simple Past; Present Continuous → Past Continuous; Present Perfect → Past Perfect; Simple Past → Past Perfect; will/shall → would/should. Adverbs of time and place also shift to indicate increased distance: today → that day; tomorrow → the next day; yesterday → the previous day; now → then; here → there.',
              definitions: [
                {
                  term: 'Reporting Verb',
                  definition:
                    'The verb introducing the spoken dialogue (e.g., said, asked, requested, exclaimed).',
                },
                {
                  term: 'Backshift',
                  definition:
                    'The systematic grammatical shifting of verb tenses one step into the past when reporting previous speech.',
                },
              ],
              commonMistakes: [
                {
                  mistake: 'Changing the tense of a universal scientific truth.',
                  correction: 'The teacher said, "The Earth revolves around the Sun." → The teacher said that the Earth revolves around the Sun (present tense remains unchanged).',
                },
                {
                  mistake: 'Retaining question word order: He asked me where was I going.',
                  correction: 'In indirect speech, interrogative order shifts to assertive order: He asked me where I was going.',
                },
              ],
              realLifeExample:
                'When reporting a teacher\'s instruction to your parents: "Submit your ICSE project on Monday," you report: "The teacher instructed us to submit our ICSE project on Monday."',
            },
            {
              id: 'englang2-top-2',
              title: 'Conversion of Questions and Imperatives',
              content:
                'For Wh- questions (who, what, where, when, why, how), the question word is retained as a conjunction, and inversion is removed. For Yes/No questions, "if" or "whether" is introduced. For imperative commands or requests, the reporting verb is changed to ordered, advised, or requested, followed by an infinitive (to + verb).',
              formulas: [
                {
                  formula: 'Yes/No Questions: Reporting Verb (asked) + if / whether + Subject + Verb',
                  explanation: 'He asked me, "Are you unwell?" → He asked me whether I was unwell.',
                },
                {
                  formula: 'Imperatives: Subject + ordered / requested + Object + to + V1',
                  explanation: 'She said, "Please lend me your pen." → She requested me to lend her my pen.',
                },
              ],
            },
          ],
          importantTerminology: [
            {
              term: 'Assertive Sentence',
              definition: 'A declarative sentence stating a fact; connects in indirect speech with the conjunction "that".',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-narration-1',
              question: 'Convert to indirect speech: The doctor said to the patient, "Do you exercise regularly?"',
              steps: [
                'Step 1: Identify reporting verb "said to" → change to "asked" or "inquired of".',
                'Step 2: Sentence is a Yes/No question in Simple Present Tense.',
                'Step 3: Connect with "if" or "whether".',
                'Step 4: Shift pronoun "you" to "he/she" and tense "exercise" (Present) to "exercised" (Past).',
              ],
              finalAnswer: 'The doctor asked the patient whether he exercised regularly.',
              keyRule: 'Drop question mark and auxiliary "do/does" when converting to assertive reported word order.',
            },
          ],
          examPreparationTips: [
            'Never use "that" together with question words or "if" (e.g., "He asked that if..." is grammatically incorrect).',
            'Remember: "said to me" becomes "told me", never "told to me".',
          ],
          chapterSummary: [
            'Past reporting verb triggers tense backshift: Present → Past, Past → Past Perfect.',
            'Universal truths and habitual actions do not backshift.',
            'Wh- questions use the question word as conjunction; Yes/No uses if/whether.',
            'Imperatives use to + infinitive: requested him to wait.',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'Rewrite in reported speech: The captain shouted, "Hurrah! We have won the championship match today!"',
              answer:
                'The captain exclaimed with great joy that they had won the championship match that day.',
              type: 'Short Answer',
            },
          ],
          practiceExercises: [
            {
              question: 'Convert to indirect speech: Rohan said, "I bought a new bicycle yesterday."',
              hint: 'Simple past "bought" shifts to past perfect "had bought", and "yesterday" becomes "the previous day".',
              answerGuide: 'Rohan said that he had bought a new bicycle the previous day.',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'englang2-q1',
            type: 'mcq',
            question: 'How does the adverb "tomorrow" convert in indirect speech with a past reporting verb?',
            options: ['that day', 'the following day (or next day)', 'yesterday', 'the day before'],
            correctAnswer: 'the following day (or next day)',
            explanation: '"Tomorrow" indicates future relative to the speech and converts to "the following day" or "the next day".',
            difficulty: 'easy',
            marks: 1,
          },
          {
            id: 'englang2-q2',
            type: 'true_false',
            question: 'In indirect speech, the interrogative sentence structure retains its inverted verb-subject order and question mark.',
            correctAnswer: false,
            explanation: 'In indirect speech, questions become assertive statements ending in a full stop with subject preceding verb.',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-lang2',
            subjectId: 'english_language',
            chapterId: 'englang-ch2',
            chapterTitle: 'Direct and Indirect Speech',
            front: 'Does the tense shift when reporting a universal scientific truth?',
            back: 'No! The present tense is retained (e.g., The teacher said that water boils at 100°C).',
            category: 'Grammar Rule',
            importance: 'Essential',
          },
        ],
      },
    ],
  },
  {
    id: 'computer_studies',
    name: 'Computer',
    code: 'COMP-08',
    iconName: 'Monitor',
    colorScheme: {
      primary: 'bg-cyan-600',
      secondary: 'text-cyan-600 dark:text-cyan-400',
      bgBadge: 'bg-cyan-50 dark:bg-cyan-950/40',
      textBadge: 'text-cyan-700 dark:text-cyan-300',
      border: 'border-cyan-200 dark:border-cyan-800',
    },
    description: 'Operating systems, spreadsheets, algorithms & flowcharts, programming logic, and networks.',
    prescribedTextbook: 'Logix / Touchpad Plus Computer Studies Class 8',
    academicYear: 'Pending Official 2026–27 CMS Upload',
    syllabusVerificationStatus: 'partial_missing',
    missingInformation: [
      'Official CMS Lucknow Class 8 Computer textbook confirmation (BlueJ/Java vs Python track & edition).',
      'Remaining Computer units (Operating System & GUI, Spreadsheet Functions, App Development, Program Coding) awaiting Admin upload.',
    ],
    chapters: [
      {
        id: 'comp-ch1',
        subjectId: 'computer_studies',
        chapterNumber: 1,
        title: 'Algorithms, Flowcharts, and Program Logic',
        subtitle: 'Sequential, Conditional (If-Else), and Iterative (Loops) Computational Thinking',
        term: 'Half-Yearly',
        estimatedMinutes: 50,
        notes: {
          introduction:
            'Before writing computer programs in languages like Java or Python, computer scientists design step-by-step problem-solving blueprints called algorithms and flowcharts. An algorithm is a precise, unambiguous sequence of finite instructions written in plain language. A flowchart provides a standardized graphical representation of the algorithmic logic flow.',
          learningObjectives: [
            'Define algorithms and list the characteristics of an effective algorithm (finiteness, definiteness, input, output).',
            'Identify standard ANSI flowchart symbols: Oval, Parallelogram, Rectangle, Rhombus, and Arrows.',
            'Construct sequential, decision-making (if-else), and looping (for/while) logic structures.',
            'Trace algorithms with test dry-runs to detect and correct logical bugs.',
          ],
          topics: [
            {
              id: 'comp-top-1',
              title: 'Flowchart Symbols and Standards',
              content:
                'Flowcharts use geometric shapes connected by directional flowlines:\n1. Oval / Rounded Rectangle: Terminal symbol (Start / Stop).\n2. Parallelogram: Input / Output (Read A, Print Result).\n3. Rectangle: Process symbol for calculations and assignments (Sum = A + B).\n4. Rhombus / Diamond: Decision symbol containing a boolean condition with True/False branches.\n5. Small Circle: Connector symbol.',
              definitions: [
                {
                  term: 'Algorithm',
                  definition: 'A finite, step-by-step sequence of well-defined instructions for solving a specific computational problem.',
                },
                {
                  term: 'Flowchart',
                  definition: 'A diagrammatic representation of an algorithm using standardized geometric symbols and directional flowlines.',
                },
              ],
            },
            {
              id: 'comp-top-2',
              title: 'Control Structures: Sequence, Selection, and Iteration',
              content:
                '1. Sequence: Instructions execute strictly one after another from top to bottom.\n2. Selection (Decision): The path splits based on whether a condition evaluates to True or False (e.g., If Age >= 18).\n3. Iteration (Looping): A block of steps repeats multiple times until a terminating condition is met (e.g., while Count <= 10).',
              realLifeExample:
                'An ATM machine runs an algorithm: Read PIN ⟹ If PIN is correct ⟹ Check Account Balance >= Withdrawal Amount ⟹ Dispense Cash and Update Balance ⟹ Else ⟹ Display Error Message.',
            },
          ],
          importantTerminology: [
            {
              term: 'Dry Run (Trace Table)',
              definition: 'Manual execution of an algorithm line-by-line with sample input data on paper to verify logical correctness.',
            },
            {
              term: 'Infinite Loop',
              definition: 'A programming flaw where a loop never terminates because its exit condition is never satisfied.',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-comp-1',
              question: 'Write an algorithm to find the largest of two numbers A and B.',
              steps: [
                'Step 1: Start.',
                'Step 2: Read two numbers A and B.',
                'Step 3: If A > B then print "A is the largest".',
                'Step 4: Else if B > A then print "B is the largest".',
                'Step 5: Else print "Both numbers are equal".',
                'Step 6: Stop.',
              ],
              finalAnswer: 'Clear 6-step selection algorithm with equality guard.',
            },
          ],
          examPreparationTips: [
            'Always use a pencil and ruler when drawing flowcharts in school exams.',
            'Ensure every decision diamond has clearly labeled "Yes" / "No" or "True" / "False" exit arrows.',
          ],
          chapterSummary: [
            'Algorithms are human-readable, step-by-step problem-solving sequences.',
            'Flowcharts use standard geometric symbols (Oval = Start/Stop, Diamond = Decision).',
            'Three basic structures: Sequential, Selection, and Iterative.',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'Why is a flowchart considered better than an algorithm for explaining complex logic?',
              answer:
                'A flowchart provides a visual graphical layout of the program flow. Complex decision branches and loops can be understood at a glance, making it much easier to detect logical flaws, dead ends, and infinite loops than reading lengthy lines of textual instructions.',
              type: 'Short Answer',
            },
          ],
          practiceExercises: [
            {
              question: 'Write an algorithm to calculate and print the sum of first N natural numbers.',
              hint: 'Initialize Sum = 0, Count = 1, and use a loop while Count <= N.',
              answerGuide: 'Sum = Sum + Count; Count = Count + 1; Repeat until Count > N.',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'cs1',
            type: 'mcq',
            question: 'Which geometric shape is used in a flowchart to represent a decision condition?',
            options: ['Rectangle', 'Diamond (Rhombus)', 'Parallelogram', 'Oval'],
            correctAnswer: 'Diamond (Rhombus)',
            explanation:
              'A diamond symbol represents decision-making with multiple outgoing branches (True/False or Yes/No).',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-cs1',
            subjectId: 'computer_studies',
            chapterId: 'comp-ch1',
            chapterTitle: 'Algorithms & Flowcharts',
            front: 'What symbol represents Input/Output operations in a flowchart?',
            back: 'A Parallelogram (e.g., Read Input, Display Result).',
            category: 'Code Syntax',
            importance: 'Essential',
          },
        ],
      },
      {
        id: 'comp-ch2',
        subjectId: 'computer_studies',
        chapterNumber: 2,
        title: 'Computer Networks and Cloud Computing',
        subtitle: 'Network Types (LAN/MAN/WAN), Topologies, Transmission Media, Cloud Services (IaaS, PaaS, SaaS), and Cyber Security',
        term: 'Annual',
        estimatedMinutes: 50,
        notes: {
          introduction:
            'A computer network is an interconnected collection of autonomous computers and peripheral computing devices capable of exchanging data, sharing peripheral resources (such as laser printers and storage arrays), and facilitating rapid digital communications. In Class 8 ICSE Computer Studies, we examine network topologies, communication channels, cloud computing paradigms, and the essential protocols and cybersecurity etiquette that protect digital citizens on the Internet.',
          learningObjectives: [
            'Classify computer networks based on geographical span: PAN, LAN, MAN, and WAN.',
            'Compare guided (wired: Twisted pair, Coaxial, Fiber optic) and unguided (wireless: Wi-Fi, Bluetooth, Satellite) media.',
            'Analyze physical network topologies: Star, Bus, Ring, and Mesh, highlighting fault tolerance and bottlenecks.',
            'Explain Cloud Computing deployment and service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).',
            'Adopt cyber safety practices against malware, phishing, identity theft, and cyberbullying.',
          ],
          topics: [
            {
              id: 'comp2-top-1',
              title: 'Network Classifications and Topologies',
              content:
                'Networks range from Personal Area Networks (PAN within 10 meters) and Local Area Networks (LAN spanning a school lab or building) to Metropolitan Area Networks (MAN across a city) and Wide Area Networks (WAN spanning continents, e.g., the Internet). Physical topology describes the geometric layout in which computer nodes are interconnected. In Star Topology, each device connects to a central hub or switch; in Bus Topology, devices share a single backbone cable terminated at both ends.',
              definitions: [
                {
                  term: 'Local Area Network (LAN)',
                  definition:
                    'A network connecting computers and devices within a limited geographical area such as a home, school, or computer laboratory.',
                },
                {
                  term: 'Network Topology',
                  definition:
                    'The physical or logical geometric arrangement of nodes (computers) and connecting lines in a network.',
                },
              ],
              commonMistakes: [
                {
                  mistake: 'Assuming failure of one node brings down the entire network in a Star topology.',
                  correction: 'In a Star topology, only failure of the central switch/hub affects the entire network; an individual workstation breakdown does not impact other nodes.',
                },
              ],
              realLifeExample:
                'The City Montessori School (CMS) computer lab utilizes a Gigabit Ethernet Star Topology where every student workstation connects directly via Cat-6 cables to a central Cisco rack switch, sharing network storage and laser printers.',
            },
            {
              id: 'comp2-top-2',
              title: 'Cloud Computing and Service Models',
              content:
                'Cloud Computing is the on-demand delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the Internet ("the cloud") with pay-as-you-go pricing. It eliminates the need for expensive on-premise data centers. The three primary service models are: SaaS (Software as a Service, e.g., Google Workspace, Gmail), PaaS (Platform as a Service for developers), and IaaS (Infrastructure as a Service providing virtualized raw servers and storage).',
              definitions: [
                {
                  term: 'Software as a Service (SaaS)',
                  definition:
                    'A cloud service model where users connect to and use cloud-based applications over the Internet without installing software locally (e.g., Google Docs, ICSE Genius).',
                },
                {
                  term: 'Firewall',
                  definition:
                    'A security device or software filter that monitors and controls incoming and outgoing network traffic based on predetermined security rules.',
                },
              ],
            },
          ],
          importantTerminology: [
            {
              term: 'Bandwidth',
              definition: 'The maximum volume of data that can be transmitted over an Internet or network connection in a given amount of time (measured in Mbps or Gbps).',
            },
            {
              term: 'MAC Address',
              definition: 'A unique 48-bit physical hardware identifier permanently burned into the Network Interface Card (NIC) of every computing device.',
            },
          ],
          solvedExamples: [
            {
              id: 'sol-net-comp-1',
              question: 'Contrast Star Topology with Bus Topology in terms of installation cost and reliability.',
              steps: [
                '1. Cabling & Cost: Bus topology requires minimal cable (single trunk line), making it cheap to install. Star topology requires dedicated cables from every computer to the switch, increasing cable cost.',
                '2. Fault Tolerance: In Bus topology, a break in the central backbone cable halts all communication across the entire network. In Star topology, if one cable breaks, only that specific computer is disconnected while the rest of the network operates normally.',
              ],
              finalAnswer: 'Star topology is more reliable and dominant in modern institutions despite higher initial cabling cost.',
              keyRule: 'Modern commercial networks universally favor Star topology due to high fault tolerance and ease of troubleshooting.',
            },
          ],
          examPreparationTips: [
            'Differentiate clearly between guided media (wires like Fiber Optic transmitting light pulses) and unguided media (radio waves, microwaves).',
            'Remember that fiber-optic cables offer the highest transmission bandwidth and complete immunity to electromagnetic interference.',
          ],
          chapterSummary: [
            'PAN < LAN < MAN < WAN (Internet is the largest WAN).',
            'Star topology connects all nodes to a central hub/switch.',
            'Cloud Models: IaaS (hardware/servers), PaaS (runtime environment), SaaS (end-user software).',
            'Cyber ethics: Use strong passwords, avoid suspicious phishing links, and respect digital copyright.',
          ],
          importantQuestionsAndAnswers: [
            {
              question: 'Why are optical fiber cables considered superior to copper twisted-pair cables for high-speed data transmission?',
              answer:
                '1. High Speed & Bandwidth: Optical fibers transmit data as pulses of light utilizing total internal reflection, achieving gigabit-per-second transfer rates over vast distances. 2. Immunity to Noise: Because light is non-electrical, optical fibers are completely immune to electromagnetic interference (EMI), radio frequency interference (RFI), and lightning surges.',
              type: 'Reasoning',
            },
          ],
          practiceExercises: [
            {
              question: 'Classify Google Drive, Microsoft Azure Virtual Machines, and Google App Engine into SaaS, IaaS, or PaaS.',
              hint: 'Identify which provides finished storage app, developer environment, or raw virtual machine.',
              answerGuide: 'Google Drive = SaaS; Azure Virtual Machines = IaaS; Google App Engine = PaaS.',
            },
          ],
        },
        quizQuestions: [
          {
            id: 'comp2-q1',
            type: 'mcq',
            question: 'Which network topology connects all client computers to a central switch or hub?',
            options: ['Bus Topology', 'Star Topology', 'Ring Topology', 'Linear Topology'],
            correctAnswer: 'Star Topology',
            explanation: 'In a Star topology, each node is connected point-to-point to a central network switch or hub.',
            difficulty: 'easy',
            marks: 1,
          },
          {
            id: 'comp2-q2',
            type: 'true_false',
            question: 'Fiber-optic cables transmit data using electrical voltages through copper wires.',
            correctAnswer: false,
            explanation: 'Fiber-optic cables transmit signals as pulses of light through ultra-pure glass or plastic cores using total internal reflection.',
            difficulty: 'easy',
            marks: 1,
          },
        ],
        flashcards: [
          {
            id: 'fc-cs2',
            subjectId: 'computer_studies',
            chapterId: 'comp-ch2',
            chapterTitle: 'Computer Networks',
            front: 'What does SaaS stand for in Cloud Computing?',
            back: 'Software as a Service (e.g., Google Docs, Microsoft 365, web applications).',
            category: 'Definition',
            importance: 'Essential',
          },
        ],
      },
    ],
  },
];
