import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import { Chapter, Subject } from '../../types/index.ts';

interface SearchResultItem {
  id: string;
  type: 'Chapter' | 'Topic' | 'Definition' | 'Formula' | 'Question';
  title: string;
  subtitle: string;
  snippet: string;
  subjectName: string;
  chapter: Chapter;
  subject: Subject;
}

interface SmartSearchModalProps {
  subjects?: Subject[];
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (chapter: Chapter, subject: Subject) => void;
}

export const SmartSearchModal: React.FC<SmartSearchModalProps> = ({
  subjects = ICSE_SUBJECTS,
  isOpen,
  onClose,
  onSelectChapter,
}) => {
  const [query, setQuery] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Rational Numbers standard form',
    'Kinetic theory postulates',
    'Xylem vs Phloem',
    'Slope formula m',
    'Topographical contour lines',
  ]);

  // Index search items across all subjects
  const allSearchItems = useMemo(() => {
    const items: SearchResultItem[] = [];

    subjects.forEach((sub) => {
      sub.chapters.forEach((ch) => {
        // Chapter entry
        items.push({
          id: `ch-${ch.id}`,
          type: 'Chapter',
          title: `Chapter ${ch.chapterNumber}: ${ch.title}`,
          subtitle: ch.subtitle,
          snippet: ch.notes.introduction.substring(0, 150) + '...',
          subjectName: sub.name,
          chapter: ch,
          subject: sub,
        });

        // Topics
        ch.notes.topics.forEach((top) => {
          items.push({
            id: `top-${top.id}`,
            type: 'Topic',
            title: top.title,
            subtitle: `${sub.name} • Chapter ${ch.chapterNumber}`,
            snippet: top.content.substring(0, 150) + '...',
            subjectName: sub.name,
            chapter: ch,
            subject: sub,
          });

          // Definitions
          top.definitions?.forEach((def, dIdx) => {
            items.push({
              id: `def-${top.id}-${dIdx}`,
              type: 'Definition',
              title: `Definition: ${def.term}`,
              subtitle: `${sub.name} • Chapter ${ch.chapterNumber}`,
              snippet: def.definition,
              subjectName: sub.name,
              chapter: ch,
              subject: sub,
            });
          });

          // Formulas
          top.formulas?.forEach((f, fIdx) => {
            items.push({
              id: `form-${top.id}-${fIdx}`,
              type: 'Formula',
              title: `Formula / Law: ${f.formula}`,
              subtitle: `${sub.name} • Chapter ${ch.chapterNumber}`,
              snippet: f.explanation,
              subjectName: sub.name,
              chapter: ch,
              subject: sub,
            });
          });
        });

        // Important Questions
        ch.notes.importantQuestionsAndAnswers.forEach((qa, qIdx) => {
          items.push({
            id: `qa-${ch.id}-${qIdx}`,
            type: 'Question',
            title: `Q: ${qa.question}`,
            subtitle: `${sub.name} • ${qa.type}`,
            snippet: qa.answer.substring(0, 150) + '...',
            subjectName: sub.name,
            chapter: ch,
            subject: sub,
          });
        });
      });
    });

    return items;
  }, [subjects]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return allSearchItems
      .filter((item) => {
        if (selectedSubjectId !== 'all' && item.subject.id !== selectedSubjectId) {
          return false;
        }
        return (
          item.title.toLowerCase().includes(q) ||
          item.snippet.toLowerCase().includes(q) ||
          item.subjectName.toLowerCase().includes(q)
        );
      })
      .slice(0, 12);
  }, [query, selectedSubjectId, allSearchItems]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectResult = (item: SearchResultItem) => {
    // Add to recent searches
    if (!recentSearches.includes(query.trim()) && query.trim()) {
      setRecentSearches((prev) => [query.trim(), ...prev.slice(0, 4)]);
    }
    onSelectChapter(item.chapter, item.subject);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-[#070B19]/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl glass-card shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-indigo-100/80 dark:border-indigo-500/20 flex items-center gap-3">
          <Search className="h-5 w-5 text-indigo-500" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 9 subjects, chapters, formulas, definitions, questions..."
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
            aria-label="Close Search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filter by subject tabs */}
        <div className="px-4 py-2.5 border-b border-indigo-100/80 dark:border-indigo-500/20 bg-[#EAF2FF]/70 dark:bg-[#0B1226]/90 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <button
            onClick={() => setSelectedSubjectId('all')}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              selectedSubjectId === 'all'
                ? 'btn-royal'
                : 'glass-card text-slate-600 dark:text-slate-300 hover:border-indigo-300'
            }`}
          >
            All Subjects
          </button>
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSubjectId(s.id)}
              className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
                selectedSubjectId === s.id
                  ? 'btn-royal'
                  : 'glass-card text-slate-600 dark:text-slate-300 hover:border-indigo-300'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Results area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {!query && (
            <div className="py-4 space-y-3">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> Recent & Recommended Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(s)}
                    className="px-3 py-1.5 rounded-xl glass-surface-blue text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="py-12 text-center text-xs text-slate-500 dark:text-slate-400">
              No matching notes or definitions found for "{query}". Try searching for keywords like "Rational", "Xylem", "Slope", "Contour", or "Atom".
            </div>
          )}

          {results.map((res) => (
            <div
              key={res.id}
              onClick={() => handleSelectResult(res)}
              className="cursor-pointer p-3.5 rounded-2xl glass-surface-blue hover:border-indigo-400 transition-all flex items-start justify-between gap-3 group"
            >
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {res.type}
                  </span>
                  <span className="text-xs text-slate-400">· {res.subtitle}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {res.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                  {res.snippet}
                </p>
              </div>

              <ArrowRight className="h-4 w-4 text-indigo-400 group-hover:text-indigo-600 shrink-0 mt-2 transition-transform group-hover:translate-x-0.5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
