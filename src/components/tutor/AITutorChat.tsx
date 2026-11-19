import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  X,
  Send,
  Image as ImageIcon,
  Mic,
  MicOff,
  HelpCircle,
  Calculator,
  BookOpen,
  KeyRound,
  WifiOff,
  Plus,
  Trash2,
  Pencil,
  Check,
  Search,
  Copy,
  RefreshCw,
  Square,
  Volume2,
  VolumeX,
  MessageSquare,
} from 'lucide-react';
import {
  loadAITutorHistory,
  recordLearningActivity,
  saveAITutorMessage,
} from '../../utils/storage.ts';
import { StudentProfile } from '../../types/index.ts';
import { extractImageMimeType } from '../../utils/rules.ts';
import { normalizeTextForSpeech } from '../../utils/speechUtils.ts';

interface Message {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  imageUrl?: string;
  timestamp: string;
}

interface ChatThread {
  id: string;
  title: string;
  updatedAt: string;
  messages: Message[];
}

const createWelcomeMessage = (): Message => ({
  id: 'welcome-msg-' + Date.now(),
  sender: 'tutor',
  text: 'Hi! I am SIM SIM, your ICSE Genius AI Tutor (created by Tejasv Pratap Singh). Ask me step-by-step Maths, Physics, Chemistry, Biology, English, History, Geography, or Computer questions anytime!',
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
});

const getThreadsStorageKey = (uid?: string | null) =>
  `icse_genius_simsim_threads_v1_${uid || 'guest'}`;

interface AITutorChatProps {
  currentContext?: {
    chapterTitle?: string;
    subjectName?: string;
    query?: string;
  } | null;
  userId?: string | null;
  isOffline?: boolean;
  onClearContext?: () => void;
  onProfileUpdated?: (p: StudentProfile) => void;
}

