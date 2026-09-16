import React from 'react';

export const LeafDecorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Leaf 1 - Top Left */}
      <div className="absolute top-12 left-6 text-leaf-500/20 animate-leaf-1">
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z" />
        </svg>
      </div>

      {/* Floating Leaf 2 - Top Right */}
      <div className="absolute top-24 right-10 text-leaf-400/15 animate-leaf-2">
        <svg className="w-24 h-24 transform rotate-45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z" />
        </svg>
      </div>

      {/* Floating Leaf 3 - Bottom Right */}
      <div className="absolute bottom-10 right-20 text-leaf-500/20 animate-leaf-3">
        <svg className="w-20 h-20 transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z" />
        </svg>
      </div>

      {/* Radial Glow Top Right */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-leaf-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Radial Glow Bottom Left */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default LeafDecorations;
