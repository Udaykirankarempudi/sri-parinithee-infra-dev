import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { useModal } from '../../context/ModalContext';

export const FinalCta: React.FC = () => {
  const { openEnquiry } = useModal();

  return (
    <section className="py-16 md:py-20 bg-forest text-white border-t border-forest-light relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89A42_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <Container className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-3">
          Ready to Invest in Your Future?
        </h2>

        <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-xl mx-auto">
          Get in touch with our team for project details, pricing, layout approvals, and complimentary site visits.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="gold"
            size="lg"
            onClick={() => openEnquiry()}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Submit Now
          </Button>

          <Button
            to="/projects"
            variant="outline-white"
            size="lg"
          >
            Explore Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};

