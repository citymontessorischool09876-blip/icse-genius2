import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Bot,
  Eye,
  FileQuestion,
  Sparkles,
  TrendingUp,
  RefreshCw,
  ArrowRight,
  Compass,
  GraduationCap,
  HeartHandshake,
} from 'lucide-react';
import { Subject } from '../../types/index.ts';

interface AboutMeViewProps {
  subjects: Subject[];
  onNavigate: (view: string) => void;
  onAskAITutor: (context: any) => void;
}

const HERO_PARTICLES = [
  { top: '16%', left: '8%', size: 4, delay: '0s', duration: '8.5s' },
  { top: '28%', left: '84%', size: 5, delay: '1.2s', duration: '10.2s' },
  { top: '62%', left: '14%', size: 3, delay: '2.1s', duration: '9.4s' },
  { top: '74%', left: '78%', size: 4, delay: '0.6s', duration: '11.2s' },
  { top: '20%', left: '46%', size: 3, delay: '1.9s', duration: '9.8s' },
  { top: '82%', left: '42%', size: 4, delay: '2.8s', duration: '10.6s' },
  { top: '44%', left: '92%', size: 3, delay: '1.4s', duration: '8.9s' },
  { top: '50%', left: '6%', size: 4, delay: '3.1s', duration: '11.6s' },
];

