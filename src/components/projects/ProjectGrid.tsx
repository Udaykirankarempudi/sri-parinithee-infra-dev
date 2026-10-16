import React from 'react';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, className = '' }) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12 bg-offwhite rounded-[4px] border border-border-light">
        <p className="text-forest font-serif text-lg mb-2">No projects found in this category.</p>
        <p className="text-xs text-text-muted">Please select another filter or check back soon.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className}`}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

