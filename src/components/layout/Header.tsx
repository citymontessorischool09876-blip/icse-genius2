import React from 'react';
import {
  Search,
  Flame,
  Moon,
  Sun,
  Menu,
  GraduationCap,
  LogOut,
  WifiOff,
  RefreshCw,
} from 'lucide-react';
import { StudentProfile, SyncStatusState } from '../../types/index.ts';
import { PWAInstallButton } from '../pwa/PWAInstallButton.tsx';

interface HeaderProps {
  profile: StudentProfile;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
  onOpenStreak: () => void;
  onToggleSidebar: () => void;
  activeNav: string;
  onNavigate: (view: string) => void;
  currentUser?: { displayName?: string | null; email?: string | null; photoURL?: string | null } | null;
  isOffline?: boolean;
  syncState?: SyncStatusState;
  pendingSyncCount?: number;
  onSignOut?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  darkMode,
  onToggleDarkMode,
  onOpenSearch,
  onOpenStreak,
  onToggleSidebar,
  activeNav,
  onNavigate,
  currentUser,
  isOffline = false,
  syncState = 'online',
  pendingSyncCount = 0,
  onSignOut,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const isActiveToday = profile.lastActiveDate === today;
  const displayAvatarUrl = profile.photoURL || currentUser?.photoURL || undefined;
  const displayName =
    (profile.name && profile.name !== 'ICSE Scholar' ? profile.name : currentUser?.displayName) ||
    profile.name ||
    'ICSE Scholar';

