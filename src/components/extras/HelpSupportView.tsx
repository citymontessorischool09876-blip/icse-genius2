import React from 'react';
import { Bot } from 'lucide-react';

interface HelpSupportViewProps {
  onAskAITutor: (context: any) => void;
}

export const HelpSupportView: React.FC<HelpSupportViewProps> = ({ onAskAITutor }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-16">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Student Assistance
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
          Help and Support
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Frequently asked questions, academic doubt guidance, and school coordination.
        </p>
      </div>

      <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-6">
        <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-xs">
          <div className="p-4 rounded-2xl glass-surface-blue">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              How is my daily streak counted?
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Log in each day and complete at least one genuine learning activity: reading a chapter note, completing a chapter quiz, or reviewing flashcards. Reaching 7, 30, and 90 continuous days unlocks milestone badges!
            </p>
          </div>

          <div className="p-4 rounded-2xl glass-surface-blue">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              Are these notes aligned with the CMS Lucknow syllabus?
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Yes. All topics follow the standard ICSE Class 8 prescribed textbooks (Selina Concise, Morning Star, Ratna Sagar) utilized across City Montessori School campuses in Lucknow.
            </p>
          </div>

          <div className="p-4 rounded-2xl glass-surface-blue">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              Can the AI Tutor solve math or physics homework?
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Yes! Click the floating AI Tutor button at the bottom-right of any page or upload an image of your textbook question. The AI tutor provides step-by-step educational reasoning.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-indigo-100/80 dark:border-indigo-500/20 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Need immediate concept explanation?
          </div>
          <button
            onClick={() => onAskAITutor({ query: 'Hello! I need help understanding a topic in my ICSE Class 8 syllabus.' })}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl btn-royal text-xs font-bold shrink-0"
          >
            <Bot className="h-4 w-4" /> Open AI Tutor
          </button>
        </div>
      </div>
    </div>
  );
};
