import React, { useEffect, useMemo, useState } from 'react';
import {
  Trophy,
  Flame,
  Sparkles,
  RefreshCw,
  Search,
  LogIn,
  AlertCircle,
  Users,
  Medal,
  CheckCircle2,
} from 'lucide-react';
import { LeaderboardEntry, StudentProfile } from '../../types/index.ts';
import {
  fetchLeaderboardEntries,
  sortLeaderboardEntries,
  subscribeToLeaderboard,
  syncLeaderboardEntry,
} from '../../utils/leaderboard.ts';

interface LeaderboardViewProps {
  profile: StudentProfile;
  currentUser?: { uid: string; displayName?: string | null; email?: string | null } | null;
  authReady: boolean;
  onSignInWithGoogle: () => void;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({
  profile,
  currentUser,
  authReady,
  onSignInWithGoogle,
}) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [syncSuccess, setSyncSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [sortBy, setSortBy] = useState<'xp' | 'streak'>('xp');
  const [sectionFilter, setSectionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const loadLeaderboard = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const data = await fetchLeaderboardEntries();
      setEntries(data);
    } catch (err) {
      const raw = err instanceof Error ? err.message : String(err);
      let friendly = 'Unable to load class rankings from Firestore right now.';
      try {
        const parsed = JSON.parse(raw);
        if (parsed?.error) {
          friendly = parsed.error;
        }
      } catch {
        if (raw) friendly = raw;
      }
      setErrorMsg(friendly);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authReady) return;

    if (currentUser) {
      setLoading(true);
      setErrorMsg(null);
      const unsubscribe = subscribeToLeaderboard(
        (liveEntries) => {
          setEntries(liveEntries);
          setLoading(false);
        },
        (err) => {
          setErrorMsg(err.message || 'Failed to subscribe to live leaderboard updates.');
          setLoading(false);
        }
      );
      return () => unsubscribe();
    } else {
      loadLeaderboard();
    }
  }, [authReady, currentUser?.uid]);

  const handleSyncScore = async () => {
    if (!currentUser) {
      onSignInWithGoogle();
      return;
    }
    setSyncing(true);
    setErrorMsg(null);
    try {
      await syncLeaderboardEntry(currentUser.uid, profile);
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
      await loadLeaderboard();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unable to sync your score to Firestore.';
      setErrorMsg(msg);
    } finally {
      setSyncing(false);
    }
  };

  const availableSections = useMemo(() => {
    const set = new Set<string>();
    entries.forEach((e) => {
      if (e.section) set.add(e.section);
    });
    if (profile.section) set.add(profile.section);
    return Array.from(set).sort();
  }, [entries, profile.section]);

  const rankedEntries = useMemo(() => {
    const filtered = entries.filter((entry) => {
      const matchesSection = sectionFilter === 'all' || entry.section === sectionFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        entry.name.toLowerCase().includes(q) ||
        entry.section.toLowerCase().includes(q);
      return matchesSection && matchesSearch;
    });
    return sortLeaderboardEntries(filtered, sortBy);
  }, [entries, sectionFilter, searchQuery, sortBy]);

  const globalSortedEntries = useMemo(
    () => sortLeaderboardEntries(entries, sortBy),
    [entries, sortBy]
  );

  const myGlobalRank = useMemo(() => {
    if (!currentUser) return null;
    const idx = globalSortedEntries.findIndex((e) => e.userId === currentUser.uid);
    return idx >= 0 ? idx + 1 : null;
  }, [globalSortedEntries, currentUser]);

  const topThree = rankedEntries.slice(0, 3);

  return (
    <div className="space-y-8 pb-16 max-w-6xl mx-auto">
      {/* Header Zone */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-6">
        <div>
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            City Montessori School · Class 8 Rankings
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
            Class Leaderboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Compare total earned XP points and daily learning streaks across classmates in real time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={loadLeaderboard}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-surface-blue text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors whitespace-nowrap shrink-0 disabled:opacity-60"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          {currentUser ? (
            <button
              type="button"
              onClick={handleSyncScore}
              disabled={syncing}
              className="flex items-center gap-2 px-4 py-2 rounded-xl btn-royal text-xs font-semibold whitespace-nowrap shrink-0 disabled:opacity-60"
            >
              {syncSuccess ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Score Synced</span>
                </>
              ) : (
                <>
                  <Trophy className="h-3.5 w-3.5" />
                  <span>{syncing ? 'Syncing...' : 'Sync My Score'}</span>
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={onSignInWithGoogle}
              className="flex items-center gap-2 px-4 py-2 rounded-xl btn-royal text-xs font-semibold whitespace-nowrap shrink-0"
            >
              <LogIn className="h-3.5 w-3.5" />
              <span>Sign in with Google to Join</span>
            </button>
          )}
        </div>
      </div>

      {/* Current Student Standing Strip */}
      <section aria-label="Your Current Standing" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl glass-card">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Your Class Rank</div>
          <div className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1 tabular-nums">
            {myGlobalRank ? `#${myGlobalRank}` : 'Unranked'}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {currentUser
              ? myGlobalRank
                ? `Out of ${entries.length} synced scholars`
                : 'Click Sync My Score to publish'
              : 'Sign in to publish rank'}
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Your Earned Points</div>
          <div className="text-2xl font-extrabold font-heading text-indigo-600 dark:text-indigo-400 mt-1 tabular-nums">
            {profile.xp.toLocaleString()} XP
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Earned from chapters & quizzes
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Your Daily Streak</div>
          <div className="text-2xl font-extrabold font-heading text-orange-600 dark:text-orange-400 mt-1 tabular-nums">
            {profile.streak} {profile.streak === 1 ? 'Day' : 'Days'}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Consecutive study days
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Chapters Completed</div>
          <div className="text-2xl font-extrabold font-heading text-emerald-600 dark:text-emerald-400 mt-1 tabular-nums">
            {profile.completedChapterIds.length}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {profile.badges.length} badges unlocked
          </div>
        </div>
      </section>

      {/* Error State */}
      {errorMsg && (
        <div className="p-5 rounded-2xl bg-rose-50/90 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold text-rose-900 dark:text-rose-200">
                Could not fetch Firestore leaderboard
              </h2>
              <p className="text-xs text-rose-700 dark:text-rose-300 mt-0.5 break-all">
                {errorMsg}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={loadLeaderboard}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            Retry
          </button>
        </div>
      )}

      {/* Filter & Sort Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Segmented Sort Control */}
        <div className="inline-flex items-center gap-1 p-1 rounded-2xl glass-surface-blue self-start">
          <button
            type="button"
            onClick={() => setSortBy('xp')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
              sortBy === 'xp'
                ? 'btn-royal'
                : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Rank by Total Points (XP)</span>
          </button>
          <button
            type="button"
            onClick={() => setSortBy('streak')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
              sortBy === 'streak'
                ? 'btn-royal'
                : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'
            }`}
          >
            <Flame className="h-3.5 w-3.5 text-orange-400" />
            <span>Rank by Daily Streak</span>
          </button>
        </div>

        {/* Search & Section Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <Search className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student or section..."
              aria-label="Search student or section"
              className="w-full sm:w-60 pl-9 pr-3 py-2 rounded-xl glass-card text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <select
            value={sectionFilter}
            onChange={(e) => setSectionFilter(e.target.value)}
            aria-label="Filter by Class Section"
            className="px-3 py-2 rounded-xl glass-card text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Sections</option>
            {availableSections.map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Top 3 Podium Spotlight */}
      {!loading && topThree.length > 0 && (
        <section aria-label="Top Scholars Spotlight" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topThree.map((student, index) => {
            const rank = index + 1;
            const isMe = Boolean(currentUser && student.userId === currentUser.uid);
            const rankLabel = rank === 1 ? '1st Place' : rank === 2 ? '2nd Place' : '3rd Place';
            const rankAccent =
              rank === 1
                ? 'text-amber-600 dark:text-amber-400'
                : rank === 2
                  ? 'text-indigo-600 dark:text-indigo-300'
                  : 'text-purple-600 dark:text-purple-400';

            return (
              <div
                key={student.userId}
                className={`p-6 rounded-2xl glass-card transition-all ${
                  rank === 1
                    ? 'border-amber-300 dark:border-amber-600/60 shadow-lg shadow-amber-500/10'
                    : 'hover:border-indigo-300 dark:hover:border-indigo-500/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${rankAccent}`}>
                    <Medal className="h-4 w-4" />
                    <span>{rankLabel}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {student.section}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#0A1128] via-[#4F46E5] to-[#7C3AED] text-white font-bold text-sm shadow-sm">
                    {student.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white truncate">
                      {student.name}
                      {isMe ? ' (You)' : ''}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {student.grade || 'Class 8'} · {student.completedChaptersCount} chapters · {student.badgesCount} badges
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-indigo-100/80 dark:border-indigo-500/20 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Total Points</div>
                    <div className="text-lg font-extrabold text-slate-900 dark:text-white tabular-nums">
                      {student.xp.toLocaleString()} XP
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Daily Streak</div>
                    <div className="text-lg font-extrabold text-orange-600 dark:text-orange-400 tabular-nums">
                      {student.streak}d
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* Full Rankings Table */}
      <section className="rounded-3xl glass-card overflow-hidden">
        <div className="px-6 py-4 border-b border-indigo-100/80 dark:border-indigo-500/20 flex items-center justify-between">
          <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white">
            Full Class Standings
          </h2>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
            {rankedEntries.length} {rankedEntries.length === 1 ? 'student' : 'students'}
          </span>
        </div>

        {loading ? (
          <div className="divide-y divide-indigo-100/60 dark:divide-indigo-500/15" aria-busy="true">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="px-6 py-4 flex items-center justify-between gap-4 skeleton-shimmer animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="h-5 w-8 rounded bg-indigo-100 dark:bg-slate-800" />
                  <div className="h-9 w-9 rounded-full bg-indigo-100 dark:bg-slate-800" />
                  <div className="space-y-1.5">
                    <div className="h-3.5 w-36 rounded bg-indigo-100 dark:bg-slate-800" />
                    <div className="h-3 w-24 rounded bg-slate-100 dark:bg-slate-800/60" />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="h-4 w-14 rounded bg-indigo-100 dark:bg-slate-800" />
                  <div className="h-4 w-16 rounded bg-indigo-100 dark:bg-slate-800" />
                </div>
              </div>
            ))}
          </div>
        ) : rankedEntries.length === 0 ? (
          <div className="p-10 text-center space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl glass-surface-blue text-indigo-600 dark:text-indigo-400">
              <Users className="h-6 w-6" />
            </div>
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
                {entries.length === 0 ? 'Be the first on the Class Leaderboard' : 'No matching students found'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {entries.length === 0
                  ? 'No students have published their scores to Firestore yet. Sign in with Google and sync your XP points and streak to appear here.'
                  : 'Try clearing your search filter or switching to All Sections.'}
              </p>
            </div>
            {entries.length === 0 && (
              <div>
                <button
                  type="button"
                  onClick={currentUser ? handleSyncScore : onSignInWithGoogle}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-royal text-xs font-semibold"
                >
                  {currentUser ? (
                    <>
                      <Trophy className="h-4 w-4" />
                      <span>Publish My Score Now</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="h-4 w-4" />
                      <span>Sign in with Google to Join</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-indigo-100/80 dark:border-indigo-500/20 bg-[#EAF2FF]/70 dark:bg-[#0B1226]/70 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <th className="py-3 px-6 w-20">Rank</th>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4 text-right">Chapters</th>
                  <th className="py-3 px-4 text-right">Daily Streak</th>
                  <th className="py-3 px-6 text-right">Total Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-100/60 dark:divide-indigo-500/15 text-sm">
                {rankedEntries.map((student, index) => {
                  const rank = index + 1;
                  const isMe = Boolean(currentUser && student.userId === currentUser.uid);
                  return (
                    <tr
                      key={student.userId}
                      className={`transition-colors ${
                        isMe
                          ? 'bg-indigo-50/80 dark:bg-indigo-950/35'
                          : 'hover:bg-[#EAF2FF]/45 dark:hover:bg-indigo-950/20'
                      }`}
                    >
                      <td className="py-3.5 px-6 font-bold tabular-nums text-slate-700 dark:text-slate-200">
                        #{rank}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#0A1128] to-[#4F46E5] text-white font-bold text-xs">
                            {student.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-slate-900 dark:text-white truncate">
                              {student.name}
                              {isMe && (
                                <span className="ml-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                                  · You
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {student.section} · {student.badgesCount} badges
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-600 dark:text-slate-300 tabular-nums">
                        {student.completedChaptersCount}
                      </td>
                      <td className="py-3.5 px-4 text-right font-semibold text-orange-600 dark:text-orange-400 tabular-nums">
                        {student.streak} {student.streak === 1 ? 'day' : 'days'}
                      </td>
                      <td className="py-3.5 px-6 text-right font-bold text-slate-900 dark:text-white tabular-nums">
                        {student.xp.toLocaleString()} XP
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};
