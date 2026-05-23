import { Blocks, CalendarCheck2, UsersRound, BellRing } from 'lucide-react';

const features = [
  {
    icon: Blocks,
    title: '프로그램 설계',
    description: '활동 블록을 조립해 회차별 프로그램을 손쉽게 구성하세요.',
  },
  {
    icon: CalendarCheck2,
    title: '프로그램 운영',
    description: '온·오프라인 어디서든 세션을 실시간으로 진행하세요.',
  },
  {
    icon: UsersRound,
    title: '참여자 관리',
    description: '프로그램 안내, 초대부터 출결 및 활동 내역까지 관리하세요.',
  },
  {
    icon: BellRing,
    title: '참여 지속성 강화',
    description: '다양한 활동과 리마인더 알림을 통한 몰입 강화.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background relative">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card-elevated p-6 md:p-8 bg-secondary text-secondary-foreground hover:shadow-lg transition-all duration-300 animate-fade-in-up rounded-lg"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="w-11 h-11 rounded-full border border-secondary-foreground/30 flex items-center justify-center bg-secondary-foreground/5">
                  <feature.icon className="w-5 h-5 text-secondary-foreground" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-subheading text-secondary-foreground mb-3 group-hover:opacity-90 transition-opacity duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-secondary-foreground/80 mb-4 group-hover:text-secondary-foreground transition-colors duration-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Line */}
              <div className="mt-4 h-0.5 bg-secondary-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-border">
          <button className="px-6 py-2 text-foreground opacity-50 font-semibold hover:text-muted-foreground transition-colors duration-200 underline underline-offset-4 inline-flex items-center gap-2">
            더 자세한 기능보기 →
          </button>
        </div>
      </div>


    </section>
  );
}
