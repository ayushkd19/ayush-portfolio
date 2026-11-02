import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming' },
    { id: 'hardware', name: 'Hardware & IoT' },
    { id: 'tools', name: 'Developer Tools' },
    { id: 'design', name: 'Design & CAD' },
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === activeCategory);

  return (
    <div id="skills" className="scroll-mt-20">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-6 pt-20 lg:px-8">
        <span className="inline-block bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper -rotate-2">
          Toolbox
        </span>
        <div className="mt-5 flex items-baseline gap-6">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-ink">
            Tools I reach <span className="marker whitespace-nowrap">for daily</span>
          </h2>
          <span
            aria-hidden="true"
            className="hidden flex-1 border-t-2 border-dashed border-ink/20 sm:block"
          />
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`border-2 border-ink px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                  isActive
                    ? 'bg-blue text-paper shadow-print-sm translate-x-[1px] translate-y-[1px]'
                    : 'bg-paper text-ink hover:bg-ink hover:text-paper shadow-print-sm active:shadow-none'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grids */}
      <section className="mx-auto max-w-6xl space-y-12 px-6 py-10 lg:px-8">
        {filteredCategories.map((category) => (
          <div key={category.id} className="relative">
            {/* Category header */}
            <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold uppercase text-blue">
                  // {category.badge}
                </span>
                <h3 className="font-display text-xl font-bold text-ink">
                  {category.name}
                </h3>
              </div>
              <span className="font-mono text-xs text-muted hidden sm:inline">
                {category.description}
              </span>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex flex-col justify-between p-4 border-2 border-ink bg-paper shadow-print-sm hover:shadow-print hover:translate-x-[2px] hover:translate-y-[-2px] transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-display text-lg font-bold text-ink group-hover:text-blue transition-colors">
                        {skill.name}
                      </h4>
                      <span className="px-2 py-0.5 border border-ink bg-paper text-[10px] font-mono uppercase font-bold text-ink">
                        {skill.level}
                      </span>
                    </div>

                    <span className="inline-block font-mono text-[11px] text-blue font-semibold uppercase tracking-wider mb-2">
                      {skill.tag}
                    </span>

                    <p className="font-mono text-xs text-muted leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-dashed border-ink/20 flex items-center justify-between text-[10px] font-mono text-muted">
                    <span>ACTIVE USE</span>
                    <span className="text-ink font-bold">100%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