  const statusLabel = isOffline
    ? 'Offline'
    : syncState === 'syncing'
    ? 'Syncing'
    : pendingSyncCount > 0
    ? 'Syncing'
    : 'Synced';

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between gap-2 sm:gap-4 border-b border-indigo-100/80 bg-white/85 px-3 sm:px-6 backdrop-blur-xl dark:border-indigo-900/40 dark:bg-[#0A1128]/90 transition-colors">
      {/* Zone 1: Brand wordmark with sidebar toggle */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
        <button
          onClick={onToggleSidebar}
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 dark:text-slate-300 dark:hover:bg-indigo-950/60 transition-colors lg:hidden"
          aria-label="Toggle Navigation Sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 sm:gap-2.5 text-left focus:outline-none group whitespace-nowrap shrink-0"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0F1E4D] via-[#4F46E5] to-[#7C3AED] text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <span className="font-heading text-base sm:text-lg font-extrabold tracking-tight bg-gradient-to-r from-[#0F1E4D] via-[#4338CA] to-[#7C3AED] dark:from-white dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent whitespace-nowrap">
            ICSE GENIUS
          </span>
        </button>
      </div>

      {/* Zone 2: Concise single-line nav links */}
      <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
        {[
          { id: 'dashboard', label: 'Dashboard', active: activeNav === 'dashboard' },
          {
            id: 'subjects',
            label: 'My Subjects',
            active: activeNav === 'subjects' || activeNav === 'chapters',
          },
          { id: 'visual_learning', label: 'Visual Learning', active: activeNav === 'visual_learning' },
          { id: 'quizzes', label: 'Quizzes', active: activeNav === 'quizzes' },
          { id: 'mock_exams', label: 'Mock Exams', active: activeNav === 'mock_exams' },
          { id: 'leaderboard', label: 'Leaderboard', active: activeNav === 'leaderboard' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#4F46E5] dark:hover:text-purple-300 ${
              item.active
                ? 'text-[#4F46E5] dark:text-purple-300 font-semibold'
                : ''
            }`}
          >
            {item.label}
            {item.active && (
              <span className="absolute inset-x-0 -bottom-[17px] h-0.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]" />
            )}
          </button>
        ))}
      </nav>

      {/* Zone 3: Functional actions (Search, Sync status, Install, Streak, Theme, Profile & Logout) */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {/* Compact Sync / Offline Status Chip */}
        <button
          type="button"
          onClick={() => onNavigate('downloads')}
          title={
            isOffline
              ? 'Offline mode active — open Offline Library'
              : syncState === 'syncing'
              ? 'Synchronizing study progress...'
              : 'Online & synced with Cloud Firestore'
          }
          className={`hidden xl:flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[11px] font-bold border transition-colors ${
            isOffline
              ? 'bg-amber-50/90 border-amber-300/70 text-amber-800 dark:bg-amber-950/45 dark:border-amber-700/60 dark:text-amber-300'
              : syncState === 'syncing' || pendingSyncCount > 0
              ? 'bg-indigo-50/90 border-indigo-200 text-indigo-700 dark:bg-indigo-950/45 dark:border-indigo-700/50 dark:text-indigo-200'
              : 'bg-emerald-50/85 border-emerald-200/80 text-emerald-700 dark:bg-emerald-950/35 dark:border-emerald-800/50 dark:text-emerald-300'
          }`}
        >
          {isOffline ? (
            <WifiOff className="h-3.5 w-3.5" />
          ) : syncState === 'syncing' ? (
            <RefreshCw className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          )}
          <span>{statusLabel}</span>
        </button>

        <PWAInstallButton compact />

        {/* Smart Search Trigger */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 rounded-xl bg-[#EAF2FF]/80 hover:bg-[#DCE9FF] px-2.5 sm:px-3 py-1.5 text-xs text-slate-700 border border-blue-200/70 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/70 dark:text-slate-200 dark:border-indigo-800/60 transition-colors whitespace-nowrap shrink-0"
          title="Search subjects, chapters, formulas, and definitions"
          aria-label="Open Smart Search"
        >
          <Search className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
          <span className="hidden sm:inline font-medium">Search...</span>
          <kbd className="hidden sm:inline-block rounded-md bg-white/90 dark:bg-[#0A1128] px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
            ⌘K
          </kbd>
        </button>

        {/* Daily Learning Streak Trigger */}
        <button
          onClick={onOpenStreak}
          className={`flex items-center gap-1 sm:gap-1.5 rounded-xl px-2 sm:px-3 py-1.5 text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
            isActiveToday
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm shadow-orange-500/30 hover:brightness-105'
              : 'bg-amber-50/90 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200/90 dark:border-amber-800/60 hover:bg-amber-100'
          }`}
          title="View Daily Learning Streak & Milestones"
          aria-label="View Daily Learning Streak"
        >
          <Flame className={`h-4 w-4 ${isActiveToday ? 'text-white' : 'text-orange-500'}`} />
          <span className="tabular-nums">{profile.streak}</span>
          <span className="hidden sm:inline">Streak</span>
        </button>

        {/* Dark/Light mode toggle */}
        <button
          onClick={onToggleDarkMode}
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 dark:text-slate-300 dark:hover:bg-indigo-950/60 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800/50 transition-colors shrink-0"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle Dark/Light Mode"
        >
          {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-[#1E3A8A]" />}
        </button>

        {/* Profile trigger */}
        <button
          onClick={() => onNavigate('settings')}
          className="flex items-center gap-2 pl-1 pr-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/50 py-1 transition-colors shrink-0"
          title={`Signed in as ${displayName} — Account & Preferences`}
        >
          {displayAvatarUrl ? (
            <img
              src={displayAvatarUrl}
              alt={displayName}
              referrerPolicy="no-referrer"
              className="h-8 w-8 rounded-full border-2 border-indigo-500 object-cover"
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#1E3A8A] to-[#7C3AED] text-white text-xs font-bold shadow-inner">
              {displayName.charAt(0).toUpperCase()}
            </div>
          )}
          <span className="hidden lg:inline text-xs font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[92px]">
            {displayName}
          </span>
        </button>

        {/* Sign Out Button */}
        {currentUser && onSignOut && (
          <button
            type="button"
            onClick={onSignOut}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:text-slate-300 dark:hover:text-rose-300 dark:hover:bg-rose-950/40 transition-colors shrink-0"
            title="Sign Out"
            aria-label="Sign Out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        )}
      </div>
    </header>
  );
};

