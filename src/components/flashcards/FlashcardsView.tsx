import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RotateCw,
  Check,
  X,
  Shuffle,
  Filter,
  Bookmark,
  BookmarkCheck,
} from 'lucide-react';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import { Flashcard, StudentProfile, Subject } from '../../types/index.ts';
import { recordLearningActivity, toggleSavedFlashcard } from '../../utils/storage.ts';

interface FlashcardsViewProps {
  subjects?: Subject[];
  initialSubjectId?: string | null;
  profile: StudentProfile;
  onProfileUpdated: (p: StudentProfile) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  subjects = ICSE_SUBJECTS,
  initialSubjectId,
  profile,
  onProfileUpdated,
}) => {
  // Aggregate all flashcards across all chapters
  const allCards: Flashcard[] = React.useMemo(
    () => subjects.flatMap((s) => s.chapters.flatMap((c) => c.flashcards)),
    [subjects]
  );

  const savedCardIds = profile.savedFlashcardIds || [];
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubjectId || 'all');
  const [savedOnly, setSavedOnly] = useState<boolean>(false);
  const [cards, setCards] = useState<Flashcard[]>(() => {
    if (initialSubjectId && initialSubjectId !== 'all') {
      const subCards = allCards.filter((c) => c.subjectId === initialSubjectId);
      return subCards.length > 0 ? subCards : allCards;
    }
    return allCards;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [rememberedCount, setRememberedCount] = useState(0);
  const [needsReviewCount, setNeedsReviewCount] = useState(0);

  // Filter cards
  const applyFilters = (sub: string, onlySaved: boolean, savedIdsOverride?: string[]) => {
    const activeSavedIds = savedIdsOverride ?? savedCardIds;
    let filtered = allCards;
    if (sub !== 'all') {
      filtered = filtered.filter((c) => c.subjectId === sub);
    }
    if (onlySaved) {
      filtered = filtered.filter((c) => activeSavedIds.includes(c.id));
    }
    setCards(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  React.useEffect(() => {
    if (initialSubjectId) {
      setSelectedSubject(initialSubjectId);
      applyFilters(initialSubjectId, savedOnly);
    }
  }, [initialSubjectId, allCards]);

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleToggleSaveCard = (e: React.MouseEvent, cardId: string) => {
    e.stopPropagation();
    const updated = toggleSavedFlashcard(cardId);
    onProfileUpdated(updated);
    if (savedOnly) {
      applyFilters(selectedSubject, true, updated.savedFlashcardIds || []);
    }
  };

  const handleResponse = (remembered: boolean) => {
    if (remembered) {
      setRememberedCount((prev) => prev + 1);
    } else {
      setNeedsReviewCount((prev) => prev + 1);
    }

    // Record activity for streak if reviewed 5+ cards
    if ((rememberedCount + needsReviewCount + 1) % 5 === 0) {
      const { profile: updatedProfile } = recordLearningActivity('practice_flashcards', {
        xpReward: 20,
      });
      onProfileUpdated(updatedProfile);
    }

    setIsFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const currentCard = cards[currentIndex] || cards[0];
  const isCurrentSaved = currentCard ? savedCardIds.includes(currentCard.id) : false;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-purple-300">
          Spaced Repetition &amp; Memory
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
          Interactive ICSE Flashcards
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Master formulas, definitions, grammar rules, and scientific principles with active 3D recall.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 p-3.5 rounded-2xl glass-card text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-4 w-4 text-indigo-500" />
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              applyFilters(e.target.value, savedOnly);
            }}
            className="rounded-xl glass-surface-blue px-3 py-1.5 font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Subjects ({allCards.length} cards)</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => {
              const nextSavedOnly = !savedOnly;
              setSavedOnly(nextSavedOnly);
              applyFilters(selectedSubject, nextSavedOnly);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${
              savedOnly
                ? 'btn-royal'
                : 'glass-surface-blue text-slate-700 dark:text-slate-200 hover:border-indigo-400'
            }`}
          >
            <BookmarkCheck className="h-3.5 w-3.5" />
            <span>Saved ({savedCardIds.length})</span>
          </button>
        </div>

        <button
          onClick={handleShuffle}
          disabled={cards.length === 0}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl glass-surface-blue text-slate-700 dark:text-slate-200 font-semibold hover:border-indigo-400 transition-colors active:scale-95 disabled:opacity-50"
        >
          <Shuffle className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" /> Shuffle Cards
        </button>
      </div>

      {/* Score tally */}
      <div className="flex items-center justify-between text-xs px-2 text-slate-500 dark:text-slate-400">
        <span className="font-semibold tabular-nums">
          {cards.length > 0 ? `Card ${currentIndex + 1} of ${cards.length}` : '0 cards'}
        </span>
        <div className="flex items-center gap-4 tabular-nums">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">
            ✓ Mastered: {rememberedCount}
          </span>
          <span className="text-rose-600 dark:text-rose-400 font-bold">
            ✗ Review: {needsReviewCount}
          </span>
        </div>
      </div>

      {/* Empty Saved State */}
      {cards.length === 0 ? (
        <div className="rounded-3xl glass-card p-10 text-center space-y-3">
          <Bookmark className="h-8 w-8 text-indigo-400 mx-auto" />
          <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
            No Saved Flashcards Yet
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
            Click the bookmark icon on any flashcard to save tricky formulas or definitions to your personal deck across all devices.
          </p>
          <button
            type="button"
            onClick={() => {
              setSavedOnly(false);
              applyFilters(selectedSubject, false);
            }}
            className="px-4 py-2 rounded-xl btn-royal text-xs font-bold"
          >
            Browse All Flashcards
          </button>
        </div>
      ) : (
        <>
          {/* True 3D Flipping Flashcard */}
          {currentCard && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard.id + '-' + currentIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsFlipped((prev) => !prev)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsFlipped((prev) => !prev);
                  }
                }}
                aria-label={isFlipped ? 'Flip flashcard to front' : 'Flip flashcard to reveal answer'}
                className="cursor-pointer select-none perspective-1200 min-h-[320px] focus:outline-none"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 24 }}
                  className="relative min-h-[320px] w-full preserve-3d"
                >
                  {/* FRONT FACE */}
                  <div className="backface-hidden absolute inset-0 rounded-3xl glass-card p-8 flex flex-col justify-between text-slate-900 dark:text-white hover:border-indigo-400 dark:hover:border-purple-400/60">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-purple-300">
                        {currentCard.category} · {currentCard.chapterTitle}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => handleToggleSaveCard(e, currentCard.id)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors ${
                            isCurrentSaved
                              ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-600 text-amber-600 dark:text-amber-300'
                              : 'glass-surface-blue text-slate-500 dark:text-slate-300 hover:border-indigo-400'
                          }`}
                          title={isCurrentSaved ? 'Remove from saved cards' : 'Save card to my account'}
                        >
                          {isCurrentSaved ? (
                            <BookmarkCheck className="h-3.5 w-3.5" />
                          ) : (
                            <Bookmark className="h-3.5 w-3.5" />
                          )}
                          <span>{isCurrentSaved ? 'Saved' : 'Save'}</span>
                        </button>
                        <span className="hidden sm:flex items-center gap-1 text-xs text-slate-400 shrink-0">
                          <RotateCw className="h-3.5 w-3.5" /> Flip
                        </span>
                      </div>
                    </div>

                    <div className="my-auto py-6 text-center">
                      <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-300 uppercase tracking-widest block mb-2">
                        Question / Term
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading leading-relaxed">
                        {currentCard.front}
                      </h3>
                    </div>

                    <div className="text-center text-[11px] text-slate-400">
                      Think of the definition or formula, then flip to check.
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="backface-hidden rotate-y-180 absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0A1128] via-[#1B1F5C] to-[#4C1D95] text-white border border-indigo-400/40 shadow-2xl shadow-indigo-950/40 p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                        {currentCard.category} · {currentCard.chapterTitle}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => handleToggleSaveCard(e, currentCard.id)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors ${
                            isCurrentSaved
                              ? 'bg-amber-400/20 border-amber-300 text-amber-200'
                              : 'bg-white/10 border-white/20 text-indigo-100 hover:bg-white/20'
                          }`}
                        >
                          {isCurrentSaved ? (
                            <BookmarkCheck className="h-3.5 w-3.5" />
                          ) : (
                            <Bookmark className="h-3.5 w-3.5" />
                          )}
                          <span>{isCurrentSaved ? 'Saved' : 'Save'}</span>
                        </button>
                        <span className="hidden sm:flex items-center gap-1 text-xs text-indigo-200 shrink-0">
                          <RotateCw className="h-3.5 w-3.5" /> Flip Back
                        </span>
                      </div>
                    </div>

                    <div className="my-auto py-6 text-center">
                      <span className="text-xs font-semibold text-indigo-200 uppercase tracking-widest block mb-2">
                        Verified Answer / Principle
                      </span>
                      <p className="text-base sm:text-lg font-medium leading-relaxed text-white">
                        {currentCard.back}
                      </p>
                    </div>

                    <div className="text-center text-[11px] text-indigo-200/80">
                      Did you recall this correctly? Choose below to advance.
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Response controls */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleResponse(false)}
              className="flex items-center justify-center gap-2 p-3.5 rounded-2xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/90 dark:bg-rose-950/25 text-rose-700 dark:text-rose-300 font-bold text-xs hover:bg-rose-100 dark:hover:bg-rose-950/40 active:scale-[0.98] transition-all"
            >
              <X className="h-4 w-4" /> Not Remembered (Review Later)
            </button>

            <button
              onClick={() => handleResponse(true)}
              className="flex items-center justify-center gap-2 p-3.5 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/90 dark:bg-emerald-950/25 text-emerald-700 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-100 dark:hover:bg-emerald-950/40 active:scale-[0.98] transition-all"
            >
              <Check className="h-4 w-4" /> Remembered (Mastered)
            </button>
          </div>
        </>
      )}
    </div>
  );
};

