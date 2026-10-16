import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '', size = 'md' }) => {
  const isDark = variant === 'dark';

  const heights = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center group focus:outline-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <div
        className={`relative flex items-center justify-center shrink-0 ${heights[size]} ${
          isDark
            ? 'bg-white/95 rounded-[3px] px-2.5 py-1 shadow-sm'
            : ''
        }`}
      >
        <img
          src="/logo-icon.png"
          alt="Sri Parinithee Infra Developers Pvt. Ltd."
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  );
};
