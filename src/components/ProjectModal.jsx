import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Cpu, Layers, Activity, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card with Neo-brutalist / Paper styling */}
      <div className="relative w-full max-w-3xl my-8 p-6 sm:p-8 border-2 border-ink bg-paper shadow-print-lg z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 border-2 border-ink bg-paper hover:bg-ink hover:text-paper transition-colors shadow-print-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
            <span className="px-2.5 py-0.5 border border-ink bg-blue text-paper font-bold uppercase tracking-wider">
              {project.badge}
            </span>
            <span className="text-muted uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-2">
            {project.title}
          </h3>
          <p className="font-mono text-xs sm:text-sm text-blue font-semibold">
            {project.tagline}
          </p>
        </div>

        {/* Summary */}
        <div className="mb-6 p-4 border-2 border-ink/20 bg-ink/[0.02]">
          <p className="font-mono text-xs sm:text-sm text-ink leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* System Architecture Specifications */}
        <div className="mb-6">
          <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink font-bold mb-3">
            <Cpu className="w-4 h-4 text-blue" />
            <span>Architecture & Engineering Specs</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 border-2 border-ink bg-paper shadow-print-sm">
              <span className="text-[10px] font-mono text-muted uppercase block mb-1">
                Hardware
              </span>
              <p className="font-mono text-xs text-ink font-semibold">
                {project.architecture.hardware}
              </p>
            </div>

            <div className="p-3 border-2 border-ink bg-paper shadow-print-sm">
              <span className="text-[10px] font-mono text-muted uppercase block mb-1">
                Software Stack
              </span>
              <p className="font-mono text-xs text-ink font-semibold">
                {project.architecture.software}
              </p>
            </div>

            <div className="p-3 border-2 border-ink bg-paper shadow-print-sm">
              <span className="text-[10px] font-mono text-muted uppercase block mb-1">
                Protocols
              </span>
              <p className="font-mono text-xs text-ink font-semibold">
                {project.architecture.protocols}
              </p>
            </div>
          </div>
        </div>

        {/* Benchmarked Metrics */}
        {project.stats && (
          <div className="mb-6 p-4 border-2 border-ink bg-blue/5">
            <div className="flex items-center gap-2 font-mono text-xs text-blue font-bold uppercase mb-3">
              <Activity className="w-4 h-4" />
              <span>Benchmarked Lab Metrics</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {Object.entries(project.stats).map(([k, val]) => (
                <div key={k} className="p-2 border border-ink bg-paper">
                  <span className="text-base font-bold font-mono text-ink block">
                    {val}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-muted tracking-wider">
                    {k}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-3">
            Key Technical Highlights:
          </h4>
          <ul className="space-y-2 font-mono text-xs text-muted">
            {project.keyHighlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span className="text-ink">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 border border-ink bg-paper font-mono text-[10px] uppercase text-muted"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t-2 border-ink">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-ink bg-paper px-4 py-2 font-mono text-xs uppercase font-bold text-ink hover:bg-ink hover:text-paper shadow-print-sm transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-ink bg-blue px-5 py-2 font-mono text-xs uppercase font-bold text-paper shadow-print transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
