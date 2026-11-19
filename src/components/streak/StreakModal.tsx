import React, { useEffect } from 'react';
import { X, Flame, Award, Crown, CheckCircle2, Sparkles, BookOpen, FileQuestion } from 'lucide-react';
import { StudentProfile } from '../../types/index.ts';
import { STREAK_MILESTONES, getNextStreakMilestone } from '../../utils/rules.ts';

interface StreakModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onTriggerActivity: (type: 'read_chapter' | 'complete_quiz' | 'practice_flashcards') => void;
}

export const StreakModal: React.FC<StreakModalProps> = ({
  isOpen,
  onClose,
  profile,
  onTriggerActivity,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];
  const isActiveToday = profile.lastActiveDate === today;
  const { nextMilestone, daysRemaining } = getNextStreakMilestone(profile.streak);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070B19]/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl rounded-3xl glass-card shadow-2xl p-6 sm:p-7 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
          aria-label="Close streak modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/25">
            <Flame className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
              ICSE Daily Learning Streak
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Build unstoppable academic momentum for Class 8 ICSE board success.
            </p>
          </div>
        </div>

        {/* Current status banner */}
        <div className="rounded-2xl p-5 mb-6 bg-gradient-to-br from-[#0A1128] via-[#1B1F5C] to-[#3B1775] text-white border border-indigo-500/30 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">
                Current Learning Streak
              </span>
              <div className="text-3xl font-extrabold text-white font-heading mt-0.5 tabular-nums">
                {profile.streak} Consecutive {profile.streak === 1 ? 'Day' : 'Days'}
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                {isActiveToday ? 'Today Complete' : 'Active Learning Needed'}
              </span>
              <p className="text-[11px] text-indigo-200/80 mt-1.5">
                Last recorded: {profile.lastActiveDate || 'Today'}
              </p>
            </div>
          </div>
        </div>

        {/* Rules & mechanics */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
            How the Streak System Works:
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Earn 1 streak point daily:</strong> Log in and complete at least one genuine learning activity: read a chapter, finish a quiz, or test flashcards.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Zero fake clicks:</strong> Meaningful reading and quiz submissions are tracked to ensure points reflect actual subject preparation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Milestone Badges:</strong> Reach 7, 30, and 90 continuous days to unlock exclusive badges and bonus XP on your student profile.
              </span>
            </li>
          </ul>
        </div>

        {/* Milestone Badges */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Streak Milestone Badges
            </h3>
            {nextMilestone && (
              <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 tabular-nums">
                {daysRemaining} days to {nextMilestone.days}-day badge
              </span>
            )}
          </div>

          <div className="space-y-2.5">
            {STREAK_MILESTONES.map((m) => {
              const isUnlocked = profile.streak >= m.days;
              return (
                <div
                  key={m.badgeId}
                  className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all ${
                    isUnlocked
                      ? 'bg-amber-50/90 dark:bg-amber-950/25 border-amber-300 dark:border-amber-700/70'
                      : 'glass-surface-blue opacity-90'
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${
                      isUnlocked
                        ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30'
                        : 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-400'
                    }`}
                  >
                    {m.days === 7 ? <Flame className="h-5 w-5" /> : m.days === 30 ? <Award className="h-5 w-5" /> : <Crown className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {m.badgeTitle} ({m.days}-Day Streak)
                      </h4>
                      <span
                        className={`text-[11px] font-semibold tabular-nums shrink-0 ${
                          isUnlocked
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {isUnlocked ? 'Awarded' : `${m.days - profile.streak} days to go`}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {m.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick action buttons to do an activity right now */}
        <div className="pt-4 border-t border-indigo-100/80 dark:border-indigo-500/20">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5">
            Complete a Learning Activity Today:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              onClick={() => {
                onTriggerActivity('read_chapter');
                onClose();
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs font-semibold glass-surface-blue text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 transition-colors"
            >
              <BookOpen className="h-3.5 w-3.5" /> Read Chapter Note
            </button>
            <button
              onClick={() => {
                onTriggerActivity('complete_quiz');
                onClose();
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/40 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors"
            >
              <FileQuestion className="h-3.5 w-3.5" /> Take a Chapter Quiz
            </button>
            <button
              onClick={() => {
                onTriggerActivity('practice_flashcards');
                onClose();
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs font-semibold btn-royal"
            >
              <Sparkles className="h-3.5 w-3.5" /> Flashcard Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
