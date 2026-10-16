import React from 'react';
import { MapPin, ArrowRight, Calendar } from 'lucide-react';
import { Container } from '../common/Container';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../common/Button';
import { Project } from '../../types';
import { useModal } from '../../context/ModalContext';

interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  const { openEnquiry, openSiteVisit } = useModal();

  return (
    <section className="relative bg-forest text-white py-14 sm:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.heroImage}
          alt={project.name}
          className="w-full h-full object-cover object-center filter brightness-65"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest/90 to-forest/75" />
        <div className="absolute inset-0 bg-[radial-gradient(#C89A42_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: 'Projects', path: '/projects' },
                { label: project.name },
              ]}
            />
          </div>

          {/* Category Tag & Status */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light bg-forest-dark/80 px-2.5 py-1 rounded-xs border border-gold/30">
              {project.category}
            </span>
            <span className="text-[11px] font-medium tracking-wide text-white/90 bg-forest-light px-2.5 py-1 rounded-xs border border-white/20">
              Status: {project.status}
            </span>
          </div>

          {/* Project Name */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-2">
            {project.name}
          </h1>

          {/* Location with Pin */}
          <div className="flex items-center gap-2 text-sm sm:text-base text-gold-light mb-4">
            <MapPin className="w-4 h-4 text-gold shrink-0" />
            <span>{project.fullAddress}</span>
          </div>

          <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl mb-8 font-light">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => openEnquiry(project.name)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Enquire Now
            </Button>

            <Button
              variant="outline-white"
              size="lg"
              onClick={() => openSiteVisit(project.name)}
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Site Visit
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

