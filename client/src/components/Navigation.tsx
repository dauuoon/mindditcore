import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.svg';

interface NavigationProps {
  onNavClick: (sectionId: string) => void;
}

export default function Navigation({ onNavClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '홈', id: 'hero' },
    { label: '핵심 기능', id: 'features' },
    { label: '팀 소개', id: 'team' },
    { label: '자주 묻는 질문', id: 'faq' },
  ];

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/98 backdrop-blur-md border-b border-border/50 shadow-sm'
        : 'bg-white/80 backdrop-blur-sm border-b border-border/30'
    }`}>
      <div className={`container flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'h-16 md:h-18' : 'h-16 md:h-20'
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('hero')}>
          <img src={logo} alt="Minddit Core 로고" className="h-6 md:h-7 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('beta')}
            className="px-4 py-2 surface-brand text-white rounded-base font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 surface-brand-hover"
            style={{ borderRadius: '12px' }}
          >
            테스터 신청하기
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-base transition-all duration-200 active:scale-95"
          style={{ borderRadius: '12px' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white animate-dissolve">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-base transition-all duration-200 hover:translate-x-1"
              style={{ borderRadius: '12px' }}
            >
              {item.label}
            </button>
            ))}
            <button
              onClick={() => handleNavClick('beta')}
              className="w-full px-4 py-2 surface-brand text-white rounded-base font-medium transition-all duration-200 hover:shadow-lg active:scale-95 surface-brand-hover"
              style={{ borderRadius: '12px' }}
            >
              테스터 신청하기
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
