import HeroGraphicBackground from '@/components/HeroGraphicBackground';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
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
