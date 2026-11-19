import React from 'react';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  BookOpen,
  Layers,
  Search,
  Bot,
  Eye,
  ListChecks,
  FileQuestion,
  Clock,
  RefreshCw,
  Sparkles,
  Calendar,
  TrendingUp,
  Award,
  Download,
  Settings,
  HelpCircle,
  Shield,
  Users,
  Flame,
  ChevronLeft,
  ChevronRight,
  BookMarked,
  Trophy,
  UserCircle,
} from 'lucide-react';
import { StudentProfile } from '../../types/index.ts';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  profile: StudentProfile;
  onOpenStreak: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string | number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onNavigate,
  collapsed,
  onToggleCollapse,
  profile,
  onOpenStreak,
}) => {
  const mainNavItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'subjects', label: 'My Subjects', icon: BookOpen, badge: '9' },
    { id: 'chapters', label: 'All Chapters', icon: Layers },
    { id: 'search', label: 'Smart Search', icon: Search },
    { id: 'ai_tutor', label: 'AI Tutor', icon: Bot, badge: 'AI' },
    { id: 'visual_learning', label: 'Visual Learning', icon: Eye },
    { id: 'practice', label: 'Practice Questions', icon: ListChecks },
    { id: 'quizzes', label: 'Chapter Quizzes', icon: FileQuestion },
    { id: 'mock_exams', label: 'Mock Examinations', icon: Clock },
    { id: 'revision', label: 'Revision Centre', icon: RefreshCw },
    { id: 'flashcards', label: 'Flashcards', icon: Sparkles },
    { id: 'planner', label: 'Study Planner', icon: Calendar },
    { id: 'progress', label: 'My Progress', icon: TrendingUp },
    { id: 'achievements', label: 'Achievements', icon: Award, badge: profile.badges.length },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const extraNavItems: NavItem[] = [
    { id: 'leaderboard', label: 'Class Leaderboard', icon: Trophy },
    { id: 'mistakes', label: 'Mistake Notebook', icon: BookMarked },
    { id: 'parent_view', label: 'Parent View', icon: Users },
    { id: 'admin', label: 'Admin & Syllabus', icon: Shield },
    { id: 'about', label: 'About Me', icon: UserCircle },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  const renderNavButton = (item: NavItem) => {
    const Icon = item.icon;
    const isActive = currentView === item.id;
    return (
      <button
        key={item.id}
        onClick={() => onNavigate(item.id)}
        className={`relative group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium transition-colors duration-150 ${
          isActive
            ? 'text-white font-semibold'
            : 'text-slate-300 hover:bg-white/8 hover:text-white'
        }`}
        title={collapsed ? item.label : undefined}
      >
        {isActive && (
          <motion.span
            layoutId="sidebar-active-glow"
            transition={{ type: 'spring', stiffness: 360, damping: 32 }}
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.45)] border border-indigo-300/25"
            aria-hidden="true"
          />
        )}
        <Icon
          className={`relative z-10 h-4 w-4 shrink-0 transition-transform duration-150 group-hover:scale-110 ${
            isActive ? 'text-white' : 'text-indigo-300/80 group-hover:text-white'
          }`}
        />
        {!collapsed && (
          <span className="relative z-10 truncate flex-1 text-left whitespace-nowrap">
            {item.label}
          </span>
        )}
        {!collapsed && item.badge !== undefined && (
          <span
            className={`relative z-10 text-[11px] font-semibold tabular-nums ${
              isActive ? 'text-indigo-100' : 'text-indigo-300/75'
            }`}
          >
            {item.badge}
          </span>
        )}
      </button>
    );
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 flex flex-col bg-gradient-to-b from-[#0A1128]/95 via-[#0F1736]/95 to-[#16133B]/95 backdrop-blur-xl text-slate-100 border-r border-indigo-900/50 shadow-2xl lg:shadow-none transition-[width,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:static ${
        collapsed
          ? '-translate-x-full lg:translate-x-0 lg:w-20'
          : 'translate-x-0 w-72'
      }`}
    >
      {/* Top sidebar control */}
      <div className="flex h-14 items-center justify-between px-4 border-b border-white/10 shrink-0">
        {!collapsed && (
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[11px] font-semibold tracking-wide text-indigo-200/90 truncate">
              CMS Lucknow · Class 8
            </span>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-xl text-indigo-200/80 hover:bg-white/10 hover:text-white transition-all duration-150 active:scale-95 mx-auto lg:ml-auto"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Daily Streak summary glass box in sidebar */}
      {!collapsed && (
        <div className="mx-3 mt-3 p-3.5 rounded-2xl bg-white/7 backdrop-blur-md border border-indigo-400/20 flex items-center justify-between gap-2 shadow-inner">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/30">
              <Flame className="h-4 w-4 fill-white" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-white leading-tight tabular-nums">
                {profile.streak}-Day Streak
              </div>
              <div className="text-[11px] text-indigo-200/80 tabular-nums truncate">
                {profile.xp} XP earned
              </div>
            </div>
          </div>
          <button
            onClick={onOpenStreak}
            className="text-[11px] font-semibold text-purple-300 hover:text-white underline underline-offset-2 shrink-0 transition-colors"
          >
            Milestones
          </button>
        </div>
      )}

      {/* Nav items list */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
        <div className="text-[11px] font-semibold text-indigo-300/60 px-3 py-1.5">
          {!collapsed ? 'Learning Workspace' : '·'}
        </div>

        {mainNavItems.map(renderNavButton)}

        <div className="pt-3 mt-3 border-t border-white/10 space-y-1">
          <div className="text-[11px] font-semibold text-indigo-300/60 px-3 py-1.5">
            {!collapsed ? 'Academic Tools & Support' : '·'}
          </div>
          {extraNavItems.map(renderNavButton)}
        </div>
      </div>

      {/* Footer Student Quick Info */}
      {!collapsed && (
        <div className="p-3.5 border-t border-white/10 bg-black/20 text-[11px]">
          <div className="font-semibold text-white truncate">
            {profile.name}
          </div>
          <div className="truncate text-[10px] text-indigo-200/70 mt-0.5">
            {profile.grade} · {profile.section}
          </div>
        </div>
      )}
    </aside>
  );
};
