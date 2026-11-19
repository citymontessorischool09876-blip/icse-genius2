import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  sanitizeFirestoreId,
  toFirestoreBookmarkItem,
  toFirestoreChapterProgress,
  toFirestoreExamResult,
  toFirestoreMistakeEntry,
  toFirestorePersonalNote,
  toFirestoreQuizAttempt,
  toFirestoreStudentProfile,
  toFirestoreStudyTask,
} from './src/utils/firestoreMappers.ts';
import type { StudentProfile } from './src/types/index.ts';

const SAMPLE_STUDENT_PROFILE: StudentProfile = {
  name: 'Aarav Sharma',
  school: 'City Montessori School (CMS), Gomti Nagar Campus, Lucknow',
  grade: 'Class 8',
  section: 'Section B',
  rollNumber: 'CMS-2026-8B14',
  xp: 350,
  streak: 6,
  lastActiveDate: '2026-11-17',
  completedChapterIds: ['math-ch1'],
  readingProgress: { 'math-ch1': 100 },
  bookmarks: [
    {
      id: 'bm-1',
      chapterId: 'phy-ch1',
      title: 'Matter',
      type: 'Definition',
      snippet: 'Molecules in random motion.',
    },
  ],
  personalNotes: { 'math-ch1': 'Note' },
  badges: [
    {
      id: 'welcome-scholar',
      title: 'First Step',
      description: 'Joined',
      unlockedAt: '2026-11-01',
      icon: 'BookOpen',
    },
  ],
  dailyGoalMinutes: 45,
  todayStudyMinutes: 25,
  leaderboardOptIn: true,
};

