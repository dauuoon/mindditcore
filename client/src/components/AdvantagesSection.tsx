import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';


const advantages = [
  {
    title: '연구 기반 설계',
    description: (
      <>
        이화여자대학교 뇌인지과학 및 미디어인터랙션 전공 기반의 연구 프로젝트입니다.
        <br />
        정신건강과 디지털 사용자 경험의 연결을 연구하며 제작 중인 서비스입니다.
      </>
    ),
    highlights: ['학제 간 협력 연구', '사용자 경험 중심 설계', '과학적 근거 기반'],
    bgColor: 'var(--surface-brand-tint-10)',
    sectionBgColor: 'var(--surface-advantage-1)',
  },
  {
    title: '전문가 중심 설계',
    description: (
      <>
        정신건강 전문가와 기관의 실제 운영 경험을 반영했습니다.
        <br />
        현장의 목소리를 듣고 만든 플랫폼으로, 실제 필요를 충족하는 기능을 제공합니다.
      </>
    ),
    highlights: ['전문가 피드백 반영', '현장 경험 기반 개발', '지속적인 개선'],
    bgColor: 'var(--surface-brand-tint-10)',
    sectionBgColor: 'var(--surface-advantage-2)',
  },
  {
    title: '신뢰감 있는 구조',
    description: (
      <>
        명확한 정보 구조와 직관적인 인터페이스로 사용자의 신뢰를 얻습니다.
        <br />
        복잡한 운영을 단순하게 만들어 전문가가 집중할 수 있도록 지원합니다.
      </>
    ),
    highlights: ['미니멀 디자인', '직관적 인터페이스', '사용성 중심'],
    bgColor: 'var(--surface-brand-tint-10)',
    sectionBgColor: 'var(--surface-advantage-3)',
  },
];

export default function AdvantagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % advantages.length);
    }, 10000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="advantages"
      className="-mt-28 md:-mt-36 pt-[10.5rem] md:pt-[14rem] pb-20 md:pb-32 relative isolate transition-colors duration-500"
      style={{ backgroundColor: advantages[activeIndex].sectionBgColor }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl transition-colors duration-500"
          style={{ backgroundColor: advantages[activeIndex].sectionBgColor }}
        />
      </div>

      <div className="container relative z-10">
        {/* Main Content - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: Image/Visual Area */}
          <div 
            className="relative h-96 md:h-[500px] rounded-base overflow-hidden animate-fade-in-up transition-all duration-500"
            style={{ animationDelay: '100ms', borderRadius: '12px' }}
          >
            <div
              className="w-full h-full"
              style={{ backgroundColor: advantages[activeIndex].bgColor }}
            />
          </div>

          {/* Right: Text Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {/* Label */}
            <div className="inline-block mb-4">
              <span className="text-xs font-caption text-muted-foreground font-semibold uppercase tracking-widest">
                Why Minddit
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading text-foreground mb-4 leading-tight">
              {advantages[activeIndex].title}
            </h3>

            {/* Description */}
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              {advantages[activeIndex].description}
            </p>

            {/* Highlights List */}
            <div className="space-y-4 mb-8">
              {advantages[activeIndex].highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-3">
              {advantages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-foreground w-8'
                      : 'bg-muted w-2 hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to advantage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>


    </section>
  );
}
