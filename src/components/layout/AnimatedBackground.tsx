import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  darkMode?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
  depth: number;
  hueType: 'blue' | 'purple' | 'star';
  connectable: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ darkMode = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const parallaxNearRef = useRef<HTMLDivElement | null>(null);
  const parallaxFarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let isMobile = width < 768;

    const setupCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      isMobile = width < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupCanvasSize();

    const createParticles = (): Particle[] => {
      const count = isMobile ? 52 : 145;
      const list: Particle[] = [];
      const types: Array<'blue' | 'purple' | 'star'> = ['blue', 'purple', 'star'];

      for (let i = 0; i < count; i++) {
        const depth = 0.25 + Math.random() * 0.95;
        const speedScale = (isMobile ? 0.14 : 0.24) * depth;
        const angle = Math.random() * Math.PI * 2;
        list.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speedScale,
          vy: Math.sin(angle) * speedScale - 0.04 * depth,
          r: Math.random() < 0.18 ? 2.1 + Math.random() * 1.4 : 0.8 + Math.random() * 1.3,
          alpha: 0.22 + Math.random() * 0.55,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.012 + Math.random() * 0.025,
          depth,
          hueType: types[i % types.length],
          // Subset of particles form subtle neural / star constellation connections
          connectable: !isMobile && i % 3 === 0,
        });
      }
      return list;
    };

    let particles = createParticles();

    // Gentle pointer parallax + smooth scroll offset
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let targetScrollY = window.scrollY || 0;
    let currentScrollY = targetScrollY;

    const handlePointerMove = (e: PointerEvent) => {
      if (prefersReducedMotion || isMobile) return;
      targetMouseX = (e.clientX / Math.max(width, 1) - 0.5) * 2;
      targetMouseY = (e.clientY / Math.max(height, 1) - 0.5) * 2;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY || 0;
    };

    const handleResize = () => {
      const prevMobile = isMobile;
      setupCanvasSize();
      if (prevMobile !== isMobile) {
        particles = createParticles();
      }
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        drawFrame(0, true);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    motionQuery.addEventListener('change', handleMotionChange);

    let rafId = 0;
    let lastTime = performance.now();

    const drawFrame = (dtFactor: number, staticOnly = false) => {
      ctx.clearRect(0, 0, width, height);

      // Lerp interactive offsets smoothly
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;

      if (!staticOnly && !prefersReducedMotion) {
        if (parallaxNearRef.current) {
          const nx = -currentMouseX * 14;
          const ny = -currentMouseY * 10 - (currentScrollY * 0.025) % 40;
          parallaxNearRef.current.style.transform = `translate3d(${nx.toFixed(2)}px, ${ny.toFixed(2)}px, 0)`;
        }
        if (parallaxFarRef.current) {
          const fx = -currentMouseX * 6;
          const fy = -currentMouseY * 5 - (currentScrollY * 0.012) % 24;
          parallaxFarRef.current.style.transform = `translate3d(${fx.toFixed(2)}px, ${fy.toFixed(2)}px, 0)`;
        }
      }

      const connectionDist = 128;
      const connectableNodes: Array<{ x: number; y: number; alpha: number }> = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!staticOnly && !prefersReducedMotion) {
          p.x += p.vx * dtFactor;
          p.y += p.vy * dtFactor;
          p.twinklePhase += p.twinkleSpeed * dtFactor;

          if (p.x < -12) p.x = width + 12;
          if (p.x > width + 12) p.x = -12;
          if (p.y < -12) p.y = height + 12;
          if (p.y > height + 12) p.y = -12;
        }

        const parallaxX = p.x - currentMouseX * 12 * p.depth;
        const parallaxY = p.y - currentMouseY * 9 * p.depth - ((currentScrollY * 0.04 * p.depth) % height);
        const drawY = ((parallaxY % height) + height) % height;

        const twinkle = 0.65 + 0.35 * Math.sin(p.twinklePhase);
        const finalAlpha = p.alpha * twinkle;

        let colorRgb = '165, 180, 252';
        if (darkMode) {
          colorRgb =
            p.hueType === 'blue'
              ? '96, 165, 250'
              : p.hueType === 'purple'
              ? '192, 132, 252'
              : '224, 231, 255';
        } else {
          colorRgb =
            p.hueType === 'blue'
              ? '37, 99, 235'
              : p.hueType === 'purple'
              ? '124, 58, 237'
              : '79, 70, 229';
        }

        const effectiveAlpha = darkMode ? finalAlpha : finalAlpha * 0.42;

        // Soft outer halo for larger luminous specks
        if (p.r > 1.8) {
          const halo = ctx.createRadialGradient(parallaxX, drawY, 0, parallaxX, drawY, p.r * 4.2);
          halo.addColorStop(0, `rgba(${colorRgb}, ${(effectiveAlpha * 0.55).toFixed(3)})`);
          halo.addColorStop(1, `rgba(${colorRgb}, 0)`);
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(parallaxX, drawY, p.r * 4.2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${colorRgb}, ${effectiveAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(parallaxX, drawY, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.connectable) {
          connectableNodes.push({ x: parallaxX, y: drawY, alpha: effectiveAlpha });
        }
      }

      // Subtle connecting lines between selected constellation/neural particles
      if (!isMobile && connectableNodes.length > 1) {
        ctx.lineWidth = 0.65;
        for (let i = 0; i < connectableNodes.length; i++) {
          const a = connectableNodes[i];
          for (let j = i + 1; j < connectableNodes.length; j++) {
            const b = connectableNodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < connectionDist * connectionDist) {
              const dist = Math.sqrt(distSq);
              const lineOpacity =
                (1 - dist / connectionDist) * (darkMode ? 0.16 : 0.085);
              ctx.strokeStyle = darkMode
                ? `rgba(129, 140, 248, ${lineOpacity.toFixed(3)})`
                : `rgba(79, 70, 229, ${lineOpacity.toFixed(3)})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.67, 2.5);
      lastTime = now;
      drawFrame(dt);
      if (!prefersReducedMotion) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    if (prefersReducedMotion) {
      drawFrame(0, true);
    } else {
      rafId = window.requestAnimationFrame(tick);
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, [darkMode]);

  return (
    <div
      aria-hidden="true"
      className="no-print pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden transition-colors duration-500"
    >
      {/* 1. Deep Midnight Navy, Electric Blue & Royal Purple Atmospheric Canvas */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          darkMode
            ? 'bg-gradient-to-br from-[#040817] via-[#0A1336] to-[#170E3E]'
            : 'bg-gradient-to-br from-[#F4F7FC] via-[#EBF2FF] to-[#EFEAFF]'
        }`}
      />

      {/* 2. Layered Volumetric Aurora Ribbons & Light Beams */}
      <div
        className="animate-aurora-drift absolute -top-1/3 left-[-10%] h-[78vh] w-[118%] rounded-full blur-3xl will-change-transform"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.22) 0%, rgba(124, 58, 237, 0.16) 46%, transparent 74%)'
            : 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.12) 0%, rgba(124, 58, 237, 0.08) 46%, transparent 74%)',
        }}
      />

      <div
        className="animate-aurora-reverse absolute bottom-[-24%] right-[-10%] h-[72vh] w-[110%] rounded-full blur-3xl will-change-transform"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2) 0%, rgba(37, 99, 235, 0.12) 50%, transparent 76%)'
            : 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(37, 99, 235, 0.07) 50%, transparent 76%)',
        }}
      />

      {/* Soft Volumetric Diagonal Light Beams */}
      <div
        className="animate-beam-sway hidden sm:block absolute -top-24 left-[18%] h-[135vh] w-56 blur-3xl will-change-transform"
        style={{
          background: darkMode
            ? 'linear-gradient(180deg, rgba(56, 189, 248, 0.16) 0%, rgba(99, 102, 241, 0.08) 55%, transparent 100%)'
            : 'linear-gradient(180deg, rgba(99, 102, 241, 0.09) 0%, rgba(56, 189, 248, 0.05) 55%, transparent 100%)',
        }}
      />
      <div
        className="animate-beam-sway hidden md:block absolute -top-32 right-[16%] h-[130vh] w-64 blur-3xl will-change-transform"
        style={{
          animationDelay: '-7s',
          background: darkMode
            ? 'linear-gradient(180deg, rgba(168, 85, 247, 0.15) 0%, rgba(79, 70, 229, 0.07) 55%, transparent 100%)'
            : 'linear-gradient(180deg, rgba(139, 92, 246, 0.08) 0%, rgba(99, 102, 241, 0.04) 55%, transparent 100%)',
        }}
      />

      {/* 3. Far Parallax Educational Grid, Atomic Orbitals, Equations & Neural Vectors */}
      <div
        ref={parallaxFarRef}
        className="absolute inset-0 will-change-transform transition-transform duration-75"
      >
        {/* Glowing Ambient Orbs */}
        <div
          className="animate-orb-1 absolute -top-20 right-[4%] h-80 w-80 sm:h-[420px] sm:w-[420px] rounded-full blur-3xl will-change-transform"
          style={{
            background: darkMode
              ? 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(30, 58, 138, 0.12) 60%, transparent 80%)'
              : 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, rgba(56, 189, 248, 0.08) 60%, transparent 80%)',
          }}
        />
        <div
          className="animate-orb-2 absolute bottom-[-8%] left-[6%] h-80 w-80 sm:h-[440px] sm:w-[440px] rounded-full blur-3xl will-change-transform"
          style={{
            background: darkMode
              ? 'radial-gradient(circle, rgba(37, 99, 235, 0.22) 0%, rgba(109, 40, 217, 0.14) 55%, transparent 80%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.11) 0%, rgba(139, 92, 246, 0.08) 55%, transparent 80%)',
          }}
        />

        {/* Subtle Coordinate Grid, Sine Wave, Neural Links & Academic Formulas */}
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
            darkMode ? 'opacity-[0.085] text-indigo-300' : 'opacity-[0.05] text-[#1E3A8A]'
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="icse-math-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path
                d="M 72 0 L 0 0 0 72"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.55"
                strokeDasharray="2 4"
              />
              <circle cx="36" cy="36" r="1.1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="1440" height="900" fill="url(#icse-math-grid)" />

          {/* Harmonic Wave & Geometric Tangent */}
          <path
            d="M 0 650 Q 180 570 360 650 T 720 650 T 1080 650 T 1440 650"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeDasharray="6 6"
          />

          {/* Atomic Orbital Diagram (Upper-Right Atmospheric Corner) */}
          <g transform="translate(1235, 175)" stroke="currentColor" fill="none" strokeWidth="1.1">
            <ellipse cx="0" cy="0" rx="115" ry="38" transform="rotate(-24)" />
            <ellipse cx="0" cy="0" rx="115" ry="38" transform="rotate(36)" />
            <ellipse cx="0" cy="0" rx="115" ry="38" transform="rotate(96)" />
            <circle cx="0" cy="0" r="8" strokeWidth="1.6" />
            <circle cx="88" cy="-42" r="3" fill="currentColor" />
            <circle cx="-74" cy="48" r="3" fill="currentColor" />
          </g>

          {/* Subtle Abstract Neural Constellation Graph (Lower-Left Atmospheric Zone) */}
          <g stroke="currentColor" fill="currentColor" strokeWidth="0.9" opacity="0.85">
            <line x1="90" y1="730" x2="175" y2="680" />
            <line x1="175" y1="680" x2="255" y2="745" />
            <line x1="175" y1="680" x2="225" y2="615" />
            <line x1="225" y1="615" x2="315" y2="645" />
            <circle cx="90" cy="730" r="3.5" />
            <circle cx="175" cy="680" r="4.5" />
            <circle cx="255" cy="745" r="3.2" />
            <circle cx="225" cy="615" r="3.8" />
            <circle cx="315" cy="645" r="3" />
          </g>

          {/* Molecular Hexagonal Benzene / Covalent Structure (Lower-Right) */}
          <g transform="translate(1280, 745)" stroke="currentColor" fill="none" strokeWidth="1.15">
            <polygon points="0,-42 36,-21 36,21 0,42 -36,21 -36,-21" />
            <circle cx="0" cy="0" r="22" strokeDasharray="4 3" />
            <line x1="36" y1="-21" x2="62" y2="-36" />
            <line x1="-36" y1="21" x2="-62" y2="36" />
            <circle cx="66" cy="-38" r="4" fill="currentColor" />
            <circle cx="-66" cy="38" r="4" fill="currentColor" />
          </g>

          {/* Faint Mathematical & Scientific Notations in Outer Atmospheric Margins */}
          <g
            fill="currentColor"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="15"
            fontWeight="500"
            opacity="0.85"
          >
            <text x="64" y="138">a² + b² = c²</text>
            <text x="1125" y="340">E = mc² · F = ma</text>
            <text x="72" y="545">Δx · Σf(x)</text>
            <text x="1155" y="610">2H₂ + O₂ → 2H₂O</text>
          </g>
        </svg>
      </div>

      {/* 4. Interactive High-FPS Particle, Starfield & Neural-Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      {/* 5. Near Parallax CSS 3D Floating Glass Spheres, Wireframes & Scientific Artifacts */}
      <div
        ref={parallaxNearRef}
        className="absolute inset-0 will-change-transform transition-transform duration-75"
        style={{ perspective: '1200px' }}
      >
        {/* 3D Translucent Glass Sphere — Top Right */}
        <div
          className={`animate-sphere-float hidden md:block absolute top-24 right-[8%] h-20 w-20 rounded-full backdrop-blur-md transition-colors duration-500 ${
            darkMode
              ? 'border border-indigo-300/30 shadow-[inset_-8px_-10px_20px_rgba(79,70,229,0.28),inset_6px_6px_14px_rgba(255,255,255,0.22),0_0_32px_rgba(99,102,241,0.25)]'
              : 'border border-indigo-400/30 shadow-[inset_-6px_-8px_18px_rgba(79,70,229,0.14),inset_6px_6px_14px_rgba(255,255,255,0.75),0_10px_28px_rgba(79,70,229,0.12)]'
          }`}
          style={{
            background: darkMode
              ? 'radial-gradient(circle at 30% 28%, rgba(224,231,255,0.32), rgba(79,70,229,0.12) 48%, rgba(15,23,42,0.18) 85%)'
              : 'radial-gradient(circle at 30% 28%, rgba(255,255,255,0.8), rgba(165,180,252,0.18) 55%, rgba(79,70,229,0.08) 90%)',
          }}
        />

        {/* 3D Translucent Glass Sphere — Mid-Left Peripheral */}
        <div
          className={`animate-sphere-float hidden lg:block absolute top-[54%] left-[4%] h-14 w-14 rounded-full backdrop-blur-sm transition-colors duration-500 ${
            darkMode
              ? 'border border-purple-300/25 shadow-[inset_-6px_-8px_16px_rgba(124,58,237,0.28),inset_4px_4px_12px_rgba(255,255,255,0.2),0_0_26px_rgba(168,85,247,0.22)]'
              : 'border border-purple-400/25 shadow-[inset_-5px_-6px_14px_rgba(124,58,237,0.12),inset_4px_4px_12px_rgba(255,255,255,0.7),0_8px_22px_rgba(124,58,237,0.1)]'
          }`}
          style={{
            animationDelay: '-4.5s',
            background: darkMode
              ? 'radial-gradient(circle at 32% 30%, rgba(243,232,255,0.28), rgba(124,58,237,0.12) 55%, rgba(15,23,42,0.15) 90%)'
              : 'radial-gradient(circle at 32% 30%, rgba(255,255,255,0.78), rgba(196,181,253,0.18) 58%, rgba(124,58,237,0.06) 90%)',
          }}
        />

        {/* Rotating 3D Geometric Wireframe Structure — Top Left Edge */}
        <div
          className="hidden lg:flex absolute top-28 left-[19%] h-24 w-24 items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className={`animate-spin-3d relative h-16 w-16 rounded-2xl border transition-colors duration-500 ${
              darkMode
                ? 'border-sky-400/25 bg-sky-400/[0.03] shadow-[0_0_24px_rgba(56,189,248,0.12)]'
                : 'border-indigo-500/20 bg-indigo-500/[0.02]'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className={`absolute inset-2 rounded-xl border ${
                darkMode ? 'border-purple-400/30' : 'border-purple-500/20'
              }`}
              style={{ transform: 'translateZ(18px) rotateZ(45deg)' }}
            />
          </div>
        </div>

        {/* Rotating 3D Atom / Technology Orbital Ring — Bottom Right */}
        <div
          className="hidden md:flex absolute bottom-16 right-[7%] h-32 w-32 items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className={`animate-spin-3d-reverse relative h-24 w-24 rounded-full border transition-colors duration-500 ${
              darkMode
                ? 'border-indigo-400/25 shadow-[0_0_28px_rgba(99,102,241,0.18)]'
                : 'border-indigo-500/20'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className={`absolute inset-1 rounded-full border border-dashed ${
                darkMode ? 'border-sky-300/30' : 'border-blue-500/20'
              }`}
              style={{ transform: 'rotateX(65deg) rotateY(20deg)' }}
            />
            <div
              className={`absolute inset-3 rounded-full border ${
                darkMode ? 'border-purple-300/30' : 'border-purple-500/20'
              }`}
              style={{ transform: 'rotateY(65deg) rotateX(25deg)' }}
            />
            <span
              className={`absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                darkMode
                  ? 'bg-sky-300/75 shadow-[0_0_12px_rgba(125,211,252,0.9)]'
                  : 'bg-indigo-600/45'
              }`}
            />
          </div>
        </div>

        {/* Subtle Floating DNA / Biology Wave & Math Pi Crest — Mid-Right */}
        <div
          className={`animate-float-subtle hidden xl:flex absolute top-[46%] right-[4%] items-center justify-center rounded-2xl p-3 backdrop-blur-sm border transition-colors duration-500 ${
            darkMode
              ? 'border-indigo-400/15 bg-indigo-950/20 text-indigo-300/45'
              : 'border-indigo-300/25 bg-white/30 text-indigo-600/35'
          }`}
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M10 8 C26 14, 16 28, 32 34" />
            <path d="M32 8 C16 14, 26 28, 10 34" />
            <line x1="15" y1="13" x2="27" y2="13" opacity="0.65" />
            <line x1="16" y1="21" x2="26" y2="21" opacity="0.65" />
            <line x1="15" y1="29" x2="27" y2="29" opacity="0.65" />
          </svg>
        </div>
      </div>
    </div>
  );
};
