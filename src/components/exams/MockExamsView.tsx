import React, { useState, useEffect, useRef } from 'react';
import { Clock, Award, Play, RotateCcw } from 'lucide-react';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import { ExamAttempt, QuizQuestion, StudentProfile, Subject, SubjectId } from '../../types/index.ts';
import {
  calculateQuizScore,
  formatStudentAnswer,
  formatTime,
  isQuizAnswerCorrect,
  resolveQuizCorrectAnswer,
} from '../../utils/rules.ts';
import {
  recordLearningActivity,
  addMistake,
  loadExamAttempts,
  saveExamAttempt,
} from '../../utils/storage.ts';
import confetti from 'canvas-confetti';

interface MockExamsViewProps {
  subjects?: Subject[];
  profile: StudentProfile;
  onProfileUpdated: (p: StudentProfile) => void;
  onAskAITutor?: (context: any) => void;
}

type ExamQuestion = QuizQuestion & { subjectId?: SubjectId };

interface ExamConfig {
  id: string;
  title: string;
  term: 'Half-Yearly' | 'Annual' | 'Subject Practice';
  subjectName: string;
  durationMinutes: number;
  totalMarks: number;
  description: string;
  questions: ExamQuestion[];
}

const sumMarks = (questions: ExamQuestion[]): number =>
  questions.reduce((sum, q) => sum + (q.marks || 1), 0);

