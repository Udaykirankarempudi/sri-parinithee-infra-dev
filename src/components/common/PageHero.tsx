import React from 'react';
import { Container } from './Container';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  actions?: React.ReactNode;
  height?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  eyebrow,
  subtitle,
  breadcrumbs,
  backgroundImage = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
  actions,
  height = 'md',
  className = '',
}) => {
  const heightStyles = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  };

  return (
    <section className={`relative overflow-hidden bg-forest text-white ${heightStyles[height]} ${className}`}>
      {/* Background photographic texture with dark forest overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-30 filter brightness-90"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest/90 to-forest/80" />
        {/* Subtle decorative architectural grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#C89A42_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            {eyebrow && (
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-gold-light mb-2.5">
                {eyebrow}
              </span>
            )}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4 max-w-xl">
                {subtitle}
              </p>
            )}
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {actions && (
            <div className="shrink-0 flex flex-wrap items-center gap-3">
              {actions}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

