import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Project } from '../../types';
import { COMPANY_INFO } from '../../data/company';
import { useModal } from '../../context/ModalContext';

interface ProjectEnquiryProps {
  project: Project;
}

export const ProjectEnquiry: React.FC<ProjectEnquiryProps> = ({ project }) => {
  const { openEnquiry } = useModal();

  return (
    <section id="enquiry" className="py-16 md:py-20 bg-forest text-white border-t border-forest-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#C89A42_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <Container className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-3">
          Interested in {project.name}?
        </h2>

        <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-xl mx-auto">
          Get detailed information, pricing, plot availability map and a site visit schedule from our property advisory team.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href={`tel:${COMPANY_INFO.contact.phones[0]}`}
            variant="outline-white"
            size="lg"
            icon={<Phone className="w-4 h-4" />}
          >
            Call Now
          </Button>

          <Button
            variant="gold"
            size="lg"
            onClick={() => openEnquiry(project.name)}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Enquire Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

