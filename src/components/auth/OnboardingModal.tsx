import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  CheckCircle2,
  BookOpen,
  Download,
  Bot,
  Sparkles,
  ArrowRight,
  School,
  User,
  Clock,
} from 'lucide-react';
import { StudentProfile } from '../../types/index.ts';

interface OnboardingModalProps {
  profile: StudentProfile;
  onComplete: (updatedProfile: StudentProfile) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  profile,
  onComplete,
}) => {
  const [name, setName] = useState(
    profile.name && profile.name !== 'ICSE Scholar' ? profile.name : ''
  );
  const [school, setSchool] = useState(
    profile.school || 'City Montessori School (CMS), Lucknow'
  );
  const [section, setSection] = useState(profile.section || 'Section A');
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState(profile.dailyGoalMinutes || 45);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name so we can personalize your study dashboard.');
      return;
    }

    onComplete({
      ...profile,
      name: name.trim().slice(0, 100),
      grade: 'Class 8',
      school: school.trim().slice(0, 150) || 'City Montessori School (CMS), Lucknow',
      section: section.trim().slice(0, 30) || 'Section A',
      dailyGoalMinutes: Math.max(15, Math.min(240, Number(dailyGoalMinutes) || 45)),
      onboardingCompleted: true,
      createdAt: profile.createdAt || new Date().toISOString(),
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-heading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#060A18]/80 backdrop-blur-md p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-indigo-400/35 my-8 space-y-6"
      >
        {/* Header */}
        <div className="flex items-start gap-4 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0F1E4D] via-[#4F46E5] to-[#7C3AED] text-white shadow-lg shadow-indigo-500/30">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-purple-300">
              First-Time Student Setup
            </span>
            <h1
              id="onboarding-heading"
              className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-0.5"
            >
              Welcome to ICSE Genius!
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Let&apos;s confirm your Class 8 ICSE profile once so your progress, notes, and offline chapters sync automatically.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="rounded-xl bg-rose-50 dark:bg-rose-950/35 border border-rose-200 dark:border-rose-800/60 p-3 text-xs text-rose-700 dark:text-rose-200">
              {error}
            </div>
          )}

          {/* Confirmed Class & Board Strip */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl glass-surface-blue p-3.5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Class
                </div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Class 8
                </div>
              </div>
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>

            <div className="rounded-2xl glass-surface-blue p-3.5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Curriculum Board
                </div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                  ICSE (CISCE)
                </div>
              </div>
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl glass-surface-blue pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Class Section (Optional)
              </label>
              <input
                type="text"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                placeholder="e.g. Section A"
                className="w-full rounded-xl glass-surface-blue px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                School Name (Optional)
              </label>
              <div className="relative">
                <School className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="City Montessori School (CMS), Lucknow"
                  className="w-full rounded-xl glass-surface-blue pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Daily Goal (Mins)
              </label>
              <div className="relative">
                <Clock className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  min={15}
                  max={240}
                  value={dailyGoalMinutes}
                  onChange={(e) => setDailyGoalMinutes(Number(e.target.value))}
                  className="w-full rounded-xl glass-surface-blue pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Quick Dashboard Orientation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {[
              {
                icon: BookOpen,
                title: 'Smart Notes & TTS',
                desc: 'Resume exact topics & listen aloud.',
              },
              {
                icon: Download,
                title: 'Offline Study',
                desc: 'Download chapters & diagrams for offline access.',
              },
              {
                icon: Bot,
                title: 'AI Tutor (Online)',
                desc: 'Ask step-by-step doubts when connected.',
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-2xl glass-surface-blue p-3.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-purple-300">
                    <Icon className="h-3.5 w-3.5" />
                    <span>{card.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl btn-royal text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
          >
            <Sparkles className="h-4 w-4" />
            <span>Launch My ICSE Genius Dashboard</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};
