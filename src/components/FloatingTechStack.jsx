import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Binary, PenTool, Image as ImageIcon, GitBranch } from 'lucide-react';
import { heroFloatingTech } from '../data/portfolioData';

const getTechIcon = (type) => {
  switch (type) {
    case 'terminal':
      return <Terminal className="w-5 h-5 text-blue" />;
    case 'binary':
      return <Binary className="w-5 h-5 text-ink" />;
    case 'pen-tool':
      return <PenTool className="w-5 h-5 text-red" />;
    case 'image':
      return <ImageIcon className="w-5 h-5 text-blue" />;
    case 'git-branch':
      return <GitBranch className="w-5 h-5 text-ink" />;
    default:
      return <Terminal className="w-5 h-5 text-blue" />;
  }
};

export default function FloatingTechStack() {
  return (
    <div className="w-full mt-12 pt-8 border-t-2 border-dashed border-ink/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block bg-ink text-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] -rotate-1">
            Core Toolkit
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink">
            Featured Daily Hardware & Software Tools
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted">
          Python · C · AutoCAD · Photoshop · Git
        </span>
      </div>

      {/* Floating Translucent Paper Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {heroFloatingTech.map((tech, idx) => {
          const floatDelay = idx * 0.25;
          const duration = 4.5 + (idx % 3) * 0.5;

          return (
            <motion.div
              key={tech.name}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: floatDelay,
              }}
              className="group relative flex flex-col justify-between p-4 border-2 border-ink bg-paper/95 shadow-print-sm hover:shadow-print hover:translate-x-[1px] hover:translate-y-[-3px] transition-all duration-200 cursor-pointer"
            >
              {/* Corner tape illusion on first and last card */}
              {(idx === 0 || idx === 4) && (
                <span
                  aria-hidden="true"
                  className="absolute -top-2 right-4 h-4 w-12 rotate-3 border border-ink/15 bg-ink/10 backdrop-blur-[1px]"
                />
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 border-2 border-ink bg-paper group-hover:bg-blue group-hover:text-paper transition-colors">
                    {getTechIcon(tech.iconType)}
                  </div>
                  <span className={`px-1.5 py-0.5 font-mono text-[10px] font-bold border border-ink uppercase ${tech.accent}`}>
                    {tech.symbol}
                  </span>
                </div>

                <h4 className="font-display text-base font-bold text-ink group-hover:text-blue transition-colors">
                  {tech.name}
                </h4>
                <p className="font-mono text-[11px] text-muted uppercase tracking-wider mt-0.5">
                  {tech.category}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-dashed border-ink/20">
                <span className="font-mono text-[10px] text-muted block truncate">
                  {tech.tagline}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
