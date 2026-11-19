import React, { useState } from 'react';
import {
  CheckCircle2,
  Bot,
} from 'lucide-react';
import { loadMistakes, markMistakeMastered } from '../../utils/storage.ts';
import { MistakeEntry } from '../../types/index.ts';

interface MistakeNotebookProps {
  onAskAITutor: (context: any) => void;
}

export const MistakeNotebook: React.FC<MistakeNotebookProps> = ({ onAskAITutor }) => {
  const [mistakes, setMistakes] = useState<MistakeEntry[]>(loadMistakes());

  const handleMastered = (id: string) => {
    markMistakeMastered(id);
    setMistakes((prev) =>
      prev.map((m) => (m.id === id ? { ...m, mastered: true } : m))
    );
  };

  const activeMistakes = mistakes.filter((m) => !m.mastered);
  const masteredMistakes = mistakes.filter((m) => m.mastered);

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Personal Error Analysis
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
          Mistake Notebook
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Automatically logs questions answered incorrectly during quizzes and mock exams. Review and master your weak areas to secure top marks in ICSE exams.
        </p>
      </div>

      {/* Summary tally */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-rose-50/90 dark:bg-rose-950/25 border border-rose-200 dark:border-rose-900/40 backdrop-blur-md">
          <span className="text-xs font-semibold text-rose-700 dark:text-rose-300 block">
            Needs Revision
          </span>
          <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 tabular-nums mt-0.5 block">
            {activeMistakes.length} Questions
          </span>
        </div>
        <div className="p-5 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-900/40 backdrop-blur-md">
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 block">
            Revised & Mastered
          </span>
          <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums mt-0.5 block">
            {masteredMistakes.length} Questions
          </span>
        </div>
      </div>

      {/* Active Mistakes List */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white font-heading">
          Questions to Review ({activeMistakes.length})
        </h2>

        {activeMistakes.length === 0 ? (
          <div className="p-8 rounded-3xl glass-card text-center text-xs text-slate-500 dark:text-slate-400">
            No active mistakes logged right now. When you take quizzes or mock exams, any questions you miss will automatically appear here for revision!
          </div>
        ) : (
          activeMistakes.map((m) => (
            <div
              key={m.id}
              className="p-5 rounded-2xl glass-card space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                  {m.chapterTitle}
                </span>
                <span className="text-[11px] text-slate-400 tabular-nums">
                  Saved {new Date(m.savedAt).toLocaleDateString()}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {m.questionText}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs p-3.5 rounded-xl glass-surface-blue">
                <div>
                  <span className="text-rose-600 dark:text-rose-400 font-semibold block">Your Answer:</span>
                  <span className="text-slate-700 dark:text-slate-200">{m.userAnswer}</span>
                </div>
                <div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold block">Correct ICSE Answer:</span>
                  <span className="text-slate-700 dark:text-slate-200">{m.correctAnswer}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                <strong>Explanation:</strong> {m.explanation}
              </p>

              <div className="flex items-center justify-between pt-2.5 border-t border-indigo-100/80 dark:border-indigo-500/20">
                <button
                  onClick={() =>
                    onAskAITutor({
                      query: `Can you explain why the correct answer to "${m.questionText}" is "${m.correctAnswer}" and clarify this concept for Class 8?`,
                    })
                  }
                  className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <Bot className="h-4 w-4" /> Ask AI Tutor to Explain
                </button>

                <button
                  onClick={() => handleMastered(m.id)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-xs font-bold text-white shadow-sm transition-colors"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" /> Mark as Mastered
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
