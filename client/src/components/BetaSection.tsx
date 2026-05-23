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
    <section id="beta" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-2xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="font-heading text-foreground mb-4">
            마인딧 코어 테스터 신청
          </h2>
          <div className="structural-line mx-auto w-24 mb-6" />
        </div>

        {/* Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm border border-border">
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
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-muted-foreground/30 focus:border-muted-foreground/50 transition-all duration-200"
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
                  className="mt-1 w-4 h-4 rounded-md border-border cursor-pointer accent-black"
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
                className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-muted-foreground transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              >
                {isLoading ? '신청 중...' : '신청하기'}
              </button>

              {statusToast ? (
                <div
                  className={`mt-3 rounded-lg px-4 py-2 text-sm text-center animate-fade-in-up ${
                    statusToast.type === 'success'
                      ? 'bg-foreground text-background'
                      : 'bg-muted text-foreground border border-border'
                  }`}
                >
                  {statusToast.message}
                </div>
              ) : null}


            </div>
          </form>
        ) : (
          /* Success Message */
          <div className="bg-muted/30 border border-muted/50 rounded-lg p-8 md:p-10 text-center animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-foreground" size={48} />
            </div>
            <h3 className="font-subheading text-foreground mb-2">신청이 완료되었습니다!</h3>
            <p className="text-muted-foreground mb-4">
              베타 테스트 관련 소식을 이메일로 받으실 수 있습니다.
            </p>
            <p className="text-sm text-muted-foreground/70">
              감사합니다! 곧 마인딧 코어와 함께하실 수 있기를 기대합니다.
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
