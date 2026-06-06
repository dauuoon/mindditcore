import { type CSSProperties, useEffect, useRef, useState } from 'react';
import HeroGraphicBackground from '@/components/HeroGraphicBackground';
import b1 from '@/assets/icon/b1.png';
import b2 from '@/assets/icon/b2.png';
import b3 from '@/assets/icon/b3.png';
import b4 from '@/assets/icon/b4.png';
import bg1 from '@/assets/icon/bg1.png';
import bg2 from '@/assets/icon/bg2.png';
import bg3 from '@/assets/icon/bg3.png';
import bg4 from '@/assets/icon/bg4.png';
import g1 from '@/assets/icon/g1.png';
import g2 from '@/assets/icon/g2.png';
import g3 from '@/assets/icon/g3.png';
import g4 from '@/assets/icon/g4.png';
import r1 from '@/assets/icon/r1.png';
import r2 from '@/assets/icon/r2.png';
import r3 from '@/assets/icon/r3.png';
import r4 from '@/assets/icon/r4.png';
import y1 from '@/assets/icon/y1.png';
import y2 from '@/assets/icon/y2.png';
import y3 from '@/assets/icon/y3.png';
import y4 from '@/assets/icon/y4.png';

const colorIconGroups = {
  r: [r1, r2, r3, r4],
  b: [b1, b2, b3, b4],
  g: [g1, g2, g3, g4],
  bg: [bg1, bg2, bg3, bg4],
  y: [y1, y2, y3, y4],
} as const;
type ColorGroupKey = keyof typeof colorIconGroups;
const colorGroups = Object.keys(colorIconGroups) as ColorGroupKey[];
const slotIndices = [0, 1] as const;
const wavePattern = [2, 1, 2] as const;
const waveIntervalMs = 4000;

const leftOptions = [56, 68, 80, 92] as const;
const slotLeftOptions = {
  0: [56, 68],
  1: [80, 92],
} as const;
const sizeOptions = [
  'w-20 md:w-28',
  'w-24 md:w-32',
  'w-[108px] md:w-[148px]',
  'w-[120px] md:w-[164px]',
] as const;
const fadeProfileOptions = ['fast', 'slow'] as const;
type FadeProfile = (typeof fadeProfileOptions)[number];

interface FloatingIconItem {
  id: number;
  slot: number;
  group: ColorGroupKey;
  src: string;
  alt: string;
  left: number;
  sizeClass: string;
  duration: number;
  delay: number;
  fadeProfile: FadeProfile;
  endY: number;
  driftX: number;
  edgeOffsetPx: number;
}

const randomPick = <T,>(list: readonly T[]): T => list[Math.floor(Math.random() * list.length)];
const shuffled = <T,>(list: readonly T[]): T[] => [...list].sort(() => Math.random() - 0.5);

const pickIconFromGroup = (group: ColorGroupKey, excludedSrcs: string[]) => {
  const groupIcons = colorIconGroups[group];
  const available = groupIcons.filter((src) => !excludedSrcs.includes(src));
  return randomPick(available.length > 0 ? available : groupIcons);
};

