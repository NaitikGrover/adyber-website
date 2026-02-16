import React, { useState, useEffect } from 'react';
import { Menu, X, Timer } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

const DURATION_DAYS = 3;
const DURATION_HOURS = 11;
const DURATION_MINUTES = 0;
const DURATION_SECONDS = 24;

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize timer state from localStorage to ensure persistence without flash
  const [timeLeft, setTimeLeft] = useState(() => {
    if (typeof window === 'undefined') {
      return { days: DURATION_DAYS, hours: DURATION_HOURS, minutes: DURATION_MINUTES, seconds: DURATION_SECONDS };
    }

    const DURATION_MS = (DURATION_DAYS * 24 * 60 * 60 * 1000) +
      (DURATION_HOURS * 60 * 60 * 1000) +
      (DURATION_MINUTES * 60 * 1000) +
      (DURATION_SECONDS * 1000);
    const STORAGE_KEY = 'adyber_offer_end_time';

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      if (stored) {
        const target = parseInt(stored, 10);
        // If target is in the future, calculate remaining time
        if (target > now) {
          const diff = target - now;
          return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((diff % (1000 * 60)) / 1000)
          };
        }
      }

      // If no stored time or expired, set new target
      const newTarget = now + DURATION_MS;
      localStorage.setItem(STORAGE_KEY, newTarget.toString());
      return { days: DURATION_DAYS, hours: DURATION_HOURS, minutes: DURATION_MINUTES, seconds: DURATION_SECONDS };
    } catch (error) {
      console.error('Timer initialization error:', error);
      return { days: DURATION_DAYS, hours: DURATION_HOURS, minutes: DURATION_MINUTES, seconds: DURATION_SECONDS };
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timer Tick Logic
  useEffect(() => {
    const DURATION_MS = (DURATION_DAYS * 24 * 60 * 60 * 1000) +
      (DURATION_HOURS * 60 * 60 * 1000) +
      (DURATION_MINUTES * 60 * 1000) +
      (DURATION_SECONDS * 1000);
    const STORAGE_KEY = 'adyber_offer_end_time';

    const timer = setInterval(() => {
      const now = Date.now();
      const stored = localStorage.getItem(STORAGE_KEY);

      let target = stored ? parseInt(stored, 10) : 0;

      // If missing or expired (and we need to loop), reset
      if (!target || target <= now) {
        target = now + DURATION_MS;
        localStorage.setItem(STORAGE_KEY, target.toString());
      }

      const diff = target - now;

      // Calculate display values
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => String(val).padStart(2, '0');

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onNavigate('home', sectionId.replace('#', ''));
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    onNavigate('bookings');
    setIsMobileMenuOpen(false);
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Flash Offer Bar */}
      <div className="bg-[#050505] border-b border-white/10 text-white h-12 flex items-center justify-center relative z-50 overflow-hidden">
        {/* Subtle accent gradient on top */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-lime/30 to-transparent" />

        {/* Background glow */}
        <div className="absolute inset-0 bg-brand-lime/[0.02] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">

          {/* Centered Content Container */}
          <div className="flex items-center gap-3 sm:gap-6 overflow-hidden whitespace-nowrap">

            {/* Label */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-lime animate-pulse" />
              <span className="text-brand-lime font-bold text-xs sm:text-sm tracking-wide">
                FLASH OFFER
              </span>
            </div>

            {/* Divider */}
            <span className="hidden sm:inline w-px h-3 bg-white/20"></span>

            {/* Message */}
            <span className="text-gray-400 text-xs sm:text-sm hidden md:inline">
              Transform your brand for a limited time price.
            </span>

            {/* Divider */}
            <span className="hidden md:inline w-px h-3 bg-white/20"></span>

            {/* Timer */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-zinc-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase hidden sm:inline">
                ENDS IN:
              </span>
              <div className="flex items-center gap-1 font-mono text-xs sm:text-sm font-bold text-brand-lime">
                <span>{timeLeft.days}d</span>
                <span className="text-zinc-600 px-0.5">:</span>
                <span>{formatTime(timeLeft.hours)}h</span>
                <span className="text-zinc-600 px-0.5">:</span>
                <span>{formatTime(timeLeft.minutes)}m</span>
                <span className="text-zinc-600 px-0.5">:</span>
                <span>{formatTime(timeLeft.seconds)}s</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`w-full transition-all duration-300 border-b ${isScrolled
          ? 'bg-black/80 backdrop-blur-md border-white/10'
          : 'bg-transparent border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">
            {/* Logo - Left */}
            <div className="flex-shrink-0 z-20">
              <button
                onClick={() => onNavigate('home')}
                className="text-2xl font-bold tracking-tighter text-white transition-colors"
              >
                Adyber<span className="text-brand-lime">.</span>
              </button>
            </div>

            {/* Nav Links - Center Absolute */}
            <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-300 hover:text-brand-lime transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side - FAQ & Button */}
            <div className="hidden md:flex items-center gap-8 z-20">
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, '#faq')}
                className="text-sm font-medium text-gray-300 hover:text-brand-lime transition-colors"
              >
                FAQ
              </a>
              <Button variant="primary" className="h-10 px-5" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden z-20">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-brand-lime p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 relative z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-brand-lime hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, '#faq')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-brand-lime hover:bg-white/5"
              >
                FAQ
              </a>
              <div className="pt-4 pb-2 px-3">
                <Button fullWidth onClick={handleGetStarted}>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;