import { lazy, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { WifiOff, Wifi, X, GraduationCap } from 'lucide-react';
import { Header } from './components/layout/Header.tsx';
import { Sidebar } from './components/layout/Sidebar.tsx';
import { AnimatedBackground } from './components/layout/AnimatedBackground.tsx';
import { AuthScreen } from './components/auth/AuthScreen.tsx';
import { OnboardingModal } from './components/auth/OnboardingModal.tsx';
import { StudyDashboard } from './components/dashboard/StudyDashboard.tsx';
import { SubjectsView } from './components/subjects/SubjectsView.tsx';
import { ChapterReader } from './components/chapters/ChapterReader.tsx';
import { QuizPlayer } from './components/quiz/QuizPlayer.tsx';
import { SmartSearchModal } from './components/search/SmartSearchModal.tsx';
import { AITutorChat } from './components/tutor/AITutorChat.tsx';
import { StreakModal } from './components/streak/StreakModal.tsx';
import { MistakeNotebook } from './components/extras/MistakeNotebook.tsx';
import { ParentView } from './components/extras/ParentView.tsx';
import { HelpSupportView } from './components/extras/HelpSupportView.tsx';

const VisualLearningGallery = lazy(() =>
  import('./components/visual/VisualLearningGallery.tsx').then((m) => ({
    default: m.VisualLearningGallery,
  }))
);
const MockExamsView = lazy(() =>
  import('./components/exams/MockExamsView.tsx').then((m) => ({
    default: m.MockExamsView,
  }))
);
const FlashcardsView = lazy(() =>
  import('./components/flashcards/FlashcardsView.tsx').then((m) => ({
    default: m.FlashcardsView,
  }))
);
const StudyPlannerView = lazy(() =>
  import('./components/planner/StudyPlannerView.tsx').then((m) => ({
    default: m.StudyPlannerView,
  }))
);
const DownloadsView = lazy(() =>
  import('./components/extras/DownloadsView.tsx').then((m) => ({
    default: m.DownloadsView,
  }))
);
const SettingsView = lazy(() =>
  import('./components/extras/SettingsView.tsx').then((m) => ({
    default: m.SettingsView,
  }))
);
const AboutMeView = lazy(() =>
  import('./components/extras/AboutMeView.tsx').then((m) => ({
    default: m.AboutMeView,
  }))
);
const AdminPanel = lazy(() =>
  import('./components/admin/AdminPanel.tsx').then((m) => ({
    default: m.AdminPanel,
  }))
);
const LeaderboardView = lazy(() =>
  import('./components/leaderboard/LeaderboardView.tsx').then((m) => ({
    default: m.LeaderboardView,
  }))
);

import {
  StudentProfile,
  Subject,
  Chapter,
  SyncStatusState,
} from './types/index.ts';
import {
  createFreshStudentProfile,
  flushOfflineSyncQueue,
  loadStudentProfile,
  saveStudentProfile,
  setActiveStorageUid,
  subscribeSyncStatus,
  syncProfileWithFirestore,
} from './utils/storage.ts';
import { syncLeaderboardEntry } from './utils/leaderboard.ts';
import {
  auth,
  checkIsUserAdmin,
  getPrimaryAuthProvider,
  isVerifiedStudentUser,
  logoutUser,
  signInWithGoogle,
} from './utils/firebase.ts';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import {
  getMergedSubjects,
  subscribeCloudCurriculum,
  subscribeContentDatabase,
} from './utils/contentDatabase.ts';

export default function App() {
  const [subjects, setSubjects] = useState<Subject[]>(() => getMergedSubjects());
  const [profile, setProfile] = useState<StudentProfile>(() => createFreshStudentProfile());
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [authReady, setAuthReady] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [resumeTopicId, setResumeTopicId] = useState<string | null>(null);
  const [flashcardSubjectFilter, setFlashcardSubjectFilter] = useState<string | null>(null);

  // Cloud Sync state
  const [syncState, setSyncState] = useState<SyncStatusState>('online');
  const [pendingSyncCount, setPendingSyncCount] = useState<number>(0);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);

  // Layout states
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('icse_genius_dark') === 'true';
  });

  // Modals & Floating components
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);
  const [aiTutorContext, setAiTutorContext] = useState<any>(null);

  // Network connectivity status
  const [isOffline, setIsOffline] = useState<boolean>(() =>
    typeof navigator !== 'undefined' ? !navigator.onLine : false
  );
  const [offlineNoticeDismissed, setOfflineNoticeDismissed] = useState<boolean>(false);
  const [showBackOnlineToast, setShowBackOnlineToast] = useState<boolean>(false);

  const hydrateVerifiedUser = async (user: FirebaseUser) => {
    setActiveStorageUid(user.uid);
    const localInitial = loadStudentProfile(user.uid);
    setProfile(localInitial);

    checkIsUserAdmin(user)
      .then(setIsAdmin)
      .catch(() => setIsAdmin(false));

    try {
      const synced = await syncProfileWithFirestore(user.uid, localInitial, {
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        authProvider: getPrimaryAuthProvider(user),
        createdAt: user.metadata?.creationTime || undefined,
      });
      setProfile(synced);
    } catch (e) {
      console.warn('Firestore profile sync deferred (offline/retry):', e);
    }
  };

  // Subscribe to Sync Status bus
  useEffect(() => {
    return subscribeSyncStatus((snap) => {
      setSyncState(snap.state);
      setPendingSyncCount(snap.pendingCount);
      setLastSyncedAt(snap.lastSyncedAt);
    });
  }, []);

  // Listen to Firebase Auth state change (supports offline persisted sessions)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user && isVerifiedStudentUser(user)) {
        await hydrateVerifiedUser(user);
      } else {
        setActiveStorageUid(null);
        setIsAdmin(false);
        setProfile(createFreshStudentProfile());
        setSelectedChapter(null);
        setCurrentView('dashboard');
      }
      setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  const handleAuthCompleted = async (user: FirebaseUser) => {
    setCurrentUser(user);
    if (isVerifiedStudentUser(user)) {
      await hydrateVerifiedUser(user);
    }
  };

  const handleProfileUpdated = (updated: StudentProfile) => {
    setProfile(updated);
    if (currentUser && isVerifiedStudentUser(currentUser)) {
      syncLeaderboardEntry(currentUser.uid, updated).catch((err) => {
        console.warn('Leaderboard sync warning:', err);
      });
    }
  };

  const handleOnboardingComplete = (updated: StudentProfile) => {
    saveStudentProfile(updated);
    setProfile(updated);
  };

  const handleSignInWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        await handleAuthCompleted(user);
      }
    } catch (err) {
      console.error('Google Sign-in failed in App:', err);
    }
  };

  const handleSignOut = async () => {
    try {
      await logoutUser();
      setActiveStorageUid(null);
      setCurrentUser(null);
      setIsAdmin(false);
      setSelectedChapter(null);
      setResumeTopicId(null);
      setCurrentView('dashboard');
      setProfile(createFreshStudentProfile());
    } catch (err) {
      console.error('Sign-out failed in App:', err);
    }
  };

  const handleAccountDeleted = () => {
    setActiveStorageUid(null);
    setCurrentUser(null);
    setIsAdmin(false);
    setSelectedChapter(null);
    setResumeTopicId(null);
    setCurrentView('dashboard');
    setProfile(createFreshStudentProfile());
  };

  const handleManualSync = async () => {
    if (!currentUser || !isVerifiedStudentUser(currentUser)) return;
    await flushOfflineSyncQueue(currentUser.uid);
    const synced = await syncProfileWithFirestore(currentUser.uid, loadStudentProfile(currentUser.uid));
    setProfile(synced);
  };

  // Sync dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('icse_genius_dark', String(darkMode));
  }, [darkMode]);

  // Global shortcut (Ctrl+K or Cmd+K) to open Smart Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Network status listener for offline/online notifications and queued sync replay
  useEffect(() => {
    let reconnectTimer: ReturnType<typeof setTimeout> | undefined;

    const handleOffline = () => {
      if (reconnectTimer) clearTimeout(reconnectTimer);
      setIsOffline(true);
      setOfflineNoticeDismissed(false);
      setShowBackOnlineToast(false);
    };

    const handleOnline = async () => {
      setIsOffline(false);
      setOfflineNoticeDismissed(false);
      setShowBackOnlineToast(true);
      const user = auth.currentUser;
      if (user && isVerifiedStudentUser(user)) {
        try {
          await flushOfflineSyncQueue(user.uid);
          const synced = await syncProfileWithFirestore(user.uid, loadStudentProfile(user.uid));
          setProfile(synced);
        } catch {
          // retry later
        }
      }
      reconnectTimer = setTimeout(() => {
        setShowBackOnlineToast(false);
      }, 3500);
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
      if (reconnectTimer) clearTimeout(reconnectTimer);
    };
  }, []);

  // Subscribe to live local + Cloud Firestore curriculum updates
  useEffect(() => {
    const unsubLocal = subscribeContentDatabase(() => {
      setSubjects(getMergedSubjects());
    });
    const unsubCloud = subscribeCloudCurriculum();
    return () => {
      unsubLocal();
      unsubCloud();
    };
  }, []);

  // Derive live selected subject & chapter from reactive subjects
  const liveSelectedSubject = selectedSubject
    ? subjects.find((s) => s.id === selectedSubject.id) || subjects[0]
    : subjects[0];
  const liveSelectedChapter = selectedChapter
    ? subjects
        .flatMap((s) => s.chapters)
        .find((c) => c.id === selectedChapter.id) || selectedChapter
    : null;

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setResumeTopicId(null);
    setCurrentView('subjects');
  };

  const handleSelectChapter = (
    chapter: Chapter,
    subject?: Subject,
    opts?: { resumeTopicId?: string }
  ) => {
    setSelectedChapter(chapter);
    setResumeTopicId(opts?.resumeTopicId || null);
    if (subject) {
      setSelectedSubject(subject);
    } else {
      const parentSub = subjects.find((s) => s.id === chapter.subjectId);
      if (parentSub) setSelectedSubject(parentSub);
    }
    setCurrentView('chapter_reader');
  };

  const handleStartQuiz = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    const parentSub = subjects.find((s) => s.id === chapter.subjectId) || subjects[0];
    setSelectedSubject(parentSub);
    setCurrentView('quiz_player');
  };

  const handleAskAITutor = (context: any) => {
    setAiTutorContext(context);
  };

  const handleQuickStreakActivity = () => {
    const targetChapter = subjects[0].chapters[0];
    handleSelectChapter(targetChapter, subjects[0]);
  };

  const handleTriggerActivityFromModal = (
    type: 'read_chapter' | 'complete_quiz' | 'practice_flashcards'
  ) => {
    if (type === 'read_chapter') {
      const ch = subjects[0].chapters[0];
      handleSelectChapter(ch, subjects[0]);
    } else if (type === 'complete_quiz') {
      const ch = subjects[0].chapters[0];
      handleStartQuiz(ch);
    } else if (type === 'practice_flashcards') {
      setFlashcardSubjectFilter(null);
      setCurrentView('flashcards');
    }
  };

  const viewAnimationKey =
    currentView === 'chapter_reader' || currentView === 'quiz_player'
      ? `${currentView}-${liveSelectedChapter?.id || 'none'}`
      : currentView;

  const isAuthenticatedStudent = Boolean(currentUser && isVerifiedStudentUser(currentUser));

  // 1. Auth Initialization Splash (no dashboard flash before auth resolves)
  if (!authReady) {
    return (
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[#F4F7FC] text-slate-900 dark:bg-[#060A18] dark:text-slate-100 flex items-center justify-center relative">
          <AnimatedBackground darkMode={darkMode} />
          <div className="relative z-10 glass-card rounded-3xl px-8 py-7 text-center space-y-3 shadow-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0F1E4D] via-[#4F46E5] to-[#7C3AED] text-white shadow-lg shadow-indigo-500/30 animate-pulse">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="text-sm font-bold font-heading text-slate-900 dark:text-white">
              Preparing Your ICSE Genius Workspace...
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Restoring student session &amp; offline library
            </div>
          </div>
        </div>
      </MotionConfig>
    );
  }

  // 2. Authentication Gate Screen (before entering main site)
  if (!isAuthenticatedStudent) {
    return (
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[#F4F7FC] text-slate-900 dark:bg-[#060A18] dark:text-slate-100 relative transition-colors duration-500">
          <AnimatedBackground darkMode={darkMode} />
          <AuthScreen
            darkMode={darkMode}
            onToggleDarkMode={handleToggleDarkMode}
            isOffline={isOffline}
            pendingVerificationUser={currentUser}
            onAuthCompleted={handleAuthCompleted}
          />
        </div>
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F4F7FC] text-slate-900 dark:bg-[#060A18] dark:text-slate-100 flex flex-col transition-colors duration-500 relative">
        {/* Animated Deep Navy & Royal Purple Backdrop */}
        <AnimatedBackground darkMode={darkMode} />

        {/* First-Time Student Onboarding Modal (shown once per new student) */}
        {profile.onboardingCompleted !== true && (
          <OnboardingModal profile={profile} onComplete={handleOnboardingComplete} />
        )}

        {/* Top Bar Header */}
        <Header
          profile={profile}
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenStreak={() => setIsStreakModalOpen(true)}
          onToggleSidebar={() => setSidebarCollapsed((prev) => !prev)}
          activeNav={currentView}
          currentUser={currentUser}
          isOffline={isOffline}
          syncState={syncState}
          pendingSyncCount={pendingSyncCount}
          onSignOut={handleSignOut}
          onNavigate={(v) => {
            if (v === 'search') setIsSearchOpen(true);
            else if (v === 'ai_tutor') {
              setAiTutorContext({ query: 'Hello! I need guidance with my Class 8 ICSE studies.' });
            } else {
              setCurrentView(v);
            }
          }}
        />

        <div className="flex-1 flex overflow-x-clip relative z-10">
          {/* Mobile Backdrop for Drawer */}
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSidebarCollapsed(true)}
                className="fixed inset-0 z-20 bg-[#070B19]/65 backdrop-blur-xs lg:hidden"
                aria-hidden="true"
              />
            )}
          </AnimatePresence>

          {/* Collapsible Navy & Royal Purple Sidebar */}
          <Sidebar
            currentView={currentView}
            onNavigate={(v) => {
              if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                setSidebarCollapsed(true);
              }
              if (v === 'search') setIsSearchOpen(true);
              else if (v === 'ai_tutor') {
                setAiTutorContext({ query: 'Hello! I need assistance with ICSE Class 8 concepts.' });
              } else {
                setCurrentView(v);
              }
            }}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
            profile={profile}
            onOpenStreak={() => setIsStreakModalOpen(true)}
          />

          {/* Main Content Area with Smooth Page Transitions */}
          <main className="flex-1 min-w-0 px-4 sm:px-8 py-6 max-w-7xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={viewAnimationKey}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.13, ease: [0.16, 1, 0.3, 1] }}
              >
                <Suspense
                  fallback={
                    <div className="glass-card rounded-3xl p-10 text-center text-xs font-semibold text-indigo-600 dark:text-purple-300">
                      Loading workspace module...
                    </div>
                  }
                >
                {currentView === 'dashboard' && (
                  <StudyDashboard
                    subjects={subjects}
                    profile={profile}
                    isOffline={isOffline}
                    syncState={syncState}
                    pendingSyncCount={pendingSyncCount}
                    onOpenStreak={() => setIsStreakModalOpen(true)}
                    onSelectChapter={(ch, opts) => handleSelectChapter(ch, undefined, opts)}
                    onSelectSubject={handleSelectSubject}
                    onNavigate={(v) => {
                      if (v === 'search') setIsSearchOpen(true);
                      else setCurrentView(v);
                    }}
                    onQuickStreakActivity={handleQuickStreakActivity}
                  />
                )}

                {(currentView === 'subjects' || currentView === 'chapters') && (
                  <SubjectsView
                    subjects={subjects}
                    profile={profile}
                    onSelectChapter={handleSelectChapter}
                    onStartQuiz={handleStartQuiz}
                    onNavigate={(v, opts) => {
                      if (v === 'flashcards') {
                        setFlashcardSubjectFilter(opts?.subjectId || null);
                      }
                      setCurrentView(v);
                    }}
                    selectedSubjectId={selectedSubject?.id}
                  />
                )}

                {currentView === 'chapter_reader' && liveSelectedChapter && (
                  <ChapterReader
                    chapter={liveSelectedChapter}
                    subject={liveSelectedSubject}
                    profile={profile}
                    currentUserUid={currentUser?.uid}
                    resumeTopicId={resumeTopicId}
                    onBack={() => {
                      setResumeTopicId(null);
                      setCurrentView('subjects');
                    }}
                    onStartQuiz={handleStartQuiz}
                    onAskAITutor={handleAskAITutor}
                    onPrevChapter={(prevCh) => handleSelectChapter(prevCh, liveSelectedSubject)}
                    onNextChapter={(nextCh) => handleSelectChapter(nextCh, liveSelectedSubject)}
                    onProfileUpdated={handleProfileUpdated}
                  />
                )}

                {currentView === 'quiz_player' && liveSelectedChapter && (
                  <QuizPlayer
                    chapter={liveSelectedChapter}
                    subject={liveSelectedSubject}
                    profile={profile}
                    onBack={() => setCurrentView('chapter_reader')}
                    onProfileUpdated={handleProfileUpdated}
                    onAskAITutor={handleAskAITutor}
                    onReviewChapter={() => setCurrentView('chapter_reader')}
                  />
                )}

                {(currentView === 'quizzes' || currentView === 'practice') && (
                  <div className="space-y-6 pb-16">
                    <div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-purple-300">
                        Formative Practice &amp; Evaluation
                      </p>
                      <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        Chapter Quizzes &amp; Practice Questions
                      </h1>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Select any ICSE chapter to take timed quizzes with instant checking, explanations, and streak rewards.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {subjects.flatMap((s) =>
                        s.chapters.map((ch) => (
                          <div
                            key={ch.id}
                            className="glass-card p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:-translate-y-0.5 hover:border-indigo-400/70 transition-all duration-200"
                          >
                            <div>
                              <p className="text-xs font-semibold text-indigo-600 dark:text-purple-300">
                                {s.name} · Ch {ch.chapterNumber}
                              </p>
                              <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading mt-1">
                                {ch.title}
                              </h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 tabular-nums">
                                {ch.quizQuestions.length} Questions · MCQ, True/False &amp; HOTS
                              </p>
                            </div>

                            <button
                              onClick={() => handleStartQuiz(ch)}
                              className="w-full py-2.5 rounded-xl btn-royal text-xs font-bold whitespace-nowrap"
                            >
                              Start Chapter Quiz
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                {currentView === 'visual_learning' && <VisualLearningGallery subjects={subjects} />}

                {currentView === 'mock_exams' && (
                  <MockExamsView
                    subjects={subjects}
                    profile={profile}
                    onProfileUpdated={handleProfileUpdated}
                    onAskAITutor={handleAskAITutor}
                  />
                )}

                {(currentView === 'flashcards' || currentView === 'revision') && (
                  <FlashcardsView
                    subjects={subjects}
                    initialSubjectId={flashcardSubjectFilter}
                    profile={profile}
                    onProfileUpdated={handleProfileUpdated}
                  />
                )}

                {currentView === 'planner' && (
                  <StudyPlannerView
                    subjects={subjects}
                    profile={profile}
                    onProfileUpdated={handleProfileUpdated}
                  />
                )}

                {currentView === 'progress' && (
                  <StudyDashboard
                    subjects={subjects}
                    profile={profile}
                    isOffline={isOffline}
                    syncState={syncState}
                    pendingSyncCount={pendingSyncCount}
                    onOpenStreak={() => setIsStreakModalOpen(true)}
                    onSelectChapter={(ch, opts) => handleSelectChapter(ch, undefined, opts)}
                    onSelectSubject={handleSelectSubject}
                    onNavigate={(v) => setCurrentView(v)}
                    onQuickStreakActivity={handleQuickStreakActivity}
                  />
                )}

                {currentView === 'achievements' && (
                  <div className="space-y-6 max-w-3xl mx-auto pb-16">
                    <div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-purple-300">
                        Academic Milestones &amp; Rewards
                      </p>
                      <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        Badges &amp; Achievements
                      </h1>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Earned through genuine learning activities, quiz completions, and daily streaks.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {profile.badges.map((b) => (
                        <div
                          key={b.id}
                          className="glass-card p-5 rounded-2xl flex items-start gap-3.5"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold shadow-md shadow-amber-500/25">
                            ★
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                              {b.title}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              {b.description}
                            </p>
                            <span className="text-[11px] text-indigo-600 dark:text-purple-300 font-semibold mt-2 block tabular-nums">
                              Unlocked on {b.unlockedAt}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentView === 'downloads' && (
                  <DownloadsView
                    subjects={subjects}
                    currentUserUid={currentUser?.uid}
                    isOffline={isOffline}
                    onOpenChapter={(ch, sub) => handleSelectChapter(ch, sub)}
                  />
                )}

                {currentView === 'settings' && (
                  <SettingsView
                    profile={profile}
                    darkMode={darkMode}
                    onToggleDarkMode={handleToggleDarkMode}
                    onProfileUpdated={handleProfileUpdated}
                    currentUser={currentUser}
                    isOffline={isOffline}
                    syncState={syncState}
                    pendingSyncCount={pendingSyncCount}
                    lastSyncedAt={lastSyncedAt}
                    onManualSync={handleManualSync}
                    onSignOut={handleSignOut}
                    onAccountDeleted={handleAccountDeleted}
                  />
                )}

                {currentView === 'help' && (
                  <HelpSupportView onAskAITutor={handleAskAITutor} />
                )}

                {currentView === 'about' && (
                  <AboutMeView
                    subjects={subjects}
                    onNavigate={(v) => setCurrentView(v)}
                    onAskAITutor={handleAskAITutor}
                  />
                )}

                {currentView === 'leaderboard' && (
                  <LeaderboardView
                    profile={profile}
                    currentUser={currentUser}
                    authReady={authReady}
                    onSignInWithGoogle={handleSignInWithGoogle}
                  />
                )}

                {currentView === 'mistakes' && (
                  <MistakeNotebook onAskAITutor={handleAskAITutor} />
                )}

                {currentView === 'parent_view' && (
                  <ParentView profile={profile} subjects={subjects} />
                )}

                {currentView === 'admin' && (
                  <AdminPanel
                    subjects={subjects}
                    onDatabaseUpdated={() => setSubjects(getMergedSubjects())}
                    currentUser={currentUser}
                    isAdmin={isAdmin}
                    onSignInWithGoogle={handleSignInWithGoogle}
                  />
                )}
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Persistent Floating AI Tutor at bottom-right of every page */}
        <AITutorChat
          currentContext={aiTutorContext}
          userId={currentUser?.uid}
          isOffline={isOffline}
          onClearContext={() => setAiTutorContext(null)}
          onProfileUpdated={handleProfileUpdated}
        />

        {/* Streak Details & Milestone Modal */}
        <StreakModal
          isOpen={isStreakModalOpen}
          onClose={() => setIsStreakModalOpen(false)}
          profile={profile}
          onTriggerActivity={handleTriggerActivityFromModal}
        />

        {/* Smart Search Engine Modal */}
        <SmartSearchModal
          subjects={subjects}
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectChapter={(ch, sub) => handleSelectChapter(ch, sub)}
        />

        {/* Non-intrusive Network Status Toast */}
        {isOffline && !offlineNoticeDismissed && (
          <div
            role="status"
            aria-live="polite"
            className="glass-card fixed bottom-20 left-4 right-4 sm:right-auto sm:bottom-5 sm:left-5 z-50 sm:max-w-sm rounded-2xl border-amber-300/80 dark:border-amber-600/50 p-3.5 flex items-start gap-3 transition-all duration-200"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
              <WifiOff className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                You are currently offline
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Downloaded chapters, diagrams, flashcards, and quizzes work offline. Changes will sync automatically once back online.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOfflineNoticeDismissed(true)}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
              aria-label="Dismiss offline notification"
              title="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {!isOffline && showBackOnlineToast && (
          <div
            role="status"
            aria-live="polite"
            className="glass-card fixed bottom-20 left-4 right-4 sm:right-auto sm:bottom-5 sm:left-5 z-50 sm:max-w-sm rounded-2xl border-emerald-300/80 dark:border-emerald-600/50 p-3.5 flex items-start gap-3 transition-all duration-200"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
              <Wifi className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                Back online &amp; synced
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Connection restored. Offline study progress synced and live AI Tutor is ready.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowBackOnlineToast(false)}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
              aria-label="Dismiss online notification"
              title="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </MotionConfig>
  );
}
