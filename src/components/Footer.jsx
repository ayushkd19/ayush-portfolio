import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-ink bg-paper py-12 mt-16 sm:mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dashed border-ink/20">
          {/* Logo & Subtext */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-1.5 font-display text-2xl font-bold text-ink">
              <span>Ayush Kumar</span>
              <span className="font-mono text-xs px-1.5 py-0.5 border border-ink bg-blue text-paper">
                AYUSH KD
              </span>
              <span className="text-blue">*</span>
            </div>
            <p className="font-mono text-xs text-muted mt-1 max-w-md">
              B.Tech Electronics & Communication Engineering · Jaypee Institute of Information Technology (JIIT)
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 border-2 border-ink bg-paper text-ink shadow-print-sm hover:bg-ink hover:text-paper transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 border-2 border-ink bg-paper text-ink shadow-print-sm hover:bg-ink hover:text-paper transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile"
              className="px-2.5 py-1.5 border-2 border-ink bg-paper text-ink font-mono text-xs font-bold shadow-print-sm hover:bg-ink hover:text-paper transition-all"
            >
              𝕏
            </a>
            <a
              href={personalInfo.socials.email}
              aria-label="Email"
              className="p-2 border-2 border-ink bg-paper text-ink shadow-print-sm hover:bg-ink hover:text-paper transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 border-2 border-ink bg-paper font-mono text-xs font-bold uppercase text-ink shadow-print-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all ml-1 sm:ml-2"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-muted gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Ayush Kumar (AYUSH KD). All rights reserved.</p>
          <p className="text-ink font-semibold">B.Tech ECE (2026 - 2030) · JIIT Noida</p>
        </div>
      </div>
    </footer>
  );
}
