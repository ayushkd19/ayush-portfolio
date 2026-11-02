import React, { useState } from 'react';
import { ExternalLink, Github, Maximize2, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="scroll-mt-20">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 lg:px-8">
        <span className="inline-block bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper -rotate-2">
          Build log
        </span>
        <div className="mt-5 flex items-baseline gap-6">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-ink">
            Shipped &amp; <span className="marker whitespace-nowrap">in the wild</span>
          </h2>
          <span
            aria-hidden="true"
            className="hidden flex-1 border-t-2 border-dashed border-ink/20 sm:block"
          />
        </div>
        <p className="mt-4 font-mono text-xs sm:text-sm text-muted max-w-xl">
          Featured projects spanning embedded hardware sensors, local AI runtimes, and campus community platforms.
        </p>
      </div>

      {/* Projects Showcase Grid (3 Core Projects) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between border-2 border-ink bg-paper p-5 sm:p-6 shadow-print hover:shadow-print-lg hover:translate-x-[2px] hover:translate-y-[-3px] transition-all duration-200"
            >
              <div>
                {/* Top Number, Badge & Status */}
                <div className="flex items-center justify-between mb-3 border-b-2 border-ink pb-2.5">
                  <span className="font-mono text-xl sm:text-2xl font-black text-blue">
                    {project.number}
                  </span>

                  <span className="px-2 py-0.5 border border-ink bg-blue text-paper font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                    {project.statusBadge}
                  </span>
                </div>

                {/* Category & Action Trigger */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-muted uppercase font-bold">
                    {project.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 font-mono text-[10px] text-blue hover:text-ink font-bold uppercase transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="font-display text-xl sm:text-2xl font-extrabold text-ink group-hover:text-blue transition-colors cursor-pointer mb-2.5"
                >
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="font-mono text-xs text-muted leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Tech Stack Pills Box */}
                <div className="p-3 border-2 border-dashed border-ink/20 bg-ink/[0.02] mb-4 space-y-1.5 font-mono text-[11px]">
                  <div className="text-[10px] uppercase text-muted font-bold tracking-wider mb-1">
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 border border-ink/30 bg-paper text-ink font-mono text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t-2 border-ink flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="font-mono text-xs font-bold uppercase tracking-wider text-blue hover:text-ink flex items-center gap-1 group/btn"
                >
                  <span>Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-ink bg-paper text-ink hover:bg-ink hover:text-paper shadow-print-sm transition-all"
                    aria-label="View Source on GitHub"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-ink bg-blue text-paper shadow-print-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                    aria-label="Live Demo / Link"
                    title="Live Demo / Info"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Specs Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
