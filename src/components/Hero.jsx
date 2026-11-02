import React from 'react';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo, marqueeItems } from '../data/portfolioData';
import FloatingTechStack from './FloatingTechStack';

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-between pt-20">
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-10 sm:gap-14 px-4 sm:px-6 py-10 sm:py-14 lg:grid-cols-12 lg:px-8">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7">
          {/* Top Institution & Degree Label */}
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted mb-4 flex-wrap">
            <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
            <span>B.Tech ECE (2026 - 2030) · Jaypee Institute of Information Technology</span>
          </div>

          {/* Highlighted Name Line (Centerpiece) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5">
            <span className="inline-block bg-ink text-paper px-4 sm:px-5 py-1.5 sm:py-2 font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight border-2 border-ink shadow-print-blue -rotate-1">
              Ayush Kumar
            </span>
            <span className="inline-block bg-blue text-paper px-3 py-1 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-ink shadow-print-sm rotate-1">
              AYUSH KD
            </span>
            <span className="inline-block px-2.5 py-1 border border-ink/40 bg-paper text-xs font-mono uppercase tracking-widest text-muted">
              JIIT Noida · ECE
            </span>
          </div>

          {/* Developer Title */}
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-ink mb-6">
            Electronics & Communication Engineer{' '}
            <span className="block text-lg sm:text-2xl lg:text-3xl font-medium text-muted mt-2">
              Building embedded hardware, local AI systems & campus software.
            </span>
          </h1>

          {/* Short Description */}
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-muted mb-8">
            An Electronics & Communication Engineering undergraduate at <strong>JIIT Noida</strong> (2026–2030) passionate about software engineering, blockchain technology, AI, automation, IoT, and emerging technologies.
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#projects');
              }}
              className="inline-flex items-center gap-2.5 border-2 border-ink bg-blue px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-paper shadow-print transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            >
              <span>See the work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="link-pen font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink hover:text-blue py-2"
            >
              Get in touch →
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted hidden sm:inline mr-1">
              Channels:
            </span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-ink bg-paper text-ink shadow-print-sm hover:bg-ink hover:text-paper transition-all font-mono text-xs font-semibold"
            >
              <Github className="w-3.5 h-3.5" />
              <span>ayushkd19</span>
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-ink bg-paper text-ink shadow-print-sm hover:bg-ink hover:text-paper transition-all font-mono text-xs font-semibold"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile"
              className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-ink bg-paper text-ink shadow-print-sm hover:bg-ink hover:text-paper transition-all font-mono text-xs font-semibold"
            >
              <span>𝕏 @ayushkd19</span>
            </a>
            <a
              href={personalInfo.socials.email}
              aria-label="Email"
              className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-ink bg-paper text-ink shadow-print-sm hover:bg-ink hover:text-paper transition-all font-mono text-xs font-semibold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Real Photo in Polaroid Frame */}
        <figure className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:col-span-5">
          {/* Arrow annotation pointing to card */}
          <div
            aria-hidden="true"
            className="absolute -left-28 top-4 hidden w-24 lg:block"
          >
            <p className="-rotate-6 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-blue">
              that's me
            </p>
            <svg viewBox="0 0 100 48" className="mt-1 w-20">
              <path
                d="M6,8 C18,38 55,44 88,30 M78,26 L90,29 L84,39"
                fill="none"
                className="stroke-blue"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* The Polaroid Card with User's Real Photo */}
          <div className="relative border-2 border-ink bg-paper p-3 sm:p-4 shadow-print rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Top Tape Strips */}
            <span
              aria-hidden="true"
              className="absolute -top-3 left-6 sm:left-8 h-6 w-16 sm:w-20 -rotate-6 border border-ink/15 bg-ink/10 backdrop-blur-[1px]"
            />
            <span
              aria-hidden="true"
              className="absolute -top-3 right-6 sm:right-8 h-6 w-16 sm:w-20 rotate-6 border border-ink/15 bg-ink/10 backdrop-blur-[1px]"
            />

            {/* Real User Photo */}
            <div className="border-2 border-ink bg-paper overflow-hidden">
              <img
                src={personalInfo.photos.hero}
                alt="Ayush Kumar (AYUSH KD)"
                className="aspect-[4/5] w-full object-cover object-top filter contrast-[1.03]"
                loading="eager"
              />
            </div>

            {/* Figcaption */}
            <figcaption className="flex items-center justify-between gap-2 pt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted">
              <span className="font-semibold">fig. 01 — the developer</span>
              <span className="shrink-0 text-blue font-bold">open to work</span>
            </figcaption>
          </div>
        </figure>
      </div>

      {/* Marquee Ticker Ribbon */}
      <div className="border-y-2 border-ink bg-paper py-3 mt-4">
        <div className="group flex overflow-hidden [gap:2.5rem] flex-row p-0">
          <div className="flex shrink-0 justify-around gap-8 animate-marquee flex-row group-hover:[animation-play-state:paused]">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-8 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink whitespace-nowrap"
              >
                {item}
                <span className="text-blue font-bold text-sm" aria-hidden="true">
                  ✳
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Translucent Tech Stack (Python, C, AutoCAD, Photoshop, Git) */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <FloatingTechStack />
      </div>
    </section>
  );
}
