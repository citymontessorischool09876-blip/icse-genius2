import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  Moon,
  Sun,
  Sparkles,
  BookOpen,
  ShieldCheck,
  WifiOff,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  LogOut,
  Eye,
  EyeOff,
  ArrowLeft,
} from 'lucide-react';
import {
  ConfirmationResult,
  confirmPhoneOtp,
  createPhoneRecaptchaVerifier,
  FirebaseUser,
  getFriendlyAuthErrorMessage,
  loginWithEmail,
  logoutUser,
  RecaptchaVerifier,
  refreshCurrentUser,
  registerWithEmail,
  requestPhoneOtp,
  resendVerificationEmail,
  resetPasswordForEmail,
  signInWithGoogle,
  signInWithMicrosoft,
} from '../../utils/firebase.ts';

interface AuthScreenProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  isOffline: boolean;
  pendingVerificationUser?: FirebaseUser | null;
  onAuthCompleted: (user: FirebaseUser) => Promise<void> | void;
}

const COUNTRY_CODES = [
  { code: '+91', label: 'India (+91)' },
  { code: '+1', label: 'US / Canada (+1)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+971', label: 'UAE (+971)' },
  { code: '+65', label: 'Singapore (+65)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+977', label: 'Nepal (+977)' },
  { code: '+880', label: 'Bangladesh (+880)' },
];

type AuthTab = 'signin' | 'signup' | 'phone' | 'forgot';

