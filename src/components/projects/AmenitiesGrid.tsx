import React from 'react';
import {
  Car,
  Pipette,
  Lightbulb,
  Trees,
  Flower2,
  Droplets,
  Fence,
  ShieldCheck,
  LucideIcon,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Project } from '../../types';

interface AmenitiesGridProps {
  project: Project;
}

const iconMap: Record<string, LucideIcon> = {
  roads: Car,
  drainage: Pipette,
  lighting: Lightbulb,
  parks: Trees,
  plantation: Flower2,
  water: Droplets,
  compound: Fence,
  security: ShieldCheck,
};

export const AmenitiesGrid: React.FC<AmenitiesGridProps> = ({ project }) => {
  return (
    <section id="amenities" className="py-14 sm:py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="COMMUNITY AMENITIES"
          title="Amenities & Infrastructure"
          subtitle="Engineered with modern civic amenities to ensure enduring comfort, safety, and healthy community living."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-3">
          {project.amenities.map((amenity) => {
            const Icon = iconMap[amenity.id] || Trees;

            return (
              <div
                key={amenity.id}
                className="bg-offwhite hover:bg-gold-pale/50 border border-border-light hover:border-gold/50 rounded-[4px] p-4 text-center flex flex-col items-center justify-center transition-all duration-300 group shadow-2xs hover:shadow-sm"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full border border-gold/40 bg-white flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-300 mb-3">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>

                <h3 className="text-xs font-semibold text-forest leading-tight group-hover:text-gold transition-colors">
                  {amenity.name}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

