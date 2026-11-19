import React, { useEffect, useState } from 'react';
import { Download, CheckCircle2, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall.ts';

interface PWAInstallButtonProps {
  compact?: boolean;
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  compact = false,
  className = '',
}) => {
  const { canInstall, isInstalled, isIos, triggerInstall } = usePWAInstall();
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    if (!showIosGuide) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowIosGuide(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showIosGuide]);

  if (isInstalled) {
    if (compact) return null;
    return (
      <div className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/35 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
        <CheckCircle2 className="h-3.5 w-3.5" />
        <span>App Installed</span>
      </div>
    );
  }

  if (!canInstall && !isIos) {
    return null;
  }

  const handleClick = async () => {
    if (canInstall) {
      await triggerInstall();
    } else if (isIos) {
      setShowIosGuide(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 rounded-xl border border-indigo-300/70 dark:border-indigo-500/40 bg-indigo-50/85 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/70 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-200 transition-colors whitespace-nowrap shrink-0 ${className}`}
        title="Install ICSE Genius as an offline-ready app"
      >
        <Download className="h-3.5 w-3.5" />
        <span className={compact ? 'hidden sm:inline' : ''}>Install App</span>
      </button>

      {showIosGuide && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setShowIosGuide(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070B19]/75 backdrop-blur-xs p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-card max-w-sm w-full rounded-3xl p-6 space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-purple-300 font-bold text-sm">
                <Smartphone className="h-4 w-4" />
                <span>Install ICSE Genius on iOS</span>
              </div>
              <button
                type="button"
                onClick={() => setShowIosGuide(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
                aria-label="Close install instructions"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              In Safari, tap the <strong>Share</strong> button at the bottom of your screen, then scroll down and choose <strong>Add to Home Screen</strong> to use downloaded chapters offline.
            </p>
            <button
              type="button"
              onClick={() => setShowIosGuide(false)}
              className="w-full py-2 rounded-xl btn-royal text-xs font-bold"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
