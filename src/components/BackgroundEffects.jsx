import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Paper millimeter grid */}
      <div className="absolute inset-0 paper-grid opacity-60" />

      {/* Red Notebook Margin line on left (Sujal Chaudhary signature touch) */}
      <div
        aria-hidden="true"
        className="fixed bottom-0 left-10 top-0 z-0 hidden w-[2px] bg-red/25 xl:block"
      />

      {/* Left doodle pencil indicator */}
      <div
        aria-hidden="true"
        className="fixed left-10 z-[250] hidden h-9 w-9 -translate-x-1/2 items-center justify-center font-mono text-lg transition-transform hover:scale-125 xl:flex text-red/80 select-none"
        style={{ top: '8vh' }}
        title="Field Notebook"
      >
        ✎
      </div>
    </div>
  );
}
