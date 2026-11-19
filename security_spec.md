# ICSE Genius Security Specification & Payload-First Threat Model

## 1. Core Data & Privacy Invariants (Class 8 Minors Protection)
1. **Strict PII Split Collection**: `/users/{userId}` and `/leaderboard/{userId}` MUST NEVER store emails, phone numbers, home addresses, birthdates, profile photos, or school roll numbers (`hasOnly()` blocks extra keys). Optional verified account identity fields (`email`, `phoneNumber`, `photoURL`, `authProvider`) live exclusively in `/users/{userId}/private/info` (`allow get, create, update, delete: if isOwner(userId) && isVerifiedStudent()`).
2. **Strict Private Student Isolation**: Every document under `/users/{userId}` and all private subcollections (`/private`, `/progress`, `/quizAttempts`, `/examResults`, `/bookmarks`, `/notes`, `/mistakes`, `/tasks`, `/aiTutorHistory`) is strictly readable and writable ONLY by the verified account owner (`request.auth.uid == userId && isVerifiedStudent()`). Even administrators cannot list or inspect private student profiles, notes, or private contact metadata.
3. **Immutable Historical Marks (Except Account Erasure)**: Submitted `/quizAttempts/{attemptId}` and `/examResults/{examId}` cannot be modified (`allow update: if false`), and cannot be deleted while the student's `/users/{userId}` profile document exists (deletion is permitted only after deleting `/users/{userId}` during full Account Deletion).
4. **Opt-In Non-PII Leaderboard**: `/leaderboard/{userId}` allows listing ONLY entries where `resource.data.isPublic == true`. Students can toggle `isPublic: false` to hide their ranking immediately.
5. **Multi-Provider Verified Student Access & Email-Verified Admin Access**: Students signed in via Google, Microsoft, Phone OTP, or email-verified Email/Password satisfy `isVerifiedStudent()`. CMS Administrative writes require strictly verified email (`email_verified == true`) plus bootstrap admin email or `/admins/{uid}` entry.

## 2. The "Dirty Dozen" Attack Payloads (All Must Result in `PERMISSION_DENIED`)
1. **Cross-Student Read**: Student A (`uid-a`) reads `/users/uid-b`, `/users/uid-b/private/info`, or `/users/uid-b/notes/math-ch1`.
2. **Identity Spoofing on Create**: Student A writes `/users/uid-a/quizAttempts/att1` with `userId: "uid-b"`.
3. **Shadow / Ghost Field Injection**: Student A writes `/users/uid-a` including `isAdmin: true` or `email: "leak@cms.edu"`.
4. **Privilege Escalation**: Student A attempts to create `/admins/uid-a` with `role: "admin"`.
5. **Email Spoofing Without Verification**: Attacker authenticates with unverified Email/Password matching admin email (`token.email_verified == false`) and writes `/curriculumChapters/math-ch1`.
6. **Unauthenticated Curriculum Tampering**: Unauthenticated or standard student user attempts to write `/curriculumSubjects/physics`.
7. **Quiz Score Tampering**: Student A attempts `update` or `delete` on `/users/uid-a/quizAttempts/att1` while `/users/uid-a` exists to raise `score`.
8. **Exam Marks Tampering**: Student A attempts `update` or `delete` on `/users/uid-a/examResults/exam1` or submits `marksScored: 99999999`.
9. **Path ID Poisoning**: Attacker writes document at `/users/uid-a/bookmarks/${'a'.repeat(500)}` or invalid characters `../admin`.
10. **Oversized Denial-of-Wallet String**: Student A writes a `1MB` string into `/users/uid-a/notes/math-ch1` (`> 10000` chars).
11. **Non-Server Timestamp Forgery**: Student A writes `/leaderboard/uid-a` with a client-supplied `updatedAt` timestamp not equal to `request.time`.
12. **PII Scraping List Query**: Unauthenticated client or Student A executes `list` query on `/users` or queries `/leaderboard` without `where('isPublic', '==', true)`.

