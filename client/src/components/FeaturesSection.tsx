import { useEffect, useRef, useState } from 'react';
import p1Icon from '@/assets/p1.png';
import p2Icon from '@/assets/p2.png';
import p3Icon from '@/assets/p3.png';
import p4Icon from '@/assets/p4.png';

const features = [
  {
    title: '프로그램 설계',
    gradient: 'linear-gradient(to top, #BCDFF3 0%, #ffffff 100%)',
    textColor: '#485763',
    description: '활동 블록을 조립해 회차별 프로그램을\n손쉽게 구성하세요.',
    icon: p1Icon,
  },
  {
    title: '프로그램 운영',
    gradient: 'linear-gradient(to top, #F4D5E0 0%, #ffffff 100%)',
    textColor: '#594B51',
    description: '온 · 오프라인 어디서든 세션을\n실시간으로 진행하세요.',
    icon: p2Icon,
  },
  {
    title: '참여자 관리',
    gradient: 'linear-gradient(to top, #C1DBD9 0%, #ffffff 100%)',
    textColor: '#475858',
    description: '프로그램 안내 · 초대부터\n출결 및 활동 내역까지 관리하세요.',
    icon: p3Icon,
  },
  {
    title: '참여 지속성 강화',
    gradient: 'linear-gradient(to top, #F0EEB5 0%, #ffffff 100%)',
    textColor: '#595849',
    description: '참여 흐름이 끊기지 않도록\n다양한 활동과 알림을 제공하세요.',
    icon: p4Icon,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="pt-16 md:pt-24 pb-10 md:pb-14 bg-white relative isolate z-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="font-heading text-foreground mb-4">
            왜 마인딧 코어인가요?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            정신건강 프로그램 준비부터 진행 · 기록과 회고까지
            <br />
            운영자가 더 중요한 일에 집중할 수 있도록 반복적인 업무를 줄여드립니다.
          </p>
        </div>

        {/* Features Grid - Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 relative z-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group min-h-[228px] md:min-h-[264px] overflow-hidden rounded-base transition-all duration-700 ease-out ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: `${index * 140}ms`,
                borderRadius: '12px',
                backgroundImage: feature.gradient,
                color: feature.textColor,
              }}
            >
              <div className="h-full p-6 md:p-7 flex flex-col rounded-base">
                <img src={feature.icon} alt={`${feature.title} 아이콘`} className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
                <div className="mt-auto">
                <h3 className="text-lg md:text-xl font-semibold leading-snug">{feature.title}</h3>
                <p className="mt-2 text-sm md:text-base leading-snug whitespace-pre-line">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>


    </section>
  );
}
