import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import slideOneImage from '@/assets/1.png';
import slideTwoImage from '@/assets/2.png';
import slideThreeImage from '@/assets/3.png';
import slideFourImage from '@/assets/4.png';


const advantages = [
  {
    title: '쉽고 유연한 프로그램 관리',
    description: (
      <>
        프로그램 생성부터 회차 관리까지, 하나의 플랫폼에서 운영할 수 있습니다.
      </>
    ),
    highlights: ['프로그램 및 회차별 활동 자유 편집', '회차별 안내 메시지 및 운영 지원', '프로그램별 참여 링크 자동 생성'],
    bgColor: 'rgba(218, 227, 233, 0.75)',
    sectionBgColor: 'rgba(218, 227, 233, 0.75)',
    textColor: '#485763',
    image: slideOneImage,
    imageClassName: 'object-cover object-right-top',
  },
  {
    title: '체계적인 콘텐츠 관리',
    description: (
      <>
        프로그램 내에서 진행되는 다양한 활동을 관리하고 운영할 수 있습니다.
      </>
    ),
    highlights: ['회차별 콘텐츠 구성 관리', '프로그램별 활동 연계 운영', '활동 자료 및 템플릿 관리'],
    bgColor: 'rgba(220, 214, 217, 0.75)',
    sectionBgColor: 'rgba(220, 214, 217, 0.75)',
    textColor: '#594B51',
    image: slideTwoImage,
  },
  {
    title: '참여를 돕는 연결된 경험',
    description: (
      <>
        디지털 활동 도구를 통해 감정과 경험을 기록하며 회차별 여정을 지속적으로 이어갈 수 있습니다.
      </>
    ),
    highlights: ['링크 기반 간편 접속', '프로그램 상세 정보 제공', '회차별 활동 및 기록 연계'],
    bgColor: 'rgba(203, 216, 217, 0.75)',
    sectionBgColor: 'rgba(203, 216, 217, 0.75)',
    textColor: '#475858',
    image: slideThreeImage,
  },
  {
    title: '운영자를 위한 스마트 지원',
    description: (
      <>
        프로그램 운영에 필요한 안내문 생성과 데이터 관리를 지원합니다.
      </>
    ),
    highlights: ['프로그램 생성 시 안내 메시지 자동 생성', '회차별 안내 메시지 자동 생성', '데이터 엑셀 다운로드 제공'],
    bgColor: 'rgba(240, 239, 232, 0.75)',
    sectionBgColor: 'rgba(240, 239, 232, 0.75)',
    textColor: '#595849',
    image: slideFourImage,
  },
];

export default function AdvantagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % advantages.length);
    }, 15000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="advantages"
      className="-mt-32 md:-mt-40 pt-[12rem] md:pt-[15rem] pb-20 md:pb-32 relative isolate transition-colors duration-500"
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
        <div className="mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: Image/Visual Area */}
          <div 
            className="relative z-20 h-96 md:h-[500px] rounded-base overflow-hidden animate-fade-in-up transition-all duration-500"
            style={{ animationDelay: '100ms', borderRadius: '12px' }}
          >
            <div
              className="relative z-10 w-full h-full"
              style={{ backgroundColor: '#FFFFFF' }}
            />
            {advantages[activeIndex].image ? (
              <img
                src={advantages[activeIndex].image}
                alt={`${advantages[activeIndex].title} 이미지`}
                className={`absolute inset-0 z-20 w-full h-full rounded-[12px] ${
                  advantages[activeIndex].imageClassName ?? 'object-contain'
                }`}
              />
            ) : null}
          </div>

          {/* Right: Text Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {/* Label */}
            <div className="inline-block mb-4">
                <span className="text-xs font-caption font-semibold uppercase tracking-widest text-current">
                Why Minddit
              </span>
            </div>

            {/* Title */}
              <h3 className="font-heading mb-4 leading-tight text-current">
              {advantages[activeIndex].title}
            </h3>

            {/* Description */}
              <p className="text-base mb-8 leading-relaxed text-current/85">
              {advantages[activeIndex].description}
            </p>

            {/* Highlights List */}
            <div className="space-y-4 mb-8">
              {advantages[activeIndex].highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-current" strokeWidth={3} />
                  </div>
                    <span className="text-sm text-current">{highlight}</span>
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
                      ? 'w-8'
                      : 'w-2 opacity-40 hover:opacity-70'
                  }`}
                  style={{ backgroundColor: advantages[activeIndex].textColor }}
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
