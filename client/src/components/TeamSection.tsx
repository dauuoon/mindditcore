

export default function TeamSection() {
  return (
    <section id="team" className="mt-8 md:mt-10 pt-28 md:pt-36 pb-20 md:pb-32 bg-white relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mt-6 md:mt-8 mb-8 md:mb-10 animate-fade-in-up">
          <h2 className="font-heading text-foreground mb-4">
            마인딧 팀 소개
          </h2>
        </div>

        {/* Team Content */}
        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <div className="text-center mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <p className="text-base md:text-lg text-foreground leading-relaxed font-normal">
              마인딧 코어는 정신건강 전문가의 운영 부담을 줄이고,
              <br />
              프로그램 경험에 더 집중할 수 있도록 돕기 위해 시작된 연구 기반 프로젝트입니다.
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
            {[
              {
                title: '연구 및 학회 발표',
                gradientFrom: 'var(--surface-team-1-start)',
                gradientTo: 'var(--surface-team-end)',
                description: (
                  <>
                    정신건강 UX 및 디지털 중재 관련
                    <br />
                    국내 학회 발표 및 포스터 발표
                  </>
                ),
              },
              {
                title: '융복합 연구 프로젝트',
                gradientFrom: 'var(--surface-team-2-start)',
                gradientTo: 'var(--surface-team-end)',
                description: (
                  <>
                    이화여자대학교 대학원 융복합 프로젝트
                    <br />
                    예비 장학팀 선정
                  </>
                ),
              },
              {
                title: '학제 간 협업 및 전문가 자문',
                gradientFrom: 'var(--surface-team-3-start)',
                gradientTo: 'var(--surface-team-end)',
                description: (
                  <>
                    뇌인지과학·미디어인터랙션디자인
                    <br />
                    전공의 석·박사 연구팀 및 전문가 협업
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-base animate-fade-in-up"
                style={{
                  animationDelay: `${(index + 2) * 100}ms`,
                  backgroundImage: `linear-gradient(180deg, ${item.gradientFrom} 0%, ${item.gradientTo} 100%)`,
                  borderRadius: '12px',
                }}
              >
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