export const AboutMeView: React.FC<AboutMeViewProps> = ({
  subjects,
  onNavigate,
  onAskAITutor,
}) => {
  const totalSubjects = subjects.length;
  const totalChapters = subjects.reduce((acc, s) => acc + s.chapters.length, 0);
  const totalQuestions = subjects.reduce(
    (acc, s) => acc + s.chapters.reduce((cAcc, ch) => cAcc + ch.quizQuestions.length, 0),
    0
  );
  const totalFlashcards = subjects.reduce(
    (acc, s) => acc + s.chapters.reduce((cAcc, ch) => cAcc + ch.flashcards.length, 0),
    0
  );

  const features = [
    {
      id: 'smart-notes',
      title: 'Smart Notes',
      description: 'Explore detailed chapter-wise notes for all 9 subjects.',
      icon: BookOpen,
      accentGradient: 'from-blue-600 to-indigo-600',
      glowColor: 'group-hover:shadow-blue-500/20',
      actionLabel: 'Open Subjects',
      onClick: () => onNavigate('subjects'),
    },
    {
      id: 'ai-tutor',
      title: 'AI Tutor',
      description: 'Get instant explanations and step-by-step learning assistance.',
      icon: Bot,
      accentGradient: 'from-indigo-600 to-violet-600',
      glowColor: 'group-hover:shadow-indigo-500/25',
      actionLabel: 'Ask AI Tutor',
      onClick: () =>
        onAskAITutor({
          query: 'Hello! Help me understand a Class 8 ICSE concept step-by-step.',
        }),
    },
    {
      id: 'visual-learning',
      title: 'Visual Learning',
      description: 'Understand difficult concepts through diagrams and animations.',
      icon: Eye,
      accentGradient: 'from-violet-600 to-purple-600',
      glowColor: 'group-hover:shadow-purple-500/25',
      actionLabel: 'Explore Diagrams',
      onClick: () => onNavigate('visual_learning'),
    },
    {
      id: 'quizzes-exams',
      title: 'Quizzes & Exams',
      description: 'Test your knowledge and prepare with mock examinations.',
      icon: FileQuestion,
      accentGradient: 'from-sky-600 to-blue-700',
      glowColor: 'group-hover:shadow-sky-500/20',
      actionLabel: 'Start Practice',
      onClick: () => onNavigate('mock_exams'),
    },
    {
      id: 'flashcards',
      title: 'Flashcards',
      description: 'Revise important concepts quickly.',
      icon: Sparkles,
      accentGradient: 'from-purple-600 to-fuchsia-600',
      glowColor: 'group-hover:shadow-fuchsia-500/20',
      actionLabel: 'Flip Flashcards',
      onClick: () => onNavigate('flashcards'),
    },
    {
      id: 'track-progress',
      title: 'Track Progress',
      description: 'Monitor your learning and celebrate achievements.',
      icon: TrendingUp,
      accentGradient: 'from-emerald-600 to-teal-600',
      glowColor: 'group-hover:shadow-emerald-500/20',
      actionLabel: 'View Progress',
      onClick: () => onNavigate('progress'),
    },
    {
      id: 'revision-centre',
      title: 'Revision Centre',
      description: 'Revisit important topics whenever you need.',
      icon: RefreshCw,
      accentGradient: 'from-[#1E3A8A] via-[#4F46E5] to-[#7C3AED]',
      glowColor: 'group-hover:shadow-indigo-500/25',
      actionLabel: 'Open Revision Centre',
      onClick: () => onNavigate('revision'),
    },
  ];

  const stats = [
    { label: 'Core ICSE Subjects', value: totalSubjects },
    { label: 'Verified Chapters', value: totalChapters },
    { label: 'Practice Quiz Items', value: totalQuestions },
    { label: 'Interactive Flashcards', value: totalFlashcards },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-16">
      {/* 1. Founder Profile Hero with Animated Gradient Backdrop & Subtle Particles */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#070E27] via-[#131C4E] to-[#2B1261] text-white border border-indigo-400/25 shadow-[0_24px_60px_rgba(15,23,42,0.28)] dark:shadow-[0_24px_70px_rgba(2,6,23,0.7)]"
      >
        {/* Animated Aurora Mesh & Light Orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -left-24 h-80 w-[34rem] rounded-full blur-3xl animate-aurora-drift"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.34) 0%, rgba(124, 58, 237, 0.18) 50%, transparent 75%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-3xl animate-orb-2"
          style={{
            background:
              'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(139, 92, 246, 0.18) 55%, transparent 80%)',
          }}
        />

        {/* Fine Geometric Orbital Pattern */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.09] text-indigo-200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="about-hero-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-hero-dots)" />
        </svg>

        {/* Floating Luminous Particles */}
        {HERO_PARTICLES.map((p, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="animate-particle pointer-events-none absolute rounded-full bg-indigo-200/80 shadow-[0_0_12px_rgba(165,180,252,0.85)] will-change-transform"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}

        {/* Hero Foreground Content */}
        <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            {/* Creator Emblem / Crest */}
            <div className="shrink-0 flex flex-col items-start lg:items-center">
              <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(124,58,237,0.45)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-1.5 rounded-2xl border border-indigo-300/25"
                />
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1 text-indigo-200">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-br from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent">
                    TPS
                  </span>
                </div>
              </div>
            </div>

            {/* Creator Details & Quote */}
            <div className="flex-1 min-w-0 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-indigo-200">
                <span>Founder &amp; Creator of ICSE Genius</span>
                <span aria-hidden="true">·</span>
                <span>Class 8 ICSE Learning Platform</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Tejasv Pratap Singh
              </h1>

              <p className="font-heading text-lg sm:text-xl font-semibold text-indigo-100/95 max-w-2xl">
                “A vision to transform the way students learn.”
              </p>

              <p className="text-sm sm:text-base text-indigo-100/85 leading-relaxed max-w-3xl">
                Welcome to ICSE Genius — a smarter learning destination designed to make education
                interactive, exciting and easier for every Class 8 ICSE student.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('subjects')}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#131C4E] shadow-lg shadow-black/20 hover:bg-indigo-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  Explore 9 Subjects
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() =>
                    onAskAITutor({
                      query: 'Hello! Introduce me to what ICSE Genius can help me learn today.',
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-white/12 hover:bg-white/20 backdrop-blur-md border border-white/25 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <Bot className="h-4 w-4 text-purple-200" />
                  Launch AI Tutor
                </button>
              </div>
            </div>
          </div>

          {/* Live Curriculum Snapshot Bar */}
          <div className="mt-10 pt-7 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-indigo-200/85 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 2. Explore What You Can Do — Interactive Animated Feature Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <p className="text-xs font-semibold text-indigo-600 dark:text-purple-300">
              Interactive Learning Ecosystem
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Explore What You Can Do
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Select any capability below to jump straight into that learning workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isFullSpan = idx === features.length - 1;
            return (
              <motion.button
                key={feature.id}
                type="button"
                onClick={feature.onClick}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.28,
                  delay: Math.min(idx * 0.045, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group text-left glass-card-interactive rounded-2xl p-6 flex ${
                  isFullSpan
                    ? 'md:col-span-2 lg:col-span-3 flex-col sm:flex-row sm:items-center justify-between gap-5'
                    : 'flex-col justify-between gap-5'
                } ${feature.glowColor}`}
              >
                <div
                  className={`flex ${
                    isFullSpan ? 'flex-col sm:flex-row sm:items-center gap-4' : 'flex-col gap-4'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accentGradient} text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-purple-300 whitespace-nowrap shrink-0 ${
                    isFullSpan ? '' : 'pt-1'
                  }`}
                >
                  <span>{feature.actionLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* 3. My Vision + The ICSE Genius Promise */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* My Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#1E3A8A] dark:bg-indigo-950/70 dark:text-indigo-300">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-indigo-600 dark:text-purple-300">
                  Guiding Purpose
                </p>
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
                  My Vision
                </h2>
              </div>
            </div>

            <blockquote className="font-heading text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
              “To make learning smarter, knowledge accessible and every student&apos;s educational
              journey more exciting through technology and AI.”
            </blockquote>
          </div>

          <div className="pt-5 border-t border-indigo-100/80 dark:border-indigo-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">Smarter Clarity</div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Structured chapter notes, solved steps, and visual explanations built for real comprehension.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">Always Accessible</div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Every core ICSE Class 8 subject unified cleanly across desktop, tablet, and mobile devices.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">AI-Powered Guidance</div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Instant step-by-step tutoring whenever curiosity strikes or a tricky question appears.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The ICSE Genius Promise Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F1E4D] via-[#3730A3] to-[#6D28D9] p-6 sm:p-8 text-white border border-indigo-300/25 shadow-[0_18px_45px_rgba(79,70,229,0.28)] flex flex-col justify-between gap-6"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-purple-400/20 blur-3xl animate-orb-1"
          />

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-indigo-200">
              <HeartHandshake className="h-4 w-4 text-purple-200 shrink-0" />
              <span>The ICSE Genius Promise</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-white">
              Learn Smarter.
              <br />
              Think Bigger.
              <br />
              Achieve Greater.
            </h2>
          </div>

          <div className="relative z-10 pt-5 border-t border-white/15 space-y-4">
            <p className="text-sm font-semibold text-indigo-100">
              Created with passion by <span className="text-white font-bold">Tejasv Pratap Singh</span>.
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => onNavigate('dashboard')}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-[#131C4E] hover:bg-indigo-50 transition-colors whitespace-nowrap shrink-0"
              >
                Back to Dashboard
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => onNavigate('quizzes')}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white/12 hover:bg-white/20 border border-white/25 px-4 py-2 text-xs font-semibold text-white transition-colors whitespace-nowrap shrink-0"
              >
                Try Chapter Quizzes
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
