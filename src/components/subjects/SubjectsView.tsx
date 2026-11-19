import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Landmark,
  Globe,
  PenTool,
  Monitor,
} from 'lucide-react';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import { Subject, Chapter, StudentProfile } from '../../types/index.ts';
import { SubjectDashboard } from './SubjectDashboard.tsx';

interface SubjectsViewProps {
  subjects?: Subject[];
  profile: StudentProfile;
  onSelectChapter: (chapter: Chapter, subject: Subject) => void;
  onStartQuiz?: (chapter: Chapter) => void;
  onNavigate?: (view: string, options?: { subjectId?: string }) => void;
  selectedSubjectId?: string | null;
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

export const SubjectsView: React.FC<SubjectsViewProps> = ({
  subjects = ICSE_SUBJECTS,
  profile,
  onSelectChapter,
  onStartQuiz,
  onNavigate,
  selectedSubjectId,
}) => {
  const [currentSubjectId, setCurrentSubjectId] = useState<string>(
    selectedSubjectId || subjects[0]?.id || 'mathematics'
  );

  useEffect(() => {
    if (selectedSubjectId) {
      setCurrentSubjectId(selectedSubjectId);
    }
  }, [selectedSubjectId]);

  const activeSubject =
    subjects.find((s) => s.id === currentSubjectId) || subjects[0];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold text-indigo-600 dark:text-purple-300">
          City Montessori School · Lucknow (Exact 9 Core ICSE Subjects)
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
          ICSE Class 8 Subjects &amp; Learning Dashboards
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Select any of the nine prescribed subjects below to access its dedicated syllabus dashboard, topic notes, geometric &amp; scientific diagrams, chapter quizzes, revision tools, and printable sheets.
        </p>
      </div>

      {/* Subject Selector Tabs (All 9 Subjects) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {subjects.map((sub) => {
          const SubIcon = ICON_MAP[sub.iconName] || BookOpen;
          const isSelected = sub.id === activeSubject.id;
          const completedInSub = sub.chapters.filter((c) =>
            profile.completedChapterIds.includes(c.id)
          ).length;

          return (
            <button
              key={sub.id}
              onClick={() => setCurrentSubjectId(sub.id)}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all shrink-0 ${
                isSelected
                  ? 'btn-royal'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:border-indigo-400'
              }`}
            >
              <SubIcon className="h-4 w-4" />
              <span>{sub.name}</span>
              <span
                className={`text-[11px] font-semibold tabular-nums ${
                  isSelected ? 'text-indigo-100' : 'text-slate-400'
                }`}
              >
                {completedInSub}/{sub.chapters.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dedicated Individual Subject Dashboard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubject.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <SubjectDashboard
            subject={activeSubject}
            profile={profile}
            onSelectChapter={onSelectChapter}
            onStartQuiz={onStartQuiz}
            onNavigate={onNavigate}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
