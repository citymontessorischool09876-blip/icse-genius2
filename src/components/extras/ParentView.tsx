import React from 'react';
import { CheckCircle2, Clock, Flame, ShieldCheck, FileCheck2 } from 'lucide-react';
import { StudentProfile, Subject } from '../../types/index.ts';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import { computeSubjectProgressSummary } from '../../utils/rules.ts';
import { loadExamAttempts, loadQuizAttempts } from '../../utils/storage.ts';

interface ParentViewProps {
  profile: StudentProfile;
  subjects?: Subject[];
}

export const ParentView: React.FC<ParentViewProps> = ({
  profile,
  subjects = ICSE_SUBJECTS,
}) => {
  const examAttempts = loadExamAttempts();
  const quizAttempts = loadQuizAttempts();
  const latestExam = examAttempts[0];
  const progressSummary = computeSubjectProgressSummary(
    profile.completedChapterIds,
    profile.readingProgress,
    subjects
  );

  const strongestSummary =
    progressSummary.strongestNames.length > 0
      ? `${profile.name} has active progress in ${progressSummary.strongestNames.join(' and ')}.`
      : `${profile.name} has just begun exploring the Class 8 ICSE syllabus.`;

  const focusSummary =
    progressSummary.needsFocusNames.length > 0
      ? ` Consider scheduling extra reading or quizzes in ${progressSummary.needsFocusNames.join(' and ')}, alongside daily Mistake Notebook revision.`
      : ' Encourage regular revision of the Mistake Notebook to stay exam-ready.';

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-16">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Parental Supervision & Academic Report
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
          Parent View & Progress Summary
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Transparent, private oversight into {profile.name}’s daily ICSE Class 8 learning activities at {profile.school || 'City Montessori School'}.
        </p>
      </div>

      {/* Safety & Privacy Notice */}
      <div className="p-4 rounded-2xl glass-surface-blue flex items-start gap-3 text-xs text-slate-800 dark:text-slate-200">
        <ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <strong>Data Minimization &amp; Private Student Vault:</strong> Private notes, quiz results, exam marks, bookmarks, and study plans are isolated per student UID in Firebase Firestore. Personal identifiers such as email addresses, phone numbers, home addresses, and roll numbers are never stored in Cloud Firestore.
        </div>
      </div>

      {/* Student Profile Card */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-indigo-100/80 dark:border-indigo-500/20 pb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
              {profile.name}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {profile.grade} • {profile.section} • Leaderboard: {profile.leaderboardOptIn === false ? 'Private' : 'Opted In'}
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            Active Student
          </span>
        </div>

        {/* 4 Parent KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-2xl glass-surface-blue">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Daily Streak</span>
            <div className="flex items-center gap-1.5 mt-1">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">
                {profile.streak} Days
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl glass-surface-blue">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Today’s Study</span>
            <div className="flex items-center gap-1.5 mt-1">
              <Clock className="h-4 w-4 text-indigo-500" />
              <span className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">
                {profile.todayStudyMinutes} mins
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl glass-surface-blue">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Chapters Read</span>
            <div className="flex items-center gap-1.5 mt-1">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">
                {profile.completedChapterIds.length} Done
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl glass-surface-blue">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Quizzes &amp; Exams</span>
            <div className="flex items-center gap-1.5 mt-1">
              <FileCheck2 className="h-4 w-4 text-amber-500" />
              <span className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">
                {quizAttempts.length + examAttempts.length} Saved
              </span>
            </div>
          </div>
        </div>

        {latestExam && (
          <div className="p-4 rounded-2xl glass-surface-blue text-xs flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-300 block">
                Latest Mock Exam Result
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {latestExam.examTitle}
              </span>
            </div>
            <span className="font-bold text-indigo-700 dark:text-indigo-300 tabular-nums shrink-0">
              {latestExam.marksScored}/{latestExam.totalMarks} ({latestExam.percentage}%)
            </span>
          </div>
        )}

        {/* Parent Tip */}
        <div className="p-4 rounded-2xl glass-surface-blue text-xs text-slate-600 dark:text-slate-300 space-y-1">
          <strong className="text-slate-900 dark:text-white block">Parent Recommendation:</strong>
          <p>
            {strongestSummary}
            {focusSummary}
          </p>
        </div>
      </div>
    </div>
  );
};
