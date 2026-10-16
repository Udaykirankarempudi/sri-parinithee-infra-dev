import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { Container } from '../components/common/Container';
import { ProjectFilters, type FilterOption } from '../components/projects/ProjectFilters';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { Button } from '../components/common/Button';
import { FinalCta } from '../components/home/FinalCta';
import { PROJECTS } from '../data/projects';
import { useModal } from '../context/ModalContext';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterOption>('All');
  const { openEnquiry } = useModal();

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.status === filter;
  });

  const counts: Record<FilterOption, number> = {
    All: PROJECTS.length,
    Ongoing: PROJECTS.filter((p) => p.status === 'Ongoing').length,
    Upcoming: PROJECTS.filter((p) => p.status === 'Upcoming').length,
    'Pre-Launch': PROJECTS.filter((p) => p.status === 'Pre-Launch').length,
  };

  return (
    <div className="flex flex-col">
      {/* Page Hero Banner matching mockup with right CTA button */}
      <PageHero
        title="Our Projects"
        eyebrow="PREMIUM PORTFOLIO"
        subtitle="Discover our premium plotted developments in prime locations with modern infrastructure and excellent connectivity."
        breadcrumbs={[{ label: 'Projects' }]}
        backgroundImage="/assets/images/hero-bg.jpg"
        actions={
          <Button
            variant="gold"
            size="md"
            onClick={() => openEnquiry()}
          >
            Enquire About Projects
          </Button>
        }
      />

      {/* Main Listing Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          {/* Functional Filters */}
          <ProjectFilters
            currentFilter={filter}
            onFilterChange={(f) => setFilter(f)}
            counts={counts}
          />

          {/* Project Cards Grid */}
          <ProjectGrid projects={filteredProjects} />

          {/* Verification Disclaimer */}
          <div className="mt-16 p-4 rounded-[4px] bg-offwhite border border-border-light text-center max-w-2xl mx-auto">
            <p className="text-xs text-text-muted leading-relaxed">
              * Note: Project locations, plot counts, layout extents, and timeline milestones shown above are illustrative development benchmarks. Detailed layout sanctions and approved RERA files are provided upon enquiry.
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
};
