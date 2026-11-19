import React, { useEffect, useState } from 'react';
import {
  User,
  Moon,
  Sun,
  Save,
  CheckCircle2,
  ShieldCheck,
  Trophy,
  RefreshCw,
  LogOut,
  Trash2,
  KeyRound,
  AlertTriangle,
  WifiOff,
  Camera,
} from 'lucide-react';
import { StudentProfile, SyncStatusState } from '../../types/index.ts';
import {
  deleteEntireStudentAccountData,
  pushPrivateInfoToCloud,
  saveStudentProfile,
} from '../../utils/storage.ts';
import {
  auth,
  deleteFirebaseAuthAccount,
  getFriendlyAuthErrorMessage,
  getPrimaryAuthProvider,
  reauthenticateCurrentUser,
  resetPasswordForEmail,
  updateAuthDisplayProfile,
} from '../../utils/firebase.ts';
import { PWAInstallButton } from '../pwa/PWAInstallButton.tsx';

interface SettingsViewProps {
  profile: StudentProfile;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onProfileUpdated: (p: StudentProfile) => void;
  currentUser?: {
    displayName?: string | null;
    email?: string | null;
    phoneNumber?: string | null;
    photoURL?: string | null;
    uid?: string;
  } | null;
  isOffline?: boolean;
  syncState?: SyncStatusState;
  pendingSyncCount?: number;
  lastSyncedAt?: string | null;
  onManualSync?: () => Promise<void>;
  onSignOut?: () => void;
  onAccountDeleted?: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  profile,
  darkMode,
  onToggleDarkMode,
  onProfileUpdated,
  currentUser,
  isOffline = false,
  syncState = 'online',
  pendingSyncCount = 0,
  lastSyncedAt,
  onManualSync,
  onSignOut,
  onAccountDeleted,
}) => {
  const [name, setName] = useState(profile.name);
  const [school, setSchool] = useState(profile.school);
  const [section, setSection] = useState(profile.section);
  const [photoURL, setPhotoURL] = useState(profile.photoURL || currentUser?.photoURL || '');
  const [dailyGoal, setDailyGoal] = useState(profile.dailyGoalMinutes);
  const [leaderboardOptIn, setLeaderboardOptIn] = useState(profile.leaderboardOptIn !== false);
  const [saved, setSaved] = useState(false);

  const [syncingNow, setSyncingNow] = useState(false);
  const [resetSent, setResetSent] = useState<string | null>(null);
  const [authActionError, setAuthActionError] = useState<string | null>(null);

  // Account Deletion state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [reauthPassword, setReauthPassword] = useState('');
  const [needsReauthPrompt, setNeedsReauthPrompt] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const primaryProvider = getPrimaryAuthProvider(auth.currentUser);
  const createdDisplay = profile.createdAt
    ? new Date(profile.createdAt).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'Recently joined';

  useEffect(() => {
    if (!showDeleteModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !deleting) {
        setShowDeleteModal(false);
        setNeedsReauthPrompt(false);
        setReauthPassword('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showDeleteModal, deleting]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhoto = photoURL.trim();
    const updated: StudentProfile = {
      ...profile,
      name: name.trim() || profile.name,
      school: school.trim() || profile.school,
      section: section.trim() || profile.section,
      photoURL: cleanPhoto || undefined,
      dailyGoalMinutes: Math.max(15, Math.min(240, Number(dailyGoal) || 45)),
      leaderboardOptIn,
    };

    saveStudentProfile(updated);
    onProfileUpdated(updated);

    if (currentUser?.uid && !isOffline) {
      await updateAuthDisplayProfile({
        displayName: updated.name,
        ...(cleanPhoto ? { photoURL: cleanPhoto } : {}),
      }).catch(() => {});

      await pushPrivateInfoToCloud(currentUser.uid, {
        email: currentUser.email ?? updated.email ?? null,
        phoneNumber: currentUser.phoneNumber ?? updated.phoneNumber ?? null,
        photoURL: cleanPhoto || null,
        authProvider: updated.authProvider || primaryProvider,
        createdAt: updated.createdAt,
      }).catch(() => {});
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleTriggerSync = async () => {
    if (!onManualSync || isOffline) return;
    setSyncingNow(true);
    try {
      await onManualSync();
    } finally {
      setSyncingNow(false);
    }
  };

  const handleSendPasswordReset = async () => {
    const emailAddr = currentUser?.email || profile.email;
    if (!emailAddr) return;
    setAuthActionError(null);
    setResetSent(null);
    try {
      await resetPasswordForEmail(emailAddr);
      setResetSent(`Password reset link sent to ${emailAddr}.`);
    } catch (err) {
      setAuthActionError(getFriendlyAuthErrorMessage(err));
    }
  };

  const handleConfirmDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser?.uid || deleteConfirmText.trim().toUpperCase() !== 'DELETE') return;
    setDeleting(true);
    setAuthActionError(null);
    try {
      if (needsReauthPrompt) {
        await reauthenticateCurrentUser(reauthPassword || undefined);
      }
      await deleteEntireStudentAccountData(currentUser.uid);
      await deleteFirebaseAuthAccount();
      setShowDeleteModal(false);
      if (onAccountDeleted) onAccountDeleted();
    } catch (err) {
      const msg = getFriendlyAuthErrorMessage(err);
      if (msg === 'REQUIRES_RECENT_LOGIN') {
        setNeedsReauthPrompt(primaryProvider !== 'phone');
        setAuthActionError(
          primaryProvider === 'password'
            ? 'For security, please enter your account password below to confirm deletion.'
            : primaryProvider === 'phone'
            ? 'For security, please sign out and sign back in with your Phone OTP before deleting your account.'
            : 'For security, click "Re-authenticate & Delete" below to verify your session.'
        );
      } else {
        setAuthActionError(msg);
      }
    } finally {
      setDeleting(false);
    }
  };

  const displayAvatar = photoURL.trim() || currentUser?.photoURL || '';
  const contactIdentity =
    currentUser?.email ||
    profile.email ||
    currentUser?.phoneNumber ||
    profile.phoneNumber ||
    'Verified Account';

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Student Account &amp; Preferences
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
            Account, Sync &amp; Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Manage your student profile, cloud synchronization, offline app installation, and privacy controls.
          </p>
        </div>
        <PWAInstallButton />
      </div>

      {/* Account Overview & Sync Card */}
      <div className="rounded-3xl glass-card p-6 sm:p-7 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0A1128] to-[#4F46E5] text-white shadow-sm">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white">
                Personal Learning Account
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Class 8 &bull; ICSE (CISCE) &bull; Member since {createdDisplay}
              </p>
            </div>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-bold ${
              isOffline
                ? 'text-amber-600 dark:text-amber-400'
                : syncState === 'syncing' || pendingSyncCount > 0
                ? 'text-indigo-600 dark:text-indigo-300'
                : 'text-emerald-600 dark:text-emerald-400'
            }`}
          >
            {isOffline ? (
              <>
                <WifiOff className="h-3.5 w-3.5" /> Offline Mode ({pendingSyncCount} queued)
              </>
            ) : syncState === 'syncing' ? (
              <>
                <RefreshCw className="h-3.5 w-3.5 animate-spin" /> Syncing...
              </>
            ) : (
              'Cloud Synced'
            )}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl glass-surface-blue">
          <div className="flex items-center gap-3.5 min-w-0">
            {displayAvatar ? (
              <img
                src={displayAvatar}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover shrink-0"
              />
            ) : (
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-[#1E3A8A] to-[#7C3AED] text-white font-bold flex items-center justify-center text-base shrink-0">
                {profile.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="min-w-0">
              <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                {profile.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                {contactIdentity}
              </div>
              <div className="text-[11px] text-indigo-600 dark:text-purple-300 font-medium mt-0.5">
                Sign-in: {profile.authProvider || primaryProvider}
                {lastSyncedAt ? ` · Last synced ${new Date(lastSyncedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : ''}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {onManualSync && (
              <button
                type="button"
                disabled={isOffline || syncingNow}
                onClick={handleTriggerSync}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass-card hover:border-indigo-400 text-xs font-bold text-slate-800 dark:text-slate-100 disabled:opacity-50"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${syncingNow ? 'animate-spin' : ''}`} />
                <span>Sync Now</span>
              </button>
            )}

            {onSignOut && (
              <button
                type="button"
                onClick={onSignOut}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-card hover:border-rose-400 text-xs font-bold text-rose-600 dark:text-rose-300 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>

        {/* Password Reset option for Email/Password users */}
        {primaryProvider === 'password' && (currentUser?.email || profile.email) && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl glass-surface-blue">
            <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
              <KeyRound className="h-4 w-4 text-indigo-500 shrink-0" />
              <span>Need to change your password? Receive a secure Firebase reset link.</span>
            </div>
            <button
              type="button"
              disabled={isOffline}
              onClick={handleSendPasswordReset}
              className="px-3.5 py-1.5 rounded-xl glass-card text-xs font-bold text-indigo-700 dark:text-purple-300 hover:border-indigo-400 shrink-0 disabled:opacity-50"
            >
              Send Reset Email
            </button>
          </div>
        )}

        {resetSent && (
          <div className="p-3 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            {resetSent}
          </div>
        )}
      </div>

      {/* Editable Student Profile Form */}
      <form onSubmit={handleSave} className="rounded-3xl glass-card p-6 sm:p-8 space-y-6">
        <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3">
          Edit Student Profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Student Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Class &amp; Board (Confirmed)
            </label>
            <input
              type="text"
              readOnly
              value="Class 8 · ICSE (CISCE)"
              className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-500 dark:text-slate-400 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              School Name
            </label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Section / Branch
            </label>
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1 flex items-center gap-1.5">
              <Camera className="h-3.5 w-3.5 text-indigo-500" />
              Profile Photo URL (Optional)
            </label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://example.com/avatar.jpg"
              className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Target Daily Study Goal (Minutes)
            </label>
            <input
              type="number"
              min="15"
              max="240"
              value={dailyGoal}
              onChange={(e) => setDailyGoal(Number(e.target.value))}
              className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3 pt-2">
          Appearance
        </h2>

        <div className="flex items-center justify-between p-4 rounded-2xl glass-surface-blue">
          <div>
            <span className="text-xs font-semibold text-slate-900 dark:text-white block">
              Color Theme (Light / Dark Mode)
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              High-contrast mode for night study
            </span>
          </div>
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-slate-100 hover:border-indigo-400 transition-colors"
          >
            {darkMode ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-indigo-600" />}
            <span>{darkMode ? 'Dark' : 'Light'}</span>
          </button>
        </div>

        <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white border-b border-indigo-100/80 dark:border-indigo-500/20 pb-3 pt-2">
          Student Privacy &amp; Leaderboard Controls
        </h2>

        <div className="flex items-center justify-between gap-4 p-4 rounded-2xl glass-surface-blue">
          <div className="flex items-start gap-2.5">
            <Trophy className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                Show my rank on Class Leaderboard
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Only display name, section, XP, and daily streak are visible. Emails, phone numbers, and notes are never shared.
              </span>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={leaderboardOptIn}
            onClick={() => setLeaderboardOptIn((prev) => !prev)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 ${
              leaderboardOptIn
                ? 'btn-royal'
                : 'glass-card text-slate-600 dark:text-slate-300'
            }`}
          >
            {leaderboardOptIn ? 'Visible' : 'Private'}
          </button>
        </div>

        <div className="p-4 rounded-2xl glass-surface-blue flex items-start gap-2.5 text-[11px] text-slate-600 dark:text-slate-300">
          <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 dark:text-white">School-Age Privacy Protection:</strong> Study progress, quiz &amp; exam marks, bookmarks, flashcards, personal notes, study plans, and AI tutor history are stored privately under your authenticated user ID. Account contact details are isolated in a strictly private record accessible only to you.
          </div>
        </div>

        {saved && (
          <div className="p-3 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-900/50 text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>Profile and preferences updated!</span>
          </div>
        )}

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl btn-royal text-xs font-bold"
        >
          <Save className="h-4 w-4" /> Save Profile &amp; Preferences
        </button>
      </form>

      {/* Danger Zone: Delete Account */}
      {currentUser?.uid && (
        <div className="rounded-3xl glass-card border-rose-200/70 dark:border-rose-900/40 p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold font-heading text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4" />
                Delete Account &amp; Personal Study Data
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Permanently remove your student account, quiz records, bookmarks, personal notes, and offline device cache.
              </p>
            </div>
            <button
              type="button"
              disabled={isOffline}
              onClick={() => {
                setAuthActionError(null);
                setDeleteConfirmText('');
                setShowDeleteModal(true);
              }}
              className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/35 text-xs font-bold text-rose-700 dark:text-rose-300 hover:bg-rose-100 shrink-0 disabled:opacity-50"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      )}

      {/* Account Deletion Confirmation Modal */}
      {showDeleteModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#060A18]/80 backdrop-blur-md p-4"
        >
          <form
            onSubmit={handleConfirmDeleteAccount}
            className="glass-card max-w-md w-full rounded-3xl p-6 space-y-4 shadow-2xl border border-rose-300/60 dark:border-rose-700/50"
          >
            <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="text-lg font-extrabold font-heading">Confirm Account Deletion</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              This action permanently erases your ICSE Genius account, progress, quiz marks, notes, bookmarks, and offline chapters. This cannot be undone.
            </p>

            {authActionError && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-200">
                {authActionError}
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Type <strong>DELETE</strong> to confirm
              </label>
              <input
                type="text"
                required
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                placeholder="DELETE"
                className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {needsReauthPrompt && primaryProvider === 'password' && (
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Enter your current password to verify
                </label>
                <input
                  type="password"
                  required
                  value={reauthPassword}
                  onChange={(e) => setReauthPassword(e.target.value)}
                  placeholder="Current password"
                  className="w-full rounded-xl glass-surface-blue p-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
            )}

            <div className="flex gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => {
                  setShowDeleteModal(false);
                  setNeedsReauthPrompt(false);
                  setReauthPassword('');
                }}
                className="flex-1 py-2.5 rounded-xl glass-surface-blue text-xs font-bold text-slate-700 dark:text-slate-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={deleting || deleteConfirmText.trim().toUpperCase() !== 'DELETE'}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold disabled:opacity-50"
              >
                {deleting
                  ? 'Deleting...'
                  : needsReauthPrompt
                  ? 'Re-authenticate & Delete'
                  : 'Permanently Delete'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
