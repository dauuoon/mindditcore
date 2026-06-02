import { useEffect, useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import LegalDialog from '@/components/LegalDialog';
import userIcon from '@/assets/user.png';
import giftIcon from '@/assets/gift.png';

const betaGradientLayers = [
  {
    name: 'red-1',
    color: 'var(--red200)',
    gradient: 'linear-gradient(to top, var(--red200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
  },
  {
    name: 'yellow-1',
    color: 'var(--yellow200)',
    gradient: 'linear-gradient(to top, var(--yellow200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
  },
  {
    name: 'green-1',
    color: 'var(--green200)',
    gradient: 'linear-gradient(to top, var(--green200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
  },
  {
    name: 'teal-1',
    color: 'var(--teal200)',
    gradient: 'linear-gradient(to top, var(--teal200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
  },
  {
    name: 'blue-1',
    color: 'var(--blue200)',
    gradient: 'linear-gradient(to top, var(--blue200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
  },
  {
    name: 'teal-2',
    color: 'var(--teal200)',
    gradient: 'linear-gradient(to top, var(--teal200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
  },
  {
    name: 'green-2',
    color: 'var(--green200)',
    gradient: 'linear-gradient(to top, var(--green200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
  },
  {
    name: 'yellow-2',
    color: 'var(--yellow200)',
    gradient: 'linear-gradient(to top, var(--yellow200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
  },
  {
    name: 'red-2',
    color: 'var(--red200)',
    gradient: 'linear-gradient(to top, var(--red200) 0%, rgba(255, 255, 255, 0.92) 52%, #ffffff 100%)',
  },
] as const;

const GOOGLE_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbws7pMdF0M11KzVdc7FSiqCzAc1OV_M5HrlpyCX8p7VKj3mrE64R4zCjWx2L1N5wHlJ3A/exec';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function BetaSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [statusToast, setStatusToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [activeGradientIndex, setActiveGradientIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveGradientIndex((currentIndex) => (currentIndex + 1) % betaGradientLayers.length);
    }, 6500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const showStatusToast = (type: 'success' | 'error', message: string) => {
    setStatusToast({ type, message });
    window.setTimeout(() => {
      setStatusToast(null);
    }, 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      showStatusToast('error', '이메일을 입력해주세요.');
      return;
    }

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      showStatusToast('error', '올바른 이메일 형식으로 입력해주세요.');
      return;
    }

    if (!agreed) {
      showStatusToast('error', '이메일과 약관 동의가 필요합니다.');
      return;
    }

    setIsLoading(true);

    try {
      const payload = new URLSearchParams({
        email: normalizedEmail,
      });

      const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });

      // no-cors mode returns an opaque response; reaching here means the request was sent.
      if (!response) {
        throw new Error('request_failed');
      }

      setIsSubmitted(true);
      setEmail('');
      setAgreed(false);
      showStatusToast('success', '베타 테스트 신청이 완료되었습니다!');

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch {
      showStatusToast('error', '신청 전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="beta"
      className="py-20 md:py-32 relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_52%,#ffffff_100%)]" />
        {betaGradientLayers.map((layer, index) => (
          <div
            key={layer.name}
            className={`absolute inset-0 transition-[opacity,transform] duration-[2400ms] ease-out ${
              index === activeGradientIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            <div className="absolute inset-0" style={{ backgroundImage: layer.gradient }} />
            <div
              className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-70"
              style={{ backgroundColor: layer.color }}
            />
          </div>
        ))}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 container max-w-[60rem]">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="font-heading text-foreground mb-2">
            테스터 신청
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            마인딧 코어를 가장 먼저 경험할 분들을 찾고 있습니다.
          </p>
          <div className="mt-14 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-start gap-4 py-3 justify-center">
                <img src={userIcon} alt="대상 아이콘" className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-2">대상</h3>
                  <p className="text-foreground/80 text-xs md:text-sm leading-snug">
                    정신건강 프로그램 운영하는
                    <br />
                    전문가 · 실무자 · 기관 담당자 등
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-3 mt-8 md:mt-0 border-t md:border-t-0 md:border-l border-border/60 justify-center">
                <img src={giftIcon} alt="혜택 아이콘" className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-2">혜택</h3>
                  <p className="text-foreground/80 text-xs md:text-sm leading-snug">
                    초기 사용자 선정 · 우선 안내
                    <br />
                    피드백 참여 기회 · 할인 혜택 등
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-card rounded-base p-8 md:p-10" style={{ borderRadius: '12px' }}>
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
                    className="w-full pl-12 pr-4 py-3 rounded-base bg-[#f0f0f0] text-foreground placeholder:text-muted-foreground/50 shadow-[0_10px_28px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-muted-foreground/30 focus:shadow-[0_12px_34px_rgba(0,0,0,0.06)] transition-all duration-200"
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
                  className="mt-0.5 w-5 h-5 rounded-[4px] border border-border cursor-pointer appearance-none bg-background checked:bg-[var(--surface-brand)] checked:border-[var(--surface-brand)] relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-[11px] checked:after:font-bold checked:after:text-white"
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
                    개인정보 처리방침
                  </button>
                  에 동의합니다.
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
