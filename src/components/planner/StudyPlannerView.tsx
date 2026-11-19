import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Plus,
  Trash2,
  Sparkles,
} from 'lucide-react';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import { StudyTask, StudentProfile, Subject, SubjectId } from '../../types/index.ts';
import { loadStudyTasks, saveStudyTasks, recordLearningActivity } from '../../utils/storage.ts';
import { generateStudyPlan } from '../../utils/rules.ts';

interface StudyPlannerViewProps {
  subjects?: Subject[];
  profile: StudentProfile;
  onProfileUpdated: (p: StudentProfile) => void;
}

export const StudyPlannerView: React.FC<StudyPlannerViewProps> = ({
  subjects = ICSE_SUBJECTS,
  profile,
  onProfileUpdated,
}) => {
  const [tasks, setTasks] = useState<StudyTask[]>(loadStudyTasks());
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('mathematics');
  const [estimatedMinutes, setEstimatedMinutes] = useState(30);

  // Smart schedule generator params
  const [daysToExam, setDaysToExam] = useState(30);
  const [dailyMinutes, setDailyMinutes] = useState(profile.dailyGoalMinutes || 45);
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);

  const handleToggleTask = (taskId: string) => {
    const updated = tasks.map((t) => {
      if (t.id === taskId) {
        const nextState = !t.completed;
        if (nextState) {
          // Record activity to increase streak!
          const { profile: updatedProfile } = recordLearningActivity('read_chapter', {
            xpReward: 25,
          });
          onProfileUpdated(updatedProfile);
        }
        return { ...t, completed: nextState };
      }
      return t;
    });
    setTasks(updated);
    saveStudyTasks(updated);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: StudyTask = {
      id: 'task-' + Date.now(),
      title: newTaskTitle.trim(),
      subjectId: selectedSubject,
      chapterId: 'ch-custom',
      targetDate: new Date().toISOString().split('T')[0],
      estimatedMinutes,
      completed: false,
    };

    const updated = [newTask, ...tasks];
    setTasks(updated);
    saveStudyTasks(updated);
    setNewTaskTitle('');
  };

  const handleDeleteTask = (taskId: string) => {
    const updated = tasks.filter((t) => t.id !== taskId);
    setTasks(updated);
    saveStudyTasks(updated);
  };

  const handleGeneratePlan = () => {
    const totalChapters = subjects.reduce((sum, s) => sum + s.chapters.length, 0);
    const remainingCount = Math.max(1, totalChapters - profile.completedChapterIds.length);
    const plan = generateStudyPlan(remainingCount, daysToExam, dailyMinutes);
    setGeneratedPlan(plan);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Academic Time Management
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
          Smart ICSE Study Planner
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Organize daily study goals, prepare for CMS Half-Yearly examinations, and track progress.
        </p>
      </div>

      {/* Plan generator box */}
      <section className="rounded-3xl bg-gradient-to-br from-[#0A1128] via-[#1B1F5C] to-[#3B1775] p-6 sm:p-8 text-white shadow-xl border border-indigo-500/30">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-200 mb-1">
          <Sparkles className="h-4 w-4 text-amber-300" /> AI Study Schedule Generator
        </div>
        <h2 className="text-xl font-bold font-heading">
          Personalized Timetable Recommendation
        </h2>
        <p className="text-xs text-indigo-100/80 mt-1 max-w-2xl">
          Enter your remaining days until examination and target daily study minutes to compute your optimal pace.
        </p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-semibold text-indigo-200 block mb-1">
              Days Until Examination:
            </label>
            <input
              type="number"
              min="5"
              max="180"
              value={daysToExam}
              onChange={(e) => setDaysToExam(Number(e.target.value))}
              className="w-full rounded-xl bg-white/10 border border-white/20 p-2.5 text-xs text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-indigo-200 block mb-1">
              Available Daily Study Time:
            </label>
            <input
              type="number"
              min="15"
              max="240"
              value={dailyMinutes}
              onChange={(e) => setDailyMinutes(Number(e.target.value))}
              className="w-full rounded-xl bg-white/10 border border-white/20 p-2.5 text-xs text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleGeneratePlan}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] font-bold text-xs text-white shadow-lg shadow-indigo-950/40 transition-all flex items-center justify-center gap-2"
            >
              Generate Optimal Schedule
            </button>
          </div>
        </div>

        {generatedPlan && (
          <div className="mt-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <span className="text-[11px] text-indigo-200 block">Recommended Daily Pace</span>
              <span className="text-xl font-extrabold text-white tabular-nums">
                {generatedPlan.recommendedDailyMinutes} Mins / Day
              </span>
            </div>
            <div>
              <span className="text-[11px] text-indigo-200 block">Target Coverage Rate</span>
              <span className="text-xl font-extrabold text-white tabular-nums">
                {generatedPlan.chaptersPerWeek} Chapters / Week
              </span>
            </div>
            <div>
              <span className="text-[11px] text-indigo-200 block">Estimated Completion</span>
              <span className="text-xl font-extrabold text-amber-300 tabular-nums">
                {generatedPlan.estimatedCompletionDays} Days
              </span>
            </div>
          </div>
        )}
      </section>

      {/* Daily Task List & Task Creator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Creator */}
        <div className="rounded-2xl glass-card p-6 h-fit">
          <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2 mb-4">
            <Plus className="h-4 w-4 text-indigo-600 dark:text-indigo-400" /> Add New Study Goal
          </h3>

          <form onSubmit={handleAddTask} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Subject:
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value as SubjectId)}
                className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Goal / Chapter Task:
              </label>
              <input
                type="text"
                required
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="e.g. Solve 5 problems of Linear Equations"
                className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Estimated Duration (Minutes):
              </label>
              <input
                type="number"
                min="10"
                max="120"
                value={estimatedMinutes}
                onChange={(e) => setEstimatedMinutes(Number(e.target.value))}
                className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl btn-royal font-bold text-xs"
            >
              Add to Daily Plan
            </button>
          </form>
        </div>

        {/* Tasks Checklist */}
        <div className="lg:col-span-2 rounded-2xl glass-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400" /> Today’s Study Checklist ({tasks.length})
            </h3>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
              {tasks.filter((t) => t.completed).length} of {tasks.length} completed
            </span>
          </div>

          <div className="space-y-2.5">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                  task.completed
                    ? 'bg-slate-50/70 dark:bg-slate-800/35 border-slate-200/80 dark:border-slate-800 opacity-70'
                    : 'glass-surface-blue hover:border-indigo-300 dark:hover:border-indigo-500/40'
                }`}
              >
                <div
                  onClick={() => handleToggleTask(task.id)}
                  className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                >
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                      task.completed
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'border-indigo-300 dark:border-indigo-500/40 bg-white/80 dark:bg-[#0A1128]'
                    }`}
                  >
                    {task.completed && <CheckCircle2 className="h-3.5 w-3.5" />}
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-xs font-medium text-slate-900 dark:text-white truncate ${
                        task.completed ? 'line-through text-slate-400 dark:text-slate-500' : ''
                      }`}
                    >
                      {task.title}
                    </p>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 capitalize tabular-nums">
                      {task.subjectId.replace('_', ' ')} • {task.estimatedMinutes} mins
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                  title="Remove task"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
