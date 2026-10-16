import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/company';

export const OfficeVisitBanner: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 bg-forest overflow-hidden text-white">
      {/* Full-width modern architectural photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
          alt="Sri Parinithee Corporate Office"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-65"
        />
        {/* Dark forest overlay */}
        <div className="absolute inset-0 bg-forest/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest/80 to-transparent" />
      </div>

      <Container className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-forest-light/60 border border-gold/40 text-gold-light text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>CORPORATE HEADQUARTERS</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
          Visit Our Office
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-xl mx-auto font-light">
          Meet our team at our corporate office or schedule a site visit to explore our projects with our land planning specialists.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href={COMPANY_INFO.contact.googleMapsUrl}
            variant="gold"
            size="lg"
            icon={<Navigation className="w-4 h-4" />}
          >
            Get Directions
          </Button>

          <Button
            to="/contact"
            variant="outline-white"
            size="lg"
          >
            Contact Details
          </Button>
        </div>
      </Container>
    </section>
  );
};

