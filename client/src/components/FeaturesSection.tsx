import { useEffect, useRef, useState } from 'react';
import featureImage1 from '@/assets/1.svg';
import featureImage2 from '@/assets/2.svg';
import featureImage3 from '@/assets/3.svg';
import featureImage4 from '@/assets/4.svg';

const features = [
  {
    cardImage: featureImage1,
    title: '프로그램 설계',
  },
  {
    cardImage: featureImage2,
    title: '프로그램 운영',
  },
  {
    cardImage: featureImage3,
    title: '참여자 관리',
  },
  {
    cardImage: featureImage4,
    title: '참여 지속성 강화',
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
    <section id="features" ref={sectionRef} className="py-20 md:py-32 bg-white relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="font-heading text-foreground mb-4">
            마인딧 코어 핵심 기능
          </h2>
          <div className="structural-line mx-auto w-24 mb-6" />
        </div>

        {/* Features Grid - Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-3xl transition-all duration-700 ease-out hover:shadow-lg ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <img
                src={feature.cardImage}
                alt={`${feature.title} 카드`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-0">
          <button className="px-6 py-2 text-foreground opacity-50 font-semibold hover:text-muted-foreground transition-colors duration-200 underline underline-offset-4 inline-flex items-center gap-2">
            더 자세한 기능보기 →
          </button>
        </div>
      </div>


    </section>
  );
}
