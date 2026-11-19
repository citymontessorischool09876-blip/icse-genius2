import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, Sliders, Sparkles } from 'lucide-react';
import { ICSE_SUBJECTS } from '../../data/curriculumData.ts';
import { DiagramItem, Subject } from '../../types/index.ts';
import { MathSvgDiagram } from './MathSvgDiagram.tsx';

type GalleryDiagram = DiagramItem & { subjectName?: string; chapterTitle?: string };

interface VisualLearningGalleryProps {
  subjects?: Subject[];
}

export const VisualLearningGallery: React.FC<VisualLearningGalleryProps> = ({
  subjects = ICSE_SUBJECTS,
}) => {
  const [zoomedDiagram, setZoomedDiagram] = useState<GalleryDiagram | null>(null);

  useEffect(() => {
    if (!zoomedDiagram) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomedDiagram(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedDiagram]);

  // Interactive Simulation State: States of Matter
  const [temperatureCelsius, setTemperatureCelsius] = useState(25);

  // Interactive Simulation State: Slope Δy/Δx
  const [slopeRise, setSlopeRise] = useState(2);
  const [slopeRun, setSlopeRun] = useState(2);

  // Collect all diagrams from all chapters across reactive subjects
  const allDiagrams: Array<DiagramItem & { subjectName: string; chapterTitle: string }> = [];
  subjects.forEach((sub) => {
    sub.chapters.forEach((ch) => {
      ch.notes.topics.forEach((top) => {
        if (top.diagram) {
          allDiagrams.push({
            ...top.diagram,
            subjectName: sub.name,
            chapterTitle: `Ch ${ch.chapterNumber}: ${ch.title}`,
          });
        }
      });
    });
  });

  // Compute live SVG coordinates for the Slope Triangle (rise / run) inside a 220x132 grid
  const originX = 48;
  const originY = 112;
  const scalePx = 15;
  const endX = originX + slopeRun * scalePx;
  const endY = originY - slopeRise * scalePx;
  const slopeVal = slopeRise / (slopeRun || 1);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-purple-300">
          Concept Visualization Engine
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
          Visual Learning System & Interactive Diagrams
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
          Understand ICSE concepts deeply by seeing them in motion. Explore live animated scientific simulations, crisp geometric vector figures, and labelled Class 8 textbook diagrams.
        </p>
      </div>

      {/* Interactive Labs Spotlight Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1128] via-[#1B1F5C] to-[#3B1775] p-6 sm:p-8 text-white shadow-xl border border-indigo-500/30">
        <div
          aria-hidden="true"
          className="animate-orb-1 pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-purple-500/25 blur-3xl"
        />

        <div className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-200 mb-2">
          <Sparkles className="h-4 w-4 text-amber-300" /> Interactive Conceptual Simulators
        </div>
        <h2 className="relative z-10 text-xl sm:text-2xl font-bold font-heading text-white">
          Hands-On Educational Explorers
        </h2>

        <div className="relative z-10 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Simulation 1: Animated Kinetic Theory & Phase Change */}
          <div className="rounded-2xl bg-[#0F172E]/85 backdrop-blur-md p-5 border border-indigo-400/25 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sliders className="h-4 w-4 text-orange-400 shrink-0" />
                Kinetic Energy & Thermal Transition
              </h3>
              <span className="text-[11px] font-bold text-indigo-200 shrink-0">
                {temperatureCelsius <= 0
                  ? 'SOLID (Ice)'
                  : temperatureCelsius < 100
                  ? 'LIQUID (Water)'
                  : 'GAS (Steam)'}
              </span>
            </div>

            <p className="text-xs text-indigo-100/80">
              Drag temperature to observe how molecular kinetic energy alters intermolecular spacing and particle motion:
            </p>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-indigo-100">
                <span>Temperature (°C):</span>
                <span className="font-bold text-amber-300 tabular-nums">{temperatureCelsius}°C</span>
              </div>
              <input
                type="range"
                min="-20"
                max="140"
                value={temperatureCelsius}
                onChange={(e) => setTemperatureCelsius(Number(e.target.value))}
                aria-label="Temperature in degrees Celsius"
                className="w-full h-2 bg-[#070B19] rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-indigo-200/70 font-mono">
                <span>-20°C (Freezing)</span>
                <span>0°C (Melting)</span>
                <span>100°C (Boiling)</span>
                <span>140°C</span>
              </div>
            </div>

            <div className="h-36 rounded-xl bg-[#070B19]/95 border border-indigo-500/25 p-3 flex items-center justify-center relative overflow-hidden">
              <div
                className={`grid transition-all duration-300 ${
                  temperatureCelsius <= 0
                    ? 'grid-cols-6 gap-1.5'
                    : temperatureCelsius < 100
                    ? 'grid-cols-6 gap-3.5'
                    : 'grid-cols-6 gap-6'
                }`}
              >
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    style={{ animationDelay: `${(i % 6) * 0.14}s` }}
                    className={`h-4 w-4 rounded-full shadow-md transition-colors duration-300 ${
                      temperatureCelsius <= 0
                        ? 'bg-sky-400 shadow-sky-500/50'
                        : temperatureCelsius < 100
                        ? 'bg-indigo-400 shadow-indigo-500/50 animate-molecule-med'
                        : 'bg-amber-400 shadow-amber-500/60 scale-90 animate-molecule-fast'
                    }`}
                  />
                ))}
              </div>
              <div className="absolute bottom-2 right-2.5 text-[10px] text-indigo-200/85 font-mono">
                Kinetic Speed:{' '}
                {temperatureCelsius <= 0
                  ? 'Low (Lattice Vibration)'
                  : temperatureCelsius < 100
                  ? 'Medium (Fluid Sliding)'
                  : 'High (Rapid Random)'}
              </div>
            </div>
          </div>

          {/* Simulation 2: Live Animated SVG Linear Equation Slope Visualizer */}
          <div className="rounded-2xl bg-[#0F172E]/85 backdrop-blur-md p-5 border border-indigo-400/25 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sliders className="h-4 w-4 text-emerald-400 shrink-0" />
                Linear Equation Slope Visualizer (y = mx)
              </h3>
              <span className="text-xs font-mono font-bold text-amber-300 tabular-nums shrink-0">
                m = {slopeRise}/{slopeRun} = {slopeVal.toFixed(2)}
              </span>
            </div>

            <p className="text-xs text-indigo-100/80">
              Adjust vertical rise (Δy) and horizontal run (Δx) to inspect the plotted Cartesian line and right-triangle slope:
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-indigo-100">
                  <span>Vertical Rise (Δy):</span>
                  <span className="font-bold text-emerald-400 tabular-nums">{slopeRise}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={slopeRise}
                  onChange={(e) => setSlopeRise(Number(e.target.value))}
                  aria-label="Vertical Rise delta y"
                  className="w-full h-2 bg-[#070B19] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-indigo-100">
                  <span>Horizontal Run (Δx):</span>
                  <span className="font-bold text-sky-400 tabular-nums">{slopeRun}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={slopeRun}
                  onChange={(e) => setSlopeRun(Number(e.target.value))}
                  aria-label="Horizontal Run delta x"
                  className="w-full h-2 bg-[#070B19] rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>
            </div>

            <div className="h-36 rounded-xl bg-[#070B19]/95 border border-indigo-500/25 p-2 flex items-center justify-between gap-3">
              <svg viewBox="0 0 220 132" className="h-full w-auto shrink-0">
                {Array.from({ length: 10 }).map((_, i) => (
                  <line
                    key={`gx-${i}`}
                    x1={originX + i * scalePx}
                    y1={12}
                    x2={originX + i * scalePx}
                    y2={122}
                    stroke="rgba(129, 140, 248, 0.14)"
                    strokeWidth="0.7"
                  />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line
                    key={`gy-${i}`}
                    x1={24}
                    y1={originY - i * scalePx}
                    x2={205}
                    y2={originY - i * scalePx}
                    stroke="rgba(129, 140, 248, 0.14)"
                    strokeWidth="0.7"
                  />
                ))}

                <line x1={24} y1={originY} x2={208} y2={originY} stroke="#94A3B8" strokeWidth="1.2" />
                <line x1={originX} y1={10} x2={originX} y2={124} stroke="#94A3B8" strokeWidth="1.2" />

                <polygon
                  points={`${originX},${originY} ${endX},${originY} ${endX},${endY}`}
                  fill="rgba(99, 102, 241, 0.22)"
                />
                <line x1={originX} y1={originY} x2={endX} y2={originY} stroke="#38BDF8" strokeWidth="2.4" />
                <line x1={endX} y1={originY} x2={endX} y2={endY} stroke="#34D399" strokeWidth="2.4" />
                <line
                  x1={originX}
                  y1={originY}
                  x2={endX}
                  y2={endY}
                  stroke="#FBBF24"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <circle cx={originX} cy={originY} r="3.5" fill="#F8FAFC" />
                <circle cx={endX} cy={endY} r="4" fill="#FBBF24" />
              </svg>

              <div className="flex-1 text-left font-mono text-xs space-y-1.5 pr-2">
                <div className="text-amber-300 font-bold tabular-nums">
                  y = {slopeVal.toFixed(2)}x
                </div>
                <div className="text-[11px] text-indigo-200 tabular-nums">
                  Angle: {Math.round(Math.atan(slopeVal) * (180 / Math.PI))}°
                </div>
                <div className="text-[10px] text-emerald-300 leading-snug">
                  <span className="text-emerald-400">Δy={slopeRise}</span> /{' '}
                  <span className="text-sky-400">Δx={slopeRun}</span> defines constant gradient
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery of Labelled Textbook Diagrams & Geometric Figures */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
            Labelled ICSE Textbook Illustrations & Geometric Figures
          </h2>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
            {allDiagrams.length} Diagrams Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allDiagrams.map((diag, idx) => (
            <motion.div
              key={`${diag.id}-${idx}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: Math.min(idx * 0.04, 0.25) }}
              className="rounded-2xl glass-card-interactive overflow-hidden group"
            >
              <div className="p-4 border-b border-indigo-100/80 dark:border-indigo-500/20 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-purple-300 block truncate">
                    {diag.subjectName} · {diag.chapterTitle}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading truncate">
                    {diag.title}
                  </h3>
                </div>

                <button
                  onClick={() => setZoomedDiagram(diag)}
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-xl glass-surface-blue text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 shrink-0 transition-colors"
                >
                  <ZoomIn className="h-3.5 w-3.5" /> Enlarge
                </button>
              </div>

              <div
                onClick={() => setZoomedDiagram(diag)}
                className="cursor-pointer overflow-hidden bg-[#EAF2FF]/60 dark:bg-[#0B1226] p-3 relative"
              >
                {diag.svgFigure ? (
                  <div className="bg-white rounded-xl p-2 group-hover:scale-[1.01] transition-transform duration-300">
                    <MathSvgDiagram figureType={diag.svgFigure} className="w-full h-56" />
                  </div>
                ) : diag.imageUrl ? (
                  <img
                    src={diag.imageUrl}
                    alt={diag.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-56 object-contain bg-white rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : null}
              </div>

              <div className="p-4 text-xs text-slate-600 dark:text-slate-300">
                {diag.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Animated Modal for Zooming */}
      <AnimatePresence>
        {zoomedDiagram && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedDiagram(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070B19]/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl glass-card p-6 shadow-2xl max-h-[92vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold text-indigo-600 dark:text-purple-300 uppercase">
                    {zoomedDiagram.subjectName}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                    {zoomedDiagram.title}
                  </h3>
                </div>
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
                  <img
                    src={zoomedDiagram.imageUrl}
                    alt={zoomedDiagram.title}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[72vh] object-contain"
                  />
                ) : null}
              </div>
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">
                {zoomedDiagram.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
