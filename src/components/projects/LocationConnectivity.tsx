import React from 'react';
import { MapPin, Navigation2, Clock } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Project } from '../../types';

interface LocationConnectivityProps {
  project: Project;
}

export const LocationConnectivity: React.FC<LocationConnectivityProps> = ({ project }) => {
  return (
    <section id="location" className="py-14 sm:py-20 bg-offwhite border-t border-border-light">
      <Container>
        <SectionHeading
          eyebrow="STRATEGIC ADVANTAGE"
          title="Location & Connectivity"
          subtitle="Proximity to expressways, civic infrastructure, education corridors, and entertainment destinations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Map preview / embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[4px] border border-border-light overflow-hidden shadow-sm flex flex-col">
            <div className="p-3 bg-forest text-white flex items-center justify-between text-xs font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                {project.name} Location Map
              </span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(project.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light hover:underline text-[11px]"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="relative flex-1 min-h-[340px] bg-slate-100 overflow-hidden">
              {/* Interactive OpenStreetMap / Google Map iframe */}
              <iframe
                title={`${project.name} Location Map`}
                className="w-full h-full min-h-[340px] border-0"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(project.fullAddress)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                aria-label={`Interactive map of ${project.name}`}
              />
            </div>
          </div>

          {/* Right Column: Key Distances list (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-[4px] border border-border-light p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-light">
                <Navigation2 className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-lg font-medium text-forest">
                  Key Distances
                </h3>
              </div>

              <div className="space-y-3.5">
                {project.keyDistances.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-border-light/70 last:border-b-0 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-forest font-medium">{item.destination}</span>
                    </div>

                    <div className="flex items-center gap-2 text-right">
                      <span className="font-semibold text-gold bg-gold-pale px-2 py-0.5 rounded text-xs">
                        {item.distance}
                      </span>
                      {item.time && (
                        <span className="text-[11px] text-text-muted hidden sm:inline-flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          {item.time}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick connectivity note */}
            <div className="mt-6 p-3 bg-offwhite rounded-[3px] border border-border-light/80 text-[11px] text-text-muted leading-relaxed">
              📍 Free cab service for on-site property inspection available from Visakhapatnam city center upon booking an appointment.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