export const MockExamsView: React.FC<MockExamsViewProps> = ({
  subjects = ICSE_SUBJECTS,
  onProfileUpdated,
}) => {
  // Construct exams from real curriculum questions
  const mathQuestions: ExamQuestion[] =
    subjects.find((s) => s.id === 'mathematics')?.chapters.flatMap((c) =>
      c.quizQuestions.map((q) => ({ ...q, subjectId: 'mathematics' as SubjectId }))
    ) || [];
  const scienceQuestions: ExamQuestion[] = (['physics', 'chemistry', 'biology'] as SubjectId[]).flatMap(
    (subId) =>
      subjects.find((s) => s.id === subId)?.chapters.flatMap((c) =>
        c.quizQuestions.map((q) => ({ ...q, subjectId: subId }))
      ) || []
  );
  const allCurriculumQuestions: ExamQuestion[] = subjects.flatMap((s) =>
    s.chapters.flatMap((c) => c.quizQuestions.map((q) => ({ ...q, subjectId: s.id })))
  );

  const mathSlice = mathQuestions.slice(0, 5);
  const scienceSlice = scienceQuestions.slice(0, 5);
  const grandSlice = allCurriculumQuestions.slice(0, 7);

  const availableExams: ExamConfig[] = [
    {
      id: 'exam-hy-math',
      title: 'CMS Class 8 Half-Yearly Mathematics Mock Exam',
      term: 'Half-Yearly',
      subjectName: 'Mathematics',
      durationMinutes: 15,
      totalMarks: sumMarks(mathSlice),
      description: 'Rational numbers, standard form, inverse operations, and linear coordinate graphs.',
      questions: mathSlice,
    },
    {
      id: 'exam-hy-science',
      title: 'Class 8 Combined Science (Physics, Chemistry & Biology) Mock',
      term: 'Half-Yearly',
      subjectName: 'Science Group',
      durationMinutes: 20,
      totalMarks: sumMarks(scienceSlice),
      description: 'Kinetic theory of matter, atomic structure, and plant vascular transport systems.',
      questions: scienceSlice,
    },
    {
      id: 'exam-annual-grand',
      title: 'Comprehensive ICSE Class 8 Term Assessment',
      term: 'Annual',
      subjectName: 'Multi-Subject Assessment',
      durationMinutes: 30,
      totalMarks: sumMarks(grandSlice),
      description: 'Comprehensive test covering Mathematics, Sciences, History, Geography, and English.',
      questions: grandSlice,
    },
  ];

  const [activeExam, setActiveExam] = useState<ExamConfig | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [examHistory, setExamHistory] = useState<ExamAttempt[]>(() => loadExamAttempts());
  const submittingRef = useRef(false);

  // Timer countdown (pure state decrement)
  useEffect(() => {
    if (!activeExam || isExamCompleted) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [activeExam, isExamCompleted]);

  const handleStartExam = (exam: ExamConfig) => {
    if (exam.questions.length === 0) return;
    submittingRef.current = false;
    setActiveExam(exam);
    setCurrentQIndex(0);
    setAnswers({});
    setSecondsRemaining(exam.durationMinutes * 60);
    setIsExamCompleted(false);
  };

  const handleSelectOption = (qId: string, val: any) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmitExam = () => {
    if (!activeExam || isExamCompleted || submittingRef.current) return;
    submittingRef.current = true;
    setIsExamCompleted(true);

    let correctCount = 0;
    activeExam.questions.forEach((q) => {
      const userAns = answers[q.id];
      const isCorrect = isQuizAnswerCorrect(q, userAns);

      if (isCorrect) {
        correctCount++;
      } else {
        addMistake({
          questionText: q.question,
          subjectId: q.subjectId || 'mathematics',
          chapterTitle: activeExam.title,
          userAnswer: formatStudentAnswer(userAns, 'No Answer'),
          correctAnswer: String(resolveQuizCorrectAnswer(q)),
          explanation: q.explanation,
        });
      }
    });

    const timeSpentSeconds = Math.max(0, activeExam.durationMinutes * 60 - secondsRemaining);
    const scoreResult = calculateQuizScore({
      totalQuestions: activeExam.questions.length,
      correctAnswers: correctCount,
      timeSpentSeconds,
    });

    const marksScored = activeExam.questions.reduce((sum, q) => {
      return isQuizAnswerCorrect(q, answers[q.id]) ? sum + (q.marks || 1) : sum;
    }, 0);
    const totalPossibleMarks = sumMarks(activeExam.questions) || activeExam.totalMarks;

    const examAttempt: ExamAttempt = {
      id: `exam-${Date.now()}`,
      examId: activeExam.id,
      examTitle: activeExam.title,
      term: activeExam.term,
      subjectName: activeExam.subjectName,
      score: scoreResult.score,
      correctAnswers: correctCount,
      totalQuestions: activeExam.questions.length,
      marksScored,
      totalMarks: totalPossibleMarks,
      percentage: scoreResult.percentage,
      timeTakenSeconds: timeSpentSeconds,
      timestamp: new Date().toISOString(),
    };
    saveExamAttempt(examAttempt);
    setExamHistory(loadExamAttempts());

    const { profile: updatedProfile } = recordLearningActivity('exam_attempt', {
      xpReward: scoreResult.xpEarned + 40,
    });
    onProfileUpdated(updatedProfile);

    if (scoreResult.passed) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  // Auto-submit safely outside the timer state updater when countdown reaches zero
  useEffect(() => {
    if (activeExam && !isExamCompleted && secondsRemaining === 0) {
      handleSubmitExam();
    }
  }, [activeExam, isExamCompleted, secondsRemaining]);

  // Exam in progress view
  if (activeExam && !isExamCompleted) {
    const q = activeExam.questions[currentQIndex];
    if (!q) {
      return null;
    }
    return (
      <div className="max-w-3xl mx-auto py-6">
        {/* Exam top HUD */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-4 mb-6">
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
              {activeExam.title}
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              Question {currentQIndex + 1} of {activeExam.questions.length}
            </span>
          </div>

          <div
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold ${
              secondsRemaining < 120
                ? 'bg-rose-600 text-white'
                : 'glass-surface-blue text-indigo-700 dark:text-indigo-300'
            }`}
          >
            <Clock className="h-4 w-4" />
            <span className="tabular-nums">{formatTime(secondsRemaining)} Remaining</span>
          </div>
        </div>

        {/* Question surface */}
        <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tabular-nums">
              Question {currentQIndex + 1} ({q.marks} Marks)
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">{q.difficulty} level</span>
          </div>

          <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white leading-relaxed">
            {q.question}
          </h3>

          {/* Options */}
          {q.options && (
            <div className="space-y-3">
              {q.options.map((opt, oIdx) => {
                const isSelected = answers[q.id] === opt;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(q.id, opt)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border text-sm text-left transition-all ${
                      isSelected
                        ? 'border-[#4F46E5] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-100 font-semibold ring-2 ring-indigo-500/20'
                        : 'glass-surface-blue hover:border-indigo-400 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span>{opt}</span>
                    <div
                      className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-[#4F46E5] bg-[#4F46E5]' : 'border-slate-300 dark:border-slate-600'
                      }`}
                    >
                      {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* True / False */}
          {q.type === 'true_false' && (
            <div className="grid grid-cols-2 gap-4">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  onClick={() => handleSelectOption(q.id, val)}
                  className={`p-4 rounded-2xl border text-center font-bold text-base transition-all ${
                    answers[q.id] === val
                      ? 'border-[#4F46E5] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-200 ring-2 ring-indigo-500/20'
                      : 'glass-surface-blue hover:border-indigo-400 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {val ? 'True' : 'False'}
                </button>
              ))}
            </div>
          )}

          {/* Fill in the blank */}
          {q.type === 'fill_blank' && (
            <input
              type="text"
              value={answers[q.id] || ''}
              onChange={(e) => handleSelectOption(q.id, e.target.value)}
              placeholder="Type your answer here..."
              className="w-full rounded-xl glass-surface-blue p-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-indigo-100/80 dark:border-indigo-500/20">
            <button
              onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQIndex === 0}
              className="px-4 py-2 rounded-xl glass-surface-blue text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:opacity-40"
            >
              Previous
            </button>

            {currentQIndex < activeExam.questions.length - 1 ? (
              <button
                onClick={() => setCurrentQIndex((prev) => prev + 1)}
                className="px-6 py-2.5 rounded-xl btn-royal text-xs font-bold"
              >
                Next Question →
              </button>
            ) : (
              <button
                onClick={handleSubmitExam}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-emerald-500/25 transition-all"
              >
                Submit Examination
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Exam result report
  if (activeExam && isExamCompleted) {
    let correctCount = 0;
    activeExam.questions.forEach((q) => {
      if (isQuizAnswerCorrect(q, answers[q.id])) correctCount++;
    });

    const scoreResult = calculateQuizScore({
      totalQuestions: activeExam.questions.length,
      correctAnswers: correctCount,
      timeSpentSeconds: activeExam.durationMinutes * 60 - secondsRemaining,
    });

    const marksScored = activeExam.questions.reduce((sum, q) => {
      return isQuizAnswerCorrect(q, answers[q.id]) ? sum + (q.marks || 1) : sum;
    }, 0);

    return (
      <div className="max-w-3xl mx-auto py-8">
        <div className="rounded-3xl glass-card p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A1128] via-[#4F46E5] to-[#7C3AED] text-white shadow-lg shadow-indigo-500/30 mb-4">
            <Award className="h-8 w-8" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {activeExam.term} Examination Result
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
            {activeExam.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 tabular-nums">
            Final Mark:{' '}
            <strong className="text-indigo-600 dark:text-indigo-400">
              {marksScored} / {activeExam.totalMarks} Marks
            </strong>{' '}
            ({scoreResult.score}/{activeExam.questions.length} Correct • {scoreResult.percentage}% • Grade {scoreResult.accuracyGrade})
          </p>

          {/* Answer Breakdown list */}
          <div className="my-8 text-left space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-indigo-100/80 dark:border-indigo-500/20 pb-2">
              Question-by-Question Evaluation:
            </h3>
            {activeExam.questions.map((q, qIdx) => {
              const userAns = answers[q.id];
              const isCorrect = isQuizAnswerCorrect(q, userAns);
              const canonical = resolveQuizCorrectAnswer(q);
              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
                    isCorrect
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/25 border-emerald-200 dark:border-emerald-900/40'
                      : 'bg-rose-50/70 dark:bg-rose-950/25 border-rose-200 dark:border-rose-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white gap-2">
                    <span>Q{qIdx + 1}: {q.question}</span>
                    <span className={`shrink-0 ${isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Your answer: <strong>{formatStudentAnswer(userAns, 'No Answer')}</strong> | Correct: <strong>{formatStudentAnswer(canonical)}</strong>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 italic">
                    Reason: {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handleStartExam(activeExam)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl glass-surface-blue text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-indigo-400"
            >
              <RotateCcw className="h-4 w-4" /> Retake Exam
            </button>
            <button
              onClick={() => setActiveExam(null)}
              className="px-6 py-2.5 rounded-xl btn-royal text-xs font-bold"
            >
              Return to Examination List
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Available Exams List
  return (
    <div className="space-y-6 pb-16">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Examination Preparation Hub
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
          Mock Examinations & Term Assessments
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Simulate realistic ICSE Class 8 examinations with timed countdowns, objective marking, and detailed answer analysis. (Practice papers based on CMS syllabus standards).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableExams.map((exam) => (
          <div
            key={exam.id}
            className="rounded-2xl glass-card p-6 flex flex-col justify-between space-y-4 hover:-translate-y-0.5 hover:border-indigo-400/70 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-2.5">
                <span className="text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-[11px] font-bold">
                  {exam.term} · {exam.subjectName}
                </span>
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                  <Clock className="h-3.5 w-3.5 text-indigo-500" />
                  {exam.durationMinutes} mins
                </span>
              </div>

              <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
                {exam.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {exam.description}
              </p>
            </div>

            <div className="pt-4 border-t border-indigo-100/80 dark:border-indigo-500/20 flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 tabular-nums">
                {exam.questions.length} Questions • {exam.totalMarks} Marks
              </span>
              <button
                onClick={() => handleStartExam(exam)}
                disabled={exam.questions.length === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl btn-royal text-xs font-bold shrink-0 disabled:opacity-40"
              >
                <Play className="h-3.5 w-3.5" /> Start Test
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Saved Examination Marks History */}
      <div className="rounded-3xl glass-card p-6 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3">
          <div>
            <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              Recent Examination Marks
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Your mock exam scores are recorded privately to track term readiness across devices.
            </p>
          </div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300 tabular-nums">
            {examHistory.length} Completed
          </span>
        </div>

        {examHistory.length === 0 ? (
          <p className="text-xs text-slate-500 dark:text-slate-400 py-2">
            No mock examinations completed yet. Start any paper above to record your first examination mark.
          </p>
        ) : (
          <div className="space-y-2.5">
            {examHistory.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-2xl glass-surface-blue text-xs"
              >
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 dark:text-white truncate">
                    {item.examTitle}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 tabular-nums">
                    {item.term} · {item.subjectName} ·{' '}
                    {new Date(item.timestamp).toLocaleDateString()} · Time{' '}
                    {formatTime(item.timeTakenSeconds)}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 tabular-nums">
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {item.marksScored}/{item.totalMarks} Marks ({item.correctAnswers}/{item.totalQuestions} Qs)
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-lg font-bold ${
                      item.percentage >= 75
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
                        : item.percentage >= 50
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300'
                    }`}
                  >
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
