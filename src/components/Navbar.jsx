import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const y =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(y > 10);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    document.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      document.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className="fixed inset-x-0 top-0 z-[100] transition-colors duration-150"
      style={{
        backgroundColor: isScrolled ? '#1a1c23' : '#f7f6f1',
        color: isScrolled ? '#f7f6f1' : '#1a1c23',
        borderBottom: '2px solid #1a1c23',
        boxShadow: isScrolled
          ? '0 4px 12px rgba(0, 0, 0, 0.25)'
          : '0 2px 4px rgba(26, 28, 35, 0.05)',
        opacity: 1,
      }}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#home');
          }}
          className="group flex items-center gap-1.5 font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors"
        >
          <span style={{ color: isScrolled ? '#f7f6f1' : '#1a1c23' }}>Ayush</span>
          <span className="font-mono text-xs px-1.5 py-0.5 border border-ink bg-blue text-paper rounded font-semibold shadow-print-sm">
            KD
          </span>
          <span
            className="inline-block cursor-pointer text-blue transition-transform duration-200 group-hover:rotate-45 group-hover:scale-125"
            aria-hidden="true"
          >
            *
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-6 sm:gap-7 md:flex">
          {/* Sound Effect Toggle Aesthetic */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            title={soundEnabled ? 'Sound active' : 'Click for sound toggle'}
            className={`flex h-8 w-8 items-center justify-center border-2 transition-all ${
              soundEnabled
                ? 'bg-blue text-paper border-paper/40 shadow-print-sm translate-x-[1px] translate-y-[1px]'
                : isScrolled
                ? 'border-paper/40 bg-[#1a1c23] text-paper hover:bg-paper hover:text-ink'
                : 'border-ink bg-paper text-ink hover:bg-blue hover:text-paper'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              style={{
                color: isScrolled ? 'rgba(247, 246, 241, 0.9)' : '#1a1c23',
              }}
              className="highlight-hover px-1 font-mono text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:text-blue"
            >
              {link.name}
            </a>
          ))}

          {/* Connect CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="inline-flex items-center gap-1.5 border-2 border-ink bg-blue px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-paper shadow-print transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`relative flex h-10 w-10 items-center justify-center border-2 shadow-print-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden ${
            isScrolled ? 'border-paper/40 bg-[#1a1c23] text-paper' : 'border-ink bg-paper text-ink'
          }`}
          aria-expanded={mobileMenuOpen}
          aria-label="Open menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="border-b-2 px-6 py-5 md:hidden space-y-3"
          style={{
            backgroundColor: isScrolled ? '#1a1c23' : '#f7f6f1',
            color: isScrolled ? '#f7f6f1' : '#1a1c23',
            borderBottomColor: '#1a1c23',
            opacity: 1,
          }}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollTo(link.href)}
                className={`w-full text-left font-mono text-xs font-bold uppercase tracking-[0.2em] py-2.5 px-3 border-2 transition-colors ${
                  isScrolled
                    ? 'border-transparent hover:border-paper/40 hover:bg-paper/10 text-paper'
                    : 'border-transparent hover:border-ink hover:bg-ink hover:text-paper text-ink'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className={`pt-3 border-t-2 ${isScrolled ? 'border-paper/20' : 'border-ink/15'}`}>
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="w-full flex items-center justify-center gap-2 border-2 border-ink bg-blue py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-paper shadow-print active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
