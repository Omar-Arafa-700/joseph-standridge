'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SkillIconProps {
  src: string;
  alt: string;
  name: string;
}

export default function SkillIcon({ src, alt, name }: SkillIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      <div className="relative">
        <Image
          src={src}
          width={40}
          height={40}
          alt={alt}
          className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {/* Tooltip */}
        <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {name}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </div>
    </div>
  );
} 