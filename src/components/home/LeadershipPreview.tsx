import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { DIRECTORS } from '../../data/directors';

export const LeadershipPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="MEET THE VISIONARIES"
          title="Directors & Leadership"
          subtitle="Experienced leadership guiding thoughtful land planning, legal precision, and superior infrastructure execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {DIRECTORS.map((director) => (
            <div
              key={director.id}
              className="bg-offwhite rounded-[4px] border border-border-light overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Director Portrait */}
              <div className="aspect-[4/3] overflow-hidden bg-forest-dark relative">
                <img
                  src={director.image}
                  alt={director.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-forest mb-1">
                    {director.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold block mb-3">
                    {director.role}
                  </span>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-3 mb-4">
                    {director.shortBio}
                  </p>
                </div>

                <div className="pt-2 border-t border-border-light/70">
                  <Link
                    to="/directors"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold hover:text-forest transition-colors group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

