import React, { useState, useEffect } from 'react';
import {
  Upload,
  CheckCircle2,
  Save,
  Trash2,
  FileText,
  Download,
  Plus,
  RotateCcw,
  BookOpen,
  FileQuestion,
  ShieldCheck,
  AlertCircle,
  Lock,
  LogIn,
  Image as ImageIcon,
  ExternalLink,
  UserPlus,
} from 'lucide-react';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import {
  Chapter,
  OfficialChapterOutlineItem,
  QuizQuestion,
  Subject,
  SubjectId,
  TopicSection,
} from '../../types/index.ts';
import {
  addUploadedSyllabusDoc,
  AdminRoleRecord,
  deleteCustomChapter,
  exportContentDatabaseJson,
  generateCmsSyllabusTemplateJson,
  grantAdminRoleInCloud,
  importContentDatabaseJson,
  isChapterCustomized,
  listAdminsFromCloud,
  loadContentDatabase,
  parseAndApplySyllabusFile,
  publishChapterToCloud,
  publishSubjectOverrideToCloud,
  publishSyllabusDocToCloud,
  removeChapterFromCloud,
  removeSubjectOverrideFromCloud,
  removeSyllabusDocFromCloud,
  removeUploadedSyllabusDoc,
  revertChapterOverride,
  revertSubjectSyllabusOverride,
  revokeAdminRoleInCloud,
  saveChapterContent,
  saveSubjectSyllabusOverride,
  UploadedSyllabusDoc,
} from '../../utils/contentDatabase.ts';
import {
  BOOTSTRAP_ADMIN_EMAIL,
  uploadFileToFirebaseStorage,
} from '../../utils/firebase.ts';

interface AdminPanelProps {
  subjects?: Subject[];
  onDatabaseUpdated?: () => void;
  currentUser?: { uid: string; displayName?: string | null; email?: string | null } | null;
  isAdmin?: boolean;
  onSignInWithGoogle?: () => void;
}

