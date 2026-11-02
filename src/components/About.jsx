import React from 'react';
import { Cpu, Code2, Sparkles, Check, ArrowRight } from 'lucide-react';
import { aboutData, statistics, personalInfo } from '../data/portfolioData';

const categoryIcons = {
  'Electronics & Hardware': <Cpu className="w-5 h-5 text-blue" />,
  'Software Development': <Code2 className="w-5 h-5 text-ink" />,
  'Emerging Technologies': <Sparkles className="w-5 h-5 text-red" />,
};

export default function About() {
  return (
    <div id="about" className="scroll-mt-20">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 lg:px-8">
        <span className="inline-block bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper -rotate-2">
          Field notes
        </span>
        <div className="mt-5 flex items-baseline gap-6">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-ink">
            About <span className="marker whitespace-nowrap">the developer</span>
          </h2>
          <span
            aria-hidden="true"
            className="hidden flex-1 border-t-2 border-dashed border-ink/20 sm:block"
          />
        </div>
      </div>

      {/* Editable Statistics Cards Bar */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {statistics.map((stat) => (
            <div
              key={stat.label}
              className="p-4 sm:p-5 border-2 border-ink bg-paper shadow-print-sm hover:shadow-print transition-all duration-200"
            >
              <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-muted mb-2">
                <span>// {stat.number}</span>
                <span className="text-blue font-bold">STAT</span>
              </div>
              <div className="font-mono text-2xl sm:text-4xl font-black text-ink mb-1">
                {stat.value}
              </div>
              <h4 className="font-display text-xs sm:text-sm font-bold text-ink">{stat.label}</h4>
              <p className="font-mono text-[10px] sm:text-[11px] text-muted mt-1 leading-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Chapter Rows */}
      <section className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 py-12 lg:px-8">
        {/* Row 1: Introduction with User's Standing Portrait Photo */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="mx-auto w-full max-w-[280px] sm:max-w-sm lg:col-span-5">
            <figure className="border-2 border-ink bg-paper p-3 sm:p-4 shadow-print rotate-1">
              <div className="border-2 border-ink bg-paper overflow-hidden">
                <img
                  src={personalInfo.photos.portrait}
                  alt="Ayush Kumar at Campus"
                  className="aspect-[4/5] w-full object-cover object-center filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>
              <figcaption className="pt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted">
                {aboutData.introduction.figLabel}
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-block bg-blue px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper">
              {aboutData.introduction.badge}
            </span>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              {aboutData.introduction.title}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {aboutData.introduction.tag}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted text-sm sm:text-base">
              {aboutData.introduction.text}
            </p>
          </div>
        </div>

        {/* Row 2: Education (JIIT Noida) with User's Campus Photo (Alternating order) */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="mx-auto w-full max-w-[280px] sm:max-w-sm lg:col-span-5 lg:order-2">
            <figure className="border-2 border-ink bg-paper p-3 sm:p-4 shadow-print -rotate-1">
              <div className="border-2 border-ink bg-paper overflow-hidden">
                <img
                  src={personalInfo.photos.campus}
                  alt="Jaypee Institute of Information Technology (JIIT) Campus"
                  className="aspect-[4/5] w-full object-cover object-center filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>
              <figcaption className="pt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted flex items-center justify-between">
                <span>{aboutData.education.figLabel}</span>
                <span className="text-blue font-bold">2026–2030</span>
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <span className="inline-block bg-blue px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper">
              {aboutData.education.badge}
            </span>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              {aboutData.education.title}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {aboutData.education.tag}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted text-sm sm:text-base">
              {aboutData.education.text}
            </p>
          </div>
        </div>

        {/* Active Research & Technical Domains (Replaces Methodology) */}
        <div className="pt-8 border-t-2 border-dashed border-ink/20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-2">
            <div>
              <span className="inline-block bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper -rotate-1 mb-2">
                Active Research
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Technical Domains & Focus Areas
              </h3>
            </div>
            <span className="font-mono text-xs text-muted">
              Current Engineering Frontiers
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutData.activeResearch.map((domain) => (
              <div
                key={domain.category}
                className="group flex flex-col justify-between p-5 sm:p-6 border-2 border-ink bg-paper shadow-print-sm hover:shadow-print hover:translate-x-[2px] hover:translate-y-[-2px] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b-2 border-ink pb-3">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 border border-ink bg-paper">
                        {categoryIcons[domain.category] || <Cpu className="w-4 h-4 text-blue" />}
                      </span>
                      <h4 className="font-display text-lg font-bold text-ink group-hover:text-blue transition-colors">
                        {domain.category}
                      </h4>
                    </div>
                  </div>

                  <p className="font-mono text-[11px] text-muted mb-4">
                    {domain.description}
                  </p>

                  <ul className="space-y-2.5 font-mono text-xs text-ink">
                    {domain.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue font-bold text-sm leading-none mt-0.5">
                          ✳
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-dashed border-ink/20 flex items-center justify-between text-[10px] font-mono text-muted">
                  <span className="uppercase tracking-wider">{domain.badge}</span>
                  <span className="text-blue font-bold">ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
