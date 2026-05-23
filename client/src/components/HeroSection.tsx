import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5" />

        {/* Geometric shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        {/* Structural lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="container max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
        {/* Tagline */}
        <div className="mb-6 inline-block">
          <span className="text-sm font-caption text-secondary font-semibold tracking-widest">
            정신건강 프로그램 운영 서비스
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-foreground mb-6 leading-tight">
          <span className="block mb-2">마인딧 코어</span>
          <span className="block text-muted-foreground">운영은 더 간편하게,</span>
          <span className="block text-muted-foreground">프로그램은 더 가치 있게.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          프로그램 설계부터 참여자 관리까지,
          <br />
          정신건강 전문가의 운영 흐름을 지원합니다.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <div className="w-full sm:w-auto relative pt-4">
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 z-10 animate-bounce">
              <span className="inline-block whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] md:text-xs font-semibold text-foreground shadow-md border border-border">
                할인 혜택 및 우선 사용 제공
              </span>
            </div>
            <button
              onClick={onCTAClick}
              className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              베타 테스터 신청하기
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center animate-bounce">
          <ArrowDown className="text-foreground" size={28} />
        </div>
      </div>


    </section>
  );
}