export const AuthScreen: React.FC<AuthScreenProps> = ({
  darkMode,
  onToggleDarkMode,
  isOffline,
  pendingVerificationUser,
  onAuthCompleted,
}) => {
  const [activeTab, setActiveTab] = useState<AuthTab>('signin');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Phone OTP states
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

  // Feedback states
  const [busyMethod, setBusyMethod] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
        } catch {
          // ignore
        }
        recaptchaVerifierRef.current = null;
      }
    };
  }, []);

  const switchTab = (tab: AuthTab) => {
    setActiveTab(tab);
    setErrorMessage(null);
    setInfoMessage(null);
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage(null);
    setInfoMessage(null);
    setBusyMethod('google');
    try {
      const user = await signInWithGoogle();
      await onAuthCompleted(user);
    } catch (err) {
      setErrorMessage(getFriendlyAuthErrorMessage(err));
    } finally {
      setBusyMethod(null);
    }
  };

  const handleMicrosoftSignIn = async () => {
    setErrorMessage(null);
    setInfoMessage(null);
    setBusyMethod('microsoft');
    try {
      const user = await signInWithMicrosoft();
      await onAuthCompleted(user);
    } catch (err) {
      setErrorMessage(getFriendlyAuthErrorMessage(err));
    } finally {
      setBusyMethod(null);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);
    if (!email.trim() || !password) {
      setErrorMessage('Please enter both your email address and password.');
      return;
    }
    setBusyMethod('email-signin');
    try {
      const user = await loginWithEmail(email, password);
      await onAuthCompleted(user);
    } catch (err) {
      setErrorMessage(getFriendlyAuthErrorMessage(err));
    } finally {
      setBusyMethod(null);
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please re-enter carefully.');
      return;
    }
    setBusyMethod('email-signup');
    try {
      const user = await registerWithEmail(fullName, email, password);
      setInfoMessage(
        'Verification email sent! Please open the link in your inbox, then click "I Verified My Email".'
      );
      await onAuthCompleted(user);
    } catch (err) {
      setErrorMessage(getFriendlyAuthErrorMessage(err));
    } finally {
      setBusyMethod(null);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);
    if (!email.trim()) {
      setErrorMessage('Please enter your registered email address to receive a reset link.');
      return;
    }
    setBusyMethod('forgot');
    try {
      await resetPasswordForEmail(email);
      setInfoMessage(
        `Password reset email sent to ${email.trim()}. Check your inbox or spam folder.`
      );
    } catch (err) {
      setErrorMessage(getFriendlyAuthErrorMessage(err));
    } finally {
      setBusyMethod(null);
    }
  };

  const handleSendPhoneOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);
    const cleanedDigits = phoneDigits.replace(/[^0-9]/g, '');
    if (cleanedDigits.length < 7 || cleanedDigits.length > 14) {
      setErrorMessage('Please enter a valid mobile number (without spaces or country code).');
      return;
    }
    const fullE164 = `${countryCode}${cleanedDigits}`;
    setBusyMethod('phone-send');
    try {
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
        } catch {
          // ignore
        }
      }
      const verifier = createPhoneRecaptchaVerifier('recaptcha-container-auth', 'invisible');
      recaptchaVerifierRef.current = verifier;
      const result = await requestPhoneOtp(fullE164, verifier);
      setConfirmationResult(result);
      setInfoMessage(`OTP sent to ${fullE164}. Enter the 6-digit verification code below.`);
    } catch (err) {
      setErrorMessage(getFriendlyAuthErrorMessage(err));
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
        } catch {
          // ignore
        }
        recaptchaVerifierRef.current = null;
      }
    } finally {
      setBusyMethod(null);
    }
  };

  const handleVerifyPhoneOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmationResult) return;
    setErrorMessage(null);
    setInfoMessage(null);
    if (otpCode.trim().length < 4) {
      setErrorMessage('Please enter the 6-digit verification code.');
      return;
    }
    setBusyMethod('phone-verify');
    try {
      const user = await confirmPhoneOtp(confirmationResult, otpCode);
      await onAuthCompleted(user);
    } catch (err) {
      setErrorMessage(getFriendlyAuthErrorMessage(err));
    } finally {
      setBusyMethod(null);
    }
  };

  const handleCheckEmailVerified = async () => {
    setErrorMessage(null);
    setBusyMethod('verify-check');
    try {
      const refreshed = await refreshCurrentUser();
      if (refreshed?.emailVerified) {
        await onAuthCompleted(refreshed);
      } else {
        setErrorMessage(
          'Your email is not marked verified yet. Please click the verification link in your inbox first.'
        );
      }
    } catch (err) {
      setErrorMessage(getFriendlyAuthErrorMessage(err));
    } finally {
      setBusyMethod(null);
    }
  };

  const handleResendEmail = async () => {
    setErrorMessage(null);
    setInfoMessage(null);
    setBusyMethod('resend-email');
    try {
      await resendVerificationEmail();
      setInfoMessage('A fresh verification link has been sent to your email.');
    } catch (err) {
      setErrorMessage(getFriendlyAuthErrorMessage(err));
    } finally {
      setBusyMethod(null);
    }
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col justify-between px-4 py-6 sm:px-8">
      {/* Top Bar */}
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0F1E4D] via-[#4F46E5] to-[#7C3AED] text-white shadow-lg shadow-indigo-500/30">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#0F1E4D] via-[#4338CA] to-[#7C3AED] dark:from-white dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent block">
              ICSE GENIUS
            </span>
            <span className="text-[11px] font-medium text-slate-600 dark:text-indigo-200/80 block -mt-0.5">
              Class 8 ICSE Smart Learning Platform
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggleDarkMode}
          className="flex h-10 w-10 items-center justify-center rounded-xl glass-card text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors"
          aria-label="Toggle Light or Dark Mode"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-[#1E3A8A]" />}
        </button>
      </header>

      {/* Main Auth Grid */}
      <main className="max-w-5xl w-full mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Value Panel */}
        <motion.section
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-purple-300">
            <Sparkles className="h-4 w-4" />
            <span>City Montessori School &bull; ICSE Class 8</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Learn Smarter.{' '}
            <span className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">
              Think Bigger.
            </span>{' '}
            Achieve Greater.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Sign in to save your chapter reading position, quiz results, mock examination marks,
            flashcards, personal notes, and offline chapters securely across every device.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left pt-1">
            {[
              {
                icon: BookOpen,
                title: 'All 9 ICSE Subjects',
                desc: 'Detailed CMS-aligned notes, diagrams, and interactive quizzes.',
              },
              {
                icon: ShieldCheck,
                title: 'Student Privacy First',
                desc: 'Private notes and marks are strictly locked to your personal account.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-card rounded-2xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-purple-300 font-bold text-xs">
                    <Icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Right Glassmorphism Authentication Card */}
        <motion.section
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-indigo-200/80 dark:border-indigo-500/30 space-y-5">
            {isOffline && (
              <div className="rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-300/70 dark:border-amber-700/50 p-3 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-200">
                <WifiOff className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  You are currently offline. An active internet connection is required to sign in or register a new account.
                </span>
              </div>
            )}

            {/* Email Verification Pending Gate */}
            {pendingVerificationUser ? (
              <div className="space-y-5 text-center py-2">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold font-heading text-slate-900 dark:text-white">
                    Verify Your Email Address
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                    We sent a verification link to{' '}
                    <strong className="text-slate-900 dark:text-white">
                      {pendingVerificationUser.email}
                    </strong>
                    . Open the link in your inbox, then continue below.
                  </p>
                </div>

                {errorMessage && (
                  <div className="rounded-xl bg-rose-50 dark:bg-rose-950/35 border border-rose-200 dark:border-rose-800/60 p-3 text-xs text-rose-700 dark:text-rose-200 flex items-start gap-2 text-left">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {infoMessage && (
                  <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/35 border border-emerald-200 dark:border-emerald-800/60 p-3 text-xs text-emerald-700 dark:text-emerald-200 flex items-start gap-2 text-left">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{infoMessage}</span>
                  </div>
                )}

                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={handleCheckEmailVerified}
                    disabled={busyMethod !== null}
                    className="w-full py-3 rounded-xl btn-royal text-xs sm:text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    <RefreshCw
                      className={`h-4 w-4 ${busyMethod === 'verify-check' ? 'animate-spin' : ''}`}
                    />
                    <span>I&apos;ve Verified — Enter ICSE Genius</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={handleResendEmail}
                      disabled={busyMethod !== null}
                      className="py-2.5 rounded-xl glass-surface-blue text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors"
                    >
                      Resend Link
                    </button>
                    <button
                      type="button"
                      onClick={() => logoutUser()}
                      className="py-2.5 rounded-xl glass-surface-blue text-xs font-semibold text-rose-600 dark:text-rose-300 hover:border-rose-400 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Use Another Account</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Tab Switcher */}
                {activeTab !== 'forgot' ? (
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl glass-surface-blue">
                    {[
                      { id: 'signin' as const, label: 'Sign In' },
                      { id: 'signup' as const, label: 'Create Account' },
                      { id: 'phone' as const, label: 'Phone OTP' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => switchTab(tab.id)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold transition-all ${
                          activeTab === tab.id
                            ? 'btn-royal shadow-sm'
                            : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => switchTab('signin')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-purple-300 hover:underline"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to Sign In</span>
                  </button>
                )}

                {/* Alert Messages */}
                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-xl bg-rose-50/95 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 p-3 text-xs text-rose-700 dark:text-rose-200 flex items-start gap-2"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {infoMessage && (
                  <div
                    role="status"
                    className="rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 p-3 text-xs text-emerald-700 dark:text-emerald-200 flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{infoMessage}</span>
                  </div>
                )}

                {/* Form Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'signin' && (
                    <motion.form
                      key="tab-signin"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16 }}
                      onSubmit={handleEmailSignIn}
                      className="space-y-4"
                    >
                      <div>
                        <h2 className="text-xl font-extrabold font-heading text-slate-900 dark:text-white">
                          Welcome Back, Scholar
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Sign in with your account to resume where you left off.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="email"
                              required
                              autoComplete="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="student@example.com"
                              className="w-full rounded-xl glass-surface-blue pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                              Password
                            </label>
                            <button
                              type="button"
                              onClick={() => switchTab('forgot')}
                              className="text-[11px] font-semibold text-indigo-600 dark:text-purple-300 hover:underline"
                            >
                              Forgot Password?
                            </button>
                          </div>
                          <div className="relative">
                            <Lock className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type={showPassword ? 'text' : 'password'}
                              required
                              autoComplete="current-password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Enter your password"
                              className="w-full rounded-xl glass-surface-blue pl-9 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword((prev) => !prev)}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-500"
                              aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={busyMethod !== null || isOffline}
                        className="w-full py-3 rounded-xl btn-royal text-xs sm:text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        <span>{busyMethod === 'email-signin' ? 'Signing In...' : 'Sign In'}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </motion.form>
                  )}

                  {activeTab === 'signup' && (
                    <motion.form
                      key="tab-signup"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16 }}
                      onSubmit={handleEmailSignUp}
                      className="space-y-3.5"
                    >
                      <div>
                        <h2 className="text-xl font-extrabold font-heading text-slate-900 dark:text-white">
                          Create Student Account
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Register once to sync progress, quizzes, notes &amp; offline chapters.
                        </p>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          Student Full Name
                        </label>
                        <div className="relative">
                          <User className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            autoComplete="name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Aarav Verma"
                            className="w-full rounded-xl glass-surface-blue pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="student@example.com"
                            className="w-full rounded-xl glass-surface-blue pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                            Password
                          </label>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            minLength={6}
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Min. 6 characters"
                            className="w-full rounded-xl glass-surface-blue px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                            Confirm Password
                          </label>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            minLength={6}
                            autoComplete="new-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-enter password"
                            className="w-full rounded-xl glass-surface-blue px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={busyMethod !== null || isOffline}
                        className="w-full py-3 rounded-xl btn-royal text-xs sm:text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        <span>
                          {busyMethod === 'email-signup'
                            ? 'Creating Account...'
                            : 'Create New Account'}
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </motion.form>
                  )}

                  {activeTab === 'phone' && (
                    <motion.div
                      key="tab-phone"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16 }}
                      className="space-y-4"
                    >
                      <div>
                        <h2 className="text-xl font-extrabold font-heading text-slate-900 dark:text-white">
                          Sign In with Phone OTP
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Select your country code and verify your mobile number via SMS OTP.
                        </p>
                      </div>

                      {!confirmationResult ? (
                        <form onSubmit={handleSendPhoneOtp} className="space-y-3.5">
                          <div className="grid grid-cols-12 gap-2.5">
                            <div className="col-span-5">
                              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                                Country
                              </label>
                              <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                aria-label="Country code"
                                className="w-full rounded-xl glass-surface-blue px-2.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              >
                                {COUNTRY_CODES.map((c) => (
                                  <option
                                    key={c.code}
                                    value={c.code}
                                    className="bg-white dark:bg-[#0A1128]"
                                  >
                                    {c.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-span-7">
                              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                                Phone Number
                              </label>
                              <div className="relative">
                                <Phone className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                  type="tel"
                                  required
                                  value={phoneDigits}
                                  onChange={(e) => setPhoneDigits(e.target.value)}
                                  placeholder="9876543210"
                                  className="w-full rounded-xl glass-surface-blue pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                              </div>
                            </div>
                          </div>

                          <div id="recaptcha-container-auth" />

                          <button
                            type="submit"
                            disabled={busyMethod !== null || isOffline}
                            className="w-full py-3 rounded-xl btn-royal text-xs sm:text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                          >
                            <span>{busyMethod === 'phone-send' ? 'Sending OTP...' : 'Send OTP'}</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </form>
                      ) : (
                        <form onSubmit={handleVerifyPhoneOtp} className="space-y-3.5">
                          <div>
                            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                              Enter 6-Digit SMS OTP
                            </label>
                            <input
                              type="text"
                              inputMode="numeric"
                              maxLength={6}
                              required
                              value={otpCode}
                              onChange={(e) => setOtpCode(e.target.value.replace(/[^0-9]/g, ''))}
                              placeholder="123456"
                              className="w-full rounded-xl glass-surface-blue px-4 py-3 text-center tracking-[0.4em] font-mono text-base font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div className="flex gap-2.5">
                            <button
                              type="button"
                              onClick={() => {
                                setConfirmationResult(null);
                                setOtpCode('');
                                setInfoMessage(null);
                              }}
                              className="px-4 py-3 rounded-xl glass-surface-blue text-xs font-semibold text-slate-700 dark:text-slate-200"
                            >
                              Change Number
                            </button>
                            <button
                              type="submit"
                              disabled={busyMethod !== null || isOffline}
                              className="flex-1 py-3 rounded-xl btn-royal text-xs sm:text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                              <span>
                                {busyMethod === 'phone-verify' ? 'Verifying...' : 'Verify OTP & Continue'}
                              </span>
                            </button>
                          </div>
                        </form>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'forgot' && (
                    <motion.form
                      key="tab-forgot"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16 }}
                      onSubmit={handleForgotPassword}
                      className="space-y-4"
                    >
                      <div>
                        <h2 className="text-xl font-extrabold font-heading text-slate-900 dark:text-white">
                          Reset Your Password
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Enter your registered email and we&apos;ll send a Firebase password reset link.
                        </p>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          Registered Email Address
                        </label>
                        <div className="relative">
                          <Mail className="h-4 w-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="student@example.com"
                            className="w-full rounded-xl glass-surface-blue pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={busyMethod !== null || isOffline}
                        className="w-full py-3 rounded-xl btn-royal text-xs sm:text-sm font-bold disabled:opacity-50"
                      >
                        {busyMethod === 'forgot' ? 'Sending Reset Email...' : 'Send Password Reset Email'}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Divider */}
                <div className="relative flex items-center py-1">
                  <div className="flex-grow border-t border-indigo-100/90 dark:border-indigo-500/20" />
                  <span className="shrink mx-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Or continue instantly with
                  </span>
                  <div className="flex-grow border-t border-indigo-100/90 dark:border-indigo-500/20" />
                </div>

                {/* Google & Microsoft OAuth Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={busyMethod !== null || isOffline}
                    className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl glass-surface-blue hover:border-indigo-400 text-xs font-bold text-slate-800 dark:text-slate-100 transition-all disabled:opacity-50"
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#EA4335"
                        d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.5 14.6 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.8 9.1-9.2 0-.6-.1-1.1-.2-1.6H12z"
                      />
                    </svg>
                    <span>
                      {busyMethod === 'google' ? 'Connecting...' : 'Continue with Google'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleMicrosoftSignIn}
                    disabled={busyMethod !== null || isOffline}
                    className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl glass-surface-blue hover:border-indigo-400 text-xs font-bold text-slate-800 dark:text-slate-100 transition-all disabled:opacity-50"
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 21 21" aria-hidden="true">
                      <rect x="1" y="1" width="9" height="9" fill="#F25022" />
                      <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
                      <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
                      <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
                    </svg>
                    <span>
                      {busyMethod === 'microsoft' ? 'Connecting...' : 'Continue with Microsoft'}
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.section>
      </main>

      <footer className="max-w-6xl w-full mx-auto text-center text-[11px] text-slate-500 dark:text-slate-400">
        ICSE Genius &bull; Created by Tejasv Pratap Singh &bull; Protected by Firebase Authentication &amp; Strict Student Privacy Rules
      </footer>
    </div>
  );
};
