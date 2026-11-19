import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  FileQuestion,
  Bot,
  Printer,
  ZoomIn,
  BookOpen,
  Sparkles,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileText,
  Flame,
  Award,
  Table2,
  ListChecks,
  Calculator,
  ClipboardCheck,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Download,
} from 'lucide-react';
import { Chapter, Subject, StudentProfile, DiagramItem } from '../../types/index.ts';
import {
  updateReadingProgress,
  markChapterComplete,
  saveStudentProfile,
  recordChapterVisit,
} from '../../utils/storage.ts';
import {
  buildChapterSpeechSegments,
  isSpeechSynthesisSupported,
} from '../../utils/speechUtils.ts';
import {
  getCachedAssetDataUrl,
  getDownloadedChapterOffline,
  removeDownloadedChapterOffline,
  saveDownloadedChapterOffline,
} from '../../utils/offlineDb.ts';
import { MathSvgDiagram } from '../visual/MathSvgDiagram.tsx';
import confetti from 'canvas-confetti';

const OfflineCachedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const [resolvedSrc, setResolvedSrc] = useState(src);

  useEffect(() => {
    let active = true;
    setResolvedSrc(src);
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      getCachedAssetDataUrl(src).then((cached) => {
        if (active && cached) setResolvedSrc(cached);
      });
    }
    return () => {
      active = false;
    };
  }, [src]);

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => {
        getCachedAssetDataUrl(src).then((cached) => {
          if (cached) setResolvedSrc(cached);
        });
      }}
      className={className}
    />
  );
};

