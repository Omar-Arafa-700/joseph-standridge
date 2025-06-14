'use client';

import React from 'react';

export default function AnimatedBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black bg-opacity-90 backdrop-blur-md shadow-2xl animate-gradient" />
      <div className="relative z-10">
        {children}
      </div>
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 20s ease infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient {
            animation: none;
          }
        }
        @media (max-width: 640px) {
          .animate-gradient {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
} 