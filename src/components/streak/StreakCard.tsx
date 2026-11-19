import React from 'react';
import { Flame, Award, Crown, CheckCircle2, AlertCircle, Sparkles, ChevronRight } from 'lucide-react';
import { StudentProfile } from '../../types/index.ts';
import { STREAK_MILESTONES, getNextStreakMilestone } from '../../utils/rules.ts';
import confetti from 'canvas-confetti';

interface StreakCardProps {
  profile: StudentProfile;
  onQuickActivity?: () => void;
  onOpenDetails?: () => void;
}

export const StreakCard: React.FC<StreakCardProps> = ({ profile, onQuickActivity, onOpenDetails }) => {
  const today = new Date().toISOString().split('T')[0];
  const isActiveToday = profile.lastActiveDate === today;
  const { nextMilestone, daysRemaining, progressPercent } = getNextStreakMilestone(profile.streak);

  const handleCelebrate = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f97316', '#3b82f6', '#10b981', '#eab308'],
    });
    if (onOpenDetails) onOpenDetails();
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1128] via-[#1B1F5C] to-[#3B1775] p-6 sm:p-7 text-white shadow-xl border border-indigo-400/25">
      {/* Background ambient lighting */}
      <div className="animate-orb-1 absolute -right-10 -top-10 h-52 w-52 rounded-full bg-purple-500/25 blur-3xl pointer-events-none" />
      <div className="animate-orb-2 absolute -left-10 -bottom-10 h-52 w-52 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Main streak metric block */}
          <div className="flex items-center gap-4">
            <div
              onClick={handleCelebrate}
              className={`relative flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-2xl shadow-inner transition-transform duration-200 hover:scale-105 ${
                isActiveToday
                  ? 'bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 text-white shadow-orange-500/40'
                  : 'bg-white/10 backdrop-blur-md text-amber-300 border border-white/20'
              }`}
              title="Click to celebrate your streak!"
            >
              <Flame className={`h-9 w-9 ${isActiveToday ? 'animate-bounce drop-shadow-md' : ''}`} />
              <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0A1128] text-[10px] font-bold text-amber-300 border border-amber-400/50">
                XP
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold tracking-wide text-indigo-200">
                  Daily Learning Streak
                </span>
                <span aria-hidden="true" className="text-indigo-400">·</span>
                {isActiveToday ? (
                  <span className="inline-flex items-center gap-1 font-medium text-emerald-300">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Safe Today
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 font-medium text-amber-300">
                    <AlertCircle className="h-3.5 w-3.5" /> Complete an activity to maintain
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-4xl font-extrabold tracking-tight font-heading text-white tabular-nums">
                  {profile.streak}
                </span>
                <span className="text-lg font-medium text-indigo-100/90">
                  {profile.streak === 1 ? 'Day Active' : 'Days Streak'}
                </span>
              </div>

              <p className="text-xs text-indigo-100/80 mt-0.5">
                {isActiveToday
                  ? 'Great dedication! Today’s learning point has been credited to your streak.'
                  : 'Log in and read any chapter note or take a quiz to extend your streak for today!'}
              </p>
            </div>
          </div>

          {/* Action and milestone quick summary */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {!isActiveToday && onQuickActivity && (
              <button
                onClick={onQuickActivity}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-amber-600 hover:to-orange-600 active:scale-95 whitespace-nowrap"
              >
                <Sparkles className="h-4 w-4" />
                Complete Today's Activity
              </button>
            )}

            <button
              onClick={onOpenDetails}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/18 backdrop-blur-md px-4 py-2.5 text-xs font-medium text-white border border-white/20 transition-colors whitespace-nowrap"
            >
              <span>Milestones & Badges</span>
              <ChevronRight className="h-3.5 w-3.5 text-indigo-200" />
            </button>
          </div>
        </div>

        {/* Milestone Progress Bar */}
        {nextMilestone && (
          <div className="mt-5 border-t border-white/12 pt-4">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-indigo-100/90 flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                Next Milestone: <strong className="text-white">{nextMilestone.badgeTitle}</strong> ({nextMilestone.days} Days)
              </span>
              <span className="text-amber-300 font-semibold tabular-nums">
                {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} left
              </span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 progress-animated transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* 3 Milestone Badges Showcase */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {STREAK_MILESTONES.map((m) => {
            const isUnlocked = profile.streak >= m.days;
            return (
              <div
                key={m.badgeId}
                className={`flex items-center gap-3 rounded-2xl p-3 transition-colors border backdrop-blur-sm ${
                  isUnlocked
                    ? 'bg-amber-400/15 border-amber-300/35 text-amber-100'
                    : 'bg-white/6 border-white/12 text-indigo-200/80'
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isUnlocked ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-white/10 text-indigo-200'
                  }`}
                >
                  {m.days === 7 ? <Flame className="h-4 w-4" /> : m.days === 30 ? <Award className="h-4 w-4" /> : <Crown className="h-4 w-4" />}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold truncate text-white tabular-nums">
                    {m.days}-Day Milestone
                  </div>
                  <div className="text-[11px] text-indigo-200/85 truncate tabular-nums">
                    {isUnlocked ? 'Unlocked & Awarded' : `${m.days - profile.streak} days to unlock`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
