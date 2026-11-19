import React, { useEffect, useState } from 'react';
import {
  Download,
  FileText,
  Printer,
  CheckCircle2,
  Trash2,
  HardDrive,
  WifiOff,
  Bot,
  BookOpen,
  Loader2,
} from 'lucide-react';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import { Chapter, Subject } from '../../types/index.ts';
import {
  DownloadedChapterRecord,
  formatBytesCompact,
  getDownloadedChaptersOffline,
  removeDownloadedChapterOffline,
  saveDownloadedChapterOffline,
} from '../../utils/offlineDb.ts';
import { PWAInstallButton } from '../pwa/PWAInstallButton.tsx';

interface DownloadsViewProps {
  subjects?: Subject[];
  currentUserUid?: string | null;
  isOffline?: boolean;
  onOpenChapter: (chapter: Chapter, subject: Subject) => void;
}

export const DownloadsView: React.FC<DownloadsViewProps> = ({
  subjects = ICSE_SUBJECTS,
  currentUserUid,
  isOffline = false,
  onOpenChapter,
}) => {
  const effectiveUid = currentUserUid || 'guest';
  const [downloadedRecords, setDownloadedRecords] = useState<DownloadedChapterRecord[]>([]);
  const [busyIds, setBusyIds] = useState<Record<string, boolean>>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const refreshDownloads = async () => {
    const records = await getDownloadedChaptersOffline(effectiveUid);
    setDownloadedRecords(records);
  };

  useEffect(() => {
    void refreshDownloads();
  }, [effectiveUid]);

  const downloadedMap = React.useMemo(() => {
    const map = new Map<string, DownloadedChapterRecord>();
    for (const rec of downloadedRecords) {
      map.set(rec.chapterId, rec);
    }
    return map;
  }, [downloadedRecords]);

  const totalBytes = downloadedRecords.reduce((acc, r) => acc + r.byteSize, 0);

  const handleDownloadChapter = async (ch: Chapter, sub: Subject) => {
    setBusyIds((prev) => ({ ...prev, [ch.id]: true }));
    setStatusMessage(null);
    try {
      await saveDownloadedChapterOffline(effectiveUid, ch, sub.name);
      await refreshDownloads();
      setStatusMessage(`Saved "Ch ${ch.chapterNumber}: ${ch.title}" with offline diagrams & quiz data.`);
    } finally {
      setBusyIds((prev) => ({ ...prev, [ch.id]: false }));
    }
  };

  const handleRemoveChapter = async (chId: string, title: string) => {
    setBusyIds((prev) => ({ ...prev, [chId]: true }));
    setStatusMessage(null);
    try {
      await removeDownloadedChapterOffline(effectiveUid, chId);
      await refreshDownloads();
      setStatusMessage(`Removed "${title}" from offline device storage.`);
    } finally {
      setBusyIds((prev) => ({ ...prev, [chId]: false }));
    }
  };

  const handleDownloadSubjectAll = async (sub: Subject) => {
    setBusyIds((prev) => ({ ...prev, [`sub-${sub.id}`]: true }));
    setStatusMessage(null);
    try {
      for (const ch of sub.chapters) {
        await saveDownloadedChapterOffline(effectiveUid, ch, sub.name);
      }
      await refreshDownloads();
      setStatusMessage(`All ${sub.chapters.length} chapters of ${sub.name} are saved for offline study.`);
    } finally {
      setBusyIds((prev) => ({ ...prev, [`sub-${sub.id}`]: false }));
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Offline Library &amp; Printable PDF Revision Sheets
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
            Offline Chapters &amp; Download Centre
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Save complete chapters, formulas, diagrams, flashcards, and quizzes to your device for offline study, or export clean printable PDF sheets.
          </p>
        </div>

        <PWAInstallButton />
      </div>

      {/* Offline Capability & AI Tutor Online Notice */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="glass-card rounded-2xl p-4 flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#1E3A8A] to-[#4F46E5] text-white shadow-sm">
            <HardDrive className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Saved Offline Storage</div>
            <div className="text-lg font-extrabold font-heading text-slate-900 dark:text-white tabular-nums">
              {downloadedRecords.length} {downloadedRecords.length === 1 ? 'Chapter' : 'Chapters'} · {formatBytesCompact(totalBytes)}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 glass-card rounded-2xl p-4 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">
            {isOffline ? <WifiOff className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-white block">
              {isOffline
                ? 'Offline Mode Active — Saved Chapters Ready'
                : 'How Offline Mode Works in ICSE Genius'}
            </strong>
            Downloaded chapters, diagram figures, personal notes, flashcards, and chapter quizzes work seamlessly without internet.{' '}
            <span className="font-semibold text-indigo-700 dark:text-purple-300">
              AI Tutor requires an active internet connection
            </span>{' '}
            to generate live Gemini explanations.
          </div>
        </div>
      </div>

      {statusMessage && (
        <div
          role="status"
          className="rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 px-4 py-3 text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-2"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Saved Offline Shelf */}
      {downloadedRecords.length > 0 && (
        <section className="glass-card rounded-2xl p-5 space-y-3.5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Downloaded for Offline Study ({downloadedRecords.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {downloadedRecords.map((rec) => {
              const parentSubject =
                subjects.find((s) => s.id === rec.subjectId) ||
                ICSE_SUBJECTS.find((s) => s.id === rec.subjectId) ||
                subjects[0];
              return (
                <div
                  key={rec.key}
                  className="p-3.5 rounded-xl glass-surface-blue flex flex-col justify-between gap-3"
                >
                  <div>
                    <div className="text-[11px] font-bold text-indigo-600 dark:text-purple-300 uppercase tracking-wider">
                      {rec.subjectName} · {formatBytesCompact(rec.byteSize)}
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 line-clamp-1">
                      Ch {rec.chapterNumber}: {rec.title}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Saved {new Date(rec.downloadedAt).toLocaleDateString()}
                      {rec.cachedImageCount > 0 ? ` · ${rec.cachedImageCount} cached figures` : ''}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenChapter(rec.chapterData, parentSubject)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg btn-royal text-xs font-bold"
                    >
                      <BookOpen className="h-3.5 w-3.5" /> Read Offline
                    </button>
                    <button
                      type="button"
                      disabled={Boolean(busyIds[rec.chapterId])}
                      onClick={() => handleRemoveChapter(rec.chapterId, rec.title)}
                      className="p-1.5 rounded-lg glass-card text-rose-600 dark:text-rose-400 hover:border-rose-400 transition-colors"
                      title="Remove offline download"
                      aria-label={`Remove offline download for ${rec.title}`}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* All Subjects Chapter Download Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {subjects.map((sub) => {
          const allSubSaved =
            sub.chapters.length > 0 && sub.chapters.every((ch) => downloadedMap.has(ch.id));
          const subBusy = Boolean(busyIds[`sub-${sub.id}`]);

          return (
            <div
              key={sub.id}
              className="rounded-2xl glass-card p-5 space-y-4 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-2.5">
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider truncate">
                    {sub.name}
                  </span>
                </div>

                {sub.chapters.length > 0 && (
                  <button
                    type="button"
                    disabled={subBusy || allSubSaved}
                    onClick={() => handleDownloadSubjectAll(sub)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors shrink-0 ${
                      allSubSaved
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50'
                        : 'glass-surface-blue text-indigo-700 dark:text-indigo-200 hover:border-indigo-400'
                    }`}
                  >
                    {subBusy ? (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    ) : allSubSaved ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : (
                      <Download className="h-3 w-3" />
                    )}
                    <span>{allSubSaved ? 'All Saved' : 'Save Subject'}</span>
                  </button>
                )}
              </div>

              <div className="space-y-2.5">
                {sub.chapters.map((ch) => {
                  const savedRec = downloadedMap.get(ch.id);
                  const isBusy = Boolean(busyIds[ch.id]);
                  return (
                    <div
                      key={ch.id}
                      className="p-3 rounded-xl glass-surface-blue flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0 pr-1">
                        <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                          Ch {ch.chapterNumber}: {ch.title}
                        </div>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                          {savedRec
                            ? `Saved offline · ${formatBytesCompact(savedRec.byteSize)}`
                            : 'Complete Notes, Diagrams & Quiz'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          disabled={isBusy}
                          onClick={() =>
                            savedRec
                              ? handleRemoveChapter(ch.id, ch.title)
                              : handleDownloadChapter(ch, sub)
                          }
                          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-colors ${
                            savedRec
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                              : 'glass-card text-slate-700 dark:text-slate-200 hover:border-indigo-400'
                          }`}
                          title={savedRec ? 'Saved offline (click to remove)' : 'Download chapter for offline reading'}
                        >
                          {isBusy ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : savedRec ? (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          ) : (
                            <Download className="h-3.5 w-3.5" />
                          )}
                          <span className="hidden sm:inline">{savedRec ? 'Saved' : 'Offline'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            onOpenChapter(ch, sub);
                            setTimeout(() => window.print(), 600);
                          }}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl btn-royal text-[11px] font-bold shrink-0"
                          title="Print or Save PDF"
                        >
                          <Printer className="h-3.5 w-3.5" /> PDF
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
