import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { PROJECT_UPDATES } from '../../data/updates';

export const ProjectUpdates: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-offwhite">
      <Container>
        <SectionHeading
          title="Latest Project Updates"
          subtitle="Real-time on-ground progress tracking across our ongoing and upcoming developments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECT_UPDATES.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-[4px] border border-border-light overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Landscape Image */}
              <div className="aspect-[16/10] overflow-hidden bg-forest-dark relative">
                <img
                  src={update.image}
                  alt={update.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-xs bg-forest/90 text-gold-light border border-gold/30 backdrop-blur-xs">
                    <Tag className="w-2.5 h-2.5 text-gold" />
                    {update.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Project name & Date */}
                  <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                    <Link
                      to={`/projects/${update.projectSlug}`}
                      className="font-medium text-forest hover:text-gold transition-colors"
                    >
                      {update.project}
                    </Link>
                    <span className="inline-flex items-center gap-1 text-[11px] text-text-muted">
                      <Calendar className="w-3 h-3 text-gold" />
                      {update.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-forest mb-2 leading-snug group-hover:text-gold transition-colors">
                    <Link to={`/projects/${update.projectSlug}`}>
                      {update.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-3">
                    {update.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