function triggerJsonDownload(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  subjects = ICSE_SUBJECTS,
  onDatabaseUpdated,
  currentUser,
  isAdmin = false,
  onSignInWithGoogle,
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'chapters' | 'tutor' | 'admins' | 'stats'>('syllabus');

  // Repository docs
  const [savedSyllabi, setSavedSyllabi] = useState<UploadedSyllabusDoc[]>(
    () => loadContentDatabase().uploadedSyllabi
  );
  const [uploadedSyllabusStatus, setUploadedSyllabusStatus] = useState<string | null>(null);
  const [syllabusError, setSyllabusError] = useState<string | null>(null);
  const [isUploadingAsset, setIsUploadingAsset] = useState(false);

  // Admin Permissions registry state
  const [adminRecords, setAdminRecords] = useState<AdminRoleRecord[]>([]);
  const [newAdminUid, setNewAdminUid] = useState('');
  const [newAdminLabel, setNewAdminLabel] = useState('');
  const [adminMgmtMsg, setAdminMgmtMsg] = useState<string | null>(null);

  // Subject Syllabus & Textbook Editor State
  const [sylSubjectId, setSylSubjectId] = useState<SubjectId>(subjects[0]?.id || 'mathematics');
  const activeSylSubject = subjects.find((s) => s.id === sylSubjectId) || subjects[0];
  const [sylAcademicYear, setSylAcademicYear] = useState(activeSylSubject.academicYear || '2026–27');
  const [sylTextbook, setSylTextbook] = useState(activeSylSubject.prescribedTextbook || '');
  const [sylSourceNote, setSylSourceNote] = useState(activeSylSubject.verifiedSourceNote || '');
  const [sylVerified, setSylVerified] = useState<'verified' | 'partial_missing'>(
    activeSylSubject.syllabusVerificationStatus || 'partial_missing'
  );
  const [sylOutline, setSylOutline] = useState<OfficialChapterOutlineItem[]>(
    activeSylSubject.officialChapterOutline || []
  );
  const [outlineDraftTitle, setOutlineDraftTitle] = useState('');
  const [outlineDraftTerm, setOutlineDraftTerm] = useState('Half-Yearly');
  const [sylSavedBanner, setSylSavedBanner] = useState(false);

  // Sync syllabus editor fields when switching subject
  useEffect(() => {
    const sub = subjects.find((s) => s.id === sylSubjectId);
    if (!sub) return;
    setSylAcademicYear(sub.academicYear || '2026–27');
    setSylTextbook(sub.prescribedTextbook || '');
    setSylSourceNote(sub.verifiedSourceNote || '');
    setSylVerified(sub.syllabusVerificationStatus || 'partial_missing');
    setSylOutline(
      sub.officialChapterOutline ||
        sub.chapters.map((ch) => ({
          chapterNumber: ch.chapterNumber,
          title: ch.title,
          term: ch.term,
          status: 'available',
        }))
    );
    setSylSavedBanner(false);
  }, [sylSubjectId, subjects]);

  // Chapter Content Management State (Add New OR Edit Existing)
  const [editorMode, setEditorMode] = useState<'edit_existing' | 'create_new'>('edit_existing');
  const [chSubjectId, setChSubjectId] = useState<SubjectId>(subjects[0]?.id || 'mathematics');
  const activeChSubject = subjects.find((s) => s.id === chSubjectId) || subjects[0];
  const [selectedChapterId, setSelectedChapterId] = useState<string>(
    activeChSubject.chapters[0]?.id || ''
  );

  // Editable chapter fields
  const [chNumber, setChNumber] = useState<number>(1);
  const [chTitle, setChTitle] = useState('');
  const [chSubtitle, setChSubtitle] = useState('');
  const [chTerm, setChTerm] = useState<'Half-Yearly' | 'Annual'>('Half-Yearly');
  const [chMinutes, setChMinutes] = useState<number>(50);
  const [chIntro, setChIntro] = useState('');
  const [chObjectivesText, setChObjectivesText] = useState('');
  const [chTopics, setChTopics] = useState<TopicSection[]>([]);
  const [chSummaryText, setChSummaryText] = useState('');
  const [chQuizQuestions, setChQuizQuestions] = useState<QuizQuestion[]>([]);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // When subject changes in chapter editor, select first chapter if editing existing
  useEffect(() => {
    const sub = subjects.find((s) => s.id === chSubjectId);
    if (!sub) return;
    if (editorMode === 'edit_existing') {
      const stillExists = sub.chapters.find((c) => c.id === selectedChapterId);
      const target = stillExists || sub.chapters[0];
      if (target) {
        setSelectedChapterId(target.id);
      }
    } else {
      setChNumber(sub.chapters.length + 1);
    }
  }, [chSubjectId, editorMode, subjects]);

  // Populate editor form from selected chapter (or reset for create_new)
  useEffect(() => {
    if (editorMode === 'create_new') {
      const nextNum = (activeChSubject?.chapters.length || 0) + 1;
      setChNumber(nextNum);
      setChTitle('');
      setChSubtitle('');
      setChTerm('Half-Yearly');
      setChMinutes(50);
      setChIntro('');
      setChObjectivesText('');
      setChTopics([
        {
          id: `top-${Date.now()}`,
          title: 'Core Concept Explanation',
          content: '',
        },
      ]);
      setChSummaryText('');
      setChQuizQuestions([]);
      return;
    }

    const ch = activeChSubject?.chapters.find((c) => c.id === selectedChapterId);
    if (!ch) return;
    setChNumber(ch.chapterNumber);
    setChTitle(ch.title);
    setChSubtitle(ch.subtitle);
    setChTerm(ch.term);
    setChMinutes(ch.estimatedMinutes);
    setChIntro(ch.notes.introduction);
    setChObjectivesText(ch.notes.learningObjectives.join('\n'));
    setChTopics(ch.notes.topics.length > 0 ? ch.notes.topics : []);
    setChSummaryText(ch.notes.chapterSummary.join('\n'));
    setChQuizQuestions(ch.quizQuestions || []);
  }, [editorMode, selectedChapterId, activeChSubject]);

  const notifyUpdate = () => {
    setSavedSyllabi(loadContentDatabase().uploadedSyllabi);
    onDatabaseUpdated?.();
  };

  // Refresh admin registry when Admin Permissions tab is active
  useEffect(() => {
    if (isAdmin && activeTab === 'admins') {
      listAdminsFromCloud()
        .then(setAdminRecords)
        .catch(() => {});
    }
  }, [isAdmin, activeTab]);

  // Handle Official Syllabus File Upload (.pdf, .json, .csv, .txt) to Firebase Storage + Firestore
  const handleSyllabusUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !isAdmin) return;
    setSyllabusError(null);
    setUploadedSyllabusStatus(null);
    setIsUploadingAsset(true);

    try {
      let summary = 'Stored in CMS Academic Syllabus Repository.';
      const lower = file.name.toLowerCase();
      if (lower.endsWith('.json') || lower.endsWith('.csv') || lower.endsWith('.txt')) {
        const text = await file.text();
        if (lower.endsWith('.json') || lower.endsWith('.csv')) {
          const parsed = parseAndApplySyllabusFile(file.name, text);
          summary = parsed.summary;
          const latestDb = loadContentDatabase();
          for (const subId of parsed.appliedSubjects) {
            const override = latestDb.subjectOverrides[subId];
            if (override) {
              await publishSubjectOverrideToCloud(subId, override).catch(() => {});
            }
          }
        }
      }

      let storagePath: string | undefined;
      let downloadUrl: string | undefined;
      let storageNote = '';
      try {
        const uploaded = await uploadFileToFirebaseStorage('syllabi', file);
        storagePath = uploaded.storagePath;
        downloadUrl = uploaded.downloadUrl;
      } catch (storageErr: any) {
        storageNote = ` (Storage notice: ${storageErr?.message || 'Enable Firebase Storage in Firebase Console for binary hosting'})`;
      }

      const docRecord: UploadedSyllabusDoc = {
        id: 'syl-' + Date.now(),
        fileName: file.name,
        sizeBytes: file.size,
        uploadedAt: new Date().toLocaleDateString(),
        parsedSummary: summary,
        storagePath,
        downloadUrl,
        uploadedBy: currentUser?.uid,
      };

      addUploadedSyllabusDoc(docRecord);
      await publishSyllabusDocToCloud(docRecord);
      setUploadedSyllabusStatus(
        `Uploaded "${file.name}" to Firestore${downloadUrl ? ' & Firebase Storage' : ''} — ${summary}${storageNote}`
      );
      notifyUpdate();
    } catch (err: any) {
      setSyllabusError(
        `Could not upload "${file.name}": ${err?.message || 'Ensure valid file and admin permissions.'}`
      );
    } finally {
      setIsUploadingAsset(false);
      e.target.value = '';
    }
  };

  const handleSaveSubjectSyllabus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return;
    const overridePayload = {
      academicYear: sylAcademicYear.trim() || '2026–27',
      prescribedTextbook: sylTextbook.trim(),
      verifiedSourceNote: sylSourceNote.trim(),
      syllabusVerificationStatus: sylVerified,
      missingInformation:
        sylVerified === 'verified' ? [] : activeSylSubject.missingInformation || [],
      officialChapterOutline: sylOutline,
    };
    saveSubjectSyllabusOverride(sylSubjectId, overridePayload);
    try {
      await publishSubjectOverrideToCloud(sylSubjectId, overridePayload);
      setSylSavedBanner(true);
      notifyUpdate();
      setTimeout(() => setSylSavedBanner(false), 3000);
    } catch (err: any) {
      setSyllabusError(`Cloud publish failed: ${err?.message || 'Check admin permissions.'}`);
    }
  };

  const handleAddOutlineRow = () => {
    if (!outlineDraftTitle.trim()) return;
    const nextNum =
      sylOutline.length > 0
        ? Math.max(...sylOutline.map((o) => o.chapterNumber)) + 1
        : 1;
    setSylOutline([
      ...sylOutline,
      {
        chapterNumber: nextNum,
        title: outlineDraftTitle.trim(),
        term: outlineDraftTerm,
        status: 'outline_only',
      },
    ]);
    setOutlineDraftTitle('');
  };

  // Topic CRUD inside Chapter Editor
  const handleAddTopic = () => {
    setChTopics([
      ...chTopics,
      {
        id: `top-${Date.now()}-${chTopics.length + 1}`,
        title: `Topic ${chTopics.length + 1}`,
        content: '',
      },
    ]);
  };

  const handleUpdateTopic = (idx: number, patch: Partial<TopicSection>) => {
    setChTopics(chTopics.map((t, i) => (i === idx ? { ...t, ...patch } : t)));
  };

  const handleRemoveTopic = (idx: number) => {
    setChTopics(chTopics.filter((_, i) => i !== idx));
  };

  // Quiz Question CRUD inside Chapter Editor
  const handleAddQuizQuestion = () => {
    setChQuizQuestions([
      ...chQuizQuestions,
      {
        id: `q-${Date.now()}`,
        type: 'mcq',
        question: '',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: 'Option A',
        explanation: '',
        difficulty: 'medium',
        marks: 1,
      },
    ]);
  };

  const handleSaveChapter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chTitle.trim() || !isAdmin) return;

    const existingChapter =
      editorMode === 'edit_existing'
        ? activeChSubject?.chapters.find((c) => c.id === selectedChapterId)
        : undefined;

    const chapterId = existingChapter ? existingChapter.id : `custom-ch-${Date.now()}`;
    const isBuiltInBase = ICSE_SUBJECTS.some((s) =>
      s.chapters.some((c) => c.id === chapterId)
    );

    const parsedObjectives = chObjectivesText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const parsedSummary = chSummaryText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    const chapterPayload: Chapter = {
      id: chapterId,
      subjectId: chSubjectId,
      chapterNumber: Number(chNumber) || 1,
      title: chTitle.trim(),
      subtitle: chSubtitle.trim() || 'CMS Class 8 Curriculum Module',
      term: chTerm,
      estimatedMinutes: Number(chMinutes) || 45,
      notes: {
        ...(existingChapter?.notes || {
          importantTerminology: [],
          solvedExamples: [],
          examPreparationTips: [
            'Write definitions with units and show clear step-by-step calculations.',
          ],
          importantQuestionsAndAnswers: [],
          practiceExercises: [],
        }),
        introduction: chIntro.trim(),
        learningObjectives:
          parsedObjectives.length > 0
            ? parsedObjectives
            : ['Understand and apply core principles of this chapter.'],
        topics: chTopics.filter((t) => t.title.trim() || t.content.trim()),
        chapterSummary:
          parsedSummary.length > 0 ? parsedSummary : [chSubtitle.trim() || chTitle.trim()],
      },
      quizQuestions: chQuizQuestions.filter((q) => q.question.trim()),
      flashcards: existingChapter?.flashcards || [],
    };

    const mode = isBuiltInBase ? 'override_existing' : 'add_custom';
    saveChapterContent(chapterPayload, mode);

    try {
      await publishChapterToCloud(chapterPayload, mode);
      if (editorMode === 'create_new') {
        setEditorMode('edit_existing');
        setSelectedChapterId(chapterPayload.id);
      }
      setSaveSuccessMsg(
        `Published "${chapterPayload.title}" live to Cloud Firestore! All students see this update immediately.`
      );
      notifyUpdate();
      setTimeout(() => setSaveSuccessMsg(null), 4000);
    } catch (err: any) {
      setSyllabusError(`Cloud chapter publish failed: ${err?.message || 'Admin role required.'}`);
    }
  };

  const handleTopicDiagramUpload = async (
    topicIdx: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file || !isAdmin) return;
    setIsUploadingAsset(true);
    setSyllabusError(null);
    try {
      const { downloadUrl } = await uploadFileToFirebaseStorage('diagrams', file);
      const targetTopic = chTopics[topicIdx];
      handleUpdateTopic(topicIdx, {
        diagram: {
          id: targetTopic?.diagram?.id || `diag-${Date.now()}`,
          title: targetTopic?.diagram?.title || `${targetTopic?.title || 'Topic'} Diagram`,
          caption: targetTopic?.diagram?.caption || 'CMS Class 8 Educational Illustration',
          imageUrl: downloadUrl,
        },
      });
      setSaveSuccessMsg(`Uploaded diagram image for "${targetTopic?.title || 'Topic'}" to Firebase Storage.`);
    } catch (err: any) {
      setSyllabusError(
        `Diagram upload error: ${err?.message || 'Ensure Firebase Storage is initialized and file <= 5MB.'}`
      );
    } finally {
      setIsUploadingAsset(false);
      e.target.value = '';
    }
  };

  const handleImportDbBackup = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const txt = await file.text();
      importContentDatabaseJson(txt);
      setSaveSuccessMsg('Content Database restored from JSON backup.');
      notifyUpdate();
    } catch (err: any) {
      setSyllabusError(`Invalid DB backup JSON: ${err?.message || 'parse error'}`);
    } finally {
      e.target.value = '';
    }
  };

  const totalCurriculumChapters = subjects.reduce((sum, s) => sum + s.chapters.length, 0);
  const currentChapterFlags = selectedChapterId
    ? isChapterCustomized(selectedChapterId)
    : { isOverridden: false, isCustom: false };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Curriculum Management Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
            Administrator &amp; Content Management System
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Upload official City Montessori School (CMS) syllabi to Firebase Storage, publish live chapter notes and diagrams to Cloud Firestore, and manage teacher administrator permissions.
          </p>
        </div>

        {isAdmin && (
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() =>
                triggerJsonDownload('icse-genius-content-db-backup.json', exportContentDatabaseJson())
              }
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl glass-surface-blue text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400"
            >
              <Download className="h-3.5 w-3.5" /> Export Content DB
            </button>
            <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl glass-surface-blue text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-indigo-400">
              <Upload className="h-3.5 w-3.5" /> Import DB JSON
              <input
                type="file"
                accept=".json"
                onChange={handleImportDbBackup}
                className="hidden"
              />
            </label>
          </div>
        )}
      </div>

      {/* Secure Admin Access Gate */}
      {!currentUser || !isAdmin ? (
        <div className="rounded-3xl glass-card p-7 sm:p-10 text-center max-w-2xl mx-auto space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A1128] to-[#4F46E5] text-white shadow-lg shadow-indigo-500/25">
            <Lock className="h-7 w-7" />
          </div>
          <h2 className="text-xl font-extrabold font-heading text-slate-900 dark:text-white">
            {currentUser ? 'CMS Administrator Role Required' : 'Sign In Required for Admin Portal'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto">
            {currentUser ? (
              <>
                You are signed in as <strong>{currentUser.email || 'Student Account'}</strong>. Student accounts cannot modify live curriculum syllabi, chapters, or Storage assets.
              </>
            ) : (
              'To protect City Montessori School syllabi, chapter notes, and uploaded resources, only verified CMS Administrators can publish changes to Cloud Firestore & Firebase Storage.'
            )}
          </p>

          {currentUser ? (
            <div className="p-4 rounded-2xl glass-surface-blue text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="font-bold text-slate-900 dark:text-white">
                Need Teacher / Admin Access?
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Share your Firebase UID below with the lead CMS administrator ({BOOTSTRAP_ADMIN_EMAIL}) to be added to the authorized <code className="font-mono">/admins</code> registry:
              </p>
              <div className="font-mono text-[11px] p-2 rounded-lg bg-slate-900/90 text-indigo-200 select-all break-all">
                {currentUser.uid}
              </div>
            </div>
          ) : (
            onSignInWithGoogle && (
              <button
                type="button"
                onClick={onSignInWithGoogle}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-royal text-xs font-bold"
              >
                <LogIn className="h-4 w-4" /> Sign in with Google (CMS Admin)
              </button>
            )
          )}
        </div>
      ) : (
        <>
          <div className="p-3.5 rounded-2xl glass-surface-blue flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-semibold">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>
                Verified CMS Administrator: <strong>{currentUser.email}</strong>
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Cloud Firestore + Firebase Storage Publishing Active
            </span>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3 text-xs">
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeTab === 'syllabus'
                  ? 'btn-royal'
                  : 'glass-surface-blue text-slate-600 dark:text-slate-300 hover:border-indigo-300'
              }`}
            >
              CMS Syllabus &amp; Textbook Uploader
            </button>
            <button
              onClick={() => setActiveTab('chapters')}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeTab === 'chapters'
                  ? 'btn-royal'
                  : 'glass-surface-blue text-slate-600 dark:text-slate-300 hover:border-indigo-300'
              }`}
            >
              Add / Edit Chapter Notes &amp; Quizzes
            </button>
            <button
              onClick={() => setActiveTab('admins')}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeTab === 'admins'
                  ? 'btn-royal'
                  : 'glass-surface-blue text-slate-600 dark:text-slate-300 hover:border-indigo-300'
              }`}
            >
              Admin Permissions
            </button>
            <button
              onClick={() => setActiveTab('tutor')}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeTab === 'tutor'
                  ? 'btn-royal'
                  : 'glass-surface-blue text-slate-600 dark:text-slate-300 hover:border-indigo-300'
              }`}
            >
              AI Tutor Pedagogy Settings
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeTab === 'stats'
                  ? 'btn-royal'
                  : 'glass-surface-blue text-slate-600 dark:text-slate-300 hover:border-indigo-300'
              }`}
            >
              Platform Analytics
            </button>
          </div>

      {/* TAB 1: Official CMS Syllabus & Textbook Uploader */}
      {activeTab === 'syllabus' && (
        <div className="space-y-6">
          {/* Upload Document Card */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#0A1128] to-[#4F46E5] text-white shadow-sm">
                  <Upload className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                    Upload Official CMS Class 8 Syllabus or Booklist
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Supports structured .json / .csv files (auto-applies textbook &amp; chapter roster) as well as .pdf / .txt circulars.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  triggerJsonDownload(
                    'cms-class8-syllabus-template.json',
                    generateCmsSyllabusTemplateJson()
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-surface-blue text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 shrink-0"
              >
                <Download className="h-3.5 w-3.5" /> Download JSON Template
              </button>
            </div>

            <div className="border-2 border-dashed border-indigo-200 dark:border-indigo-500/30 rounded-2xl p-7 text-center glass-surface-blue hover:border-indigo-400 transition-colors">
              <Upload className="mx-auto h-9 w-9 text-indigo-500 mb-2.5" />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 block">
                Select CMS Syllabus Circular (.json, .csv, .pdf, .txt)
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
                Structured JSON/CSV files immediately verify subjects and populate official chapter outlines across the app.
              </p>
              <input
                type="file"
                accept=".pdf,.json,.csv,.txt"
                onChange={handleSyllabusUpload}
                className="hidden"
                id="admin-file-upload"
              />
              <label
                htmlFor="admin-file-upload"
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-royal font-bold text-xs"
              >
                Choose Syllabus File
              </label>
            </div>

            {uploadedSyllabusStatus && (
              <div className="p-4 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/25 border border-emerald-300 dark:border-emerald-800 text-xs font-semibold text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{uploadedSyllabusStatus}</span>
              </div>
            )}

            {syllabusError && (
              <div className="p-4 rounded-xl bg-rose-50/90 dark:bg-rose-950/25 border border-rose-300 dark:border-rose-800 text-xs font-semibold text-rose-800 dark:text-rose-200 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                <span>{syllabusError}</span>
              </div>
            )}

            {savedSyllabi.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Uploaded Syllabus Documents ({savedSyllabi.length})
                </h4>
                <div className="space-y-2">
                  {savedSyllabi.map((docItem) => (
                    <div
                      key={docItem.id}
                      className="flex items-center justify-between gap-2 p-3.5 rounded-xl glass-surface-blue text-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <div className="min-w-0">
                          <span className="font-semibold text-slate-800 dark:text-slate-100 block truncate">
                            {docItem.fileName}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400 text-[11px] block truncate">
                            {Math.max(1, Math.round(docItem.sizeBytes / 1024))} KB • {docItem.uploadedAt}
                            {docItem.parsedSummary ? ` • ${docItem.parsedSummary}` : ''}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {docItem.downloadUrl && (
                          <a
                            href={docItem.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg glass-card text-[11px] font-bold text-indigo-600 dark:text-indigo-300 hover:border-indigo-400"
                          >
                            <ExternalLink className="h-3 w-3" /> Open
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={async () => {
                            removeUploadedSyllabusDoc(docItem.id);
                            await removeSyllabusDocFromCloud(docItem.id, docItem.storagePath).catch(() => {});
                            notifyUpdate();
                          }}
                          className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                          aria-label={`Remove ${docItem.fileName}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Direct Per-Subject Prescribed Textbook & Official Chapter Outline Editor */}
          <form onSubmit={handleSaveSubjectSyllabus} className="rounded-3xl glass-card p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3">
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                  Subject Textbook &amp; Official Chapter Roster Editor
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Confirm official CMS prescribed textbooks and chapter rosters per subject without editing code.
                </p>
              </div>
              <button
                type="button"
                onClick={async () => {
                  revertSubjectSyllabusOverride(sylSubjectId);
                  await removeSubjectOverrideFromCloud(sylSubjectId).catch(() => {});
                  notifyUpdate();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-surface-blue text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-indigo-400 shrink-0"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Reset Subject Defaults
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Subject (9 ICSE Core):
                </label>
                <select
                  value={sylSubjectId}
                  onChange={(e) => setSylSubjectId(e.target.value as SubjectId)}
                  className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.syllabusVerificationStatus === 'verified' ? 'Verified' : 'Pending CMS Upload'})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Academic Year:
                </label>
                <input
                  type="text"
                  value={sylAcademicYear}
                  onChange={(e) => setSylAcademicYear(e.target.value)}
                  placeholder="e.g. 2026–27"
                  className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Syllabus Verification Status:
                </label>
                <select
                  value={sylVerified}
                  onChange={(e) =>
                    setSylVerified(e.target.value as 'verified' | 'partial_missing')
                  }
                  className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="verified">Verified with Official CMS Circular</option>
                  <option value="partial_missing">Partial / Pending Official Confirmation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Prescribed Textbook Title, Author &amp; Publisher:
              </label>
              <input
                type="text"
                required
                value={sylTextbook}
                onChange={(e) => setSylTextbook(e.target.value)}
                className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Source / CMS Branch Circular Reference Note:
              </label>
              <input
                type="text"
                value={sylSourceNote}
                onChange={(e) => setSylSourceNote(e.target.value)}
                placeholder="e.g. CMS Gomti Nagar Campus Booklist Circular 2026–27"
                className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Official Chapter Outline List */}
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block">
                Verified Official Chapter Outline ({sylOutline.length} Chapters):
              </label>
              <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                {sylOutline.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 p-2.5 rounded-xl glass-surface-blue text-xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-indigo-600 dark:text-purple-300 tabular-nums shrink-0">
                        Ch {item.chapterNumber}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white truncate">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
                        ({item.term})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setSylOutline(sylOutline.filter((_, i) => i !== idx))
                      }
                      className="p-1 text-slate-400 hover:text-rose-500"
                      aria-label="Remove outline row"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={outlineDraftTitle}
                  onChange={(e) => setOutlineDraftTitle(e.target.value)}
                  placeholder="Add chapter title from CMS circular..."
                  className="flex-1 rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <select
                  value={outlineDraftTerm}
                  onChange={(e) => setOutlineDraftTerm(e.target.value)}
                  className="rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
                >
                  <option value="Half-Yearly">Half-Yearly</option>
                  <option value="Annual">Annual</option>
                </select>
                <button
                  type="button"
                  onClick={handleAddOutlineRow}
                  className="px-4 py-2 rounded-xl glass-card text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 flex items-center justify-center gap-1"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Outline Row
                </button>
              </div>
            </div>

            {sylSavedBanner && (
              <div className="p-3 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-900/50 text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Saved official CMS textbook &amp; syllabus metadata for {activeSylSubject.name}!</span>
              </div>
            )}

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl btn-royal text-xs font-bold"
            >
              <Save className="h-4 w-4" /> Save Official Syllabus &amp; Textbook
            </button>
          </form>
        </div>
      )}

      {/* TAB 2: Add / Edit Chapter Notes & Quizzes */}
      {activeTab === 'chapters' && (
        <div className="space-y-6">
          <form onSubmit={handleSaveChapter} className="rounded-3xl glass-card p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3">
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                  Live Chapter Notes, Topics &amp; Quiz Editor
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Changes apply immediately across Subject Dashboards, Chapter Reader, Smart Search, and Quizzes.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditorMode('edit_existing')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                    editorMode === 'edit_existing'
                      ? 'btn-royal'
                      : 'glass-surface-blue text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Edit Existing Chapter
                </button>
                <button
                  type="button"
                  onClick={() => setEditorMode('create_new')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                    editorMode === 'create_new'
                      ? 'btn-royal'
                      : 'glass-surface-blue text-slate-700 dark:text-slate-300'
                  }`}
                >
                  + New Chapter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Subject:
                </label>
                <select
                  value={chSubjectId}
                  onChange={(e) => setChSubjectId(e.target.value as SubjectId)}
                  className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
                >
                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {editorMode === 'edit_existing' && (
                <div className="lg:col-span-2">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Select Chapter to Edit:
                  </label>
                  <select
                    value={selectedChapterId}
                    onChange={(e) => setSelectedChapterId(e.target.value)}
                    className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
                  >
                    {activeChSubject.chapters.map((c) => (
                      <option key={c.id} value={c.id}>
                        Ch {c.chapterNumber}: {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Chapter # &amp; Term:
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={1}
                    value={chNumber}
                    onChange={(e) => setChNumber(Number(e.target.value))}
                    className="w-20 rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
                  />
                  <select
                    value={chTerm}
                    onChange={(e) => setChTerm(e.target.value as 'Half-Yearly' | 'Annual')}
                    className="flex-1 rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
                  >
                    <option value="Half-Yearly">Half-Yearly</option>
                    <option value="Annual">Annual</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Chapter Title:
                </label>
                <input
                  type="text"
                  required
                  value={chTitle}
                  onChange={(e) => setChTitle(e.target.value)}
                  placeholder="e.g. Direct and Inverse Variations"
                  className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Est. Study Minutes:
                </label>
                <input
                  type="number"
                  min={10}
                  value={chMinutes}
                  onChange={(e) => setChMinutes(Number(e.target.value))}
                  className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Chapter Subtitle &amp; Scope:
              </label>
              <input
                type="text"
                value={chSubtitle}
                onChange={(e) => setChSubtitle(e.target.value)}
                placeholder="Key subtopics covered in this chapter"
                className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Chapter Introduction:
              </label>
              <textarea
                rows={4}
                value={chIntro}
                onChange={(e) => setChIntro(e.target.value)}
                placeholder="Comprehensive student-friendly introduction..."
                className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Learning Objectives (one per line):
                </label>
                <textarea
                  rows={4}
                  value={chObjectivesText}
                  onChange={(e) => setChObjectivesText(e.target.value)}
                  className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Chapter Summary Points (one per line):
                </label>
                <textarea
                  rows={4}
                  value={chSummaryText}
                  onChange={(e) => setChSummaryText(e.target.value)}
                  className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            {/* Topics Editor */}
            <div className="space-y-3 pt-2 border-t border-indigo-100/80 dark:border-indigo-500/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" /> Topics &amp; Concept Notes ({chTopics.length})
                </span>
                <button
                  type="button"
                  onClick={handleAddTopic}
                  className="px-3 py-1.5 rounded-xl glass-surface-blue text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 flex items-center gap-1"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Topic
                </button>
              </div>

              <div className="space-y-3">
                {chTopics.map((topic, tIdx) => (
                  <div
                    key={topic.id}
                    className="p-4 rounded-2xl glass-surface-blue space-y-2.5 text-xs"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-indigo-600 dark:text-purple-300">
                        Topic {tIdx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTopic(tIdx)}
                        className="text-slate-400 hover:text-rose-500"
                        aria-label={`Remove topic ${tIdx + 1}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={topic.title}
                      onChange={(e) => handleUpdateTopic(tIdx, { title: e.target.value })}
                      placeholder="Topic title"
                      className="w-full rounded-xl glass-card p-2 text-xs text-slate-900 dark:text-white font-semibold"
                    />
                    <textarea
                      rows={3}
                      value={topic.content}
                      onChange={(e) => handleUpdateTopic(tIdx, { content: e.target.value })}
                      placeholder="Topic explanation & theory..."
                      className="w-full rounded-xl glass-card p-2 text-xs text-slate-700 dark:text-slate-200"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400">
                        <ImageIcon className="h-3.5 w-3.5" />
                        {isUploadingAsset
                          ? 'Uploading...'
                          : topic.diagram?.imageUrl
                          ? 'Replace Diagram Image (Storage)'
                          : 'Attach Diagram Image (Firebase Storage)'}
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/webp,image/svg+xml"
                          onChange={(e) => handleTopicDiagramUpload(tIdx, e)}
                          className="hidden"
                        />
                      </label>
                      {topic.diagram?.imageUrl && (
                        <a
                          href={topic.diagram.imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" /> Diagram Attached
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiz Questions Editor */}
            <div className="space-y-3 pt-2 border-t border-indigo-100/80 dark:border-indigo-500/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                  <FileQuestion className="h-4 w-4" /> Chapter Quiz Questions ({chQuizQuestions.length})
                </span>
                <button
                  type="button"
                  onClick={handleAddQuizQuestion}
                  className="px-3 py-1.5 rounded-xl glass-surface-blue text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 flex items-center gap-1"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Quiz Question
                </button>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {chQuizQuestions.map((q, qIdx) => (
                  <div key={q.id} className="p-3.5 rounded-xl glass-surface-blue space-y-2 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-700 dark:text-slate-200">
                        Q{qIdx + 1} ({q.type.toUpperCase()})
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setChQuizQuestions(chQuizQuestions.filter((_, i) => i !== qIdx))
                        }
                        className="text-slate-400 hover:text-rose-500"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={q.question}
                      onChange={(e) =>
                        setChQuizQuestions(
                          chQuizQuestions.map((item, i) =>
                            i === qIdx ? { ...item, question: e.target.value } : item
                          )
                        )
                      }
                      placeholder="Quiz question prompt"
                      className="w-full rounded-lg glass-card p-2 text-xs"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={String(q.correctAnswer)}
                        onChange={(e) =>
                          setChQuizQuestions(
                            chQuizQuestions.map((item, i) =>
                              i === qIdx ? { ...item, correctAnswer: e.target.value } : item
                            )
                          )
                        }
                        placeholder="Correct answer"
                        className="rounded-lg glass-card p-2 text-xs"
                      />
                      <input
                        type="text"
                        value={q.explanation}
                        onChange={(e) =>
                          setChQuizQuestions(
                            chQuizQuestions.map((item, i) =>
                              i === qIdx ? { ...item, explanation: e.target.value } : item
                            )
                          )
                        }
                        placeholder="Explanation shown after answering"
                        className="rounded-lg glass-card p-2 text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {saveSuccessMsg && (
              <div className="p-3 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-900/50 text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>{saveSuccessMsg}</span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl btn-royal text-xs font-bold"
              >
                <Save className="h-4 w-4" />
                {editorMode === 'edit_existing'
                  ? 'Save Live Chapter Updates'
                  : 'Publish New Chapter Live'}
              </button>

              {editorMode === 'edit_existing' && currentChapterFlags.isOverridden && (
                <button
                  type="button"
                  onClick={async () => {
                    revertChapterOverride(selectedChapterId);
                    await removeChapterFromCloud(selectedChapterId).catch(() => {});
                    notifyUpdate();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl glass-surface-blue text-xs font-bold text-amber-700 dark:text-amber-300"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Revert Edits to Original
                </button>
              )}

              {editorMode === 'edit_existing' && currentChapterFlags.isCustom && (
                <button
                  type="button"
                  onClick={async () => {
                    deleteCustomChapter(selectedChapterId);
                    await removeChapterFromCloud(selectedChapterId).catch(() => {});
                    notifyUpdate();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl glass-surface-blue text-xs font-bold text-rose-600 dark:text-rose-400"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Delete Custom Chapter
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* TAB: Admin Permissions Registry */}
      {activeTab === 'admins' && (
        <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-5 text-xs">
          <div>
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Authorized CMS Teacher &amp; Admin Registry
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mt-1">
              Primary administrator <strong>{BOOTSTRAP_ADMIN_EMAIL}</strong> is verified by default. Grant publishing permission to fellow CMS teachers by adding their Firebase UID below.
            </p>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!newAdminUid.trim()) return;
              setAdminMgmtMsg(null);
              try {
                await grantAdminRoleInCloud(newAdminUid.trim(), newAdminLabel.trim());
                setNewAdminUid('');
                setNewAdminLabel('');
                setAdminMgmtMsg('Granted CMS Administrator permission cleanly.');
                const refreshed = await listAdminsFromCloud();
                setAdminRecords(refreshed);
              } catch (err: any) {
                setAdminMgmtMsg(`Failed to grant permission: ${err?.message || 'error'}`);
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <input
              type="text"
              required
              value={newAdminUid}
              onChange={(e) => setNewAdminUid(e.target.value)}
              placeholder="Teacher Firebase UID"
              className="rounded-xl glass-surface-blue p-2.5 text-xs text-slate-900 dark:text-white"
            />
            <input
              type="text"
              value={newAdminLabel}
              onChange={(e) => setNewAdminLabel(e.target.value)}
              placeholder="Role label (e.g. Maths HoD)"
              className="rounded-xl glass-surface-blue p-2.5 text-xs text-slate-900 dark:text-white"
            />
            <button type="submit" className="px-4 py-2.5 rounded-xl btn-royal text-xs font-bold">
              Grant Admin Access
            </button>
          </form>

          {adminMgmtMsg && (
            <div className="p-3 rounded-xl glass-surface-blue font-semibold text-indigo-700 dark:text-indigo-300">
              {adminMgmtMsg}
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-bold uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">
              Secondary Authorized Admin UIDs ({adminRecords.length})
            </h4>
            {adminRecords.length === 0 ? (
              <p className="text-slate-500 dark:text-slate-400">
                No secondary teacher UIDs registered yet.
              </p>
            ) : (
              adminRecords.map((rec) => (
                <div
                  key={rec.userId}
                  className="flex items-center justify-between gap-2 p-3 rounded-xl glass-surface-blue"
                >
                  <div className="min-w-0">
                    <div className="font-bold text-slate-900 dark:text-white">
                      {rec.label || 'CMS Subject Teacher'}
                    </div>
                    <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {rec.userId}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      await revokeAdminRoleInCloud(rec.userId);
                      setAdminRecords((prev) => prev.filter((r) => r.userId !== rec.userId));
                    }}
                    className="px-3 py-1.5 rounded-lg glass-card text-rose-600 dark:text-rose-400 font-bold"
                  >
                    Revoke
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 3: AI Tutor Settings */}
      {activeTab === 'tutor' && (
        <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-4 text-xs">
          <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
            AI Tutor Pedagogical Directives
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Current server-side system instruction directs the Gemini model to act as a supportive Class 8 pedagogue for City Montessori School, guiding students step-by-step.
          </p>

          <div className="p-4 rounded-xl bg-gradient-to-br from-[#0A1128] to-[#1B1F5C] text-indigo-100 font-mono text-[11px] space-y-1 border border-indigo-500/30">
            <div>Backend Integration: <strong className="text-amber-300">Server-side @google/genai (/api/tutor)</strong></div>
            <div>Audience: Class 8 ICSE Board • City Montessori School Lucknow</div>
            <div>Mode: Formative assessment hints &amp; step-by-step mathematical reasoning</div>
          </div>
        </div>
      )}

      {/* TAB 4: Analytics */}
      {activeTab === 'stats' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl glass-card">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              Total Live Curriculum Chapters
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums mt-1 block">
              {totalCurriculumChapters} Chapters
            </span>
          </div>
          <div className="p-5 rounded-2xl glass-card">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              Verified CMS Curriculum Subjects
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums mt-1 block">
              {subjects.filter((s) => s.syllabusVerificationStatus === 'verified').length} / {subjects.length} Verified
            </span>
          </div>
          <div className="p-5 rounded-2xl glass-card">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              Prescribed ICSE Subjects
            </span>
            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums mt-1 block">
              {subjects.length} Subjects
            </span>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
};
