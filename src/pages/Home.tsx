import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AboutPreview } from '../components/home/AboutPreview';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { LeadershipPreview } from '../components/home/LeadershipPreview';
import { ProjectUpdates } from '../components/home/ProjectUpdates';
import { OfficeVisitBanner } from '../components/home/OfficeVisitBanner';
import { Testimonials } from '../components/home/Testimonials';
import { FinalCta } from '../components/home/FinalCta';
import { PROJECTS } from '../data/projects';
import { Button } from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section + Statistics Strip */}
      <HeroSection />

      {/* 2. About Sri Parinithee Preview */}
      <AboutPreview />

      {/* 3. Featured Projects */}
      <section className="py-16 md:py-24 bg-white border-t border-border-light">
        <Container>
          <SectionHeading
            eyebrow="PREMIUM PLOTTED DEVELOPMENTS"
            title="Our Projects"
            subtitle="Explore our thoughtfully planned projects in prime locations with modern infrastructure and excellent connectivity."
          />

          <ProjectGrid projects={PROJECTS} />

          <div className="text-center mt-12">
            <Button
              to="/projects"
              variant="outline-forest"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Developments
            </Button>
          </div>
        </Container>
      </section>

      {/* 4. Why Choose Sri Parinithee? */}
      <WhyChooseUs />

      {/* 5. Directors & Leadership Preview */}
      <LeadershipPreview />

      {/* 6. Latest Project Updates */}
      <ProjectUpdates />

      {/* 7. Visit Our Office Banner */}
      <OfficeVisitBanner />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Final CTA */}
      <FinalCta />
    </div>
  );
};

