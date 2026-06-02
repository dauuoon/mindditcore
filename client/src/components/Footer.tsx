import { useState } from 'react';
import { Mail } from 'lucide-react';
import LegalDialog from '@/components/LegalDialog';
import logo from '@/assets/logo_2.svg';

export default function Footer() {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-foreground text-background py-12 md:py-16 border-t border-foreground/20">
        <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Minddit Core 로고" className="h-10 w-auto invert" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('hero');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  홈
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('features');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  마인딧 코어
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('team');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  팀 소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('faq');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  자주 묻는 질문
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('beta');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  테스터 신청
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@minddit.com"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Mail size={16} />
                contact@minddit.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 mb-8" />

        {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="opacity-50">
              Minddit Core © 2026 All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                type="button"
                onClick={() => setLegalType('privacy')}
                className="opacity-75 hover:opacity-100 underline-offset-4 hover:underline transition-opacity duration-200"
              >
                개인정보 처리 방침
              </button>
              <button
                type="button"
                onClick={() => setLegalType('terms')}
                className="opacity-75 hover:opacity-100 underline-offset-4 hover:underline transition-opacity duration-200"
              >
                이용 약관
              </button>
            </div>
          </div>


        </div>
      </footer>
      <LegalDialog
        open={legalType !== null}
        onOpenChange={(open) => {
          if (!open) {
            setLegalType(null);
          }
        }}
        type={legalType ?? 'privacy'}
      />
    </>
  );
}
