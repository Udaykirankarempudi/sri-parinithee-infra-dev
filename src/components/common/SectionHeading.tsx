import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col mb-10 md:mb-14 max-w-3xl ${alignStyles[align]} ${className}`}>
      {eyebrow && (
        <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-2.5">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm md:text-base leading-relaxed ${
            isDark ? 'text-white/75' : 'text-text-muted'
          } ${align === 'center' ? 'max-w-2xl' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