interface ChapterReaderProps {
  chapter: Chapter;
  subject: Subject;
  profile: StudentProfile;
  currentUserUid?: string | null;
  resumeTopicId?: string | null;
  onBack: () => void;
  onStartQuiz: (chapter: Chapter) => void;
  onAskAITutor: (context: { chapterTitle: string; subjectName: string; query?: string }) => void;
  onPrevChapter?: (prevChapter: Chapter) => void;
  onNextChapter?: (nextChapter: Chapter) => void;
  onProfileUpdated: (updatedProfile: StudentProfile) => void;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  chapter,
  subject,
  profile,
  currentUserUid,
  resumeTopicId,
  onBack,
  onStartQuiz,
  onAskAITutor,
  onPrevChapter,
  onNextChapter,
  onProfileUpdated,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [readingProgress, setReadingProgress] = useState(
    profile.readingProgress[chapter.id] || 15
  );
  const [isCompleted, setIsCompleted] = useState(
    profile.completedChapterIds.includes(chapter.id)
  );
  const [zoomedDiagram, setZoomedDiagram] = useState<DiagramItem | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    solved: true,
    qa: true,
    graded: true,
    worksheet: true,
    exercises: true,
  });
  const [activeDifficulty, setActiveDifficulty] = useState<'easy' | 'medium' | 'difficult'>('easy');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [showWorksheetAnswers, setShowWorksheetAnswers] = useState(false);

  const [userNote, setUserNote] = useState(profile.personalNotes[chapter.id] || '');
  const [noteSaved, setNoteSaved] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(
    profile.bookmarks.some((b) => b.chapterId === chapter.id)
  );
  const [isOfflineSaved, setIsOfflineSaved] = useState(false);
  const [isSavingOffline, setIsSavingOffline] = useState(false);
  const [showCelebrationModal, setShowCelebrationModal] = useState(false);

  // Web Speech API (Text-to-Speech Read Along)
  const speechSupported = useMemo(() => isSpeechSynthesisSupported(), []);
  const speechSegments = useMemo(
    () => buildChapterSpeechSegments(chapter, subject.name),
    [chapter, subject.name]
  );
  const [showAudioBar, setShowAudioBar] = useState(false);
  const [speechStatus, setSpeechStatus] = useState<'idle' | 'playing' | 'paused'>('idle');
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const [speechRate, setSpeechRate] = useState(1);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState('');
  const [followAlong, setFollowAlong] = useState(true);
  const [speechError, setSpeechError] = useState<string | null>(null);

  const playbackSessionRef = useRef(0);
  const speechSegmentsRef = useRef(speechSegments);
  speechSegmentsRef.current = speechSegments;
  const speechRateRef = useRef(speechRate);
  speechRateRef.current = speechRate;
  const availableVoicesRef = useRef(availableVoices);
  availableVoicesRef.current = availableVoices;
  const selectedVoiceRef = useRef(selectedVoiceURI);
  selectedVoiceRef.current = selectedVoiceURI;
  const followAlongRef = useRef(followAlong);
  followAlongRef.current = followAlong;

  const stopSpeech = useCallback((hideBar = false) => {
    playbackSessionRef.current += 1;
    if (isSpeechSynthesisSupported()) {
      window.speechSynthesis.cancel();
    }
    setSpeechStatus('idle');
    setActiveSegmentIndex(0);
    setSpeechError(null);
    if (hideBar) {
      setShowAudioBar(false);
    }
  }, []);

  const speakSegment = useCallback(
    (index: number, rateOverride?: number, voiceUriOverride?: string) => {
      if (!isSpeechSynthesisSupported()) {
        setShowAudioBar(true);
        setSpeechError(
          'Text-to-Speech is not supported in this browser. Try Chrome, Edge, or Safari.'
        );
        return;
      }

      const segments = speechSegmentsRef.current;
      if (segments.length === 0) return;

      if (index < 0 || index >= segments.length) {
        stopSpeech(false);
        return;
      }

      playbackSessionRef.current += 1;
      const sessionId = playbackSessionRef.current;
      window.speechSynthesis.cancel();

      const segment = segments[index];
      const utterance = new SpeechSynthesisUtterance(segment.text);
      utterance.rate = rateOverride ?? speechRateRef.current;

      const targetVoiceUri = voiceUriOverride ?? selectedVoiceRef.current;
      const matchedVoice = availableVoicesRef.current.find(
        (v) => v.voiceURI === targetVoiceUri
      );
      if (matchedVoice) {
        utterance.voice = matchedVoice;
        utterance.lang = matchedVoice.lang;
      } else {
        utterance.lang = 'en-IN';
      }

      setShowAudioBar(true);
      setSpeechError(null);
      setActiveSegmentIndex(index);
      setSpeechStatus('playing');

      utterance.onstart = () => {
        if (playbackSessionRef.current !== sessionId) return;
        setSpeechStatus('playing');
        setActiveSegmentIndex(index);
        if (followAlongRef.current) {
          const el = document.getElementById(segment.domId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      };

      utterance.onend = () => {
        if (playbackSessionRef.current !== sessionId) return;
        const nextIdx = index + 1;
        if (nextIdx < speechSegmentsRef.current.length) {
          speakSegment(nextIdx);
        } else {
          setSpeechStatus('idle');
          setActiveSegmentIndex(0);
        }
      };

      utterance.onerror = (event) => {
        if (playbackSessionRef.current !== sessionId) return;
        if (event.error === 'canceled' || event.error === 'interrupted') {
          return;
        }
        setSpeechStatus('idle');
        if (
          event.error === 'synthesis-unavailable' ||
          event.error === 'language-unavailable' ||
          availableVoicesRef.current.length === 0
        ) {
          setSpeechError(
            'No speech voices are available in this browser environment yet. Please enable system voices or try Chrome, Edge, or Safari.'
          );
        } else {
          setSpeechError('Could not play audio cleanly. Please try another voice or restart playback.');
        }
      };

      window.speechSynthesis.speak(utterance);
    },
    [stopSpeech]
  );

  // Load available browser voices for Web Speech API
  useEffect(() => {
    if (!speechSupported) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      const englishVoices = voices.filter((v) =>
        v.lang.toLowerCase().startsWith('en')
      );
      const list = englishVoices.length > 0 ? englishVoices : voices;
      setAvailableVoices(list);

      if (!selectedVoiceRef.current && list.length > 0) {
        const preferred =
          list.find((v) => v.lang.toLowerCase() === 'en-in') ||
          list.find((v) => v.lang.toLowerCase().startsWith('en-gb')) ||
          list.find((v) => v.default) ||
          list[0];
        if (preferred) {
          setSelectedVoiceURI(preferred.voiceURI);
        }
      }
    };

    loadVoices();
    window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', loadVoices);
    };
  }, [speechSupported]);

  // Cancel speech cleanly when unmounting ChapterReader
  useEffect(() => {
    return () => {
      playbackSessionRef.current += 1;
      if (isSpeechSynthesisSupported()) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const currentIdx = subject.chapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIdx > 0 ? subject.chapters[currentIdx - 1] : undefined;
  const nextChapter =
    currentIdx >= 0 && currentIdx < subject.chapters.length - 1
      ? subject.chapters[currentIdx + 1]
      : undefined;

  // Sync local chapter state, offline download status, & record visit for Continue Reading
  useEffect(() => {
    stopSpeech(true);
    const initialTopic = chapter.notes.topics[0];
    const targetTopicId =
      resumeTopicId && chapter.notes.topics.some((t) => t.id === resumeTopicId)
        ? resumeTopicId
        : initialTopic?.id;
    const targetTopicIdx = targetTopicId
      ? Math.max(
          0,
          chapter.notes.topics.findIndex((t) => t.id === targetTopicId)
        )
      : 0;

    const updatedAfterVisit = recordChapterVisit(
      chapter.id,
      targetTopicId ? { topicId: targetTopicId, topicIndex: targetTopicIdx } : undefined
    );
    onProfileUpdated(updatedAfterVisit);

    setReadingProgress(updatedAfterVisit.readingProgress[chapter.id] || 15);
    setIsCompleted(updatedAfterVisit.completedChapterIds.includes(chapter.id));
    setUserNote(updatedAfterVisit.personalNotes[chapter.id] || '');
    setIsBookmarked(updatedAfterVisit.bookmarks.some((b) => b.chapterId === chapter.id));
    setShowCelebrationModal(false);
    setNoteSaved(false);
    setRevealedSolutions({});
    setShowWorksheetAnswers(false);

    getDownloadedChapterOffline(currentUserUid || 'guest', chapter.id)
      .then((rec) => setIsOfflineSaved(Boolean(rec)))
      .catch(() => setIsOfflineSaved(false));

    if (resumeTopicId && chapter.notes.topics.some((t) => t.id === resumeTopicId)) {
      setTimeout(() => {
        const topicEl = document.getElementById(`tts-topic-${resumeTopicId}`);
        if (topicEl) {
          topicEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 180);
    } else {
      const scrollContainer = containerRef.current?.closest('main');
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [chapter.id, currentUserUid, resumeTopicId, stopSpeech]);

  // Track scroll position & visible topic to update reading progress and Continue Reading position
  useEffect(() => {
    const scrollParent = containerRef.current?.closest('main');

    const findVisibleTopic = (): { topicId?: string; topicIndex?: number } => {
      let bestTopicId: string | undefined;
      let bestTopicIndex: number | undefined;
      let minDist = Number.POSITIVE_INFINITY;

      chapter.notes.topics.forEach((topic, idx) => {
        const el = document.getElementById(`tts-topic-${topic.id}`);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - 140);
        if (rect.top <= window.innerHeight * 0.65 && dist < minDist) {
          minDist = dist;
          bestTopicId = topic.id;
          bestTopicIndex = idx;
        }
      });

      return bestTopicId ? { topicId: bestTopicId, topicIndex: bestTopicIndex } : {};
    };

    const handleScroll = () => {
      let currentScroll = 0;
      let total = 0;

      if (scrollParent && scrollParent.scrollHeight > scrollParent.clientHeight) {
        currentScroll = scrollParent.scrollTop;
        total = scrollParent.scrollHeight - scrollParent.clientHeight;
      } else {
        const el = document.documentElement;
        currentScroll = el.scrollTop;
        total = el.scrollHeight - el.clientHeight;
      }

      if (total <= 0) return;
      const pct = Math.min(100, Math.round((currentScroll / total) * 100));
      const visibleTopic = findVisibleTopic();

      if (pct > readingProgress || (visibleTopic.topicId && visibleTopic.topicId !== profile.lastVisitedTopicId)) {
        if (pct > readingProgress) setReadingProgress(pct);
        const updated = updateReadingProgress(chapter.id, Math.max(pct, readingProgress), visibleTopic);
        onProfileUpdated(updated);
      }
    };

    if (scrollParent) {
      scrollParent.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (scrollParent) {
        scrollParent.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [chapter.id, chapter.notes.topics, readingProgress, profile.lastVisitedTopicId, onProfileUpdated]);

  const handleToggleOfflineSave = async () => {
    const uid = currentUserUid || 'guest';
    setIsSavingOffline(true);
    try {
      if (isOfflineSaved) {
        await removeDownloadedChapterOffline(uid, chapter.id);
        setIsOfflineSaved(false);
      } else {
        await saveDownloadedChapterOffline(uid, chapter, subject.name);
        setIsOfflineSaved(true);
      }
    } finally {
      setIsSavingOffline(false);
    }
  };

  const handleCompleteChapter = () => {
    const { profile: updatedProfile } = markChapterComplete(chapter.id);
    setIsCompleted(true);
    setReadingProgress(100);
    onProfileUpdated(updatedProfile);
    setShowCelebrationModal(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#38bdf8', '#f59e0b', '#10b981'],
    });
  };

  const toggleBookmark = () => {
    const nextBookmarked = !isBookmarked;
    const updatedBookmarks = nextBookmarked
      ? [
          ...profile.bookmarks,
          {
            id: 'bm-' + Date.now(),
            chapterId: chapter.id,
            title: `${subject.name}: Chapter ${chapter.chapterNumber} - ${chapter.title}`,
            type: 'Chapter' as const,
            snippet: chapter.subtitle,
          },
        ]
      : profile.bookmarks.filter((b) => b.chapterId !== chapter.id);

    const updated: StudentProfile = {
      ...profile,
      bookmarks: updatedBookmarks,
    };
    setIsBookmarked(nextBookmarked);
    saveStudentProfile(updated);
    onProfileUpdated(updated);
  };

  const handleSaveNote = () => {
    const updated: StudentProfile = {
      ...profile,
      personalNotes: {
        ...profile.personalNotes,
        [chapter.id]: userNote,
      },
    };
    saveStudentProfile(updated);
    onProfileUpdated(updated);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2500);
  };

  const toggleAccordion = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTogglePlayPause = () => {
    if (!speechSupported) {
      setShowAudioBar(true);
      setSpeechError(
        'Text-to-Speech is not supported in this browser. Try Chrome, Edge, or Safari.'
      );
      return;
    }

    if (speechStatus === 'playing') {
      window.speechSynthesis.pause();
      setSpeechStatus('paused');
    } else if (speechStatus === 'paused') {
      window.speechSynthesis.resume();
      setSpeechStatus('playing');
    } else {
      speakSegment(activeSegmentIndex || 0);
    }
  };

  const handleListenFromDomId = (domId: string) => {
    const idx = speechSegments.findIndex((s) => s.domId === domId);
    speakSegment(idx >= 0 ? idx : 0);
  };

  const handleChangeSpeechRate = (nextRate: number) => {
    setSpeechRate(nextRate);
    speechRateRef.current = nextRate;
    if (speechStatus !== 'idle') {
      speakSegment(activeSegmentIndex, nextRate, selectedVoiceURI);
    }
  };

  const handleChangeVoice = (nextVoiceURI: string) => {
    setSelectedVoiceURI(nextVoiceURI);
    selectedVoiceRef.current = nextVoiceURI;
    if (speechStatus !== 'idle') {
      speakSegment(activeSegmentIndex, speechRate, nextVoiceURI);
    }
  };

  const activeSpokenDomId =
    speechStatus !== 'idle' && speechSegments[activeSegmentIndex]
      ? speechSegments[activeSegmentIndex].domId
      : null;

  const currentSpeechSegment = speechSegments[activeSegmentIndex];

  const hasGradedQuestions = Boolean(
    chapter.notes.gradedQuestions &&
      (chapter.notes.gradedQuestions.easy.length > 0 ||
        chapter.notes.gradedQuestions.medium.length > 0 ||
        chapter.notes.gradedQuestions.difficult.length > 0)
  );

  return (
    <div ref={containerRef} className="chapter-reading-view max-w-4xl mx-auto pb-24">
      {/* Unified Top Sticky Sub-Bar & Expandable Read-Along Audio Controller */}
      <div className="no-print sticky top-16 z-20 -mx-4 sm:-mx-6 bg-white/90 dark:bg-[#0A1128]/95 backdrop-blur-xl border-b border-indigo-100/80 dark:border-indigo-500/20 transition-colors">
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors shrink-0"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to {subject.name}</span>
            </button>

            {/* Compact Prev/Next pill-free inline controls */}
            <div className="hidden md:flex items-center gap-1.5 pl-3 border-l border-indigo-100 dark:border-indigo-800/60">
              {prevChapter && onPrevChapter && (
                <button
                  onClick={() => onPrevChapter(prevChapter)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg glass-surface-blue text-[11px] font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors"
                  title={`Previous: Ch ${prevChapter.chapterNumber} - ${prevChapter.title}`}
                >
                  <ArrowLeft className="h-3 w-3" /> Ch {prevChapter.chapterNumber}
                </button>
              )}
              {nextChapter && onNextChapter && (
                <button
                  onClick={() => onNextChapter(nextChapter)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg glass-surface-blue text-[11px] font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors"
                  title={`Next: Ch ${nextChapter.chapterNumber} - ${nextChapter.title}`}
                >
                  Ch {nextChapter.chapterNumber} <ArrowRight className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Reading progress bar */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>Progress:</span>
              <div className="w-20 h-2 rounded-full bg-indigo-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#4F46E5] progress-animated transition-all duration-300"
                  style={{ width: `${readingProgress}%` }}
                />
              </div>
              <span className="font-bold tabular-nums text-slate-800 dark:text-slate-200">
                {readingProgress}%
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                if (speechStatus === 'idle' && !showAudioBar) {
                  speakSegment(0);
                } else {
                  handleTogglePlayPause();
                }
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                speechStatus === 'playing'
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/25'
                  : speechStatus === 'paused' || showAudioBar
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-500/50 text-indigo-700 dark:text-indigo-200'
                  : 'glass-surface-blue text-slate-700 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-indigo-500/40'
              }`}
              title={
                speechStatus === 'playing'
                  ? 'Pause read-along audio'
                  : speechStatus === 'paused'
                  ? 'Resume read-along audio'
                  : 'Listen to chapter notes (Text-to-Speech)'
              }
              aria-label="Listen to Chapter Notes"
            >
              {speechStatus === 'playing' ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Volume2 className="h-3.5 w-3.5" />
              )}
              <span className="hidden sm:inline">
                {speechStatus === 'playing'
                  ? 'Pause Audio'
                  : speechStatus === 'paused'
                  ? 'Resume'
                  : 'Listen'}
              </span>
            </button>

            <button
              onClick={handleToggleOfflineSave}
              disabled={isSavingOffline}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-colors ${
                isOfflineSaved
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                  : 'glass-surface-blue text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-500/40'
              }`}
              title={isOfflineSaved ? 'Saved for offline reading (click to remove)' : 'Save chapter for offline study'}
              aria-label="Save Chapter Offline"
            >
              {isOfflineSaved ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Download className="h-3.5 w-3.5" />}
              <span className="hidden md:inline">
                {isSavingOffline ? 'Saving...' : isOfflineSaved ? 'Saved Offline' : 'Offline'}
              </span>
            </button>

            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-xl border text-xs font-medium transition-colors ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400'
                  : 'glass-surface-blue text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-500/40'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark this chapter'}
              aria-label="Bookmark Chapter"
            >
              {isBookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            </button>

            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl glass-surface-blue text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-500/40 text-xs font-medium transition-colors"
              title="Download / Print Chapter Notes as PDF"
              aria-label="Download Chapter as PDF"
            >
              <Printer className="h-4 w-4" />
            </button>

            <button
              onClick={() =>
                onAskAITutor({
                  chapterTitle: chapter.title,
                  subjectName: subject.name,
                  query: `Help me understand key concepts of Chapter ${chapter.chapterNumber}: ${chapter.title}.`,
                })
              }
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl btn-royal text-xs font-semibold"
            >
              <Bot className="h-4 w-4" />
              <span className="hidden sm:inline">Ask AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Expandable Read-Along Audio Controller nested inside sticky wrapper */}
        <AnimatePresence>
          {showAudioBar && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Text-to-Speech Read Along Controls"
              className="overflow-hidden border-t border-indigo-500/30 bg-gradient-to-r from-[#0A1128] via-[#181D4D] to-[#2D145E] text-white"
            >
              <div className="px-4 sm:px-6 py-2.5 flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
                {/* Primary playback transport */}
                <div className="flex items-center gap-2 min-w-0">
                  <button
                    type="button"
                    onClick={() => speakSegment(Math.max(0, activeSegmentIndex - 1))}
                    disabled={!speechSupported || activeSegmentIndex === 0}
                    className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors shrink-0"
                    title="Previous Section"
                    aria-label="Previous spoken section"
                  >
                    <SkipBack className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleTogglePlayPause}
                    disabled={!speechSupported}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 disabled:opacity-40 text-xs font-bold shadow-md transition-all shrink-0"
                    aria-label={speechStatus === 'playing' ? 'Pause reading' : 'Play or resume reading'}
                  >
                    {speechStatus === 'playing' ? (
                      <>
                        <Pause className="h-3.5 w-3.5" /> Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-3.5 w-3.5" /> {speechStatus === 'paused' ? 'Resume' : 'Play'}
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => speakSegment(Math.min(speechSegments.length - 1, activeSegmentIndex + 1))}
                    disabled={!speechSupported || activeSegmentIndex >= speechSegments.length - 1}
                    className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors shrink-0"
                    title="Next Section"
                    aria-label="Next spoken section"
                  >
                    <SkipForward className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => stopSpeech(false)}
                    disabled={speechStatus === 'idle'}
                    className="p-1.5 rounded-xl bg-white/10 hover:bg-rose-500/80 disabled:opacity-40 transition-colors shrink-0"
                    title="Stop audio"
                    aria-label="Stop reading aloud"
                  >
                    <Square className="h-3.5 w-3.5" />
                  </button>

                  <div className="min-w-0 ml-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-200">
                      <span className="uppercase tracking-wider">
                        {speechStatus === 'playing'
                          ? 'Reading Aloud'
                          : speechStatus === 'paused'
                          ? 'Paused'
                          : 'Ready'}
                      </span>
                      <span>•</span>
                      <span className="tabular-nums">
                        {speechSegments.length > 0 ? `${activeSegmentIndex + 1}/${speechSegments.length}` : '0/0'}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white truncate max-w-[190px] sm:max-w-[300px]">
                      {currentSpeechSegment?.label || chapter.title}
                    </div>
                  </div>
                </div>

                {/* Speed, Voice, Follow-Along & Close */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <label className="flex items-center gap-1 text-[11px] font-semibold text-indigo-100 bg-white/10 px-2 py-1 rounded-lg">
                    <span>Speed</span>
                    <select
                      aria-label="Playback speed"
                      value={speechRate}
                      onChange={(e) => handleChangeSpeechRate(Number(e.target.value))}
                      className="bg-transparent text-white font-bold focus:outline-none cursor-pointer"
                    >
                      {[0.85, 1, 1.15, 1.3, 1.5].map((r) => (
                        <option key={r} value={r} className="bg-[#0A1128] text-white">
                          {r}x
                        </option>
                      ))}
                    </select>
                  </label>

                  {availableVoices.length > 0 && (
                    <select
                      aria-label="Reading voice"
                      value={selectedVoiceURI}
                      onChange={(e) => handleChangeVoice(e.target.value)}
                      className="max-w-[140px] sm:max-w-[165px] text-[11px] font-semibold text-indigo-100 bg-white/10 px-2 py-1 rounded-lg focus:outline-none cursor-pointer truncate"
                    >
                      {availableVoices.map((v) => (
                        <option key={v.voiceURI} value={v.voiceURI} className="bg-[#0A1128] text-white">
                          {v.name} ({v.lang})
                        </option>
                      ))}
                    </select>
                  )}

                  <button
                    type="button"
                    onClick={() => setFollowAlong((prev) => !prev)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-semibold border transition-colors ${
                      followAlong
                        ? 'bg-emerald-500/25 border-emerald-400/60 text-emerald-200'
                        : 'bg-white/5 border-white/20 text-slate-300'
                    }`}
                    title="Automatically scroll active study notes into view while listening"
                  >
                    {followAlong ? 'Follow: On' : 'Follow: Off'}
                  </button>

                  <button
                    type="button"
                    onClick={() => stopSpeech(true)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors ml-auto sm:ml-0"
                    title="Close audio player"
                    aria-label="Close Text-to-Speech player"
                  >
                    <VolumeX className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {speechError && (
                <div className="mx-4 sm:mx-6 mb-2.5 px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-xs text-amber-100">
                  {speechError}
                </div>
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* Chapter Title & Header */}
      <div className="mt-8 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <span>{subject.name} (ICSE Class 8)</span>
          <span>•</span>
          <span>{chapter.term} Examination Syllabus</span>
        </div>

        <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
          Chapter {chapter.chapterNumber}: {chapter.title}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-[75ch]">
          {chapter.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
          <span>Est. Study Time: {chapter.estimatedMinutes} mins</span>
          <span>•</span>
          <span>Prescribed Textbook: {subject.prescribedTextbook}</span>
          <span>•</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            {isCompleted ? 'Completed' : 'In Progress'}
          </span>
        </div>

        {/* Section Outline Navigation Bar */}
        <nav
          aria-label="Chapter Section Contents"
          className="no-print mt-5 flex flex-wrap items-center gap-2 text-xs"
        >
          <span className="font-bold text-slate-500 dark:text-slate-400 mr-1">Jump to:</span>
          <button onClick={() => scrollToSection('sec-intro')} className="px-2.5 py-1 rounded-lg glass-surface-blue font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400">
            Introduction
          </button>
          <button onClick={() => scrollToSection('sec-topics')} className="px-2.5 py-1 rounded-lg glass-surface-blue font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400">
            Topics ({chapter.notes.topics.length})
          </button>
          {chapter.notes.formulaSheet && chapter.notes.formulaSheet.length > 0 && (
            <button onClick={() => scrollToSection('sec-formulas')} className="px-2.5 py-1 rounded-lg glass-surface-blue font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400">
              Formula Sheet
            </button>
          )}
          <button onClick={() => scrollToSection('sec-examples')} className="px-2.5 py-1 rounded-lg glass-surface-blue font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400">
            Solved Examples
          </button>
          {hasGradedQuestions && (
            <button onClick={() => scrollToSection('sec-graded')} className="px-2.5 py-1 rounded-lg glass-surface-blue font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400">
              Graded Drills
            </button>
          )}
          <button onClick={() => scrollToSection('sec-qa')} className="px-2.5 py-1 rounded-lg glass-surface-blue font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400">
            Exam Q&amp;A
          </button>
          {chapter.notes.practiceWorksheet && (
            <button onClick={() => scrollToSection('sec-worksheet')} className="px-2.5 py-1 rounded-lg glass-surface-blue font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400">
              Worksheet
            </button>
          )}
          {chapter.quizQuestions.length > 0 && (
            <button onClick={() => onStartQuiz(chapter)} className="px-2.5 py-1 rounded-lg btn-royal font-semibold">
              Take Chapter Quiz ({chapter.quizQuestions.length} Qs)
            </button>
          )}
        </nav>
      </div>

      {/* 1. Introduction */}
      <section
        id="sec-intro"
        className={`mt-8 scroll-mt-28 rounded-2xl transition-all ${
          activeSpokenDomId === 'sec-intro'
            ? 'ring-2 ring-indigo-500/80 ring-offset-4 ring-offset-transparent'
            : ''
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            1. Chapter Introduction
          </h2>
          <button
            type="button"
            onClick={() => handleListenFromDomId('sec-intro')}
            className="no-print flex items-center gap-1 px-2.5 py-1 rounded-lg glass-surface-blue text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 transition-colors"
            title="Listen to Introduction"
          >
            <Volume2 className="h-3.5 w-3.5" /> Listen
          </button>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl glass-card text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <p className="max-w-[75ch] whitespace-pre-line">{chapter.notes.introduction}</p>
        </div>
      </section>

      {/* 2. Learning Objectives */}
      <section
        id="sec-objectives"
        className={`mt-8 scroll-mt-28 rounded-2xl transition-all ${
          activeSpokenDomId === 'sec-objectives'
            ? 'ring-2 ring-indigo-500/80 ring-offset-4 ring-offset-transparent'
            : ''
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            2. Learning Objectives (CMS / CISCE Expectations)
          </h2>
          <button
            type="button"
            onClick={() => handleListenFromDomId('sec-objectives')}
            className="no-print flex items-center gap-1 px-2.5 py-1 rounded-lg glass-surface-blue text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 transition-colors"
            title="Listen from Learning Objectives"
          >
            <Volume2 className="h-3.5 w-3.5" /> Listen
          </button>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl glass-surface-blue">
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 max-w-[75ch]">
            {chapter.notes.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Detailed Topic-Wise Explanations, Subtopics, Tables & Diagrams */}
      <section id="sec-topics" className="mt-8 space-y-6 scroll-mt-28">
        <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          3. Detailed Topic-Wise Notes &amp; Illustrated Concepts
        </h2>

        {chapter.notes.topics.map((topic, idx) => {
          const topicDomId = `tts-topic-${topic.id}`;
          const isSpeakingThisTopic = activeSpokenDomId === topicDomId;
          return (
          <div
            key={topic.id}
            id={topicDomId}
            className={`p-6 rounded-2xl glass-card space-y-5 scroll-mt-28 transition-all ${
              isSpeakingThisTopic
                ? 'ring-2 ring-indigo-500/85 bg-indigo-50/35 dark:bg-indigo-950/30 shadow-lg shadow-indigo-500/15'
                : ''
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-2.5">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                Topic 3.{idx + 1}: {topic.title}
              </h3>
              <button
                type="button"
                onClick={() => handleListenFromDomId(topicDomId)}
                className={`no-print flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                  isSpeakingThisTopic
                    ? 'bg-indigo-600 text-white'
                    : 'glass-surface-blue text-indigo-700 dark:text-indigo-300 hover:border-indigo-400'
                }`}
                title={`Listen to Topic 3.${idx + 1}`}
              >
                <Volume2 className="h-3.5 w-3.5" />
                {isSpeakingThisTopic && speechStatus === 'playing' ? 'Reading...' : 'Listen'}
              </button>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line max-w-[75ch]">
              {topic.content}
            </p>

            {/* Subtopics breakdown */}
            {topic.subtopics && topic.subtopics.length > 0 && (
              <div className="space-y-3.5 pt-1">
                {topic.subtopics.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-50/80 dark:bg-[#0D1530]/80 border border-indigo-100/80 dark:border-indigo-500/20 space-y-2"
                  >
                    <h4 className="text-sm font-bold text-indigo-950 dark:text-indigo-200 font-heading">
                      3.{idx + 1}.{sIdx + 1} {sub.subheading}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line max-w-[75ch]">
                      {sub.body}
                    </p>
                    {sub.keyPoint && (
                      <div className="p-3 rounded-lg bg-indigo-50/90 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-700/40 text-xs text-indigo-900 dark:text-indigo-200 font-medium">
                        <strong className="font-bold">Key Takeaway:</strong> {sub.keyPoint}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Diagram (SVG geometric figure or image illustration) with Zoom */}
            {topic.diagram && (
              <div className="mt-4 p-4 rounded-xl glass-surface-blue">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                    {topic.diagram.title}
                  </span>
                  <button
                    onClick={() => setZoomedDiagram(topic.diagram!)}
                    className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300 hover:underline"
                  >
                    <ZoomIn className="h-3.5 w-3.5" /> Enlarge Diagram
                  </button>
                </div>

                <div
                  onClick={() => setZoomedDiagram(topic.diagram!)}
                  className="cursor-pointer overflow-hidden rounded-lg border border-indigo-200/70 dark:border-indigo-500/25 group relative bg-white p-2"
                >
                  {topic.diagram.svgFigure ? (
                    <MathSvgDiagram
                      figureType={topic.diagram.svgFigure}
                      className="w-full max-h-[340px]"
                    />
                  ) : topic.diagram.imageUrl ? (
                    <OfflineCachedImage
                      src={topic.diagram.imageUrl}
                      alt={topic.diagram.title}
                      className="w-full max-h-[380px] object-contain bg-white group-hover:scale-[1.02] transition-transform duration-200"
                    />
                  ) : null}
                </div>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 italic">
                  {topic.diagram.caption}
                </p>
              </div>
            )}

            {/* Comparison Table inside Topic */}
            {topic.comparisonTable && (
              <div className="mt-4 overflow-x-auto rounded-xl border border-indigo-200/70 dark:border-indigo-500/25">
                {topic.comparisonTable.caption && (
                  <div className="px-4 py-2 bg-indigo-50/80 dark:bg-indigo-950/50 text-xs font-bold text-indigo-900 dark:text-indigo-200 border-b border-indigo-200/70 dark:border-indigo-500/25 flex items-center gap-1.5">
                    <Table2 className="h-3.5 w-3.5" />
                    {topic.comparisonTable.caption}
                  </div>
                )}
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100/90 dark:bg-[#0B1228] text-slate-800 dark:text-slate-200 font-bold">
                    <tr>
                      {topic.comparisonTable.headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-2.5 border-b border-indigo-100 dark:border-indigo-800/60">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-100/70 dark:divide-indigo-900/40 bg-white/70 dark:bg-transparent">
                    {topic.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-2.5 text-slate-700 dark:text-slate-300 tabular-nums align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Definitions within topic */}
            {topic.definitions && topic.definitions.length > 0 && (
              <div className="mt-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                  Key Definitions:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {topic.definitions.map((def, dIdx) => (
                    <div key={dIdx} className="p-3.5 rounded-xl glass-surface-blue">
                      <strong className="text-xs font-bold text-indigo-950 dark:text-indigo-200 block">
                        {def.term}
                      </strong>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        {def.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Formulas within topic */}
            {topic.formulas && topic.formulas.length > 0 && (
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-[#0A1128] to-[#1B1F5C] text-white font-mono border border-indigo-500/30 shadow-md">
                <span className="text-[11px] text-indigo-300 uppercase tracking-wider block mb-1.5">
                  Important Mathematical Laws &amp; Formulas:
                </span>
                {topic.formulas.map((f, fIdx) => (
                  <div key={fIdx} className="mb-2.5 last:mb-0">
                    <div className="text-sm font-bold text-amber-300">{f.formula}</div>
                    <div className="text-xs text-slate-300 mt-0.5">{f.explanation}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Real Life Example */}
            {topic.realLifeExample && (
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                  <Lightbulb className="h-4 w-4" /> Real-Life Application
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-[75ch]">
                  {topic.realLifeExample}
                </p>
              </div>
            )}

            {/* Common Mistakes */}
            {topic.commonMistakes && topic.commonMistakes.length > 0 && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-rose-800 dark:text-rose-300 mb-1">
                  <AlertTriangle className="h-4 w-4" /> Common Student Exam Mistakes
                </div>
                {topic.commonMistakes.map((m, mIdx) => (
                  <div key={mIdx} className="mt-1.5">
                    <span className="text-rose-600 dark:text-rose-400 font-semibold">Mistake:</span>{' '}
                    <span className="text-slate-700 dark:text-slate-300">{m.mistake}</span>
                    <br />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ICSE Correction:</span>{' '}
                    <span className="text-slate-700 dark:text-slate-300">{m.correction}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          );
        })}
      </section>

      {/* Consolidated Chapter Formula Sheet & Key Terminology */}
      {((chapter.notes.formulaSheet && chapter.notes.formulaSheet.length > 0) ||
        (chapter.notes.importantTerminology && chapter.notes.importantTerminology.length > 0)) && (
        <section
          id="sec-formulas"
          className={`mt-8 space-y-6 scroll-mt-28 rounded-2xl transition-all ${
            activeSpokenDomId === 'sec-formulas'
              ? 'ring-2 ring-indigo-500/80 ring-offset-4 ring-offset-transparent'
              : ''
          }`}
        >
          {chapter.notes.formulaSheet && chapter.notes.formulaSheet.length > 0 && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A1128] via-[#171E4A] to-[#2E1065] text-white border border-indigo-400/30 shadow-lg space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-amber-300" />
                  <h2 className="text-lg font-bold font-heading text-white">
                    Master Formula Sheet ({chapter.notes.formulaSheet.length} Formulas)
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => handleListenFromDomId('sec-formulas')}
                  className="no-print flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-[11px] font-semibold text-white transition-colors"
                  title="Listen to Master Formula Sheet"
                >
                  <Volume2 className="h-3.5 w-3.5" /> Listen
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {chapter.notes.formulaSheet.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/8 border border-white/15 space-y-1"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-200">
                      {item.title}
                    </div>
                    <div className="font-mono text-sm font-bold text-amber-300 break-words">
                      {item.expression}
                    </div>
                    <div className="text-xs text-slate-200/85">{item.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {chapter.notes.importantTerminology && chapter.notes.importantTerminology.length > 0 && (
            <div className="p-6 rounded-2xl glass-card space-y-3">
              <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
                Important Terminology Glossary ({chapter.notes.importantTerminology.length} Terms)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {chapter.notes.importantTerminology.map((termItem, tIdx) => (
                  <div key={tIdx} className="p-3.5 rounded-xl glass-surface-blue">
                    <div className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                      {termItem.term}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      {termItem.definition}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {chapter.notes.comparisonTables && chapter.notes.comparisonTables.length > 0 && (
            <div className="space-y-4">
              {chapter.notes.comparisonTables.map((tbl, tIdx) => (
                <div
                  key={tIdx}
                  className="overflow-x-auto rounded-2xl glass-card border border-indigo-200/70 dark:border-indigo-500/25"
                >
                  <div className="px-5 py-3 bg-indigo-50/80 dark:bg-indigo-950/50 text-xs font-bold text-indigo-900 dark:text-indigo-200 border-b border-indigo-200/70 dark:border-indigo-500/25 flex items-center gap-2">
                    <Table2 className="h-4 w-4" />
                    {tbl.title}
                  </div>
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100/80 dark:bg-[#0B1228] text-slate-800 dark:text-slate-200 font-bold">
                      <tr>
                        {tbl.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-2.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-indigo-100/70 dark:divide-indigo-900/40">
                      {tbl.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-2.5 text-slate-700 dark:text-slate-300 tabular-nums align-top">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 4. Solved Examples with Step-by-Step solutions */}
      {chapter.notes.solvedExamples && chapter.notes.solvedExamples.length > 0 && (
        <section id="sec-examples" className="mt-8 scroll-mt-28">
          <div
            onClick={() => toggleAccordion('solved')}
            className="flex items-center justify-between cursor-pointer p-4 rounded-xl glass-card hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-colors"
          >
            <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              4. Step-by-Step Solved ICSE Examples ({chapter.notes.solvedExamples.length})
            </h2>
            {expandedSections['solved'] ? (
              <ChevronUp className="h-5 w-5 text-indigo-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-indigo-500" />
            )}
          </div>

          {expandedSections['solved'] && (
            <div className="mt-3 space-y-4">
              {chapter.notes.solvedExamples.map((ex, exIdx) => (
                <div key={ex.id} className="p-5 rounded-2xl glass-card space-y-3">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                    Example 4.{exIdx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{ex.question}</h4>
                  <div className="p-4 rounded-xl glass-surface-blue font-mono text-xs space-y-1.5">
                    {ex.steps.map((st, sIdx) => (
                      <div key={sIdx} className="text-slate-700 dark:text-slate-200">
                        {st}
                      </div>
                    ))}
                    <div className="pt-2 border-t border-indigo-200/70 dark:border-indigo-500/20 text-emerald-600 dark:text-emerald-400 font-bold">
                      Answer: {ex.finalAnswer}
                    </div>
                  </div>
                  {ex.keyRule && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                      Key Principle: {ex.keyRule}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 5. Graded Practice Questions (Easy / Medium / Difficult) */}
      {hasGradedQuestions && chapter.notes.gradedQuestions && (
        <section id="sec-graded" className="mt-8 space-y-4 scroll-mt-28">
          <div
            onClick={() => toggleAccordion('graded')}
            className="flex items-center justify-between cursor-pointer p-4 rounded-xl glass-card hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-colors"
          >
            <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-indigo-600 dark:text-purple-400" />
              5. Graded Practice Question Bank (Easy · Medium · Difficult)
            </h2>
            {expandedSections['graded'] ? (
              <ChevronUp className="h-5 w-5 text-indigo-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-indigo-500" />
            )}
          </div>

          {expandedSections['graded'] && (
            <div className="p-5 sm:p-6 rounded-2xl glass-card space-y-4">
              <div className="flex flex-wrap items-center gap-2 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3">
                {(['easy', 'medium', 'difficult'] as const).map((level) => {
                  const count = chapter.notes.gradedQuestions![level].length;
                  return (
                    <button
                      key={level}
                      onClick={() => setActiveDifficulty(level)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                        activeDifficulty === level
                          ? 'btn-royal'
                          : 'glass-surface-blue text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                      }`}
                    >
                      {level} Level ({count})
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3">
                {chapter.notes.gradedQuestions[activeDifficulty].map((qItem, idx) => {
                  const isShown = Boolean(revealedSolutions[qItem.id]);
                  return (
                    <div
                      key={qItem.id}
                      className="p-4 rounded-xl glass-surface-blue space-y-2.5 text-xs"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="font-bold text-slate-900 dark:text-white text-sm">
                          Q{idx + 1}. {qItem.question}
                        </div>
                        {qItem.marks && (
                          <span className="text-[11px] font-bold text-indigo-600 dark:text-purple-300 shrink-0 tabular-nums">
                            [{qItem.marks} Marks]
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleSolution(qItem.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-purple-300 hover:underline"
                      >
                        {isShown ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                        {isShown ? 'Hide Step-by-Step Solution' : 'Show Step-by-Step Solution'}
                      </button>

                      {isShown && (
                        <div className="p-3.5 rounded-xl bg-white/90 dark:bg-[#090F24] border border-indigo-200/70 dark:border-indigo-500/25 font-mono space-y-1">
                          {qItem.solutionSteps.map((step, sIdx) => (
                            <div key={sIdx} className="text-slate-700 dark:text-slate-200">
                              {step}
                            </div>
                          ))}
                          <div className="pt-1.5 border-t border-indigo-100 dark:border-indigo-800/60 font-bold text-emerald-600 dark:text-emerald-400">
                            Final Answer: {qItem.finalAnswer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 6. Exam Preparation Tips & Chapter Summary */}
      <section
        id="sec-summary"
        className={`mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 scroll-mt-28 rounded-2xl transition-all ${
          activeSpokenDomId === 'sec-summary'
            ? 'ring-2 ring-indigo-500/80 ring-offset-4 ring-offset-transparent'
            : ''
        }`}
      >
        <div className="p-5 rounded-2xl glass-card">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              Exam Preparation &amp; Marking Tips
            </h3>
            <button
              type="button"
              onClick={() => handleListenFromDomId('sec-summary')}
              className="no-print flex items-center gap-1 px-2 py-1 rounded-lg glass-surface-blue text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 transition-colors"
              title="Listen to Exam Tips & Summary"
            >
              <Volume2 className="h-3 w-3" /> Listen
            </button>
          </div>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {chapter.notes.examPreparationTips.map((tip, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-2xl glass-card">
          <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            Chapter Summary Points
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {chapter.notes.chapterSummary.map((sum, sIdx) => (
              <li key={sIdx} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{sum}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Important Board Questions & Answers */}
      <section id="sec-qa" className="mt-8 scroll-mt-28">
        <div
          onClick={() => toggleAccordion('qa')}
          className="flex items-center justify-between cursor-pointer p-4 rounded-xl glass-card hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-colors"
        >
          <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Important Questions &amp; Verified Answers ({chapter.notes.importantQuestionsAndAnswers.length})
          </h2>
          {expandedSections['qa'] ? (
            <ChevronUp className="h-5 w-5 text-indigo-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-indigo-500" />
          )}
        </div>

        {expandedSections['qa'] && (
          <div className="mt-3 space-y-3">
            {chapter.notes.importantQuestionsAndAnswers.map((qa, qIdx) => (
              <div key={qIdx} className="p-5 rounded-2xl glass-card space-y-2.5 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    Q{qIdx + 1}: {qa.question}
                  </span>
                  <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-300">
                    {qa.type}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-200 whitespace-pre-line leading-relaxed p-3.5 rounded-xl glass-surface-blue">
                  {qa.answer}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 8. Self-Check Practice Exercises */}
      {chapter.notes.practiceExercises && chapter.notes.practiceExercises.length > 0 && (
        <section className="mt-8">
          <div
            onClick={() => toggleAccordion('exercises')}
            className="flex items-center justify-between cursor-pointer p-4 rounded-xl glass-card hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-colors"
          >
            <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              Practice Exercises ({chapter.notes.practiceExercises.length})
            </h2>
            {expandedSections['exercises'] ? (
              <ChevronUp className="h-5 w-5 text-indigo-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-indigo-500" />
            )}
          </div>

          {expandedSections['exercises'] && (
            <div className="mt-3 space-y-3">
              {chapter.notes.practiceExercises.map((ex, pIdx) => {
                const solKey = `prac-${pIdx}`;
                const shown = Boolean(revealedSolutions[solKey]);
                return (
                  <div key={pIdx} className="p-4 rounded-2xl glass-card space-y-2 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white text-sm">
                      Exercise {pIdx + 1}: {ex.question}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      <strong className="text-indigo-600 dark:text-indigo-300">Hint:</strong> {ex.hint}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleSolution(solKey)}
                      className="text-xs font-semibold text-indigo-600 dark:text-purple-300 hover:underline"
                    >
                      {shown ? 'Hide Answer Guide' : 'Show Answer Guide'}
                    </button>
                    {shown && (
                      <div className="p-3 rounded-xl glass-surface-blue font-semibold text-emerald-700 dark:text-emerald-300">
                        {ex.answerGuide}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* 9. Printable Practice Worksheet */}
      {chapter.notes.practiceWorksheet && (
        <section id="sec-worksheet" className="mt-8 scroll-mt-28">
          <div className="p-6 rounded-2xl glass-card space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5 text-indigo-600 dark:text-purple-400" />
                  <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
                    {chapter.notes.practiceWorksheet.title}
                  </h2>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {chapter.notes.practiceWorksheet.instructions}
                </p>
              </div>
              <div className="no-print flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowWorksheetAnswers((prev) => !prev)}
                  className="px-3 py-1.5 rounded-xl glass-surface-blue text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400"
                >
                  {showWorksheetAnswers ? 'Hide Answer Key' : 'Show Answer Key'}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-xl btn-royal text-xs font-bold flex items-center gap-1"
                >
                  <Printer className="h-3.5 w-3.5" /> Print Worksheet
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {chapter.notes.practiceWorksheet.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                    {sec.sectionTitle}
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {sec.items.map((item, iIdx) => (
                      <li key={iIdx} className="p-3 rounded-xl glass-surface-blue">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {showWorksheetAnswers && chapter.notes.practiceWorksheet.answerKey.length > 0 && (
              <div className="p-4 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  Worksheet Answer Key
                </h4>
                <ul className="space-y-1 text-xs font-mono text-slate-700 dark:text-slate-200">
                  {chapter.notes.practiceWorksheet.answerKey.map((ans, aIdx) => (
                    <li key={aIdx}>{ans}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Student Personal Notes Scratchpad for this chapter */}
      <section className="no-print mt-8 p-5 rounded-2xl glass-card">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            My Personal Study Notes for Chapter {chapter.chapterNumber}
          </h3>
          <button
            onClick={handleSaveNote}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl text-white transition-colors ${
              noteSaved ? 'bg-emerald-600 hover:bg-emerald-700' : 'btn-royal'
            }`}
          >
            {noteSaved ? 'Saved ✓' : 'Save Notes'}
          </button>
        </div>
        <textarea
          value={userNote}
          onChange={(e) => {
            setUserNote(e.target.value);
            if (noteSaved) setNoteSaved(false);
          }}
          placeholder="Jot down formulas to memorize, doubts to ask your teacher or AI Tutor..."
          className="w-full h-24 p-3 rounded-xl glass-surface-blue text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </section>

      {/* Chapter Completion & Chapter Quiz Bar */}
      <section className="no-print mt-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0A1128] via-[#1B1F5C] to-[#3B1775] text-white shadow-xl border border-indigo-500/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">
              {isCompleted ? 'Chapter Completed' : 'Finish Reading'}
            </span>
            <h3 className="text-xl font-bold font-heading text-white mt-1">
              Ready to test your understanding?
            </h3>
            <p className="text-xs text-indigo-100/80 mt-1">
              Take the interactive Chapter {chapter.chapterNumber} Quiz with automatic checking &amp; explanations, or mark complete for 75 XP.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {!isCompleted && (
              <button
                onClick={handleCompleteChapter}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
              >
                <CheckCircle2 className="h-4 w-4" />
                Mark Chapter Complete
              </button>
            )}
            {chapter.quizQuestions.length > 0 && (
              <button
                onClick={() => onStartQuiz(chapter)}
                className="flex items-center gap-2 rounded-xl btn-royal px-5 py-2.5 text-xs font-bold"
              >
                <FileQuestion className="h-4 w-4" />
                Take Chapter Quiz ({chapter.quizQuestions.length} Qs)
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Previous Chapter / Next Chapter Navigation Bar */}
      <nav
        aria-label="Chapter Navigation"
        className="no-print mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {prevChapter && onPrevChapter ? (
          <button
            type="button"
            onClick={() => onPrevChapter(prevChapter)}
            className="text-left p-4 rounded-2xl glass-card-interactive flex items-center gap-3 group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl glass-surface-blue text-indigo-600 dark:text-indigo-300 group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Previous Chapter
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white truncate block">
                Ch {prevChapter.chapterNumber}: {prevChapter.title}
              </span>
            </div>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextChapter && onNextChapter ? (
          <button
            type="button"
            onClick={() => onNextChapter(nextChapter)}
            className="text-right p-4 rounded-2xl glass-card-interactive flex items-center justify-end gap-3 group"
          >
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-purple-300 block">
                Next Chapter
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white truncate block">
                Ch {nextChapter.chapterNumber}: {nextChapter.title}
              </span>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl btn-royal group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        ) : null}
      </nav>

      {/* Completion Celebration Modal */}
      <AnimatePresence>
        {showCelebrationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070B19]/75 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="w-full max-w-md rounded-3xl glass-card p-6 sm:p-7 shadow-2xl text-center"
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 340, damping: 16, delay: 0.08 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/35 mb-4"
              >
                <CheckCircle2 className="h-9 w-9" />
              </motion.div>

              <h3 className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                Congratulations!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                You have completed <strong>Chapter {chapter.chapterNumber}: {chapter.title}</strong>!
              </p>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="my-4 p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300"
              >
                <Flame className="h-4 w-4 text-orange-500" />
                <span>+75 XP Awarded • Daily Learning Streak Updated!</span>
              </motion.div>

              <div className="space-y-2.5 mt-5">
                {chapter.quizQuestions.length > 0 && (
                  <button
                    onClick={() => {
                      setShowCelebrationModal(false);
                      onStartQuiz(chapter);
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-xl btn-royal py-2.5 text-xs font-bold"
                  >
                    <FileQuestion className="h-4 w-4" />
                    Start Chapter Quiz
                  </button>
                )}

                <button
                  onClick={() => {
                    setShowCelebrationModal(false);
                    onAskAITutor({
                      chapterTitle: chapter.title,
                      subjectName: subject.name,
                      query: `I just finished reading ${chapter.title}. Can you ask me 3 quick conceptual questions to test my recall?`,
                    });
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl glass-surface-blue hover:border-indigo-300 dark:hover:border-indigo-500/50 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <Bot className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  Ask AI Tutor Practice Questions
                </button>

                {onNextChapter && nextChapter && (
                  <button
                    onClick={() => {
                      setShowCelebrationModal(false);
                      onNextChapter(nextChapter);
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50/70 dark:bg-indigo-950/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 py-2.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 transition-colors"
                  >
                    Continue to Chapter {nextChapter.chapterNumber}: {nextChapter.title}
                  </button>
                )}

                <button
                  onClick={() => setShowCelebrationModal(false)}
                  className="w-full py-2 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                >
                  Close &amp; Continue Reading
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enlarged Diagram Modal */}
      {zoomedDiagram && (
        <div
          onClick={() => setZoomedDiagram(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070B19]/80 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl glass-card p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                {zoomedDiagram.title}
              </h3>
              <button
                onClick={() => setZoomedDiagram(null)}
                className="text-xs font-bold px-3.5 py-1.5 rounded-xl glass-surface-blue text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors"
              >
                Close (ESC)
              </button>
            </div>
            <div className="overflow-hidden rounded-xl border border-indigo-200/70 dark:border-indigo-500/25 bg-white p-2">
              {zoomedDiagram.svgFigure ? (
                <MathSvgDiagram figureType={zoomedDiagram.svgFigure} className="w-full max-h-[68vh]" />
              ) : zoomedDiagram.imageUrl ? (
                <OfflineCachedImage
                  src={zoomedDiagram.imageUrl}
                  alt={zoomedDiagram.title}
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
