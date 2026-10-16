import React from 'react';
import { Home as HomeIcon, Compass } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 bg-offwhite min-h-[60vh] flex items-center justify-center text-center">
      <Container size="sm">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-3 block">
          404 ERROR
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest mb-4">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-text-muted max-w-md mx-auto mb-8 leading-relaxed">
          The property page or layout you are looking for might have been moved, updated, or is no longer accessible.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/"
            variant="gold"
            size="md"
            icon={<HomeIcon className="w-4 h-4" />}
            iconPosition="left"
          >
            Return Home
          </Button>

          <Button
            to="/projects"
            variant="outline-forest"
            size="md"
            icon={<Compass className="w-4 h-4" />}
            iconPosition="left"
          >
            Explore Projects
          </Button>
        </div>
      </Container>
    </div>
  );
};

