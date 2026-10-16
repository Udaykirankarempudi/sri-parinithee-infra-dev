import React, { useState } from 'react';
import { Maximize2, ZoomIn } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Lightbox } from '../common/Lightbox';
import { Project } from '../../types';

interface MasterPlanProps {
  project: Project;
}

export const MasterPlan: React.FC<MasterPlanProps> = ({ project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="master-plan" className="py-14 sm:py-20 bg-offwhite border-y border-border-light">
      <Container>
        <SectionHeading
          eyebrow="ENGINEERED LAYOUT"
          title="Master Plan & Layout"
          subtitle="Explore the meticulously planned road network, plot zoning, green parks, and community infrastructure."
        />

        <div className="relative max-w-5xl mx-auto rounded-[4px] border border-border-light bg-white p-2 sm:p-4 shadow-lg group">
          {/* Master Plan Canvas Container */}
          <div className="relative overflow-hidden rounded-[3px] bg-[#faf8f5] flex items-center justify-center cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
            <img
              src={project.masterPlanImage}
              alt={`${project.name} Master Plan Layout`}
              className="w-full h-auto max-h-[550px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="bg-forest-dark/90 text-white text-xs font-medium px-4 py-2 rounded shadow-lg flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-gold" /> Click to view full layout
              </span>
            </div>
          </div>

          {/* Bottom Bar with Full Screen Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 px-2 border-t border-border-light/80 mt-2">
            <span className="text-xs text-text-muted">
              * LP No: VMRDA Approved • Indicative plotted layout blueprint
            </span>
            <Button
              variant="outline-forest"
              size="sm"
              onClick={() => setLightboxOpen(true)}
              icon={<Maximize2 className="w-4 h-4" />}
            >
              View Full Screen
            </Button>
          </div>
        </div>

        {/* Master Plan Fullscreen Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={[
            {
              url: project.masterPlanImage,
              title: `${project.name} — Approved Master Plan Layout`,
            },
          ]}
          currentIndex={0}
        />
      </Container>
    </section>
  );
};

