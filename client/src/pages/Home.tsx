import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import TeamSection from '@/components/TeamSection';
import FaqSection from '@/components/FaqSection';
import BetaSection from '@/components/BetaSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    const element = document.getElementById('beta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Handle hash-based navigation on page load
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    const onScroll = () => {
      setShowTopButton(window.scrollY > 350);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onNavClick={handleNavClick} />
      <main>
        <HeroSection onCTAClick={handleCTAClick} />
        <FeaturesSection />
        <AdvantagesSection />
        <TeamSection />
        <FaqSection />
        <BetaSection />
      </main>
      {showTopButton ? (
        <button
          onClick={handleTopClick}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black text-white shadow-lg hover:opacity-90 transition-all duration-200 active:scale-95"
          aria-label="맨 위로 이동"
        >
          <ArrowUp className="mx-auto" size={18} />
        </button>
      ) : null}
      <Footer />
    </div>
  );
}
