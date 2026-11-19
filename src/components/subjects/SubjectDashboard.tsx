import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  FileQuestion,
  Sparkles,
  Download,
  Printer,
  ShieldCheck,
  AlertCircle,
  Upload,
  Eye,
  EyeOff,
  ZoomIn,
  Layers,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Landmark,
  Globe,
  PenTool,
  Monitor,
} from 'lucide-react';
import { Chapter, DiagramItem, StudentProfile, Subject } from '../../types/index.ts';
import { loadQuizAttempts } from '../../utils/storage.ts';
import { MathSvgDiagram } from '../visual/MathSvgDiagram.tsx';

interface SubjectDashboardProps {
  subject: Subject;
  profile: StudentProfile;
  onSelectChapter: (chapter: Chapter, subject: Subject) => void;
  onStartQuiz?: (chapter: Chapter) => void;
  onNavigate?: (view: string, options?: { subjectId?: string }) => void;
}

type DashboardTab =
  | 'chapters'
  | 'topics'
  | 'diagrams'
  | 'questions'
  | 'quizzes'
  | 'revision'
  | 'downloads';

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

function downloadTextStudySheet(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function buildChapterTextExport(subject: Subject, ch: Chapter): string {
  const lines: string[] = [
    `ICSE GENIUS — CLASS 8 CMS STUDY NOTES`,
    `Subject: ${subject.name} (${subject.code})`,
    `Prescribed Textbook: ${subject.prescribedTextbook}`,
    `Chapter ${ch.chapterNumber}: ${ch.title}`,
    `Term: ${ch.term} | Estimated Study Time: ${ch.estimatedMinutes} mins`,
    `================================================================`,
    ``,
    `1. INTRODUCTION`,
    ch.notes.introduction,
    ``,
    `2. LEARNING OBJECTIVES`,
    ...ch.notes.learningObjectives.map((o, i) => `  ${i + 1}. ${o}`),
    ``,
    `3. TOPIC-WISE EXPLANATIONS`,
  ];

  ch.notes.topics.forEach((top, tIdx) => {
    lines.push(`\n--- Topic 3.${tIdx + 1}: ${top.title} ---`);
    lines.push(top.content);
    top.subtopics?.forEach((sub, sIdx) => {
      lines.push(`  3.${tIdx + 1}.${sIdx + 1} ${sub.subheading}: ${sub.body}`);
    });
    top.formulas?.forEach((f) => {
      lines.push(`  [Formula] ${f.formula} — ${f.explanation}`);
    });
  });

  if (ch.notes.formulaSheet && ch.notes.formulaSheet.length > 0) {
    lines.push(`\n4. MASTER FORMULA SHEET`);
    ch.notes.formulaSheet.forEach((f) =>
      lines.push(`  • ${f.title}: ${f.expression} (${f.meaning})`)
    );
  }

  lines.push(`\n5. CHAPTER SUMMARY`);
  ch.notes.chapterSummary.forEach((s) => lines.push(`  • ${s}`));

  return lines.join('\n');
}

export const SubjectDashboard: React.FC<SubjectDashboardProps> = ({
  subject,
  profile,
  onSelectChapter,
  onStartQuiz,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('chapters');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [zoomedDiagram, setZoomedDiagram] = useState<
    (DiagramItem & { chapterTitle: string }) | null
  >(null);

  useEffect(() => {
    if (!zoomedDiagram) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomedDiagram(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedDiagram]);

  const Icon = ICON_MAP[subject.iconName] || BookOpen;

  const completedInSub = subject.chapters.filter((c) =>
    profile.completedChapterIds.includes(c.id)
  ).length;
  const totalChapters = subject.chapters.length;
  const overallProgress = Math.round(
    subject.chapters.reduce(
      (sum, ch) =>
        sum +
        (profile.completedChapterIds.includes(ch.id)
          ? 100
          : profile.readingProgress[ch.id] || 0),
      0
    ) / Math.max(1, totalChapters)
  );

  // Resume chapter inside this subject (prefer lastVisitedChapterId if it belongs to this subject)
  const resumeChapter = useMemo(() => {
    if (profile.lastVisitedChapterId) {
      const visited = subject.chapters.find((c) => c.id === profile.lastVisitedChapterId);
      if (visited) return visited;
    }
    return (
      subject.chapters.find((c) => !profile.completedChapterIds.includes(c.id)) ||
      subject.chapters[0]
    );
  }, [subject.chapters, profile.lastVisitedChapterId, profile.completedChapterIds]);

  const quizAttempts = useMemo(() => loadQuizAttempts(), []);

  // Aggregate subject diagrams, terminology, questions, and formulas
  const subjectDiagrams = useMemo(() => {
    const items: Array<DiagramItem & { chapterTitle: string; chapter: Chapter }> = [];
    subject.chapters.forEach((ch) => {
      ch.notes.topics.forEach((top) => {
        if (top.diagram) {
          items.push({
            ...top.diagram,
            chapterTitle: `Ch ${ch.chapterNumber}: ${ch.title}`,
            chapter: ch,
          });
        }
      });
    });
    return items;
  }, [subject.chapters]);

  const totalQuestionsCount = useMemo(
    () =>
      subject.chapters.reduce(
        (acc, ch) =>
          acc +
          ch.notes.importantQuestionsAndAnswers.length +
          ch.notes.practiceExercises.length +
          (ch.notes.gradedQuestions
            ? ch.notes.gradedQuestions.easy.length +
              ch.notes.gradedQuestions.medium.length +
              ch.notes.gradedQuestions.difficult.length
            : 0),
        0
      ),
    [subject.chapters]
  );

  const totalQuizzesCount = useMemo(
    () => subject.chapters.filter((ch) => ch.quizQuestions.length > 0).length,
    [subject.chapters]
  );

  const totalFlashcardsCount = useMemo(
    () => subject.chapters.reduce((sum, ch) => sum + ch.flashcards.length, 0),
    [subject.chapters]
  );

  const outlineOnlyItems = useMemo(
    () =>
      (subject.officialChapterOutline || []).filter(
        (item) =>
          !subject.chapters.some(
            (ch) =>
              ch.chapterNumber === item.chapterNumber ||
              ch.title.toLowerCase() === item.title.toLowerCase()
          )
      ),
    [subject.officialChapterOutline, subject.chapters]
  );

  const toggleAnswer = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const tabs: Array<{ id: DashboardTab; label: string; count?: number }> = [
    { id: 'chapters', label: 'Chapters', count: totalChapters },
    { id: 'topics', label: 'Topic Notes & Formulas' },
    { id: 'diagrams', label: 'Diagrams', count: subjectDiagrams.length },
    { id: 'questions', label: 'Important Q&A & Practice', count: totalQuestionsCount },
    { id: 'quizzes', label: 'Chapter Quizzes', count: totalQuizzesCount },
    { id: 'revision', label: 'Revision & Flashcards', count: totalFlashcardsCount },
    { id: 'downloads', label: 'Download Notes' },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
      {/* Subject Introduction & Stats Header */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 border-b border-indigo-100/80 dark:border-indigo-900/40 pb-6">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${subject.colorScheme.bgBadge} ${subject.colorScheme.secondary} border ${subject.colorScheme.border}`}
          >
            <Icon className="h-8 w-8" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-purple-300">
              <span>Course Code · {subject.code}</span>
              <span>•</span>
              <span>{subject.academicYear || 'CMS Class 8 ICSE'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
              {subject.name} Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {subject.description}
            </p>
          </div>
        </div>

        <div className="lg:text-right text-xs space-y-1 shrink-0 max-w-sm">
          <span className="block font-bold text-slate-700 dark:text-slate-200">
            Prescribed Textbook Reference
          </span>
          <span className="block text-slate-600 dark:text-slate-300 leading-snug">
            {subject.prescribedTextbook}
          </span>
        </div>
      </div>

      {/* Official CMS Curriculum Verification Status Banner */}
      {subject.syllabusVerificationStatus === 'verified' ? (
        <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-800 dark:text-emerald-300 block">
                Verified CMS / CISCE Class 8 Curriculum Track
              </span>
              <p className="text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed">
                {subject.verifiedSourceNote}
              </p>
            </div>
          </div>
          {onNavigate && (
            <button
              type="button"
              onClick={() => onNavigate('admin')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-surface-blue font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 shrink-0"
            >
              <Upload className="h-3.5 w-3.5" /> Update Branch Circular
            </button>
          )}
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-amber-50/85 dark:bg-amber-950/25 border border-amber-300/80 dark:border-amber-700/50 space-y-2 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300">
              <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Pending Official CMS Academic-Year Syllabus Confirmation</span>
            </div>
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('admin')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl btn-royal font-bold text-xs shrink-0"
              >
                <Upload className="h-3.5 w-3.5" /> Upload Official CMS Syllabus in Admin
              </button>
            )}
          </div>
          {subject.missingInformation && subject.missingInformation.length > 0 && (
            <ul className="space-y-1 text-slate-700 dark:text-slate-300 pl-6 list-disc">
              {subject.missingInformation.map((info, idx) => (
                <li key={idx}>{info}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Progress & Quick Resume Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-7 p-4 rounded-2xl glass-surface-blue space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {subject.name} Completion Progress
            </span>
            <span className="font-extrabold text-indigo-600 dark:text-purple-300 tabular-nums">
              {overallProgress}% ({completedInSub}/{totalChapters} Chapters Completed)
            </span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-indigo-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#4F46E5] transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {resumeChapter && (
          <div className="md:col-span-5 p-4 rounded-2xl bg-gradient-to-r from-[#0F1E4D] via-[#312E81] to-[#6D28D9] text-white flex items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-200 block">
                {profile.lastVisitedChapterId === resumeChapter.id
                  ? 'Continue Reading'
                  : 'Recommended Next'}
              </span>
              <span className="text-xs sm:text-sm font-bold truncate block">
                Ch {resumeChapter.chapterNumber}: {resumeChapter.title}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onSelectChapter(resumeChapter, subject)}
              className="px-3.5 py-2 rounded-xl bg-white text-[#1E1B4B] hover:bg-indigo-50 text-xs font-bold shrink-0 flex items-center gap-1"
            >
              Read <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Subject Dashboard Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-indigo-100/80 dark:border-indigo-900/40 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 tabular-nums ${
              activeTab === tab.id
                ? 'btn-royal'
                : 'glass-surface-blue text-slate-700 dark:text-slate-300 hover:border-indigo-400'
            }`}
          >
            {tab.label}
            {typeof tab.count === 'number' ? ` (${tab.count})` : ''}
          </button>
        ))}
      </div>

      {/* TAB 1: Complete Chapter List */}
      {activeTab === 'chapters' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subject.chapters.map((chapter) => {
              const isDone = profile.completedChapterIds.includes(chapter.id);
              const readPct = isDone ? 100 : profile.readingProgress[chapter.id] || 0;

              return (
                <div
                  key={chapter.id}
                  className="rounded-2xl glass-surface-blue p-5 hover:bg-white dark:hover:bg-[#141F45] hover:border-indigo-400 dark:hover:border-purple-400/60 transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                      <span className="text-indigo-600 dark:text-purple-300">
                        Chapter {chapter.chapterNumber} · {chapter.term}
                      </span>
                      {isDone ? (
                        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Completed
                        </span>
                      ) : (
                        <span className="text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                          {chapter.estimatedMinutes} mins study
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold font-heading text-slate-900 dark:text-white">
                      {chapter.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {chapter.subtitle}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 tabular-nums">
                      {chapter.notes.topics.length} Topics ·{' '}
                      {chapter.notes.solvedExamples.length} Solved Examples ·{' '}
                      {chapter.quizQuestions.length} Quiz Questions
                    </p>
                  </div>

                  <div className="pt-3 border-t border-blue-200/70 dark:border-indigo-900/50 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-medium tabular-nums">
                        Reading Progress: <strong className="text-slate-800 dark:text-slate-200">{readPct}%</strong>
                      </span>
                      <div className="flex items-center gap-2">
                        {onStartQuiz && chapter.quizQuestions.length > 0 && (
                          <button
                            type="button"
                            onClick={() => onStartQuiz(chapter)}
                            className="px-2.5 py-1 rounded-lg glass-card text-[11px] font-bold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400"
                          >
                            Quiz
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => onSelectChapter(chapter, subject)}
                          className="font-bold text-indigo-600 dark:text-purple-300 flex items-center gap-1 hover:underline"
                        >
                          {isDone ? 'Revise Notes' : 'Open Chapter'} <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-indigo-100/80 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]"
                        style={{ width: `${readPct}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {outlineOnlyItems.length > 0 && (
            <div className="p-4 rounded-2xl glass-surface-blue space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                Uploaded Official Syllabus Outline (Awaiting Full Notes Authoring in Admin)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {outlineOnlyItems.map((item) => (
                  <div
                    key={`${item.chapterNumber}-${item.title}`}
                    className="p-3 rounded-xl glass-card flex items-center justify-between gap-2 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        Ch {item.chapterNumber}: {item.title}
                      </span>
                      <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                        {item.term} Term
                      </span>
                    </div>
                    {onNavigate && (
                      <button
                        type="button"
                        onClick={() => onNavigate('admin')}
                        className="text-[11px] font-bold text-indigo-600 dark:text-purple-300 hover:underline shrink-0"
                      >
                        Author in Admin →
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Topic-Wise Explanations & Formulas */}
      {activeTab === 'topics' && (
        <div className="space-y-4">
          {subject.chapters.map((ch) => (
            <div key={ch.id} className="p-5 rounded-2xl glass-surface-blue space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-200/60 dark:border-indigo-800/50 pb-2.5">
                <div>
                  <span className="text-[11px] font-bold uppercase text-indigo-600 dark:text-purple-300">
                    Chapter {ch.chapterNumber}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                    {ch.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectChapter(ch, subject)}
                  className="px-3 py-1.5 rounded-xl btn-royal text-xs font-bold flex items-center gap-1"
                >
                  Open Full Chapter <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ch.notes.topics.map((top, idx) => (
                  <div key={top.id} className="p-3.5 rounded-xl glass-card space-y-1.5 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white">
                      Topic {idx + 1}: {top.title}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {top.content}
                    </p>
                    {top.subtopics && top.subtopics.length > 0 && (
                      <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-300">
                        Includes {top.subtopics.length} subtopic(s)
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {ch.notes.formulaSheet && ch.notes.formulaSheet.length > 0 && (
                <div className="p-3.5 rounded-xl bg-[#0F172A] text-white text-xs space-y-1">
                  <div className="font-bold text-amber-300 uppercase tracking-wider text-[10px]">
                    Key Formulas in Chapter {ch.chapterNumber}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono">
                    {ch.notes.formulaSheet.slice(0, 4).map((f, fIdx) => (
                      <div key={fIdx} className="text-[11px] text-indigo-100 truncate">
                        • {f.expression}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: Subject Diagrams & Figures */}
      {activeTab === 'diagrams' && (
        <div className="space-y-4">
          {subjectDiagrams.length === 0 ? (
            <div className="p-6 rounded-2xl glass-surface-blue text-center text-xs text-slate-600 dark:text-slate-300">
              No labelled diagrams attached to chapters in {subject.name} yet. Upload or link diagrams in Admin.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjectDiagrams.map((diag, idx) => (
                <div key={`${diag.id}-${idx}`} className="rounded-2xl glass-surface-blue overflow-hidden flex flex-col justify-between">
                  <div className="p-4 flex items-center justify-between gap-2 border-b border-indigo-200/60 dark:border-indigo-800/50">
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase text-indigo-600 dark:text-purple-300 block truncate">
                        {diag.chapterTitle}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                        {diag.title}
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => setZoomedDiagram(diag)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg glass-card text-xs font-semibold text-indigo-700 dark:text-indigo-300 shrink-0"
                    >
                      <ZoomIn className="h-3.5 w-3.5" /> Zoom
                    </button>
                  </div>
                  <div
                    onClick={() => setZoomedDiagram(diag)}
                    className="cursor-pointer bg-white p-3"
                  >
                    {diag.svgFigure ? (
                      <MathSvgDiagram figureType={diag.svgFigure} className="w-full h-48" />
                    ) : diag.imageUrl ? (
                      <img
                        src={diag.imageUrl}
                        alt={diag.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-48 object-contain"
                      />
                    ) : null}
                  </div>
                  <div className="p-3.5 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between gap-2">
                    <span className="line-clamp-2">{diag.caption}</span>
                    <button
                      type="button"
                      onClick={() => onSelectChapter(diag.chapter, subject)}
                      className="text-indigo-600 dark:text-purple-300 font-bold shrink-0 hover:underline"
                    >
                      Open Ch
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 4: Important Questions & Practice Exercises */}
      {activeTab === 'questions' && (
        <div className="space-y-4">
          {subject.chapters.map((ch) => (
            <div key={ch.id} className="p-5 rounded-2xl glass-surface-blue space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                  Chapter {ch.chapterNumber}: {ch.title}
                </h4>
                <button
                  type="button"
                  onClick={() => onSelectChapter(ch, subject)}
                  className="text-xs font-bold text-indigo-600 dark:text-purple-300 hover:underline shrink-0"
                >
                  Open Worksheet &amp; Drills →
                </button>
              </div>

              <div className="space-y-2.5">
                {ch.notes.importantQuestionsAndAnswers.map((qa, qIdx) => {
                  const key = `imp-${ch.id}-${qIdx}`;
                  const shown = Boolean(revealedAnswers[key]);
                  return (
                    <div key={key} className="p-3.5 rounded-xl glass-card text-xs space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-slate-900 dark:text-white">
                          Q{qIdx + 1}: {qa.question}
                        </span>
                        <span className="text-[11px] font-semibold text-indigo-600 dark:text-purple-300 shrink-0">
                          {qa.type}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleAnswer(key)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-300 hover:underline"
                      >
                        {shown ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                        {shown ? 'Hide Model Answer' : 'Show Model Answer'}
                      </button>
                      {shown && (
                        <p className="p-3 rounded-lg glass-surface-blue text-slate-700 dark:text-slate-200 whitespace-pre-line">
                          {qa.answer}
                        </p>
                      )}
                    </div>
                  );
                })}

                {ch.notes.practiceExercises.map((ex, eIdx) => {
                  const key = `ex-${ch.id}-${eIdx}`;
                  const shown = Boolean(revealedAnswers[key]);
                  return (
                    <div key={key} className="p-3.5 rounded-xl glass-card text-xs space-y-1.5">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        Practice: {ex.question}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400">Hint: {ex.hint}</div>
                      <button
                        type="button"
                        onClick={() => toggleAnswer(key)}
                        className="text-[11px] font-semibold text-indigo-600 dark:text-purple-300 hover:underline"
                      >
                        {shown ? 'Hide Answer Guide' : 'Show Answer Guide'}
                      </button>
                      {shown && (
                        <div className="font-semibold text-emerald-700 dark:text-emerald-300">
                          {ex.answerGuide}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 5: Chapter Quizzes */}
      {activeTab === 'quizzes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subject.chapters.map((ch) => {
            const latestAttempt = quizAttempts.find((a) => a.chapterId === ch.id);
            return (
              <div
                key={ch.id}
                className="p-5 rounded-2xl glass-surface-blue flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-indigo-600 dark:text-purple-300">
                      Chapter {ch.chapterNumber} Quiz
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 tabular-nums">
                      {ch.quizQuestions.length} Questions
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading mt-1">
                    {ch.title}
                  </h4>
                  {latestAttempt ? (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-2 tabular-nums">
                      Last Score: {latestAttempt.correctAnswers}/{latestAttempt.totalQuestions} ({latestAttempt.percentage}%)
                    </p>
                  ) : (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      Includes automatic evaluation and detailed step-by-step explanations.
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {onStartQuiz && ch.quizQuestions.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => onStartQuiz(ch)}
                      className="flex-1 py-2.5 rounded-xl btn-royal text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <FileQuestion className="h-4 w-4" />
                      {latestAttempt ? 'Retake Chapter Quiz' : 'Start Chapter Quiz'}
                    </button>
                  ) : (
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Add quiz questions via Admin Panel.
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 6: Revision & Flashcards */}
      {activeTab === 'revision' && (
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F1E4D] via-[#312E81] to-[#6D28D9] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                Active Recall Revision Centre
              </span>
              <h4 className="text-lg font-bold font-heading mt-0.5">
                {totalFlashcardsCount} Interactive 3D Flashcards in {subject.name}
              </h4>
              <p className="text-xs text-indigo-100/85 mt-0.5">
                Practice definitions, formulas, and laws tailored to CMS examinations.
              </p>
            </div>
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('flashcards', { subjectId: subject.id })}
                className="px-4 py-2.5 rounded-xl bg-white text-[#1E1B4B] hover:bg-indigo-50 text-xs font-bold shrink-0 flex items-center gap-1.5"
              >
                <Layers className="h-4 w-4" /> Practice {subject.name} Flashcards
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subject.chapters.map((ch) => (
              <div key={ch.id} className="p-5 rounded-2xl glass-surface-blue space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                  Ch {ch.chapterNumber}: {ch.title} — Rapid Summary
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {ch.notes.chapterSummary.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 7: Downloadable Notes */}
      {activeTab === 'downloads' && (
        <div className="space-y-3">
          {subject.chapters.map((ch) => (
            <div
              key={ch.id}
              className="p-4 rounded-2xl glass-surface-blue flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Chapter {ch.chapterNumber}: {ch.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Includes explanations, formula sheet, solved examples, and practice summary.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    const text = buildChapterTextExport(subject, ch);
                    const safeSlug = ch.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    downloadTextStudySheet(`${subject.id}-ch${ch.chapterNumber}-${safeSlug}.txt`, text);
                  }}
                  className="px-3.5 py-2 rounded-xl glass-card text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 flex items-center gap-1.5"
                >
                  <Download className="h-3.5 w-3.5" /> Study Sheet (.TXT)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectChapter(ch, subject);
                    setTimeout(() => window.print(), 550);
                  }}
                  className="px-3.5 py-2 rounded-xl btn-royal text-xs font-bold flex items-center gap-1.5"
                >
                  <Printer className="h-3.5 w-3.5" /> Print / Save PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      {zoomedDiagram && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomedDiagram(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070B19]/80 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl glass-card p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 dark:text-purple-300 uppercase">
                  {zoomedDiagram.chapterTitle}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                  {zoomedDiagram.title}
                </h3>
              </div>
              <button
                onClick={() => setZoomedDiagram(null)}
                className="text-xs font-bold px-3.5 py-1.5 rounded-xl glass-surface-blue text-slate-700 dark:text-slate-200 hover:border-indigo-400"
              >
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-xl border border-indigo-200/70 dark:border-indigo-500/25 bg-white p-2">
              {zoomedDiagram.svgFigure ? (
                <MathSvgDiagram figureType={zoomedDiagram.svgFigure} className="w-full max-h-[68vh]" />
              ) : zoomedDiagram.imageUrl ? (
                <img
                  src={zoomedDiagram.imageUrl}
                  alt={zoomedDiagram.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[70vh] object-contain"
                />
              ) : null}
            </div>
            <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">
              {zoomedDiagram.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
