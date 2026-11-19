import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Clock,
  Award,
  RotateCcw,
  BookOpen,
  Bot,
  Flame,
} from 'lucide-react';
import { Chapter, QuizQuestion, Subject, StudentProfile, QuizAttempt } from '../../types/index.ts';
import {
  calculateQuizScore,
  formatStudentAnswer,
  formatTime,
  hasSubmittedAnswer,
  isQuizAnswerCorrect,
  resolveQuizCorrectAnswer,
} from '../../utils/rules.ts';
import { recordLearningActivity, saveQuizAttempt, addMistake } from '../../utils/storage.ts';
import confetti from 'canvas-confetti';

interface QuizPlayerProps {
  chapter: Chapter;
  subject: Subject;
  profile: StudentProfile;
  onBack: () => void;
  onProfileUpdated: (p: StudentProfile) => void;
  onAskAITutor: (context: { chapterTitle: string; subjectName: string; query?: string }) => void;
  onReviewChapter: () => void;
}

const getDraftStorageKey = (chapterId: string) => `icse_quiz_draft_${chapterId}`;

export const QuizPlayer: React.FC<QuizPlayerProps> = ({
  chapter,
  subject,
  onBack,
  onProfileUpdated,
  onAskAITutor,
  onReviewChapter,
}) => {
  const questions: QuizQuestion[] = chapter.quizQuestions || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, any>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [textInputAnswer, setTextInputAnswer] = useState('');
  const submittingRef = useRef(false);

  // Restore draft or reset when chapter changes
  useEffect(() => {
    submittingRef.current = false;
    setIsFinished(false);
    setTextInputAnswer('');
    try {
      const raw = sessionStorage.getItem(getDraftStorageKey(chapter.id));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          const safeIdx = Math.min(
            Math.max(0, Number(parsed.currentIndex) || 0),
            Math.max(0, questions.length - 1)
          );
          setCurrentIndex(safeIdx);
          setSelectedAnswers(parsed.selectedAnswers || {});
          setCheckedQuestions(parsed.checkedQuestions || {});
          setSecondsElapsed(Number(parsed.secondsElapsed) || 0);
          return;
        }
      }
    } catch {
      // ignore storage errors
    }
    setCurrentIndex(0);
    setSelectedAnswers({});
    setCheckedQuestions({});
    setSecondsElapsed(0);
  }, [chapter.id, questions.length]);

  // Persist draft in sessionStorage while quiz is active
  useEffect(() => {
    if (isFinished || questions.length === 0) return;
    try {
      sessionStorage.setItem(
        getDraftStorageKey(chapter.id),
        JSON.stringify({
          currentIndex,
          selectedAnswers,
          checkedQuestions,
          secondsElapsed,
        })
      );
    } catch {
      // ignore storage quota issues
    }
  }, [chapter.id, currentIndex, selectedAnswers, checkedQuestions, secondsElapsed, isFinished, questions.length]);

  // Sync fill_blank text box when navigating between questions
  useEffect(() => {
    const q = questions[currentIndex];
    if (!q) return;
    if (q.type === 'fill_blank') {
      const existing = selectedAnswers[q.id];
      setTextInputAnswer(typeof existing === 'string' ? existing : '');
    } else {
      setTextInputAnswer('');
    }
  }, [currentIndex, chapter.id]);

  // Timer
  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (option: string | boolean) => {
    if (!currentQ || checkedQuestions[currentQ.id]) return; // locked after checking
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: option }));
  };

  const handleCheckAnswer = () => {
    if (!currentQ) return;
    const currentAns = selectedAnswers[currentQ.id];
    if (!hasSubmittedAnswer(currentAns, textInputAnswer)) return;

    if (currentQ.type === 'fill_blank' && textInputAnswer.trim()) {
      setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: textInputAnswer.trim() }));
    }

    setCheckedQuestions((prev) => ({ ...prev, [currentQ.id]: true }));
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setTextInputAnswer('');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (submittingRef.current || isFinished) return;
    submittingRef.current = true;
    setIsFinished(true);

    try {
      sessionStorage.removeItem(getDraftStorageKey(chapter.id));
    } catch {
      // ignore
    }

    let correctCount = 0;
    const wrongIds: string[] = [];

    questions.forEach((q) => {
      const userAns = selectedAnswers[q.id];
      const isCorrect = isQuizAnswerCorrect(q, userAns);

      if (isCorrect) {
        correctCount++;
      } else {
        wrongIds.push(q.id);
        addMistake({
          questionText: q.question,
          subjectId: subject.id,
          chapterTitle: `Ch ${chapter.chapterNumber}: ${chapter.title}`,
          userAnswer: formatStudentAnswer(userAns),
          correctAnswer: String(resolveQuizCorrectAnswer(q)),
          explanation: q.explanation,
        });
      }
    });

    const scoreResult = calculateQuizScore({
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      timeSpentSeconds: secondsElapsed,
    });

    const attempt: QuizAttempt = {
      id: 'attempt-' + Date.now(),
      chapterId: chapter.id,
      subjectId: subject.id,
      timestamp: new Date().toISOString(),
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      score: scoreResult.score,
      percentage: scoreResult.percentage,
      timeTakenSeconds: secondsElapsed,
      wrongQuestionIds: wrongIds,
    };
    saveQuizAttempt(attempt);

    const { profile: updatedProfile } = recordLearningActivity('complete_quiz', {
      chapterId: chapter.id,
      subjectId: subject.id,
      xpReward: scoreResult.xpEarned,
    });
    onProfileUpdated(updatedProfile);

    if (scoreResult.passed) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22c55e', '#3b82f6', '#f59e0b'],
      });
    }
  };

  const handleRetryQuiz = () => {
    submittingRef.current = false;
    try {
      sessionStorage.removeItem(getDraftStorageKey(chapter.id));
    } catch {
      // ignore
    }
    setIsFinished(false);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setCheckedQuestions({});
    setTextInputAnswer('');
    setSecondsElapsed(0);
  };

  if (questions.length === 0 || !currentQ) {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <div className="p-8 rounded-3xl glass-card">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
            No questions added for this chapter yet.
          </h3>
          <button
            onClick={onBack}
            className="mt-4 px-5 py-2.5 rounded-xl btn-royal text-xs font-semibold"
          >
            Back to Chapter
          </button>
        </div>
      </div>
    );
  }

  // Quiz summary / performance report view
  if (isFinished) {
    let correctCount = 0;
    questions.forEach((q) => {
      if (isQuizAnswerCorrect(q, selectedAnswers[q.id])) correctCount++;
    });

    const scoreResult = calculateQuizScore({
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      timeSpentSeconds: secondsElapsed,
    });

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto py-8"
      >
        <div className="rounded-3xl glass-card p-8 text-center">
          <motion.div
            initial={{ scale: 0.6, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.1 }}
            className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-white shadow-lg mb-5 ${
              scoreResult.passed
                ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-emerald-500/30'
                : 'bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] shadow-indigo-500/30'
            }`}
          >
            {scoreResult.passed ? <Award className="h-10 w-10" /> : <RotateCcw className="h-10 w-10" />}
          </motion.div>

          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {subject.name} • Chapter {chapter.chapterNumber} Performance Report
          </span>

          <h2 className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
            {scoreResult.passed ? 'Excellent Performance!' : 'Needs More Revision'}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Grade: <strong className="text-indigo-600 dark:text-indigo-400">{scoreResult.accuracyGrade}</strong> ({scoreResult.percentage}%)
          </p>

          {/* Metric Badges */}
          <div className="grid grid-cols-3 gap-3 my-6">
            <div className="p-3.5 rounded-xl glass-surface-blue">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Score</span>
              <span className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">
                {scoreResult.score} / {questions.length}
              </span>
            </div>
            <div className="p-3.5 rounded-xl glass-surface-blue">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Time Taken</span>
              <span className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">
                {formatTime(secondsElapsed)}
              </span>
            </div>
            <div className="p-3.5 rounded-xl glass-surface-blue">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">XP Earned</span>
              <span className="text-xl font-bold text-amber-500 tabular-nums">
                +{scoreResult.xpEarned} XP
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-orange-50/90 dark:bg-orange-950/25 border border-orange-200 dark:border-orange-900/40 text-xs text-orange-700 dark:text-orange-300 font-medium flex items-center justify-center gap-2 mb-6">
            <Flame className="h-4 w-4 text-orange-500 shrink-0" />
            <span>Daily Learning Streak point credited! Incorrect answers saved to Mistake Notebook.</span>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={handleRetryQuiz}
              className="flex items-center justify-center gap-1.5 p-3 rounded-xl glass-surface-blue hover:border-indigo-400 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
            >
              <RotateCcw className="h-4 w-4" /> Retry Quiz
            </button>
            <button
              onClick={onReviewChapter}
              className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 text-xs font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 transition-colors"
            >
              <BookOpen className="h-4 w-4" /> Revise Chapter
            </button>
            <button
              onClick={() =>
                onAskAITutor({
                  chapterTitle: chapter.title,
                  subjectName: subject.name,
                  query: `I just took the chapter quiz for ${chapter.title}. Can you explain the concepts behind the questions I might have missed?`,
                })
              }
              className="flex items-center justify-center gap-1.5 p-3 rounded-xl btn-royal text-xs font-bold"
            >
              <Bot className="h-4 w-4" /> Ask SIM SIM Tutor
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const isChecked = Boolean(checkedQuestions[currentQ.id]);
  const userAns = selectedAnswers[currentQ.id];
  const canonicalCorrect = resolveQuizCorrectAnswer(currentQ);
  const isCorrect = isChecked ? isQuizAnswerCorrect(currentQ, userAns) : false;

  return (
    <div className="max-w-3xl mx-auto py-6">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-indigo-100/80 dark:border-indigo-500/20 pb-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Exit Quiz
        </button>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="text-slate-500 dark:text-slate-400 tabular-nums">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl glass-surface-blue text-slate-700 dark:text-slate-200 tabular-nums">
            <Clock className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            {formatTime(secondsElapsed)}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-indigo-100/80 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={false}
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#4F46E5] progress-animated rounded-full"
        />
      </div>

      {/* Compact Question Jump Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 no-scrollbar">
        {questions.map((q, idx) => {
          const qChecked = Boolean(checkedQuestions[q.id]);
          const qCorrect = qChecked ? isQuizAnswerCorrect(q, selectedAnswers[q.id]) : false;
          const active = idx === currentIndex;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-7 min-w-7 px-2 rounded-lg text-[11px] font-bold tabular-nums transition-all shrink-0 ${
                active
                  ? 'btn-royal'
                  : qChecked
                  ? qCorrect
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60'
                    : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-300 dark:border-rose-700/60'
                  : 'glass-surface-blue text-slate-600 dark:text-slate-300'
              }`}
              aria-label={`Jump to question ${idx + 1}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Question Card with Smooth Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ.id}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl glass-card p-6 sm:p-8 space-y-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {currentQ.type === 'mcq'
                ? 'Multiple Choice'
                : currentQ.type === 'true_false'
                ? 'True or False'
                : currentQ.type === 'fill_blank'
                ? 'Fill in the Blank'
                : 'HOTS Application Question'}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tabular-nums">
              {currentQ.marks} {currentQ.marks === 1 ? 'Mark' : 'Marks'}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options for MCQ / HOTS */}
          {(currentQ.type === 'mcq' || currentQ.type === 'hots') && currentQ.options && (
            <div className="space-y-3">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = userAns === opt;
                const isCanonicalOption = opt === canonicalCorrect;
                let btnStyle =
                  'glass-surface-blue hover:border-indigo-400 dark:hover:border-indigo-400/60 text-slate-800 dark:text-slate-200';

                if (isChecked) {
                  if (isCanonicalOption) {
                    btnStyle =
                      'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/35 text-emerald-800 dark:text-emerald-200 font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle =
                      'border-rose-500 bg-rose-50 dark:bg-rose-950/35 text-rose-800 dark:text-rose-200';
                  }
                } else if (isSelected) {
                  btnStyle =
                    'border-[#4F46E5] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-100 font-semibold ring-2 ring-indigo-500/25';
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isChecked}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border text-sm text-left transition-all ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isChecked && isCanonicalOption && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    )}
                    {isChecked && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* True or False */}
          {currentQ.type === 'true_false' && (
            <div className="grid grid-cols-2 gap-4">
              {[true, false].map((val) => {
                const isSelected = userAns === val;
                let style = 'glass-surface-blue hover:border-indigo-400 text-slate-800 dark:text-slate-200';
                if (isChecked) {
                  if (val === canonicalCorrect) {
                    style =
                      'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/35 font-bold text-emerald-800 dark:text-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    style =
                      'border-rose-500 bg-rose-50 dark:bg-rose-950/35 text-rose-800 dark:text-rose-200';
                  }
                } else if (isSelected) {
                  style =
                    'border-[#4F46E5] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-100 font-semibold ring-2 ring-indigo-500/25';
                }

                return (
                  <button
                    key={String(val)}
                    onClick={() => handleSelectOption(val)}
                    disabled={isChecked}
                    className={`p-4 rounded-2xl border text-center font-bold text-base transition-all ${style}`}
                  >
                    {val ? 'True' : 'False'}
                  </button>
                );
              })}
            </div>
          )}

          {/* Fill in blank */}
          {currentQ.type === 'fill_blank' && (
            <div className="space-y-3">
              <input
                type="text"
                value={isChecked ? String(userAns || '') : textInputAnswer}
                onChange={(e) => setTextInputAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isChecked && hasSubmittedAnswer(userAns, textInputAnswer)) {
                    e.preventDefault();
                    handleCheckAnswer();
                  }
                }}
                disabled={isChecked}
                placeholder="Type your answer here..."
                className="w-full p-3.5 rounded-xl glass-surface-blue text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          {/* Answer feedback & Explanation box */}
          {isChecked && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`p-4 rounded-2xl text-xs space-y-2 border ${
                isCorrect
                  ? 'bg-emerald-50/90 dark:bg-emerald-950/25 border-emerald-300 dark:border-emerald-900/50'
                  : 'bg-rose-50/90 dark:bg-rose-950/25 border-rose-300 dark:border-rose-900/50'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    <span className="text-emerald-800 dark:text-emerald-200">Correct! (+{currentQ.marks} marks)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-rose-600" />
                    <span className="text-rose-800 dark:text-rose-200">
                      Incorrect. Correct Answer: {formatStudentAnswer(canonicalCorrect)}
                    </span>
                  </>
                )}
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>Explanation:</strong> {currentQ.explanation}
              </p>
            </motion.div>
          )}

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-indigo-100/80 dark:border-indigo-500/20">
            <button
              onClick={() =>
                onAskAITutor({
                  chapterTitle: chapter.title,
                  subjectName: subject.name,
                  query: `Can you explain question ${currentIndex + 1}: "${currentQ.question}" and how to think about it step by step?`,
                })
              }
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
            >
              <Bot className="h-4 w-4" /> Ask SIM SIM for Hint
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-xl glass-surface-blue text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:opacity-40"
              >
                ← Previous
              </button>

              {!isChecked ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={!hasSubmittedAnswer(userAns, textInputAnswer)}
                  className="px-6 py-2.5 rounded-xl btn-royal disabled:opacity-40 text-xs font-bold"
                >
                  Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl btn-royal text-xs font-bold"
                >
                  {currentIndex < questions.length - 1 ? 'Next Question →' : 'Finish & View Report'}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