const createRandomIcon = (
  id: number,
  slot: number,
  left: number,
  excludedSrcs: string[],
  delay: number,
  group: ColorGroupKey,
): FloatingIconItem => {
  const selectedSrc = pickIconFromGroup(group, excludedSrcs);
  return {
    id,
    slot,
    group,
    src: selectedSrc,
    alt: `${group.toUpperCase()} 아이콘`,
    left,
    sizeClass: randomPick(sizeOptions),
    duration: slot === 0 ? 10.8 + Math.random() * 2.1 : 14.6 + Math.random() * 2.4,
    delay,
    fadeProfile: slot === 0 ? 'fast' : 'slow',
    endY: -(82 + Math.random() * 26),
    driftX: -12 + Math.random() * 30,
    edgeOffsetPx: left >= 90 ? 18 + Math.random() * 42 : 0,
  };
};

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIconItem[]>([]);
  const nextIconIdRef = useRef(0);
  const isPageVisibleRef = useRef(true);
  const waveIndexRef = useRef(0);

  const createIconForSlot = (slot: number, existingIcons: FloatingIconItem[], delay = 0): FloatingIconItem => {
    const leftCandidates = slotLeftOptions[slot as keyof typeof slotLeftOptions] ?? leftOptions;
    const occupiedLefts = new Set(existingIcons.map((icon) => icon.left));
    const availableLefts = leftCandidates.filter((left) => !occupiedLefts.has(left));
    const pickedLeft = randomPick(availableLefts.length > 0 ? availableLefts : leftCandidates);

    const activeGroups = new Set(existingIcons.map((icon) => icon.group));
    const preferredGroups = shuffled(colorGroups.filter((group) => !activeGroups.has(group)));
    const activeSrcs = existingIcons.map((icon) => icon.src);
    const nextGroup = randomPick(preferredGroups.length > 0 ? preferredGroups : colorGroups);

    return createRandomIcon(nextIconIdRef.current++, slot, pickedLeft, activeSrcs, delay, nextGroup);
  };

  const createWaveIcons = (count: number, existingIcons: FloatingIconItem[], isInitialWave = false): FloatingIconItem[] => {
    const pickedSlots = shuffled(slotIndices).slice(0, count);
    const created: FloatingIconItem[] = [];

    return pickedSlots.map((slot, idx) => {
      const icon = createIconForSlot(
        slot,
        [...existingIcons, ...created],
        isInitialWave ? 0 : idx * 0.16 + Math.random() * 0.08,
      );
      created.push(icon);
      return icon;
    });
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleVisibilityChange = () => {
      isPageVisibleRef.current = document.visibilityState === 'visible';

      if (!isPageVisibleRef.current) {
        return;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    handleVisibilityChange();

    const launchWave = () => {
      if (isPageVisibleRef.current) {
        const isInitialWave = waveIndexRef.current === 0;
        const waveCount = wavePattern[waveIndexRef.current % wavePattern.length];
        waveIndexRef.current += 1;
        setFloatingIcons((prev) => [...prev, ...createWaveIcons(waveCount, prev, isInitialWave)]);
      }

      timer = setTimeout(launchWave, waveIntervalMs);
    };

    launchWave();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timer);
    };
  }, []);

  const handleIconAnimationEnd = (id: number) => {
    setFloatingIcons((prev) => {
      return prev.filter((icon) => icon.id !== id);
    });
  };

  return (
    <section
      id="hero"
      className="relative isolate z-0 min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 flex items-center justify-center overflow-hidden"
    >
      <HeroGraphicBackground />

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 surface-hero-veil" />
        <div className="absolute inset-0 surface-hero-gradient" />

        {/* Geometric shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 overflow-hidden hidden md:block" aria-hidden="true">
          {floatingIcons.map((icon) => (
            <img
              key={icon.id}
              src={icon.src}
              alt={icon.alt}
              className={`absolute ${icon.sizeClass} hero-rising-icon ${
                icon.fadeProfile === 'fast' ? 'hero-rising-icon-fade-fast' : 'hero-rising-icon-fade-slow'
              }`}
              style={{
                left: `${icon.left}%`,
                animationDuration: `${icon.duration}s`,
                animationDelay: `${icon.delay}s`,
                filter: 'drop-shadow(0 14px 28px rgba(72, 87, 99, 0.18))',
                marginLeft: `${icon.edgeOffsetPx}px`,
                '--hero-rise-end-y': `${icon.endY}vh`,
                '--hero-rise-drift-x': `${icon.driftX}px`,
              } as CSSProperties}
              onAnimationEnd={() => handleIconAnimationEnd(icon.id)}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4 animate-fade-in-up">
        <div className="max-w-2xl text-left">
          {/* Tagline */}
          <div className="mb-3 inline-block">
            <span className="text-base md:text-lg font-caption text-secondary font-semibold tracking-widest">
              정신건강 프로그램 운영 서비스
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-foreground mb-4 leading-tight">
            <span className="block mb-2 text-[var(--surface-hero-brand)]">마인딧 코어</span>
            <span className="block font-semibold text-[var(--surface-hero-brand-subtle)]">운영은 더 편리하게,</span>
            <span className="block font-semibold text-[var(--surface-hero-brand-subtle)]">프로그램은 더 가치 있게.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            프로그램 설계부터 참여자 관리까지,
            <br />
            정신건강 전문가의 운영을 지원합니다.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-20">
            <div className="w-full sm:w-auto relative pt-4">
              <div className="absolute top-0.5 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <span className="inline-block whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] md:text-xs font-semibold text-foreground shadow-md border border-border">
                  얼리 액세스 및 할인 혜택
                </span>
              </div>
              <button
                onClick={onCTAClick}
                className="w-full sm:w-auto px-8 py-3 surface-brand text-white rounded-base font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 surface-brand-hover"
                style={{ borderRadius: '12px' }}
              >
                테스터 신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
