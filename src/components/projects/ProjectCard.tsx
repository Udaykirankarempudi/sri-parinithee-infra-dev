import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Layers, Ruler } from 'lucide-react';
import { Project } from '../../types';
import { Button } from '../common/Button';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'detailed';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    Ongoing: 'bg-emerald-700 text-emerald-50 border-emerald-500/30',
    Upcoming: 'bg-amber-700 text-amber-50 border-amber-500/30',
    'Pre-Launch': 'bg-rose-800 text-rose-50 border-rose-500/30',
  };

  return (
    <div className="bg-white rounded-[4px] border border-border-light overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-forest-dark">
        <img
          src={project.coverImage}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-xs border backdrop-blur-xs ${
              statusColors[project.status]
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Project Number Tag */}
        <div className="absolute bottom-3 left-4">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-light bg-forest-dark/80 px-2 py-0.5 rounded-xs">
            {project.projectNumber}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Title & Category */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-forest group-hover:text-gold transition-colors">
              <Link to={`/projects/${project.slug}`}>
                {project.name}
              </Link>
            </h3>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-text-muted mb-4">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>{project.location}</span>
          </div>

          {/* Specification Pills / Metrics */}
          <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-border-light/80 mb-4 text-xs">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-gold/80 shrink-0" />
              <div>
                <span className="text-text-muted block text-[10px]">Type</span>
                <span className="font-medium text-forest">{project.category}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Ruler className="w-3.5 h-3.5 text-gold/80 shrink-0" />
              <div>
                <span className="text-text-muted block text-[10px]">Total Area</span>
                <span className="font-medium text-forest">{project.totalArea}</span>
              </div>
            </div>

            <div className="col-span-2 text-text-muted text-[11px] pt-1">
              <span className="font-medium text-forest">Plot Sizes:</span> {project.plotSizes}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-text-muted line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* View Details Action */}
        <div className="pt-2">
          <Button
            to={`/projects/${project.slug}`}
            variant="outline-gold"
            size="sm"
            fullWidth
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

