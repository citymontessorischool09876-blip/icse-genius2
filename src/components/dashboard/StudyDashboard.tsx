import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  TrendingUp,
  ArrowRight,
  Flame,
  Target,
  Sparkles,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Landmark,
  Globe,
  PenTool,
  Monitor,
  Search,
  BarChart3,
  History,
  X,
  Bookmark,
  FileText,
  WifiOff,
  Cloud,
} from 'lucide-react';
import { StudentProfile, Subject, Chapter, SyncStatusState } from '../../types/index.ts';
import { StreakCard } from '../streak/StreakCard.tsx';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import { getNextStreakMilestone } from '../../utils/rules.ts';
import { loadMistakes, loadQuizAttempts } from '../../utils/storage.ts';

interface StudyDashboardProps {
  subjects?: Subject[];
  profile: StudentProfile;
  isOffline?: boolean;
  syncState?: SyncStatusState;
  pendingSyncCount?: number;
  onOpenStreak: () => void;
  onSelectChapter: (chapter: Chapter, opts?: { resumeTopicId?: string }) => void;
  onSelectSubject: (subject: Subject) => void;
  onNavigate: (view: string) => void;
  onQuickStreakActivity: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Landmark,
  Globe,
  BookOpen,
  PenTool,
  Monitor,
};