describe('Firestore Security Rules & Privacy Invariants', () => {
  const rulesText = fs.readFileSync(path.resolve('./firestore.rules'), 'utf8');
  const storageRulesText = fs.readFileSync(path.resolve('./storage.rules'), 'utf8');

  it('enforces global default-deny catch-all in firestore.rules and storage.rules', () => {
    assert.match(rulesText, /match \/\{document=\*\*\} \{\s*allow read, write: if false;/);
    assert.match(storageRulesText, /match \/\{allPaths=\*\*\} \{\s*allow read, write: if false;/);
  });

  it('requires verified student auth and strict ownership for private student documents and subcollections', () => {
    assert.match(rulesText, /function isVerifiedStudent\(\)/);
    assert.match(rulesText, /match \/users\/\{userId\}[\s\S]*allow get: if isValidId\(userId\) && isOwner\(userId\) && isVerifiedStudent\(\);/);
    assert.match(rulesText, /match \/users\/\{userId\}[\s\S]*allow delete: if isValidId\(userId\) && isOwner\(userId\) && isVerifiedStudent\(\);/);
    assert.match(rulesText, /match \/private\/\{docId\}[\s\S]*docId == 'info'[\s\S]*isOwner\(userId\) && isVerifiedStudent\(\)/);
    assert.match(rulesText, /match \/aiTutorHistory\/\{msgId\}[\s\S]*allow update: if false;/);
    assert.match(rulesText, /match \/examResults\/\{examId\}[\s\S]*allow update: if false;/);
    assert.match(rulesText, /match \/quizAttempts\/\{attemptId\}[\s\S]*allow update: if false;/);
  });

  it('restricts curriculum and admin writes strictly to email-verified admins', () => {
    assert.match(rulesText, /function isAdmin\(\) \{[\s\S]*isEmailVerified\(\)/);
    assert.match(rulesText, /match \/curriculumSubjects\/\{subjectId\}[\s\S]*allow create:[\s\S]*isAdmin\(\)/);
    assert.match(rulesText, /match \/curriculumChapters\/\{chapterId\}[\s\S]*allow create:[\s\S]*isAdmin\(\)/);
    assert.match(rulesText, /match \/curriculumDocuments\/\{docId\}[\s\S]*allow create:[\s\S]*isAdmin\(\)/);
    assert.match(rulesText, /match \/admins\/\{userId\}[\s\S]*allow create, update:[\s\S]*isAdmin\(\)/);
  });

  it('strips minor PII (rollNumber, email, photoURL) from /users/{uid} and bounds all student profile fields', () => {
    const dirtyProfile: StudentProfile = {
      ...SAMPLE_STUDENT_PROFILE,
      name: 'A'.repeat(250),
      xp: 99999999,
      streak: -10,
      dailyGoalMinutes: 2,
      todayStudyMinutes: 5000,
    };
    const payload = toFirestoreStudentProfile('student-uid-123', dirtyProfile, 'SERVER_TIME');

    assert.equal('rollNumber' in payload, false);
    assert.equal('email' in payload, false);
    assert.equal('photoURL' in payload, false);
    assert.equal('phoneNumber' in payload, false);
    assert.equal('bookmarks' in payload, false);
    assert.equal('personalNotes' in payload, false);
    assert.equal((payload.name as string).length, 100);
    assert.equal(payload.xp, 1000000);
    assert.equal(payload.streak, 0);
    assert.equal(payload.dailyGoalMinutes, 5);
    assert.equal(payload.todayStudyMinutes, 1440);
    assert.equal(payload.leaderboardOptIn, true);
  });

  it('serializes all remaining student domains within rule schema limits', () => {
    const prog = toFirestoreChapterProgress('u1', 'math/ch1', 'mathematics', 120, true, 'TS', '2026-11-18');
    assert.equal(prog.chapterId, 'math-ch1');
    assert.equal(prog.readingProgress, 100);
    assert.equal(prog.completed, true);

    const quiz = toFirestoreQuizAttempt('u1', {
      id: 'att/1',
      chapterId: 'math-ch1',
      subjectId: 'mathematics',
      timestamp: '2026-11-18T00:00:00Z',
      totalQuestions: 5,
      correctAnswers: 4,
      score: 4,
      percentage: 80,
      timeTakenSeconds: 45,
      wrongQuestionIds: ['q5'],
    });
    assert.equal(quiz.id, 'att-1');
    assert.equal(quiz.percentage, 80);

    const exam = toFirestoreExamResult('u1', {
      id: 'ex 1',
      examId: 'exam-hy-math',
      examTitle: 'Half Yearly Mathematics',
      term: 'Half-Yearly',
      subjectName: 'Mathematics',
      score: 18,
      correctAnswers: 4,
      totalQuestions: 5,
      marksScored: 16,
      totalMarks: 20,
      percentage: 80,
      timeTakenSeconds: 240,
      timestamp: '2026-11-18T00:00:00Z',
    });
    assert.equal(exam.id, 'ex-1');
    assert.equal(exam.marksScored, 16);

    const bm = toFirestoreBookmarkItem(
      'u1',
      { id: 'bm:1', chapterId: 'phy-ch1', title: 'Matter', type: 'Chapter', snippet: 'Theory' },
      'TS'
    );
    assert.equal(bm.id, 'bm-1');

    const note = toFirestorePersonalNote('u1', 'math-ch1', 'My study note', 'TS');
    assert.equal(note.content, 'My study note');

    const task = toFirestoreStudyTask(
      'u1',
      {
        id: 't1',
        title: 'Revise',
        subjectId: 'mathematics',
        chapterId: '',
        targetDate: '2026-11-18',
        estimatedMinutes: 0,
        completed: false,
      },
      'TS'
    );
    assert.equal(task.chapterId, 'general');
    assert.equal(task.estimatedMinutes, 1);

    const mistake = toFirestoreMistakeEntry('u1', {
      id: 'm1',
      questionText: '2+2?',
      subjectId: 'mathematics',
      chapterTitle: 'Ch 1',
      userAnswer: '5',
      correctAnswer: '4',
      explanation: 'Addition',
      savedAt: '2026-11-18T00:00:00Z',
      mastered: false,
    });
    assert.equal(mistake.mastered, false);
    assert.match(sanitizeFirestoreId('bad id/with spaces!'), /^[a-zA-Z0-9_-]+$/);
  });
});
