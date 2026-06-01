import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import LegalDialog from '@/components/LegalDialog';

export default function BetaSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [statusToast, setStatusToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showStatusToast = (type: 'success' | 'error', message: string) => {
    setStatusToast({ type, message });
    window.setTimeout(() => {
      setStatusToast(null);
    }, 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !agreed) {
      showStatusToast('error', '이메일과 약관 동의가 필요합니다.');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setEmail('');
    setAgreed(false);
    setIsLoading(false);

    showStatusToast('success', '베타 테스트 신청이 완료되었습니다!');

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="beta"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to top, var(--blue200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--blue200)] rounded-full blur-3xl opacity-70" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="font-heading text-foreground mb-4">
            테스터 신청
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            마인딧 코어를 가장 먼저 경험할 분들을 찾고 있습니다.
          </p>
          <div className="mt-4 max-w-2xl mx-auto space-y-1 text-center text-xs md:text-sm text-muted-foreground/70 leading-snug">
            <p>
              <span>
                <span className="font-semibold text-foreground">대상 :</span> 정신건강 프로그램 운영하는 전문가, 실무자, 기관 담당자 등
              </span>
            </p>
            <p>
              <span>
                <span className="font-semibold text-foreground">혜택 :</span> 초기 사용자 선정, 우선 안내, 피드백 참여 기회, 할인 혜택 등
              </span>
            </p>
          </div>
        </div>

        {/* Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-card/80 rounded-base p-8 md:p-10 border border-border" style={{ borderRadius: '12px' }}>
              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                  이메일 주소
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 rounded-base border border-border bg-background text-foreground placeholder:text-muted-foreground/50 shadow-[0_10px_28px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-muted-foreground/30 focus:border-muted-foreground/50 focus:shadow-[0_12px_34px_rgba(0,0,0,0.06)] transition-all duration-200"
                    style={{ borderRadius: '12px' }}
                    required
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="mb-6 flex items-start gap-3">
                <input
                  id="agree"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded-base border-border cursor-pointer"
                  style={{ accentColor: 'var(--surface-brand)', borderRadius: '12px' }}
                />
                <label htmlFor="agree" className="text-sm text-muted-foreground cursor-pointer whitespace-nowrap">
                  <button
                    type="button"
                    className="font-semibold text-foreground underline underline-offset-4"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsPrivacyOpen(true);
                    }}
                  >
                    개인정보 처리 방침
                  </button>
                  에 동의하며, 베타 테스트 관련 소식을 받기를 원합니다.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 surface-brand text-white rounded-base font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 surface-brand-hover"
                style={{ borderRadius: '12px' }}
              >
                {isLoading ? '신청 중...' : '신청하기'}
              </button>

              {statusToast ? (
                <div
                  className={`mt-3 rounded-base px-4 py-2 text-sm text-center animate-fade-in-up ${
                    statusToast.type === 'success'
                      ? 'bg-foreground text-background'
                      : 'bg-muted text-foreground border border-border'
                  }`}
                  style={{ borderRadius: '12px' }}
                >
                  {statusToast.message}
                </div>
              ) : null}


            </div>
          </form>
        ) : (
          /* Success Message */
          <div className="bg-muted/30 border border-muted/50 rounded-base p-8 md:p-10 text-center animate-fade-in-up" style={{ borderRadius: '12px' }}>
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-foreground" size={48} />
            </div>
            <h3 className="font-subheading text-foreground mb-2">신청이 완료되었습니다!</h3>
            <p className="text-muted-foreground mb-4">
              베타 테스트 관련 소식을 이메일로 받으실 수 있습니다.
            </p>
          </div>
        )}
      </div>
      <LegalDialog
        open={isPrivacyOpen}
        onOpenChange={setIsPrivacyOpen}
        type="privacy"
      />
    </section>
  );
}