export const StudyDashboard: React.FC<StudyDashboardProps> = ({
  subjects = ICSE_SUBJECTS,
  profile,
  isOffline = false,
  syncState = 'online',
  pendingSyncCount = 0,
  onOpenStreak,
  onSelectChapter,
  onSelectSubject,
  onNavigate,
  onQuickStreakActivity,
}) => {
  const [heroQuery, setHeroQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  // Aggregate statistics across all 9 subjects
  const allChapters: Chapter[] = useMemo(
    () => subjects.flatMap((s) => s.chapters),
    [subjects]
  );
  const totalChaptersCount = allChapters.length;
  const completedCount = profile.completedChapterIds.length;
  const remainingCount = Math.max(0, totalChaptersCount - completedCount);
  const overallPercentage = Math.round((completedCount / (totalChaptersCount || 1)) * 100);

  // Last visited chapter + exact topic position for "Continue Learning"
  const continueChapter =
    (profile.lastVisitedChapterId
      ? allChapters.find((c) => c.id === profile.lastVisitedChapterId)
      : undefined) ||
    allChapters.find((c) => !profile.completedChapterIds.includes(c.id)) ||
    allChapters[0];
  const continueSubject = subjects.find((s) => s.id === continueChapter?.subjectId);
  const isResumingVisited =
    Boolean(continueChapter && continueChapter.id === profile.lastVisitedChapterId);
  const savedTopic =
    isResumingVisited && profile.lastVisitedTopicId && continueChapter
      ? continueChapter.notes.topics.find((t) => t.id === profile.lastVisitedTopicId)
      : undefined;
  const continueProgressPct = continueChapter
    ? profile.readingProgress[continueChapter.id] || 0
    : 0;

  // Recently studied chapters resolved from profile.recentChapterIds
  const recentChapters = useMemo(() => {
    const ids = profile.recentChapterIds || [];
    const list: Array<{ chapter: Chapter; subject: Subject; pct: number }> = [];
    for (const id of ids) {
      const ch = allChapters.find((c) => c.id === id);
      const sub = ch ? subjects.find((s) => s.id === ch.subjectId) : undefined;
      if (ch && sub) {
        list.push({
          chapter: ch,
          subject: sub,
          pct: profile.readingProgress[ch.id] || 0,
        });
      }
      if (list.length >= 4) break;
    }
    return list;
  }, [profile.recentChapterIds, profile.readingProgress, allChapters, subjects]);

  const quizAttempts = useMemo(() => loadQuizAttempts(), [profile.xp, profile.lastActiveDate]);
  const mistakes = useMemo(() => loadMistakes(), [profile.xp]);

  // Compute strong chapters/topics from real quiz attempts (score >= 80%)
  const strongTopics = useMemo(() => {
    const bestByChapter = new Map<string, { label: string; pct: number; chapter?: Chapter }>();
    for (const attempt of quizAttempts) {
      if (attempt.percentage >= 80) {
        const ch = allChapters.find((c) => c.id === attempt.chapterId);
        const existing = bestByChapter.get(attempt.chapterId);
        if (!existing || attempt.percentage > existing.pct) {
          bestByChapter.set(attempt.chapterId, {
            label: ch ? `Ch ${ch.chapterNumber}: ${ch.title}` : attempt.chapterId,
            pct: attempt.percentage,
            chapter: ch,
          });
        }
      }
    }
    return Array.from(bestByChapter.values()).slice(0, 3);
  }, [quizAttempts, allChapters]);

  // Compute topics to revise from real unmastered mistakes or lower quiz scores
  const reviseTopics = useMemo(() => {
    const unmastered = mistakes.filter((m) => !m.mastered).slice(0, 3);
    return unmastered.map((m) => ({
      id: m.id,
      label: `${m.chapterTitle}: ${m.questionText}`,
    }));
  }, [mistakes]);

  const personalNotesList = useMemo(() => {
    return Object.entries(profile.personalNotes || {})
      .filter(([, text]) => Boolean(text && text.trim()))
      .map(([chId, text]) => {
        const ch = allChapters.find((c) => c.id === chId);
        return { chId, chapter: ch, title: ch ? `Ch ${ch.chapterNumber}: ${ch.title}` : chId, text };
      });
  }, [profile.personalNotes, allChapters]);

  const dailyGoalPct = Math.min(
    100,
    Math.round((profile.todayStudyMinutes / Math.max(1, profile.dailyGoalMinutes)) * 100)
  );
  const nextMilestoneInfo = getNextStreakMilestone(profile.streak);

  // SVG circular progress ring geometry for Daily Goal
  const ringRadius = 30;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringOffset = ringCircumference * (1 - dailyGoalPct / 100);

  // Live instant search across subjects, chapters & topics
  const heroSearchResults = useMemo(() => {
    const q = heroQuery.trim().toLowerCase();
    if (!q) return [];
    const matches: Array<{
      id: string;
      title: string;
      subtitle: string;
      chapter: Chapter;
      subject: Subject;
    }> = [];

    subjects.forEach((sub) => {
      sub.chapters.forEach((ch) => {
        const hitChapter =
          ch.title.toLowerCase().includes(q) ||
          ch.subtitle.toLowerCase().includes(q) ||
          sub.name.toLowerCase().includes(q);
        const hitTopic = ch.notes.topics.find(
          (t) =>
            t.title.toLowerCase().includes(q) ||
            t.definitions?.some((d) => d.term.toLowerCase().includes(q)) ||
            t.formulas?.some((f) => f.formula.toLowerCase().includes(q))
        );
        if (hitChapter || hitTopic) {
          matches.push({
            id: ch.id,
            title: `Chapter ${ch.chapterNumber}: ${ch.title}`,
            subtitle: hitTopic ? `${sub.name} · Topic: ${hitTopic.title}` : `${sub.name} · ${ch.subtitle}`,
            chapter: ch,
            subject: sub,
          });
        }
      });
    });
    return matches.slice(0, 6);
  }, [heroQuery, subjects]);

  // Real recent activities aggregated from completed chapters, quiz attempts, and streak
  const recentActivities = useMemo(() => {
    const list: Array<{
      id: string;
      title: string;
      meta: string;
      xp: string;
      type: 'quiz' | 'chapter' | 'streak';
      chapter?: Chapter;
    }> = [];

    quizAttempts.slice(0, 3).forEach((attempt) => {
      const ch = allChapters.find((c) => c.id === attempt.chapterId);
      const sub = subjects.find((s) => s.id === attempt.subjectId);
      list.push({
        id: attempt.id,
        title: `Completed Quiz: ${ch ? ch.title : attempt.chapterId}`,
        meta: `${sub?.name || 'Subject'} · Score ${attempt.correctAnswers}/${attempt.totalQuestions} (${attempt.percentage}%)`,
        xp: `+${Math.max(20, attempt.correctAnswers * 10)} XP`,
        type: 'quiz',
        chapter: ch,
      });
    });

    profile.completedChapterIds.slice(-3).reverse().forEach((chId) => {
      const ch = allChapters.find((c) => c.id === chId);
      const sub = subjects.find((s) => s.id === ch?.subjectId);
      if (ch) {
        list.push({
          id: `comp-${ch.id}`,
          title: `Completed Chapter ${ch.chapterNumber}: ${ch.title}`,
          meta: `${sub?.name || 'Subject'} · Detailed notes & examples mastered`,
          xp: '+75 XP',
          type: 'chapter',
          chapter: ch,
        });
      }
    });

    list.push({
      id: 'streak-log',
      title: `${profile.streak}-Day Learning Streak`,
      meta: `${profile.lastActiveDate ? `Last active ${profile.lastActiveDate}` : 'Start reading to ignite your streak'} · Goal ${profile.todayStudyMinutes}/${profile.dailyGoalMinutes}m`,
      xp: `${profile.xp} XP Total`,
      type: 'streak',
    });

    return list.slice(0, 4);
  }, [allChapters, subjects, quizAttempts, profile.completedChapterIds, profile.streak, profile.lastActiveDate, profile.todayStudyMinutes, profile.dailyGoalMinutes, profile.xp]);

  return (
    <div className="space-y-8 pb-12">
      {/* 1. IMPRESSIVE ANIMATED HOMEPAGE HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#080F28] via-[#171C54] to-[#4C1D95] p-6 sm:p-8 lg:p-9 text-white shadow-2xl border border-indigo-400/25"
      >
        <div
          aria-hidden="true"
          className="animate-orb-1 pointer-events-none absolute -right-14 -top-16 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-orb-2 pointer-events-none absolute -left-16 -bottom-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-6 h-44 w-44 text-indigo-200/10 hidden md:block"
          viewBox="0 0 180 180"
          fill="none"
        >
          <circle cx="90" cy="90" r="72" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <ellipse cx="90" cy="90" rx="76" ry="26" transform="rotate(-25 90 90)" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="90" cy="90" rx="76" ry="26" transform="rotate(35 90 90)" stroke="currentColor" strokeWidth="1" />
          <circle cx="90" cy="90" r="5" fill="currentColor" />
        </svg>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Welcome + Large Interactive Search Bar */}
          <div className="lg:col-span-8 space-y-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-indigo-200/95">
                <span>{profile.school}</span>
                <span>&bull;</span>
                <span>{profile.grade} ({profile.section})</span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1 text-emerald-300">
                  {isOffline ? (
                    <>
                      <WifiOff className="h-3.5 w-3.5 text-amber-300" />
                      <span className="text-amber-200">Offline Study Mode</span>
                    </>
                  ) : syncState === 'syncing' || pendingSyncCount > 0 ? (
                    <>
                      <Cloud className="h-3.5 w-3.5 text-sky-300" />
                      <span className="text-sky-200">Syncing to Cloud...</span>
                    </>
                  ) : (
                    <>
                      <Cloud className="h-3.5 w-3.5 text-emerald-300" />
                      <span>Cloud Synced</span>
                    </>
                  )}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mt-1.5 tracking-tight">
                Welcome back, {profile.name}
              </h1>
              <p className="text-xs sm:text-sm text-indigo-100/85 mt-1.5 max-w-2xl">
                Class 8 ICSE Board Preparation · Interactive chapters, visual labs, flashcards, offline packs, and AI tutoring tailored for CMS Lucknow.
              </p>
            </div>

            {/* Large Hero Search Bar with Instant Live Results */}
            <div className="relative max-w-2xl">
              <div className="flex items-center gap-2 rounded-2xl bg-white/12 hover:bg-white/15 focus-within:bg-white/18 backdrop-blur-xl border border-white/25 focus-within:border-indigo-300 px-4 py-2.5 shadow-lg transition-all duration-200">
                <Search className="h-5 w-5 text-indigo-200 shrink-0" />
                <input
                  type="text"
                  value={heroQuery}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 180)}
                  onChange={(e) => setHeroQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && heroSearchResults.length > 0) {
                      onSelectChapter(heroSearchResults[0].chapter);
                      setHeroQuery('');
                    }
                  }}
                  placeholder="Search Class 8 chapters, formulas, diagrams, or definitions..."
                  aria-label="Search Class 8 curriculum"
                  className="flex-1 bg-transparent text-sm text-white placeholder-indigo-200/75 focus:outline-none min-w-0"
                />
                {heroQuery && (
                  <button
                    type="button"
                    onClick={() => setHeroQuery('')}
                    className="p-1 rounded-lg text-indigo-200 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Clear hero search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onNavigate('search')}
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-white text-[#1E1B4B] hover:bg-indigo-50 px-3.5 py-1.5 text-xs font-bold shadow-sm transition-all active:scale-95 whitespace-nowrap shrink-0"
                >
                  Smart Search
                </button>
              </div>

              {/* Live Dropdown Results */}
              {searchFocused && heroQuery.trim().length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 z-30 rounded-2xl glass-card p-2 shadow-2xl border border-indigo-200 dark:border-indigo-500/40 max-h-72 overflow-y-auto">
                  {heroSearchResults.length === 0 ? (
                    <div className="p-3 text-xs text-slate-600 dark:text-slate-300 text-center">
                      No direct chapter match for &quot;{heroQuery}&quot;. Press Smart Search to explore definitions &amp; questions.
                    </div>
                  ) : (
                    heroSearchResults.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onMouseDown={() => {
                          onSelectChapter(item.chapter);
                          setHeroQuery('');
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/60 flex items-center justify-between gap-3 transition-colors"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-indigo-600 dark:text-purple-300 truncate">
                            {item.subtitle}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-indigo-500 shrink-0" />
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Daily Study Goal Ring + Quick XP */}
          <div className="lg:col-span-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-18 w-18 shrink-0 flex items-center justify-center">
                <svg className="h-18 w-18 -rotate-90" viewBox="0 0 72 72">
                  <circle
                    cx="36"
                    cy="36"
                    r={ringRadius}
                    fill="none"
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="36"
                    cy="36"
                    r={ringRadius}
                    fill="none"
                    stroke="url(#dailyGoalGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={ringCircumference}
                    initial={{ strokeDashoffset: ringCircumference }}
                    animate={{ strokeDashoffset: ringOffset }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <defs>
                    <linearGradient id="dailyGoalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#C084FC" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute text-xs font-extrabold text-white tabular-nums">
                  {dailyGoalPct}%
                </span>
              </div>

              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-200">
                  Daily Study Goal
                </div>
                <div className="text-lg font-extrabold font-heading text-white tabular-nums mt-0.5">
                  {profile.todayStudyMinutes} / {profile.dailyGoalMinutes} mins
                </div>
                <p className="text-[11px] text-indigo-100/80 mt-0.5">
                  Keep studying to hit today’s target
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => onNavigate('planner')}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-white/14 hover:bg-white/22 border border-white/20 px-3 py-2 text-xs font-semibold text-white transition-all whitespace-nowrap tabular-nums"
              >
                <Target className="h-3.5 w-3.5 text-sky-300" />
                Study Planner
              </button>
              <button
                onClick={() => onNavigate('achievements')}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:brightness-105 px-3 py-2 text-xs font-bold text-slate-950 shadow-md transition-all whitespace-nowrap tabular-nums"
              >
                <Sparkles className="h-3.5 w-3.5" />
                {profile.xp} XP Points
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. PROMINENT DAILY LEARNING STREAK COUNTER */}
      <motion.section
        aria-labelledby="streak-heading"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <StreakCard
          profile={profile}
          onQuickActivity={onQuickStreakActivity}
          onOpenDetails={onOpenStreak}
        />
      </motion.section>

      {/* 3. TOP 4 CORE ANIMATED METRICS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.06 }}
          className="glass-card-interactive rounded-2xl p-5"
        >
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-medium">Completed Chapters</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tabular-nums">
              {overallPercentage}%
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              ({completedCount}/{totalChaptersCount})
            </span>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-indigo-100/80 dark:bg-indigo-950/60 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallPercentage}%` }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#4F46E5] progress-animated"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.1 }}
          className="glass-card-interactive rounded-2xl p-5"
        >
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-medium">Remaining Chapters</span>
            <BookOpen className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tabular-nums">
              {remainingCount}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Chapters left
            </span>
          </div>
          <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
            CMS Half-Yearly &amp; Annual syllabus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.14 }}
          className="glass-card-interactive rounded-2xl p-5"
        >
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-medium">Quizzes &amp; Bookmarks</span>
            <Bookmark className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tabular-nums">
              {quizAttempts.length}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              quizzes · {profile.bookmarks.length} bookmarks
            </span>
          </div>
          <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">
            {(profile.savedFlashcardIds || []).length} saved flashcards · {personalNotesList.length} notes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.18 }}
          className="glass-card-interactive rounded-2xl p-5"
        >
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-medium">Badges Earned</span>
            <Award className="h-4 w-4 text-amber-500" />
          </div>
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tabular-nums">
              {profile.badges.length}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              achievements unlocked
            </span>
          </div>
          <p className="mt-3 text-[11px] text-indigo-600 dark:text-purple-300 font-semibold truncate">
            {nextMilestoneInfo.nextMilestone
              ? `Next: ${nextMilestoneInfo.nextMilestone.badgeTitle}`
              : 'All streak milestones unlocked!'}
          </p>
        </motion.div>
      </div>

      {/* 4. CONTINUE LEARNING SPOTLIGHT (EXACT SAVED CHAPTER & TOPIC) */}
      {continueChapter && continueSubject && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.12 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F1E4D] via-[#312E81] to-[#6D28D9] p-6 sm:p-7 text-white shadow-xl border border-indigo-400/25 group"
        >
          <div
            aria-hidden="true"
            className="animate-orb-1 pointer-events-none absolute -right-12 -bottom-16 h-48 w-48 rounded-full bg-purple-400/25 blur-3xl"
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-indigo-200">
                <span>
                  {isResumingVisited ? 'Continue Learning' : 'Recommended Next Chapter'} · {continueSubject.name}
                </span>
                {continueProgressPct > 0 && (
                  <span className="px-2 py-0.5 rounded-lg bg-white/15 text-white tabular-nums">
                    {continueProgressPct}% Read
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Chapter {continueChapter.chapterNumber}: {continueChapter.title}
              </h2>
              <p className="text-xs sm:text-sm text-indigo-100/90 max-w-2xl">
                {savedTopic
                  ? `Resume exact topic: Topic 3.${(profile.lastVisitedTopicIndex ?? 0) + 1} — ${savedTopic.title}`
                  : continueChapter.subtitle}
              </p>
            </div>

            <button
              onClick={() =>
                onSelectChapter(continueChapter, {
                  resumeTopicId: savedTopic?.id,
                })
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#1E1B4B] hover:bg-indigo-50 px-5 py-3 text-xs sm:text-sm font-bold shadow-lg hover:-translate-y-0.5 transition-all active:scale-95 shrink-0 whitespace-nowrap"
            >
              {savedTopic ? 'Resume Exact Topic' : 'Resume Reading'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>
      )}

      {/* RECENTLY STUDIED CHAPTERS */}
      {recentChapters.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <History className="h-4 w-4 text-indigo-600 dark:text-purple-300" />
              Recently Studied Chapters
            </h2>
            <button
              type="button"
              onClick={() => onNavigate('subjects')}
              className="text-xs font-semibold text-indigo-600 dark:text-purple-300 hover:underline"
            >
              Browse All Subjects →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {recentChapters.map(({ chapter, subject, pct }) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() =>
                  onSelectChapter(chapter, {
                    resumeTopicId:
                      chapter.id === profile.lastVisitedChapterId
                        ? profile.lastVisitedTopicId
                        : undefined,
                  })
                }
                className="text-left glass-card-interactive rounded-2xl p-4 space-y-2.5"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-indigo-600 dark:text-purple-300">
                  <span>{subject.name}</span>
                  <span className="tabular-nums">{pct}%</span>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                  Ch {chapter.chapterNumber}: {chapter.title}
                </div>
                <div className="h-1.5 w-full rounded-full bg-indigo-100/80 dark:bg-indigo-950/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 5. ANIMATED SUBJECT MASTERY CHART + RECENT ACTIVITIES FEED */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 glass-card rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-indigo-600 dark:text-purple-300" />
              <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
                Subject Mastery Analytics
              </h3>
            </div>
            <span className="text-xs font-semibold text-indigo-600 dark:text-purple-300 tabular-nums">
              {overallPercentage}% Overall
            </span>
          </div>

          <div className="space-y-3">
            {subjects.map((sub, idx) => {
              const completedInSub = sub.chapters.filter((c) =>
                profile.completedChapterIds.includes(c.id)
              ).length;
              const avgReading = Math.round(
                sub.chapters.reduce(
                  (acc, ch) => acc + (profile.readingProgress[ch.id] || 0),
                  0
                ) / Math.max(1, sub.chapters.length)
              );
              const pct = Math.max(
                avgReading,
                Math.round((completedInSub / Math.max(1, sub.chapters.length)) * 100)
              );

              return (
                <div key={sub.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => onSelectSubject(sub)}
                      className="font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-purple-300 transition-colors truncate"
                    >
                      {sub.name}
                    </button>
                    <span className="text-[11px] font-bold text-indigo-600 dark:text-purple-300 tabular-nums">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-indigo-100/70 dark:bg-indigo-950/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{
                        duration: 0.65,
                        delay: 0.04 * idx,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#1E3A8A] via-[#4F46E5] to-[#7C3AED]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activities & Last Quiz Scores */}
        <div className="lg:col-span-5 glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <History className="h-4 w-4 text-purple-600 dark:text-purple-300" />
                <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
                  Recent Quizzes &amp; Activity
                </h3>
              </div>
              <button
                type="button"
                onClick={onOpenStreak}
                className="text-[11px] font-semibold text-indigo-600 dark:text-purple-300 hover:underline"
              >
                Streak Log
              </button>
            </div>

            <div className="space-y-2.5">
              {recentActivities.map((act) => (
                <div
                  key={act.id}
                  onClick={() => {
                    if (act.chapter) onSelectChapter(act.chapter);
                    else onOpenStreak();
                  }}
                  className="cursor-pointer p-3 rounded-xl glass-surface-blue hover:border-indigo-400 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <div
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                        act.type === 'quiz'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : act.type === 'chapter'
                          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                      }`}
                    >
                      {act.type === 'quiz' ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : act.type === 'chapter' ? (
                        <BookOpen className="h-3.5 w-3.5" />
                      ) : (
                        <Flame className="h-3.5 w-3.5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-purple-300 truncate transition-colors">
                        {act.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {act.meta}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-purple-300 shrink-0 tabular-nums">
                    {act.xp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. COMPUTED PERFORMANCE, SAVED BOOKMARKS/NOTES & MOCK TESTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Strong Topics from Real Quiz Scores */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3.5">
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
              Strong Topics (80%+ Quiz Score)
            </h3>
          </div>
          {strongTopics.length > 0 ? (
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              {strongTopics.map((st, idx) => (
                <li
                  key={idx}
                  onClick={() => st.chapter && onSelectChapter(st.chapter)}
                  className="cursor-pointer flex items-center justify-between gap-2 p-2.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/25 border border-emerald-200/70 dark:border-emerald-900/40"
                >
                  <span className="font-medium truncate">{st.label}</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold tabular-nums shrink-0">
                    {st.pct}%
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-3.5 rounded-xl glass-surface-blue text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <p>Score 80%+ on any chapter quiz to showcase your mastered Class 8 topics here.</p>
              <button
                type="button"
                onClick={() => onNavigate('quizzes')}
                className="text-indigo-600 dark:text-purple-300 font-bold hover:underline"
              >
                Explore Chapter Quizzes →
              </button>
            </div>
          )}
        </div>

        {/* Saved Bookmarks & Personal Notes */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-indigo-500" />
              <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
                Saved Bookmarks &amp; Notes
              </h3>
            </div>
            {reviseTopics.length > 0 && (
              <button
                type="button"
                onClick={() => onNavigate('mistakes')}
                className="text-[11px] font-bold text-amber-600 dark:text-amber-300 hover:underline"
              >
                {reviseTopics.length} to revise
              </button>
            )}
          </div>

          {profile.bookmarks.length === 0 && personalNotesList.length === 0 ? (
            <div className="p-3.5 rounded-xl glass-surface-blue text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <p>Bookmark chapters, save flashcards, or write personal study notes while reading to quick-jump back anytime.</p>
              {reviseTopics.length > 0 && (
                <button
                  type="button"
                  onClick={() => onNavigate('mistakes')}
                  className="text-indigo-600 dark:text-purple-300 font-bold hover:underline"
                >
                  Open Mistake Notebook →
                </button>
              )}
            </div>
          ) : (
            <ul className="space-y-2 text-xs">
              {profile.bookmarks.slice(0, 2).map((bm) => {
                const ch = allChapters.find((c) => c.id === bm.chapterId);
                return (
                  <li key={bm.id}>
                    <button
                      type="button"
                      onClick={() => ch && onSelectChapter(ch)}
                      className="w-full text-left p-2.5 rounded-xl glass-surface-blue hover:border-indigo-400 flex items-center justify-between gap-2"
                    >
                      <span className="font-semibold text-slate-900 dark:text-white truncate">
                        {bm.title}
                      </span>
                      <Bookmark className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                    </button>
                  </li>
                );
              })}
              {personalNotesList.slice(0, 2).map((n) => (
                <li key={n.chId}>
                  <button
                    type="button"
                    onClick={() => n.chapter && onSelectChapter(n.chapter)}
                    className="w-full text-left p-2.5 rounded-xl glass-surface-blue hover:border-indigo-400"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white truncate">
                      Note: {n.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {n.text}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Upcoming Mock Tests */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3.5">
            <Clock className="h-4 w-4 text-indigo-600 dark:text-purple-400" />
            <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
              ICSE Mock Examinations
            </h3>
          </div>
          <div className="space-y-2.5 text-xs">
            <button
              type="button"
              onClick={() => onNavigate('mock_exams')}
              className="w-full text-left p-3 rounded-xl glass-surface-blue hover:border-indigo-400 transition-colors"
            >
              <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white">
                <span>CMS Half-Yearly Mathematics Mock</span>
                <span className="text-indigo-600 dark:text-purple-300 shrink-0 ml-2">Start</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                80 Marks · Timed ICSE Board Format
              </p>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('mock_exams')}
              className="w-full text-left p-3 rounded-xl glass-surface-blue hover:border-indigo-400 transition-colors"
            >
              <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white">
                <span>Physics &amp; Chemistry Combined Test</span>
                <span className="text-indigo-600 dark:text-purple-300 shrink-0 ml-2">Start</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                50 Marks · Theory &amp; Numericals
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* 7. ALL 9 FLOATING SUBJECT CARDS GRID */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
              All Nine ICSE Subjects
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Standard CMS Lucknow Class 8 Academic Syllabus
            </p>
          </div>
          <button
            onClick={() => onNavigate('subjects')}
            className="text-xs font-semibold text-indigo-600 dark:text-purple-300 hover:underline whitespace-nowrap shrink-0"
          >
            View All Subjects →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject, idx) => {
            const Icon = ICON_MAP[subject.iconName] || BookOpen;
            const completedInSub = subject.chapters.filter((c) =>
              profile.completedChapterIds.includes(c.id)
            ).length;
            const subPercent = Math.round((completedInSub / (subject.chapters.length || 1)) * 100);

            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.28,
                  delay: Math.min(idx * 0.04, 0.32),
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5 }}
                onClick={() => onSelectSubject(subject)}
                className="group cursor-pointer glass-card-interactive rounded-2xl p-5"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${subject.colorScheme.bgBadge} ${subject.colorScheme.secondary} border ${subject.colorScheme.border} group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                    {subject.chapters.length} {subject.chapters.length === 1 ? 'Chapter' : 'Chapters'}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold font-heading text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-purple-300 transition-colors">
                  {subject.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {subject.description}
                </p>

                <div className="mt-4 pt-3 border-t border-indigo-100/70 dark:border-indigo-900/40 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 tabular-nums">
                    {completedInSub} completed
                  </span>
                  <span className="font-semibold text-indigo-600 dark:text-purple-300 tabular-nums">
                    {subPercent}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-indigo-100/80 dark:bg-indigo-950/60 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${subPercent}%` }}
                    transition={{ duration: 0.7, delay: 0.1 + idx * 0.03 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
