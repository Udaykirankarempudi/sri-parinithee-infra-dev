import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { ProjectNav } from '../components/projects/ProjectNav';
import { ProjectOverview } from '../components/projects/ProjectOverview';
import { MasterPlan } from '../components/projects/MasterPlan';
import { AmenitiesGrid } from '../components/projects/AmenitiesGrid';
import { LocationConnectivity } from '../components/projects/LocationConnectivity';
import { ProjectGallery } from '../components/projects/ProjectGallery';
import { ProjectDocuments } from '../components/projects/ProjectDocuments';
import { ProjectEnquiry } from '../components/projects/ProjectEnquiry';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Default to green-valley if no slug provided
  const currentSlug = slug || 'green-valley';
  const project = PROJECTS.find((p) => p.slug === currentSlug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="flex flex-col">
      {/* 1. Project Hero Banner */}
      <ProjectHero project={project} />

      {/* 2. In-page Sticky Project Navigation */}
      <ProjectNav />

      {/* 3. Project Overview & Specifications */}
      <ProjectOverview project={project} />

      {/* 4. Master Plan & Layout with Lightbox */}
      <MasterPlan project={project} />

      {/* 5. Amenities & Civic Infrastructure */}
      <AmenitiesGrid project={project} />

      {/* 6. Location & Connectivity with Map & Distances */}
      <LocationConnectivity project={project} />

      {/* 7. Image Gallery with Filtering & Lightbox */}
      <ProjectGallery project={project} />

      {/* 8. Approvals & Legal Documents */}
      <ProjectDocuments project={project} />

      {/* 9. Bottom Enquiry & Call CTA */}
      <ProjectEnquiry project={project} />
    </div>
  );
};