export const AITutorChat: React.FC<AITutorChatProps> = ({
  currentContext,
  userId,
  isOffline = false,
  onClearContext,
  onProfileUpdated,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [activeThreadId, setActiveThreadId] = useState<string>('');
  const [showThreadPanel, setShowThreadPanel] = useState(false);
  const [threadSearch, setThreadSearch] = useState('');
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Load or initialize per-student chat threads (seeding existing Firestore history)
  useEffect(() => {
    const key = getThreadsStorageKey(userId);
    let loadedThreads: ChatThread[] = [];

    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          loadedThreads = parsed;
        }
      }
    } catch {
      // ignore invalid stored JSON
    }

    if (loadedThreads.length === 0) {
      const savedHistory = loadAITutorHistory(userId);
      const initialMsgs: Message[] =
        savedHistory.length > 0
          ? savedHistory.map((item) => ({
              id: item.id,
              sender: item.sender,
              text: item.text,
              timestamp: item.timestamp,
            }))
          : [createWelcomeMessage()];

      loadedThreads = [
        {
          id: 'thread-default-' + Date.now(),
          title: savedHistory.length > 0 ? 'Saved Study Session' : 'New Study Chat',
          updatedAt: new Date().toISOString(),
          messages: initialMsgs,
        },
      ];
    }

    setThreads(loadedThreads);
    setActiveThreadId(loadedThreads[0].id);
  }, [userId]);

  // Persist thread changes per user
  useEffect(() => {
    if (!activeThreadId || threads.length === 0) return;
    try {
      localStorage.setItem(getThreadsStorageKey(userId), JSON.stringify(threads));
    } catch {
      // ignore quota errors
    }
  }, [threads, activeThreadId, userId]);

  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeThreadId) || threads[0],
    [threads, activeThreadId]
  );
  const messages = activeThread?.messages || [];

  // Filtered threads & messages when searching
  const filteredThreads = useMemo(() => {
    const q = threadSearch.trim().toLowerCase();
    if (!q) return threads;
    return threads.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.messages.some((m) => m.text.toLowerCase().includes(q))
    );
  }, [threads, threadSearch]);

  const displayedMessages = useMemo(() => {
    const q = threadSearch.trim().toLowerCase();
    if (!q || !showThreadPanel) return messages;
    const matched = messages.filter((m) => m.text.toLowerCase().includes(q));
    return matched.length > 0 ? matched : messages;
  }, [messages, threadSearch, showThreadPanel]);

  // Close with Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        if (onClearContext) onClearContext();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClearContext]);

  // Stop speech synthesis on unmount or close
  useEffect(() => {
    if (!isOpen && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
    }
  }, [isOpen]);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, loading]);

  // Handle incoming context query from chapter reader or quiz
  useEffect(() => {
    if (currentContext?.query) {
      setIsOpen(true);
      setInput(currentContext.query);
    }
  }, [currentContext]);

  const updateActiveMessages = (updater: (prev: Message[]) => Message[], newTitleIfDefault?: string) => {
    const targetId = activeThread?.id;
    if (!targetId) return;
    setThreads((prevThreads) =>
      prevThreads.map((t) => {
        if (t.id !== targetId) return t;
        const nextMsgs = updater(t.messages);
        const shouldAutoTitle =
          newTitleIfDefault &&
          (t.title === 'New Study Chat' || t.title.startsWith('Chat ')) &&
          newTitleIfDefault.trim().length > 0;
        return {
          ...t,
          title: shouldAutoTitle ? newTitleIfDefault!.trim().slice(0, 34) : t.title,
          updatedAt: new Date().toISOString(),
          messages: nextMsgs,
        };
      })
    );
  };

  const handleNewChat = () => {
    if (loading) handleStopGeneration();
    const newThread: ChatThread = {
      id: 'thread-' + Date.now(),
      title: `Chat ${threads.length + 1}`,
      updatedAt: new Date().toISOString(),
      messages: [createWelcomeMessage()],
    };
    setThreads((prev) => [newThread, ...prev]);
    setActiveThreadId(newThread.id);
    setShowThreadPanel(false);
    setSelectedImage(null);
    setInput('');
  };

  const handleDeleteChat = (id: string) => {
    const remaining = threads.filter((t) => t.id !== id);
    if (remaining.length === 0) {
      const fresh: ChatThread = {
        id: 'thread-' + Date.now(),
        title: 'New Study Chat',
        updatedAt: new Date().toISOString(),
        messages: [createWelcomeMessage()],
      };
      setThreads([fresh]);
      setActiveThreadId(fresh.id);
    } else {
      setThreads(remaining);
      if (activeThreadId === id) {
        setActiveThreadId(remaining[0].id);
      }
    }
  };

  const handleSaveRename = (id: string) => {
    const trimmed = renameValue.trim();
    if (trimmed) {
      setThreads((prev) =>
        prev.map((t) => (t.id === id ? { ...t, title: trimmed } : t))
      );
    }
    setRenamingId(null);
    setRenameValue('');
  };

  const handleCopyMessage = async (msgId: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(msgId);
      setTimeout(() => setCopiedId((curr) => (curr === msgId ? null : curr)), 1800);
    } catch {
      // clipboard blocked in sandbox
    }
  };

  const handleSpeakMessage = (msgId: string, text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (speakingMsgId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(normalizeTextForSpeech(text));
    utter.lang = 'en-IN';
    utter.rate = 0.98;
    utter.onend = () => setSpeakingMsgId(null);
    utter.onerror = () => setSpeakingMsgId(null);
    setSpeakingMsgId(msgId);
    window.speechSynthesis.speak(utter);
  };

  const handleStopGeneration = () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setLoading(false);
  };

  // Voice Speech-to-Text via Web Speech API if supported
  const handleToggleVoice = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      updateActiveMessages((prev) => [
        ...prev,
        {
          id: 'speech-info-' + Date.now(),
          sender: 'tutor',
          text: 'Voice input is not supported in this browser. Please type your question below or upload a textbook photo.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      return;
    }

    if (isRecording) {
      setIsRecording(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsRecording(true);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsRecording(false);
      };
      recognition.onerror = () => setIsRecording(false);
      recognition.onend = () => setIsRecording(false);

      recognition.start();
    } catch {
      setIsRecording(false);
    }
  };

  // Image upload handling for homework doubts
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const streamOrFetchReply = async (opts: {
    messageText: string;
    imagePayload: string | null;
    historyPayload: Array<{ sender: string; text: string }>;
  }) => {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const replyId = 'tutor-' + Date.now();
    const replyTimestamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const bodyPayload = JSON.stringify({
      message: opts.messageText,
      history: opts.historyPayload,
      context: currentContext,
      imageBase64: opts.imagePayload,
      imageMimeType: opts.imagePayload ? extractImageMimeType(opts.imagePayload) : undefined,
    });

    const streamRes = await fetch('/api/ai-tutor/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: bodyPayload,
      signal: controller.signal,
    });

    if (!streamRes.ok) {
      const errData = await streamRes.json().catch(() => ({}));
      if (errData.error === 'API_KEY_NOT_CONFIGURED') {
        setApiKeyMissing(true);
        updateActiveMessages((prev) => [
          ...prev,
          {
            id: 'err-' + Date.now(),
            sender: 'tutor',
            text: 'To activate live SIM SIM Gemini responses, configure GEMINI_API_KEY in Settings > Secrets. Downloaded chapter notes, diagrams, flashcards, and quizzes work offline anytime!',
            timestamp: replyTimestamp,
          },
        ]);
        return;
      }
      throw new Error(errData.message || 'SIM SIM service error');
    }

    if (!streamRes.body) {
      throw new Error('Streaming response body unavailable');
    }

    // Seed empty streaming bubble
    updateActiveMessages((prev) => [
      ...prev,
      {
        id: replyId,
        sender: 'tutor',
        text: '',
        timestamp: replyTimestamp,
      },
    ]);

    const reader = streamRes.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let accumulatedText = '';

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) continue;
          const jsonPart = trimmed.slice(5).trim();
          if (!jsonPart) continue;
          const parsed = JSON.parse(jsonPart);
          if (parsed.error) {
            throw new Error(parsed.error);
          }
          if (parsed.chunk) {
            accumulatedText += parsed.chunk;
            const snapshot = accumulatedText;
            updateActiveMessages((prev) =>
              prev.map((m) => (m.id === replyId ? { ...m, text: snapshot } : m))
            );
          }
        }
      }
    } catch (streamErr) {
      if (!accumulatedText.trim()) {
        updateActiveMessages((prev) => prev.filter((m) => m.id !== replyId));
      }
      throw streamErr;
    }

    const finalReply =
      accumulatedText.trim() ||
      'I am SIM SIM, your ICSE Genius tutor — let me know which topic you want to explore!';

    updateActiveMessages((prev) =>
      prev.map((m) => (m.id === replyId ? { ...m, text: finalReply } : m))
    );

    saveAITutorMessage({
      id: replyId,
      sender: 'tutor',
      text: finalReply,
      chapterTitle: currentContext?.chapterTitle,
      subjectName: currentContext?.subjectName,
      timestamp: replyTimestamp,
    });
    setApiKeyMissing(false);

    const { profile: updatedProfile } = recordLearningActivity('ai_tutor_session', {
      xpReward: 10,
    });
    if (onProfileUpdated) onProfileUpdated(updatedProfile);
  };

  const handleSend = async (textToSend?: string) => {
    if (isOffline || loading) return;
    const messageText = (textToSend ?? input).trim();
    if (!messageText && !selectedImage) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: messageText,
      imageUrl: selectedImage || undefined,
      timestamp,
    };

    const historyPayload = messages.slice(-6).map((m) => ({
      sender: m.sender,
      text: m.text,
    }));

    updateActiveMessages((prev) => [...prev, userMsg], messageText);
    saveAITutorMessage({
      id: userMsg.id,
      sender: 'user',
      text: userMsg.text,
      chapterTitle: currentContext?.chapterTitle,
      subjectName: currentContext?.subjectName,
      timestamp,
    });

    if (!textToSend) setInput('');
    const imagePayload = selectedImage;
    setSelectedImage(null);
    setLoading(true);

    try {
      await streamOrFetchReply({
        messageText,
        imagePayload,
        historyPayload,
      });
    } catch (err: any) {
      if (err?.name === 'AbortError') {
        updateActiveMessages((prev) => [
          ...prev,
          {
            id: 'stopped-' + Date.now(),
            sender: 'tutor',
            text: '[Generation stopped by student]',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } else {
        console.error('Error contacting SIM SIM:', err);
        updateActiveMessages((prev) => [
          ...prev,
          {
            id: 'fallback-' + Date.now(),
            sender: 'tutor',
            text: err?.message || 'SIM SIM could not connect right now. Check your internet connection or try again shortly.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    } finally {
      abortControllerRef.current = null;
      setLoading(false);
    }
  };

  const handleRegenerateLast = async () => {
    if (isOffline || loading || messages.length < 2) return;
    const lastUserIndex = [...messages].reverse().findIndex((m) => m.sender === 'user');
    if (lastUserIndex === -1) return;
    const realUserIdx = messages.length - 1 - lastUserIndex;
    const targetUserMsg = messages[realUserIdx];
    const priorHistory = messages.slice(0, realUserIdx).slice(-6).map((m) => ({
      sender: m.sender,
      text: m.text,
    }));

    // Remove trailing tutor replies after the last user message
    updateActiveMessages((prev) => prev.slice(0, realUserIdx + 1));
    setLoading(true);

    try {
      await streamOrFetchReply({
        messageText: targetUserMsg.text,
        imagePayload: targetUserMsg.imageUrl || null,
        historyPayload: priorHistory,
      });
    } catch (err: any) {
      if (err?.name !== 'AbortError') {
        updateActiveMessages((prev) => [
          ...prev,
          {
            id: 'regen-err-' + Date.now(),
            sender: 'tutor',
            text: err?.message || 'Could not regenerate response. Please try again.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    } finally {
      abortControllerRef.current = null;
      setLoading(false);
    }
  };

  const quickPrompts = [
    { label: 'About ICSE Genius', icon: BookOpen, prompt: 'What is ICSE Genius and who created this website?' },
    { label: 'Step-by-step Math', icon: Calculator, prompt: 'How do I solve linear equations or rational number problems step by step?' },
    { label: 'Exam Tips', icon: HelpCircle, prompt: 'What are the most common mistakes Class 8 ICSE students make in exams?' },
  ];

  const lastTutorIdx = [...displayedMessages].reverse().findIndex((m) => m.sender === 'tutor');
  const latestTutorMsgId =
    lastTutorIdx !== -1 ? displayedMessages[displayedMessages.length - 1 - lastTutorIdx]?.id : null;

  return (
    <>
      {/* Floating trigger button in bottom-right corner */}
      <div id="ai-tutor-floating-button" className="no-print fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              onClick={() => setIsOpen(true)}
              className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0A1128] via-[#4F46E5] to-[#7C3AED] text-white shadow-2xl shadow-indigo-500/45 border border-indigo-400/35"
              title={isOffline ? 'SIM SIM AI Tutor (Requires Internet)' : 'Ask SIM SIM — ICSE Genius AI Tutor'}
              aria-label="Open SIM SIM AI Tutor"
            >
              <Bot className="h-7 w-7 transition-transform group-hover:rotate-6" />
              <span className="absolute -top-1.5 -right-1.5 inline-flex px-1.5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-[9px] font-extrabold text-slate-950 items-center justify-center shadow-sm">
                SIM
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Modern floating chat window with spring entrance/exit */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-tutor-floating-window"
            role="dialog"
            aria-modal="true"
            aria-label="SIM SIM AI Tutor"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 24 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            style={{ transformOrigin: 'bottom right' }}
            className="no-print fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-[600px] max-h-[85vh] w-[calc(100vw-32px)] sm:w-[440px] flex-col overflow-hidden rounded-3xl glass-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#0A1128] via-[#1E1B4B] to-[#5B21B6] px-4 py-3 text-white border-b border-indigo-500/30">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/15">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold font-heading leading-tight truncate">
                    SIM SIM · AI Tutor
                  </h3>
                  <p className="text-[10px] text-indigo-200 truncate">
                    {isOffline
                      ? 'Offline Mode · Cached History'
                      : currentContext?.chapterTitle
                      ? `Context: ${currentContext.chapterTitle}`
                      : activeThread?.title || 'Class 8 ICSE Study Assistant'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowThreadPanel((prev) => !prev)}
                  className={`rounded-xl p-1.5 transition-colors ${
                    showThreadPanel
                      ? 'bg-white/25 text-white'
                      : 'text-indigo-200 hover:bg-white/15 hover:text-white'
                  }`}
                  title="Manage & Search Chats"
                  aria-label="Toggle chat list and search"
                >
                  <MessageSquare className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNewChat}
                  className="rounded-xl p-1.5 text-indigo-200 hover:bg-white/15 hover:text-white transition-colors"
                  title="Start New Chat"
                  aria-label="New Chat"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    if (onClearContext) onClearContext();
                  }}
                  className="rounded-xl p-1.5 text-indigo-200 hover:bg-white/15 hover:text-white transition-colors"
                  aria-label="Close SIM SIM AI Tutor"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Thread Switcher & Search Panel */}
            {showThreadPanel && (
              <div className="p-3 bg-[#EAF2FF]/90 dark:bg-[#0B1226]/95 border-b border-indigo-200/80 dark:border-indigo-500/25 space-y-2.5 max-h-56 overflow-y-auto">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="h-3.5 w-3.5 text-indigo-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={threadSearch}
                      onChange={(e) => setThreadSearch(e.target.value)}
                      placeholder="Search chats or answers..."
                      className="w-full pl-8 pr-2.5 py-1.5 rounded-lg glass-card text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleNewChat}
                    className="px-2.5 py-1.5 rounded-lg btn-royal text-[11px] font-bold flex items-center gap-1 shrink-0"
                  >
                    <Plus className="h-3.5 w-3.5" /> New
                  </button>
                </div>

                <div className="space-y-1">
                  {filteredThreads.map((t) => {
                    const isSelected = t.id === activeThread?.id;
                    return (
                      <div
                        key={t.id}
                        className={`flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-xl text-xs transition-colors ${
                          isSelected
                            ? 'bg-indigo-100/90 dark:bg-indigo-950/70 border border-indigo-300 dark:border-indigo-500/50'
                            : 'glass-card hover:border-indigo-300'
                        }`}
                      >
                        {renamingId === t.id ? (
                          <div className="flex items-center gap-1 flex-1">
                            <input
                              type="text"
                              autoFocus
                              value={renameValue}
                              onChange={(e) => setRenameValue(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSaveRename(t.id);
                                if (e.key === 'Escape') setRenamingId(null);
                              }}
                              className="flex-1 bg-white dark:bg-slate-900 rounded px-2 py-0.5 text-xs text-slate-900 dark:text-white focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => handleSaveRename(t.id)}
                              className="p-1 text-emerald-600"
                              aria-label="Confirm chat rename"
                            >
                              <Check className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => {
                                setActiveThreadId(t.id);
                                if (!threadSearch) setShowThreadPanel(false);
                              }}
                              className="flex-1 text-left truncate font-semibold text-slate-800 dark:text-slate-100"
                            >
                              {t.title} ({t.messages.length})
                            </button>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  setRenamingId(t.id);
                                  setRenameValue(t.title);
                                }}
                                className="p-1 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300"
                                title="Rename chat"
                                aria-label={`Rename ${t.title}`}
                              >
                                <Pencil className="h-3 w-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteChat(t.id)}
                                className="p-1 text-slate-400 hover:text-rose-600"
                                title="Delete chat"
                                aria-label={`Delete ${t.title}`}
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Offline Notice Banner */}
            {isOffline && (
              <div className="p-3 bg-amber-50/95 dark:bg-amber-950/45 border-b border-amber-200 dark:border-amber-900/50 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-200">
                <WifiOff className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>You are offline:</strong> Live SIM SIM AI responses require internet. Your previous study chats and downloaded chapters remain available.
                </div>
              </div>
            )}

            {/* Missing API Key Guidance Banner */}
            {!isOffline && apiKeyMissing && (
              <div className="p-3 bg-amber-50/90 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-900/50 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-200">
                <KeyRound className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>API Key Required:</strong> Add{' '}
                  <code className="bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded text-[11px]">
                    GEMINI_API_KEY
                  </code>{' '}
                  in Secrets to activate live SIM SIM responses.
                </div>
              </div>
            )}

            {/* Quick Prompts Chips */}
            <div className="px-3 py-2 bg-[#EAF2FF]/70 dark:bg-[#0B1226]/90 border-b border-indigo-100/80 dark:border-indigo-500/20 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
              {quickPrompts.map((qp, qIdx) => {
                const Icon = qp.icon;
                return (
                  <button
                    key={qIdx}
                    disabled={isOffline || loading}
                    onClick={() => handleSend(qp.prompt)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-xl glass-card px-2.5 py-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors disabled:opacity-50"
                  >
                    <Icon className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                    <span>{qp.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Messages list */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
              {displayedMessages.map((msg) => {
                const isLatestTutor = msg.id === latestTutorMsgId && msg.sender === 'tutor';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl p-3.5 shadow-2xs leading-relaxed whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-[#1E3A8A] via-[#4F46E5] to-[#7C3AED] text-white rounded-br-xs shadow-md shadow-indigo-500/20'
                          : 'glass-surface-blue text-slate-900 dark:text-slate-100 rounded-bl-xs'
                      }`}
                    >
                      {msg.imageUrl && (
                        <div className="mb-2 overflow-hidden rounded-lg border border-white/20">
                          <img
                            src={msg.imageUrl}
                            alt="Uploaded homework doubt"
                            className="max-h-36 w-full object-cover"
                          />
                        </div>
                      )}
                      {msg.text || (loading && isLatestTutor ? 'SIM SIM is writing...' : '')}
                    </div>

                    <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-400">
                      <span>{msg.timestamp}</span>
                      {msg.sender === 'tutor' && msg.text && (
                        <>
                          <button
                            type="button"
                            onClick={() => handleCopyMessage(msg.id, msg.text)}
                            className="inline-flex items-center gap-0.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300"
                            title="Copy answer"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-500" />
                                <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSpeakMessage(msg.id, msg.text)}
                            className="inline-flex items-center gap-0.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300"
                            title={speakingMsgId === msg.id ? 'Stop reading' : 'Listen to explanation'}
                          >
                            {speakingMsgId === msg.id ? (
                              <VolumeX className="h-3 w-3 text-indigo-500" />
                            ) : (
                              <Volume2 className="h-3 w-3" />
                            )}
                          </button>
                          {isLatestTutor && !loading && messages.some((m) => m.sender === 'user') && (
                            <button
                              type="button"
                              onClick={handleRegenerateLast}
                              disabled={isOffline}
                              className="inline-flex items-center gap-0.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 disabled:opacity-40"
                              title="Regenerate answer"
                            >
                              <RefreshCw className="h-3 w-3" />
                              <span>Regenerate</span>
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {loading && (
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-2xl glass-surface-blue text-xs text-indigo-700 dark:text-indigo-200">
                    <Bot className="h-4 w-4 text-indigo-600 dark:text-purple-300 shrink-0" />
                    <span className="font-medium">SIM SIM is thinking</span>
                    <span className="flex items-center gap-1" aria-hidden="true">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.25s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.12s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-bounce" />
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleStopGeneration}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-[11px] font-bold text-rose-600 dark:text-rose-300 hover:bg-rose-100"
                  >
                    <Square className="h-3 w-3 fill-current" /> Stop
                  </button>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Image Preview if selected */}
            {selectedImage && (
              <div className="px-4 py-2 border-t border-indigo-100/80 dark:border-indigo-500/20 flex items-center justify-between bg-[#EAF2FF]/70 dark:bg-[#0B1226]">
                <span className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <ImageIcon className="h-3.5 w-3.5 text-indigo-500" /> Image attached for doubt solving
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xs text-rose-500 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 border-t border-indigo-100/80 dark:border-indigo-500/20 bg-white/80 dark:bg-[#0A1128]/90 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                  className="hidden"
                />

                <button
                  disabled={isOffline || loading}
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-slate-300 dark:hover:bg-indigo-950/50 transition-colors disabled:opacity-40"
                  title="Upload image of textbook problem / diagram"
                  aria-label="Upload homework photo"
                >
                  <ImageIcon className="h-4 w-4" />
                </button>

                <button
                  disabled={isOffline || loading}
                  onClick={handleToggleVoice}
                  className={`p-2 rounded-xl transition-colors disabled:opacity-40 ${
                    isRecording
                      ? 'bg-rose-500 text-white'
                      : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-slate-300 dark:hover:bg-indigo-950/50'
                  }`}
                  title={isRecording ? 'Listening... click to stop' : 'Voice speech-to-text input'}
                  aria-label="Toggle voice input"
                >
                  {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </button>

                <input
                  type="text"
                  value={input}
                  disabled={isOffline}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder={
                    isOffline
                      ? 'Reconnect to internet to ask SIM SIM...'
                      : isRecording
                      ? 'Listening...'
                      : 'Ask SIM SIM anything...'
                  }
                  className="flex-1 glass-surface-blue rounded-xl px-3.5 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
                />

                <button
                  onClick={() => handleSend()}
                  disabled={isOffline || loading || (!input.trim() && !selectedImage)}
                  className="p-2.5 rounded-xl btn-royal disabled:opacity-40"
                  title="Send to SIM SIM"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
